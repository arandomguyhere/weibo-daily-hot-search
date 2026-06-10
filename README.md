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

1. [花少8确定阵容 (Hua Shao 8 confirms the lineup)](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%B0%918%E7%A1%AE%E5%AE%9A%E9%98%B5%E5%AE%B9%23) `1.5M 🔥` `NEW`
1. [马頔在京东赢赢赢赢赢麻了](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E9%A0%94%E5%9C%A8%E4%BA%AC%E4%B8%9C%E8%B5%A2%E8%B5%A2%E8%B5%A2%E8%B5%A2%E8%B5%A2%E9%BA%BB%E4%BA%86%23) `821.4K 🔥` `NEW`
1. [美军对伊朗发动报复性打击](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%86%9B%E5%AF%B9%E4%BC%8A%E6%9C%97%E5%8F%91%E5%8A%A8%E6%8A%A5%E5%A4%8D%E6%80%A7%E6%89%93%E5%87%BB%23) `706.4K 🔥` `NEW`
1. [世界杯](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%23) `285.9K 🔥` `NEW`
1. [全新一代奥迪Q7正式亮相](https://s.weibo.com/weibo?q=%23%E5%85%A8%E6%96%B0%E4%B8%80%E4%BB%A3%E5%A5%A5%E8%BF%AAQ7%E6%AD%A3%E5%BC%8F%E4%BA%AE%E7%9B%B8%23) `285.0K 🔥` `NEW`
1. [白鹿将全平台告黑](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E5%B0%86%E5%85%A8%E5%B9%B3%E5%8F%B0%E5%91%8A%E9%BB%91%23) `284.5K 🔥` `NEW`
1. [高考真是一场巨大的后知后觉](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%80%83%E7%9C%9F%E6%98%AF%E4%B8%80%E5%9C%BA%E5%B7%A8%E5%A4%A7%E7%9A%84%E5%90%8E%E7%9F%A5%E5%90%8E%E8%A7%89%23) `284.1K 🔥` `NEW`
1. [海淀区文旅局回应谢娜演唱会争议](https://s.weibo.com/weibo?q=%23%E6%B5%B7%E6%B7%80%E5%8C%BA%E6%96%87%E6%97%85%E5%B1%80%E5%9B%9E%E5%BA%94%E8%B0%A2%E5%A8%9C%E6%BC%94%E5%94%B1%E4%BC%9A%E4%BA%89%E8%AE%AE%23) `283.3K 🔥` `NEW`
1. [主持人演员都在开演唱会](https://s.weibo.com/weibo?q=%23%E4%B8%BB%E6%8C%81%E4%BA%BA%E6%BC%94%E5%91%98%E9%83%BD%E5%9C%A8%E5%BC%80%E6%BC%94%E5%94%B1%E4%BC%9A%23) `283.0K 🔥` `NEW`
1. [白鹿很忐忑问朋友莫离好看吗](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E5%BE%88%E5%BF%90%E5%BF%91%E9%97%AE%E6%9C%8B%E5%8F%8B%E8%8E%AB%E7%A6%BB%E5%A5%BD%E7%9C%8B%E5%90%97%23) `281.5K 🔥` `NEW`
1. [黄金 (gold)](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%23) `280.6K 🔥` `NEW`
1. [宋亚轩第一次美甲](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E4%BA%9A%E8%BD%A9%E7%AC%AC%E4%B8%80%E6%AC%A1%E7%BE%8E%E7%94%B2%23) `279.9K 🔥` `NEW`
1. [特朗普称将回应伊朗击落美军直升机](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E7%A7%B0%E5%B0%86%E5%9B%9E%E5%BA%94%E4%BC%8A%E6%9C%97%E5%87%BB%E8%90%BD%E7%BE%8E%E5%86%9B%E7%9B%B4%E5%8D%87%E6%9C%BA%23) `278.4K 🔥` `NEW`
1. [金价大跌女子狂卖2斤金条](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E5%A4%A7%E8%B7%8C%E5%A5%B3%E5%AD%90%E7%8B%82%E5%8D%962%E6%96%A4%E9%87%91%E6%9D%A1%23) `211.7K 🔥` `NEW`
1. [WTT萨格勒布站](https://s.weibo.com/weibo?q=%23WTT%E8%90%A8%E6%A0%BC%E5%8B%92%E5%B8%83%E7%AB%99%23) `158.7K 🔥` `NEW`
1. [两人骑车在天桥互不相让僵持到暴雨](https://s.weibo.com/weibo?q=%23%E4%B8%A4%E4%BA%BA%E9%AA%91%E8%BD%A6%E5%9C%A8%E5%A4%A9%E6%A1%A5%E4%BA%92%E4%B8%8D%E7%9B%B8%E8%AE%A9%E5%83%B5%E6%8C%81%E5%88%B0%E6%9A%B4%E9%9B%A8%23) `158.6K 🔥` `NEW`
1. [梁家辉让杨幂调整站位](https://s.weibo.com/weibo?q=%23%E6%A2%81%E5%AE%B6%E8%BE%89%E8%AE%A9%E6%9D%A8%E5%B9%82%E8%B0%83%E6%95%B4%E7%AB%99%E4%BD%8D%23) `142.5K 🔥` `NEW`
1. [大姨买充电宝被问要1万还是2万的](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%A7%A8%E4%B9%B0%E5%85%85%E7%94%B5%E5%AE%9D%E8%A2%AB%E9%97%AE%E8%A6%811%E4%B8%87%E8%BF%98%E6%98%AF2%E4%B8%87%E7%9A%84%23) `127.9K 🔥` `NEW`
1. [福州火灾](https://s.weibo.com/weibo?q=%23%E7%A6%8F%E5%B7%9E%E7%81%AB%E7%81%BE%23) `115.8K 🔥` `NEW`
1. [女孩去医院看牙被建议做手术后毁容](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%A9%E5%8E%BB%E5%8C%BB%E9%99%A2%E7%9C%8B%E7%89%99%E8%A2%AB%E5%BB%BA%E8%AE%AE%E5%81%9A%E6%89%8B%E6%9C%AF%E5%90%8E%E6%AF%81%E5%AE%B9%23) `114.9K 🔥` `NEW`
1. [裴勇俊一家与朴信惠一家同游新加坡 (Bae Yong-joon and his family traveled to Singapore with Park Shin-hye's family)](https://s.weibo.com/weibo?q=%23%E8%A3%B4%E5%8B%87%E4%BF%8A%E4%B8%80%E5%AE%B6%E4%B8%8E%E6%9C%B4%E4%BF%A1%E6%83%A0%E4%B8%80%E5%AE%B6%E5%90%8C%E6%B8%B8%E6%96%B0%E5%8A%A0%E5%9D%A1%23) `106.8K 🔥` `NEW`
1. [2026高考结束](https://s.weibo.com/weibo?q=%232026%E9%AB%98%E8%80%83%E7%BB%93%E6%9D%9F%23) `96.5K 🔥` `NEW`
1. [周冬雨参加花少8](https://s.weibo.com/weibo?q=%23%E5%91%A8%E5%86%AC%E9%9B%A8%E5%8F%82%E5%8A%A0%E8%8A%B1%E5%B0%918%23) `92.8K 🔥` `NEW`
1. [黄灿灿穿xs码也大了](https://s.weibo.com/weibo?q=%23%E9%BB%84%E7%81%BF%E7%81%BF%E7%A9%BFxs%E7%A0%81%E4%B9%9F%E5%A4%A7%E4%BA%86%23) `86.2K 🔥` `NEW`
1. [我国部分地区或迎史上最热夏天](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%9B%BD%E9%83%A8%E5%88%86%E5%9C%B0%E5%8C%BA%E6%88%96%E8%BF%8E%E5%8F%B2%E4%B8%8A%E6%9C%80%E7%83%AD%E5%A4%8F%E5%A4%A9%23) `86.0K 🔥` `NEW`
1. [李昀锐邢武决定复读](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%98%80%E9%94%90%E9%82%A2%E6%AD%A6%E5%86%B3%E5%AE%9A%E5%A4%8D%E8%AF%BB%23) `80.9K 🔥` `NEW`
1. [英伟达北大世界模型对决](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E4%BC%9F%E8%BE%BE%E5%8C%97%E5%A4%A7%E4%B8%96%E7%95%8C%E6%A8%A1%E5%9E%8B%E5%AF%B9%E5%86%B3%23) `79.7K 🔥` `NEW`
1. [女子称移动159元套餐比不上39元套餐](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E7%A7%B0%E7%A7%BB%E5%8A%A8159%E5%85%83%E5%A5%97%E9%A4%90%E6%AF%94%E4%B8%8D%E4%B8%8A39%E5%85%83%E5%A5%97%E9%A4%90%23) `918.0K 🔥` `+731%`
1. [视频感受朝方欢送仪式热烈氛围 (Video to feel the warm atmosphere of North Korea's farewell ceremony)](https://s.weibo.com/weibo?q=%23%E8%A7%86%E9%A2%91%E6%84%9F%E5%8F%97%E6%9C%9D%E6%96%B9%E6%AC%A2%E9%80%81%E4%BB%AA%E5%BC%8F%E7%83%AD%E7%83%88%E6%B0%9B%E5%9B%B4%23) `823.3K 🔥` `+107%`
1. [鹅腿阿姨卖的是鸭腿](https://s.weibo.com/weibo?q=%23%E9%B9%85%E8%85%BF%E9%98%BF%E5%A7%A8%E5%8D%96%E7%9A%84%E6%98%AF%E9%B8%AD%E8%85%BF%23) `814.5K 🔥` `+26%`
1. [谢娜演唱会主办方回应](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%A8%9C%E6%BC%94%E5%94%B1%E4%BC%9A%E4%B8%BB%E5%8A%9E%E6%96%B9%E5%9B%9E%E5%BA%94%23) `781.4K 🔥` `+99%`
1. [美股 (US stocks)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E8%82%A1%23) `438.8K 🔥` `+50%`
1. [哈啰单车被曝曾欲干掉竞品关键人](https://s.weibo.com/weibo?q=%23%E5%93%88%E5%95%B0%E5%8D%95%E8%BD%A6%E8%A2%AB%E6%9B%9D%E6%9B%BE%E6%AC%B2%E5%B9%B2%E6%8E%89%E7%AB%9E%E5%93%81%E5%85%B3%E9%94%AE%E4%BA%BA%23) `285.5K 🔥` `+655%`
1. [小伙月薪3000签1850万购房合同](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E4%BC%99%E6%9C%88%E8%96%AA3000%E7%AD%BE1850%E4%B8%87%E8%B4%AD%E6%88%BF%E5%90%88%E5%90%8C%23) `281.2K 🔥` `+164%`
1. [谷歌英伟达](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E6%AD%8C%E8%8B%B1%E4%BC%9F%E8%BE%BE%23) `279.1K 🔥` `+504%`
1. [上官正义曝残障老人无薪工作被威胁](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E5%AE%98%E6%AD%A3%E4%B9%89%E6%9B%9D%E6%AE%8B%E9%9A%9C%E8%80%81%E4%BA%BA%E6%97%A0%E8%96%AA%E5%B7%A5%E4%BD%9C%E8%A2%AB%E5%A8%81%E8%83%81%23) `278.8K 🔥` `+396%`
1. [一个模仿印度人制作饮料的视频火了 (A video of imitating Indians making drinks has gone viral)](https://s.weibo.com/weibo?q=%23%E4%B8%80%E4%B8%AA%E6%A8%A1%E4%BB%BF%E5%8D%B0%E5%BA%A6%E4%BA%BA%E5%88%B6%E4%BD%9C%E9%A5%AE%E6%96%99%E7%9A%84%E8%A7%86%E9%A2%91%E7%81%AB%E4%BA%86%23) `257.5K 🔥` `+71%`
1. [Prada群星大合影](https://s.weibo.com/weibo?q=%23Prada%E7%BE%A4%E6%98%9F%E5%A4%A7%E5%90%88%E5%BD%B1%23) `161.3K 🔥` `+107%`
1. [莫离热度像跳楼机 (Mo Li is as hot as a jumping machine)](https://s.weibo.com/weibo?q=%23%E8%8E%AB%E7%A6%BB%E7%83%AD%E5%BA%A6%E5%83%8F%E8%B7%B3%E6%A5%BC%E6%9C%BA%23) `159.3K 🔥` `+88%`
1. [瘦的真相就两个字扛饿](https://s.weibo.com/weibo?q=%23%E7%98%A6%E7%9A%84%E7%9C%9F%E7%9B%B8%E5%B0%B1%E4%B8%A4%E4%B8%AA%E5%AD%97%E6%89%9B%E9%A5%BF%23) `146.5K 🔥` `+49%`
1. [任天堂直面会](https://s.weibo.com/weibo?q=%23%E4%BB%BB%E5%A4%A9%E5%A0%82%E7%9B%B4%E9%9D%A2%E4%BC%9A%23) `115.1K 🔥` `+518%`
1. [周翊然官配发力了 (Zhou Yiran's official assignment has shown strength)](https://s.weibo.com/weibo?q=%23%E5%91%A8%E7%BF%8A%E7%84%B6%E5%AE%98%E9%85%8D%E5%8F%91%E5%8A%9B%E4%BA%86%23) `92.9K 🔥` `+92%`
1. [因为表情管理良好从而躲过一劫](https://s.weibo.com/weibo?q=%23%E5%9B%A0%E4%B8%BA%E8%A1%A8%E6%83%85%E7%AE%A1%E7%90%86%E8%89%AF%E5%A5%BD%E4%BB%8E%E8%80%8C%E8%BA%B2%E8%BF%87%E4%B8%80%E5%8A%AB%23) `86.7K 🔥` `+117%`
1. [高考后的仪式感是购买电子三件套](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%80%83%E5%90%8E%E7%9A%84%E4%BB%AA%E5%BC%8F%E6%84%9F%E6%98%AF%E8%B4%AD%E4%B9%B0%E7%94%B5%E5%AD%90%E4%B8%89%E4%BB%B6%E5%A5%97%23) `80.2K 🔥` `+112%`
1. [3岁女童10楼坠亡亲戚赔91万 (Relatives of 3-year-old girl who fell from the 10th floor and died were compensated 910,000 yuan)](https://s.weibo.com/weibo?q=%233%E5%B2%81%E5%A5%B3%E7%AB%A510%E6%A5%BC%E5%9D%A0%E4%BA%A1%E4%BA%B2%E6%88%9A%E8%B5%9491%E4%B8%87%23) `282.4K 🔥`
1. [韦雪整容把脸整歪了](https://s.weibo.com/weibo?q=%23%E9%9F%A6%E9%9B%AA%E6%95%B4%E5%AE%B9%E6%8A%8A%E8%84%B8%E6%95%B4%E6%AD%AA%E4%BA%86%23) `218.8K 🔥`
1. [言语利他 行动利己](https://s.weibo.com/weibo?q=%23%E8%A8%80%E8%AF%AD%E5%88%A9%E4%BB%96%20%E8%A1%8C%E5%8A%A8%E5%88%A9%E5%B7%B1%23) `89.9K 🔥`
1. [新手机回避症](https://s.weibo.com/weibo?q=%23%E6%96%B0%E6%89%8B%E6%9C%BA%E5%9B%9E%E9%81%BF%E7%97%87%23) `259.1K 🔥` `-36%`
1. [陈小纭大腿小腿几乎一样细](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%B0%8F%E7%BA%AD%E5%A4%A7%E8%85%BF%E5%B0%8F%E8%85%BF%E5%87%A0%E4%B9%8E%E4%B8%80%E6%A0%B7%E7%BB%86%23) `252.8K 🔥` `-21%`
1. [傅子纯病逝前在巴厘岛已有征兆 (There were signs of Fu Zichun's illness in Bali before his death)](https://s.weibo.com/weibo?q=%23%E5%82%85%E5%AD%90%E7%BA%AF%E7%97%85%E9%80%9D%E5%89%8D%E5%9C%A8%E5%B7%B4%E5%8E%98%E5%B2%9B%E5%B7%B2%E6%9C%89%E5%BE%81%E5%85%86%23) `85.9K 🔥` `-55%`

Updated at 2026-06-10 08:00:26

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
