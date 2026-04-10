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

1. [男子微信群多次侮辱全红婵被拘 (Man was arrested for repeatedly insulting Quan Hongchan in WeChat group)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%BE%AE%E4%BF%A1%E7%BE%A4%E5%A4%9A%E6%AC%A1%E4%BE%AE%E8%BE%B1%E5%85%A8%E7%BA%A2%E5%A9%B5%E8%A2%AB%E6%8B%98%23) `525.0K 🔥` `+101%`
1. [这些品牌竟然都是假洋牌 (These brands are all fake foreign brands)](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%BA%9B%E5%93%81%E7%89%8C%E7%AB%9F%E7%84%B6%E9%83%BD%E6%98%AF%E5%81%87%E6%B4%8B%E7%89%8C%23) `378.7K 🔥` `+101%`
1. [我国海水直接制氢取得研究新突破 (my country has achieved new research breakthroughs in direct hydrogen production from seawater)](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%9B%BD%E6%B5%B7%E6%B0%B4%E7%9B%B4%E6%8E%A5%E5%88%B6%E6%B0%A2%E5%8F%96%E5%BE%97%E7%A0%94%E7%A9%B6%E6%96%B0%E7%AA%81%E7%A0%B4%23) `305.3K 🔥` `+97%`
1. [李小冉拉王濛起来被甩开](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B0%8F%E5%86%89%E6%8B%89%E7%8E%8B%E6%BF%9B%E8%B5%B7%E6%9D%A5%E8%A2%AB%E7%94%A9%E5%BC%80%23) `298.6K 🔥` `+140%`
1. [各方同意以伊方十点方案为谈判基础 (All parties agreed to use Iran's ten-point plan as the basis for negotiations)](https://s.weibo.com/weibo?q=%23%E5%90%84%E6%96%B9%E5%90%8C%E6%84%8F%E4%BB%A5%E4%BC%8A%E6%96%B9%E5%8D%81%E7%82%B9%E6%96%B9%E6%A1%88%E4%B8%BA%E8%B0%88%E5%88%A4%E5%9F%BA%E7%A1%80%23) `151.1K 🔥` `+67%`
1. [温峥嵘 (Wen Zhengrong)](https://s.weibo.com/weibo?q=%23%E6%B8%A9%E5%B3%A5%E5%B5%98%23) `146.0K 🔥` `+86%`
1. [婴儿出生9斤一个月瘦到7斤](https://s.weibo.com/weibo?q=%23%E5%A9%B4%E5%84%BF%E5%87%BA%E7%94%9F9%E6%96%A4%E4%B8%80%E4%B8%AA%E6%9C%88%E7%98%A6%E5%88%B07%E6%96%A4%23) `100.1K 🔥` `+117%`
1. [浪姐排名 (Sister Lang ranking)](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E6%8E%92%E5%90%8D%23) `80.8K 🔥` `+99%`
1. [中国科学家揭示左撇子真相](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%A7%91%E5%AD%A6%E5%AE%B6%E6%8F%AD%E7%A4%BA%E5%B7%A6%E6%92%87%E5%AD%90%E7%9C%9F%E7%9B%B8%23) `71.0K 🔥` `+89%`
1. [被害女医学生母亲频繁吐血 (The mother of the murdered female medical student frequently vomited blood)](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E5%AE%B3%E5%A5%B3%E5%8C%BB%E5%AD%A6%E7%94%9F%E6%AF%8D%E4%BA%B2%E9%A2%91%E7%B9%81%E5%90%90%E8%A1%80%23) `69.0K 🔥` `+109%`
1. [夸克 海外剧 (Quark overseas drama)](https://s.weibo.com/weibo?q=%23%E5%A4%B8%E5%85%8B%20%E6%B5%B7%E5%A4%96%E5%89%A7%23) `68.9K 🔥` `+87%`
1. [孙怡爆哭 (Sun Yi burst into tears)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%80%A1%E7%88%86%E5%93%AD%23) `67.1K 🔥` `+85%`
1. [周杰伦方回应演唱会划水](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%9D%B0%E4%BC%A6%E6%96%B9%E5%9B%9E%E5%BA%94%E6%BC%94%E5%94%B1%E4%BC%9A%E5%88%92%E6%B0%B4%23) `66.7K 🔥` `+86%`
1. [赵子琪淘汰](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E5%AD%90%E7%90%AA%E6%B7%98%E6%B1%B0%23) `64.8K 🔥` `+84%`
1. [以军当学生面打死加沙小女孩](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E5%86%9B%E5%BD%93%E5%AD%A6%E7%94%9F%E9%9D%A2%E6%89%93%E6%AD%BB%E5%8A%A0%E6%B2%99%E5%B0%8F%E5%A5%B3%E5%AD%A9%23) `64.5K 🔥` `+82%`
1. [若以继续袭击黎巴嫩伊美谈判就暂停 (Negotiations between Iran and US will be suspended if attacks on Lebanon continue)](https://s.weibo.com/weibo?q=%23%E8%8B%A5%E4%BB%A5%E7%BB%A7%E7%BB%AD%E8%A2%AD%E5%87%BB%E9%BB%8E%E5%B7%B4%E5%AB%A9%E4%BC%8A%E7%BE%8E%E8%B0%88%E5%88%A4%E5%B0%B1%E6%9A%82%E5%81%9C%23) `55.6K 🔥` `+50%`
1. [阚清子团比孙怡团票数高 (Kan Qingzi’s group had more votes than Sun Yi’s group)](https://s.weibo.com/weibo?q=%23%E9%98%9A%E6%B8%85%E5%AD%90%E5%9B%A2%E6%AF%94%E5%AD%99%E6%80%A1%E5%9B%A2%E7%A5%A8%E6%95%B0%E9%AB%98%23) `55.5K 🔥` `+90%`
1. [交警回应私家车遭运钞车别车 (Traffic police responded to a private car being intercepted by a cash transport truck)](https://s.weibo.com/weibo?q=%23%E4%BA%A4%E8%AD%A6%E5%9B%9E%E5%BA%94%E7%A7%81%E5%AE%B6%E8%BD%A6%E9%81%AD%E8%BF%90%E9%92%9E%E8%BD%A6%E5%88%AB%E8%BD%A6%23) `54.1K 🔥` `+107%`
1. [张雪机车拍卖98次出价记录 (Zhang Xue's motorcycle auction record of 98 bids)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%E6%8B%8D%E5%8D%9698%E6%AC%A1%E5%87%BA%E4%BB%B7%E8%AE%B0%E5%BD%95%23) `52.0K 🔥` `+85%`
1. [男子杀害女儿5个月前买了意外险 (Man killed daughter and bought accident insurance 5 months ago)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E6%9D%80%E5%AE%B3%E5%A5%B3%E5%84%BF5%E4%B8%AA%E6%9C%88%E5%89%8D%E4%B9%B0%E4%BA%86%E6%84%8F%E5%A4%96%E9%99%A9%23) `49.0K 🔥` `+48%`
1. [饭圈乱象成影响体育事业的重大风险](https://s.weibo.com/weibo?q=%23%E9%A5%AD%E5%9C%88%E4%B9%B1%E8%B1%A1%E6%88%90%E5%BD%B1%E5%93%8D%E4%BD%93%E8%82%B2%E4%BA%8B%E4%B8%9A%E7%9A%84%E9%87%8D%E5%A4%A7%E9%A3%8E%E9%99%A9%23) `48.9K 🔥` `+160%`
1. [阚清子团选择曾沛慈团 (Kan Qingzi’s group chose Zeng Peici’s group)](https://s.weibo.com/weibo?q=%23%E9%98%9A%E6%B8%85%E5%AD%90%E5%9B%A2%E9%80%89%E6%8B%A9%E6%9B%BE%E6%B2%9B%E6%85%88%E5%9B%A2%23) `44.6K 🔥` `+115%`
1. [美国海滩连环命案华人男尸身着女装 (The body of a Chinese man killed in serial murders on an American beach was dressed in women's clothing)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E6%B5%B7%E6%BB%A9%E8%BF%9E%E7%8E%AF%E5%91%BD%E6%A1%88%E5%8D%8E%E4%BA%BA%E7%94%B7%E5%B0%B8%E8%BA%AB%E7%9D%80%E5%A5%B3%E8%A3%85%23) `43.5K 🔥` `+137%`
1. [魏大勋胡先煦十日终焉开机照](https://s.weibo.com/weibo?q=%23%E9%AD%8F%E5%A4%A7%E5%8B%8B%E8%83%A1%E5%85%88%E7%85%A6%E5%8D%81%E6%97%A5%E7%BB%88%E7%84%89%E5%BC%80%E6%9C%BA%E7%85%A7%23) `37.5K 🔥` `+82%`
1. [张雪请李亚鹏监督捐款用在孩子身上](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E8%AF%B7%E6%9D%8E%E4%BA%9A%E9%B9%8F%E7%9B%91%E7%9D%A3%E6%8D%90%E6%AC%BE%E7%94%A8%E5%9C%A8%E5%AD%A9%E5%AD%90%E8%BA%AB%E4%B8%8A%23) `37.0K 🔥` `+94%`
1. [赵丽颖工作室疑似表达对捆绑的不满 (Zhao Liying's studio seems to express dissatisfaction with bundling)](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%B8%BD%E9%A2%96%E5%B7%A5%E4%BD%9C%E5%AE%A4%E7%96%91%E4%BC%BC%E8%A1%A8%E8%BE%BE%E5%AF%B9%E6%8D%86%E7%BB%91%E7%9A%84%E4%B8%8D%E6%BB%A1%23) `36.4K 🔥` `+93%`
1. [警方通报父母离婚不接年幼乘客 (Police report parents' divorce and refuse to pick up young passengers)](https://s.weibo.com/weibo?q=%23%E8%AD%A6%E6%96%B9%E9%80%9A%E6%8A%A5%E7%88%B6%E6%AF%8D%E7%A6%BB%E5%A9%9A%E4%B8%8D%E6%8E%A5%E5%B9%B4%E5%B9%BC%E4%B9%98%E5%AE%A2%23) `34.8K 🔥` `+72%`
1. [伊斯兰堡已进入红色警戒](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%96%AF%E5%85%B0%E5%A0%A1%E5%B7%B2%E8%BF%9B%E5%85%A5%E7%BA%A2%E8%89%B2%E8%AD%A6%E6%88%92%23) `34.2K 🔥` `+65%`
1. [黄瓜拌菠萝火了](https://s.weibo.com/weibo?q=%23%E9%BB%84%E7%93%9C%E6%8B%8C%E8%8F%A0%E8%90%9D%E7%81%AB%E4%BA%86%23) `33.7K 🔥` `+79%`
1. [张凌赫新剧这一秒过火路透](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E6%96%B0%E5%89%A7%E8%BF%99%E4%B8%80%E7%A7%92%E8%BF%87%E7%81%AB%E8%B7%AF%E9%80%8F%23) `28.0K 🔥` `+66%`
1. [冰湖重生](https://s.weibo.com/weibo?q=%23%E5%86%B0%E6%B9%96%E9%87%8D%E7%94%9F%23) `27.8K 🔥` `+36%`
1. [鸡煲老板遇撞脸刘雨鑫记者场面失控 (The owner of the chicken pot got out of control when he bumped into reporter Liu Yuxin)](https://s.weibo.com/weibo?q=%23%E9%B8%A1%E7%85%B2%E8%80%81%E6%9D%BF%E9%81%87%E6%92%9E%E8%84%B8%E5%88%98%E9%9B%A8%E9%91%AB%E8%AE%B0%E8%80%85%E5%9C%BA%E9%9D%A2%E5%A4%B1%E6%8E%A7%23) `27.4K 🔥` `+62%`
1. [冰湖重生官微删博](https://s.weibo.com/weibo?q=%23%E5%86%B0%E6%B9%96%E9%87%8D%E7%94%9F%E5%AE%98%E5%BE%AE%E5%88%A0%E5%8D%9A%23) `27.4K 🔥` `+55%`
1. [IU新剧开播 (IU new drama starts airing)](https://s.weibo.com/weibo?q=%23IU%E6%96%B0%E5%89%A7%E5%BC%80%E6%92%AD%23) `27.0K 🔥` `+60%`
1. [奔跑吧ins取关TWS](https://s.weibo.com/weibo?q=%23%E5%A5%94%E8%B7%91%E5%90%A7ins%E5%8F%96%E5%85%B3TWS%23) `26.6K 🔥` `+57%`
1. [刘浩存中国电影盛典舞蹈](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%B5%A9%E5%AD%98%E4%B8%AD%E5%9B%BD%E7%94%B5%E5%BD%B1%E7%9B%9B%E5%85%B8%E8%88%9E%E8%B9%88%23) `26.2K 🔥` `+37%`
1. [95后女生回村养6万条蛇年入百万 (A girl born after 1995 returned to the village to raise 60,000 snakes and earn millions a year)](https://s.weibo.com/weibo?q=%2395%E5%90%8E%E5%A5%B3%E7%94%9F%E5%9B%9E%E6%9D%91%E5%85%BB6%E4%B8%87%E6%9D%A1%E8%9B%87%E5%B9%B4%E5%85%A5%E7%99%BE%E4%B8%87%23) `24.7K 🔥` `+46%`
1. [伦敦世乒赛种子位参赛名单](https://s.weibo.com/weibo?q=%23%E4%BC%A6%E6%95%A6%E4%B8%96%E4%B9%92%E8%B5%9B%E7%A7%8D%E5%AD%90%E4%BD%8D%E5%8F%82%E8%B5%9B%E5%90%8D%E5%8D%95%23) `24.6K 🔥` `+46%`
1. [杨紫创平台女性角色历史最高 (Yang Zichuang has the highest female role in the history of the platform)](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E5%88%9B%E5%B9%B3%E5%8F%B0%E5%A5%B3%E6%80%A7%E8%A7%92%E8%89%B2%E5%8E%86%E5%8F%B2%E6%9C%80%E9%AB%98%23) `24.6K 🔥` `+42%`
1. [21世纪大君夫人](https://s.weibo.com/weibo?q=%2321%E4%B8%96%E7%BA%AA%E5%A4%A7%E5%90%9B%E5%A4%AB%E4%BA%BA%23) `24.6K 🔥` `+46%`
1. [莫氏鸡煲公开秘方 (Mo’s Chicken Pot Secret Recipe Revealed)](https://s.weibo.com/weibo?q=%23%E8%8E%AB%E6%B0%8F%E9%B8%A1%E7%85%B2%E5%85%AC%E5%BC%80%E7%A7%98%E6%96%B9%23) `24.6K 🔥` `+46%`
1. [两岸同胞共同书写了中国历史 (Compatriots on both sides of the Taiwan Strait jointly wrote Chinese history)](https://s.weibo.com/weibo?q=%23%E4%B8%A4%E5%B2%B8%E5%90%8C%E8%83%9E%E5%85%B1%E5%90%8C%E4%B9%A6%E5%86%99%E4%BA%86%E4%B8%AD%E5%9B%BD%E5%8E%86%E5%8F%B2%23) `24.6K 🔥` `+46%`
1. [发现了辛苦了这句话的最佳回复](https://s.weibo.com/weibo?q=%23%E5%8F%91%E7%8E%B0%E4%BA%86%E8%BE%9B%E8%8B%A6%E4%BA%86%E8%BF%99%E5%8F%A5%E8%AF%9D%E7%9A%84%E6%9C%80%E4%BD%B3%E5%9B%9E%E5%A4%8D%23) `24.6K 🔥` `+42%`
1. [为什么穿睡衣那么显瘦](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E7%A9%BF%E7%9D%A1%E8%A1%A3%E9%82%A3%E4%B9%88%E6%98%BE%E7%98%A6%23) `24.6K 🔥` `+46%`
1. [穆祉丞 我爱杰哥 (Mu Zhicheng I love Brother Jie)](https://s.weibo.com/weibo?q=%23%E7%A9%86%E7%A5%89%E4%B8%9E%20%E6%88%91%E7%88%B1%E6%9D%B0%E5%93%A5%23) `24.6K 🔥` `+46%`
1. [伊朗武装部队称随时准备开火 (Iran's armed forces say they are ready to open fire at any time)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%AD%A6%E8%A3%85%E9%83%A8%E9%98%9F%E7%A7%B0%E9%9A%8F%E6%97%B6%E5%87%86%E5%A4%87%E5%BC%80%E7%81%AB%23) `24.6K 🔥` `+46%`
1. [十日终焉官宣物料](https://s.weibo.com/weibo?q=%23%E5%8D%81%E6%97%A5%E7%BB%88%E7%84%89%E5%AE%98%E5%AE%A3%E7%89%A9%E6%96%99%23) `24.6K 🔥` `+46%`
1. [美伊谈判倒计时](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E4%BC%8A%E8%B0%88%E5%88%A4%E5%80%92%E8%AE%A1%E6%97%B6%23) `29.1K 🔥`
1. [张杰在张杰演唱会上看张杰](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9D%B0%E5%9C%A8%E5%BC%A0%E6%9D%B0%E6%BC%94%E5%94%B1%E4%BC%9A%E4%B8%8A%E7%9C%8B%E5%BC%A0%E6%9D%B0%23) `24.6K 🔥` `-27%`

Updated at 2026-04-11 06:50:27

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
