+++
title = "AvenaCloud MD 1C/1G/10G/unmetered(100mbps)"
date = 2025-05-24T16:39:34+00:00
slug = "avenacloud-1"

description = "The VPS Benchmark of AvenaCloud MD 1C/1G/10G/unmetered(100mbps)"
type = "blog"
+++

##### Promotion -> [PROMO VDS 10](https://lowendtalk.com/discussion/193032/update-vps-for-11-50-year/p1) (No longer available)

{{< vps_specs
cpu_core="1"
ram_total="1GB"
storage_total="10GB"
traffic_limit="unmetered"
traffic_speed="100Mbps"
>}}

{{< vps_location
asn="201670"
asn_name="S.C. INFOTECH-GRUP S.R.L."
country="MD"
city="Chisinau"
>}}

{{< osm location="47.0308, 28.8432" popup="Chisinau, MD" >}}

{{< vps_info
cpu="Intel(R) Xeon(R) CPU E5-2690 v4 @ 2.60GHz"
aesni="yes"
virt="VT-x"
hypervisor="kvm"
memory_total="973Mi"
memory_read="2048.77 MiB/sec"
memory_write="1624.75 MiB/sec"
disk_total="9.9G"
>}}

{{< network_upstream 
network_map="87.229.37.0_24"
network_range="87.229.37.0/24"
>}}
AS15836 'Arax-Impex s.r.l.'
{{< /network_upstream >}}

{{< spoil_group title="lscpu">}}
{{< spoil_subgroup date="2025-05-25" >}}
Architecture:                         x86_64
CPU op-mode(s):                       32-bit, 64-bit
Address sizes:                        46 bits physical, 48 bits virtual
Byte Order:                           Little Endian
CPU(s):                               1
On-line CPU(s) list:                  0
Vendor ID:                            GenuineIntel
BIOS Vendor ID:                       QEMU
Model name:                           Intel(R) Xeon(R) CPU E5-2690 v4 @ 2.60GHz
BIOS Model name:                      pc-i440fx-9.0  CPU @ 2.0GHz
BIOS CPU family:                      1
CPU family:                           6
Model:                                79
Thread(s) per core:                   1
Core(s) per socket:                   1
Socket(s):                            1
Stepping:                             1
BogoMIPS:                             5187.98
Flags:                                fpu vme de pse tsc msr pae mce cx8 apic sep mtrr pge mca cmov pat pse36 clflush mmx fxsr sse sse2 ss syscall nx pdpe1gb rdtscp lm constant_tsc arch_perfmon rep_good nopl xtopology cpuid tsc_known_freq pni pclmulqdq vmx ssse3 fma cx16 pdcm pcid sse4_1 sse4_2 x2apic movbe popcnt tsc_deadline_timer aes xsave avx f16c rdrand hypervisor lahf_lm abm 3dnowprefetch cpuid_fault invpcid_single pti ssbd ibrs ibpb stibp tpr_shadow vnmi flexpriority ept vpid ept_ad fsgsbase tsc_adjust bmi1 hle avx2 smep bmi2 erms invpcid rtm rdseed adx smap xsaveopt arat umip flush_l1d arch_capabilities
Virtualization:                       VT-x
Hypervisor vendor:                    KVM
Virtualization type:                  full
L1d cache:                            32 KiB (1 instance)
L1i cache:                            32 KiB (1 instance)
L2 cache:                             4 MiB (1 instance)
L3 cache:                             16 MiB (1 instance)
NUMA node(s):                         1
NUMA node0 CPU(s):                    0
Vulnerability Gather data sampling:   Not affected
Vulnerability Itlb multihit:          Not affected
Vulnerability L1tf:                   Mitigation; PTE Inversion; VMX flush not necessary, SMT disabled
Vulnerability Mds:                    Vulnerable: Clear CPU buffers attempted, no microcode; SMT Host state unknown
Vulnerability Meltdown:               Mitigation; PTI
Vulnerability Mmio stale data:        Vulnerable: Clear CPU buffers attempted, no microcode; SMT Host state unknown
Vulnerability Reg file data sampling: Not affected
Vulnerability Retbleed:               Not affected
Vulnerability Spec rstack overflow:   Not affected
Vulnerability Spec store bypass:      Mitigation; Speculative Store Bypass disabled via prctl
Vulnerability Spectre v1:             Mitigation; usercopy/swapgs barriers and __user pointer sanitization
Vulnerability Spectre v2:             Mitigation; Retpolines; IBPB conditional; IBRS_FW; STIBP disabled; RSB filling; PBRSB-eIBRS Not affected; BHI Retpoline
Vulnerability Srbds:                  Not affected
Vulnerability Tsx async abort:        Vulnerable: Clear CPU buffers attempted, no microcode; SMT Host state unknown
{{< /spoil_subgroup >}}
{{< /spoil_group >}}

