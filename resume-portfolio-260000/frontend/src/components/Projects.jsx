import React from 'react';
import { useLanguageStore } from '../store/languageStore';

const Projects = () => {
  const { language } = useLanguageStore();

  const projects = [
    {
      id: 1,
      title: '空间转录组学-细胞引导研究',
      titleEn: 'Spatial Transcriptomics - Cell-Guided Research',
      time: '2025.10 ~ 预计2026.2',
      timeEn: '2025.10 ~ Expected 2026.2',
      instructor: '指导：剑桥大学博士研究生 Hunyu Liu，剑桥大学应用数学与理论物理系、临床医学院双聘教授 Prof. Chao Li',
      instructorEn: 'Supervised by: PhD Student Hunyu Liu, Prof. Chao Li (Joint Professor, Department of Applied Mathematics and Theoretical Physics & School of Clinical Medicine, University of Cambridge)',
      collaboration: '合作：University of Cambridge, 复旦大学, University of Dundee, 东北大学',
      collaborationEn: 'Collaboration: University of Cambridge, Fudan University, University of Dundee, Northeastern University',
      description: '医学图像超分辨，利用HE图像通过扩散模型生成高分辨空间转录组图像，结合生物学先验知识，提取细胞级别特征，对扩散模型进行优化，增加可解释性。',
      descriptionEn: 'Medical image super-resolution, generating high-resolution spatial transcriptomics images from HE images using diffusion models, combining biological prior knowledge to extract cell-level features and optimize the diffusion model for enhanced interpretability.',
      participation: '参与度：下游任务寻找，代码复现，代码改进，领域研究，...',
      participationEn: 'Participation: Downstream task exploration, code reproduction, code improvement, domain research, ...',
      image: 'https://haisnap.tos-cn-beijing.volces.com/image/a2002fe6-6647-4b89-9de7-d47845be042e_1766262184742.jpg',
    },
    {
      id: 2,
      title: '透皮递送mRNA课题-胶原蛋白',
      titleEn: 'Transdermal Delivery of mRNA - Collagen',
      time: '2025.5 ~ 待定（未知）',
      timeEn: '2025.5 ~ TBD',
      instructor: '指导：苏州大学国际创新药学院 臧晓羽教授，徐聪聪教授',
      instructorEn: 'Supervised by: Prof. Zang Xiaoyu, Prof. Xu Congcong (International College of Pharmaceutical Innovation, Soochow University)',
      description: '简介：待定',
      descriptionEn: 'Introduction: TBD',
      participation: '参与度：胶原蛋白市场调研，胶原蛋白RNA领域相关研究调研，胶原蛋白序列寻找，RNA序列设计，透皮递送研究... 全程高度参与并协调沟通方向',
      participationEn: 'Participation: Collagen market research, research in collagen RNA field, collagen sequence identification, RNA sequence design, transdermal delivery research... Highly involved throughout and coordinated communication direction',
      image: 'https://haisnap.tos-cn-beijing.volces.com/image/ca2399bd-54ae-46f7-92c4-22ed1117001d_1766261825426.jpg',
    },
    {
      id: 3,
      title: '校级大创（LNP）超声辅助的二硫戊环修饰脂质纳米颗粒实现 mRNA 高效递送',
      titleEn: 'University-Level Innovation Project (LNP): Ultrasound-Assisted Dithiolane-Modified Lipid Nanoparticles for Efficient mRNA Delivery',
      time: '2025.4~2027.4',
      timeEn: '2025.4~2027.4',
      instructor: '指导老师：美国医学与生物工程院院士、苏州创新药研究院执行院长、苏州大学药学院&国际创新药学院院长 钟志远教授，徐聪聪教授',
      instructorEn: 'Supervised by: Prof. Zhong Zhiyuan (Fellow of American Institute for Medical and Biological Engineering, Executive Dean of Suzhou Institute for Advanced Pharmaceuticals, Dean of School of Pharmaceutical Sciences & International College of Pharmaceutical Innovation, Soochow University), Prof. Xu Congcong',
      description: '简介：如题，超声辅助的二硫戊环修饰脂质纳米颗粒实现 mRNA 高效递送',
      descriptionEn: 'Introduction: Ultrasound-assisted dithiolane-modified lipid nanoparticles for efficient mRNA delivery',
      participation: '参与度：学习了解RNA的LNP递送，学习了解LNP改进和修饰等....',
      participationEn: 'Participation: Learning about RNA LNP delivery, LNP improvement and modification, etc....',
      image: 'https://haisnap.tos-cn-beijing.volces.com/image/850e6e4b-b916-462b-ba9f-162d6c5c48d2_1766261228856.jpg',
    },
    {
      id: 4,
      title: '人工智能算法赋能下一代环状RNA药物设计',
      titleEn: 'AI Algorithm-Empowered Next-Generation Circular RNA Drug Design',
      time: '2025.5~2025.10',
      timeEn: '2025.5~2025.10',
      instructor: '指导：苏州大学国际创新药学院 徐聪聪教授，中国科学院杭州医学研究所博士研究生 蒋帆',
      instructorEn: 'Supervised by: Prof. Xu Congcong (International College of Pharmaceutical Innovation, Soochow University), PhD Student Jiang Fan (Hangzhou Institute of Medicine, Chinese Academy of Sciences)',
      description: '简介：在linearDesign算法已考虑MFE（最小自由能），CAI（密码子适应指数）的基础上，结合考虑环状RNA的IRES（核糖体结合位点）的结构偏差，复现指导老师以及合作教授提出的circDesign算法，设计质量更优的环状RNA，此外还结合课题组实际需求，独立改造并设计了能够应用在线粒体中的RNA设计算法',
      descriptionEn: 'Introduction: Building upon the linearDesign algorithm considering MFE (Minimum Free Energy) and CAI (Codon Adaptation Index), incorporating structural bias of circular RNA IRES (Internal Ribosome Entry Site), reproduced the circDesign algorithm proposed by supervisors and collaborating professors to design higher-quality circular RNA. Additionally, independently modified and designed an RNA design algorithm applicable to mitochondria based on research group needs.',
      participation: '参与度：在指导下复现代码，独立设计了本算法的可视化平台，并用此算法为课题组设计了数百条RNA序列，用本算法参与大学生课外学科竞赛若干',
      participationEn: 'Participation: Code reproduction under supervision, independently designed visualization platform for the algorithm, designed hundreds of RNA sequences for the research group using this algorithm, participated in multiple undergraduate extracurricular academic competitions using this algorithm',
      image: 'https://haisnap.tos-cn-beijing.volces.com/image/70cd15ac-ad5e-4cf9-94ab-9d0bf6b3b51e_1766260211230.jpg',
    },
    {
      id: 5,
      title: '课题组网站建设',
      titleEn: 'Research Group Website Development',
      time: '2025.3~2025.5',
      timeEn: '2025.3~2025.5',
      description: '简介：深度参与设计和制作苏州大学徐聪聪教授xRNAlab课题组网站，具体项目及代码已开源在课题组github，可通过本人github主页"Pinned"板块直接访问',
      descriptionEn: 'Introduction: Deeply involved in designing and developing the xRNAlab research group website for Prof. Xu Congcong at Soochow University. The project and code are open-sourced on the research group\'s GitHub, accessible through the "Pinned" section of my GitHub homepage.',
      participation: '参与度：全程参与并负责',
      participationEn: 'Participation: Fully involved and responsible throughout',
      image: 'https://haisnap.tos-cn-beijing.volces.com/image/ae783f54-996e-4bee-afb8-f060d48a3f84_1766260019771.jpg',
    },
    {
      id: 6,
      title: '基于mRNA设计的bioPROTAC靶向降解KRAS实现癌症治疗',
      titleEn: 'mRNA-Based bioPROTAC for Targeted Degradation of KRAS in Cancer Treatment',
      time: '2024.10~2025.3',
      timeEn: '2024.10~2025.3',
      instructor: '指导：苏州大学国际创新药学院 徐聪聪教授，硕士研究生 张宇婷',
      instructorEn: 'Supervised by: Prof. Xu Congcong (International College of Pharmaceutical Innovation, Soochow University), Master Student Zhang Yuting',
      description: '简介：采用人工智能算法circDesign设计优化编码KRAS bioPROTAC的环状RNA分子，通过聚合物纳米载体进行包载和体内特异性肿瘤靶向递送，实现肿瘤治疗。',
      descriptionEn: 'Introduction: Using the AI algorithm circDesign to design and optimize circular RNA molecules encoding KRAS bioPROTAC, achieving tumor therapy through polymer nanocarrier encapsulation and in vivo specific tumor-targeted delivery.',
      participation: '参与度：学习了解科研怎么做，学习了解RNA领域相关课题和研究方向，学习了解PROTAC等，参与一部分实验室实验....',
      participationEn: 'Participation: Learning about scientific research methodology, understanding RNA-related topics and research directions, learning about PROTAC, participating in laboratory experiments...',
      image: 'https://haisnap.tos-cn-beijing.volces.com/image/a1471e97-abee-4c38-9738-b1ce517b64e5_1766260929530.jpg',
    },
    {
      id: 7,
      title: '基于人工智能视觉识别的荧光手术辅助指导模型',
      titleEn: 'AI Vision Recognition-Based Fluorescence-Guided Surgery Assistance Model',
      time: '2024.11~2025.2',
      timeEn: '2024.11~2025.2',
      instructor: '指导：苏州大学国际创新药学院 吴丹教授',
      instructorEn: 'Supervised by: Prof. Wu Dan (International College of Pharmaceutical Innovation, Soochow University)',
      description: '简介：依托吲哚菁绿染料的特性，结合AI视觉识别大模型，开发可精准识别癌细胞的手术辅助指导工具，提升肿瘤切除的精准度与患者术后恢复质量。',
      descriptionEn: 'Introduction: Based on the properties of indocyanine green dye and combined with AI vision recognition models, developed a surgical assistance tool for accurate cancer cell identification, improving tumor resection precision and patient postoperative recovery quality.',
      participation: '参与度：学习了解人工智能在医学影像识别领域的应用，学习了解模型的本地部署，学习团队合作参与课题，学习了解一些荧光染料&外科手术的特点和方法',
      participationEn: 'Participation: Learning about AI applications in medical image recognition, understanding local model deployment, learning team collaboration in research projects, understanding characteristics and methods of fluorescent dyes & surgical procedures',
      image: 'https://haisnap.tos-cn-beijing.volces.com/image/02598229-bc0c-4415-b099-db8e78fde5c5_1766302217730.jpg',
    },
  ];

  return (
    <section className="py-24 px-8" style={{ fontFamily: "'Noto Sans CJK Thin', sans-serif", fontWeight: 300 }}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-light text-center mb-16" style={{ fontFamily: "'Helvetica Neue Light', sans-serif", fontWeight: 400, color: '#6FCF97' }}>
          {language === 'zh' ? '研究&项目经历' : 'Research & Projects'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group cursor-pointer overflow-hidden rounded-lg shadow-sm hover:shadow-xl transition-all duration-300"
              style={{ backgroundColor: '#F2F2F2' }}
            >
              <div className="aspect-w-16 aspect-h-12 overflow-hidden">
                {project.id === 5 ? (
                  <a 
                    href="https://xrnalab.github.io/index/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover transform scale-100 group-hover:scale-105 transition-transform duration-500"
                    />
                  </a>
                ) : (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transform scale-100 group-hover:scale-105 transition-transform duration-500"
                  />
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-light mb-2" style={{ fontFamily: "'Helvetica Neue Light', sans-serif", fontWeight: 400, color: '#333' }}>
                  {language === 'zh' ? project.title : project.titleEn}
                </h3>
                <p className="text-sm text-gray-500 mb-3">{language === 'zh' ? project.time : project.timeEn}</p>
                {project.instructor && (
                  <p className="text-xs text-gray-600 mb-2">{language === 'zh' ? project.instructor : project.instructorEn}</p>
                )}
                {project.collaboration && (
                  <p className="text-xs text-gray-600 mb-3">{language === 'zh' ? project.collaboration : project.collaborationEn}</p>
                )}
                <p className="text-gray-600 mb-3 text-sm leading-relaxed">{language === 'zh' ? project.description : project.descriptionEn}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{language === 'zh' ? project.participation : project.participationEn}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;