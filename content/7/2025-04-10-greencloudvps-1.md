+++
title = "GreenCloudVPS NL 1C/2G/25G/3T"
date = 2025-04-09T12:52:30+00:00
slug = "greencloudvps-1"

lastmod = 2025-04-12T08:00:00+00:00

description = "The VPS Benchmark of GreenCloudVPS EPYCNL-1 in AMS, NL"
type = "blog"
+++

##### Plan -> EPYCNL-1 [Link](https://greencloudvps.com/billing/store/premium-kvm-sale/epycnl-1)

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
asn="202602"
asn_name="Greencloud LLC"
country="NL"
city="Amsterdam"

company="365 Group LLC / GREENCLOUD LLC"
register_id="6645389 / 0109492303"
company_state="Delaware"
company_country="US / Hanoi, VN"
website="greencloudvps.com"
>}}

{{< vps_info
cpu="AMD EPYC 7763 64-Core Processor"
aesni="yes"
virt="AMD-V"
hypervisor="kvm"
memory_total="1.9Gi"
memory_read="6437.09 MiB/sec"
memory_write="5597.14 MiB/sec"
disk_total="25G"
>}}

{{< network_upstream >}}
AS24875 'NovoServe B.V.'
{{< /network_upstream >}}

{{< spoil_group title="lscpu">}}
{{< spoil_subgroup date="2025-04-09" >}}
Architecture:             x86_64
  CPU op-mode(s):         32-bit, 64-bit
  Address sizes:          48 bits physical, 48 bits virtual
  Byte Order:             Little Endian
CPU(s):                   1
  On-line CPU(s) list:    0
Vendor ID:                AuthenticAMD
  BIOS Vendor ID:         Red Hat
  Model name:             AMD EPYC 7763 64-Core Processor
    BIOS Model name:      RHEL 7.6.0 PC (i440FX + PIIX, 1996)  CPU @ 2.0GHz
    BIOS CPU family:      1
    CPU family:           25
    Model:                1
    Thread(s) per core:   1
    Core(s) per socket:   1
    Socket(s):            1
    Stepping:             1
    BogoMIPS:             4890.81
    Flags:                fpu vme de pse tsc msr pae mce cx8 apic sep mtrr pge mca cmov pat pse36 clflush mmx fxsr sse sse2 syscall nx mmxext fxsr_opt pdpe1gb rdtscp lm rep_good nopl cpuid extd_apicid tsc_
                          known_freq pni pclmulqdq ssse3 fma cx16 pcid sse4_1 sse4_2 x2apic movbe popcnt tsc_deadline_timer aes xsave avx f16c rdrand hypervisor lahf_lm cmp_legacy svm cr8_legacy abm sse4a 
                          misalignsse 3dnowprefetch osvw perfctr_core invpcid_single ssbd ibrs ibpb stibp vmmcall fsgsbase tsc_adjust bmi1 avx2 smep bmi2 erms invpcid rdseed adx smap clflushopt clwb sha_ni
                           xsaveopt xsavec xgetbv1 xsaves clzero xsaveerptr wbnoinvd arat npt lbrv nrip_save tsc_scale vmcb_clean flushbyasid pausefilter pfthreshold v_vmsave_vmload vgif umip pku ospke vae
                          s vpclmulqdq rdpid fsrm arch_capabilities
Virtualization features:  
  Virtualization:         AMD-V
  Hypervisor vendor:      KVM
  Virtualization type:    full
Caches (sum of all):      
  L1d:                    32 KiB (1 instance)
  L1i:                    32 KiB (1 instance)
  L2:                     512 KiB (1 instance)
  L3:                     256 MiB (1 instance)
NUMA:                     
  NUMA node(s):           1
  NUMA node0 CPU(s):      0