{{< spoil_group title="yabs">}}
{{< spoil_subgroup date="2025-05-25" >}}
# ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## #
#              Yet-Another-Bench-Script              #
#                     v2025-04-20                    #
# https://github.com/masonr/yet-another-bench-script #
# ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## #

Sat May 24 19:05:28 EEST 2025

Basic System Information:
---------------------------------
Uptime     : 108 days, 7 hours, 13 minutes
Processor  : Intel(R) Xeon(R) CPU E5-2690 v4 @ 2.60GHz
CPU cores  : 1 @ 2593.992 MHz
AES-NI     : ✔ Enabled
VM-x/AMD-V : ✔ Enabled
RAM        : 973.3 MiB
Swap       : 1024.0 MiB
Disk       : 9.8 GiB
Distro     : Debian GNU/Linux 12 (bookworm)
Kernel     : 6.1.0-29-cloud-amd64
VM Type    : KVM
IPv4/IPv6  : ✔ Online / ✔ Online

IPv6 Network Information:
---------------------------------
ISP        : S.C. INFOTECH-GRUP S.R.L.
ASN        : AS201670 S.C. INFOTECH-GRUP S.R.L.
Host       : Infotechgrup
Location   : Chisinau, Chișinău Municipality (CU)
Country    : Moldova

fio Disk Speed Tests (Mixed R/W 50/50) (Partition /dev/sda1):
---------------------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------   | ---            ----  | ----           ---- 
Read       | 21.58 MB/s    (5.3k) | 169.83 MB/s   (2.6k)
Write      | 21.60 MB/s    (5.4k) | 170.72 MB/s   (2.6k)
Total      | 43.18 MB/s   (10.7k) | 340.55 MB/s   (5.3k)
           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------   | ---            ----  | ----           ---- 
Read       | 161.76 MB/s    (315) | 164.13 MB/s    (160)
Write      | 170.35 MB/s    (332) | 175.06 MB/s    (170)
Total      | 332.11 MB/s    (647) | 339.20 MB/s    (330)

iperf3 Network Speed Tests (IPv4):
---------------------------------
Provider        | Location (Link)           | Send Speed      | Recv Speed      | Ping           
-----           | -----                     | ----            | ----            | ----           
Clouvider       | London, UK (10G)          | 93.1 Mbits/sec  | 95.0 Mbits/sec  | 49.7 ms        
Eranium         | Amsterdam, NL (100G)      | 97.8 Mbits/sec  | 95.1 Mbits/sec  | 43.9 ms        
Uztelecom       | Tashkent, UZ (10G)        | 90.4 Mbits/sec  | busy            | 96.7 ms        
Leaseweb        | Singapore, SG (10G)       | 85.0 Mbits/sec  | 89.2 Mbits/sec  | 189 ms         
Clouvider       | Los Angeles, CA, US (10G) | 87.6 Mbits/sec  | 90.2 Mbits/sec  | 173 ms         
Leaseweb        | NYC, NY, US (10G)         | 88.8 Mbits/sec  | 92.4 Mbits/sec  | 118 ms         
Edgoo           | Sao Paulo, BR (1G)        | 52.3 Mbits/sec  | 84.0 Mbits/sec  | 232 ms         

