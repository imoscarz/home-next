# 个人主页项目 / Personal Homepage

一个基于 Next.js 15 构建的现代化个人主页和博客系统，支持中英双语切换。

A modern personal homepage and blog system built with Next.js 15, featuring bilingual support (Chinese/English).

> **基于项目**: 本项目修改自 [zhengzangw/nextjs-portfolio-blog-research](https://github.com/zhengzangw/nextjs-portfolio-blog-research)

## 🔄 主要改动 / Key Changes

相较于原项目，本项目进行了以下改进：

### 配置系统增强
- ✨ 新增 Footer 配置系统（资源链接 & 发现链接）
- 🔧 大幅增强环境变量支持（20+ 配置项）
- 📋 统一 PersonalInfo 配置结构（中英文统一管理）
- 🎨 支持 Favicon 环境变量配置
- 📝 新增 Feed 多模式支持（Latest News / RSS / 合并）

### 功能优化
- 🗑️ 移除简历相关内容（专注于主页和博客）
- 📰 Feed API 支持三种模式切换：
  - `news`: 仅显示站内最新动态
  - `rss`: 仅转发外部 RSS 订阅
  - `both`: 合并两者并按时间排序
- 🔗 Discover 配置从 contacts 移至 footer
- 🎬 番剧列表功能：
  - 集成 Bangumi API 显示追番记录
  - 支持分类筛选（想看/在看/看过/搁置/抛弃）
  - 多标签筛选和搜索功能
  - 响应式瀑布流布局
  - 移动端优化的紧凑模式

### 文档完善
- 📚 新增完整配置指南（1400+ 行）
- 📖 详细的环境变量模板和说明
- 🖼️ Next.js 图片配置指引（remotePatterns）
- 🌐 国际化配置指南

详细配置说明请参考 [配置指南](docs/configuration-guide.md)。

## ✨ 特性 / Features

- 🚀 **Next.js 15** - 使用最新的 React 服务器组件和 App Router
- 🎨 **Tailwind CSS** - 现代化的样式设计
- 🌐 **国际化 (i18n)** - 支持中英文双语切换
- 📝 **RSS 博客集成** - 通过 RSS feed 聚合外部博客内容
- � **番剧追踪** - 集成 Bangumi API，展示追番列表和进度
- �🎯 **TypeScript** - 完整的类型安全
- 🎭 **动画效果** - 使用 Motion 和 Framer Motion
- 📊 **分析集成** - Google Analytics 和 Vercel Analytics
- 🎨 **主题切换** - 支持明暗主题切换
- 📱 **响应式设计** - 完美适配各种设备
- 🔧 **代码高亮** - 使用 Shiki 和 rehype-pretty-code
- 📐 **数学公式** - 支持 KaTeX 数学公式渲染

## 📋 技术栈 / Tech Stack

- **框架**: Next.js 15 (App Router)
- **语言**: TypeScript
- **样式**: Tailwind CSS 4
- **UI 组件**: Radix UI
- **动画**: Motion (Framer Motion)
- **内容解析**: unified, remark, rehype (用于 RSS 内容渲染)
- **图标**: Lucide React, Radix Icons
- **包管理**: pnpm
- **代码规范**: ESLint, Prettier

## 📦 项目结构 / Project Structure

```
├── src/
│   ├── app/                  # Next.js App Router 页面
│   │   ├── page.tsx         # 首页
│   │   ├── layout.tsx       # 根布局
│   │   ├── globals.css      # 全局样式
│   │   ├── blog/            # 博客相关页面
│   │   ├── anime/           # 动漫展示页面
│   │   ├── en/              # 英文版页面
│   │   └── api/             # API 路由
│   ├── components/          # React 组件
│   │   ├── blocks/          # 页面区块组件
│   │   ├── blog/            # 博客相关组件
│   │   ├── portfolio/       # 作品集组件
│   │   └── ui/              # UI 基础组件
│   ├── config/              # 配置文件
│   │   ├── site.ts          # 网站配置
│   │   ├── personal.ts      # 个人信息
│   │   ├── projects.tsx     # 项目信息
│   │   └── ...
│   └── lib/                 # 工具函数和库
│       ├── i18n/            # 国际化配置
│       ├── env.ts           # 环境变量配置
│       └── utils.tsx        # 工具函数
├── public/                  # 静态资源
└── asset/                   # 项目资源文件
```

## 🚀 快速开始 / Getting Started

### 前置要求 / Prerequisites

- Node.js >= 18.18.0 <= 22
- pnpm (推荐) 或 npm/yarn

### 安装 / Installation

```bash
# 克隆项目
git clone <your-repo-url>
cd homepage-new

# 安装依赖
pnpm install
```

### 环境变量配置 / Environment Variables

**重要：** 首先复制环境变量模板文件：

```bash
# 复制示例文件
cp .env.example .env.local

# 或使用带说明的模板
cp .env.local.template .env.local
```

然后编辑 `.env.local`，至少配置以下必填项：

```env
# ⚠️ 必填配置
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_DISPLAY_NAME=yourname

# 推荐配置
NEXT_PUBLIC_SITE_NAME=Your Name
NEXT_PUBLIC_DESCRIPTION=Developer, Designer, Creator

# 番剧追踪（可选）
NEXT_PUBLIC_BANGUMI_USERNAME=your_bangumi_username
NEXT_PUBLIC_BANGUMI_TOKEN=your_bangumi_token
NEXT_PUBLIC_BANGUMI_MAX_TAGS=3
```

> 💡 **提示**: 查看 `.env.example` 文件了解所有可配置项，或参考 [配置指南](docs/configuration-guide.md) 获取详细说明。

### 个性化配置 / Customization

大部分简单配置已通过环境变量管理（见上方 `.env.local`）。对于复杂的结构化数据，请编辑 `src/config/` 目录下的文件：

#### 1. 基础信息（已通过环境变量配置 ✅）

大部分网站基本信息和个人信息已通过 `.env.local` 配置，无需修改代码文件。

如需自定义详细的个人介绍，可编辑 `src/config/personal.ts` 中的 `summaryEn` 和 `summaryZh` 变量。

#### 2. 项目信息

#### 2. 项目信息

编辑 `src/config/projects.tsx` 添加你的项目展示。

#### 3. 技能信息

编辑 `src/config/skills.ts` 配置技能标签。

#### 4. 教育经历

编辑 `src/config/education.ts` 配置教育背景。

#### 5. 国际化翻译

编辑翻译文件：
- 中文: `src/lib/i18n/locales/zh.json`
- 英文: `src/lib/i18n/locales/en.json`

### 开发 / Development

```bash
# 启动开发服务器
pnpm dev

# 访问 http://localhost:3000
```

### 构建 / Build

```bash
# 构建生产版本
pnpm build

# 启动生产服务器
pnpm start
```

### 代码检查 / Linting

```bash
# 运行 ESLint
pnpm lint
```

## 🎨 主题和样式 / Theming

项目使用 Tailwind CSS 和 CSS 变量进行主题定制。可以在 `src/app/globals.css` 中修改主题颜色。

## 📱 响应式设计 / Responsive Design

所有组件都经过优化以支持：
- 移动设备 (sm: < 640px)
- 平板设备 (md: 768px)
- 桌面设备 (lg: 1024px+)

## 🚀 部署 / Deployment

### Vercel (推荐)

1. 将代码推送到 GitHub
2. 在 Vercel 中导入项目
3. 配置环境变量
4. 部署

### 其他平台

项目可部署到任何支持 Next.js 的平台：
- Netlify
- AWS Amplify
- Railway
- 自托管服务器

## 📄 许可证 / License

请查看 LICENSE 文件了解详情。

## 🤝 贡献 / Contributing

欢迎提交 Issue 和 Pull Request！
