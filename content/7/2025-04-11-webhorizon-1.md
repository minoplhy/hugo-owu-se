+++
title = "Webhorizon SG 1C/1G/10G/1T"
date = 2025-04-11T10:28:41+00:00
slug = "webhorizon-1"

lastmod = 2025-04-12T08:00:00+00:00

description = "The VPS Benchmark of Webhorizon Ryzen-KVM-1GB in Singapore, SG"
type = "blog"
+++

##### Plan -> Ryzen-KVM-1GB (Singapore) [Link](https://clients.webhorizon.net/?/cart/42-singapore/&id=209)

{{< vps_specs
cpu_model="AMD Ryzen™ 9000"
cpu_core="1"
ram_total="1GB"
storage_total="10GB"
traffic_limit="1TB"
traffic_type="IN+OUT"
traffic_speed=""
>}}

{{< vps_location
asn="149020"
asn_name="WebHorizon Internet Services"
country="SG"
city="Singapore"

company="WebHorizon IT Broadband Limited / WebHorizon Internet Services"
register_id="14514455 / ORG-WIS5-AP(<a target=_blank href=https://wq.apnic.net/apnic-bin/whois.pl?searchtext=ORG-WIS5-AP&form_type=advanced>APNIC</a>)"
company_state="London"
company_country="UK / Maharashtra, IN"
website="webhorizon.net"
>}}

{{< vps_info
cpu="AMD Ryzen 9 9900X 12-Core Processor"
aesni="yes"
virt="AMD-V"
hypervisor="kvm"
memory_total="925Mi"
memory_read="10085.81 MiB/sec"
memory_write="9345.72 MiB/sec"
disk_total="10G"
>}}

{{< network_upstream >}}
AS137409 'GSL Networks Pty LTD'
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
BIOS Vendor ID:                       QEMU
Model name:                           AMD Ryzen 9 9900X 12-Core Processor
BIOS Model name:                      pc-q35-7.2  CPU @ 2.0GHz
BIOS CPU family:                      1
CPU family:                           26
Model:                                68
Thread(s) per core:                   1
Core(s) per socket:                   1
Socket(s):                            1
Stepping:                             0
BogoMIPS:                             8783.44
Flags:                                fpu vme de pse tsc msr pae mce cx8 apic sep mtrr pge mca cmov pat pse36 clflush mmx fxsr sse sse2 syscall nx mmxext fxsr_opt pdpe1gb rdtscp lm rep_good nopl cpuid extd_apicid tsc_known_freq pni pclmulqdq ssse3 fma cx16 sse4_1 sse4_2 x2apic movbe popcnt tsc_deadline_timer aes xsave avx f16c rdrand hypervisor lahf_lm cmp_legacy svm cr8_legacy abm sse4a misalignsse 3dnowprefetch osvw topoext perfctr_core ssbd ibrs ibpb stibp vmmcall fsgsbase tsc_adjust bmi1 avx2 smep bmi2 erms invpcid avx512f avx512dq rdseed adx smap avx512ifma clflushopt clwb avx512cd sha_ni avx512bw avx512vl xsaveopt xsavec xgetbv1 xsaves avx_vnni avx512_bf16 clzero xsaveerptr wbnoinvd arat npt lbrv nrip_save tsc_scale vmcb_clean pausefilter pfthreshold v_vmsave_vmload vgif avx512vbmi umip pku ospke avx512_vbmi2 gfni vaes vpclmulqdq avx512_vnni avx512_bitalg avx512_vpopcntdq rdpid movdiri movdir64b fsrm avx512_vp2intersect arch_capabilities
Virtualization:                       AMD-V
Hypervisor vendor:                    KVM
Virtualization type:                  full
L1d cache:                            48 KiB (1 instance)
L1i cache:                            32 KiB (1 instance)
L2 cache:                             1 MiB (1 instance)
L3 cache:                             32 MiB (1 instance)
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
Vulnerability Spec rstack overflow:   Not affected
Vulnerability Spec store bypass:      Mitigation; Speculative Store Bypass disabled via prctl
Vulnerability Spectre v1:             Mitigation; usercopy/swapgs barriers and __user pointer sanitization
Vulnerability Spectre v2:             Mitigation; Retpolines; IBPB conditional; IBRS_FW; STIBP disabled; RSB filling; PBRSB-eIBRS Not affected; BHI Not affected
Vulnerability Srbds:                  Not affected
Vulnerability Tsx async abort:        Not affected
{{< /spoil_subgroup >}}
{{< /spoil_group >}}

