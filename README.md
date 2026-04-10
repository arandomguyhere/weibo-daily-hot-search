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

1. [还原所谓迷药传单的来龙去脉 (Restoring the origins of the so-called drug leaflets)](https://s.weibo.com/weibo?q=%23%E8%BF%98%E5%8E%9F%E6%89%80%E8%B0%93%E8%BF%B7%E8%8D%AF%E4%BC%A0%E5%8D%95%E7%9A%84%E6%9D%A5%E9%BE%99%E5%8E%BB%E8%84%89%23) `144.2K 🔥` `NEW`
1. [美伊今天在巴基斯坦谈判](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E4%BC%8A%E4%BB%8A%E5%A4%A9%E5%9C%A8%E5%B7%B4%E5%9F%BA%E6%96%AF%E5%9D%A6%E8%B0%88%E5%88%A4%23) `100.6K 🔥` `NEW`
1. [网友提醒刘芸注意儿子内八问题](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%8F%8B%E6%8F%90%E9%86%92%E5%88%98%E8%8A%B8%E6%B3%A8%E6%84%8F%E5%84%BF%E5%AD%90%E5%86%85%E5%85%AB%E9%97%AE%E9%A2%98%23) `100.0K 🔥` `NEW`
1. [芒果居然想让孙怡宣布赵子琪淘汰](https://s.weibo.com/weibo?q=%23%E8%8A%92%E6%9E%9C%E5%B1%85%E7%84%B6%E6%83%B3%E8%AE%A9%E5%AD%99%E6%80%A1%E5%AE%A3%E5%B8%83%E8%B5%B5%E5%AD%90%E7%90%AA%E6%B7%98%E6%B1%B0%23) `84.9K 🔥` `NEW`
1. [这个酷似感冒的病进入高发季](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%B8%AA%E9%85%B7%E4%BC%BC%E6%84%9F%E5%86%92%E7%9A%84%E7%97%85%E8%BF%9B%E5%85%A5%E9%AB%98%E5%8F%91%E5%AD%A3%23) `78.9K 🔥` `NEW`
1. [以军在教室开枪打死9岁加沙女孩](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E5%86%9B%E5%9C%A8%E6%95%99%E5%AE%A4%E5%BC%80%E6%9E%AA%E6%89%93%E6%AD%BB9%E5%B2%81%E5%8A%A0%E6%B2%99%E5%A5%B3%E5%AD%A9%23) `41.2K 🔥` `NEW`
1. [男子微信群多次侮辱全红婵被拘 (Man was arrested for repeatedly insulting Quan Hongchan in WeChat group)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%BE%AE%E4%BF%A1%E7%BE%A4%E5%A4%9A%E6%AC%A1%E4%BE%AE%E8%BE%B1%E5%85%A8%E7%BA%A2%E5%A9%B5%E8%A2%AB%E6%8B%98%23) `768.5K 🔥` `+46%`
1. [这些品牌竟然都是假洋牌 (These brands are all fake foreign brands)](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%BA%9B%E5%93%81%E7%89%8C%E7%AB%9F%E7%84%B6%E9%83%BD%E6%98%AF%E5%81%87%E6%B4%8B%E7%89%8C%23) `553.4K 🔥` `+46%`
1. [我国海水直接制氢取得研究新突破 (my country has achieved new research breakthroughs in direct hydrogen production from seawater)](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%9B%BD%E6%B5%B7%E6%B0%B4%E7%9B%B4%E6%8E%A5%E5%88%B6%E6%B0%A2%E5%8F%96%E5%BE%97%E7%A0%94%E7%A9%B6%E6%96%B0%E7%AA%81%E7%A0%B4%23) `434.3K 🔥` `+42%`
1. [各方同意以伊方十点方案为谈判基础 (All parties agreed to use Iran's ten-point plan as the basis for negotiations)](https://s.weibo.com/weibo?q=%23%E5%90%84%E6%96%B9%E5%90%8C%E6%84%8F%E4%BB%A5%E4%BC%8A%E6%96%B9%E5%8D%81%E7%82%B9%E6%96%B9%E6%A1%88%E4%B8%BA%E8%B0%88%E5%88%A4%E5%9F%BA%E7%A1%80%23) `184.5K 🔥` `+22%`
1. [婴儿出生9斤一个月瘦到7斤](https://s.weibo.com/weibo?q=%23%E5%A9%B4%E5%84%BF%E5%87%BA%E7%94%9F9%E6%96%A4%E4%B8%80%E4%B8%AA%E6%9C%88%E7%98%A6%E5%88%B07%E6%96%A4%23) `141.9K 🔥` `+42%`
1. [饭圈乱象成影响体育事业的重大风险](https://s.weibo.com/weibo?q=%23%E9%A5%AD%E5%9C%88%E4%B9%B1%E8%B1%A1%E6%88%90%E5%BD%B1%E5%93%8D%E4%BD%93%E8%82%B2%E4%BA%8B%E4%B8%9A%E7%9A%84%E9%87%8D%E5%A4%A7%E9%A3%8E%E9%99%A9%23) `108.4K 🔥` `+122%`
1. [中国科学家揭示左撇子真相](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%A7%91%E5%AD%A6%E5%AE%B6%E6%8F%AD%E7%A4%BA%E5%B7%A6%E6%92%87%E5%AD%90%E7%9C%9F%E7%9B%B8%23) `104.4K 🔥` `+47%`
1. [夸克 海外剧 (Quark overseas drama)](https://s.weibo.com/weibo?q=%23%E5%A4%B8%E5%85%8B%20%E6%B5%B7%E5%A4%96%E5%89%A7%23) `100.2K 🔥` `+45%`
1. [以军当学生面打死加沙小女孩](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E5%86%9B%E5%BD%93%E5%AD%A6%E7%94%9F%E9%9D%A2%E6%89%93%E6%AD%BB%E5%8A%A0%E6%B2%99%E5%B0%8F%E5%A5%B3%E5%AD%A9%23) `99.6K 🔥` `+54%`
1. [孙怡爆哭 (Sun Yi burst into tears)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%80%A1%E7%88%86%E5%93%AD%23) `94.9K 🔥` `+42%`
1. [周杰伦方回应演唱会划水 (Jay Chou responded to the concert)](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%9D%B0%E4%BC%A6%E6%96%B9%E5%9B%9E%E5%BA%94%E6%BC%94%E5%94%B1%E4%BC%9A%E5%88%92%E6%B0%B4%23) `93.5K 🔥` `+40%`
1. [被害女医学生母亲频繁吐血 (The mother of the murdered female medical student frequently vomited blood)](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E5%AE%B3%E5%A5%B3%E5%8C%BB%E5%AD%A6%E7%94%9F%E6%AF%8D%E4%BA%B2%E9%A2%91%E7%B9%81%E5%90%90%E8%A1%80%23) `86.5K 🔥` `+25%`
1. [男子杀害女儿5个月前买了意外险 (Man killed daughter and bought accident insurance 5 months ago)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E6%9D%80%E5%AE%B3%E5%A5%B3%E5%84%BF5%E4%B8%AA%E6%9C%88%E5%89%8D%E4%B9%B0%E4%BA%86%E6%84%8F%E5%A4%96%E9%99%A9%23) `86.4K 🔥` `+77%`
1. [交警回应私家车遭运钞车别车 (Traffic police responded to a private car being intercepted by a cash transport truck)](https://s.weibo.com/weibo?q=%23%E4%BA%A4%E8%AD%A6%E5%9B%9E%E5%BA%94%E7%A7%81%E5%AE%B6%E8%BD%A6%E9%81%AD%E8%BF%90%E9%92%9E%E8%BD%A6%E5%88%AB%E8%BD%A6%23) `72.0K 🔥` `+33%`
1. [美国海滩连环命案华人男尸身着女装 (The body of a Chinese man killed in serial murders on an American beach was dressed in women's clothing)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E6%B5%B7%E6%BB%A9%E8%BF%9E%E7%8E%AF%E5%91%BD%E6%A1%88%E5%8D%8E%E4%BA%BA%E7%94%B7%E5%B0%B8%E8%BA%AB%E7%9D%80%E5%A5%B3%E8%A3%85%23) `67.6K 🔥` `+55%`
1. [魏大勋胡先煦十日终焉开机照](https://s.weibo.com/weibo?q=%23%E9%AD%8F%E5%A4%A7%E5%8B%8B%E8%83%A1%E5%85%88%E7%85%A6%E5%8D%81%E6%97%A5%E7%BB%88%E7%84%89%E5%BC%80%E6%9C%BA%E7%85%A7%23) `58.9K 🔥` `+57%`
1. [赵丽颖工作室疑似表达对捆绑的不满 (Zhao Liying's studio seems to express dissatisfaction with bundling)](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%B8%BD%E9%A2%96%E5%B7%A5%E4%BD%9C%E5%AE%A4%E7%96%91%E4%BC%BC%E8%A1%A8%E8%BE%BE%E5%AF%B9%E6%8D%86%E7%BB%91%E7%9A%84%E4%B8%8D%E6%BB%A1%23) `52.8K 🔥` `+45%`
1. [黄瓜拌菠萝火了](https://s.weibo.com/weibo?q=%23%E9%BB%84%E7%93%9C%E6%8B%8C%E8%8F%A0%E8%90%9D%E7%81%AB%E4%BA%86%23) `45.7K 🔥` `+36%`
1. [伊斯兰堡已进入红色警戒](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%96%AF%E5%85%B0%E5%A0%A1%E5%B7%B2%E8%BF%9B%E5%85%A5%E7%BA%A2%E8%89%B2%E8%AD%A6%E6%88%92%23) `44.6K 🔥` `+30%`
1. [警方通报父母离婚不接年幼乘客 (Police report parents' divorce and refuse to pick up young passengers)](https://s.weibo.com/weibo?q=%23%E8%AD%A6%E6%96%B9%E9%80%9A%E6%8A%A5%E7%88%B6%E6%AF%8D%E7%A6%BB%E5%A9%9A%E4%B8%8D%E6%8E%A5%E5%B9%B4%E5%B9%BC%E4%B9%98%E5%AE%A2%23) `44.0K 🔥` `+26%`
1. [张凌赫新剧这一秒过火路透](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E6%96%B0%E5%89%A7%E8%BF%99%E4%B8%80%E7%A7%92%E8%BF%87%E7%81%AB%E8%B7%AF%E9%80%8F%23) `39.8K 🔥` `+42%`
1. [21世纪大君夫人](https://s.weibo.com/weibo?q=%2321%E4%B8%96%E7%BA%AA%E5%A4%A7%E5%90%9B%E5%A4%AB%E4%BA%BA%23) `39.4K 🔥` `+60%`
1. [鸡煲老板遇撞脸刘雨鑫记者场面失控 (The owner of the chicken pot got out of control when he bumped into reporter Liu Yuxin)](https://s.weibo.com/weibo?q=%23%E9%B8%A1%E7%85%B2%E8%80%81%E6%9D%BF%E9%81%87%E6%92%9E%E8%84%B8%E5%88%98%E9%9B%A8%E9%91%AB%E8%AE%B0%E8%80%85%E5%9C%BA%E9%9D%A2%E5%A4%B1%E6%8E%A7%23) `39.1K 🔥` `+43%`
1. [刘浩存中国电影盛典舞蹈](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%B5%A9%E5%AD%98%E4%B8%AD%E5%9B%BD%E7%94%B5%E5%BD%B1%E7%9B%9B%E5%85%B8%E8%88%9E%E8%B9%88%23) `38.9K 🔥` `+48%`
1. [冰湖重生官微删博](https://s.weibo.com/weibo?q=%23%E5%86%B0%E6%B9%96%E9%87%8D%E7%94%9F%E5%AE%98%E5%BE%AE%E5%88%A0%E5%8D%9A%23) `38.3K 🔥` `+40%`
1. [95后女生回村养6万条蛇年入百万 (A girl born after 1995 returned to the village to raise 60,000 snakes and earn millions a year)](https://s.weibo.com/weibo?q=%2395%E5%90%8E%E5%A5%B3%E7%94%9F%E5%9B%9E%E6%9D%91%E5%85%BB6%E4%B8%87%E6%9D%A1%E8%9B%87%E5%B9%B4%E5%85%A5%E7%99%BE%E4%B8%87%23) `36.7K 🔥` `+48%`
1. [奔跑吧ins取关TWS](https://s.weibo.com/weibo?q=%23%E5%A5%94%E8%B7%91%E5%90%A7ins%E5%8F%96%E5%85%B3TWS%23) `36.4K 🔥` `+37%`
1. [张杰在张杰演唱会上看张杰](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9D%B0%E5%9C%A8%E5%BC%A0%E6%9D%B0%E6%BC%94%E5%94%B1%E4%BC%9A%E4%B8%8A%E7%9C%8B%E5%BC%A0%E6%9D%B0%23) `36.4K 🔥` `+48%`
1. [伦敦世乒赛种子位参赛名单 (London World Table Tennis Championships seed list)](https://s.weibo.com/weibo?q=%23%E4%BC%A6%E6%95%A6%E4%B8%96%E4%B9%92%E8%B5%9B%E7%A7%8D%E5%AD%90%E4%BD%8D%E5%8F%82%E8%B5%9B%E5%90%8D%E5%8D%95%23) `36.3K 🔥` `+47%`
1. [冰湖重生](https://s.weibo.com/weibo?q=%23%E5%86%B0%E6%B9%96%E9%87%8D%E7%94%9F%23) `36.2K 🔥` `+30%`
1. [美伊谈判倒计时](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E4%BC%8A%E8%B0%88%E5%88%A4%E5%80%92%E8%AE%A1%E6%97%B6%23) `36.0K 🔥` `+24%`
1. [IU新剧开播 (IU new drama starts airing)](https://s.weibo.com/weibo?q=%23IU%E6%96%B0%E5%89%A7%E5%BC%80%E6%92%AD%23) `35.9K 🔥` `+33%`
1. [杨紫创平台女性角色历史最高 (Yang Zichuang has the highest female role in the history of the platform)](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E5%88%9B%E5%B9%B3%E5%8F%B0%E5%A5%B3%E6%80%A7%E8%A7%92%E8%89%B2%E5%8E%86%E5%8F%B2%E6%9C%80%E9%AB%98%23) `35.9K 🔥` `+46%`
1. [为什么穿睡衣那么显瘦](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E7%A9%BF%E7%9D%A1%E8%A1%A3%E9%82%A3%E4%B9%88%E6%98%BE%E7%98%A6%23) `35.8K 🔥` `+45%`
1. [华为Pura90系列配色 (Huawei Pura90 series color matching)](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BAPura90%E7%B3%BB%E5%88%97%E9%85%8D%E8%89%B2%23) `35.7K 🔥` `+106%`
1. [李小冉拉王濛起来被甩开](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B0%8F%E5%86%89%E6%8B%89%E7%8E%8B%E6%BF%9B%E8%B5%B7%E6%9D%A5%E8%A2%AB%E7%94%A9%E5%BC%80%23) `350.4K 🔥`
1. [温峥嵘 (Wen Zhengrong)](https://s.weibo.com/weibo?q=%23%E6%B8%A9%E5%B3%A5%E5%B5%98%23) `165.4K 🔥`
1. [浪姐排名 (Sister Lang ranking)](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E6%8E%92%E5%90%8D%23) `86.5K 🔥`
1. [赵子琪淘汰](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E5%AD%90%E7%90%AA%E6%B7%98%E6%B1%B0%23) `57.9K 🔥`
1. [张雪机车拍卖98次出价记录 (Zhang Xue's motorcycle auction record of 98 bids)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%E6%8B%8D%E5%8D%9698%E6%AC%A1%E5%87%BA%E4%BB%B7%E8%AE%B0%E5%BD%95%23) `55.1K 🔥`
1. [阚清子团选择曾沛慈团 (Kan Qingzi’s group chose Zeng Peici’s group)](https://s.weibo.com/weibo?q=%23%E9%98%9A%E6%B8%85%E5%AD%90%E5%9B%A2%E9%80%89%E6%8B%A9%E6%9B%BE%E6%B2%9B%E6%85%88%E5%9B%A2%23) `53.5K 🔥`
1. [张雪请李亚鹏监督捐款用在孩子身上](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E8%AF%B7%E6%9D%8E%E4%BA%9A%E9%B9%8F%E7%9B%91%E7%9D%A3%E6%8D%90%E6%AC%BE%E7%94%A8%E5%9C%A8%E5%AD%A9%E5%AD%90%E8%BA%AB%E4%B8%8A%23) `41.8K 🔥`
1. [若以继续袭击黎巴嫩伊美谈判就暂停 (Negotiations between Iran and US will be suspended if attacks on Lebanon continue)](https://s.weibo.com/weibo?q=%23%E8%8B%A5%E4%BB%A5%E7%BB%A7%E7%BB%AD%E8%A2%AD%E5%87%BB%E9%BB%8E%E5%B7%B4%E5%AB%A9%E4%BC%8A%E7%BE%8E%E8%B0%88%E5%88%A4%E5%B0%B1%E6%9A%82%E5%81%9C%23) `42.4K 🔥` `-24%`

Updated at 2026-04-11 07:24:51

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
