import React from 'react';
import { useLanguageStore } from '../store/languageStore';

const Awards = () => {
  const { language } = useLanguageStore();

  // 将时间字符串转换为日期对象以便排序
  const parseTime = (timeStr) => {
    const parts = timeStr.split('.');
    const year = parseInt(parts[0]);
    const month = parseInt(parts[1]) || 1;
    const day = parseInt(parts[2]) || 1;
    return new Date(year, month - 1, day);
  };

  const awards = [
    {
      id: 1,
      name: '"AIdea"校园OPC培育创新大赛 校级二等奖',
      nameEn: '"AIdea" Campus OPC Cultivation Innovation Competition - University Second Prize',
      time: '2026.1',
      timeEn: '2026.1',
      organizer: '苏州大学创新创业学院、苏州大学未来科学与工程学院、中关村超互联新基建产业创新联盟',
      organizerEn: 'Soochow University Innovation and Entrepreneurship College, Soochow University School of Future Science and Engineering, Zhongguancun Hyper-Connected New Infrastructure Industry Innovation Alliance',
      desc: ['财小步--小白入门理财助手', '奖金 3000元 人民币'],
      descEn: ['Cai Xiaobu - Financial Assistant for Beginners', 'Prize: 3000 RMB']
    },
    {
      id: 2,
      name: '"AIdea"校园OPC培育创新大赛 校级三等奖',
      nameEn: '"AIdea" Campus OPC Cultivation Innovation Competition - University Third Prize',
      time: '2026.1',
      timeEn: '2026.1',
      organizer: '苏州大学创新创业学院、苏州大学未来科学与工程学院、中关村超互联新基建产业创新联盟',
      organizerEn: 'Soochow University Innovation and Entrepreneurship College, Soochow University School of Future Science and Engineering, Zhongguancun Hyper-Connected New Infrastructure Industry Innovation Alliance',
      desc: ['TaskMaster智能期末备考助手', '奖金 1000元 人民币'],
      descEn: ['TaskMaster Intelligent Final Exam Preparation Assistant', 'Prize: 1000 RMB']
    },
    {
      id: 3,
      name: '"AIdea"校园OPC培育创新大赛 校级三等奖',
      nameEn: '"AIdea" Campus OPC Cultivation Innovation Competition - University Third Prize',
      time: '2026.1',
      timeEn: '2026.1',
      organizer: '苏州大学创新创业学院、苏州大学未来科学与工程学院、中关村超互联新基建产业创新联盟',
      organizerEn: 'Soochow University Innovation and Entrepreneurship College, Soochow University School of Future Science and Engineering, Zhongguancun Hyper-Connected New Infrastructure Industry Innovation Alliance',
      desc: ['circDesign：环状RNA一键设计引擎', '奖金 1000元 人民币'],
      descEn: ['circDesign: One-Click Circular RNA Design Engine', 'Prize: 1000 RMB']
    },
    {
      id: 4,
      name: '"AIdea"校园OPC培育创新大赛 优秀奖',
      nameEn: '"AIdea" Campus OPC Cultivation Innovation Competition - Excellence Award',
      time: '2026.1',
      timeEn: '2026.1',
      organizer: '苏州大学创新创业学院、苏州大学未来科学与工程学院、中关村超互联新基建产业创新联盟',
      organizerEn: 'Soochow University Innovation and Entrepreneurship College, Soochow University School of Future Science and Engineering, Zhongguancun Hyper-Connected New Infrastructure Industry Innovation Alliance',
      desc: ['EmoLearn——情绪感知驱动的动态学习规划系统'],
      descEn: ['EmoLearn - Emotion-Aware Dynamic Learning Planning System']
    },
    {
      id: 5,
      name: '"AIdea"校园OPC培育创新大赛 优秀奖',
      nameEn: '"AIdea" Campus OPC Cultivation Innovation Competition - Excellence Award',
      time: '2026.1',
      timeEn: '2026.1',
      organizer: '苏州大学创新创业学院、苏州大学未来科学与工程学院、中关村超互联新基建产业创新联盟',
      organizerEn: 'Soochow University Innovation and Entrepreneurship College, Soochow University School of Future Science and Engineering, Zhongguancun Hyper-Connected New Infrastructure Industry Innovation Alliance',
      desc: ['提分宝'],
      descEn: ['Score Improvement Assistant']
    },
    {
      id: 6,
      name: '"AIdea"校园OPC培育创新大赛 优秀奖',
      nameEn: '"AIdea" Campus OPC Cultivation Innovation Competition - Excellence Award',
      time: '2026.1',
      timeEn: '2026.1',
      organizer: '苏州大学创新创业学院、苏州大学未来科学与工程学院、中关村超互联新基建产业创新联盟',
      organizerEn: 'Soochow University Innovation and Entrepreneurship College, Soochow University School of Future Science and Engineering, Zhongguancun Hyper-Connected New Infrastructure Industry Innovation Alliance',
      desc: ['智能课程修读助手'],
      descEn: ['Intelligent Course Selection Assistant']
    },
    {
      id: 7,
      name: '"AIdea"校园OPC培育创新大赛 优秀奖',
      nameEn: '"AIdea" Campus OPC Cultivation Innovation Competition - Excellence Award',
      time: '2026.1',
      timeEn: '2026.1',
      organizer: '苏州大学创新创业学院、苏州大学未来科学与工程学院、中关村超互联新基建产业创新联盟',
      organizerEn: 'Soochow University Innovation and Entrepreneurship College, Soochow University School of Future Science and Engineering, Zhongguancun Hyper-Connected New Infrastructure Industry Innovation Alliance',
      desc: ['AI唤醒园林：数字重生之旅'],
      descEn: ['AI Awakens Gardens: Digital Rebirth Journey']
    },
    {
      id: 8,
      name: '"AIdea"校园OPC培育创新大赛 优秀奖',
      nameEn: '"AIdea" Campus OPC Cultivation Innovation Competition - Excellence Award',
      time: '2026.1',
      timeEn: '2026.1',
      organizer: '苏州大学创新创业学院、苏州大学未来科学与工程学院、中关村超互联新基建产业创新联盟',
      organizerEn: 'Soochow University Innovation and Entrepreneurship College, Soochow University School of Future Science and Engineering, Zhongguancun Hyper-Connected New Infrastructure Industry Innovation Alliance',
      desc: ['绣袖入园：苏州园林非遗的数字再生'],
      descEn: ['Embroidery Sleeves Enter the Garden: Digital Regeneration of Suzhou Garden Intangible Cultural Heritage']
    },
    {
      id: 9,
      name: '实验室"IT计算达人"',
      nameEn: 'Lab "IT Computing Expert"',
      time: '2025.12.26',
      timeEn: '2025.12.26',
      organizer: '苏州大学xRNA Lab实验室',
      organizerEn: 'Soochow University xRNA Lab',
      desc: ['非常感动非常意外啊！！！圣诞后的第一份惊喜，&还有一个小红包，礼轻情意重嘻嘻嘻'],
      descEn: ['Very touched and surprised!!! The first surprise after Christmas, & also a small red envelope, the gift is light but the affection is heavy hehehe']
    },
    {
      id: 10,
      name: '南京建邺模法学院黑客松 三等奖',
      nameEn: 'Nanjing Jianye Model Academy Hackathon - Third Prize',
      time: '2025.12',
      timeEn: '2025.12',
      organizer: '建邺区数据局、建邺高新区管委会、模法学院（模型算法学院）',
      organizerEn: 'Jianye District Data Bureau, Jianye High-Tech Zone Management Committee, Model Academy (Model Algorithm Academy)',
      desc: ['AI+金融'],
      descEn: ['AI+Finance']
    },
    {
      id: 11,
      name: '下乡实践优秀学子奖',
      nameEn: 'Outstanding Student Award for Rural Practice',
      time: '2025.11',
      timeEn: '2025.11',
      organizer: '中国建设银行江苏省分行',
      organizerEn: 'China Construction Bank Jiangsu Branch'
    },
    {
      id: 12,
      name: 'iCAN大学生创新创业大赛 江浙赛区 二等奖',
      nameEn: 'iCAN College Student Innovation and Entrepreneurship Competition Jiangsu-Zhejiang Region Second Prize',
      time: '2025.11.2',
      timeEn: '2025.11.2',
      organizer: 'iCAN国际创新创业大赛组委会、南京理工大学、江苏省青少年科技教育协会',
      organizerEn: 'iCAN International Innovation and Entrepreneurship Competition Committee, Nanjing University of Science and Technology, Jiangsu Youth Science and Technology Education Association',
      level: '省级',
      levelEn: 'Provincial',
      desc: ['人工智能算法设计环状 RNA 肿瘤药物'],
      descEn: ['AI Algorithm-Guided Design of Circular RNA Tumor Drugs']
    },
    {
      id: 13,
      name: '苏州市"吴地工匠"职业技能系列竞赛活动苏州工业园区第十五届高技能大赛暨第七届金鸡湖技能邀请赛生物医药实验技术全国公开挑战赛 初赛 高校组第七名',
      nameEn: 'Suzhou "Wu Craftsman" Vocational Skills Series Competition - 15th High-Skilled Competition & 7th Jinji Lake Skills Invitational Biomedical Experimental Technology National Open Challenge - Preliminary Round - 7th Place (University Group)',
      time: '2025.9',
      timeEn: '2025.9',
      organizer: '苏州工业园区管理委员会、苏州市人力资源和社会保障局、苏州市总工会等',
      organizerEn: 'Suzhou Industrial Park Administrative Committee, Suzhou Human Resources and Social Security Bureau, Suzhou Trade Union, etc.'
    },
    {
      id: 14,
      name: '"AI创想家"超互联全媒体创作大赛 智能体赛道 三等奖',
      nameEn: '"AI Creator" Hyper-Connected Multimedia Creation Competition - AI Agent Track - Third Prize',
      time: '2025.7.4',
      timeEn: '2025.7.4',
      organizer: '"AI创想家"超互联全媒体创作大赛组委会、苏州大学未来科学与工程学院、中关村超互联联盟',
      organizerEn: '"AI Creator" Competition Committee, School of Future Science and Engineering at Soochow University, Zhongguancun Hyper-Connected Alliance',
      desc: ['辅助学生快速进行期末复习备考的智能体', '奖金 2000元 人民币'],
      descEn: ['AI agent for assisting students in quick final exam review and preparation', 'Prize: 2000 RMB']
    },
    {
      id: 15,
      name: '"挑战杯"全国大学生课外学术科技作品竞赛 校级三等奖 院级一等奖',
      nameEn: '"Challenge Cup" National College Students Extracurricular Academic and Technological Works Competition - University Third Prize, School First Prize',
      time: '2025.3.14',
      timeEn: '2025.3.14',
      organizer: '苏州大学',
      organizerEn: 'Soochow University',
      level: '校级',
      levelEn: 'University Level',
      desc: [
        '基于mRNA设计的bioPROTAC靶向降解KRAS实现癌症治疗'
      ],
      descEn: [
        'mRNA-Based bioPROTAC Targeted Degradation of KRAS for Cancer Treatment'
      ]
    },
    {
      id: 16,
      name: '"挑战杯"全国大学生课外学术科技作品竞赛 校级三等奖 院级一等奖',
      nameEn: '"Challenge Cup" National College Students Extracurricular Academic and Technological Works Competition - University Third Prize, School First Prize',
      time: '2025.3.14',
      timeEn: '2025.3.14',
      organizer: '苏州大学',
      organizerEn: 'Soochow University',
      level: '校级',
      levelEn: 'University Level',
      desc: [
        '基于人工智能视觉识别的荧光手术辅助指导模型'
      ],
      descEn: [
        'AI Vision Recognition-Based Fluorescence-Guided Surgery Assistance Model'
      ]
    },
    {
      id: 17,
      name: '优秀团员',
      nameEn: 'Excellent League Member',
      time: '2024.12',
      timeEn: '2024.12',
      organizer: '学院',
      organizerEn: 'School'
    }
  ];

  // 按照时间排序，最新的奖项显示在前面
  const sortedAwards = [...awards].sort((a, b) => {
    return parseTime(b.time) - parseTime(a.time);
  });

  return (
    <section className="py-24 px-8" style={{ fontFamily: "'Noto Sans CJK Thin', sans-serif", fontWeight: 300 }}>
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-light text-center mb-16" style={{ fontFamily: "'Helvetica Neue Light', sans-serif", fontWeight: 400, color: '#6FCF97' }}>
          {language === 'zh' ? '获奖' : 'Awards'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sortedAwards.map((award) => (
            <div
              key={award.id}
              className="p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
              style={{ backgroundColor: '#FFFFFF' }}
            >
              <div className="flex items-start mb-3">
                <div className="w-2 h-2 rounded-full mt-2 mr-3" style={{ backgroundColor: '#F2994A' }}></div>
                <div className="flex-1">
                  <h3 className="text-lg font-light mb-2 leading-relaxed" style={{ fontFamily: "'Helvetica Neue Light', sans-serif", fontWeight: 400, color: '#333' }}>
                    {language === 'zh' ? award.name : award.nameEn}
                  </h3>
                  <div className="space-y-1">
                    <p className="text-sm text-gray-500">{language === 'zh' ? award.time : award.timeEn}</p>
                    {award.organizer && (
                      <p className="text-xs text-gray-600 leading-relaxed">{language === 'zh' ? award.organizer : award.organizerEn}</p>
                    )}
                    {award.level && (
                      <span
                        className="inline-block px-2 py-1 text-xs rounded-full mt-2"
                        style={{ backgroundColor: '#F2F2F2', color: '#F2994A' }}
                      >
                        {language === 'zh' ? award.level : award.levelEn}
                      </span>
                    )}
                  </div>
                  {award.desc && award.desc.length > 0 && (
                    <ul className="mt-3 space-y-1">
                      {(language === 'zh' ? award.desc : award.descEn).map((item, index) => (
                        <li key={index} className="text-sm text-gray-600 pl-4 relative">
                          <span className="absolute left-0 top-1.5 w-1 h-1 rounded-full" style={{ backgroundColor: '#6FCF97' }}></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;