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

1. [重庆大学实验室爆炸现场血迹明显 (There were obvious blood stains at the explosion site of Chongqing University laboratory)](https://s.weibo.com/weibo?q=%23%E9%87%8D%E5%BA%86%E5%A4%A7%E5%AD%A6%E5%AE%9E%E9%AA%8C%E5%AE%A4%E7%88%86%E7%82%B8%E7%8E%B0%E5%9C%BA%E8%A1%80%E8%BF%B9%E6%98%8E%E6%98%BE%23) `395.4K 🔥` `+62%`
1. [梅姨到哪也不出示身份证 (Aunt Mei never shows her ID card wherever she goes.)](https://s.weibo.com/weibo?q=%23%E6%A2%85%E5%A7%A8%E5%88%B0%E5%93%AA%E4%B9%9F%E4%B8%8D%E5%87%BA%E7%A4%BA%E8%BA%AB%E4%BB%BD%E8%AF%81%23) `283.9K 🔥` `+59%`
1. [2026全国寻春地图 (2026 National Spring Search Map)](https://s.weibo.com/weibo?q=%232026%E5%85%A8%E5%9B%BD%E5%AF%BB%E6%98%A5%E5%9C%B0%E5%9B%BE%23) `230.9K 🔥` `+59%`
1. [梅姨平时说媒背地贩卖小孩 (Aunt Mei usually uses matchmakers to sell children behind her back.)](https://s.weibo.com/weibo?q=%23%E6%A2%85%E5%A7%A8%E5%B9%B3%E6%97%B6%E8%AF%B4%E5%AA%92%E8%83%8C%E5%9C%B0%E8%B4%A9%E5%8D%96%E5%B0%8F%E5%AD%A9%23) `46.5K 🔥` `+84%`
1. [高市访问埋葬广岛原子弹投弹手公墓 (Takaichi visits the Hiroshima Atomic Bomber Cemetery where the bombers are buried)](https://s.weibo.com/weibo?q=%23%E9%AB%98%E5%B8%82%E8%AE%BF%E9%97%AE%E5%9F%8B%E8%91%AC%E5%B9%BF%E5%B2%9B%E5%8E%9F%E5%AD%90%E5%BC%B9%E6%8A%95%E5%BC%B9%E6%89%8B%E5%85%AC%E5%A2%93%23) `41.8K 🔥` `+33%`
1. [当年亲爱的热爱的被泄漏反创新高](https://s.weibo.com/weibo?q=%23%E5%BD%93%E5%B9%B4%E4%BA%B2%E7%88%B1%E7%9A%84%E7%83%AD%E7%88%B1%E7%9A%84%E8%A2%AB%E6%B3%84%E6%BC%8F%E5%8F%8D%E5%88%9B%E6%96%B0%E9%AB%98%23) `40.8K 🔥` `+28%`
1. [英国曼彻斯特桥洞下惊现中国烧烤摊 (A Chinese barbecue stall appears under a bridge in Manchester, UK)](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E5%9B%BD%E6%9B%BC%E5%BD%BB%E6%96%AF%E7%89%B9%E6%A1%A5%E6%B4%9E%E4%B8%8B%E6%83%8A%E7%8E%B0%E4%B8%AD%E5%9B%BD%E7%83%A7%E7%83%A4%E6%91%8A%23) `37.1K 🔥` `+47%`
1. [遭派出所民警猥亵女生父亲申请抗诉 (The father of a girl who was molested by the police station files for protest)](https://s.weibo.com/weibo?q=%23%E9%81%AD%E6%B4%BE%E5%87%BA%E6%89%80%E6%B0%91%E8%AD%A6%E7%8C%A5%E4%BA%B5%E5%A5%B3%E7%94%9F%E7%88%B6%E4%BA%B2%E7%94%B3%E8%AF%B7%E6%8A%97%E8%AF%89%23) `33.4K 🔥` `+33%`
1. [女子制售自拍淫秽视频获刑3年 (Woman sentenced to 3 years in prison for producing and selling self-made obscene videos)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%88%B6%E5%94%AE%E8%87%AA%E6%8B%8D%E6%B7%AB%E7%A7%BD%E8%A7%86%E9%A2%91%E8%8E%B7%E5%88%913%E5%B9%B4%23) `33.2K 🔥` `+32%`
1. [内塔尼亚胡鼓动地面进攻伊朗 (Netanyahu encourages ground attack on Iran)](https://s.weibo.com/weibo?q=%23%E5%86%85%E5%A1%94%E5%B0%BC%E4%BA%9A%E8%83%A1%E9%BC%93%E5%8A%A8%E5%9C%B0%E9%9D%A2%E8%BF%9B%E6%94%BB%E4%BC%8A%E6%9C%97%23) `33.2K 🔥` `+32%`
1. [这段话杀死了我的精神内耗](https://s.weibo.com/weibo?q=%23%E8%BF%99%E6%AE%B5%E8%AF%9D%E6%9D%80%E6%AD%BB%E4%BA%86%E6%88%91%E7%9A%84%E7%B2%BE%E7%A5%9E%E5%86%85%E8%80%97%23) `33.0K 🔥` `+31%`
1. [梅姨为何能潜逃藏匿十余年](https://s.weibo.com/weibo?q=%23%E6%A2%85%E5%A7%A8%E4%B8%BA%E4%BD%95%E8%83%BD%E6%BD%9C%E9%80%83%E8%97%8F%E5%8C%BF%E5%8D%81%E4%BD%99%E5%B9%B4%23) `33.0K 🔥` `+32%`
1. [美国内部吵成一锅粥](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E5%86%85%E9%83%A8%E5%90%B5%E6%88%90%E4%B8%80%E9%94%85%E7%B2%A5%23) `32.9K 🔥` `+50%`
1. [阿娇的邪修减肥法是刷牙](https://s.weibo.com/weibo?q=%23%E9%98%BF%E5%A8%87%E7%9A%84%E9%82%AA%E4%BF%AE%E5%87%8F%E8%82%A5%E6%B3%95%E6%98%AF%E5%88%B7%E7%89%99%23) `31.2K 🔥` `+42%`
1. [出车祸私了后发现9级伤残](https://s.weibo.com/weibo?q=%23%E5%87%BA%E8%BD%A6%E7%A5%B8%E7%A7%81%E4%BA%86%E5%90%8E%E5%8F%91%E7%8E%B09%E7%BA%A7%E4%BC%A4%E6%AE%8B%23) `30.9K 🔥` `+23%`
1. [曝梁小龙去世两个月没下葬将停棺10年 (It is revealed that Liang Xiaolong died and was not buried for two months and will remain in coffin for 10 years)](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%A2%81%E5%B0%8F%E9%BE%99%E5%8E%BB%E4%B8%96%E4%B8%A4%E4%B8%AA%E6%9C%88%E6%B2%A1%E4%B8%8B%E8%91%AC%E5%B0%86%E5%81%9C%E6%A3%BA10%E5%B9%B4%23) `30.7K 🔥` `+40%`
1. [小区旁400万吨垃圾被挖出来了 (4 million tons of garbage were dug out next to the community)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%8C%BA%E6%97%81400%E4%B8%87%E5%90%A8%E5%9E%83%E5%9C%BE%E8%A2%AB%E6%8C%96%E5%87%BA%E6%9D%A5%E4%BA%86%23) `27.1K 🔥` `+21%`
1. [鹿晗 关晓彤 (Lu Han Guan Xiaotong)](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%20%E5%85%B3%E6%99%93%E5%BD%A4%23) `27.0K 🔥` `+23%`
1. [逐玉 删戏份 (Chasing Jade deleted scenes)](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%20%E5%88%A0%E6%88%8F%E4%BB%BD%23) `26.9K 🔥` `+22%`
1. [葛夕公布体检报告 (Ge Xi releases physical examination report)](https://s.weibo.com/weibo?q=%23%E8%91%9B%E5%A4%95%E5%85%AC%E5%B8%83%E4%BD%93%E6%A3%80%E6%8A%A5%E5%91%8A%23) `26.8K 🔥` `+22%`
1. [泄露逐玉可判刑10年 (Leaking Zhuyu could lead to 10 years in prison)](https://s.weibo.com/weibo?q=%23%E6%B3%84%E9%9C%B2%E9%80%90%E7%8E%89%E5%8F%AF%E5%88%A4%E5%88%9110%E5%B9%B4%23) `26.6K 🔥` `+21%`
1. [重大实验室爆炸疑因操作不当引发 (Major laboratory explosion suspected to have been caused by improper operation)](https://s.weibo.com/weibo?q=%23%E9%87%8D%E5%A4%A7%E5%AE%9E%E9%AA%8C%E5%AE%A4%E7%88%86%E7%82%B8%E7%96%91%E5%9B%A0%E6%93%8D%E4%BD%9C%E4%B8%8D%E5%BD%93%E5%BC%95%E5%8F%91%23) `26.6K 🔥` `+21%`
1. [伊朗手中握有真正的筹码 (Iran holds real leverage)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%89%8B%E4%B8%AD%E6%8F%A1%E6%9C%89%E7%9C%9F%E6%AD%A3%E7%9A%84%E7%AD%B9%E7%A0%81%23) `26.5K 🔥` `+21%`
1. [隐身的名字 (invisible name)](https://s.weibo.com/weibo?q=%23%E9%9A%90%E8%BA%AB%E7%9A%84%E5%90%8D%E5%AD%97%23) `37.1K 🔥`
1. [季冠霖发文抵制AI (Ji Guanlin issued a letter boycotting AI)](https://s.weibo.com/weibo?q=%23%E5%AD%A3%E5%86%A0%E9%9C%96%E5%8F%91%E6%96%87%E6%8A%B5%E5%88%B6AI%23) `35.1K 🔥`
1. [梅姨2年内拐卖9名儿童 (Aunt Mei abducted 9 children in 2 years)](https://s.weibo.com/weibo?q=%23%E6%A2%85%E5%A7%A82%E5%B9%B4%E5%86%85%E6%8B%90%E5%8D%969%E5%90%8D%E5%84%BF%E7%AB%A5%23) `33.4K 🔥`
1. [倪妮生理性演技 (Ni Ni's physiological acting skills)](https://s.weibo.com/weibo?q=%23%E5%80%AA%E5%A6%AE%E7%94%9F%E7%90%86%E6%80%A7%E6%BC%94%E6%8A%80%23) `23.4K 🔥`
1. [梅姨曾与60多岁老人同居2年 (Aunt Mei once lived with an old man in his 60s for 2 years)](https://s.weibo.com/weibo?q=%23%E6%A2%85%E5%A7%A8%E6%9B%BE%E4%B8%8E60%E5%A4%9A%E5%B2%81%E8%80%81%E4%BA%BA%E5%90%8C%E5%B1%852%E5%B9%B4%23) `22.5K 🔥`
1. [G2虐泉GEN](https://s.weibo.com/weibo?q=%23G2%E8%99%90%E6%B3%89GEN%23) `22.4K 🔥`
1. [梅姨同居男友都看不到她的身份证 (Even Aunt Mei’s live-in boyfriend can’t see her ID card)](https://s.weibo.com/weibo?q=%23%E6%A2%85%E5%A7%A8%E5%90%8C%E5%B1%85%E7%94%B7%E5%8F%8B%E9%83%BD%E7%9C%8B%E4%B8%8D%E5%88%B0%E5%A5%B9%E7%9A%84%E8%BA%AB%E4%BB%BD%E8%AF%81%23) `20.9K 🔥`
1. [伊朗称正在霍尔木兹采取重大行动 (Iran says it is taking major action in Hormuz)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E7%A7%B0%E6%AD%A3%E5%9C%A8%E9%9C%8D%E5%B0%94%E6%9C%A8%E5%85%B9%E9%87%87%E5%8F%96%E9%87%8D%E5%A4%A7%E8%A1%8C%E5%8A%A8%23) `20.9K 🔥`
1. [9省份11所高校由学院升格为大学 (11 universities in 9 provinces were upgraded from colleges to universities)](https://s.weibo.com/weibo?q=%239%E7%9C%81%E4%BB%BD11%E6%89%80%E9%AB%98%E6%A0%A1%E7%94%B1%E5%AD%A6%E9%99%A2%E5%8D%87%E6%A0%BC%E4%B8%BA%E5%A4%A7%E5%AD%A6%23) `20.9K 🔥`
1. [迪丽热巴新经纪人疑似回应入职嘉行 (Dilireba’s new agent seems to respond to joining Jiaxing)](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E6%96%B0%E7%BB%8F%E7%BA%AA%E4%BA%BA%E7%96%91%E4%BC%BC%E5%9B%9E%E5%BA%94%E5%85%A5%E8%81%8C%E5%98%89%E8%A1%8C%23) `20.9K 🔥`
1. [发现父母老去只是一瞬间的事](https://s.weibo.com/weibo?q=%23%E5%8F%91%E7%8E%B0%E7%88%B6%E6%AF%8D%E8%80%81%E5%8E%BB%E5%8F%AA%E6%98%AF%E4%B8%80%E7%9E%AC%E9%97%B4%E7%9A%84%E4%BA%8B%23) `20.9K 🔥`
1. [警方曾释放梅姨不存在的信号 (The police once released a signal that Aunt May did not exist)](https://s.weibo.com/weibo?q=%23%E8%AD%A6%E6%96%B9%E6%9B%BE%E9%87%8A%E6%94%BE%E6%A2%85%E5%A7%A8%E4%B8%8D%E5%AD%98%E5%9C%A8%E7%9A%84%E4%BF%A1%E5%8F%B7%23) `20.9K 🔥`
1. [云旗高定 (Yunqi Haute Couture)](https://s.weibo.com/weibo?q=%23%E4%BA%91%E6%97%97%E9%AB%98%E5%AE%9A%23) `20.9K 🔥`
1. [怕揭伤疤不想告诉儿子梅姨落网](https://s.weibo.com/weibo?q=%23%E6%80%95%E6%8F%AD%E4%BC%A4%E7%96%A4%E4%B8%8D%E6%83%B3%E5%91%8A%E8%AF%89%E5%84%BF%E5%AD%90%E6%A2%85%E5%A7%A8%E8%90%BD%E7%BD%91%23) `20.9K 🔥`
1. [冬去春来 (Winter goes and spring comes)](https://s.weibo.com/weibo?q=%23%E5%86%AC%E5%8E%BB%E6%98%A5%E6%9D%A5%23) `20.9K 🔥`
1. [梅姨案受害者说恨久需见其人 (The victim of Aunt Mei's case said she had to see her for a long time.)](https://s.weibo.com/weibo?q=%23%E6%A2%85%E5%A7%A8%E6%A1%88%E5%8F%97%E5%AE%B3%E8%80%85%E8%AF%B4%E6%81%A8%E4%B9%85%E9%9C%80%E8%A7%81%E5%85%B6%E4%BA%BA%23) `20.9K 🔥`
1. [香港高薪抢医生 (Hong Kong’s high-paying doctors are being robbed)](https://s.weibo.com/weibo?q=%23%E9%A6%99%E6%B8%AF%E9%AB%98%E8%96%AA%E6%8A%A2%E5%8C%BB%E7%94%9F%23) `20.9K 🔥`
1. [梅姨被抓钟彬爸爸激动到说话颤抖 (Aunt Mei was arrested and Zhong Bin’s father was so excited that he spoke tremblingly)](https://s.weibo.com/weibo?q=%23%E6%A2%85%E5%A7%A8%E8%A2%AB%E6%8A%93%E9%92%9F%E5%BD%AC%E7%88%B8%E7%88%B8%E6%BF%80%E5%8A%A8%E5%88%B0%E8%AF%B4%E8%AF%9D%E9%A2%A4%E6%8A%96%23) `20.9K 🔥`
1. [梅姨被逮捕 (Aunt May was arrested)](https://s.weibo.com/weibo?q=%23%E6%A2%85%E5%A7%A8%E8%A2%AB%E9%80%AE%E6%8D%95%23) `20.9K 🔥`
1. [逐玉 青天大老爷 (Zhuyu Lord Qingtian)](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%20%E9%9D%92%E5%A4%A9%E5%A4%A7%E8%80%81%E7%88%B7%23) `20.9K 🔥`
1. [濮院高定时尚周](https://s.weibo.com/weibo?q=%23%E6%BF%AE%E9%99%A2%E9%AB%98%E5%AE%9A%E6%97%B6%E5%B0%9A%E5%91%A8%23) `20.9K 🔥`
1. [GEN对战G2](https://s.weibo.com/weibo?q=%23GEN%E5%AF%B9%E6%88%98G2%23) `20.9K 🔥`
1. [斑马音乐节 (Zebra Music Festival)](https://s.weibo.com/weibo?q=%23%E6%96%91%E9%A9%AC%E9%9F%B3%E4%B9%90%E8%8A%82%23) `20.9K 🔥`
1. [他会一辈子都记得这个教练的](https://s.weibo.com/weibo?q=%23%E4%BB%96%E4%BC%9A%E4%B8%80%E8%BE%88%E5%AD%90%E9%83%BD%E8%AE%B0%E5%BE%97%E8%BF%99%E4%B8%AA%E6%95%99%E7%BB%83%E7%9A%84%23) `20.9K 🔥`
1. [热巴陈飞宇跳舞 (Reba Chen Feiyu dances)](https://s.weibo.com/weibo?q=%23%E7%83%AD%E5%B7%B4%E9%99%88%E9%A3%9E%E5%AE%87%E8%B7%B3%E8%88%9E%23) `20.9K 🔥`
1. [何与看烟花](https://s.weibo.com/weibo?q=%23%E4%BD%95%E4%B8%8E%E7%9C%8B%E7%83%9F%E8%8A%B1%23) `20.9K 🔥`
1. [广东土豆泥拌火鸡面黏糊糊的巨香 (Cantonese mashed potatoes mixed with turkey noodles are so sticky and fragrant)](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E4%B8%9C%E5%9C%9F%E8%B1%86%E6%B3%A5%E6%8B%8C%E7%81%AB%E9%B8%A1%E9%9D%A2%E9%BB%8F%E7%B3%8A%E7%B3%8A%E7%9A%84%E5%B7%A8%E9%A6%99%23) `20.9K 🔥` `-85%`

Updated at 2026-03-22 06:26:19

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
