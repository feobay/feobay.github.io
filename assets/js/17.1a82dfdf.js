(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{292:function(v,_,t){"use strict";t.r(_);var s=t(14),o=Object(s.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h1",{attrs:{id:"计算机体系结构"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#计算机体系结构"}},[v._v("#")]),v._v(" 计算机体系结构")]),v._v(" "),_("h2",{attrs:{id:"存储器层次结构"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#存储器层次结构"}},[v._v("#")]),v._v(" 存储器层次结构")]),v._v(" "),_("p",[v._v("本章关键词："),_("strong",[v._v("存储技术")]),v._v("、"),_("strong",[v._v("局部性")]),v._v("、"),_("strong",[v._v("存储器层次结构")]),v._v("、"),_("strong",[v._v("高速缓存存储器")]),v._v("、"),_("strong",[v._v("编写高速缓存友好的代码")]),v._v("、"),_("strong",[v._v("存储器山")])]),v._v(" "),_("h3",{attrs:{id:"整体概览"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#整体概览"}},[v._v("#")]),v._v(" 整体概览")]),v._v(" "),_("p",[_("strong",[v._v("存储器系统（memory system)")]),v._v(" 是一个具有 许多不同容量、成本和访问时间的存储设备 的 层次结构。")]),v._v(" "),_("p",[v._v("从 快到慢 、小到大 、贵到便宜 内到外分别是：")]),v._v(" "),_("ul",[_("li",[_("strong",[v._v("CPU寄存器")]),v._v("：保存着最常用的数据。")]),v._v(" "),_("li",[_("strong",[v._v("高速缓存存储器(L1~L3 Cache)")]),v._v(": CPU与主存之间，存放 相对慢速的主存储器中的一部分数据和指令。")]),v._v(" "),_("li",[_("strong",[v._v("主存储器(main memory)")]),v._v(": 存储来自更慢更大的磁盘上已经持久化的数据。")]),v._v(" "),_("li",[_("strong",[v._v("外存(磁盘、固态硬盘...)")]),v._v(": 存放持久化数据，通常也作为 通过网络连接的主机之间 进行数据传输的 缓冲区域。")])]),v._v(" "),_("p",[_("strong",[v._v("存储器层次结构整体")]),v._v("（CSAPP中文3版-P421）")]),v._v(" "),_("p",[_("img",{attrs:{src:"https://feobay.oss-cn-shanghai.aliyuncs.com/img/image-20221017170802527.png",alt:"image-20221017170802527"}})]),v._v(" "),_("p",[_("strong",[v._v("Intel Core i7 的高速缓存结构")]),v._v(" （CSAPP中文3版-P438）")]),v._v(" "),_("p",[_("img",{attrs:{src:"https://feobay.oss-cn-shanghai.aliyuncs.com/img/image-20221017170943865.png",alt:"image-20221017170943865"}})]),v._v(" "),_("p",[v._v("Regs: register 寄存器")]),v._v(" "),_("p",[v._v("d-cache: data cache，只保存数据")]),v._v(" "),_("p",[v._v("i-cache: introduction cache，只保存指令")]),v._v(" "),_("p",[v._v("这个层次结构的一个有趣的特性是所有的 SRAM高速缓存存储器都 在 CPU 芯 片上。")]),v._v(" "),_("h3",{attrs:{id:"存储技术"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#存储技术"}},[v._v("#")]),v._v(" 存储技术")]),v._v(" "),_("p",[v._v("目前的存储技术主要有："),_("strong",[v._v("SRAM")]),v._v("存储器、"),_("strong",[v._v("DRAM")]),v._v("存储器、"),_("strong",[v._v("ROM")]),v._v("存储器以及"),_("strong",[v._v("旋转")]),v._v("和"),_("strong",[v._v("固态")]),v._v("的硬盘")]),v._v(" "),_("p",[v._v("**随机访问存储器(Random Access Memory, RAM)**有两类")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("静态的(Static RAM, "),_("strong",[v._v("SRAM")]),v._v(")")]),v._v(" "),_("blockquote",[_("p",[v._v("每个位存储于一个 "),_("strong",[v._v("双稳态(bistable)"),_("strong",[v._v("存储器单元里。其通过一个")]),v._v("六晶体管")]),v._v("电路来实现。")]),v._v(" "),_("p",[v._v("该电路可以无限期保持在两个不同的电压配置或者状态。")]),v._v(" "),_("p",[v._v("也就是说，"),_("strong",[v._v("只要有电，它就会永远地保持它的值。")])])])]),v._v(" "),_("li",[_("p",[v._v("动态的(Dynamic RAM, "),_("strong",[v._v("DRAM")]),v._v(")")]),v._v(" "),_("blockquote",[_("p",[v._v("DRAM的每个位通过对一个电容充电来区分01")]),v._v(" "),_("p",[v._v("其"),_("strong",[v._v("每个单元由一个电容和一个晶体管组成")]),v._v("，所以可以很密集")]),v._v(" "),_("p",[v._v("但DRAM单元容易"),_("strong",[v._v("漏电")]),v._v("，通常会在10~100毫秒内失去电荷")]),v._v(" "),_("p",[v._v("幸运的是计算机运行时钟周期通常是以纳秒来计算，所以"),_("strong",[v._v("内存系统需要周期性地通过读出、重写来刷新每一位")]),v._v("。")])]),v._v(" "),_("p",[v._v("CSAPP中文3版-P401")])])]),v._v(" "),_("p",[_("img",{attrs:{src:"https://feobay.oss-cn-shanghai.aliyuncs.com/img/image-20221017214542189.png",alt:"image-20221017214542189"}})]),v._v(" "),_("p",[_("strong",[v._v("传统DRAM")])]),v._v(" "),_("p",[v._v("DRAM 芯 片 中的单元 （位） 被分成 d个超单元 (supercell)， 每个超单元都由 w个 DRAM 单元组成 。 一个d X w的 DRAM 总共存储 了 dw 位信息。")]),v._v(" "),_("p",[v._v("超单元被组织成一个r行c列的长 方形阵列 ， 这里rc=d 。 每个超单元有形如（i，j）的地址， 这里i表示行， 而 j 表示列。")]),v._v(" "),_("p",[v._v("e.g. 如下图：")]),v._v(" "),_("p",[v._v("16个超单元，每个超单元存储8位")]),v._v(" "),_("p",[_("img",{attrs:{src:"https://feobay.oss-cn-shanghai.aliyuncs.com/img/image-20221017222231304.png",alt:"image-20221017222231304"}})]),v._v(" "),_("p",[v._v("取数据步骤")]),v._v(" "),_("ol",[_("li",[v._v("根据addr，将指定地一整行数据复制到内部行缓冲区")]),v._v(" "),_("li",[v._v("再根据addr指定地列号，将行缓冲中对应的超单元中的w位数据复制并发送到内存控制器")])]),v._v(" "),_("blockquote",[_("p",[v._v("为何发送两次？")]),v._v(" "),_("p",[v._v("DRAM被组织成二维阵列而不是线性数组，"),_("strong",[v._v("降低")]),v._v("了芯片上"),_("strong",[v._v("地址引脚的数量")]),v._v("。"),_("strong",[v._v("缺点")]),v._v("就是必须"),_("strong",[v._v("分两步发送地址，这增加了访问时间")]),v._v("。")])]),v._v(" "),_("p",[_("strong",[v._v("内存模块")])]),v._v(" "),_("p",[v._v("DRAM作为计算机的主存。")]),v._v(" "),_("p",[v._v("多个DRAM芯片一起封装在**内存模块（memory module）**中，它插到主板的扩展槽上。")]),v._v(" "),_("p",[v._v("每一个64位数据分为8份（每份1字节8bit）存储在不同DRAM芯片的相同位置。下图展示了内存模块的基本思想：")]),v._v(" "),_("p",[_("img",{attrs:{src:"https://feobay.oss-cn-shanghai.aliyuncs.com/img/image-20221017230139501.png",alt:"image-20221017230139501"}})]),v._v(" "),_("blockquote",[_("p",[v._v("64位处理器，一次处理64位数据，这64位数据分8个字节存储在8个不同DRAM芯片的相同位置")])]),v._v(" "),_("p",[_("strong",[v._v("增强的DRAM")])]),v._v(" "),_("ul",[_("li",[_("p",[v._v("双倍数据速率同步DRAM（Double Data-Rate Synchronous DRAM，DDR SDRAM）")]),v._v(" "),_("p",[v._v("使用两个时钟沿作为控制信号，从而让DRAM的速度翻倍")]),v._v(" "),_("p",[v._v("不同类型的DDR SDRAM是用提高 "),_("strong",[v._v("预取缓冲区")]),v._v(" 有效带宽大小来划分的：")]),v._v(" "),_("p",[v._v("DDR(2位)，DDR2(4位)，DDR3(8位)，DDR4(16位)")])])]),v._v(" "),_("p",[_("strong",[v._v("非易失性存储器")])]),v._v(" "),_("p",[v._v("DRAM和SRAM在断电后都会丢失信息，所以它们都是"),_("strong",[v._v("易失的")]),v._v("(volatile)")]),v._v(" "),_("p",[_("strong",[v._v("非易失性存储器")]),v._v("就是即使断电，仍然可以保留信息。由于历史原因，这类存储器整体多是 "),_("strong",[v._v("只读存储器（Read-Only Memory，ROM）")]),v._v("，所以一般也称为ROM。")]),v._v(" "),_("p",[v._v("分类如下：")]),v._v(" "),_("ul",[_("li",[_("p",[_("strong",[v._v("PROM")]),v._v("( Programmable ROM , 可编程 ROM) "),_("strong",[v._v("只能被编程一次")])]),v._v(" "),_("blockquote",[_("p",[v._v("PROM 的每个存储器单元有一种熔丝( fuse) ， 只能用高电流熔断一次。")])])]),v._v(" "),_("li",[_("p",[_("strong",[v._v("可擦写可编程ROM")]),v._v(" (Erasable Programmable ROM , "),_("strong",[v._v("EPROM")]),v._v(")，"),_("strong",[v._v("可编程 1000 次")])]),v._v(" "),_("blockquote",[_("p",[v._v("有一个透明的石英窗口，允许光到达存储单元 。紫外线光照射过窗 口，EPROM 单元就被清除为0。对 EPROM 编程是通过使用一种把 1 写入EPROM 的特殊设备来完成的。")])])]),v._v(" "),_("li",[_("p",[_("strong",[v._v("电子可擦除PROM")]),v._v("(Electrically Erasable  PROM , "),_("strong",[v._v("EEPROM")]),v._v(")，可编程 $10 ^ 5$ 次")]),v._v(" "),_("blockquote",[_("p",[v._v("它不需要一个物理上独立的编程设备， 因此可以直接在印制电路卡上编程。")])])]),v._v(" "),_("li",[_("p",[_("strong",[v._v("闪存(flash memory)")]),v._v("，"),_("strong",[v._v("基于EEPROM")])]),v._v(" "),_("blockquote",[_("p",[v._v("闪存是非易失性存储器，是一种"),_("strong",[v._v("重要的存储技术")]),v._v("，为大量的电子设备提供快速而持久的非易失性存储，固态硬盘(SSD)就是基于闪存的。")])])])]),v._v(" "),_("p",[v._v("存储在 ROM 设备中的程序通常被称为 "),_("strong",[v._v("固件( firmware)")]),v._v(" 。")]),v._v(" "),_("blockquote",[_("p",[v._v("当一个计算机系统通电以后， 它会运行存储 在 ROM 中的固件。 一 些 系统在 固件中提供了少 鼠基本的输 入 和输出函 数一例如 PC 的 BIOS（基本输入／输出系统）例程。复杂的设备，像图形卡和磁盘驱动控制器，也依赖固件翻译来自 CPU 的I/O（输入／输出） 请求 。")])])])}),[],!1,null,null,null);_.default=o.exports}}]);