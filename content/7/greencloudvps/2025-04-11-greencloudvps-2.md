+++
title = "GreenCloudVPS DE 🇩🇪 1C/2G/25G/3T"
date = 2025-04-11T06:52:30+00:00
slug = "greencloudvps-2"

lastmod = 2025-05-25T01:00:00+00:00

description = "The VPS Benchmark of GreenCloudVPS EPYCDEVF-1 in Frankfurt, DE 🇩🇪"
type = "blog"
+++

##### Plan -> EPYCDEVF-1 [Link](https://greencloudvps.com/billing/store/premium-kvm-sale/epycdevf-1)

{{< vps_specs
cpu_model="EPYC Milan CPU"
cpu_core="1"
ram_total="2GB"
storage_total="25GB"
traffic_limit="3TB"
traffic_type="IN+OUT"
traffic_speed="10Gbps"
>}}

{{< vps_location
asn="3214"
asn_name="xTom GmbH"
country="DE"
city="Frankfurt"
>}}

{{< osm location="50.1127, 8.6758" popup="Frankfurt, DE 🇩🇪" >}}

{{< vps_info
cpu="AMD EPYC 7763 64-Core Processor"
aesni="yes"
virt="AMD-V"
hypervisor="kvm"
memory_total="1.9Gi"
memory_read="6531.46 MiB/sec"
memory_write="5484.73 MiB/sec"
disk_total="25G"
>}}

{{< network_upstream 
network_map="109.94.170.0_24"
network_range="109.94.170.0/24"
>}}
AS5511 'Orange S.A.'
AS1299 'Arelion (fka. Telia Carrier)'
AS6830 'Liberty Global B.V.'
{{< /network_upstream >}}

{{< spoil_group title="lscpu">}}
{{< spoil_subgroup date="2025-04-11" >}}
Architecture:                         x86_64
CPU op-mode(s):                       32-bit, 64-bit
Address sizes:                        48 bits physical, 48 bits virtual
Byte Order:                           Little Endian
CPU(s):                               1
On-line CPU(s) list:                  0
Vendor ID:                            AuthenticAMD
BIOS Vendor ID:                       Red Hat
Model name:                           AMD EPYC 7763 64-Core Processor
BIOS Model name:                      RHEL 7.6.0 PC (i440FX + PIIX, 1996)  CPU @ 2.0GHz
BIOS CPU family:                      1
CPU family:                           25
Model:                                1
Thread(s) per core:                   1
Core(s) per socket:                   1
Socket(s):                            1
Stepping:                             1
BogoMIPS:                             4890.81
Flags:                                fpu vme de pse tsc msr pae mce cx8 apic sep mtrr pge mca cmov pat pse36 clflush mmx fxsr sse sse2 syscall nx mmxext fxsr_opt pdpe1gb rdtscp lm rep_good nopl cpuid extd_apicid tsc_known_freq pni pclmulqdq ssse3 fma cx16 pcid sse4_1 sse4_2 x2apic movbe popcnt tsc_deadline_timer aes xsave avx f16c rdrand hypervisor lahf_lm cmp_legacy svm cr8_legacy abm sse4a misalignsse 3dnowprefetch osvw perfctr_core invpcid_single ssbd ibrs ibpb stibp vmmcall fsgsbase tsc_adjust bmi1 avx2 smep bmi2 erms invpcid rdseed adx smap clflushopt clwb sha_ni xsaveopt xsavec xgetbv1 xsaves clzero xsaveerptr wbnoinvd arat npt lbrv nrip_save tsc_scale vmcb_clean flushbyasid pausefilter pfthreshold v_vmsave_vmload vgif umip pku ospke vaes vpclmulqdq rdpid fsrm arch_capabilities
Virtualization:                       AMD-V
Hypervisor vendor:                    KVM
Virtualization type:                  full
L1d cache:                            32 KiB (1 instance)
L1i cache:                            32 KiB (1 instance)
L2 cache:                             512 KiB (1 instance)
L3 cache:                             256 MiB (1 instance)
NUMA node(s):                         1
NUMA node0 CPU(s):                    0
Vulnerability Gather data sampling:   Not affected
Vulnerability Itlb multihit:          Not affected
Vulnerability L1tf:                   Not affected
Vulnerability Mds:                    Not affected
Vulnerability Meltdown:               Not affected
Vulnerability Mmio stale data:        Not affected
Vulnerability Reg file data sampling: Not affected
Vulnerability Retbleed:               Not affected
Vulnerability Spec rstack overflow:   Mitigation; safe RET
Vulnerability Spec store bypass:      Mitigation; Speculative Store Bypass disabled via prctl
Vulnerability Spectre v1:             Mitigation; usercopy/swapgs barriers and __user pointer sanitization
Vulnerability Spectre v2:             Mitigation; Retpolines; IBPB conditional; IBRS_FW; STIBP disabled; RSB filling; PBRSB-eIBRS Not affected; BHI Not affected
Vulnerability Srbds:                  Not affected
Vulnerability Tsx async abort:        Not affected
{{< /spoil_subgroup >}}
{{< /spoil_group>}}