iperf3 Network Speed Tests (IPv6):
---------------------------------
Provider        | Location (Link)           | Send Speed      | Recv Speed      | Ping           
-----           | -----                     | ----            | ----            | ----           
Clouvider       | London, UK (10G)          | 93.1 Mbits/sec  | 91.4 Mbits/sec  | 140 ms         
Eranium         | Amsterdam, NL (100G)      | 93.8 Mbits/sec  | 93.0 Mbits/sec  | 43.9 ms        
Uztelecom       | Tashkent, UZ (10G)        | 91.5 Mbits/sec  | 91.4 Mbits/sec  | 126 ms         
Leaseweb        | Singapore, SG (10G)       | 78.5 Mbits/sec  | 88.6 Mbits/sec  | --             
Clouvider       | Los Angeles, CA, US (10G) | 84.7 Mbits/sec  | 88.2 Mbits/sec  | 253 ms         
Leaseweb        | NYC, NY, US (10G)         | 85.0 Mbits/sec  | 90.2 Mbits/sec  | 253 ms         
Edgoo           | Sao Paulo, BR (1G)        | 66.1 Mbits/sec  | 86.1 Mbits/sec  | 234 ms         

Geekbench 4 Benchmark Test:
---------------------------------
Test            | Value                         
                |                               
Single Core     | 1559                          
Multi Core      | 1533                          
Full Test       | https://browser.geekbench.com/v4/cpu/18745200

Geekbench 5 Benchmark Test:
---------------------------------
Test            | Value                         
                |                               
Single Core     | 263                           
Multi Core      | 265                           
Full Test       | https://browser.geekbench.com/v5/cpu/23563867

Geekbench 6 Benchmark Test:
---------------------------------
Test            | Value                         
                |                               
Single Core     | 244                           
Multi Core      | 182                           
Full Test       | https://browser.geekbench.com/v6/cpu/12118757

YABS completed in 64 min 7 sec
{{< /spoil_subgroup >}}
{{< /spoil_group >}}

{{< spoil_group title="nws">}}
{{< spoil_subgroup date="2025-05-25" >}}
---------------------------------- nws.sh ---------------------------------
      A simple script to bench network performance using speedtest-cli     
---------------------------------------------------------------------------
 Version            : v2025.05.01
 Global Speedtest   : wget -qO- nws.sh | bash
 Region Speedtest   : wget -qO- nws.sh | bash -s -- -r <region>
---------------------------------------------------------------------------
 Basic System Info
---------------------------------------------------------------------------
 CPU Model          : Intel(R) Xeon(R) CPU E5-2690 v4 @ 2.60GHz
 CPU Cores          : 1 @ 2593.992 MHz
 CPU Cache          : 16384 KB
 AES-NI             : ✔ Enabled
 VM-x/AMD-V         : ✔ Enabled
 Total Disk         : 9.8 GB (4.1 GB Used)
 Total RAM          : 973.3 MB (418.4 MB Used)
 System uptime      : 108 days, 6 hour 30 min
 Load average       : 2.14, 2.14, 1.57
 OS                 : Debian GNU/Linux 12
 Arch               : x86_64 (64 Bit)
 Kernel             : 6.1.0-29-cloud-amd64
 Virtualization     : KVM
 TCP Control        : cubic
---------------------------------------------------------------------------
 Basic Network Info
---------------------------------------------------------------------------
 Primary Network    : IPv6
 IPv6 Access        : ✔ Online
 IPv4 Access        : ✔ Online
 ISP                : S.C. INFOTECH-GRUP S.R.L.
 ASN                : AS201670 S.C. INFOTECH-GRUP S.R.L.
 Host               : Infotechgrup
 Location           : Chisinau, Chișinău Municipality-CU, Moldova
