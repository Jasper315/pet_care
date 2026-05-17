# AGENTS.md

本文件是这个项目给 Codex / 代码代理的长期记忆。后续改动前先读这里，尽量沿用项目现有方向。

## 项目概览

- 项目名：`pet-care`
- 类型：Next.js 单页前端项目，使用 App Router。
- 主题：中文宠物洗护门店官网，品牌为「泡泡尾巴 Pet Spa」。
- 当前页面内容：服务介绍、洗护环境、套餐价格、流程说明、预约表单、联系方式和页脚。
- 主要用户体验：温柔、清爽、可信赖，强调透明洗护、一宠一消毒、低压力护理。

## 技术栈

- Next.js `16.2.6`
- React `19.2.3`
- TypeScript `strict`
- ESLint 9 + `eslint-config-next/core-web-vitals`
- 无 Tailwind、无组件库、无图标库；当前图标是内联 SVG。

常用命令：

```bash
npm run dev
npm run build
npm run lint
```

## 目录与文件职责

- `app/layout.tsx`：根布局与页面 metadata，当前语言为 `zh-CN`。
- `app/page.tsx`：首页主体内容和区块结构，大多数内容为服务型静态文案。
- `app/booking-form.tsx`：客户端预约表单，使用 React state/ref，提交后只展示本地 toast，不发送真实数据。
- `app/globals.css`：全站样式、设计变量、响应式布局和组件 class。
- `app/icon.svg`：站点图标。
- `next.config.ts`：Next 配置，目前只允许 `images.pexels.com` 作为远程图片来源。

## 设计与内容约定

- 保持中文为主，少量英文只作为小标题或氛围文字，例如 `Services`、`Packages`。
- 视觉调性：明亮、温柔、专业；避免变成重营销感 landing page。
- 现有主色来自 CSS 变量：
  - `--ink` 深色正文
  - `--paper` 暖白背景
  - `--aqua` / `--aqua-dark` 品牌青绿色
  - `--coral` 行动按钮和重点色
  - `--sun` 黄色强调
  - `--sage` 柔和绿色
- 圆角统一偏克制，现有卡片和按钮基本为 `8px`。
- 布局宽度主要使用 `width: min(1160px, calc(100% - 32px))`。
- 移动端断点主要在 `960px` 和 `680px`。
- 不要随意引入大面积单色主题、装饰性渐变球、过度卡片化布局或营销式空话。

## 前端实现约定

- 优先沿用现有普通 CSS class，不引入 Tailwind 或 CSS-in-JS，除非用户明确要求。
- 若新增交互组件，客户端组件文件顶部加 `"use client"`。
- 保持表单可访问性：`label` 与控件 `id` 对应，状态提示使用合适的 `aria-live`。
- 使用 `next/image` 加载远程图片；若换图片域名，需要同步更新 `next.config.ts` 的 `images.remotePatterns`。
- 现在没有后端接口。预约表单是演示行为，提交后 `preventDefault()`、重置表单并显示 toast。
- 避免把业务逻辑塞进 `page.tsx`；交互逻辑优先拆到独立客户端组件。

## 代码风格

- TypeScript 使用严格模式，保持类型清楚。
- 字符串和 JSX 属性保持双引号风格，跟现有文件一致。
- 组件导出风格：页面默认导出，普通组件使用命名导出。
- CSS 中优先复用现有变量和 class 模式；新增样式注意移动端文本不溢出、不重叠。
- 注释只在复杂逻辑处添加，避免解释显而易见的代码。

## 验证建议

改动后按影响范围选择验证：

- 纯文案或样式小改：至少运行 `npm run lint`。
- 改动 Next 配置、组件结构、表单逻辑或图片加载：运行 `npm run lint` 和 `npm run build`。
- 视觉或响应式改动：启动 `npm run dev`，检查桌面和移动宽度。

## 注意事项

- 不要误把演示预约表单说成已经接入真实预约系统。
- 不要删除 `next.config.ts` 中 Pexels 图片域名，除非同时替换所有远程图片来源。
- 若需要新增真实提交能力，先明确目标后端、数据字段、隐私提示和失败状态。
- 仓库当前没有 README，也没有测试框架；如果新增测试或文档，保持范围克制。
