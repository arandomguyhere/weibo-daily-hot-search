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

1. [退货千万不要提前给取件码 (Never give a pickup code in advance when returning goods)](https://s.weibo.com/weibo?q=%23%E9%80%80%E8%B4%A7%E5%8D%83%E4%B8%87%E4%B8%8D%E8%A6%81%E6%8F%90%E5%89%8D%E7%BB%99%E5%8F%96%E4%BB%B6%E7%A0%81%23) `2.4M 🔥` `NEW`
1. [感冒灵正式纳入禁驾清单](https://s.weibo.com/weibo?q=%23%E6%84%9F%E5%86%92%E7%81%B5%E6%AD%A3%E5%BC%8F%E7%BA%B3%E5%85%A5%E7%A6%81%E9%A9%BE%E6%B8%85%E5%8D%95%23) `1.6M 🔥` `NEW`
1. [日本7.1级地震民众哭喊声一片](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC7.1%E7%BA%A7%E5%9C%B0%E9%9C%87%E6%B0%91%E4%BC%97%E5%93%AD%E5%96%8A%E5%A3%B0%E4%B8%80%E7%89%87%23) `971.6K 🔥` `NEW`
1. [花儿与少年8录制回国](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%84%BF%E4%B8%8E%E5%B0%91%E5%B9%B48%E5%BD%95%E5%88%B6%E5%9B%9E%E5%9B%BD%23) `500.9K 🔥` `NEW`
1. [齐达内出任法国国家队主教练](https://s.weibo.com/weibo?q=%23%E9%BD%90%E8%BE%BE%E5%86%85%E5%87%BA%E4%BB%BB%E6%B3%95%E5%9B%BD%E5%9B%BD%E5%AE%B6%E9%98%9F%E4%B8%BB%E6%95%99%E7%BB%83%23) `423.7K 🔥` `NEW`
1. [张馨予海边比基尼大片](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%A6%A8%E4%BA%88%E6%B5%B7%E8%BE%B9%E6%AF%94%E5%9F%BA%E5%B0%BC%E5%A4%A7%E7%89%87%23) `422.7K 🔥` `NEW`
1. [王虹戴卡地亚且衣品好](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%99%B9%E6%88%B4%E5%8D%A1%E5%9C%B0%E4%BA%9A%E4%B8%94%E8%A1%A3%E5%93%81%E5%A5%BD%23) `419.1K 🔥` `NEW`
1. [GMM致歉](https://s.weibo.com/weibo?q=%23GMM%E8%87%B4%E6%AD%89%23) `416.9K 🔥` `NEW`
1. [朱志鑫 造型](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E5%BF%97%E9%91%AB%20%E9%80%A0%E5%9E%8B%23) `414.1K 🔥` `NEW`
1. [上海街头偶遇Angelababy](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E8%A1%97%E5%A4%B4%E5%81%B6%E9%81%87Angelababy%23) `409.8K 🔥` `NEW`
1. [刘亦菲 富有且大方 (Liu Yifei is rich and generous)](https://s.weibo.com/weibo?q=%23%E5%88%98%E4%BA%A6%E8%8F%B2%20%E5%AF%8C%E6%9C%89%E4%B8%94%E5%A4%A7%E6%96%B9%23) `405.1K 🔥` `NEW`
1. [张馨予你辣到我了](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%A6%A8%E4%BA%88%E4%BD%A0%E8%BE%A3%E5%88%B0%E6%88%91%E4%BA%86%23) `399.7K 🔥` `NEW`
1. [GMM与当事人和解](https://s.weibo.com/weibo?q=%23GMM%E4%B8%8E%E5%BD%93%E4%BA%8B%E4%BA%BA%E5%92%8C%E8%A7%A3%23) `389.3K 🔥` `NEW`
1. [三甲医院凭假结婚证通过试管审核](https://s.weibo.com/weibo?q=%23%E4%B8%89%E7%94%B2%E5%8C%BB%E9%99%A2%E5%87%AD%E5%81%87%E7%BB%93%E5%A9%9A%E8%AF%81%E9%80%9A%E8%BF%87%E8%AF%95%E7%AE%A1%E5%AE%A1%E6%A0%B8%23) `372.5K 🔥` `NEW`
1. [撞脸马斯克的烧烤老板也姓马](https://s.weibo.com/weibo?q=%23%E6%92%9E%E8%84%B8%E9%A9%AC%E6%96%AF%E5%85%8B%E7%9A%84%E7%83%A7%E7%83%A4%E8%80%81%E6%9D%BF%E4%B9%9F%E5%A7%93%E9%A9%AC%23) `356.9K 🔥` `NEW`
1. [科技股大跌原因](https://s.weibo.com/weibo?q=%23%E7%A7%91%E6%8A%80%E8%82%A1%E5%A4%A7%E8%B7%8C%E5%8E%9F%E5%9B%A0%23) `348.6K 🔥` `NEW`
1. [全款买房的人变多](https://s.weibo.com/weibo?q=%23%E5%85%A8%E6%AC%BE%E4%B9%B0%E6%88%BF%E7%9A%84%E4%BA%BA%E5%8F%98%E5%A4%9A%23) `303.3K 🔥` `NEW`
1. [何与朋友圈健身照滤镜](https://s.weibo.com/weibo?q=%23%E4%BD%95%E4%B8%8E%E6%9C%8B%E5%8F%8B%E5%9C%88%E5%81%A5%E8%BA%AB%E7%85%A7%E6%BB%A4%E9%95%9C%23) `268.8K 🔥` `NEW`
1. [御廷谣](https://s.weibo.com/weibo?q=%23%E5%BE%A1%E5%BB%B7%E8%B0%A3%23) `206.6K 🔥` `NEW`
1. [差点没认出这是王菊](https://s.weibo.com/weibo?q=%23%E5%B7%AE%E7%82%B9%E6%B2%A1%E8%AE%A4%E5%87%BA%E8%BF%99%E6%98%AF%E7%8E%8B%E8%8F%8A%23) `206.4K 🔥` `NEW`
1. [时代少年团带妆下班 (Times Youth League wears makeup off work)](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E5%B8%A6%E5%A6%86%E4%B8%8B%E7%8F%AD%23) `206.2K 🔥` `NEW`
1. [第五人格](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%BA%94%E4%BA%BA%E6%A0%BC%23) `206.0K 🔥` `NEW`
1. [日本7.1级地震现场画面曝光](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC7.1%E7%BA%A7%E5%9C%B0%E9%9C%87%E7%8E%B0%E5%9C%BA%E7%94%BB%E9%9D%A2%E6%9B%9D%E5%85%89%23) `205.9K 🔥` `NEW`
1. [武大口腔通报女孩正颌反成鞋拔子脸](https://s.weibo.com/weibo?q=%23%E6%AD%A6%E5%A4%A7%E5%8F%A3%E8%85%94%E9%80%9A%E6%8A%A5%E5%A5%B3%E5%AD%A9%E6%AD%A3%E9%A2%8C%E5%8F%8D%E6%88%90%E9%9E%8B%E6%8B%94%E5%AD%90%E8%84%B8%23) `200.2K 🔥` `NEW`
1. [76人官方海报詹姆斯C位](https://s.weibo.com/weibo?q=%2376%E4%BA%BA%E5%AE%98%E6%96%B9%E6%B5%B7%E6%8A%A5%E8%A9%B9%E5%A7%86%E6%96%AFC%E4%BD%8D%23) `178.6K 🔥` `NEW`
1. [北舞严选张月身材体态私教课](https://s.weibo.com/weibo?q=%23%E5%8C%97%E8%88%9E%E4%B8%A5%E9%80%89%E5%BC%A0%E6%9C%88%E8%BA%AB%E6%9D%90%E4%BD%93%E6%80%81%E7%A7%81%E6%95%99%E8%AF%BE%23) `174.5K 🔥` `NEW`
1. [女子称中奖3万元兑奖遭拒](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E7%A7%B0%E4%B8%AD%E5%A5%963%E4%B8%87%E5%85%83%E5%85%91%E5%A5%96%E9%81%AD%E6%8B%92%23) `165.3K 🔥` `NEW`
1. [突然意识到我真的被AI养的很好](https://s.weibo.com/weibo?q=%23%E7%AA%81%E7%84%B6%E6%84%8F%E8%AF%86%E5%88%B0%E6%88%91%E7%9C%9F%E7%9A%84%E8%A2%ABAI%E5%85%BB%E7%9A%84%E5%BE%88%E5%A5%BD%23) `162.3K 🔥` `NEW`
1. [全网最尊重空气炸锅的媒人](https://s.weibo.com/weibo?q=%23%E5%85%A8%E7%BD%91%E6%9C%80%E5%B0%8A%E9%87%8D%E7%A9%BA%E6%B0%94%E7%82%B8%E9%94%85%E7%9A%84%E5%AA%92%E4%BA%BA%23) `157.4K 🔥` `NEW`
1. [杀鱼女孩有一柜子洗不干净的工作服](https://s.weibo.com/weibo?q=%23%E6%9D%80%E9%B1%BC%E5%A5%B3%E5%AD%A9%E6%9C%89%E4%B8%80%E6%9F%9C%E5%AD%90%E6%B4%97%E4%B8%8D%E5%B9%B2%E5%87%80%E7%9A%84%E5%B7%A5%E4%BD%9C%E6%9C%8D%23) `155.7K 🔥` `NEW`
1. [讲一个从别人身上学到的好习惯 (Tell me about a good habit you learned from others)](https://s.weibo.com/weibo?q=%23%E8%AE%B2%E4%B8%80%E4%B8%AA%E4%BB%8E%E5%88%AB%E4%BA%BA%E8%BA%AB%E4%B8%8A%E5%AD%A6%E5%88%B0%E7%9A%84%E5%A5%BD%E4%B9%A0%E6%83%AF%23) `155.6K 🔥` `NEW`
1. [AI生成的头发已经可以这样了么](https://s.weibo.com/weibo?q=%23AI%E7%94%9F%E6%88%90%E7%9A%84%E5%A4%B4%E5%8F%91%E5%B7%B2%E7%BB%8F%E5%8F%AF%E4%BB%A5%E8%BF%99%E6%A0%B7%E4%BA%86%E4%B9%88%23) `146.8K 🔥` `NEW`
1. [苏新皓 红海视角](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E6%96%B0%E7%9A%93%20%E7%BA%A2%E6%B5%B7%E8%A7%86%E8%A7%92%23) `143.2K 🔥` `NEW`
1. [穆祉丞变化真的好明显](https://s.weibo.com/weibo?q=%23%E7%A9%86%E7%A5%89%E4%B8%9E%E5%8F%98%E5%8C%96%E7%9C%9F%E7%9A%84%E5%A5%BD%E6%98%8E%E6%98%BE%23) `142.7K 🔥` `NEW`
1. [日本7.1级地震江浙沪有震感](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC7.1%E7%BA%A7%E5%9C%B0%E9%9C%87%E6%B1%9F%E6%B5%99%E6%B2%AA%E6%9C%89%E9%9C%87%E6%84%9F%23) `1.1M 🔥` `+140%`
1. [爸妈吵了半小时孩子才同意买玩具](https://s.weibo.com/weibo?q=%23%E7%88%B8%E5%A6%88%E5%90%B5%E4%BA%86%E5%8D%8A%E5%B0%8F%E6%97%B6%E5%AD%A9%E5%AD%90%E6%89%8D%E5%90%8C%E6%84%8F%E4%B9%B0%E7%8E%A9%E5%85%B7%23) `692.9K 🔥` `+413%`
1. [天才程序员陨落](https://s.weibo.com/weibo?q=%23%E5%A4%A9%E6%89%8D%E7%A8%8B%E5%BA%8F%E5%91%98%E9%99%A8%E8%90%BD%23) `444.3K 🔥` `+161%`
1. [刘亦菲给员工送黄金 (Liu Yifei gives gold to employees)](https://s.weibo.com/weibo?q=%23%E5%88%98%E4%BA%A6%E8%8F%B2%E7%BB%99%E5%91%98%E5%B7%A5%E9%80%81%E9%BB%84%E9%87%91%23) `407.4K 🔥`
1. [泰国国家旅游局发文致歉](https://s.weibo.com/weibo?q=%23%E6%B3%B0%E5%9B%BD%E5%9B%BD%E5%AE%B6%E6%97%85%E6%B8%B8%E5%B1%80%E5%8F%91%E6%96%87%E8%87%B4%E6%AD%89%23) `404.3K 🔥`
1. [请查收这份家庭防汛防灾应急包](https://s.weibo.com/weibo?q=%23%E8%AF%B7%E6%9F%A5%E6%94%B6%E8%BF%99%E4%BB%BD%E5%AE%B6%E5%BA%AD%E9%98%B2%E6%B1%9B%E9%98%B2%E7%81%BE%E5%BA%94%E6%80%A5%E5%8C%85%23) `1.2M 🔥` `-35%`
1. [日本地震 (japan earthquake)](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E5%9C%B0%E9%9C%87%23) `430.4K 🔥` `-89%`
1. [上海震感](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E9%9C%87%E6%84%9F%23) `409.5K 🔥` `-79%`
1. [王菊一念江南古装路透 (Wang Ju's thoughts on Jiangnan Ancient Costume Reuters)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%8F%8A%E4%B8%80%E5%BF%B5%E6%B1%9F%E5%8D%97%E5%8F%A4%E8%A3%85%E8%B7%AF%E9%80%8F%23) `400.9K 🔥` `-35%`
1. [患癌妻子申请销毁婚外胚胎遭拒](https://s.weibo.com/weibo?q=%23%E6%82%A3%E7%99%8C%E5%A6%BB%E5%AD%90%E7%94%B3%E8%AF%B7%E9%94%80%E6%AF%81%E5%A9%9A%E5%A4%96%E8%83%9A%E8%83%8E%E9%81%AD%E6%8B%92%23) `397.3K 🔥` `-60%`
1. [改善脖子前倾最简单的动作](https://s.weibo.com/weibo?q=%23%E6%94%B9%E5%96%84%E8%84%96%E5%AD%90%E5%89%8D%E5%80%BE%E6%9C%80%E7%AE%80%E5%8D%95%E7%9A%84%E5%8A%A8%E4%BD%9C%23) `356.8K 🔥` `-81%`
1. [C罗无世界杯冠军遭航空公司嘲讽](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E6%97%A0%E4%B8%96%E7%95%8C%E6%9D%AF%E5%86%A0%E5%86%9B%E9%81%AD%E8%88%AA%E7%A9%BA%E5%85%AC%E5%8F%B8%E5%98%B2%E8%AE%BD%23) `206.5K 🔥` `-56%`
1. [熬夜时最恐怖的事](https://s.weibo.com/weibo?q=%23%E7%86%AC%E5%A4%9C%E6%97%B6%E6%9C%80%E6%81%90%E6%80%96%E7%9A%84%E4%BA%8B%23) `206.1K 🔥` `-59%`
1. [折个鸡](https://s.weibo.com/weibo?q=%23%E6%8A%98%E4%B8%AA%E9%B8%A1%23) `164.5K 🔥` `-47%`
1. [管乐加黄灿灿微信秀美甲](https://s.weibo.com/weibo?q=%23%E7%AE%A1%E4%B9%90%E5%8A%A0%E9%BB%84%E7%81%BF%E7%81%BF%E5%BE%AE%E4%BF%A1%E7%A7%80%E7%BE%8E%E7%94%B2%23) `160.8K 🔥` `-60%`
1. [念相思妆造廉价感](https://s.weibo.com/weibo?q=%23%E5%BF%B5%E7%9B%B8%E6%80%9D%E5%A6%86%E9%80%A0%E5%BB%89%E4%BB%B7%E6%84%9F%23) `143.2K 🔥` `-73%`

Updated at 2026-07-28 19:05:50

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