---------------------------------------------------------------------------
 Speedtest.net (Region: GLOBAL)
---------------------------------------------------------------------------
 Location         Latency     Loss    DL Speed       UP Speed       Server      

 ISP: S.c. Infotech-grup 

 Nearest          0.83 ms     0.0%    96.06 Mbps     98.88 Mbps     StarNet Solutii SRL - Chisinau 

 Kochi, IN        196.94 ms   0.0%    98.78 Mbps     64.23 Mbps     Asianet Broadband - Cochin 
 Bangalore, IN    174.94 ms   0.0%    98.61 Mbps     73.63 Mbps     Bharti Airtel Ltd - Bangalore 
 Chennai, IN      212.38 ms   1.7%    97.07 Mbps     8.65 Mbps      Jio - Chennai 
 Mumbai, IN       156.82 ms   0.0%    103.90 Mbps    78.24 Mbps     Melbicom - Mumbai 
 Delhi, IN        184.21 ms   0.0%    100.40 Mbps    81.10 Mbps     Tata Play Fiber - New Delhi 

 Seattle, US      186.44 ms   N/A     98.24 Mbps     59.28 Mbps     Comcast - Seattle, WA 
 Los Angeles, US  172.94 ms   0.0%    98.84 Mbps     68.40 Mbps     ReliableSite Hosting - Los Angeles, CA 
 Dallas, US       152.34 ms   0.0%    101.86 Mbps    85.74 Mbps     Hivelocity - Dallas, TX 
 Miami, US        158.64 ms   0.0%    95.98 Mbps     92.18 Mbps     Telxius - Miami, FL 
 New York, US     114.98 ms   0.0%    101.80 Mbps    94.31 Mbps     GSL Networks - New York, NY 
 Toronto, CA      131.66 ms   0.0%    95.01 Mbps     71.71 Mbps     Rogers - Toronto, ON 
 Mexico City, MX  223.98 ms   N/A     97.42 Mbps     48.41 Mbps     INFINITUM - Ciudad de México 

 London, UK       51.75 ms    0.0%    95.05 Mbps     94.36 Mbps     VeloxServ Communications - London 
 Amsterdam, NL    43.04 ms    0.0%    95.84 Mbps     98.32 Mbps     31173 Services AB - Amsterdam 
 Paris, FR        50.09 ms    N/A     95.83 Mbps     97.88 Mbps     Axione - Paris 
 Frankfurt, DE    38.27 ms    0.3%    48.20 Mbps     44.79 Mbps     Clouvider Ltd - Frankfurt am Main 
 Warsaw, PL       50.93 ms    0.0%    94.77 Mbps     96.04 Mbps     Play - Warszawa 
 Bucharest, RO    9.25 ms     0.0%    88.41 Mbps     98.57 Mbps     Vodafone Romania Mobile - Bucharest - Bucharest 
 Moscow, RU       73.51 ms    0.0%    93.19 Mbps     55.13 Mbps     t2 Russia - Moscow 

 Jeddah, SA       115.41 ms   0.0%    88.05 Mbps     88.59 Mbps     Saudi Telecom Company 
 Dubai, AE        207.31 ms   N/A     100.28 Mbps    20.50 Mbps     e& UAE - Dubai 
 Istanbul, TR     51.38 ms    0.0%    98.43 Mbps     91.38 Mbps     Turkcell - Istanbul 
 Tehran, IR       115.33 ms   0.0%    95.75 Mbps     89.54 Mbps     MCI         
 Cairo, EG        74.36 ms    N/A     95.98 Mbps     93.89 Mbps     Orange Egypt - Cairo 

 Tokyo, JP        254.17 ms   41.4%   97.26 Mbps     61.49 Mbps     GSL Networks - Tokyo 
 Shanghai, CU-CN  FAILED                                                        
 Suzhou, CT-CN    285.94 ms   N/A     99.21 Mbps     58.86 Mbps     China Telecom JiangSu 5G - Suzhou 
 Hong Kong, CN    252.22 ms   0.0%    96.87 Mbps     68.64 Mbps     Misaka Network, Inc. - Hong Kong 
 Singapore, SG    167.21 ms   0.0%    96.10 Mbps     67.14 Mbps     NewMedia Express - Singapore 
 Jakarta, ID      FAILED - IP has been rate limited. Try again after 1 hour.                                                  
