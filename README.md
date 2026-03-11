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

1. [1斤赘肉换1斤牛肉已超千人报名 (Over a thousand people have signed up to exchange 1 pound of fat for 1 pound of beef)](https://s.weibo.com/weibo?q=%231%E6%96%A4%E8%B5%98%E8%82%89%E6%8D%A21%E6%96%A4%E7%89%9B%E8%82%89%E5%B7%B2%E8%B6%85%E5%8D%83%E4%BA%BA%E6%8A%A5%E5%90%8D%23) `255.5K 🔥` `NEW`
1. [田曦薇逐玉破万贺图](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E9%80%90%E7%8E%89%E7%A0%B4%E4%B8%87%E8%B4%BA%E5%9B%BE%23) `249.3K 🔥` `NEW`
1. [外婆妈妈确诊乳腺癌女子恐惧睡不着](https://s.weibo.com/weibo?q=%23%E5%A4%96%E5%A9%86%E5%A6%88%E5%A6%88%E7%A1%AE%E8%AF%8A%E4%B9%B3%E8%85%BA%E7%99%8C%E5%A5%B3%E5%AD%90%E6%81%90%E6%83%A7%E7%9D%A1%E4%B8%8D%E7%9D%80%23) `164.7K 🔥` `NEW`
1. [科研人员能坐冷板凳但不该有冷待遇](https://s.weibo.com/weibo?q=%23%E7%A7%91%E7%A0%94%E4%BA%BA%E5%91%98%E8%83%BD%E5%9D%90%E5%86%B7%E6%9D%BF%E5%87%B3%E4%BD%86%E4%B8%8D%E8%AF%A5%E6%9C%89%E5%86%B7%E5%BE%85%E9%81%87%23) `125.6K 🔥` `NEW`
1. [妻子回应帮丈夫贴瓷砖月入2万](https://s.weibo.com/weibo?q=%23%E5%A6%BB%E5%AD%90%E5%9B%9E%E5%BA%94%E5%B8%AE%E4%B8%88%E5%A4%AB%E8%B4%B4%E7%93%B7%E7%A0%96%E6%9C%88%E5%85%A52%E4%B8%87%23) `104.5K 🔥` `NEW`
1. [虞书欣国王开播一周年晒照](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E5%9B%BD%E7%8E%8B%E5%BC%80%E6%92%AD%E4%B8%80%E5%91%A8%E5%B9%B4%E6%99%92%E7%85%A7%23) `95.6K 🔥` `NEW`
1. [日本大阪一地下管道冲出地面18米](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E5%A4%A7%E9%98%AA%E4%B8%80%E5%9C%B0%E4%B8%8B%E7%AE%A1%E9%81%93%E5%86%B2%E5%87%BA%E5%9C%B0%E9%9D%A218%E7%B1%B3%23) `95.5K 🔥` `NEW`
1. [TF四代荣耀之战分房](https://s.weibo.com/weibo?q=%23TF%E5%9B%9B%E4%BB%A3%E8%8D%A3%E8%80%80%E4%B9%8B%E6%88%98%E5%88%86%E6%88%BF%23) `94.5K 🔥` `NEW`
1. [小米车险上线](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E8%BD%A6%E9%99%A9%E4%B8%8A%E7%BA%BF%23) `86.5K 🔥` `NEW`
1. [陈垣宇2比3雨果](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%9E%A3%E5%AE%872%E6%AF%943%E9%9B%A8%E6%9E%9C%23) `86.0K 🔥` `NEW`
1. [伊朗多弹头导弹袭击美军基地 (Iran's multi-warhead missile attacks US military base)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%A4%9A%E5%BC%B9%E5%A4%B4%E5%AF%BC%E5%BC%B9%E8%A2%AD%E5%87%BB%E7%BE%8E%E5%86%9B%E5%9F%BA%E5%9C%B0%23) `554.7K 🔥` `+404%`
1. [乘风2026将全程直播](https://s.weibo.com/weibo?q=%23%E4%B9%98%E9%A3%8E2026%E5%B0%86%E5%85%A8%E7%A8%8B%E7%9B%B4%E6%92%AD%23) `553.7K 🔥` `+97%`
1. [西班牙降级与以色列外交关系](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%8F%AD%E7%89%99%E9%99%8D%E7%BA%A7%E4%B8%8E%E4%BB%A5%E8%89%B2%E5%88%97%E5%A4%96%E4%BA%A4%E5%85%B3%E7%B3%BB%23) `319.0K 🔥` `+95%`
1. [3名美国富豪强奸性侵60名女性](https://s.weibo.com/weibo?q=%233%E5%90%8D%E7%BE%8E%E5%9B%BD%E5%AF%8C%E8%B1%AA%E5%BC%BA%E5%A5%B8%E6%80%A7%E4%BE%B560%E5%90%8D%E5%A5%B3%E6%80%A7%23) `238.6K 🔥` `+84%`
1. [逐玉断层领跑](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%E6%96%AD%E5%B1%82%E9%A2%86%E8%B7%91%23) `143.5K 🔥` `+50%`
1. [委员回应年轻人天天熬夜行不行](https://s.weibo.com/weibo?q=%23%E5%A7%94%E5%91%98%E5%9B%9E%E5%BA%94%E5%B9%B4%E8%BD%BB%E4%BA%BA%E5%A4%A9%E5%A4%A9%E7%86%AC%E5%A4%9C%E8%A1%8C%E4%B8%8D%E8%A1%8C%23) `1.0M 🔥`
1. [国防部回应日本部署远程导弹 (Ministry of National Defense responds to Japan's deployment of long-range missiles)](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E9%98%B2%E9%83%A8%E5%9B%9E%E5%BA%94%E6%97%A5%E6%9C%AC%E9%83%A8%E7%BD%B2%E8%BF%9C%E7%A8%8B%E5%AF%BC%E5%BC%B9%23) `762.1K 🔥`
1. [解读国家账本看数字背后 (Interpret the national account books and see behind the numbers)](https://s.weibo.com/weibo?q=%23%E8%A7%A3%E8%AF%BB%E5%9B%BD%E5%AE%B6%E8%B4%A6%E6%9C%AC%E7%9C%8B%E6%95%B0%E5%AD%97%E8%83%8C%E5%90%8E%23) `590.5K 🔥`
1. [公积金提取 (Provident fund withdrawal)](https://s.weibo.com/weibo?q=%23%E5%85%AC%E7%A7%AF%E9%87%91%E6%8F%90%E5%8F%96%23) `555.8K 🔥`
1. [精灵黄lululemon发圈被炒到999元](https://s.weibo.com/weibo?q=%23%E7%B2%BE%E7%81%B5%E9%BB%84lululemon%E5%8F%91%E5%9C%88%E8%A2%AB%E7%82%92%E5%88%B0999%E5%85%83%23) `555.0K 🔥`
1. [宁德时代创始人曾毓群个人分红81亿](https://s.weibo.com/weibo?q=%23%E5%AE%81%E5%BE%B7%E6%97%B6%E4%BB%A3%E5%88%9B%E5%A7%8B%E4%BA%BA%E6%9B%BE%E6%AF%93%E7%BE%A4%E4%B8%AA%E4%BA%BA%E5%88%86%E7%BA%A281%E4%BA%BF%23) `552.3K 🔥`
1. [村书记带了一堆柠檬上两会](https://s.weibo.com/weibo?q=%23%E6%9D%91%E4%B9%A6%E8%AE%B0%E5%B8%A6%E4%BA%86%E4%B8%80%E5%A0%86%E6%9F%A0%E6%AA%AC%E4%B8%8A%E4%B8%A4%E4%BC%9A%23) `551.9K 🔥`
1. [委员谈员工不敢休年假怎么办](https://s.weibo.com/weibo?q=%23%E5%A7%94%E5%91%98%E8%B0%88%E5%91%98%E5%B7%A5%E4%B8%8D%E6%95%A2%E4%BC%91%E5%B9%B4%E5%81%87%E6%80%8E%E4%B9%88%E5%8A%9E%23) `551.2K 🔥`
1. [逐玉爱奇艺破万 (Zhuyu iQiyi breaks 10,000)](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%E7%88%B1%E5%A5%87%E8%89%BA%E7%A0%B4%E4%B8%87%23) `550.3K 🔥`
1. [这才是普通身材的普通人穿搭](https://s.weibo.com/weibo?q=%23%E8%BF%99%E6%89%8D%E6%98%AF%E6%99%AE%E9%80%9A%E8%BA%AB%E6%9D%90%E7%9A%84%E6%99%AE%E9%80%9A%E4%BA%BA%E7%A9%BF%E6%90%AD%23) `549.4K 🔥`
1. [田曦薇背后抱量张凌赫腰围](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E8%83%8C%E5%90%8E%E6%8A%B1%E9%87%8F%E5%BC%A0%E5%87%8C%E8%B5%AB%E8%85%B0%E5%9B%B4%23) `538.8K 🔥`
1. [MiuMiu](https://s.weibo.com/weibo?q=%23MiuMiu%23) `358.9K 🔥`
1. [逐玉](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%23) `342.7K 🔥`
1. [公积金改革大潮真的来了 (The tide of provident fund reform is really coming)](https://s.weibo.com/weibo?q=%23%E5%85%AC%E7%A7%AF%E9%87%91%E6%94%B9%E9%9D%A9%E5%A4%A7%E6%BD%AE%E7%9C%9F%E7%9A%84%E6%9D%A5%E4%BA%86%23) `237.7K 🔥`
1. [伊朗称不再局限于对等反击 (Iran says it is no longer limited to reciprocal counterattacks)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E7%A7%B0%E4%B8%8D%E5%86%8D%E5%B1%80%E9%99%90%E4%BA%8E%E5%AF%B9%E7%AD%89%E5%8F%8D%E5%87%BB%23) `166.6K 🔥`
1. [吴昕在大侦探爆哭](https://s.weibo.com/weibo?q=%23%E5%90%B4%E6%98%95%E5%9C%A8%E5%A4%A7%E4%BE%A6%E6%8E%A2%E7%88%86%E5%93%AD%23) `136.3K 🔥`
1. [你更愿意喝9.9元还是30元的咖啡](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E6%9B%B4%E6%84%BF%E6%84%8F%E5%96%9D9.9%E5%85%83%E8%BF%98%E6%98%AF30%E5%85%83%E7%9A%84%E5%92%96%E5%95%A1%23) `119.3K 🔥`
1. [慕慕昭昭大婚](https://s.weibo.com/weibo?q=%23%E6%85%95%E6%85%95%E6%98%AD%E6%98%AD%E5%A4%A7%E5%A9%9A%23) `119.1K 🔥`
1. [上过班的才知道这有多幸福 (Only those who have worked know how happy this is)](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E8%BF%87%E7%8F%AD%E7%9A%84%E6%89%8D%E7%9F%A5%E9%81%93%E8%BF%99%E6%9C%89%E5%A4%9A%E5%B9%B8%E7%A6%8F%23) `117.3K 🔥`
1. [不二之臣 (The best minister)](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E4%BA%8C%E4%B9%8B%E8%87%A3%23) `109.1K 🔥`
1. [伊朗发起第39波打击](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%8F%91%E8%B5%B7%E7%AC%AC39%E6%B3%A2%E6%89%93%E5%87%BB%23) `95.5K 🔥`
1. [我们的少年时代2开通官微 (Our Boyhood 2 launches official WeChat account)](https://s.weibo.com/weibo?q=%23%E6%88%91%E4%BB%AC%E7%9A%84%E5%B0%91%E5%B9%B4%E6%97%B6%E4%BB%A32%E5%BC%80%E9%80%9A%E5%AE%98%E5%BE%AE%23) `95.4K 🔥`
1. [入职大疆1个月被发了5次钱](https://s.weibo.com/weibo?q=%23%E5%85%A5%E8%81%8C%E5%A4%A7%E7%96%861%E4%B8%AA%E6%9C%88%E8%A2%AB%E5%8F%91%E4%BA%865%E6%AC%A1%E9%92%B1%23) `87.3K 🔥`
1. [白敬亭拍长风渡留下的疤](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%95%AC%E4%BA%AD%E6%8B%8D%E9%95%BF%E9%A3%8E%E6%B8%A1%E7%95%99%E4%B8%8B%E7%9A%84%E7%96%A4%23) `87.0K 🔥`
1. [炸伊朗小学导弹零件MadeinUSA (Missile parts used to bomb Iranian elementary school MadeinUSA)](https://s.weibo.com/weibo?q=%23%E7%82%B8%E4%BC%8A%E6%9C%97%E5%B0%8F%E5%AD%A6%E5%AF%BC%E5%BC%B9%E9%9B%B6%E4%BB%B6MadeinUSA%23) `239.7K 🔥` `-59%`
1. [逐玉 头纱](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%20%E5%A4%B4%E7%BA%B1%23) `238.8K 🔥` `-21%`
1. [为农民哽咽发声代表接到多部委电话](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E5%86%9C%E6%B0%91%E5%93%BD%E5%92%BD%E5%8F%91%E5%A3%B0%E4%BB%A3%E8%A1%A8%E6%8E%A5%E5%88%B0%E5%A4%9A%E9%83%A8%E5%A7%94%E7%94%B5%E8%AF%9D%23) `236.5K 🔥` `-46%`
1. [伊朗对美以发动38波攻击 (Iran launches 38 waves of attacks on the United States and Israel)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%AF%B9%E7%BE%8E%E4%BB%A5%E5%8F%91%E5%8A%A838%E6%B3%A2%E6%94%BB%E5%87%BB%23) `141.6K 🔥` `-35%`
1. [建议允许60岁以上农民工继续务工 (It is recommended that migrant workers over 60 years old be allowed to continue working)](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E5%85%81%E8%AE%B860%E5%B2%81%E4%BB%A5%E4%B8%8A%E5%86%9C%E6%B0%91%E5%B7%A5%E7%BB%A7%E7%BB%AD%E5%8A%A1%E5%B7%A5%23) `125.0K 🔥` `-22%`
1. [Gemini五连绝世](https://s.weibo.com/weibo?q=%23Gemini%E4%BA%94%E8%BF%9E%E7%BB%9D%E4%B8%96%23) `106.9K 🔥` `-49%`
1. [WB对战狼队](https://s.weibo.com/weibo?q=%23WB%E5%AF%B9%E6%88%98%E7%8B%BC%E9%98%9F%23) `105.2K 🔥` `-29%`
1. [曝AL签下Bigwei](https://s.weibo.com/weibo?q=%23%E6%9B%9DAL%E7%AD%BE%E4%B8%8BBigwei%23) `89.3K 🔥` `-40%`
1. [逐玉追剧团](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%E8%BF%BD%E5%89%A7%E5%9B%A2%23) `87.8K 🔥` `-51%`
1. [TVB演员江华化身景区打工皇帝](https://s.weibo.com/weibo?q=%23TVB%E6%BC%94%E5%91%98%E6%B1%9F%E5%8D%8E%E5%8C%96%E8%BA%AB%E6%99%AF%E5%8C%BA%E6%89%93%E5%B7%A5%E7%9A%87%E5%B8%9D%23) `87.6K 🔥` `-22%`

Updated at 2026-03-11 22:38:35

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
