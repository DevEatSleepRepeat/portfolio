const rpi_boot = `Uncompressing Cool Stuffs... done, booting the kernel.
[    0.000000] Booting Linux on physical CPU 0x0
[    0.000000] Drinking Coffee
[    0.000000] Initializing cgroup subsys cpuacct
[    0.000000] Initializing apple sf-mono
[    0.000000] Linux version 3.18.10 (dc4@dc4-XPS13-9333) (gcc version 4.8.3 20140303 (prerelease) (crosstool-NG linaro-1.13.1bzr2650 - Linaro GCC 2014.03)) #775 PREEMPT Thu Apr 2 18:10:12 BST 2015
[    0.000000] CPU: ARMv6-compatible processor [410fb767] revision 7 (ARMv7), cr=00c5387d
[    0.000000] CPU: PIPT / VIPT nonaliasing data cache, VIPT nonaliasing instruction cache
[    0.000000] Machine model: MacBook Air 2020 M1 7GPU 8CPU
[    0.000000] cma: Reserved 8 MiB at 0x0b800000
[    0.000000] Memory policy: Data cache writeback
[    0.000000] Hmm... I dont know about dis, STACK OVERFLOW, HELLLLPPPPP
[    0.000000] Built 1 zonelists in Zone order, mobility grouping on.  Total pages: 48768
[    0.000000] Kernel command line: dma.dmachans=0x7f35 bcm2708_fb.fbwidth=656 bcm2708_fb.fbheight=416 bcm2708.boardrev=0x2 bcm2708.serial=0xb51cb961 smsc95x.macaddr=B8:27:EB:1C:B9:61 bcm2708_fb.fbswap=1 sdhci-bcm2708.emmc_clock_freq=250000000 vc_mem.mem_base=0xec00000 vc_mem.mem_size=0x10000000  dwc_otg.lpm_enabe=0 console=ttyAMA0,115200 console=tty1 root=/dev/mmcblk0p2 rootfstype=ext4 elevator=deadline rootwait
[    0.000000] PID hash table entries: 1024 (order: 0, 4096 bytes)
[    0.000000] Dentry cache hash table entries: 32768 (order: 5, 131072 bytes)
[    0.000000] Inode-cache hash table entries: 16384 (order: 4, 65536 bytes)
[    0.000000] Memory: 177372K/196608K available (5885K kernel code, 348K rwdata, 1868K rodata, 340K init, 733K bss, 19236K reserved)
[    0.000000] Virtual kernel memory layout:
[    0.000000]     vector  : 0xffff0000 - 0xffff1000   (   4 kB)
[    0.000000]     fixmap  : 0xffc00000 - 0xffe00000   (2048 kB)
[    0.000000]     vmalloc : 0xcc800000 - 0xff000000   ( 808 MB)
[    0.000000]     lowmem  : 0xc0000000 - 0xcc000000   ( 192 MB)
[    0.000000]     modules : 0xbf000000 - 0xc0000000   (  16 MB)
[    0.000000]       .text : 0xc0008000 - 0xc079a78c   (7754 kB)
[    0.000000]       .init : 0xc079b000 - 0xc07f0000   ( 340 kB)
[    0.000000]       .data : 0xc07f0000 - 0xc084711c   ( 349 kB)
[    0.000000]        .bss : 0xc084711c - 0xc08fe848   ( 734 kB)
[    0.000000] SLUB: HWalign=32, Order=0-3, MinObjects=0, CPUs=1, Nodes=1
[    0.000000] Preemptible hierarchical RCU implementation.
[    0.000000] NR_IRQS:522
[    0.000027] sched_clock: 32 bits at 1000kHz, resolution 1000ns, wraps every 2147483648000ns
[    0.000077] Switching to timer-based delay loop, resolution 1000ns
[    0.000359] Console: colour dummy device 80x30
[    0.001422] console [tty1] enabled
[    0.001469] Calibrating delay loop (skipped), value calculated using timer frequency.. 2.00 BogoMIPS (lpj=10000)
[    0.001545] pid_max: default: 32768 minimum: 301
[    0.001931] Mount-cache hash table entries: 1024 (order: 0, 4096 bytes)
[    0.001997] Mountpoint-cache hash table entries: 1024 (order: 0, 4096 bytes)
[    0.003000] Initializing cgroup subsys memory
[    0.003093] Initializing cgroup subsys devices
[    0.003151] Initializing cgroup subsys freezer
[    0.003204] Initializing cgroup subsys net_cls
[    0.003254] Initializing cgroup subsys blkio
[    0.003377] CPU: Testing write buffer coherency: ok
[    0.003498] ftrace: allocating 19229 entries in 57 pages
[    0.107319] Setting up static identity map for 0x553698 - 0x5536d0
[    0.110174] devtmpfs: initialized
[    0.127357] VFP support v0.3: implementor 41 architecture 1 part 20 variant b rev 5
[    0.130404] pinctrl core: initialized pinctrl subsystem
[    0.133123] NET: Registered protocol family 16
[    0.138594] DMA: preallocated 4096 KiB pool for atomic coherent allocations
[    0.139999] bcm2708.uart_clock = 3000000
[    0.142890] No ATAGs?
[    0.142954] hw-breakpoint: found 6 breakpoint and 1 watchpoint registers.
[    0.143016] hw-breakpoint: maximum watchpoint size is 4 bytes.
[    0.143083] mailbox: Broadcom VideoCore Mailbox driver
[    0.143245] bcm2708_vcio: mailbox at f200b880
[    0.143703] bcm_power: Broadcom power driver
[    0.143761] bcm_power_open() -> 0
[    0.143791] bcm_power_request(0, 8)
[    0.644504] bcm_mailbox_read -> 00000080, 0
[    0.644551] bcm_power_request -> 0
[    0.644761] Serial: AMBA PL011 UART driver
[    0.645001] dev:f1: ttyAMA0 at MMIO 0x20201000 (irq = 83, base_baud = 0) is a PL011 rev3
[    1.026171] console [ttyAMA0] enabled
[    1.089428] SCSI subsystem initialized
[    1.093582] usbcore: registered new interface driver usbfs
[    1.099370] usbcore: registered new interface driver hub
[    1.104873] usbcore: registered new device driver usb
[    1.112045] Switched to clocksource stc
[    1.144472] FS-Cache: Loaded
[    1.147792] CacheFiles: Loaded`;

