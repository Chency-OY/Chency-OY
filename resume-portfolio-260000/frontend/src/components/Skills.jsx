import React from 'react';
import { useLanguageStore } from '../store/languageStore';

const Skills = () => {
  const { language } = useLanguageStore();

  const skillCategories = [
    {
      category: '编程语言和操作系统',
      categoryEn: 'Programming Languages & Operating Systems',
      items: ['C++', 'Python', 'HTML5', 'git', 'Linux', 'R语言', 'LaTeX', '汇编语言', 'Markdown'],
      itemsEn: ['C++', 'Python', 'HTML5', 'git', 'Linux', 'R', 'LaTeX', 'Assembly Language', 'Markdown']
    },
    {
      category: '机器学习与深度学习',
      categoryEn: 'Machine Learning & Deep Learning',
      items: ['CNN等'],
      itemsEn: ['CNN, etc.']
    },
    {
      category: '生物与生信',
      categoryEn: 'Biology & Bioinformatics',
      items: ['聚合酶链式反应（PCR）', '琼脂糖凝胶电泳', '常见动物实验', '细胞培养', '小鼠实验', '家兔实验', '蟾蜍'],
      itemsEn: ['Polymerase Chain Reaction (PCR)', 'Agarose Gel Electrophoresis', 'Common Animal Experiments', 'Cell Culture', 'Mouse Experiments', 'Rabbit Experiments', 'Toad']
    },
    {
      category: '兴趣爱好',
      categoryEn: 'Interests',
      items: ['羽毛球', '长跑', '越野跑', '骑行', '旅行', '钢琴', '葫芦丝', '竖笛'],
      itemsEn: ['Badminton', 'Long-distance Running', 'Trail Running', 'Cycling', 'Traveling', 'Piano', 'Hulusi', 'Recorder']
    },
    {
      category: '语言能力',
      categoryEn: 'Language Skills',
      items: ['雅思口语: 6.5', '普通话母语水平'],
      itemsEn: ['IELTS Speaking: 6.5', 'Native Mandarin Speaker']
    },
    {
      category: '常用软件',
      categoryEn: 'Software',
      items: ['EndNote', 'MobaXterm', 'OneDrive', 'Word', 'Excel', 'PowerPoint', 'VSCode', 'RStudio', 'Foldit', 'Zoom', 'Web of Science', 'Teams', 'PubMed', 'GitHub', 'Turnitin'],
      itemsEn: ['EndNote', 'MobaXterm', 'OneDrive', 'Word', 'Excel', 'PowerPoint', 'VSCode', 'RStudio', 'Foldit', 'Zoom', 'Web of Science', 'Teams', 'PubMed', 'GitHub', 'Turnitin']
    },
    {
      category: '金融',
      categoryEn: 'Finance',
      items: ['股票', '期货', '合约', '期权', '债券'],
      itemsEn: ['Stocks', 'Futures', 'Contracts', 'Options', 'Bonds']
    }
  ];

  return (
    <section className="py-24 px-8" style={{ fontFamily: "'Noto Sans CJK Thin', sans-serif", fontWeight: 300 }}>
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-light text-center mb-16" style={{ fontFamily: "'Helvetica Neue Light', sans-serif", fontWeight: 400, color: '#6FCF97' }}>
          {language === 'zh' ? '技能' : 'Skills'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((skillCategory, index) => (
            <div key={index} className="p-6 rounded-lg shadow-sm" style={{ backgroundColor: '#FFFFFF' }}>
              <h3 className="text-lg font-medium mb-4" style={{ fontFamily: "'Helvetica Neue Light', sans-serif", color: '#F2994A' }}>
                {language === 'zh' ? skillCategory.category : skillCategory.categoryEn}
              </h3>
              <div className="flex flex-wrap gap-2">
                {(language === 'zh' ? skillCategory.items : skillCategory.itemsEn).map((item, itemIndex) => (
                  <span
                    key={itemIndex}
                    className="px-3 py-1 text-sm rounded-full"
                    style={{ backgroundColor: '#F2F2F2', color: '#333' }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;