---------------------------------------------------------------------------
 Avg DL Speed       : 95.28 Mbps
 Avg UL Speed       : 74.13 Mbps

 Total DL Data      : 4.07 GB
 Total UL Data      : 2.83 GB
 Total Data         : 6.90 GB
---------------------------------------------------------------------------
 Duration           : 14 min 31 sec
 System Time        : 24/05/2025 - 18:36:37 EEST
 Total Script Runs  : 113073
---------------------------------------------------------------------------
 Result             : https://result.nws.sh/r/1748100648_7XJFEJ_GLOBAL.txt
---------------------------------------------------------------------------
{{< /spoil_subgroup >}}
{{< /spoil_group >}}

{{< spoil_group title="benchmonster">}}
{{< spoil_subgroup date="2025-05-25" >}}
 Region: Global  https://bench.monster v1.7.4 2023-12-15 
 Usage : curl -sL bench.monster | bash -s -- -Global
---------------------------------------------------------------------------
 OS           : Debian GNU/Linux 12 (64 Bit)
 Virt/Kernel  : KVM / 6.1.0-29-cloud-amd64
 CPU Model    : Intel(R) Xeon(R) CPU E5-2690 v4 @ 2.60GHz
 CPU Cores    : 1 @ 2593.992 MHz x86_64 16384 KB Cache
 CPU Flags    : AES-NI Enabled & VM-x/AMD-V Enabled
 Load Average : 0.65, 0.70, 0.97
 Total Space  : 9.9G (4.1G ~44% used)
 Total RAM    : 973 MB (407 MB + 281 MB Buff in use)
 Total SWAP   : 0 MB (0 MB in use)
 IPv4/IPv6    : ✔ Online / ✔ Online
 Uptime       : 108 days 6:45
---------------------------------------------------------------------------
 Location     : Moldova, Chisinau (Chișinău Municipality)
 ASN & ISP    : AS201670, S.C. INFOTECH-GRUP S.R.L. / S.C. INFOTECH-GRUP S.R.L
---------------------------------------------------------------------------

 ## Geekbench v4 CPU Benchmark:

  Single Core : 1527  (POOR)
   Multi Core : 1448

 ## IO Test

 CPU Speed:
    bzip2     :  36.8 MB/s
   sha256     :  58.2 MB/s
   md5sum     : 206 MB/s

 RAM Speed:
   Avg. write : 754.0 MB/s
   Avg. read  : 1911.5 MB/s

 Disk Speed:
   1st run    : 298 MB/s
   2nd run    : 307 MB/s
   3rd run    : 303 MB/s
   -----------------------
   Average    : 302.7 MB/s

 ## Global Speedtest.net

 Location                       Upload           Download         Ping   
---------------------------------------------------------------------------
 Nearby                         96.35 Mbit/s     95.03 Mbit/s     0.913 ms
