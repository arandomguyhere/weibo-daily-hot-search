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

1. [电影八仙 (Movie Eight Immortals)](https://s.weibo.com/weibo?q=%23%E7%94%B5%E5%BD%B1%E5%85%AB%E4%BB%99%23) `100.9K 🔥` `NEW`
1. [经常半夜醒要排查6种疾病](https://s.weibo.com/weibo?q=%23%E7%BB%8F%E5%B8%B8%E5%8D%8A%E5%A4%9C%E9%86%92%E8%A6%81%E6%8E%92%E6%9F%A56%E7%A7%8D%E7%96%BE%E7%97%85%23) `100.4K 🔥` `NEW`
1. [刘亦菲下沉市场路人缘](https://s.weibo.com/weibo?q=%23%E5%88%98%E4%BA%A6%E8%8F%B2%E4%B8%8B%E6%B2%89%E5%B8%82%E5%9C%BA%E8%B7%AF%E4%BA%BA%E7%BC%98%23) `99.6K 🔥` `NEW`
1. [黄子韬徐艺洋直播互扇巴掌](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%AD%90%E9%9F%AC%E5%BE%90%E8%89%BA%E6%B4%8B%E7%9B%B4%E6%92%AD%E4%BA%92%E6%89%87%E5%B7%B4%E6%8E%8C%23) `99.0K 🔥` `NEW`
1. [成毅雨中跪下和粉丝合影](https://s.weibo.com/weibo?q=%23%E6%88%90%E6%AF%85%E9%9B%A8%E4%B8%AD%E8%B7%AA%E4%B8%8B%E5%92%8C%E7%B2%89%E4%B8%9D%E5%90%88%E5%BD%B1%23) `98.3K 🔥` `NEW`
1. [男子承认出轨20万赠与第三者追不回](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E6%89%BF%E8%AE%A4%E5%87%BA%E8%BD%A820%E4%B8%87%E8%B5%A0%E4%B8%8E%E7%AC%AC%E4%B8%89%E8%80%85%E8%BF%BD%E4%B8%8D%E5%9B%9E%23) `97.7K 🔥` `NEW`
1. [成毅这个嗓音不开演唱会可惜了](https://s.weibo.com/weibo?q=%23%E6%88%90%E6%AF%85%E8%BF%99%E4%B8%AA%E5%97%93%E9%9F%B3%E4%B8%8D%E5%BC%80%E6%BC%94%E5%94%B1%E4%BC%9A%E5%8F%AF%E6%83%9C%E4%BA%86%23) `95.0K 🔥` `NEW`
1. [Lisa坦言十周年没准备](https://s.weibo.com/weibo?q=%23Lisa%E5%9D%A6%E8%A8%80%E5%8D%81%E5%91%A8%E5%B9%B4%E6%B2%A1%E5%87%86%E5%A4%87%23) `94.1K 🔥` `NEW`
1. [强台风白海豚来势汹汹](https://s.weibo.com/weibo?q=%23%E5%BC%BA%E5%8F%B0%E9%A3%8E%E7%99%BD%E6%B5%B7%E8%B1%9A%E6%9D%A5%E5%8A%BF%E6%B1%B9%E6%B1%B9%23) `93.6K 🔥` `NEW`
1. [女子用17年把丈夫和小三送进牢房](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E7%94%A817%E5%B9%B4%E6%8A%8A%E4%B8%88%E5%A4%AB%E5%92%8C%E5%B0%8F%E4%B8%89%E9%80%81%E8%BF%9B%E7%89%A2%E6%88%BF%23) `91.0K 🔥` `NEW`
1. [瑶一瑶爱咬嘴唇导致嘴唇后缩 (Yao Yiyao loves to bite her lips, causing her lips to recede)](https://s.weibo.com/weibo?q=%23%E7%91%B6%E4%B8%80%E7%91%B6%E7%88%B1%E5%92%AC%E5%98%B4%E5%94%87%E5%AF%BC%E8%87%B4%E5%98%B4%E5%94%87%E5%90%8E%E7%BC%A9%23) `89.9K 🔥` `NEW`
1. [89岁钟南山每周健身3次](https://s.weibo.com/weibo?q=%2389%E5%B2%81%E9%92%9F%E5%8D%97%E5%B1%B1%E6%AF%8F%E5%91%A8%E5%81%A5%E8%BA%AB3%E6%AC%A1%23) `88.5K 🔥` `NEW`
1. [百花奖](https://s.weibo.com/weibo?q=%23%E7%99%BE%E8%8A%B1%E5%A5%96%23) `88.1K 🔥` `NEW`
1. [虞书欣黑长直四连拍](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E9%BB%91%E9%95%BF%E7%9B%B4%E5%9B%9B%E8%BF%9E%E6%8B%8D%23) `85.2K 🔥` `NEW`
1. [王源找2016年陪他在小礼堂走到现在的人](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BA%90%E6%89%BE2016%E5%B9%B4%E9%99%AA%E4%BB%96%E5%9C%A8%E5%B0%8F%E7%A4%BC%E5%A0%82%E8%B5%B0%E5%88%B0%E7%8E%B0%E5%9C%A8%E7%9A%84%E4%BA%BA%23) `84.1K 🔥` `NEW`
1. [KPL](https://s.weibo.com/weibo?q=%23KPL%23) `83.9K 🔥` `NEW`
1. [温岭全力搜救被卷走9岁男孩](https://s.weibo.com/weibo?q=%23%E6%B8%A9%E5%B2%AD%E5%85%A8%E5%8A%9B%E6%90%9C%E6%95%91%E8%A2%AB%E5%8D%B7%E8%B5%B09%E5%B2%81%E7%94%B7%E5%AD%A9%23) `984.0K 🔥` `+1217%`
1. [金价猛涨踏空的人哭麻了 (The price of gold soared, and those who were short-changed cried numbly.)](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E7%8C%9B%E6%B6%A8%E8%B8%8F%E7%A9%BA%E7%9A%84%E4%BA%BA%E5%93%AD%E9%BA%BB%E4%BA%86%23) `703.3K 🔥` `+36%`
1. [本周这些数据最值得关注 (These data are most noteworthy this week)](https://s.weibo.com/weibo?q=%23%E6%9C%AC%E5%91%A8%E8%BF%99%E4%BA%9B%E6%95%B0%E6%8D%AE%E6%9C%80%E5%80%BC%E5%BE%97%E5%85%B3%E6%B3%A8%23) `559.4K 🔥` `+40%`
1. [张凌赫座驾阿维塔07L上市 (Zhang Linghe's Avita 07L is launched)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%BA%A7%E9%A9%BE%E9%98%BF%E7%BB%B4%E5%A1%9407L%E4%B8%8A%E5%B8%82%23) `497.6K 🔥` `+850%`
1. [长期穿碳板鞋的受害者出现了 (Victims of wearing carbon shoes for a long time appear)](https://s.weibo.com/weibo?q=%23%E9%95%BF%E6%9C%9F%E7%A9%BF%E7%A2%B3%E6%9D%BF%E9%9E%8B%E7%9A%84%E5%8F%97%E5%AE%B3%E8%80%85%E5%87%BA%E7%8E%B0%E4%BA%86%23) `236.8K 🔥` `+66%`
1. [这种手机壳可能是医疗垃圾做的](https://s.weibo.com/weibo?q=%23%E8%BF%99%E7%A7%8D%E6%89%8B%E6%9C%BA%E5%A3%B3%E5%8F%AF%E8%83%BD%E6%98%AF%E5%8C%BB%E7%96%97%E5%9E%83%E5%9C%BE%E5%81%9A%E7%9A%84%23) `205.6K 🔥` `+176%`
1. [好像给麻辣烫店的脸太多了 (It seems that the Malatang shop has given too much face)](https://s.weibo.com/weibo?q=%23%E5%A5%BD%E5%83%8F%E7%BB%99%E9%BA%BB%E8%BE%A3%E7%83%AB%E5%BA%97%E7%9A%84%E8%84%B8%E5%A4%AA%E5%A4%9A%E4%BA%86%23) `133.4K 🔥` `+34%`
1. [微博文化之夜之这是谁 (Weibo Culture Night: Who is this?)](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E5%8D%9A%E6%96%87%E5%8C%96%E4%B9%8B%E5%A4%9C%E4%B9%8B%E8%BF%99%E6%98%AF%E8%B0%81%23) `100.9K 🔥` `+31%`
1. [沈腾感谢惠英红](https://s.weibo.com/weibo?q=%23%E6%B2%88%E8%85%BE%E6%84%9F%E8%B0%A2%E6%83%A0%E8%8B%B1%E7%BA%A2%23) `97.3K 🔥` `+62%`
1. [AI帮你开发以前要花钱的功能 (AI helps you develop features that previously cost money)](https://s.weibo.com/weibo?q=%23AI%E5%B8%AE%E4%BD%A0%E5%BC%80%E5%8F%91%E4%BB%A5%E5%89%8D%E8%A6%81%E8%8A%B1%E9%92%B1%E7%9A%84%E5%8A%9F%E8%83%BD%23) `96.7K 🔥` `+58%`
1. [FMVP句号](https://s.weibo.com/weibo?q=%23FMVP%E5%8F%A5%E5%8F%B7%23) `96.6K 🔥` `+37%`
1. [粉丝说西村力今天演唱会状态特别好 (Fans said that Riki Nishimura was in particularly good condition during today’s concert)](https://s.weibo.com/weibo?q=%23%E7%B2%89%E4%B8%9D%E8%AF%B4%E8%A5%BF%E6%9D%91%E5%8A%9B%E4%BB%8A%E5%A4%A9%E6%BC%94%E5%94%B1%E4%BC%9A%E7%8A%B6%E6%80%81%E7%89%B9%E5%88%AB%E5%A5%BD%23) `96.0K 🔥` `+57%`
1. [小夜灯 性早熟 (night light precocious puberty)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%A4%9C%E7%81%AF%20%E6%80%A7%E6%97%A9%E7%86%9F%23) `95.5K 🔥` `+57%`
1. [殡仪馆回应情侣平潭拍日出坠崖 (Funeral home responds to couple falling off cliff while filming sunrise in Pingtan)](https://s.weibo.com/weibo?q=%23%E6%AE%A1%E4%BB%AA%E9%A6%86%E5%9B%9E%E5%BA%94%E6%83%85%E4%BE%A3%E5%B9%B3%E6%BD%AD%E6%8B%8D%E6%97%A5%E5%87%BA%E5%9D%A0%E5%B4%96%23) `94.6K 🔥` `+42%`
1. [情侣平潭翻墙拍日出坠崖 (Couple climbs over wall in Pingtan to take photos of sunrise and falls off cliff)](https://s.weibo.com/weibo?q=%23%E6%83%85%E4%BE%A3%E5%B9%B3%E6%BD%AD%E7%BF%BB%E5%A2%99%E6%8B%8D%E6%97%A5%E5%87%BA%E5%9D%A0%E5%B4%96%23) `94.2K 🔥` `+37%`
1. [奥德赛](https://s.weibo.com/weibo?q=%23%E5%A5%A5%E5%BE%B7%E8%B5%9B%23) `92.8K 🔥` `+50%`
1. [印度男子奸杀女孩离开警局缠满绷带 (Indian man rapes and kills girl and leaves police station covered with bandages)](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%BA%A6%E7%94%B7%E5%AD%90%E5%A5%B8%E6%9D%80%E5%A5%B3%E5%AD%A9%E7%A6%BB%E5%BC%80%E8%AD%A6%E5%B1%80%E7%BC%A0%E6%BB%A1%E7%BB%B7%E5%B8%A6%23) `92.0K 🔥` `+71%`
1. [柬埔寨一园区围殴中国人致1死3伤 (A Chinese man was beaten up in a park in Cambodia, killing one and injuring three others.)](https://s.weibo.com/weibo?q=%23%E6%9F%AC%E5%9F%94%E5%AF%A8%E4%B8%80%E5%9B%AD%E5%8C%BA%E5%9B%B4%E6%AE%B4%E4%B8%AD%E5%9B%BD%E4%BA%BA%E8%87%B41%E6%AD%BB3%E4%BC%A4%23) `91.7K 🔥` `+59%`
1. [国乒围剿张本美和 (National table tennis encircles and suppresses Zhang Benmeihe)](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%E5%9B%B4%E5%89%BF%E5%BC%A0%E6%9C%AC%E7%BE%8E%E5%92%8C%23) `91.5K 🔥` `+23%`
1. [童锦程孩子妈自曝怀孕后鼻子变大](https://s.weibo.com/weibo?q=%23%E7%AB%A5%E9%94%A6%E7%A8%8B%E5%AD%A9%E5%AD%90%E5%A6%88%E8%87%AA%E6%9B%9D%E6%80%80%E5%AD%95%E5%90%8E%E9%BC%BB%E5%AD%90%E5%8F%98%E5%A4%A7%23) `90.6K 🔥` `+54%`
1. [男主持出轨生子前妻诉返20万被驳 (Male host cheated on his ex-wife and gave birth to a child, but his lawsuit to pay back NT$200,000 was dismissed)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E4%B8%BB%E6%8C%81%E5%87%BA%E8%BD%A8%E7%94%9F%E5%AD%90%E5%89%8D%E5%A6%BB%E8%AF%89%E8%BF%9420%E4%B8%87%E8%A2%AB%E9%A9%B3%23) `89.6K 🔥` `+56%`
1. [常吃4种食物不易得胃癌 (Eating 4 kinds of foods regularly is less likely to cause gastric cancer)](https://s.weibo.com/weibo?q=%23%E5%B8%B8%E5%90%834%E7%A7%8D%E9%A3%9F%E7%89%A9%E4%B8%8D%E6%98%93%E5%BE%97%E8%83%83%E7%99%8C%23) `89.0K 🔥` `+47%`
1. [卫生巾应该分坐用跟躺用 (Sanitary napkins should be used separately for sitting and lying down)](https://s.weibo.com/weibo?q=%23%E5%8D%AB%E7%94%9F%E5%B7%BE%E5%BA%94%E8%AF%A5%E5%88%86%E5%9D%90%E7%94%A8%E8%B7%9F%E8%BA%BA%E7%94%A8%23) `88.7K 🔥` `+38%`
1. [白海豚开始发力了 (The white dolphin is starting to exert its strength)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%B5%B7%E8%B1%9A%E5%BC%80%E5%A7%8B%E5%8F%91%E5%8A%9B%E4%BA%86%23) `87.6K 🔥` `+42%`
1. [成绩好就随便吃14岁男孩吃出糖尿病 (A 14-year-old boy develops diabetes by eating whatever he wants if he has good grades)](https://s.weibo.com/weibo?q=%23%E6%88%90%E7%BB%A9%E5%A5%BD%E5%B0%B1%E9%9A%8F%E4%BE%BF%E5%90%8314%E5%B2%81%E7%94%B7%E5%AD%A9%E5%90%83%E5%87%BA%E7%B3%96%E5%B0%BF%E7%97%85%23) `87.2K 🔥` `+59%`
1. [钟意状态](https://s.weibo.com/weibo?q=%23%E9%92%9F%E6%84%8F%E7%8A%B6%E6%80%81%23) `86.6K 🔥` `+45%`
1. [俄两女子错过航班闯停机坪拦飞机 (Two Russian women missed their flight and blocked it on the tarmac)](https://s.weibo.com/weibo?q=%23%E4%BF%84%E4%B8%A4%E5%A5%B3%E5%AD%90%E9%94%99%E8%BF%87%E8%88%AA%E7%8F%AD%E9%97%AF%E5%81%9C%E6%9C%BA%E5%9D%AA%E6%8B%A6%E9%A3%9E%E6%9C%BA%23) `85.6K 🔥` `+52%`
1. [很瘦但是个胖子 (Very thin but fat)](https://s.weibo.com/weibo?q=%23%E5%BE%88%E7%98%A6%E4%BD%86%E6%98%AF%E4%B8%AA%E8%83%96%E5%AD%90%23) `85.0K 🔥` `+42%`
1. [陈小春金志文看宋亚轩唱歌的眼神](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%B0%8F%E6%98%A5%E9%87%91%E5%BF%97%E6%96%87%E7%9C%8B%E5%AE%8B%E4%BA%9A%E8%BD%A9%E5%94%B1%E6%AD%8C%E7%9A%84%E7%9C%BC%E7%A5%9E%23) `84.7K 🔥` `+49%`
1. [只有小时候发烧才有这种感觉 (I only felt like this when I had a fever when I was a child)](https://s.weibo.com/weibo?q=%23%E5%8F%AA%E6%9C%89%E5%B0%8F%E6%97%B6%E5%80%99%E5%8F%91%E7%83%A7%E6%89%8D%E6%9C%89%E8%BF%99%E7%A7%8D%E6%84%9F%E8%A7%89%23) `221.9K 🔥`
1. [KSG夺得KWC冠军](https://s.weibo.com/weibo?q=%23KSG%E5%A4%BA%E5%BE%97KWC%E5%86%A0%E5%86%9B%23) `98.6K 🔥`
1. [台风白海豚 (Typhoon White Dolphin)](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E7%99%BD%E6%B5%B7%E8%B1%9A%23) `433.1K 🔥` `-38%`
1. [发现父母开始看自己脸色了 (I found that my parents started to look at me)](https://s.weibo.com/weibo?q=%23%E5%8F%91%E7%8E%B0%E7%88%B6%E6%AF%8D%E5%BC%80%E5%A7%8B%E7%9C%8B%E8%87%AA%E5%B7%B1%E8%84%B8%E8%89%B2%E4%BA%86%23) `99.7K 🔥` `-29%`
1. [敖瑞鹏王玉雯正太扭腰来了 (Mrs. Ao Ruipeng and Wang Yuwen are here.)](https://s.weibo.com/weibo?q=%23%E6%95%96%E7%91%9E%E9%B9%8F%E7%8E%8B%E7%8E%89%E9%9B%AF%E6%AD%A3%E5%A4%AA%E6%89%AD%E8%85%B0%E6%9D%A5%E4%BA%86%23) `92.9K 🔥` `-69%`
1. [三亚海边女明星们 (Sanya beach female stars)](https://s.weibo.com/weibo?q=%23%E4%B8%89%E4%BA%9A%E6%B5%B7%E8%BE%B9%E5%A5%B3%E6%98%8E%E6%98%9F%E4%BB%AC%23) `86.1K 🔥` `-62%`

Updated at 2026-08-09 07:47:09

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
