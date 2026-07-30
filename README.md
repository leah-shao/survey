# Meta Report

这是一个基于 JSON 数据驱动的静态研究报告模板，适合快速生成包含 Hero、摘要、章节、卡片内容的企业/产业研究报告页面。

## 功能特点

- 基于 [js/data.js](js/data.js) 中的数据自动渲染页面
- 支持 Hero、Summary、Chapter、Card 的自动生成
- 支持多种卡片类型：文本、指标、时间线、流程、矩阵、引用
- 支持滚动进入动画和 KPI 数字动态递增效果
- 适配响应式布局，便于在桌面和移动端展示

## 项目结构

- [index.html](index.html)：页面入口
- [css/](css/)：样式文件
  - reset.css
  - variables.css
  - layout.css
  - components.css
  - sections.css
  - animation.css
  - responsive.css
- [js/data.js](js/data.js)：报告内容数据
- [js/main.js](js/main.js)：页面渲染逻辑
- [assets/](assets/)：图片与 logo 资源

## 本地预览

在项目根目录下运行：

```bash
python -m http.server 8000
```

然后在浏览器中访问：

```text
http://127.0.0.1:8000/
```

## 修改内容

如需更新报告内容，主要修改 [js/data.js](js/data.js) 即可：

- 修改 hero 信息
- 增加或调整章节与卡片
- 配置卡片图片、副标题、来源链接

## 说明

当前模板是一个轻量级静态页面方案，适合用于：

- 产业研究报告
- 周报/简报展示
- 项目汇报页
- 数据故事化展示
