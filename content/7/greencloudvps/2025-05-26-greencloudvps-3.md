+++
title = "GreenCloudVPS SG 🇸🇬 2C/4G/35G/750G"
date = 2025-05-26T01:00:00+00:00
slug = "greencloudvps-3"

description = "The VPS Benchmark of GreenCloudVPS BudgetKVMSGDC1-2 in Singapore, SG 🇸🇬"
type = "blog"
+++

##### Plan -> BudgetKVMSGDC1-2 [Link](https://greencloudvps.com/billing/store/budget-kvm-sale/budgetkvmsgdc1-2)

{{< vps_specs
cpu_model="EPYC Rome CPU"
cpu_core="2"
ram_total="4GB"
storage_total="35GB"
traffic_limit="750G"
traffic_type="IN+OUT"
traffic_speed="10Gbps"
>}}

{{< vps_location
asn="8888"
asn_name="xTom Pty Ltd"
country="SG"
city="Singapore"
>}}

{{< osm location="1.3402, 103.8867" popup="Singapore, SG 🇸🇬" >}}

{{< vps_info
cpu="AMD EPYC 7642 48-Core Processor"
aesni="yes"
virt="AMD-V"
hypervisor="kvm"
memory_total="3.8Gi"
memory_read="5703.08 MiB/sec"
memory_write="4864.09 MiB/sec"
disk_total="35G"
>}}

{{< network_upstream 
network_map="96.9.213.0_24"
network_range="96.9.213.0/24"
>}}
AS137409 'GSL Networks Pty LTD'
AS3491 'PCCW Global, Inc.'
{{< /network_upstream >}}

{{< spoil_group title="lscpu">}}
{{< spoil_subgroup date="2025-05-26" >}}
Architecture:                         x86_64
CPU op-mode(s):                       32-bit, 64-bit
Address sizes:                        48 bits physical, 48 bits virtual
Byte Order:                           Little Endian
CPU(s):                               2
On-line CPU(s) list:                  0,1
Vendor ID:                            AuthenticAMD
BIOS Vendor ID:                       Red Hat
Model name:                           AMD EPYC 7642 48-Core Processor
BIOS Model name:                      RHEL 7.6.0 PC (i440FX + PIIX, 1996)  CPU @ 2.0GHz
BIOS CPU family:                      1
CPU family:                           23
Model:                                49
Thread(s) per core:                   1
Core(s) per socket:                   1
Socket(s):                            2
Stepping:                             0
BogoMIPS:                             4591.37
Flags:                                fpu vme de pse tsc msr pae mce cx8 apic sep mtrr pge mca cmov pat pse36 clflush mmx fxsr sse sse2 syscall nx mmxext fxsr_opt pdpe1gb rdtscp lm rep_good nopl cpuid extd_apicid tsc_known_freq pni pclmulqdq ssse3 fma cx16 sse4_1 sse4_2 x2apic movbe popcnt tsc_deadline_timer aes xsave avx f16c rdrand hypervisor lahf_lm cmp_legacy svm cr8_legacy abm sse4a misalignsse 3dnowprefetch osvw perfctr_core ssbd ibrs ibpb stibp vmmcall fsgsbase tsc_adjust bmi1 avx2 smep bmi2 rdseed adx smap clflushopt clwb sha_ni xsaveopt xsavec xgetbv1 clzero xsaveerptr wbnoinvd arat npt lbrv nrip_save tsc_scale vmcb_clean pausefilter pfthreshold v_vmsave_vmload vgif umip rdpid arch_capabilities
Virtualization:                       AMD-V
Hypervisor vendor:                    KVM
Virtualization type:                  full
L1d cache:                            64 KiB (2 instances)
L1i cache:                            64 KiB (2 instances)
L2 cache:                             1 MiB (2 instances)
L3 cache:                             512 MiB (2 instances)
NUMA node(s):                         1
NUMA node0 CPU(s):                    0,1
Vulnerability Gather data sampling:   Not affected
Vulnerability Itlb multihit:          Not affected
Vulnerability L1tf:                   Not affected
Vulnerability Mds:                    Not affected
Vulnerability Meltdown:               Not affected
Vulnerability Mmio stale data:        Not affected
Vulnerability Reg file data sampling: Not affected
Vulnerability Retbleed:               Mitigation; untrained return thunk; SMT disabled
Vulnerability Spec rstack overflow:   Mitigation; SMT disabled
Vulnerability Spec store bypass:      Mitigation; Speculative Store Bypass disabled via prctl
Vulnerability Spectre v1:             Mitigation; usercopy/swapgs barriers and __user pointer sanitization
Vulnerability Spectre v2:             Mitigation; Retpolines; IBPB conditional; STIBP disabled; RSB filling; PBRSB-eIBRS Not affected; BHI Not affected
Vulnerability Srbds:                  Not affected
Vulnerability Tsx async abort:        Not affected
{{< /spoil_subgroup >}}
{{< /spoil_group>}}

