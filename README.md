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

1. [筑牢中小股民权益守护防线 (Build a solid line of defense to protect the rights and interests of small and medium-sized investors)](https://s.weibo.com/weibo?q=%23%E7%AD%91%E7%89%A2%E4%B8%AD%E5%B0%8F%E8%82%A1%E6%B0%91%E6%9D%83%E7%9B%8A%E5%AE%88%E6%8A%A4%E9%98%B2%E7%BA%BF%23) `434.2K 🔥` `NEW`
1. [你好1983定档](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E5%A5%BD1983%E5%AE%9A%E6%A1%A3%23) `366.7K 🔥` `NEW`
1. [手机涨价潮真的来了](https://s.weibo.com/weibo?q=%23%E6%89%8B%E6%9C%BA%E6%B6%A8%E4%BB%B7%E6%BD%AE%E7%9C%9F%E7%9A%84%E6%9D%A5%E4%BA%86%23) `339.6K 🔥` `NEW`
1. [谭松韵长文回应王劲松](https://s.weibo.com/weibo?q=%23%E8%B0%AD%E6%9D%BE%E9%9F%B5%E9%95%BF%E6%96%87%E5%9B%9E%E5%BA%94%E7%8E%8B%E5%8A%B2%E6%9D%BE%23) `313.2K 🔥` `NEW`
1. [别让你的微信隐私在裸奔](https://s.weibo.com/weibo?q=%23%E5%88%AB%E8%AE%A9%E4%BD%A0%E7%9A%84%E5%BE%AE%E4%BF%A1%E9%9A%90%E7%A7%81%E5%9C%A8%E8%A3%B8%E5%A5%94%23) `311.6K 🔥` `NEW`
1. [单亲妈妈14年手打200万个锅盔](https://s.weibo.com/weibo?q=%23%E5%8D%95%E4%BA%B2%E5%A6%88%E5%A6%8814%E5%B9%B4%E6%89%8B%E6%89%93200%E4%B8%87%E4%B8%AA%E9%94%85%E7%9B%94%23) `310.5K 🔥` `NEW`
1. [多款100%椰子水被曝兑水加糖](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E6%AC%BE100%25%E6%A4%B0%E5%AD%90%E6%B0%B4%E8%A2%AB%E6%9B%9D%E5%85%91%E6%B0%B4%E5%8A%A0%E7%B3%96%23) `306.9K 🔥` `NEW`
1. [谁敢相信这是九年前的张凌赫](https://s.weibo.com/weibo?q=%23%E8%B0%81%E6%95%A2%E7%9B%B8%E4%BF%A1%E8%BF%99%E6%98%AF%E4%B9%9D%E5%B9%B4%E5%89%8D%E7%9A%84%E5%BC%A0%E5%87%8C%E8%B5%AB%23) `302.7K 🔥` `NEW`
1. [丈夫意外去世女子求解锁手机](https://s.weibo.com/weibo?q=%23%E4%B8%88%E5%A4%AB%E6%84%8F%E5%A4%96%E5%8E%BB%E4%B8%96%E5%A5%B3%E5%AD%90%E6%B1%82%E8%A7%A3%E9%94%81%E6%89%8B%E6%9C%BA%23) `300.0K 🔥` `NEW`
1. [杨紫向品牌方赠汉服引惊叹](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E5%90%91%E5%93%81%E7%89%8C%E6%96%B9%E8%B5%A0%E6%B1%89%E6%9C%8D%E5%BC%95%E6%83%8A%E5%8F%B9%23) `299.0K 🔥` `NEW`
1. [老人拒透露500枚金币下落被关十年 (An old man was imprisoned for ten years for refusing to disclose the whereabouts of 500 gold coins)](https://s.weibo.com/weibo?q=%23%E8%80%81%E4%BA%BA%E6%8B%92%E9%80%8F%E9%9C%B2500%E6%9E%9A%E9%87%91%E5%B8%81%E4%B8%8B%E8%90%BD%E8%A2%AB%E5%85%B3%E5%8D%81%E5%B9%B4%23) `297.5K 🔥` `NEW`
1. [鹿晗当燃红](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%E5%BD%93%E7%87%83%E7%BA%A2%23) `294.7K 🔥` `NEW`
1. [小米SU7靛石绿](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3SU7%E9%9D%9B%E7%9F%B3%E7%BB%BF%23) `291.4K 🔥` `NEW`
1. [周云杰2026首场大型发布会直播](https://s.weibo.com/weibo?q=%23%E5%91%A8%E4%BA%91%E6%9D%B02026%E9%A6%96%E5%9C%BA%E5%A4%A7%E5%9E%8B%E5%8F%91%E5%B8%83%E4%BC%9A%E7%9B%B4%E6%92%AD%23) `288.5K 🔥` `NEW`
1. [丁真控诉十个勤天](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%9C%9F%E6%8E%A7%E8%AF%89%E5%8D%81%E4%B8%AA%E5%8B%A4%E5%A4%A9%23) `287.8K 🔥` `NEW`
1. [王鹤润 王玉雯](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%B9%A4%E6%B6%A6%20%E7%8E%8B%E7%8E%89%E9%9B%AF%23) `282.7K 🔥` `NEW`
1. [男子做核磁被忘机器上6小时妻子报警](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%81%9A%E6%A0%B8%E7%A3%81%E8%A2%AB%E5%BF%98%E6%9C%BA%E5%99%A8%E4%B8%8A6%E5%B0%8F%E6%97%B6%E5%A6%BB%E5%AD%90%E6%8A%A5%E8%AD%A6%23) `217.2K 🔥` `NEW`
1. [汪苏泷明日世界海报](https://s.weibo.com/weibo?q=%23%E6%B1%AA%E8%8B%8F%E6%B3%B7%E6%98%8E%E6%97%A5%E4%B8%96%E7%95%8C%E6%B5%B7%E6%8A%A5%23) `159.0K 🔥` `NEW`
1. [刘亦菲 巡视领地的雌狮](https://s.weibo.com/weibo?q=%23%E5%88%98%E4%BA%A6%E8%8F%B2%20%E5%B7%A1%E8%A7%86%E9%A2%86%E5%9C%B0%E7%9A%84%E9%9B%8C%E7%8B%AE%23) `155.8K 🔥` `NEW`
1. [同济医院成立整改专班](https://s.weibo.com/weibo?q=%23%E5%90%8C%E6%B5%8E%E5%8C%BB%E9%99%A2%E6%88%90%E7%AB%8B%E6%95%B4%E6%94%B9%E4%B8%93%E7%8F%AD%23) `148.0K 🔥` `NEW`
1. [王鹤润道歉 (Wang Herun apologizes)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%B9%A4%E6%B6%A6%E9%81%93%E6%AD%89%23) `137.3K 🔥` `NEW`
1. [毛主席纪念堂3月16日起暂停开放](https://s.weibo.com/weibo?q=%23%E6%AF%9B%E4%B8%BB%E5%B8%AD%E7%BA%AA%E5%BF%B5%E5%A0%823%E6%9C%8816%E6%97%A5%E8%B5%B7%E6%9A%82%E5%81%9C%E5%BC%80%E6%94%BE%23) `136.8K 🔥` `NEW`
1. [韩佳人上海游体验中国网红妆](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E4%BD%B3%E4%BA%BA%E4%B8%8A%E6%B5%B7%E6%B8%B8%E4%BD%93%E9%AA%8C%E4%B8%AD%E5%9B%BD%E7%BD%91%E7%BA%A2%E5%A6%86%23) `132.7K 🔥` `NEW`
1. [王者万象棋蔷薇恋人上线](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%80%85%E4%B8%87%E8%B1%A1%E6%A3%8B%E8%94%B7%E8%96%87%E6%81%8B%E4%BA%BA%E4%B8%8A%E7%BA%BF%23) `120.6K 🔥` `NEW`
1. [苏醒缺席黄子弘凡北京演唱会原因](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E9%86%92%E7%BC%BA%E5%B8%AD%E9%BB%84%E5%AD%90%E5%BC%98%E5%87%A1%E5%8C%97%E4%BA%AC%E6%BC%94%E5%94%B1%E4%BC%9A%E5%8E%9F%E5%9B%A0%23) `119.0K 🔥` `NEW`
1. [小狗被困井底三个冬天居然胖了](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%8B%97%E8%A2%AB%E5%9B%B0%E4%BA%95%E5%BA%95%E4%B8%89%E4%B8%AA%E5%86%AC%E5%A4%A9%E5%B1%85%E7%84%B6%E8%83%96%E4%BA%86%23) `116.3K 🔥` `NEW`
1. [中腰部演员将被AI替代](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E8%85%B0%E9%83%A8%E6%BC%94%E5%91%98%E5%B0%86%E8%A2%ABAI%E6%9B%BF%E4%BB%A3%23) `113.8K 🔥` `NEW`
1. [佟湘玉李大嘴办婚礼了](https://s.weibo.com/weibo?q=%23%E4%BD%9F%E6%B9%98%E7%8E%89%E6%9D%8E%E5%A4%A7%E5%98%B4%E5%8A%9E%E5%A9%9A%E7%A4%BC%E4%BA%86%23) `113.3K 🔥` `NEW`
1. [交10万相亲匹配5个70后报警](https://s.weibo.com/weibo?q=%23%E4%BA%A410%E4%B8%87%E7%9B%B8%E4%BA%B2%E5%8C%B9%E9%85%8D5%E4%B8%AA70%E5%90%8E%E6%8A%A5%E8%AD%A6%23) `104.2K 🔥` `NEW`
1. [张雨霏说奥运冠军也一无所有](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%A8%E9%9C%8F%E8%AF%B4%E5%A5%A5%E8%BF%90%E5%86%A0%E5%86%9B%E4%B9%9F%E4%B8%80%E6%97%A0%E6%89%80%E6%9C%89%23) `93.9K 🔥` `NEW`
1. [张婧仪刘浩存 如果爱可以重来 (Zhang Jingyi Liu Haocun If love can come back)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%A9%A7%E4%BB%AA%E5%88%98%E6%B5%A9%E5%AD%98%20%E5%A6%82%E6%9E%9C%E7%88%B1%E5%8F%AF%E4%BB%A5%E9%87%8D%E6%9D%A5%23) `91.5K 🔥` `NEW`
1. [儿童乳膏工厂说不添加不好卖](https://s.weibo.com/weibo?q=%23%E5%84%BF%E7%AB%A5%E4%B9%B3%E8%86%8F%E5%B7%A5%E5%8E%82%E8%AF%B4%E4%B8%8D%E6%B7%BB%E5%8A%A0%E4%B8%8D%E5%A5%BD%E5%8D%96%23) `90.4K 🔥` `NEW`
1. [这只猫的耐心已经达到极限](https://s.weibo.com/weibo?q=%23%E8%BF%99%E5%8F%AA%E7%8C%AB%E7%9A%84%E8%80%90%E5%BF%83%E5%B7%B2%E7%BB%8F%E8%BE%BE%E5%88%B0%E6%9E%81%E9%99%90%23) `82.6K 🔥` `NEW`
1. [3个新人跑两会是啥体验](https://s.weibo.com/weibo?q=%233%E4%B8%AA%E6%96%B0%E4%BA%BA%E8%B7%91%E4%B8%A4%E4%BC%9A%E6%98%AF%E5%95%A5%E4%BD%93%E9%AA%8C%23) `304.9K 🔥` `+91%`
1. [拼多多试行免费送货进村](https://s.weibo.com/weibo?q=%23%E6%8B%BC%E5%A4%9A%E5%A4%9A%E8%AF%95%E8%A1%8C%E5%85%8D%E8%B4%B9%E9%80%81%E8%B4%A7%E8%BF%9B%E6%9D%91%23) `296.1K 🔥` `+91%`
1. [豆包 消极怠工](https://s.weibo.com/weibo?q=%23%E8%B1%86%E5%8C%85%20%E6%B6%88%E6%9E%81%E6%80%A0%E5%B7%A5%23) `284.2K 🔥` `+79%`
1. [以色列总理威胁刺杀伊朗新最高领袖](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E8%89%B2%E5%88%97%E6%80%BB%E7%90%86%E5%A8%81%E8%83%81%E5%88%BA%E6%9D%80%E4%BC%8A%E6%9C%97%E6%96%B0%E6%9C%80%E9%AB%98%E9%A2%86%E8%A2%96%23) `281.6K 🔥` `+40%`
1. [保洁员发现男子被遗忘核磁共振机](https://s.weibo.com/weibo?q=%23%E4%BF%9D%E6%B4%81%E5%91%98%E5%8F%91%E7%8E%B0%E7%94%B7%E5%AD%90%E8%A2%AB%E9%81%97%E5%BF%98%E6%A0%B8%E7%A3%81%E5%85%B1%E6%8C%AF%E6%9C%BA%23) `258.2K 🔥` `+62%`
1. [天津一摊主削凤梨火了](https://s.weibo.com/weibo?q=%23%E5%A4%A9%E6%B4%A5%E4%B8%80%E6%91%8A%E4%B8%BB%E5%89%8A%E5%87%A4%E6%A2%A8%E7%81%AB%E4%BA%86%23) `136.9K 🔥` `+27%`
1. [F1](https://s.weibo.com/weibo?q=%23F1%23) `1.1M 🔥`
1. [微信新功能被称为社恐福音](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E4%BF%A1%E6%96%B0%E5%8A%9F%E8%83%BD%E8%A2%AB%E7%A7%B0%E4%B8%BA%E7%A4%BE%E6%81%90%E7%A6%8F%E9%9F%B3%23) `761.5K 🔥`
1. [春天里的中国向新而行 (China in spring moves towards newness)](https://s.weibo.com/weibo?q=%23%E6%98%A5%E5%A4%A9%E9%87%8C%E7%9A%84%E4%B8%AD%E5%9B%BD%E5%90%91%E6%96%B0%E8%80%8C%E8%A1%8C%23) `607.7K 🔥`
1. [白鹿丁禹兮 恰逢雨连天 (White Deer and Ding Yuxi coincide with the continuous rain)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E4%B8%81%E7%A6%B9%E5%85%AE%20%E6%81%B0%E9%80%A2%E9%9B%A8%E8%BF%9E%E5%A4%A9%23) `136.6K 🔥`
1. [澳洲遇难2名中国人深夜自驾赶工作](https://s.weibo.com/weibo?q=%23%E6%BE%B3%E6%B4%B2%E9%81%87%E9%9A%BE2%E5%90%8D%E4%B8%AD%E5%9B%BD%E4%BA%BA%E6%B7%B1%E5%A4%9C%E8%87%AA%E9%A9%BE%E8%B5%B6%E5%B7%A5%E4%BD%9C%23) `130.2K 🔥`
1. [张踩铃 不要脸的人先享受甜茶 (The shameless person Zhang Tie Ling enjoys the sweet tea first)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E8%B8%A9%E9%93%83%20%E4%B8%8D%E8%A6%81%E8%84%B8%E7%9A%84%E4%BA%BA%E5%85%88%E4%BA%AB%E5%8F%97%E7%94%9C%E8%8C%B6%23) `127.5K 🔥`
1. [冻干草莓测出二十几种农药](https://s.weibo.com/weibo?q=%23%E5%86%BB%E5%B9%B2%E8%8D%89%E8%8E%93%E6%B5%8B%E5%87%BA%E4%BA%8C%E5%8D%81%E5%87%A0%E7%A7%8D%E5%86%9C%E8%8D%AF%23) `143.5K 🔥` `-51%`
1. [沈月张晚意开机路透](https://s.weibo.com/weibo?q=%23%E6%B2%88%E6%9C%88%E5%BC%A0%E6%99%9A%E6%84%8F%E5%BC%80%E6%9C%BA%E8%B7%AF%E9%80%8F%23) `134.6K 🔥` `-43%`
1. [杨紫不染发是因为大家喜欢黑色](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E4%B8%8D%E6%9F%93%E5%8F%91%E6%98%AF%E5%9B%A0%E4%B8%BA%E5%A4%A7%E5%AE%B6%E5%96%9C%E6%AC%A2%E9%BB%91%E8%89%B2%23) `103.3K 🔥` `-33%`
1. [陈浚铭 闹鬼了 (Chen Junming is haunted)](https://s.weibo.com/weibo?q=%23%E9%99%88%E6%B5%9A%E9%93%AD%20%E9%97%B9%E9%AC%BC%E4%BA%86%23) `102.7K 🔥` `-33%`
1. [医院通报患者被遗忘6小时处理结果](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E9%99%A2%E9%80%9A%E6%8A%A5%E6%82%A3%E8%80%85%E8%A2%AB%E9%81%97%E5%BF%986%E5%B0%8F%E6%97%B6%E5%A4%84%E7%90%86%E7%BB%93%E6%9E%9C%23) `84.4K 🔥` `-45%`
1. [张凌赫田曦薇醉酒吻是现挂 (Zhang Linghe and Tian Xiwei’s drunken kiss is now hanging)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%94%B0%E6%9B%A6%E8%96%87%E9%86%89%E9%85%92%E5%90%BB%E6%98%AF%E7%8E%B0%E6%8C%82%23) `84.3K 🔥` `-45%`

Updated at 2026-03-13 12:26:52

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
