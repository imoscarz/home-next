# 配置指南

本文档详细介绍项目中所有配置文件的字段、键值和配置方式。

## 快速开始

### 1. 配置环境变量

```bash
# 复制示例文件
cp .env.example .env.local

# 编辑 .env.local 填入你的实际配置
# 至少需要配置以下必填项：
# - NEXT_PUBLIC_SITE_URL（网站 URL）
# - NEXT_PUBLIC_DISPLAY_NAME（显示名称）
# - NEXT_PUBLIC_EMAIL（联系邮箱）
```

### 2. 修改配置文件

大部分简单的配置（如网站名称、描述等）已通过环境变量管理，你只需修改 `.env.local` 即可。

对于更复杂的配置（如项目列表、技能、教育经历等），请编辑 `src/config/` 目录下的对应文件。

### 3. 配置优先级

- **环境变量** (`.env.local`)：简单的文本配置，如名称、链接、开关等
- **配置文件** (`src/config/*.ts`)：复杂的结构化数据，如项目列表、技能清单等

## 目录

- [配置文件概览](#配置文件概览)
- [站点配置 (site.ts)](#站点配置-sitets)
- [个人信息 (personal.ts)](#个人信息-personalts)
- [联系方式与导航 (contact.ts)](#联系方式与导航-contactts)
- [Footer 配置 (footer.ts)](#footer-配置-footerts)
- [项目展示 (projects.tsx)](#项目展示-projectstsx)
- [技能列表 (skills.ts)](#技能列表-skillsts)
- [教育经历 (education.ts)](#教育经历-educationts)
- [新闻动态 (news.ts)](#新闻动态-newsts)
- [环境变量 (env.ts)](#环境变量-envts)
- [Next.js 图片配置 (next.config.ts)](#nextjs-图片配置-nextconfigts)
- [多语言配置](#多语言配置)

---

## 配置文件概览

所有配置文件位于 `src/config/` 目录下：

```
src/config/
├── site.ts          # 站点基础配置
├── personal.ts      # 个人信息
├── contact.ts       # 联系方式和导航栏
├── footer.ts        # Footer 资源和发现链接
├── projects.tsx     # 项目展示
├── skills.ts        # 技能列表
├── education.ts     # 教育经历
└── news.ts          # 新闻动态
```

所有配置都使用 `as const` 确保类型安全。

---

## 站点配置 (site.ts)

**文件路径**: `src/config/site.ts`

### 配置结构

```typescript
export const siteConfig = {
  url: string;              // 网站 URL
  lastUpdated: string;      // 最后更新时间
  avatarUrl: string;        // 头像 URL
  blogDescription: string;  // 博客描述（英文）
  blogCharacter: string;    // 博客角色标识
  chinese: {
    blogDescription: string; // 博客描述（中文）
  };
} as const;
```

### 字段说明

| 字段 | 类型 | 说明 | 示例 |
|------|------|------|------|
| `url` | string | 网站完整 URL，用于生成 sitemap 和 canonical 链接 | `"https://imoscarz.me"` |
| `lastUpdated` | string | 网站最后更新时间，显示在 Footer 底部 | `"Dec 2025"` |
| `avatarUrl` | string | 头像图片 URL，支持相对路径或绝对 URL | `"https://cdn.imoscarz.me/avatar.png"` |
| `blogDescription` | string | 博客的英文描述，显示在博客页面 | `"Thoughts on AI, software, life and more."` |
| `blogCharacter` | string | 博客角色标识符，用于个性化展示 | `"I"` |
| `chinese.blogDescription` | string | 博客的中文描述 | `"关于AI、软件、生活等的思考。"` |

### 使用示例

```typescript
export const siteConfig = {
  url: "https://yourdomain.com",
  lastUpdated: "Dec 2025",
  avatarUrl: "/avatar.png",
  blogDescription: "Personal thoughts and tech insights.",
  blogCharacter: "I",
  chinese: {
    blogDescription: "个人思考与技术见解。",
  },
} as const;
```

---

## 个人信息 (personal.ts)

**文件路径**: `src/config/personal.ts`

### 配置结构

```typescript
export const personalInfo = {
  name: string;              // 主要名称
  subtitle: string;          // 副标题/真实姓名
  description: string;       // 简短描述
  summary: string;           // 详细个人介绍（英文）
  surname: string;           // 姓
  firstName: string;         // 名
  initials: string;          // 姓名首字母
  location: string;          // 所在地
  locationLink: string;      // 地理位置链接
  chinese: {
    name: string;            // 中文名称
    subtitle: string;        // 中文副标题
    description: string;     // 中文描述
    summary: string;         // 详细介绍（中文）
  };
} as const;
```

### 字段说明

| 字段 | 类型 | 说明 | 示例 |
|------|------|------|------|
| `name` | string | 主要显示名称，通常是用户名或昵称 | `"imoscarz"` |
| `subtitle` | string | 副标题，通常是真实姓名 | `"Oscar Zeng"` |
| `description` | string | 一句话简短描述（英文） | `"Developer, College Student"` |
| `summary` | string | 详细的个人介绍段落（英文），显示在关于页面 | 详见示例 |
| `surname` | string | 姓氏 | `"Zeng"` |
| `firstName` | string | 名字 | `"Oscar"` |
| `initials` | string | 姓名首字母缩写 | `"OZ"` |
| `location` | string | 当前所在地 | `"Shaanxi, China"` |
| `locationLink` | string | 地理位置的 Google Maps 链接 | `"https://www.google.com/maps/place/..."` |
| `chinese.*` | object | 所有对应字段的中文版本 | 同上 |

### 使用示例

```typescript
export const personalInfo = {
  name: "yourname",
  subtitle: "Your Full Name",
  description: "Software Engineer, Open Source Enthusiast",
  summary: "A passionate developer focusing on web technologies...",
  surname: "Name",
  firstName: "Your",
  initials: "YN",
  location: "Beijing, China",
  locationLink: "https://www.google.com/maps/place/Beijing",
  chinese: {
    name: "你的名字",
    subtitle: "中文全名",
    description: "软件工程师，开源爱好者",
    summary: "一位热衷于 Web 技术的开发者...",
  },
} as const;
```

---

## 联系方式与导航 (contact.ts)

**文件路径**: `src/config/contact.ts`

### 导航栏配置 (navbar)

```typescript
export const navbar = [
  {
    href: string;        // 链接路径
    icon: IconComponent; // 图标组件
    label: string;       // 标签文本
  },
  // ...
] as const;
```

#### 字段说明

| 字段 | 类型 | 说明 | 示例 |
|------|------|------|------|
| `href` | string | 导航链接路径，相对路径或绝对路径 | `"/"`, `"/blog"` |
| `icon` | IconComponent | 从 `@/components/icons` 导入的图标组件 | `Icons.home` |
| `label` | string | 导航项显示文本（不需要翻译，会自动处理） | `"Home"`, `"Blog"` |

#### 使用示例

```typescript
export const navbar = [
  { href: "/", icon: Icons.home, label: "Home" },
  { href: "/blog", icon: Icons.notebook, label: "Blog" },
  { href: "/projects", icon: Icons.code, label: "Projects" },
] as const;
```

### 社交媒体配置 (contact.social)

```typescript
export const contact = {
  social: {
    [PlatformName]: {
      name: string;      // 平台名称
      url: string;       // 链接 URL
      icon: IconComponent; // 图标组件
      navbar: boolean;   // 是否显示在导航栏
      content: boolean;  // 是否显示在内容区域
      footer: boolean;   // 是否显示在 Footer
    },
    // ...
  },
} as const;
```

#### 字段说明

| 字段 | 类型 | 说明 | 示例 |
|------|------|------|------|
| `name` | string | 社交平台的显示名称 | `"GitHub"` |
| `url` | string | 个人主页链接（完整 URL） | `"https://github.com/username"` |
| `icon` | IconComponent | 平台图标组件 | `Icons.github` |
| `navbar` | boolean | 是否在导航栏显示（通常为 false） | `false` |
| `content` | boolean | 是否在内容区域显示（关于页面） | `true` |
| `footer` | boolean | 是否在 Footer 显示 | `true` |

#### 可用图标

可从 `@/components/icons` 导入的图标包括：
- `Icons.github`
- `Icons.linkedin`
- `Icons.twitter` / `Icons.x`
- `Icons.email`
- `Icons.zhihu`
- `Icons.rss`
- `Icons.youtube`
- 更多图标参见 `src/components/icons.tsx`

#### 使用示例

```typescript
export const contact = {
  social: {
    GitHub: {
      name: "GitHub",
      url: "https://github.com/yourusername",
      icon: Icons.github,
      navbar: false,
      content: true,
      footer: true,
    },
    LinkedIn: {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/yourprofile",
      icon: Icons.linkedin,
      navbar: false,
      content: true,
      footer: true,
    },
    Email: {
      name: "Email",
      url: "mailto:your.email@example.com",
      icon: Icons.email,
      navbar: false,
      content: true,
      footer: false, // 邮箱通常不在 Footer 显示
    },
  },
} as const;
```

---

## Footer 配置 (footer.ts)

**文件路径**: `src/config/footer.ts`

### Footer 资源链接 (footerResources)

```typescript
export const footerResources = [
  {
    name: string;           // 资源标识符
    href: string;           // 链接路径
    translationKey: string; // 翻译键（可选）
  },
  // ...
] as const;
```

#### 字段说明

| 字段 | 类型 | 说明 | 示例 |
|------|------|------|------|
| `name` | string | 资源的唯一标识符，必须与翻译文件中的键名对应 | `"blog"` |
| `href` | string | 资源链接路径，相对路径会自动处理多语言 | `"/blog"` |
| `translationKey` | string | 完整的翻译键路径（仅供参考） | `"footer.resources.blog"` |

#### 多语言处理

- 内部链接（如 `/blog`）会自动添加语言前缀：
  - 中文: `/blog`
  - 英文: `/en/blog`
- 锚点链接（如 `/#projects`）会保持不变

#### 使用示例

```typescript
export const footerResources = [
  {
    name: "blog",
    href: "/blog",
    translationKey: "footer.resources.blog",
  },
  {
    name: "docs",
    href: "/docs",
    translationKey: "footer.resources.docs",
  },
  {
    name: "projects",
    href: "/#projects",
    translationKey: "footer.resources.projects",
  },
] as const;
```

对应的翻译文件配置：

**zh.json**
```json
{
  "footer": {
    "resources": {
      "blog": "博客",
      "docs": "文档",
      "projects": "项目"
    }
  }
}
```

**en.json**
```json
{
  "footer": {
    "resources": {
      "blog": "Blog",
      "docs": "Documentation",
      "projects": "Projects"
    }
  }
}
```

### 发现链接 (discover)

```typescript
export const discover = [
  {
    name: string; // 链接显示名称
    url: string;  // 外部链接 URL
  },
  // ...
] as const;
```

#### 字段说明

| 字段 | 类型 | 说明 | 示例 |
|------|------|------|------|
| `name` | string | 链接的显示文本 | `"Xidian University"` |
| `url` | string | 完整的外部链接 URL | `"https://www.xidian.edu.cn/"` |

#### 使用示例

```typescript
export const discover = [
  {
    name: "My University",
    url: "https://university.edu",
  },
  {
    name: "Friend's Blog",
    url: "https://friend.blog",
  },
  {
    name: "Open Source Project",
    url: "https://github.com/project",
  },
] as const;
```

---

## 项目展示 (projects.tsx)

**文件路径**: `src/config/projects.tsx`

### 配置结构

```typescript
export const projects = [
  {
    title: string;          // 项目标题
    href: string;           // 项目主链接
    dates: string;          // 项目时间范围
    active: boolean;        // 是否活跃
    description: string;    // 项目描述
    technologies: string[]; // 使用的技术栈
    authors: string;        // 作者信息（可选）
    links: Array<{         // 相关链接
      type: string;         // 链接类型
      href: string;         // 链接 URL
      icon: JSX.Element;    // 链接图标
    }>;
    image: string;          // 项目封面图片
    video: string;          // 项目视频（可选）
  },
  // ...
] as const;
```

### 字段说明

| 字段 | 类型 | 必填 | 说明 | 示例 |
|------|------|------|------|------|
| `title` | string | ✅ | 项目名称 | `"My Awesome Project"` |
| `href` | string | ✅ | 项目主链接（官网或 GitHub） | `"https://github.com/user/project"` |
| `dates` | string | ✅ | 项目时间范围 | `"Jan 2024 - Present"` |
| `active` | boolean | ✅ | 项目是否还在活跃开发 | `true` |
| `description` | string | ✅ | 项目的简短描述 | `"A powerful tool for..."` |
| `technologies` | string[] | ✅ | 使用的技术栈列表 | `["React", "TypeScript"]` |
| `authors` | string | ❌ | 作者信息（支持 Markdown） | `"**Authors:** John Doe, Jane Smith"` |
| `links` | array | ✅ | 相关链接列表（GitHub、文档等） | 见下方 |
| `image` | string | ✅ | 项目封面图片路径 | `"/proj-example.png"` |
| `video` | string | ❌ | 项目演示视频 URL | `"https://cdn.example.com/demo.mp4"` |

### Links 数组配置

每个链接对象包含：

| 字段 | 类型 | 说明 | 示例 |
|------|------|------|------|
| `type` | string | 链接类型/显示文本 | `"Github"`, `"Website"`, `"Paper"` |
| `href` | string | 完整的 URL | `"https://github.com/user/project"` |
| `icon` | JSX.Element | 图标组件 | `<Icons.github className="size-3" />` |

### 常用链接类型和图标

| 类型 | 图标组件 | 用途 |
|------|----------|------|
| Github | `<Icons.github className="size-3" />` | GitHub 仓库 |
| Website | `<Icons.globe className="size-3" />` | 项目官网 |
| Paper | `<Icons.paper className="size-3" />` | 学术论文 |
| Blog | `<Icons.newspaper className="size-3" />` | 博客文章 |
| Demo | `<Icons.play className="size-3" />` | 在线演示 |

### 使用示例

```typescript
import { Icons } from "@/components/icons";

export const projects = [
  {
    title: "My Portfolio Website",
    href: "https://github.com/yourusername/portfolio",
    dates: "Dec 2024 - Present",
    active: true,
    description:
      "A modern portfolio website built with Next.js 15, featuring responsive design and dark mode support.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    authors: "", // 个人项目可留空
    links: [
      {
        type: "Github",
        href: "https://github.com/yourusername/portfolio",
        icon: <Icons.github className="size-3" />,
      },
      {
        type: "Website",
        href: "https://yourportfolio.com",
        icon: <Icons.globe className="size-3" />,
      },
    ],
    image: "/projects/portfolio.png",
    video: "",
  },
  {
    title: "Research Paper Implementation",
    href: "https://arxiv.org/abs/example",
    dates: "Jan 2024 - Jun 2024",
    active: false,
    description:
      "Implementation of the XYZ algorithm proposed in our research paper.",
    technologies: ["Python", "PyTorch", "NumPy"],
    authors: "**Authors:** Your Name, Collaborator Name",
    links: [
      {
        type: "Paper",
        href: "https://arxiv.org/abs/example",
        icon: <Icons.paper className="size-3" />,
      },
      {
        type: "Github",
        href: "https://github.com/yourusername/research",
        icon: <Icons.github className="size-3" />,
      },
    ],
    image: "/projects/research.png",
    video: "https://cdn.example.com/demo.mp4",
  },
] as const;
```

### 图片和视频资源

- **图片**: 放置在 `public/` 目录，路径以 `/` 开头
- **视频**: 可以使用 CDN 链接或放在 `public/` 目录
- **优先级**: 如果同时提供 `image` 和 `video`，优先显示视频

---

## 技能列表 (skills.ts)

**文件路径**: `src/config/skills.ts`

### 配置结构

```typescript
export const skills = [
  {
    name: string;        // 技能名称
    icon: IconComponent; // 技能图标
  },
  // ...
] as const;
```

### 字段说明

| 字段 | 类型 | 说明 | 示例 |
|------|------|------|------|
| `name` | string | 技能或技术的名称 | `"Python"`, `"React"` |
| `icon` | IconComponent | 对应的图标组件 | `Icons.code` |

### 可用图标类型

| 图标 | 适用技能类型 | 示例 |
|------|-------------|------|
| `Icons.code` | 编程语言 | Python, JavaScript, C++ |
| `Icons.package` | 框架/库 | React, Docker, GitLab CI |
| `Icons.server` | 后端/服务 | FastAPI, FastMCP, Node.js |
| `Icons.database` | 数据库 | PostgreSQL, MongoDB, Redis |
| `Icons.brain` | AI/ML | OpenAI API, TensorFlow |
| `Icons.globe` | Web 技术 | Next.js, Vercel, HTML/CSS |
| `Icons.github` | 开发工具 | GitHub Actions, Git |

### 使用示例

```typescript
import { Icons } from "@/components/icons";

export const skills = [
  // 编程语言
  { name: "Python", icon: Icons.code },
  { name: "TypeScript", icon: Icons.code },
  { name: "C++", icon: Icons.code },
  
  // 前端框架
  { name: "React", icon: Icons.package },
  { name: "Next.js", icon: Icons.globe },
  { name: "Vue.js", icon: Icons.package },
  
  // 后端技术
  { name: "FastAPI", icon: Icons.server },
  { name: "Node.js", icon: Icons.server },
  { name: "Express", icon: Icons.server },
  
  // 数据库
  { name: "PostgreSQL", icon: Icons.database },
  { name: "MongoDB", icon: Icons.database },
  
  // AI/ML
  { name: "OpenAI API", icon: Icons.brain },
  { name: "TensorFlow", icon: Icons.brain },
  
  // DevOps
  { name: "Docker", icon: Icons.package },
  { name: "GitHub Actions", icon: Icons.github },
  { name: "Vercel", icon: Icons.globe },
] as const;
```

### 技能分类建议

建议按以下顺序组织技能：
1. **编程语言** (Python, JavaScript, etc.)
2. **前端技术** (React, Next.js, etc.)
3. **后端技术** (FastAPI, Node.js, etc.)
4. **数据库** (PostgreSQL, MongoDB, etc.)
5. **AI/ML 工具** (OpenAI, TensorFlow, etc.)
6. **DevOps 工具** (Docker, CI/CD, etc.)
7. **云服务** (Vercel, AWS, etc.)

---

## 教育经历 (education.ts)

**文件路径**: `src/config/education.ts`

### 配置结构

```typescript
export const education = [
  {
    school: string;     // 学校名称
    href: string;       // 学校官网链接
    degree: string;     // 学位/学历
    logoUrl: string;    // 学校 Logo 路径
    start: string;      // 开始时间
    end: string;        // 结束时间
  },
  // ...
] as const;
```

### 字段说明

| 字段 | 类型 | 说明 | 示例 |
|------|------|------|------|
| `school` | string | 学校全称 | `"Xidian University"` |
| `href` | string | 学校官网或维基百科链接 | `"https://www.xidian.edu.cn/"` |
| `degree` | string | 学位名称或学历描述 | `"Bachelor's Degree in Computer Science"` |
| `logoUrl` | string | 学校 Logo 图片路径 | `"/icon/xidian.png"` |
| `start` | string | 入学年份 | `"2020"` |
| `end` | string | 毕业年份或 "Present" | `"2024"` 或 `"Present"` |

### 使用示例

```typescript
export const education = [
  {
    school: "Stanford University",
    href: "https://www.stanford.edu/",
    degree: "Master's Degree in Computer Science",
    logoUrl: "/icon/stanford.png",
    start: "2022",
    end: "2024",
  },
  {
    school: "Peking University",
    href: "https://www.pku.edu.cn/",
    degree: "Bachelor's Degree in Software Engineering",
    logoUrl: "/icon/pku.png",
    start: "2018",
    end: "2022",
  },
  {
    school: "Beijing High School",
    href: "https://example.com",
    degree: "High School Diploma",
    logoUrl: "/icon/highschool.png",
    start: "2015",
    end: "2018",
  },
] as const;
```

### Logo 图片规范

- **位置**: 放置在 `public/icon/` 目录
- **格式**: 推荐 PNG 或 SVG
- **尺寸**: 建议正方形，至少 256x256px
- **背景**: 建议使用透明背景

### 时间格式

- **年份**: 使用四位数年份，如 `"2024"`
- **在读**: 使用 `"Present"` 表示当前在读
- **显示**: 会自动格式化为 "2020 - 2024" 或 "2020 - Present"

---

## 新闻动态 (news.ts)

**文件路径**: `src/config/news.ts`

### 配置结构

```typescript
export const news = [
  {
    date: string;    // 日期
    title: string;   // 新闻标题
    content: string; // 新闻内容
  },
  // ...
] as const;
```

### 字段说明

| 字段 | 类型 | 说明 | 示例 |
|------|------|------|------|
| `date` | string | 新闻发布日期，格式：YYYY.MM | `"2025.12"` |
| `title` | string | 新闻标题 | `"New Paper Published"` |
| `content` | string | 新闻详细内容，支持普通文本 | `"Our paper on AI has been accepted..."` |

### 使用示例

```typescript
export const news = [
  {
    date: "2025.12",
    title: "Joined XYZ Company as Software Engineer",
    content:
      "Excited to announce that I've joined XYZ Company as a Senior Software Engineer, focusing on full-stack development.",
  },
  {
    date: "2025.10",
    title: "Paper Accepted at NeurIPS 2025",
    content:
      "Our research paper on efficient neural network training has been accepted to NeurIPS 2025. Looking forward to presenting in Vancouver!",
  },
  {
    date: "2025.06",
    title: "Graduated from University",
    content:
      "Successfully completed my Master's degree in Computer Science with honors. Thanks to all my professors and colleagues!",
  },
  {
    date: "2025.03",
    title: "Open Source Project Milestone",
    content:
      "My open-source project reached 1000 stars on GitHub! Thank you to all contributors and users for your support.",
  },
] as const;
```

### 内容编写建议

1. **简洁明了**: 每条新闻控制在 2-3 句话
2. **时间倒序**: 最新的新闻放在数组最前面
3. **重要性**: 优先展示职业发展、学术成果、重要项目
4. **专业性**: 保持专业的语气和措辞

### 日期格式

- **标准格式**: `YYYY.MM`
- **仅年份**: `YYYY` (如 `"2025"`)
- **完整日期**: 不建议使用具体日期，以保持简洁

---

## 环境变量 (env.ts)

**文件路径**: `src/lib/env.ts`

环境变量配置文件提供类型安全的环境变量访问。实际的环境变量值需要在 `.env.local` 文件中配置。

### 配置结构

```typescript
export const env = {
  // 站点配置
  siteUrl: string;
  siteName: string;
  siteDescription: string;
  
  // 博客配置
  rssFeedUrl: string;
  
  // 分析工具
  gaTrackingId: string;
  
  // 联系方式
  email: string;
  
  // 社交媒体
  github: string;
  twitter: string;
  linkedin: string;
  
  // 其他
  resumeUrl: string;
  
  // 功能开关
  enableBlog: boolean;
  enableAnalytics: boolean;
  enableAnime: boolean;
  
  // API Token
  bangumiToken: string;
  bangumiUsername: string;
  bangumiMaxTags: number;
} as const;
```

### 环境变量列表

#### 站点配置

| 变量名 | 类型 | 说明 | 默认值 |
|--------|------|------|--------|
| `NEXT_PUBLIC_SITE_URL` | string | 网站完整 URL | `"https://www.zangwei.dev"` |
| `NEXT_PUBLIC_SITE_NAME` | string | 网站名称 | `"Zangwei Zheng"` |
| `NEXT_PUBLIC_SITE_DESCRIPTION` | string | 网站描述 | `"Full Stack Developer..."` |
| `NEXT_PUBLIC_LAST_UPDATED` | string | 最后更新时间 | `"Dec 2025"` |
| `NEXT_PUBLIC_AVATAR_URL` | string | 头像 URL | `"https://cdn.example.com/avatar.png"` |
| `NEXT_PUBLIC_FAVICON_URL` | string | Favicon URL | `"/favicon.ico"` |

#### 个人信息

| 变量名 | 类型 | 说明 | 默认值 |
|--------|------|------|--------|
| `NEXT_PUBLIC_DISPLAY_NAME` | string | 显示名称（用户名/昵称） | `"Your Name"` |
| `NEXT_PUBLIC_SUBTITLE` | string | 副标题（真实姓名） | `"Your Subtitle"` |
| `NEXT_PUBLIC_DESCRIPTION` | string | 简短描述 | `"Your Short Description"` |
| `NEXT_PUBLIC_LOCATION` | string | 所在地 | `"Your Location"` |
| `NEXT_PUBLIC_LOCATION_LINK` | string | 地理位置 Google Maps 链接 | `"https://www.google.com/maps/..."` |

#### 博客配置

| 变量名 | 类型 | 说明 | 默认值 |
|--------|------|------|--------|
| `NEXT_PUBLIC_RSS_FEED_URL` | string | 外部博客 RSS 订阅地址 | `""` (空字符串) |
| `NEXT_PUBLIC_FEED_MODE` | string | Feed 模式：`"news"` / `"rss"` / `"both"` | `"rss"` |
| `NEXT_PUBLIC_BLOG_DESCRIPTION` | string | 博客描述（英文） | `"Thoughts on technology..."` |
| `NEXT_PUBLIC_BLOG_DESCRIPTION_ZH` | string | 博客描述（中文） | `"关于技术和生活的思考。"` |
| `NEXT_PUBLIC_BLOG_CHARACTER` | string | 博客角色标识 | `"I"` |

**Feed 模式说明**

`NEXT_PUBLIC_FEED_MODE` 控制 `/api/feed/atom.xml` 的内容来源：

- **`news`**: 仅显示最新动态
  - 内容来源：`src/config/news.ts` 中的 `news` 数组
  - 使用场景：不需要外部博客，只展示站内动态
  - 链接指向：首页的 Latest News 区块 (`#news`)

- **`rss`**: 仅转发外部 RSS 订阅（默认）
  - 内容来源：`NEXT_PUBLIC_RSS_FEED_URL` 指定的外部 RSS feed
  - 使用场景：已有独立博客平台（如 Medium、Hashnode 等）
  - 链接指向：原博客文章地址
  - 注意：需配置 `NEXT_PUBLIC_RSS_FEED_URL`，否则返回空 feed

- **`both`**: 合并两种内容
  - 内容来源：最新动态 + 外部 RSS 订阅
  - 排序规则：按发布时间倒序
  - 使用场景：既有外部博客，又想展示站内动态
  - 同时获取：使用 `Promise.all` 并行获取两个来源

**示例配置**

```bash
# 只显示站内动态
NEXT_PUBLIC_FEED_MODE=news

# 只转发外部博客（默认）
NEXT_PUBLIC_FEED_MODE=rss
NEXT_PUBLIC_RSS_FEED_URL=https://your-blog.com/rss.xml

# 合并显示
NEXT_PUBLIC_FEED_MODE=both
NEXT_PUBLIC_RSS_FEED_URL=https://your-blog.com/rss.xml
```

#### 分析工具

| 变量名 | 类型 | 说明 | 默认值 |
|--------|------|------|--------|
| `NEXT_PUBLIC_GA_TRACKING_ID` | string | Google Analytics 跟踪 ID | `""` |
| `NEXT_PUBLIC_ENABLE_ANALYTICS` | boolean | 是否启用分析 | `false` |

#### 功能开关

| 变量名 | 类型 | 说明 | 默认值 |
|--------|------|------|--------|
| `NEXT_PUBLIC_ENABLE_BLOG` | boolean | 是否启用博客功能 | `false` |
| `NEXT_PUBLIC_ENABLE_ANALYTICS` | boolean | 是否启用分析功能 | `false` |
| `NEXT_PUBLIC_ENABLE_ANIME` | boolean | 是否启用追番功能 | `false` |

#### API Token (服务器端)

| 变量名 | 类型 | 说明 | 默认值 |
|--------|------|------|--------|
| `BANGUMI_TOKEN` | string | Bangumi API Token | `""` |
| `BANGUMI_USERNAME` | string | Bangumi 用户名 | `""` |

#### Bangumi 配置

| 变量名 | 类型 | 说明 | 默认值 |
|--------|------|------|--------|
| `NEXT_PUBLIC_BANGUMI_MAX_TAGS` | number | 番剧卡片显示的最大标签数量 | `3` |

### .env.local 示例

在项目根目录创建 `.env.local` 文件（或复制 `.env.example` 文件）：

```bash
# ==========================================
# 站点基础配置 / Site Configuration
# ==========================================

# 网站完整 URL（用于 SEO、sitemap 等）
NEXT_PUBLIC_SITE_URL=https://yourdomain.com

# 网站名称
NEXT_PUBLIC_SITE_NAME=Your Name

# 网站描述（用于 SEO）
NEXT_PUBLIC_SITE_DESCRIPTION=Full Stack Developer & Technology Enthusiast

# 最后更新时间（显示在 Footer）
NEXT_PUBLIC_LAST_UPDATED=Dec 2025

# 头像 URL（支持 CDN 链接或本地路径，如 /avatar.png）
NEXT_PUBLIC_AVATAR_URL=https://cdn.example.com/avatar.png

# Favicon URL（支持 CDN 链接或本地路径，如 /favicon.ico）
NEXT_PUBLIC_FAVICON_URL=/favicon.ico

# ==========================================
# 个人信息 / Personal Information
# ==========================================

# 显示名称（用户名/昵称）
NEXT_PUBLIC_DISPLAY_NAME=yourname

# 副标题（通常是真实姓名）
NEXT_PUBLIC_SUBTITLE=Your Full Name

# 简短描述（一句话介绍）
NEXT_PUBLIC_DESCRIPTION=Developer, Designer, Creator

# 所在地
NEXT_PUBLIC_LOCATION=Beijing, China

# 地理位置 Google Maps 链接
NEXT_PUBLIC_LOCATION_LINK=https://www.google.com/maps/place/Beijing

# ==========================================
# 博客配置 / Blog Configuration
# ==========================================

# 外部博客 RSS 订阅地址（用于聚合外部博客内容）
NEXT_PUBLIC_RSS_FEED_URL=https://your-blog.com/rss.xml

# Feed 模式（news: 仅显示最新动态 | rss: 仅显示 RSS | both: 两者合并）
NEXT_PUBLIC_FEED_MODE=rss

# 博客描述（英文）
NEXT_PUBLIC_BLOG_DESCRIPTION=Thoughts on technology, life, and everything in between.

# 博客描述（中文）
NEXT_PUBLIC_BLOG_DESCRIPTION_ZH=关于技术、生活和一切的思考。

# 博客角色标识（用于个性化显示）
NEXT_PUBLIC_BLOG_CHARACTER=I

# ==========================================
# 功能开关 / Feature Flags
# ==========================================

# 是否启用博客功能
NEXT_PUBLIC_ENABLE_BLOG=true

# 是否启用 Google Analytics
NEXT_PUBLIC_ENABLE_ANALYTICS=false

# 是否启用追番功能（需配置 Bangumi API）
NEXT_PUBLIC_ENABLE_ANIME=false

# ==========================================
# 分析工具 / Analytics (可选)
# ==========================================

# Google Analytics 跟踪 ID（格式：G-XXXXXXXXXX）
# 需要同时设置 NEXT_PUBLIC_ENABLE_ANALYTICS=true
# NEXT_PUBLIC_GA_TRACKING_ID=G-XXXXXXXXXX

# ==========================================
# 第三方集成 / Third-Party Integrations
# ==========================================

# Bangumi 用户名（用于追番功能）
# 需要同时设置 NEXT_PUBLIC_ENABLE_ANIME=true
# BANGUMI_USERNAME=your_bangumi_username

# Bangumi Access Token
# 获取方式：https://bgm.tv/dev/app
# BANGUMI_TOKEN=your_bangumi_access_token

# 番剧卡片显示的最大标签数量（默认为 3）
# NEXT_PUBLIC_BANGUMI_MAX_TAGS=3
```

### 注意事项

1. **公开变量**: 以 `NEXT_PUBLIC_` 开头的变量会暴露给浏览器
2. **私密变量**: 不带前缀的变量（如 `BANGUMI_TOKEN`）仅在服务器端可访问
3. **类型安全**: 通过 `env.ts` 导入使用，确保类型安全
4. **Git 忽略**: `.env.local` 已在 `.gitignore` 中，不会被提交

### 使用方法

```typescript
// ✅ 推荐：通过 env.ts 导入
import { env } from "@/lib/env";

console.log(env.siteUrl);
console.log(env.enableBlog);

// ❌ 不推荐：直接访问 process.env
console.log(process.env.NEXT_PUBLIC_SITE_URL);
```

---

## 多语言配置

**文件路径**: 
- `src/lib/i18n/locales/zh.json` (中文)
- `src/lib/i18n/locales/en.json` (英文)

### 配置结构

```json
{
  "nav": {
    "about": "关于",
    "projects": "项目",
    "education": "教育",
    "skills": "技能"
  },
  "footer": {
    "sections": {
      "quickNavigation": "快速导航",
      "connect": "联系",
      "resources": "资源",
      "discover": "发现"
    },
    "resources": {
      "blog": "博客"
    },
    "legal": {
      "allRightsReserved": "版权所有",
      "privacyPolicy": "隐私政策",
      "termsDisclaimer": "条款与免责声明"
    },
    "bottom": {
      "lastUpdated": "最后更新",
      "madeWith": "追随",
      "modifiedFrom": "修改自"
    }
  },
  "blog": {
    "by": "作者：",
    "readMore": "阅读更多",
    "title": "博客",
    "noPosts": "暂无博客文章。"
  },
  "page": {
    "about": "关于我",
    "moreInfo": "更多信息请查看英文页面"
  },
  "home": {
    "sections": {
      "about": "关于我",
      "skills": "技能",
      "education": "教育经历"
    },
    "projects": {
      "badge": "精选项目",
      "title": "查看我的最新作品"
    }
  }
}
```

### 添加新的翻译键

1. 在两个语言文件中添加相同的键结构
2. 确保键名完全一致
3. 提供对应的翻译文本

**示例**：添加一个新的页面标题

```json
// zh.json
{
  "services": {
    "title": "我的服务",
    "subtitle": "我能为您提供的专业服务"
  }
}

// en.json
{
  "services": {
    "title": "My Services",
    "subtitle": "Professional services I can offer"
  }
}
```

### 在组件中使用翻译

```typescript
import { getDictionary } from "@/lib/i18n";

export default async function Page({ 
  params 
}: { 
  params: Promise<{ lang: string }> 
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  
  return (
    <div>
      <h1>{dict.services.title}</h1>
      <p>{dict.services.subtitle}</p>
    </div>
  );
}
```

---

## Next.js 图片配置 (next.config.ts)

**文件路径**: `next.config.ts`

### 远程图片域名配置

Next.js 为了安全性，默认只允许加载本地图片。如果需要使用外部图片（如 CDN、博客平台图片等），需要在 `next.config.ts` 中配置 `remotePatterns`。

### 配置结构

```typescript
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",           // 协议：https 或 http
        hostname: "cdn.example.com", // 域名
        pathname: "/images/**",      // 路径模式（可选）
      },
    ],
  },
};
```

### 字段说明

| 字段 | 类型 | 必填 | 说明 | 示例 |
|------|------|------|------|------|
| `protocol` | string | ✅ | 协议类型 | `"https"` 或 `"http"` |
| `hostname` | string | ✅ | 域名，支持通配符 `*` | `"cdn.example.com"` 或 `"*.example.com"` |
| `pathname` | string | ❌ | 路径匹配模式，支持 `**` 通配符 | `"/images/**"` |
| `port` | string | ❌ | 端口号 | `"3000"` |

### 使用示例

#### 1. 配置单个域名

```typescript
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.imoscarz.me",
      },
    ],
  },
};
```

#### 2. 配置多个域名

```typescript
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // 自己的 CDN
      {
        protocol: "https",
        hostname: "cdn.imoscarz.me",
      },
      // Bangumi 图片
      {
        protocol: "https",
        hostname: "lain.bgm.tv",
        pathname: "/pic/**",
      },
      // Medium 博客图片
      {
        protocol: "https",
        hostname: "*.medium.com",
      },
      // GitHub 图片
      {
        protocol: "https",
        hostname: "*.githubusercontent.com",
      },
    ],
  },
};
```

#### 3. 使用通配符

```typescript
// 允许所有 example.com 的子域名
{
  protocol: "https",
  hostname: "*.example.com",
}

// 只允许特定路径
{
  protocol: "https",
  hostname: "cdn.example.com",
  pathname: "/public/**",
}
```

### 关闭外部图片限制（不推荐）

⚠️ **安全警告**: 关闭图片域名限制会带来安全风险，仅在开发环境或完全信任的内容源时使用。

#### 方法 1: 使用 unoptimized（推荐用于开发）

```typescript
const nextConfig: NextConfig = {
  images: {
    unoptimized: true, // 禁用图片优化，允许所有外部图片
  },
};
```

**注意**: 这会禁用 Next.js 的图片优化功能，所有图片将直接加载，可能影响性能。

#### 方法 2: 配置通配符域名（不推荐）

```typescript
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // ⚠️ 允许所有 HTTPS 域名
      },
    ],
  },
};
```

**注意**: 这种方式在生产环境中存在安全风险。

### 常见场景配置

#### 博客平台图片

```typescript
{
  protocol: "https",
  hostname: "*.medium.com",
},
{
  protocol: "https",
  hostname: "cdn.hashnode.com",
},
{
  protocol: "https",
  hostname: "*.wp.com",
},
```

#### CDN 服务

```typescript
{
  protocol: "https",
  hostname: "cdn.jsdelivr.net",
},
{
  protocol: "https",
  hostname: "unpkg.com",
},
{
  protocol: "https",
  hostname: "*.cloudfront.net",
},
```

#### 社交媒体

```typescript
{
  protocol: "https",
  hostname: "pbs.twimg.com", // Twitter 图片
},
{
  protocol: "https",
  hostname: "*.fbcdn.net", // Facebook 图片
},
```

### 最佳实践

1. **最小权限原则**: 只添加实际需要的域名
2. **使用 HTTPS**: 始终使用 `protocol: "https"`
3. **路径限制**: 尽可能添加 `pathname` 限制
4. **定期审查**: 定期检查并移除不再使用的域名配置
5. **避免通配符**: 尽量避免使用 `**` 和 `*` 通配符

### 调试技巧

如果图片无法加载，检查以下几点：

1. **浏览器控制台**: 查看是否有图片加载错误
2. **Next.js 错误**: 查看终端是否有 `hostname` 相关的错误提示
3. **协议匹配**: 确保配置的协议（http/https）与实际 URL 一致
4. **域名格式**: 确保域名没有包含协议前缀（如 `https://`）

---

## 配置文件更新检查清单

每次修改配置后，请检查：

- [ ] 配置文件语法正确，使用 `as const`
- [ ] TypeScript 类型无错误
- [ ] 如果涉及多语言，两个语言文件都已更新
- [ ] 图片资源已放置在正确的目录
- [ ] **如果使用外部图片 URL，已在 `next.config.ts` 中配置 `remotePatterns`**
- [ ] 外部链接 URL 正确且可访问
- [ ] 运行 `pnpm lint` 无错误
- [ ] 运行 `pnpm build` 构建成功
- [ ] 本地预览效果符合预期

---

## 常见问题

### Q: 如何添加新的社交平台？

1. 在 `src/components/icons.tsx` 中添加图标（如果需要）
2. 在 `src/config/contact.ts` 的 `contact.social` 中添加配置
3. 确保设置正确的 `navbar`、`content`、`footer` 标志

### Q: 如何更改项目显示顺序？

直接调整 `src/config/projects.tsx` 中数组项的顺序即可。

### Q: 如何禁用某个功能模块？

- **博客**: 设置环境变量 `NEXT_PUBLIC_ENABLE_BLOG=false`
- **分析**: 设置环境变量 `NEXT_PUBLIC_ENABLE_ANALYTICS=false`
- **导航项**: 在 `src/config/contact.ts` 的 `navbar` 数组中删除对应项

### Q: 配置更改后需要重启服务吗？

- **代码配置文件** (.ts, .tsx): 需要重启开发服务器
- **环境变量** (.env.local): 需要重启开发服务器
- **多语言文件** (.json): 通常需要刷新页面

### Q: 如何验证配置是否正确？

```bash
# 检查语法错误
pnpm lint

# 检查类型错误
pnpm build

# 本地预览
pnpm dev
```

### Q: 如何添加外部图片（CDN 图片）？

如果你的头像、项目封面等使用外部 CDN，需要在 `next.config.ts` 中配置允许的图片域名。

详见 [Next.js 图片配置](#nextjs-图片配置-nextconfigts) 章节。

### Q: 图片加载失败怎么办？

1. 检查图片 URL 是否正确
2. 如果使用外部图片，确保已在 `next.config.ts` 的 `remotePatterns` 中配置域名
3. 查看浏览器控制台和终端的错误信息
4. 确认图片域名的协议（http/https）与配置一致

---

## 相关文档

- [国际化指南](./i18n-guide.md)
- [Footer 配置指南](./footer-config-guide.md)
- [项目 README](../README.md)

---

**最后更新**: 2025年12月23日
