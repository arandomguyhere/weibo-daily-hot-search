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

1. [重庆今年打掉境内外电诈团伙198个 (Chongqing has eliminated 198 domestic and overseas electronic fraud gangs this year)](https://s.weibo.com/weibo?q=%23%E9%87%8D%E5%BA%86%E4%BB%8A%E5%B9%B4%E6%89%93%E6%8E%89%E5%A2%83%E5%86%85%E5%A4%96%E7%94%B5%E8%AF%88%E5%9B%A2%E4%BC%99198%E4%B8%AA%23) `1.0M 🔥` `NEW`
1. [徐若晗爱你再次迎来了伟大的宣发期](https://s.weibo.com/weibo?q=%23%E5%BE%90%E8%8B%A5%E6%99%97%E7%88%B1%E4%BD%A0%E5%86%8D%E6%AC%A1%E8%BF%8E%E6%9D%A5%E4%BA%86%E4%BC%9F%E5%A4%A7%E7%9A%84%E5%AE%A3%E5%8F%91%E6%9C%9F%23) `1.0M 🔥` `NEW`
1. [年会不能停2](https://s.weibo.com/weibo?q=%23%E5%B9%B4%E4%BC%9A%E4%B8%8D%E8%83%BD%E5%81%9C2%23) `489.8K 🔥` `NEW`
1. [贝林厄姆踢阿根廷后对裁判讲话曝光](https://s.weibo.com/weibo?q=%23%E8%B4%9D%E6%9E%97%E5%8E%84%E5%A7%86%E8%B8%A2%E9%98%BF%E6%A0%B9%E5%BB%B7%E5%90%8E%E5%AF%B9%E8%A3%81%E5%88%A4%E8%AE%B2%E8%AF%9D%E6%9B%9D%E5%85%89%23) `336.1K 🔥` `NEW`
1. [印度和日本因高铁闹翻了](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%BA%A6%E5%92%8C%E6%97%A5%E6%9C%AC%E5%9B%A0%E9%AB%98%E9%93%81%E9%97%B9%E7%BF%BB%E4%BA%86%23) `303.2K 🔥` `NEW`
1. [宇树回应王兴兴登时代杂志封面](https://s.weibo.com/weibo?q=%23%E5%AE%87%E6%A0%91%E5%9B%9E%E5%BA%94%E7%8E%8B%E5%85%B4%E5%85%B4%E7%99%BB%E6%97%B6%E4%BB%A3%E6%9D%82%E5%BF%97%E5%B0%81%E9%9D%A2%23) `303.0K 🔥` `NEW`
1. [种地吧](https://s.weibo.com/weibo?q=%23%E7%A7%8D%E5%9C%B0%E5%90%A7%23) `296.1K 🔥` `NEW`
1. [Angelababy等比例长大](https://s.weibo.com/weibo?q=%23Angelababy%E7%AD%89%E6%AF%94%E4%BE%8B%E9%95%BF%E5%A4%A7%23) `292.8K 🔥` `NEW`
1. [女子挨个称麻辣烫丸子价格](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%8C%A8%E4%B8%AA%E7%A7%B0%E9%BA%BB%E8%BE%A3%E7%83%AB%E4%B8%B8%E5%AD%90%E4%BB%B7%E6%A0%BC%23) `292.1K 🔥` `NEW`
1. [王源雪崩口碑](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BA%90%E9%9B%AA%E5%B4%A9%E5%8F%A3%E7%A2%91%23) `290.9K 🔥` `NEW`
1. [武亮谈644分考生误报马来分校 (Wu Liang talks about the candidate who scored 644 points and mistakenly reported to the Malay Branch)](https://s.weibo.com/weibo?q=%23%E6%AD%A6%E4%BA%AE%E8%B0%88644%E5%88%86%E8%80%83%E7%94%9F%E8%AF%AF%E6%8A%A5%E9%A9%AC%E6%9D%A5%E5%88%86%E6%A0%A1%23) `289.5K 🔥` `NEW`
1. [詹姆斯回应加盟76人](https://s.weibo.com/weibo?q=%23%E8%A9%B9%E5%A7%86%E6%96%AF%E5%9B%9E%E5%BA%94%E5%8A%A0%E7%9B%9F76%E4%BA%BA%23) `285.0K 🔥` `NEW`
1. [曝刺棠导演知竹曾庆杰二选一](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%88%BA%E6%A3%A0%E5%AF%BC%E6%BC%94%E7%9F%A5%E7%AB%B9%E6%9B%BE%E5%BA%86%E6%9D%B0%E4%BA%8C%E9%80%89%E4%B8%80%23) `279.1K 🔥` `NEW`
1. [SpaceX星舰第13次试飞](https://s.weibo.com/weibo?q=%23SpaceX%E6%98%9F%E8%88%B0%E7%AC%AC13%E6%AC%A1%E8%AF%95%E9%A3%9E%23) `273.2K 🔥` `NEW`
1. [天津一麻辣烫老板揭秘称重真相](https://s.weibo.com/weibo?q=%23%E5%A4%A9%E6%B4%A5%E4%B8%80%E9%BA%BB%E8%BE%A3%E7%83%AB%E8%80%81%E6%9D%BF%E6%8F%AD%E7%A7%98%E7%A7%B0%E9%87%8D%E7%9C%9F%E7%9B%B8%23) `270.7K 🔥` `NEW`
1. [胡歌唐嫣等给陈龙送祝福](https://s.weibo.com/weibo?q=%23%E8%83%A1%E6%AD%8C%E5%94%90%E5%AB%A3%E7%AD%89%E7%BB%99%E9%99%88%E9%BE%99%E9%80%81%E7%A5%9D%E7%A6%8F%23) `269.1K 🔥` `NEW`
1. [陈少熙 媚眼抛给瞎子看](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%B0%91%E7%86%99%20%E5%AA%9A%E7%9C%BC%E6%8A%9B%E7%BB%99%E7%9E%8E%E5%AD%90%E7%9C%8B%23) `267.8K 🔥` `NEW`
1. [副教授被举报18年前高考移民](https://s.weibo.com/weibo?q=%23%E5%89%AF%E6%95%99%E6%8E%88%E8%A2%AB%E4%B8%BE%E6%8A%A518%E5%B9%B4%E5%89%8D%E9%AB%98%E8%80%83%E7%A7%BB%E6%B0%91%23) `261.9K 🔥` `NEW`
1. [双高胎直播道歉被指避重就轻](https://s.weibo.com/weibo?q=%23%E5%8F%8C%E9%AB%98%E8%83%8E%E7%9B%B4%E6%92%AD%E9%81%93%E6%AD%89%E8%A2%AB%E6%8C%87%E9%81%BF%E9%87%8D%E5%B0%B1%E8%BD%BB%23) `260.1K 🔥` `NEW`
1. [委内瑞拉正式通报联合国](https://s.weibo.com/weibo?q=%23%E5%A7%94%E5%86%85%E7%91%9E%E6%8B%89%E6%AD%A3%E5%BC%8F%E9%80%9A%E6%8A%A5%E8%81%94%E5%90%88%E5%9B%BD%23) `259.7K 🔥` `NEW`
1. [女装退货率高达80%已成常态 (The return rate of women's clothing is as high as 80%, which has become the norm)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E8%A3%85%E9%80%80%E8%B4%A7%E7%8E%87%E9%AB%98%E8%BE%BE80%25%E5%B7%B2%E6%88%90%E5%B8%B8%E6%80%81%23) `257.0K 🔥` `NEW`
1. [男生中考699分偷偷改志愿读中职](https://s.weibo.com/weibo?q=%23%E7%94%B7%E7%94%9F%E4%B8%AD%E8%80%83699%E5%88%86%E5%81%B7%E5%81%B7%E6%94%B9%E5%BF%97%E6%84%BF%E8%AF%BB%E4%B8%AD%E8%81%8C%23) `1.5M 🔥` `+508%`
1. [王虹回应为何没直接读北大数学系](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%99%B9%E5%9B%9E%E5%BA%94%E4%B8%BA%E4%BD%95%E6%B2%A1%E7%9B%B4%E6%8E%A5%E8%AF%BB%E5%8C%97%E5%A4%A7%E6%95%B0%E5%AD%A6%E7%B3%BB%23) `1.1M 🔥` `+102%`
1. [心有凌犀选铂智7 (If you have a strong heart, choose Platinum Wisdom 7)](https://s.weibo.com/weibo?q=%23%E5%BF%83%E6%9C%89%E5%87%8C%E7%8A%80%E9%80%89%E9%93%82%E6%99%BA7%23) `1.0M 🔥` `+75%`
1. [台风红霞最新路径公布](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E7%BA%A2%E9%9C%9E%E6%9C%80%E6%96%B0%E8%B7%AF%E5%BE%84%E5%85%AC%E5%B8%83%23) `362.7K 🔥` `+373%`
1. [全宇宙最阴的物件 (The most sinister object in the universe)](https://s.weibo.com/weibo?q=%23%E5%85%A8%E5%AE%87%E5%AE%99%E6%9C%80%E9%98%B4%E7%9A%84%E7%89%A9%E4%BB%B6%23) `356.8K 🔥` `+37%`
1. [李昊 十个勤天从来不止四个字](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%98%8A%20%E5%8D%81%E4%B8%AA%E5%8B%A4%E5%A4%A9%E4%BB%8E%E6%9D%A5%E4%B8%8D%E6%AD%A2%E5%9B%9B%E4%B8%AA%E5%AD%97%23) `350.2K 🔥` `+52%`
1. [出师表翻译成日语再翻回来 (Translate the apprenticeship list into Japanese and back again)](https://s.weibo.com/weibo?q=%23%E5%87%BA%E5%B8%88%E8%A1%A8%E7%BF%BB%E8%AF%91%E6%88%90%E6%97%A5%E8%AF%AD%E5%86%8D%E7%BF%BB%E5%9B%9E%E6%9D%A5%23) `348.6K 🔥` `+58%`
1. [王楚然绊了一下反而出了神图](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E7%84%B6%E7%BB%8A%E4%BA%86%E4%B8%80%E4%B8%8B%E5%8F%8D%E8%80%8C%E5%87%BA%E4%BA%86%E7%A5%9E%E5%9B%BE%23) `337.8K 🔥` `+34%`
1. [鹭卓直播](https://s.weibo.com/weibo?q=%23%E9%B9%AD%E5%8D%93%E7%9B%B4%E6%92%AD%23) `301.0K 🔥` `+45%`
1. [每周2天少吃坚持一月瘦5斤 (Eat less 2 days a week and lose 5 pounds in a month)](https://s.weibo.com/weibo?q=%23%E6%AF%8F%E5%91%A82%E5%A4%A9%E5%B0%91%E5%90%83%E5%9D%9A%E6%8C%81%E4%B8%80%E6%9C%88%E7%98%A65%E6%96%A4%23) `299.9K 🔥` `+125%`
1. [父亲为初恋想离婚要分女儿630万房款](https://s.weibo.com/weibo?q=%23%E7%88%B6%E4%BA%B2%E4%B8%BA%E5%88%9D%E6%81%8B%E6%83%B3%E7%A6%BB%E5%A9%9A%E8%A6%81%E5%88%86%E5%A5%B3%E5%84%BF630%E4%B8%87%E6%88%BF%E6%AC%BE%23) `297.4K 🔥` `+123%`
1. [微信撤回消息后可删除提示字](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E4%BF%A1%E6%92%A4%E5%9B%9E%E6%B6%88%E6%81%AF%E5%90%8E%E5%8F%AF%E5%88%A0%E9%99%A4%E6%8F%90%E7%A4%BA%E5%AD%97%23) `295.4K 🔥` `+31%`
1. [特斯拉跌麻了](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%96%AF%E6%8B%89%E8%B7%8C%E9%BA%BB%E4%BA%86%23) `286.8K 🔥` `+113%`
1. [男子在家裸体被女邻居发群是谁错了 (Who was wrong when a man was naked at home and was posted in a group chat by his female neighbor?)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%9C%A8%E5%AE%B6%E8%A3%B8%E4%BD%93%E8%A2%AB%E5%A5%B3%E9%82%BB%E5%B1%85%E5%8F%91%E7%BE%A4%E6%98%AF%E8%B0%81%E9%94%99%E4%BA%86%23) `286.5K 🔥` `+168%`
1. [迪丽热巴腰间饰品 (Dilireba waist accessories)](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E8%85%B0%E9%97%B4%E9%A5%B0%E5%93%81%23) `280.3K 🔥` `+136%`
1. [詹姆斯年薪在76人排第7](https://s.weibo.com/weibo?q=%23%E8%A9%B9%E5%A7%86%E6%96%AF%E5%B9%B4%E8%96%AA%E5%9C%A876%E4%BA%BA%E6%8E%92%E7%AC%AC7%23) `277.2K 🔥` `+119%`
1. [白鹿真发长度 (White deer real hair length)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E7%9C%9F%E5%8F%91%E9%95%BF%E5%BA%A6%23) `276.1K 🔥` `+159%`
1. [峰学蔚来武亮住院](https://s.weibo.com/weibo?q=%23%E5%B3%B0%E5%AD%A6%E8%94%9A%E6%9D%A5%E6%AD%A6%E4%BA%AE%E4%BD%8F%E9%99%A2%23) `273.4K 🔥` `+298%`
1. [一招区分动物奶油和植物奶油](https://s.weibo.com/weibo?q=%23%E4%B8%80%E6%8B%9B%E5%8C%BA%E5%88%86%E5%8A%A8%E7%89%A9%E5%A5%B6%E6%B2%B9%E5%92%8C%E6%A4%8D%E7%89%A9%E5%A5%B6%E6%B2%B9%23) `266.1K 🔥` `+108%`
1. [鹿晗贵阳gapday音乐节彩排](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%E8%B4%B5%E9%98%B3gapday%E9%9F%B3%E4%B9%90%E8%8A%82%E5%BD%A9%E6%8E%92%23) `265.0K 🔥` `+265%`
1. [年会不能停2口碑](https://s.weibo.com/weibo?q=%23%E5%B9%B4%E4%BC%9A%E4%B8%8D%E8%83%BD%E5%81%9C2%E5%8F%A3%E7%A2%91%23) `263.5K 🔥` `+434%`
1. [把豆包逼出来幸福者退让了 (The happy ones gave in after forcing the bean bag out.)](https://s.weibo.com/weibo?q=%23%E6%8A%8A%E8%B1%86%E5%8C%85%E9%80%BC%E5%87%BA%E6%9D%A5%E5%B9%B8%E7%A6%8F%E8%80%85%E9%80%80%E8%AE%A9%E4%BA%86%23) `256.3K 🔥` `+242%`
1. [詹姆斯加盟76人 (James joins 76ers)](https://s.weibo.com/weibo?q=%23%E8%A9%B9%E5%A7%86%E6%96%AF%E5%8A%A0%E7%9B%9F76%E4%BA%BA%23) `847.9K 🔥`
1. [林依轮复刻白鹿周生如故红衣造型](https://s.weibo.com/weibo?q=%23%E6%9E%97%E4%BE%9D%E8%BD%AE%E5%A4%8D%E5%88%BB%E7%99%BD%E9%B9%BF%E5%91%A8%E7%94%9F%E5%A6%82%E6%95%85%E7%BA%A2%E8%A1%A3%E9%80%A0%E5%9E%8B%23) `518.8K 🔥`
1. [台风](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%23) `423.5K 🔥`
1. [歌手排名](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B%E6%8E%92%E5%90%8D%23) `329.9K 🔥`
1. [詹姆斯发长文](https://s.weibo.com/weibo?q=%23%E8%A9%B9%E5%A7%86%E6%96%AF%E5%8F%91%E9%95%BF%E6%96%87%23) `304.5K 🔥`
1. [感觉宋威龙好会谈恋爱 (I feel like Song Weilong is good at dating)](https://s.weibo.com/weibo?q=%23%E6%84%9F%E8%A7%89%E5%AE%8B%E5%A8%81%E9%BE%99%E5%A5%BD%E4%BC%9A%E8%B0%88%E6%81%8B%E7%88%B1%23) `283.3K 🔥`
1. [方星海涉嫌严重违纪违法 (Fang Xinghai is suspected of serious violations of discipline and law)](https://s.weibo.com/weibo?q=%23%E6%96%B9%E6%98%9F%E6%B5%B7%E6%B6%89%E5%AB%8C%E4%B8%A5%E9%87%8D%E8%BF%9D%E7%BA%AA%E8%BF%9D%E6%B3%95%23) `281.8K 🔥`
1. [个人贷款新规8月1日起正式实施 (New regulations on personal loans will be officially implemented on August 1)](https://s.weibo.com/weibo?q=%23%E4%B8%AA%E4%BA%BA%E8%B4%B7%E6%AC%BE%E6%96%B0%E8%A7%848%E6%9C%881%E6%97%A5%E8%B5%B7%E6%AD%A3%E5%BC%8F%E5%AE%9E%E6%96%BD%23) `666.1K 🔥` `-42%`

Updated at 2026-07-25 09:15:03

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