---------------------------------------------------------------------------
 USA, New York (Starry)         50.94 Mbit/s     79.76 Mbit/s    117.187 ms
 USA, Chicago (Windstream)      41.27 Mbit/s     72.54 Mbit/s    135.782 ms
 USA, Houston (Comcast)         40.49 Mbit/s     61.29 Mbit/s    155.813 ms
 USA, Los Angeles (Windstream)  26.80 Mbit/s     58.51 Mbit/s    184.764 ms
 UK, London (toob Ltd)          82.81 Mbit/s     88.60 Mbit/s    44.923 ms
 Germany, Berlin (DNS:NET)      81.03 Mbit/s     91.74 Mbit/s    56.054 ms
 Spain, Madrid (MasMovil)       73.98 Mbit/s     87.88 Mbit/s    67.462 ms
 Italy, Rome (Unidata)          67.88 Mbit/s     89.90 Mbit/s    50.917 ms
 India, Mumbai (Tatasky)        38.98 Mbit/s     59.88 Mbit/s    160.667 ms
 Singapore (StarHub)            42.98 Mbit/s     58.15 Mbit/s    197.862 ms
 Japan, Tsukuba (SoftEther)     19.32 Mbit/s     34.78 Mbit/s    252.095 ms
---------------------------------------------------------------------------

 Timestamp   : 2025-05-24 15:52:29 GMT

 - https://www.speedtest.net/result/17771402852.png
 - https://browser.geekbench.com/v4/cpu/18745154
{{< /spoil_subgroup >}}
{{< /spoil_group >}}

{{< spoil_group title="goecs">}}
{{< spoil_subgroup date="2025-05-25" >}}
-----------------------------VPS Fusion Monster Test------------------------------
Version: v0.1.29
Review Channel: https://t.me/vps_reviews
Go Project: https://github.com/oneclickvirt/ecs
Shell Project: https://github.com/spiritLHLS/ecs
-----------------------------System-Basic-Information-----------------------------
 CPU Model           : Intel(R) Xeon(R) CPU E5-2690 v4 @ 2.60GHz
 CPU Cores           : 1 Virtual CPU(s)
 CPU Cache           : L1: 64 KB / L2: 4 MB / L3: 16 MB
 AES-NI              : ✔ Enabled
 VM-x/AMD-V/Hyper-V  : ✔ Enabled
 RAM                 : 432.94 MB / 973.27 MB
 Virtio Balloon      : ✔ Enabled
 KSM                 : ❌ Undetected
 Swap                : [ no swap partition or swap file detected ]
 Disk                : 4.10 GB / 9.68 GB
 Boot Path           : /dev/sda1
 OS Release          : debian 12.11 [x86_64] 
 Kernel              : 6.1.0-29-cloud-amd64
 Uptime              : 108 days, 07 hours, 00 minutes
 Current Time Zone   : EEST
 Load                : 0.87 / 0.96 / 1.07
 VM Type             : KVM
 NAT Type            : Full Cone
 Tcp Accelerate      : cubic
 IPV4 ASN            : AS201670 S.C. INFOTECH-GRUP S.R.L.
 IPV4 Location       : Chisinau / Mun.Chisinau / Moldova
 IPV6 ASN            : AS201670 S.C. INFOTECH-GRUP S.R.L.
 IPV6 Location       : Chisinau / Mun.Chisinau / Moldova
 IPv6 Mask           : /64
