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

1. [瘦了后出片像呼吸一样简单 (After losing weight, making movies is as easy as breathing)](https://s.weibo.com/weibo?q=%23%E7%98%A6%E4%BA%86%E5%90%8E%E5%87%BA%E7%89%87%E5%83%8F%E5%91%BC%E5%90%B8%E4%B8%80%E6%A0%B7%E7%AE%80%E5%8D%95%23) `372.2K 🔥` `NEW`
1. [原来全麻手术不是睡着了](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E5%85%A8%E9%BA%BB%E6%89%8B%E6%9C%AF%E4%B8%8D%E6%98%AF%E7%9D%A1%E7%9D%80%E4%BA%86%23) `209.7K 🔥` `NEW`
1. [西安暴雪24小时内温差20度](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E5%AE%89%E6%9A%B4%E9%9B%AA24%E5%B0%8F%E6%97%B6%E5%86%85%E6%B8%A9%E5%B7%AE20%E5%BA%A6%23) `155.8K 🔥` `NEW`
1. [谢娜下一界冬奥会见](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%A8%9C%E4%B8%8B%E4%B8%80%E7%95%8C%E5%86%AC%E5%A5%A5%E4%BC%9A%E8%A7%81%23) `155.5K 🔥` `NEW`
1. [王格格开了时代峰峻的高会](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A0%BC%E6%A0%BC%E5%BC%80%E4%BA%86%E6%97%B6%E4%BB%A3%E5%B3%B0%E5%B3%BB%E7%9A%84%E9%AB%98%E4%BC%9A%23) `155.4K 🔥` `NEW`
1. [歌手徐浩宣布干团播](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B%E5%BE%90%E6%B5%A9%E5%AE%A3%E5%B8%83%E5%B9%B2%E5%9B%A2%E6%92%AD%23) `155.3K 🔥` `NEW`
1. [高速返程车流如红色长龙看不到头](https://s.weibo.com/weibo?q=%23%E9%AB%98%E9%80%9F%E8%BF%94%E7%A8%8B%E8%BD%A6%E6%B5%81%E5%A6%82%E7%BA%A2%E8%89%B2%E9%95%BF%E9%BE%99%E7%9C%8B%E4%B8%8D%E5%88%B0%E5%A4%B4%23) `155.3K 🔥` `NEW`
1. [TF五代排名](https://s.weibo.com/weibo?q=%23TF%E4%BA%94%E4%BB%A3%E6%8E%92%E5%90%8D%23) `155.1K 🔥` `NEW`
1. [免费时段即将结束仍在高速怎么办](https://s.weibo.com/weibo?q=%23%E5%85%8D%E8%B4%B9%E6%97%B6%E6%AE%B5%E5%8D%B3%E5%B0%86%E7%BB%93%E6%9D%9F%E4%BB%8D%E5%9C%A8%E9%AB%98%E9%80%9F%E6%80%8E%E4%B9%88%E5%8A%9E%23) `155.1K 🔥` `NEW`
1. [张丹峰洪欣带儿女出行](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E4%B8%B9%E5%B3%B0%E6%B4%AA%E6%AC%A3%E5%B8%A6%E5%84%BF%E5%A5%B3%E5%87%BA%E8%A1%8C%23) `150.4K 🔥` `NEW`
1. [尼格买提家宴8个菜没一个青菜 (There are 8 dishes in Nigmaiti’s family banquet, not a single green vegetable)](https://s.weibo.com/weibo?q=%23%E5%B0%BC%E6%A0%BC%E4%B9%B0%E6%8F%90%E5%AE%B6%E5%AE%B48%E4%B8%AA%E8%8F%9C%E6%B2%A1%E4%B8%80%E4%B8%AA%E9%9D%92%E8%8F%9C%23) `149.5K 🔥` `NEW`
1. [LunarNewYear使用的源头](https://s.weibo.com/weibo?q=%23LunarNewYear%E4%BD%BF%E7%94%A8%E7%9A%84%E6%BA%90%E5%A4%B4%23) `129.8K 🔥` `NEW`
1. [返程路上妻子被丈夫遗落几近崩溃](https://s.weibo.com/weibo?q=%23%E8%BF%94%E7%A8%8B%E8%B7%AF%E4%B8%8A%E5%A6%BB%E5%AD%90%E8%A2%AB%E4%B8%88%E5%A4%AB%E9%81%97%E8%90%BD%E5%87%A0%E8%BF%91%E5%B4%A9%E6%BA%83%23) `124.7K 🔥` `NEW`
1. [孩子把摔炮当糖果入口后爆炸](https://s.weibo.com/weibo?q=%23%E5%AD%A9%E5%AD%90%E6%8A%8A%E6%91%94%E7%82%AE%E5%BD%93%E7%B3%96%E6%9E%9C%E5%85%A5%E5%8F%A3%E5%90%8E%E7%88%86%E7%82%B8%23) `117.2K 🔥` `NEW`
1. [朴老师时团第八人](https://s.weibo.com/weibo?q=%23%E6%9C%B4%E8%80%81%E5%B8%88%E6%97%B6%E5%9B%A2%E7%AC%AC%E5%85%AB%E4%BA%BA%23) `112.5K 🔥` `NEW`
1. [小狗坐十几个小时长途面相都变了](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%8B%97%E5%9D%90%E5%8D%81%E5%87%A0%E4%B8%AA%E5%B0%8F%E6%97%B6%E9%95%BF%E9%80%94%E9%9D%A2%E7%9B%B8%E9%83%BD%E5%8F%98%E4%BA%86%23) `110.3K 🔥` `NEW`
1. [AI重现春晚名场面](https://s.weibo.com/weibo?q=%23AI%E9%87%8D%E7%8E%B0%E6%98%A5%E6%99%9A%E5%90%8D%E5%9C%BA%E9%9D%A2%23) `103.5K 🔥` `NEW`
1. [安宥真 安吧](https://s.weibo.com/weibo?q=%23%E5%AE%89%E5%AE%A5%E7%9C%9F%20%E5%AE%89%E5%90%A7%23) `98.4K 🔥` `NEW`
1. [李煜东是铁了心不写作业了吗](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E7%85%9C%E4%B8%9C%E6%98%AF%E9%93%81%E4%BA%86%E5%BF%83%E4%B8%8D%E5%86%99%E4%BD%9C%E4%B8%9A%E4%BA%86%E5%90%97%23) `94.1K 🔥` `NEW`
1. [元流之子刺客技能爆料](https://s.weibo.com/weibo?q=%23%E5%85%83%E6%B5%81%E4%B9%8B%E5%AD%90%E5%88%BA%E5%AE%A2%E6%8A%80%E8%83%BD%E7%88%86%E6%96%99%23) `89.0K 🔥` `NEW`
1. [刘宇宁回老家过年 (Liu Yuning returns to his hometown to celebrate the New Year)](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AE%87%E5%AE%81%E5%9B%9E%E8%80%81%E5%AE%B6%E8%BF%87%E5%B9%B4%23) `86.6K 🔥` `NEW`
1. [男子花5600元套中汽车使用权商家反悔 (Man spent 5,600 yuan to get the right to use the car, but the merchant regretted it)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E8%8A%B15600%E5%85%83%E5%A5%97%E4%B8%AD%E6%B1%BD%E8%BD%A6%E4%BD%BF%E7%94%A8%E6%9D%83%E5%95%86%E5%AE%B6%E5%8F%8D%E6%82%94%23) `816.9K 🔥` `+247%`
1. [男子躲厕所过个瘾致高铁晚点](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E8%BA%B2%E5%8E%95%E6%89%80%E8%BF%87%E4%B8%AA%E7%98%BE%E8%87%B4%E9%AB%98%E9%93%81%E6%99%9A%E7%82%B9%23) `425.0K 🔥` `+172%`
1. [谷爱凌说我不退役我才22岁 (Gu Ailing said that if I don’t retire, I will only be 22 years old)](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E8%AF%B4%E6%88%91%E4%B8%8D%E9%80%80%E5%BD%B9%E6%88%91%E6%89%8D22%E5%B2%81%23) `424.8K 🔥` `+136%`
1. [柳智敏solo成绩](https://s.weibo.com/weibo?q=%23%E6%9F%B3%E6%99%BA%E6%95%8Fsolo%E6%88%90%E7%BB%A9%23) `424.6K 🔥` `+391%`
1. [孙颖莎光着一只脚](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E5%85%89%E7%9D%80%E4%B8%80%E5%8F%AA%E8%84%9A%23) `156.0K 🔥` `+39%`
1. [韩国游客爱上中国超市](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E6%B8%B8%E5%AE%A2%E7%88%B1%E4%B8%8A%E4%B8%AD%E5%9B%BD%E8%B6%85%E5%B8%82%23) `155.5K 🔥` `+57%`
1. [商家称36斤羊烤完剩6.9斤是正常 (The merchant said that it is normal for 36 kilograms of lamb to be left with 6.9 kilograms after roasting.)](https://s.weibo.com/weibo?q=%23%E5%95%86%E5%AE%B6%E7%A7%B036%E6%96%A4%E7%BE%8A%E7%83%A4%E5%AE%8C%E5%89%A96.9%E6%96%A4%E6%98%AF%E6%AD%A3%E5%B8%B8%23) `1.1M 🔥`
1. [你的返程藏着他们满眼的不舍](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E7%9A%84%E8%BF%94%E7%A8%8B%E8%97%8F%E7%9D%80%E4%BB%96%E4%BB%AC%E6%BB%A1%E7%9C%BC%E7%9A%84%E4%B8%8D%E8%88%8D%23) `627.3K 🔥`
1. [初八上班的我就这样 (I was like this when I went to work on the eighth day of the lunar month)](https://s.weibo.com/weibo?q=%23%E5%88%9D%E5%85%AB%E4%B8%8A%E7%8F%AD%E7%9A%84%E6%88%91%E5%B0%B1%E8%BF%99%E6%A0%B7%23) `226.2K 🔥`
1. [史上最贵iPhone要来了 (The most expensive iPhone in history is coming)](https://s.weibo.com/weibo?q=%23%E5%8F%B2%E4%B8%8A%E6%9C%80%E8%B4%B5iPhone%E8%A6%81%E6%9D%A5%E4%BA%86%23) `185.3K 🔥`
1. [黄景瑜回头喊关晓彤这一下](https://s.weibo.com/weibo?q=%23%E9%BB%84%E6%99%AF%E7%91%9C%E5%9B%9E%E5%A4%B4%E5%96%8A%E5%85%B3%E6%99%93%E5%BD%A4%E8%BF%99%E4%B8%80%E4%B8%8B%23) `177.5K 🔥`
1. [疑贝加尔湖事故车辆沉湖瞬间曝光](https://s.weibo.com/weibo?q=%23%E7%96%91%E8%B4%9D%E5%8A%A0%E5%B0%94%E6%B9%96%E4%BA%8B%E6%95%85%E8%BD%A6%E8%BE%86%E6%B2%89%E6%B9%96%E7%9E%AC%E9%97%B4%E6%9B%9D%E5%85%89%23) `176.5K 🔥`
1. [孙逊说守着王楚钦可不就胜率高么](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%80%8A%E8%AF%B4%E5%AE%88%E7%9D%80%E7%8E%8B%E6%A5%9A%E9%92%A6%E5%8F%AF%E4%B8%8D%E5%B0%B1%E8%83%9C%E7%8E%87%E9%AB%98%E4%B9%88%23) `167.7K 🔥`
1. [猫11.8斤等于人200斤](https://s.weibo.com/weibo?q=%23%E7%8C%AB11.8%E6%96%A4%E7%AD%89%E4%BA%8E%E4%BA%BA200%E6%96%A4%23) `163.6K 🔥`
1. [杨幂 这么来历不明的二维码也要扫吗 (Yang Mi, do you still need to scan such a QR code of unknown origin?)](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%20%E8%BF%99%E4%B9%88%E6%9D%A5%E5%8E%86%E4%B8%8D%E6%98%8E%E7%9A%84%E4%BA%8C%E7%BB%B4%E7%A0%81%E4%B9%9F%E8%A6%81%E6%89%AB%E5%90%97%23) `156.1K 🔥`
1. [周洁琼不让江山妆造](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%B4%81%E7%90%BC%E4%B8%8D%E8%AE%A9%E6%B1%9F%E5%B1%B1%E5%A6%86%E9%80%A0%23) `156.0K 🔥`
1. [叶舒华瘦下来美成真人bjd了](https://s.weibo.com/weibo?q=%23%E5%8F%B6%E8%88%92%E5%8D%8E%E7%98%A6%E4%B8%8B%E6%9D%A5%E7%BE%8E%E6%88%90%E7%9C%9F%E4%BA%BAbjd%E4%BA%86%23) `155.8K 🔥`
1. [向太曝朱丽倩喜欢刘德华20年才见光](https://s.weibo.com/weibo?q=%23%E5%90%91%E5%A4%AA%E6%9B%9D%E6%9C%B1%E4%B8%BD%E5%80%A9%E5%96%9C%E6%AC%A2%E5%88%98%E5%BE%B7%E5%8D%8E20%E5%B9%B4%E6%89%8D%E8%A7%81%E5%85%89%23) `155.7K 🔥`
1. [妈妈给远嫁女儿寄了120个单间饺子](https://s.weibo.com/weibo?q=%23%E5%A6%88%E5%A6%88%E7%BB%99%E8%BF%9C%E5%AB%81%E5%A5%B3%E5%84%BF%E5%AF%84%E4%BA%86120%E4%B8%AA%E5%8D%95%E9%97%B4%E9%A5%BA%E5%AD%90%23) `155.6K 🔥`
1. [叶祖新合照 想过了官宣没想到是亲戚](https://s.weibo.com/weibo?q=%23%E5%8F%B6%E7%A5%96%E6%96%B0%E5%90%88%E7%85%A7%20%E6%83%B3%E8%BF%87%E4%BA%86%E5%AE%98%E5%AE%A3%E6%B2%A1%E6%83%B3%E5%88%B0%E6%98%AF%E4%BA%B2%E6%88%9A%23) `155.2K 🔥`
1. [赶飞机为什么要提前那么久到机场](https://s.weibo.com/weibo?q=%23%E8%B5%B6%E9%A3%9E%E6%9C%BA%E4%B8%BA%E4%BB%80%E4%B9%88%E8%A6%81%E6%8F%90%E5%89%8D%E9%82%A3%E4%B9%88%E4%B9%85%E5%88%B0%E6%9C%BA%E5%9C%BA%23) `127.6K 🔥`
1. [美29岁女教师与未成年发生关系被捕 (29-year-old female teacher in the United States was arrested for having sex with a minor)](https://s.weibo.com/weibo?q=%23%E7%BE%8E29%E5%B2%81%E5%A5%B3%E6%95%99%E5%B8%88%E4%B8%8E%E6%9C%AA%E6%88%90%E5%B9%B4%E5%8F%91%E7%94%9F%E5%85%B3%E7%B3%BB%E8%A2%AB%E6%8D%95%23) `97.7K 🔥`
1. [梅婷没想到有男演员拍戏会睡猪圈](https://s.weibo.com/weibo?q=%23%E6%A2%85%E5%A9%B7%E6%B2%A1%E6%83%B3%E5%88%B0%E6%9C%89%E7%94%B7%E6%BC%94%E5%91%98%E6%8B%8D%E6%88%8F%E4%BC%9A%E7%9D%A1%E7%8C%AA%E5%9C%88%23) `188.4K 🔥` `-49%`
1. [IVE回归 (ive returns)](https://s.weibo.com/weibo?q=%23IVE%E5%9B%9E%E5%BD%92%23) `155.9K 🔥` `-29%`
1. [王楚钦不好意思白纸我签不了 (Wang Chuqin, I'm sorry, I can't sign the blank paper.)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E4%B8%8D%E5%A5%BD%E6%84%8F%E6%80%9D%E7%99%BD%E7%BA%B8%E6%88%91%E7%AD%BE%E4%B8%8D%E4%BA%86%23) `100.1K 🔥` `-57%`
1. [大钱都是三五年挣的 (Big money is earned in three to five years)](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E9%92%B1%E9%83%BD%E6%98%AF%E4%B8%89%E4%BA%94%E5%B9%B4%E6%8C%A3%E7%9A%84%23) `93.6K 🔥` `-60%`
1. [金秋天solo曲Odd](https://s.weibo.com/weibo?q=%23%E9%87%91%E7%A7%8B%E5%A4%A9solo%E6%9B%B2Odd%23) `91.8K 🔥` `-31%`
1. [唐嫣老钱风造型](https://s.weibo.com/weibo?q=%23%E5%94%90%E5%AB%A3%E8%80%81%E9%92%B1%E9%A3%8E%E9%80%A0%E5%9E%8B%23) `88.9K 🔥` `-23%`
1. [打麻将微信步数一万多 (More than 10,000 steps in playing mahjong on WeChat)](https://s.weibo.com/weibo?q=%23%E6%89%93%E9%BA%BB%E5%B0%86%E5%BE%AE%E4%BF%A1%E6%AD%A5%E6%95%B0%E4%B8%80%E4%B8%87%E5%A4%9A%23) `87.6K 🔥` `-36%`

Updated at 2026-02-23 19:29:26

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
