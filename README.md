# 个人简历与作品集网站

一个使用React和Vite构建的现代化、响应式个人简历和作品集网站，用于展示专业成就、项目、技能等信息。

## 🎯 功能特点

- **个人资料**: 展示个人信息、专业角色和研究兴趣
- **项目展示**: 突出关键项目及其描述和细节
- **出版物**: 展示研究论文和出版物
- **奖项与荣誉**: 展示学术和专业奖项
- **技能矩阵**: 技术和专业技能的可视化展示
- **简历详情**: 详细的专业经验和教育历史
- **多语言支持**: 中文和英文语言选项
- **响应式设计**: 针对桌面、平板和移动设备进行优化
- **流畅动画**: 增强用户体验的微妙动画和过渡效果
- **心理测试**: 交互式心情评估功能

## 🛠️ 技术栈

- **前端框架**: React 18
- **构建工具**: Vite 5
- **路由**: React Router 6
- **状态管理**: Zustand
- **UI组件**: 自定义React组件
- **样式**: 现代CSS特性
- **图标**: Font Awesome, React Icons
- **图表**: Chart.js
- **HTTP客户端**: Axios
- **文件上传**: React Dropzone
- **UUID生成**: uuid

## 📦 安装

1. **进入项目目录**
   ```bash
   cd new-structure
   ```

2. **安装依赖**
   ```bash
   npm install
   ```

## 🚀 使用方法

### 开发模式

启动开发服务器：

```bash
npm run dev
```

应用将在 `http://localhost:5173` 上可用

### 构建生产版本

创建生产构建：

```bash
npm run build
```

构建后的文件将位于 `dist` 目录中

### 预览生产构建

```bash
npm run preview
```

## 📁 项目结构

```
new-structure/
├── src/
│   ├── components/          # React组件
│   │   ├── Awards.jsx       # 奖项部分
│   │   ├── Loader.jsx       # 加载动画
│   │   ├── PersonalHeader.jsx  # 个人信息头部
│   │   ├── Projects.jsx     # 项目展示
│   │   ├── PsychologicalTest.jsx  # 心情测试功能
│   │   ├── Publications.jsx # 出版物列表
│   │   ├── Resume.jsx       # 简历详情
│   │   ├── Skills.jsx       # 技能展示
│   │   └── SocialLinks.jsx  # 社交媒体链接
│   ├── store/
│   │   └── languageStore.js # 语言状态管理
│   ├── App.jsx              # 主应用组件
│   ├── index.css            # 全局样式
│   └── index.jsx            # 应用入口点
├── index.html               # HTML模板
├── package.json             # 项目依赖
└── vite.config.mjs          # Vite配置
```

## 🌐 组件概述

### PersonalHeader
显示个人信息，包括姓名、角色、描述和个人照片。

### Projects
展示关键项目及其详细信息和描述。

### Publications
列出研究论文和学术出版物。

### Awards
展示学术和专业奖项与荣誉。

### Skills
技术技能和能力的可视化表示。

### Resume
详细的专业经验、教育历史和资格。

### SocialLinks
专业社交媒体资料的链接。

### PsychologicalTest
交互式心情评估功能。

## 🔧 配置

### 语言设置
应用支持中文和英文两种语言。语言首选项通过Zustand状态管理进行管理。

### 主题定制
配色方案和样式可以在 `index.css` 文件和各个组件样式中进行自定义。

## 📝 许可证

本项目采用MIT许可证。

## 🤝 贡献

欢迎贡献！请随时提交Pull Request。

## 👨‍💻 作者

**陈曦欧**
- 生物医学与人工智能研究者
- 网站: [陈曦欧的简历](http://localhost:5173)

---

使用React和Vite精心构建 ❤️