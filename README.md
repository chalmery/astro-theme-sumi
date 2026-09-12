# astro-theme-sumi

一个简洁的 Astro 个人博客主题，提供：

- 按年份倒序排列的文章归档
- 无分页的分类筛选
- Markdown 文章、Shiki 代码高亮与 Mermaid 图表
- 深浅色模式与回到顶部
- 响应式桌面及移动端布局

```bash
npm install
npm run dev
```

文章位于 `src/content/posts/`，个人信息和社交链接位于 `src/pages/index.astro`。

## GitHub Pages

推送到 `main` 后，GitHub Actions 会自动构建并部署到：

`https://chalmery.github.io/astro-theme-sumi/`

首次使用时，需要在仓库的 **Settings → Pages → Build and deployment** 中将
**Source** 设置为 **GitHub Actions**。
