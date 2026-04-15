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

1. [男子将好友骨灰撒高原梦到他说冷 (A man spread his friend's ashes on the plateau and dreamed that he was cold)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%B0%86%E5%A5%BD%E5%8F%8B%E9%AA%A8%E7%81%B0%E6%92%92%E9%AB%98%E5%8E%9F%E6%A2%A6%E5%88%B0%E4%BB%96%E8%AF%B4%E5%86%B7%23) `763.5K 🔥` `NEW`
1. [陈伟霆解锁新身份](https://s.weibo.com/weibo?q=%23%E9%99%88%E4%BC%9F%E9%9C%86%E8%A7%A3%E9%94%81%E6%96%B0%E8%BA%AB%E4%BB%BD%23) `609.7K 🔥` `NEW`
1. [阚清子孙怡还没和好吗](https://s.weibo.com/weibo?q=%23%E9%98%9A%E6%B8%85%E5%AD%90%E5%AD%99%E6%80%A1%E8%BF%98%E6%B2%A1%E5%92%8C%E5%A5%BD%E5%90%97%23) `538.1K 🔥` `NEW`
1. [机器人切除肿瘤不彻底患者去世](https://s.weibo.com/weibo?q=%23%E6%9C%BA%E5%99%A8%E4%BA%BA%E5%88%87%E9%99%A4%E8%82%BF%E7%98%A4%E4%B8%8D%E5%BD%BB%E5%BA%95%E6%82%A3%E8%80%85%E5%8E%BB%E4%B8%96%23) `409.7K 🔥` `NEW`
1. [是最脏排行榜不是必吃榜](https://s.weibo.com/weibo?q=%23%E6%98%AF%E6%9C%80%E8%84%8F%E6%8E%92%E8%A1%8C%E6%A6%9C%E4%B8%8D%E6%98%AF%E5%BF%85%E5%90%83%E6%A6%9C%23) `401.9K 🔥` `NEW`
1. [微博文化之夜倒计时3天](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E5%8D%9A%E6%96%87%E5%8C%96%E4%B9%8B%E5%A4%9C%E5%80%92%E8%AE%A1%E6%97%B63%E5%A4%A9%23) `380.5K 🔥` `NEW`
1. [婴儿哭闹20分钟男乘客30秒哄好](https://s.weibo.com/weibo?q=%23%E5%A9%B4%E5%84%BF%E5%93%AD%E9%97%B920%E5%88%86%E9%92%9F%E7%94%B7%E4%B9%98%E5%AE%A230%E7%A7%92%E5%93%84%E5%A5%BD%23) `276.0K 🔥` `NEW`
1. [骑车遭开门杀致1人被碾压身亡](https://s.weibo.com/weibo?q=%23%E9%AA%91%E8%BD%A6%E9%81%AD%E5%BC%80%E9%97%A8%E6%9D%80%E8%87%B41%E4%BA%BA%E8%A2%AB%E7%A2%BE%E5%8E%8B%E8%BA%AB%E4%BA%A1%23) `132.3K 🔥` `NEW`
1. [田曦薇张凌赫庆功宴小动作](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%BA%86%E5%8A%9F%E5%AE%B4%E5%B0%8F%E5%8A%A8%E4%BD%9C%23) `128.1K 🔥` `NEW`
1. [刘耀文空降](https://s.weibo.com/weibo?q=%23%E5%88%98%E8%80%80%E6%96%87%E7%A9%BA%E9%99%8D%23) `122.8K 🔥` `NEW`
1. [母亲喊女儿吃饭才惊觉其已遇害530天 (The mother called her daughter for dinner only to realize that it had been 530 days since her death)](https://s.weibo.com/weibo?q=%23%E6%AF%8D%E4%BA%B2%E5%96%8A%E5%A5%B3%E5%84%BF%E5%90%83%E9%A5%AD%E6%89%8D%E6%83%8A%E8%A7%89%E5%85%B6%E5%B7%B2%E9%81%87%E5%AE%B3530%E5%A4%A9%23) `111.9K 🔥` `NEW`
1. [沃尔沃纯电双旗舰开启预售](https://s.weibo.com/weibo?q=%23%E6%B2%83%E5%B0%94%E6%B2%83%E7%BA%AF%E7%94%B5%E5%8F%8C%E6%97%97%E8%88%B0%E5%BC%80%E5%90%AF%E9%A2%84%E5%94%AE%23) `109.5K 🔥` `NEW`
1. [iG对战WBG](https://s.weibo.com/weibo?q=%23iG%E5%AF%B9%E6%88%98WBG%23) `106.9K 🔥` `NEW`
1. [何润东谈张凌赫被评粉底液将军](https://s.weibo.com/weibo?q=%23%E4%BD%95%E6%B6%A6%E4%B8%9C%E8%B0%88%E5%BC%A0%E5%87%8C%E8%B5%AB%E8%A2%AB%E8%AF%84%E7%B2%89%E5%BA%95%E6%B6%B2%E5%B0%86%E5%86%9B%23) `105.9K 🔥` `NEW`
1. [郑丽文返台后穿大陆定制中山装亮相](https://s.weibo.com/weibo?q=%23%E9%83%91%E4%B8%BD%E6%96%87%E8%BF%94%E5%8F%B0%E5%90%8E%E7%A9%BF%E5%A4%A7%E9%99%86%E5%AE%9A%E5%88%B6%E4%B8%AD%E5%B1%B1%E8%A3%85%E4%BA%AE%E7%9B%B8%23) `104.1K 🔥` `NEW`
1. [朱一龙直播紧张到腿抖](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E4%B8%80%E9%BE%99%E7%9B%B4%E6%92%AD%E7%B4%A7%E5%BC%A0%E5%88%B0%E8%85%BF%E6%8A%96%23) `103.9K 🔥` `NEW`
1. [by2空中劈叉直接给我看傻了](https://s.weibo.com/weibo?q=%23by2%E7%A9%BA%E4%B8%AD%E5%8A%88%E5%8F%89%E7%9B%B4%E6%8E%A5%E7%BB%99%E6%88%91%E7%9C%8B%E5%82%BB%E4%BA%86%23) `103.1K 🔥` `NEW`
1. [白鹿蕾丝露肩](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E8%95%BE%E4%B8%9D%E9%9C%B2%E8%82%A9%23) `102.4K 🔥` `NEW`
1. [25万买沃尔沃豪华混动](https://s.weibo.com/weibo?q=%2325%E4%B8%87%E4%B9%B0%E6%B2%83%E5%B0%94%E6%B2%83%E8%B1%AA%E5%8D%8E%E6%B7%B7%E5%8A%A8%23) `101.9K 🔥` `NEW`
1. [唐艺昕产后两个月没有吃过米饭](https://s.weibo.com/weibo?q=%23%E5%94%90%E8%89%BA%E6%98%95%E4%BA%A7%E5%90%8E%E4%B8%A4%E4%B8%AA%E6%9C%88%E6%B2%A1%E6%9C%89%E5%90%83%E8%BF%87%E7%B1%B3%E9%A5%AD%23) `101.2K 🔥` `NEW`
1. [帮扶过欺骗B太女孩的热心人发声 (Enthusiastic people who have helped the girl who cheated on Mrs. B speak out)](https://s.weibo.com/weibo?q=%23%E5%B8%AE%E6%89%B6%E8%BF%87%E6%AC%BA%E9%AA%97B%E5%A4%AA%E5%A5%B3%E5%AD%A9%E7%9A%84%E7%83%AD%E5%BF%83%E4%BA%BA%E5%8F%91%E5%A3%B0%23) `94.5K 🔥` `NEW`
1. [28岁男子只睡2小时同事羡慕开了挂](https://s.weibo.com/weibo?q=%2328%E5%B2%81%E7%94%B7%E5%AD%90%E5%8F%AA%E7%9D%A12%E5%B0%8F%E6%97%B6%E5%90%8C%E4%BA%8B%E7%BE%A1%E6%85%95%E5%BC%80%E4%BA%86%E6%8C%82%23) `88.2K 🔥` `NEW`
1. [十个勤天不年不节发视频](https://s.weibo.com/weibo?q=%23%E5%8D%81%E4%B8%AA%E5%8B%A4%E5%A4%A9%E4%B8%8D%E5%B9%B4%E4%B8%8D%E8%8A%82%E5%8F%91%E8%A7%86%E9%A2%91%23) `81.3K 🔥` `NEW`
1. [吴慷仁说大陆优秀的演员太多了](https://s.weibo.com/weibo?q=%23%E5%90%B4%E6%85%B7%E4%BB%81%E8%AF%B4%E5%A4%A7%E9%99%86%E4%BC%98%E7%A7%80%E7%9A%84%E6%BC%94%E5%91%98%E5%A4%AA%E5%A4%9A%E4%BA%86%23) `80.7K 🔥` `NEW`
1. [电竞选手调薪](https://s.weibo.com/weibo?q=%23%E7%94%B5%E7%AB%9E%E9%80%89%E6%89%8B%E8%B0%83%E8%96%AA%23) `78.9K 🔥` `NEW`
1. [蜜语纪热度超过月鳞绮纪](https://s.weibo.com/weibo?q=%23%E8%9C%9C%E8%AF%AD%E7%BA%AA%E7%83%AD%E5%BA%A6%E8%B6%85%E8%BF%87%E6%9C%88%E9%B3%9E%E7%BB%AE%E7%BA%AA%23) `76.7K 🔥` `NEW`
1. [SYG获夏季赛席位](https://s.weibo.com/weibo?q=%23SYG%E8%8E%B7%E5%A4%8F%E5%AD%A3%E8%B5%9B%E5%B8%AD%E4%BD%8D%23) `75.2K 🔥` `NEW`
1. [美伊原则上同意延长停火](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E4%BC%8A%E5%8E%9F%E5%88%99%E4%B8%8A%E5%90%8C%E6%84%8F%E5%BB%B6%E9%95%BF%E5%81%9C%E7%81%AB%23) `67.7K 🔥` `NEW`
1. [B太回应曝光大山女孩事件](https://s.weibo.com/weibo?q=%23B%E5%A4%AA%E5%9B%9E%E5%BA%94%E6%9B%9D%E5%85%89%E5%A4%A7%E5%B1%B1%E5%A5%B3%E5%AD%A9%E4%BA%8B%E4%BB%B6%23) `67.5K 🔥` `NEW`
1. [万能抑制食欲法 (Universal Appetite Suppressant)](https://s.weibo.com/weibo?q=%23%E4%B8%87%E8%83%BD%E6%8A%91%E5%88%B6%E9%A3%9F%E6%AC%B2%E6%B3%95%23) `205.7K 🔥` `+116%`
1. [美国将退还超1万亿元关税 (The United States will refund more than 1 trillion yuan in tariffs)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E5%B0%86%E9%80%80%E8%BF%98%E8%B6%851%E4%B8%87%E4%BA%BF%E5%85%83%E5%85%B3%E7%A8%8E%23) `1.0M 🔥`
1. [广交会增设智能穿戴等9大专区](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E4%BA%A4%E4%BC%9A%E5%A2%9E%E8%AE%BE%E6%99%BA%E8%83%BD%E7%A9%BF%E6%88%B4%E7%AD%899%E5%A4%A7%E4%B8%93%E5%8C%BA%23) `611.2K 🔥`
1. [皮蛋黄瓜汤 (Preserved egg and cucumber soup)](https://s.weibo.com/weibo?q=%23%E7%9A%AE%E8%9B%8B%E9%BB%84%E7%93%9C%E6%B1%A4%23) `136.5K 🔥`
1. [姚安娜代言华为 (Anna Yao endorses Huawei)](https://s.weibo.com/weibo?q=%23%E5%A7%9A%E5%AE%89%E5%A8%9C%E4%BB%A3%E8%A8%80%E5%8D%8E%E4%B8%BA%23) `134.5K 🔥`
1. [白日提灯 双结局 (Lantern by Day Double Ending)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%97%A5%E6%8F%90%E7%81%AF%20%E5%8F%8C%E7%BB%93%E5%B1%80%23) `115.9K 🔥`
1. [沃尔沃发布会](https://s.weibo.com/weibo?q=%23%E6%B2%83%E5%B0%94%E6%B2%83%E5%8F%91%E5%B8%83%E4%BC%9A%23) `106.7K 🔥`
1. [沈腾你干脆躺马丽怀里得了呗](https://s.weibo.com/weibo?q=%23%E6%B2%88%E8%85%BE%E4%BD%A0%E5%B9%B2%E8%84%86%E8%BA%BA%E9%A9%AC%E4%B8%BD%E6%80%80%E9%87%8C%E5%BE%97%E4%BA%86%E5%91%97%23) `105.7K 🔥`
1. [在德读硕中国小伙多次下药迷奸女友 (A Chinese guy studying for a master's degree in Germany drugged and raped his girlfriend multiple times)](https://s.weibo.com/weibo?q=%23%E5%9C%A8%E5%BE%B7%E8%AF%BB%E7%A1%95%E4%B8%AD%E5%9B%BD%E5%B0%8F%E4%BC%99%E5%A4%9A%E6%AC%A1%E4%B8%8B%E8%8D%AF%E8%BF%B7%E5%A5%B8%E5%A5%B3%E5%8F%8B%23) `104.9K 🔥`
1. [小米上线电池升级服务](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E4%B8%8A%E7%BA%BF%E7%94%B5%E6%B1%A0%E5%8D%87%E7%BA%A7%E6%9C%8D%E5%8A%A1%23) `104.1K 🔥`
1. [女霸总余额880万谈恋爱总要钱](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E9%9C%B8%E6%80%BB%E4%BD%99%E9%A2%9D880%E4%B8%87%E8%B0%88%E6%81%8B%E7%88%B1%E6%80%BB%E8%A6%81%E9%92%B1%23) `103.6K 🔥`
1. [曝宋宁峰近况 (Revealing Song Ningfeng’s recent situation)](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%AE%8B%E5%AE%81%E5%B3%B0%E8%BF%91%E5%86%B5%23) `103.2K 🔥`
1. [网红炫迈妹子被猫误伤毁容](https://s.weibo.com/weibo?q=%23%E7%BD%91%E7%BA%A2%E7%82%AB%E8%BF%88%E5%A6%B9%E5%AD%90%E8%A2%AB%E7%8C%AB%E8%AF%AF%E4%BC%A4%E6%AF%81%E5%AE%B9%23) `101.4K 🔥`
1. [连婚纱都遮不住她的律动](https://s.weibo.com/weibo?q=%23%E8%BF%9E%E5%A9%9A%E7%BA%B1%E9%83%BD%E9%81%AE%E4%B8%8D%E4%BD%8F%E5%A5%B9%E7%9A%84%E5%BE%8B%E5%8A%A8%23) `101.1K 🔥`
1. [曝张豆豆两年前有的宝宝](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%BC%A0%E8%B1%86%E8%B1%86%E4%B8%A4%E5%B9%B4%E5%89%8D%E6%9C%89%E7%9A%84%E5%AE%9D%E5%AE%9D%23) `92.4K 🔥`
1. [唐禹哲承认逃兵役](https://s.weibo.com/weibo?q=%23%E5%94%90%E7%A6%B9%E5%93%B2%E6%89%BF%E8%AE%A4%E9%80%83%E5%85%B5%E5%BD%B9%23) `89.0K 🔥`
1. [痞幼胖了17斤](https://s.weibo.com/weibo?q=%23%E7%97%9E%E5%B9%BC%E8%83%96%E4%BA%8617%E6%96%A4%23) `87.7K 🔥`
1. [孟子义李昀锐 等风热吻你 (Meng Ziyi and Li Yunrui waiting for the wind to kiss you passionately)](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89%E6%9D%8E%E6%98%80%E9%94%90%20%E7%AD%89%E9%A3%8E%E7%83%AD%E5%90%BB%E4%BD%A0%23) `316.5K 🔥` `-31%`
1. [法国罕见全票通过文物归还法案 (France passes a rare unanimous vote to repatriate cultural relics)](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%9B%BD%E7%BD%95%E8%A7%81%E5%85%A8%E7%A5%A8%E9%80%9A%E8%BF%87%E6%96%87%E7%89%A9%E5%BD%92%E8%BF%98%E6%B3%95%E6%A1%88%23) `119.9K 🔥` `-59%`
1. [俄方提出帮助中国弥补能源短缺](https://s.weibo.com/weibo?q=%23%E4%BF%84%E6%96%B9%E6%8F%90%E5%87%BA%E5%B8%AE%E5%8A%A9%E4%B8%AD%E5%9B%BD%E5%BC%A5%E8%A1%A5%E8%83%BD%E6%BA%90%E7%9F%AD%E7%BC%BA%23) `102.7K 🔥` `-38%`
1. [何润东说翻红后接到很多工作邀约](https://s.weibo.com/weibo?q=%23%E4%BD%95%E6%B6%A6%E4%B8%9C%E8%AF%B4%E7%BF%BB%E7%BA%A2%E5%90%8E%E6%8E%A5%E5%88%B0%E5%BE%88%E5%A4%9A%E5%B7%A5%E4%BD%9C%E9%82%80%E7%BA%A6%23) `102.2K 🔥` `-49%`
1. [中国三胞胎的视频在推特上火了 (Video of Chinese triplets goes viral on Twitter)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E4%B8%89%E8%83%9E%E8%83%8E%E7%9A%84%E8%A7%86%E9%A2%91%E5%9C%A8%E6%8E%A8%E7%89%B9%E4%B8%8A%E7%81%AB%E4%BA%86%23) `81.4K 🔥` `-90%`
1. [灵隐寺严正声明 (Lingyin Temple solemn statement)](https://s.weibo.com/weibo?q=%23%E7%81%B5%E9%9A%90%E5%AF%BA%E4%B8%A5%E6%AD%A3%E5%A3%B0%E6%98%8E%23) `67.5K 🔥` `-64%`

Updated at 2026-04-15 22:16:10

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
