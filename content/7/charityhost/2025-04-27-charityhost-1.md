+++
title = "CharityHost.org TX, US 1C/1G/20G/1T"
date = 2025-04-26T23:39:34+00:00
slug = "charityhost-1"

lastmod = 2025-04-17T01:00:00+00:00

description = "The VPS Benchmark of CharityHost.org TX, US 1C/1G/20G/1T"
type = "blog"
+++

##### Plan -> VPS SSD 1 [Link](https://charityhost.org/account/store/vps-ssd-highmem/vps-ssd-1/)

{{< vps_specs
cpu_core="1"
ram_total="1GB"
storage_total="20GB"
traffic_limit="1TB"
traffic_type="IN+OUT"
traffic_speed="1Gbps"
>}}

{{< vps_location
asn="40156"
asn_name="The Optimal Link Corporation"
country="US"
city="Texas"
>}}

{{< vps_info
cpu="Intel(R) Xeon(R) CPU E5-2699 v4 @ 2.20GHz"
aesni="yes"
virt="VT-x"
hypervisor="kvm"
memory_total="960Mi"
memory_read="4832.44 MiB/sec"
memory_write="4199.54 MiB/sec"
disk_total="20G"
>}}

{{< network_upstream >}}
AS3356 'Lumen (Level 3)'
AS174 'Cogent Communications'
{{< /network_upstream >}}

{{< spoil_group title="lscpu">}}
{{< spoil_subgroup date="2025-04-27" >}}
Architecture:                         x86_64
CPU op-mode(s):                       32-bit, 64-bit
Address sizes:                        46 bits physical, 48 bits virtual
Byte Order:                           Little Endian
CPU(s):                               1
On-line CPU(s) list:                  0
Vendor ID:                            GenuineIntel
BIOS Vendor ID:                       QEMU
Model name:                           Intel(R) Xeon(R) CPU E5-2699 v4 @ 2.20GHz
BIOS Model name:                      pc-i440fx-8.2  CPU @ 2.0GHz
BIOS CPU family:                      1
CPU family:                           6
Model:                                79
Thread(s) per core:                   1
Core(s) per socket:                   1
Socket(s):                            1
Stepping:                             1
BogoMIPS:                             4399.96
Flags:                                fpu vme de pse tsc msr pae mce cx8 apic sep mtrr pge mca cmov pat pse36 clflush mmx fxsr sse sse2 ss syscall nx pdpe1gb rdtscp lm constant_tsc arch_perfmon rep_good nopl xtopology cpuid tsc_known_freq pni pclmulqdq vmx ssse3 fma cx16 pdcm pcid sse4_1 sse4_2 x2apic movbe popcnt tsc_deadline_timer aes xsave avx f16c rdrand hypervisor lahf_lm abm 3dnowprefetch cpuid_fault invpcid_single pti ssbd ibrs ibpb stibp tpr_shadow vnmi flexpriority ept vpid ept_ad fsgsbase tsc_adjust bmi1 hle avx2 smep bmi2 erms invpcid rtm rdseed adx smap xsaveopt arat umip md_clear flush_l1d arch_capabilities
Virtualization:                       VT-x
Hypervisor vendor:                    KVM
Virtualization type:                  full
L1d cache:                            32 KiB (1 instance)
L1i cache:                            32 KiB (1 instance)
L2 cache:                             256 KiB (1 instance)
L3 cache:                             55 MiB (1 instance)
NUMA node(s):                         1
NUMA node0 CPU(s):                    0
Vulnerability Gather data sampling:   Not affected
Vulnerability Itlb multihit:          Not affected
Vulnerability L1tf:                   Mitigation; PTE Inversion; VMX flush not necessary, SMT disabled
Vulnerability Mds:                    Mitigation; Clear CPU buffers; SMT Host state unknown
Vulnerability Meltdown:               Mitigation; PTI
Vulnerability Mmio stale data:        Mitigation; Clear CPU buffers; SMT Host state unknown
Vulnerability Reg file data sampling: Not affected
Vulnerability Retbleed:               Not affected
Vulnerability Spec rstack overflow:   Not affected
Vulnerability Spec store bypass:      Mitigation; Speculative Store Bypass disabled via prctl
Vulnerability Spectre v1:             Mitigation; usercopy/swapgs barriers and __user pointer sanitization
Vulnerability Spectre v2:             Mitigation; Retpolines; IBPB conditional; IBRS_FW; STIBP disabled; RSB filling; PBRSB-eIBRS Not affected; BHI Retpoline
Vulnerability Srbds:                  Not affected
Vulnerability Tsx async abort:        Mitigation; Clear CPU buffers; SMT Host state unknown
{{< /spoil_subgroup >}}
{{< /spoil_group >}}

