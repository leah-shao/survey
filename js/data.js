/**
 * ==========================================
 * Meta Report Data
 * ==========================================
 */

const reportData = {

    hero:{

        logo:"assets/logo.svg",

        subtitle:" ",

        title:"西岸科创产业研究每周动态汇编",

        description:"2026年7月24日-2026年7月27日",

        button:"阅读完整报告"

    },
/*
    summary:{

        title:"摘要",

        content:" "

    },
*/
    chapters:[

        {

            id:1,

            title:"重要活动",

            cards:[

                {

                    type:"text",

                    subtitle:" ",

                    title:"2026国际低空经济博览会在沪开幕",

                    source:"点击阅读来源：[公众号：科创板日报]",

                    image:"assets/图片1.png",

                    sourceUrl:"https://mp.weixin.qq.com/s/8fWlp4q-TDpj5tR8boMGQw?scene=1&click_id=61",

                    content:`7月22日，2026国际低空经济博览会在国家会展中心（上海）正式拉开帷幕。本届博览会以"驭低空新势，启经济新篇"为主题，总面积达6万平方米，展出570架新兴航空器，其中eVTOL51台，通航飞机18架，无人机501架。现场全球首发23项、国内首发42项产品及技术。沃兰特、峰飞航空、时的科技、御风未来、天翎科，被誉为上海"eVTOL五小龙"的企业悉数登场，全国大批eVTOL创新力量也汇聚于此。
                    
                    峰飞航空展出2吨级复合翼eVTOL"盛世龙"，该机型已进入适航取证符合性验证阶段，预计2027年取证，并与顺丰签署合作协议，率先落地海上风电运维低空运输方案。御风未来首次公开其与瑞金医院联合研发的M1空中医疗救护车验证机，计划2028年完成载人适航取证。沃兰特VE25-100、时的科技E20等机型均进入适航关键阶段。
                    `

                }

            ]

        },

        {

            id:2,

            title:"行业资讯",

            cards:[

                {

                    type:"text",

                    subtitle:" ",

                    title:"OpenAI正式发布AI智能体运营平台Presence",

                    source:"点击阅读来源：[公众号：科创日报]",

                    image:"assets/图片2.png",

                    sourceUrl:"https://mp.weixin.qq.com/s/JdOVkRLYYJl8fECqeDCcbg?scene=1&click_id=64",

                    content:`7月22日，<b>OpenAI对外发布一款名为OpenAI Presence的新服务，旨在帮助企业更高效地部署和运行AI智能体</b>。该平台能够将AI智能体与企业内部数据、管理制度、现有软件及业务流程进行深度链接，使AI更好地融入企业运营。该产品能够实现客户服务、销售等部分工作自动化，可处理账单问题、保险理赔支持、员工信息技术服务诉求等事务。
                    
                    Presence搭载多项功能，支持客户在特定业务场景下对智能体进行测试，并配备了模拟运行、安全护栏、人工复核以及AI自动化评估工具，用以校验智能体的输出结果。智能体在企业内部落地运行后，Presence可调用OpenAI Codex分析运行中暴露的短板，并提出优化建议。此外，Presence还内置了AI语音与对话技术，可协助企业客户更高程度地实现与现有及潜在客户的自动化互动。据OpenAI透露，公司自身已运用这款产品运营面向英语用户的AI电话客服通道。
                    `

                },
                
                {

                    type:"text",

                    subtitle:" ",

                    title:"AMD全栈AI计算方案亮相",

                    source:"点击阅读来源：[公众号：腾讯日记]",

                    image:"assets/图片3.png",

                    sourceUrl:"https://mp.weixin.qq.com/s/jvaAt58gUpjfOUHZcIqL6g?scene=1&click_id=68",

                    content:`7月24日，<b>AMD在Advancing AI 2026大会上发布Helios机架级AI平台和第六代EPYC"Venice"服务器CPU</b>。AMD还发布了面向科学计算的MI430X、PCIe形态的MI350P、ROCm.AI，以及面向本地Agent和机器人的"Gorgon Halo"与Kria AI Robotics开发者平台。
                    
                    苏姿丰为这场发布设定了清晰的主线：AI计算正在从训练加速转向推理，Agent又把一次模型调用扩展为持续推理、工具调用和任务执行。AMD预计，2026年全球约60%的AI算力将用于推理。她说，Agent既需要"大量GPU完成推理"，也需要"大量CPU编排每一个步骤"。对应这一变化，AMD将战略归纳为计算领先、开放平台和"让AI无处不在"。其中，Helios是核心：AMD希望把GPU、CPU、网络和软件组织成一套完整的AI工厂平台，将竞争从单颗芯片推向机架吞吐、Token成本和系统交付。
                    `

                },

                {

                    type:"text",

                    subtitle:" ",

                    title:"Anthropic发布Claude Opus 5",

                    source:"点击阅读来源：[公众号：钛媒体AGI]",

                    image:"assets/图片4.png",

                    sourceUrl:"https://mp.weixin.qq.com/s/3Jm9DfgoS0K0ElcEIdW5Zw?scene=1&click_id=71",

                    content:`7月25日，<b>Anthropic 发布了 Claude Opus 5，这款模型在编程、自主搜索、计算机使用、企业业务流程等多个关键基准测试上超过了Fable 5，而它的成本只有 Fable 5 的一半。</b>
                    
                    Anthropic 公布了一个 3D 建模任务，只给模型一张机械零件的设计图纸，要求它自主编写代码重建完整的 FreeCAD 3D 模型。Opus 5 不仅完成了全过程自主闭环，还自己搭建了配套的测试工具，逐一校验代码的数据解析逻辑，反复核查修正问题，直到通过验证。在没有任何人工干预的情况下，自主完成了一个完整的工程验证循环，设定目标、规划步骤、编写代码、测试输出、发现错误、回溯修正、再次测试、通过。
                    
                    此举被视为Anthropic主动重构定价金字塔：在Kimi K3等开源模型的低价攻势下，以中端价格提供旗舰级性能，守住高频企业市场，迫使行业"越贵越强"的逻辑加速瓦解。
                    `

                },

                {

                    type:"text",

                    subtitle:" ",

                    title:"长鑫科技登陆科创板市值破3.6万亿登顶A股",

                    source:"点击阅读来源：[公众号：腾讯科技]",

                    image:"assets/图片5.jpg",

                    sourceUrl:"https://mp.weixin.qq.com/s/OyyEhgvisSCHe1oFcdmRcw",

                    content:`7月27日，<b>国产DRAM龙头长鑫科技正式挂牌科创板</b>，盘中市值一度突破3.6万亿元，<b>登顶A股市值榜首</b>，创科创板最大IPO纪录。上市同日，野村证券首次覆盖给予"买入"评级，目标价116元，对应2028年20倍PE及约7.76万亿远期市值，较发行价隐含超12倍空间。
                    
                    此前，长鑫在招股书中披露，本次募集资金将主要用于存储器晶圆制造量产线技术升级改造、DRAM存储器技术升级以及动态随机存取存储器前瞻技术研究与开发等项目，进一步提升先进制造能力和创新水平。价格的上涨主要体现在两方面：一方面来自于技术升级带来的每片晶圆平均售价的提升；另一方面则来自超级周期之下存储颗粒的价格普涨。撑起长鑫估值的核心是全球存储需求正被AI拖入指数级扩张，而供给端受制于物理瓶颈。据测算，即便把各类存储效率技术的压缩效果按四折计算，2026至2030年间全球存储用量需求仍将增长超过七倍，年复合增长率超过60%。
                    `

                }

            ]

        },

        {

            id:3,

            title:"企业动态",

            cards:[
                {

                    type:"text",

                    subtitle:" ",

                    title:"[面壁智能] 面壁智能MiniCPM系列深度赋能三星Galaxy AI",

                    source:"点击阅读来源：[公众号：面壁智能]",

                    image:"assets/图片6.jpg",

                    sourceUrl:"https://mp.weixin.qq.com/s/IkTMZQ6bzzMqoEbmIhEhtw?scene=1&click_id=57",

                    content:`7月22日，三星在伦敦Galaxy Unpacked发布会上，正式推出全新折叠旗舰Galaxy Z Fold8、Galaxy Z Fold8 Ultra与Galaxy Z Flip8。面壁智能MiniCPM系列端侧大模型，深度赋能三星Galaxy AI。<b>这是国产端侧大模型首次进入国际头部手机厂商的全球旗舰产品线</b>。面壁智能为三星Galaxy AI提供了强大的端侧模型能力，全面支持文本理解与多模态感知。与传统的云端大模型不同，此次合作强调"全程本地运行"。这意味着所有AI计算均在手机端侧完成，不仅大幅降低了响应延迟，更实现了数据不出设备，为用户带来了前所未有的隐私保护体验。当三星以"新形态 全新展开"描绘折叠屏的未来时，面壁智能正以端侧AI的力量，让这份未来更快、更智能地抵达用户手中。
                    `

                },
                
                {

                    type:"text",

                    subtitle:" ",

                    title:"[红熊AI] 红熊AI记忆科学MemoryBear v0.3.13版本发布",

                    source:"点击阅读来源：[公众号：红熊AI]",

                    image:"assets/图片7.png",

                    sourceUrl:"https://mp.weixin.qq.com/s/XAtKygJXFKqySFoFUjYknw?scene=1&click_id=58",

                    content:`红熊AI于近日发布了其记忆科学产品MemoryBear的v0.3.13版本，核心聚焦于系统的稳健性升级，推出了四项关键更新。

                    首先，新增"感知记忆实体关联边"功能。该功能将图片、文件等非文本内容的感知记忆节点，与从中提取的实体按语义相似度建立连接。其次，增强了"记忆配置试运行"能力。新版本支持包含图片的示例QA文本及用户自主上传文件进行测试，并直观展示感知记忆与剪枝模块的输出效果。在交互体验上，对话变得更加智能流畅。系统明确了"用户标注＞知识库＞记忆"的优先级组装逻辑；同时引入流式一问多答与渐进式多消息输出。最后，针对高负载场景进行了底层加固：知识库检索全面异步化以提升并发速度，新增独立Agent沙箱实现故障隔离，并引入终端用户写入频率管控等多维保护机制。
                    `

                },

                {

                    type:"text",

                    subtitle:" ",

                    title:"[非夕科技] 非夕科技首次亮相印度，以本地生态推动自适应机器人全球落地",

                    source:"点击阅读来源：[公众号：非夕科技]",

                    image:"assets/图片8.png",

                    sourceUrl:"https://mp.weixin.qq.com/s/aNdGlfxM-8nmm0uU0Whl9g?scene=1&click_id=59https://mp.weixin.qq.com/s/3Jm9DfgoS0K0ElcEIdW5Zw?scene=1&click_id=71",

                    content:`7月22日至25日，<b>非夕科技亮相印度孟买举行的Automation Expo 2026，并于展位集中展示自适应机器人产品及覆盖精密制造、医疗科研和商业服务等方向的机器人应用</b>。这是非夕科技首次在印度进行系统性产品与应用展示，也标志着公司在持续深化东南亚业务的基础上，进一步将市场与生态布局延伸至印度及南亚地区。Automation Expo 2026在孟买展览中心举行，是印度重要的工业自动化、机器人与智能技术展览平台。
                    
                    本次展会上，非夕带来了新一代七轴全感知自适应机器人Enlight，通过本体动态展示，呈现其在灵活运动、环境感知和复杂接触操作方面的能力。围绕不同产业的真实需求，非夕还集中展示了遥操作超声扫描、自适应按摩机器人、通用插拔以及大工件扫描打磨等应用。
                    `

                },

                {

                    type:"text",

                    subtitle:" ",

                    title:"[途深智合] 首届\"大国新药\"全球会议，四方签约共建AI生物制药\"超级工厂\"",

                    source:"点击阅读来源：[公众号：途深智合]",

                    image:"assets/图片9.png",

                    sourceUrl:"https://mp.weixin.qq.com/s/XhMUxD9MMdNzBj1FcrrZkg?scene=1&click_id=60",

                    content:`7月22日，首届"大国新药"全球会议在上海国家会展中心开幕。途深智合、中国生物制药集团、镁伽科技、紫金星宇科技有限公司四家企业正式签署战略合作协议，宣布四方合力共建以6G AI-EDGE为底座的AI生物制药"超级工厂"，实现工业智能赋能科学智能新范式。

                    依托四家企业的核心技术与产业优势，这座超级工厂将重塑AI生物制药全新范式。以6G通感智算为底座、智能机器人为载体、AI蛋白设计为核心、产业临床场景为依托，构建起"从数字算法到物理制造、从科研探索到产业落地"的完整闭环，成为 AI+生物医药融合创新的标杆范本，为生命科学智能化发展注入全新动能。
                    `

                }

            ]

        },

        {

            id:4,

            title:"专家/报告观点",

            cards:[
                
                {

                    type:"text",

                    subtitle:" ",

                    title:"陶哲轩最新演讲：数学正在进入\"工业时代\"",

                    source:"点击阅读来源：[公众号：DeepTech深科技]",

                    image:"assets/图片10.png",

                    sourceUrl:"https://mp.weixin.qq.com/s/BCx1xJXG1yirZJEioOmYjQ?scene=1&click_id=63",

                    content:`7月24日，菲尔兹奖得主陶哲轩在2026年国际数学家大会发表公众演讲《人工智能时代的数学》并发出警示：数学正站在类似20世纪初"基础危机"的历史节点，但这次受挑战的是研究方式与价值体系。

                    陶哲轩提出数学问题真正解决的"五层目标"：生成→验证→阐释→同行接受→知识整合。AI能大幅提升前端的证明生产效率，却无法自动完成后端的理解与消化。他借用经济学定律指出，若数学界仍将"解题数量"作为核心指标，AI极易将其推向极致，导致数学界从"证明稀缺"迈入"证明过剩"时代，甚至引发大量通过验证却无人理解的证明堆积。陶哲轩呼吁，学术界应强制披露AI使用情况；评价体系需降低对"首个证明"和数量的强调，转而增加对阐释、验证和知识整合工作的认可；人类数学家的角色将转向提出问题、设计验证体系及解释机器成果。
                    `

                }

            ]

        },


    ]

}

