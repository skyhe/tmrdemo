# TMR Demo Frontend Skeleton

基于 **React + React Router + Vite** 的纯前端项目骨架，可直接构建为静态资源部署。

## 开发与构建

```bash
npm install
npm run dev
npm run build
npm run preview
```

## 路由映射

- `/` -> `HomePage`
- `/chat` -> `ChatPage`
- `/oracle/:id` -> `OracleDetailPage`
- `/supplier/:id` -> `SupplierDetailPage`

## 静态托管兼容（SPA fallback）

- **Netlify**: 使用 `public/_redirects` 中的 `/* /index.html 200` 将所有路由回退到入口。
- **Vercel**: 使用 `vercel.json` 的 `rewrites` 将任意路径改写到 `/index.html`。
