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

1. [家属否认内贾德死亡 (Family denies Ahmadinejad's death)](https://s.weibo.com/weibo?q=%23%E5%AE%B6%E5%B1%9E%E5%90%A6%E8%AE%A4%E5%86%85%E8%B4%BE%E5%BE%B7%E6%AD%BB%E4%BA%A1%23) `817.8K 🔥` `NEW`
1. [海口市监局回应椰树低俗广告](https://s.weibo.com/weibo?q=%23%E6%B5%B7%E5%8F%A3%E5%B8%82%E7%9B%91%E5%B1%80%E5%9B%9E%E5%BA%94%E6%A4%B0%E6%A0%91%E4%BD%8E%E4%BF%97%E5%B9%BF%E5%91%8A%23) `257.6K 🔥` `NEW`
1. [孙千的cp玄学又显灵了](https://s.weibo.com/weibo?q=%23%E5%AD%99%E5%8D%83%E7%9A%84cp%E7%8E%84%E5%AD%A6%E5%8F%88%E6%98%BE%E7%81%B5%E4%BA%86%23) `201.7K 🔥` `NEW`
1. [伊朗导弹绕过拦截击中耶路撒冷](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%AF%BC%E5%BC%B9%E7%BB%95%E8%BF%87%E6%8B%A6%E6%88%AA%E5%87%BB%E4%B8%AD%E8%80%B6%E8%B7%AF%E6%92%92%E5%86%B7%23) `194.9K 🔥` `NEW`
1. [伊朗大量无人机列阵地下隧道](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%A4%A7%E9%87%8F%E6%97%A0%E4%BA%BA%E6%9C%BA%E5%88%97%E9%98%B5%E5%9C%B0%E4%B8%8B%E9%9A%A7%E9%81%93%23) `190.1K 🔥` `NEW`
1. [羽毛球开始降价了](https://s.weibo.com/weibo?q=%23%E7%BE%BD%E6%AF%9B%E7%90%83%E5%BC%80%E5%A7%8B%E9%99%8D%E4%BB%B7%E4%BA%86%23) `153.4K 🔥` `NEW`
1. [中方敦促英方取消对中企制裁](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%96%B9%E6%95%A6%E4%BF%83%E8%8B%B1%E6%96%B9%E5%8F%96%E6%B6%88%E5%AF%B9%E4%B8%AD%E4%BC%81%E5%88%B6%E8%A3%81%23) `125.0K 🔥` `NEW`
1. [以色列袭击黎巴嫩致31人死](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E8%89%B2%E5%88%97%E8%A2%AD%E5%87%BB%E9%BB%8E%E5%B7%B4%E5%AB%A9%E8%87%B431%E4%BA%BA%E6%AD%BB%23) `124.6K 🔥` `NEW`
1. [巴黎是迪丽热巴最正确的打开方式](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E9%BB%8E%E6%98%AF%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E6%9C%80%E6%AD%A3%E7%A1%AE%E7%9A%84%E6%89%93%E5%BC%80%E6%96%B9%E5%BC%8F%23) `123.2K 🔥` `NEW`
1. [在媒婆帮助下相亲有了退展](https://s.weibo.com/weibo?q=%23%E5%9C%A8%E5%AA%92%E5%A9%86%E5%B8%AE%E5%8A%A9%E4%B8%8B%E7%9B%B8%E4%BA%B2%E6%9C%89%E4%BA%86%E9%80%80%E5%B1%95%23) `118.7K 🔥` `NEW`
1. [小鹏第二代VLA妈妈都爱开的国民智驾 (Xiaopeng’s second-generation VLA is a national smart car that mothers love to drive.)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E9%B9%8F%E7%AC%AC%E4%BA%8C%E4%BB%A3VLA%E5%A6%88%E5%A6%88%E9%83%BD%E7%88%B1%E5%BC%80%E7%9A%84%E5%9B%BD%E6%B0%91%E6%99%BA%E9%A9%BE%23) `116.7K 🔥` `NEW`
1. [油价大涨对生活有哪些影响](https://s.weibo.com/weibo?q=%23%E6%B2%B9%E4%BB%B7%E5%A4%A7%E6%B6%A8%E5%AF%B9%E7%94%9F%E6%B4%BB%E6%9C%89%E5%93%AA%E4%BA%9B%E5%BD%B1%E5%93%8D%23) `116.0K 🔥` `NEW`
1. [请姐姐姐夫三搭](https://s.weibo.com/weibo?q=%23%E8%AF%B7%E5%A7%90%E5%A7%90%E5%A7%90%E5%A4%AB%E4%B8%89%E6%90%AD%23) `116.0K 🔥` `NEW`
1. [刘文祥麻辣烫](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%96%87%E7%A5%A5%E9%BA%BB%E8%BE%A3%E7%83%AB%23) `115.9K 🔥` `NEW`
1. [裤子 不要在地上偷偷喝水](https://s.weibo.com/weibo?q=%23%E8%A3%A4%E5%AD%90%20%E4%B8%8D%E8%A6%81%E5%9C%A8%E5%9C%B0%E4%B8%8A%E5%81%B7%E5%81%B7%E5%96%9D%E6%B0%B4%23) `115.8K 🔥` `NEW`
1. [伊朗导弹摧毁阿联酋萨德系统](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%AF%BC%E5%BC%B9%E6%91%A7%E6%AF%81%E9%98%BF%E8%81%94%E9%85%8B%E8%90%A8%E5%BE%B7%E7%B3%BB%E7%BB%9F%23) `190.7K 🔥` `+25%`
1. [伊朗导弹突破以色列防御系统 (Iranian missile breaks through Israeli defense system)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%AF%BC%E5%BC%B9%E7%AA%81%E7%A0%B4%E4%BB%A5%E8%89%B2%E5%88%97%E9%98%B2%E5%BE%A1%E7%B3%BB%E7%BB%9F%23) `1.1M 🔥`
1. [从一无所有到再造山河 (From nothing to rebuilding mountains and rivers)](https://s.weibo.com/weibo?q=%23%E4%BB%8E%E4%B8%80%E6%97%A0%E6%89%80%E6%9C%89%E5%88%B0%E5%86%8D%E9%80%A0%E5%B1%B1%E6%B2%B3%23) `648.8K 🔥`
1. [真的没人管管江西小炒吗 (Is it true that no one cares about Jiangxi Xiao Chao?)](https://s.weibo.com/weibo?q=%23%E7%9C%9F%E7%9A%84%E6%B2%A1%E4%BA%BA%E7%AE%A1%E7%AE%A1%E6%B1%9F%E8%A5%BF%E5%B0%8F%E7%82%92%E5%90%97%23) `271.8K 🔥`
1. [年轻人的第一台轿跑可以更新了 (Young people’s first coupe can be updated)](https://s.weibo.com/weibo?q=%23%E5%B9%B4%E8%BD%BB%E4%BA%BA%E7%9A%84%E7%AC%AC%E4%B8%80%E5%8F%B0%E8%BD%BF%E8%B7%91%E5%8F%AF%E4%BB%A5%E6%9B%B4%E6%96%B0%E4%BA%86%23) `213.0K 🔥`
1. [学历自卑](https://s.weibo.com/weibo?q=%23%E5%AD%A6%E5%8E%86%E8%87%AA%E5%8D%91%23) `198.7K 🔥`
1. [32岁男子首次带女友回家30人迎接](https://s.weibo.com/weibo?q=%2332%E5%B2%81%E7%94%B7%E5%AD%90%E9%A6%96%E6%AC%A1%E5%B8%A6%E5%A5%B3%E5%8F%8B%E5%9B%9E%E5%AE%B630%E4%BA%BA%E8%BF%8E%E6%8E%A5%23) `196.5K 🔥`
1. [李昀锐还记得自己姓李不姓林吗](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%98%80%E9%94%90%E8%BF%98%E8%AE%B0%E5%BE%97%E8%87%AA%E5%B7%B1%E5%A7%93%E6%9D%8E%E4%B8%8D%E5%A7%93%E6%9E%97%E5%90%97%23) `192.7K 🔥`
1. [王楚钦过不了安检瞬间红温 (Wang Chuqin suddenly became red when he couldn't pass the security check.)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E8%BF%87%E4%B8%8D%E4%BA%86%E5%AE%89%E6%A3%80%E7%9E%AC%E9%97%B4%E7%BA%A2%E6%B8%A9%23) `190.2K 🔥`
1. [杨博文跳伞](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%8D%9A%E6%96%87%E8%B7%B3%E4%BC%9E%23) `186.5K 🔥`
1. [迪丽热巴闪耀巴黎 (Dilireba shines in Paris)](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E9%97%AA%E8%80%80%E5%B7%B4%E9%BB%8E%23) `182.5K 🔥`
1. [中国游客迪拜遇机场停运进退两难 (Chinese tourists face dilemma in Dubai due to airport shutdown)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E6%B8%B8%E5%AE%A2%E8%BF%AA%E6%8B%9C%E9%81%87%E6%9C%BA%E5%9C%BA%E5%81%9C%E8%BF%90%E8%BF%9B%E9%80%80%E4%B8%A4%E9%9A%BE%23) `164.0K 🔥`
1. [当你发现奶茶袋可以防油溅](https://s.weibo.com/weibo?q=%23%E5%BD%93%E4%BD%A0%E5%8F%91%E7%8E%B0%E5%A5%B6%E8%8C%B6%E8%A2%8B%E5%8F%AF%E4%BB%A5%E9%98%B2%E6%B2%B9%E6%BA%85%23) `159.0K 🔥`
1. [原来不止我一个人这样洗澡](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E4%B8%8D%E6%AD%A2%E6%88%91%E4%B8%80%E4%B8%AA%E4%BA%BA%E8%BF%99%E6%A0%B7%E6%B4%97%E6%BE%A1%23) `150.9K 🔥`
1. [boss直聘回应网传伊朗急招炮兵图](https://s.weibo.com/weibo?q=%23boss%E7%9B%B4%E8%81%98%E5%9B%9E%E5%BA%94%E7%BD%91%E4%BC%A0%E4%BC%8A%E6%9C%97%E6%80%A5%E6%8B%9B%E7%82%AE%E5%85%B5%E5%9B%BE%23) `144.3K 🔥`
1. [李雨桐说被薛之谦威胁](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E9%9B%A8%E6%A1%90%E8%AF%B4%E8%A2%AB%E8%96%9B%E4%B9%8B%E8%B0%A6%E5%A8%81%E8%83%81%23) `130.2K 🔥`
1. [刘美含吐槽5家AI答案不一样](https://s.weibo.com/weibo?q=%23%E5%88%98%E7%BE%8E%E5%90%AB%E5%90%90%E6%A7%BD5%E5%AE%B6AI%E7%AD%94%E6%A1%88%E4%B8%8D%E4%B8%80%E6%A0%B7%23) `130.0K 🔥`
1. [亲母女嫁给了亲父子](https://s.weibo.com/weibo?q=%23%E4%BA%B2%E6%AF%8D%E5%A5%B3%E5%AB%81%E7%BB%99%E4%BA%86%E4%BA%B2%E7%88%B6%E5%AD%90%23) `124.6K 🔥`
1. [机关算尽不如命运轻描淡写的一笔](https://s.weibo.com/weibo?q=%23%E6%9C%BA%E5%85%B3%E7%AE%97%E5%B0%BD%E4%B8%8D%E5%A6%82%E5%91%BD%E8%BF%90%E8%BD%BB%E6%8F%8F%E6%B7%A1%E5%86%99%E7%9A%84%E4%B8%80%E7%AC%94%23) `116.1K 🔥`
1. [演员逼真到根本看不出来是AI (The actors are so lifelike that you can’t even tell they are AI)](https://s.weibo.com/weibo?q=%23%E6%BC%94%E5%91%98%E9%80%BC%E7%9C%9F%E5%88%B0%E6%A0%B9%E6%9C%AC%E7%9C%8B%E4%B8%8D%E5%87%BA%E6%9D%A5%E6%98%AFAI%23) `116.0K 🔥`
1. [欧洲女子拍中国老公做兰州牛肉面](https://s.weibo.com/weibo?q=%23%E6%AC%A7%E6%B4%B2%E5%A5%B3%E5%AD%90%E6%8B%8D%E4%B8%AD%E5%9B%BD%E8%80%81%E5%85%AC%E5%81%9A%E5%85%B0%E5%B7%9E%E7%89%9B%E8%82%89%E9%9D%A2%23) `116.0K 🔥`
1. [大侦探](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E4%BE%A6%E6%8E%A2%23) `116.0K 🔥`
1. [当农村狗狗第一次吃到狗粮 (When rural dogs eat dog food for the first time)](https://s.weibo.com/weibo?q=%23%E5%BD%93%E5%86%9C%E6%9D%91%E7%8B%97%E7%8B%97%E7%AC%AC%E4%B8%80%E6%AC%A1%E5%90%83%E5%88%B0%E7%8B%97%E7%B2%AE%23) `115.9K 🔥`
1. [A股 (A shares)](https://s.weibo.com/weibo?q=%23A%E8%82%A1%23) `115.9K 🔥`
1. [向太怒批你凭什么喷王菲](https://s.weibo.com/weibo?q=%23%E5%90%91%E5%A4%AA%E6%80%92%E6%89%B9%E4%BD%A0%E5%87%AD%E4%BB%80%E4%B9%88%E5%96%B7%E7%8E%8B%E8%8F%B2%23) `115.8K 🔥`
1. [李雨桐喊话薛之谦](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E9%9B%A8%E6%A1%90%E5%96%8A%E8%AF%9D%E8%96%9B%E4%B9%8B%E8%B0%A6%23) `5.8M 🔥` `-32%`
1. [电影难看20分钟内可退款40%](https://s.weibo.com/weibo?q=%23%E7%94%B5%E5%BD%B1%E9%9A%BE%E7%9C%8B20%E5%88%86%E9%92%9F%E5%86%85%E5%8F%AF%E9%80%80%E6%AC%BE40%25%23) `412.2K 🔥` `-50%`
1. [白宫下令暂缓推进对台军售](https://s.weibo.com/weibo?q=%23%E7%99%BD%E5%AE%AB%E4%B8%8B%E4%BB%A4%E6%9A%82%E7%BC%93%E6%8E%A8%E8%BF%9B%E5%AF%B9%E5%8F%B0%E5%86%9B%E5%94%AE%23) `201.9K 🔥` `-45%`
1. [伊朗导弹击中耶路撒冷现场画面](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%AF%BC%E5%BC%B9%E5%87%BB%E4%B8%AD%E8%80%B6%E8%B7%AF%E6%92%92%E5%86%B7%E7%8E%B0%E5%9C%BA%E7%94%BB%E9%9D%A2%23) `152.4K 🔥` `-27%`
1. [湖南卫视元宵晚会因暴雪暂停彩排](https://s.weibo.com/weibo?q=%23%E6%B9%96%E5%8D%97%E5%8D%AB%E8%A7%86%E5%85%83%E5%AE%B5%E6%99%9A%E4%BC%9A%E5%9B%A0%E6%9A%B4%E9%9B%AA%E6%9A%82%E5%81%9C%E5%BD%A9%E6%8E%92%23) `130.2K 🔥` `-40%`
1. [伊朗前总统内贾德亲信称其平安](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%89%8D%E6%80%BB%E7%BB%9F%E5%86%85%E8%B4%BE%E5%BE%B7%E4%BA%B2%E4%BF%A1%E7%A7%B0%E5%85%B6%E5%B9%B3%E5%AE%89%23) `130.2K 🔥` `-39%`
1. [佟丽娅给小酒窝发压岁钱 (Tong Liya gives new year's money to Xiao Dimple)](https://s.weibo.com/weibo?q=%23%E4%BD%9F%E4%B8%BD%E5%A8%85%E7%BB%99%E5%B0%8F%E9%85%92%E7%AA%9D%E5%8F%91%E5%8E%8B%E5%B2%81%E9%92%B1%23) `124.3K 🔥` `-22%`
1. [霍尔木兹海峡封锁将致命打击日本经济](https://s.weibo.com/weibo?q=%23%E9%9C%8D%E5%B0%94%E6%9C%A8%E5%85%B9%E6%B5%B7%E5%B3%A1%E5%B0%81%E9%94%81%E5%B0%86%E8%87%B4%E5%91%BD%E6%89%93%E5%87%BB%E6%97%A5%E6%9C%AC%E7%BB%8F%E6%B5%8E%23) `121.0K 🔥` `-24%`
1. [赞达亚荷兰弟已经结婚](https://s.weibo.com/weibo?q=%23%E8%B5%9E%E8%BE%BE%E4%BA%9A%E8%8D%B7%E5%85%B0%E5%BC%9F%E5%B7%B2%E7%BB%8F%E7%BB%93%E5%A9%9A%23) `116.0K 🔥` `-27%`
1. [陈若琳手下又有王牌选手了 (Chen Ruolin has another ace player under her belt)](https://s.weibo.com/weibo?q=%23%E9%99%88%E8%8B%A5%E7%90%B3%E6%89%8B%E4%B8%8B%E5%8F%88%E6%9C%89%E7%8E%8B%E7%89%8C%E9%80%89%E6%89%8B%E4%BA%86%23) `115.9K 🔥` `-28%`
1. [18名中国公民顺利撤离伊朗 (18 Chinese citizens successfully evacuated Iran)](https://s.weibo.com/weibo?q=%2318%E5%90%8D%E4%B8%AD%E5%9B%BD%E5%85%AC%E6%B0%91%E9%A1%BA%E5%88%A9%E6%92%A4%E7%A6%BB%E4%BC%8A%E6%9C%97%23) `115.9K 🔥` `-46%`

Updated at 2026-03-02 14:36:47

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
