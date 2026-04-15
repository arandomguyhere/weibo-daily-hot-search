# Weibo Signal Tracker

Narrative signal monitoring system that tracks Weibo trending search data with velocity analysis and lifecycle detection.

## Live Demo

**[https://arandomguyhere.github.io/weibo-daily-hot-search](https://arandomguyhere.github.io/weibo-daily-hot-search)**

Browse historical trending data with status badges, velocity indicators, and category filters.

## Features

- **Signal tracking**: Scrapes Weibo trending every 5 minutes, tracks up to 100 topics per day
- **Lifecycle detection**: Each topic tagged as `NEW`, `RISING`, `HOT`, `FALLING`, or `GONE`
- **Velocity analysis**: Percentage change between scrapes shows acceleration/deceleration
- **Suppression detection**: Topics that disappear from the feed are marked as `GONE`
- **English translations**: Auto-translated via Google Translate for non-Chinese readers
- **Dark mode + filters**: Filter by status category, search by Chinese or English text
- **Engagement metrics**: Top topics enriched with likes, comments, and reposts from related posts

## Today's Hot Searches

<!-- BEGIN -->

1. [央视曝光投资7亿农业基地不干农业 (CCTV exposed that an agricultural base with an investment of RMB 700 million will not engage in agriculture)](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E6%9B%9D%E5%85%89%E6%8A%95%E8%B5%847%E4%BA%BF%E5%86%9C%E4%B8%9A%E5%9F%BA%E5%9C%B0%E4%B8%8D%E5%B9%B2%E5%86%9C%E4%B8%9A%23) `1.1M 🔥` `NEW`
1. [成毅绽家首位品牌全球代言人](https://s.weibo.com/weibo?q=%23%E6%88%90%E6%AF%85%E7%BB%BD%E5%AE%B6%E9%A6%96%E4%BD%8D%E5%93%81%E7%89%8C%E5%85%A8%E7%90%83%E4%BB%A3%E8%A8%80%E4%BA%BA%23) `497.5K 🔥` `NEW`
1. [lululemon或与不孕等风险相关](https://s.weibo.com/weibo?q=%23lululemon%E6%88%96%E4%B8%8E%E4%B8%8D%E5%AD%95%E7%AD%89%E9%A3%8E%E9%99%A9%E7%9B%B8%E5%85%B3%23) `493.6K 🔥` `NEW`
1. [马竞1比2巴萨](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E7%AB%9E1%E6%AF%942%E5%B7%B4%E8%90%A8%23) `490.9K 🔥` `NEW`
1. [军事AI新视野](https://s.weibo.com/weibo?q=%23%E5%86%9B%E4%BA%8BAI%E6%96%B0%E8%A7%86%E9%87%8E%23) `478.3K 🔥` `NEW`
1. [特朗普称对伊朗战争结束](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E7%A7%B0%E5%AF%B9%E4%BC%8A%E6%9C%97%E6%88%98%E4%BA%89%E7%BB%93%E6%9D%9F%23) `454.6K 🔥` `NEW`
1. [黎以美三方会谈结束](https://s.weibo.com/weibo?q=%23%E9%BB%8E%E4%BB%A5%E7%BE%8E%E4%B8%89%E6%96%B9%E4%BC%9A%E8%B0%88%E7%BB%93%E6%9D%9F%23) `447.7K 🔥` `NEW`
1. [鸡煲公主爆火前后反差](https://s.weibo.com/weibo?q=%23%E9%B8%A1%E7%85%B2%E5%85%AC%E4%B8%BB%E7%88%86%E7%81%AB%E5%89%8D%E5%90%8E%E5%8F%8D%E5%B7%AE%23) `306.4K 🔥` `NEW`
1. [15岁女生被班主任开房猥亵服药轻生](https://s.weibo.com/weibo?q=%2315%E5%B2%81%E5%A5%B3%E7%94%9F%E8%A2%AB%E7%8F%AD%E4%B8%BB%E4%BB%BB%E5%BC%80%E6%88%BF%E7%8C%A5%E4%BA%B5%E6%9C%8D%E8%8D%AF%E8%BD%BB%E7%94%9F%23) `273.4K 🔥` `NEW`
1. [滴露要求5幼猫死亡主人举证](https://s.weibo.com/weibo?q=%23%E6%BB%B4%E9%9C%B2%E8%A6%81%E6%B1%825%E5%B9%BC%E7%8C%AB%E6%AD%BB%E4%BA%A1%E4%B8%BB%E4%BA%BA%E4%B8%BE%E8%AF%81%23) `180.1K 🔥` `NEW`
1. [文章粉丝 (Article fans)](https://s.weibo.com/weibo?q=%23%E6%96%87%E7%AB%A0%E7%B2%89%E4%B8%9D%23) `179.2K 🔥` `NEW`
1. [冰湖重生降级](https://s.weibo.com/weibo?q=%23%E5%86%B0%E6%B9%96%E9%87%8D%E7%94%9F%E9%99%8D%E7%BA%A7%23) `168.5K 🔥` `NEW`
1. [10年前的孟子义](https://s.weibo.com/weibo?q=%2310%E5%B9%B4%E5%89%8D%E7%9A%84%E5%AD%9F%E5%AD%90%E4%B9%89%23) `113.8K 🔥` `NEW`
1. [小金豆价格下跌](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E9%87%91%E8%B1%86%E4%BB%B7%E6%A0%BC%E4%B8%8B%E8%B7%8C%23) `113.8K 🔥` `NEW`
1. [女孩太想念老人睡墓碑旁不愿走](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%A9%E5%A4%AA%E6%83%B3%E5%BF%B5%E8%80%81%E4%BA%BA%E7%9D%A1%E5%A2%93%E7%A2%91%E6%97%81%E4%B8%8D%E6%84%BF%E8%B5%B0%23) `113.8K 🔥` `NEW`
1. [金银飙涨](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%93%B6%E9%A3%99%E6%B6%A8%23) `111.1K 🔥` `NEW`
1. [史上最受宠小孩的头饰能有多惊艳](https://s.weibo.com/weibo?q=%23%E5%8F%B2%E4%B8%8A%E6%9C%80%E5%8F%97%E5%AE%A0%E5%B0%8F%E5%AD%A9%E7%9A%84%E5%A4%B4%E9%A5%B0%E8%83%BD%E6%9C%89%E5%A4%9A%E6%83%8A%E8%89%B3%23) `102.9K 🔥` `NEW`
1. [女子利用7天无理由发泄心情翻车了](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%88%A9%E7%94%A87%E5%A4%A9%E6%97%A0%E7%90%86%E7%94%B1%E5%8F%91%E6%B3%84%E5%BF%83%E6%83%85%E7%BF%BB%E8%BD%A6%E4%BA%86%23) `83.2K 🔥` `NEW`
1. [两女子泼水节被多人用高压水枪喷射](https://s.weibo.com/weibo?q=%23%E4%B8%A4%E5%A5%B3%E5%AD%90%E6%B3%BC%E6%B0%B4%E8%8A%82%E8%A2%AB%E5%A4%9A%E4%BA%BA%E7%94%A8%E9%AB%98%E5%8E%8B%E6%B0%B4%E6%9E%AA%E5%96%B7%E5%B0%84%23) `80.3K 🔥` `NEW`
1. [特朗普称美伊或在巴基斯坦复谈](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E7%A7%B0%E7%BE%8E%E4%BC%8A%E6%88%96%E5%9C%A8%E5%B7%B4%E5%9F%BA%E6%96%AF%E5%9D%A6%E5%A4%8D%E8%B0%88%23) `65.3K 🔥` `NEW`
1. [赏花经济点亮乡村振兴新图景 (Flower appreciation economy lights up new picture of rural revitalization)](https://s.weibo.com/weibo?q=%23%E8%B5%8F%E8%8A%B1%E7%BB%8F%E6%B5%8E%E7%82%B9%E4%BA%AE%E4%B9%A1%E6%9D%91%E6%8C%AF%E5%85%B4%E6%96%B0%E5%9B%BE%E6%99%AF%23) `623.5K 🔥` `+55%`
1. [十日终焉外景 (The End of Ten Days exterior scene)](https://s.weibo.com/weibo?q=%23%E5%8D%81%E6%97%A5%E7%BB%88%E7%84%89%E5%A4%96%E6%99%AF%23) `474.9K 🔥` `+572%`
1. [欧冠联赛 (Champions League)](https://s.weibo.com/weibo?q=%23%E6%AC%A7%E5%86%A0%E8%81%94%E8%B5%9B%23) `465.6K 🔥` `+430%`
1. [文章面馆 周一不见](https://s.weibo.com/weibo?q=%23%E6%96%87%E7%AB%A0%E9%9D%A2%E9%A6%86%20%E5%91%A8%E4%B8%80%E4%B8%8D%E8%A7%81%23) `438.8K 🔥` `+539%`
1. [田馥甄回应拒绝浪姐邀约 (Tian Fuzhen responded by rejecting Sister Lang’s invitation)](https://s.weibo.com/weibo?q=%23%E7%94%B0%E9%A6%A5%E7%94%84%E5%9B%9E%E5%BA%94%E6%8B%92%E7%BB%9D%E6%B5%AA%E5%A7%90%E9%82%80%E7%BA%A6%23) `438.6K 🔥` `+564%`
1. [沈清曝王阳杀青宴被指着鼻子骂](https://s.weibo.com/weibo?q=%23%E6%B2%88%E6%B8%85%E6%9B%9D%E7%8E%8B%E9%98%B3%E6%9D%80%E9%9D%92%E5%AE%B4%E8%A2%AB%E6%8C%87%E7%9D%80%E9%BC%BB%E5%AD%90%E9%AA%82%23) `374.2K 🔥` `+449%`
1. [者来家族扩大](https://s.weibo.com/weibo?q=%23%E8%80%85%E6%9D%A5%E5%AE%B6%E6%97%8F%E6%89%A9%E5%A4%A7%23) `255.9K 🔥` `+368%`
1. [谁懂这次换手机的意义 (Who knows the significance of changing mobile phones this time?)](https://s.weibo.com/weibo?q=%23%E8%B0%81%E6%87%82%E8%BF%99%E6%AC%A1%E6%8D%A2%E6%89%8B%E6%9C%BA%E7%9A%84%E6%84%8F%E4%B9%89%23) `253.7K 🔥` `+317%`
1. [朱珠把女儿当女士来养](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E7%8F%A0%E6%8A%8A%E5%A5%B3%E5%84%BF%E5%BD%93%E5%A5%B3%E5%A3%AB%E6%9D%A5%E5%85%BB%23) `253.7K 🔥` `+321%`
1. [陈哲远是泰国泼水节最大赢家吧](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%93%B2%E8%BF%9C%E6%98%AF%E6%B3%B0%E5%9B%BD%E6%B3%BC%E6%B0%B4%E8%8A%82%E6%9C%80%E5%A4%A7%E8%B5%A2%E5%AE%B6%E5%90%A7%23) `253.6K 🔥` `+397%`
1. [中方回应美封锁伊海上交通 (China responds to US blockade of maritime traffic with Iran)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%96%B9%E5%9B%9E%E5%BA%94%E7%BE%8E%E5%B0%81%E9%94%81%E4%BC%8A%E6%B5%B7%E4%B8%8A%E4%BA%A4%E9%80%9A%23) `158.5K 🔥` `+135%`
1. [TOP更新站位 (TOP update site)](https://s.weibo.com/weibo?q=%23TOP%E6%9B%B4%E6%96%B0%E7%AB%99%E4%BD%8D%23) `152.6K 🔥` `+149%`
1. [阿Sa被名医诊断出轻微中风 (Ah Sa was diagnosed with a minor stroke by a famous doctor)](https://s.weibo.com/weibo?q=%23%E9%98%BFSa%E8%A2%AB%E5%90%8D%E5%8C%BB%E8%AF%8A%E6%96%AD%E5%87%BA%E8%BD%BB%E5%BE%AE%E4%B8%AD%E9%A3%8E%23) `132.8K 🔥` `+124%`
1. [女子习惯饭后吃水果血糖30险截肢](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E4%B9%A0%E6%83%AF%E9%A5%AD%E5%90%8E%E5%90%83%E6%B0%B4%E6%9E%9C%E8%A1%80%E7%B3%9630%E9%99%A9%E6%88%AA%E8%82%A2%23) `116.6K 🔥` `+93%`
1. [网传虞书欣邓为主演神仙肉](https://s.weibo.com/weibo?q=%23%E7%BD%91%E4%BC%A0%E8%99%9E%E4%B9%A6%E6%AC%A3%E9%82%93%E4%B8%BA%E4%B8%BB%E6%BC%94%E7%A5%9E%E4%BB%99%E8%82%89%23) `113.8K 🔥` `+87%`
1. [特朗普说伊朗没牌了遭北约盟友打脸](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E8%AF%B4%E4%BC%8A%E6%9C%97%E6%B2%A1%E7%89%8C%E4%BA%86%E9%81%AD%E5%8C%97%E7%BA%A6%E7%9B%9F%E5%8F%8B%E6%89%93%E8%84%B8%23) `111.0K 🔥` `+72%`
1. [班主任猥亵女学生被调到做后勤工作 (The head teacher who molested a female student was transferred to support work)](https://s.weibo.com/weibo?q=%23%E7%8F%AD%E4%B8%BB%E4%BB%BB%E7%8C%A5%E4%BA%B5%E5%A5%B3%E5%AD%A6%E7%94%9F%E8%A2%AB%E8%B0%83%E5%88%B0%E5%81%9A%E5%90%8E%E5%8B%A4%E5%B7%A5%E4%BD%9C%23) `83.0K 🔥` `+30%`
1. [尹锡悦夫妇法庭相见细节曝光](https://s.weibo.com/weibo?q=%23%E5%B0%B9%E9%94%A1%E6%82%A6%E5%A4%AB%E5%A6%87%E6%B3%95%E5%BA%AD%E7%9B%B8%E8%A7%81%E7%BB%86%E8%8A%82%E6%9B%9D%E5%85%89%23) `82.0K 🔥` `+32%`
1. [五一飞往东南亚航班大规模取消 (Massive cancellations of flights to Southeast Asia on May Day)](https://s.weibo.com/weibo?q=%23%E4%BA%94%E4%B8%80%E9%A3%9E%E5%BE%80%E4%B8%9C%E5%8D%97%E4%BA%9A%E8%88%AA%E7%8F%AD%E5%A4%A7%E8%A7%84%E6%A8%A1%E5%8F%96%E6%B6%88%23) `77.8K 🔥` `+33%`
1. [杨幂 越素越美 (Yang Mi is more beautiful as she becomes more plain.)](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%20%E8%B6%8A%E7%B4%A0%E8%B6%8A%E7%BE%8E%23) `65.2K 🔥` `+23%`
1. [以防你不知道手机发展得有多快](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E9%98%B2%E4%BD%A0%E4%B8%8D%E7%9F%A5%E9%81%93%E6%89%8B%E6%9C%BA%E5%8F%91%E5%B1%95%E5%BE%97%E6%9C%89%E5%A4%9A%E5%BF%AB%23) `64.5K 🔥` `+92%`
1. [蜜语纪热度 (Popularity of Honey Words Ji)](https://s.weibo.com/weibo?q=%23%E8%9C%9C%E8%AF%AD%E7%BA%AA%E7%83%AD%E5%BA%A6%23) `64.1K 🔥` `+92%`
1. [鞠婧祎狐妖衣闻录第八回](https://s.weibo.com/weibo?q=%23%E9%9E%A0%E5%A9%A7%E7%A5%8E%E7%8B%90%E5%A6%96%E8%A1%A3%E9%97%BB%E5%BD%95%E7%AC%AC%E5%85%AB%E5%9B%9E%23) `63.3K 🔥` `+160%`
1. [糖尿病与牙周炎双向影响](https://s.weibo.com/weibo?q=%23%E7%B3%96%E5%B0%BF%E7%97%85%E4%B8%8E%E7%89%99%E5%91%A8%E7%82%8E%E5%8F%8C%E5%90%91%E5%BD%B1%E5%93%8D%23) `63.2K 🔥` `+86%`
1. [4人合伙买彩票中500万后起纠纷 (A dispute broke out after 4 people won 5 million in lottery tickets together.)](https://s.weibo.com/weibo?q=%234%E4%BA%BA%E5%90%88%E4%BC%99%E4%B9%B0%E5%BD%A9%E7%A5%A8%E4%B8%AD500%E4%B8%87%E5%90%8E%E8%B5%B7%E7%BA%A0%E7%BA%B7%23) `789.1K 🔥`
1. [B太回应18万帮扶被骗 (Mrs. B responded to being cheated out of 180,000 yuan in aid)](https://s.weibo.com/weibo?q=%23B%E5%A4%AA%E5%9B%9E%E5%BA%9418%E4%B8%87%E5%B8%AE%E6%89%B6%E8%A2%AB%E9%AA%97%23) `422.5K 🔥`
1. [上万美军正封锁进出伊朗港口船只](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E4%B8%87%E7%BE%8E%E5%86%9B%E6%AD%A3%E5%B0%81%E9%94%81%E8%BF%9B%E5%87%BA%E4%BC%8A%E6%9C%97%E6%B8%AF%E5%8F%A3%E8%88%B9%E5%8F%AA%23) `397.5K 🔥`
1. [伊朗看透了 (Iran has seen through)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E7%9C%8B%E9%80%8F%E4%BA%86%23) `379.2K 🔥`
1. [网友给拼豆店提建议被老板一一反驳](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%8F%8B%E7%BB%99%E6%8B%BC%E8%B1%86%E5%BA%97%E6%8F%90%E5%BB%BA%E8%AE%AE%E8%A2%AB%E8%80%81%E6%9D%BF%E4%B8%80%E4%B8%80%E5%8F%8D%E9%A9%B3%23) `78.7K 🔥`
1. [胖东来多宝鱼被指吃出溯源标签 (Fat Donglai Turbot was accused of eating traceability labels)](https://s.weibo.com/weibo?q=%23%E8%83%96%E4%B8%9C%E6%9D%A5%E5%A4%9A%E5%AE%9D%E9%B1%BC%E8%A2%AB%E6%8C%87%E5%90%83%E5%87%BA%E6%BA%AF%E6%BA%90%E6%A0%87%E7%AD%BE%23) `60.9K 🔥`
1. [谢娜要每天发一首发行过的歌 (Xie Na will release a released song every day)](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%A8%9C%E8%A6%81%E6%AF%8F%E5%A4%A9%E5%8F%91%E4%B8%80%E9%A6%96%E5%8F%91%E8%A1%8C%E8%BF%87%E7%9A%84%E6%AD%8C%23) `85.3K 🔥` `-22%`

Updated at 2026-04-15 08:00:48

<!-- END -->

## Data Reference

### Directory Structure

```
├── raw/                    # Raw JSON data
│   └── YYYY-MM-DD.json     # Daily hot search data
├── index.html              # GitHub Pages frontend
├── mod.ts                  # Scraping script (Deno)
├── bridge.py               # Data bridge to WeiboInsight/MongoDB
└── WeiboInsight/           # Submodule: Playwright-based deep analysis
```

### Data Format

Daily JSON format (`raw/YYYY-MM-DD.json`):

```json
[
  {
    "url": "/weibo?q=%23Topic%23",
    "text": "Topic",
    "textEn": "Topic in English",
    "count": 1234567,
    "firstSeen": "2026-02-07T08:15:00.000Z",
    "peakCount": 1500000,
    "prevCount": 900000,
    "status": "rising",
    "velocity": 37,
    "engagement": { "posts": 15, "likes": 45200, "comments": 3100, "reposts": 8900 }
  }
]
```

| Field | Description |
|-------|-------------|
| `url` | Weibo search link path |
| `text` | Trending topic text (Chinese) |
| `textEn` | English translation (optional) |
| `count` | Heat value from Weibo API |
| `firstSeen` | ISO timestamp when topic first appeared today |
| `peakCount` | Highest count recorded for this topic today |
| `prevCount` | Count from previous scrape cycle |
| `status` | Lifecycle stage: `new`, `rising`, `hot`, `falling`, `gone` |
| `velocity` | Percentage change from previous scrape |
| `engagement` | Post engagement metrics (top 10 topics): posts, likes, comments, reposts |

## Tech Stack

- **Runtime**: [Deno](https://deno.land/)
- **Automation**: GitHub Actions (cron)
- **Frontend**: Vanilla HTML/CSS/JavaScript
- **Hosting**: GitHub Pages

## Local Development

```bash
# Install Deno
curl -fsSL https://deno.land/install.sh | sh

# Run the scraper
deno run --allow-net --allow-read --allow-write --import-map=import_map.json mod.ts
```

## WeiboInsight Integration

This project includes [WeiboInsight](https://github.com/arandomguyhere/WeiboInsight) as a submodule for deep NLP analysis of trending topics.

**What each project does:**
- **weibo-daily-hot-search** — Lightweight Deno scraper that tracks trending topics every 5 min via JSON APIs, with lifecycle/velocity analysis
- **WeiboInsight** — Python/Playwright-based scraper with Scrapy pipelines, MongoDB storage, Jieba segmentation, LDA topic modeling, and K-Means clustering

**How they connect:**
1. This scraper collects trending topics + engagement data every 5 minutes
2. `bridge.py` imports the JSON data into MongoDB with text segmentation
3. WeiboInsight's `analyze_weibo_data.py` runs NLP analysis on the imported data

```bash
# Setup
git submodule update --init
cd WeiboInsight && pip install -r requirements.txt && cd ..
pip install pymongo jieba

# Import data into MongoDB
python bridge.py --all

# Run NLP analysis
cd WeiboInsight/scrapy_project
python analyze_weibo_data.py
```

## Related Projects

- [WeiboInsight](https://github.com/arandomguyhere/WeiboInsight) — Playwright-based Weibo CTI analysis
- [V2EX Daily Hot Topics](https://github.com/boojack/v2ex-daily-hot-topic)
- [jackylee1/weibo-daily-hot-search](https://github.com/jackylee1/weibo-daily-hot-search) — Original project

## License

MIT
