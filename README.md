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

1. [论樊振东如何在2分钟里拿到11分 (On how Fan Zhendong scored 11 points in 2 minutes)](https://s.weibo.com/weibo?q=%23%E8%AE%BA%E6%A8%8A%E6%8C%AF%E4%B8%9C%E5%A6%82%E4%BD%95%E5%9C%A82%E5%88%86%E9%92%9F%E9%87%8C%E6%8B%BF%E5%88%B011%E5%88%86%23) `1.0M 🔥` `NEW`
1. [男子得知儿子被欺凌猝死在校调解室](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%BE%97%E7%9F%A5%E5%84%BF%E5%AD%90%E8%A2%AB%E6%AC%BA%E5%87%8C%E7%8C%9D%E6%AD%BB%E5%9C%A8%E6%A0%A1%E8%B0%83%E8%A7%A3%E5%AE%A4%23) `730.6K 🔥` `NEW`
1. [美军开始拦截进出霍尔木兹海峡船只](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%86%9B%E5%BC%80%E5%A7%8B%E6%8B%A6%E6%88%AA%E8%BF%9B%E5%87%BA%E9%9C%8D%E5%B0%94%E6%9C%A8%E5%85%B9%E6%B5%B7%E5%B3%A1%E8%88%B9%E5%8F%AA%23) `289.0K 🔥` `NEW`
1. [西班牙首相在清华握手握不过来了](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%8F%AD%E7%89%99%E9%A6%96%E7%9B%B8%E5%9C%A8%E6%B8%85%E5%8D%8E%E6%8F%A1%E6%89%8B%E6%8F%A1%E4%B8%8D%E8%BF%87%E6%9D%A5%E4%BA%86%23) `133.8K 🔥` `NEW`
1. [演出服遭集体退货家属称表演取消](https://s.weibo.com/weibo?q=%23%E6%BC%94%E5%87%BA%E6%9C%8D%E9%81%AD%E9%9B%86%E4%BD%93%E9%80%80%E8%B4%A7%E5%AE%B6%E5%B1%9E%E7%A7%B0%E8%A1%A8%E6%BC%94%E5%8F%96%E6%B6%88%23) `132.8K 🔥` `NEW`
1. [网约车司机迎来强制8小时工作制](https://s.weibo.com/weibo?q=%23%E7%BD%91%E7%BA%A6%E8%BD%A6%E5%8F%B8%E6%9C%BA%E8%BF%8E%E6%9D%A5%E5%BC%BA%E5%88%B68%E5%B0%8F%E6%97%B6%E5%B7%A5%E4%BD%9C%E5%88%B6%23) `125.5K 🔥` `NEW`
1. [男子无症状查出肠癌多亏按时体检](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E6%97%A0%E7%97%87%E7%8A%B6%E6%9F%A5%E5%87%BA%E8%82%A0%E7%99%8C%E5%A4%9A%E4%BA%8F%E6%8C%89%E6%97%B6%E4%BD%93%E6%A3%80%23) `125.5K 🔥` `NEW`
1. [大冰说一定要动起来](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%86%B0%E8%AF%B4%E4%B8%80%E5%AE%9A%E8%A6%81%E5%8A%A8%E8%B5%B7%E6%9D%A5%23) `105.1K 🔥` `NEW`
1. [多校鼓励博士生读硕士](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E6%A0%A1%E9%BC%93%E5%8A%B1%E5%8D%9A%E5%A3%AB%E7%94%9F%E8%AF%BB%E7%A1%95%E5%A3%AB%23) `101.0K 🔥` `NEW`
1. [嫣然医院不再续租](https://s.weibo.com/weibo?q=%23%E5%AB%A3%E7%84%B6%E5%8C%BB%E9%99%A2%E4%B8%8D%E5%86%8D%E7%BB%AD%E7%A7%9F%23) `94.7K 🔥` `NEW`
1. [杨紫 这不又来上班了吗 (Yang Zi, isn’t she coming to work again?)](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%20%E8%BF%99%E4%B8%8D%E5%8F%88%E6%9D%A5%E4%B8%8A%E7%8F%AD%E4%BA%86%E5%90%97%23) `88.5K 🔥` `NEW`
1. [让你一整天都保持清醒的方法](https://s.weibo.com/weibo?q=%23%E8%AE%A9%E4%BD%A0%E4%B8%80%E6%95%B4%E5%A4%A9%E9%83%BD%E4%BF%9D%E6%8C%81%E6%B8%85%E9%86%92%E7%9A%84%E6%96%B9%E6%B3%95%23) `84.6K 🔥` `NEW`
1. [张凌赫田曦薇庆功宴合影](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%94%B0%E6%9B%A6%E8%96%87%E5%BA%86%E5%8A%9F%E5%AE%B4%E5%90%88%E5%BD%B1%23) `65.2K 🔥` `NEW`
1. [银行招聘被指萝卜岗后撤争议条款](https://s.weibo.com/weibo?q=%23%E9%93%B6%E8%A1%8C%E6%8B%9B%E8%81%98%E8%A2%AB%E6%8C%87%E8%90%9D%E5%8D%9C%E5%B2%97%E5%90%8E%E6%92%A4%E4%BA%89%E8%AE%AE%E6%9D%A1%E6%AC%BE%23) `64.3K 🔥` `NEW`
1. [西宁一面馆冒犯女性标语已撤下](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E5%AE%81%E4%B8%80%E9%9D%A2%E9%A6%86%E5%86%92%E7%8A%AF%E5%A5%B3%E6%80%A7%E6%A0%87%E8%AF%AD%E5%B7%B2%E6%92%A4%E4%B8%8B%23) `63.9K 🔥` `NEW`
1. [齐思钧已确诊为中年疲惫](https://s.weibo.com/weibo?q=%23%E9%BD%90%E6%80%9D%E9%92%A7%E5%B7%B2%E7%A1%AE%E8%AF%8A%E4%B8%BA%E4%B8%AD%E5%B9%B4%E7%96%B2%E6%83%AB%23) `63.6K 🔥` `NEW`
1. [特朗普警告伊朗攻击艇勿靠近封锁线](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E8%AD%A6%E5%91%8A%E4%BC%8A%E6%9C%97%E6%94%BB%E5%87%BB%E8%89%87%E5%8B%BF%E9%9D%A0%E8%BF%91%E5%B0%81%E9%94%81%E7%BA%BF%23) `55.6K 🔥` `NEW`
1. [问界M6辅助驾驶实测](https://s.weibo.com/weibo?q=%23%E9%97%AE%E7%95%8CM6%E8%BE%85%E5%8A%A9%E9%A9%BE%E9%A9%B6%E5%AE%9E%E6%B5%8B%23) `54.6K 🔥` `NEW`
1. [李小冉只是长得年轻](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B0%8F%E5%86%89%E5%8F%AA%E6%98%AF%E9%95%BF%E5%BE%97%E5%B9%B4%E8%BD%BB%23) `134.8K 🔥` `+33%`
1. [2026世界互联网大会亚太峰会](https://s.weibo.com/weibo?q=%232026%E4%B8%96%E7%95%8C%E4%BA%92%E8%81%94%E7%BD%91%E5%A4%A7%E4%BC%9A%E4%BA%9A%E5%A4%AA%E5%B3%B0%E4%BC%9A%23) `591.4K 🔥`
1. [北电艺考的全国前五名 (Top five in the country in Beidian Arts Examination)](https://s.weibo.com/weibo?q=%23%E5%8C%97%E7%94%B5%E8%89%BA%E8%80%83%E7%9A%84%E5%85%A8%E5%9B%BD%E5%89%8D%E4%BA%94%E5%90%8D%23) `125.9K 🔥`
1. [洛克王国 补偿](https://s.weibo.com/weibo?q=%23%E6%B4%9B%E5%85%8B%E7%8E%8B%E5%9B%BD%20%E8%A1%A5%E5%81%BF%23) `178.2K 🔥` `-50%`
1. [卢洋洋去拍短剧了](https://s.weibo.com/weibo?q=%23%E5%8D%A2%E6%B4%8B%E6%B4%8B%E5%8E%BB%E6%8B%8D%E7%9F%AD%E5%89%A7%E4%BA%86%23) `136.9K 🔥` `-42%`
1. [韩国中学生在上海观光廊大声打闹](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E4%B8%AD%E5%AD%A6%E7%94%9F%E5%9C%A8%E4%B8%8A%E6%B5%B7%E8%A7%82%E5%85%89%E5%BB%8A%E5%A4%A7%E5%A3%B0%E6%89%93%E9%97%B9%23) `136.6K 🔥` `-25%`
1. [张凌赫田曦薇经纪人敬酒](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%94%B0%E6%9B%A6%E8%96%87%E7%BB%8F%E7%BA%AA%E4%BA%BA%E6%95%AC%E9%85%92%23) `131.5K 🔥` `-28%`
1. [迪丽热巴工作室 审美](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E5%B7%A5%E4%BD%9C%E5%AE%A4%20%E5%AE%A1%E7%BE%8E%23) `129.7K 🔥` `-29%`
1. [男子无偿献血十年要求免诊查费遭拒](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E6%97%A0%E5%81%BF%E7%8C%AE%E8%A1%80%E5%8D%81%E5%B9%B4%E8%A6%81%E6%B1%82%E5%85%8D%E8%AF%8A%E6%9F%A5%E8%B4%B9%E9%81%AD%E6%8B%92%23) `128.5K 🔥` `-88%`
1. [楚乔传 全员下场](https://s.weibo.com/weibo?q=%23%E6%A5%9A%E4%B9%94%E4%BC%A0%20%E5%85%A8%E5%91%98%E4%B8%8B%E5%9C%BA%23) `127.9K 🔥` `-30%`
1. [眉姐姐斓曦怎么了](https://s.weibo.com/weibo?q=%23%E7%9C%89%E5%A7%90%E5%A7%90%E6%96%93%E6%9B%A6%E6%80%8E%E4%B9%88%E4%BA%86%23) `127.0K 🔥` `-29%`
1. [伊朗曾准备稀释450公斤浓缩铀 (Iran had prepared to dilute 450 kilograms of enriched uranium)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%9B%BE%E5%87%86%E5%A4%87%E7%A8%80%E9%87%8A450%E5%85%AC%E6%96%A4%E6%B5%93%E7%BC%A9%E9%93%80%23) `126.1K 🔥` `-29%`
1. [北京最火饺子馆开始喂AI龙虾 (Beijing’s most popular dumpling restaurant starts feeding AI lobsters)](https://s.weibo.com/weibo?q=%23%E5%8C%97%E4%BA%AC%E6%9C%80%E7%81%AB%E9%A5%BA%E5%AD%90%E9%A6%86%E5%BC%80%E5%A7%8B%E5%96%82AI%E9%BE%99%E8%99%BE%23) `126.0K 🔥` `-31%`
1. [官俊臣艺考 没报机构](https://s.weibo.com/weibo?q=%23%E5%AE%98%E4%BF%8A%E8%87%A3%E8%89%BA%E8%80%83%20%E6%B2%A1%E6%8A%A5%E6%9C%BA%E6%9E%84%23) `126.0K 🔥` `-29%`
1. [长春姐弟俩被遗留在托管班两年 (The Changchun siblings were left in a care class for two years)](https://s.weibo.com/weibo?q=%23%E9%95%BF%E6%98%A5%E5%A7%90%E5%BC%9F%E4%BF%A9%E8%A2%AB%E9%81%97%E7%95%99%E5%9C%A8%E6%89%98%E7%AE%A1%E7%8F%AD%E4%B8%A4%E5%B9%B4%23) `125.8K 🔥` `-31%`
1. [王晓晨 俞灏明 (Wang Xiaochen Yu Haoming)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%99%93%E6%99%A8%20%E4%BF%9E%E7%81%8F%E6%98%8E%23) `125.8K 🔥` `-30%`
1. [刘冲去了逐玉庆功宴 (Liu Chong went to the Zhuyu celebration banquet)](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%86%B2%E5%8E%BB%E4%BA%86%E9%80%90%E7%8E%89%E5%BA%86%E5%8A%9F%E5%AE%B4%23) `125.7K 🔥` `-84%`
1. [瘦肚子超好的行为](https://s.weibo.com/weibo?q=%23%E7%98%A6%E8%82%9A%E5%AD%90%E8%B6%85%E5%A5%BD%E7%9A%84%E8%A1%8C%E4%B8%BA%23) `125.7K 🔥` `-30%`
1. [Angelababy郑恺陈赫李晨合影](https://s.weibo.com/weibo?q=%23Angelababy%E9%83%91%E6%81%BA%E9%99%88%E8%B5%AB%E6%9D%8E%E6%99%A8%E5%90%88%E5%BD%B1%23) `125.6K 🔥` `-30%`
1. [黄灿灿为防恶剪每天换发型](https://s.weibo.com/weibo?q=%23%E9%BB%84%E7%81%BF%E7%81%BF%E4%B8%BA%E9%98%B2%E6%81%B6%E5%89%AA%E6%AF%8F%E5%A4%A9%E6%8D%A2%E5%8F%91%E5%9E%8B%23) `98.7K 🔥` `-44%`
1. [王晓晨吃药引发心悸 (Wang Xiaochen's heart palpitations caused by taking medicine)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%99%93%E6%99%A8%E5%90%83%E8%8D%AF%E5%BC%95%E5%8F%91%E5%BF%83%E6%82%B8%23) `85.6K 🔥` `-47%`
1. [仇一代已和解 仇二代请二搭](https://s.weibo.com/weibo?q=%23%E4%BB%87%E4%B8%80%E4%BB%A3%E5%B7%B2%E5%92%8C%E8%A7%A3%20%E4%BB%87%E4%BA%8C%E4%BB%A3%E8%AF%B7%E4%BA%8C%E6%90%AD%23) `83.9K 🔥` `-53%`
1. [向太给儿媳花钱用的是自己零用钱](https://s.weibo.com/weibo?q=%23%E5%90%91%E5%A4%AA%E7%BB%99%E5%84%BF%E5%AA%B3%E8%8A%B1%E9%92%B1%E7%94%A8%E7%9A%84%E6%98%AF%E8%87%AA%E5%B7%B1%E9%9B%B6%E7%94%A8%E9%92%B1%23) `79.0K 🔥` `-53%`
1. [海底捞CEO向贴钱员工致歉](https://s.weibo.com/weibo?q=%23%E6%B5%B7%E5%BA%95%E6%8D%9ECEO%E5%90%91%E8%B4%B4%E9%92%B1%E5%91%98%E5%B7%A5%E8%87%B4%E6%AD%89%23) `70.0K 🔥` `-34%`
1. [莫氏鸡煲迎来成群TVB老戏骨](https://s.weibo.com/weibo?q=%23%E8%8E%AB%E6%B0%8F%E9%B8%A1%E7%85%B2%E8%BF%8E%E6%9D%A5%E6%88%90%E7%BE%A4TVB%E8%80%81%E6%88%8F%E9%AA%A8%23) `67.5K 🔥` `-62%`
1. [董力8岁儿子都这么高了](https://s.weibo.com/weibo?q=%23%E8%91%A3%E5%8A%9B8%E5%B2%81%E5%84%BF%E5%AD%90%E9%83%BD%E8%BF%99%E4%B9%88%E9%AB%98%E4%BA%86%23) `66.7K 🔥` `-62%`
1. [钟南山妻子正式进入篮球名人堂 (Zhong Nanshan’s wife officially enters Basketball Hall of Fame)](https://s.weibo.com/weibo?q=%23%E9%92%9F%E5%8D%97%E5%B1%B1%E5%A6%BB%E5%AD%90%E6%AD%A3%E5%BC%8F%E8%BF%9B%E5%85%A5%E7%AF%AE%E7%90%83%E5%90%8D%E4%BA%BA%E5%A0%82%23) `65.8K 🔥` `-64%`
1. [伊朗总统称准备达成平衡公平协议](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%80%BB%E7%BB%9F%E7%A7%B0%E5%87%86%E5%A4%87%E8%BE%BE%E6%88%90%E5%B9%B3%E8%A1%A1%E5%85%AC%E5%B9%B3%E5%8D%8F%E8%AE%AE%23) `63.9K 🔥` `-65%`
1. [女子宫外孕被误诊月经不调痛到晕厥 (A woman with ectopic pregnancy was misdiagnosed and suffered from irregular menstruation and pain to the point of fainting.)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%AE%AB%E5%A4%96%E5%AD%95%E8%A2%AB%E8%AF%AF%E8%AF%8A%E6%9C%88%E7%BB%8F%E4%B8%8D%E8%B0%83%E7%97%9B%E5%88%B0%E6%99%95%E5%8E%A5%23) `63.3K 🔥` `-59%`
1. [1岁宝宝被排队摸脸萌化了 (1-year-old baby turned cute after being touched on the face in line)](https://s.weibo.com/weibo?q=%231%E5%B2%81%E5%AE%9D%E5%AE%9D%E8%A2%AB%E6%8E%92%E9%98%9F%E6%91%B8%E8%84%B8%E8%90%8C%E5%8C%96%E4%BA%86%23) `59.0K 🔥` `-67%`
1. [网友一句提醒外卖小哥查出尿毒症](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%8F%8B%E4%B8%80%E5%8F%A5%E6%8F%90%E9%86%92%E5%A4%96%E5%8D%96%E5%B0%8F%E5%93%A5%E6%9F%A5%E5%87%BA%E5%B0%BF%E6%AF%92%E7%97%87%23) `58.7K 🔥` `-42%`

Updated at 2026-04-13 23:56:43

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