----------------------------CPU-Test--sysbench-Method-----------------------------
1 Thread(s) Test:    369.94
---------------------------Memory-Test--sysbench-Method---------------------------
Single Seq Write Speed: 5444.29 MB/s(5.71K IOPS, 5s)
Single Seq Read  Speed: 7863.66 MB/s(8.25K IOPS, 5s)
------------------------------Disk-Test--fio-Method-------------------------------
Test Path     Block    Read(IOPS)              Write(IOPS)             Total(IOPS)
/root         4k       22.13 MB/s(5532)        22.15 MB/s(5538)        44.28 MB/s(11.1k)       
/root         64k      175.02 MB/s(2734)       175.94 MB/s(2749)       350.96 MB/s(5483)       
/root         512k     155.55 MB/s(303)        163.82 MB/s(319)        319.37 MB/s(622)        
/root         1m       199.60 MB/s(194)        212.90 MB/s(207)        412.50 MB/s(401)        
-----------------------Cross-Border-Streaming-Media-Unlock------------------------
IPV4:
===============[ Global ]===============
Apple                     YES (Region: MDA)
BingSearch                YES (Region: WW)
Claude                    YES
Dazn                      Banned
Disney+                   NO (forbidden-location)
Gemini                    NO
GoogleSearch              YES
Google Play Store         YES (Region: RU)
IQiYi                     YES (Region: MD)
Instagram Licensed Audio  YES
KOCOWA                    NO
MetaAI                    Unknown: get www.meta.ai failed with code: 200
Netflix                   Restricted (Originals Only)
Netflix CDN               RO
OneTrust                  YES (Region: MD CHIȘINĂU MUNICIPALITY)
ChatGPT                   YES (Region: MD)
Paramount+                YES
Amazon Prime Video        YES (Region: MD)
Reddit                    NO
SonyLiv                   Banned
Sora                      YES (Region: MD)
Spotify Registration      NO
Steam Store               YES (Community Available) (Region: MD)
TVBAnywhere+              YES (Region: MD)
TikTok                    YES (Region: MD)
Viu.com                   YES
Wikipedia Editability     YES
YouTube Region            YES (Region: RU)
YouTube CDN               axautsys - KIV
---------------------------------Email-Port-Check---------------------------------
Platform  SMTP  SMTPS POP3  POP3S IMAP  IMAPS
LocalPort ✘     ✔     ✔     ✔     ✔     ✔    
QQ        ✔     ✔     ✔     ✘     ✔     ✘    
163       ✔     ✔     ✔     ✘     ✔     ✘    
Sohu      ✔     ✔     ✔     ✘     ✔     ✘    
Yandex    ✔     ✔     ✔     ✘     ✔     ✘    
Gmail     ✔     ✔     ✘     ✘     ✘     ✘    
Outlook   ✔     ✘     ✔     ✘     ✔     ✘    
Office365 ✔     ✘     ✔     ✘     ✔     ✘    
Yahoo     ✔     ✔     ✘     ✘     ✘     ✘    
MailCOM   ✔     ✔     ✔     ✘     ✔     ✘    
MailRU    ✔     ✔     ✘     ✘     ✔     ✘    
AOL       ✔     ✔     ✘     ✘     ✘     ✘    
GMX       ✔     ✔     ✔     ✘     ✔     ✘    
Sina      ✔     ✔     ✔     ✘     ✔     ✘    
Apple     ✔     ✘     ✘     ✘     ✘     ✘    
FastMail  ✔     ✔     ✘     ✘     ✘     ✘    
ProtonMail✘     ✘     ✘     ✘     ✘     ✘    
MXRoute   ✔     ✘     ✔     ✘     ✔     ✘    
Namecrane ✔     ✔     ✔     ✘     ✔     ✘    
XYAMail   ✘     ✘     ✘     ✘     ✘     ✘    
ZohoMail  ✔     ✔     ✘     ✘     ✘     ✘    
Inbox_eu  ✔     ✔     ✔     ✘     ✘     ✘    
Free_fr   ✘     ✔     ✔     ✘     ✔     ✘    
------------------------------------Speed-Test------------------------------------
Location        Upload Speed    Download Speed  Latency         PacketLoss      
Speedtest.net   101.95 Mbps     95.34 Mbps      911.904µs       0.00% (Sent: 402/Dup: 0/Max: 401)
Frankfurt       93.27 Mbps      101.20 Mbps     38.057675ms     N/A             
LosAngeles      67.37 Mbps      88.07 Mbps      182.595577ms    N/A             
Singapore       23.89 Mbps      79.32 Mbps      189.308954ms    N/A             
HongKong        31.93 Mbps      94.71 Mbps      278.746007ms    N/A             
Tokyo,Japan     20.07 Mbps      75.23 Mbps      361.700253ms    N/A             
----------------------------------------------------------------------------------
Cost    Time          : 5 min 34 sec
Current Time          : Sat May 24 18:58:06 EEST 2025
----------------------------------------------------------------------------------
{{< /spoil_subgroup >}}
{{< /spoil_group >}}