Vulnerabilities:          
  Gather data sampling:   Not affected
  Itlb multihit:          Not affected
  L1tf:                   Not affected
  Mds:                    Not affected
  Meltdown:               Not affected
  Mmio stale data:        Not affected
  Reg file data sampling: Not affected
  Retbleed:               Not affected
  Spec rstack overflow:   Mitigation; safe RET
  Spec store bypass:      Mitigation; Speculative Store Bypass disabled via prctl
  Spectre v1:             Mitigation; usercopy/swapgs barriers and __user pointer sanitization
  Spectre v2:             Mitigation; Retpolines; IBPB conditional; IBRS_FW; STIBP disabled; RSB filling; PBRSB-eIBRS Not affected; BHI Not affected
  Srbds:                  Not affected
  Tsx async abort:        Not affected
{{< /spoil_subgroup >}}
{{< /spoil_group >}}

{{< spoil_group title="yabs">}}
{{< spoil_subgroup date="2025-04-09" >}}
# ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## #
#              Yet-Another-Bench-Script              #
#                     v2025-01-01                    #
# https://github.com/masonr/yet-another-bench-script #
# ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## #

Thu Apr 10 06:53:06 AM BST 2025

Basic System Information:
---------------------------------
Uptime     : 46 days, 11 hours, 58 minutes
Processor  : AMD EPYC 7763 64-Core Processor
CPU cores  : 1 @ 2445.406 MHz
AES-NI     : ✔ Enabled
VM-x/AMD-V : ✔ Enabled
RAM        : 1.9 GiB
Swap       : 4.0 GiB
Disk       : 24.9 GiB
Distro     : Debian GNU/Linux 12 (bookworm)
Kernel     : 6.1.0-30-amd64
VM Type    : KVM
IPv4/IPv6  : ✔ Online / ✔ Online

IPv6 Network Information:
---------------------------------
ISP        : 365 Online Technology Joint Stock Company
ASN        : AS202602 Greencloud LLC
Location   : Amsterdam, North Holland (NH)
Country    : The Netherlands

fio Disk Speed Tests (Mixed R/W 50/50) (Partition /dev/vda3):
---------------------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------   | ---            ----  | ----           ---- 
Read       | 167.60 MB/s  (41.9k) | 2.32 GB/s    (36.3k)
Write      | 168.04 MB/s  (42.0k) | 2.33 GB/s    (36.5k)
Total      | 335.65 MB/s  (83.9k) | 4.66 GB/s    (72.8k)
           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------   | ---            ----  | ----           ---- 
Read       | 3.65 GB/s     (7.1k) | 3.79 GB/s     (3.7k)
Write      | 3.84 GB/s     (7.5k) | 4.04 GB/s     (3.9k)
Total      | 7.50 GB/s    (14.6k) | 7.83 GB/s     (7.6k)

iperf3 Network Speed Tests (IPv4):
---------------------------------
Provider        | Location (Link)           | Send Speed      | Recv Speed      | Ping           
-----           | -----                     | ----            | ----            | ----           
Clouvider       | London, UK (10G)          | 8.57 Gbits/sec  | 8.75 Gbits/sec  | 7.59 ms        
Eranium         | Amsterdam, NL (100G)      | 9.17 Gbits/sec  | 6.87 Gbits/sec  | 1.23 ms        
Uztelecom       | Tashkent, UZ (10G)        | 2.19 Gbits/sec  | 2.23 Gbits/sec  | 82.5 ms        
Leaseweb        | Singapore, SG (10G)       | 735 Mbits/sec   | 1.09 Gbits/sec  | 185 ms         
Clouvider       | Los Angeles, CA, US (10G) | 833 Mbits/sec   | 867 Mbits/sec   | 154 ms         
Leaseweb        | NYC, NY, US (10G)         | 2.29 Gbits/sec  | 2.46 Gbits/sec  | 76.8 ms        
Edgoo           | Sao Paulo, BR (1G)        | 938 Mbits/sec   | busy            | 197 ms         

