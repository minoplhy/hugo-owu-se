+++
title = "Docker Networking Nightmare and UFW can't help you ;-;"
date = "2024-07-22T22:30:00+07:00"
slug = "docker-networking-nightmare"

#
# lastmod is optional
#
# lastmod = "Timestamp that you edit this blog"

#
# description is optional
#
description = "Docker networking just fuck me hard dude."

images = ["/images/blog/docker-networking-nightmare/banner.png"]
tags = ["blog","docker", "security", ]
+++

Guys, Docker just fuck me up real hard ;-;

Realizing that my docker-based application has been open-naked to the public for months is fucked up dude.

Here is the breakdown of what happen and why and how to fix this.

7 Jul, I was casually browsing on [shodan.io](https://shodan.io) and tried one of my server IP addresses and it turned out that I have port 4040 opened. I even set my UFW rule to deny all that's not whitelisted.

So, I reviewed all my docker-based service, and it turned out that all my docker services are reachable by the internet **UNRESTRICTED**

![Panic Docker banner](/images/blog/docker-networking-nightmare/banner.png)

# What Wrong?
we're talking about Docker Compose here's what docker-compose.yml usually looks like:

```yaml
services:
  app:
    image: xxx
    ports:
      - "4040:4040"
    volumes:
      - .:/app
```

this configuration will expose ports to the internet through `0.0.0.0:4040`and nothing like UFW can prevent it from exposing to the internet.
because Docker is directly making changes on the Iptables level.

This is pretty serious in that it might unintentionally expose sensitive services that should not be exposed to the internet, exposed to the internet. **without restriction**.

# Why?

referring to [Docker Docs](https://docs.docker.com/network/packet-filtering-firewalls/#docker-and-ufw), traffic from/to containers is routed before INPUT/OUTPUT rules apply. This bypass all rules `"effectively ignoring your firewall configuration."`

# How to fix
There are multiple ways to prevent Docker from exposing ports to the internet.

### 1. The most recommended way (by most **tech** websites) is to disable iptables for docker entirely
by editing `/etc/docker/daemon.json` to disable it by:
```json
{
  "iptables" : false 
}
````
I've tried this method and sadly doesn't work. also, [Docker Docs](https://docs.docker.com/network/packet-filtering-firewalls/#prevent-docker-from-manipulating-iptables) Recommend against this method quote `"It is likely to break container networking for the Docker Engine"`

### 2. Next up, "[User-defined networks](https://docs.docker.com/network/#user-defined-networks)".

You just need to create a network driver and use this network driver to communicate with another Docker Container.

Tho, this is recommended if you are just going to use your docker container internally or between docker containers.

Excerpt from Archivebox [Docker-compose.yml](https://raw.githubusercontent.com/ArchiveBox/ArchiveBox/dev/docker-compose.yml) here's what User-defined networks looks like:
```yaml
# using network driver name "dns" and set dns address to "172.20.0.53" for the "main" the container
services:
  archivebox:
        image: archivebox/archivebox:latest
        ports:
            - 8000:8000
        networks:
         - dns
        dns:
         - 172.20.0.53

# Setup IPv4 address for pi-hole container
  pihole:
        image: pihole/pihole:latest
        networks:
        dns:
          ipv4_address: 172.20.0.53

# Network driver setup
networks:
    # network just used for pihole container to offer :53 dns resolving on fixed ip for archivebox container
    # Learn more : https://docs.docker.com/compose/networking/
    dns:
        ipam:
            driver: default
            config:
                - subnet: 172.20.0.0/24 # Here is subnet for internal Docker Network ip address
```

### 3. Publish port cautiously on specified network Interfaces

This method is the easiest way, you just have to specify your network interfaces when config your docker-compose.yml

for example, you need to forward port `4040` of your host to `8080` on the docker host:

```yaml
    ports:
    - "127.0.0.1:4040:8080"
```
This will exposing your docker container on port `8080` to `127.0.0.1:4000` on your local network, **NOT THE INTERNET!**

# What I Learned from the incident
First, internet scanners like [shodan](https://shodan.io)/[censys](https://censys.io) are very useful for detecting an accidental expose.

Second, Never trust certain software too much! this is really important in this case i trusted UFW's ability to block traffic so much that I didn't even ever check for port leaks. So, this simple issue remain under radar for **years**!

Aside from that don't forget to check your `docker-compose.yml` file when hosting new software for potential port leaks, because most docker-focused projects would always(if not mostly) expose their service to the internet via something like `4040:4040` in their default `docker-compose.yml` file.

![Panic Yuru Camp banner, stolen from tenor](/images/blog/docker-networking-nightmare/yuru_camp_insert.gif)

#### And now your service should be safe from an unwanted attention!

# References:
- [https://stackoverflow.com/questions/30383845/what-is-the-best-practice-of-docker-ufw-under-ubuntu](https://stackoverflow.com/questions/30383845/what-is-the-best-practice-of-docker-ufw-under-ubuntu)

- [https://stackoverflow.com/questions/73916855/ufw-seems-not-to-block-all-ports-ubuntu-with-docker](https://stackoverflow.com/questions/73916855/ufw-seems-not-to-block-all-ports-ubuntu-with-docker)

- [https://github.com/chaifeng/ufw-docker](https://github.com/chaifeng/ufw-docker)

- [https://forums.docker.com/t/running-multiple-docker-containers-with-ufw-and-iptables-false/8953](https://forums.docker.com/t/running-multiple-docker-containers-with-ufw-and-iptables-false/8953)

*Note: this is the longest article I have written in years, if anyone has a comment please leave one! via My E-Mail or [GitHub issue](https://github.com/minoplhy/hugo-owu-se/issues)!*