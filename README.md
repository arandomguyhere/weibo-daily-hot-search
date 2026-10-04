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

1. [苹果将为受影响用户免费更换新机](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C%E5%B0%86%E4%B8%BA%E5%8F%97%E5%BD%B1%E5%93%8D%E7%94%A8%E6%88%B7%E5%85%8D%E8%B4%B9%E6%9B%B4%E6%8D%A2%E6%96%B0%E6%9C%BA%23) `1.1M 🔥` `NEW`
1. [亲戚不帮忙可能因为你拎不清](https://s.weibo.com/weibo?q=%23%E4%BA%B2%E6%88%9A%E4%B8%8D%E5%B8%AE%E5%BF%99%E5%8F%AF%E8%83%BD%E5%9B%A0%E4%B8%BA%E4%BD%A0%E6%8B%8E%E4%B8%8D%E6%B8%85%23) `803.6K 🔥` `NEW`
1. [国庆黄金周释放文旅消费活力](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E5%BA%86%E9%BB%84%E9%87%91%E5%91%A8%E9%87%8A%E6%94%BE%E6%96%87%E6%97%85%E6%B6%88%E8%B4%B9%E6%B4%BB%E5%8A%9B%23) `663.1K 🔥` `NEW`
1. [徐良演唱会救活了即将倒闭的面包厂](https://s.weibo.com/weibo?q=%23%E5%BE%90%E8%89%AF%E6%BC%94%E5%94%B1%E4%BC%9A%E6%95%91%E6%B4%BB%E4%BA%86%E5%8D%B3%E5%B0%86%E5%80%92%E9%97%AD%E7%9A%84%E9%9D%A2%E5%8C%85%E5%8E%82%23) `662.8K 🔥` `NEW`
1. [小沈阳夫妇电影为何能实现票房逆袭](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E6%B2%88%E9%98%B3%E5%A4%AB%E5%A6%87%E7%94%B5%E5%BD%B1%E4%B8%BA%E4%BD%95%E8%83%BD%E5%AE%9E%E7%8E%B0%E7%A5%A8%E6%88%BF%E9%80%86%E8%A2%AD%23) `364.2K 🔥` `NEW`
1. [成都天价回锅肉3片卖105](https://s.weibo.com/weibo?q=%23%E6%88%90%E9%83%BD%E5%A4%A9%E4%BB%B7%E5%9B%9E%E9%94%85%E8%82%893%E7%89%87%E5%8D%96105%23) `342.9K 🔥` `NEW`
1. [魏大勋因为两天就够卖了](https://s.weibo.com/weibo?q=%23%E9%AD%8F%E5%A4%A7%E5%8B%8B%E5%9B%A0%E4%B8%BA%E4%B8%A4%E5%A4%A9%E5%B0%B1%E5%A4%9F%E5%8D%96%E4%BA%86%23) `332.7K 🔥` `NEW`
1. [刘学义做的菜都是谭松韵爱吃的](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AD%A6%E4%B9%89%E5%81%9A%E7%9A%84%E8%8F%9C%E9%83%BD%E6%98%AF%E8%B0%AD%E6%9D%BE%E9%9F%B5%E7%88%B1%E5%90%83%E7%9A%84%23) `250.9K 🔥` `NEW`
1. [她的原唱是刘宇宁](https://s.weibo.com/weibo?q=%23%E5%A5%B9%E7%9A%84%E5%8E%9F%E5%94%B1%E6%98%AF%E5%88%98%E5%AE%87%E5%AE%81%23) `181.9K 🔥` `NEW`
1. [葡萄牙官方晒B费谈C罗视频](https://s.weibo.com/weibo?q=%23%E8%91%A1%E8%90%84%E7%89%99%E5%AE%98%E6%96%B9%E6%99%92B%E8%B4%B9%E8%B0%88C%E7%BD%97%E8%A7%86%E9%A2%91%23) `149.7K 🔥` `NEW`
1. [原来胖东来也不是双休](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E8%83%96%E4%B8%9C%E6%9D%A5%E4%B9%9F%E4%B8%8D%E6%98%AF%E5%8F%8C%E4%BC%91%23) `148.0K 🔥` `NEW`
1. [迪士尼当年为啥选上海不选北京](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E5%A3%AB%E5%B0%BC%E5%BD%93%E5%B9%B4%E4%B8%BA%E5%95%A5%E9%80%89%E4%B8%8A%E6%B5%B7%E4%B8%8D%E9%80%89%E5%8C%97%E4%BA%AC%23) `147.7K 🔥` `NEW`
1. [林锦岐当面烧毁沈嘉兰全部证物](https://s.weibo.com/weibo?q=%23%E6%9E%97%E9%94%A6%E5%B2%90%E5%BD%93%E9%9D%A2%E7%83%A7%E6%AF%81%E6%B2%88%E5%98%89%E5%85%B0%E5%85%A8%E9%83%A8%E8%AF%81%E7%89%A9%23) `128.0K 🔥` `NEW`
1. [披荆斩棘五公队长](https://s.weibo.com/weibo?q=%23%E6%8A%AB%E8%8D%86%E6%96%A9%E6%A3%98%E4%BA%94%E5%85%AC%E9%98%9F%E9%95%BF%23) `127.9K 🔥` `NEW`
1. [张朝阳被称学历最高大佬](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%9D%E9%98%B3%E8%A2%AB%E7%A7%B0%E5%AD%A6%E5%8E%86%E6%9C%80%E9%AB%98%E5%A4%A7%E4%BD%AC%23) `127.4K 🔥` `NEW`
1. [内耗小姐和万能先生](https://s.weibo.com/weibo?q=%23%E5%86%85%E8%80%97%E5%B0%8F%E5%A7%90%E5%92%8C%E4%B8%87%E8%83%BD%E5%85%88%E7%94%9F%23) `126.9K 🔥` `NEW`
1. [郭晓东淘汰后唱了最好听的一个舞台](https://s.weibo.com/weibo?q=%23%E9%83%AD%E6%99%93%E4%B8%9C%E6%B7%98%E6%B1%B0%E5%90%8E%E5%94%B1%E4%BA%86%E6%9C%80%E5%A5%BD%E5%90%AC%E7%9A%84%E4%B8%80%E4%B8%AA%E8%88%9E%E5%8F%B0%23) `126.0K 🔥` `NEW`
1. [重庆街头疑似SoldOut在唱歌](https://s.weibo.com/weibo?q=%23%E9%87%8D%E5%BA%86%E8%A1%97%E5%A4%B4%E7%96%91%E4%BC%BCSoldOut%E5%9C%A8%E5%94%B1%E6%AD%8C%23) `125.8K 🔥` `NEW`
1. [强者对伴侣只有一个要求](https://s.weibo.com/weibo?q=%23%E5%BC%BA%E8%80%85%E5%AF%B9%E4%BC%B4%E4%BE%A3%E5%8F%AA%E6%9C%89%E4%B8%80%E4%B8%AA%E8%A6%81%E6%B1%82%23) `114.6K 🔥` `NEW`
1. [新娘伴娘快笑抽了新郎哭成一片](https://s.weibo.com/weibo?q=%23%E6%96%B0%E5%A8%98%E4%BC%B4%E5%A8%98%E5%BF%AB%E7%AC%91%E6%8A%BD%E4%BA%86%E6%96%B0%E9%83%8E%E5%93%AD%E6%88%90%E4%B8%80%E7%89%87%23) `108.6K 🔥` `NEW`
1. [毕焜亚运会闭幕式旗手](https://s.weibo.com/weibo?q=%23%E6%AF%95%E7%84%9C%E4%BA%9A%E8%BF%90%E4%BC%9A%E9%97%AD%E5%B9%95%E5%BC%8F%E6%97%97%E6%89%8B%23) `108.4K 🔥` `NEW`
1. [Billkin出席PP姐姐婚礼](https://s.weibo.com/weibo?q=%23Billkin%E5%87%BA%E5%B8%ADPP%E5%A7%90%E5%A7%90%E5%A9%9A%E7%A4%BC%23) `106.6K 🔥` `NEW`
1. [57岁货车司机赴缅甸救重度烧伤儿子](https://s.weibo.com/weibo?q=%2357%E5%B2%81%E8%B4%A7%E8%BD%A6%E5%8F%B8%E6%9C%BA%E8%B5%B4%E7%BC%85%E7%94%B8%E6%95%91%E9%87%8D%E5%BA%A6%E7%83%A7%E4%BC%A4%E5%84%BF%E5%AD%90%23) `101.6K 🔥` `NEW`
1. [婆婆没想到儿子娶回来的儿媳](https://s.weibo.com/weibo?q=%23%E5%A9%86%E5%A9%86%E6%B2%A1%E6%83%B3%E5%88%B0%E5%84%BF%E5%AD%90%E5%A8%B6%E5%9B%9E%E6%9D%A5%E7%9A%84%E5%84%BF%E5%AA%B3%23) `101.0K 🔥` `NEW`
1. [鞠婧祎直播点赞破亿](https://s.weibo.com/weibo?q=%23%E9%9E%A0%E5%A9%A7%E7%A5%8E%E7%9B%B4%E6%92%AD%E7%82%B9%E8%B5%9E%E7%A0%B4%E4%BA%BF%23) `96.8K 🔥` `NEW`
1. [杜翠雀虽然是匪首却已经不清白了](https://s.weibo.com/weibo?q=%23%E6%9D%9C%E7%BF%A0%E9%9B%80%E8%99%BD%E7%84%B6%E6%98%AF%E5%8C%AA%E9%A6%96%E5%8D%B4%E5%B7%B2%E7%BB%8F%E4%B8%8D%E6%B8%85%E7%99%BD%E4%BA%86%23) `94.8K 🔥` `NEW`
1. [普京不到半年将再访华](https://s.weibo.com/weibo?q=%23%E6%99%AE%E4%BA%AC%E4%B8%8D%E5%88%B0%E5%8D%8A%E5%B9%B4%E5%B0%86%E5%86%8D%E8%AE%BF%E5%8D%8E%23) `92.1K 🔥` `NEW`
1. [王一博LACOSTE大秀预热](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9ALACOSTE%E5%A4%A7%E7%A7%80%E9%A2%84%E7%83%AD%23) `89.0K 🔥` `NEW`
1. [阿根廷vs布基纳法索](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7vs%E5%B8%83%E5%9F%BA%E7%BA%B3%E6%B3%95%E7%B4%A2%23) `88.5K 🔥` `NEW`
1. [克罗地亚0比7英格兰](https://s.weibo.com/weibo?q=%23%E5%85%8B%E7%BD%97%E5%9C%B0%E4%BA%9A0%E6%AF%947%E8%8B%B1%E6%A0%BC%E5%85%B0%23) `448.2K 🔥` `+222%`
1. [李飞飞称十年后只剩两类劳动](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E9%A3%9E%E9%A3%9E%E7%A7%B0%E5%8D%81%E5%B9%B4%E5%90%8E%E5%8F%AA%E5%89%A9%E4%B8%A4%E7%B1%BB%E5%8A%B3%E5%8A%A8%23) `347.2K 🔥` `+440%`
1. [话糙理不糙大家多存钱](https://s.weibo.com/weibo?q=%23%E8%AF%9D%E7%B3%99%E7%90%86%E4%B8%8D%E7%B3%99%E5%A4%A7%E5%AE%B6%E5%A4%9A%E5%AD%98%E9%92%B1%23) `346.8K 🔥` `+560%`
1. [她 难听](https://s.weibo.com/weibo?q=%23%E5%A5%B9%20%E9%9A%BE%E5%90%AC%23) `345.2K 🔥` `+257%`
1. [田馥甄亲手毁掉了自己的演艺生涯](https://s.weibo.com/weibo?q=%23%E7%94%B0%E9%A6%A5%E7%94%84%E4%BA%B2%E6%89%8B%E6%AF%81%E6%8E%89%E4%BA%86%E8%87%AA%E5%B7%B1%E7%9A%84%E6%BC%94%E8%89%BA%E7%94%9F%E6%B6%AF%23) `343.4K 🔥` `+424%`
1. [亚运男足颁奖只有日本队笑不出来](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E8%BF%90%E7%94%B7%E8%B6%B3%E9%A2%81%E5%A5%96%E5%8F%AA%E6%9C%89%E6%97%A5%E6%9C%AC%E9%98%9F%E7%AC%91%E4%B8%8D%E5%87%BA%E6%9D%A5%23) `342.4K 🔥` `+427%`
1. [男子多次恶意举报足浴店涉黄被行拘](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%A4%9A%E6%AC%A1%E6%81%B6%E6%84%8F%E4%B8%BE%E6%8A%A5%E8%B6%B3%E6%B5%B4%E5%BA%97%E6%B6%89%E9%BB%84%E8%A2%AB%E8%A1%8C%E6%8B%98%23) `258.9K 🔥` `+198%`
1. [中国队169金89银83铜收官](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E9%98%9F169%E9%87%9189%E9%93%B683%E9%93%9C%E6%94%B6%E5%AE%98%23) `176.9K 🔥` `+167%`
1. [新能源电车还有多少想象空间](https://s.weibo.com/weibo?q=%23%E6%96%B0%E8%83%BD%E6%BA%90%E7%94%B5%E8%BD%A6%E8%BF%98%E6%9C%89%E5%A4%9A%E5%B0%91%E6%83%B3%E8%B1%A1%E7%A9%BA%E9%97%B4%23) `169.2K 🔥` `+256%`
1. [难怪老外都说中国人嘴巴毒](https://s.weibo.com/weibo?q=%23%E9%9A%BE%E6%80%AA%E8%80%81%E5%A4%96%E9%83%BD%E8%AF%B4%E4%B8%AD%E5%9B%BD%E4%BA%BA%E5%98%B4%E5%B7%B4%E6%AF%92%23) `149.1K 🔥` `+310%`
1. [田馥甄曾说不差钱就喜欢做自己](https://s.weibo.com/weibo?q=%23%E7%94%B0%E9%A6%A5%E7%94%84%E6%9B%BE%E8%AF%B4%E4%B8%8D%E5%B7%AE%E9%92%B1%E5%B0%B1%E5%96%9C%E6%AC%A2%E5%81%9A%E8%87%AA%E5%B7%B1%23) `147.0K 🔥` `+250%`
1. [马克西助攻詹姆斯空接暴扣](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%85%8B%E8%A5%BF%E5%8A%A9%E6%94%BB%E8%A9%B9%E5%A7%86%E6%96%AF%E7%A9%BA%E6%8E%A5%E6%9A%B4%E6%89%A3%23) `146.2K 🔥` `+303%`
1. [莱巴金娜中网爆冷出局](https://s.weibo.com/weibo?q=%23%E8%8E%B1%E5%B7%B4%E9%87%91%E5%A8%9C%E4%B8%AD%E7%BD%91%E7%88%86%E5%86%B7%E5%87%BA%E5%B1%80%23) `142.2K 🔥` `+237%`
1. [一飞机在百慕大飞往波士顿途中失联](https://s.weibo.com/weibo?q=%23%E4%B8%80%E9%A3%9E%E6%9C%BA%E5%9C%A8%E7%99%BE%E6%85%95%E5%A4%A7%E9%A3%9E%E5%BE%80%E6%B3%A2%E5%A3%AB%E9%A1%BF%E9%80%94%E4%B8%AD%E5%A4%B1%E8%81%94%23) `132.6K 🔥` `+110%`
1. [女子连公共WiFi被连扣3笔钱](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E8%BF%9E%E5%85%AC%E5%85%B1WiFi%E8%A2%AB%E8%BF%9E%E6%89%A33%E7%AC%94%E9%92%B1%23) `127.6K 🔥` `+251%`
1. [64岁贵州高能量姐姐在外网火了](https://s.weibo.com/weibo?q=%2364%E5%B2%81%E8%B4%B5%E5%B7%9E%E9%AB%98%E8%83%BD%E9%87%8F%E5%A7%90%E5%A7%90%E5%9C%A8%E5%A4%96%E7%BD%91%E7%81%AB%E4%BA%86%23) `126.4K 🔥` `+248%`
1. [光是看这段文字就力竭了](https://s.weibo.com/weibo?q=%23%E5%85%89%E6%98%AF%E7%9C%8B%E8%BF%99%E6%AE%B5%E6%96%87%E5%AD%97%E5%B0%B1%E5%8A%9B%E7%AB%AD%E4%BA%86%23) `119.7K 🔥` `+186%`
1. [爬珠峰的人都堵了](https://s.weibo.com/weibo?q=%23%E7%88%AC%E7%8F%A0%E5%B3%B0%E7%9A%84%E4%BA%BA%E9%83%BD%E5%A0%B5%E4%BA%86%23) `108.3K 🔥` `+169%`
1. [司机被拍到高速开智驾睡着](https://s.weibo.com/weibo?q=%23%E5%8F%B8%E6%9C%BA%E8%A2%AB%E6%8B%8D%E5%88%B0%E9%AB%98%E9%80%9F%E5%BC%80%E6%99%BA%E9%A9%BE%E7%9D%A1%E7%9D%80%23) `100.0K 🔥` `+176%`
1. [知否 剧情设定](https://s.weibo.com/weibo?q=%23%E7%9F%A5%E5%90%A6%20%E5%89%A7%E6%83%85%E8%AE%BE%E5%AE%9A%23) `114.6K 🔥`
1. [法国博主吐槽中国演员被偷相机](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%9B%BD%E5%8D%9A%E4%B8%BB%E5%90%90%E6%A7%BD%E4%B8%AD%E5%9B%BD%E6%BC%94%E5%91%98%E8%A2%AB%E5%81%B7%E7%9B%B8%E6%9C%BA%23) `345.6K 🔥` `-24%`

Updated at 2026-10-04 08:39:43

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
