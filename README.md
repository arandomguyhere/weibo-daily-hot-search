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

1. [民生主题记者会 (People's Livelihood Theme Press Conference)](https://s.weibo.com/weibo?q=%23%E6%B0%91%E7%94%9F%E4%B8%BB%E9%A2%98%E8%AE%B0%E8%80%85%E4%BC%9A%23) `1.0M 🔥` `NEW`
1. [未来五年哪些工作更吃香](https://s.weibo.com/weibo?q=%23%E6%9C%AA%E6%9D%A5%E4%BA%94%E5%B9%B4%E5%93%AA%E4%BA%9B%E5%B7%A5%E4%BD%9C%E6%9B%B4%E5%90%83%E9%A6%99%23) `738.7K 🔥` `NEW`
1. [TESnaiyou 假赛](https://s.weibo.com/weibo?q=%23TESnaiyou%20%E5%81%87%E8%B5%9B%23) `213.6K 🔥` `NEW`
1. [霍尔木兹海峡船只遭袭致4死3重伤](https://s.weibo.com/weibo?q=%23%E9%9C%8D%E5%B0%94%E6%9C%A8%E5%85%B9%E6%B5%B7%E5%B3%A1%E8%88%B9%E5%8F%AA%E9%81%AD%E8%A2%AD%E8%87%B44%E6%AD%BB3%E9%87%8D%E4%BC%A4%23) `190.6K 🔥` `NEW`
1. [成年人最大的魅力就是解决问题的能力](https://s.weibo.com/weibo?q=%23%E6%88%90%E5%B9%B4%E4%BA%BA%E6%9C%80%E5%A4%A7%E7%9A%84%E9%AD%85%E5%8A%9B%E5%B0%B1%E6%98%AF%E8%A7%A3%E5%86%B3%E9%97%AE%E9%A2%98%E7%9A%84%E8%83%BD%E5%8A%9B%23) `188.6K 🔥` `NEW`
1. [4岁女孩拒叫郭嫕澂改名郭予柠](https://s.weibo.com/weibo?q=%234%E5%B2%81%E5%A5%B3%E5%AD%A9%E6%8B%92%E5%8F%AB%E9%83%AD%E5%AB%95%E6%BE%82%E6%94%B9%E5%90%8D%E9%83%AD%E4%BA%88%E6%9F%A0%23) `161.8K 🔥` `NEW`
1. [熬夜后头皮发臭的原因](https://s.weibo.com/weibo?q=%23%E7%86%AC%E5%A4%9C%E5%90%8E%E5%A4%B4%E7%9A%AE%E5%8F%91%E8%87%AD%E7%9A%84%E5%8E%9F%E5%9B%A0%23) `160.3K 🔥` `NEW`
1. [去年高中毛入学率92%](https://s.weibo.com/weibo?q=%23%E5%8E%BB%E5%B9%B4%E9%AB%98%E4%B8%AD%E6%AF%9B%E5%85%A5%E5%AD%A6%E7%8E%8792%25%23) `149.5K 🔥` `NEW`
1. [陈飞宇 吃的也不多还是得活着](https://s.weibo.com/weibo?q=%23%E9%99%88%E9%A3%9E%E5%AE%87%20%E5%90%83%E7%9A%84%E4%B9%9F%E4%B8%8D%E5%A4%9A%E8%BF%98%E6%98%AF%E5%BE%97%E6%B4%BB%E7%9D%80%23) `149.1K 🔥` `NEW`
1. [4岁女儿被诊断为男孩需选性别做手术](https://s.weibo.com/weibo?q=%234%E5%B2%81%E5%A5%B3%E5%84%BF%E8%A2%AB%E8%AF%8A%E6%96%AD%E4%B8%BA%E7%94%B7%E5%AD%A9%E9%9C%80%E9%80%89%E6%80%A7%E5%88%AB%E5%81%9A%E6%89%8B%E6%9C%AF%23) `148.5K 🔥` `NEW`
1. [白鹿进组要下半年往后了 (Bailu will join the group in the second half of the year)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E8%BF%9B%E7%BB%84%E8%A6%81%E4%B8%8B%E5%8D%8A%E5%B9%B4%E5%BE%80%E5%90%8E%E4%BA%86%23) `147.7K 🔥` `NEW`
1. [普京与伊朗总统通电话](https://s.weibo.com/weibo?q=%23%E6%99%AE%E4%BA%AC%E4%B8%8E%E4%BC%8A%E6%9C%97%E6%80%BB%E7%BB%9F%E9%80%9A%E7%94%B5%E8%AF%9D%23) `146.3K 🔥` `NEW`
1. [岳雨婷G社出图](https://s.weibo.com/weibo?q=%23%E5%B2%B3%E9%9B%A8%E5%A9%B7G%E7%A4%BE%E5%87%BA%E5%9B%BE%23) `145.5K 🔥` `NEW`
1. [我国义务教育达高收入国家平均水平](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%9B%BD%E4%B9%89%E5%8A%A1%E6%95%99%E8%82%B2%E8%BE%BE%E9%AB%98%E6%94%B6%E5%85%A5%E5%9B%BD%E5%AE%B6%E5%B9%B3%E5%9D%87%E6%B0%B4%E5%B9%B3%23) `144.9K 🔥` `NEW`
1. [我的孩子6岁半她被埋在废墟下](https://s.weibo.com/weibo?q=%23%E6%88%91%E7%9A%84%E5%AD%A9%E5%AD%906%E5%B2%81%E5%8D%8A%E5%A5%B9%E8%A2%AB%E5%9F%8B%E5%9C%A8%E5%BA%9F%E5%A2%9F%E4%B8%8B%23) `144.6K 🔥` `NEW`
1. [原来这就是录音的意义](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E8%BF%99%E5%B0%B1%E6%98%AF%E5%BD%95%E9%9F%B3%E7%9A%84%E6%84%8F%E4%B9%89%23) `122.1K 🔥` `NEW`
1. [谁说在KTV里面只能正常唱歌](https://s.weibo.com/weibo?q=%23%E8%B0%81%E8%AF%B4%E5%9C%A8KTV%E9%87%8C%E9%9D%A2%E5%8F%AA%E8%83%BD%E6%AD%A3%E5%B8%B8%E5%94%B1%E6%AD%8C%23) `121.8K 🔥` `NEW`
1. [财政部部长称一分钱掰成两半花](https://s.weibo.com/weibo?q=%23%E8%B4%A2%E6%94%BF%E9%83%A8%E9%83%A8%E9%95%BF%E7%A7%B0%E4%B8%80%E5%88%86%E9%92%B1%E6%8E%B0%E6%88%90%E4%B8%A4%E5%8D%8A%E8%8A%B1%23) `113.0K 🔥` `NEW`
1. [章若楠黄色蝴蝶结吊带裙](https://s.weibo.com/weibo?q=%23%E7%AB%A0%E8%8B%A5%E6%A5%A0%E9%BB%84%E8%89%B2%E8%9D%B4%E8%9D%B6%E7%BB%93%E5%90%8A%E5%B8%A6%E8%A3%99%23) `110.0K 🔥` `NEW`
1. [持续清理整治违规办学校园欺凌](https://s.weibo.com/weibo?q=%23%E6%8C%81%E7%BB%AD%E6%B8%85%E7%90%86%E6%95%B4%E6%B2%BB%E8%BF%9D%E8%A7%84%E5%8A%9E%E5%AD%A6%E6%A0%A1%E5%9B%AD%E6%AC%BA%E5%87%8C%23) `108.6K 🔥` `NEW`
1. [我国在校生2.8亿 (There are 280 million students in school in my country)](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%9B%BD%E5%9C%A8%E6%A0%A1%E7%94%9F2.8%E4%BA%BF%23) `108.5K 🔥` `NEW`
1. [从小学生到工程师都在装OpenClaw](https://s.weibo.com/weibo?q=%23%E4%BB%8E%E5%B0%8F%E5%AD%A6%E7%94%9F%E5%88%B0%E5%B7%A5%E7%A8%8B%E5%B8%88%E9%83%BD%E5%9C%A8%E8%A3%85OpenClaw%23) `105.5K 🔥` `NEW`
1. [省委书记回应周末到河北横幅亮相国外](https://s.weibo.com/weibo?q=%23%E7%9C%81%E5%A7%94%E4%B9%A6%E8%AE%B0%E5%9B%9E%E5%BA%94%E5%91%A8%E6%9C%AB%E5%88%B0%E6%B2%B3%E5%8C%97%E6%A8%AA%E5%B9%85%E4%BA%AE%E7%9B%B8%E5%9B%BD%E5%A4%96%23) `99.1K 🔥` `NEW`
1. [山东一幼儿园硬核体能课走红](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E4%B8%9C%E4%B8%80%E5%B9%BC%E5%84%BF%E5%9B%AD%E7%A1%AC%E6%A0%B8%E4%BD%93%E8%83%BD%E8%AF%BE%E8%B5%B0%E7%BA%A2%23) `97.6K 🔥` `NEW`
1. [田曦薇任豪cp感](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E4%BB%BB%E8%B1%AAcp%E6%84%9F%23) `96.1K 🔥` `NEW`
1. [女子挤破鼻周痘痘2天后查出脑脓肿](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%8C%A4%E7%A0%B4%E9%BC%BB%E5%91%A8%E7%97%98%E7%97%982%E5%A4%A9%E5%90%8E%E6%9F%A5%E5%87%BA%E8%84%91%E8%84%93%E8%82%BF%23) `89.8K 🔥` `NEW`
1. [沧元图](https://s.weibo.com/weibo?q=%23%E6%B2%A7%E5%85%83%E5%9B%BE%23) `84.5K 🔥` `NEW`
1. [王励勤回应樊振东是否参加2026世乒赛](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%8A%B1%E5%8B%A4%E5%9B%9E%E5%BA%94%E6%A8%8A%E6%8C%AF%E4%B8%9C%E6%98%AF%E5%90%A6%E5%8F%82%E5%8A%A02026%E4%B8%96%E4%B9%92%E8%B5%9B%23) `80.6K 🔥` `NEW`
1. [周杰伦新专辑](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%9D%B0%E4%BC%A6%E6%96%B0%E4%B8%93%E8%BE%91%23) `76.1K 🔥` `NEW`
1. [小猫左手和右手没有商量好吗](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%8C%AB%E5%B7%A6%E6%89%8B%E5%92%8C%E5%8F%B3%E6%89%8B%E6%B2%A1%E6%9C%89%E5%95%86%E9%87%8F%E5%A5%BD%E5%90%97%23) `73.8K 🔥` `NEW`
1. [3月7日两会日程 (Agenda for the two sessions on March 7)](https://s.weibo.com/weibo?q=%233%E6%9C%887%E6%97%A5%E4%B8%A4%E4%BC%9A%E6%97%A5%E7%A8%8B%23) `192.6K 🔥` `+55%`
1. [预计今年GDP增量超6万亿元 (GDP growth this year is expected to exceed 6 trillion yuan)](https://s.weibo.com/weibo?q=%23%E9%A2%84%E8%AE%A1%E4%BB%8A%E5%B9%B4GDP%E5%A2%9E%E9%87%8F%E8%B6%856%E4%B8%87%E4%BA%BF%E5%85%83%23) `178.0K 🔥` `+43%`
1. [德黑兰发生巨大爆炸 (Huge explosion hits Tehran)](https://s.weibo.com/weibo?q=%23%E5%BE%B7%E9%BB%91%E5%85%B0%E5%8F%91%E7%94%9F%E5%B7%A8%E5%A4%A7%E7%88%86%E7%82%B8%23) `169.5K 🔥` `+154%`
1. [林俊杰给田曦薇迷成啥了](https://s.weibo.com/weibo?q=%23%E6%9E%97%E4%BF%8A%E6%9D%B0%E7%BB%99%E7%94%B0%E6%9B%A6%E8%96%87%E8%BF%B7%E6%88%90%E5%95%A5%E4%BA%86%23) `166.1K 🔥` `+35%`
1. [易烊千玺网站续费到2035年](https://s.weibo.com/weibo?q=%23%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%E7%BD%91%E7%AB%99%E7%BB%AD%E8%B4%B9%E5%88%B02035%E5%B9%B4%23) `157.6K 🔥` `+176%`
1. [大多数人都没你早上喝的那杯水重要](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%A4%9A%E6%95%B0%E4%BA%BA%E9%83%BD%E6%B2%A1%E4%BD%A0%E6%97%A9%E4%B8%8A%E5%96%9D%E7%9A%84%E9%82%A3%E6%9D%AF%E6%B0%B4%E9%87%8D%E8%A6%81%23) `153.8K 🔥` `+163%`
1. [我国育龄夫妇不孕不育率升至18%](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%9B%BD%E8%82%B2%E9%BE%84%E5%A4%AB%E5%A6%87%E4%B8%8D%E5%AD%95%E4%B8%8D%E8%82%B2%E7%8E%87%E5%8D%87%E8%87%B318%25%23) `153.3K 🔥` `+92%`
1. [逐玉爆开 (Zhuyu explodes)](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%E7%88%86%E5%BC%80%23) `150.1K 🔥` `+22%`
1. [女子热水泡脚3个月皮肤变色洗不掉](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E7%83%AD%E6%B0%B4%E6%B3%A1%E8%84%9A3%E4%B8%AA%E6%9C%88%E7%9A%AE%E8%82%A4%E5%8F%98%E8%89%B2%E6%B4%97%E4%B8%8D%E6%8E%89%23) `147.0K 🔥` `+88%`
1. [伊朗大使说250年怎能挑衅3000年历史](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%A4%A7%E4%BD%BF%E8%AF%B4250%E5%B9%B4%E6%80%8E%E8%83%BD%E6%8C%91%E8%A1%853000%E5%B9%B4%E5%8E%86%E5%8F%B2%23) `122.0K 🔥` `+54%`
1. [逐玉 截不到丑图](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%20%E6%88%AA%E4%B8%8D%E5%88%B0%E4%B8%91%E5%9B%BE%23) `110.8K 🔥` `+95%`
1. [患有抑郁症的德牧遇到了小金毛](https://s.weibo.com/weibo?q=%23%E6%82%A3%E6%9C%89%E6%8A%91%E9%83%81%E7%97%87%E7%9A%84%E5%BE%B7%E7%89%A7%E9%81%87%E5%88%B0%E4%BA%86%E5%B0%8F%E9%87%91%E6%AF%9B%23) `90.7K 🔥` `+35%`
1. [新疆地震 (Xinjiang earthquake)](https://s.weibo.com/weibo?q=%23%E6%96%B0%E7%96%86%E5%9C%B0%E9%9C%87%23) `76.7K 🔥` `+46%`
1. [十五五规划新指标新看点 (New indicators and new highlights of the 15th Five-Year Plan)](https://s.weibo.com/weibo?q=%23%E5%8D%81%E4%BA%94%E4%BA%94%E8%A7%84%E5%88%92%E6%96%B0%E6%8C%87%E6%A0%87%E6%96%B0%E7%9C%8B%E7%82%B9%23) `559.5K 🔥`
1. [王一博Giselle宋江陈都灵生图](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9AGiselle%E5%AE%8B%E6%B1%9F%E9%99%88%E9%83%BD%E7%81%B5%E7%94%9F%E5%9B%BE%23) `105.7K 🔥`
1. [多国明确表态不会参与对伊朗打击 (Many countries have made it clear that they will not participate in the attack on Iran)](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E5%9B%BD%E6%98%8E%E7%A1%AE%E8%A1%A8%E6%80%81%E4%B8%8D%E4%BC%9A%E5%8F%82%E4%B8%8E%E5%AF%B9%E4%BC%8A%E6%9C%97%E6%89%93%E5%87%BB%23) `88.2K 🔥`
1. [中国军队有力应对澳方挑衅滋扰 (The Chinese military effectively responds to Australian provocations and harassment)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%86%9B%E9%98%9F%E6%9C%89%E5%8A%9B%E5%BA%94%E5%AF%B9%E6%BE%B3%E6%96%B9%E6%8C%91%E8%A1%85%E6%BB%8B%E6%89%B0%23) `186.1K 🔥` `-59%`
1. [省委书记怒批有点小权就用到极致](https://s.weibo.com/weibo?q=%23%E7%9C%81%E5%A7%94%E4%B9%A6%E8%AE%B0%E6%80%92%E6%89%B9%E6%9C%89%E7%82%B9%E5%B0%8F%E6%9D%83%E5%B0%B1%E7%94%A8%E5%88%B0%E6%9E%81%E8%87%B4%23) `171.6K 🔥` `-84%`
1. [镖人 (escort)](https://s.weibo.com/weibo?q=%23%E9%95%96%E4%BA%BA%23) `168.7K 🔥` `-78%`
1. [伊朗导弹袭击以色列最大机场 (Iranian missile attacks Israel's largest airport)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%AF%BC%E5%BC%B9%E8%A2%AD%E5%87%BB%E4%BB%A5%E8%89%B2%E5%88%97%E6%9C%80%E5%A4%A7%E6%9C%BA%E5%9C%BA%23) `101.7K 🔥` `-47%`

Updated at 2026-03-07 10:40:37

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
