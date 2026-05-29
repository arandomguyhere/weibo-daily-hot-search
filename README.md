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

1. [释永信被判24年 (Shi Yongxin was sentenced to 24 years)](https://s.weibo.com/weibo?q=%23%E9%87%8A%E6%B0%B8%E4%BF%A1%E8%A2%AB%E5%88%A424%E5%B9%B4%23) `1.4M 🔥` `NEW`
1. [39岁博主被虫咬后感染离世](https://s.weibo.com/weibo?q=%2339%E5%B2%81%E5%8D%9A%E4%B8%BB%E8%A2%AB%E8%99%AB%E5%92%AC%E5%90%8E%E6%84%9F%E6%9F%93%E7%A6%BB%E4%B8%96%23) `886.8K 🔥` `NEW`
1. [中国三线城市刷新美国学生认知](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E4%B8%89%E7%BA%BF%E5%9F%8E%E5%B8%82%E5%88%B7%E6%96%B0%E7%BE%8E%E5%9B%BD%E5%AD%A6%E7%94%9F%E8%AE%A4%E7%9F%A5%23) `779.3K 🔥` `NEW`
1. [尚界H5七大升级预售16.98万元起](https://s.weibo.com/weibo?q=%23%E5%B0%9A%E7%95%8CH5%E4%B8%83%E5%A4%A7%E5%8D%87%E7%BA%A7%E9%A2%84%E5%94%AE16.98%E4%B8%87%E5%85%83%E8%B5%B7%23) `758.0K 🔥` `NEW`
1. [车手张秀军不幸离世](https://s.weibo.com/weibo?q=%23%E8%BD%A6%E6%89%8B%E5%BC%A0%E7%A7%80%E5%86%9B%E4%B8%8D%E5%B9%B8%E7%A6%BB%E4%B8%96%23) `748.9K 🔥` `NEW`
1. [VOGUE红毯直播](https://s.weibo.com/weibo?q=%23VOGUE%E7%BA%A2%E6%AF%AF%E7%9B%B4%E6%92%AD%23) `674.9K 🔥` `NEW`
1. [性格好是稀缺资源](https://s.weibo.com/weibo?q=%23%E6%80%A7%E6%A0%BC%E5%A5%BD%E6%98%AF%E7%A8%80%E7%BC%BA%E8%B5%84%E6%BA%90%23) `659.5K 🔥` `NEW`
1. [VOGUE审美](https://s.weibo.com/weibo?q=%23VOGUE%E5%AE%A1%E7%BE%8E%23) `612.8K 🔥` `NEW`
1. [歌手直播](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B%E7%9B%B4%E6%92%AD%23) `474.4K 🔥` `NEW`
1. [许我耀眼 现实版](https://s.weibo.com/weibo?q=%23%E8%AE%B8%E6%88%91%E8%80%80%E7%9C%BC%20%E7%8E%B0%E5%AE%9E%E7%89%88%23) `474.1K 🔥` `NEW`
1. [女童被幼儿园老师用热熔胶烫嘴虐待 (Girl was abused by kindergarten teacher with hot glue on her mouth)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E7%AB%A5%E8%A2%AB%E5%B9%BC%E5%84%BF%E5%9B%AD%E8%80%81%E5%B8%88%E7%94%A8%E7%83%AD%E7%86%94%E8%83%B6%E7%83%AB%E5%98%B4%E8%99%90%E5%BE%85%23) `473.1K 🔥` `NEW`
1. [白鹿回复于正于老师](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E5%9B%9E%E5%A4%8D%E4%BA%8E%E6%AD%A3%E4%BA%8E%E8%80%81%E5%B8%88%23) `472.3K 🔥` `NEW`
1. [王曦雨首进法网16强](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%9B%A6%E9%9B%A8%E9%A6%96%E8%BF%9B%E6%B3%95%E7%BD%9116%E5%BC%BA%23) `470.9K 🔥` `NEW`
1. [檀健次回应片场摔马](https://s.weibo.com/weibo?q=%23%E6%AA%80%E5%81%A5%E6%AC%A1%E5%9B%9E%E5%BA%94%E7%89%87%E5%9C%BA%E6%91%94%E9%A9%AC%23) `468.4K 🔥` `NEW`
1. [梁文锋迁移代码到昇腾](https://s.weibo.com/weibo?q=%23%E6%A2%81%E6%96%87%E9%94%8B%E8%BF%81%E7%A7%BB%E4%BB%A3%E7%A0%81%E5%88%B0%E6%98%87%E8%85%BE%23) `467.0K 🔥` `NEW`
1. [广东高温天热死几千只鸡](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E4%B8%9C%E9%AB%98%E6%B8%A9%E5%A4%A9%E7%83%AD%E6%AD%BB%E5%87%A0%E5%8D%83%E5%8F%AA%E9%B8%A1%23) `466.6K 🔥` `NEW`
1. [海口一老师赛课时猝死](https://s.weibo.com/weibo?q=%23%E6%B5%B7%E5%8F%A3%E4%B8%80%E8%80%81%E5%B8%88%E8%B5%9B%E8%AF%BE%E6%97%B6%E7%8C%9D%E6%AD%BB%23) `461.5K 🔥` `NEW`
1. [上上谦 闭店](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E4%B8%8A%E8%B0%A6%20%E9%97%AD%E5%BA%97%23) `455.8K 🔥` `NEW`
1. [李小冉回应唐艺昕忘了自己](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B0%8F%E5%86%89%E5%9B%9E%E5%BA%94%E5%94%90%E8%89%BA%E6%98%95%E5%BF%98%E4%BA%86%E8%87%AA%E5%B7%B1%23) `440.3K 🔥` `NEW`
1. [上海警方通报高校偷拍事件](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E8%AD%A6%E6%96%B9%E9%80%9A%E6%8A%A5%E9%AB%98%E6%A0%A1%E5%81%B7%E6%8B%8D%E4%BA%8B%E4%BB%B6%23) `438.9K 🔥` `NEW`
1. [张雪机车阿拉贡站练习赛 (Zhang Xue Motorcycle Aragon Station Practice Race)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%E9%98%BF%E6%8B%89%E8%B4%A1%E7%AB%99%E7%BB%83%E4%B9%A0%E8%B5%9B%23) `436.1K 🔥` `NEW`
1. [素颜赵今麦](https://s.weibo.com/weibo?q=%23%E7%B4%A0%E9%A2%9C%E8%B5%B5%E4%BB%8A%E9%BA%A6%23) `397.1K 🔥` `NEW`
1. [舒淇说想考驾照](https://s.weibo.com/weibo?q=%23%E8%88%92%E6%B7%87%E8%AF%B4%E6%83%B3%E8%80%83%E9%A9%BE%E7%85%A7%23) `328.8K 🔥` `NEW`
1. [一女子怀孕被误诊为闭经服药后流产](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%A5%B3%E5%AD%90%E6%80%80%E5%AD%95%E8%A2%AB%E8%AF%AF%E8%AF%8A%E4%B8%BA%E9%97%AD%E7%BB%8F%E6%9C%8D%E8%8D%AF%E5%90%8E%E6%B5%81%E4%BA%A7%23) `320.0K 🔥` `NEW`
1. [小寒恋爱聊天记录](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%AF%92%E6%81%8B%E7%88%B1%E8%81%8A%E5%A4%A9%E8%AE%B0%E5%BD%95%23) `304.6K 🔥` `NEW`
1. [衣服洗完不香搓一下](https://s.weibo.com/weibo?q=%23%E8%A1%A3%E6%9C%8D%E6%B4%97%E5%AE%8C%E4%B8%8D%E9%A6%99%E6%90%93%E4%B8%80%E4%B8%8B%23) `277.5K 🔥` `NEW`
1. [胡一天被打码的陷害了](https://s.weibo.com/weibo?q=%23%E8%83%A1%E4%B8%80%E5%A4%A9%E8%A2%AB%E6%89%93%E7%A0%81%E7%9A%84%E9%99%B7%E5%AE%B3%E4%BA%86%23) `259.4K 🔥` `NEW`
1. [马嘉祺一千一万朵断层第一](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%98%89%E7%A5%BA%E4%B8%80%E5%8D%83%E4%B8%80%E4%B8%87%E6%9C%B5%E6%96%AD%E5%B1%82%E7%AC%AC%E4%B8%80%23) `241.4K 🔥` `NEW`
1. [院方回应把性生活史写在健康证上](https://s.weibo.com/weibo?q=%23%E9%99%A2%E6%96%B9%E5%9B%9E%E5%BA%94%E6%8A%8A%E6%80%A7%E7%94%9F%E6%B4%BB%E5%8F%B2%E5%86%99%E5%9C%A8%E5%81%A5%E5%BA%B7%E8%AF%81%E4%B8%8A%23) `231.7K 🔥` `NEW`
1. [男童误食磁铁珠妈妈隔肚皮找到](https://s.weibo.com/weibo?q=%23%E7%94%B7%E7%AB%A5%E8%AF%AF%E9%A3%9F%E7%A3%81%E9%93%81%E7%8F%A0%E5%A6%88%E5%A6%88%E9%9A%94%E8%82%9A%E7%9A%AE%E6%89%BE%E5%88%B0%23) `230.1K 🔥` `NEW`
1. [孩子凌晨偷玩电脑上课睡觉 (Children secretly play computer games and sleep in class early in the morning)](https://s.weibo.com/weibo?q=%23%E5%AD%A9%E5%AD%90%E5%87%8C%E6%99%A8%E5%81%B7%E7%8E%A9%E7%94%B5%E8%84%91%E4%B8%8A%E8%AF%BE%E7%9D%A1%E8%A7%89%23) `229.5K 🔥` `NEW`
1. [易烊千玺4提导协](https://s.weibo.com/weibo?q=%23%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA4%E6%8F%90%E5%AF%BC%E5%8D%8F%23) `224.2K 🔥` `NEW`
1. [神21航天员乘组回家](https://s.weibo.com/weibo?q=%23%E7%A5%9E21%E8%88%AA%E5%A4%A9%E5%91%98%E4%B9%98%E7%BB%84%E5%9B%9E%E5%AE%B6%23) `222.5K 🔥` `NEW`
1. [歌手2026第二期阵容海报](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B2026%E7%AC%AC%E4%BA%8C%E6%9C%9F%E9%98%B5%E5%AE%B9%E6%B5%B7%E6%8A%A5%23) `222.3K 🔥` `NEW`
1. [芯片股集体暴跌](https://s.weibo.com/weibo?q=%23%E8%8A%AF%E7%89%87%E8%82%A1%E9%9B%86%E4%BD%93%E6%9A%B4%E8%B7%8C%23) `216.3K 🔥` `NEW`
1. [刘诗诗 森中精灵](https://s.weibo.com/weibo?q=%23%E5%88%98%E8%AF%97%E8%AF%97%20%E6%A3%AE%E4%B8%AD%E7%B2%BE%E7%81%B5%23) `216.2K 🔥` `NEW`
1. [贺峻霖 预制出发图](https://s.weibo.com/weibo?q=%23%E8%B4%BA%E5%B3%BB%E9%9C%96%20%E9%A2%84%E5%88%B6%E5%87%BA%E5%8F%91%E5%9B%BE%23) `210.7K 🔥` `NEW`
1. [雷军称被何小鹏李斌骗了](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E5%86%9B%E7%A7%B0%E8%A2%AB%E4%BD%95%E5%B0%8F%E9%B9%8F%E6%9D%8E%E6%96%8C%E9%AA%97%E4%BA%86%23) `676.9K 🔥` `-42%`
1. [荣耀WIN Turbo京东独家发售](https://s.weibo.com/weibo?q=%23%E8%8D%A3%E8%80%80WIN%20Turbo%E4%BA%AC%E4%B8%9C%E7%8B%AC%E5%AE%B6%E5%8F%91%E5%94%AE%23) `665.5K 🔥` `-26%`
1. [同事每天下班带走公司五斤水](https://s.weibo.com/weibo?q=%23%E5%90%8C%E4%BA%8B%E6%AF%8F%E5%A4%A9%E4%B8%8B%E7%8F%AD%E5%B8%A6%E8%B5%B0%E5%85%AC%E5%8F%B8%E4%BA%94%E6%96%A4%E6%B0%B4%23) `556.4K 🔥` `-52%`
1. [演员刘红梅去世 (Actor Liu Hongmei passes away)](https://s.weibo.com/weibo?q=%23%E6%BC%94%E5%91%98%E5%88%98%E7%BA%A2%E6%A2%85%E5%8E%BB%E4%B8%96%23) `471.6K 🔥` `-40%`
1. [亲爱的客栈全员夸王鹤棣](https://s.weibo.com/weibo?q=%23%E4%BA%B2%E7%88%B1%E7%9A%84%E5%AE%A2%E6%A0%88%E5%85%A8%E5%91%98%E5%A4%B8%E7%8E%8B%E9%B9%A4%E6%A3%A3%23) `469.9K 🔥` `-36%`
1. [日本转移12万居民 (Japan transfers 120,000 residents)](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E8%BD%AC%E7%A7%BB12%E4%B8%87%E5%B1%85%E6%B0%91%23) `467.6K 🔥` `-61%`
1. [王鹤棣称没有焦虑但会反思 (Wang Hedi said he has no anxiety but will reflect on it)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%B9%A4%E6%A3%A3%E7%A7%B0%E6%B2%A1%E6%9C%89%E7%84%A6%E8%99%91%E4%BD%86%E4%BC%9A%E5%8F%8D%E6%80%9D%23) `451.3K 🔥` `-43%`
1. [患者曝名医让儿子代诊致其流产](https://s.weibo.com/weibo?q=%23%E6%82%A3%E8%80%85%E6%9B%9D%E5%90%8D%E5%8C%BB%E8%AE%A9%E5%84%BF%E5%AD%90%E4%BB%A3%E8%AF%8A%E8%87%B4%E5%85%B6%E6%B5%81%E4%BA%A7%23) `449.2K 🔥` `-44%`
1. [VOGUE出发图](https://s.weibo.com/weibo?q=%23VOGUE%E5%87%BA%E5%8F%91%E5%9B%BE%23) `444.6K 🔥` `-37%`
1. [A股5月收官](https://s.weibo.com/weibo?q=%23A%E8%82%A15%E6%9C%88%E6%94%B6%E5%AE%98%23) `441.6K 🔥` `-42%`
1. [李晨涨粉近百万](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%99%A8%E6%B6%A8%E7%B2%89%E8%BF%91%E7%99%BE%E4%B8%87%23) `435.8K 🔥` `-41%`
1. [虞书欣在一年级被弄到脸](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E5%9C%A8%E4%B8%80%E5%B9%B4%E7%BA%A7%E8%A2%AB%E5%BC%84%E5%88%B0%E8%84%B8%23) `229.2K 🔥` `-70%`
1. [关晓彤震惊丁程鑫24岁了](https://s.weibo.com/weibo?q=%23%E5%85%B3%E6%99%93%E5%BD%A4%E9%9C%87%E6%83%8A%E4%B8%81%E7%A8%8B%E9%91%AB24%E5%B2%81%E4%BA%86%23) `219.0K 🔥` `-73%`
1. [对一个人好感倍增的小细节](https://s.weibo.com/weibo?q=%23%E5%AF%B9%E4%B8%80%E4%B8%AA%E4%BA%BA%E5%A5%BD%E6%84%9F%E5%80%8D%E5%A2%9E%E7%9A%84%E5%B0%8F%E7%BB%86%E8%8A%82%23) `216.3K 🔥` `-69%`

Updated at 2026-05-29 19:44:40

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
