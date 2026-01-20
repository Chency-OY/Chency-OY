import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// 防抖时间戳
let lastToggleTime = 0;
const DEBOUNCE_DELAY = 300; // 300ms 防抖

export const useLanguageStore = create(
  persist(
    (set, get) => ({
      language: 'en', // 默认语言设置为英语，确保首次加载显示英文界面
      isToggling: false,
      toggleLanguage: () => {
        const now = Date.now();
        const { isToggling } = get();
        
        // 防抖保护：避免快速重复点击
        if (isToggling || now - lastToggleTime < DEBOUNCE_DELAY) {
          return;
        }
        
        lastToggleTime = now;
        
        try {
          set({ isToggling: true });
          
          set((state) => ({ 
            language: state.language === 'zh' ? 'en' : 'zh',
            isToggling: false
          }));
        } catch (error) {
          console.error('Language toggle error:', error);
          set({ isToggling: false });
        }
      },
    }),
    {
      name: 'language-storage',
      version: 1,
      // 优化存储策略
      storage: {
        getItem: (name) => {
          try {
            const item = localStorage.getItem(name);
            return item ? JSON.parse(item) : null;
          } catch (error) {
            console.error('Storage getItem error:', error);
            return null;
          }
        },
        setItem: (name, value) => {
          try {
            localStorage.setItem(name, JSON.stringify(value));
          } catch (error) {
            console.error('Storage setItem error:', error);
          }
        },
        removeItem: (name) => {
          try {
            localStorage.removeItem(name);
          } catch (error) {
            console.error('Storage removeItem error:', error);
          }
        },
      },
      // 只持久化 language 字段
      partialize: (state) => ({ language: state.language }),
    }
  )
);