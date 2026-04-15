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

1. [胶州网约车司机为抢充电桩杀人是谣言 (It’s a rumor that a Jiaozhou online ride-hailing driver killed someone for grabbing a charging pile)](https://s.weibo.com/weibo?q=%23%E8%83%B6%E5%B7%9E%E7%BD%91%E7%BA%A6%E8%BD%A6%E5%8F%B8%E6%9C%BA%E4%B8%BA%E6%8A%A2%E5%85%85%E7%94%B5%E6%A1%A9%E6%9D%80%E4%BA%BA%E6%98%AF%E8%B0%A3%E8%A8%80%23) `37.0K 🔥` `NEW`
1. [北京国际电影节阵容](https://s.weibo.com/weibo?q=%23%E5%8C%97%E4%BA%AC%E5%9B%BD%E9%99%85%E7%94%B5%E5%BD%B1%E8%8A%82%E9%98%B5%E5%AE%B9%23) `29.4K 🔥` `NEW`
1. [于适北影节彩排生图](https://s.weibo.com/weibo?q=%23%E4%BA%8E%E9%80%82%E5%8C%97%E5%BD%B1%E8%8A%82%E5%BD%A9%E6%8E%92%E7%94%9F%E5%9B%BE%23) `20.4K 🔥` `NEW`
1. [周深新歌好强的感染力](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%B7%B1%E6%96%B0%E6%AD%8C%E5%A5%BD%E5%BC%BA%E7%9A%84%E6%84%9F%E6%9F%93%E5%8A%9B%23) `20.4K 🔥` `NEW`
1. [刘宇宁演唱会](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AE%87%E5%AE%81%E6%BC%94%E5%94%B1%E4%BC%9A%23) `20.3K 🔥` `NEW`
1. [美海关4月20日启动关税退款](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E6%B5%B7%E5%85%B34%E6%9C%8820%E6%97%A5%E5%90%AF%E5%8A%A8%E5%85%B3%E7%A8%8E%E9%80%80%E6%AC%BE%23) `20.3K 🔥` `NEW`
1. [多条东南亚航线突然取消原因曝光](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E6%9D%A1%E4%B8%9C%E5%8D%97%E4%BA%9A%E8%88%AA%E7%BA%BF%E7%AA%81%E7%84%B6%E5%8F%96%E6%B6%88%E5%8E%9F%E5%9B%A0%E6%9B%9D%E5%85%89%23) `59.2K 🔥` `+62%`
1. [张雪机车实缴资本仅1200万](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%E5%AE%9E%E7%BC%B4%E8%B5%84%E6%9C%AC%E4%BB%851200%E4%B8%87%23) `30.4K 🔥`
1. [伊朗警告美持续封锁是破坏停火前奏](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E8%AD%A6%E5%91%8A%E7%BE%8E%E6%8C%81%E7%BB%AD%E5%B0%81%E9%94%81%E6%98%AF%E7%A0%B4%E5%9D%8F%E5%81%9C%E7%81%AB%E5%89%8D%E5%A5%8F%23) `30.1K 🔥`
1. [80万开店倒闭又投40万开店小伙发声 (A shop that opened with RMB 800,000 went bankrupt and another guy who invested RMB 400,000 to open a shop speaks out.)](https://s.weibo.com/weibo?q=%2380%E4%B8%87%E5%BC%80%E5%BA%97%E5%80%92%E9%97%AD%E5%8F%88%E6%8A%9540%E4%B8%87%E5%BC%80%E5%BA%97%E5%B0%8F%E4%BC%99%E5%8F%91%E5%A3%B0%23) `83.5K 🔥` `-74%`
1. [广交会增设智能穿戴等9大专区](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E4%BA%A4%E4%BC%9A%E5%A2%9E%E8%AE%BE%E6%99%BA%E8%83%BD%E7%A9%BF%E6%88%B4%E7%AD%899%E5%A4%A7%E4%B8%93%E5%8C%BA%23) `48.3K 🔥` `-73%`
1. [阚清子孙怡还没和好吗 (Kan Qingzi and Sun Yi haven't reconciled yet?)](https://s.weibo.com/weibo?q=%23%E9%98%9A%E6%B8%85%E5%AD%90%E5%AD%99%E6%80%A1%E8%BF%98%E6%B2%A1%E5%92%8C%E5%A5%BD%E5%90%97%23) `48.1K 🔥` `-73%`
1. [被臭味yue上热搜的记者发声](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E8%87%AD%E5%91%B3yue%E4%B8%8A%E7%83%AD%E6%90%9C%E7%9A%84%E8%AE%B0%E8%80%85%E5%8F%91%E5%A3%B0%23) `47.6K 🔥` `-63%`
1. [孟子义李昀锐 等风热吻你 (Meng Ziyi and Li Yunrui waiting for the wind to kiss you passionately)](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89%E6%9D%8E%E6%98%80%E9%94%90%20%E7%AD%89%E9%A3%8E%E7%83%AD%E5%90%BB%E4%BD%A0%23) `37.0K 🔥` `-55%`
1. [美国将退还超1万亿元关税](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E5%B0%86%E9%80%80%E8%BF%98%E8%B6%851%E4%B8%87%E4%BA%BF%E5%85%83%E5%85%B3%E7%A8%8E%23) `35.4K 🔥` `-84%`
1. [24岁抗癌博主徐平安去世](https://s.weibo.com/weibo?q=%2324%E5%B2%81%E6%8A%97%E7%99%8C%E5%8D%9A%E4%B8%BB%E5%BE%90%E5%B9%B3%E5%AE%89%E5%8E%BB%E4%B8%96%23) `31.2K 🔥` `-61%`
1. [伊朗美制通信设备遇袭时集体失灵](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E7%BE%8E%E5%88%B6%E9%80%9A%E4%BF%A1%E8%AE%BE%E5%A4%87%E9%81%87%E8%A2%AD%E6%97%B6%E9%9B%86%E4%BD%93%E5%A4%B1%E7%81%B5%23) `30.8K 🔥` `-54%`
1. [骑车遭开门杀致1人被碾压身亡](https://s.weibo.com/weibo?q=%23%E9%AA%91%E8%BD%A6%E9%81%AD%E5%BC%80%E9%97%A8%E6%9D%80%E8%87%B41%E4%BA%BA%E8%A2%AB%E7%A2%BE%E5%8E%8B%E8%BA%AB%E4%BA%A1%23) `30.1K 🔥` `-36%`
1. [何润东说翻红后接到很多工作邀约](https://s.weibo.com/weibo?q=%23%E4%BD%95%E6%B6%A6%E4%B8%9C%E8%AF%B4%E7%BF%BB%E7%BA%A2%E5%90%8E%E6%8E%A5%E5%88%B0%E5%BE%88%E5%A4%9A%E5%B7%A5%E4%BD%9C%E9%82%80%E7%BA%A6%23) `29.6K 🔥` `-33%`
1. [法国罕见全票通过文物归还法案](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%9B%BD%E7%BD%95%E8%A7%81%E5%85%A8%E7%A5%A8%E9%80%9A%E8%BF%87%E6%96%87%E7%89%A9%E5%BD%92%E8%BF%98%E6%B3%95%E6%A1%88%23) `29.6K 🔥` `-38%`
1. [尹锡悦笑看金建希却惨遭无视](https://s.weibo.com/weibo?q=%23%E5%B0%B9%E9%94%A1%E6%82%A6%E7%AC%91%E7%9C%8B%E9%87%91%E5%BB%BA%E5%B8%8C%E5%8D%B4%E6%83%A8%E9%81%AD%E6%97%A0%E8%A7%86%23) `29.4K 🔥` `-26%`
1. [白日提灯 双结局](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%97%A5%E6%8F%90%E7%81%AF%20%E5%8F%8C%E7%BB%93%E5%B1%80%23) `29.2K 🔥` `-28%`
1. [自如老师 侵权 (Teacher Ziru infringement)](https://s.weibo.com/weibo?q=%23%E8%87%AA%E5%A6%82%E8%80%81%E5%B8%88%20%E4%BE%B5%E6%9D%83%23) `23.6K 🔥` `-57%`
1. [母亲喊女儿吃饭才惊觉其已遇害530天 (The mother called her daughter for dinner only to realize that it had been 530 days since her death)](https://s.weibo.com/weibo?q=%23%E6%AF%8D%E4%BA%B2%E5%96%8A%E5%A5%B3%E5%84%BF%E5%90%83%E9%A5%AD%E6%89%8D%E6%83%8A%E8%A7%89%E5%85%B6%E5%B7%B2%E9%81%87%E5%AE%B3530%E5%A4%A9%23) `21.7K 🔥` `-41%`
1. [在德读硕中国小伙多次下药迷奸女友](https://s.weibo.com/weibo?q=%23%E5%9C%A8%E5%BE%B7%E8%AF%BB%E7%A1%95%E4%B8%AD%E5%9B%BD%E5%B0%8F%E4%BC%99%E5%A4%9A%E6%AC%A1%E4%B8%8B%E8%8D%AF%E8%BF%B7%E5%A5%B8%E5%A5%B3%E5%8F%8B%23) `21.4K 🔥` `-42%`
1. [by2空中劈叉直接给我看傻了](https://s.weibo.com/weibo?q=%23by2%E7%A9%BA%E4%B8%AD%E5%8A%88%E5%8F%89%E7%9B%B4%E6%8E%A5%E7%BB%99%E6%88%91%E7%9C%8B%E5%82%BB%E4%BA%86%23) `20.8K 🔥` `-43%`
1. [警方回应15岁女孩遭班主任猥亵 (Police respond to reports that a 15-year-old girl was molested by her class teacher)](https://s.weibo.com/weibo?q=%23%E8%AD%A6%E6%96%B9%E5%9B%9E%E5%BA%9415%E5%B2%81%E5%A5%B3%E5%AD%A9%E9%81%AD%E7%8F%AD%E4%B8%BB%E4%BB%BB%E7%8C%A5%E4%BA%B5%23) `20.5K 🔥` `-45%`
1. [机器人切除肿瘤不彻底患者去世](https://s.weibo.com/weibo?q=%23%E6%9C%BA%E5%99%A8%E4%BA%BA%E5%88%87%E9%99%A4%E8%82%BF%E7%98%A4%E4%B8%8D%E5%BD%BB%E5%BA%95%E6%82%A3%E8%80%85%E5%8E%BB%E4%B8%96%23) `20.5K 🔥` `-44%`
1. [警方回应开门杀致1人被碾压身亡](https://s.weibo.com/weibo?q=%23%E8%AD%A6%E6%96%B9%E5%9B%9E%E5%BA%94%E5%BC%80%E9%97%A8%E6%9D%80%E8%87%B41%E4%BA%BA%E8%A2%AB%E7%A2%BE%E5%8E%8B%E8%BA%AB%E4%BA%A1%23) `20.5K 🔥` `-44%`
1. [张月17年的时候就没喝中药](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%8817%E5%B9%B4%E7%9A%84%E6%97%B6%E5%80%99%E5%B0%B1%E6%B2%A1%E5%96%9D%E4%B8%AD%E8%8D%AF%23) `20.5K 🔥` `-44%`
1. [连婚纱都遮不住她的律动](https://s.weibo.com/weibo?q=%23%E8%BF%9E%E5%A9%9A%E7%BA%B1%E9%83%BD%E9%81%AE%E4%B8%8D%E4%BD%8F%E5%A5%B9%E7%9A%84%E5%BE%8B%E5%8A%A8%23) `20.5K 🔥` `-44%`
1. [万能抑制食欲法](https://s.weibo.com/weibo?q=%23%E4%B8%87%E8%83%BD%E6%8A%91%E5%88%B6%E9%A3%9F%E6%AC%B2%E6%B3%95%23) `20.5K 🔥` `-47%`
1. [田曦薇张凌赫庆功宴小动作](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%BA%86%E5%8A%9F%E5%AE%B4%E5%B0%8F%E5%8A%A8%E4%BD%9C%23) `20.5K 🔥` `-46%`
1. [美国加征关税被最高法院裁定为非法](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E5%8A%A0%E5%BE%81%E5%85%B3%E7%A8%8E%E8%A2%AB%E6%9C%80%E9%AB%98%E6%B3%95%E9%99%A2%E8%A3%81%E5%AE%9A%E4%B8%BA%E9%9D%9E%E6%B3%95%23) `20.5K 🔥` `-44%`
1. [郑丽文返台后穿大陆定制中山装亮相 (Cheng Lai-wen wears a custom-made Chinese tunic suit after returning to Taiwan)](https://s.weibo.com/weibo?q=%23%E9%83%91%E4%B8%BD%E6%96%87%E8%BF%94%E5%8F%B0%E5%90%8E%E7%A9%BF%E5%A4%A7%E9%99%86%E5%AE%9A%E5%88%B6%E4%B8%AD%E5%B1%B1%E8%A3%85%E4%BA%AE%E7%9B%B8%23) `20.5K 🔥` `-44%`
1. [你好星期六](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E5%A5%BD%E6%98%9F%E6%9C%9F%E5%85%AD%23) `20.5K 🔥` `-44%`
1. [婴儿哭闹20分钟男乘客30秒哄好](https://s.weibo.com/weibo?q=%23%E5%A9%B4%E5%84%BF%E5%93%AD%E9%97%B920%E5%88%86%E9%92%9F%E7%94%B7%E4%B9%98%E5%AE%A230%E7%A7%92%E5%93%84%E5%A5%BD%23) `20.4K 🔥` `-44%`
1. [全国首例试管婴儿享工亡抚恤金](https://s.weibo.com/weibo?q=%23%E5%85%A8%E5%9B%BD%E9%A6%96%E4%BE%8B%E8%AF%95%E7%AE%A1%E5%A9%B4%E5%84%BF%E4%BA%AB%E5%B7%A5%E4%BA%A1%E6%8A%9A%E6%81%A4%E9%87%91%23) `20.4K 🔥` `-47%`
1. [DYG 误闯天家](https://s.weibo.com/weibo?q=%23DYG%20%E8%AF%AF%E9%97%AF%E5%A4%A9%E5%AE%B6%23) `20.4K 🔥` `-44%`
1. [男子遭开门杀碾压身亡目击者发声](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E9%81%AD%E5%BC%80%E9%97%A8%E6%9D%80%E7%A2%BE%E5%8E%8B%E8%BA%AB%E4%BA%A1%E7%9B%AE%E5%87%BB%E8%80%85%E5%8F%91%E5%A3%B0%23) `20.4K 🔥` `-44%`
1. [印度一男子举铁管赶猴碰高压线身亡](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%BA%A6%E4%B8%80%E7%94%B7%E5%AD%90%E4%B8%BE%E9%93%81%E7%AE%A1%E8%B5%B6%E7%8C%B4%E7%A2%B0%E9%AB%98%E5%8E%8B%E7%BA%BF%E8%BA%AB%E4%BA%A1%23) `20.4K 🔥` `-44%`
1. [班主任开房猥亵学生需要提级调查](https://s.weibo.com/weibo?q=%23%E7%8F%AD%E4%B8%BB%E4%BB%BB%E5%BC%80%E6%88%BF%E7%8C%A5%E4%BA%B5%E5%AD%A6%E7%94%9F%E9%9C%80%E8%A6%81%E6%8F%90%E7%BA%A7%E8%B0%83%E6%9F%A5%23) `20.4K 🔥` `-44%`
1. [翠花 自如老师](https://s.weibo.com/weibo?q=%23%E7%BF%A0%E8%8A%B1%20%E8%87%AA%E5%A6%82%E8%80%81%E5%B8%88%23) `20.4K 🔥` `-44%`
1. [贺峻霖完全青春男大](https://s.weibo.com/weibo?q=%23%E8%B4%BA%E5%B3%BB%E9%9C%96%E5%AE%8C%E5%85%A8%E9%9D%92%E6%98%A5%E7%94%B7%E5%A4%A7%23) `20.4K 🔥` `-46%`
1. [李清明开球新闻图 (Li Qingming kick-off news picture)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%B8%85%E6%98%8E%E5%BC%80%E7%90%83%E6%96%B0%E9%97%BB%E5%9B%BE%23) `20.4K 🔥` `-44%`
1. [蓝莓价格卷疯了](https://s.weibo.com/weibo?q=%23%E8%93%9D%E8%8E%93%E4%BB%B7%E6%A0%BC%E5%8D%B7%E7%96%AF%E4%BA%86%23) `20.4K 🔥` `-44%`
1. [WBG战胜iG (WBG defeated iG)](https://s.weibo.com/weibo?q=%23WBG%E6%88%98%E8%83%9CiG%23) `20.3K 🔥` `-44%`
1. [8岁女童化疗前冻存卵巢组织](https://s.weibo.com/weibo?q=%238%E5%B2%81%E5%A5%B3%E7%AB%A5%E5%8C%96%E7%96%97%E5%89%8D%E5%86%BB%E5%AD%98%E5%8D%B5%E5%B7%A2%E7%BB%84%E7%BB%87%23) `20.3K 🔥` `-44%`
1. [央视称小鹏GX为科技大成之作](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E7%A7%B0%E5%B0%8F%E9%B9%8FGX%E4%B8%BA%E7%A7%91%E6%8A%80%E5%A4%A7%E6%88%90%E4%B9%8B%E4%BD%9C%23) `20.3K 🔥` `-44%`
1. [KSG狼AGDYG一组](https://s.weibo.com/weibo?q=%23KSG%E7%8B%BCAGDYG%E4%B8%80%E7%BB%84%23) `20.3K 🔥` `-45%`

Updated at 2026-04-16 02:55:15

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