{{< spoil_group title="yabs">}}
{{< spoil_subgroup date="2025-05-26" >}}
# ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## #
#              Yet-Another-Bench-Script              #
#                     v2025-04-20                    #
# https://github.com/masonr/yet-another-bench-script #
# ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## #

Mon May 26 11:24:32 AM BST 2025

Basic System Information:
---------------------------------
Uptime     : 65 days, 4 hours, 21 minutes
Processor  : AMD EPYC 7642 48-Core Processor
CPU cores  : 2 @ 2295.688 MHz
AES-NI     : ✔ Enabled
VM-x/AMD-V : ✔ Enabled
RAM        : 3.8 GiB
Swap       : 4.0 GiB
Disk       : 34.9 GiB
Distro     : Debian GNU/Linux 12 (bookworm)
Kernel     : 6.1.0-31-amd64
VM Type    : KVM
IPv4/IPv6  : ✔ Online / ❌ Offline

IPv4 Network Information:
---------------------------------
ISP        : Nexeon Technologies
ASN        : AS8888 xTom Pty Ltd
Host       : 365 Group LLC
Location   : Singapore, Central Singapore (01)
Country    : Singapore

fio Disk Speed Tests (Mixed R/W 50/50) (Partition /dev/vda3):
---------------------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------   | ---            ----  | ----           ---- 
Read       | 126.92 MB/s  (31.7k) | 2.32 GB/s    (36.3k)
Write      | 127.25 MB/s  (31.8k) | 2.33 GB/s    (36.5k)
Total      | 254.18 MB/s  (63.5k) | 4.66 GB/s    (72.8k)
           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------   | ---            ----  | ----           ---- 
Read       | 4.24 GB/s     (8.2k) | 4.90 GB/s     (4.7k)
Write      | 4.47 GB/s     (8.7k) | 5.22 GB/s     (5.1k)
Total      | 8.71 GB/s    (17.0k) | 10.13 GB/s    (9.8k)

iperf3 Network Speed Tests (IPv4):
---------------------------------
Provider        | Location (Link)           | Send Speed      | Recv Speed      | Ping           
-----           | -----                     | ----            | ----            | ----           
Clouvider       | London, UK (10G)          | 223 Mbits/sec   | 108 Mbits/sec   | --             
Eranium         | Amsterdam, NL (100G)      | 375 Mbits/sec   | 233 Mbits/sec   | --             
Uztelecom       | Tashkent, UZ (10G)        | 503 Mbits/sec   | 72.0 Mbits/sec  | --             
Leaseweb        | Singapore, SG (10G)       | 2.34 Gbits/sec  | 4.20 Gbits/sec  | --             
Clouvider       | Los Angeles, CA, US (10G) | 217 Mbits/sec   | 76.5 Mbits/sec  | --             
Leaseweb        | NYC, NY, US (10G)         | 540 Mbits/sec   | 100 Mbits/sec   | --             
Edgoo           | Sao Paulo, BR (1G)        | busy            | 66.6 Mbits/sec  | --             

Geekbench 4 Benchmark Test:
---------------------------------
Test            | Value                         
                |                               