{{< spoil_group title="yabs">}}
{{< spoil_subgroup date="2025-04-11" >}}
# ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## #
#              Yet-Another-Bench-Script              #
#                     v2025-01-01                    #
# https://github.com/masonr/yet-another-bench-script #
# ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## #

Fri Apr 11 01:11:24 PM BST 2025

Basic System Information:
---------------------------------
Uptime     : 35 days, 23 hours, 24 minutes
Processor  : AMD Ryzen 9 9900X 12-Core Processor
CPU cores  : 1 @ 4391.724 MHz
AES-NI     : ✔ Enabled
VM-x/AMD-V : ✔ Enabled
RAM        : 925.8 MiB
Swap       : 1024.0 MiB
Disk       : 9.9 GiB
Distro     : Debian GNU/Linux 12 (bookworm)
Kernel     : 6.1.0-28-amd64
VM Type    : KVM
IPv4/IPv6  : ✔ Online / ✔ Online

IPv6 Network Information:
---------------------------------
ISP        : WebHorizon Internet Services
ASN        : AS149020 WebHorizon Internet Services
Host       : NIXI
Location   : Navi Mumbai, Maharashtra (MH)
Country    : India

fio Disk Speed Tests (Mixed R/W 50/50) (Partition /dev/sda3):
---------------------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------   | ---            ----  | ----           ---- 
Read       | 486.16 MB/s (121.5k) | 792.59 MB/s  (12.3k)
Write      | 487.44 MB/s (121.8k) | 796.76 MB/s  (12.4k)
Total      | 973.60 MB/s (243.4k) | 1.58 GB/s    (24.8k)
           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------   | ---            ----  | ----           ---- 
Read       | 1.10 GB/s     (2.1k) | 1.30 GB/s     (1.2k)
Write      | 1.16 GB/s     (2.2k) | 1.39 GB/s     (1.3k)
Total      | 2.26 GB/s     (4.4k) | 2.69 GB/s     (2.6k)

iperf3 Network Speed Tests (IPv4):
---------------------------------
Provider        | Location (Link)           | Send Speed      | Recv Speed      | Ping           
-----           | -----                     | ----            | ----            | ----           
Clouvider       | London, UK (10G)          | 544 Mbits/sec   | 585 Mbits/sec   | 150 ms         
Eranium         | Amsterdam, NL (100G)      | 114 Mbits/sec   | 588 Mbits/sec   | 154 ms         
Uztelecom       | Tashkent, UZ (10G)        | 560 Mbits/sec   | 622 Mbits/sec   | 186 ms         
Leaseweb        | Singapore, SG (10G)       | 666 Mbits/sec   | 922 Mbits/sec   | 1.66 ms        
Clouvider       | Los Angeles, CA, US (10G) | 521 Mbits/sec   | 240 Mbits/sec   | 165 ms         
Leaseweb        | NYC, NY, US (10G)         | 474 Mbits/sec   | 689 Mbits/sec   | 209 ms         
Edgoo           | Sao Paulo, BR (1G)        | busy            | 127 Mbits/sec   | 335 ms         

