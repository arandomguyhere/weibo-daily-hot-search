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

1. [日本终于露出獠牙 (Japan finally shows its fangs)](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E7%BB%88%E4%BA%8E%E9%9C%B2%E5%87%BA%E7%8D%A0%E7%89%99%23) `1.2M 🔥` `NEW`
1. [张雪想卖陈光标赠送豪车给嫣然捐款](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E6%83%B3%E5%8D%96%E9%99%88%E5%85%89%E6%A0%87%E8%B5%A0%E9%80%81%E8%B1%AA%E8%BD%A6%E7%BB%99%E5%AB%A3%E7%84%B6%E6%8D%90%E6%AC%BE%23) `838.0K 🔥` `NEW`
1. [从太空看中国一座未来之城](https://s.weibo.com/weibo?q=%23%E4%BB%8E%E5%A4%AA%E7%A9%BA%E7%9C%8B%E4%B8%AD%E5%9B%BD%E4%B8%80%E5%BA%A7%E6%9C%AA%E6%9D%A5%E4%B9%8B%E5%9F%8E%23) `639.7K 🔥` `NEW`
1. [张雪机车夺冠含金量](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%E5%A4%BA%E5%86%A0%E5%90%AB%E9%87%91%E9%87%8F%23) `210.4K 🔥` `NEW`
1. [伊朗总统致美国人民公开信](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%80%BB%E7%BB%9F%E8%87%B4%E7%BE%8E%E5%9B%BD%E4%BA%BA%E6%B0%91%E5%85%AC%E5%BC%80%E4%BF%A1%23) `205.0K 🔥` `NEW`
1. [美国50多年来首次载人飞向月球](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD50%E5%A4%9A%E5%B9%B4%E6%9D%A5%E9%A6%96%E6%AC%A1%E8%BD%BD%E4%BA%BA%E9%A3%9E%E5%90%91%E6%9C%88%E7%90%83%23) `195.3K 🔥` `NEW`
1. [加油站开业请模特穿紧身短裙搞促销](https://s.weibo.com/weibo?q=%23%E5%8A%A0%E6%B2%B9%E7%AB%99%E5%BC%80%E4%B8%9A%E8%AF%B7%E6%A8%A1%E7%89%B9%E7%A9%BF%E7%B4%A7%E8%BA%AB%E7%9F%AD%E8%A3%99%E6%90%9E%E4%BF%83%E9%94%80%23) `192.7K 🔥` `NEW`
1. [黄金](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%23) `185.6K 🔥` `NEW`
1. [有一种传承叫刘老庄连](https://s.weibo.com/weibo?q=%23%E6%9C%89%E4%B8%80%E7%A7%8D%E4%BC%A0%E6%89%BF%E5%8F%AB%E5%88%98%E8%80%81%E5%BA%84%E8%BF%9E%23) `176.0K 🔥` `NEW`
1. [美国TikTok禁令演不下去了吗](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BDTikTok%E7%A6%81%E4%BB%A4%E6%BC%94%E4%B8%8D%E4%B8%8B%E5%8E%BB%E4%BA%86%E5%90%97%23) `167.4K 🔥` `NEW`
1. [女子深夜搭网约车遭摸腿性骚扰 (Woman was sexually harassed by touching her legs while taking an online ride-hailing service late at night)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%B7%B1%E5%A4%9C%E6%90%AD%E7%BD%91%E7%BA%A6%E8%BD%A6%E9%81%AD%E6%91%B8%E8%85%BF%E6%80%A7%E9%AA%9A%E6%89%B0%23) `164.7K 🔥` `NEW`
1. [何穗带娃看小动物](https://s.weibo.com/weibo?q=%23%E4%BD%95%E7%A9%97%E5%B8%A6%E5%A8%83%E7%9C%8B%E5%B0%8F%E5%8A%A8%E7%89%A9%23) `154.5K 🔥` `NEW`
1. [伊朗最高领袖首次讲话](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%9C%80%E9%AB%98%E9%A2%86%E8%A2%96%E9%A6%96%E6%AC%A1%E8%AE%B2%E8%AF%9D%23) `154.3K 🔥` `NEW`
1. [白日提灯热度](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%97%A5%E6%8F%90%E7%81%AF%E7%83%AD%E5%BA%A6%23) `153.3K 🔥` `NEW`
1. [老爸收入不敌女儿卖拼豆直呼崩溃](https://s.weibo.com/weibo?q=%23%E8%80%81%E7%88%B8%E6%94%B6%E5%85%A5%E4%B8%8D%E6%95%8C%E5%A5%B3%E5%84%BF%E5%8D%96%E6%8B%BC%E8%B1%86%E7%9B%B4%E5%91%BC%E5%B4%A9%E6%BA%83%23) `139.2K 🔥` `NEW`
1. [4个炒菜习惯或让致癌物翻倍](https://s.weibo.com/weibo?q=%234%E4%B8%AA%E7%82%92%E8%8F%9C%E4%B9%A0%E6%83%AF%E6%88%96%E8%AE%A9%E8%87%B4%E7%99%8C%E7%89%A9%E7%BF%BB%E5%80%8D%23) `135.7K 🔥` `NEW`
1. [幼儿园小朋友裹被子开溜被老师抓包](https://s.weibo.com/weibo?q=%23%E5%B9%BC%E5%84%BF%E5%9B%AD%E5%B0%8F%E6%9C%8B%E5%8F%8B%E8%A3%B9%E8%A2%AB%E5%AD%90%E5%BC%80%E6%BA%9C%E8%A2%AB%E8%80%81%E5%B8%88%E6%8A%93%E5%8C%85%23) `132.9K 🔥` `NEW`
1. [4岁女孩买汉堡遭女子踢踹母亲发声](https://s.weibo.com/weibo?q=%234%E5%B2%81%E5%A5%B3%E5%AD%A9%E4%B9%B0%E6%B1%89%E5%A0%A1%E9%81%AD%E5%A5%B3%E5%AD%90%E8%B8%A2%E8%B8%B9%E6%AF%8D%E4%BA%B2%E5%8F%91%E5%A3%B0%23) `124.1K 🔥` `NEW`
1. [张凌赫新华社讲述星星的孩子](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E6%96%B0%E5%8D%8E%E7%A4%BE%E8%AE%B2%E8%BF%B0%E6%98%9F%E6%98%9F%E7%9A%84%E5%AD%A9%E5%AD%90%23) `117.1K 🔥` `NEW`
1. [蔡徐坤直播](https://s.weibo.com/weibo?q=%23%E8%94%A1%E5%BE%90%E5%9D%A4%E7%9B%B4%E6%92%AD%23) `109.0K 🔥` `NEW`
1. [特朗普就伊朗问题发表讲话 (Trump speaks on Iran)](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E5%B0%B1%E4%BC%8A%E6%9C%97%E9%97%AE%E9%A2%98%E5%8F%91%E8%A1%A8%E8%AE%B2%E8%AF%9D%23) `108.6K 🔥` `NEW`
1. [又被老祖宗的黄衣服审美硬控了](https://s.weibo.com/weibo?q=%23%E5%8F%88%E8%A2%AB%E8%80%81%E7%A5%96%E5%AE%97%E7%9A%84%E9%BB%84%E8%A1%A3%E6%9C%8D%E5%AE%A1%E7%BE%8E%E7%A1%AC%E6%8E%A7%E4%BA%86%23) `107.6K 🔥` `NEW`
1. [特朗普话音刚落伊朗导弹袭向以色列](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E8%AF%9D%E9%9F%B3%E5%88%9A%E8%90%BD%E4%BC%8A%E6%9C%97%E5%AF%BC%E5%BC%B9%E8%A2%AD%E5%90%91%E4%BB%A5%E8%89%B2%E5%88%97%23) `107.5K 🔥` `NEW`
1. [特朗普称若无协议将袭伊所有发电厂](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E7%A7%B0%E8%8B%A5%E6%97%A0%E5%8D%8F%E8%AE%AE%E5%B0%86%E8%A2%AD%E4%BC%8A%E6%89%80%E6%9C%89%E5%8F%91%E7%94%B5%E5%8E%82%23) `101.0K 🔥` `NEW`
1. [特朗普称未来两三周更猛烈打击伊朗](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E7%A7%B0%E6%9C%AA%E6%9D%A5%E4%B8%A4%E4%B8%89%E5%91%A8%E6%9B%B4%E7%8C%9B%E7%83%88%E6%89%93%E5%87%BB%E4%BC%8A%E6%9C%97%23) `96.1K 🔥` `NEW`
1. [狗 不赖我是张美玲](https://s.weibo.com/weibo?q=%23%E7%8B%97%20%E4%B8%8D%E8%B5%96%E6%88%91%E6%98%AF%E5%BC%A0%E7%BE%8E%E7%8E%B2%23) `94.9K 🔥` `NEW`
1. [妈妈甚至以为家里出了个学霸](https://s.weibo.com/weibo?q=%23%E5%A6%88%E5%A6%88%E7%94%9A%E8%87%B3%E4%BB%A5%E4%B8%BA%E5%AE%B6%E9%87%8C%E5%87%BA%E4%BA%86%E4%B8%AA%E5%AD%A6%E9%9C%B8%23) `93.2K 🔥` `NEW`
1. [伊朗以色列同时大规模互袭](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E4%BB%A5%E8%89%B2%E5%88%97%E5%90%8C%E6%97%B6%E5%A4%A7%E8%A7%84%E6%A8%A1%E4%BA%92%E8%A2%AD%23) `92.9K 🔥` `NEW`
1. [感觉迪丽热巴从头到脚都香香的](https://s.weibo.com/weibo?q=%23%E6%84%9F%E8%A7%89%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E4%BB%8E%E5%A4%B4%E5%88%B0%E8%84%9A%E9%83%BD%E9%A6%99%E9%A6%99%E7%9A%84%23) `92.9K 🔥` `NEW`
1. [A股](https://s.weibo.com/weibo?q=%23A%E8%82%A1%23) `89.9K 🔥` `NEW`
1. [特朗普称美国不需要霍尔木兹海峡 (Trump says US doesn't need Strait of Hormuz)](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E7%A7%B0%E7%BE%8E%E5%9B%BD%E4%B8%8D%E9%9C%80%E8%A6%81%E9%9C%8D%E5%B0%94%E6%9C%A8%E5%85%B9%E6%B5%B7%E5%B3%A1%23) `89.9K 🔥` `NEW`
1. [教体局回应小学要求早上6点40到校](https://s.weibo.com/weibo?q=%23%E6%95%99%E4%BD%93%E5%B1%80%E5%9B%9E%E5%BA%94%E5%B0%8F%E5%AD%A6%E8%A6%81%E6%B1%82%E6%97%A9%E4%B8%8A6%E7%82%B940%E5%88%B0%E6%A0%A1%23) `88.7K 🔥` `NEW`
1. [周杰伦藏了10余年的求婚画面将公开](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%9D%B0%E4%BC%A6%E8%97%8F%E4%BA%8610%E4%BD%99%E5%B9%B4%E7%9A%84%E6%B1%82%E5%A9%9A%E7%94%BB%E9%9D%A2%E5%B0%86%E5%85%AC%E5%BC%80%23) `87.6K 🔥` `NEW`
1. [谢楠发芒果跳刀马](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E6%A5%A0%E5%8F%91%E8%8A%92%E6%9E%9C%E8%B7%B3%E5%88%80%E9%A9%AC%23) `85.4K 🔥` `NEW`
1. [当我以为熬到5点没有影响](https://s.weibo.com/weibo?q=%23%E5%BD%93%E6%88%91%E4%BB%A5%E4%B8%BA%E7%86%AC%E5%88%B05%E7%82%B9%E6%B2%A1%E6%9C%89%E5%BD%B1%E5%93%8D%23) `84.0K 🔥` `NEW`
1. [张雪与湖南卫视立下新承诺](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E4%B8%8E%E6%B9%96%E5%8D%97%E5%8D%AB%E8%A7%86%E7%AB%8B%E4%B8%8B%E6%96%B0%E6%89%BF%E8%AF%BA%23) `74.4K 🔥` `NEW`
1. [张雪师父评价张雪夫妇](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E5%B8%88%E7%88%B6%E8%AF%84%E4%BB%B7%E5%BC%A0%E9%9B%AA%E5%A4%AB%E5%A6%87%23) `73.5K 🔥` `NEW`
1. [陈妍希出院回家](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%A6%8D%E5%B8%8C%E5%87%BA%E9%99%A2%E5%9B%9E%E5%AE%B6%23) `69.0K 🔥` `NEW`
1. [2026款小鹏MONA今日上市 (2026 Xpeng MONA launched today)](https://s.weibo.com/weibo?q=%232026%E6%AC%BE%E5%B0%8F%E9%B9%8FMONA%E4%BB%8A%E6%97%A5%E4%B8%8A%E5%B8%82%23) `507.5K 🔥` `+1486%`
1. [保时捷女销售再夺一季度销冠](https://s.weibo.com/weibo?q=%23%E4%BF%9D%E6%97%B6%E6%8D%B7%E5%A5%B3%E9%94%80%E5%94%AE%E5%86%8D%E5%A4%BA%E4%B8%80%E5%AD%A3%E5%BA%A6%E9%94%80%E5%86%A0%23) `309.3K 🔥` `+186%`
1. [王者荣耀无双](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%80%85%E8%8D%A3%E8%80%80%E6%97%A0%E5%8F%8C%23) `158.9K 🔥` `+92%`
1. [杨紫 没人通知我啊 (Yang Zi, no one informed me)](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%20%E6%B2%A1%E4%BA%BA%E9%80%9A%E7%9F%A5%E6%88%91%E5%95%8A%23) `182.6K 🔥`
1. [孙俪演的生理厌恶太真实了 (The physical disgust played by Sun Li is too real)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E4%BF%AA%E6%BC%94%E7%9A%84%E7%94%9F%E7%90%86%E5%8E%8C%E6%81%B6%E5%A4%AA%E7%9C%9F%E5%AE%9E%E4%BA%86%23) `92.5K 🔥`
1. [收到了去世好友的微信回复 (Received a WeChat reply from a deceased friend)](https://s.weibo.com/weibo?q=%23%E6%94%B6%E5%88%B0%E4%BA%86%E5%8E%BB%E4%B8%96%E5%A5%BD%E5%8F%8B%E7%9A%84%E5%BE%AE%E4%BF%A1%E5%9B%9E%E5%A4%8D%23) `206.6K 🔥` `-55%`
1. [与辉同行卖优思益销售额超千万](https://s.weibo.com/weibo?q=%23%E4%B8%8E%E8%BE%89%E5%90%8C%E8%A1%8C%E5%8D%96%E4%BC%98%E6%80%9D%E7%9B%8A%E9%94%80%E5%94%AE%E9%A2%9D%E8%B6%85%E5%8D%83%E4%B8%87%23) `200.3K 🔥` `-81%`
1. [伊朗10分钟5波导弹袭击以色列](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%9710%E5%88%86%E9%92%9F5%E6%B3%A2%E5%AF%BC%E5%BC%B9%E8%A2%AD%E5%87%BB%E4%BB%A5%E8%89%B2%E5%88%97%23) `123.5K 🔥` `-57%`
1. [以色列遭开战以来最大规模导弹袭击](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E8%89%B2%E5%88%97%E9%81%AD%E5%BC%80%E6%88%98%E4%BB%A5%E6%9D%A5%E6%9C%80%E5%A4%A7%E8%A7%84%E6%A8%A1%E5%AF%BC%E5%BC%B9%E8%A2%AD%E5%87%BB%23) `107.6K 🔥` `-81%`
1. [十五五我们躬身加油干 (On the 15th, let’s work hard)](https://s.weibo.com/weibo?q=%23%E5%8D%81%E4%BA%94%E4%BA%94%E6%88%91%E4%BB%AC%E8%BA%AC%E8%BA%AB%E5%8A%A0%E6%B2%B9%E5%B9%B2%23) `96.9K 🔥` `-83%`
1. [为什么木耳不能直接用水泡 (Why can’t fungus be soaked directly in water?)](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E6%9C%A8%E8%80%B3%E4%B8%8D%E8%83%BD%E7%9B%B4%E6%8E%A5%E7%94%A8%E6%B0%B4%E6%B3%A1%23) `74.9K 🔥` `-31%`
1. [马立奥有妹妹了 (Mario has a sister)](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E7%AB%8B%E5%A5%A5%E6%9C%89%E5%A6%B9%E5%A6%B9%E4%BA%86%23) `72.4K 🔥` `-57%`

Updated at 2026-04-02 10:53:20

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