{{< spoil_group title="yabs">}}
{{< spoil_subgroup date="2025-04-27" >}}
# ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## #
#              Yet-Another-Bench-Script              #
#                     v2025-04-20                    #
# https://github.com/masonr/yet-another-bench-script #
# ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## #

Sat Apr 26 07:29:36 AM EDT 2025

Basic System Information:
---------------------------------
Uptime     : 0 days, 0 hours, 3 minutes
Processor  : Intel(R) Xeon(R) CPU E5-2699 v4 @ 2.20GHz
CPU cores  : 1 @ 2199.984 MHz
AES-NI     : ✔ Enabled
VM-x/AMD-V : ✔ Enabled
RAM        : 960.7 MiB
Swap       : 0.0 KiB
Disk       : 19.6 GiB
Distro     : Debian GNU/Linux 12 (bookworm)
Kernel     : 6.1.0-31-amd64
VM Type    : KVM
IPv4/IPv6  : ✔ Online / ✔ Online

IPv6 Network Information:
---------------------------------
ISP        : The Optimal Link Corp / Oplink.net
ASN        : AS40156 The Optimal Link Corporation
Host       : NeoTechAdmin LLC
Location   : Spring, Texas (TX)
Country    : United States

fio Disk Speed Tests (Mixed R/W 50/50) (Partition /dev/vda1):
---------------------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------   | ---            ----  | ----           ---- 
Read       | 169.69 MB/s  (42.4k) | 987.09 MB/s  (15.4k)
Write      | 170.14 MB/s  (42.5k) | 992.28 MB/s  (15.5k)
Total      | 339.83 MB/s  (84.9k) | 1.97 GB/s    (30.9k)
           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------   | ---            ----  | ----           ---- 
Read       | 1.02 GB/s     (2.0k) | 999.78 MB/s    (976)
Write      | 1.08 GB/s     (2.1k) | 1.06 GB/s     (1.0k)
Total      | 2.10 GB/s     (4.1k) | 2.06 GB/s     (2.0k)

iperf3 Network Speed Tests (IPv4):
---------------------------------
Provider        | Location (Link)           | Send Speed      | Recv Speed      | Ping           
-----           | -----                     | ----            | ----            | ----           
Clouvider       | London, UK (10G)          | 598 Mbits/sec   | 501 Mbits/sec   | 102 ms         
Eranium         | Amsterdam, NL (100G)      | 471 Mbits/sec   | 485 Mbits/sec   | 117 ms         
Uztelecom       | Tashkent, UZ (10G)        | 420 Mbits/sec   | 326 Mbits/sec   | 209 ms         
Leaseweb        | Singapore, SG (10G)       | 393 Mbits/sec   | 500 Mbits/sec   | 208 ms         
Clouvider       | Los Angeles, CA, US (10G) | 658 Mbits/sec   | 631 Mbits/sec   | 44.8 ms        
Leaseweb        | NYC, NY, US (10G)         | 670 Mbits/sec   | 534 Mbits/sec   | 39.1 ms        
Edgoo           | Sao Paulo, BR (1G)        | 431 Mbits/sec   | 479 Mbits/sec   | 166 ms         

iperf3 Network Speed Tests (IPv6):
---------------------------------
Provider        | Location (Link)           | Send Speed      | Recv Speed      | Ping           
-----           | -----                     | ----            | ----            | ----           
Clouvider       | London, UK (10G)          | 544 Mbits/sec   | 516 Mbits/sec   | 101 ms         
Eranium         | Amsterdam, NL (100G)      | 487 Mbits/sec   | 401 Mbits/sec   | --             
Uztelecom       | Tashkent, UZ (10G)        | 389 Mbits/sec   | 315 Mbits/sec   | 205 ms         
Leaseweb        | Singapore, SG (10G)       | 417 Mbits/sec   | 489 Mbits/sec   | 208 ms         
Clouvider       | Los Angeles, CA, US (10G) | 686 Mbits/sec   | 632 Mbits/sec   | 37.2 ms        
Leaseweb        | NYC, NY, US (10G)         | 710 Mbits/sec   | 635 Mbits/sec   | 54.2 ms        
Edgoo           | Sao Paulo, BR (1G)        | 519 Mbits/sec   | 448 Mbits/sec   | 141 ms         

