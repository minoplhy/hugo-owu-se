+++
title = "WireGuard as IPv6 Tunnel with 1:1 Port Forwarding"
date = "2025-06-20T15:39:13+00:00"
slug = "wireguard-as-ipv6-tunnel"

#
# lastmod is optional
#
# lastmod = "Timestamp that you edit this blog"

#
# description is optional
#
description = ""
images = ["/images/blog/wireguard-as-ipv6-tunnel/graph1.png"]

tags = ["blog","network","wireguard",]
+++

It's quite unbelievable that in this era of the 25th and most part of the world still doesn't have IPv6 working[^IPv6 Coverage], either intentionally or technology limitation. But anyways, nerds like you reader and me sure need dualstack right??....right?

**`¯\_(ツ)_/¯`** Welp If you are, then you're at the right place!

This blog will cover on topics of:
* IPv4 -> IPv6 Tunnel using WireGuard
* WireGuard 1:1 IPv6 port forwarding using `iptables`

**TLDR** Full Configuration at the bottom

![graph.png](/images/blog/wireguard-as-ipv6-tunnel/graph1.png)

# Prepare the HOST's system

## Requirements

* VPS or whatever with DualStack
    * Preferably **low latency** to your client
    * In Theory VPS with **NAT IPv4** should be **working** too, tho i didn't attempt this yet
* Secondary IPv6 address dedicated for WireGuard Client


## Setup secondary IPv6 Address

Add the **additional** IPv6 Address **alongside** your main one, if your provider **doesn't give you more than 1 IPv6 Address** by default(sad) please check on your provider's panel on the **information about the additional address** or **to assign them**
{{< code_expand >}}
iface eth0 inet6 static
        address <hugo_red_highlight>PublicIPv6Address</hugo_red_highlight>::1/64 # Main IPv6 Address(::1 this example)
        address <hugo_red_highlight>PublicIPv6Address</hugo_red_highlight>::<hugo_red_highlight>ClientAddress</hugo_red_highlight>/64 # Client IP
        gateway <hugo_red_highlight>IPv6Gateway</hugo_red_highlight>
{{< /code_expand >}}

**PS.** while this blog mainly focuses on `/etc/network/interfaces` but regardless of netplan or whatever you're using. There shouldn't be a significants differences between configuration

# Basic WireGuard Setup

I know this part is quite boring as most people would expect the finished or completed version but i made it almost step by step to make people understand how it's work and atleast aware of what they're doing

We'll start by a simple standard WireGuard setup like this **AKA the basic version**

And in this tutorial, i assigned `10.10.0.1/24` and `fd10:10:10::1/64` to be a **WireGuard interface's IP Address**

## Host's :

`net.ipv6.conf.all.forwarding` is set to `1` to allow forwarding IPv6 packets cross interfaces[^Cross Interface], which make it possible for WireGuard Client to access internet via Host's Network AKA **VPN for general internet activity**

and assigned `10.10.0.4` and `fd10:10:10::123` to be "Client A" Addrress then filled the RED highlighted with respective **Host's PrivateKey** and **Client's PublicKey**

{{< code_expand >}}
[Interface]
Address = 10.10.0.1/24, fd10:10:10::1/64
ListenPort = 51820
PrivateKey = <hugo_red_highlight>Server_PrivateKey</hugo_red_highlight>

# IPv6 forwarding
PreUp = sysctl -w net.ipv6.conf.all.forwarding=1

# client A
[Peer]
PublicKey = <hugo_red_highlight>Client_PublicKey</hugo_red_highlight>
AllowedIPs = 10.10.0.4/32, fd10:10:10::123/64
{{< /code_expand >}}

## Client's :

Now to the Client part, we set Address to `10.10.0.4` and `fd10:10:10::123` as we assigned in the Server

We set `AllowedIPs` to `::/0` which is basically all IPv6, to **route all IPv6 traffic(in this `::/0` scenario)** via secure WireGuard tunnel **to remote server which is defined by the `endpoint` section**

The `PersistentKeepalive` is set to make Peer behind NAT or FireWall to be reachable by another peers[^Keep Alive]

then filled the RED highlighted with respective **Client's PrivateKey** and **Host's PublicKey**

{{< code_expand >}}
[Interface]
Address = 10.10.0.4/24, fd10:10:10::123/64
DNS = 1.1.1.1, 1.0.0.1
PrivateKey = <hugo_red_highlight>Client_PrivateKey</hugo_red_highlight>

