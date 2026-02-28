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

1. [丁禹兮MISTINE全球防晒代言人 (Ding Yuxi MISTINE Global Sunscreen Spokesperson)](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A6%B9%E5%85%AEMISTINE%E5%85%A8%E7%90%83%E9%98%B2%E6%99%92%E4%BB%A3%E8%A8%80%E4%BA%BA%23) `907.9K 🔥` `NEW`
1. [赵露思自由点全球品牌代言人](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E9%9C%B2%E6%80%9D%E8%87%AA%E7%94%B1%E7%82%B9%E5%85%A8%E7%90%83%E5%93%81%E7%89%8C%E4%BB%A3%E8%A8%80%E4%BA%BA%23) `546.1K 🔥` `NEW`
1. [以色列对伊朗发动二次袭击](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E8%89%B2%E5%88%97%E5%AF%B9%E4%BC%8A%E6%9C%97%E5%8F%91%E5%8A%A8%E4%BA%8C%E6%AC%A1%E8%A2%AD%E5%87%BB%23) `374.5K 🔥` `NEW`
1. [以色列宣布全国紧急状态](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E8%89%B2%E5%88%97%E5%AE%A3%E5%B8%83%E5%85%A8%E5%9B%BD%E7%B4%A7%E6%80%A5%E7%8A%B6%E6%80%81%23) `342.3K 🔥` `NEW`
1. [上海气功研究所招博士](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E6%B0%94%E5%8A%9F%E7%A0%94%E7%A9%B6%E6%89%80%E6%8B%9B%E5%8D%9A%E5%A3%AB%23) `253.5K 🔥` `NEW`
1. [关晓彤漂亮得像洋娃娃一样](https://s.weibo.com/weibo?q=%23%E5%85%B3%E6%99%93%E5%BD%A4%E6%BC%82%E4%BA%AE%E5%BE%97%E5%83%8F%E6%B4%8B%E5%A8%83%E5%A8%83%E4%B8%80%E6%A0%B7%23) `211.0K 🔥` `NEW`
1. [免费体检后花了20万报告竟是假的](https://s.weibo.com/weibo?q=%23%E5%85%8D%E8%B4%B9%E4%BD%93%E6%A3%80%E5%90%8E%E8%8A%B1%E4%BA%8620%E4%B8%87%E6%8A%A5%E5%91%8A%E7%AB%9F%E6%98%AF%E5%81%87%E7%9A%84%23) `205.2K 🔥` `NEW`
1. [以色列袭击伊朗现场画面](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E8%89%B2%E5%88%97%E8%A2%AD%E5%87%BB%E4%BC%8A%E6%9C%97%E7%8E%B0%E5%9C%BA%E7%94%BB%E9%9D%A2%23) `204.8K 🔥` `NEW`
1. [高速避障能不能猛打方向](https://s.weibo.com/weibo?q=%23%E9%AB%98%E9%80%9F%E9%81%BF%E9%9A%9C%E8%83%BD%E4%B8%8D%E8%83%BD%E7%8C%9B%E6%89%93%E6%96%B9%E5%90%91%23) `204.6K 🔥` `NEW`
1. [林诗栋2比4F勒布伦](https://s.weibo.com/weibo?q=%23%E6%9E%97%E8%AF%97%E6%A0%8B2%E6%AF%944F%E5%8B%92%E5%B8%83%E4%BC%A6%23) `167.7K 🔥` `NEW`
1. [王皓解释向鹏为何无缘世界杯 (Wang Hao explains why Xiang Peng missed the World Cup)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E7%9A%93%E8%A7%A3%E9%87%8A%E5%90%91%E9%B9%8F%E4%B8%BA%E4%BD%95%E6%97%A0%E7%BC%98%E4%B8%96%E7%95%8C%E6%9D%AF%23) `166.2K 🔥` `NEW`
1. [不同房的婚姻正常吗](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E5%90%8C%E6%88%BF%E7%9A%84%E5%A9%9A%E5%A7%BB%E6%AD%A3%E5%B8%B8%E5%90%97%23) `138.8K 🔥` `NEW`
1. [老人为摘花竟把婴儿独自留在快车道上](https://s.weibo.com/weibo?q=%23%E8%80%81%E4%BA%BA%E4%B8%BA%E6%91%98%E8%8A%B1%E7%AB%9F%E6%8A%8A%E5%A9%B4%E5%84%BF%E7%8B%AC%E8%87%AA%E7%95%99%E5%9C%A8%E5%BF%AB%E8%BD%A6%E9%81%93%E4%B8%8A%23) `137.9K 🔥` `NEW`
1. [刘晓艳曾因婆媳关系非常痛苦](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%99%93%E8%89%B3%E6%9B%BE%E5%9B%A0%E5%A9%86%E5%AA%B3%E5%85%B3%E7%B3%BB%E9%9D%9E%E5%B8%B8%E7%97%9B%E8%8B%A6%23) `127.8K 🔥` `NEW`
1. [王曼昱希望张本美和早日康复](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%9B%BC%E6%98%B1%E5%B8%8C%E6%9C%9B%E5%BC%A0%E6%9C%AC%E7%BE%8E%E5%92%8C%E6%97%A9%E6%97%A5%E5%BA%B7%E5%A4%8D%23) `123.3K 🔥` `NEW`
1. [以色列宣布袭击伊朗](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E8%89%B2%E5%88%97%E5%AE%A3%E5%B8%83%E8%A2%AD%E5%87%BB%E4%BC%8A%E6%9C%97%23) `8.8M 🔥` `+437%`
1. [伊朗首都发生爆炸 (Explosion in Iranian capital)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E9%A6%96%E9%83%BD%E5%8F%91%E7%94%9F%E7%88%86%E7%82%B8%23) `3.3M 🔥` `+98%`
1. [周鸿祎揭美伪造陈志案证据内幕](https://s.weibo.com/weibo?q=%23%E5%91%A8%E9%B8%BF%E7%A5%8E%E6%8F%AD%E7%BE%8E%E4%BC%AA%E9%80%A0%E9%99%88%E5%BF%97%E6%A1%88%E8%AF%81%E6%8D%AE%E5%86%85%E5%B9%95%23) `1.6M 🔥` `+41%`
1. [德国总理从中国回去后急了](https://s.weibo.com/weibo?q=%23%E5%BE%B7%E5%9B%BD%E6%80%BB%E7%90%86%E4%BB%8E%E4%B8%AD%E5%9B%BD%E5%9B%9E%E5%8E%BB%E5%90%8E%E6%80%A5%E4%BA%86%23) `907.9K 🔥` `+56%`
1. [以色列全境响起警报](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E8%89%B2%E5%88%97%E5%85%A8%E5%A2%83%E5%93%8D%E8%B5%B7%E8%AD%A6%E6%8A%A5%23) `651.9K 🔥` `+74%`
1. [一点点回应](https://s.weibo.com/weibo?q=%23%E4%B8%80%E7%82%B9%E7%82%B9%E5%9B%9E%E5%BA%94%23) `645.4K 🔥` `+48%`
1. [曝迪丽热巴签约天伊娱乐 (It is revealed that Dilireba signed a contract with Tianyi Entertainment)](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E7%AD%BE%E7%BA%A6%E5%A4%A9%E4%BC%8A%E5%A8%B1%E4%B9%90%23) `391.4K 🔥` `+29%`
1. [迪丽热巴现在人还在飞机上](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E7%8E%B0%E5%9C%A8%E4%BA%BA%E8%BF%98%E5%9C%A8%E9%A3%9E%E6%9C%BA%E4%B8%8A%23) `337.9K 🔥` `+41%`
1. [向太发向佐向佑儿时视频](https://s.weibo.com/weibo?q=%23%E5%90%91%E5%A4%AA%E5%8F%91%E5%90%91%E4%BD%90%E5%90%91%E4%BD%91%E5%84%BF%E6%97%B6%E8%A7%86%E9%A2%91%23) `331.8K 🔥` `+193%`
1. [金贤重回应殴打前女友](https://s.weibo.com/weibo?q=%23%E9%87%91%E8%B4%A4%E9%87%8D%E5%9B%9E%E5%BA%94%E6%AE%B4%E6%89%93%E5%89%8D%E5%A5%B3%E5%8F%8B%23) `251.5K 🔥` `+50%`
1. [伊朗同意不拥有可制造核弹的核材料](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%90%8C%E6%84%8F%E4%B8%8D%E6%8B%A5%E6%9C%89%E5%8F%AF%E5%88%B6%E9%80%A0%E6%A0%B8%E5%BC%B9%E7%9A%84%E6%A0%B8%E6%9D%90%E6%96%99%23) `226.5K 🔥` `+26%`
1. [金饰价涨到1625元](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%A5%B0%E4%BB%B7%E6%B6%A8%E5%88%B01625%E5%85%83%23) `177.3K 🔥` `+49%`
1. [久坐的人喝咖啡受益更大](https://s.weibo.com/weibo?q=%23%E4%B9%85%E5%9D%90%E7%9A%84%E4%BA%BA%E5%96%9D%E5%92%96%E5%95%A1%E5%8F%97%E7%9B%8A%E6%9B%B4%E5%A4%A7%23) `141.1K 🔥` `+22%`
1. [在伊华人讲述伊朗首都现状](https://s.weibo.com/weibo?q=%23%E5%9C%A8%E4%BC%8A%E5%8D%8E%E4%BA%BA%E8%AE%B2%E8%BF%B0%E4%BC%8A%E6%9C%97%E9%A6%96%E9%83%BD%E7%8E%B0%E7%8A%B6%23) `137.5K 🔥` `+32%`
1. [黄子韬因喘不上气暂停节目录制](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%AD%90%E9%9F%AC%E5%9B%A0%E5%96%98%E4%B8%8D%E4%B8%8A%E6%B0%94%E6%9A%82%E5%81%9C%E8%8A%82%E7%9B%AE%E5%BD%95%E5%88%B6%23) `363.0K 🔥`
1. [范丞丞方说不认识没交集](https://s.weibo.com/weibo?q=%23%E8%8C%83%E4%B8%9E%E4%B8%9E%E6%96%B9%E8%AF%B4%E4%B8%8D%E8%AE%A4%E8%AF%86%E6%B2%A1%E4%BA%A4%E9%9B%86%23) `358.3K 🔥`
1. [2026考研国家线发布 (2026 Postgraduate Entrance Examination National Line Released)](https://s.weibo.com/weibo?q=%232026%E8%80%83%E7%A0%94%E5%9B%BD%E5%AE%B6%E7%BA%BF%E5%8F%91%E5%B8%83%23) `318.4K 🔥`
1. [婚后拒同房男方讨说法已涉嫌违法 (It is illegal to refuse to have sex with a man after marriage.)](https://s.weibo.com/weibo?q=%23%E5%A9%9A%E5%90%8E%E6%8B%92%E5%90%8C%E6%88%BF%E7%94%B7%E6%96%B9%E8%AE%A8%E8%AF%B4%E6%B3%95%E5%B7%B2%E6%B6%89%E5%AB%8C%E8%BF%9D%E6%B3%95%23) `237.7K 🔥`
1. [巴厘岛发现人体肢解遗骸 (Dismembered human remains found in Bali)](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E5%8E%98%E5%B2%9B%E5%8F%91%E7%8E%B0%E4%BA%BA%E4%BD%93%E8%82%A2%E8%A7%A3%E9%81%97%E9%AA%B8%23) `223.4K 🔥`
1. [考研下岸了 (The postgraduate entrance examination has ended)](https://s.weibo.com/weibo?q=%23%E8%80%83%E7%A0%94%E4%B8%8B%E5%B2%B8%E4%BA%86%23) `207.4K 🔥`
1. [Angelababy37岁了 (Angelababy is 37 years old)](https://s.weibo.com/weibo?q=%23Angelababy37%E5%B2%81%E4%BA%86%23) `204.5K 🔥`
1. [女子离家17天马桶狂冲200吨水 (Woman's toilet flushed 200 tons of water 17 days after leaving home)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E7%A6%BB%E5%AE%B617%E5%A4%A9%E9%A9%AC%E6%A1%B6%E7%8B%82%E5%86%B2200%E5%90%A8%E6%B0%B4%23) `200.2K 🔥`
1. [周大福镶金发夹卖2080元](https://s.weibo.com/weibo?q=%23%E5%91%A8%E5%A4%A7%E7%A6%8F%E9%95%B6%E9%87%91%E5%8F%91%E5%A4%B9%E5%8D%962080%E5%85%83%23) `193.3K 🔥`
1. [造谣王一博最高可判7年](https://s.weibo.com/weibo?q=%23%E9%80%A0%E8%B0%A3%E7%8E%8B%E4%B8%80%E5%8D%9A%E6%9C%80%E9%AB%98%E5%8F%AF%E5%88%A47%E5%B9%B4%23) `132.1K 🔥`
1. [日本警察竟偷拍女性遗体](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E8%AD%A6%E5%AF%9F%E7%AB%9F%E5%81%B7%E6%8B%8D%E5%A5%B3%E6%80%A7%E9%81%97%E4%BD%93%23) `125.8K 🔥`
1. [蔡磊已进入渐冻症疾病的终末期 (Cai Lei has entered the terminal stage of ALS disease)](https://s.weibo.com/weibo?q=%23%E8%94%A1%E7%A3%8A%E5%B7%B2%E8%BF%9B%E5%85%A5%E6%B8%90%E5%86%BB%E7%97%87%E7%96%BE%E7%97%85%E7%9A%84%E7%BB%88%E6%9C%AB%E6%9C%9F%23) `543.0K 🔥` `-42%`
1. [山姆部分产品大降价 (Some Sam products are greatly reduced in price)](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E5%A7%86%E9%83%A8%E5%88%86%E4%BA%A7%E5%93%81%E5%A4%A7%E9%99%8D%E4%BB%B7%23) `510.5K 🔥` `-27%`
1. [谷爱凌机场过安检自带金属buff](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E6%9C%BA%E5%9C%BA%E8%BF%87%E5%AE%89%E6%A3%80%E8%87%AA%E5%B8%A6%E9%87%91%E5%B1%9Ebuff%23) `431.6K 🔥` `-22%`
1. [跑男](https://s.weibo.com/weibo?q=%23%E8%B7%91%E7%94%B7%23) `397.6K 🔥` `-42%`
1. [花海退役仪式](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E6%B5%B7%E9%80%80%E5%BD%B9%E4%BB%AA%E5%BC%8F%23) `268.3K 🔥` `-25%`
1. [第一个发现这个机位的是天才 (The first person to discover this location was a genius)](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E4%B8%AA%E5%8F%91%E7%8E%B0%E8%BF%99%E4%B8%AA%E6%9C%BA%E4%BD%8D%E7%9A%84%E6%98%AF%E5%A4%A9%E6%89%8D%23) `195.7K 🔥` `-33%`
1. [李诚儒吐槽繁花的商战都太假 (Li Chengru complained that Fanhua’s business war is too fake)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E8%AF%9A%E5%84%92%E5%90%90%E6%A7%BD%E7%B9%81%E8%8A%B1%E7%9A%84%E5%95%86%E6%88%98%E9%83%BD%E5%A4%AA%E5%81%87%23) `165.9K 🔥` `-46%`
1. [小米超跑](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E8%B6%85%E8%B7%91%23) `133.7K 🔥` `-22%`
1. [男子劝朋友别醉驾走后对方车祸身亡 (Man dies in car accident after advising friend not to drive drunk)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%8A%9D%E6%9C%8B%E5%8F%8B%E5%88%AB%E9%86%89%E9%A9%BE%E8%B5%B0%E5%90%8E%E5%AF%B9%E6%96%B9%E8%BD%A6%E7%A5%B8%E8%BA%AB%E4%BA%A1%23) `133.5K 🔥` `-25%`
1. [王健林20亿售出上海项目](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%81%A5%E6%9E%9720%E4%BA%BF%E5%94%AE%E5%87%BA%E4%B8%8A%E6%B5%B7%E9%A1%B9%E7%9B%AE%23) `132.0K 🔥` `-28%`
1. [金花婆婆说刘晓庆刚出道被所有人欺负](https://s.weibo.com/weibo?q=%23%E9%87%91%E8%8A%B1%E5%A9%86%E5%A9%86%E8%AF%B4%E5%88%98%E6%99%93%E5%BA%86%E5%88%9A%E5%87%BA%E9%81%93%E8%A2%AB%E6%89%80%E6%9C%89%E4%BA%BA%E6%AC%BA%E8%B4%9F%23) `125.3K 🔥` `-42%`
1. [林诗栋vsF勒布伦 (Lin Shidong vsF Lebrun)](https://s.weibo.com/weibo?q=%23%E6%9E%97%E8%AF%97%E6%A0%8BvsF%E5%8B%92%E5%B8%83%E4%BC%A6%23) `116.6K 🔥` `-35%`

Updated at 2026-02-28 15:03:30

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