iperf3 Network Speed Tests (IPv6):
---------------------------------
Provider        | Location (Link)           | Send Speed      | Recv Speed      | Ping           
-----           | -----                     | ----            | ----            | ----           
Clouvider       | London, UK (10G)          | 8.01 Gbits/sec  | 8.68 Gbits/sec  | 7.61 ms        
Eranium         | Amsterdam, NL (100G)      | 9.04 Gbits/sec  | 7.40 Gbits/sec  | 1.22 ms        
Uztelecom       | Tashkent, UZ (10G)        | 2.25 Gbits/sec  | 2.25 Gbits/sec  | 82.6 ms        
Leaseweb        | Singapore, SG (10G)       | 934 Mbits/sec   | 927 Mbits/sec   | 185 ms         
Clouvider       | Los Angeles, CA, US (10G) | 1.13 Gbits/sec  | 1.13 Gbits/sec  | 154 ms         
Leaseweb        | NYC, NY, US (10G)         | 1.93 Gbits/sec  | 2.44 Gbits/sec  | 76.7 ms        
Edgoo           | Sao Paulo, BR (1G)        | 938 Mbits/sec   | 877 Mbits/sec   | 197 ms         

Geekbench 5 Benchmark Test:
---------------------------------
Test            | Value                         
                |                               
Single Core     | 1131                          
Multi Core      | 1123                          
Full Test       | https://browser.geekbench.com/v5/cpu/23463952

Geekbench 6 Benchmark Test:
---------------------------------
Test            | Value                         
                |                               
Single Core     | 1480                          
Multi Core      | 1475                          
Full Test       | https://browser.geekbench.com/v6/cpu/11448490

YABS completed in 17 min 4 sec
{{< /spoil_subgroup >}}
{{< /spoil_group >}}

{{< spoil_group title="nws">}}
{{< spoil_subgroup date="2025-04-09" >}}
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
 Total Disk         : 24.9 GB (6.5 GB Used)
 Total RAM          : 1.9 GB (285.2 MB Used)
 Total Swap         : 4.0 GB (5.5 MB Used)
 System uptime      : 46 days, 12 hour 15 min
 Load average       : 0.53, 0.64, 0.45
 OS                 : Debian GNU/Linux 12
 Arch               : x86_64 (64 Bit)
 Kernel             : 6.1.0-30-amd64
 Virtualization     : KVM
 TCP Control        : cubic
---------------------------------------------------------------------------
 Basic Network Info
---------------------------------------------------------------------------
 Primary Network    : IPv6
 IPv6 Access        : ✔ Online
 IPv4 Access        : ✔ Online
 ISP                : 365 Online Technology Joint Stock Company
 ASN                : AS202602 Greencloud LLC
 Location           : Amsterdam, North Holland-NH, The Netherlands
 Location (IPv4)    : Lelystad, Flevoland, NL
---------------------------------------------------------------------------
 Speedtest.net (Region: GLOBAL)