iperf3 Network Speed Tests (IPv6):
---------------------------------
Provider        | Location (Link)           | Send Speed      | Recv Speed      | Ping           
-----           | -----                     | ----            | ----            | ----           
Clouvider       | London, UK (10G)          | 518 Mbits/sec   | 465 Mbits/sec   | 150 ms         
Eranium         | Amsterdam, NL (100G)      | 507 Mbits/sec   | 581 Mbits/sec   | 154 ms         
Uztelecom       | Tashkent, UZ (10G)        | 449 Mbits/sec   | 462 Mbits/sec   | 186 ms         
Leaseweb        | Singapore, SG (10G)       | 667 Mbits/sec   | 913 Mbits/sec   | 1.45 ms        
Clouvider       | Los Angeles, CA, US (10G) | 230 Mbits/sec   | 383 Mbits/sec   | 165 ms         
Leaseweb        | NYC, NY, US (10G)         | 437 Mbits/sec   | 686 Mbits/sec   | 209 ms         
Edgoo           | Sao Paulo, BR (1G)        | busy            | 184 Mbits/sec   | 334 ms         

Geekbench 4 Benchmark Test:
---------------------------------
Test            | Value                         
                |                               
Single Core     | 9489                          
Multi Core      | 9195                          
Full Test       | https://browser.geekbench.com/v4/cpu/18654067

Geekbench 5 Benchmark Test:
---------------------------------
Test            | Value                         
                |                               
Single Core     | 2060                          
Multi Core      | 2163                          
Full Test       | https://browser.geekbench.com/v5/cpu/23467833

Geekbench 6 Benchmark Test:
---------------------------------
Test            | Value                         
                |                               
Single Core     | 1928                          
Multi Core      | 1040                          
Full Test       | https://browser.geekbench.com/v6/cpu/11467478

YABS completed in 23 min 4 sec
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
 CPU Model          : AMD Ryzen 9 9900X 12-Core Processor
 CPU Cores          : 1 @ 4391.724 MHz
 CPU Cache          : 1024 KB
 AES-NI             : ✔ Enabled
 VM-x/AMD-V         : ✔ Enabled
 Total Disk         : 9.9 GB (4.2 GB Used)
 Total RAM          : 925.8 MB (256.0 MB Used)
 System uptime      : 35 days, 21 hour 58 min
 Load average       : 0.39, 0.19, 0.08
 OS                 : Debian GNU/Linux 12
 Arch               : x86_64 (64 Bit)
 Kernel             : 6.1.0-28-amd64
 Virtualization     : KVM
 TCP Control        : cubic
---------------------------------------------------------------------------
 Basic Network Info
---------------------------------------------------------------------------
 Primary Network    : IPv6
 IPv6 Access        : ✔ Online
 IPv4 Access        : ✔ Online
 ISP                : WebHorizon Internet Services
 ASN                : AS149020 WebHorizon Internet Services
 Host               : NIXI
 Location           : Navi Mumbai, Maharashtra-MH, India
 Location (IPv4)    : Singapore, Singapore, SG
---------------------------------------------------------------------------
 Speedtest.net (Region: GLOBAL)