Single Core     | 3962                          
Multi Core      | 6939                          
Full Test       | https://browser.geekbench.com/v4/cpu/18749008

Geekbench 5 Benchmark Test:
---------------------------------
Test            | Value                         
                |                               
Single Core     | 834                           
Multi Core      | 1536                          
Full Test       | https://browser.geekbench.com/v5/cpu/23567200

Geekbench 6 Benchmark Test:
---------------------------------
Test            | Value                         
                |                               
Single Core     | 1069                          
Multi Core      | 1911                          
Full Test       | https://browser.geekbench.com/v6/cpu/12144507

YABS completed in 19 min 35 sec
{{< /spoil_subgroup >}}
{{< /spoil_group>}}

{{< spoil_group title="nws">}}
{{< spoil_subgroup date="2025-05-26" >}}
---------------------------------- nws.sh ---------------------------------
      A simple script to bench network performance using speedtest-cli     
---------------------------------------------------------------------------
 Version            : v2025.05.01
 Global Speedtest   : wget -qO- nws.sh | bash
 Region Speedtest   : wget -qO- nws.sh | bash -s -- -r <region>
---------------------------------------------------------------------------
 Basic System Info
---------------------------------------------------------------------------
 CPU Model          : AMD EPYC 7642 48-Core Processor
 CPU Cores          : 2 @ 2295.688 MHz
 CPU Cache          : 512 KB
 AES-NI             : ✔ Enabled
 VM-x/AMD-V         : ✔ Enabled
 Total Disk         : 34.9 GB (7.1 GB Used)
 Total RAM          : 3.8 GB (434.7 MB Used)
 Total Swap         : 4.0 GB (524.0 KB Used)
 System uptime      : 65 days, 4 hour 40 min
 Load average       : 0.82, 0.93, 0.58
 OS                 : Debian GNU/Linux 12
 Arch               : x86_64 (64 Bit)
 Kernel             : 6.1.0-31-amd64
 Virtualization     : KVM
 TCP Control        : cubic
---------------------------------------------------------------------------
 Basic Network Info
---------------------------------------------------------------------------
 Primary Network    : IPv4
 IPv6 Access        : ❌ Offline
 IPv4 Access        : ✔ Online
 ISP                : Nexeon Technologies
 ASN                : AS8888 xTom Pty Ltd
 Host               : 365 Group LLC
 Location           : Singapore, Central Singapore-01, Singapore
---------------------------------------------------------------------------
 Speedtest.net (Region: GLOBAL)