Geekbench 4 Benchmark Test:
---------------------------------
Test            | Value                         
                |                               
Single Core     | 3212                          
Multi Core      | 2901                          
Full Test       | https://browser.geekbench.com/v4/cpu/18685148

Geekbench 5 Benchmark Test:
---------------------------------
Test            | Value                         
                |                               
Single Core     | 655                           
Multi Core      | 663                           
Full Test       | https://browser.geekbench.com/v5/cpu/23499226

Geekbench test failed and low memory was detected. Add at least 1GB of SWAP or use GB4 instead (higher compatibility with low memory systems).

YABS completed in 17 min 25 sec
{{< /spoil_subgroup >}}
{{< /spoil_group >}}

{{< spoil_group title="nws">}}
{{< spoil_subgroup date="2025-04-27" >}}
---------------------------------- nws.sh ---------------------------------
      A simple script to bench network performance using speedtest-cli     
---------------------------------------------------------------------------
 Version            : v2025.03.18
 Global Speedtest   : wget -qO- nws.sh | bash
 Region Speedtest   : wget -qO- nws.sh | bash -s -- -r <region>
---------------------------------------------------------------------------
 Basic System Info
---------------------------------------------------------------------------
 CPU Model          : Intel(R) Xeon(R) CPU E5-2699 v4 @ 2.20GHz
 CPU Cores          : 1 @ 2199.984 MHz
 CPU Cache          : 56320 KB
 AES-NI             : ✔ Enabled
 VM-x/AMD-V         : ✔ Enabled
 Total Disk         : 19.6 GB (1.3 GB Used)
 Total RAM          : 960.7 MB (168.3 MB Used)
 System uptime      : 0 days, 0 hour 20 min
 Load average       : 1.07, 0.69, 0.38
 OS                 : Debian GNU/Linux 12
 Arch               : x86_64 (64 Bit)
 Kernel             : 6.1.0-31-amd64
 Virtualization     : KVM
 TCP Control        : cubic
---------------------------------------------------------------------------
 Basic Network Info
---------------------------------------------------------------------------
 Primary Network    : IPv6
 IPv6 Access        : ✔ Online
 IPv4 Access        : ✔ Online
 ISP                : The Optimal Link Corp / Oplink.net
 ASN                : AS40156 The Optimal Link Corporation
 Host               : NeoTechAdmin LLC
 Location           : Spring, Texas-TX, United States
---------------------------------------------------------------------------
 Speedtest.net (Region: GLOBAL)