[Peer]
PublicKey = <hugo_red_highlight>Server_publicKey</hugo_red_highlight>
AllowedIPs = ::/0
Endpoint = <hugo_red_highlight>EndPoint</hugo_red_highlight>
PersistentKeepalive = 25
{{< /code_expand >}}

# Port Forwarding

As you may notice in the Basic WireGuard Setup part `net.ipv6.conf.all.forwarding=1` is set to allow forwarding IPv6 packets cross interfaces[^Cross Interface] Which might be enough for some, but if we wanted to allow Port Forwarding from Client? This part we'll right into it!

## Mark packets

in Iptables, we can mark packets using MARK target in the mangle table for traffic filtering purposes which we'll use this to manage our traffic in later stage.[^Marking Traffic]

In this case, we'll mark traffic into our wireguard interface with `0x30` but you can change it to whatever you like

**PS.** we might see `%i` in ip6tables rules, this is copied from WireGuard configuration where interface name is supplied by WireGuard itself, so, please don't forget to replace the interface name if you're going to use it anywhere else

#### Add
{{< code_expand >}}
ip6tables -t mangle -A PREROUTING -i <hugo_red_highlight>%i</hugo_red_highlight> -j MARK --set-mark 0x30
{{< /code_expand>}}
#### Delete
{{< code_expand >}}
ip6tables -t mangle -D PREROUTING -i <hugo_red_highlight>%i</hugo_red_highlight> -j MARK --set-mark 0x30
{{< /code_expand>}}

## 1:1 Port Forwarding

here's the fun part.....or the part you're waiting for idk but anyways

### READ More -> POST/PRE ROUTING graph for nerds: [Link](https://web.archive.org/web/20091024060138/https://www.frozentux.net/iptables-tutorial/chunkyhtml/c962.html) via [linuxquestions](https://www.linuxquestions.org/questions/linux-security-4/prerouting-and-postrouting-887333/)

### SNAT

Rewrite Source Address for **MARKED** traffic to `Public_IPv6` before the packet leaves via any interface except the WireGuard interface, this is where **the traffic marker become useful**

#### Add
{{< code_expand >}}
ip6tables -t nat -A POSTROUTING ! -o <hugo_red_highlight>%i</hugo_red_highlight> -m mark --mark 0x30 -j SNAT --to-source <hugo_red_highlight>Public_IPv6</hugo_red_highlight>
{{</ code_expand >}}
#### Delete
{{< code_expand >}}
ip6tables -t nat -D POSTROUTING ! -o <hugo_red_highlight>%i</hugo_red_highlight> -m mark --mark 0x30 -j SNAT --to-source <hugo_red_highlight>Public_IPv6</hugo_red_highlight>
{{</ code_expand >}}

### DNAT

FORWARD **IN** traffic into `Public_IPv6` via `network_interface`(eth0 in most case) to Client's WireGuard interface IP, which is `fd10:10:10::123`

#### Add
{{< code_expand >}}
ip6tables -t nat -A PREROUTING -i <hugo_red_highlight>network_interface(eth0 etc.)</hugo_red_highlight> -d <hugo_red_highlight>Public_IPv6</hugo_red_highlight> -j DNAT --to-destination fd10:10:10::123
{{< /code_expand>}}
#### Delete
{{< code_expand >}}
ip6tables -t nat -D PREROUTING -i <hugo_red_highlight>network_interface(eth0 etc.)</hugo_red_highlight> -d <hugo_red_highlight>Public_IPv6</hugo_red_highlight> -j DNAT --to-destination fd10:10:10::123
{{</ code_expand >}}

## (Optional) Specific Port Forward

In case you don't want to 1:1 Port Forwarding and instead, just wanted to forward a specific port to `Public_IPv6`

### SNAT

Rewrite source address for marked traffic same as above but only for `PORT`

#### Add
{{< code_expand >}}
ip6tables -t nat -A POSTROUTING ! -o <hugo_red_highlight>%i</hugo_red_highlight> -m mark --mark 0x30 -p <hugo_red_highlight>protocol(tcp/udp)</hugo_red_highlight> --sport <hugo_red_highlight>PORT</hugo_red_highlight> -j SNAT --to-source <hugo_red_highlight>Public_IPv6</hugo_red_highlight>
{{< /code_expand>}}
#### Delete
{{< code_expand >}}
ip6tables -t nat -D POSTROUTING ! -o <hugo_red_highlight>%i</hugo_red_highlight> -m mark --mark 0x30 -p <hugo_red_highlight>protocol(tcp/udp)</hugo_red_highlight> --sport <hugo_red_highlight>PORT</hugo_red_highlight> -j SNAT --to-source <hugo_red_highlight>Public_IPv6</hugo_red_highlight>
{{</ code_expand >}}