/**
 * ==========================================
 * Meta Report Card Types
 * ==========================================

             cards:[

                {

                    type:"metrics",

                    title:"核心数据",

                    items:[

                        {

                            value:"320",

                            unit:"+",

                            label:"合作伙伴"

                        },

                        {

                            value:"58",

                            unit:"%",

                            label:"AI增长率"

                        },

                        {

                            value:"12",

                            unit:"亿",

                            label:"累计调用"

                        },

                        {

                            value:"98",

                            unit:"%",

                            label:"客户满意度"

                        }

                    ]

                },

                {

                    type:"timeline",

                    title:"发展历程",

                    items:[

                        {

                            year:"2021",

                            text:"启动Meta Compute"

                        },

                        {

                            year:"2022",

                            text:"开放生态"

                        },

                        {

                            year:"2023",

                            text:"Agent平台"

                        },

                        {

                            year:"2024",

                            text:"全球化"

                        }

                    ]

                },

                {

                    type:"flow",

                    title:"商业闭环",

                    items:[

                        "AI模型",

                        "平台",

                        "开发者",

                        "企业",

                        "商业收益"

                    ]

                },                

                {

                    type:"matrix",

                    title:"核心能力",

                    items:[

                        {

                            title:"算力",

                            desc:"GPU Cluster"

                        },

                        {

                            title:"模型",

                            desc:"Foundation Model"

                        },

                        {

                            title:"Agent",

                            desc:"Workflow"

                        },

                        {

                            title:"安全",

                            desc:"AI Safety"

                        },

                        {

                            title:"数据",

                            desc:"Data Lake"

                        },

                        {

                            title:"生态",

                            desc:"Open Platform"

                        }

                    ]

                },

                {

                    type:"quote",

                    title:"研究结论",

                    content:`
                    AI基础设施正在进入平台时代，
                    Agent将成为下一阶段企业软件的重要入口。
                    `

                }                
            ] */
