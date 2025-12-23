# GitHub Copilot 指令

## 项目概述

这是一个基于 Next.js 15 App Router 的个人主页和博客系统，使用 TypeScript、Tailwind CSS 和现代化的 React 生态系统。项目支持中英文双语，采用服务器组件和客户端组件混合架构。博客内容通过 RSS feed 从外部博客平台聚合，而非本地 Markdown 文件编译。项目还集成了 Bangumi API 用于展示番剧追踪列表。

## 技术栈和工具

- **框架**: Next.js 15 (App Router)
- **语言**: TypeScript (严格模式)
- **样式**: Tailwind CSS 4, CSS 模块
- **UI 库**: Radix UI, Lucide Icons
- **动画**: Motion (Framer Motion 的轻量级替代)
- **内容处理**: unified, remark, rehype (用于 RSS 内容渲染)
- **RSS 解析**: rss-parser
- **番剧 API**: Bangumi API v0
- **包管理器**: pnpm
- **代码规范**: ESLint, Prettier

## 番剧列表功能

### 功能特性

1. **数据获取**: 通过 Bangumi API v0 获取用户的番剧收藏列表
2. **分类筛选**: 支持按状态筛选（想看/在看/看过/搁置/抛弃/全部）
3. **标签筛选**: 可搜索的多选标签过滤器，支持 AND 逻辑
4. **搜索功能**: 支持按中文/日文名称搜索番剧
5. **瀑布流布局**: 使用 CSS columns 实现响应式 masonry 布局
6. **悬浮控制栏**: 移动端顶部固定，桌面端底部固定
7. **响应式设计**: 移动端紧凑图标模式，桌面端完整显示
8. **动画效果**: 卡片淡入和悬停动画

### 关键组件

- `src/app/anime/page.tsx` - 服务器组件，获取番剧数据
- `src/components/portfolio/anime-list-client.tsx` - 客户端组件，处理筛选和布局
- `src/components/portfolio/anime-category-select.tsx` - 分类选择器
- `src/components/portfolio/anime-tag-select.tsx` - 标签多选器
- `src/components/portfolio/bangumi-card.tsx` - 番剧卡片
- `src/lib/bangumi.ts` - Bangumi API 类型和工具函数

### 环境变量

```env
NEXT_PUBLIC_BANGUMI_USERNAME=your_username    # Bangumi 用户名
NEXT_PUBLIC_BANGUMI_TOKEN=your_token          # Bangumi API Token
NEXT_PUBLIC_BANGUMI_MAX_TAGS=3                # 显示的标签数量（默认3）
```

### 布局实现

使用 CSS columns 实现瀑布流：

```tsx
<div className="columns-2 sm:columns-3 md:columns-4 lg:columns-5 gap-4">
  {items.map(item => (
    <div className="inline-block w-full mb-4">
      <Card />
    </div>
  ))}
</div>
```

### 响应式控制

移动端使用紧凑模式（仅图标）：

```tsx
// 移动端: w-10 h-10 p-0
// 桌面端: sm:w-auto sm:px-3
<AnimeCategorySelect compact={true} />
```

## 代码风格和最佳实践

### TypeScript 规范

1. **严格类型**: 始终使用明确的类型声明，避免使用 `any`
2. **类型导入**: 使用 `import type` 导入类型
3. **接口 vs 类型**: 优先使用 `type` 而非 `interface`
4. **常量类型**: 使用 `as const` 确保类型推断的准确性

```typescript
// ✅ 推荐
export type SiteConfig = {
  url: string;
  lastUpdated: string;
} as const;

// ❌ 避免
export const siteConfig: any = { ... };
```

### React 组件规范

1. **服务器组件优先**: 默认使用服务器组件，只在需要交互时使用 `"use client"`
2. **组件命名**: 使用 PascalCase，文件名使用 kebab-case
3. **Props 类型**: 始终定义 Props 类型

```typescript
// ✅ 推荐 - 服务器组件
type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  return <div>{slug}</div>;
}

// ✅ 推荐 - 客户端组件
"use client";

type ButtonProps = {
  onClick: () => void;
  children: React.ReactNode;
};

export function Button({ onClick, children }: ButtonProps) {
  return <button onClick={onClick}>{children}</button>;
}
```