---------------------------------------------------------------------------
 Location         Latency     Loss    DL Speed       UP Speed       Server      

 ISP: WebHorizon Internet Services 

 Nearest          1.30 ms     0.0%    641.80 Mbps    925.74 Mbps    NewMedia Express - Singapore 

 Kochi, IN        60.30 ms    0.0%    628.30 Mbps    887.92 Mbps    Asianet Broadband - Cochin 
 Bangalore, IN    51.61 ms    0.0%    584.99 Mbps    898.55 Mbps    Bharti Airtel Ltd - Bangalore 
 Chennai, IN      36.05 ms    0.0%    614.05 Mbps    903.35 Mbps    Jio - Chennai 
 Mumbai, IN       55.67 ms    0.0%    594.87 Mbps    888.08 Mbps    Airtel Broadband - Mumbai 
 Delhi, IN        75.92 ms    0.0%    628.74 Mbps    849.40 Mbps    Tata Play Fiber - New Delhi 

 Seattle, US      150.15 ms   N/A     622.06 Mbps    588.12 Mbps    Comcast - Seattle, WA 
 Los Angeles, US  165.70 ms   0.0%    618.11 Mbps    537.56 Mbps    ReliableSite Hosting - Los Angeles, CA 
 Dallas, US       212.00 ms   0.0%    482.95 Mbps    420.98 Mbps    Hivelocity - Dallas, TX 
 Miami, US        234.67 ms   N/A     595.69 Mbps    363.16 Mbps    Boost Mobile - Miami, FL 
 New York, US     204.20 ms   0.0%    518.32 Mbps    429.92 Mbps    GSL Networks - New York, NY 
 Toronto, CA      228.25 ms   0.0%    524.69 Mbps    393.94 Mbps    Rogers - Toronto, ON 
 Mexico City, MX  203.41 ms   N/A     599.58 Mbps    430.71 Mbps    INFINITUM - Ciudad de México 

 London, UK       150.17 ms   0.0%    531.54 Mbps    582.85 Mbps    VeloxServ Communications - London 
 Amsterdam, NL    153.79 ms   0.0%    566.25 Mbps    579.79 Mbps    31173 Services AB - Amsterdam 
 Paris, FR        160.03 ms   N/A     466.88 Mbps    546.34 Mbps    Axione - Paris 
 Frankfurt, DE    149.03 ms   0.0%    597.09 Mbps    585.97 Mbps    Clouvider Ltd - Frankfurt am Main 
 Warsaw, PL       FAILED                                                        
 Bucharest, RO    172.04 ms   0.0%    501.30 Mbps    516.17 Mbps    Vodafone Romania Mobile - Bucharest - Bucharest 
 Moscow, RU       189.54 ms   0.0%    247.49 Mbps    458.65 Mbps    t2 Russia - Moscow 

 Jeddah, SA       221.50 ms   0.0%    350.96 Mbps    398.52 Mbps    Saudi Telecom Company 
 Dubai, AE        240.40 ms   N/A     698.57 Mbps    809.13 Mbps    e& UAE - Dubai 
 Istanbul, TR     281.34 ms   0.0%    634.21 Mbps    312.53 Mbps    Turkcell - Istanbul 
 Tehran, IR       235.18 ms   0.0%    568.96 Mbps    312.50 Mbps    MCI         
 Cairo, EG        187.03 ms   N/A     632.32 Mbps    401.73 Mbps    Orange Egypt - Cairo 

 Tokyo, JP        68.19 ms    1.3%    632.65 Mbps    865.13 Mbps    GSL Networks - Tokyo 
 Shanghai, CU-CN  293.71 ms   12.1%   363.00 Mbps    1.16 Mbps      China Unicom 5G - Shanghai 
 Suzhou, CT-CN    589.24 ms   N/A     102.53 Mbps    164.64 Mbps    China Telecom JiangSu 5G - Suzhou 
 Hong Kong, CN    FAILED                                                        
 Singapore, SG    1.28 ms     0.0%    622.89 Mbps    931.28 Mbps    NewMedia Express - Singapore 
 Jakarta, ID      FAILED - IP has been rate limited. Try again after 1 hour.                                                  
---------------------------------------------------------------------------
 Avg DL Speed       : 541.81 Mbps
 Avg UL Speed       : 570.85 Mbps

 Total DL Data      : 20.13 GB
 Total UL Data      : 20.05 GB
 Total Data         : 40.18 GB
---------------------------------------------------------------------------
 Duration           : 13 min 52 sec
 System Time        : 11/04/2025 - 11:59:32 BST
 Total Script Runs  : 107646
---------------------------------------------------------------------------
 Result             : https://result.nws.sh/r/1744368935_3YDGGO_GLOBAL.txt
---------------------------------------------------------------------------
{{< /spoil_subgroup >}}
{{< /spoil_group >}}

{{< spoil_group title="benchmonster">}}
{{< spoil_subgroup date="2025-04-11" >}}
 Region: Global  https://bench.monster v1.7.4 2023-12-15 
 Usage : curl -sL bench.monster | bash -s -- -Global
