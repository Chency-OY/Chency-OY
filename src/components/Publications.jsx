import React from 'react';
import { useLanguageStore } from '../store/languageStore';

const Publications = () => {
  const { language } = useLanguageStore();

  const publications = [
    {
      id: 1,
      category: '学术服务',
      categoryEn: 'Academic Service',
      items: [
        {
          title: '受邀担任第4届医学图像计算与计算机辅助干预（MICCAI）2025会议独立审稿人',
          titleEn: 'Invited as Independent Reviewer for the 4th Medical Image Computing and Computer Assisted Intervention (MICCAI) 2025 Conference',
          details: '[会议评级：CCF-B，医学影像计算与计算机辅助介入领域公认影响力最大的顶级国际学术会议。]',
          detailsEn: '[Conference Ranking: CCF-B, the most influential top international academic conference in medical image computing and computer-assisted intervention.]'
        }
      ]
    },
    {
      id: 2,
      category: '期刊&会议论文',
      categoryEn: 'Journal & Conference Papers',
      showTable: true,
      papers: [
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
      ]
    },
    {
      id: 3,
      category: '发明专利 & 实用新型专利',
      categoryEn: 'Invention Patents & Utility Model Patents',
      items: [
        {
          title: '专利申请中',
          titleEn: 'Patent Application in Progress',
          details: '相关技术创新正在申请专利保护',
          detailsEn: 'Related technological innovations are applying for patent protection'
        }
      ]
    },
    {
      id: 4,
      category: '软件著作权',
      categoryEn: 'Software Copyrights',
      items: [
        {
          title: '软著申请中',
          titleEn: 'Software Copyright Application in Progress',
          details: '相关软件作品正在申请著作权保护',
          detailsEn: 'Related software works are applying for copyright protection'
        }
      ]
    }
  ];

  return (
    <section className="py-24 px-8" style={{ fontFamily: "'Noto Sans CJK Thin', sans-serif", fontWeight: 300 }}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-light text-center mb-16" style={{ fontFamily: "'Helvetica Neue Light', sans-serif", fontWeight: 400, color: '#6FCF97' }}>
          {language === 'zh' ? '发表文章' : 'Publications'}
        </h2>
        
        <div className="space-y-8">
          {publications.map((publication) => (
            <div key={publication.id} className="p-8 rounded-lg shadow-sm" style={{ backgroundColor: '#FFFFFF' }}>
              <h3 className="text-2xl font-light mb-6 pb-3 border-b" style={{ fontFamily: "'Helvetica Neue Light', sans-serif", fontWeight: 400, color: '#F2994A', borderColor: '#F2F2F2' }}>
                {language === 'zh' ? publication.category : publication.categoryEn}
              </h3>
              
              {publication.showTable ? (
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
                      {publication.papers.map((paper, index) => (
                        <tr key={index} className="hover:bg-gray-50 transition-colors duration-200">
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
                <div className="space-y-4">
                  {publication.items.map((item, index) => (
                    <div key={index} className="relative pl-6">
                      <div className="absolute left-0 top-3 w-3 h-3 rounded-full" style={{ backgroundColor: '#6FCF97' }}></div>
                      <div className="flex flex-col space-y-2">
                        <h4 className="text-lg font-medium" style={{ fontFamily: "'Helvetica Neue Light', sans-serif", color: '#333' }}>
                          {language === 'zh' ? item.title : item.titleEn}
                        </h4>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {language === 'zh' ? item.details : item.detailsEn}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500">
            {language === 'zh' ? '更多学术成果持续更新中...' : 'More academic achievements coming soon...'}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Publications;