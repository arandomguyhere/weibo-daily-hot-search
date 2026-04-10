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

1. [秦昊和伊能静首次见面时非单身 (Qin Hao and Yi Nengjing were not single when they first met)](https://s.weibo.com/weibo?q=%23%E7%A7%A6%E6%98%8A%E5%92%8C%E4%BC%8A%E8%83%BD%E9%9D%99%E9%A6%96%E6%AC%A1%E8%A7%81%E9%9D%A2%E6%97%B6%E9%9D%9E%E5%8D%95%E8%BA%AB%23) `88.8K 🔥` `NEW`
1. [张慧雯情商](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%85%A7%E9%9B%AF%E6%83%85%E5%95%86%23) `86.5K 🔥` `NEW`
1. [江苏一女子逛商场上厕所零隔断](https://s.weibo.com/weibo?q=%23%E6%B1%9F%E8%8B%8F%E4%B8%80%E5%A5%B3%E5%AD%90%E9%80%9B%E5%95%86%E5%9C%BA%E4%B8%8A%E5%8E%95%E6%89%80%E9%9B%B6%E9%9A%94%E6%96%AD%23) `75.6K 🔥` `NEW`
1. [月鳞绮纪](https://s.weibo.com/weibo?q=%23%E6%9C%88%E9%B3%9E%E7%BB%AE%E7%BA%AA%23) `67.0K 🔥` `NEW`
1. [赵子琪淘汰后节目组不让取包](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E5%AD%90%E7%90%AA%E6%B7%98%E6%B1%B0%E5%90%8E%E8%8A%82%E7%9B%AE%E7%BB%84%E4%B8%8D%E8%AE%A9%E5%8F%96%E5%8C%85%23) `57.8K 🔥` `NEW`
1. [高市早苗被当面怒批](https://s.weibo.com/weibo?q=%23%E9%AB%98%E5%B8%82%E6%97%A9%E8%8B%97%E8%A2%AB%E5%BD%93%E9%9D%A2%E6%80%92%E6%89%B9%23) `57.2K 🔥` `NEW`
1. [特朗普在通话后改口](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E5%9C%A8%E9%80%9A%E8%AF%9D%E5%90%8E%E6%94%B9%E5%8F%A3%23) `57.1K 🔥` `NEW`
1. [伊朗谈判代表团心怀善意但不信美国](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E8%B0%88%E5%88%A4%E4%BB%A3%E8%A1%A8%E5%9B%A2%E5%BF%83%E6%80%80%E5%96%84%E6%84%8F%E4%BD%86%E4%B8%8D%E4%BF%A1%E7%BE%8E%E5%9B%BD%23) `56.4K 🔥` `NEW`
1. [十日终焉导演许宏宇编剧蒋峰](https://s.weibo.com/weibo?q=%23%E5%8D%81%E6%97%A5%E7%BB%88%E7%84%89%E5%AF%BC%E6%BC%94%E8%AE%B8%E5%AE%8F%E5%AE%87%E7%BC%96%E5%89%A7%E8%92%8B%E5%B3%B0%23) `56.2K 🔥` `NEW`
1. [填埋奔驰车事件系祭拜活动](https://s.weibo.com/weibo?q=%23%E5%A1%AB%E5%9F%8B%E5%A5%94%E9%A9%B0%E8%BD%A6%E4%BA%8B%E4%BB%B6%E7%B3%BB%E7%A5%AD%E6%8B%9C%E6%B4%BB%E5%8A%A8%23) `54.7K 🔥` `NEW`
1. [家业 (Family business)](https://s.weibo.com/weibo?q=%23%E5%AE%B6%E4%B8%9A%23) `52.4K 🔥` `NEW`
1. [警方已查到路虎加500元油逃单嫌疑人](https://s.weibo.com/weibo?q=%23%E8%AD%A6%E6%96%B9%E5%B7%B2%E6%9F%A5%E5%88%B0%E8%B7%AF%E8%99%8E%E5%8A%A0500%E5%85%83%E6%B2%B9%E9%80%83%E5%8D%95%E5%AB%8C%E7%96%91%E4%BA%BA%23) `52.2K 🔥` `NEW`
1. [黎以同意在美讨论停火](https://s.weibo.com/weibo?q=%23%E9%BB%8E%E4%BB%A5%E5%90%8C%E6%84%8F%E5%9C%A8%E7%BE%8E%E8%AE%A8%E8%AE%BA%E5%81%9C%E7%81%AB%23) `41.0K 🔥` `NEW`
1. [男子微信群多次侮辱全红婵被拘 (Man was arrested for repeatedly insulting Quan Hongchan in WeChat group)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%BE%AE%E4%BF%A1%E7%BE%A4%E5%A4%9A%E6%AC%A1%E4%BE%AE%E8%BE%B1%E5%85%A8%E7%BA%A2%E5%A9%B5%E8%A2%AB%E6%8B%98%23) `1.0M 🔥` `+36%`
1. [这些品牌竟然都是假洋牌 (These brands are all fake foreign brands)](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%BA%9B%E5%93%81%E7%89%8C%E7%AB%9F%E7%84%B6%E9%83%BD%E6%98%AF%E5%81%87%E6%B4%8B%E7%89%8C%23) `764.4K 🔥` `+38%`
1. [我国海水直接制氢取得研究新突破 (my country has achieved new research breakthroughs in direct hydrogen production from seawater)](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%9B%BD%E6%B5%B7%E6%B0%B4%E7%9B%B4%E6%8E%A5%E5%88%B6%E6%B0%A2%E5%8F%96%E5%BE%97%E7%A0%94%E7%A9%B6%E6%96%B0%E7%AA%81%E7%A0%B4%23) `595.3K 🔥` `+37%`
1. [李小冉拉王濛起来被甩开](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B0%8F%E5%86%89%E6%8B%89%E7%8E%8B%E6%BF%9B%E8%B5%B7%E6%9D%A5%E8%A2%AB%E7%94%A9%E5%BC%80%23) `574.8K 🔥` `+64%`
1. [各方同意以伊方十点方案为谈判基础 (All parties agreed to use Iran's ten-point plan as the basis for negotiations)](https://s.weibo.com/weibo?q=%23%E5%90%84%E6%96%B9%E5%90%8C%E6%84%8F%E4%BB%A5%E4%BC%8A%E6%96%B9%E5%8D%81%E7%82%B9%E6%96%B9%E6%A1%88%E4%B8%BA%E8%B0%88%E5%88%A4%E5%9F%BA%E7%A1%80%23) `401.4K 🔥` `+118%`
1. [芒果居然想让孙怡宣布赵子琪淘汰](https://s.weibo.com/weibo?q=%23%E8%8A%92%E6%9E%9C%E5%B1%85%E7%84%B6%E6%83%B3%E8%AE%A9%E5%AD%99%E6%80%A1%E5%AE%A3%E5%B8%83%E8%B5%B5%E5%AD%90%E7%90%AA%E6%B7%98%E6%B1%B0%23) `378.0K 🔥` `+345%`
1. [婴儿出生9斤一个月瘦到7斤](https://s.weibo.com/weibo?q=%23%E5%A9%B4%E5%84%BF%E5%87%BA%E7%94%9F9%E6%96%A4%E4%B8%80%E4%B8%AA%E6%9C%88%E7%98%A6%E5%88%B07%E6%96%A4%23) `172.0K 🔥` `+21%`
1. [以军在教室开枪打死9岁加沙女孩](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E5%86%9B%E5%9C%A8%E6%95%99%E5%AE%A4%E5%BC%80%E6%9E%AA%E6%89%93%E6%AD%BB9%E5%B2%81%E5%8A%A0%E6%B2%99%E5%A5%B3%E5%AD%A9%23) `92.2K 🔥` `+124%`
1. [交警回应私家车遭运钞车别车 (Traffic police responded to a private car being intercepted by a cash transport truck)](https://s.weibo.com/weibo?q=%23%E4%BA%A4%E8%AD%A6%E5%9B%9E%E5%BA%94%E7%A7%81%E5%AE%B6%E8%BD%A6%E9%81%AD%E8%BF%90%E9%92%9E%E8%BD%A6%E5%88%AB%E8%BD%A6%23) `88.7K 🔥` `+23%`
1. [赵丽颖工作室疑似表达对捆绑的不满 (Zhao Liying's studio seems to express dissatisfaction with bundling)](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%B8%BD%E9%A2%96%E5%B7%A5%E4%BD%9C%E5%AE%A4%E7%96%91%E4%BC%BC%E8%A1%A8%E8%BE%BE%E5%AF%B9%E6%8D%86%E7%BB%91%E7%9A%84%E4%B8%8D%E6%BB%A1%23) `69.2K 🔥` `+31%`
1. [黄瓜拌菠萝火了](https://s.weibo.com/weibo?q=%23%E9%BB%84%E7%93%9C%E6%8B%8C%E8%8F%A0%E8%90%9D%E7%81%AB%E4%BA%86%23) `57.9K 🔥` `+27%`
1. [21世纪大君夫人](https://s.weibo.com/weibo?q=%2321%E4%B8%96%E7%BA%AA%E5%A4%A7%E5%90%9B%E5%A4%AB%E4%BA%BA%23) `53.4K 🔥` `+36%`
1. [中国科学家揭示左撇子真相](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%A7%91%E5%AD%A6%E5%AE%B6%E6%8F%AD%E7%A4%BA%E5%B7%A6%E6%92%87%E5%AD%90%E7%9C%9F%E7%9B%B8%23) `114.9K 🔥`
1. [美伊今天在巴基斯坦谈判 (The United States and Iran negotiate in Pakistan today)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E4%BC%8A%E4%BB%8A%E5%A4%A9%E5%9C%A8%E5%B7%B4%E5%9F%BA%E6%96%AF%E5%9D%A6%E8%B0%88%E5%88%A4%23) `95.8K 🔥`
1. [饭圈乱象成影响体育事业的重大风险](https://s.weibo.com/weibo?q=%23%E9%A5%AD%E5%9C%88%E4%B9%B1%E8%B1%A1%E6%88%90%E5%BD%B1%E5%93%8D%E4%BD%93%E8%82%B2%E4%BA%8B%E4%B8%9A%E7%9A%84%E9%87%8D%E5%A4%A7%E9%A3%8E%E9%99%A9%23) `95.7K 🔥`
1. [网友提醒刘芸注意儿子内八问题](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%8F%8B%E6%8F%90%E9%86%92%E5%88%98%E8%8A%B8%E6%B3%A8%E6%84%8F%E5%84%BF%E5%AD%90%E5%86%85%E5%85%AB%E9%97%AE%E9%A2%98%23) `94.5K 🔥`
1. [夸克 海外剧 (Quark overseas drama)](https://s.weibo.com/weibo?q=%23%E5%A4%B8%E5%85%8B%20%E6%B5%B7%E5%A4%96%E5%89%A7%23) `92.9K 🔥`
1. [美国海滩连环命案华人男尸身着女装 (The body of a Chinese man killed in serial murders on an American beach was dressed in women's clothing)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E6%B5%B7%E6%BB%A9%E8%BF%9E%E7%8E%AF%E5%91%BD%E6%A1%88%E5%8D%8E%E4%BA%BA%E7%94%B7%E5%B0%B8%E8%BA%AB%E7%9D%80%E5%A5%B3%E8%A3%85%23) `80.7K 🔥`
1. [孙怡爆哭 (Sun Yi burst into tears)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%80%A1%E7%88%86%E5%93%AD%23) `80.1K 🔥`
1. [这个酷似感冒的病进入高发季](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%B8%AA%E9%85%B7%E4%BC%BC%E6%84%9F%E5%86%92%E7%9A%84%E7%97%85%E8%BF%9B%E5%85%A5%E9%AB%98%E5%8F%91%E5%AD%A3%23) `70.6K 🔥`
1. [魏大勋胡先煦十日终焉开机照](https://s.weibo.com/weibo?q=%23%E9%AD%8F%E5%A4%A7%E5%8B%8B%E8%83%A1%E5%85%88%E7%85%A6%E5%8D%81%E6%97%A5%E7%BB%88%E7%84%89%E5%BC%80%E6%9C%BA%E7%85%A7%23) `60.6K 🔥`
1. [张雪机车拍卖98次出价记录 (Zhang Xue's motorcycle auction record of 98 bids)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%E6%8B%8D%E5%8D%9698%E6%AC%A1%E5%87%BA%E4%BB%B7%E8%AE%B0%E5%BD%95%23) `56.0K 🔥`
1. [阚清子团选择曾沛慈团 (Kan Qingzi’s group chose Zeng Peici’s group)](https://s.weibo.com/weibo?q=%23%E9%98%9A%E6%B8%85%E5%AD%90%E5%9B%A2%E9%80%89%E6%8B%A9%E6%9B%BE%E6%B2%9B%E6%85%88%E5%9B%A2%23) `47.8K 🔥`
1. [伦敦世乒赛种子位参赛名单 (London World Table Tennis Championships seed list)](https://s.weibo.com/weibo?q=%23%E4%BC%A6%E6%95%A6%E4%B8%96%E4%B9%92%E8%B5%9B%E7%A7%8D%E5%AD%90%E4%BD%8D%E5%8F%82%E8%B5%9B%E5%90%8D%E5%8D%95%23) `43.3K 🔥`
1. [张雪请李亚鹏监督捐款用在孩子身上](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E8%AF%B7%E6%9D%8E%E4%BA%9A%E9%B9%8F%E7%9B%91%E7%9D%A3%E6%8D%90%E6%AC%BE%E7%94%A8%E5%9C%A8%E5%AD%A9%E5%AD%90%E8%BA%AB%E4%B8%8A%23) `43.1K 🔥`
1. [警方通报父母离婚不接年幼乘客 (Police report parents' divorce and refuse to pick up young passengers)](https://s.weibo.com/weibo?q=%23%E8%AD%A6%E6%96%B9%E9%80%9A%E6%8A%A5%E7%88%B6%E6%AF%8D%E7%A6%BB%E5%A9%9A%E4%B8%8D%E6%8E%A5%E5%B9%B4%E5%B9%BC%E4%B9%98%E5%AE%A2%23) `43.1K 🔥`
1. [刘浩存中国电影盛典舞蹈](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%B5%A9%E5%AD%98%E4%B8%AD%E5%9B%BD%E7%94%B5%E5%BD%B1%E7%9B%9B%E5%85%B8%E8%88%9E%E8%B9%88%23) `42.1K 🔥`
1. [张凌赫新剧这一秒过火路透](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E6%96%B0%E5%89%A7%E8%BF%99%E4%B8%80%E7%A7%92%E8%BF%87%E7%81%AB%E8%B7%AF%E9%80%8F%23) `41.8K 🔥`
1. [冰湖重生官微删博](https://s.weibo.com/weibo?q=%23%E5%86%B0%E6%B9%96%E9%87%8D%E7%94%9F%E5%AE%98%E5%BE%AE%E5%88%A0%E5%8D%9A%23) `40.8K 🔥`
1. [华为Pura90系列配色 (Huawei Pura90 series color matching)](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BAPura90%E7%B3%BB%E5%88%97%E9%85%8D%E8%89%B2%23) `40.8K 🔥`
1. [温峥嵘 (Wen Zhengrong)](https://s.weibo.com/weibo?q=%23%E6%B8%A9%E5%B3%A5%E5%B5%98%23) `90.6K 🔥` `-45%`
1. [网红一栗小莎子因癌症剃光头 (Internet celebrity Yili Xiaoshazi shaves her head due to cancer)](https://s.weibo.com/weibo?q=%23%E7%BD%91%E7%BA%A2%E4%B8%80%E6%A0%97%E5%B0%8F%E8%8E%8E%E5%AD%90%E5%9B%A0%E7%99%8C%E7%97%87%E5%89%83%E5%85%89%E5%A4%B4%23) `77.2K 🔥` `-56%`
1. [周杰伦方回应演唱会划水 (Jay Chou responded to the concert)](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%9D%B0%E4%BC%A6%E6%96%B9%E5%9B%9E%E5%BA%94%E6%BC%94%E5%94%B1%E4%BC%9A%E5%88%92%E6%B0%B4%23) `74.2K 🔥` `-21%`
1. [被害女医学生母亲频繁吐血 (The mother of the murdered female medical student frequently vomited blood)](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E5%AE%B3%E5%A5%B3%E5%8C%BB%E5%AD%A6%E7%94%9F%E6%AF%8D%E4%BA%B2%E9%A2%91%E7%B9%81%E5%90%90%E8%A1%80%23) `61.8K 🔥` `-29%`
1. [浪姐排名 (Sister Lang ranking)](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E6%8E%92%E5%90%8D%23) `50.9K 🔥` `-41%`

Updated at 2026-04-11 07:59:52

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
