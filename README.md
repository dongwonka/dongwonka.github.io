# Academic Homepage

一个使用 Astro + Tailwind CSS + Markdown 内容管理构建的极简学术个人主页。网站只包含首页和论文详情页，适合展示个人信息、研究方向、联系方式和论文成果。

## 安装依赖

```bash
npm install
```

## 本地预览

```bash
npm run dev
```

启动后访问终端中显示的本地地址，通常是 `http://localhost:4321`。

## 构建项目

```bash
npm run build
```

构建产物会输出到 `dist/` 目录。

## 修改个人信息

编辑 `src/data/profile.json`：

```json
{
  "nameZh": "王栋",
  "nameEn": "Dong Wang",
  "title": "Ph.D. Student",
  "affiliation": "National University of Defense Technology",
  "avatar": "/images/avatar.jpg",
  "researchInterests": [
    "3D Vision-Language Learning",
    "Vehicle Re-Identification",
    "Multimodal Perception"
  ],
  "email": "your_email@example.com",
  "googleScholar": "https://scholar.google.com/"
}
```

## 替换头像

将新的头像图片放到：

```text
public/images/avatar.jpg
```

推荐使用正方形图片，例如 `600x600`。

## 新增一篇论文

在 `src/content/papers/` 下新增一个 Markdown 文件，例如 `new-paper.md`：

```markdown
---
slug: "new-paper"
title: "Your Paper Title"
authors:
  - "Dong Wang"
  - "Author B"
venue: "Conference or Journal Name"
venueType: "Conference"
venueLevel: "CCF-B"
acceptedDate: "2026-05-01"
fieldTags:
  - "3D Vision"
  - "Vision-Language Learning"
levelTags:
  - "CCF-B"
  - "International Conference"
image: "/images/papers/new-paper.png"
paperUrl: ""
summary: "A short summary shown on the homepage."
abstract: "The full abstract shown on the paper detail page."
---
```

首页会自动读取 `src/content/papers/` 中的论文，并按 `acceptedDate` 从新到旧排序。如果录用时间相同，则按论文标题排序。

## 添加论文图片

将论文展示图放到：

```text
public/images/papers/
```

然后在论文 Markdown frontmatter 中填写：

```yaml
image: "/images/papers/new-paper.png"
```

## GitHub Pages 部署

本项目已经包含 GitHub Pages 自动部署文件：

```text
.github/workflows/deploy.yml
```

你只需要把代码推送到 GitHub，并在仓库设置里启用 GitHub Actions 部署即可。

### 第 1 步：确认仓库类型

GitHub Pages 常见有两种部署方式。

第一种是普通项目仓库，例如：

```text
https://github.com/your-github-username/academic-homepage
```

部署后访问地址通常是：

```text
https://your-github-username.github.io/academic-homepage/
```

第二种是用户主页仓库，仓库名必须是：

```text
your-github-username.github.io
```

部署后访问地址是：

```text
https://your-github-username.github.io/
```

### 第 2 步：修改 Astro 配置

打开 `astro.config.mjs`。

如果你的仓库名是 `academic-homepage`，并且 GitHub 用户名是 `your-github-username`，保持或修改为：

```js
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://your-github-username.github.io',
  base: '/academic-homepage'
});
```

如果你的仓库名不是 `academic-homepage`，比如仓库名是 `homepage`，则改成：

```js
export default defineConfig({
  integrations: [tailwind()],
  site: 'https://your-github-username.github.io',
  base: '/homepage'
});
```

如果你使用的是用户主页仓库，也就是仓库名为 `your-github-username.github.io`，则使用：

```js
export default defineConfig({
  integrations: [tailwind()],
  site: 'https://your-github-username.github.io'
});
```

这种情况下不需要 `base`。

### 第 3 步：把项目推送到 GitHub

在项目根目录执行：

```bash
git init
git add .
git commit -m "Initial academic homepage"
git branch -M main
git remote add origin https://github.com/your-github-username/academic-homepage.git
git push -u origin main
```

请把上面的 `your-github-username` 和 `academic-homepage` 换成你自己的 GitHub 用户名和仓库名。

如果你已经创建过 Git 仓库，只需要执行：

```bash
git add .
git commit -m "Update academic homepage"
git push
```

### 第 4 步：启用 GitHub Pages

进入 GitHub 仓库页面，然后按下面操作：

1. 点击仓库顶部的 `Settings`
2. 左侧菜单点击 `Pages`
3. 找到 `Build and deployment`
4. `Source` 选择 `GitHub Actions`

选择完成后，不需要手动指定 `dist` 目录，因为 `.github/workflows/deploy.yml` 会自动构建并上传 `dist`。

### 第 5 步：查看部署进度

回到仓库页面，点击顶部的 `Actions`。

你应该能看到一个名为：

```text
Deploy to GitHub Pages
```

的工作流正在运行。

如果显示绿色对勾，说明部署成功。

如果显示红色叉号，点击进去可以查看失败原因。常见原因包括：

- `astro.config.mjs` 里的 `base` 和仓库名不一致；
- 没有在 `Settings -> Pages` 中选择 `GitHub Actions`；
- GitHub 仓库默认分支不是 `main`；
- 依赖安装失败。

### 第 6 步：访问网站

如果你部署的是普通项目仓库：

```text
https://your-github-username.github.io/academic-homepage/
```

如果你部署的是用户主页仓库：

```text
https://your-github-username.github.io/
```

### 更新网站

以后你修改论文、头像或个人信息后，只需要重新提交并推送：

```bash
git add .
git commit -m "Update homepage content"
git push
```

GitHub Actions 会自动重新部署。