---------------------------------------------------------------------------
 Location         Latency     Loss    DL Speed       UP Speed       Server      

 ISP: The Optimal Link Corporation 

 Nearest          0.51 ms     0.0%    654.68 Mbps    877.61 Mbps    CharityHost.org - Spring, TX 

 Kochi, IN        267.96 ms   0.0%    449.30 Mbps    280.29 Mbps    Asianet Broadband - Cochin 
 Bangalore, IN    242.96 ms   0.0%    600.11 Mbps    287.15 Mbps    Bharti Airtel Ltd - Bangalore 
 Chennai, IN      248.29 ms   0.0%    496.34 Mbps    262.62 Mbps    Jio - Chennai 
 Mumbai, IN       231.10 ms   0.0%    626.47 Mbps    258.78 Mbps    Airtel Broadband - Mumbai 
 Delhi, IN        235.50 ms   0.0%    481.81 Mbps    258.50 Mbps    Tata Play Fiber - New Delhi 

 Seattle, US      44.28 ms    N/A     559.39 Mbps    541.87 Mbps    Comcast - Seattle, WA 
 Los Angeles, US  38.40 ms    0.0%    556.54 Mbps    551.69 Mbps    ReliableSite Hosting - Los Angeles, CA 
 Dallas, US       7.12 ms     0.0%    697.41 Mbps    802.76 Mbps    Hivelocity - Dallas, TX 
 Miami, US        27.53 ms    N/A     572.77 Mbps    788.23 Mbps    Boost Mobile - Miami, FL 
 New York, US     39.58 ms    0.0%    676.85 Mbps    506.62 Mbps    GSL Networks - New York, NY 
 Toronto, CA      51.05 ms    0.0%    558.86 Mbps    535.08 Mbps    Rogers - Toronto, ON 
 Mexico City, MX  74.32 ms    N/A     585.78 Mbps    430.69 Mbps    INFINITUM - Ciudad de México 

 London, UK       FAILED                                                        
 Amsterdam, NL    124.05 ms   0.0%    671.01 Mbps    421.03 Mbps    31173 Services AB - Amsterdam 
 Paris, FR        111.36 ms   N/A     611.92 Mbps    138.50 Mbps    Axione - Paris 
 Frankfurt, DE    117.34 ms   0.0%    411.17 Mbps    334.79 Mbps    Clouvider Ltd - Frankfurt am Main 
 Warsaw, PL       261.00 ms   0.0%    54.60 Mbps     230.09 Mbps    Play - Warszawa 
 Bucharest, RO    147.19 ms   0.0%    550.28 Mbps    376.35 Mbps    Vodafone Romania Mobile - Bucharest - Bucharest 
 Moscow, RU       162.73 ms   0.0%    338.61 Mbps    46.63 Mbps     t2 Russia - Moscow 

 Jeddah, SA       161.36 ms   0.0%    593.71 Mbps    308.64 Mbps    Saudi Telecom Company 
 Dubai, AE        213.15 ms   0.0%    550.87 Mbps    183.54 Mbps    e& UAE - Dubai 
 Istanbul, TR     154.57 ms   0.0%    565.49 Mbps    217.08 Mbps    Turkcell - Istanbul 
 Tehran, IR       188.55 ms   0.0%    532.80 Mbps    330.59 Mbps    MCI         
 Cairo, EG        156.19 ms   N/A     517.47 Mbps    274.66 Mbps    Orange Egypt - Cairo 

 Tokyo, JP        134.81 ms   0.0%    595.23 Mbps    317.98 Mbps    GSL Networks - Tokyo 
 Shanghai, CU-CN  FAILED                                                        
 Suzhou, CT-CN    194.15 ms   N/A     601.83 Mbps    1.75 Mbps      China Telecom JiangSu 5G - Suzhou 
 Hong Kong, CN    210.19 ms   0.0%    494.46 Mbps    105.07 Mbps    Misaka Network, Inc. - Hong Kong 
 Singapore, SG    219.20 ms   0.0%    476.37 Mbps    290.37 Mbps    NewMedia Express - Singapore 
 Jakarta, ID      220.78 ms   0.0%    477.51 Mbps    275.42 Mbps    PT Solnet Indonesia - Jakarta 
---------------------------------------------------------------------------
 Avg DL Speed       : 536.54 Mbps
 Avg UL Speed       : 352.91 Mbps

 Total DL Data      : 20.28 GB
 Total UL Data      : 13.37 GB
 Total Data         : 33.65 GB
---------------------------------------------------------------------------
 Duration           : 14 min 36 sec
 System Time        : 26/04/2025 - 08:01:38 EDT
 Total Script Runs  : 109272
---------------------------------------------------------------------------
 Result             : https://result.nws.sh/r/1745668642_ZJR7NR_GLOBAL.txt
---------------------------------------------------------------------------
{{< /spoil_subgroup >}}
{{< /spoil_group >}}

{{< spoil_group title="benchmonster">}}
{{< spoil_subgroup date="2025-04-27" >}}
 Region: Global  https://bench.monster v1.7.4 2023-12-15 
 Usage : curl -sL bench.monster | bash -s -- -Global
---------------------------------------------------------------------------
 OS           : Debian GNU/Linux 12 (64 Bit)
 Virt/Kernel  : KVM / 6.1.0-31-amd64
 CPU Model    : Intel(R) Xeon(R) CPU E5-2699 v4 @ 2.20GHz
 CPU Cores    : 1 @ 2199.984 MHz x86_64 56320 KB Cache
 CPU Flags    : AES-NI Enabled & VM-x/AMD-V Enabled
 Load Average : 0.08, 0.25, 0.31
 Total Space  : 20G (1.3G ~7% used)
 Total RAM    : 960 MB (237 MB + 112 MB Buff in use)
 Total SWAP   : 0 MB (0 MB in use)
 IPv4/IPv6    : ✔ Online / ✔ Online
 Uptime       : 0 days 0:35
---------------------------------------------------------------------------
 Location     : United States, Spring (Texas)
 ASN & ISP    : AS40156, The Optimal Link Corp / Oplink.net / NeoTechAdmin LLC
---------------------------------------------------------------------------

 ## Geekbench v4 CPU Benchmark:

  Single Core : 3022  (GOOD)
   Multi Core : 2904

 ## IO Test

 CPU Speed:
    bzip2     :  92.2 MB/s
   sha256     : 157 MB/s
   md5sum     : 419 MB/s

 RAM Speed:
   Avg. write : 1706.7 MB/s
   Avg. read  : 4369.1 MB/s

 Disk Speed:
   1st run    : 837 MB/s
   2nd run    : 810 MB/s
   3rd run    : 861 MB/s
   -----------------------
   Average    : 836.0 MB/s

 ## Global Speedtest.net

 Location                       Upload           Download         Ping   