{{< spoil_group title="yabs">}}
{{< spoil_subgroup date="2025-04-11" >}}
# ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## #
#              Yet-Another-Bench-Script              #
#                     v2025-01-01                    #
# https://github.com/masonr/yet-another-bench-script #
# ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## #

Fri Apr 11 10:05:04 AM BST 2025

Basic System Information:
---------------------------------
Uptime     : 35 days, 1 hours, 24 minutes
Processor  : AMD EPYC 7763 64-Core Processor
CPU cores  : 1 @ 2445.406 MHz
AES-NI     : ✔ Enabled
VM-x/AMD-V : ✔ Enabled
RAM        : 1.9 GiB
Swap       : 4.0 GiB
Disk       : 24.9 GiB
Distro     : Debian GNU/Linux 12 (bookworm)
Kernel     : 6.1.0-31-amd64
VM Type    : KVM
IPv4/IPv6  : ✔ Online / ✔ Online

IPv6 Network Information:
---------------------------------
ISP        : xTom GmbH
ASN        : AS3214 xTom GmbH
Host       : 365 Group LLC
Location   : Frankfurt Am Main, Hesse (HE)
Country    : Germany

fio Disk Speed Tests (Mixed R/W 50/50) (Partition /dev/vda3):
---------------------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------   | ---            ----  | ----           ---- 
Read       | 167.64 MB/s  (41.9k) | 2.06 GB/s    (32.1k)
Write      | 168.08 MB/s  (42.0k) | 2.07 GB/s    (32.3k)
Total      | 335.73 MB/s  (83.9k) | 4.13 GB/s    (64.5k)
           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------   | ---            ----  | ----           ---- 
Read       | 9.32 GB/s    (18.2k) | 9.71 GB/s     (9.4k)
Write      | 9.82 GB/s    (19.1k) | 10.35 GB/s   (10.1k)
Total      | 19.15 GB/s   (37.4k) | 20.06 GB/s   (19.5k)

iperf3 Network Speed Tests (IPv4):
---------------------------------
Provider        | Location (Link)           | Send Speed      | Recv Speed      | Ping           
-----           | -----                     | ----            | ----            | ----           
Clouvider       | London, UK (10G)          | 2.79 Gbits/sec  | 511 Mbits/sec   | 14.4 ms        
Eranium         | Amsterdam, NL (100G)      | 2.72 Gbits/sec  | 7.97 Gbits/sec  | 6.87 ms        
Uztelecom       | Tashkent, UZ (10G)        | 1.19 Gbits/sec  | 310 Mbits/sec   | 127 ms         
Leaseweb        | Singapore, SG (10G)       | 790 Mbits/sec   | 349 Mbits/sec   | --             
Clouvider       | Los Angeles, CA, US (10G) | 902 Mbits/sec   | 194 Mbits/sec   | 171 ms         
Leaseweb        | NYC, NY, US (10G)         | 404 Mbits/sec   | 168 Mbits/sec   | 116 ms         
Edgoo           | Sao Paulo, BR (1G)        | 853 Mbits/sec   | 335 Mbits/sec   | 187 ms         

