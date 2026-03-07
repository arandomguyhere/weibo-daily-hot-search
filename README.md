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

1. [谭松韵演技 (Tan Songyun's acting skills)](https://s.weibo.com/weibo?q=%23%E8%B0%AD%E6%9D%BE%E9%9F%B5%E6%BC%94%E6%8A%80%23) `263.4K 🔥` `NEW`
1. [巴黎世家大秀](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E9%BB%8E%E4%B8%96%E5%AE%B6%E5%A4%A7%E7%A7%80%23) `262.5K 🔥` `NEW`
1. [王子文一对一在线缘辅导](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%AD%90%E6%96%87%E4%B8%80%E5%AF%B9%E4%B8%80%E5%9C%A8%E7%BA%BF%E7%BC%98%E8%BE%85%E5%AF%BC%23) `262.3K 🔥` `NEW`
1. [多地实现草莓自由](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E5%9C%B0%E5%AE%9E%E7%8E%B0%E8%8D%89%E8%8E%93%E8%87%AA%E7%94%B1%23) `258.7K 🔥` `NEW`
1. [河南矿山老板妇女节又发钱了](https://s.weibo.com/weibo?q=%23%E6%B2%B3%E5%8D%97%E7%9F%BF%E5%B1%B1%E8%80%81%E6%9D%BF%E5%A6%87%E5%A5%B3%E8%8A%82%E5%8F%88%E5%8F%91%E9%92%B1%E4%BA%86%23) `175.2K 🔥` `NEW`
1. [6年派遣工仍觉自己是职场二等公民](https://s.weibo.com/weibo?q=%236%E5%B9%B4%E6%B4%BE%E9%81%A3%E5%B7%A5%E4%BB%8D%E8%A7%89%E8%87%AA%E5%B7%B1%E6%98%AF%E8%81%8C%E5%9C%BA%E4%BA%8C%E7%AD%89%E5%85%AC%E6%B0%91%23) `174.8K 🔥` `NEW`
1. [张凌赫的秘密](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%9A%84%E7%A7%98%E5%AF%86%23) `174.4K 🔥` `NEW`
1. [王曼昱诠释女性独立的内生力量](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%9B%BC%E6%98%B1%E8%AF%A0%E9%87%8A%E5%A5%B3%E6%80%A7%E7%8B%AC%E7%AB%8B%E7%9A%84%E5%86%85%E7%94%9F%E5%8A%9B%E9%87%8F%23) `174.3K 🔥` `NEW`
1. [华春莹在广东团被一棵树吸引了](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E6%98%A5%E8%8E%B9%E5%9C%A8%E5%B9%BF%E4%B8%9C%E5%9B%A2%E8%A2%AB%E4%B8%80%E6%A3%B5%E6%A0%91%E5%90%B8%E5%BC%95%E4%BA%86%23) `174.1K 🔥` `NEW`
1. [加满一箱油预计多花19.5元](https://s.weibo.com/weibo?q=%23%E5%8A%A0%E6%BB%A1%E4%B8%80%E7%AE%B1%E6%B2%B9%E9%A2%84%E8%AE%A1%E5%A4%9A%E8%8A%B119.5%E5%85%83%23) `173.9K 🔥` `NEW`
1. [3人48小时做出5亿播放量AI短剧 (3 people created an AI short drama with 500 million views in 48 hours)](https://s.weibo.com/weibo?q=%233%E4%BA%BA48%E5%B0%8F%E6%97%B6%E5%81%9A%E5%87%BA5%E4%BA%BF%E6%92%AD%E6%94%BE%E9%87%8FAI%E7%9F%AD%E5%89%A7%23) `1.1M 🔥` `+36%`
1. [TES教练 Naiyou说季后赛输的都是假赛 (TES coach Naiyou said losses in the playoffs are all fake games)](https://s.weibo.com/weibo?q=%23TES%E6%95%99%E7%BB%83%20Naiyou%E8%AF%B4%E5%AD%A3%E5%90%8E%E8%B5%9B%E8%BE%93%E7%9A%84%E9%83%BD%E6%98%AF%E5%81%87%E8%B5%9B%23) `175.2K 🔥` `+28%`
1. [张凌赫田曦薇对唱 (Duet between Zhang Ling and Tian Xiwei)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%94%B0%E6%9B%A6%E8%96%87%E5%AF%B9%E5%94%B1%23) `175.0K 🔥` `+32%`
1. [金价剧烈波动现在还能上车吗](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E5%89%A7%E7%83%88%E6%B3%A2%E5%8A%A8%E7%8E%B0%E5%9C%A8%E8%BF%98%E8%83%BD%E4%B8%8A%E8%BD%A6%E5%90%97%23) `175.0K 🔥` `+64%`
1. [鲁豫吃了多少盐才能讲出这些话 (How much salt did Lu Yu eat to say these words?)](https://s.weibo.com/weibo?q=%23%E9%B2%81%E8%B1%AB%E5%90%83%E4%BA%86%E5%A4%9A%E5%B0%91%E7%9B%90%E6%89%8D%E8%83%BD%E8%AE%B2%E5%87%BA%E8%BF%99%E4%BA%9B%E8%AF%9D%23) `174.9K 🔥` `+26%`
1. [王鹤棣首部电影票房破亿](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%B9%A4%E6%A3%A3%E9%A6%96%E9%83%A8%E7%94%B5%E5%BD%B1%E7%A5%A8%E6%88%BF%E7%A0%B4%E4%BA%BF%23) `174.9K 🔥` `+23%`
1. [家长称8天假期打印了60多页作业 (Parents said they printed more than 60 pages of homework during the eight-day holiday)](https://s.weibo.com/weibo?q=%23%E5%AE%B6%E9%95%BF%E7%A7%B08%E5%A4%A9%E5%81%87%E6%9C%9F%E6%89%93%E5%8D%B0%E4%BA%8660%E5%A4%9A%E9%A1%B5%E4%BD%9C%E4%B8%9A%23) `174.8K 🔥` `+35%`
1. [人大代表推荐化橘红纳入国礼](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E5%A4%A7%E4%BB%A3%E8%A1%A8%E6%8E%A8%E8%8D%90%E5%8C%96%E6%A9%98%E7%BA%A2%E7%BA%B3%E5%85%A5%E5%9B%BD%E7%A4%BC%23) `174.8K 🔥` `+98%`
1. [逐玉 二人转 (Zhuyu Errenzhuan)](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%20%E4%BA%8C%E4%BA%BA%E8%BD%AC%23) `174.7K 🔥` `+30%`
1. [美媒称美国或应为伊朗小学遇袭负责](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%AA%92%E7%A7%B0%E7%BE%8E%E5%9B%BD%E6%88%96%E5%BA%94%E4%B8%BA%E4%BC%8A%E6%9C%97%E5%B0%8F%E5%AD%A6%E9%81%87%E8%A2%AD%E8%B4%9F%E8%B4%A3%23) `174.7K 🔥` `+37%`
1. [逐玉 田耕纪](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%20%E7%94%B0%E8%80%95%E7%BA%AA%23) `174.6K 🔥` `+39%`
1. [倪萍看望渐冻症终末期的蔡磊](https://s.weibo.com/weibo?q=%23%E5%80%AA%E8%90%8D%E7%9C%8B%E6%9C%9B%E6%B8%90%E5%86%BB%E7%97%87%E7%BB%88%E6%9C%AB%E6%9C%9F%E7%9A%84%E8%94%A1%E7%A3%8A%23) `174.6K 🔥` `+35%`
1. [美以袭击致192名伊朗师生死亡 (US-Israeli attack kills 192 Iranian teachers and students)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E4%BB%A5%E8%A2%AD%E5%87%BB%E8%87%B4192%E5%90%8D%E4%BC%8A%E6%9C%97%E5%B8%88%E7%94%9F%E6%AD%BB%E4%BA%A1%23) `174.5K 🔥` `+40%`
1. [上海一爆火小吃店煎包5毛胡辣汤3元 (A popular snack bar in Shanghai, fried buns for 5 yuan and spicy soup for 3 yuan)](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E4%B8%80%E7%88%86%E7%81%AB%E5%B0%8F%E5%90%83%E5%BA%97%E7%85%8E%E5%8C%855%E6%AF%9B%E8%83%A1%E8%BE%A3%E6%B1%A43%E5%85%83%23) `174.5K 🔥` `+102%`
1. [伊朗驻埃及大使说不会再相信美国](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E9%A9%BB%E5%9F%83%E5%8F%8A%E5%A4%A7%E4%BD%BF%E8%AF%B4%E4%B8%8D%E4%BC%9A%E5%86%8D%E7%9B%B8%E4%BF%A1%E7%BE%8E%E5%9B%BD%23) `174.4K 🔥` `+104%`
1. [田曦薇太适合演生命力旺盛的女生了](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E5%A4%AA%E9%80%82%E5%90%88%E6%BC%94%E7%94%9F%E5%91%BD%E5%8A%9B%E6%97%BA%E7%9B%9B%E7%9A%84%E5%A5%B3%E7%94%9F%E4%BA%86%23) `174.4K 🔥` `+45%`
1. [王安宇裴秀智孙千同框 (Wang Anyu, Pei Xiuzhi and Sun Qian are in the same frame)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%AE%89%E5%AE%87%E8%A3%B4%E7%A7%80%E6%99%BA%E5%AD%99%E5%8D%83%E5%90%8C%E6%A1%86%23) `174.4K 🔥` `+99%`
1. [伊朗不许美以相关船只通过霍尔木兹 (Iran blocks US-Israeli ships from passing through Hormuz)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E4%B8%8D%E8%AE%B8%E7%BE%8E%E4%BB%A5%E7%9B%B8%E5%85%B3%E8%88%B9%E5%8F%AA%E9%80%9A%E8%BF%87%E9%9C%8D%E5%B0%94%E6%9C%A8%E5%85%B9%23) `174.3K 🔥` `+102%`
1. [爸妈收个礼物全村都知道了 (My parents received a gift and the whole village knew about it.)](https://s.weibo.com/weibo?q=%23%E7%88%B8%E5%A6%88%E6%94%B6%E4%B8%AA%E7%A4%BC%E7%89%A9%E5%85%A8%E6%9D%91%E9%83%BD%E7%9F%A5%E9%81%93%E4%BA%86%23) `174.2K 🔥` `+93%`
1. [能瘦15%的减重药创始人回应自己胖](https://s.weibo.com/weibo?q=%23%E8%83%BD%E7%98%A615%25%E7%9A%84%E5%87%8F%E9%87%8D%E8%8D%AF%E5%88%9B%E5%A7%8B%E4%BA%BA%E5%9B%9E%E5%BA%94%E8%87%AA%E5%B7%B1%E8%83%96%23) `174.1K 🔥` `+86%`
1. [伊拉克记者方浩明成中国准女婿 (Iraqi journalist Fang Haoming becomes Chinese son-in-law-to-be)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%8B%89%E5%85%8B%E8%AE%B0%E8%80%85%E6%96%B9%E6%B5%A9%E6%98%8E%E6%88%90%E4%B8%AD%E5%9B%BD%E5%87%86%E5%A5%B3%E5%A9%BF%23) `174.0K 🔥` `+106%`
1. [中国的身份证果然高级 (China’s ID card is really advanced)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%9A%84%E8%BA%AB%E4%BB%BD%E8%AF%81%E6%9E%9C%E7%84%B6%E9%AB%98%E7%BA%A7%23) `174.0K 🔥` `+100%`
1. [两会学习笔记 (Two sessions study notes)](https://s.weibo.com/weibo?q=%23%E4%B8%A4%E4%BC%9A%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0%23) `645.0K 🔥`
1. [手机放大身份证竟藏微缩字母 (Mobile phone enlarges ID card to hide micro letters)](https://s.weibo.com/weibo?q=%23%E6%89%8B%E6%9C%BA%E6%94%BE%E5%A4%A7%E8%BA%AB%E4%BB%BD%E8%AF%81%E7%AB%9F%E8%97%8F%E5%BE%AE%E7%BC%A9%E5%AD%97%E6%AF%8D%23) `333.6K 🔥`
1. [奥巴马说在当前的美国很难怀抱希望](https://s.weibo.com/weibo?q=%23%E5%A5%A5%E5%B7%B4%E9%A9%AC%E8%AF%B4%E5%9C%A8%E5%BD%93%E5%89%8D%E7%9A%84%E7%BE%8E%E5%9B%BD%E5%BE%88%E9%9A%BE%E6%80%80%E6%8A%B1%E5%B8%8C%E6%9C%9B%23) `248.8K 🔥`
1. [逐玉 (Zhuyu)](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%23) `240.4K 🔥`
1. [郭晓婷王天辰GLASS (Guo Xiaoting Wang Tianchen GLASS)](https://s.weibo.com/weibo?q=%23%E9%83%AD%E6%99%93%E5%A9%B7%E7%8E%8B%E5%A4%A9%E8%BE%B0GLASS%23) `175.3K 🔥`
1. [逐玉热度 (The popularity of chasing jade)](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%E7%83%AD%E5%BA%A6%23) `175.1K 🔥`
1. [公务员养上政务龙虾了](https://s.weibo.com/weibo?q=%23%E5%85%AC%E5%8A%A1%E5%91%98%E5%85%BB%E4%B8%8A%E6%94%BF%E5%8A%A1%E9%BE%99%E8%99%BE%E4%BA%86%23) `175.1K 🔥`
1. [杨超越巴黎世家全球首穿](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E8%B6%85%E8%B6%8A%E5%B7%B4%E9%BB%8E%E4%B8%96%E5%AE%B6%E5%85%A8%E7%90%83%E9%A6%96%E7%A9%BF%23) `175.0K 🔥`
1. [罗意威新设计师](https://s.weibo.com/weibo?q=%23%E7%BD%97%E6%84%8F%E5%A8%81%E6%96%B0%E8%AE%BE%E8%AE%A1%E5%B8%88%23) `174.2K 🔥`
1. [霍启刚回应香港无冰雪发展冰雪经济 (Fok Qigang responds to the development of ice and snow economy in Hong Kong without ice and snow)](https://s.weibo.com/weibo?q=%23%E9%9C%8D%E5%90%AF%E5%88%9A%E5%9B%9E%E5%BA%94%E9%A6%99%E6%B8%AF%E6%97%A0%E5%86%B0%E9%9B%AA%E5%8F%91%E5%B1%95%E5%86%B0%E9%9B%AA%E7%BB%8F%E6%B5%8E%23) `785.6K 🔥` `-26%`
1. [邝兆镭中超首秀](https://s.weibo.com/weibo?q=%23%E9%82%9D%E5%85%86%E9%95%AD%E4%B8%AD%E8%B6%85%E9%A6%96%E7%A7%80%23) `259.4K 🔥` `-26%`
1. [速览民生主题记者会上的惠民清单](https://s.weibo.com/weibo?q=%23%E9%80%9F%E8%A7%88%E6%B0%91%E7%94%9F%E4%B8%BB%E9%A2%98%E8%AE%B0%E8%80%85%E4%BC%9A%E4%B8%8A%E7%9A%84%E6%83%A0%E6%B0%91%E6%B8%85%E5%8D%95%23) `255.4K 🔥` `-25%`
1. [孩子一出生就自带口粮自带工资 (As soon as a child is born, he brings his own food and salary.)](https://s.weibo.com/weibo?q=%23%E5%AD%A9%E5%AD%90%E4%B8%80%E5%87%BA%E7%94%9F%E5%B0%B1%E8%87%AA%E5%B8%A6%E5%8F%A3%E7%B2%AE%E8%87%AA%E5%B8%A6%E5%B7%A5%E8%B5%84%23) `253.1K 🔥` `-27%`
1. [伊朗导弹袭击以色列机场](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%AF%BC%E5%BC%B9%E8%A2%AD%E5%87%BB%E4%BB%A5%E8%89%B2%E5%88%97%E6%9C%BA%E5%9C%BA%23) `252.5K 🔥` `-24%`
1. [男子丽江旅游中奖1034万](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E4%B8%BD%E6%B1%9F%E6%97%85%E6%B8%B8%E4%B8%AD%E5%A5%961034%E4%B8%87%23) `249.7K 🔥` `-24%`
1. [伊朗总统称不再首先攻击邻国 (Iran's president says he will no longer attack neighbors first)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%80%BB%E7%BB%9F%E7%A7%B0%E4%B8%8D%E5%86%8D%E9%A6%96%E5%85%88%E6%94%BB%E5%87%BB%E9%82%BB%E5%9B%BD%23) `245.3K 🔥` `-25%`
1. [女孩贪玩忘事成绩下滑查出罕见病 (A girl was found to have a rare disease because she was too playful and forgot about things, her grades dropped.)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%A9%E8%B4%AA%E7%8E%A9%E5%BF%98%E4%BA%8B%E6%88%90%E7%BB%A9%E4%B8%8B%E6%BB%91%E6%9F%A5%E5%87%BA%E7%BD%95%E8%A7%81%E7%97%85%23) `202.3K 🔥` `-32%`
1. [AG战胜WB](https://s.weibo.com/weibo?q=%23AG%E6%88%98%E8%83%9CWB%23) `175.3K 🔥` `-51%`

Updated at 2026-03-07 23:32:36

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