const lines = rpi_boot.split('\n');
let i = 0;
let logDiv = document.getElementById("boot_ls");
logDiv.scrollTop = logDiv.scrollHeight;

function typeWriter() {
    if (i < lines.length) {
        const logDiv = document.getElementById("boot_ls");
        logDiv.innerText += lines[i] + '\n';
        logDiv.scrollTop = logDiv.scrollHeight;
        i++;
        let rand = 18
        setTimeout(typeWriter, rand);
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function show() {
    document.getElementById('boot_button').style.display = 'none';
    document.getElementById('boot_menu').style.display = 'none';
    document.getElementById('boot_note_1').innerHTML = 'Booting Portfolio 4.7 linux 6.1 arm64';
    await sleep(200);
    document.getElementById('boot_note_2').innerHTML = '/dev/sda2: clean, 05062011/11302010 files, 3954832/64783943 blocks <br>Thanks to Apple for the <a href="https://developer.apple.com/fonts/">SF-Mono font</a>.';
    await sleep(800);
    typeWriter();
    await sleep(700);
    document.getElementById('boot_elements').style.display = 'none';
    await sleep(1000);
    document.getElementById('start_icon_flash').hidden = false;
    await sleep(1100);
    document.getElementById('start_icon_flash').style.display = 'none';
    await sleep(300);
    document.getElementById('main_content').hidden = false;
    await sleep(200);
    document.getElementById('body').style = `background-image: url("./assets/bliss.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center center;`;
}

async function quick_show() {
    document.getElementById('boot_button').style.display = 'none';
    document.getElementById('boot_menu').style.display = 'none';
    document.getElementById('boot_elements').style.display = 'none';
    document.getElementById('start_icon_flash').style.display = 'none';
    document.getElementById('main_content').hidden = false;
    document.getElementById('body').style = `background-image: url("./assets/bliss.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center center;`;
}