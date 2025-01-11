+++
title = "Fuck U! accept_ra"
date = "2025-01-11T20:10:37+07:00"
description = "notice a strange IPv6 on Alpine Linux?, you're cooked. READ MORE"
slug = "fuck-you-accept-ra"

#
# lastmod is optional
#
# lastmod = "Timestamp that you edit this blog"

#
# description is optional
#
# description = "An optional description for SEO. If not provided, an automatically created summary will be used."

images = ["/images/blog/fuck-you-accept-ra/banner.avif"]
tags = ["blog","opinion","rant",]
+++

Hello internet,

I decided to write this as a first blog of 2025(HNY🎉) because i spent last fucking week, figuring out what happens with IPv6 on one of my VPS. I don't know if i should call this an **edge**-case or not, because i never have problems like this with any one of vps before, I'll tell you more...

**TLDR; FUCK YOU accept_ra!**

## What an actual fuck happens?

Welp, I got new VPS. and i'm enthusiastic with Alpine Linux lately(I❤️Alpine Linux btw). and what does person when enthusiastic with things especially linux distros, did first? you don't have to guess, fucking bootup Alpine Linux Live CD right away!

ok, here's when i got confused, i got stuck in `setup-alpine` wtf happens? i already config interfaces why i was able to connect to the internet and now its not? here's what `ip -6 a` looks like:
```
    inet6 [SUBNET]::216:3eff:fed6:8612/64 scope global dynamic flags 100 
    inet6 [SUBNET]::[INTENDED IPv6] scope global 
    inet6 [LOCAL SUBNET]::216:3eff:fed6:8612/64 scope link 
```

notice something strange? yea, the strange IPv6 is on the same subnet as my INTENDED IPv6 and also share the same address if not subnet, with local Subnet.

B-But! given that the strange IPv6 is dynamics, this's definitely Router Announcement problem, how's this sill happens????! here's mine `/etc/network/interfaces` for inet6:
```
iface eth0 inet6 static
        address [SUBNET]::[INTENDED IPv6]
        gateway [SUBNET]::1
        netmask 112
        accept_ra 0
```

So, I ticketed the provider regarding issue, but they can't find the cause, cause they can only reproduce this problem only on Alpine Linux😭😭 plus this problem is only reproducible on the REGION that i'm in only!

Which is also true, I've tested on 3 VM of the same provider. 2 on the same REGION and 1 on the different REGION, and yes, this issue can only reproduce on those 2 VM that's in the same REGION.

I digged down deeper, and found that to reproduce this issue, you just bring `eth0` interface device up: `ip link set eth0 up`. and it's fucking there:
```
    inet6 [SUBNET]::216:3eff:fed6:8612/64 scope global dynamic flags 100 
    inet6 [LOCAL SUBNET]::216:3eff:fed6:8612/64 scope link 
```

WTF??? i never face an issue like this before with any distros and on any providers before.

## And how i fix this mess up?
I've start reading Docs and Wiki, which i haven't before. And i found this on [Alpine Linux Wiki](https://wiki.alpinelinux.org/wiki/Configure_Networking#IPv6_Static_Address_Configuration).

Its turn out that `/etc/network/interfaces` doesn't recognize `accept_ra` which i using it on my `/etc/network/interfaces` currently.

#### TO DISABLE ACCEPTING ROUTER ANNOUNCEMENT:
```
iface eth0 inet6 static
    ..
    pre-up echo 0 > /proc/sys/net/ipv6/conf/eth0/accept_ra
```
([source](https://wiki.alpinelinux.org/wiki/Configure_Networking#IPv6_Static_Address_Configuration))

this really fix the issue i'm trying to fix for a fucking week!

okok, what abt Live CD? i mean `setup-interfaces` doesn't support IPv6 yet, but this issue can also happens on Live CD too, how's to fix then?

#### ON LIVE CD THEN?
```
echo 0 > /proc/sys/net/ipv6/conf/eth0/accept_ra
rc-service networking restart
```

if this still doesn't fix, you're **cooked**! still there's a workaround, you can try if you're brave enough :).

#### WORKAROUNDS
```
ip -6 route del default via <Gateway IPv6> dev eth0
ip -6 route add <your ipv6 ip> dev eth0 metric 66
ip -6 route add <Gateway IPv6> dev eth0 metric 65
ip -6 route add default via <Gateway IPv6> dev eth0 src <your ipv6 ip> metric 1
```

This workaround required a working IPv6 address.

This will remove default route(if exist, check with `ip -6 r l`, look for `default via <Gateway IPv6> metric XX` if not, you can simply ignore the first line) and force all route(`::0/0`) to route via `<Gateway IPv6>` with `<your ipv6 ip>`.

So, the strange ipv6 address will not dissapear but all route will be force to route via your preferred ipv6 ip.

I know this is dirty but its usable 😄

{{< rawhtml >}}
<br>
<hr>
{{< /rawhtml >}}
# This is my fault, anyways, FUCK YOU accept_ra!

![bye gif](/images/blog/fuck-you-accept-ra/banner.avif)