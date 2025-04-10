+++
title = "Shockhosting SG 1C/2G/30G/2T"
date = 2025-04-09T21:45:09+00:00
slug = "shockhosting-1"

lastmod = 2025-04-10T08:00:00+00:00

description = "The VPS Benchmark of Shockhosting SSD-KVM-2GB in Singapore, SG"
type = "blog"
+++

##### Plan -> SSD-KVM-2GB [Link](https://shockhosting.com/portal/cart.php?a=add&pid=54)

{{< vps_specs
cpu_core="1"
ram_total="2GB"
storage_total="20GB"
traffic_limit="2TB"
traffic_type="IN+OUT"
>}}

{{< vps_location
asn="395092"
asn_name="Shock Hosting LLC"
country="SG"
city="Singapore"

company="Shock Hosting LLC"
register_id="5997884"
company_state="Delaware"
company_country="US"
website="shockhosting.com"
>}}

{{< vps_info
cpu="AMD EPYC 9354 32-Core Processor"
aesni="yes"
virt="AMD-V"
hypervisor="kvm"
memory_total="1.9Gi"
memory_read="7652.42 MiB/sec"
memory_write="6593.68 MiB/sec"
disk_total="29G"
>}}

{{< network_upstream >}}
AS136557 'Host Universal Pty Ltd'
{{< /network_upstream >}}

{{< spoil_group title="lscpu">}}
{{< spoil_subgroup date="2025-04-09" >}}
Architecture:             x86_64
  CPU op-mode(s):         32-bit, 64-bit
  Address sizes:          48 bits physical, 57 bits virtual
  Byte Order:             Little Endian
CPU(s):                   1
  On-line CPU(s) list:    0
Vendor ID:                AuthenticAMD
  BIOS Vendor ID:         Red Hat
  Model name:             AMD EPYC 9354 32-Core Processor
    BIOS Model name:      RHEL 7.6.0 PC (i440FX + PIIX, 1996)  CPU @ 2.0GHz
    BIOS CPU family:      1
    CPU family:           25
    Model:                17
    Thread(s) per core:   1
    Core(s) per socket:   1
    Socket(s):            1
    Stepping:             1
    BogoMIPS:             6490.24
    Flags:                fpu vme de pse tsc msr pae mce cx8 apic sep mtrr pge mca cmov pat pse36 clflush mmx fxsr sse sse2 syscall nx mmxext fxsr_opt pdpe1gb rdtscp lm rep_good nopl cpuid extd_apicid tsc_
                          known_freq pni pclmulqdq ssse3 fma cx16 pcid sse4_1 sse4_2 x2apic movbe popcnt tsc_deadline_timer aes xsave avx f16c rdrand hypervisor lahf_lm cmp_legacy svm cr8_legacy abm sse4a 
                          misalignsse 3dnowprefetch osvw perfctr_core invpcid_single ssbd ibrs ibpb stibp vmmcall fsgsbase tsc_adjust bmi1 avx2 smep bmi2 erms invpcid avx512f avx512dq rdseed adx smap avx51
                          2ifma clflushopt clwb avx512cd sha_ni avx512bw avx512vl xsaveopt xsavec xgetbv1 xsaves avx512_bf16 clzero xsaveerptr wbnoinvd arat npt lbrv nrip_save tsc_scale vmcb_clean pausefil
                          ter pfthreshold v_vmsave_vmload avx512vbmi umip pku ospke avx512_vbmi2 gfni vaes vpclmulqdq avx512_vnni avx512_bitalg avx512_vpopcntdq la57 rdpid fsrm flush_l1d arch_capabilities
Virtualization features:  
  Virtualization:         AMD-V
  Hypervisor vendor:      KVM
  Virtualization type:    full
Caches (sum of all):      
  L1d:                    64 KiB (1 instance)
  L1i:                    64 KiB (1 instance)
  L2:                     512 KiB (1 instance)
  L3:                     16 MiB (1 instance)
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

Wed  9 Apr 17:00:16 BST 2025

Basic System Information:
---------------------------------
Uptime     : 5 days, 11 hours, 59 minutes
Processor  : AMD EPYC 9354 32-Core Processor
CPU cores  : 1 @ 3245.124 MHz
AES-NI     : ✔ Enabled
VM-x/AMD-V : ✔ Enabled
RAM        : 1.9 GiB
Swap       : 512.0 MiB
Disk       : 28.9 GiB
Distro     : Debian GNU/Linux 12 (bookworm)
Kernel     : 6.1.0-31-amd64
VM Type    : KVM
IPv4/IPv6  : ✔ Online / ✔ Online

