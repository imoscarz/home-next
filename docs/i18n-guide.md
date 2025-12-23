# 国际化 (i18n) 使用指南

## 概述

本项目使用基于 URL query 参数的国际化方案，支持多语言切换而无需为每种语言创建单独的路由。

## 语言切换方式

- **默认语言 (中文)**: 访问 `/` 或任何不带 `lang` 参数的页面
- **英文**: 在 URL 后添加 `?lang=en`，例如 `/?lang=en` 或 `/blog?lang=en`
- **其他语言**: 添加到 `src/lib/i18n/config.ts` 中的 `locales` 数组

## 文件结构

```
src/lib/i18n/
├── config.ts           # 语言配置
├── dictionaries.ts     # 字典加载和请求处理
├── server.ts          # 服务器端 locale 获取
├── client.tsx         # 客户端 locale hook
├── index.ts           # 统一导出
└── locales/
    ├── zh.json        # 中文翻译
    └── en.json        # 英文翻译
```

## 在页面中使用

### 服务器组件

```typescript
import { getDictionary, getLocaleFromSearchParams } from "@/lib/i18n";

type PageProps = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function Page({ searchParams }: PageProps) {
  const locale = await getLocaleFromSearchParams(searchParams);
  const dict = await getDictionary(locale);
  
  return (
    <div>
      <h1>{dict.page.title}</h1>
      <p>{dict.page.description}</p>
    </div>
  );
}
```

### 客户端组件

```typescript
"use client";

import { useLocale } from "@/lib/i18n";

export function MyComponent() {
  const locale = useLocale();
  
  return (
    <div>
      当前语言: {locale}
    </div>
  );
}
```

### 动态元数据

```typescript
import { getDictionary, getLocaleFromSearchParams } from "@/lib/i18n";
import type { Metadata } from "next";

type PageProps = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata({ searchParams }: PageProps): Promise<Metadata> {
  const locale = await getLocaleFromSearchParams(searchParams);
  const dict = await getDictionary(locale);
  
  return {
    title: dict.page.title,
    description: dict.page.description,
  };
}
```

## 添加翻译

1. 在 `src/lib/i18n/locales/zh.json` 中添加中文翻译
2. 在 `src/lib/i18n/locales/en.json` 中添加对应的英文翻译

```json
// zh.json
{
  "newSection": {
    "title": "新标题",
    "description": "新描述"
  }
}

// en.json
{
  "newSection": {
    "title": "New Title",
    "description": "New Description"
  }
}
```

## 导航链接

在导航组件中，语言参数会自动保留：

```typescript
const buildHref = (path: string) => {
  const langParam = searchParams.get("lang");
  if (langParam) {
    return `${path}?lang=${langParam}`;
  }
  return path;
};
```

## 语言切换组件

使用 `LanguageToggle` 组件来切换语言：

```typescript
import { LanguageToggle } from "@/components/blocks/navbar/language-toggle";

<LanguageToggle />
```

## 支持的语言

当前支持的语言列表在 `src/lib/i18n/config.ts` 中定义：

```typescript
export const i18n = {
  defaultLocale: "zh",
  locales: ["zh", "en"],
} as const;
```

要添加新语言：
1. 在 `locales` 数组中添加语言代码
2. 创建对应的翻译文件（如 `fr.json`）
3. 在 `dictionaries.ts` 中添加导入

## 注意事项

1. **Suspense 边界**: 使用 `useSearchParams` 的客户端组件需要包裹在 `<Suspense>` 中
2. **语言参数传递**: 组件接收 locale 作为 prop 以避免不必要的客户端渲染
3. **默认语言**: 不带 `lang` 参数时默认使用中文

## 优势

- ✅ 单一代码库，无重复逻辑
- ✅ 易于扩展到更多语言
- ✅ SEO 友好（通过 hreflang 标签）
- ✅ 简单的 URL 结构
- ✅ 无需路由重写或中间件复杂逻辑
