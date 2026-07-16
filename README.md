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

1. [数读产业转型升级新动能 (New momentum for transformation and upgrading of digital reading industry)](https://s.weibo.com/weibo?q=%23%E6%95%B0%E8%AF%BB%E4%BA%A7%E4%B8%9A%E8%BD%AC%E5%9E%8B%E5%8D%87%E7%BA%A7%E6%96%B0%E5%8A%A8%E8%83%BD%23) `646.1K 🔥` `NEW`
1. [新一代理想L6上市](https://s.weibo.com/weibo?q=%23%E6%96%B0%E4%B8%80%E4%BB%A3%E7%90%86%E6%83%B3L6%E4%B8%8A%E5%B8%82%23) `645.0K 🔥` `NEW`
1. [施暴男子释放5天后致姐妹一死一伤](https://s.weibo.com/weibo?q=%23%E6%96%BD%E6%9A%B4%E7%94%B7%E5%AD%90%E9%87%8A%E6%94%BE5%E5%A4%A9%E5%90%8E%E8%87%B4%E5%A7%90%E5%A6%B9%E4%B8%80%E6%AD%BB%E4%B8%80%E4%BC%A4%23) `131.7K 🔥` `NEW`
1. [沈音教授白丽萍夫妇离世系意外事故](https://s.weibo.com/weibo?q=%23%E6%B2%88%E9%9F%B3%E6%95%99%E6%8E%88%E7%99%BD%E4%B8%BD%E8%90%8D%E5%A4%AB%E5%A6%87%E7%A6%BB%E4%B8%96%E7%B3%BB%E6%84%8F%E5%A4%96%E4%BA%8B%E6%95%85%23) `126.5K 🔥` `NEW`
1. [EWC淘汰赛抽签](https://s.weibo.com/weibo?q=%23EWC%E6%B7%98%E6%B1%B0%E8%B5%9B%E6%8A%BD%E7%AD%BE%23) `125.9K 🔥` `NEW`
1. [2026世界人工智能大会太火了](https://s.weibo.com/weibo?q=%232026%E4%B8%96%E7%95%8C%E4%BA%BA%E5%B7%A5%E6%99%BA%E8%83%BD%E5%A4%A7%E4%BC%9A%E5%A4%AA%E7%81%AB%E4%BA%86%23) `118.0K 🔥` `NEW`
1. [白鹿当经纪人孩子干妈](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E5%BD%93%E7%BB%8F%E7%BA%AA%E4%BA%BA%E5%AD%A9%E5%AD%90%E5%B9%B2%E5%A6%88%23) `117.0K 🔥` `NEW`
1. [为什么方媛炒菜还背着包](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E6%96%B9%E5%AA%9B%E7%82%92%E8%8F%9C%E8%BF%98%E8%83%8C%E7%9D%80%E5%8C%85%23) `115.1K 🔥` `NEW`
1. [成都暴雨](https://s.weibo.com/weibo?q=%23%E6%88%90%E9%83%BD%E6%9A%B4%E9%9B%A8%23) `72.6K 🔥` `NEW`
1. [沈阳音乐学院发布讣告](https://s.weibo.com/weibo?q=%23%E6%B2%88%E9%98%B3%E9%9F%B3%E4%B9%90%E5%AD%A6%E9%99%A2%E5%8F%91%E5%B8%83%E8%AE%A3%E5%91%8A%23) `72.4K 🔥` `NEW`
1. [NBA总裁希望詹姆斯尽快决定 (NBA president hopes James will decide soon)](https://s.weibo.com/weibo?q=%23NBA%E6%80%BB%E8%A3%81%E5%B8%8C%E6%9C%9B%E8%A9%B9%E5%A7%86%E6%96%AF%E5%B0%BD%E5%BF%AB%E5%86%B3%E5%AE%9A%23) `71.8K 🔥` `NEW`
1. [王橹杰泡泡背景音](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%E6%B3%A1%E6%B3%A1%E8%83%8C%E6%99%AF%E9%9F%B3%23) `66.3K 🔥` `NEW`
1. [幼童澡盆溺水姑姑忘拄拐一把捞起](https://s.weibo.com/weibo?q=%23%E5%B9%BC%E7%AB%A5%E6%BE%A1%E7%9B%86%E6%BA%BA%E6%B0%B4%E5%A7%91%E5%A7%91%E5%BF%98%E6%8B%84%E6%8B%90%E4%B8%80%E6%8A%8A%E6%8D%9E%E8%B5%B7%23) `63.0K 🔥` `NEW`
1. [刘松仁 问心无愧就好](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%9D%BE%E4%BB%81%20%E9%97%AE%E5%BF%83%E6%97%A0%E6%84%A7%E5%B0%B1%E5%A5%BD%23) `62.9K 🔥` `NEW`
1. [A股](https://s.weibo.com/weibo?q=%23A%E8%82%A1%23) `62.0K 🔥` `NEW`
1. [王橹杰很喜欢运动会](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%E5%BE%88%E5%96%9C%E6%AC%A2%E8%BF%90%E5%8A%A8%E4%BC%9A%23) `57.9K 🔥` `NEW`
1. [车主回应因乘客拒付28元高速费返回](https://s.weibo.com/weibo?q=%23%E8%BD%A6%E4%B8%BB%E5%9B%9E%E5%BA%94%E5%9B%A0%E4%B9%98%E5%AE%A2%E6%8B%92%E4%BB%9828%E5%85%83%E9%AB%98%E9%80%9F%E8%B4%B9%E8%BF%94%E5%9B%9E%23) `56.7K 🔥` `NEW`
1. [陈奕恒大合照直接把刘海撩上去](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%A5%95%E6%81%92%E5%A4%A7%E5%90%88%E7%85%A7%E7%9B%B4%E6%8E%A5%E6%8A%8A%E5%88%98%E6%B5%B7%E6%92%A9%E4%B8%8A%E5%8E%BB%23) `53.1K 🔥` `NEW`
1. [服务员帮人传话多次叫女顾客去包厢 (The waiter sent a message to the female customer several times to go to the private room.)](https://s.weibo.com/weibo?q=%23%E6%9C%8D%E5%8A%A1%E5%91%98%E5%B8%AE%E4%BA%BA%E4%BC%A0%E8%AF%9D%E5%A4%9A%E6%AC%A1%E5%8F%AB%E5%A5%B3%E9%A1%BE%E5%AE%A2%E5%8E%BB%E5%8C%85%E5%8E%A2%23) `1.0M 🔥` `+133%`
1. [韩国股民从暴富到一夜归零](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E8%82%A1%E6%B0%91%E4%BB%8E%E6%9A%B4%E5%AF%8C%E5%88%B0%E4%B8%80%E5%A4%9C%E5%BD%92%E9%9B%B6%23) `706.7K 🔥` `+550%`
1. [过了很多年才突然明白的事](https://s.weibo.com/weibo?q=%23%E8%BF%87%E4%BA%86%E5%BE%88%E5%A4%9A%E5%B9%B4%E6%89%8D%E7%AA%81%E7%84%B6%E6%98%8E%E7%99%BD%E7%9A%84%E4%BA%8B%23) `603.6K 🔥` `+84%`
1. [周星驰3个问号回应被偷票房 (Stephen Chow responded to the stolen box office with 3 question marks)](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%98%9F%E9%A9%B03%E4%B8%AA%E9%97%AE%E5%8F%B7%E5%9B%9E%E5%BA%94%E8%A2%AB%E5%81%B7%E7%A5%A8%E6%88%BF%23) `321.6K 🔥` `+119%`
1. [realme手机退出中国市场](https://s.weibo.com/weibo?q=%23realme%E6%89%8B%E6%9C%BA%E9%80%80%E5%87%BA%E4%B8%AD%E5%9B%BD%E5%B8%82%E5%9C%BA%23) `185.1K 🔥` `+96%`
1. [法国队对季军赛毫无动力 (France has no motivation for third-place match)](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%9B%BD%E9%98%9F%E5%AF%B9%E5%AD%A3%E5%86%9B%E8%B5%9B%E6%AF%AB%E6%97%A0%E5%8A%A8%E5%8A%9B%23) `138.3K 🔥` `+76%`
1. [阿根廷的最后十分钟怎么了 (What happened to Argentina's last ten minutes?)](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E7%9A%84%E6%9C%80%E5%90%8E%E5%8D%81%E5%88%86%E9%92%9F%E6%80%8E%E4%B9%88%E4%BA%86%23) `137.8K 🔥` `+131%`
1. [阿根廷西班牙争夺大力神杯](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E8%A5%BF%E7%8F%AD%E7%89%99%E4%BA%89%E5%A4%BA%E5%A4%A7%E5%8A%9B%E7%A5%9E%E6%9D%AF%23) `129.4K 🔥` `+137%`
1. [一代人有一代人的漂亮饭 (Each generation has its own beautiful meal)](https://s.weibo.com/weibo?q=%23%E4%B8%80%E4%BB%A3%E4%BA%BA%E6%9C%89%E4%B8%80%E4%BB%A3%E4%BA%BA%E7%9A%84%E6%BC%82%E4%BA%AE%E9%A5%AD%23) `124.5K 🔥` `+65%`
1. [关晓彤被风吹的这一下](https://s.weibo.com/weibo?q=%23%E5%85%B3%E6%99%93%E5%BD%A4%E8%A2%AB%E9%A3%8E%E5%90%B9%E7%9A%84%E8%BF%99%E4%B8%80%E4%B8%8B%23) `121.2K 🔥` `+135%`
1. [黑狗咬人被主人卖掉吓得眼神呆滞 (The black dog bit someone and was sold by his owner, so scared that his eyes were dull)](https://s.weibo.com/weibo?q=%23%E9%BB%91%E7%8B%97%E5%92%AC%E4%BA%BA%E8%A2%AB%E4%B8%BB%E4%BA%BA%E5%8D%96%E6%8E%89%E5%90%93%E5%BE%97%E7%9C%BC%E7%A5%9E%E5%91%86%E6%BB%9E%23) `96.6K 🔥` `+90%`
1. [原来饥饿大多都是假性食欲](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E9%A5%A5%E9%A5%BF%E5%A4%A7%E5%A4%9A%E9%83%BD%E6%98%AF%E5%81%87%E6%80%A7%E9%A3%9F%E6%AC%B2%23) `92.3K 🔥` `+50%`
1. [小牧羊犬管教小羊血脉觉醒](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%89%A7%E7%BE%8A%E7%8A%AC%E7%AE%A1%E6%95%99%E5%B0%8F%E7%BE%8A%E8%A1%80%E8%84%89%E8%A7%89%E9%86%92%23) `85.6K 🔥` `+72%`
1. [最绝望的英法大战出现了](https://s.weibo.com/weibo?q=%23%E6%9C%80%E7%BB%9D%E6%9C%9B%E7%9A%84%E8%8B%B1%E6%B3%95%E5%A4%A7%E6%88%98%E5%87%BA%E7%8E%B0%E4%BA%86%23) `80.9K 🔥` `+59%`
1. [薛之谦新歌媚人](https://s.weibo.com/weibo?q=%23%E8%96%9B%E4%B9%8B%E8%B0%A6%E6%96%B0%E6%AD%8C%E5%AA%9A%E4%BA%BA%23) `77.3K 🔥` `+52%`
1. [女孩坐老表摩托车回家视频在外网火了](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%A9%E5%9D%90%E8%80%81%E8%A1%A8%E6%91%A9%E6%89%98%E8%BD%A6%E5%9B%9E%E5%AE%B6%E8%A7%86%E9%A2%91%E5%9C%A8%E5%A4%96%E7%BD%91%E7%81%AB%E4%BA%86%23) `72.2K 🔥` `+44%`
1. [新一代理想L6售价24.98万元 (The new generation of Ideal L6 is priced at 249,800 yuan)](https://s.weibo.com/weibo?q=%23%E6%96%B0%E4%B8%80%E4%BB%A3%E7%90%86%E6%83%B3L6%E5%94%AE%E4%BB%B724.98%E4%B8%87%E5%85%83%23) `72.0K 🔥` `+44%`
1. [原来真有人的妈妈是这样的 (It turns out someone’s mother really is like this)](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E7%9C%9F%E6%9C%89%E4%BA%BA%E7%9A%84%E5%A6%88%E5%A6%88%E6%98%AF%E8%BF%99%E6%A0%B7%E7%9A%84%23) `134.0K 🔥`
1. [冉莹颖侃侃而谈邹市明心如死灰 (Ran Yingying talks freely about Zou Shiming's heart is filled with despair)](https://s.weibo.com/weibo?q=%23%E5%86%89%E8%8E%B9%E9%A2%96%E4%BE%83%E4%BE%83%E8%80%8C%E8%B0%88%E9%82%B9%E5%B8%82%E6%98%8E%E5%BF%83%E5%A6%82%E6%AD%BB%E7%81%B0%23) `81.5K 🔥`
1. [深圳一小区车位过窄下车要爬天窗 (The parking space in a community in Shenzhen is too narrow and you have to climb up the sunroof when getting off the car.)](https://s.weibo.com/weibo?q=%23%E6%B7%B1%E5%9C%B3%E4%B8%80%E5%B0%8F%E5%8C%BA%E8%BD%A6%E4%BD%8D%E8%BF%87%E7%AA%84%E4%B8%8B%E8%BD%A6%E8%A6%81%E7%88%AC%E5%A4%A9%E7%AA%97%23) `58.0K 🔥`
1. [小鹏MONAL03价格杀疯了](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E9%B9%8FMONAL03%E4%BB%B7%E6%A0%BC%E6%9D%80%E7%96%AF%E4%BA%86%23) `55.4K 🔥`
1. [女子持拖把殴打八旬拾荒老人家属发声 (Family members of woman beating 80-year-old man scavenging with mop speak out)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%8C%81%E6%8B%96%E6%8A%8A%E6%AE%B4%E6%89%93%E5%85%AB%E6%97%AC%E6%8B%BE%E8%8D%92%E8%80%81%E4%BA%BA%E5%AE%B6%E5%B1%9E%E5%8F%91%E5%A3%B0%23) `54.1K 🔥`
1. [我已经吹不了25度的空调了](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%B7%B2%E7%BB%8F%E5%90%B9%E4%B8%8D%E4%BA%8625%E5%BA%A6%E7%9A%84%E7%A9%BA%E8%B0%83%E4%BA%86%23) `53.6K 🔥`
1. [女孩手臂超长轻松腕线过裆 (Girls' arms are super long and the wrist line easily passes through the crotch)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%A9%E6%89%8B%E8%87%82%E8%B6%85%E9%95%BF%E8%BD%BB%E6%9D%BE%E8%85%95%E7%BA%BF%E8%BF%87%E8%A3%86%23) `53.4K 🔥`
1. [盒马因受害咪连夜改冬瓜图 (Hema changed the picture of winter melon overnight due to victimization)](https://s.weibo.com/weibo?q=%23%E7%9B%92%E9%A9%AC%E5%9B%A0%E5%8F%97%E5%AE%B3%E5%92%AA%E8%BF%9E%E5%A4%9C%E6%94%B9%E5%86%AC%E7%93%9C%E5%9B%BE%23) `49.1K 🔥`
1. [吕洞宾建模 杨洋](https://s.weibo.com/weibo?q=%23%E5%90%95%E6%B4%9E%E5%AE%BE%E5%BB%BA%E6%A8%A1%20%E6%9D%A8%E6%B4%8B%23) `48.7K 🔥`
1. [第1次见女主怀孕相亲](https://s.weibo.com/weibo?q=%23%E7%AC%AC1%E6%AC%A1%E8%A7%81%E5%A5%B3%E4%B8%BB%E6%80%80%E5%AD%95%E7%9B%B8%E4%BA%B2%23) `48.6K 🔥`
1. [以后快递地址只写到小区](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E5%90%8E%E5%BF%AB%E9%80%92%E5%9C%B0%E5%9D%80%E5%8F%AA%E5%86%99%E5%88%B0%E5%B0%8F%E5%8C%BA%23) `644.5K 🔥` `-37%`
1. [长沙人是瞒着我们进化了吗 (Did the people of Changsha evolve without telling us?)](https://s.weibo.com/weibo?q=%23%E9%95%BF%E6%B2%99%E4%BA%BA%E6%98%AF%E7%9E%92%E7%9D%80%E6%88%91%E4%BB%AC%E8%BF%9B%E5%8C%96%E4%BA%86%E5%90%97%23) `136.4K 🔥` `-44%`
1. [白鹿新公司名 (Bailu new company name)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E6%96%B0%E5%85%AC%E5%8F%B8%E5%90%8D%23) `130.2K 🔥` `-67%`
1. [砸穿民宅陨石携带外星生命催化剂](https://s.weibo.com/weibo?q=%23%E7%A0%B8%E7%A9%BF%E6%B0%91%E5%AE%85%E9%99%A8%E7%9F%B3%E6%90%BA%E5%B8%A6%E5%A4%96%E6%98%9F%E7%94%9F%E5%91%BD%E5%82%AC%E5%8C%96%E5%89%82%23) `112.1K 🔥` `-42%`
1. [何瑞贤化妆技术比化妆师还好 (He Ruixian’s makeup skills are better than those of makeup artists)](https://s.weibo.com/weibo?q=%23%E4%BD%95%E7%91%9E%E8%B4%A4%E5%8C%96%E5%A6%86%E6%8A%80%E6%9C%AF%E6%AF%94%E5%8C%96%E5%A6%86%E5%B8%88%E8%BF%98%E5%A5%BD%23) `71.6K 🔥` `-82%`

Updated at 2026-07-17 07:40:24

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
