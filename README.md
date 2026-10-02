# 个人作品集

一个使用 Vite 和原生 JavaScript 构建的中文个人主页。当前版本不连接数据库、不收集访客资料，也不包含登录、支付或独立软件功能。

## 本机运行

需要 Node.js 20.19 或更新版本。此工作区已检测到 Node.js、npm、Git 和 VS Code。

```powershell
npm install
npm run dev
```

打开终端显示的本地地址即可预览。生成部署文件：

```powershell
npm run build
```

部署文件会生成在 `dist/`。

## 免费发布到 Cloudflare Pages

1. 在 GitHub 创建名为 `personal-digital-platform` 的**公开**空仓库。公开仓库里的源码和提交记录对所有人可见。
2. 在 GitHub 的 Email 设置中启用隐私邮箱，并复制 GitHub 提供的 `noreply` 地址。这样提交记录不会显示你的私人邮箱。
3. 在本项目目录打开 PowerShell，替换昵称、noreply 邮箱和 GitHub 用户名后运行：

   ```powershell
   git init -b main
   git config user.name "你的公开昵称"
   git config user.email "你的 GitHub noreply 地址"
   git add .
   git commit -m "创建个人作品集"
   git remote add origin https://github.com/你的用户名/personal-digital-platform.git
   git push -u origin main
   ```

4. 创建或登录 Cloudflare 账号，打开 Workers & Pages，选择 Pages 并连接 GitHub 仓库。
5. 构建设置填写：构建命令 `npm run build`，输出目录 `dist`，生产分支为 `main`。
6. 部署成功后使用 Cloudflare 提供的 `https://<项目名称>.pages.dev` 地址。它是平台子域名，不是自有注册域名。
7. 后续推送到 `main` 的提交会自动重新构建和发布。

登录、授权和创建远程项目必须在你自己的 GitHub 与 Cloudflare 账号中完成；不要把密码、令牌或 API 密钥放进源码仓库。

## 发布前替换

- 把页面中的“你的昵称”和“关注方向”替换成你愿意公开的内容。
- 联系方式当前是说明文字，不会暴露邮箱；需要时再添加你愿意公开的邮箱或社交账号。
- 作品卡片目前只说明主页正在搭建，不代表已有其他作品。

## 文件结构

```text
index.html       页面内容与结构
src/main.js      菜单交互与页脚年份
src/style.css    页面样式与手机适配
public/          图标等静态资源
```