IPv6 Network Information:
---------------------------------
ISP        : Shock Hosting LLC
ASN        : AS395092 Shock Hosting LLC
Host       : Shock Hosting LLC
Location   : Singapore, North West (03)
Country    : Singapore

fio Disk Speed Tests (Mixed R/W 50/50) (Partition /dev/vda1):
---------------------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------   | ---            ----  | ----           ---- 
Read       | 164.83 MB/s  (41.2k) | 2.18 GB/s    (34.1k)
Write      | 165.26 MB/s  (41.3k) | 2.19 GB/s    (34.2k)
Total      | 330.10 MB/s  (82.5k) | 4.37 GB/s    (68.4k)
           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------   | ---            ----  | ----           ---- 
Read       | 4.08 GB/s     (7.9k) | 4.01 GB/s     (3.9k)
Write      | 4.30 GB/s     (8.4k) | 4.27 GB/s     (4.1k)
Total      | 8.38 GB/s    (16.3k) | 8.28 GB/s     (8.0k)

iperf3 Network Speed Tests (IPv4):
---------------------------------
Provider        | Location (Link)           | Send Speed      | Recv Speed      | Ping           
-----           | -----                     | ----            | ----            | ----           
Clouvider       | London, UK (10G)          | busy            | 184 Mbits/sec   | 157 ms         
Eranium         | Amsterdam, NL (100G)      | 741 Mbits/sec   | 528 Mbits/sec   | 180 ms         
Uztelecom       | Tashkent, UZ (10G)        | 772 Mbits/sec   | 506 Mbits/sec   | 189 ms         
Leaseweb        | Singapore, SG (10G)       | 913 Mbits/sec   | 923 Mbits/sec   | 1.51 ms        
Clouvider       | Los Angeles, CA, US (10G) | 637 Mbits/sec   | 194 Mbits/sec   | 162 ms         
Leaseweb        | NYC, NY, US (10G)         | 555 Mbits/sec   | 630 Mbits/sec   | 241 ms         
Edgoo           | Sao Paulo, BR (1G)        | busy            | 143 Mbits/sec   | 330 ms         

iperf3 Network Speed Tests (IPv6):
---------------------------------
Provider        | Location (Link)           | Send Speed      | Recv Speed      | Ping           
-----           | -----                     | ----            | ----            | ----           
Clouvider       | London, UK (10G)          | 744 Mbits/sec   | 285 Mbits/sec   | 157 ms         
Eranium         | Amsterdam, NL (100G)      | 750 Mbits/sec   | 694 Mbits/sec   | 179 ms         
Uztelecom       | Tashkent, UZ (10G)        | 740 Mbits/sec   | 277 Mbits/sec   | 189 ms         
Leaseweb        | Singapore, SG (10G)       | 901 Mbits/sec   | 911 Mbits/sec   | 1.51 ms        
Clouvider       | Los Angeles, CA, US (10G) | 636 Mbits/sec   | 284 Mbits/sec   | 162 ms         
Leaseweb        | NYC, NY, US (10G)         | 590 Mbits/sec   | busy            | 241 ms         
Edgoo           | Sao Paulo, BR (1G)        | 387 Mbits/sec   | 202 Mbits/sec   | 330 ms         

Geekbench 5 Benchmark Test:
---------------------------------
Test            | Value                         
                |                               
Single Core     | 1464                          
Multi Core      | 1470                          
Full Test       | https://browser.geekbench.com/v5/cpu/23462409

Geekbench 6 Benchmark Test:
---------------------------------
Test            | Value                         
                |                               
Single Core     | 1971                          
Multi Core      | 1955                          
Full Test       | https://browser.geekbench.com/v6/cpu/11441074

YABS completed in 17 min 31 sec
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
 CPU Model          : AMD EPYC 9354 32-Core Processor
 CPU Cores          : 1 @ 3245.124 MHz
 CPU Cache          : 512 KB
 AES-NI             : ✔ Enabled
 VM-x/AMD-V         : ✔ Enabled
 Total Disk         : 28.9 GB (4.9 GB Used)
 Total RAM          : 1.9 GB (469.1 MB Used)
 Total Swap         : 512.0 MB (66.1 MB Used)
 System uptime      : 6 days, 2 hour 28 min
 Load average       : 0.00, 0.00, 0.00
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
 ISP                : Shock Hosting LLC
 ASN                : AS395092 Shock Hosting LLC
 Host               : Shock Hosting LLC
 Location           : Singapore, North West-03, Singapore