---------------------------------------------------------------------------
 Nearby                         51.05 Mbit/s     77.48 Mbit/s    * 588.06 ms
---------------------------------------------------------------------------
 USA, New York (Starry)         240.40 Mbit/s    426.54 Mbit/s   36.577 ms
 USA, Chicago (Windstream)      329.50 Mbit/s    523.30 Mbit/s   26.453 ms
 USA, Houston (Comcast)         290.11 Mbit/s    560.72 Mbit/s   1.944 ms
 USA, Los Angeles (Windstream)  247.25 Mbit/s    490.75 Mbit/s   37.853 ms
 UK, London (toob Ltd)          113.32 Mbit/s    180.87 Mbit/s   146.528 ms
 Germany, Berlin (DNS:NET)      120.24 Mbit/s    313.95 Mbit/s   123.148 ms
 Spain, Madrid (MasMovil)       107.98 Mbit/s    256.40 Mbit/s   114.120 ms
 Italy, Rome (Unidata)          118.57 Mbit/s    214.50 Mbit/s   ping error!
 India, Mumbai (Tatasky)        35.98 Mbit/s     45.85 Mbit/s    241.283 ms
 Singapore (StarHub)            48.13 Mbit/s     59.33 Mbit/s    209.361 ms
 Japan, Tsukuba (SoftEther)     71.47 Mbit/s     40.04 Mbit/s    149.166 ms
 Australia, Sydney (Optus)      84.34 Mbit/s     145.38 Mbit/s   186.769 ms
---------------------------------------------------------------------------

 Timestamp   : 2025-04-26 12:15:39 GMT

 - https://www.speedtest.net/result/17660170662.png
 - https://browser.geekbench.com/v4/cpu/18685166
{{< /spoil_subgroup >}}
{{< /spoil_group >}}

{{< spoil_group title="goecs">}}
{{< spoil_subgroup date="2025-04-27" >}}
-----------------------------VPS Fusion Monster Test------------------------------
Version: v0.1.29
Review Channel: https://t.me/vps_reviews
Go Project: https://github.com/oneclickvirt/ecs
Shell Project: https://github.com/spiritLHLS/ecs
-----------------------------System-Basic-Information-----------------------------
 CPU Model           : Intel(R) Xeon(R) CPU E5-2699 v4 @ 2.20GHz
 CPU Cores           : 1 Virtual CPU(s)
 CPU Cache           : L1: 64 KB / L2: 256 KB / L3: 55 MB
 GPU Model           : GD 5446
 AES-NI              : ✔️ Enabled
 VM-x/AMD-V/Hyper-V  : ✔️ Enabled
 RAM                 : 215.72 MB / 960.69 MB
 Virtio Balloon      : ✔️ Enabled
 KSM                 : ❌ Undetected
 Swap                : [ no swap partition or swap file detected ]
 Disk                : 1.28 GB / 19.58 GB
 Boot Path           : /dev/vda1
 OS Release          : debian 12.9 [x86_64] 
 Kernel              : 6.1.0-31-amd64
 Uptime              : 0 days, 00 hours, 49 minutes
 Current Time Zone   : EDT
 Load                : 0.32 / 0.31 / 0.29
 VM Type             : KVM
 NAT Type            : Full Cone
 Tcp Accelerate      : cubic
 IPV4 ASN            : AS40156 The Optimal Link Corporation
 IPV4 Location       : Des Moines / Iowa / United States
 IPV4 Active IPs     : 150/256 (subnet /24)
 IPV6 ASN            : AS40156 THEOPT-HOU
 IPV6 Location       : Des Moines / Iowa / United States
 IPv6 Mask           : /64
