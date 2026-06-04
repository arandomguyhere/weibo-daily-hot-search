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

1. [给阿嬷的情书火了电影人集体沉默 (Love letter to grandma goes viral, movie makers are silent)](https://s.weibo.com/weibo?q=%23%E7%BB%99%E9%98%BF%E5%AC%B7%E7%9A%84%E6%83%85%E4%B9%A6%E7%81%AB%E4%BA%86%E7%94%B5%E5%BD%B1%E4%BA%BA%E9%9B%86%E4%BD%93%E6%B2%89%E9%BB%98%23) `915.2K 🔥` `NEW`
1. [带入考场即构成作弊高考安检新变化](https://s.weibo.com/weibo?q=%23%E5%B8%A6%E5%85%A5%E8%80%83%E5%9C%BA%E5%8D%B3%E6%9E%84%E6%88%90%E4%BD%9C%E5%BC%8A%E9%AB%98%E8%80%83%E5%AE%89%E6%A3%80%E6%96%B0%E5%8F%98%E5%8C%96%23) `697.2K 🔥` `NEW`
1. [中国机器人亮相美国达人秀](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E6%9C%BA%E5%99%A8%E4%BA%BA%E4%BA%AE%E7%9B%B8%E7%BE%8E%E5%9B%BD%E8%BE%BE%E4%BA%BA%E7%A7%80%23) `191.6K 🔥` `NEW`
1. [新闻联播披露A股重要数据](https://s.weibo.com/weibo?q=%23%E6%96%B0%E9%97%BB%E8%81%94%E6%92%AD%E6%8A%AB%E9%9C%B2A%E8%82%A1%E9%87%8D%E8%A6%81%E6%95%B0%E6%8D%AE%23) `191.1K 🔥` `NEW`
1. [仅退款 快递员罚款](https://s.weibo.com/weibo?q=%23%E4%BB%85%E9%80%80%E6%AC%BE%20%E5%BF%AB%E9%80%92%E5%91%98%E7%BD%9A%E6%AC%BE%23) `188.3K 🔥` `NEW`
1. [李昊炎加盟巴萨](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%98%8A%E7%82%8E%E5%8A%A0%E7%9B%9F%E5%B7%B4%E8%90%A8%23) `187.6K 🔥` `NEW`
1. [男子带20万练功券酒店约见女主播](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%B8%A620%E4%B8%87%E7%BB%83%E5%8A%9F%E5%88%B8%E9%85%92%E5%BA%97%E7%BA%A6%E8%A7%81%E5%A5%B3%E4%B8%BB%E6%92%AD%23) `187.0K 🔥` `NEW`
1. [荔枝和龙眼有宝宝了](https://s.weibo.com/weibo?q=%23%E8%8D%94%E6%9E%9D%E5%92%8C%E9%BE%99%E7%9C%BC%E6%9C%89%E5%AE%9D%E5%AE%9D%E4%BA%86%23) `185.7K 🔥` `NEW`
1. [于正记不得杨蓉是第几次续约](https://s.weibo.com/weibo?q=%23%E4%BA%8E%E6%AD%A3%E8%AE%B0%E4%B8%8D%E5%BE%97%E6%9D%A8%E8%93%89%E6%98%AF%E7%AC%AC%E5%87%A0%E6%AC%A1%E7%BB%AD%E7%BA%A6%23) `185.2K 🔥` `NEW`
1. [文旅局致歉王祖蓝吃粉争议](https://s.weibo.com/weibo?q=%23%E6%96%87%E6%97%85%E5%B1%80%E8%87%B4%E6%AD%89%E7%8E%8B%E7%A5%96%E8%93%9D%E5%90%83%E7%B2%89%E4%BA%89%E8%AE%AE%23) `184.0K 🔥` `NEW`
1. [还有3天高考了 (There are only 3 days until the college entrance examination)](https://s.weibo.com/weibo?q=%23%E8%BF%98%E6%9C%893%E5%A4%A9%E9%AB%98%E8%80%83%E4%BA%86%23) `183.0K 🔥` `NEW`
1. [主角大结局升华了](https://s.weibo.com/weibo?q=%23%E4%B8%BB%E8%A7%92%E5%A4%A7%E7%BB%93%E5%B1%80%E5%8D%87%E5%8D%8E%E4%BA%86%23) `182.0K 🔥` `NEW`
1. [金鹤龙喊话迪丽热巴](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%B9%A4%E9%BE%99%E5%96%8A%E8%AF%9D%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%23) `180.9K 🔥` `NEW`
1. [何猷君婚礼誓词没有贫穷](https://s.weibo.com/weibo?q=%23%E4%BD%95%E7%8C%B7%E5%90%9B%E5%A9%9A%E7%A4%BC%E8%AA%93%E8%AF%8D%E6%B2%A1%E6%9C%89%E8%B4%AB%E7%A9%B7%23) `178.6K 🔥` `NEW`
1. [浪姐所有人都给代斯签名了](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E6%89%80%E6%9C%89%E4%BA%BA%E9%83%BD%E7%BB%99%E4%BB%A3%E6%96%AF%E7%AD%BE%E5%90%8D%E4%BA%86%23) `178.0K 🔥` `NEW`
1. [Viper首次打EDG就是生死战](https://s.weibo.com/weibo?q=%23Viper%E9%A6%96%E6%AC%A1%E6%89%93EDG%E5%B0%B1%E6%98%AF%E7%94%9F%E6%AD%BB%E6%88%98%23) `175.0K 🔥` `NEW`
1. [奚梦瑶婚礼后首露面](https://s.weibo.com/weibo?q=%23%E5%A5%9A%E6%A2%A6%E7%91%B6%E5%A9%9A%E7%A4%BC%E5%90%8E%E9%A6%96%E9%9C%B2%E9%9D%A2%23) `172.9K 🔥` `NEW`
1. [方媛追问周涛郭富城年轻时什么样](https://s.weibo.com/weibo?q=%23%E6%96%B9%E5%AA%9B%E8%BF%BD%E9%97%AE%E5%91%A8%E6%B6%9B%E9%83%AD%E5%AF%8C%E5%9F%8E%E5%B9%B4%E8%BD%BB%E6%97%B6%E4%BB%80%E4%B9%88%E6%A0%B7%23) `172.0K 🔥` `NEW`
1. [老人和邻居互殴次日自缢于邻家门口](https://s.weibo.com/weibo?q=%23%E8%80%81%E4%BA%BA%E5%92%8C%E9%82%BB%E5%B1%85%E4%BA%92%E6%AE%B4%E6%AC%A1%E6%97%A5%E8%87%AA%E7%BC%A2%E4%BA%8E%E9%82%BB%E5%AE%B6%E9%97%A8%E5%8F%A3%23) `171.2K 🔥` `NEW`
1. [迪丽热巴如愿收到了方形西瓜蛋糕](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E5%A6%82%E6%84%BF%E6%94%B6%E5%88%B0%E4%BA%86%E6%96%B9%E5%BD%A2%E8%A5%BF%E7%93%9C%E8%9B%8B%E7%B3%95%23) `167.1K 🔥` `NEW`
1. [萨巴伦卡回应法网出局 (Sabalenka responds to French Open exit)](https://s.weibo.com/weibo?q=%23%E8%90%A8%E5%B7%B4%E4%BC%A6%E5%8D%A1%E5%9B%9E%E5%BA%94%E6%B3%95%E7%BD%91%E5%87%BA%E5%B1%80%23) `166.2K 🔥` `NEW`
1. [金高银表白周迅](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%AB%98%E9%93%B6%E8%A1%A8%E7%99%BD%E5%91%A8%E8%BF%85%23) `163.1K 🔥` `NEW`
1. [虞书欣陆柯燃谁想拍的一看便知](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E9%99%86%E6%9F%AF%E7%87%83%E8%B0%81%E6%83%B3%E6%8B%8D%E7%9A%84%E4%B8%80%E7%9C%8B%E4%BE%BF%E7%9F%A5%23) `160.2K 🔥` `NEW`
1. [奚梦瑶摔倒陈学冬第一时间晒脚肿图](https://s.weibo.com/weibo?q=%23%E5%A5%9A%E6%A2%A6%E7%91%B6%E6%91%94%E5%80%92%E9%99%88%E5%AD%A6%E5%86%AC%E7%AC%AC%E4%B8%80%E6%97%B6%E9%97%B4%E6%99%92%E8%84%9A%E8%82%BF%E5%9B%BE%23) `159.9K 🔥` `NEW`
1. [难怪叫主角 因为配角走光了](https://s.weibo.com/weibo?q=%23%E9%9A%BE%E6%80%AA%E5%8F%AB%E4%B8%BB%E8%A7%92%20%E5%9B%A0%E4%B8%BA%E9%85%8D%E8%A7%92%E8%B5%B0%E5%85%89%E4%BA%86%23) `157.7K 🔥` `NEW`
1. [国企干部公职人员离婚分割近亿财产 (Divorce of state-owned enterprise cadres and public officials split nearly 100 million yuan in property)](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%BC%81%E5%B9%B2%E9%83%A8%E5%85%AC%E8%81%8C%E4%BA%BA%E5%91%98%E7%A6%BB%E5%A9%9A%E5%88%86%E5%89%B2%E8%BF%91%E4%BA%BF%E8%B4%A2%E4%BA%A7%23) `1.5M 🔥` `+2208%`
1. [你居家我安心](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E5%B1%85%E5%AE%B6%E6%88%91%E5%AE%89%E5%BF%83%23) `658.3K 🔥` `+108%`
1. [刘浩存演技](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%B5%A9%E5%AD%98%E6%BC%94%E6%8A%80%23) `622.3K 🔥` `+932%`
1. [一进入高温就会人品消失 (Your character will disappear as soon as you enter the high temperature.)](https://s.weibo.com/weibo?q=%23%E4%B8%80%E8%BF%9B%E5%85%A5%E9%AB%98%E6%B8%A9%E5%B0%B1%E4%BC%9A%E4%BA%BA%E5%93%81%E6%B6%88%E5%A4%B1%23) `359.2K 🔥` `+406%`
1. [油泼面这段赵本山不让张艺谋删 (Zhao Benshan refused to let Zhang Yimou delete the scene about oily noodles)](https://s.weibo.com/weibo?q=%23%E6%B2%B9%E6%B3%BC%E9%9D%A2%E8%BF%99%E6%AE%B5%E8%B5%B5%E6%9C%AC%E5%B1%B1%E4%B8%8D%E8%AE%A9%E5%BC%A0%E8%89%BA%E8%B0%8B%E5%88%A0%23) `350.6K 🔥` `+456%`
1. [张宸逍夸王鹤棣 吴泽林捂耳朵](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%AE%B8%E9%80%8D%E5%A4%B8%E7%8E%8B%E9%B9%A4%E6%A3%A3%20%E5%90%B4%E6%B3%BD%E6%9E%97%E6%8D%82%E8%80%B3%E6%9C%B5%23) `181.2K 🔥` `+74%`
1. [小猫每天都在宝宝的被窝里](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%8C%AB%E6%AF%8F%E5%A4%A9%E9%83%BD%E5%9C%A8%E5%AE%9D%E5%AE%9D%E7%9A%84%E8%A2%AB%E7%AA%9D%E9%87%8C%23) `179.6K 🔥` `+268%`
1. [退休夫妻离婚互揭老底牵出近亿财产](https://s.weibo.com/weibo?q=%23%E9%80%80%E4%BC%91%E5%A4%AB%E5%A6%BB%E7%A6%BB%E5%A9%9A%E4%BA%92%E6%8F%AD%E8%80%81%E5%BA%95%E7%89%B5%E5%87%BA%E8%BF%91%E4%BA%BF%E8%B4%A2%E4%BA%A7%23) `177.5K 🔥` `+95%`
1. [日本停留现金社会的唯一好处 (The only benefit of Japan’s staying cash society)](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E5%81%9C%E7%95%99%E7%8E%B0%E9%87%91%E7%A4%BE%E4%BC%9A%E7%9A%84%E5%94%AF%E4%B8%80%E5%A5%BD%E5%A4%84%23) `176.6K 🔥` `+176%`
1. [行政楼盖章老师的各种态度](https://s.weibo.com/weibo?q=%23%E8%A1%8C%E6%94%BF%E6%A5%BC%E7%9B%96%E7%AB%A0%E8%80%81%E5%B8%88%E7%9A%84%E5%90%84%E7%A7%8D%E6%80%81%E5%BA%A6%23) `174.1K 🔥` `+316%`
1. [最信豆包的人出现了](https://s.weibo.com/weibo?q=%23%E6%9C%80%E4%BF%A1%E8%B1%86%E5%8C%85%E7%9A%84%E4%BA%BA%E5%87%BA%E7%8E%B0%E4%BA%86%23) `173.5K 🔥` `+267%`
1. [主角结局 刘红兵和孩子都死了](https://s.weibo.com/weibo?q=%23%E4%B8%BB%E8%A7%92%E7%BB%93%E5%B1%80%20%E5%88%98%E7%BA%A2%E5%85%B5%E5%92%8C%E5%AD%A9%E5%AD%90%E9%83%BD%E6%AD%BB%E4%BA%86%23) `170.2K 🔥` `+177%`
1. [要学会把自己养得很好](https://s.weibo.com/weibo?q=%23%E8%A6%81%E5%AD%A6%E4%BC%9A%E6%8A%8A%E8%87%AA%E5%B7%B1%E5%85%BB%E5%BE%97%E5%BE%88%E5%A5%BD%23) `169.6K 🔥` `+254%`
1. [俄方提出停战条件](https://s.weibo.com/weibo?q=%23%E4%BF%84%E6%96%B9%E6%8F%90%E5%87%BA%E5%81%9C%E6%88%98%E6%9D%A1%E4%BB%B6%23) `168.7K 🔥` `+130%`
1. [丁程鑫爆料宋亚轩不爱回消息](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A8%8B%E9%91%AB%E7%88%86%E6%96%99%E5%AE%8B%E4%BA%9A%E8%BD%A9%E4%B8%8D%E7%88%B1%E5%9B%9E%E6%B6%88%E6%81%AF%23) `167.6K 🔥` `+276%`
1. [家业热度](https://s.weibo.com/weibo?q=%23%E5%AE%B6%E4%B8%9A%E7%83%AD%E5%BA%A6%23) `165.0K 🔥` `+211%`
1. [男子11年前买29.7万元手机懊悔不已 (Man regrets buying 297,000 yuan mobile phone 11 years ago)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%9011%E5%B9%B4%E5%89%8D%E4%B9%B029.7%E4%B8%87%E5%85%83%E6%89%8B%E6%9C%BA%E6%87%8A%E6%82%94%E4%B8%8D%E5%B7%B2%23) `164.0K 🔥` `+236%`
1. [上海野生动物园回应老虎吃草 (Shanghai Wildlife Park responds to tiger eating grass)](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E9%87%8E%E7%94%9F%E5%8A%A8%E7%89%A9%E5%9B%AD%E5%9B%9E%E5%BA%94%E8%80%81%E8%99%8E%E5%90%83%E8%8D%89%23) `161.8K 🔥` `+288%`
1. [中国女排0比3捷克女排](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A5%B3%E6%8E%920%E6%AF%943%E6%8D%B7%E5%85%8B%E5%A5%B3%E6%8E%92%23) `158.4K 🔥` `+279%`
1. [翘楚](https://s.weibo.com/weibo?q=%23%E7%BF%98%E6%A5%9A%23) `156.7K 🔥` `+274%`
1. [中国小姐姐卖麻糍分量太夸张 (The Chinese girl sells mochi with exaggerated portions)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%B0%8F%E5%A7%90%E5%A7%90%E5%8D%96%E9%BA%BB%E7%B3%8D%E5%88%86%E9%87%8F%E5%A4%AA%E5%A4%B8%E5%BC%A0%23) `156.5K 🔥` `+237%`
1. [生理期结束的第一天 (The first day of menstrual period)](https://s.weibo.com/weibo?q=%23%E7%94%9F%E7%90%86%E6%9C%9F%E7%BB%93%E6%9D%9F%E7%9A%84%E7%AC%AC%E4%B8%80%E5%A4%A9%23) `155.1K 🔥` `+156%`
1. [说唱歌手上恋综了](https://s.weibo.com/weibo?q=%23%E8%AF%B4%E5%94%B1%E6%AD%8C%E6%89%8B%E4%B8%8A%E6%81%8B%E7%BB%BC%E4%BA%86%23) `154.7K 🔥` `+271%`
1. [女子花2万查丈夫出轨揪出辅警内鬼](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E8%8A%B12%E4%B8%87%E6%9F%A5%E4%B8%88%E5%A4%AB%E5%87%BA%E8%BD%A8%E6%8F%AA%E5%87%BA%E8%BE%85%E8%AD%A6%E5%86%85%E9%AC%BC%23) `189.9K 🔥` `-58%`
1. [馒头从空气炸锅留学回来了](https://s.weibo.com/weibo?q=%23%E9%A6%92%E5%A4%B4%E4%BB%8E%E7%A9%BA%E6%B0%94%E7%82%B8%E9%94%85%E7%95%99%E5%AD%A6%E5%9B%9E%E6%9D%A5%E4%BA%86%23) `189.7K 🔥` `-43%`
1. [都大结局了翟子路还在遗憾](https://s.weibo.com/weibo?q=%23%E9%83%BD%E5%A4%A7%E7%BB%93%E5%B1%80%E4%BA%86%E7%BF%9F%E5%AD%90%E8%B7%AF%E8%BF%98%E5%9C%A8%E9%81%97%E6%86%BE%23) `161.9K 🔥` `-30%`

Updated at 2026-06-04 08:20:21

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