---------------------------------------------------------------------------
 Speedtest.net (Region: GLOBAL)
---------------------------------------------------------------------------
 Location         Latency     Loss    DL Speed       UP Speed       Server      

 ISP: Shock Hosting LLC 

 Nearest          0.26 ms     0.0%    919.16 Mbps    926.95 Mbps    PT FirstMedia - Singapore 

 Kochi, IN        46.84 ms    0.0%    839.89 Mbps    881.89 Mbps    Asianet Broadband - Cochin 
 Bangalore, IN    165.04 ms   0.0%    528.34 Mbps    505.33 Mbps    Bharti Airtel Ltd - Bangalore 
 Chennai, IN      33.98 ms    0.0%    828.45 Mbps    886.75 Mbps    Jio - Chennai 
 Mumbai, IN       83.44 ms    0.0%    841.58 Mbps    874.41 Mbps    Airtel Broadband - Mumbai 
 Delhi, IN        70.59 ms    0.0%    705.91 Mbps    724.99 Mbps    Tata Play Fiber - New Delhi 

 Seattle, US      167.38 ms   N/A     211.95 Mbps    487.21 Mbps    Comcast - Seattle, WA 
 Los Angeles, US  174.84 ms   0.0%    696.09 Mbps    499.88 Mbps    ReliableSite Hosting - Los Angeles, CA 
 Dallas, US       208.12 ms   0.0%    690.18 Mbps    427.90 Mbps    Hivelocity - Dallas, TX 
 Miami, US        322.27 ms   N/A     500.92 Mbps    277.32 Mbps    Boost Mobile - Miami, FL 
 New York, US     226.70 ms   0.0%    847.16 Mbps    397.41 Mbps    GSL Networks - New York, NY 
 Toronto, CA      218.14 ms   0.0%    617.84 Mbps    404.74 Mbps    Rogers - Toronto, ON 
 Mexico City, MX  201.39 ms   N/A     581.14 Mbps    416.58 Mbps    INFINITUM - Ciudad de México 

 London, UK       153.95 ms   0.0%    924.44 Mbps    562.43 Mbps    VeloxServ Communications - London 
 Amsterdam, NL    167.54 ms   0.0%    936.19 Mbps    545.75 Mbps    31173 Services AB - Amsterdam 
 Paris, FR        243.29 ms   N/A     875.84 Mbps    386.54 Mbps    Axione - Paris 
 Frankfurt, DE    160.11 ms   0.0%    551.96 Mbps    533.01 Mbps    Clouvider Ltd - Frankfurt am Main 
 Warsaw, PL       169.64 ms   0.0%    872.94 Mbps    510.78 Mbps    Play - Warszawa 
 Bucharest, RO    173.01 ms   0.0%    939.52 Mbps    521.89 Mbps    Vodafone Romania Mobile - Bucharest - Bucharest 
 Moscow, RU       197.43 ms   0.0%    115.75 Mbps    448.72 Mbps    t2 Russia - Moscow 

 Jeddah, SA       142.18 ms   0.0%    901.09 Mbps    569.34 Mbps    Saudi Telecom Company 
 Dubai, AE        77.00 ms    N/A     940.68 Mbps    874.06 Mbps    e& UAE - Dubai 
 Istanbul, TR     215.45 ms   0.0%    752.56 Mbps    429.88 Mbps    Turkcell - Istanbul 
 Tehran, IR       265.97 ms   0.0%    459.41 Mbps    366.16 Mbps    MCI         
 Cairo, EG        270.48 ms   N/A     462.64 Mbps    333.59 Mbps    Orange Egypt - Cairo 

 Tokyo, JP        73.07 ms    2.2%    902.40 Mbps    757.34 Mbps    GSL Networks - Tokyo 
 Shanghai, CU-CN  316.64 ms   0.0%    688.98 Mbps    239.90 Mbps    China Unicom 5G - Shanghai 
 Suzhou, CT-CN    595.13 ms   N/A     284.95 Mbps    30.96 Mbps     China Telecom JiangSu 5G - Suzhou 
 Hong Kong, CN    FAILED                                                        
 Singapore, SG    0.52 ms     0.0%    922.37 Mbps    922.34 Mbps    NewMedia Express - Singapore 
 Jakarta, ID      FAILED - IP has been rate limited. Try again after 1 hour.                                                  