iperf3 Network Speed Tests (IPv6):
---------------------------------
Provider        | Location (Link)           | Send Speed      | Recv Speed      | Ping           
-----           | -----                     | ----            | ----            | ----           
Clouvider       | London, UK (10G)          | 2.56 Gbits/sec  | 490 Mbits/sec   | 14.3 ms        
Eranium         | Amsterdam, NL (100G)      | 2.74 Gbits/sec  | 7.65 Gbits/sec  | 6.87 ms        
Uztelecom       | Tashkent, UZ (10G)        | 5.87 Mbits/sec  | 213 Mbits/sec   | 127 ms         
Leaseweb        | Singapore, SG (10G)       | 174 Mbits/sec   | 245 Mbits/sec   | 158 ms         
Clouvider       | Los Angeles, CA, US (10G) | 986 Mbits/sec   | 225 Mbits/sec   | 171 ms         
Leaseweb        | NYC, NY, US (10G)         | 617 Mbits/sec   | 168 Mbits/sec   | 116 ms         
Edgoo           | Sao Paulo, BR (1G)        | 919 Mbits/sec   | 121 Mbits/sec   | 243 ms         

Geekbench 5 Benchmark Test:
---------------------------------
Test            | Value                         
                |                               
Single Core     | 1079                          
Multi Core      | 1072                          
Full Test       | https://browser.geekbench.com/v5/cpu/23467401

Geekbench 6 Benchmark Test:
---------------------------------
Test            | Value                         
                |                               
Single Core     | 1386                          
Multi Core      | 1427                          
Full Test       | https://browser.geekbench.com/v6/cpu/11465184

YABS completed in 18 min 3 sec
{{< /spoil_subgroup >}}
{{< /spoil_group >}}

{{< spoil_group title="nws">}}
{{< spoil_subgroup date="2025-04-11" >}}
---------------------------------- nws.sh ---------------------------------
      A simple script to bench network performance using speedtest-cli     
---------------------------------------------------------------------------
 Version            : v2025.03.18
 Global Speedtest   : wget -qO- nws.sh | bash
 Region Speedtest   : wget -qO- nws.sh | bash -s -- -r <region>
---------------------------------------------------------------------------
 Basic System Info
---------------------------------------------------------------------------
 CPU Model          : AMD EPYC 7763 64-Core Processor
 CPU Cores          : 1 @ 2445.406 MHz
 CPU Cache          : 512 KB
 AES-NI             : ✔ Enabled
 VM-x/AMD-V         : ✔ Enabled
 Total Disk         : 24.9 GB (10.8 GB Used)
 Total RAM          : 1.9 GB (453.1 MB Used)
 Total Swap         : 4.0 GB (39.4 MB Used)
 System uptime      : 35 days, 1 hour 42 min
 Load average       : 0.55, 0.68, 0.51
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
 ISP                : xTom GmbH
 ASN                : AS3214 xTom GmbH
 Host               : 365 Group LLC
 Location           : Frankfurt Am Main, Hesse-HE, Germany
---------------------------------------------------------------------------
 Speedtest.net (Region: GLOBAL)
