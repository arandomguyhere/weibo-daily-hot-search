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

1. [委内瑞拉击败美国夺冠 全国放假一天 (Venezuela beats the United States to win the championship and the country has a day off)](https://s.weibo.com/weibo?q=%23%E5%A7%94%E5%86%85%E7%91%9E%E6%8B%89%E5%87%BB%E8%B4%A5%E7%BE%8E%E5%9B%BD%E5%A4%BA%E5%86%A0%20%E5%85%A8%E5%9B%BD%E6%94%BE%E5%81%87%E4%B8%80%E5%A4%A9%23) `1.1M 🔥` `NEW`
1. [中国人种树太硬核](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E4%BA%BA%E7%A7%8D%E6%A0%91%E5%A4%AA%E7%A1%AC%E6%A0%B8%23) `619.9K 🔥` `NEW`
1. [曝世卫组织正在为核灾难做准备](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E4%B8%96%E5%8D%AB%E7%BB%84%E7%BB%87%E6%AD%A3%E5%9C%A8%E4%B8%BA%E6%A0%B8%E7%81%BE%E9%9A%BE%E5%81%9A%E5%87%86%E5%A4%87%23) `206.0K 🔥` `NEW`
1. [央视调查油菜花田蜜蜂死亡真相](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E8%B0%83%E6%9F%A5%E6%B2%B9%E8%8F%9C%E8%8A%B1%E7%94%B0%E8%9C%9C%E8%9C%82%E6%AD%BB%E4%BA%A1%E7%9C%9F%E7%9B%B8%23) `189.0K 🔥` `NEW`
1. [北大毕业送外卖男子称自己眼高手低](https://s.weibo.com/weibo?q=%23%E5%8C%97%E5%A4%A7%E6%AF%95%E4%B8%9A%E9%80%81%E5%A4%96%E5%8D%96%E7%94%B7%E5%AD%90%E7%A7%B0%E8%87%AA%E5%B7%B1%E7%9C%BC%E9%AB%98%E6%89%8B%E4%BD%8E%23) `187.8K 🔥` `NEW`
1. [我把协和大夫的笔顺走了](https://s.weibo.com/weibo?q=%23%E6%88%91%E6%8A%8A%E5%8D%8F%E5%92%8C%E5%A4%A7%E5%A4%AB%E7%9A%84%E7%AC%94%E9%A1%BA%E8%B5%B0%E4%BA%86%23) `184.8K 🔥` `NEW`
1. [逐玉26集封神](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%8926%E9%9B%86%E5%B0%81%E7%A5%9E%23) `180.6K 🔥` `NEW`
1. [岳雨婷直播美颜掉了](https://s.weibo.com/weibo?q=%23%E5%B2%B3%E9%9B%A8%E5%A9%B7%E7%9B%B4%E6%92%AD%E7%BE%8E%E9%A2%9C%E6%8E%89%E4%BA%86%23) `175.1K 🔥` `NEW`
1. [原来命运真的有伏笔](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E5%91%BD%E8%BF%90%E7%9C%9F%E7%9A%84%E6%9C%89%E4%BC%8F%E7%AC%94%23) `174.3K 🔥` `NEW`
1. [油价](https://s.weibo.com/weibo?q=%23%E6%B2%B9%E4%BB%B7%23) `171.0K 🔥` `NEW`
1. [瞿颖胡兵曾相约都单身就生个孩子 (Qu Ying and Hu Bing once agreed to have a baby if they were both single)](https://s.weibo.com/weibo?q=%23%E7%9E%BF%E9%A2%96%E8%83%A1%E5%85%B5%E6%9B%BE%E7%9B%B8%E7%BA%A6%E9%83%BD%E5%8D%95%E8%BA%AB%E5%B0%B1%E7%94%9F%E4%B8%AA%E5%AD%A9%E5%AD%90%23) `170.2K 🔥` `NEW`
1. [黄金进入猴市](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%E8%BF%9B%E5%85%A5%E7%8C%B4%E5%B8%82%23) `167.1K 🔥` `NEW`
1. [作曲家称遭YG强迫堕胎](https://s.weibo.com/weibo?q=%23%E4%BD%9C%E6%9B%B2%E5%AE%B6%E7%A7%B0%E9%81%ADYG%E5%BC%BA%E8%BF%AB%E5%A0%95%E8%83%8E%23) `166.2K 🔥` `NEW`
1. [一个非常降低好感的小细节](https://s.weibo.com/weibo?q=%23%E4%B8%80%E4%B8%AA%E9%9D%9E%E5%B8%B8%E9%99%8D%E4%BD%8E%E5%A5%BD%E6%84%9F%E7%9A%84%E5%B0%8F%E7%BB%86%E8%8A%82%23) `165.3K 🔥` `NEW`
1. [大冰10分钟解决性格软弱问题](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%86%B010%E5%88%86%E9%92%9F%E8%A7%A3%E5%86%B3%E6%80%A7%E6%A0%BC%E8%BD%AF%E5%BC%B1%E9%97%AE%E9%A2%98%23) `164.4K 🔥` `NEW`
1. [瞿颖与老公未领证未举办婚礼](https://s.weibo.com/weibo?q=%23%E7%9E%BF%E9%A2%96%E4%B8%8E%E8%80%81%E5%85%AC%E6%9C%AA%E9%A2%86%E8%AF%81%E6%9C%AA%E4%B8%BE%E5%8A%9E%E5%A9%9A%E7%A4%BC%23) `160.5K 🔥` `NEW`
1. [湖人双杀火箭](https://s.weibo.com/weibo?q=%23%E6%B9%96%E4%BA%BA%E5%8F%8C%E6%9D%80%E7%81%AB%E7%AE%AD%23) `155.8K 🔥` `NEW`
1. [周杰伦新专 圣诞星](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%9D%B0%E4%BC%A6%E6%96%B0%E4%B8%93%20%E5%9C%A3%E8%AF%9E%E6%98%9F%23) `142.2K 🔥` `NEW`
1. [张凌赫的杂志销量](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%9A%84%E6%9D%82%E5%BF%97%E9%94%80%E9%87%8F%23) `131.3K 🔥` `NEW`
1. [看得出她是公主陈妍希](https://s.weibo.com/weibo?q=%23%E7%9C%8B%E5%BE%97%E5%87%BA%E5%A5%B9%E6%98%AF%E5%85%AC%E4%B8%BB%E9%99%88%E5%A6%8D%E5%B8%8C%23) `115.6K 🔥` `NEW`
1. [赵丽颖喜欢自己的新发型 (Zhao Liying likes her new hairstyle)](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%B8%BD%E9%A2%96%E5%96%9C%E6%AC%A2%E8%87%AA%E5%B7%B1%E7%9A%84%E6%96%B0%E5%8F%91%E5%9E%8B%23) `100.3K 🔥` `NEW`
1. [李卿 上桌](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%8D%BF%20%E4%B8%8A%E6%A1%8C%23) `100.2K 🔥` `NEW`
1. [演唱会恐怖游轮](https://s.weibo.com/weibo?q=%23%E6%BC%94%E5%94%B1%E4%BC%9A%E6%81%90%E6%80%96%E6%B8%B8%E8%BD%AE%23) `99.6K 🔥` `NEW`
1. [台当局反制韩国遭群嘲](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E5%BD%93%E5%B1%80%E5%8F%8D%E5%88%B6%E9%9F%A9%E5%9B%BD%E9%81%AD%E7%BE%A4%E5%98%B2%23) `99.4K 🔥` `NEW`
1. [任敏10年前考上全球前十表演学校](https://s.weibo.com/weibo?q=%23%E4%BB%BB%E6%95%8F10%E5%B9%B4%E5%89%8D%E8%80%83%E4%B8%8A%E5%85%A8%E7%90%83%E5%89%8D%E5%8D%81%E8%A1%A8%E6%BC%94%E5%AD%A6%E6%A0%A1%23) `93.9K 🔥` `NEW`
1. [广西通报山林露天堆放垃圾160多吨](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E8%A5%BF%E9%80%9A%E6%8A%A5%E5%B1%B1%E6%9E%97%E9%9C%B2%E5%A4%A9%E5%A0%86%E6%94%BE%E5%9E%83%E5%9C%BE160%E5%A4%9A%E5%90%A8%23) `93.4K 🔥` `NEW`
1. [董明珠回应换车称中国汽车看吉利](https://s.weibo.com/weibo?q=%23%E8%91%A3%E6%98%8E%E7%8F%A0%E5%9B%9E%E5%BA%94%E6%8D%A2%E8%BD%A6%E7%A7%B0%E4%B8%AD%E5%9B%BD%E6%B1%BD%E8%BD%A6%E7%9C%8B%E5%90%89%E5%88%A9%23) `93.3K 🔥` `NEW`
1. [主持人回应赵丽颖被吓到](https://s.weibo.com/weibo?q=%23%E4%B8%BB%E6%8C%81%E4%BA%BA%E5%9B%9E%E5%BA%94%E8%B5%B5%E4%B8%BD%E9%A2%96%E8%A2%AB%E5%90%93%E5%88%B0%23) `93.3K 🔥` `NEW`
1. [俄罗斯考虑提前对欧断供天然气](https://s.weibo.com/weibo?q=%23%E4%BF%84%E7%BD%97%E6%96%AF%E8%80%83%E8%99%91%E6%8F%90%E5%89%8D%E5%AF%B9%E6%AC%A7%E6%96%AD%E4%BE%9B%E5%A4%A9%E7%84%B6%E6%B0%94%23) `93.2K 🔥` `NEW`
1. [陈伟霆向涵之我一秒嗑上](https://s.weibo.com/weibo?q=%23%E9%99%88%E4%BC%9F%E9%9C%86%E5%90%91%E6%B6%B5%E4%B9%8B%E6%88%91%E4%B8%80%E7%A7%92%E5%97%91%E4%B8%8A%23) `91.7K 🔥` `NEW`
1. [QQ飞车手游 (QQ Speed ​​Mobile Game)](https://s.weibo.com/weibo?q=%23QQ%E9%A3%9E%E8%BD%A6%E6%89%8B%E6%B8%B8%23) `89.9K 🔥` `NEW`
1. [何穗有容貌焦虑](https://s.weibo.com/weibo?q=%23%E4%BD%95%E7%A9%97%E6%9C%89%E5%AE%B9%E8%B2%8C%E7%84%A6%E8%99%91%23) `85.8K 🔥` `NEW`
1. [国际乒联双打世界杯](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E9%99%85%E4%B9%92%E8%81%94%E5%8F%8C%E6%89%93%E4%B8%96%E7%95%8C%E6%9D%AF%23) `85.0K 🔥` `NEW`
1. [朱雀二号](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E9%9B%80%E4%BA%8C%E5%8F%B7%23) `84.8K 🔥` `NEW`
1. [4S店称吃饭超260次客户已报警](https://s.weibo.com/weibo?q=%234S%E5%BA%97%E7%A7%B0%E5%90%83%E9%A5%AD%E8%B6%85260%E6%AC%A1%E5%AE%A2%E6%88%B7%E5%B7%B2%E6%8A%A5%E8%AD%A6%23) `798.0K 🔥` `+190%`
1. [买橘朵上拼多多好价不用等 (Buy orange blossoms at a good price on Pinduoduo without having to wait.)](https://s.weibo.com/weibo?q=%23%E4%B9%B0%E6%A9%98%E6%9C%B5%E4%B8%8A%E6%8B%BC%E5%A4%9A%E5%A4%9A%E5%A5%BD%E4%BB%B7%E4%B8%8D%E7%94%A8%E7%AD%89%23) `251.5K 🔥` `+138%`
1. [沙县鸡腿饭中国宝宝的减脂餐 (Shaxian Chicken Leg Rice, a fat-reducing meal for Chinese babies)](https://s.weibo.com/weibo?q=%23%E6%B2%99%E5%8E%BF%E9%B8%A1%E8%85%BF%E9%A5%AD%E4%B8%AD%E5%9B%BD%E5%AE%9D%E5%AE%9D%E7%9A%84%E5%87%8F%E8%84%82%E9%A4%90%23) `175.9K 🔥`
1. [张凌赫杂志](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E6%9D%82%E5%BF%97%23) `174.0K 🔥`
1. [小米汽车 舒淇](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E6%B1%BD%E8%BD%A6%20%E8%88%92%E6%B7%87%23) `170.8K 🔥`
1. [伊朗发起报复行动](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%8F%91%E8%B5%B7%E6%8A%A5%E5%A4%8D%E8%A1%8C%E5%8A%A8%23) `169.1K 🔥`
1. [小酒窝不想看妈妈在剧里被打](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E9%85%92%E7%AA%9D%E4%B8%8D%E6%83%B3%E7%9C%8B%E5%A6%88%E5%A6%88%E5%9C%A8%E5%89%A7%E9%87%8C%E8%A2%AB%E6%89%93%23) `168.8K 🔥`
1. [美将只剩一艘航母用于对伊朗袭击](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%B0%86%E5%8F%AA%E5%89%A9%E4%B8%80%E8%89%98%E8%88%AA%E6%AF%8D%E7%94%A8%E4%BA%8E%E5%AF%B9%E4%BC%8A%E6%9C%97%E8%A2%AD%E5%87%BB%23) `177.1K 🔥` `-39%`
1. [歌手2026拟邀 (Singer 2026 to be invited)](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B2026%E6%8B%9F%E9%82%80%23) `173.0K 🔥` `-85%`
1. [妻子肺癌晚期求丈夫送至安宁病房 (Wife’s terminal lung cancer begs her husband to send her to hospice ward)](https://s.weibo.com/weibo?q=%23%E5%A6%BB%E5%AD%90%E8%82%BA%E7%99%8C%E6%99%9A%E6%9C%9F%E6%B1%82%E4%B8%88%E5%A4%AB%E9%80%81%E8%87%B3%E5%AE%89%E5%AE%81%E7%97%85%E6%88%BF%23) `172.0K 🔥` `-45%`
1. [男子因虚荣心冒充消防员多店检查](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%9B%A0%E8%99%9A%E8%8D%A3%E5%BF%83%E5%86%92%E5%85%85%E6%B6%88%E9%98%B2%E5%91%98%E5%A4%9A%E5%BA%97%E6%A3%80%E6%9F%A5%23) `117.2K 🔥` `-86%`
1. [AI演员 假人感](https://s.weibo.com/weibo?q=%23AI%E6%BC%94%E5%91%98%20%E5%81%87%E4%BA%BA%E6%84%9F%23) `110.7K 🔥` `-44%`
1. [如果一个人长期不工作 (If a person does not work for a long time)](https://s.weibo.com/weibo?q=%23%E5%A6%82%E6%9E%9C%E4%B8%80%E4%B8%AA%E4%BA%BA%E9%95%BF%E6%9C%9F%E4%B8%8D%E5%B7%A5%E4%BD%9C%23) `100.8K 🔥` `-27%`
1. [印度一家人将老人装进麻袋寄快递](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%BA%A6%E4%B8%80%E5%AE%B6%E4%BA%BA%E5%B0%86%E8%80%81%E4%BA%BA%E8%A3%85%E8%BF%9B%E9%BA%BB%E8%A2%8B%E5%AF%84%E5%BF%AB%E9%80%92%23) `99.8K 🔥` `-46%`
1. [THEBOYZ解约](https://s.weibo.com/weibo?q=%23THEBOYZ%E8%A7%A3%E7%BA%A6%23) `99.5K 🔥` `-51%`
1. [周也演技](https://s.weibo.com/weibo?q=%23%E5%91%A8%E4%B9%9F%E6%BC%94%E6%8A%80%23) `93.4K 🔥` `-75%`
1. [樊长玉没让谢征牵手](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E9%95%BF%E7%8E%89%E6%B2%A1%E8%AE%A9%E8%B0%A2%E5%BE%81%E7%89%B5%E6%89%8B%23) `93.3K 🔥` `-67%`

Updated at 2026-03-19 13:06:01

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