### 样式规范

1. **Tailwind 优先**: 优先使用 Tailwind CSS 工具类
2. **响应式设计**: 使用 Tailwind 的响应式前缀 (sm:, md:, lg:)
3. **暗色模式**: 使用 `dark:` 前缀支持暗色模式
4. **CSS 变量**: 复杂主题使用 CSS 变量

```typescript
// ✅ 推荐
<div className="flex flex-col gap-4 md:flex-row md:gap-6 dark:bg-gray-900">
  {children}
</div>

// ✅ 使用 cn 工具函数合并类名
import { cn } from "@/lib/utils";

<div className={cn("base-class", conditional && "conditional-class")}>
  {children}
</div>
```

## 文件组织规范

### 目录结构

```
src/
├── app/              # Next.js App Router 页面
│   ├── layout.tsx   # 根布局（包含元数据）
│   ├── page.tsx     # 页面组件
│   └── blog/        # 博客相关页面
├── components/       # React 组件
│   ├── blocks/      # 页面级大型组件
│   ├── ui/          # 可复用 UI 组件
│   └── ...          # 功能分类的组件
├── config/          # 配置文件（纯数据）
├── lib/             # 工具函数和库
│   ├── i18n/        # 国际化相关
│   └── utils.tsx    # 通用工具函数
└── data.tsx         # 数据文件
```

### 文件命名规范

- 组件文件: `kebab-case.tsx` (例: `blog-card.tsx`)
- 配置文件: `kebab-case.ts` (例: `site.ts`)
- 工具文件: `kebab-case.ts` (例: `utils.ts`)
- 类型文件: `kebab-case.d.ts`

## 国际化 (i18n) 规范

### 添加多语言支持

1. **翻译文件**: 在 `src/lib/i18n/locales/` 下编辑 `zh.json` 和 `en.json`
2. **使用翻译**: 通过 `getDictionary` 函数获取翻译

```typescript
import { getDictionary } from "@/lib/i18n";

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  
  return <h1>{dict.home.title}</h1>;
}
```

3. **语言切换机制**: 
   - 默认语言 (中文): `/` → `app/page.tsx`
   - 英文: `/?lang=en` （通过 URL 查询参数）
   - 使用 `useLocale()` hook 获取当前语言
   - 使用 `LanguageToggle` 组件切换语言

## 组件开发指南

### UI 组件

使用 Radix UI 作为基础，添加 Tailwind 样式：

```typescript
// components/ui/button.tsx
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        outline: "border border-input hover:bg-accent",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3",
        lg: "h-11 px-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
```

### 动画组件

使用 Motion 库，注意性能优化：

```typescript
"use client";

import { motion } from "motion/react";

export function AnimatedCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      内容
    </motion.div>
  );
}
```

## RSS 博客内容处理

### RSS Feed 解析

博客内容通过 RSS feed 从外部博客平台（如 Medium、Hashnode 等）聚合。使用 rss-parser 解析 RSS 内容：

```typescript
import Parser from "rss-parser";

const parser = new Parser();
const feed = await parser.parseURL(rssFeedUrl);
const posts = feed.items;
```

### 内容渲染

使用 unified 生态系统渲染 RSS 内容中的 HTML/Markdown：

```typescript
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import remarkRehype from "remark-rehype";
import rehypeKatex from "rehype-katex";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeStringify from "rehype-stringify";

const processor = unified()
  .use(remarkParse)
  .use(remarkGfm)
  .use(remarkMath)
  .use(remarkRehype)
  .use(rehypeKatex)
  .use(rehypePrettyCode, {
    theme: "github-dark",
  })
  .use(rehypeStringify);
```

### 博客数据结构

RSS feed 解析后的博客文章数据结构：

```typescript
type BlogPost = {
  title: string;
  link: string;
  pubDate: string;
  content: string;
  contentSnippet: string;
  guid: string;
  categories?: string[];
  isoDate?: string;
};
```

## 性能优化指南

### 图片优化