---------------------------------------------------------------------------
 Location         Latency     Loss    DL Speed       UP Speed       Server      

 ISP: xTom 

 Nearest          1.04 ms     N/A     6365.22 Mbps   6609.68 Mbps   PVDataNet - Frankfurt 

 Kochi, IN        163.71 ms   0.0%    550.07 Mbps    490.70 Mbps    Asianet Broadband - Cochin 
 Bangalore, IN    133.35 ms   0.0%    747.02 Mbps    635.63 Mbps    Bharti Airtel Ltd - Bangalore 
 Chennai, IN      149.50 ms   1.3%    725.84 Mbps    32.27 Mbps     Jio - Chennai 
 Mumbai, IN       FAILED                                                        
 Delhi, IN        142.67 ms   0.0%    1216.88 Mbps   588.67 Mbps    Tata Play Fiber - New Delhi 

 Seattle, US      139.53 ms   N/A     714.32 Mbps    567.03 Mbps    Comcast - Seattle, WA 
 Los Angeles, US  138.88 ms   0.0%    670.23 Mbps    591.47 Mbps    ReliableSite Hosting - Los Angeles, CA 
 Dallas, US       111.10 ms   0.0%    375.99 Mbps    835.94 Mbps    Hivelocity - Dallas, TX 
 Miami, US        107.77 ms   N/A     1012.87 Mbps   415.02 Mbps    Boost Mobile - Miami, FL 
 New York, US     77.33 ms    0.0%    3176.97 Mbps   1117.63 Mbps   GSL Networks - New York, NY 
 Toronto, CA      98.82 ms    0.0%    711.21 Mbps    788.98 Mbps    Rogers - Toronto, ON 
 Mexico City, MX  181.23 ms   N/A     1135.56 Mbps   342.16 Mbps    INFINITUM - Ciudad de México 

 London, UK       19.14 ms    0.0%    4577.56 Mbps   1501.50 Mbps   VeloxServ Communications - London 
 Amsterdam, NL    8.02 ms     0.0%    4666.66 Mbps   3435.36 Mbps   31173 Services AB - Amsterdam 
 Paris, FR        10.63 ms    N/A     4776.80 Mbps   2272.22 Mbps   Axione - Paris 
 Frankfurt, DE    17.21 ms    0.0%    4917.04 Mbps   2309.71 Mbps   Clouvider Ltd - Frankfurt am Main 
 Warsaw, PL       FAILED                                                        
 Bucharest, RO    28.75 ms    0.0%    5778.38 Mbps   2157.49 Mbps   Vodafone Romania Mobile - Bucharest - Bucharest 
 Moscow, RU       39.58 ms    0.0%    1505.54 Mbps   656.44 Mbps    t2 Russia - Moscow 

 Jeddah, SA       79.24 ms    0.0%    2559.33 Mbps   903.28 Mbps    Saudi Telecom Company 
 Dubai, AE        114.31 ms   N/A     3493.35 Mbps   210.52 Mbps    e& UAE - Dubai 
 Istanbul, TR     40.90 ms    0.0%    1658.02 Mbps   2245.71 Mbps   Turkcell - Istanbul 
 Tehran, IR       FAILED                                                        
 Cairo, EG        51.30 ms    N/A     2461.57 Mbps   1280.79 Mbps   Orange Egypt - Cairo 

 Tokyo, JP        215.53 ms   1.7%    1659.36 Mbps   152.73 Mbps    GSL Networks - Tokyo 
 Shanghai, CU-CN  272.35 ms   0.0%    1214.33 Mbps   290.83 Mbps    China Unicom 5G - Shanghai 
 Suzhou, CT-CN    197.62 ms   N/A     567.21 Mbps    481.90 Mbps    China Telecom JiangSu 5G - Suzhou 
 Hong Kong, CN    FAILED                                                        
 Singapore, SG    324.62 ms   0.0%    93.36 Mbps     200.97 Mbps    NewMedia Express - Singapore 
 Jakarta, ID      FAILED - IP has been rate limited. Try again after 1 hour.                                                  
---------------------------------------------------------------------------
 Avg DL Speed       : 2205.03 Mbps
 Avg UL Speed       : 1196.72 Mbps

 Total DL Data      : 76.35 GB
 Total UL Data      : 41.55 GB
 Total Data         : 117.90 GB
---------------------------------------------------------------------------
 Duration           : 12 min 35 sec
 System Time        : 11/04/2025 - 10:35:43 BST
 Total Script Runs  : 107603
---------------------------------------------------------------------------
 Result             : https://result.nws.sh/r/1744363952_TF4F1K_GLOBAL.txt
---------------------------------------------------------------------------
{{< /spoil_subgroup >}}
{{< /spoil_group >}}

{{< spoil_group title="benchmonster">}}
{{< spoil_subgroup date="2025-04-11" >}}
 Region: Global  https://bench.monster v1.7.4 2023-12-15 
 Usage : curl -sL bench.monster | bash -s -- -Global
---------------------------------------------------------------------------
 OS           : Debian GNU/Linux 12 (64 Bit)
 Virt/Kernel  : Dedicated / 6.1.0-31-amd64
 CPU Model    : AMD EPYC 7763 64-Core Processor
 CPU Cores    : 1 @ 2445.406 MHz x86_64 512 KB Cache
 CPU Flags    : AES-NI Enabled & VM-x/AMD-V Enabled
 Load Average : 0.33, 0.47, 0.42
 Total Space  : 25G (11G ~44% used)
 Total RAM    : 1932 MB (466 MB + 193 MB Buff in use)
 Total SWAP   : 4095 MB (37 MB in use)
 IPv4/IPv6    : ✔ Online / ✔ Online
 Uptime       : 35 days 1:54
---------------------------------------------------------------------------
 Location     : Germany, Frankfurt Am Main (Hesse)
 ASN & ISP    : AS3214, xTom GmbH / 365 Group LLC
