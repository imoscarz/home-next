# Footer 资源配置指南

## 配置文件位置

`src/config/footer.ts`

## 配置结构

```typescript
export const footerResources = [
  {
    name: "blog",                           // 资源名称（用于翻译key）
    href: "/blog",                          // 资源链接路径
    translationKey: "footer.resources.blog", // 翻译键（可选，仅供参考）
  },
] as const;
```

## 如何添加新的资源链接

### 1. 在 `src/config/footer.ts` 中添加新的资源项

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

### 2. 在多语言配置文件中添加对应的翻译

**中文 (`src/lib/i18n/locales/zh.json`)**

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

**英文 (`src/lib/i18n/locales/en.json`)**

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

## 配置说明

### 字段说明

- **name**: 资源的标识符，必须与翻译文件中的键名对应
- **href**: 资源的链接路径
  - 内部链接: 使用相对路径，如 `/blog`、`/#projects`
  - 外部链接: 使用完整 URL，如 `https://example.com`
- **translationKey**: 翻译键的完整路径（可选，仅供文档参考）

### 多语言支持

组件会自动处理多语言路径：
- 中文: `/blog`
- 英文: `/en/blog`

对于锚点链接（如 `/#projects`），路径会被正确处理。

### 外部链接

如果需要添加外部链接，建议在 `footer.tsx` 中单独处理，或扩展配置结构：

```typescript
export const footerResources = [
  {
    name: "blog",
    href: "/blog",
    external: false,
  },
  {
    name: "github",
    href: "https://github.com/username",
    external: true,
  },
] as const;
```

然后在 `footer.tsx` 中根据 `external` 字段决定是否添加 `target="_blank"` 等属性。

## 示例

### 添加"文档"资源

1. 编辑 `src/config/footer.ts`:

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
] as const;
```

2. 编辑 `src/lib/i18n/locales/zh.json`:

```json
{
  "footer": {
    "resources": {
      "blog": "博客",
      "docs": "文档"
    }
  }
}
```

3. 编辑 `src/lib/i18n/locales/en.json`:

```json
{
  "footer": {
    "resources": {
      "blog": "Blog",
      "docs": "Documentation"
    }
  }
}
```

完成！新的资源链接会自动显示在 Footer 的"资源"部分。

## 注意事项

1. **类型安全**: 使用 `as const` 确保配置的类型安全
2. **翻译一致性**: 确保 `name` 字段与翻译文件中的键名一致
3. **路径规范**: 内部链接使用相对路径，外部链接使用完整 URL
4. **测试**: 添加新资源后，测试中英文两个版本的链接是否正常工作