### DNAT

FORWARD **IN** traffic into `Public_IPv6` via `network_interface` like above but just for `PORT` and to `[fd10:10:10::123]`:`PORT`

#### Add
{{< code_expand >}}
ip6tables -t nat -A PREROUTING -i <hugo_red_highlight>network_interface(eth0 etc.)</hugo_red_highlight> -d <hugo_red_highlight>Public_IPv6</hugo_red_highlight> -p tcp --dport <hugo_red_highlight>PORT</hugo_red_highlight> -j DNAT --to-destination [fd10:10:10::123]:<hugo_red_highlight>PORT</hugo_red_highlight>
{{< /code_expand>}}

#### Delete
{{< code_expand >}}
ip6tables -t nat -D PREROUTING -i <hugo_red_highlight>network_interface(eth0 etc.)</hugo_red_highlight> -d <hugo_red_highlight>Public_IPv6</hugo_red_highlight> -p tcp --dport <hugo_red_highlight>PORT</hugo_red_highlight> -j DNAT --to-destination [fd10:10:10::123]:<hugo_red_highlight>PORT</hugo_red_highlight>
{{< /code_expand>}}

{{< rawhtml >}}
<br><br>
{{< /rawhtml >}}

# Full Configuration:
Don't want to read all those yapping? just copy configuration below :D

#### Server
{{< code_expand >}}
[Interface]
Address = 10.10.0.1/24, fd10:10:10::1/64
ListenPort = 51820
PrivateKey = <hugo_red_highlight>Server_PrivateKey</hugo_red_highlight>

# IPv6 forwarding
PreUp = sysctl -w net.ipv6.conf.all.forwarding=1
# IPv6 masquerading
PreUp = ip6tables -t mangle -A PREROUTING -i %i -j MARK --set-mark 0x30
PreUp = ip6tables -t nat -A POSTROUTING ! -o %i -m mark --mark 0x30 -j SNAT --to-source <hugo_red_highlight>Public_IPv6</hugo_red_highlight>
PreUp = ip6tables -t nat -A PREROUTING -i <hugo_red_highlight>network_interface(eth0 etc.)</hugo_red_highlight> -d <hugo_red_highlight>Public_IPv6</hugo_red_highlight> -j DNAT --to-destination fd10:10:10::123
PostDown = ip6tables -t mangle -D PREROUTING -i %i -j MARK --set-mark 0x30
PostDown = ip6tables -t nat -D POSTROUTING ! -o %i -m mark --mark 0x30 -j SNAT --to-source <hugo_red_highlight>Public_IPv6</hugo_red_highlight>
PostDown = ip6tables -t nat -D PREROUTING -i <hugo_red_highlight>network_interface(eth0 etc.)</hugo_red_highlight> -d <hugo_red_highlight>Public_IPv6</hugo_red_highlight> -j DNAT --to-destination fd10:10:10::123

# client A
[Peer]
PublicKey = <hugo_red_highlight>Client_PublicKey</hugo_red_highlight>
AllowedIPs = 10.10.0.4/32, fd10:10:10::123/64
{{< /code_expand >}}

#### Client
{{< code_expand >}}
[Interface]
Address = 10.10.0.4/24, fd10:10:10::123/64
DNS = 1.1.1.1, 1.0.0.1
PrivateKey = <hugo_red_highlight>Client_PrivateKey</hugo_red_highlight>

[Peer]
PublicKey = <hugo_red_highlight>Server_publicKey</hugo_red_highlight>
AllowedIPs = ::/0
Endpoint = <hugo_red_highlight>EndPoint</hugo_red_highlight>
PersistentKeepalive = 25
{{< /code_expand >}}

[^IPv6 Coverage]: https://stats.labs.apnic.net/ipv6
[^Cross Interface]: https://www.kernel.org/doc/html/latest/networking/ip-sysctl.html
[^Keep Alive]: https://wiki.archlinux.org/title/WireGuard#Unable_to_establish_a_persistent_connection_behind_NAT_/_firewall
[^Marking Traffic]: https://tldp.org/HOWTO/Adv-Routing-HOWTO/lartc.netfilter.html