---------------------------------------------------------------------------

 ## Geekbench v5 CPU Benchmark:

  Single Core : 1133  (EXCELLENT)
   Multi Core : 1125

 ## IO Test

 CPU Speed:
    bzip2     : 126 MB/s
   sha256     : 238 MB/s
   md5sum     : 495 MB/s

 RAM Speed:
   Avg. write : 2321.1 MB/s
   Avg. read  : 6519.5 MB/s

 Disk Speed:
   1st run    : 1.3 GB/s
   2nd run    : 1.4 GB/s
   3rd run    : 1.4 GB/s
   -----------------------
   Average    : 1399.5 MB/s

 ## Global Speedtest.net

 Location                       Upload           Download         Ping   
---------------------------------------------------------------------------
 Nearby                         905.34 Mbit/s    565.14 Mbit/s    8.001 ms
---------------------------------------------------------------------------
 USA, New York (Starry)         162.02 Mbit/s    252.10 Mbit/s   116.598 ms
 USA, Chicago (Windstream)      192.12 Mbit/s    151.00 Mbit/s   97.413 ms
 USA, Houston (Comcast)         141.25 Mbit/s    171.44 Mbit/s   115.626 ms
 USA, Los Angeles (Windstream)  127.20 Mbit/s    86.26 Mbit/s    150.708 ms
 UK, London (toob Ltd)          821.85 Mbit/s    343.68 Mbit/s   14.191 ms
 Germany, Berlin (DNS:NET)      750.63 Mbit/s    463.51 Mbit/s   11.421 ms
 Spain, Madrid (MasMovil)       509.95 Mbit/s    313.30 Mbit/s   31.336 ms
 Italy, Rome (Unidata)          274.34 Mbit/s    974.19 Mbit/s   38.124 ms
 India, Mumbai (Tatasky)        116.25 Mbit/s    207.19 Mbit/s   127.744 ms
 Singapore (StarHub)            101.79 Mbit/s    155.29 Mbit/s   165.264 ms
 Japan, Tsukuba (SoftEther)     18.98 Mbit/s     33.00 Mbit/s    299.237 ms
 Australia, Sydney (Optus)      20.62 Mbit/s     48.03 Mbit/s    287.803 ms
 RSA, Randburg (Cool Ideas)     110.09 Mbit/s    207.09 Mbit/s   172.482 ms
---------------------------------------------------------------------------

 Timestamp   : 2025-04-11 09:45:55 GMT

 - https://www.speedtest.net/result/17601333427.png
 - https://browser.geekbench.com/v5/cpu/23467448
{{< /spoil_subgroup >}}
{{< /spoil_group >}}

{{< spoil_group title="goecs">}}
{{< spoil_subgroup date="2025-04-12" >}}
-----------------------------VPS Fusion Monster Test------------------------------
Version: v0.1.29
Review Channel: https://t.me/vps_reviews
Go Project: https://github.com/oneclickvirt/ecs
Shell Project: https://github.com/spiritLHLS/ecs
-----------------------------System-Basic-Information-----------------------------
 CPU Model           : AMD EPYC 7763 64-Core Processor @2445.406 MHz
 CPU Cores           : 1 Virtual CPU(s)
 CPU Cache           : L1: 64 KB / L2: 512 KB / L3: 256 MB
 AES-NI              : ✔️ Enabled
 VM-x/AMD-V/Hyper-V  : ✔️ Enabled
 RAM                 : 568.53 MB / 1.89 GB
 Virtio Balloon      : ✔️ Enabled
 KSM                 : ❌ Undetected
 Swap                : 32.42 MB / 4.00 GB
 Disk                : 10.81 GB / 24.82 GB
 Boot Path           : /dev/vda3
 OS Release          : debian 12.10 [x86_64] 
 Kernel              : 6.1.0-31-amd64
 Uptime              : 36 days, 01 hours, 43 minutes
 Current Time Zone   : BST
 Load                : 0.13 / 0.07 / 0.02
 VM Type             : KVM
 NAT Type            : Port Restricted Cone
 Tcp Accelerate      : cubic
 IPV4 ASN            : AS3214 Xtom GmbH
 IPV4 Location       : Frankfurt / Hessen / Germany
 IPV4 Active IPs     : 225/256 (subnet /24)
 IPV6 ASN            : AS3214 Xtom GmbH
 IPV6 Location       : Frankfurt / Hessen / Germany
 IPv6 Mask           : /64