---------------------------------------------------------------------------
 Location         Latency     Loss    DL Speed       UP Speed       Server      

 ISP: Legaco Networks B.V. 

 Nearest          0.46 ms     N/A     8805.21 Mbps   9091.36 Mbps   NovoServe - Amesterdam 

 Kochi, IN        169.18 ms   0.0%    4036.54 Mbps   526.96 Mbps    Asianet Broadband - Cochin 
 Bangalore, IN    167.74 ms   0.0%    3880.01 Mbps   526.72 Mbps    Bharti Airtel Ltd - Bangalore 
 Chennai, IN      167.96 ms   0.0%    3762.93 Mbps   446.63 Mbps    Jio - Chennai 
 Mumbai, IN       119.30 ms   0.0%    6513.94 Mbps   768.51 Mbps    Airtel Broadband - Mumbai 
 Delhi, IN        143.81 ms   0.0%    5373.41 Mbps   206.35 Mbps    Tata Play Fiber - New Delhi 

 Seattle, US      149.16 ms   N/A     5201.12 Mbps   612.25 Mbps    Comcast - Seattle, WA 
 Los Angeles, US  139.04 ms   0.0%    5664.01 Mbps   669.40 Mbps    ReliableSite Hosting - Los Angeles, CA 
 Dallas, US       113.90 ms   0.0%    5061.12 Mbps   652.63 Mbps    Hivelocity - Dallas, TX 
 Miami, US        112.82 ms   N/A     2737.70 Mbps   711.13 Mbps    Boost Mobile - Miami, FL 
 New York, US     71.89 ms    0.0%    6464.36 Mbps   1331.78 Mbps   GSL Networks - New York, NY 
 Toronto, CA      88.69 ms    0.0%    4654.57 Mbps   975.77 Mbps    Rogers - Toronto, ON 
 Mexico City, MX  187.78 ms   N/A     4174.85 Mbps   461.44 Mbps    INFINITUM - Ciudad de México 

 London, UK       8.23 ms     0.0%    8514.63 Mbps   4459.46 Mbps   VeloxServ Communications - London 
 Amsterdam, NL    0.99 ms     0.0%    7819.89 Mbps   9128.65 Mbps   31173 Services AB - Amsterdam 
 Paris, FR        10.78 ms    N/A     8383.66 Mbps   6225.10 Mbps   Axione - Paris 
 Frankfurt, DE    7.84 ms     0.0%    8216.22 Mbps   7988.65 Mbps   Clouvider Ltd - Frankfurt am Main 
 Warsaw, PL       21.04 ms    0.0%    7193.19 Mbps   4259.67 Mbps   Play - Warszawa 
 Bucharest, RO    38.32 ms    0.0%    7616.02 Mbps   2343.67 Mbps   Vodafone Romania Mobile - Bucharest - Bucharest 
 Moscow, RU       FAILED                                                        

 Jeddah, SA       67.72 ms    0.0%    6656.12 Mbps   1389.70 Mbps   Saudi Telecom Company 
 Dubai, AE        124.42 ms   N/A     6757.47 Mbps   199.07 Mbps    e& UAE - Dubai 
 Istanbul, TR     42.83 ms    0.0%    7146.70 Mbps   2215.40 Mbps   Turkcell - Istanbul 
 Tehran, IR       76.88 ms    0.0%    3135.14 Mbps   405.59 Mbps    MCI         
 Cairo, EG        57.94 ms    N/A     2783.52 Mbps   1250.05 Mbps   Orange Egypt - Cairo 

 Tokyo, JP        208.42 ms   2.3%    3738.45 Mbps   504.49 Mbps    GSL Networks - Tokyo 
 Shanghai, CU-CN  175.44 ms   0.0%    4339.92 Mbps   558.01 Mbps    China Unicom 5G - Shanghai 
 Suzhou, CT-CN    150.77 ms   N/A     5194.57 Mbps   3.59 Mbps      China Telecom JiangSu 5G - Suzhou 
 Hong Kong, CN    FAILED                                                        
 Singapore, SG    235.57 ms   0.0%    132.00 Mbps    359.57 Mbps    NewMedia Express - Singapore 
 Jakarta, ID      FAILED - IP has been rate limited. Try again after 1 hour.                                                  
---------------------------------------------------------------------------
 Avg DL Speed       : 5498.46 Mbps
 Avg UL Speed       : 2081.14 Mbps

 Total DL Data      : 205.26 GB
 Total UL Data      : 52.25 GB
 Total Data         : 257.51 GB
---------------------------------------------------------------------------
 Duration           : 12 min 51 sec
 System Time        : 10/04/2025 - 07:23:02 BST
 Total Script Runs  : 106689
---------------------------------------------------------------------------
 Result             : https://result.nws.sh/r/1744266102_0WVKBR_GLOBAL.txt
---------------------------------------------------------------------------
{{< /spoil_subgroup >}}
{{< /spoil_group >}}

{{< spoil_group title="benchmonster">}}
{{< spoil_subgroup date="2025-04-10" >}}
---------------------------------------------------------------------------
 Region: Global  https://bench.monster v1.7.4 2023-12-15 
 Usage : curl -sL bench.monster | bash -s -- -Global
