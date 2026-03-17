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

1. [省考第一P分诈胡后道歉称自己卑劣 (He got the highest P score in the provincial exam and then apologized and said he was despicable after cheating)](https://s.weibo.com/weibo?q=%23%E7%9C%81%E8%80%83%E7%AC%AC%E4%B8%80P%E5%88%86%E8%AF%88%E8%83%A1%E5%90%8E%E9%81%93%E6%AD%89%E7%A7%B0%E8%87%AA%E5%B7%B1%E5%8D%91%E5%8A%A3%23) `1.1M 🔥` `NEW`
1. [韩国网友吐槽逐玉](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E7%BD%91%E5%8F%8B%E5%90%90%E6%A7%BD%E9%80%90%E7%8E%89%23) `221.2K 🔥` `NEW`
1. [拉里贾尼发表手写悼词](https://s.weibo.com/weibo?q=%23%E6%8B%89%E9%87%8C%E8%B4%BE%E5%B0%BC%E5%8F%91%E8%A1%A8%E6%89%8B%E5%86%99%E6%82%BC%E8%AF%8D%23) `220.0K 🔥` `NEW`
1. [一个烟头夺走22条生命谁该担责](https://s.weibo.com/weibo?q=%23%E4%B8%80%E4%B8%AA%E7%83%9F%E5%A4%B4%E5%A4%BA%E8%B5%B022%E6%9D%A1%E7%94%9F%E5%91%BD%E8%B0%81%E8%AF%A5%E6%8B%85%E8%B4%A3%23) `205.3K 🔥` `NEW`
1. [湘雅医院回应坠江学生导师停诊](https://s.weibo.com/weibo?q=%23%E6%B9%98%E9%9B%85%E5%8C%BB%E9%99%A2%E5%9B%9E%E5%BA%94%E5%9D%A0%E6%B1%9F%E5%AD%A6%E7%94%9F%E5%AF%BC%E5%B8%88%E5%81%9C%E8%AF%8A%23) `204.5K 🔥` `NEW`
1. [宝宝巴士被没收违法所得3.68元](https://s.weibo.com/weibo?q=%23%E5%AE%9D%E5%AE%9D%E5%B7%B4%E5%A3%AB%E8%A2%AB%E6%B2%A1%E6%94%B6%E8%BF%9D%E6%B3%95%E6%89%80%E5%BE%973.68%E5%85%83%23) `203.8K 🔥` `NEW`
1. [买一套房补贴10万杭州多地已安排](https://s.weibo.com/weibo?q=%23%E4%B9%B0%E4%B8%80%E5%A5%97%E6%88%BF%E8%A1%A5%E8%B4%B410%E4%B8%87%E6%9D%AD%E5%B7%9E%E5%A4%9A%E5%9C%B0%E5%B7%B2%E5%AE%89%E6%8E%92%23) `200.4K 🔥` `NEW`
1. [中国女足点球进了](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A5%B3%E8%B6%B3%E7%82%B9%E7%90%83%E8%BF%9B%E4%BA%86%23) `176.0K 🔥` `NEW`
1. [光与夜之恋](https://s.weibo.com/weibo?q=%23%E5%85%89%E4%B8%8E%E5%A4%9C%E4%B9%8B%E6%81%8B%23) `168.9K 🔥` `NEW`
1. [坠江身亡研究生导师有多个头衔](https://s.weibo.com/weibo?q=%23%E5%9D%A0%E6%B1%9F%E8%BA%AB%E4%BA%A1%E7%A0%94%E7%A9%B6%E7%94%9F%E5%AF%BC%E5%B8%88%E6%9C%89%E5%A4%9A%E4%B8%AA%E5%A4%B4%E8%A1%94%23) `168.4K 🔥` `NEW`
1. [赞达亚独家公开与荷兰弟的结婚视频 (Zendaya releases exclusive wedding video with Dutch brother)](https://s.weibo.com/weibo?q=%23%E8%B5%9E%E8%BE%BE%E4%BA%9A%E7%8B%AC%E5%AE%B6%E5%85%AC%E5%BC%80%E4%B8%8E%E8%8D%B7%E5%85%B0%E5%BC%9F%E7%9A%84%E7%BB%93%E5%A9%9A%E8%A7%86%E9%A2%91%23) `137.3K 🔥` `NEW`
1. [郑恺苗苗一家五口同框](https://s.weibo.com/weibo?q=%23%E9%83%91%E6%81%BA%E8%8B%97%E8%8B%97%E4%B8%80%E5%AE%B6%E4%BA%94%E5%8F%A3%E5%90%8C%E6%A1%86%23) `124.7K 🔥` `NEW`
1. [本科同学谈湘雅医院坠江研究生](https://s.weibo.com/weibo?q=%23%E6%9C%AC%E7%A7%91%E5%90%8C%E5%AD%A6%E8%B0%88%E6%B9%98%E9%9B%85%E5%8C%BB%E9%99%A2%E5%9D%A0%E6%B1%9F%E7%A0%94%E7%A9%B6%E7%94%9F%23) `90.2K 🔥` `NEW`
1. [以色列称已死的拉里贾尼账号更新](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E8%89%B2%E5%88%97%E7%A7%B0%E5%B7%B2%E6%AD%BB%E7%9A%84%E6%8B%89%E9%87%8C%E8%B4%BE%E5%B0%BC%E8%B4%A6%E5%8F%B7%E6%9B%B4%E6%96%B0%23) `89.6K 🔥` `NEW`
1. [中国女足vs澳大利亚女足](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A5%B3%E8%B6%B3vs%E6%BE%B3%E5%A4%A7%E5%88%A9%E4%BA%9A%E5%A5%B3%E8%B6%B3%23) `87.8K 🔥` `NEW`
1. [当研究生和上班是一样的](https://s.weibo.com/weibo?q=%23%E5%BD%93%E7%A0%94%E7%A9%B6%E7%94%9F%E5%92%8C%E4%B8%8A%E7%8F%AD%E6%98%AF%E4%B8%80%E6%A0%B7%E7%9A%84%23) `76.1K 🔥` `NEW`
1. [原来逐玉这段吻戏是这么拍的](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E9%80%90%E7%8E%89%E8%BF%99%E6%AE%B5%E5%90%BB%E6%88%8F%E6%98%AF%E8%BF%99%E4%B9%88%E6%8B%8D%E7%9A%84%23) `74.9K 🔥` `NEW`
1. [多部门回应珠海长隆鲸鲨去世](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E9%83%A8%E9%97%A8%E5%9B%9E%E5%BA%94%E7%8F%A0%E6%B5%B7%E9%95%BF%E9%9A%86%E9%B2%B8%E9%B2%A8%E5%8E%BB%E4%B8%96%23) `72.9K 🔥` `NEW`
1. [奥迪E7X原创才是设计](https://s.weibo.com/weibo?q=%23%E5%A5%A5%E8%BF%AAE7X%E5%8E%9F%E5%88%9B%E6%89%8D%E6%98%AF%E8%AE%BE%E8%AE%A1%23) `72.3K 🔥` `NEW`
1. [几十年不管女儿六旬父亲老了要赡养](https://s.weibo.com/weibo?q=%23%E5%87%A0%E5%8D%81%E5%B9%B4%E4%B8%8D%E7%AE%A1%E5%A5%B3%E5%84%BF%E5%85%AD%E6%97%AC%E7%88%B6%E4%BA%B2%E8%80%81%E4%BA%86%E8%A6%81%E8%B5%A1%E5%85%BB%23) `68.9K 🔥` `NEW`
1. [山姆销售镉超标冻干草莓或涉刑事 (Sam's sale of freeze-dried strawberries with excessive cadmium may lead to criminal involvement)](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E5%A7%86%E9%94%80%E5%94%AE%E9%95%89%E8%B6%85%E6%A0%87%E5%86%BB%E5%B9%B2%E8%8D%89%E8%8E%93%E6%88%96%E6%B6%89%E5%88%91%E4%BA%8B%23) `66.5K 🔥` `NEW`
1. [启境汽车品牌发布会暨GT7首秀 (Qijing Automobile Brand Launch Conference and GT7 Debut)](https://s.weibo.com/weibo?q=%23%E5%90%AF%E5%A2%83%E6%B1%BD%E8%BD%A6%E5%93%81%E7%89%8C%E5%8F%91%E5%B8%83%E4%BC%9A%E6%9A%A8GT7%E9%A6%96%E7%A7%80%23) `317.7K 🔥` `+108%`
1. [荣耀涨价](https://s.weibo.com/weibo?q=%23%E8%8D%A3%E8%80%80%E6%B6%A8%E4%BB%B7%23) `243.1K 🔥` `+139%`
1. [今日辟谣](https://s.weibo.com/weibo?q=%23%E4%BB%8A%E6%97%A5%E8%BE%9F%E8%B0%A3%23) `220.2K 🔥` `+36%`
1. [小巷人家2官宣 (Alley People 2 Official Announcement)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%B7%B7%E4%BA%BA%E5%AE%B62%E5%AE%98%E5%AE%A3%23) `203.0K 🔥` `+41%`
1. [以色列刺杀拉里贾尼](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E8%89%B2%E5%88%97%E5%88%BA%E6%9D%80%E6%8B%89%E9%87%8C%E8%B4%BE%E5%B0%BC%23) `201.9K 🔥` `+41%`
1. [小巷人家2 范丞丞卢昱晓](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%B7%B7%E4%BA%BA%E5%AE%B62%20%E8%8C%83%E4%B8%9E%E4%B8%9E%E5%8D%A2%E6%98%B1%E6%99%93%23) `200.6K 🔥` `+41%`
1. [李海涛受贿1.5亿余元](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%B5%B7%E6%B6%9B%E5%8F%97%E8%B4%BF1.5%E4%BA%BF%E4%BD%99%E5%85%83%23) `169.1K 🔥` `+49%`
1. [刘昊然 周冬雨](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%98%8A%E7%84%B6%20%E5%91%A8%E5%86%AC%E9%9B%A8%23) `168.1K 🔥` `+24%`
1. [神21乘组圆满完成第二次出舱活动](https://s.weibo.com/weibo?q=%23%E7%A5%9E21%E4%B9%98%E7%BB%84%E5%9C%86%E6%BB%A1%E5%AE%8C%E6%88%90%E7%AC%AC%E4%BA%8C%E6%AC%A1%E5%87%BA%E8%88%B1%E6%B4%BB%E5%8A%A8%23) `616.2K 🔥`
1. [原来这就是小鸟胃啊](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E8%BF%99%E5%B0%B1%E6%98%AF%E5%B0%8F%E9%B8%9F%E8%83%83%E5%95%8A%23) `169.2K 🔥`
1. [以色列防长称拉里贾尼死亡](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E8%89%B2%E5%88%97%E9%98%B2%E9%95%BF%E7%A7%B0%E6%8B%89%E9%87%8C%E8%B4%BE%E5%B0%BC%E6%AD%BB%E4%BA%A1%23) `168.0K 🔥`
1. [宝宝巴士被罚30万元 (Baby Bus was fined NT$300,000)](https://s.weibo.com/weibo?q=%23%E5%AE%9D%E5%AE%9D%E5%B7%B4%E5%A3%AB%E8%A2%AB%E7%BD%9A30%E4%B8%87%E5%85%83%23) `160.5K 🔥`
1. [伊朗这次不想忍了 (Iran doesn’t want to tolerate it this time)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E8%BF%99%E6%AC%A1%E4%B8%8D%E6%83%B3%E5%BF%8D%E4%BA%86%23) `157.8K 🔥`
1. [金价大跌黄金9点开卖9点01分售罄](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E5%A4%A7%E8%B7%8C%E9%BB%84%E9%87%919%E7%82%B9%E5%BC%80%E5%8D%969%E7%82%B901%E5%88%86%E5%94%AE%E7%BD%84%23) `143.0K 🔥`
1. [小巷人家第二部 (Alley People Part 2)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%B7%B7%E4%BA%BA%E5%AE%B6%E7%AC%AC%E4%BA%8C%E9%83%A8%23) `84.7K 🔥`
1. [34岁女子脸部美容9日后身亡](https://s.weibo.com/weibo?q=%2334%E5%B2%81%E5%A5%B3%E5%AD%90%E8%84%B8%E9%83%A8%E7%BE%8E%E5%AE%B99%E6%97%A5%E5%90%8E%E8%BA%AB%E4%BA%A1%23) `79.9K 🔥`
1. [邓凯怎么这么窄](https://s.weibo.com/weibo?q=%23%E9%82%93%E5%87%AF%E6%80%8E%E4%B9%88%E8%BF%99%E4%B9%88%E7%AA%84%23) `78.3K 🔥`
1. [广东00后女生公司估值达110亿](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E4%B8%9C00%E5%90%8E%E5%A5%B3%E7%94%9F%E5%85%AC%E5%8F%B8%E4%BC%B0%E5%80%BC%E8%BE%BE110%E4%BA%BF%23) `72.3K 🔥`
1. [ELLE四月刊张凌赫封面预告](https://s.weibo.com/weibo?q=%23ELLE%E5%9B%9B%E6%9C%88%E5%88%8A%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%B0%81%E9%9D%A2%E9%A2%84%E5%91%8A%23) `70.7K 🔥`
1. [AI大厂月薪3万疯抢文科生](https://s.weibo.com/weibo?q=%23AI%E5%A4%A7%E5%8E%82%E6%9C%88%E8%96%AA3%E4%B8%87%E7%96%AF%E6%8A%A2%E6%96%87%E7%A7%91%E7%94%9F%23) `781.1K 🔥` `-27%`
1. [27岁女子应聘卡旺卡被嫌年龄大](https://s.weibo.com/weibo?q=%2327%E5%B2%81%E5%A5%B3%E5%AD%90%E5%BA%94%E8%81%98%E5%8D%A1%E6%97%BA%E5%8D%A1%E8%A2%AB%E5%AB%8C%E5%B9%B4%E9%BE%84%E5%A4%A7%23) `234.6K 🔥` `-45%`
1. [甘肃省副省长雷思维被查 (Vice Governor of Gansu Province Lei Siwei under investigation)](https://s.weibo.com/weibo?q=%23%E7%94%98%E8%82%83%E7%9C%81%E5%89%AF%E7%9C%81%E9%95%BF%E9%9B%B7%E6%80%9D%E7%BB%B4%E8%A2%AB%E6%9F%A5%23) `168.5K 🔥` `-78%`
1. [山姆在中国正高速扩张](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E5%A7%86%E5%9C%A8%E4%B8%AD%E5%9B%BD%E6%AD%A3%E9%AB%98%E9%80%9F%E6%89%A9%E5%BC%A0%23) `97.7K 🔥` `-39%`
1. [正午阳光又要拍宅斗了](https://s.weibo.com/weibo?q=%23%E6%AD%A3%E5%8D%88%E9%98%B3%E5%85%89%E5%8F%88%E8%A6%81%E6%8B%8D%E5%AE%85%E6%96%97%E4%BA%86%23) `97.3K 🔥` `-28%`
1. [中方向伊朗提供人道主义援助 (China provides humanitarian assistance to Iran)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%96%B9%E5%90%91%E4%BC%8A%E6%9C%97%E6%8F%90%E4%BE%9B%E4%BA%BA%E9%81%93%E4%B8%BB%E4%B9%89%E6%8F%B4%E5%8A%A9%23) `92.4K 🔥` `-31%`
1. [以军认为成功暗杀拉里贾尼 (Israeli military believes assassination of Larijani successful)](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E5%86%9B%E8%AE%A4%E4%B8%BA%E6%88%90%E5%8A%9F%E6%9A%97%E6%9D%80%E6%8B%89%E9%87%8C%E8%B4%BE%E5%B0%BC%23) `84.8K 🔥` `-37%`
1. [赵丽颖于适 浮华之上 (Zhao Liying is suitable for the glitz and glamor)](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%B8%BD%E9%A2%96%E4%BA%8E%E9%80%82%20%E6%B5%AE%E5%8D%8E%E4%B9%8B%E4%B8%8A%23) `84.6K 🔥` `-39%`
1. [周杰伦说今晚0点准备](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%9D%B0%E4%BC%A6%E8%AF%B4%E4%BB%8A%E6%99%9A0%E7%82%B9%E5%87%86%E5%A4%87%23) `79.4K 🔥` `-32%`
1. [正式确诊为番茄](https://s.weibo.com/weibo?q=%23%E6%AD%A3%E5%BC%8F%E7%A1%AE%E8%AF%8A%E4%B8%BA%E7%95%AA%E8%8C%84%23) `70.2K 🔥` `-48%`
1. [雷军说不想背刺老用户](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E5%86%9B%E8%AF%B4%E4%B8%8D%E6%83%B3%E8%83%8C%E5%88%BA%E8%80%81%E7%94%A8%E6%88%B7%23) `68.0K 🔥` `-49%`
1. [英伟达押注下一个万亿级机遇](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E4%BC%9F%E8%BE%BE%E6%8A%BC%E6%B3%A8%E4%B8%8B%E4%B8%80%E4%B8%AA%E4%B8%87%E4%BA%BF%E7%BA%A7%E6%9C%BA%E9%81%87%23) `66.9K 🔥` `-41%`

Updated at 2026-03-17 19:08:12

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
