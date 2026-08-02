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

1. [官方回应青岛大火 (Official response to Qingdao fire)](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E5%9B%9E%E5%BA%94%E9%9D%92%E5%B2%9B%E5%A4%A7%E7%81%AB%23) `2.0M 🔥` `NEW`
1. [谁懂不加班的含金量有多高](https://s.weibo.com/weibo?q=%23%E8%B0%81%E6%87%82%E4%B8%8D%E5%8A%A0%E7%8F%AD%E7%9A%84%E5%90%AB%E9%87%91%E9%87%8F%E6%9C%89%E5%A4%9A%E9%AB%98%23) `627.7K 🔥` `NEW`
1. [易烊千玺打码](https://s.weibo.com/weibo?q=%23%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%E6%89%93%E7%A0%81%23) `605.1K 🔥` `NEW`
1. [辱骂捐赠日军罪证少年者被传唤](https://s.weibo.com/weibo?q=%23%E8%BE%B1%E9%AA%82%E6%8D%90%E8%B5%A0%E6%97%A5%E5%86%9B%E7%BD%AA%E8%AF%81%E5%B0%91%E5%B9%B4%E8%80%85%E8%A2%AB%E4%BC%A0%E5%94%A4%23) `604.3K 🔥` `NEW`
1. [胡一天演高中生被指违和](https://s.weibo.com/weibo?q=%23%E8%83%A1%E4%B8%80%E5%A4%A9%E6%BC%94%E9%AB%98%E4%B8%AD%E7%94%9F%E8%A2%AB%E6%8C%87%E8%BF%9D%E5%92%8C%23) `596.1K 🔥` `NEW`
1. [白鹿 完全妈妈](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%20%E5%AE%8C%E5%85%A8%E5%A6%88%E5%A6%88%23) `583.4K 🔥` `NEW`
1. [蔡徐坤演唱会](https://s.weibo.com/weibo?q=%23%E8%94%A1%E5%BE%90%E5%9D%A4%E6%BC%94%E5%94%B1%E4%BC%9A%23) `557.4K 🔥` `NEW`
1. [A股或告别科技独舞](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E6%88%96%E5%91%8A%E5%88%AB%E7%A7%91%E6%8A%80%E7%8B%AC%E8%88%9E%23) `528.5K 🔥` `NEW`
1. [公职人员损坏地锁反转了吗](https://s.weibo.com/weibo?q=%23%E5%85%AC%E8%81%8C%E4%BA%BA%E5%91%98%E6%8D%9F%E5%9D%8F%E5%9C%B0%E9%94%81%E5%8F%8D%E8%BD%AC%E4%BA%86%E5%90%97%23) `410.7K 🔥` `NEW`
1. [严浩翔帅成啥样了](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E6%B5%A9%E7%BF%94%E5%B8%85%E6%88%90%E5%95%A5%E6%A0%B7%E4%BA%86%23) `342.5K 🔥` `NEW`
1. [主持人看迪丽热巴的眼神 (The way the host looked at Dilireba)](https://s.weibo.com/weibo?q=%23%E4%B8%BB%E6%8C%81%E4%BA%BA%E7%9C%8B%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E7%9A%84%E7%9C%BC%E7%A5%9E%23) `316.2K 🔥` `NEW`
1. [一个爱侧睡的人轻轻的碎了](https://s.weibo.com/weibo?q=%23%E4%B8%80%E4%B8%AA%E7%88%B1%E4%BE%A7%E7%9D%A1%E7%9A%84%E4%BA%BA%E8%BD%BB%E8%BD%BB%E7%9A%84%E7%A2%8E%E4%BA%86%23) `260.0K 🔥` `NEW`
1. [王楚钦回复梁靖崑](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E5%9B%9E%E5%A4%8D%E6%A2%81%E9%9D%96%E5%B4%91%23) `256.1K 🔥` `NEW`
1. [C罗乔治娜戴超大钻戒现身](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E4%B9%94%E6%B2%BB%E5%A8%9C%E6%88%B4%E8%B6%85%E5%A4%A7%E9%92%BB%E6%88%92%E7%8E%B0%E8%BA%AB%23) `235.2K 🔥` `NEW`
1. [房主任大女儿火力全开怼妈](https://s.weibo.com/weibo?q=%23%E6%88%BF%E4%B8%BB%E4%BB%BB%E5%A4%A7%E5%A5%B3%E5%84%BF%E7%81%AB%E5%8A%9B%E5%85%A8%E5%BC%80%E6%80%BC%E5%A6%88%23) `227.9K 🔥` `NEW`
1. [青岛轮胎厂](https://s.weibo.com/weibo?q=%23%E9%9D%92%E5%B2%9B%E8%BD%AE%E8%83%8E%E5%8E%82%23) `227.0K 🔥` `NEW`
1. [灵活就业能自愿缴纳公积金了](https://s.weibo.com/weibo?q=%23%E7%81%B5%E6%B4%BB%E5%B0%B1%E4%B8%9A%E8%83%BD%E8%87%AA%E6%84%BF%E7%BC%B4%E7%BA%B3%E5%85%AC%E7%A7%AF%E9%87%91%E4%BA%86%23) `208.8K 🔥` `NEW`
1. [医院称离婚后即可取出封存婚外胚胎](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E9%99%A2%E7%A7%B0%E7%A6%BB%E5%A9%9A%E5%90%8E%E5%8D%B3%E5%8F%AF%E5%8F%96%E5%87%BA%E5%B0%81%E5%AD%98%E5%A9%9A%E5%A4%96%E8%83%9A%E8%83%8E%23) `207.8K 🔥` `NEW`
1. [SpaceX首份财报来了](https://s.weibo.com/weibo?q=%23SpaceX%E9%A6%96%E4%BB%BD%E8%B4%A2%E6%8A%A5%E6%9D%A5%E4%BA%86%23) `207.1K 🔥` `NEW`
1. [TheShy四抓一反杀](https://s.weibo.com/weibo?q=%23TheShy%E5%9B%9B%E6%8A%93%E4%B8%80%E5%8F%8D%E6%9D%80%23) `206.7K 🔥` `NEW`
1. [男子患癌才知村干部代收医保后漏缴 (The man didn’t know until he had cancer that the village cadre collected the medical insurance on his behalf and then missed the payment)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E6%82%A3%E7%99%8C%E6%89%8D%E7%9F%A5%E6%9D%91%E5%B9%B2%E9%83%A8%E4%BB%A3%E6%94%B6%E5%8C%BB%E4%BF%9D%E5%90%8E%E6%BC%8F%E7%BC%B4%23) `200.2K 🔥` `NEW`
1. [LNG对战IG](https://s.weibo.com/weibo?q=%23LNG%E5%AF%B9%E6%88%98IG%23) `188.5K 🔥` `NEW`
1. [仙逆](https://s.weibo.com/weibo?q=%23%E4%BB%99%E9%80%86%23) `186.4K 🔥` `NEW`
1. [王俊凯把我们广东的挤到哪里去了](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E6%8A%8A%E6%88%91%E4%BB%AC%E5%B9%BF%E4%B8%9C%E7%9A%84%E6%8C%A4%E5%88%B0%E5%93%AA%E9%87%8C%E5%8E%BB%E4%BA%86%23) `175.2K 🔥` `NEW`
1. [TF四代第肆象限演唱会票量](https://s.weibo.com/weibo?q=%23TF%E5%9B%9B%E4%BB%A3%E7%AC%AC%E8%82%86%E8%B1%A1%E9%99%90%E6%BC%94%E5%94%B1%E4%BC%9A%E7%A5%A8%E9%87%8F%23) `162.8K 🔥` `NEW`
1. [生命树里白菊的梦想成真了](https://s.weibo.com/weibo?q=%23%E7%94%9F%E5%91%BD%E6%A0%91%E9%87%8C%E7%99%BD%E8%8F%8A%E7%9A%84%E6%A2%A6%E6%83%B3%E6%88%90%E7%9C%9F%E4%BA%86%23) `154.3K 🔥` `NEW`
1. [集中供冷真的来了 (Centralized cooling is really here)](https://s.weibo.com/weibo?q=%23%E9%9B%86%E4%B8%AD%E4%BE%9B%E5%86%B7%E7%9C%9F%E7%9A%84%E6%9D%A5%E4%BA%86%23) `741.9K 🔥` `+193%`
1. [公积金10万亿账户迎来全面激活](https://s.weibo.com/weibo?q=%23%E5%85%AC%E7%A7%AF%E9%87%9110%E4%B8%87%E4%BA%BF%E8%B4%A6%E6%88%B7%E8%BF%8E%E6%9D%A5%E5%85%A8%E9%9D%A2%E6%BF%80%E6%B4%BB%23) `659.4K 🔥` `+113%`
1. [开家煎饺店叫小荷才露](https://s.weibo.com/weibo?q=%23%E5%BC%80%E5%AE%B6%E7%85%8E%E9%A5%BA%E5%BA%97%E5%8F%AB%E5%B0%8F%E8%8D%B7%E6%89%8D%E9%9C%B2%23) `621.1K 🔥` `+162%`
1. [张凌赫的妈妈公开了和家人的合照](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%9A%84%E5%A6%88%E5%A6%88%E5%85%AC%E5%BC%80%E4%BA%86%E5%92%8C%E5%AE%B6%E4%BA%BA%E7%9A%84%E5%90%88%E7%85%A7%23) `590.1K 🔥` `+73%`
1. [近视600度是眼球风险临界值](https://s.weibo.com/weibo?q=%23%E8%BF%91%E8%A7%86600%E5%BA%A6%E6%98%AF%E7%9C%BC%E7%90%83%E9%A3%8E%E9%99%A9%E4%B8%B4%E7%95%8C%E5%80%BC%23) `584.0K 🔥` `+84%`
1. [黄宗泽和胡杏儿老公拥抱 (Bosco Bosco and Myolie Wu’s husband hugged)](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%AE%97%E6%B3%BD%E5%92%8C%E8%83%A1%E6%9D%8F%E5%84%BF%E8%80%81%E5%85%AC%E6%8B%A5%E6%8A%B1%23) `399.3K 🔥` `+28%`
1. [女孩截图假付款 (Girl screenshot fake payment)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%A9%E6%88%AA%E5%9B%BE%E5%81%87%E4%BB%98%E6%AC%BE%23) `384.1K 🔥` `+47%`
1. [罗正 前女友](https://s.weibo.com/weibo?q=%23%E7%BD%97%E6%AD%A3%20%E5%89%8D%E5%A5%B3%E5%8F%8B%23) `355.3K 🔥` `+39%`
1. [泰国总理回应俄罗斯姐弟被谋杀](https://s.weibo.com/weibo?q=%23%E6%B3%B0%E5%9B%BD%E6%80%BB%E7%90%86%E5%9B%9E%E5%BA%94%E4%BF%84%E7%BD%97%E6%96%AF%E5%A7%90%E5%BC%9F%E8%A2%AB%E8%B0%8B%E6%9D%80%23) `328.9K 🔥` `+114%`
1. [印度韩国突然宣称有媲美DeepSeek大模型 (India and South Korea suddenly claim to have large models comparable to DeepSeek)](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%BA%A6%E9%9F%A9%E5%9B%BD%E7%AA%81%E7%84%B6%E5%AE%A3%E7%A7%B0%E6%9C%89%E5%AA%B2%E7%BE%8EDeepSeek%E5%A4%A7%E6%A8%A1%E5%9E%8B%23) `644.9K 🔥`
1. [三个字让我爸做了一辈子饭](https://s.weibo.com/weibo?q=%23%E4%B8%89%E4%B8%AA%E5%AD%97%E8%AE%A9%E6%88%91%E7%88%B8%E5%81%9A%E4%BA%86%E4%B8%80%E8%BE%88%E5%AD%90%E9%A5%AD%23) `632.0K 🔥`
1. [为什么现在的超市都不需要存包了](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E7%8E%B0%E5%9C%A8%E7%9A%84%E8%B6%85%E5%B8%82%E9%83%BD%E4%B8%8D%E9%9C%80%E8%A6%81%E5%AD%98%E5%8C%85%E4%BA%86%23) `621.2K 🔥`
1. [长沙一高层住宅火灾致4死2伤](https://s.weibo.com/weibo?q=%23%E9%95%BF%E6%B2%99%E4%B8%80%E9%AB%98%E5%B1%82%E4%BD%8F%E5%AE%85%E7%81%AB%E7%81%BE%E8%87%B44%E6%AD%BB2%E4%BC%A4%23) `611.5K 🔥`
1. [日本地震灾区呼吁不要再送千纸鹤](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E5%9C%B0%E9%9C%87%E7%81%BE%E5%8C%BA%E5%91%BC%E5%90%81%E4%B8%8D%E8%A6%81%E5%86%8D%E9%80%81%E5%8D%83%E7%BA%B8%E9%B9%A4%23) `361.2K 🔥`
1. [房主任谈再婚被女儿怼](https://s.weibo.com/weibo?q=%23%E6%88%BF%E4%B8%BB%E4%BB%BB%E8%B0%88%E5%86%8D%E5%A9%9A%E8%A2%AB%E5%A5%B3%E5%84%BF%E6%80%BC%23) `281.5K 🔥`
1. [瑞幸员工对嘴喷奶油 (Luckin employee sprays cream on mouth)](https://s.weibo.com/weibo?q=%23%E7%91%9E%E5%B9%B8%E5%91%98%E5%B7%A5%E5%AF%B9%E5%98%B4%E5%96%B7%E5%A5%B6%E6%B2%B9%23) `258.5K 🔥`
1. [Gemini直播 (Gemini live broadcast)](https://s.weibo.com/weibo?q=%23Gemini%E7%9B%B4%E6%92%AD%23) `213.8K 🔥`
1. [刺激之夜全明星COS造型预告](https://s.weibo.com/weibo?q=%23%E5%88%BA%E6%BF%80%E4%B9%8B%E5%A4%9C%E5%85%A8%E6%98%8E%E6%98%9FCOS%E9%80%A0%E5%9E%8B%E9%A2%84%E5%91%8A%23) `207.5K 🔥`
1. [银行 午休](https://s.weibo.com/weibo?q=%23%E9%93%B6%E8%A1%8C%20%E5%8D%88%E4%BC%91%23) `1.1M 🔥` `-33%`
1. [嘲讽张继科解说已解除合作关系 (Mocking Zhang Jike’s explanation that the partnership has been terminated)](https://s.weibo.com/weibo?q=%23%E5%98%B2%E8%AE%BD%E5%BC%A0%E7%BB%A7%E7%A7%91%E8%A7%A3%E8%AF%B4%E5%B7%B2%E8%A7%A3%E9%99%A4%E5%90%88%E4%BD%9C%E5%85%B3%E7%B3%BB%23) `626.7K 🔥` `-42%`
1. [王俊凯大麦一开2158张票 (Wang Junkai Damai opened 2158 tickets)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E5%A4%A7%E9%BA%A6%E4%B8%80%E5%BC%802158%E5%BC%A0%E7%A5%A8%23) `472.2K 🔥` `-31%`
1. [天总曝一线明星一部戏收入仅一百多万](https://s.weibo.com/weibo?q=%23%E5%A4%A9%E6%80%BB%E6%9B%9D%E4%B8%80%E7%BA%BF%E6%98%8E%E6%98%9F%E4%B8%80%E9%83%A8%E6%88%8F%E6%94%B6%E5%85%A5%E4%BB%85%E4%B8%80%E7%99%BE%E5%A4%9A%E4%B8%87%23) `231.5K 🔥` `-26%`
1. [王鹤棣没有让女人空手而归的义务](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%B9%A4%E6%A3%A3%E6%B2%A1%E6%9C%89%E8%AE%A9%E5%A5%B3%E4%BA%BA%E7%A9%BA%E6%89%8B%E8%80%8C%E5%BD%92%E7%9A%84%E4%B9%89%E5%8A%A1%23) `208.9K 🔥` `-32%`
1. [地铁吐血女孩为嫣然基金捐99999元](https://s.weibo.com/weibo?q=%23%E5%9C%B0%E9%93%81%E5%90%90%E8%A1%80%E5%A5%B3%E5%AD%A9%E4%B8%BA%E5%AB%A3%E7%84%B6%E5%9F%BA%E9%87%91%E6%8D%9099999%E5%85%83%23) `154.2K 🔥` `-46%`

Updated at 2026-08-02 19:46:29

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