```typescript
import Image from "next/image";

// ✅ 使用 Next.js Image 组件
<Image
  src="/avatar.png"
  alt="Avatar"
  width={200}
  height={200}
  priority // 首屏图片使用 priority
/>

// ✅ 远程图片需要在 next.config.ts 中配置
// 参见 next.config.ts 的 remotePatterns
```

### 代码分割

```typescript
// ✅ 动态导入减少初始加载
import dynamic from "next/dynamic";

const HeavyComponent = dynamic(() => import("./HeavyComponent"), {
  loading: () => <p>Loading...</p>,
});
```

### 服务器组件 vs 客户端组件

- **服务器组件**: 数据获取、静态内容、SEO 关键内容
- **客户端组件**: 交互功能、状态管理、浏览器 API

```typescript
// ✅ 服务器组件获取数据
export default async function BlogPage() {
  const posts = await getPosts(); // 服务器端数据获取
  return <PostList posts={posts} />; // 传递给客户端组件
}

// ✅ 客户端组件处理交互
"use client";
export function PostList({ posts }: { posts: Post[] }) {
  const [filter, setFilter] = useState("");
  // 交互逻辑...
}
```

## 环境变量管理

### 命名规范

- 公开变量: `NEXT_PUBLIC_*` (可在浏览器访问)
- 私密变量: 无前缀 (仅服务器端)

### 类型安全

在 `src/lib/env.ts` 中定义和导出环境变量：

```typescript
export const env = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "default",
  apiKey: process.env.API_KEY || "", // 私密，不暴露给客户端
} as const;

// 使用时导入
import { env } from "@/lib/env";
console.log(env.siteUrl);
```

## 测试和质量保证

### ESLint 规则

- 使用 `eslint-config-next` 推荐配置
- 启用 `simple-import-sort` 自动排序导入
- 使用 `prettier` 格式化代码

### 提交前检查

```bash
# 运行 ESLint
pnpm lint

# 构建检查
pnpm build
```

## 常见模式和反模式

### ✅ 推荐模式

```typescript
// 1. 使用 async/await 在服务器组件中获取数据
export default async function Page() {
  const data = await fetchData();
  return <Component data={data} />;
}

// 2. 提取配置到单独文件
import { siteConfig } from "@/config/site";

// 3. 使用工具函数
import { cn } from "@/lib/utils";

// 4. 类型安全的环境变量
import { env } from "@/lib/env";
```

### ❌ 避免的反模式

```typescript
// 1. 避免在服务器组件中使用客户端 API
export default function Page() {
  const [state, setState] = useState(); // ❌ 错误
  useEffect(() => {}); // ❌ 错误
}

// 2. 避免硬编码配置
const url = "https://example.com"; // ❌ 应使用配置文件

// 3. 避免不必要的客户端组件
"use client"; // ❌ 如果不需要交互，应使用服务器组件
export function StaticContent() {
  return <div>Static</div>;
}
```

## SEO 和元数据

### Metadata API

```typescript
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "页面标题",
  description: "页面描述",
  openGraph: {
    title: "OG 标题",
    description: "OG 描述",
    images: ["/og-image.jpg"],
  },
};
```

### JSON-LD 结构化数据

在 `app/jsonld.tsx` 中定义结构化数据：

```typescript
import { Person, WithContext } from "schema-dts";

export function JsonLd() {
  const jsonLd: WithContext<Person> = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Your Name",
    url: "https://yourdomain.com",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
```

## 部署注意事项

### 环境变量

确保在部署平台（如 Vercel）配置所有必需的环境变量。

### 构建优化

```typescript
// next.config.ts
const nextConfig: NextConfig = {
  reactStrictMode: true, // 启用严格模式
  images: {
    remotePatterns: [/* 配置允许的图片域名 */],
  },
};
```

## 协作开发

1. **分支策略**: 使用 feature 分支开发新功能
2. **提交信息**: 使用清晰的提交信息 (例: `feat: add blog pagination`)
3. **代码审查**: 提交前运行 `pnpm lint` 和 `pnpm build`
4. **文档更新**: 重要功能添加后更新 README

---

**重要提醒**: 
- 始终优先使用服务器组件
- 注意类型安全
- 遵循 Next.js 15 的最佳实践
- 保持代码简洁和可维护性
