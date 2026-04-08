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

1. [阚清子团未脱稿被赵兆狠批 (Kan Qingzi Tuan was severely criticized by Zhao Zhao for not completing the manuscript)](https://s.weibo.com/weibo?q=%23%E9%98%9A%E6%B8%85%E5%AD%90%E5%9B%A2%E6%9C%AA%E8%84%B1%E7%A8%BF%E8%A2%AB%E8%B5%B5%E5%85%86%E7%8B%A0%E6%89%B9%23) `416.5K 🔥` `NEW`
1. [中方回应促使伊朗同意停火](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%96%B9%E5%9B%9E%E5%BA%94%E4%BF%83%E4%BD%BF%E4%BC%8A%E6%9C%97%E5%90%8C%E6%84%8F%E5%81%9C%E7%81%AB%23) `346.2K 🔥` `NEW`
1. [特朗普称能轻易恢复对伊朗动武](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E7%A7%B0%E8%83%BD%E8%BD%BB%E6%98%93%E6%81%A2%E5%A4%8D%E5%AF%B9%E4%BC%8A%E6%9C%97%E5%8A%A8%E6%AD%A6%23) `248.2K 🔥` `NEW`
1. [拼多多为何西藏买垃圾袋也能包邮](https://s.weibo.com/weibo?q=%23%E6%8B%BC%E5%A4%9A%E5%A4%9A%E4%B8%BA%E4%BD%95%E8%A5%BF%E8%97%8F%E4%B9%B0%E5%9E%83%E5%9C%BE%E8%A2%8B%E4%B9%9F%E8%83%BD%E5%8C%85%E9%82%AE%23) `236.2K 🔥` `NEW`
1. [伊朗称已发动100波打击行动](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E7%A7%B0%E5%B7%B2%E5%8F%91%E5%8A%A8100%E6%B3%A2%E6%89%93%E5%87%BB%E8%A1%8C%E5%8A%A8%23) `235.9K 🔥` `NEW`
1. [迪丽热巴花魁造型](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E8%8A%B1%E9%AD%81%E9%80%A0%E5%9E%8B%23) `195.1K 🔥` `NEW`
1. [中东停火全球人的钱包开始回血](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E4%B8%9C%E5%81%9C%E7%81%AB%E5%85%A8%E7%90%83%E4%BA%BA%E7%9A%84%E9%92%B1%E5%8C%85%E5%BC%80%E5%A7%8B%E5%9B%9E%E8%A1%80%23) `170.0K 🔥` `NEW`
1. [金子涵说的是谁](https://s.weibo.com/weibo?q=%23%E9%87%91%E5%AD%90%E6%B6%B5%E8%AF%B4%E7%9A%84%E6%98%AF%E8%B0%81%23) `169.4K 🔥` `NEW`
1. [悉尼偶遇侯佩岑一家四口](https://s.weibo.com/weibo?q=%23%E6%82%89%E5%B0%BC%E5%81%B6%E9%81%87%E4%BE%AF%E4%BD%A9%E5%B2%91%E4%B8%80%E5%AE%B6%E5%9B%9B%E5%8F%A3%23) `156.6K 🔥` `NEW`
1. [男婴出生4天被抢母亲头部中刀](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%A9%B4%E5%87%BA%E7%94%9F4%E5%A4%A9%E8%A2%AB%E6%8A%A2%E6%AF%8D%E4%BA%B2%E5%A4%B4%E9%83%A8%E4%B8%AD%E5%88%80%23) `120.4K 🔥` `NEW`
1. [B站董事长曾承诺新番无广告 (The chairman of station B once promised that the new show will be advertisement-free)](https://s.weibo.com/weibo?q=%23B%E7%AB%99%E8%91%A3%E4%BA%8B%E9%95%BF%E6%9B%BE%E6%89%BF%E8%AF%BA%E6%96%B0%E7%95%AA%E6%97%A0%E5%B9%BF%E5%91%8A%23) `113.9K 🔥` `NEW`
1. [失业的人可以从大冰这个角度找到机会](https://s.weibo.com/weibo?q=%23%E5%A4%B1%E4%B8%9A%E7%9A%84%E4%BA%BA%E5%8F%AF%E4%BB%A5%E4%BB%8E%E5%A4%A7%E5%86%B0%E8%BF%99%E4%B8%AA%E8%A7%92%E5%BA%A6%E6%89%BE%E5%88%B0%E6%9C%BA%E4%BC%9A%23) `102.0K 🔥` `NEW`
1. [这一刻突然共情了夏雨荷](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%B8%80%E5%88%BB%E7%AA%81%E7%84%B6%E5%85%B1%E6%83%85%E4%BA%86%E5%A4%8F%E9%9B%A8%E8%8D%B7%23) `100.2K 🔥` `NEW`
1. [十日终焉 齐夏传](https://s.weibo.com/weibo?q=%23%E5%8D%81%E6%97%A5%E7%BB%88%E7%84%89%20%E9%BD%90%E5%A4%8F%E4%BC%A0%23) `99.5K 🔥` `NEW`
1. [莫氏鸡煲少当家被抓回来宰鸡](https://s.weibo.com/weibo?q=%23%E8%8E%AB%E6%B0%8F%E9%B8%A1%E7%85%B2%E5%B0%91%E5%BD%93%E5%AE%B6%E8%A2%AB%E6%8A%93%E5%9B%9E%E6%9D%A5%E5%AE%B0%E9%B8%A1%23) `95.2K 🔥` `NEW`
1. [T1对战GEN](https://s.weibo.com/weibo?q=%23T1%E5%AF%B9%E6%88%98GEN%23) `91.9K 🔥` `NEW`
1. [任敏拍过鹿晗勋章MV](https://s.weibo.com/weibo?q=%23%E4%BB%BB%E6%95%8F%E6%8B%8D%E8%BF%87%E9%B9%BF%E6%99%97%E5%8B%8B%E7%AB%A0MV%23) `90.6K 🔥` `NEW`
1. [美伊停火后首批船只通过霍尔木兹](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E4%BC%8A%E5%81%9C%E7%81%AB%E5%90%8E%E9%A6%96%E6%89%B9%E8%88%B9%E5%8F%AA%E9%80%9A%E8%BF%87%E9%9C%8D%E5%B0%94%E6%9C%A8%E5%85%B9%23) `85.5K 🔥` `NEW`
1. [芒果音乐节阵容](https://s.weibo.com/weibo?q=%23%E8%8A%92%E6%9E%9C%E9%9F%B3%E4%B9%90%E8%8A%82%E9%98%B5%E5%AE%B9%23) `83.2K 🔥` `NEW`
1. [湖人惨败又生内讧](https://s.weibo.com/weibo?q=%23%E6%B9%96%E4%BA%BA%E6%83%A8%E8%B4%A5%E5%8F%88%E7%94%9F%E5%86%85%E8%AE%A7%23) `80.8K 🔥` `NEW`
1. [安排发小工作却因没帮找对象被杀害 (Arranged a job to make a baby, but was killed because he didn't help find a partner.)](https://s.weibo.com/weibo?q=%23%E5%AE%89%E6%8E%92%E5%8F%91%E5%B0%8F%E5%B7%A5%E4%BD%9C%E5%8D%B4%E5%9B%A0%E6%B2%A1%E5%B8%AE%E6%89%BE%E5%AF%B9%E8%B1%A1%E8%A2%AB%E6%9D%80%E5%AE%B3%23) `78.5K 🔥` `NEW`
1. [原来香蕉是这样挑的](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E9%A6%99%E8%95%89%E6%98%AF%E8%BF%99%E6%A0%B7%E6%8C%91%E7%9A%84%23) `73.5K 🔥` `NEW`
1. [人民币上有个哭出来的笑脸](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E6%B0%91%E5%B8%81%E4%B8%8A%E6%9C%89%E4%B8%AA%E5%93%AD%E5%87%BA%E6%9D%A5%E7%9A%84%E7%AC%91%E8%84%B8%23) `71.5K 🔥` `NEW`
1. [无意中看到老板的聊天记录](https://s.weibo.com/weibo?q=%23%E6%97%A0%E6%84%8F%E4%B8%AD%E7%9C%8B%E5%88%B0%E8%80%81%E6%9D%BF%E7%9A%84%E8%81%8A%E5%A4%A9%E8%AE%B0%E5%BD%95%23) `70.6K 🔥` `NEW`
1. [B站将上线播放页暂停广告 (Bilibili will launch an online play page to pause advertisements)](https://s.weibo.com/weibo?q=%23B%E7%AB%99%E5%B0%86%E4%B8%8A%E7%BA%BF%E6%92%AD%E6%94%BE%E9%A1%B5%E6%9A%82%E5%81%9C%E5%B9%BF%E5%91%8A%23) `1.0M 🔥` `+461%`
1. [开心消消乐第一万关的含金量](https://s.weibo.com/weibo?q=%23%E5%BC%80%E5%BF%83%E6%B6%88%E6%B6%88%E4%B9%90%E7%AC%AC%E4%B8%80%E4%B8%87%E5%85%B3%E7%9A%84%E5%90%AB%E9%87%91%E9%87%8F%23) `371.5K 🔥` `+114%`
1. [刘思维当爸爸了](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%80%9D%E7%BB%B4%E5%BD%93%E7%88%B8%E7%88%B8%E4%BA%86%23) `166.7K 🔥` `+35%`
1. [大熊猫家美大崽去世](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E7%86%8A%E7%8C%AB%E5%AE%B6%E7%BE%8E%E5%A4%A7%E5%B4%BD%E5%8E%BB%E4%B8%96%23) `746.9K 🔥`
1. [春假撞怀清明春日消费火力全开 (Spring break makes me pregnant during Qingming Festival, and spring consumption is on full swing)](https://s.weibo.com/weibo?q=%23%E6%98%A5%E5%81%87%E6%92%9E%E6%80%80%E6%B8%85%E6%98%8E%E6%98%A5%E6%97%A5%E6%B6%88%E8%B4%B9%E7%81%AB%E5%8A%9B%E5%85%A8%E5%BC%80%23) `600.0K 🔥`
1. [华为乾崑大六座华境S开启预订 (Huawei’s six-seat Huajing S in Qiankun University is now available for pre-order)](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BA%E4%B9%BE%E5%B4%91%E5%A4%A7%E5%85%AD%E5%BA%A7%E5%8D%8E%E5%A2%83S%E5%BC%80%E5%90%AF%E9%A2%84%E8%AE%A2%23) `580.6K 🔥`
1. [物业大撤退 (Real estate retreat)](https://s.weibo.com/weibo?q=%23%E7%89%A9%E4%B8%9A%E5%A4%A7%E6%92%A4%E9%80%80%23) `558.7K 🔥`
1. [电费刺客找到了](https://s.weibo.com/weibo?q=%23%E7%94%B5%E8%B4%B9%E5%88%BA%E5%AE%A2%E6%89%BE%E5%88%B0%E4%BA%86%23) `313.1K 🔥`
1. [12人花30万买月薪2500的高铁工作](https://s.weibo.com/weibo?q=%2312%E4%BA%BA%E8%8A%B130%E4%B8%87%E4%B9%B0%E6%9C%88%E8%96%AA2500%E7%9A%84%E9%AB%98%E9%93%81%E5%B7%A5%E4%BD%9C%23) `237.9K 🔥`
1. [住酒店不带毛巾的人天塌了 (If you stay in a hotel without a towel, the sky is falling.)](https://s.weibo.com/weibo?q=%23%E4%BD%8F%E9%85%92%E5%BA%97%E4%B8%8D%E5%B8%A6%E6%AF%9B%E5%B7%BE%E7%9A%84%E4%BA%BA%E5%A4%A9%E5%A1%8C%E4%BA%86%23) `233.3K 🔥`
1. [低血糖假性饥饿](https://s.weibo.com/weibo?q=%23%E4%BD%8E%E8%A1%80%E7%B3%96%E5%81%87%E6%80%A7%E9%A5%A5%E9%A5%BF%23) `157.5K 🔥`
1. [王濛 组内唯一大vocal (Wang Meng is the only big vocalist in the group)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BF%9B%20%E7%BB%84%E5%86%85%E5%94%AF%E4%B8%80%E5%A4%A7vocal%23) `154.9K 🔥`
1. [李羲承改活动名](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E7%BE%B2%E6%89%BF%E6%94%B9%E6%B4%BB%E5%8A%A8%E5%90%8D%23) `103.9K 🔥`
1. [原来焦虑症是这么来的](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E7%84%A6%E8%99%91%E7%97%87%E6%98%AF%E8%BF%99%E4%B9%88%E6%9D%A5%E7%9A%84%23) `102.0K 🔥`
1. [周冬雨 我就是一般人的长相](https://s.weibo.com/weibo?q=%23%E5%91%A8%E5%86%AC%E9%9B%A8%20%E6%88%91%E5%B0%B1%E6%98%AF%E4%B8%80%E8%88%AC%E4%BA%BA%E7%9A%84%E9%95%BF%E7%9B%B8%23) `98.0K 🔥`
1. [莫氏鸡煲爆火周边摊主1天最多卖800元](https://s.weibo.com/weibo?q=%23%E8%8E%AB%E6%B0%8F%E9%B8%A1%E7%85%B2%E7%88%86%E7%81%AB%E5%91%A8%E8%BE%B9%E6%91%8A%E4%B8%BB1%E5%A4%A9%E6%9C%80%E5%A4%9A%E5%8D%96800%E5%85%83%23) `96.6K 🔥`
1. [孙怡 幼态脸高妹](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%80%A1%20%E5%B9%BC%E6%80%81%E8%84%B8%E9%AB%98%E5%A6%B9%23) `90.1K 🔥`
1. [穆祉丞 代言](https://s.weibo.com/weibo?q=%23%E7%A9%86%E7%A5%89%E4%B8%9E%20%E4%BB%A3%E8%A8%80%23) `81.9K 🔥`
1. [小米官宣6款充电宝新品](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E5%AE%98%E5%AE%A36%E6%AC%BE%E5%85%85%E7%94%B5%E5%AE%9D%E6%96%B0%E5%93%81%23) `78.3K 🔥`
1. [好仙的刘诗诗 (The lovely Liu Shishi)](https://s.weibo.com/weibo?q=%23%E5%A5%BD%E4%BB%99%E7%9A%84%E5%88%98%E8%AF%97%E8%AF%97%23) `73.8K 🔥`
1. [伊朗拉万炼油厂发生爆炸](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%8B%89%E4%B8%87%E7%82%BC%E6%B2%B9%E5%8E%82%E5%8F%91%E7%94%9F%E7%88%86%E7%82%B8%23) `449.8K 🔥` `-36%`
1. [麻辣烫里最拉的菜](https://s.weibo.com/weibo?q=%23%E9%BA%BB%E8%BE%A3%E7%83%AB%E9%87%8C%E6%9C%80%E6%8B%89%E7%9A%84%E8%8F%9C%23) `420.9K 🔥` `-40%`
1. [十日终焉官微 用户1231 (Ten Days End Yan Official WeChat User 1231)](https://s.weibo.com/weibo?q=%23%E5%8D%81%E6%97%A5%E7%BB%88%E7%84%89%E5%AE%98%E5%BE%AE%20%E7%94%A8%E6%88%B71231%23) `306.7K 🔥` `-72%`
1. [哪吒2票房升至全球第4 (Ne Zha 2 box office rises to 4th in the world)](https://s.weibo.com/weibo?q=%23%E5%93%AA%E5%90%922%E7%A5%A8%E6%88%BF%E5%8D%87%E8%87%B3%E5%85%A8%E7%90%83%E7%AC%AC4%23) `288.7K 🔥` `-40%`
1. [美国杀人分尸19岁少年专杀性犯罪者 (19-year-old boy in the US kills and dismembers sex offenders)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E6%9D%80%E4%BA%BA%E5%88%86%E5%B0%B819%E5%B2%81%E5%B0%91%E5%B9%B4%E4%B8%93%E6%9D%80%E6%80%A7%E7%8A%AF%E7%BD%AA%E8%80%85%23) `153.0K 🔥` `-55%`
1. [老爸过生日人脉硬到一个个不吱声](https://s.weibo.com/weibo?q=%23%E8%80%81%E7%88%B8%E8%BF%87%E7%94%9F%E6%97%A5%E4%BA%BA%E8%84%89%E7%A1%AC%E5%88%B0%E4%B8%80%E4%B8%AA%E4%B8%AA%E4%B8%8D%E5%90%B1%E5%A3%B0%23) `73.4K 🔥` `-30%`

Updated at 2026-04-08 19:42:33

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
