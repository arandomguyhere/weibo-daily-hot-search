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

1. [低精力 杏仁核长期应激 (Low energy, chronic stress on the amygdala)](https://s.weibo.com/weibo?q=%23%E4%BD%8E%E7%B2%BE%E5%8A%9B%20%E6%9D%8F%E4%BB%81%E6%A0%B8%E9%95%BF%E6%9C%9F%E5%BA%94%E6%BF%80%23) `794.4K 🔥` `NEW`
1. [曝歌手2026阵容](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%AD%8C%E6%89%8B2026%E9%98%B5%E5%AE%B9%23) `737.3K 🔥` `NEW`
1. [原创文学IP顶流同框](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E5%88%9B%E6%96%87%E5%AD%A6IP%E9%A1%B6%E6%B5%81%E5%90%8C%E6%A1%86%23) `628.8K 🔥` `NEW`
1. [纽北事故](https://s.weibo.com/weibo?q=%23%E7%BA%BD%E5%8C%97%E4%BA%8B%E6%95%85%23) `568.8K 🔥` `NEW`
1. [网传花少8的阵容](https://s.weibo.com/weibo?q=%23%E7%BD%91%E4%BC%A0%E8%8A%B1%E5%B0%918%E7%9A%84%E9%98%B5%E5%AE%B9%23) `549.6K 🔥` `NEW`
1. [女子产后被男友起诉退彩礼和分娩费](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E4%BA%A7%E5%90%8E%E8%A2%AB%E7%94%B7%E5%8F%8B%E8%B5%B7%E8%AF%89%E9%80%80%E5%BD%A9%E7%A4%BC%E5%92%8C%E5%88%86%E5%A8%A9%E8%B4%B9%23) `406.4K 🔥` `NEW`
1. [2026机器人半马](https://s.weibo.com/weibo?q=%232026%E6%9C%BA%E5%99%A8%E4%BA%BA%E5%8D%8A%E9%A9%AC%23) `224.5K 🔥` `NEW`
1. [杜兰特缺席湖火季后赛G1](https://s.weibo.com/weibo?q=%23%E6%9D%9C%E5%85%B0%E7%89%B9%E7%BC%BA%E5%B8%AD%E6%B9%96%E7%81%AB%E5%AD%A3%E5%90%8E%E8%B5%9BG1%23) `224.3K 🔥` `NEW`
1. [300个机器人跑半马](https://s.weibo.com/weibo?q=%23300%E4%B8%AA%E6%9C%BA%E5%99%A8%E4%BA%BA%E8%B7%91%E5%8D%8A%E9%A9%AC%23) `223.3K 🔥` `NEW`
1. [虞书欣好辣](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E5%A5%BD%E8%BE%A3%23) `221.6K 🔥` `NEW`
1. [酒店回访电话暴露开房致女子离婚 (Hotel return call revealed hotel booking led to woman's divorce)](https://s.weibo.com/weibo?q=%23%E9%85%92%E5%BA%97%E5%9B%9E%E8%AE%BF%E7%94%B5%E8%AF%9D%E6%9A%B4%E9%9C%B2%E5%BC%80%E6%88%BF%E8%87%B4%E5%A5%B3%E5%AD%90%E7%A6%BB%E5%A9%9A%23) `220.4K 🔥` `NEW`
1. [阚清子说李小冉缺点什么](https://s.weibo.com/weibo?q=%23%E9%98%9A%E6%B8%85%E5%AD%90%E8%AF%B4%E6%9D%8E%E5%B0%8F%E5%86%89%E7%BC%BA%E7%82%B9%E4%BB%80%E4%B9%88%23) `214.6K 🔥` `NEW`
1. [何润东不让老婆接受伤害性医疗干预](https://s.weibo.com/weibo?q=%23%E4%BD%95%E6%B6%A6%E4%B8%9C%E4%B8%8D%E8%AE%A9%E8%80%81%E5%A9%86%E6%8E%A5%E5%8F%97%E4%BC%A4%E5%AE%B3%E6%80%A7%E5%8C%BB%E7%96%97%E5%B9%B2%E9%A2%84%23) `213.5K 🔥` `NEW`
1. [印度就油轮遭袭向伊朗提出抗议](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%BA%A6%E5%B0%B1%E6%B2%B9%E8%BD%AE%E9%81%AD%E8%A2%AD%E5%90%91%E4%BC%8A%E6%9C%97%E6%8F%90%E5%87%BA%E6%8A%97%E8%AE%AE%23) `212.5K 🔥` `NEW`
1. [国产光纤爆单原因](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%BA%A7%E5%85%89%E7%BA%A4%E7%88%86%E5%8D%95%E5%8E%9F%E5%9B%A0%23) `210.8K 🔥` `NEW`
1. [张月陈瑶](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%88%E9%99%88%E7%91%B6%23) `210.2K 🔥` `NEW`
1. [王一博把ChinaGT干成了全球顶级赛事](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E6%8A%8AChinaGT%E5%B9%B2%E6%88%90%E4%BA%86%E5%85%A8%E7%90%83%E9%A1%B6%E7%BA%A7%E8%B5%9B%E4%BA%8B%23) `206.9K 🔥` `NEW`
1. [54岁女子参与卖淫被捕](https://s.weibo.com/weibo?q=%2354%E5%B2%81%E5%A5%B3%E5%AD%90%E5%8F%82%E4%B8%8E%E5%8D%96%E6%B7%AB%E8%A2%AB%E6%8D%95%23) `202.8K 🔥` `NEW`
1. [解放军凌晨4点管控日舰过航](https://s.weibo.com/weibo?q=%23%E8%A7%A3%E6%94%BE%E5%86%9B%E5%87%8C%E6%99%A84%E7%82%B9%E7%AE%A1%E6%8E%A7%E6%97%A5%E8%88%B0%E8%BF%87%E8%88%AA%23) `201.8K 🔥` `NEW`
1. [20岁男生摆摊养6弟妹父母又生娃](https://s.weibo.com/weibo?q=%2320%E5%B2%81%E7%94%B7%E7%94%9F%E6%91%86%E6%91%8A%E5%85%BB6%E5%BC%9F%E5%A6%B9%E7%88%B6%E6%AF%8D%E5%8F%88%E7%94%9F%E5%A8%83%23) `200.9K 🔥` `NEW`
1. [男子右腿被养5年爱猫咬掉一块肉 (A piece of meat from a man's right leg was bitten off by his beloved cat of five years)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%8F%B3%E8%85%BF%E8%A2%AB%E5%85%BB5%E5%B9%B4%E7%88%B1%E7%8C%AB%E5%92%AC%E6%8E%89%E4%B8%80%E5%9D%97%E8%82%89%23) `198.6K 🔥` `NEW`
1. [火箭vs湖人](https://s.weibo.com/weibo?q=%23%E7%81%AB%E7%AE%ADvs%E6%B9%96%E4%BA%BA%23) `196.1K 🔥` `NEW`
1. [女子2年胖20斤常感疲累确诊甲减](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%902%E5%B9%B4%E8%83%9620%E6%96%A4%E5%B8%B8%E6%84%9F%E7%96%B2%E7%B4%AF%E7%A1%AE%E8%AF%8A%E7%94%B2%E5%87%8F%23) `195.1K 🔥` `NEW`
1. [月鳞绮纪大结局全员迎战](https://s.weibo.com/weibo?q=%23%E6%9C%88%E9%B3%9E%E7%BB%AE%E7%BA%AA%E5%A4%A7%E7%BB%93%E5%B1%80%E5%85%A8%E5%91%98%E8%BF%8E%E6%88%98%23) `194.6K 🔥` `NEW`
1. [樊振东回应日内瓦旅行](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E5%9B%9E%E5%BA%94%E6%97%A5%E5%86%85%E7%93%A6%E6%97%85%E8%A1%8C%23) `192.5K 🔥` `NEW`
1. [雷军直播测续航变山东文旅安利](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E5%86%9B%E7%9B%B4%E6%92%AD%E6%B5%8B%E7%BB%AD%E8%88%AA%E5%8F%98%E5%B1%B1%E4%B8%9C%E6%96%87%E6%97%85%E5%AE%89%E5%88%A9%23) `190.5K 🔥` `NEW`
1. [王嘉尔曾是蔡徐坤的导师](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%98%89%E5%B0%94%E6%9B%BE%E6%98%AF%E8%94%A1%E5%BE%90%E5%9D%A4%E7%9A%84%E5%AF%BC%E5%B8%88%23) `188.7K 🔥` `NEW`
1. [日本](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%23) `2.8M 🔥` `+1654%`
1. [日本已彻底撕掉伪装 (Japan has completely shed its disguise)](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E5%B7%B2%E5%BD%BB%E5%BA%95%E6%92%95%E6%8E%89%E4%BC%AA%E8%A3%85%23) `1.2M 🔥` `+22%`
1. [生态文旅激活消费新活力 (Ecological cultural tourism activates new vitality in consumption)](https://s.weibo.com/weibo?q=%23%E7%94%9F%E6%80%81%E6%96%87%E6%97%85%E6%BF%80%E6%B4%BB%E6%B6%88%E8%B4%B9%E6%96%B0%E6%B4%BB%E5%8A%9B%23) `817.3K 🔥` `+46%`
1. [解放军护卫舰已随时准备开火 (PLA frigates are ready to fire at any time)](https://s.weibo.com/weibo?q=%23%E8%A7%A3%E6%94%BE%E5%86%9B%E6%8A%A4%E5%8D%AB%E8%88%B0%E5%B7%B2%E9%9A%8F%E6%97%B6%E5%87%86%E5%A4%87%E5%BC%80%E7%81%AB%23) `664.1K 🔥` `+52%`
1. [攻玉 辞演](https://s.weibo.com/weibo?q=%23%E6%94%BB%E7%8E%89%20%E8%BE%9E%E6%BC%94%23) `487.3K 🔥` `+218%`
1. [你是真的火了李小冉](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E6%98%AF%E7%9C%9F%E7%9A%84%E7%81%AB%E4%BA%86%E6%9D%8E%E5%B0%8F%E5%86%89%23) `473.9K 🔥` `+213%`
1. [谢娜晒和马嘉祺聊天记录 (Chat records of Xie Nasha and Ma Jiaqi)](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%A8%9C%E6%99%92%E5%92%8C%E9%A9%AC%E5%98%89%E7%A5%BA%E8%81%8A%E5%A4%A9%E8%AE%B0%E5%BD%95%23) `368.1K 🔥` `+114%`
1. [张雪机车一脚压线把名次压赚了](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%E4%B8%80%E8%84%9A%E5%8E%8B%E7%BA%BF%E6%8A%8A%E5%90%8D%E6%AC%A1%E5%8E%8B%E8%B5%9A%E4%BA%86%23) `326.6K 🔥` `+89%`
1. [快递员上门取件摔坏2.4万蓝宝石](https://s.weibo.com/weibo?q=%23%E5%BF%AB%E9%80%92%E5%91%98%E4%B8%8A%E9%97%A8%E5%8F%96%E4%BB%B6%E6%91%94%E5%9D%8F2.4%E4%B8%87%E8%93%9D%E5%AE%9D%E7%9F%B3%23) `220.2K 🔥` `+31%`
1. [何润东回应没骑马](https://s.weibo.com/weibo?q=%23%E4%BD%95%E6%B6%A6%E4%B8%9C%E5%9B%9E%E5%BA%94%E6%B2%A1%E9%AA%91%E9%A9%AC%23) `218.4K 🔥` `+25%`
1. [女儿说我爸爸是刘德华没人相信](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%84%BF%E8%AF%B4%E6%88%91%E7%88%B8%E7%88%B8%E6%98%AF%E5%88%98%E5%BE%B7%E5%8D%8E%E6%B2%A1%E4%BA%BA%E7%9B%B8%E4%BF%A1%23) `216.5K 🔥` `+30%`
1. [光纤价格暴涨650%](https://s.weibo.com/weibo?q=%23%E5%85%89%E7%BA%A4%E4%BB%B7%E6%A0%BC%E6%9A%B4%E6%B6%A8650%25%23) `215.8K 🔥` `+24%`
1. [时代少年团走了没通知一下张杰吗 (Didn't Zhang Jie be notified when Times Youth League left?)](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E8%B5%B0%E4%BA%86%E6%B2%A1%E9%80%9A%E7%9F%A5%E4%B8%80%E4%B8%8B%E5%BC%A0%E6%9D%B0%E5%90%97%23) `209.5K 🔥` `+29%`
1. [听障女孩回应美得像假人 (Hearing-impaired girl responds that she is as beautiful as a dummy)](https://s.weibo.com/weibo?q=%23%E5%90%AC%E9%9A%9C%E5%A5%B3%E5%AD%A9%E5%9B%9E%E5%BA%94%E7%BE%8E%E5%BE%97%E5%83%8F%E5%81%87%E4%BA%BA%23) `207.8K 🔥` `+26%`
1. [五一航班大面积取消 (Widespread cancellation of May Day flights)](https://s.weibo.com/weibo?q=%23%E4%BA%94%E4%B8%80%E8%88%AA%E7%8F%AD%E5%A4%A7%E9%9D%A2%E7%A7%AF%E5%8F%96%E6%B6%88%23) `203.7K 🔥` `+22%`
1. [吴佳尼说赵丽颖没有医美](https://s.weibo.com/weibo?q=%23%E5%90%B4%E4%BD%B3%E5%B0%BC%E8%AF%B4%E8%B5%B5%E4%B8%BD%E9%A2%96%E6%B2%A1%E6%9C%89%E5%8C%BB%E7%BE%8E%23) `197.8K 🔥` `+27%`
1. [金智秀哥哥的妻子发ins](https://s.weibo.com/weibo?q=%23%E9%87%91%E6%99%BA%E7%A7%80%E5%93%A5%E5%93%A5%E7%9A%84%E5%A6%BB%E5%AD%90%E5%8F%91ins%23) `206.3K 🔥`
1. [六姑姑要求与侄女分百万遗产胜诉](https://s.weibo.com/weibo?q=%23%E5%85%AD%E5%A7%91%E5%A7%91%E8%A6%81%E6%B1%82%E4%B8%8E%E4%BE%84%E5%A5%B3%E5%88%86%E7%99%BE%E4%B8%87%E9%81%97%E4%BA%A7%E8%83%9C%E8%AF%89%23) `205.4K 🔥`
1. [陈紫函不上浪姐的原因 (The reason why Chen Zi didn’t write to Sister Lang)](https://s.weibo.com/weibo?q=%23%E9%99%88%E7%B4%AB%E5%87%BD%E4%B8%8D%E4%B8%8A%E6%B5%AA%E5%A7%90%E7%9A%84%E5%8E%9F%E5%9B%A0%23) `193.1K 🔥`
1. [张凌赫ins更新萌照](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%ABins%E6%9B%B4%E6%96%B0%E8%90%8C%E7%85%A7%23) `191.7K 🔥`
1. [人与人其实更多的是相逢恨早 (In fact, people often meet each other and hate each other early.)](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E4%B8%8E%E4%BA%BA%E5%85%B6%E5%AE%9E%E6%9B%B4%E5%A4%9A%E7%9A%84%E6%98%AF%E7%9B%B8%E9%80%A2%E6%81%A8%E6%97%A9%23) `188.8K 🔥`
1. [日本媒体报道中国绝大多数是负面 (Japanese media reports on China are overwhelmingly negative)](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E5%AA%92%E4%BD%93%E6%8A%A5%E9%81%93%E4%B8%AD%E5%9B%BD%E7%BB%9D%E5%A4%A7%E5%A4%9A%E6%95%B0%E6%98%AF%E8%B4%9F%E9%9D%A2%23) `532.0K 🔥` `-26%`
1. [日本驱逐舰过航台湾海峡取证画面 (Evidence collection footage of a Japanese destroyer passing through the Taiwan Strait)](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E9%A9%B1%E9%80%90%E8%88%B0%E8%BF%87%E8%88%AA%E5%8F%B0%E6%B9%BE%E6%B5%B7%E5%B3%A1%E5%8F%96%E8%AF%81%E7%94%BB%E9%9D%A2%23) `217.5K 🔥` `-61%`
1. [日本在马关条约签订日闯入台海 (Japan invaded the Taiwan Strait on the signing day of the Treaty of Shimonoseki)](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E5%9C%A8%E9%A9%AC%E5%85%B3%E6%9D%A1%E7%BA%A6%E7%AD%BE%E8%AE%A2%E6%97%A5%E9%97%AF%E5%85%A5%E5%8F%B0%E6%B5%B7%23) `199.8K 🔥` `-38%`

Updated at 2026-04-19 09:11:39

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
