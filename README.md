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

1. [委员回应年轻人天天熬夜行不行 (Members responded to whether it is okay for young people to stay up late every day)](https://s.weibo.com/weibo?q=%23%E5%A7%94%E5%91%98%E5%9B%9E%E5%BA%94%E5%B9%B4%E8%BD%BB%E4%BA%BA%E5%A4%A9%E5%A4%A9%E7%86%AC%E5%A4%9C%E8%A1%8C%E4%B8%8D%E8%A1%8C%23) `495.9K 🔥` `+52%`
1. [建议年假天数按工龄递增 (It is recommended that the number of annual leave days increases according to seniority)](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E5%B9%B4%E5%81%87%E5%A4%A9%E6%95%B0%E6%8C%89%E5%B7%A5%E9%BE%84%E9%80%92%E5%A2%9E%23) `432.7K 🔥` `+84%`
1. [解读国家账本看数字背后 (Interpret the national account books and see behind the numbers)](https://s.weibo.com/weibo?q=%23%E8%A7%A3%E8%AF%BB%E5%9B%BD%E5%AE%B6%E8%B4%A6%E6%9C%AC%E7%9C%8B%E6%95%B0%E5%AD%97%E8%83%8C%E5%90%8E%23) `418.6K 🔥` `+120%`
1. [闲鱼和金靖都别唱了让我来拍 (Xianyu and Jin Jing, please stop singing and let me take the photos.)](https://s.weibo.com/weibo?q=%23%E9%97%B2%E9%B1%BC%E5%92%8C%E9%87%91%E9%9D%96%E9%83%BD%E5%88%AB%E5%94%B1%E4%BA%86%E8%AE%A9%E6%88%91%E6%9D%A5%E6%8B%8D%23) `414.2K 🔥` `+119%`
1. [王濛拟被破格晋升 (Wang Meng is scheduled to be promoted under unusual circumstances)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BF%9B%E6%8B%9F%E8%A2%AB%E7%A0%B4%E6%A0%BC%E6%99%8B%E5%8D%87%23) `410.7K 🔥` `+119%`
1. [公积金提取 (Provident fund withdrawal)](https://s.weibo.com/weibo?q=%23%E5%85%AC%E7%A7%AF%E9%87%91%E6%8F%90%E5%8F%96%23) `385.4K 🔥` `+108%`
1. [伊朗称毁灭性打击美军基地](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E7%A7%B0%E6%AF%81%E7%81%AD%E6%80%A7%E6%89%93%E5%87%BB%E7%BE%8E%E5%86%9B%E5%9F%BA%E5%9C%B0%23) `383.9K 🔥` `+107%`
1. [精灵黄lululemon发圈被炒到999元](https://s.weibo.com/weibo?q=%23%E7%B2%BE%E7%81%B5%E9%BB%84lululemon%E5%8F%91%E5%9C%88%E8%A2%AB%E7%82%92%E5%88%B0999%E5%85%83%23) `370.5K 🔥` `+104%`
1. [建议增设重阳节为法定节假日 (It is recommended to add the Double Ninth Festival as a legal holiday)](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E5%A2%9E%E8%AE%BE%E9%87%8D%E9%98%B3%E8%8A%82%E4%B8%BA%E6%B3%95%E5%AE%9A%E8%8A%82%E5%81%87%E6%97%A5%23) `365.7K 🔥` `+107%`
1. [她把无声者的声音带到人民大会堂](https://s.weibo.com/weibo?q=%23%E5%A5%B9%E6%8A%8A%E6%97%A0%E5%A3%B0%E8%80%85%E7%9A%84%E5%A3%B0%E9%9F%B3%E5%B8%A6%E5%88%B0%E4%BA%BA%E6%B0%91%E5%A4%A7%E4%BC%9A%E5%A0%82%23) `349.1K 🔥` `+105%`
1. [建议逐步推行现房销售](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E9%80%90%E6%AD%A5%E6%8E%A8%E8%A1%8C%E7%8E%B0%E6%88%BF%E9%94%80%E5%94%AE%23) `336.5K 🔥` `+103%`
1. [张凌赫95生唯一三平台破万男主 (Zhang Linghe is the only male protagonist in his 95th life who has exceeded 10,000 on three platforms)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB95%E7%94%9F%E5%94%AF%E4%B8%80%E4%B8%89%E5%B9%B3%E5%8F%B0%E7%A0%B4%E4%B8%87%E7%94%B7%E4%B8%BB%23) `322.2K 🔥` `+101%`
1. [分析称美国可能真的有点撑不住了](https://s.weibo.com/weibo?q=%23%E5%88%86%E6%9E%90%E7%A7%B0%E7%BE%8E%E5%9B%BD%E5%8F%AF%E8%83%BD%E7%9C%9F%E7%9A%84%E6%9C%89%E7%82%B9%E6%92%91%E4%B8%8D%E4%BD%8F%E4%BA%86%23) `222.7K 🔥` `+109%`
1. [这才是普通身材的普通人穿搭](https://s.weibo.com/weibo?q=%23%E8%BF%99%E6%89%8D%E6%98%AF%E6%99%AE%E9%80%9A%E8%BA%AB%E6%9D%90%E7%9A%84%E6%99%AE%E9%80%9A%E4%BA%BA%E7%A9%BF%E6%90%AD%23) `166.7K 🔥` `+126%`
1. [日本大阪一地下管道冲出地面18米 (An underground pipe bursts 18 meters out of the ground in Osaka, Japan)](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E5%A4%A7%E9%98%AA%E4%B8%80%E5%9C%B0%E4%B8%8B%E7%AE%A1%E9%81%93%E5%86%B2%E5%87%BA%E5%9C%B0%E9%9D%A218%E7%B1%B3%23) `156.6K 🔥` `+117%`
1. [邓凯孔雪儿第三个吻痕 (Deng Kai Kong Xueer's third hickey)](https://s.weibo.com/weibo?q=%23%E9%82%93%E5%87%AF%E5%AD%94%E9%9B%AA%E5%84%BF%E7%AC%AC%E4%B8%89%E4%B8%AA%E5%90%BB%E7%97%95%23) `114.3K 🔥` `+89%`
1. [张凌赫听到我结婚时的反应](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%90%AC%E5%88%B0%E6%88%91%E7%BB%93%E5%A9%9A%E6%97%B6%E7%9A%84%E5%8F%8D%E5%BA%94%23) `102.0K 🔥` `+100%`
1. [1斤赘肉换1斤牛肉已超千人报名 (Over a thousand people have signed up to exchange 1 pound of fat for 1 pound of beef)](https://s.weibo.com/weibo?q=%231%E6%96%A4%E8%B5%98%E8%82%89%E6%8D%A21%E6%96%A4%E7%89%9B%E8%82%89%E5%B7%B2%E8%B6%85%E5%8D%83%E4%BA%BA%E6%8A%A5%E5%90%8D%23) `97.3K 🔥` `+122%`
1. [西班牙降级与以色列外交关系 (Spain downgrades diplomatic ties with Israel)](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%8F%AD%E7%89%99%E9%99%8D%E7%BA%A7%E4%B8%8E%E4%BB%A5%E8%89%B2%E5%88%97%E5%A4%96%E4%BA%A4%E5%85%B3%E7%B3%BB%23) `59.8K 🔥` `+78%`
1. [为农民哽咽发声代表接到多部委电话 (Representatives who voiced their voices for farmers received calls from many ministries and commissions)](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E5%86%9C%E6%B0%91%E5%93%BD%E5%92%BD%E5%8F%91%E5%A3%B0%E4%BB%A3%E8%A1%A8%E6%8E%A5%E5%88%B0%E5%A4%9A%E9%83%A8%E5%A7%94%E7%94%B5%E8%AF%9D%23) `48.8K 🔥` `+72%`
1. [杨紫青海生态文化传播大使 (Yang Zi Qinghai Ecological Culture Communication Ambassador)](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E9%9D%92%E6%B5%B7%E7%94%9F%E6%80%81%E6%96%87%E5%8C%96%E4%BC%A0%E6%92%AD%E5%A4%A7%E4%BD%BF%23) `43.7K 🔥` `+53%`
1. [3名美国富豪强奸性侵60名女性 (3 wealthy Americans raped and sexually assaulted 60 women)](https://s.weibo.com/weibo?q=%233%E5%90%8D%E7%BE%8E%E5%9B%BD%E5%AF%8C%E8%B1%AA%E5%BC%BA%E5%A5%B8%E6%80%A7%E4%BE%B560%E5%90%8D%E5%A5%B3%E6%80%A7%23) `43.6K 🔥` `+53%`
1. [特朗普说对伊行动即将结束 (Trump says action against Iraq is coming to an end)](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E8%AF%B4%E5%AF%B9%E4%BC%8A%E8%A1%8C%E5%8A%A8%E5%8D%B3%E5%B0%86%E7%BB%93%E6%9D%9F%23) `43.6K 🔥` `+53%`
1. [公积金改革大潮真的来了 (The tide of provident fund reform is really coming)](https://s.weibo.com/weibo?q=%23%E5%85%AC%E7%A7%AF%E9%87%91%E6%94%B9%E9%9D%A9%E5%A4%A7%E6%BD%AE%E7%9C%9F%E7%9A%84%E6%9D%A5%E4%BA%86%23) `43.6K 🔥` `+53%`
1. [逐玉双平台破万](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%E5%8F%8C%E5%B9%B3%E5%8F%B0%E7%A0%B4%E4%B8%87%23) `43.6K 🔥` `+53%`
1. [美官员称特朗普对伊朗反应有误判 (U.S. official says Trump misjudged response to Iran)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%AE%98%E5%91%98%E7%A7%B0%E7%89%B9%E6%9C%97%E6%99%AE%E5%AF%B9%E4%BC%8A%E6%9C%97%E5%8F%8D%E5%BA%94%E6%9C%89%E8%AF%AF%E5%88%A4%23) `43.6K 🔥` `+53%`
1. [逐玉](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%23) `43.6K 🔥` `+53%`
1. [炸伊朗小学导弹零件MadeinUSA (Missile parts used to bomb Iranian elementary school MadeinUSA)](https://s.weibo.com/weibo?q=%23%E7%82%B8%E4%BC%8A%E6%9C%97%E5%B0%8F%E5%AD%A6%E5%AF%BC%E5%BC%B9%E9%9B%B6%E4%BB%B6MadeinUSA%23) `43.6K 🔥` `+53%`
1. [小水在看逐玉 (Xiao Shui is looking at Zhuyu)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E6%B0%B4%E5%9C%A8%E7%9C%8B%E9%80%90%E7%8E%89%23) `43.6K 🔥` `+54%`
1. [伊朗多弹头导弹袭击美军基地](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%A4%9A%E5%BC%B9%E5%A4%B4%E5%AF%BC%E5%BC%B9%E8%A2%AD%E5%87%BB%E7%BE%8E%E5%86%9B%E5%9F%BA%E5%9C%B0%23) `43.6K 🔥` `+54%`
1. [入职大疆1个月被发了5次钱](https://s.weibo.com/weibo?q=%23%E5%85%A5%E8%81%8C%E5%A4%A7%E7%96%861%E4%B8%AA%E6%9C%88%E8%A2%AB%E5%8F%91%E4%BA%865%E6%AC%A1%E9%92%B1%23) `43.6K 🔥` `+54%`
1. [建议允许60岁以上农民工继续务工 (It is recommended that migrant workers over 60 years old be allowed to continue working)](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E5%85%81%E8%AE%B860%E5%B2%81%E4%BB%A5%E4%B8%8A%E5%86%9C%E6%B0%91%E5%B7%A5%E7%BB%A7%E7%BB%AD%E5%8A%A1%E5%B7%A5%23) `43.6K 🔥` `+54%`
1. [每天花费近9亿美元美国要打不起了 (The United States cannot afford to spend nearly 900 million U.S. dollars every day.)](https://s.weibo.com/weibo?q=%23%E6%AF%8F%E5%A4%A9%E8%8A%B1%E8%B4%B9%E8%BF%919%E4%BA%BF%E7%BE%8E%E5%85%83%E7%BE%8E%E5%9B%BD%E8%A6%81%E6%89%93%E4%B8%8D%E8%B5%B7%E4%BA%86%23) `43.6K 🔥` `+54%`
1. [孙颖莎王楚钦到底激励了多少人](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E7%8E%8B%E6%A5%9A%E9%92%A6%E5%88%B0%E5%BA%95%E6%BF%80%E5%8A%B1%E4%BA%86%E5%A4%9A%E5%B0%91%E4%BA%BA%23) `43.6K 🔥` `+54%`
1. [云合](https://s.weibo.com/weibo?q=%23%E4%BA%91%E5%90%88%23) `43.6K 🔥` `+35%`
1. [你更愿意喝9.9元还是30元的咖啡 (Would you rather drink coffee worth 9.9 yuan or 30 yuan?)](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E6%9B%B4%E6%84%BF%E6%84%8F%E5%96%9D9.9%E5%85%83%E8%BF%98%E6%98%AF30%E5%85%83%E7%9A%84%E5%92%96%E5%95%A1%23) `43.5K 🔥` `+54%`
1. [孙千认认真真地追了29集](https://s.weibo.com/weibo?q=%23%E5%AD%99%E5%8D%83%E8%AE%A4%E8%AE%A4%E7%9C%9F%E7%9C%9F%E5%9C%B0%E8%BF%BD%E4%BA%8629%E9%9B%86%23) `43.5K 🔥` `+54%`
1. [逐玉 头纱 (Zhuyu veil)](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%20%E5%A4%B4%E7%BA%B1%23) `43.5K 🔥` `+152%`
1. [MiuMiu](https://s.weibo.com/weibo?q=%23MiuMiu%23) `43.5K 🔥` `+54%`
1. [我的山与海 (my mountains and sea)](https://s.weibo.com/weibo?q=%23%E6%88%91%E7%9A%84%E5%B1%B1%E4%B8%8E%E6%B5%B7%23) `43.5K 🔥` `+53%`
1. [乘风2026将全程直播 (Chengfeng 2026 will be broadcast live)](https://s.weibo.com/weibo?q=%23%E4%B9%98%E9%A3%8E2026%E5%B0%86%E5%85%A8%E7%A8%8B%E7%9B%B4%E6%92%AD%23) `43.4K 🔥` `+54%`
1. [伊朗对美以发动38波攻击](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%AF%B9%E7%BE%8E%E4%BB%A5%E5%8F%91%E5%8A%A838%E6%B3%A2%E6%94%BB%E5%87%BB%23) `43.4K 🔥` `+53%`
1. [不二之臣 (The best minister)](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E4%BA%8C%E4%B9%8B%E8%87%A3%23) `43.4K 🔥` `+53%`
1. [周深挑战夜市游戏](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%B7%B1%E6%8C%91%E6%88%98%E5%A4%9C%E5%B8%82%E6%B8%B8%E6%88%8F%23) `43.4K 🔥` `+53%`
1. [虞书欣国王开播一周年晒照](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E5%9B%BD%E7%8E%8B%E5%BC%80%E6%92%AD%E4%B8%80%E5%91%A8%E5%B9%B4%E6%99%92%E7%85%A7%23) `43.4K 🔥` `+133%`
1. [田曦薇逐玉破万贺图 (Tian Xiwei’s pursuit of jade and victory over thousands of congratulations)](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E9%80%90%E7%8E%89%E7%A0%B4%E4%B8%87%E8%B4%BA%E5%9B%BE%23) `43.4K 🔥` `+53%`
1. [薛之谦万兽之王巡回演唱会 (Joker Xue King of Beasts Tour Concert)](https://s.weibo.com/weibo?q=%23%E8%96%9B%E4%B9%8B%E8%B0%A6%E4%B8%87%E5%85%BD%E4%B9%8B%E7%8E%8B%E5%B7%A1%E5%9B%9E%E6%BC%94%E5%94%B1%E4%BC%9A%23) `43.3K 🔥` `+53%`
1. [狼队战胜WB (Wolves beat WB)](https://s.weibo.com/weibo?q=%23%E7%8B%BC%E9%98%9F%E6%88%98%E8%83%9CWB%23) `43.3K 🔥` `+103%`
1. [小米车险上线 (Xiaomi car insurance launched)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E8%BD%A6%E9%99%A9%E4%B8%8A%E7%BA%BF%23) `43.3K 🔥` `+53%`
1. [剑来](https://s.weibo.com/weibo?q=%23%E5%89%91%E6%9D%A5%23) `43.3K 🔥` `+53%`

Updated at 2026-03-12 06:48:04

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
