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

1. [马兴瑞被双开 (Ma Xingrui was double kicked)](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%85%B4%E7%91%9E%E8%A2%AB%E5%8F%8C%E5%BC%80%23) `1.6M 🔥` `NEW`
1. [乐事 蓝色薯片](https://s.weibo.com/weibo?q=%23%E4%B9%90%E4%BA%8B%20%E8%93%9D%E8%89%B2%E8%96%AF%E7%89%87%23) `1.1M 🔥` `NEW`
1. [一组先行指标看中国经济](https://s.weibo.com/weibo?q=%23%E4%B8%80%E7%BB%84%E5%85%88%E8%A1%8C%E6%8C%87%E6%A0%87%E7%9C%8B%E4%B8%AD%E5%9B%BD%E7%BB%8F%E6%B5%8E%23) `959.8K 🔥` `NEW`
1. [女子把绿豆汤当水喝致脑出血](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%8A%8A%E7%BB%BF%E8%B1%86%E6%B1%A4%E5%BD%93%E6%B0%B4%E5%96%9D%E8%87%B4%E8%84%91%E5%87%BA%E8%A1%80%23) `953.1K 🔥` `NEW`
1. [超250万人请愿将阿根廷逐出世界杯](https://s.weibo.com/weibo?q=%23%E8%B6%85250%E4%B8%87%E4%BA%BA%E8%AF%B7%E6%84%BF%E5%B0%86%E9%98%BF%E6%A0%B9%E5%BB%B7%E9%80%90%E5%87%BA%E4%B8%96%E7%95%8C%E6%9D%AF%23) `890.5K 🔥` `NEW`
1. [男子编造股市虚假信息被立案调查](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E7%BC%96%E9%80%A0%E8%82%A1%E5%B8%82%E8%99%9A%E5%81%87%E4%BF%A1%E6%81%AF%E8%A2%AB%E7%AB%8B%E6%A1%88%E8%B0%83%E6%9F%A5%23) `871.9K 🔥` `NEW`
1. [TMEA盛典阵容官宣](https://s.weibo.com/weibo?q=%23TMEA%E7%9B%9B%E5%85%B8%E9%98%B5%E5%AE%B9%E5%AE%98%E5%AE%A3%23) `834.1K 🔥` `NEW`
1. [中国人一旦吃饱就触发善良人格](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E4%BA%BA%E4%B8%80%E6%97%A6%E5%90%83%E9%A5%B1%E5%B0%B1%E8%A7%A6%E5%8F%91%E5%96%84%E8%89%AF%E4%BA%BA%E6%A0%BC%23) `810.5K 🔥` `NEW`
1. [歌手2026突围名单](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B2026%E7%AA%81%E5%9B%B4%E5%90%8D%E5%8D%95%23) `760.9K 🔥` `NEW`
1. [副局长自购10亿token月费20多](https://s.weibo.com/weibo?q=%23%E5%89%AF%E5%B1%80%E9%95%BF%E8%87%AA%E8%B4%AD10%E4%BA%BFtoken%E6%9C%88%E8%B4%B920%E5%A4%9A%23) `541.0K 🔥` `NEW`
1. [哈兰德抱着浣熊回挪威 (Haaland carries raccoon back to Norway)](https://s.weibo.com/weibo?q=%23%E5%93%88%E5%85%B0%E5%BE%B7%E6%8A%B1%E7%9D%80%E6%B5%A3%E7%86%8A%E5%9B%9E%E6%8C%AA%E5%A8%81%23) `536.6K 🔥` `NEW`
1. [俞敏洪回应明明天权孙东旭合伙](https://s.weibo.com/weibo?q=%23%E4%BF%9E%E6%95%8F%E6%B4%AA%E5%9B%9E%E5%BA%94%E6%98%8E%E6%98%8E%E5%A4%A9%E6%9D%83%E5%AD%99%E4%B8%9C%E6%97%AD%E5%90%88%E4%BC%99%23) `513.5K 🔥` `NEW`
1. [周子瑜不与JYP续约](https://s.weibo.com/weibo?q=%23%E5%91%A8%E5%AD%90%E7%91%9C%E4%B8%8D%E4%B8%8EJYP%E7%BB%AD%E7%BA%A6%23) `479.4K 🔥` `NEW`
1. [白鹿莫离被删戏编剧证实](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E8%8E%AB%E7%A6%BB%E8%A2%AB%E5%88%A0%E6%88%8F%E7%BC%96%E5%89%A7%E8%AF%81%E5%AE%9E%23) `468.3K 🔥` `NEW`
1. [A股失守3900](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E5%A4%B1%E5%AE%883900%23) `457.6K 🔥` `NEW`
1. [电影八仙提档](https://s.weibo.com/weibo?q=%23%E7%94%B5%E5%BD%B1%E5%85%AB%E4%BB%99%E6%8F%90%E6%A1%A3%23) `443.4K 🔥` `NEW`
1. [kpop史诗级直播被下架](https://s.weibo.com/weibo?q=%23kpop%E5%8F%B2%E8%AF%97%E7%BA%A7%E7%9B%B4%E6%92%AD%E8%A2%AB%E4%B8%8B%E6%9E%B6%23) `410.9K 🔥` `NEW`
1. [乐事回应薯片中被曝出现蓝色异物](https://s.weibo.com/weibo?q=%23%E4%B9%90%E4%BA%8B%E5%9B%9E%E5%BA%94%E8%96%AF%E7%89%87%E4%B8%AD%E8%A2%AB%E6%9B%9D%E5%87%BA%E7%8E%B0%E8%93%9D%E8%89%B2%E5%BC%82%E7%89%A9%23) `381.6K 🔥` `NEW`
1. [法国男子来上海出差背了一台空调回国](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%9B%BD%E7%94%B7%E5%AD%90%E6%9D%A5%E4%B8%8A%E6%B5%B7%E5%87%BA%E5%B7%AE%E8%83%8C%E4%BA%86%E4%B8%80%E5%8F%B0%E7%A9%BA%E8%B0%83%E5%9B%9E%E5%9B%BD%23) `367.3K 🔥` `NEW`
1. [iOS27公测版来了](https://s.weibo.com/weibo?q=%23iOS27%E5%85%AC%E6%B5%8B%E7%89%88%E6%9D%A5%E4%BA%86%23) `367.3K 🔥` `NEW`
1. [横州灾区村民每天回废墟看一眼 (Villagers in the Hengzhou disaster area return to the ruins every day to take a look)](https://s.weibo.com/weibo?q=%23%E6%A8%AA%E5%B7%9E%E7%81%BE%E5%8C%BA%E6%9D%91%E6%B0%91%E6%AF%8F%E5%A4%A9%E5%9B%9E%E5%BA%9F%E5%A2%9F%E7%9C%8B%E4%B8%80%E7%9C%BC%23) `367.3K 🔥` `NEW`
1. [功夫女足](https://s.weibo.com/weibo?q=%23%E5%8A%9F%E5%A4%AB%E5%A5%B3%E8%B6%B3%23) `353.2K 🔥` `NEW`
1. [施南生是百分百痴情女子](https://s.weibo.com/weibo?q=%23%E6%96%BD%E5%8D%97%E7%94%9F%E6%98%AF%E7%99%BE%E5%88%86%E7%99%BE%E7%97%B4%E6%83%85%E5%A5%B3%E5%AD%90%23) `279.5K 🔥` `NEW`
1. [林青霞发文不舍施南生](https://s.weibo.com/weibo?q=%23%E6%9E%97%E9%9D%92%E9%9C%9E%E5%8F%91%E6%96%87%E4%B8%8D%E8%88%8D%E6%96%BD%E5%8D%97%E7%94%9F%23) `263.1K 🔥` `NEW`
1. [龙蟒归队 军心大定](https://s.weibo.com/weibo?q=%23%E9%BE%99%E8%9F%92%E5%BD%92%E9%98%9F%20%E5%86%9B%E5%BF%83%E5%A4%A7%E5%AE%9A%23) `260.2K 🔥` `NEW`
1. [张小斐悬空一字马](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%B0%8F%E6%96%90%E6%82%AC%E7%A9%BA%E4%B8%80%E5%AD%97%E9%A9%AC%23) `259.6K 🔥` `NEW`
1. [美人鱼2早在18年就杀青了](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E4%BA%BA%E9%B1%BC2%E6%97%A9%E5%9C%A818%E5%B9%B4%E5%B0%B1%E6%9D%80%E9%9D%92%E4%BA%86%23) `256.0K 🔥` `NEW`
1. [周星驰放弃AI换脸的捷径](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%98%9F%E9%A9%B0%E6%94%BE%E5%BC%83AI%E6%8D%A2%E8%84%B8%E7%9A%84%E6%8D%B7%E5%BE%84%23) `228.4K 🔥` `NEW`
1. [种地吧](https://s.weibo.com/weibo?q=%23%E7%A7%8D%E5%9C%B0%E5%90%A7%23) `206.5K 🔥` `NEW`
1. [沈阳暴雨大航海模式](https://s.weibo.com/weibo?q=%23%E6%B2%88%E9%98%B3%E6%9A%B4%E9%9B%A8%E5%A4%A7%E8%88%AA%E6%B5%B7%E6%A8%A1%E5%BC%8F%23) `188.8K 🔥` `NEW`
1. [孟子义徐正溪戏里做不到的戏外做到了 (What Meng Ziyi and Xu Zhengxi couldn’t do in the play did it off-screen)](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89%E5%BE%90%E6%AD%A3%E6%BA%AA%E6%88%8F%E9%87%8C%E5%81%9A%E4%B8%8D%E5%88%B0%E7%9A%84%E6%88%8F%E5%A4%96%E5%81%9A%E5%88%B0%E4%BA%86%23) `188.6K 🔥` `NEW`
1. [刘耀文不会做饭但宋亚轩吃过他的牛肉丝](https://s.weibo.com/weibo?q=%23%E5%88%98%E8%80%80%E6%96%87%E4%B8%8D%E4%BC%9A%E5%81%9A%E9%A5%AD%E4%BD%86%E5%AE%8B%E4%BA%9A%E8%BD%A9%E5%90%83%E8%BF%87%E4%BB%96%E7%9A%84%E7%89%9B%E8%82%89%E4%B8%9D%23) `188.5K 🔥` `NEW`
1. [老板奖励泡积水里才请假小伙500元](https://s.weibo.com/weibo?q=%23%E8%80%81%E6%9D%BF%E5%A5%96%E5%8A%B1%E6%B3%A1%E7%A7%AF%E6%B0%B4%E9%87%8C%E6%89%8D%E8%AF%B7%E5%81%87%E5%B0%8F%E4%BC%99500%E5%85%83%23) `188.5K 🔥` `NEW`
1. [成毅跑太快没收住扑进人群](https://s.weibo.com/weibo?q=%23%E6%88%90%E6%AF%85%E8%B7%91%E5%A4%AA%E5%BF%AB%E6%B2%A1%E6%94%B6%E4%BD%8F%E6%89%91%E8%BF%9B%E4%BA%BA%E7%BE%A4%23) `186.9K 🔥` `NEW`
1. [周子瑜继续twice跟团活动](https://s.weibo.com/weibo?q=%23%E5%91%A8%E5%AD%90%E7%91%9C%E7%BB%A7%E7%BB%ADtwice%E8%B7%9F%E5%9B%A2%E6%B4%BB%E5%8A%A8%23) `186.0K 🔥` `NEW`
1. [油价又大涨](https://s.weibo.com/weibo?q=%23%E6%B2%B9%E4%BB%B7%E5%8F%88%E5%A4%A7%E6%B6%A8%23) `162.3K 🔥` `NEW`
1. [小米汽车紧急避险](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E6%B1%BD%E8%BD%A6%E7%B4%A7%E6%80%A5%E9%81%BF%E9%99%A9%23) `162.2K 🔥` `NEW`
1. [中国AI便宜到不用需向CFO解释](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BDAI%E4%BE%BF%E5%AE%9C%E5%88%B0%E4%B8%8D%E7%94%A8%E9%9C%80%E5%90%91CFO%E8%A7%A3%E9%87%8A%23) `161.9K 🔥` `NEW`
1. [成毅路人结巴说好帅](https://s.weibo.com/weibo?q=%23%E6%88%90%E6%AF%85%E8%B7%AF%E4%BA%BA%E7%BB%93%E5%B7%B4%E8%AF%B4%E5%A5%BD%E5%B8%85%23) `161.8K 🔥` `NEW`
1. [零百1秒级的中国超跑太帅了 (The Chinese supercar that clocks 0.1 seconds is so handsome)](https://s.weibo.com/weibo?q=%23%E9%9B%B6%E7%99%BE1%E7%A7%92%E7%BA%A7%E7%9A%84%E4%B8%AD%E5%9B%BD%E8%B6%85%E8%B7%91%E5%A4%AA%E5%B8%85%E4%BA%86%23) `957.4K 🔥` `+728%`
1. [跑男收官焦点不该是白鹿章若楠妆容](https://s.weibo.com/weibo?q=%23%E8%B7%91%E7%94%B7%E6%94%B6%E5%AE%98%E7%84%A6%E7%82%B9%E4%B8%8D%E8%AF%A5%E6%98%AF%E7%99%BD%E9%B9%BF%E7%AB%A0%E8%8B%A5%E6%A5%A0%E5%A6%86%E5%AE%B9%23) `367.3K 🔥` `+63%`
1. [八仙 (the Eight Immortals)](https://s.weibo.com/weibo?q=%23%E5%85%AB%E4%BB%99%23) `189.4K 🔥` `+37%`
1. [张雅琪回应中餐厅表现争议 (Zhang Yaqi responds to Chinese restaurant performance controversy)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%85%E7%90%AA%E5%9B%9E%E5%BA%94%E4%B8%AD%E9%A4%90%E5%8E%85%E8%A1%A8%E7%8E%B0%E4%BA%89%E8%AE%AE%23) `936.4K 🔥`
1. [中餐厅客人观众都不舒服了 (The customers and spectators in the Chinese restaurant are feeling uncomfortable)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E9%A4%90%E5%8E%85%E5%AE%A2%E4%BA%BA%E8%A7%82%E4%BC%97%E9%83%BD%E4%B8%8D%E8%88%92%E6%9C%8D%E4%BA%86%23) `367.3K 🔥`
1. [杭州警方通报一甜品店主被刺身亡](https://s.weibo.com/weibo?q=%23%E6%9D%AD%E5%B7%9E%E8%AD%A6%E6%96%B9%E9%80%9A%E6%8A%A5%E4%B8%80%E7%94%9C%E5%93%81%E5%BA%97%E4%B8%BB%E8%A2%AB%E5%88%BA%E8%BA%AB%E4%BA%A1%23) `216.2K 🔥`
1. [阿根廷队想给广西捐赠物资 (The Argentine team wants to donate supplies to Guangxi)](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E9%98%9F%E6%83%B3%E7%BB%99%E5%B9%BF%E8%A5%BF%E6%8D%90%E8%B5%A0%E7%89%A9%E8%B5%84%23) `354.3K 🔥` `-76%`
1. [暑假档只剩野狗骨头有广了](https://s.weibo.com/weibo?q=%23%E6%9A%91%E5%81%87%E6%A1%A3%E5%8F%AA%E5%89%A9%E9%87%8E%E7%8B%97%E9%AA%A8%E5%A4%B4%E6%9C%89%E5%B9%BF%E4%BA%86%23) `344.9K 🔥` `-66%`
1. [海力士暴跌致韩国散户爆仓](https://s.weibo.com/weibo?q=%23%E6%B5%B7%E5%8A%9B%E5%A3%AB%E6%9A%B4%E8%B7%8C%E8%87%B4%E9%9F%A9%E5%9B%BD%E6%95%A3%E6%88%B7%E7%88%86%E4%BB%93%23) `282.0K 🔥` `-37%`
1. [马龙 退不了休了](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E9%BE%99%20%E9%80%80%E4%B8%8D%E4%BA%86%E4%BC%91%E4%BA%86%23) `228.6K 🔥` `-65%`
1. [超强厄尔尼诺真要来了](https://s.weibo.com/weibo?q=%23%E8%B6%85%E5%BC%BA%E5%8E%84%E5%B0%94%E5%B0%BC%E8%AF%BA%E7%9C%9F%E8%A6%81%E6%9D%A5%E4%BA%86%23) `226.8K 🔥` `-86%`
1. [遭仅退款损失20万老板有单也不敢接](https://s.weibo.com/weibo?q=%23%E9%81%AD%E4%BB%85%E9%80%80%E6%AC%BE%E6%8D%9F%E5%A4%B120%E4%B8%87%E8%80%81%E6%9D%BF%E6%9C%89%E5%8D%95%E4%B9%9F%E4%B8%8D%E6%95%A2%E6%8E%A5%23) `162.7K 🔥` `-81%`
1. [中餐厅 张雅琪 (Chinese Restaurant Zhang Yaqi)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E9%A4%90%E5%8E%85%20%E5%BC%A0%E9%9B%85%E7%90%AA%23) `162.5K 🔥` `-21%`

Updated at 2026-07-14 12:09:53

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