---------------------------------------------------------------------------
 Location         Latency     Loss    DL Speed       UP Speed       Server      

 ISP: Nexeon Technologies 

 Nearest          201.28 ms   0.0%    356.98 Mbps    423.51 Mbps    Vyve Broadband - Abilene, KS 

 Kochi, IN        49.62 ms    0.0%    182.85 Mbps    906.11 Mbps    Asianet Broadband - Cochin 
 Bangalore, IN    51.81 ms    0.0%    330.09 Mbps    1075.84 Mbps   Bharti Airtel Ltd - Bangalore 
 Chennai, IN      36.12 ms    0.3%    489.31 Mbps    695.69 Mbps    Jio - Chennai 
 Mumbai, IN       77.78 ms    0.0%    330.74 Mbps    650.14 Mbps    Melbicom - Mumbai 
 Delhi, IN        86.80 ms    0.0%    154.75 Mbps    737.96 Mbps    Tata Play Fiber - New Delhi 

 Seattle, US      162.11 ms   N/A     93.14 Mbps     295.50 Mbps    Comcast - Seattle, WA 
 Los Angeles, US  165.66 ms   0.0%    165.60 Mbps    305.32 Mbps    ReliableSite Hosting - Los Angeles, CA 
 Dallas, US       197.39 ms   0.0%    130.66 Mbps    192.17 Mbps    Hivelocity - Dallas, TX 
 Miami, US        273.94 ms   0.0%    170.98 Mbps    103.50 Mbps    Telxius - Miami, FL 
 New York, US     205.35 ms   0.0%    651.49 Mbps    111.29 Mbps    GSL Networks - New York, NY 
 Toronto, CA      235.88 ms   0.0%    192.26 Mbps    266.36 Mbps    Rogers - Toronto, ON 
 Mexico City, MX  233.85 ms   N/A     193.89 Mbps    193.49 Mbps    INFINITUM - Ciudad de México 

 London, UK       149.49 ms   0.0%    410.59 Mbps    219.22 Mbps    VeloxServ Communications - London 
 Amsterdam, NL    157.99 ms   42.1%   349.14 Mbps    329.90 Mbps    31173 Services AB - Amsterdam 
 Paris, FR        181.82 ms   N/A     366.51 Mbps    133.92 Mbps    Axione - Paris 
 Frankfurt, DE    149.78 ms   0.0%    313.56 Mbps    284.09 Mbps    Clouvider Ltd - Frankfurt am Main 
 Warsaw, PL       169.17 ms   0.0%    476.87 Mbps    355.93 Mbps    Play - Warszawa 
 Bucharest, RO    183.91 ms   0.0%    11.51 Mbps     277.89 Mbps    Vodafone Romania Mobile - Bucharest - Bucharest 
 Moscow, RU       195.12 ms   0.0%    58.43 Mbps     267.85 Mbps    t2 Russia - Moscow 

 Jeddah, SA       211.94 ms   0.0%    470.70 Mbps    251.09 Mbps    Saudi Telecom Company 
 Dubai, AE        108.87 ms   N/A     1174.15 Mbps   138.18 Mbps    e& UAE - Dubai 
 Istanbul, TR     235.32 ms   0.0%    207.73 Mbps    287.47 Mbps    Turkcell - Istanbul 
 Tehran, IR       237.46 ms   0.0%    145.76 Mbps    133.25 Mbps    MCI         
 Cairo, EG        202.11 ms   N/A     195.73 Mbps    186.42 Mbps    Orange Egypt - Cairo 

 Tokyo, JP        67.78 ms    N/A     395.70 Mbps    776.22 Mbps    GSL Networks - Tokyo 
 Shanghai, CU-CN  144.05 ms   0.0%    381.28 Mbps    484.06 Mbps    China Unicom 5G - Shanghai 
 Suzhou, CT-CN    346.10 ms   N/A     119.39 Mbps    97.83 Mbps     China Telecom JiangSu 5G - Suzhou 
 Hong Kong, CN    46.24 ms    0.3%    212.10 Mbps    365.81 Mbps    Misaka Network, Inc. - Hong Kong 
 Singapore, SG    0.74 ms     0.0%    1749.96 Mbps   2574.73 Mbps   NewMedia Express - Singapore 
 Jakarta, ID      15.39 ms    0.3%    632.48 Mbps    1206.85 Mbps   PT Solnet Indonesia - Jakarta 
---------------------------------------------------------------------------
 Avg DL Speed       : 358.53 Mbps
 Avg UL Speed       : 462.18 Mbps

 Total DL Data      : 16.37 GB
 Total UL Data      : 23.08 GB
 Total Data         : 39.45 GB
---------------------------------------------------------------------------
 Duration           : 18 min 27 sec
 System Time        : 26/05/2025 - 12:02:36 BST
 Total Script Runs  : 113210
---------------------------------------------------------------------------
 Result             : https://result.nws.sh/r/1748257437_CLMCAN_GLOBAL.txt
---------------------------------------------------------------------------
{{< /spoil_subgroup >}}
{{< /spoil_group>}}

{{< spoil_group title="benchmonster">}}
{{< spoil_subgroup date="2025-05-26" >}}
 Region: Global  https://bench.monster v1.7.4 2023-12-15 
 Usage : curl -sL bench.monster | bash -s -- -Global
