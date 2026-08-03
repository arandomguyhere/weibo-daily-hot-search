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

1. [地表最强男人因雪崩遇难 (The strongest man on earth died in an avalanche)](https://s.weibo.com/weibo?q=%23%E5%9C%B0%E8%A1%A8%E6%9C%80%E5%BC%BA%E7%94%B7%E4%BA%BA%E5%9B%A0%E9%9B%AA%E5%B4%A9%E9%81%87%E9%9A%BE%23) `426.7K 🔥` `NEW`
1. [孙颖莎很遗憾我不能来到现场](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E5%BE%88%E9%81%97%E6%86%BE%E6%88%91%E4%B8%8D%E8%83%BD%E6%9D%A5%E5%88%B0%E7%8E%B0%E5%9C%BA%23) `185.9K 🔥` `NEW`
1. [新网球王子完结](https://s.weibo.com/weibo?q=%23%E6%96%B0%E7%BD%91%E7%90%83%E7%8E%8B%E5%AD%90%E5%AE%8C%E7%BB%93%23) `185.8K 🔥` `NEW`
1. [钟美美自曝38岁母亲求职一年未果](https://s.weibo.com/weibo?q=%23%E9%92%9F%E7%BE%8E%E7%BE%8E%E8%87%AA%E6%9B%9D38%E5%B2%81%E6%AF%8D%E4%BA%B2%E6%B1%82%E8%81%8C%E4%B8%80%E5%B9%B4%E6%9C%AA%E6%9E%9C%23) `185.4K 🔥` `NEW`
1. [俞敏洪送出的对手名单再添一员](https://s.weibo.com/weibo?q=%23%E4%BF%9E%E6%95%8F%E6%B4%AA%E9%80%81%E5%87%BA%E7%9A%84%E5%AF%B9%E6%89%8B%E5%90%8D%E5%8D%95%E5%86%8D%E6%B7%BB%E4%B8%80%E5%91%98%23) `185.2K 🔥` `NEW`
1. [罗正经纪人说这几天睁眼感觉天塌了](https://s.weibo.com/weibo?q=%23%E7%BD%97%E6%AD%A3%E7%BB%8F%E7%BA%AA%E4%BA%BA%E8%AF%B4%E8%BF%99%E5%87%A0%E5%A4%A9%E7%9D%81%E7%9C%BC%E6%84%9F%E8%A7%89%E5%A4%A9%E5%A1%8C%E4%BA%86%23) `185.1K 🔥` `NEW`
1. [马嘉祺丁程鑫严浩翔身体现状](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%98%89%E7%A5%BA%E4%B8%81%E7%A8%8B%E9%91%AB%E4%B8%A5%E6%B5%A9%E7%BF%94%E8%BA%AB%E4%BD%93%E7%8E%B0%E7%8A%B6%23) `184.9K 🔥` `NEW`
1. [19岁钟美美给母亲买奔驰](https://s.weibo.com/weibo?q=%2319%E5%B2%81%E9%92%9F%E7%BE%8E%E7%BE%8E%E7%BB%99%E6%AF%8D%E4%BA%B2%E4%B9%B0%E5%A5%94%E9%A9%B0%23) `184.7K 🔥` `NEW`
1. [建议不要和已产生隔阂的人示好](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E4%B8%8D%E8%A6%81%E5%92%8C%E5%B7%B2%E4%BA%A7%E7%94%9F%E9%9A%94%E9%98%82%E7%9A%84%E4%BA%BA%E7%A4%BA%E5%A5%BD%23) `184.5K 🔥` `NEW`
1. [2026国庆放假通知](https://s.weibo.com/weibo?q=%232026%E5%9B%BD%E5%BA%86%E6%94%BE%E5%81%87%E9%80%9A%E7%9F%A5%23) `184.5K 🔥` `NEW`
1. [贺峻霖大疆里的绿海 (He Junlin’s Green Sea in DJI)](https://s.weibo.com/weibo?q=%23%E8%B4%BA%E5%B3%BB%E9%9C%96%E5%A4%A7%E7%96%86%E9%87%8C%E7%9A%84%E7%BB%BF%E6%B5%B7%23) `170.0K 🔥` `NEW`
1. [阿根廷国脚联赛爆射闷人](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E5%9B%BD%E8%84%9A%E8%81%94%E8%B5%9B%E7%88%86%E5%B0%84%E9%97%B7%E4%BA%BA%23) `157.0K 🔥` `NEW`
1. [高市早苗装不下去了](https://s.weibo.com/weibo?q=%23%E9%AB%98%E5%B8%82%E6%97%A9%E8%8B%97%E8%A3%85%E4%B8%8D%E4%B8%8B%E5%8E%BB%E4%BA%86%23) `132.5K 🔥` `NEW`
1. [刘耀文身上没有展示位了](https://s.weibo.com/weibo?q=%23%E5%88%98%E8%80%80%E6%96%87%E8%BA%AB%E4%B8%8A%E6%B2%A1%E6%9C%89%E5%B1%95%E7%A4%BA%E4%BD%8D%E4%BA%86%23) `130.9K 🔥` `NEW`
1. [幼儿园里来了个大学生](https://s.weibo.com/weibo?q=%23%E5%B9%BC%E5%84%BF%E5%9B%AD%E9%87%8C%E6%9D%A5%E4%BA%86%E4%B8%AA%E5%A4%A7%E5%AD%A6%E7%94%9F%23) `125.7K 🔥` `NEW`
1. [伊埃拉华盛顿赛夺冠](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E5%9F%83%E6%8B%89%E5%8D%8E%E7%9B%9B%E9%A1%BF%E8%B5%9B%E5%A4%BA%E5%86%A0%23) `115.8K 🔥` `NEW`
1. [美联储9月加息预期降温](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E8%81%94%E5%82%A89%E6%9C%88%E5%8A%A0%E6%81%AF%E9%A2%84%E6%9C%9F%E9%99%8D%E6%B8%A9%23) `111.5K 🔥` `NEW`
1. [赛力斯7月新能源车产销量同比下滑](https://s.weibo.com/weibo?q=%23%E8%B5%9B%E5%8A%9B%E6%96%AF7%E6%9C%88%E6%96%B0%E8%83%BD%E6%BA%90%E8%BD%A6%E4%BA%A7%E9%94%80%E9%87%8F%E5%90%8C%E6%AF%94%E4%B8%8B%E6%BB%91%23) `109.4K 🔥` `NEW`
1. [国庆假期上3休7上3](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E5%BA%86%E5%81%87%E6%9C%9F%E4%B8%8A3%E4%BC%917%E4%B8%8A3%23) `107.2K 🔥` `NEW`
1. [闵塔鲨说品牌才是唯一的甲方](https://s.weibo.com/weibo?q=%23%E9%97%B5%E5%A1%94%E9%B2%A8%E8%AF%B4%E5%93%81%E7%89%8C%E6%89%8D%E6%98%AF%E5%94%AF%E4%B8%80%E7%9A%84%E7%94%B2%E6%96%B9%23) `102.7K 🔥` `NEW`
1. [宋亚轩看似耳饰实则不然 (Song Yaxuan looks like earrings, but actually they are not)](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E4%BA%9A%E8%BD%A9%E7%9C%8B%E4%BC%BC%E8%80%B3%E9%A5%B0%E5%AE%9E%E5%88%99%E4%B8%8D%E7%84%B6%23) `99.6K 🔥` `NEW`
1. [因吸烟冲突捅死男友女子有29处伤](https://s.weibo.com/weibo?q=%23%E5%9B%A0%E5%90%B8%E7%83%9F%E5%86%B2%E7%AA%81%E6%8D%85%E6%AD%BB%E7%94%B7%E5%8F%8B%E5%A5%B3%E5%AD%90%E6%9C%8929%E5%A4%84%E4%BC%A4%23) `91.9K 🔥` `NEW`
1. [宋亚轩蓝发带](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E4%BA%9A%E8%BD%A9%E8%93%9D%E5%8F%91%E5%B8%A6%23) `82.5K 🔥` `NEW`
1. [DeepSeek一天消耗了8万亿 (DeepSeek consumes 8 trillion a day)](https://s.weibo.com/weibo?q=%23DeepSeek%E4%B8%80%E5%A4%A9%E6%B6%88%E8%80%97%E4%BA%868%E4%B8%87%E4%BA%BF%23) `983.6K 🔥` `+112%`
1. [东莞9岁女孩确诊性早熟 (9-year-old girl in Dongguan diagnosed with precocious puberty)](https://s.weibo.com/weibo?q=%23%E4%B8%9C%E8%8E%9E9%E5%B2%81%E5%A5%B3%E5%AD%A9%E7%A1%AE%E8%AF%8A%E6%80%A7%E6%97%A9%E7%86%9F%23) `721.5K 🔥` `+978%`
1. [新型电力系统建设十五五规划发布 (The 15th Five-Year Plan for the Construction of New Power Systems Released)](https://s.weibo.com/weibo?q=%23%E6%96%B0%E5%9E%8B%E7%94%B5%E5%8A%9B%E7%B3%BB%E7%BB%9F%E5%BB%BA%E8%AE%BE%E5%8D%81%E4%BA%94%E4%BA%94%E8%A7%84%E5%88%92%E5%8F%91%E5%B8%83%23) `563.1K 🔥` `+109%`
1. [捅死男友女子父母多次给男方父母道歉下跪](https://s.weibo.com/weibo?q=%23%E6%8D%85%E6%AD%BB%E7%94%B7%E5%8F%8B%E5%A5%B3%E5%AD%90%E7%88%B6%E6%AF%8D%E5%A4%9A%E6%AC%A1%E7%BB%99%E7%94%B7%E6%96%B9%E7%88%B6%E6%AF%8D%E9%81%93%E6%AD%89%E4%B8%8B%E8%B7%AA%23) `480.9K 🔥` `+116%`
1. [怪不得长沙人晚上不睡觉](https://s.weibo.com/weibo?q=%23%E6%80%AA%E4%B8%8D%E5%BE%97%E9%95%BF%E6%B2%99%E4%BA%BA%E6%99%9A%E4%B8%8A%E4%B8%8D%E7%9D%A1%E8%A7%89%23) `372.1K 🔥` `+132%`
1. [邹市明已连续数月零收入 (Zou Shiming has had zero income for several months)](https://s.weibo.com/weibo?q=%23%E9%82%B9%E5%B8%82%E6%98%8E%E5%B7%B2%E8%BF%9E%E7%BB%AD%E6%95%B0%E6%9C%88%E9%9B%B6%E6%94%B6%E5%85%A5%23) `210.5K 🔥` `+32%`
1. [陈伟霆九门直播哭了](https://s.weibo.com/weibo?q=%23%E9%99%88%E4%BC%9F%E9%9C%86%E4%B9%9D%E9%97%A8%E7%9B%B4%E6%92%AD%E5%93%AD%E4%BA%86%23) `185.8K 🔥` `+47%`
1. [9岁女孩长期吃蛋糕熬夜确诊性早熟](https://s.weibo.com/weibo?q=%239%E5%B2%81%E5%A5%B3%E5%AD%A9%E9%95%BF%E6%9C%9F%E5%90%83%E8%9B%8B%E7%B3%95%E7%86%AC%E5%A4%9C%E7%A1%AE%E8%AF%8A%E6%80%A7%E6%97%A9%E7%86%9F%23) `185.0K 🔥` `+179%`
1. [美股科技巨头迎来强劲买盘 (U.S. tech giants see strong buying)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E8%82%A1%E7%A7%91%E6%8A%80%E5%B7%A8%E5%A4%B4%E8%BF%8E%E6%9D%A5%E5%BC%BA%E5%8A%B2%E4%B9%B0%E7%9B%98%23) `184.7K 🔥` `+209%`
1. [小时候讽刺的现在全理解了](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E6%97%B6%E5%80%99%E8%AE%BD%E5%88%BA%E7%9A%84%E7%8E%B0%E5%9C%A8%E5%85%A8%E7%90%86%E8%A7%A3%E4%BA%86%23) `184.4K 🔥` `+37%`
1. [人无法接住自己没有的东西](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E6%97%A0%E6%B3%95%E6%8E%A5%E4%BD%8F%E8%87%AA%E5%B7%B1%E6%B2%A1%E6%9C%89%E7%9A%84%E4%B8%9C%E8%A5%BF%23) `165.1K 🔥` `+240%`
1. [曝SHE将合体开演唱会 (It is revealed that SHE will unite to hold a concert)](https://s.weibo.com/weibo?q=%23%E6%9B%9DSHE%E5%B0%86%E5%90%88%E4%BD%93%E5%BC%80%E6%BC%94%E5%94%B1%E4%BC%9A%23) `130.4K 🔥` `+174%`
1. [低精力可以去医院查有没有疾病](https://s.weibo.com/weibo?q=%23%E4%BD%8E%E7%B2%BE%E5%8A%9B%E5%8F%AF%E4%BB%A5%E5%8E%BB%E5%8C%BB%E9%99%A2%E6%9F%A5%E6%9C%89%E6%B2%A1%E6%9C%89%E7%96%BE%E7%97%85%23) `130.2K 🔥` `+52%`
1. [DeepSeek登顶全球第一 (DeepSeek ranks first in the world)](https://s.weibo.com/weibo?q=%23DeepSeek%E7%99%BB%E9%A1%B6%E5%85%A8%E7%90%83%E7%AC%AC%E4%B8%80%23) `109.7K 🔥` `+123%`
1. [我国要建一条超级大的外环路 (my country wants to build a super large outer ring road)](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%9B%BD%E8%A6%81%E5%BB%BA%E4%B8%80%E6%9D%A1%E8%B6%85%E7%BA%A7%E5%A4%A7%E7%9A%84%E5%A4%96%E7%8E%AF%E8%B7%AF%23) `106.3K 🔥` `+78%`
1. [日本7人地震逃生后回商场被炸死](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC7%E4%BA%BA%E5%9C%B0%E9%9C%87%E9%80%83%E7%94%9F%E5%90%8E%E5%9B%9E%E5%95%86%E5%9C%BA%E8%A2%AB%E7%82%B8%E6%AD%BB%23) `101.0K 🔥` `+104%`
1. [母牛把娃弄丢了被主人叨叨叨叨](https://s.weibo.com/weibo?q=%23%E6%AF%8D%E7%89%9B%E6%8A%8A%E5%A8%83%E5%BC%84%E4%B8%A2%E4%BA%86%E8%A2%AB%E4%B8%BB%E4%BA%BA%E5%8F%A8%E5%8F%A8%E5%8F%A8%E5%8F%A8%23) `90.0K 🔥` `+89%`
1. [985博士后孕期出轨女生还见亲友](https://s.weibo.com/weibo?q=%23985%E5%8D%9A%E5%A3%AB%E5%90%8E%E5%AD%95%E6%9C%9F%E5%87%BA%E8%BD%A8%E5%A5%B3%E7%94%9F%E8%BF%98%E8%A7%81%E4%BA%B2%E5%8F%8B%23) `88.0K 🔥` `+85%`
1. [看出九尾在巴黎有多热了](https://s.weibo.com/weibo?q=%23%E7%9C%8B%E5%87%BA%E4%B9%9D%E5%B0%BE%E5%9C%A8%E5%B7%B4%E9%BB%8E%E6%9C%89%E5%A4%9A%E7%83%AD%E4%BA%86%23) `86.1K 🔥` `+61%`
1. [伊朗放话让美军回到石器时代 (Iran threatens to send U.S. military back to Stone Age)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%94%BE%E8%AF%9D%E8%AE%A9%E7%BE%8E%E5%86%9B%E5%9B%9E%E5%88%B0%E7%9F%B3%E5%99%A8%E6%97%B6%E4%BB%A3%23) `85.5K 🔥` `+21%`
1. [孙珍妮请客白鹿开到荼蘼剧组](https://s.weibo.com/weibo?q=%23%E5%AD%99%E7%8F%8D%E5%A6%AE%E8%AF%B7%E5%AE%A2%E7%99%BD%E9%B9%BF%E5%BC%80%E5%88%B0%E8%8D%BC%E8%98%BC%E5%89%A7%E7%BB%84%23) `80.5K 🔥` `+69%`
1. [罗正一年花170元146给了苹果](https://s.weibo.com/weibo?q=%23%E7%BD%97%E6%AD%A3%E4%B8%80%E5%B9%B4%E8%8A%B1170%E5%85%83146%E7%BB%99%E4%BA%86%E8%8B%B9%E6%9E%9C%23) `185.6K 🔥`
1. [迪丽热巴 闵塔鲨 (Dilraba Minta Shark)](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%20%E9%97%B5%E5%A1%94%E9%B2%A8%23) `185.3K 🔥`
1. [人类真的太小看自己的惰性和薄情了](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E7%B1%BB%E7%9C%9F%E7%9A%84%E5%A4%AA%E5%B0%8F%E7%9C%8B%E8%87%AA%E5%B7%B1%E7%9A%84%E6%83%B0%E6%80%A7%E5%92%8C%E8%96%84%E6%83%85%E4%BA%86%23) `185.5K 🔥` `-46%`
1. [虞书欣开球](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E5%BC%80%E7%90%83%23) `118.3K 🔥` `-43%`
1. [白鹿回复孙珍妮 (Bailu replies to Jenny Sun)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E5%9B%9E%E5%A4%8D%E5%AD%99%E7%8F%8D%E5%A6%AE%23) `103.1K 🔥` `-49%`
1. [柳智敏致歉称吃太多](https://s.weibo.com/weibo?q=%23%E6%9F%B3%E6%99%BA%E6%95%8F%E8%87%B4%E6%AD%89%E7%A7%B0%E5%90%83%E5%A4%AA%E5%A4%9A%23) `93.3K 🔥` `-55%`

Updated at 2026-08-04 07:46:36

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