----------------------------CPU-Test--sysbench-Method-----------------------------
1 Thread(s) Test:    848.53
---------------------------Memory-Test--sysbench-Method---------------------------
Single Seq Write Speed: 12844.56 MB/s(13.47K IOPS, 5s)
Single Seq Read  Speed: 17699.16 MB/s(18.56K IOPS, 5s)
------------------------------Disk-Test--fio-Method-------------------------------
Test Path     Block    Read(IOPS)              Write(IOPS)             Total(IOPS)
/root         4k       165.08 MB/s(41.3k)      165.52 MB/s(41.4k)      330.60 MB/s(82.6k)      
/root         64k      982.92 MB/s(15.4k)      988.09 MB/s(15.4k)      1.97 GB/s(30.8k)        
/root         512k     1.05 GB/s(2044)         1.10 GB/s(2152)         2.15 GB/s(4196)         
/root         1m       1.03 GB/s(1004)         1.10 GB/s(1070)         2.12 GB/s(2074)         
-----------------------Cross-Border-Streaming-Media-Unlock------------------------
IPV4:
===============[ Global ]===============
Apple                     YES (Region: USA)
BingSearch                YES (Region: US)
Claude                    YES
Dazn                      YES (Region: US)
Disney+                   YES (Region: US)
Gemini                    YES (Region: USA)
GoogleSearch              YES
Google Play Store         YES (Region: US)
IQiYi                     YES (Region: US)
Instagram Licensed Audio  YES
KOCOWA                    YES
MetaAI                    NO (AbraGeoBlocked)
Netflix                   YES (Region: US)
Netflix CDN               US
OneTrust                  YES (Region: US TEXAS)
ChatGPT                   YES (Region: US)
Paramount+                YES
Amazon Prime Video        YES (Region: US)
Reddit                    YES
SonyLiv                   YES (Region: US)
Sora                      YES (Region: US)
Spotify Registration      NO
Steam Store               YES (Community Available) (Region: US)
TVBAnywhere+              YES (Region: US)
TikTok                    YES (Region: US)
Viu.com                   YES
Wikipedia Editability     YES
YouTube Region            YES (Region: US)
YouTube CDN               DFW
---------------------------------Email-Port-Check---------------------------------
Platform  SMTP  SMTPS POP3  POP3S IMAP  IMAPS
LocalPort ✔     ✔     ✔     ✔     ✔     ✔    
QQ        ✘     ✘     ✔     ✘     ✔     ✘    
163       ✘     ✘     ✔     ✘     ✔     ✘    
Sohu      ✘     ✘     ✔     ✘     ✔     ✘    
Yandex    ✘     ✘     ✔     ✘     ✔     ✘    
Gmail     ✘     ✘     ✘     ✘     ✘     ✘    
Outlook   ✘     ✘     ✔     ✘     ✔     ✘    
Office365 ✘     ✘     ✔     ✘     ✔     ✘    
Yahoo     ✘     ✘     ✘     ✘     ✘     ✘    
MailCOM   ✘     ✘     ✔     ✘     ✔     ✘    
MailRU    ✘     ✘     ✘     ✘     ✔     ✘    
AOL       ✘     ✘     ✘     ✘     ✘     ✘    
GMX       ✘     ✘     ✔     ✘     ✔     ✘    
Sina      ✘     ✘     ✔     ✘     ✔     ✘    
Apple     ✘     ✘     ✘     ✘     ✘     ✘    
FastMail  ✘     ✘     ✘     ✘     ✘     ✘    
ProtonMail✘     ✘     ✘     ✘     ✘     ✘    
MXRoute   ✘     ✘     ✔     ✘     ✔     ✘    
Namecrane ✘     ✘     ✔     ✘     ✔     ✘    
XYAMail   ✘     ✘     ✘     ✘     ✘     ✘    
ZohoMail  ✘     ✘     ✘     ✘     ✘     ✘    
Inbox_eu  ✘     ✘     ✔     ✘     ✘     ✘    
Free_fr   ✘     ✘     ✔     ✘     ✔     ✘    
------------------------------------Speed-Test------------------------------------
Location        Upload Speed    Download Speed  Latency         PacketLoss      
Speedtest.net   877.08 Mbps     584.59 Mbps     950.842µs       0.00% (Sent: 402/Dup: 0/Max: 401)
LosAngeles      224.75 Mbps     545.15 Mbps     45.205179ms     N/A             
Frankfurt       82.11 Mbps      391.18 Mbps     122.38089ms     N/A             
Tokyo,Japan     73.06 Mbps      291.58 Mbps     138.424972ms    N/A             
HongKong        38.04 Mbps      348.99 Mbps     193.157576ms    N/A             
Singapore       45.95 Mbps      363.35 Mbps     202.513271ms    N/A             
----------------------------------------------------------------------------------
Cost    Time          : 4 min 35 sec
Current Time          : Sat Apr 26 08:20:16 EDT 2025
----------------------------------------------------------------------------------
{{< /spoil_subgroup >}}
{{< /spoil_group >}}