---------------------------------------------------------------------------
 OS           : Debian GNU/Linux 12 (64 Bit)
 Virt/Kernel  : KVM / 6.1.0-31-amd64
 CPU Model    : AMD EPYC 7642 48-Core Processor
 CPU Cores    : 2 @ 2295.688 MHz x86_64 512 KB Cache
 CPU Flags    : AES-NI Enabled & VM-x/AMD-V Enabled
 Load Average : 0.04, 0.08, 0.19
 Total Space  : 35G (7.2G ~21% used)
 Total RAM    : 3877 MB (435 MB + 1210 MB Buff in use)
 Total SWAP   : 4095 MB (0 MB in use)
 IPv4/IPv6    : ✔ Online / ❌ Offline
 Uptime       : 65 days 5:0
---------------------------------------------------------------------------
 Location     : Singapore, Singapore (Central Singapore)
 ASN & ISP    : AS8888, Nexeon Technologies / 365 Group LLC
---------------------------------------------------------------------------

 ## Geekbench v6 CPU Benchmark:

  Single Core : 1077  (VERY GOOD)
   Multi Core : 1904

 ## IO Test

 CPU Speed:
    bzip2     :  97.6 MB/s
   sha256     : 193 MB/s
   md5sum     : 450 MB/s

 RAM Speed:
   Avg. write : 2252.8 MB/s
   Avg. read  : 6758.4 MB/s

 Disk Speed:
   1st run    : 1.6 GB/s
   2nd run    : 2.0 GB/s
   3rd run    : 1.9 GB/s
   -----------------------
   Average    : 1877.3 MB/s

 ## Global Speedtest.net

 Location                       Upload           Download         Ping   
---------------------------------------------------------------------------
 Nearby                         587.45 Mbit/s    455.51 Mbit/s    4.517 ms
---------------------------------------------------------------------------
 USA, New York (Starry)         40.77 Mbit/s     69.66 Mbit/s    204.110 ms
 USA, Chicago (Windstream)      5.49 Mbit/s      9.85 Mbit/s     ping error!
 USA, Houston (Comcast)         6.19 Mbit/s      7.88 Mbit/s     ping error!
 USA, Los Angeles (Windstream)  5.58 Mbit/s      9.06 Mbit/s     ping error!
 UK, London (toob Ltd)          65.68 Mbit/s     55.85 Mbit/s    177.691 ms
 Germany, Berlin (DNS:NET)      49.51 Mbit/s     73.58 Mbit/s    159.066 ms
 Spain, Madrid (MasMovil)       58.85 Mbit/s     77.01 Mbit/s    147.528 ms
 Italy, Rome (Unidata)          44.25 Mbit/s     42.84 Mbit/s    165.492 ms
 India, Mumbai (Tatasky)        120.51 Mbit/s    90.35 Mbit/s    79.029 ms
 Singapore (StarHub)            1248.60 Mbit/s   1510.34 Mbit/s  1.101 ms
 Japan, Tsukuba (SoftEther)     107.58 Mbit/s    92.67 Mbit/s    ping error!
---------------------------------------------------------------------------

 Timestamp   : 2025-05-26 11:23:37 GMT

 - https://www.speedtest.net/result/17777338327.png
 - https://browser.geekbench.com/v6/cpu/12144817
{{< /spoil_subgroup >}}
{{< /spoil_group>}}

{{< spoil_group title="goecs">}}
{{< spoil_subgroup date="2025-05-26" >}}
-----------------------------VPS Fusion Monster Test------------------------------
Version: v0.1.29
Review Channel: https://t.me/vps_reviews
Go Project: https://github.com/oneclickvirt/ecs
Shell Project: https://github.com/spiritLHLS/ecs
-----------------------------System-Basic-Information-----------------------------
 CPU Model           : AMD EPYC 7642 48-Core Processor @2295.688 MHz
 CPU Cores           : 2 Virtual CPU(s)
 CPU Cache           : L1: 128 KB / L2: 1 MB / L3: 512 MB
 AES-NI              : ✔️ Enabled
 VM-x/AMD-V/Hyper-V  : ✔️ Enabled
 RAM                 : 429.18 MB / 3.79 GB
 Virtio Balloon      : ✔️ Enabled
 KSM                 : ❌ Undetected
 Swap                : 0.51 MB / 4.00 GB
 Disk                : 7.14 GB / 34.82 GB
 Boot Path           : /dev/vda3
 OS Release          : debian 12.11 [x86_64] 
 Kernel              : 6.1.0-31-amd64
 Uptime              : 65 days, 05 hours, 20 minutes
 Current Time Zone   : BST
 Load                : 0.09 / 0.18 / 0.30
 VM Type             : KVM
 NAT Type            : Full Cone
 Tcp Accelerate      : cubic
 IPV4 ASN            : AS8888 xTom Pty Ltd
 IPV4 Location       : Kwai Chung / Hong Kong SAR / United States
 IPV4 Active IPs     : 219/256 (subnet /24)
