import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faWeixin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { useLanguageStore } from '../store/languageStore';

const SocialLinks = ({ className = "" }) => {
  const { language } = useLanguageStore();
  const [activeTooltip, setActiveTooltip] = useState(null);

  const socialData = [
    {
      id: 'github',
      icon: faGithub,
      link: 'https://github.com/Chency-OY',
      label: 'GitHub',
      value: 'Chency-OY',
      color: 'hover:text-gray-800',
      bgColor: 'hover:bg-gray-100'
    },
    {
      id: 'email',
      icon: faEnvelope,
      link: 'mailto:2712818800@qq.com',
      label: language === 'zh' ? '邮件' : 'Email',
      value: '2712818800@qq.com',
      color: 'hover:text-blue-600',
      bgColor: 'hover:bg-blue-50'
    },
    {
      id: 'wechat',
      icon: faWeixin,
      link: null, // WeChat usually doesn't have a direct link
      label: language === 'zh' ? '微信' : 'WeChat',
      value: 'X18012818800',
      color: 'hover:text-green-600',
      bgColor: 'hover:bg-green-50'
    },
    {
      id: 'phone',
      icon: faPhone,
      link: 'tel:+8618012818800',
      label: language === 'zh' ? '电话' : 'Phone',
      value: '+86 18012818800',
      color: 'hover:text-indigo-600',
      bgColor: 'hover:bg-indigo-50'
    }
  ];

  const handleCopy = (text) => {
    if (!text) return;
    navigator.clipboard.writeText(text).then(() => {
      // Could add a toast notification here
      console.log('Copied to clipboard');
    }).catch(err => {
      console.error('Failed to copy:', err);
    });
  };

  return (
    <div className={`flex items-center justify-center gap-4 sm:gap-6 ${className}`}>
      {socialData.map((item) => (
        <div 
          key={item.id} 
          className="relative group"
          onMouseEnter={() => setActiveTooltip(item.id)}
          onMouseLeave={() => setActiveTooltip(null)}
        >
          <a
            href={item.link || '#'}
            onClick={(e) => {
              if (!item.link) {
                e.preventDefault();
                handleCopy(item.value);
              }
            }}
            className={`
              flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 
              rounded-full bg-white shadow-sm border border-gray-100
              text-gray-500 transition-all duration-300 transform 
              hover:-translate-y-1 hover:shadow-md
              ${item.color} ${item.bgColor}
            `}
            aria-label={item.label}
          >
            <FontAwesomeIcon icon={item.icon} className="text-lg sm:text-xl" />
          </a>
          
          {/* Tooltip */}
          <div className={`
            absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3
            px-3 py-1.5 bg-gray-800 text-white text-xs rounded-md whitespace-nowrap
            transition-all duration-200 pointer-events-none z-10
            ${activeTooltip === item.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}
          `}>
            <span className="font-medium">{item.label}: </span>
            <span className="opacity-90">{item.value}</span>
            {!item.link && <span className="ml-1 opacity-70">({language === 'zh' ? '点击复制' : 'Click to copy'})</span>}
            
            {/* Arrow */}
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-800"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SocialLinks;