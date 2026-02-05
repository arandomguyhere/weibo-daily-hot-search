# 微博每日热搜 (Weibo Daily Hot Search)

自动抓取并归档微博热搜榜数据，记录从 2020-12-29 日开始的微博热门搜索历史。

## 在线浏览

**[https://arandomguyhere.github.io/weibo-daily-hot-search](https://arandomguyhere.github.io/weibo-daily-hot-search)**

提供可视化界面，支持按日期浏览历史热搜数据。

## 功能特点

- 自动定时抓取微博热搜榜数据
- 按日期归档，支持历史数据查询
- 提供 JSON 格式原始数据和 Markdown 格式归档
- GitHub Pages 可视化浏览界面
- 时段权重算法，更准确反映话题热度

## 今日热门搜索

<!-- BEGIN -->

空空如也

数据更新于 2026-02-06 07:12:13

<!-- END -->

## 数据说明

### 目录结构

```
├── raw/                    # 原始 JSON 数据
│   └── YYYY-MM-DD.json     # 每日热搜数据
├── archives/               # Markdown 归档
│   └── YYYY-MM-DD.md       # 每日热搜归档
├── index.html              # GitHub Pages 前端页面
└── mod.ts                  # 数据抓取脚本 (Deno)
```

### 数据格式

每日 JSON 数据格式 (`raw/YYYY-MM-DD.json`):

```json
[
  {
    "url": "/weibo?q=%23话题标签%23",
    "text": "话题标签",
    "count": 1234567
  }
]
```

| 字段 | 说明 |
|------|------|
| `url` | 微博搜索链接路径 |
| `text` | 热搜话题文本 |
| `count` | 热度值（经过时段权重调整） |

### 时段权重

为更准确反映话题热度，数据采集时会根据时段应用权重：

| 时段 | 时间范围 | 权重 |
|------|----------|------|
| 深夜 | 02:00-05:00 | 0.5x |
| 早间 | 06:00-10:00 | 0.8x |
| 高峰 | 11:00-23:00 | 1.2x |
| 其他 | - | 1.0x |

## 技术栈

- **运行时**: [Deno](https://deno.land/)
- **自动化**: GitHub Actions (定时任务)
- **前端**: 原生 HTML/CSS/JavaScript
- **部署**: GitHub Pages

## 本地运行

```bash
# 安装 Deno
curl -fsSL https://deno.land/install.sh | sh

# 运行抓取脚本
deno run --unstable --allow-net --allow-read --allow-write --import-map=import_map.json mod.ts
```

## 历史归档

浏览所有历史数据: [./archives](./archives)

## 相关项目

- [V2EX 每日热门话题](https://github.com/boojack/v2ex-daily-hot-topic)
- [jackylee1/weibo-daily-hot-search](https://github.com/jackylee1/weibo-daily-hot-search) - 原始项目

## License

MIT