----------------------------CPU-Test--sysbench-Method-----------------------------
1 Thread(s) Test:   1459.89
2 Thread(s) Test:   3024.16
---------------------------Memory-Test--sysbench-Method---------------------------
Single Seq Write Speed: 16994.18 MB/s(17.82K IOPS, 5s)
Single Seq Read  Speed: 37629.31 MB/s(39.46K IOPS, 5s)
------------------------------Disk-Test--fio-Method-------------------------------
Test Path     Block    Read(IOPS)              Write(IOPS)             Total(IOPS)
/root         4k       148.73 MB/s(37.2k)      149.12 MB/s(37.3k)      297.85 MB/s(74.5k)      
/root         64k      2.12 GB/s(33.2k)        2.13 GB/s(33.4k)        4.26 GB/s(66.5k)        
/root         512k     4.38 GB/s(8562)         4.62 GB/s(9017)         9.00 GB/s(17.6k)        
/root         1m       4.89 GB/s(4775)         5.22 GB/s(5093)         10.11 GB/s(9868)        
-----------------------Cross-Border-Streaming-Media-Unlock------------------------
IPV4:
===============[ Global ]===============
Apple                     YES (Region: USA)
BingSearch                YES (Region: US)
Claude                    YES
Dazn                      YES (Region: US)
Disney+                   YES (Region: SG)
Gemini                    YES (Region: SGP)
GoogleSearch              YES
Google Play Store         YES (Region: SG)
IQiYi                     YES (Region: US)
Instagram Licensed Audio  NO (Too Many Requests)
KOCOWA                    YES
MetaAI                    Unknown: get www.meta.ai failed with code: 200
Netflix                   YES (Region: US)
Netflix CDN               SG
OneTrust                  YES (Region: US)
ChatGPT                   YES (Region: US)
Paramount+                YES
Amazon Prime Video        YES (Region: US)
Reddit                    YES
SonyLiv                   YES (Region: US)
Sora                      YES (Region: US)
Spotify Registration      NO
Steam Store               YES (Community Available) (Region: US)
TVBAnywhere+              YES (Region: US)
TikTok                    YES (Region: SG)
Viu.com                   YES
Wikipedia Editability     NO
YouTube Region            YES (Region: SG)
YouTube CDN               SIN
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
GMX       ✔     ✔     ✔     ✘     ✔     ✘    
Sina      ✔     ✔     ✔     ✘     ✔     ✘    
Apple     ✘     ✔     ✘     ✘     ✘     ✘    
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
Speedtest.net   48.57 Mbps      99.72 Mbps      211.564174ms    0.00% (Sent: 403/Dup: 0/Max: 402)
Singapore       918.53 Mbps     4098.80 Mbps    969.466µs       N/A             
HongKong        91.32 Mbps      267.79 Mbps     76.803035ms     N/A             
Tokyo,Japan     43.91 Mbps      12.21 Mbps      160.551791ms    N/A             
Frankfurt       50.80 Mbps      76.18 Mbps      162.430839ms    N/A             
LosAngeles      -0.00 Mbps      -0.00 Mbps      1s              N/A             
----------------------------------------------------------------------------------
Cost    Time          : 5 min 5 sec
Current Time          : Mon May 26 12:28:46 BST 2025
----------------------------------------------------------------------------------
{{< /spoil_subgroup >}}
{{< /spoil_group>}}