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

1. [对外贸易快速增长](https://s.weibo.com/weibo?q=%23%E5%AF%B9%E5%A4%96%E8%B4%B8%E6%98%93%E5%BF%AB%E9%80%9F%E5%A2%9E%E9%95%BF%23) `676.4K 🔥` `NEW`
1. [OPPO原相机发力了](https://s.weibo.com/weibo?q=%23OPPO%E5%8E%9F%E7%9B%B8%E6%9C%BA%E5%8F%91%E5%8A%9B%E4%BA%86%23) `643.1K 🔥` `NEW`
1. [花少3众星捧月的是娜扎](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%B0%913%E4%BC%97%E6%98%9F%E6%8D%A7%E6%9C%88%E7%9A%84%E6%98%AF%E5%A8%9C%E6%89%8E%23) `435.5K 🔥` `NEW`
1. [女子冒充村干部带货被立案调查](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%86%92%E5%85%85%E6%9D%91%E5%B9%B2%E9%83%A8%E5%B8%A6%E8%B4%A7%E8%A2%AB%E7%AB%8B%E6%A1%88%E8%B0%83%E6%9F%A5%23) `387.4K 🔥` `NEW`
1. [谭松韵10年4部爆款剧](https://s.weibo.com/weibo?q=%23%E8%B0%AD%E6%9D%BE%E9%9F%B510%E5%B9%B44%E9%83%A8%E7%88%86%E6%AC%BE%E5%89%A7%23) `262.1K 🔥` `NEW`
1. [皇马3比2绝杀埃尔切](https://s.weibo.com/weibo?q=%23%E7%9A%87%E9%A9%AC3%E6%AF%942%E7%BB%9D%E6%9D%80%E5%9F%83%E5%B0%94%E5%88%87%23) `215.9K 🔥` `NEW`
1. [小伙211毕业武汉卖手机第1个月赚3万](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E4%BC%99211%E6%AF%95%E4%B8%9A%E6%AD%A6%E6%B1%89%E5%8D%96%E6%89%8B%E6%9C%BA%E7%AC%AC1%E4%B8%AA%E6%9C%88%E8%B5%9A3%E4%B8%87%23) `204.7K 🔥` `NEW`
1. [白鹿走秀提鞋](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E8%B5%B0%E7%A7%80%E6%8F%90%E9%9E%8B%23) `179.2K 🔥` `NEW`
1. [用AI裁了70多人利润就上去了](https://s.weibo.com/weibo?q=%23%E7%94%A8AI%E8%A3%81%E4%BA%8670%E5%A4%9A%E4%BA%BA%E5%88%A9%E6%B6%A6%E5%B0%B1%E4%B8%8A%E5%8E%BB%E4%BA%86%23) `174.1K 🔥` `NEW`
1. [陈建州心肌梗塞开刀](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%BB%BA%E5%B7%9E%E5%BF%83%E8%82%8C%E6%A2%97%E5%A1%9E%E5%BC%80%E5%88%80%23) `171.5K 🔥` `NEW`
1. [王力宏第一时间冲到医院](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%8A%9B%E5%AE%8F%E7%AC%AC%E4%B8%80%E6%97%B6%E9%97%B4%E5%86%B2%E5%88%B0%E5%8C%BB%E9%99%A2%23) `168.3K 🔥` `NEW`
1. [男子30年前存一万定期忘取](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%9030%E5%B9%B4%E5%89%8D%E5%AD%98%E4%B8%80%E4%B8%87%E5%AE%9A%E6%9C%9F%E5%BF%98%E5%8F%96%23) `165.7K 🔥` `NEW`
1. [陈乔恩连续10年悼念乔任梁](https://s.weibo.com/weibo?q=%23%E9%99%88%E4%B9%94%E6%81%A9%E8%BF%9E%E7%BB%AD10%E5%B9%B4%E6%82%BC%E5%BF%B5%E4%B9%94%E4%BB%BB%E6%A2%81%23) `162.5K 🔥` `NEW`
1. [知情人称野人先生毛利不低于60%](https://s.weibo.com/weibo?q=%23%E7%9F%A5%E6%83%85%E4%BA%BA%E7%A7%B0%E9%87%8E%E4%BA%BA%E5%85%88%E7%94%9F%E6%AF%9B%E5%88%A9%E4%B8%8D%E4%BD%8E%E4%BA%8E60%25%23) `159.6K 🔥` `NEW`
1. [早睡真的可以改命](https://s.weibo.com/weibo?q=%23%E6%97%A9%E7%9D%A1%E7%9C%9F%E7%9A%84%E5%8F%AF%E4%BB%A5%E6%94%B9%E5%91%BD%23) `158.7K 🔥` `NEW`
1. [陈建州才四十多岁](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%BB%BA%E5%B7%9E%E6%89%8D%E5%9B%9B%E5%8D%81%E5%A4%9A%E5%B2%81%23) `158.2K 🔥` `NEW`
1. [阿根廷友谊赛名单](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E5%8F%8B%E8%B0%8A%E8%B5%9B%E5%90%8D%E5%8D%95%23) `155.8K 🔥` `NEW`
1. [范丞丞祝白敬亭战争和人拍摄顺利](https://s.weibo.com/weibo?q=%23%E8%8C%83%E4%B8%9E%E4%B8%9E%E7%A5%9D%E7%99%BD%E6%95%AC%E4%BA%AD%E6%88%98%E4%BA%89%E5%92%8C%E4%BA%BA%E6%8B%8D%E6%91%84%E9%A1%BA%E5%88%A9%23) `151.9K 🔥` `NEW`
1. [直播间假村官卖货套路](https://s.weibo.com/weibo?q=%23%E7%9B%B4%E6%92%AD%E9%97%B4%E5%81%87%E6%9D%91%E5%AE%98%E5%8D%96%E8%B4%A7%E5%A5%97%E8%B7%AF%23) `151.4K 🔥` `NEW`
1. [看得出井柏然是好人了](https://s.weibo.com/weibo?q=%23%E7%9C%8B%E5%BE%97%E5%87%BA%E4%BA%95%E6%9F%8F%E7%84%B6%E6%98%AF%E5%A5%BD%E4%BA%BA%E4%BA%86%23) `148.4K 🔥` `NEW`
1. [女律师被砸身亡凶手曾多次高空抛物](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%BE%8B%E5%B8%88%E8%A2%AB%E7%A0%B8%E8%BA%AB%E4%BA%A1%E5%87%B6%E6%89%8B%E6%9B%BE%E5%A4%9A%E6%AC%A1%E9%AB%98%E7%A9%BA%E6%8A%9B%E7%89%A9%23) `148.1K 🔥` `NEW`
1. [日本梅毒 买不到青霉素](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E6%A2%85%E6%AF%92%20%E4%B9%B0%E4%B8%8D%E5%88%B0%E9%9D%92%E9%9C%89%E7%B4%A0%23) `145.4K 🔥` `NEW`
1. [姆巴佩破门20](https://s.weibo.com/weibo?q=%23%E5%A7%86%E5%B7%B4%E4%BD%A9%E7%A0%B4%E9%97%A820%23) `145.2K 🔥` `NEW`
1. [问界说明](https://s.weibo.com/weibo?q=%23%E9%97%AE%E7%95%8C%E8%AF%B4%E6%98%8E%23) `141.8K 🔥` `NEW`
1. [杨洋李沁谈了五年](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E6%B4%8B%E6%9D%8E%E6%B2%81%E8%B0%88%E4%BA%86%E4%BA%94%E5%B9%B4%23) `141.0K 🔥` `NEW`
1. [张婧仪宣传范丞丞新专辑](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%A9%A7%E4%BB%AA%E5%AE%A3%E4%BC%A0%E8%8C%83%E4%B8%9E%E4%B8%9E%E6%96%B0%E4%B8%93%E8%BE%91%23) `138.2K 🔥` `NEW`
1. [一劳永逸解决台湾问题](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%8A%B3%E6%B0%B8%E9%80%B8%E8%A7%A3%E5%86%B3%E5%8F%B0%E6%B9%BE%E9%97%AE%E9%A2%98%23) `1.2M 🔥` `+832%`
1. [隐翅虫被女生用手掐着玩](https://s.weibo.com/weibo?q=%23%E9%9A%90%E7%BF%85%E8%99%AB%E8%A2%AB%E5%A5%B3%E7%94%9F%E7%94%A8%E6%89%8B%E6%8E%90%E7%9D%80%E7%8E%A9%23) `861.8K 🔥` `+1483%`
1. [发朋友圈要有滞后性](https://s.weibo.com/weibo?q=%23%E5%8F%91%E6%9C%8B%E5%8F%8B%E5%9C%88%E8%A6%81%E6%9C%89%E6%BB%9E%E5%90%8E%E6%80%A7%23) `593.2K 🔥` `+46%`
1. [顺丰同城代言人出道秀](https://s.weibo.com/weibo?q=%23%E9%A1%BA%E4%B8%B0%E5%90%8C%E5%9F%8E%E4%BB%A3%E8%A8%80%E4%BA%BA%E5%87%BA%E9%81%93%E7%A7%80%23) `383.6K 🔥` `+278%`
1. [人一定要为自己的舒适买单](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E4%B8%80%E5%AE%9A%E8%A6%81%E4%B8%BA%E8%87%AA%E5%B7%B1%E7%9A%84%E8%88%92%E9%80%82%E4%B9%B0%E5%8D%95%23) `179.7K 🔥` `+273%`
1. [两次亲子鉴定确认孙子非亡父亲生](https://s.weibo.com/weibo?q=%23%E4%B8%A4%E6%AC%A1%E4%BA%B2%E5%AD%90%E9%89%B4%E5%AE%9A%E7%A1%AE%E8%AE%A4%E5%AD%99%E5%AD%90%E9%9D%9E%E4%BA%A1%E7%88%B6%E4%BA%B2%E7%94%9F%23) `175.8K 🔥` `+259%`
1. [产房盼男 病房盼女](https://s.weibo.com/weibo?q=%23%E4%BA%A7%E6%88%BF%E7%9B%BC%E7%94%B7%20%E7%97%85%E6%88%BF%E7%9B%BC%E5%A5%B3%23) `162.2K 🔥` `+216%`
1. [网传刘亦菲陈晓咸雪导演伊峥](https://s.weibo.com/weibo?q=%23%E7%BD%91%E4%BC%A0%E5%88%98%E4%BA%A6%E8%8F%B2%E9%99%88%E6%99%93%E5%92%B8%E9%9B%AA%E5%AF%BC%E6%BC%94%E4%BC%8A%E5%B3%A5%23) `159.9K 🔥` `+163%`
1. [孙子非亲生案司法鉴定中心被处罚](https://s.weibo.com/weibo?q=%23%E5%AD%99%E5%AD%90%E9%9D%9E%E4%BA%B2%E7%94%9F%E6%A1%88%E5%8F%B8%E6%B3%95%E9%89%B4%E5%AE%9A%E4%B8%AD%E5%BF%83%E8%A2%AB%E5%A4%84%E7%BD%9A%23) `157.7K 🔥` `+266%`
1. [弟弟离世数周社恐哥哥无法自理死亡](https://s.weibo.com/weibo?q=%23%E5%BC%9F%E5%BC%9F%E7%A6%BB%E4%B8%96%E6%95%B0%E5%91%A8%E7%A4%BE%E6%81%90%E5%93%A5%E5%93%A5%E6%97%A0%E6%B3%95%E8%87%AA%E7%90%86%E6%AD%BB%E4%BA%A1%23) `156.8K 🔥` `+100%`
1. [兰香如故腾讯今年第四部破万剧](https://s.weibo.com/weibo?q=%23%E5%85%B0%E9%A6%99%E5%A6%82%E6%95%85%E8%85%BE%E8%AE%AF%E4%BB%8A%E5%B9%B4%E7%AC%AC%E5%9B%9B%E9%83%A8%E7%A0%B4%E4%B8%87%E5%89%A7%23) `155.2K 🔥` `+188%`
1. [停产了但让你怀念的零食](https://s.weibo.com/weibo?q=%23%E5%81%9C%E4%BA%A7%E4%BA%86%E4%BD%86%E8%AE%A9%E4%BD%A0%E6%80%80%E5%BF%B5%E7%9A%84%E9%9B%B6%E9%A3%9F%23) `154.3K 🔥` `+136%`
1. [七旬老太入冰棺1天睁眼复活](https://s.weibo.com/weibo?q=%23%E4%B8%83%E6%97%AC%E8%80%81%E5%A4%AA%E5%85%A5%E5%86%B0%E6%A3%BA1%E5%A4%A9%E7%9D%81%E7%9C%BC%E5%A4%8D%E6%B4%BB%23) `153.5K 🔥` `+256%`
1. [巴基斯坦人在浦东机场偷电脑被驱逐](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E5%9F%BA%E6%96%AF%E5%9D%A6%E4%BA%BA%E5%9C%A8%E6%B5%A6%E4%B8%9C%E6%9C%BA%E5%9C%BA%E5%81%B7%E7%94%B5%E8%84%91%E8%A2%AB%E9%A9%B1%E9%80%90%23) `152.8K 🔥` `+280%`
1. [7旬老太入冰棺1天后复活2天又去世](https://s.weibo.com/weibo?q=%237%E6%97%AC%E8%80%81%E5%A4%AA%E5%85%A5%E5%86%B0%E6%A3%BA1%E5%A4%A9%E5%90%8E%E5%A4%8D%E6%B4%BB2%E5%A4%A9%E5%8F%88%E5%8E%BB%E4%B8%96%23) `150.5K 🔥` `+261%`
1. [95后宝妈连生4胎终于迎来了女儿](https://s.weibo.com/weibo?q=%2395%E5%90%8E%E5%AE%9D%E5%A6%88%E8%BF%9E%E7%94%9F4%E8%83%8E%E7%BB%88%E4%BA%8E%E8%BF%8E%E6%9D%A5%E4%BA%86%E5%A5%B3%E5%84%BF%23) `149.9K 🔥` `+269%`
1. [新能源汽车 燃油车](https://s.weibo.com/weibo?q=%23%E6%96%B0%E8%83%BD%E6%BA%90%E6%B1%BD%E8%BD%A6%20%E7%87%83%E6%B2%B9%E8%BD%A6%23) `149.2K 🔥` `+173%`
1. [网友向杨某媛西班牙学校反映情况](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%8F%8B%E5%90%91%E6%9D%A8%E6%9F%90%E5%AA%9B%E8%A5%BF%E7%8F%AD%E7%89%99%E5%AD%A6%E6%A0%A1%E5%8F%8D%E6%98%A0%E6%83%85%E5%86%B5%23) `147.0K 🔥` `+218%`
1. [很多病都是撑出来的](https://s.weibo.com/weibo?q=%23%E5%BE%88%E5%A4%9A%E7%97%85%E9%83%BD%E6%98%AF%E6%92%91%E5%87%BA%E6%9D%A5%E7%9A%84%23) `146.6K 🔥` `+240%`
1. [孙子非亲生案亲子鉴定结果程序违法](https://s.weibo.com/weibo?q=%23%E5%AD%99%E5%AD%90%E9%9D%9E%E4%BA%B2%E7%94%9F%E6%A1%88%E4%BA%B2%E5%AD%90%E9%89%B4%E5%AE%9A%E7%BB%93%E6%9E%9C%E7%A8%8B%E5%BA%8F%E8%BF%9D%E6%B3%95%23) `144.2K 🔥` `+167%`
1. [孙子非亲生案爷爷已是直肠癌晚期](https://s.weibo.com/weibo?q=%23%E5%AD%99%E5%AD%90%E9%9D%9E%E4%BA%B2%E7%94%9F%E6%A1%88%E7%88%B7%E7%88%B7%E5%B7%B2%E6%98%AF%E7%9B%B4%E8%82%A0%E7%99%8C%E6%99%9A%E6%9C%9F%23) `143.5K 🔥` `+233%`
1. [无人机俯瞰尼泊尔死亡谷公路](https://s.weibo.com/weibo?q=%23%E6%97%A0%E4%BA%BA%E6%9C%BA%E4%BF%AF%E7%9E%B0%E5%B0%BC%E6%B3%8A%E5%B0%94%E6%AD%BB%E4%BA%A1%E8%B0%B7%E5%85%AC%E8%B7%AF%23) `143.0K 🔥` `+254%`
1. [印度金砖峰会餐饮自称奢华](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%BA%A6%E9%87%91%E7%A0%96%E5%B3%B0%E4%BC%9A%E9%A4%90%E9%A5%AE%E8%87%AA%E7%A7%B0%E5%A5%A2%E5%8D%8E%23) `141.1K 🔥` `+256%`
1. [接到陌生来电请沉默三秒](https://s.weibo.com/weibo?q=%23%E6%8E%A5%E5%88%B0%E9%99%8C%E7%94%9F%E6%9D%A5%E7%94%B5%E8%AF%B7%E6%B2%89%E9%BB%98%E4%B8%89%E7%A7%92%23) `139.5K 🔥` `+248%`
1. [兰香如故爆款](https://s.weibo.com/weibo?q=%23%E5%85%B0%E9%A6%99%E5%A6%82%E6%95%85%E7%88%86%E6%AC%BE%23) `139.2K 🔥` `+251%`
1. [护士不承认给男婴误注10倍肾上腺素](https://s.weibo.com/weibo?q=%23%E6%8A%A4%E5%A3%AB%E4%B8%8D%E6%89%BF%E8%AE%A4%E7%BB%99%E7%94%B7%E5%A9%B4%E8%AF%AF%E6%B3%A810%E5%80%8D%E8%82%BE%E4%B8%8A%E8%85%BA%E7%B4%A0%23) `137.7K 🔥` `+147%`

Updated at 2026-09-16 08:16:18

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
