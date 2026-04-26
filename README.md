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

1. [丁俊晖vs赵心童 (Ding Junhui vs Zhao Xintong)](https://s.weibo.com/weibo?q=%23%E4%B8%81%E4%BF%8A%E6%99%96vs%E8%B5%B5%E5%BF%83%E7%AB%A5%23) `488.3K 🔥` `NEW`
1. [DeepSeek多位核心骨干离职去大厂](https://s.weibo.com/weibo?q=%23DeepSeek%E5%A4%9A%E4%BD%8D%E6%A0%B8%E5%BF%83%E9%AA%A8%E5%B9%B2%E7%A6%BB%E8%81%8C%E5%8E%BB%E5%A4%A7%E5%8E%82%23) `443.7K 🔥` `NEW`
1. [小麦道歉](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E9%BA%A6%E9%81%93%E6%AD%89%23) `291.5K 🔥` `NEW`
1. [95后靠3D打印月赚10万元](https://s.weibo.com/weibo?q=%2395%E5%90%8E%E9%9D%A03D%E6%89%93%E5%8D%B0%E6%9C%88%E8%B5%9A10%E4%B8%87%E5%85%83%23) `288.6K 🔥` `NEW`
1. [巴基斯坦总统访华现场画面](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E5%9F%BA%E6%96%AF%E5%9D%A6%E6%80%BB%E7%BB%9F%E8%AE%BF%E5%8D%8E%E7%8E%B0%E5%9C%BA%E7%94%BB%E9%9D%A2%23) `288.1K 🔥` `NEW`
1. [张凯丽女儿出道9年第一次拍吻戏](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%AF%E4%B8%BD%E5%A5%B3%E5%84%BF%E5%87%BA%E9%81%939%E5%B9%B4%E7%AC%AC%E4%B8%80%E6%AC%A1%E6%8B%8D%E5%90%BB%E6%88%8F%23) `287.8K 🔥` `NEW`
1. [人类全马首次跑进2小时](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E7%B1%BB%E5%85%A8%E9%A9%AC%E9%A6%96%E6%AC%A1%E8%B7%91%E8%BF%9B2%E5%B0%8F%E6%97%B6%23) `285.0K 🔥` `NEW`
1. [一笙后援会集体辞职](https://s.weibo.com/weibo?q=%23%E4%B8%80%E7%AC%99%E5%90%8E%E6%8F%B4%E4%BC%9A%E9%9B%86%E4%BD%93%E8%BE%9E%E8%81%8C%23) `251.6K 🔥` `NEW`
1. [伦敦马拉松萨维创造人类奇迹](https://s.weibo.com/weibo?q=%23%E4%BC%A6%E6%95%A6%E9%A9%AC%E6%8B%89%E6%9D%BE%E8%90%A8%E7%BB%B4%E5%88%9B%E9%80%A0%E4%BA%BA%E7%B1%BB%E5%A5%87%E8%BF%B9%23) `202.1K 🔥` `NEW`
1. [一笙上线](https://s.weibo.com/weibo?q=%23%E4%B8%80%E7%AC%99%E4%B8%8A%E7%BA%BF%23) `156.9K 🔥` `NEW`
1. [人类马拉松破二 (Human marathon breaks second)](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E7%B1%BB%E9%A9%AC%E6%8B%89%E6%9D%BE%E7%A0%B4%E4%BA%8C%23) `2.3M 🔥` `+114%`
1. [集体离职撕开东方甄选内部乱象 (Collective resignations opened up internal chaos at Oriental Selection)](https://s.weibo.com/weibo?q=%23%E9%9B%86%E4%BD%93%E7%A6%BB%E8%81%8C%E6%92%95%E5%BC%80%E4%B8%9C%E6%96%B9%E7%94%84%E9%80%89%E5%86%85%E9%83%A8%E4%B9%B1%E8%B1%A1%23) `962.9K 🔥` `+22%`
1. [地铁抢座互殴32岁和66岁谁该罚](https://s.weibo.com/weibo?q=%23%E5%9C%B0%E9%93%81%E6%8A%A2%E5%BA%A7%E4%BA%92%E6%AE%B432%E5%B2%81%E5%92%8C66%E5%B2%81%E8%B0%81%E8%AF%A5%E7%BD%9A%23) `290.5K 🔥` `+78%`
1. [狗狗脚脱臼了医患双方都很紧张](https://s.weibo.com/weibo?q=%23%E7%8B%97%E7%8B%97%E8%84%9A%E8%84%B1%E8%87%BC%E4%BA%86%E5%8C%BB%E6%82%A3%E5%8F%8C%E6%96%B9%E9%83%BD%E5%BE%88%E7%B4%A7%E5%BC%A0%23) `289.6K 🔥` `+39%`
1. [官员诱骗未成年人吸毒是现代版的杀良冒功 (Officials tricking minors into taking drugs is a modern version of killing a good person and claiming merit.)](https://s.weibo.com/weibo?q=%23%E5%AE%98%E5%91%98%E8%AF%B1%E9%AA%97%E6%9C%AA%E6%88%90%E5%B9%B4%E4%BA%BA%E5%90%B8%E6%AF%92%E6%98%AF%E7%8E%B0%E4%BB%A3%E7%89%88%E7%9A%84%E6%9D%80%E8%89%AF%E5%86%92%E5%8A%9F%23) `209.9K 🔥` `+32%`
1. [守护创新的力量 (Protect the power of innovation)](https://s.weibo.com/weibo?q=%23%E5%AE%88%E6%8A%A4%E5%88%9B%E6%96%B0%E7%9A%84%E5%8A%9B%E9%87%8F%23) `788.5K 🔥`
1. [仙逆](https://s.weibo.com/weibo?q=%23%E4%BB%99%E9%80%86%23) `291.2K 🔥`
1. [唐艺昕 何宣林](https://s.weibo.com/weibo?q=%23%E5%94%90%E8%89%BA%E6%98%95%20%E4%BD%95%E5%AE%A3%E6%9E%97%23) `290.9K 🔥`
1. [张小斐 没有讨好感的眼神和动作](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%B0%8F%E6%96%90%20%E6%B2%A1%E6%9C%89%E8%AE%A8%E5%A5%BD%E6%84%9F%E7%9A%84%E7%9C%BC%E7%A5%9E%E5%92%8C%E5%8A%A8%E4%BD%9C%23) `289.0K 🔥`
1. [魏笑结婚](https://s.weibo.com/weibo?q=%23%E9%AD%8F%E7%AC%91%E7%BB%93%E5%A9%9A%23) `287.4K 🔥`
1. [浪姐节目组对王濛彻底没招了 (The program team of Sister Lang has completely lost their grip on Wang Meng)](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E8%8A%82%E7%9B%AE%E7%BB%84%E5%AF%B9%E7%8E%8B%E6%BF%9B%E5%BD%BB%E5%BA%95%E6%B2%A1%E6%8B%9B%E4%BA%86%23) `287.1K 🔥`
1. [曝顶流女明星帮富婆闺蜜找男网红 (A top female celebrity is revealed to be helping a rich woman’s best friend find a male internet celebrity)](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E9%A1%B6%E6%B5%81%E5%A5%B3%E6%98%8E%E6%98%9F%E5%B8%AE%E5%AF%8C%E5%A9%86%E9%97%BA%E8%9C%9C%E6%89%BE%E7%94%B7%E7%BD%91%E7%BA%A2%23) `283.1K 🔥`
1. [阚清子老公投到第二就不投了](https://s.weibo.com/weibo?q=%23%E9%98%9A%E6%B8%85%E5%AD%90%E8%80%81%E5%85%AC%E6%8A%95%E5%88%B0%E7%AC%AC%E4%BA%8C%E5%B0%B1%E4%B8%8D%E6%8A%95%E4%BA%86%23) `201.0K 🔥`
1. [王鹤棣演技](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%B9%A4%E6%A3%A3%E6%BC%94%E6%8A%80%23) `189.7K 🔥`
1. [阚清子老公行事体面](https://s.weibo.com/weibo?q=%23%E9%98%9A%E6%B8%85%E5%AD%90%E8%80%81%E5%85%AC%E8%A1%8C%E4%BA%8B%E4%BD%93%E9%9D%A2%23) `159.9K 🔥`
1. [云旗 最重要的是你们啊 (Yun Qi, the most important thing is you.)](https://s.weibo.com/weibo?q=%23%E4%BA%91%E6%97%97%20%E6%9C%80%E9%87%8D%E8%A6%81%E7%9A%84%E6%98%AF%E4%BD%A0%E4%BB%AC%E5%95%8A%23) `140.7K 🔥`
1. [伊朗提出新条件](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%8F%90%E5%87%BA%E6%96%B0%E6%9D%A1%E4%BB%B6%23) `117.0K 🔥`
1. [周也公主切](https://s.weibo.com/weibo?q=%23%E5%91%A8%E4%B9%9F%E5%85%AC%E4%B8%BB%E5%88%87%23) `105.4K 🔥`
1. [三鲜豆皮](https://s.weibo.com/weibo?q=%23%E4%B8%89%E9%B2%9C%E8%B1%86%E7%9A%AE%23) `360.8K 🔥` `-37%`
1. [提质焕新 红旗为用户造好车](https://s.weibo.com/weibo?q=%23%E6%8F%90%E8%B4%A8%E7%84%95%E6%96%B0%20%E7%BA%A2%E6%97%97%E4%B8%BA%E7%94%A8%E6%88%B7%E9%80%A0%E5%A5%BD%E8%BD%A6%23) `345.7K 🔥` `-44%`
1. [老祖宗不愿带回来的食物一定难吃](https://s.weibo.com/weibo?q=%23%E8%80%81%E7%A5%96%E5%AE%97%E4%B8%8D%E6%84%BF%E5%B8%A6%E5%9B%9E%E6%9D%A5%E7%9A%84%E9%A3%9F%E7%89%A9%E4%B8%80%E5%AE%9A%E9%9A%BE%E5%90%83%23) `291.9K 🔥` `-27%`
1. [伦敦马拉松](https://s.weibo.com/weibo?q=%23%E4%BC%A6%E6%95%A6%E9%A9%AC%E6%8B%89%E6%9D%BE%23) `291.8K 🔥` `-59%`
1. [王濛手臂图案](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BF%9B%E6%89%8B%E8%87%82%E5%9B%BE%E6%A1%88%23) `290.3K 🔥` `-76%`
1. [迪丽热巴跑男只录了12天](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E8%B7%91%E7%94%B7%E5%8F%AA%E5%BD%95%E4%BA%8612%E5%A4%A9%23) `289.8K 🔥` `-47%`
1. [井柏然 老人味太重](https://s.weibo.com/weibo?q=%23%E4%BA%95%E6%9F%8F%E7%84%B6%20%E8%80%81%E4%BA%BA%E5%91%B3%E5%A4%AA%E9%87%8D%23) `289.4K 🔥` `-47%`
1. [美国网友质疑为什么先救万斯 (American netizens questioned why Vance was saved first)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E7%BD%91%E5%8F%8B%E8%B4%A8%E7%96%91%E4%B8%BA%E4%BB%80%E4%B9%88%E5%85%88%E6%95%91%E4%B8%87%E6%96%AF%23) `288.6K 🔥` `-47%`
1. [TCG淘汰WB (TCG eliminates WB)](https://s.weibo.com/weibo?q=%23TCG%E6%B7%98%E6%B1%B0WB%23) `287.1K 🔥` `-48%`
1. [女子不知怀孕医院上厕所时生二胎 (Woman didn't know she was pregnant, gave birth to second child while using hospital toilet)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E4%B8%8D%E7%9F%A5%E6%80%80%E5%AD%95%E5%8C%BB%E9%99%A2%E4%B8%8A%E5%8E%95%E6%89%80%E6%97%B6%E7%94%9F%E4%BA%8C%E8%83%8E%23) `279.4K 🔥` `-31%`
1. [余承东检讨称以前做车不重视外观](https://s.weibo.com/weibo?q=%23%E4%BD%99%E6%89%BF%E4%B8%9C%E6%A3%80%E8%AE%A8%E7%A7%B0%E4%BB%A5%E5%89%8D%E5%81%9A%E8%BD%A6%E4%B8%8D%E9%87%8D%E8%A7%86%E5%A4%96%E8%A7%82%23) `187.3K 🔥` `-29%`
1. [孙怡 爱与不爱很明显 (Sun Yi It’s obvious whether you love or not love)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%80%A1%20%E7%88%B1%E4%B8%8E%E4%B8%8D%E7%88%B1%E5%BE%88%E6%98%8E%E6%98%BE%23) `180.6K 🔥` `-28%`
1. [小米公司报警](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E5%85%AC%E5%8F%B8%E6%8A%A5%E8%AD%A6%23) `164.3K 🔥` `-40%`
1. [桃黑黑直播美颜掉了](https://s.weibo.com/weibo?q=%23%E6%A1%83%E9%BB%91%E9%BB%91%E7%9B%B4%E6%92%AD%E7%BE%8E%E9%A2%9C%E6%8E%89%E4%BA%86%23) `164.0K 🔥` `-70%`
1. [宁艺卓回怼粉丝](https://s.weibo.com/weibo?q=%23%E5%AE%81%E8%89%BA%E5%8D%93%E5%9B%9E%E6%80%BC%E7%B2%89%E4%B8%9D%23) `154.3K 🔥` `-38%`
1. [李昀锐 孟子义 (Li Yunrui Meng Ziyi)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%98%80%E9%94%90%20%E5%AD%9F%E5%AD%90%E4%B9%89%23) `150.8K 🔥` `-41%`
1. [约基奇打架原因披露](https://s.weibo.com/weibo?q=%23%E7%BA%A6%E5%9F%BA%E5%A5%87%E6%89%93%E6%9E%B6%E5%8E%9F%E5%9B%A0%E6%8A%AB%E9%9C%B2%23) `140.9K 🔥` `-44%`
1. [张凌赫腿受伤了](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E8%85%BF%E5%8F%97%E4%BC%A4%E4%BA%86%23) `138.2K 🔥` `-28%`
1. [国家安全部发布视频无我](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E5%AE%B6%E5%AE%89%E5%85%A8%E9%83%A8%E5%8F%91%E5%B8%83%E8%A7%86%E9%A2%91%E6%97%A0%E6%88%91%23) `113.5K 🔥` `-28%`
1. [精灵耳医美女子说生不如死 (Elf ear doctor beautiful woman says life is worse than death)](https://s.weibo.com/weibo?q=%23%E7%B2%BE%E7%81%B5%E8%80%B3%E5%8C%BB%E7%BE%8E%E5%A5%B3%E5%AD%90%E8%AF%B4%E7%94%9F%E4%B8%8D%E5%A6%82%E6%AD%BB%23) `111.6K 🔥` `-29%`
1. [特朗普紧急撤离时摔倒 (Trump falls during emergency evacuation)](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E7%B4%A7%E6%80%A5%E6%92%A4%E7%A6%BB%E6%97%B6%E6%91%94%E5%80%92%23) `106.8K 🔥` `-45%`
1. [男子乱小便被制止踹人骨折索赔18万](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E4%B9%B1%E5%B0%8F%E4%BE%BF%E8%A2%AB%E5%88%B6%E6%AD%A2%E8%B8%B9%E4%BA%BA%E9%AA%A8%E6%8A%98%E7%B4%A2%E8%B5%9418%E4%B8%87%23) `100.2K 🔥` `-39%`
1. [张雪声援余承东 (Zhang Xue supports Yu Chengdong)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E5%A3%B0%E6%8F%B4%E4%BD%99%E6%89%BF%E4%B8%9C%23) `97.9K 🔥` `-35%`

Updated at 2026-04-26 19:51:04

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
