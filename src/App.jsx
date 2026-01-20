import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { useLanguageStore } from './store/languageStore';
import Loader from './components/Loader';
import PersonalHeader from './components/PersonalHeader';
import SocialLinks from './components/SocialLinks';
import Projects from './components/Projects';
import Publications from './components/Publications';
import Awards from './components/Awards';
import Skills from './components/Skills';
import Resume from './components/Resume';
import PsychologicalTest from './components/PsychologicalTest';

// 动态槽位组件：用于后续扩展而不修改核心代码
const Slot = ({ name }) => <div data-slot={name} className="hidden" />;

// 路由滚动处理器：处理Hash锚点跳转与页面切换时的滚动位置
const ScrollHandler = () => {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [hash, pathname]);

  return null;
};

// 导航栏组件
const Navbar = ({ toggleTest }) => {
  const { language, toggleLanguage } = useLanguageStore();
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: '首页', nameEn: 'Home', path: '/' },
    { name: '项目', nameEn: 'Projects', path: '/#projects' },
    { name: '发表', nameEn: 'Publications', path: '/#publications' },
    { name: '获奖', nameEn: 'Awards', path: '/#awards' },
    { name: '技能', nameEn: 'Skills', path: '/#skills' },
    { name: '简历', nameEn: 'Resume', path: '/resume' },
  ];

  const handleNavClick = () => setIsOpen(false);

  // 判断链接是否激活的辅助函数
  const isLinkActive = (path) => {
    if (path === '/') return location.pathname === '/' && !location.hash;
    if (path.startsWith('/#')) return location.pathname === '/' && location.hash === path.substring(1);
    return location.pathname === path;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-white/85 backdrop-blur-md border-b border-gray-100/50 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="text-xl font-light tracking-wider text-[#4A3B32] hover:text-[#D4AF37] transition-colors" style={{ fontFamily: "'Helvetica Neue Light', sans-serif" }}>
            Chenxi Ouyang
          </Link>

          {/* 桌面菜单 */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-light transition-colors ${
                  isLinkActive(item.path)
                    ? 'text-[#6FCF97] font-medium'
                    : 'text-gray-600 hover:text-[#6FCF97]'
                }`}
              >
                {language === 'zh' ? item.name : item.nameEn}
              </Link>
            ))}
            <div className="h-4 w-px bg-gray-300 mx-2"></div>
            <button 
              onClick={toggleLanguage}
              className="px-3 py-1 rounded-full border border-gray-200 text-xs text-gray-500 hover:border-[#F2994A] hover:text-[#F2994A] transition-all bg-white"
            >
              {language === 'zh' ? 'EN' : '中'}
            </button>
            <button
               onClick={toggleTest}
               className="text-gray-400 hover:text-pink-400 transition-colors p-1"
               title={language === 'zh' ? '每日心情' : 'Daily Mood'}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>
          </div>

          {/* 移动端菜单按钮 */}
          <div className="md:hidden flex items-center gap-3">
             <button 
              onClick={toggleLanguage}
              className="px-2 py-0.5 rounded border border-gray-200 text-xs text-gray-500 bg-white"
            >
              {language === 'zh' ? 'EN' : '中'}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none p-2"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* 移动端菜单抽屉 */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-b border-gray-100 absolute w-full shadow-lg animate-fade-in">
          <div className="px-4 pt-2 pb-4 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={handleNavClick}
                className="block px-3 py-3 rounded-md text-base font-light text-gray-700 hover:text-[#6FCF97] hover:bg-gray-50"
              >
                {language === 'zh' ? item.name : item.nameEn}
              </Link>
            ))}
             <button
               onClick={() => { toggleTest(); handleNavClick(); }}
               className="w-full text-left px-3 py-3 rounded-md text-base font-light text-gray-700 hover:text-pink-500 hover:bg-gray-50 flex items-center gap-2"
            >
               <span>{language === 'zh' ? '每日心情' : 'Daily Mood'}</span>
               <span className="text-pink-300">♥</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

// 首页聚合组件
const Home = () => (
  <div className="animate-fade-in">
    <PersonalHeader />
    <Slot name="after-header" />
    <div className="mt-8 mb-16 transform hover:-translate-y-1 transition-transform duration-500">
      <SocialLinks />
    </div>
    
    <div id="projects" className="scroll-mt-24">
      <Projects />
    </div>
    <div className="max-w-4xl mx-auto w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent my-4" />
    
    <div id="publications" className="scroll-mt-24">
      <Publications />
    </div>
    <div className="max-w-4xl mx-auto w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent my-4" />
    
    <div id="awards" className="scroll-mt-24">
      <Awards />
    </div>
    <div className="max-w-4xl mx-auto w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent my-4" />
    
    <div id="skills" className="scroll-mt-24">
      <Skills />
    </div>
    
    <Slot name="home-bottom" />
  </div>
);

// 页脚组件已移除

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showTest, setShowTest] = useState(false);

  useEffect(() => {
    // 模拟资源预加载，给予Loader展示时间
    const timer = setTimeout(() => setIsLoading(false), 1200);
    // 动态设置页面标题，遵循法规要求
    document.title = "Resume of Chenxi Ouyang By HAISNAP";
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-[#FDFBF7] text-[#4A3B32] font-sans selection:bg-[#F2994A]/20 selection:text-[#4A3B32]">
        <Loader isLoading={isLoading} setIsLoading={setIsLoading} />
        <ScrollHandler />
        
        {/* 主要布局 */}
        <Navbar toggleTest={() => setShowTest(true)} />
        
        <main className="pt-16 min-h-[calc(100vh-180px)]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resume" element={
              <div className="animate-fade-in py-8">
                <Resume />
              </div>
            } />
          </Routes>
        </main>

        {/* 全局功能弹窗 */}
        {showTest && <PsychologicalTest onClose={() => setShowTest(false)} />}
        
        {/* 动态槽位：全局浮窗插槽 (如回到顶部按钮等) */}
        <Slot name="global-overlay" />
      </div>
    </Router>
  );
};

export default App;