---------------------------------------------------------------------------
 OS           : Debian GNU/Linux 12 (64 Bit)
 Virt/Kernel  : KVM / 6.1.0-30-amd64
 CPU Model    : AMD EPYC 7763 64-Core Processor
 CPU Cores    : 1 @ 2445.406 MHz x86_64 512 KB Cache
 CPU Flags    : AES-NI Enabled & VM-x/AMD-V Enabled
 Load Average : 0.07, 0.02, 0.00
 Total Space  : 25G (6.6G ~27% used)
 Total RAM    : 1932 MB (291 MB + 232 MB Buff in use)
 Total SWAP   : 4095 MB (5 MB in use)
 IPv4/IPv6    : ✔ Online / ✔ Online
 Uptime       : 46 days 18:39
---------------------------------------------------------------------------
 Location     : The Netherlands, Amsterdam (North Holland)
 ASN & ISP    : AS202602, 365 Online Technology Joint Stock Company / 365 Group LLC
---------------------------------------------------------------------------

 ## Geekbench v5 CPU Benchmark:

  Single Core : 1089  (EXCELLENT)
   Multi Core : 1136

 ## IO Test

 CPU Speed:
    bzip2     : 132 MB/s
   sha256     : 240 MB/s
   md5sum     : 499 MB/s

 RAM Speed:
   Avg. write : 2355.2 MB/s
   Avg. read  : 6314.7 MB/s

 Disk Speed:
   1st run    : 1.3 GB/s
   2nd run    : 1.4 GB/s
   3rd run    : 1.3 GB/s
   -----------------------
   Average    : 1365.3 MB/s

 ## Global Speedtest.net

 Location                       Upload           Download         Ping   
---------------------------------------------------------------------------
 Nearby                         5282.44 Mbit/s   6703.82 Mbit/s   3.256 ms
---------------------------------------------------------------------------
 USA, New York (Starry)         214.23 Mbit/s    660.87 Mbit/s   82.656 ms
 USA, Chicago (Windstream)      186.04 Mbit/s    503.76 Mbit/s   100.772 ms
 USA, Houston (Comcast)         125.18 Mbit/s    403.54 Mbit/s   124.473 ms
 USA, Los Angeles (Windstream)  97.61 Mbit/s     95.13 Mbit/s    158.345 ms
 UK, London (toob Ltd)          1196.71 Mbit/s   530.63 Mbit/s   11.192 ms
 Germany, Berlin (DNS:NET)      844.01 Mbit/s    2355.77 Mbit/s  22.894 ms
 Spain, Madrid (MasMovil)       531.62 Mbit/s    1122.99 Mbit/s  30.632 ms
 Italy, Rome (Unidata)          653.40 Mbit/s    641.55 Mbit/s   26.975 ms
 India, Mumbai (Tatasky)        150.50 Mbit/s    435.12 Mbit/s   121.823 ms
 Singapore (StarHub)            119.13 Mbit/s    254.94 Mbit/s   158.136 ms
 Japan, Tsukuba (SoftEther)     33.13 Mbit/s     26.88 Mbit/s    241.804 ms
 Australia, Sydney (Optus)      20.21 Mbit/s     54.17 Mbit/s    292.635 ms
 RSA, Randburg (Cool Ideas)     52.18 Mbit/s     171.45 Mbit/s   162.524 ms