---------------------------------------------------------------------------
 Avg DL Speed       : 701.39 Mbps
 Avg UL Speed       : 542.90 Mbps

 Total DL Data      : 28.25 GB
 Total UL Data      : 20.98 GB
 Total Data         : 49.24 GB
---------------------------------------------------------------------------
 Duration           : 15 min 24 sec
 System Time        : 10/04/2025 - 07:44:20 BST
 Total Script Runs  : 106706
---------------------------------------------------------------------------
 Result             : https://result.nws.sh/r/1744267257_XESC8B_GLOBAL.txt
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
 Virt/Kernel  : Dedicated / 6.1.0-31-amd64
 CPU Model    : AMD EPYC 9354 32-Core Processor
 CPU Cores    : 1 @ 3245.124 MHz x86_64 512 KB Cache
 CPU Flags    : AES-NI Enabled & VM-x/AMD-V Enabled
 Load Average : 0.00, 0.01, 0.00
 Total Space  : 29G (4.9G ~18% used)
 Total RAM    : 1965 MB (468 MB + 363 MB Buff in use)
 Total SWAP   : 511 MB (65 MB in use)
 IPv4/IPv6    : ✔ Online / ✔ Online
 Uptime       : 6 days 8:35
---------------------------------------------------------------------------
 Location     : Singapore, Singapore (North West)
 ASN & ISP    : AS395092, Shock Hosting LLC / Shock
---------------------------------------------------------------------------

 ## Geekbench v5 CPU Benchmark:

  Single Core : 1409  (EXCELLENT)
   Multi Core : 1398

 ## IO Test

 CPU Speed:
    bzip2     : 148 MB/s
   sha256     : 302 MB/s
   md5sum     : 546 MB/s

 RAM Speed:
   Avg. write : 2628.3 MB/s
   Avg. read  : 7065.6 MB/s

 Disk Speed:
   1st run    : 1.0 GB/s
   2nd run    : 997 MB/s
   3rd run    : 1.0 GB/s
   -----------------------
   Average    : 1015.0 MB/s

 ## Global Speedtest.net

 Location                       Upload           Download         Ping   
---------------------------------------------------------------------------
 Nearby                         841.25 Mbit/s    893.96 Mbit/s    2.089 ms
---------------------------------------------------------------------------
 USA, New York (Starry)         55.08 Mbit/s     76.65 Mbit/s    231.313 ms
 USA, Chicago (Windstream)      65.47 Mbit/s     104.52 Mbit/s   216.291 ms
 USA, Houston (Comcast)         39.88 Mbit/s     110.65 Mbit/s   208.491 ms
 USA, Los Angeles (Windstream)  105.95 Mbit/s    116.35 Mbit/s   170.333 ms
 UK, London (toob Ltd)          106.21 Mbit/s    92.04 Mbit/s    250.271 ms
 Germany, Berlin (DNS:NET)      109.03 Mbit/s    85.94 Mbit/s    174.097 ms
 Spain, Madrid (MasMovil)       116.77 Mbit/s    126.75 Mbit/s   154.925 ms
 Italy, Rome (Unidata)          98.01 Mbit/s     82.27 Mbit/s    172.503 ms
 India, Mumbai (Tatasky)        323.75 Mbit/s    421.14 Mbit/s   55.503 ms
 Singapore (StarHub)            855.16 Mbit/s    902.74 Mbit/s   1.865 ms
 Japan, Tsukuba (SoftEther)     114.36 Mbit/s    21.36 Mbit/s    83.965 ms
 Australia, Sydney (Optus)      139.51 Mbit/s    179.48 Mbit/s   133.853 ms
 RSA, Randburg (Cool Ideas)     11.85 Mbit/s     16.65 Mbit/s    402.859 ms
---------------------------------------------------------------------------

 Finished in : 11 min 40 sec
 Timestamp   : 2025-04-10 12:47:41 GMT
 Saved in    : /root/speedtest.log

 Share results:
 - https://www.speedtest.net/result/17597656191.png
 - https://browser.geekbench.com/v5/cpu/23464859
{{< /spoil_subgroup >}}
{{< /spoil_group >}}