----------------------------CPU-Test--sysbench-Method-----------------------------
1 Thread(s) Test:   3542.55
---------------------------Memory-Test--sysbench-Method---------------------------
Single Seq Write Speed: 24140.81 MB/s(25.31K IOPS, 5s)
Single Seq Read  Speed: 41658.60 MB/s(43.68K IOPS, 5s)
------------------------------Disk-Test--fio-Method-------------------------------
Test Path     Block    Read(IOPS)              Write(IOPS)             Total(IOPS)
/root         4k       160.56 MB/s(40.1k)      160.99 MB/s(40.2k)      321.55 MB/s(80.4k)      
/root         64k      2.02 GB/s(31.6k)        2.04 GB/s(31.8k)        4.06 GB/s(63.4k)        
/root         512k     9.20 GB/s(18.0k)        9.69 GB/s(18.9k)        18.89 GB/s(36.9k)       
/root         1m       9.66 GB/s(9438)         10.31 GB/s(10.1k)       19.97 GB/s(19.5k)       
-----------------------Cross-Border-Streaming-Media-Unlock------------------------
IPV4:
===============[ Global ]===============
Apple                     YES (Region: DEU)
BingSearch                YES (Region: DE)
Claude                    YES
Dazn                      Banned
Disney+                   NO (forbidden-location)
Gemini                    NO
GoogleSearch              YES
Google Play Store         YES (Region: DE)
IQiYi                     YES (Region: DE)
Instagram Licensed Audio  YES
KOCOWA                    YES
MetaAI                    NO (AbraGeoBlocked)
Netflix                   YES (Region: US)
Netflix CDN               DE
OneTrust                  YES (Region: DE HESSE)
ChatGPT                   YES (Region: DE)
Paramount+                YES
Amazon Prime Video        YES (Region: DE)
Reddit                    NO
SonyLiv                   YES (Region: DE)
Sora                      YES (Region: DE)
Spotify Registration      NO
Steam Store               YES (Community Available) (Region: DE)
TVBAnywhere+              YES (Region: DE)
TikTok                    YES (Region: DE)
Viu.com                   YES
Wikipedia Editability     NO
YouTube Region            YES (Region: DE)
YouTube CDN               FRA
---------------------------------Email-Port-Check---------------------------------
Platform  SMTP  SMTPS POP3  POP3S IMAP  IMAPS
LocalPort ✔     ✔     ✔     ✔     ✔     ✔    
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
GMX       ✔     ✘     ✔     ✘     ✔     ✘    
Sina      ✔     ✔     ✔     ✘     ✔     ✘    
Apple     ✘     ✘     ✘     ✘     ✘     ✘    
FastMail  ✘     ✔     ✘     ✘     ✘     ✘    
ProtonMail✘     ✘     ✘     ✘     ✘     ✘    
MXRoute   ✔     ✘     ✔     ✘     ✔     ✘    
Namecrane ✔     ✔     ✔     ✘     ✔     ✘    
XYAMail   ✘     ✘     ✘     ✘     ✘     ✘    
ZohoMail  ✘     ✔     ✘     ✘     ✘     ✘    
Inbox_eu  ✔     ✔     ✔     ✘     ✘     ✘    
Free_fr   ✘     ✔     ✔     ✘     ✔     ✘    
------------------------------------Speed-Test------------------------------------
Location        Upload Speed    Download Speed  Latency         PacketLoss      
Speedtest.net   1811.71 Mbps    6868.10 Mbps    1.092503ms      N/A             
Frankfurt       742.73 Mbps     833.36 Mbps     1.672776ms      N/A             
LosAngeles      75.03 Mbps      226.56 Mbps     154.08218ms     N/A             
HongKong        56.81 Mbps      184.15 Mbps     191.930215ms    N/A             
Tokyo,Japan     41.10 Mbps      174.84 Mbps     275.319215ms    N/A             
Singapore       38.50 Mbps      74.99 Mbps      288.111398ms    N/A             
----------------------------------------------------------------------------------
Cost    Time          : 4 min 37 sec
Current Time          : Sat Apr 12 10:28:36 BST 2025
----------------------------------------------------------------------------------
{{< /spoil_subgroup >}}
{{< /spoil_group >}}