---------------------------------------------------------------------------

 Finished in : 11 min 24 sec
 Timestamp   : 2025-04-10 12:45:40 GMT
 Saved in    : /root/speedtest.log

 Share results:
 - https://www.speedtest.net/result/17597662471.png
 - https://browser.geekbench.com/v5/cpu/23464860
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
 RAM                 : 350.41 MB / 1.89 GB
 Virtio Balloon      : ✔️ Enabled
 KSM                 : ❌ Undetected
 Swap                : 3.73 MB / 4.00 GB
 Disk                : 7.21 GB / 24.82 GB
 Boot Path           : /dev/vda3
 OS Release          : debian 12.10 [x86_64] 
 Kernel              : 6.1.0-30-amd64
 Uptime              : 48 days, 15 hours, 27 minutes
 Current Time Zone   : BST
 Load                : 0.00 / 0.00 / 0.00
 VM Type             : KVM
 NAT Type            : Full Cone
 Tcp Accelerate      : cubic
 IPV4 ASN            : AS202602 Greencloud LLC
 IPV4 Location       : Eindhoven / Noord-Brabant / Netherlands
 IPV4 Active IPs     : 172/256 (subnet /24)
 IPV6 ASN            : AS202602 Greencloud LLC
 IPV6 Location       : Amsterdam / Noord-Holland / Netherlands
 IPv6 Mask           : /64
----------------------------CPU-Test--sysbench-Method-----------------------------
1 Thread(s) Test:   3594.63
---------------------------Memory-Test--sysbench-Method---------------------------
Single Seq Write Speed: 24596.17 MB/s(25.79K IOPS, 5s)
Single Seq Read  Speed: 42786.45 MB/s(44.86K IOPS, 5s)
------------------------------Disk-Test--fio-Method-------------------------------
Test Path     Block    Read(IOPS)              Write(IOPS)             Total(IOPS)
/root         4k       163.44 MB/s(40.9k)      163.88 MB/s(41.0k)      327.32 MB/s(81.8k)      
/root         64k      2.13 GB/s(33.3k)        2.14 GB/s(33.5k)        4.27 GB/s(66.7k)        
/root         512k     3.64 GB/s(7112)         3.83 GB/s(7490)         7.48 GB/s(14.6k)        
/root         1m       4.60 GB/s(4494)         4.91 GB/s(4793)         9.51 GB/s(9287)         
-----------------------Cross-Border-Streaming-Media-Unlock------------------------
IPV4:
===============[ Global ]===============
Apple                     YES (Region: NLD)
BingSearch                YES (Region: NL)
Claude                    YES
Dazn                      YES (Region: NL)
Disney+                   YES (Region: NL)
Gemini                    NO
GoogleSearch              YES
Google Play Store         YES (Region: NL)
IQiYi                     YES (Region: NL)
Instagram Licensed Audio  YES
KOCOWA                    YES
MetaAI                    NO (AbraGeoBlocked)
Netflix                   YES (Region: US)
Netflix CDN               NL
OneTrust                  YES (Region: NL)
ChatGPT                   YES (Region: NL)
Paramount+                YES
Amazon Prime Video        YES (Region: NL)
Reddit                    YES
SonyLiv                   YES (Region: NL)
Sora                      YES (Region: NL)
Spotify Registration      YES (Region: NL)
Steam Store               YES (Community Available) (Region: NL)
TVBAnywhere+              YES (Region: NL)
TikTok                    YES (Region: NL)
Viu.com                   YES
Wikipedia Editability     YES
YouTube Region            YES (Region: NL)
YouTube CDN               AMS
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
Speedtest.net   1975.49 Mbps    8727.91 Mbps    594.863µs       N/A             
Frankfurt       496.03 Mbps     917.04 Mbps     8.036988ms      N/A             
LosAngeles      74.80 Mbps      860.81 Mbps     146.492625ms    N/A             
HongKong        59.16 Mbps      363.61 Mbps     195.645139ms    N/A             
Singapore       32.06 Mbps      635.99 Mbps     204.977316ms    N/A             
Tokyo,Japan     39.72 Mbps      277.91 Mbps     257.639707ms    N/A             
----------------------------------------------------------------------------------
Cost    Time          : 4 min 31 sec
Current Time          : Sat Apr 12 10:26:11 BST 2025
----------------------------------------------------------------------------------
{{< /spoil_subgroup >}}
{{< /spoil_group >}}
