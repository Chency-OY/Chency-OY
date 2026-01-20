import React from 'react';
import { useLanguageStore } from '../store/languageStore';

const Resume = () => {
  const { language } = useLanguageStore();

  const publicationsPapers = [
    {
      author: '待定',
      authorEn: 'TBD',
      title: '待定, 关于使用扩散模型算法显著降低高精度空间转录组成本',
      titleEn: 'TBD, On Significantly Reducing High-Precision Spatial Transcriptomics Cost Using Diffusion Model Algorithms',
      journal: 'IEEE TMI',
      journalEn: 'IEEE TMI',
      rating: 'SCI Q1，中科院一区，医学影像计算领域全球top1',
      ratingEn: 'SCI Q1, CAS Zone 1, Global Top 1 in Medical Imaging Computing',
      date: '预计2026.2',
      dateEn: 'Expected 2026.2',
      doi: '-'
    },
    {
      author: '一作',
      authorEn: 'First Author',
      title: 'Kidney-targeted Nucleic Acid Therapeutics: Delivery Barriers, Engineering Strategies and Translational Frontiers',
      titleEn: 'Kidney-targeted Nucleic Acid Therapeutics: Delivery Barriers, Engineering Strategies and Translational Frontiers',
      journal: '待定',
      journalEn: 'TBD',
      rating: 'SCI',
      ratingEn: 'SCI',
      date: '待定,预计2026.1',
      dateEn: 'TBD, Expected 2026.1',
      doi: '-'
    },
    {
      author: '共一',
      authorEn: 'Co-first Author',
      title: '人工智能辅助RNA药物和疫苗设计：当前进展与发展趋势',
      titleEn: 'AI-Assisted RNA Drug and Vaccine Design: Current Progress and Development Trends',
      journal: '《药学学报》',
      journalEn: 'Acta Pharmaceutica Sinica',
      rating: '北大核心',
      ratingEn: 'Peking University Core Journal',
      date: 'waiting，预计2025',
      dateEn: 'waiting, Expected 2025',
      doi: 'waiting'
    }
  ];

  const resumeData = {
    name: "Chenxi Ouyang",
    avatar: "https://haisnap.tos-cn-beijing.volces.com/image/05dd2b87-5f66-4e11-b1f8-288836ecee5d_1764863391669.jpg",
    cooperation: "期待一切生物、医学、人工智能领域老师和同学的指导与合作",
    cooperationEn: "Look forward to guidance and collaboration from teachers and students in biology, medicine, and AI fields.",
    contact: {
      emails: [
        { address: '2712818800@qq.com', addressEn: '2712818800@qq.com', note: '每日查看', noteEn: 'Checked Daily' },
        { address: 'chenxiouyang24@rcsi.com', addressEn: 'chenxiouyang24@rcsi.com', note: '收不到非官方邮箱的邮件', noteEn: 'Cannot receive emails from unofficial addresses' },
        { address: '2453402069@stu.suda.edu.cn', addressEn: '2453402069@stu.suda.edu.cn', note: '本科毕业后无法登陆查看', noteEn: 'Cannot access after undergraduate graduation' },
        { address: 'chenxiouyang24@gmail.com', addressEn: 'chenxiouyang24@gmail.com', note: '备用，查看频率低', noteEn: 'Backup, checked less frequently' }
      ],
      phone: '+86 18012818800',
      wechat: "X18012818800",
      github: "Chency-OY"
    },
    education: [
      {
        degree: "先进治疗技术（理学学士）",
        degreeEn: "B.S. in Advanced Therapeutic Technologies",
        school: "爱尔兰皇家外科医学院",
        schoolEn: "Royal College of Surgeons in Ireland",
        time: "2024.10 - 2028.06"
      },
      {
        degree: "生物制药（工学学士）",
        degreeEn: "Bachelor of Engineering in Biopharmaceutics",
        school: "苏州大学 INTERNATIONAL COLLEGE OF PHARMACEUTICAL INNOVATION",
        schoolEn: "INTERNATIONAL COLLEGE OF PHARMACEUTICAL INNOVATION, Soochow University",
        time: "2024.09 - 2028.06"
      },
      {
        degree: "计算机科学与技术（辅修学位）",
        degreeEn: "Minor in Computer Science and Technology",
        school: "苏州大学 计算机科学与技术学院",
        schoolEn: "School of Computer Science and Technology, Soochow University",
        time: "2025.09 - 2027.06"
      }
    ],
    experiences: [
      {
        title: "学术服务",
        titleEn: "Academic Service",
        items: [
          {
            name: "受邀担任第28届医学图像计算与计算机辅助干预（MICCAI）2025会议独立审稿人",
            nameEn: "Invited as Independent Reviewer for the 28th International Conference on Medical Image Computing and Computer Assisted Intervention (MICCAI) 2025",
            note: "会议评级：CCF-B，医学影像计算与计算机辅助介入领域公认影响力最大的顶级国际学术会议",
            noteEn: "Conference Ranking: CCF-B, the most prestigious international conference in medical image computing and computer-assisted intervention"
          }
        ]
      },
      {
        title: "期刊&会议论文",
        titleEn: "Journal & Conference Papers",
        showPapers: true,
        papers: publicationsPapers
      },
      {
        title: "专利&软著",
        titleEn: "Patents & Software Copyrights",
        items: [{ name: "waiting", nameEn: "Waiting" }]
      },
      {
        title: "研究&项目经历",
        titleEn: "Research & Projects",
        items: [
          {
            name: "空间转录组学-细胞引导研究",
            nameEn: "Spatial Transcriptomics - Cell-Guided Research",
            time: "2025.10 ~ 预计2026.2",
            timeEn: "2025.10 ~ Expected 2026.2",
            organizer: "指导：剑桥大学博士研究生 Hunyu Liu，剑桥大学应用数学与理论物理系、临床医学院双聘教授 Prof. Chao Li",
            organizerEn: "Supervised by: PhD Student Hunyu Liu, Prof. Chao Li (Joint Professor, Department of Applied Mathematics and Theoretical Physics & School of Clinical Medicine, University of Cambridge)",
            level: "合作：University of Cambridge, 复旦大学, University of Dundee, 东北大学",
            levelEn: "Collaboration: University of Cambridge, Fudan University, University of Dundee, Northeastern University",
            desc: [
              "医学图像超分辨，利⽤HE图像通过扩散模型生成高分辨空间转录组图像，结合⽣物学先验知识，提取细胞级别特征，对扩散模型进⾏优化，增加可解释性。",
              "参与度：下游任务寻找，代码复现，代码改进，领域研究，..."
            ],
            descEn: [
              "Medical image super-resolution, generating high-resolution spatial transcriptomics images from HE images using diffusion models, combining biological prior knowledge to extract cell-level features and optimize the diffusion model for enhanced interpretability.",
              "Participation: Downstream task exploration, code reproduction, code improvement, domain research, ..."
            ]
          },
          {
            name: "透皮递送mRNA课题-胶原蛋白",
            nameEn: "Transdermal mRNA Delivery for Collagen Expression",
            time: "2025.5 ~ 待定",
            timeEn: "2025.5 ~ Ongoing",
            organizer: "指导：苏州大学国际创新药学院 臧晓羽教授，徐聪聪教授",
            organizerEn: "Supervised by: Prof. Zang Xiaoyu, Prof. Xu Congcong (International College of Pharmaceutical Innovation, Soochow University)",
            desc: [
              "研究透皮递送mRNA技术实现胶原蛋白表达的创新治疗方法",
              "参与度：胶原蛋白市场调研，胶原蛋白RNA领域相关研究调研，胶原蛋白序列寻找，RNA序列设计，透皮递送研究... 全程高度参与并协调沟通方向"
            ],
            descEn: [
              "Research on innovative therapeutic approaches using transdermal mRNA delivery for collagen expression",
              "Participation: Collagen market research, literature review in collagen RNA field, collagen sequence identification, RNA sequence design, transdermal delivery system research... Highly involved throughout the project and coordinated research directions"
            ]
          },
          {
            name: "校级大创（LNP）超声辅助的二硫戊环修饰脂质纳米颗粒实现 mRNA 高效递送",
            nameEn: "University-Level Innovation Project (LNP): Ultrasound-Assisted Dithiolane-Modified Lipid Nanoparticles for Efficient mRNA Delivery",
            time: "2025.4~2027.4",
            organizer: "指导老师：美国医学与生物工程院院士、苏州创新药研究院执行院长、苏州大学药学院&国际创新药学院院长 钟志远教授，徐聪聪教授",
            organizerEn: "Supervised by: Prof. Zhong Zhiyuan (Fellow of American Institute for Medical and Biological Engineering, Executive Dean of Suzhou Institute of Innovative Pharmaceuticals, Dean of School of Pharmaceutical Sciences & International College of Pharmaceutical Innovation, Soochow University), Prof. Xu Congcong",
            desc: [
              "简介：超声辅助的二硫戊环修饰脂质纳米颗粒实现 mRNA 高效递送",
              "参与度：学习了解RNA的LNP递送，学习了解LNP改进和修饰等...."
            ],
            descEn: [
              "Introduction: Ultrasound-assisted dithiolane-modified lipid nanoparticles for efficient mRNA delivery",
              "Participation: Learning about RNA LNP delivery, LNP improvement and modification, etc."
            ]
          },
          {
            name: "人工智能算法赋能下一代环状RNA药物设计",
            nameEn: "AI Algorithm-Empowered Next-Generation Circular RNA Drug Design",
            time: "2025.5~2025.10",
            organizer: "指导：苏州大学国际创新药学院 徐聪聪教授，中国科学院杭州医学研究所博士研究生 蒋帆",
            organizerEn: "Supervised by: Prof. Xu Congcong (International College of Pharmaceutical Innovation, Soochow University), PhD Student Jiang Fan (Hangzhou Institute of Medicine, Chinese Academy of Sciences)",
            desc: [
              "简介：在linearDesign算法已考虑MFE（最小自由能），CAI（密码子适应指数）的基础上，结合考虑环状RNA的IRES（核糖体结合位点）的结构偏差，复现指导老师以及合作教授提出的circDesign算法，设计质量更优的环状RNA，此外还结合课题组实际需求，独立改造并设计了能够应用在线粒体中的RNA设计算法",
              "参与度：在指导下复现代码，独立设计了本算法的可视化平台，并用此算法为课题组设计了数百条RNA序列，用本算法参与大学生课外学科竞赛若干"
            ],
            descEn: [
              "Introduction: Building upon the linearDesign algorithm considering MFE (Minimum Free Energy) and CAI (Codon Adaptation Index), incorporating structural bias of circular RNA IRES (Internal Ribosome Entry Site), reproduced the circDesign algorithm proposed by supervisors and collaborating professors to design higher-quality circular RNA. Additionally, independently modified and designed an RNA design algorithm applicable to mitochondria based on research group needs.",
              "Participation: Code reproduction under supervision, independently designed visualization platform for the algorithm, designed hundreds of RNA sequences for the research group using this algorithm, participated in multiple undergraduate extracurricular academic competitions using this algorithm"
            ]
          },
          {
            name: "课题组网站建设",
            nameEn: "Research Group Website Development",
            time: "2025.3~2025.5",
            desc: [
              "简介：深度参与设计和制作苏州大学徐聪聪教授xRNAlab课题组网站，具体项目及代码已开源在课题组github，可通过本人github主页Pinned板块直接访问",
              "参与度：高度参与"
            ],
            descEn: [
              "Introduction: Deeply involved in designing and developing the xRNAlab research group website for Prof. Xu Congcong at Soochow University. The project and code are open-sourced on the research group's GitHub, accessible through the Pinned section of my GitHub homepage.",
              "Participation: Highly involved throughout"
            ]
          },
          {
            name: "基于mRNA设计的bioPROTAC靶向降解KRAS实现癌症治疗",
            nameEn: "mRNA-Based bioPROTAC for Targeted Degradation of KRAS in Cancer Treatment",
            time: "2024.10~2025.3",
            organizer: "指导：苏州大学国际创新药学院 徐聪聪教授，硕士研究生 张宇婷",
            organizerEn: "Supervised by: Prof. Xu Congcong (International College of Pharmaceutical Innovation, Soochow University), Master Student Zhang Yuting",
            desc: [
              "简介：采用人工智能算法circDesign设计优化编码KRAS bioPROTAC的环状RNA分子，通过聚合物纳米载体进行包载和体内特异性肿瘤靶向递送，实现肿瘤治疗。",
              "参与度：学习了解科研怎么做，学习了解RNA领域相关课题和研究方向，学习了解PROTAC等，参与一部分实验室实验...."
            ],
            descEn: [
              "Introduction: Using the AI algorithm circDesign to design and optimize circular RNA molecules encoding KRAS bioPROTAC, achieving tumor therapy through polymer nanocarrier encapsulation and in vivo specific tumor-targeted delivery.",
              "Participation: Learning about scientific research methodology, understanding RNA-related topics and research directions, learning about PROTAC, participating in laboratory experiments"
            ]
          },
          {
            name: "基于人工智能视觉识别的荧光手术辅助指导模型",
            nameEn: "AI Vision Recognition-Based Fluorescence-Guided Surgery Assistance Model",
            time: "2024.11~2025.2",
            organizer: "指导：苏州大学国际创新药学院 吴丹教授",
            organizerEn: "Supervised by: Prof. Wu Dan (International College of Pharmaceutical Innovation, Soochow University)",
            desc: [
              "简介：依托吲哚菁绿染料的特性，结合AI视觉识别大模型，开发可精准识别癌细胞的手术辅助指导工具，提升肿瘤切除的精准度与患者术后恢复质量。",
              "参与度：学习了解人工智能在医学影像识别领域的应用，学习了解模型的本地部署，学习团队合作参与课题，学习了解一些荧光染料&外科手术的特点和方法"
            ],
            descEn: [
              "Introduction: Based on the properties of indocyanine green dye and combined with AI vision recognition models, developed a surgical assistance tool for accurate cancer cell identification, improving tumor resection precision and patient postoperative recovery quality.",
              "Participation: Learning about AI applications in medical image recognition, understanding local model deployment, learning team collaboration in research projects, understanding characteristics and methods of fluorescent dyes & surgical procedures"
            ]
          }
        ]
      },
      {
        title: "获奖经历",
        titleEn: "Awards",
        items: [
          {
            name: "下乡实践优秀学子奖",
            nameEn: "Outstanding Student Award for Rural Practice",
            time: "2025.11",
            organizer: "中国建设银行江苏省分行",
            organizerEn: "China Construction Bank Jiangsu Branch"
          },
          {
            name: "iCAN大学生创新创业大赛",
            nameEn: "iCAN College Student Innovation and Entrepreneurship Competition",
            time: "2025.11.2",
            organizer: "iCAN国际创新创业大赛组委会、南京理工大学、江苏省青少年科技教育协会",
            organizerEn: "iCAN International Innovation and Entrepreneurship Competition Committee, Nanjing University of Science and Technology, Jiangsu Youth Science and Technology Education Association",
            level: "省级（江浙赛区）",
            levelEn: "Provincial (Jiangsu-Zhejiang Region)",
            desc: ["人工智能算法设计环状 RNA 肿瘤药物"],
            descEn: ["AI Algorithm-Guided Design of Circular RNA Tumor Drugs"]
          },
          {
            name: "\"AI创想家\"超互联全媒体创作大赛 智能体赛道 三等奖（奖金2000元人民币）",
            nameEn: "\"AI Creator\" Hyper-Connected Multimedia Creation Competition - AI Agent Track - Third Prize (2000 RMB)",
            time: "2025.7.4",
            organizer: "\"AI创想家\"超互联全媒体创作大赛组委会、苏州大学未来科学与工程学院、中关村超互联联盟",
            organizerEn: "\"AI Creator\" Competition Committee, School of Future Science and Engineering at Soochow University, Zhongguancun Hyper-Connected Alliance",
            desc: ["AI agent"],
            descEn: ["AI agent"]
          },
          {
            name: "\"挑战杯\"全国大学生课外学术科技作品竞赛 校级三等奖 院级一等奖",
            nameEn: "Challenge Cup National College Students Extracurricular Academic and Technological Works Competition - University Third Prize, School First Prize",
            time: "2025.3.14",
            organizer: "苏州大学",
            organizerEn: "Soochow University",
            level: "校级",
            levelEn: "University Level",
            desc: ["基于mRNA设计的bioPROTAC靶向降解KRAS实现癌症治疗"],
            descEn: ["mRNA-Based bioPROTAC Targeted Degradation of KRAS for Cancer Treatment"]
          },
          {
            name: "\"挑战杯\"全国大学生课外学术科技作品竞赛 校级三等奖 院级一等奖",
            nameEn: "Challenge Cup National College Students Extracurricular Academic and Technological Works Competition - University Third Prize, School First Prize",
            time: "2025.3.14",
            organizer: "苏州大学",
            organizerEn: "Soochow University",
            level: "校级",
            levelEn: "University Level",
            desc: ["基于人工智能视觉识别的荧光手术辅助指导模型"],
            descEn: ["AI Vision Recognition-Based Fluorescence-Guided Surgery Assistance Model"]
          },
          {
            name: "优秀团员",
            nameEn: "Excellent League Member",
            time: "2024.12",
            organizer: "学院",
            organizerEn: "School"
          }
        ]
      }
    ],
    skills: [
      "编程语言和操作系统等: C++， Python， HTML5， git， Linux， Markdown，R语言，LaTeX，汇编语言",
      "机器学习 & 深度学习: CNN等",
      "软件：endnote, MobaXterm，OneDrive，正常办公软件&学术研究/写作软件都会用，不一一列举了",
      "对金融市场有一定的了解",
      "雅思口语: 6.5"
    ],
    skillsEn: [
      "Programming Languages & Operating Systems: C++, Python, HTML5, git, Linux, Markdown, R, LaTeX, Assembly Language",
      "Machine Learning & Deep Learning: CNN, etc.",
      "Software: EndNote, MobaXterm, OneDrive, proficient in common office & academic research/writing software",
      "Basic understanding of financial markets",
      "IELTS Speaking: 6.5"
    ]
  };

  return (
    <section className="py-24 px-8 font-light" style={{ fontFamily: "'Noto Sans CJK Thin', sans-serif" }}>
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-light text-center mb-16 text-[#6FCF97]" style={{ fontFamily: "'Helvetica Neue Light', sans-serif" }}>
          {language === 'zh' ? '简历' : 'Resume'}
        </h2>

        <div className="p-8 rounded-lg shadow-sm bg-white">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">{resumeData.name}</h1>
            <div className="flex flex-col md:flex-row justify-between items-start gap-8 mt-8">
              <div className="flex-1 text-sm text-gray-600 space-y-2">
                <div>
                  <p className="font-medium mb-2">Email:</p>
                  {resumeData.contact.emails.map((email, index) => (
                    <p key={index} className="leading-relaxed">
                      <span className="font-mono">{email.address}</span>
                      <span className="text-gray-500 ml-2">
                        ({language === 'zh' ? email.note : email.noteEn})
                      </span>
                    </p>
                  ))}
                </div>
                <p className="mt-4">
                  <span className="font-medium">{language === 'zh' ? '手机' : 'Phone'}:</span> {resumeData.contact.phone}
                </p>
                <div className="text-sm text-gray-600 space-y-2">
                  <p>
                    <span className="font-medium">{language === 'zh' ? '微信' : 'WeChat'}:</span> {resumeData.contact.wechat}
                  </p>
                  <p>
                    <span className="font-medium">GitHub:</span> {resumeData.contact.github}
                  </p>
                </div>
              </div>
              <div className="flex-shrink-0 mx-auto md:mx-0 flex flex-col items-center md:items-end gap-4 w-full md:w-auto">
                <img 
                  src={resumeData.avatar} 
                  alt={resumeData.name}
                  className="w-32 h-32 rounded-full object-cover shadow-md border-2 border-gray-100"
                />
                <div className="p-3 bg-gray-50 rounded-lg border border-gray-100 text-xs text-black font-medium max-w-[220px] text-center md:text-right shadow-sm">
                  {language === 'zh' ? resumeData.cooperation : resumeData.cooperationEn}
                </div>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold border-b pb-2 mb-4 text-[#F2994A]">
              {language === 'zh' ? '教育背景' : 'Education'}
            </h2>
            {resumeData.education.map((edu, index) => (
              <div key={index} className="mb-4">
                <h3 className="text-lg font-medium text-gray-800">{language === 'zh' ? edu.degree : edu.degreeEn}</h3>
                <p className="text-gray-600">{language === 'zh' ? edu.school : edu.schoolEn}</p>
                <p className="text-gray-500 text-sm">{edu.time}</p>
              </div>
            ))}
          </div>

          {resumeData.experiences.map((exp, expIndex) => (
            <div key={expIndex} className="mb-8">
              <h2 className="text-xl font-semibold border-b pb-2 mb-4 text-[#F2994A]">
                {language === 'zh' ? exp.title : exp.titleEn}
              </h2>
              {exp.showPapers ? (
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white border border-gray-200">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="py-3 px-4 border-b border-gray-200 text-left text-sm font-medium text-gray-700">
                          {language === 'zh' ? '作者' : 'Author'}
                        </th>
                        <th className="py-3 px-4 border-b border-gray-200 text-left text-sm font-medium text-gray-700">
                          {language === 'zh' ? '标题' : 'Title'}
                        </th>
                        <th className="py-3 px-4 border-b border-gray-200 text-left text-sm font-medium text-gray-700">
                          {language === 'zh' ? '期刊' : 'Journal'}
                        </th>
                        <th className="py-3 px-4 border-b border-gray-200 text-left text-sm font-medium text-gray-700">
                          {language === 'zh' ? '期刊/会议评级&影响因子' : 'Journal/Conference Rating & Impact Factor'}
                        </th>
                        <th className="py-3 px-4 border-b border-gray-200 text-left text-sm font-medium text-gray-700">
                          {language === 'zh' ? '发表日期' : 'Publication Date'}
                        </th>
                        <th className="py-3 px-4 border-b border-gray-200 text-left text-sm font-medium text-gray-700">
                          DOI
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {exp.papers.map((paper, paperIndex) => (
                        <tr key={paperIndex} className="hover:bg-gray-50 transition-colors duration-200">
                          <td className="py-3 px-4 border-b border-gray-200 text-sm text-gray-800">
                            {language === 'zh' ? paper.author : paper.authorEn}
                          </td>
                          <td className="py-3 px-4 border-b border-gray-200 text-sm text-gray-800">
                            {language === 'zh' ? paper.title : paper.titleEn}
                          </td>
                          <td className="py-3 px-4 border-b border-gray-200 text-sm text-gray-800">
                            {language === 'zh' ? paper.journal : paper.journalEn}
                          </td>
                          <td className="py-3 px-4 border-b border-gray-200 text-sm text-gray-800">
                            {language === 'zh' ? paper.rating : paper.ratingEn}
                          </td>
                          <td className="py-3 px-4 border-b border-gray-200 text-sm text-gray-800">
                            {language === 'zh' ? paper.date : paper.dateEn}
                          </td>
                          <td className="py-3 px-4 border-b border-gray-200 text-sm text-gray-800">
                            {paper.doi}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                exp.items && exp.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="mb-6">
                    <h3 className="text-lg font-medium text-gray-800">{language === 'zh' ? item.name : item.nameEn}</h3>
                    
                    {(item.note || item.noteEn) && (
                      <p className="text-sm text-gray-500 mt-1 mb-2">
                        {language === 'zh' ? item.note : item.noteEn}
                      </p>
                    )}

                    {item.time && <p className="text-gray-500 text-sm mb-2">{language === 'zh' ? item.time : (item.timeEn || item.time)}</p>}
                    {item.organizer && (
                      <p className="text-gray-600 text-sm mb-1">
                        {language === 'zh' ? item.organizer : (item.organizerEn || item.organizer)}
                      </p>
                    )}
                    {item.level && (
                      <p className="text-gray-600 text-sm mb-2">
                        {language === 'zh' ? item.level : (item.levelEn || item.level)}
                      </p>
                    )}
                    {item.desc && item.desc.length > 0 && (
                      <ul className="list-disc pl-5 space-y-1 text-gray-600">
                        {(language === 'zh' ? item.desc : (item.descEn || item.desc)).map((d, dIndex) => (
                          <li key={dIndex}>{d}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))
              )}
            </div>
          ))}

          <div className="mb-8">
            <h2 className="text-xl font-semibold border-b pb-2 mb-4 text-[#F2994A]">
              {language === 'zh' ? '技能' : 'Skills'}
            </h2>
            <ul className="list-disc pl-5 space-y-1 text-gray-600">
              {(language === 'zh' ? resumeData.skills : resumeData.skillsEn).map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;