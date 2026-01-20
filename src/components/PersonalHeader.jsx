import React from 'react';
import { useLanguageStore } from '../store/languageStore';

const PersonalHeader = () => {
  const { language } = useLanguageStore();

  const data = {
    name: "Chenxi Ouyang",
    role: language === 'zh' ? "生物医学与人工智能研究者" : "Biomedical & AI Researcher",
    desc: language === 'zh' 
      ? "期待一切生物、医学、人工智能领域老师和同学的指导与合作"
      : "Look forward to guidance and collaboration from teachers and students in biology, medicine, and AI fields.",
    avatar: "https://haisnap.tos-cn-beijing.volces.com/image/05dd2b87-5f66-4e11-b1f8-288836ecee5d_1764863391669.jpg"
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-[#F9F1E6] to-[#FDFBF7] pt-24 pb-12 px-6 md:px-12 shadow-sm animate-fade-in">
      {/* 装饰背景元素 */}
      <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-[#D4AF37] opacity-5 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-48 h-48 rounded-full bg-[#6D5A4B] opacity-5 blur-2xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 relative z-10">
        {/* 头像区域 */}
        <div className="relative group cursor-pointer">
          <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37] to-[#F2994A] rounded-full blur opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
          <img 
            src={data.avatar} 
            alt={data.name}
            className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-white shadow-lg transform transition-transform duration-500 group-hover:scale-105 group-hover:rotate-3"
          />
          {/* 状态指示器 */}
          <div className="absolute bottom-2 right-2 w-4 h-4 bg-[#6FCF97] border-2 border-white rounded-full shadow-sm" title="Online"></div>
        </div>

        {/* 文本区域 */}
        <div className="text-center md:text-left flex-1">
          <h1 className="text-3xl md:text-4xl font-light text-[#4A3B32] mb-2 tracking-wide" style={{ fontFamily: "'Helvetica Neue Light', sans-serif" }}>
            {data.name}
          </h1>
          <h2 className="text-lg md:text-xl text-[#6D5A4B] mb-4 font-light">
            {data.role}
          </h2>
          
          <div className="inline-block bg-white/60 backdrop-blur-sm rounded-lg px-5 py-3 border border-[#D4AF37]/20 shadow-sm max-w-2xl transform transition-all duration-300 hover:shadow-md hover:bg-white/80">
            <p className="text-sm md:text-base text-gray-600 font-light leading-relaxed italic">
              "{data.desc}"
            </p>
          </div>
          
          {/* 装饰线条 */}
          <div className="w-16 h-1 bg-gradient-to-r from-[#D4AF37] to-transparent mt-6 mx-auto md:mx-0 rounded-full opacity-60"></div>
        </div>
      </div>
    </div>
  );
};

export default PersonalHeader;