---------------------------------------------------------------------------
 OS           : Debian GNU/Linux 12 (64 Bit)
 Virt/Kernel  : KVM / 6.1.0-28-amd64
 CPU Model    : AMD Ryzen 9 9900X 12-Core Processor
 CPU Cores    : 1 @ 4391.724 MHz x86_64 1024 KB Cache
 CPU Flags    : AES-NI Enabled & VM-x/AMD-V Enabled
 Load Average : 0.07, 0.07, 0.07
 Total Space  : 10G (4.3G ~43% used)
 Total RAM    : 925 MB (299 MB + 212 MB Buff in use)
 Total SWAP   : 0 MB (0 MB in use)
 IPv4/IPv6    : ✔ Online / ✔ Online
 Uptime       : 35 days 22:12
---------------------------------------------------------------------------
 Location     : Singapore, Singapore (North East)
 ASN & ISP    : AS149020, & ROA / Maxspeed Network Private Limited
---------------------------------------------------------------------------

 ## Geekbench v4 CPU Benchmark:

  Single Core : 10169  (MONSTER)
   Multi Core : 9378

 ## IO Test

 CPU Speed:
    bzip2     : 275 MB/s
   sha256     : 638 MB/s
   md5sum     : 980 MB/s

 RAM Speed:
   Avg. write : 8294.4 MB/s
   Avg. read  : 18193.1 MB/s

 Disk Speed:
   1st run    : 1.1 GB/s
   2nd run    : 1.4 GB/s
   3rd run    : 1.5 GB/s
   -----------------------
   Average    : 1365.3 MB/s

 ## Global Speedtest.net

 Location                       Upload           Download         Ping   
---------------------------------------------------------------------------
 Nearby                         126.61 Mbit/s    309.70 Mbit/s   * 117.987 ms
---------------------------------------------------------------------------
 USA, New York (Starry)         78.27 Mbit/s     121.34 Mbit/s   204.322 ms
 USA, Chicago (Windstream)      70.57 Mbit/s     78.46 Mbit/s    211.608 ms
 USA, Houston (Comcast)         39.74 Mbit/s     11.73 Mbit/s    199.980 ms
 USA, Los Angeles (Windstream)  112.15 Mbit/s    144.09 Mbit/s   171.810 ms
 UK, London (toob Ltd)          117.03 Mbit/s    64.95 Mbit/s    179.789 ms
 Germany, Berlin (DNS:NET)      119.60 Mbit/s    146.64 Mbit/s   159.839 ms
 Spain, Madrid (MasMovil)       123.97 Mbit/s    199.51 Mbit/s   148.443 ms
 Italy, Rome (Unidata)          109.98 Mbit/s    64.62 Mbit/s    165.853 ms
 India, Mumbai (Tatasky)        323.45 Mbit/s    322.62 Mbit/s   49.038 ms
 Singapore (StarHub)            887.55 Mbit/s    629.32 Mbit/s   1.200 ms
 Japan, Tsukuba (SoftEther)     251.05 Mbit/s    229.26 Mbit/s   70.466 ms
 Australia, Sydney (Optus)      140.55 Mbit/s    216.61 Mbit/s   138.478 ms
 RSA, Randburg (Cool Ideas)     19.67 Mbit/s     52.33 Mbit/s    305.993 ms
