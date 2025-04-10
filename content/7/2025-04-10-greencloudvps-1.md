+++
title = "GreenCloudVPS NL 1C/2G/25G/3T"
date = 2025-04-09T12:52:30+00:00
slug = "greencloudvps-1"

lastmod = 2025-04-10T08:00:00+00:00

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

{{< spoil_lscpu >}}
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
{{< /spoil_lscpu >}}

{{< spoil_yabs >}}
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
{{< /spoil_yabs >}}

{{< spoil_nws >}}
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
{{< /spoil_nws >}}
