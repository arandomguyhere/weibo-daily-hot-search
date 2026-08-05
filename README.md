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

1. [台风白海豚大概率登陆浙江 (Typhoon White Dolphin is likely to land in Zhejiang)](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E7%99%BD%E6%B5%B7%E8%B1%9A%E5%A4%A7%E6%A6%82%E7%8E%87%E7%99%BB%E9%99%86%E6%B5%99%E6%B1%9F%23) `298.4K 🔥` `NEW`
1. [刘宇宁知道自己是大男主的反应](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AE%87%E5%AE%81%E7%9F%A5%E9%81%93%E8%87%AA%E5%B7%B1%E6%98%AF%E5%A4%A7%E7%94%B7%E4%B8%BB%E7%9A%84%E5%8F%8D%E5%BA%94%23) `297.9K 🔥` `NEW`
1. [王楚钦谈亚运会期许](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E8%B0%88%E4%BA%9A%E8%BF%90%E4%BC%9A%E6%9C%9F%E8%AE%B8%23) `276.2K 🔥` `NEW`
1. [王源易烊千玺换蛋糕不给王俊凯说](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BA%90%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%E6%8D%A2%E8%9B%8B%E7%B3%95%E4%B8%8D%E7%BB%99%E7%8E%8B%E4%BF%8A%E5%87%AF%E8%AF%B4%23) `273.4K 🔥` `NEW`
1. [黎彼得去世](https://s.weibo.com/weibo?q=%23%E9%BB%8E%E5%BD%BC%E5%BE%97%E5%8E%BB%E4%B8%96%23) `268.8K 🔥` `NEW`
1. [TFBOYS发文祝出道十三周年快乐](https://s.weibo.com/weibo?q=%23TFBOYS%E5%8F%91%E6%96%87%E7%A5%9D%E5%87%BA%E9%81%93%E5%8D%81%E4%B8%89%E5%91%A8%E5%B9%B4%E5%BF%AB%E4%B9%90%23) `264.6K 🔥` `NEW`
1. [易烊千玺](https://s.weibo.com/weibo?q=%23%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%23) `176.5K 🔥` `NEW`
1. [星巴克辞退侮辱周杰伦的员工](https://s.weibo.com/weibo?q=%23%E6%98%9F%E5%B7%B4%E5%85%8B%E8%BE%9E%E9%80%80%E4%BE%AE%E8%BE%B1%E5%91%A8%E6%9D%B0%E4%BC%A6%E7%9A%84%E5%91%98%E5%B7%A5%23) `168.6K 🔥` `NEW`
1. [时代少年团退场魔术失败了](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E9%80%80%E5%9C%BA%E9%AD%94%E6%9C%AF%E5%A4%B1%E8%B4%A5%E4%BA%86%23) `139.8K 🔥` `NEW`
1. [最近你买黄金了没](https://s.weibo.com/weibo?q=%23%E6%9C%80%E8%BF%91%E4%BD%A0%E4%B9%B0%E9%BB%84%E9%87%91%E4%BA%86%E6%B2%A1%23) `139.7K 🔥` `NEW`
1. [宋浩然哥哥正在领取失业金 (Song Haoran’s brother is receiving unemployment benefits)](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E6%B5%A9%E7%84%B6%E5%93%A5%E5%93%A5%E6%AD%A3%E5%9C%A8%E9%A2%86%E5%8F%96%E5%A4%B1%E4%B8%9A%E9%87%91%23) `103.6K 🔥` `NEW`
1. [伊藤美诚 苍蝇拍打法](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E8%97%A4%E7%BE%8E%E8%AF%9A%20%E8%8B%8D%E8%9D%87%E6%8B%8D%E6%89%93%E6%B3%95%23) `100.5K 🔥` `NEW`
1. [张凌赫只有一部待播剧了](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%8F%AA%E6%9C%89%E4%B8%80%E9%83%A8%E5%BE%85%E6%92%AD%E5%89%A7%E4%BA%86%23) `100.2K 🔥` `NEW`
1. [TFBOYS出道十三周年](https://s.weibo.com/weibo?q=%23TFBOYS%E5%87%BA%E9%81%93%E5%8D%81%E4%B8%89%E5%91%A8%E5%B9%B4%23) `86.5K 🔥` `NEW`
1. [养大后才发现买了头牛魔王](https://s.weibo.com/weibo?q=%23%E5%85%BB%E5%A4%A7%E5%90%8E%E6%89%8D%E5%8F%91%E7%8E%B0%E4%B9%B0%E4%BA%86%E5%A4%B4%E7%89%9B%E9%AD%94%E7%8E%8B%23) `86.0K 🔥` `NEW`
1. [VOGUE发王一博新图](https://s.weibo.com/weibo?q=%23VOGUE%E5%8F%91%E7%8E%8B%E4%B8%80%E5%8D%9A%E6%96%B0%E5%9B%BE%23) `79.7K 🔥` `NEW`
1. [印媒称巴基斯坦军方拟改用微信通讯](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%AA%92%E7%A7%B0%E5%B7%B4%E5%9F%BA%E6%96%AF%E5%9D%A6%E5%86%9B%E6%96%B9%E6%8B%9F%E6%94%B9%E7%94%A8%E5%BE%AE%E4%BF%A1%E9%80%9A%E8%AE%AF%23) `79.6K 🔥` `NEW`
1. [华为同时发布三款鸿蒙电脑含金量](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BA%E5%90%8C%E6%97%B6%E5%8F%91%E5%B8%83%E4%B8%89%E6%AC%BE%E9%B8%BF%E8%92%99%E7%94%B5%E8%84%91%E5%90%AB%E9%87%91%E9%87%8F%23) `79.6K 🔥` `NEW`
1. [梅姨真实姓名首曝光 (Aunt Mei’s real first name revealed)](https://s.weibo.com/weibo?q=%23%E6%A2%85%E5%A7%A8%E7%9C%9F%E5%AE%9E%E5%A7%93%E5%90%8D%E9%A6%96%E6%9B%9D%E5%85%89%23) `970.8K 🔥` `+89%`
1. [李亚鹏向地铁吐血女孩捐99999元](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E4%BA%9A%E9%B9%8F%E5%90%91%E5%9C%B0%E9%93%81%E5%90%90%E8%A1%80%E5%A5%B3%E5%AD%A9%E6%8D%9099999%E5%85%83%23) `691.3K 🔥` `+81%`
1. [预拨3.3亿元支持8省市抢险救灾 (330 million yuan has been allocated in advance to support emergency rescue and disaster relief in 8 provinces and cities)](https://s.weibo.com/weibo?q=%23%E9%A2%84%E6%8B%A83.3%E4%BA%BF%E5%85%83%E6%94%AF%E6%8C%818%E7%9C%81%E5%B8%82%E6%8A%A2%E9%99%A9%E6%95%91%E7%81%BE%23) `569.5K 🔥` `+92%`
1. [老祖宗怎么可以聪明成这样](https://s.weibo.com/weibo?q=%23%E8%80%81%E7%A5%96%E5%AE%97%E6%80%8E%E4%B9%88%E5%8F%AF%E4%BB%A5%E8%81%AA%E6%98%8E%E6%88%90%E8%BF%99%E6%A0%B7%23) `357.9K 🔥` `+110%`
1. [海尔空调AI新品发布盛典 (Haier Air Conditioning AI New Product Release Ceremony)](https://s.weibo.com/weibo?q=%23%E6%B5%B7%E5%B0%94%E7%A9%BA%E8%B0%83AI%E6%96%B0%E5%93%81%E5%8F%91%E5%B8%83%E7%9B%9B%E5%85%B8%23) `291.5K 🔥` `+407%`
1. [这一秒过火全员be (This second went too far and everyone was be)](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%B8%80%E7%A7%92%E8%BF%87%E7%81%AB%E5%85%A8%E5%91%98be%23) `291.3K 🔥` `+264%`
1. [苹果要求长鑫降价反遭涨价 (Apple asked Changxin to cut prices but got a price increase)](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C%E8%A6%81%E6%B1%82%E9%95%BF%E9%91%AB%E9%99%8D%E4%BB%B7%E5%8F%8D%E9%81%AD%E6%B6%A8%E4%BB%B7%23) `287.0K 🔥` `+274%`
1. [可杰 top (Kejie top)](https://s.weibo.com/weibo?q=%23%E5%8F%AF%E6%9D%B0%20top%23) `280.4K 🔥` `+260%`
1. [美国禁止进口中国机器人](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E7%A6%81%E6%AD%A2%E8%BF%9B%E5%8F%A3%E4%B8%AD%E5%9B%BD%E6%9C%BA%E5%99%A8%E4%BA%BA%23) `265.2K 🔥` `+69%`
1. [婚外胚胎案妻子住址遭恶意曝光](https://s.weibo.com/weibo?q=%23%E5%A9%9A%E5%A4%96%E8%83%9A%E8%83%8E%E6%A1%88%E5%A6%BB%E5%AD%90%E4%BD%8F%E5%9D%80%E9%81%AD%E6%81%B6%E6%84%8F%E6%9B%9D%E5%85%89%23) `244.0K 🔥` `+207%`
1. [乌鸦一次带走四块饼干智商绝了](https://s.weibo.com/weibo?q=%23%E4%B9%8C%E9%B8%A6%E4%B8%80%E6%AC%A1%E5%B8%A6%E8%B5%B0%E5%9B%9B%E5%9D%97%E9%A5%BC%E5%B9%B2%E6%99%BA%E5%95%86%E7%BB%9D%E4%BA%86%23) `238.9K 🔥` `+104%`
1. [福州煎饼叔叔去世](https://s.weibo.com/weibo?q=%23%E7%A6%8F%E5%B7%9E%E7%85%8E%E9%A5%BC%E5%8F%94%E5%8F%94%E5%8E%BB%E4%B8%96%23) `215.3K 🔥` `+170%`
1. [卜冠今吓到我了 (Bu Guanjin scared me)](https://s.weibo.com/weibo?q=%23%E5%8D%9C%E5%86%A0%E4%BB%8A%E5%90%93%E5%88%B0%E6%88%91%E4%BA%86%23) `214.1K 🔥` `+168%`
1. [成年人的体面是把请客说得很自然](https://s.weibo.com/weibo?q=%23%E6%88%90%E5%B9%B4%E4%BA%BA%E7%9A%84%E4%BD%93%E9%9D%A2%E6%98%AF%E6%8A%8A%E8%AF%B7%E5%AE%A2%E8%AF%B4%E5%BE%97%E5%BE%88%E8%87%AA%E7%84%B6%23) `209.4K 🔥` `+172%`
1. [余承东回应口误](https://s.weibo.com/weibo?q=%23%E4%BD%99%E6%89%BF%E4%B8%9C%E5%9B%9E%E5%BA%94%E5%8F%A3%E8%AF%AF%23) `203.5K 🔥` `+167%`
1. [日本女网红自杀过程被完整直播 (The suicide process of a Japanese female internet celebrity was broadcast live in full)](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E5%A5%B3%E7%BD%91%E7%BA%A2%E8%87%AA%E6%9D%80%E8%BF%87%E7%A8%8B%E8%A2%AB%E5%AE%8C%E6%95%B4%E7%9B%B4%E6%92%AD%23) `199.8K 🔥` `+158%`
1. [好震撼的角度主体性一下就回来了](https://s.weibo.com/weibo?q=%23%E5%A5%BD%E9%9C%87%E6%92%BC%E7%9A%84%E8%A7%92%E5%BA%A6%E4%B8%BB%E4%BD%93%E6%80%A7%E4%B8%80%E4%B8%8B%E5%B0%B1%E5%9B%9E%E6%9D%A5%E4%BA%86%23) `194.8K 🔥` `+92%`
1. [水豚宝宝请问您刚刚生了我们对吗](https://s.weibo.com/weibo?q=%23%E6%B0%B4%E8%B1%9A%E5%AE%9D%E5%AE%9D%E8%AF%B7%E9%97%AE%E6%82%A8%E5%88%9A%E5%88%9A%E7%94%9F%E4%BA%86%E6%88%91%E4%BB%AC%E5%AF%B9%E5%90%97%23) `185.5K 🔥` `+140%`
1. [孩子吵闹2小时乘客叹气反被家长怼](https://s.weibo.com/weibo?q=%23%E5%AD%A9%E5%AD%90%E5%90%B5%E9%97%B92%E5%B0%8F%E6%97%B6%E4%B9%98%E5%AE%A2%E5%8F%B9%E6%B0%94%E5%8F%8D%E8%A2%AB%E5%AE%B6%E9%95%BF%E6%80%BC%23) `155.8K 🔥` `+101%`
1. [女儿考上一本出轨父亲拒付学费 (Daughter gets admitted to a college and cheats on her father refuses to pay tuition)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%84%BF%E8%80%83%E4%B8%8A%E4%B8%80%E6%9C%AC%E5%87%BA%E8%BD%A8%E7%88%B6%E4%BA%B2%E6%8B%92%E4%BB%98%E5%AD%A6%E8%B4%B9%23) `150.4K 🔥` `+92%`
1. [九门](https://s.weibo.com/weibo?q=%23%E4%B9%9D%E9%97%A8%23) `139.7K 🔥` `+81%`
1. [男子被判无罪获国赔4年后改判死缓](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E8%A2%AB%E5%88%A4%E6%97%A0%E7%BD%AA%E8%8E%B7%E5%9B%BD%E8%B5%944%E5%B9%B4%E5%90%8E%E6%94%B9%E5%88%A4%E6%AD%BB%E7%BC%93%23) `139.7K 🔥` `+82%`
1. [命运很大一大部分取决于人与人的交往](https://s.weibo.com/weibo?q=%23%E5%91%BD%E8%BF%90%E5%BE%88%E5%A4%A7%E4%B8%80%E5%A4%A7%E9%83%A8%E5%88%86%E5%8F%96%E5%86%B3%E4%BA%8E%E4%BA%BA%E4%B8%8E%E4%BA%BA%E7%9A%84%E4%BA%A4%E5%BE%80%23) `117.1K 🔥` `+52%`
1. [台风](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%23) `104.9K 🔥`
1. [老人多次遭护工打耳光事件已报警 (The incident involving an elderly man being slapped by a caregiver multiple times has been reported to the police)](https://s.weibo.com/weibo?q=%23%E8%80%81%E4%BA%BA%E5%A4%9A%E6%AC%A1%E9%81%AD%E6%8A%A4%E5%B7%A5%E6%89%93%E8%80%B3%E5%85%89%E4%BA%8B%E4%BB%B6%E5%B7%B2%E6%8A%A5%E8%AD%A6%23) `90.0K 🔥`
1. [玩具公司签67亿元算力大单 (Toy company signs big computing power order worth 6.7 billion yuan)](https://s.weibo.com/weibo?q=%23%E7%8E%A9%E5%85%B7%E5%85%AC%E5%8F%B8%E7%AD%BE67%E4%BA%BF%E5%85%83%E7%AE%97%E5%8A%9B%E5%A4%A7%E5%8D%95%23) `87.3K 🔥`
1. [大妈接了五毒教教主的私活](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%A6%88%E6%8E%A5%E4%BA%86%E4%BA%94%E6%AF%92%E6%95%99%E6%95%99%E4%B8%BB%E7%9A%84%E7%A7%81%E6%B4%BB%23) `83.3K 🔥`
1. [很多人其实不适合运动 (Many people are actually not suitable for exercise)](https://s.weibo.com/weibo?q=%23%E5%BE%88%E5%A4%9A%E4%BA%BA%E5%85%B6%E5%AE%9E%E4%B8%8D%E9%80%82%E5%90%88%E8%BF%90%E5%8A%A8%23) `79.7K 🔥`
1. [公职人员被举报开餐厅超市](https://s.weibo.com/weibo?q=%23%E5%85%AC%E8%81%8C%E4%BA%BA%E5%91%98%E8%A2%AB%E4%B8%BE%E6%8A%A5%E5%BC%80%E9%A4%90%E5%8E%85%E8%B6%85%E5%B8%82%23) `79.7K 🔥`
1. [突然意识到高能量永远大于能力](https://s.weibo.com/weibo?q=%23%E7%AA%81%E7%84%B6%E6%84%8F%E8%AF%86%E5%88%B0%E9%AB%98%E8%83%BD%E9%87%8F%E6%B0%B8%E8%BF%9C%E5%A4%A7%E4%BA%8E%E8%83%BD%E5%8A%9B%23) `79.6K 🔥`
1. [女子因邻车长期压线停车装护栏 (A woman stopped to install a guardrail because a neighboring car was parked on the line for a long time.)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%9B%A0%E9%82%BB%E8%BD%A6%E9%95%BF%E6%9C%9F%E5%8E%8B%E7%BA%BF%E5%81%9C%E8%BD%A6%E8%A3%85%E6%8A%A4%E6%A0%8F%23) `79.6K 🔥`
1. [张凌赫回应这一秒过火大结局](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%9B%9E%E5%BA%94%E8%BF%99%E4%B8%80%E7%A7%92%E8%BF%87%E7%81%AB%E5%A4%A7%E7%BB%93%E5%B1%80%23) `79.6K 🔥`
1. [王俊凯 南京](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%20%E5%8D%97%E4%BA%AC%23) `79.6K 🔥`

Updated at 2026-08-06 07:39:52

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