---------------------------------------------------------------------------

 Timestamp   : 2025-04-11 11:12:04 GMT

 - https://www.speedtest.net/result/17601596310.png
 - https://browser.geekbench.com/v4/cpu/18653940
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
 CPU Model           : AMD Ryzen 9 9900X 12-Core Processor @4391.724 MHz
 CPU Cores           : 1 Virtual CPU(s)
 CPU Cache           : L1: 80 KB / L2: 1 MB / L3: 32 MB
 AES-NI              : ✔️ Enabled
 VM-x/AMD-V/Hyper-V  : ✔️ Enabled
 RAM                 : 304.57 MB / 925.83 MB
 Virtio Balloon      : ✔️ Enabled
 KSM                 : ❌ Undetected
 Swap                : 7.89 MB / 1024.00 MB
 Disk                : 6.35 GB / 9.82 GB
 Boot Path           : /dev/sda3
 OS Release          : debian 12.10 [x86_64] 
 Kernel              : 6.1.0-28-amd64
 Uptime              : 36 days, 20 hours, 37 minutes
 Current Time Zone   : BST
 Load                : 0.00 / 0.00 / 0.00
 VM Type             : KVM
 NAT Type            : Full Cone
 Tcp Accelerate      : cubic
 IPV4 ASN            : AS149020 WebHorizon Internet Services
 IPV4 Location       : Singapore / Hessen / Singapore
 IPV4 Active IPs     : 86/256 (subnet /24) 2992/262144 (prefix /14)
 IPV6 ASN            : AS149020 WebHorizon Internet Services
 IPV6 Location       : Singapore / Hessen / Singapore
 IPv6 Mask           : /128
----------------------------CPU-Test--sysbench-Method-----------------------------
1 Thread(s) Test:   6641.58
---------------------------Memory-Test--sysbench-Method---------------------------
Single Seq Write Speed: 38226.20 MB/s(40.08K IOPS, 5s)
Single Seq Read  Speed: 99913.28 MB/s(104.77K IOPS, 5s)
------------------------------Disk-Test--fio-Method-------------------------------
Test Path     Block    Read(IOPS)              Write(IOPS)             Total(IOPS)
/root         4k       492.10 MB/s(123.0k)     493.40 MB/s(123.3k)     985.50 MB/s(246.4k)     
/root         64k      811.66 MB/s(12.7k)      815.93 MB/s(12.7k)      1.63 GB/s(25.4k)        
/root         512k     1.07 GB/s(2080)         1.12 GB/s(2190)         2.19 GB/s(4270)         
/root         1m       1.23 GB/s(1196)         1.31 GB/s(1276)         2.53 GB/s(2472)         
-----------------------Cross-Border-Streaming-Media-Unlock------------------------
IPV4:
===============[ Global ]===============
Apple                     YES (Region: SGP)
BingSearch                YES (Region: WW)
Claude                    YES
Dazn                      YES (Region: SG)
Disney+                   YES (Region: SG)
Gemini                    YES (Region: SGP)
GoogleSearch              YES
Google Play Store         YES (Region: SG)
IQiYi                     YES (Region: SG)
Instagram Licensed Audio  YES
KOCOWA                    NO
MetaAI                    Unknown: get www.meta.ai failed with code: 200
Netflix                   YES (Region: US)
Netflix CDN               TW
OneTrust                  YES (Region: SG)
ChatGPT                   YES (Region: SG)
Paramount+                YES
Amazon Prime Video        YES (Region: SG)
Reddit                    YES
SonyLiv                   YES (Region: SG)
Sora                      YES (Region: SG)
Spotify Registration      NO
Steam Store               YES (Community Available) (Region: SG)
TVBAnywhere+              YES (Region: SG)
TikTok                    YES (Region: SG)
Viu.com                   YES
Wikipedia Editability     YES
YouTube Region            YES (Region: SG)
YouTube CDN               LAX
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
Speedtest.net   724.96 Mbps     929.64 Mbps     3.152282ms      0.00% (Sent: 402/Dup: 0/Max: 401)
Singapore       0.05 Mbps       929.44 Mbps     25.077861ms     N/A             
HongKong        284.15 Mbps     779.56 Mbps     34.146037ms     N/A             
Tokyo,Japan     180.74 Mbps     612.92 Mbps     91.371218ms     N/A             
Frankfurt       81.26 Mbps      433.68 Mbps     179.645023ms    N/A             
LosAngeles      51.65 Mbps      185.10 Mbps     231.618021ms    N/A             
----------------------------------------------------------------------------------
Cost    Time          : 4 min 19 sec
Current Time          : Sat Apr 12 10:29:08 BST 2025
----------------------------------------------------------------------------------
{{< /spoil_subgroup >}}
{{< /spoil_group >}}
