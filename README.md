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

1. [何赛飞怒批姜贞羽 (He Saifei angrily criticized Jiang Zhenyu)](https://s.weibo.com/weibo?q=%23%E4%BD%95%E8%B5%9B%E9%A3%9E%E6%80%92%E6%89%B9%E5%A7%9C%E8%B4%9E%E7%BE%BD%23) `712.5K 🔥` `NEW`
1. [金高银造型师的ins我笑不行了](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%AB%98%E9%93%B6%E9%80%A0%E5%9E%8B%E5%B8%88%E7%9A%84ins%E6%88%91%E7%AC%91%E4%B8%8D%E8%A1%8C%E4%BA%86%23) `381.3K 🔥` `NEW`
1. [陈赫 谁能欺负李晨](https://s.weibo.com/weibo?q=%23%E9%99%88%E8%B5%AB%20%E8%B0%81%E8%83%BD%E6%AC%BA%E8%B4%9F%E6%9D%8E%E6%99%A8%23) `372.4K 🔥` `NEW`
1. [陈奕恒 下班](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%A5%95%E6%81%92%20%E4%B8%8B%E7%8F%AD%23) `345.6K 🔥` `NEW`
1. [SK海力士今年人均奖金或320万](https://s.weibo.com/weibo?q=%23SK%E6%B5%B7%E5%8A%9B%E5%A3%AB%E4%BB%8A%E5%B9%B4%E4%BA%BA%E5%9D%87%E5%A5%96%E9%87%91%E6%88%96320%E4%B8%87%23) `279.2K 🔥` `NEW`
1. [村民大蒜几乎绝收质疑浇污水所致](https://s.weibo.com/weibo?q=%23%E6%9D%91%E6%B0%91%E5%A4%A7%E8%92%9C%E5%87%A0%E4%B9%8E%E7%BB%9D%E6%94%B6%E8%B4%A8%E7%96%91%E6%B5%87%E6%B1%A1%E6%B0%B4%E6%89%80%E8%87%B4%23) `278.8K 🔥` `NEW`
1. [陈翔六点半吴妈因病去世](https://s.weibo.com/weibo?q=%23%E9%99%88%E7%BF%94%E5%85%AD%E7%82%B9%E5%8D%8A%E5%90%B4%E5%A6%88%E5%9B%A0%E7%97%85%E5%8E%BB%E4%B8%96%23) `278.8K 🔥` `NEW`
1. [孙颖莎逗笑邱贻可马琳](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E9%80%97%E7%AC%91%E9%82%B1%E8%B4%BB%E5%8F%AF%E9%A9%AC%E7%90%B3%23) `244.6K 🔥` `NEW`
1. [浏阳爆炸烟花厂黑火药库现状](https://s.weibo.com/weibo?q=%23%E6%B5%8F%E9%98%B3%E7%88%86%E7%82%B8%E7%83%9F%E8%8A%B1%E5%8E%82%E9%BB%91%E7%81%AB%E8%8D%AF%E5%BA%93%E7%8E%B0%E7%8A%B6%23) `211.9K 🔥` `NEW`
1. [广东一沃尔玛售卖的内裤疑似有虫卵](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E4%B8%9C%E4%B8%80%E6%B2%83%E5%B0%94%E7%8E%9B%E5%94%AE%E5%8D%96%E7%9A%84%E5%86%85%E8%A3%A4%E7%96%91%E4%BC%BC%E6%9C%89%E8%99%AB%E5%8D%B5%23) `189.3K 🔥` `NEW`
1. [浪姐歌手邪恶栀子花大战菠萝菠萝蜜 (Lang Jie singer evil gardenia vs. pineapple and jackfruit)](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E6%AD%8C%E6%89%8B%E9%82%AA%E6%81%B6%E6%A0%80%E5%AD%90%E8%8A%B1%E5%A4%A7%E6%88%98%E8%8F%A0%E8%90%9D%E8%8F%A0%E8%90%9D%E8%9C%9C%23) `175.6K 🔥` `NEW`
1. [浪7三公是浪姐史上浓墨重彩的一笔](https://s.weibo.com/weibo?q=%23%E6%B5%AA7%E4%B8%89%E5%85%AC%E6%98%AF%E6%B5%AA%E5%A7%90%E5%8F%B2%E4%B8%8A%E6%B5%93%E5%A2%A8%E9%87%8D%E5%BD%A9%E7%9A%84%E4%B8%80%E7%AC%94%23) `170.3K 🔥` `NEW`
1. [煎饼夏天 enemy](https://s.weibo.com/weibo?q=%23%E7%85%8E%E9%A5%BC%E5%A4%8F%E5%A4%A9%20enemy%23) `168.9K 🔥` `NEW`
1. [姜涩琪腹部训练](https://s.weibo.com/weibo?q=%23%E5%A7%9C%E6%B6%A9%E7%90%AA%E8%85%B9%E9%83%A8%E8%AE%AD%E7%BB%83%23) `165.2K 🔥` `NEW`
1. [丈夫背叛女子哭晕妹妹套塑料袋急救](https://s.weibo.com/weibo?q=%23%E4%B8%88%E5%A4%AB%E8%83%8C%E5%8F%9B%E5%A5%B3%E5%AD%90%E5%93%AD%E6%99%95%E5%A6%B9%E5%A6%B9%E5%A5%97%E5%A1%91%E6%96%99%E8%A2%8B%E6%80%A5%E6%95%91%23) `161.2K 🔥` `NEW`
1. [森林北否认与汪峰分手 (Forest North denies breaking up with Wang Feng)](https://s.weibo.com/weibo?q=%23%E6%A3%AE%E6%9E%97%E5%8C%97%E5%90%A6%E8%AE%A4%E4%B8%8E%E6%B1%AA%E5%B3%B0%E5%88%86%E6%89%8B%23) `373.2K 🔥` `+101%`
1. [女子打水光针后吃小龙虾满脸肉芽肿 (Woman's face is covered with granulomas after eating crayfish after taking water-light injections)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%89%93%E6%B0%B4%E5%85%89%E9%92%88%E5%90%8E%E5%90%83%E5%B0%8F%E9%BE%99%E8%99%BE%E6%BB%A1%E8%84%B8%E8%82%89%E8%8A%BD%E8%82%BF%23) `310.4K 🔥` `+58%`
1. [国际足联急了 (FIFA is anxious)](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E9%99%85%E8%B6%B3%E8%81%94%E6%80%A5%E4%BA%86%23) `960.3K 🔥`
1. [千问眼镜主动智能全球首发 (Qianwen Glasses’ Active Smart World Premiere)](https://s.weibo.com/weibo?q=%23%E5%8D%83%E9%97%AE%E7%9C%BC%E9%95%9C%E4%B8%BB%E5%8A%A8%E6%99%BA%E8%83%BD%E5%85%A8%E7%90%83%E9%A6%96%E5%8F%91%23) `650.1K 🔥`
1. [越来越理解什么叫事缓则圆](https://s.weibo.com/weibo?q=%23%E8%B6%8A%E6%9D%A5%E8%B6%8A%E7%90%86%E8%A7%A3%E4%BB%80%E4%B9%88%E5%8F%AB%E4%BA%8B%E7%BC%93%E5%88%99%E5%9C%86%23) `600.9K 🔥`
1. [21世纪大君夫人](https://s.weibo.com/weibo?q=%2321%E4%B8%96%E7%BA%AA%E5%A4%A7%E5%90%9B%E5%A4%AB%E4%BA%BA%23) `467.5K 🔥`
1. [美国女子做特殊癖好服务致对方身亡](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E5%A5%B3%E5%AD%90%E5%81%9A%E7%89%B9%E6%AE%8A%E7%99%96%E5%A5%BD%E6%9C%8D%E5%8A%A1%E8%87%B4%E5%AF%B9%E6%96%B9%E8%BA%AB%E4%BA%A1%23) `380.0K 🔥`
1. [郑钦文vs奥斯塔彭科](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87vs%E5%A5%A5%E6%96%AF%E5%A1%94%E5%BD%AD%E7%A7%91%23) `376.2K 🔥`
1. [夸克TV崩了](https://s.weibo.com/weibo?q=%23%E5%A4%B8%E5%85%8BTV%E5%B4%A9%E4%BA%86%23) `373.4K 🔥`
1. [周深五月天合唱 (Zhou Shen Mayday Chorus)](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%B7%B1%E4%BA%94%E6%9C%88%E5%A4%A9%E5%90%88%E5%94%B1%23) `289.1K 🔥`
1. [赵丽颖好超前的女本位思维](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%B8%BD%E9%A2%96%E5%A5%BD%E8%B6%85%E5%89%8D%E7%9A%84%E5%A5%B3%E6%9C%AC%E4%BD%8D%E6%80%9D%E7%BB%B4%23) `216.9K 🔥`
1. [田曦薇后援会发了左航安利](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E5%90%8E%E6%8F%B4%E4%BC%9A%E5%8F%91%E4%BA%86%E5%B7%A6%E8%88%AA%E5%AE%89%E5%88%A9%23) `214.8K 🔥`
1. [孙颖莎甜妹攻击](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E7%94%9C%E5%A6%B9%E6%94%BB%E5%87%BB%23) `203.6K 🔥`
1. [一家三口候车室吃东西垃圾扔满地 (A family of three eats food and litters the floor in the waiting room)](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%AE%B6%E4%B8%89%E5%8F%A3%E5%80%99%E8%BD%A6%E5%AE%A4%E5%90%83%E4%B8%9C%E8%A5%BF%E5%9E%83%E5%9C%BE%E6%89%94%E6%BB%A1%E5%9C%B0%23) `169.9K 🔥`
1. [赖清德跪拜日本殖民者 (Lai Ching-te knelt down to worship the Japanese colonizers)](https://s.weibo.com/weibo?q=%23%E8%B5%96%E6%B8%85%E5%BE%B7%E8%B7%AA%E6%8B%9C%E6%97%A5%E6%9C%AC%E6%AE%96%E6%B0%91%E8%80%85%23) `163.9K 🔥`
1. [俄罗斯红场阅兵全场高呼乌拉](https://s.weibo.com/weibo?q=%23%E4%BF%84%E7%BD%97%E6%96%AF%E7%BA%A2%E5%9C%BA%E9%98%85%E5%85%B5%E5%85%A8%E5%9C%BA%E9%AB%98%E5%91%BC%E4%B9%8C%E6%8B%89%23) `162.0K 🔥`
1. [市场人士回应DeepSeek阿里谈崩](https://s.weibo.com/weibo?q=%23%E5%B8%82%E5%9C%BA%E4%BA%BA%E5%A3%AB%E5%9B%9E%E5%BA%94DeepSeek%E9%98%BF%E9%87%8C%E8%B0%88%E5%B4%A9%23) `159.2K 🔥`
1. [跑男收视率 浪姐没播](https://s.weibo.com/weibo?q=%23%E8%B7%91%E7%94%B7%E6%94%B6%E8%A7%86%E7%8E%87%20%E6%B5%AA%E5%A7%90%E6%B2%A1%E6%92%AD%23) `2.0M 🔥` `-25%`
1. [太空快递跑出中国加速度 (Space express runs out of China and accelerates)](https://s.weibo.com/weibo?q=%23%E5%A4%AA%E7%A9%BA%E5%BF%AB%E9%80%92%E8%B7%91%E5%87%BA%E4%B8%AD%E5%9B%BD%E5%8A%A0%E9%80%9F%E5%BA%A6%23) `755.1K 🔥` `-29%`
1. [怪不得虫子总围着头顶飞](https://s.weibo.com/weibo?q=%23%E6%80%AA%E4%B8%8D%E5%BE%97%E8%99%AB%E5%AD%90%E6%80%BB%E5%9B%B4%E7%9D%80%E5%A4%B4%E9%A1%B6%E9%A3%9E%23) `712.3K 🔥` `-30%`
1. [广东男篮绝杀 (Guangdong Men’s Basketball Team’s Defeat)](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E4%B8%9C%E7%94%B7%E7%AF%AE%E7%BB%9D%E6%9D%80%23) `664.0K 🔥` `-24%`
1. [显微镜下的辣条](https://s.weibo.com/weibo?q=%23%E6%98%BE%E5%BE%AE%E9%95%9C%E4%B8%8B%E7%9A%84%E8%BE%A3%E6%9D%A1%23) `451.5K 🔥` `-25%`
1. [女儿的100个橡皮 (My daughter’s 100 erasers)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%84%BF%E7%9A%84100%E4%B8%AA%E6%A9%A1%E7%9A%AE%23) `382.7K 🔥` `-33%`
1. [关晓彤终于遇到了有身高差的男主 (Guan Xiaotong finally met a male protagonist with a height difference)](https://s.weibo.com/weibo?q=%23%E5%85%B3%E6%99%93%E5%BD%A4%E7%BB%88%E4%BA%8E%E9%81%87%E5%88%B0%E4%BA%86%E6%9C%89%E8%BA%AB%E9%AB%98%E5%B7%AE%E7%9A%84%E7%94%B7%E4%B8%BB%23) `382.6K 🔥` `-64%`
1. [29岁未婚育女子宫颈癌离世](https://s.weibo.com/weibo?q=%2329%E5%B2%81%E6%9C%AA%E5%A9%9A%E8%82%B2%E5%A5%B3%E5%AD%90%E5%AE%AB%E9%A2%88%E7%99%8C%E7%A6%BB%E4%B8%96%23) `382.1K 🔥` `-30%`
1. [疑似加到了孙怡本人的QQ (Suspected to have been added to Sun Yi’s QQ)](https://s.weibo.com/weibo?q=%23%E7%96%91%E4%BC%BC%E5%8A%A0%E5%88%B0%E4%BA%86%E5%AD%99%E6%80%A1%E6%9C%AC%E4%BA%BA%E7%9A%84QQ%23) `381.7K 🔥` `-30%`
1. [香港富豪孙女被绑架案细节披露](https://s.weibo.com/weibo?q=%23%E9%A6%99%E6%B8%AF%E5%AF%8C%E8%B1%AA%E5%AD%99%E5%A5%B3%E8%A2%AB%E7%BB%91%E6%9E%B6%E6%A1%88%E7%BB%86%E8%8A%82%E6%8A%AB%E9%9C%B2%23) `380.8K 🔥` `-21%`
1. [浪姐48来了](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%9048%E6%9D%A5%E4%BA%86%23) `379.9K 🔥` `-39%`
1. [首尔偶遇田曦薇](https://s.weibo.com/weibo?q=%23%E9%A6%96%E5%B0%94%E5%81%B6%E9%81%87%E7%94%B0%E6%9B%A6%E8%96%87%23) `376.1K 🔥` `-25%`
1. [安倍晋三遗孀陪赖清德跪日本人](https://s.weibo.com/weibo?q=%23%E5%AE%89%E5%80%8D%E6%99%8B%E4%B8%89%E9%81%97%E5%AD%80%E9%99%AA%E8%B5%96%E6%B8%85%E5%BE%B7%E8%B7%AA%E6%97%A5%E6%9C%AC%E4%BA%BA%23) `371.7K 🔥` `-32%`
1. [尼坤发福](https://s.weibo.com/weibo?q=%23%E5%B0%BC%E5%9D%A4%E5%8F%91%E7%A6%8F%23) `371.0K 🔥` `-31%`
1. [森林北配文家里的草都绿了吗](https://s.weibo.com/weibo?q=%23%E6%A3%AE%E6%9E%97%E5%8C%97%E9%85%8D%E6%96%87%E5%AE%B6%E9%87%8C%E7%9A%84%E8%8D%89%E9%83%BD%E7%BB%BF%E4%BA%86%E5%90%97%23) `279.2K 🔥` `-32%`
1. [给阿嬷的情书票房破亿 (A Love Letter to Grandma grossed over 100 million at the box office)](https://s.weibo.com/weibo?q=%23%E7%BB%99%E9%98%BF%E5%AC%B7%E7%9A%84%E6%83%85%E4%B9%A6%E7%A5%A8%E6%88%BF%E7%A0%B4%E4%BA%BF%23) `265.0K 🔥` `-28%`
1. [国乒女团晋级决赛](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%E5%A5%B3%E5%9B%A2%E6%99%8B%E7%BA%A7%E5%86%B3%E8%B5%9B%23) `207.3K 🔥` `-46%`
1. [苏超 (Su Chao)](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E8%B6%85%23) `194.4K 🔥` `-24%`
1. [伦敦世乒赛半决赛](https://s.weibo.com/weibo?q=%23%E4%BC%A6%E6%95%A6%E4%B8%96%E4%B9%92%E8%B5%9B%E5%8D%8A%E5%86%B3%E8%B5%9B%23) `184.9K 🔥` `-54%`

Updated at 2026-05-09 23:35:14

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
