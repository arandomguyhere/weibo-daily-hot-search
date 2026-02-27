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

1. [南京档案馆找到谷爱凌外婆户籍卡 (Grandma Gu Ailing’s household registration card found in Nanjing Archives)](https://s.weibo.com/weibo?q=%23%E5%8D%97%E4%BA%AC%E6%A1%A3%E6%A1%88%E9%A6%86%E6%89%BE%E5%88%B0%E8%B0%B7%E7%88%B1%E5%87%8C%E5%A4%96%E5%A9%86%E6%88%B7%E7%B1%8D%E5%8D%A1%23) `513.6K 🔥` `NEW`
1. [上饶一村庄突现大坑传有古墓不实](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E9%A5%B6%E4%B8%80%E6%9D%91%E5%BA%84%E7%AA%81%E7%8E%B0%E5%A4%A7%E5%9D%91%E4%BC%A0%E6%9C%89%E5%8F%A4%E5%A2%93%E4%B8%8D%E5%AE%9E%23) `453.8K 🔥` `NEW`
1. [陈丽君台湾巡演人气大爆](https://s.weibo.com/weibo?q=%23%E9%99%88%E4%B8%BD%E5%90%9B%E5%8F%B0%E6%B9%BE%E5%B7%A1%E6%BC%94%E4%BA%BA%E6%B0%94%E5%A4%A7%E7%88%86%23) `214.4K 🔥` `NEW`
1. [庆奶吻戏男主回复又老又年轻靠滤镜](https://s.weibo.com/weibo?q=%23%E5%BA%86%E5%A5%B6%E5%90%BB%E6%88%8F%E7%94%B7%E4%B8%BB%E5%9B%9E%E5%A4%8D%E5%8F%88%E8%80%81%E5%8F%88%E5%B9%B4%E8%BD%BB%E9%9D%A0%E6%BB%A4%E9%95%9C%23) `201.5K 🔥` `NEW`
1. [杨幂谷爱凌秀场聊天](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E8%B0%B7%E7%88%B1%E5%87%8C%E7%A7%80%E5%9C%BA%E8%81%8A%E5%A4%A9%23) `174.9K 🔥` `NEW`
1. [香港山火已扑灭](https://s.weibo.com/weibo?q=%23%E9%A6%99%E6%B8%AF%E5%B1%B1%E7%81%AB%E5%B7%B2%E6%89%91%E7%81%AD%23) `168.8K 🔥` `NEW`
1. [大连老虎滩104舰启动拆解](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E8%BF%9E%E8%80%81%E8%99%8E%E6%BB%A9104%E8%88%B0%E5%90%AF%E5%8A%A8%E6%8B%86%E8%A7%A3%23) `168.3K 🔥` `NEW`
1. [上海一宠物健身房月卡近2000元](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E4%B8%80%E5%AE%A0%E7%89%A9%E5%81%A5%E8%BA%AB%E6%88%BF%E6%9C%88%E5%8D%A1%E8%BF%912000%E5%85%83%23) `166.8K 🔥` `NEW`
1. [7月大女婴坠入开水锅母亲发声](https://s.weibo.com/weibo?q=%237%E6%9C%88%E5%A4%A7%E5%A5%B3%E5%A9%B4%E5%9D%A0%E5%85%A5%E5%BC%80%E6%B0%B4%E9%94%85%E6%AF%8D%E4%BA%B2%E5%8F%91%E5%A3%B0%23) `165.9K 🔥` `NEW`
1. [英伟达市值蒸发1.77万亿](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E4%BC%9F%E8%BE%BE%E5%B8%82%E5%80%BC%E8%92%B8%E5%8F%911.77%E4%B8%87%E4%BA%BF%23) `150.2K 🔥` `NEW`
1. [奔驰CEO拍宇树机器人发给家人 (Mercedes-Benz CEO takes pictures of Yushu robot and sends them to his family)](https://s.weibo.com/weibo?q=%23%E5%A5%94%E9%A9%B0CEO%E6%8B%8D%E5%AE%87%E6%A0%91%E6%9C%BA%E5%99%A8%E4%BA%BA%E5%8F%91%E7%BB%99%E5%AE%B6%E4%BA%BA%23) `119.0K 🔥` `NEW`
1. [四六级一次就考过](https://s.weibo.com/weibo?q=%23%E5%9B%9B%E5%85%AD%E7%BA%A7%E4%B8%80%E6%AC%A1%E5%B0%B1%E8%80%83%E8%BF%87%23) `118.7K 🔥` `NEW`
1. [好潦草的烟花真是设计鬼才](https://s.weibo.com/weibo?q=%23%E5%A5%BD%E6%BD%A6%E8%8D%89%E7%9A%84%E7%83%9F%E8%8A%B1%E7%9C%9F%E6%98%AF%E8%AE%BE%E8%AE%A1%E9%AC%BC%E6%89%8D%23) `118.3K 🔥` `NEW`
1. [狄娜女士从艳星到中国卫星导航之母](https://s.weibo.com/weibo?q=%23%E7%8B%84%E5%A8%9C%E5%A5%B3%E5%A3%AB%E4%BB%8E%E8%89%B3%E6%98%9F%E5%88%B0%E4%B8%AD%E5%9B%BD%E5%8D%AB%E6%98%9F%E5%AF%BC%E8%88%AA%E4%B9%8B%E6%AF%8D%23) `118.1K 🔥` `NEW`
1. [德国总理来杭州见了哪些中方企业](https://s.weibo.com/weibo?q=%23%E5%BE%B7%E5%9B%BD%E6%80%BB%E7%90%86%E6%9D%A5%E6%9D%AD%E5%B7%9E%E8%A7%81%E4%BA%86%E5%93%AA%E4%BA%9B%E4%B8%AD%E6%96%B9%E4%BC%81%E4%B8%9A%23) `95.8K 🔥` `NEW`
1. [00后女骑手送餐遭顾客骚扰报警](https://s.weibo.com/weibo?q=%2300%E5%90%8E%E5%A5%B3%E9%AA%91%E6%89%8B%E9%80%81%E9%A4%90%E9%81%AD%E9%A1%BE%E5%AE%A2%E9%AA%9A%E6%89%B0%E6%8A%A5%E8%AD%A6%23) `94.0K 🔥` `NEW`
1. [美伊第三轮间接谈判已经结束](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E4%BC%8A%E7%AC%AC%E4%B8%89%E8%BD%AE%E9%97%B4%E6%8E%A5%E8%B0%88%E5%88%A4%E5%B7%B2%E7%BB%8F%E7%BB%93%E6%9D%9F%23) `88.4K 🔥` `NEW`
1. [曝程相李佳洁恋情](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E7%A8%8B%E7%9B%B8%E6%9D%8E%E4%BD%B3%E6%B4%81%E6%81%8B%E6%83%85%23) `88.3K 🔥` `NEW`
1. [成都沪上阿姨HR辱骂求职者](https://s.weibo.com/weibo?q=%23%E6%88%90%E9%83%BD%E6%B2%AA%E4%B8%8A%E9%98%BF%E5%A7%A8HR%E8%BE%B1%E9%AA%82%E6%B1%82%E8%81%8C%E8%80%85%23) `85.1K 🔥` `NEW`
1. [谷爱凌穿Prada的女王](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E7%A9%BFPrada%E7%9A%84%E5%A5%B3%E7%8E%8B%23) `78.9K 🔥` `NEW`
1. [迪丽热巴方辟谣瓦猫 (Dilraba refutes rumors about Tile Cat)](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E6%96%B9%E8%BE%9F%E8%B0%A3%E7%93%A6%E7%8C%AB%23) `72.5K 🔥` `NEW`
1. [Doinb说Uzi和TheShy能救LPL](https://s.weibo.com/weibo?q=%23Doinb%E8%AF%B4Uzi%E5%92%8CTheShy%E8%83%BD%E6%95%91LPL%23) `71.4K 🔥` `NEW`
1. [四六级查分 (Level 4 and Level 6 Score Check)](https://s.weibo.com/weibo?q=%23%E5%9B%9B%E5%85%AD%E7%BA%A7%E6%9F%A5%E5%88%86%23) `1.1M 🔥` `+50%`
1. [飞驰人生3](https://s.weibo.com/weibo?q=%23%E9%A3%9E%E9%A9%B0%E4%BA%BA%E7%94%9F3%23) `776.3K 🔥` `+340%`
1. [费霓怀孕](https://s.weibo.com/weibo?q=%23%E8%B4%B9%E9%9C%93%E6%80%80%E5%AD%95%23) `550.6K 🔥` `+665%`
1. [全国妈妈的统一夜晚 (A night of unity for mothers across the country)](https://s.weibo.com/weibo?q=%23%E5%85%A8%E5%9B%BD%E5%A6%88%E5%A6%88%E7%9A%84%E7%BB%9F%E4%B8%80%E5%A4%9C%E6%99%9A%23) `455.2K 🔥` `+186%`
1. [伊朗威胁美国](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%A8%81%E8%83%81%E7%BE%8E%E5%9B%BD%23) `222.1K 🔥` `+122%`
1. [女子婚后拒同房法院判定不予离婚](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%A9%9A%E5%90%8E%E6%8B%92%E5%90%8C%E6%88%BF%E6%B3%95%E9%99%A2%E5%88%A4%E5%AE%9A%E4%B8%8D%E4%BA%88%E7%A6%BB%E5%A9%9A%23) `210.4K 🔥` `+55%`
1. [比尔盖茨出轨女性身份曝光 (Bill Gates' cheating woman's identity revealed)](https://s.weibo.com/weibo?q=%23%E6%AF%94%E5%B0%94%E7%9B%96%E8%8C%A8%E5%87%BA%E8%BD%A8%E5%A5%B3%E6%80%A7%E8%BA%AB%E4%BB%BD%E6%9B%9D%E5%85%89%23) `187.5K 🔥` `+32%`
1. [苹果新品来了 (Apple new products are coming)](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C%E6%96%B0%E5%93%81%E6%9D%A5%E4%BA%86%23) `182.5K 🔥` `+30%`
1. [王楚钦说太累了比干七局还累](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E8%AF%B4%E5%A4%AA%E7%B4%AF%E4%BA%86%E6%AF%94%E5%B9%B2%E4%B8%83%E5%B1%80%E8%BF%98%E7%B4%AF%23) `169.4K 🔥` `+33%`
1. [刘宇宁到了现代剧也是一身侠气](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AE%87%E5%AE%81%E5%88%B0%E4%BA%86%E7%8E%B0%E4%BB%A3%E5%89%A7%E4%B9%9F%E6%98%AF%E4%B8%80%E8%BA%AB%E4%BE%A0%E6%B0%94%23) `165.1K 🔥` `+26%`
1. [逐玉](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%23) `121.7K 🔥` `+46%`
1. [四级我恨你](https://s.weibo.com/weibo?q=%23%E5%9B%9B%E7%BA%A7%E6%88%91%E6%81%A8%E4%BD%A0%23) `119.1K 🔥` `+42%`
1. [迪丽热巴 瓦猫 (dilireba watt cat)](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%20%E7%93%A6%E7%8C%AB%23) `107.6K 🔥` `+47%`
1. [男子回应过年杀鸭杀出超6克黄金 (Man responds to Chinese New Year killing of ducks and more than 6 grams of gold)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%9B%9E%E5%BA%94%E8%BF%87%E5%B9%B4%E6%9D%80%E9%B8%AD%E6%9D%80%E5%87%BA%E8%B6%856%E5%85%8B%E9%BB%84%E9%87%91%23) `81.9K 🔥` `+34%`
1. [AI公司给文科生开300万年薪](https://s.weibo.com/weibo?q=%23AI%E5%85%AC%E5%8F%B8%E7%BB%99%E6%96%87%E7%A7%91%E7%94%9F%E5%BC%80300%E4%B8%87%E5%B9%B4%E8%96%AA%23) `79.8K 🔥` `+86%`
1. [痞幼泽龙约会](https://s.weibo.com/weibo?q=%23%E7%97%9E%E5%B9%BC%E6%B3%BD%E9%BE%99%E7%BA%A6%E4%BC%9A%23) `71.9K 🔥` `+82%`
1. [春节消费市场人气旺活力足 (The consumer market is booming during the Spring Festival and is full of vitality)](https://s.weibo.com/weibo?q=%23%E6%98%A5%E8%8A%82%E6%B6%88%E8%B4%B9%E5%B8%82%E5%9C%BA%E4%BA%BA%E6%B0%94%E6%97%BA%E6%B4%BB%E5%8A%9B%E8%B6%B3%23) `614.3K 🔥`
1. [男子谎称走亲戚欲把7岁儿子留老家 (Man lied about visiting relatives and wanted to leave his 7-year-old son in his hometown)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E8%B0%8E%E7%A7%B0%E8%B5%B0%E4%BA%B2%E6%88%9A%E6%AC%B2%E6%8A%8A7%E5%B2%81%E5%84%BF%E5%AD%90%E7%95%99%E8%80%81%E5%AE%B6%23) `270.1K 🔥`
1. [杨幂TOP坐一起 (Yang Mi TOP sits together)](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82TOP%E5%9D%90%E4%B8%80%E8%B5%B7%23) `165.9K 🔥`
1. [日本物价居然到这种程度了](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E7%89%A9%E4%BB%B7%E5%B1%85%E7%84%B6%E5%88%B0%E8%BF%99%E7%A7%8D%E7%A8%8B%E5%BA%A6%E4%BA%86%23) `156.3K 🔥`
1. [六级](https://s.weibo.com/weibo?q=%23%E5%85%AD%E7%BA%A7%23) `144.8K 🔥`
1. [冬奥花滑冠军刘美贤遭俄罗斯粉丝吐槽 (Winter Olympics figure skating champion Liu Meixian was criticized by Russian fans)](https://s.weibo.com/weibo?q=%23%E5%86%AC%E5%A5%A5%E8%8A%B1%E6%BB%91%E5%86%A0%E5%86%9B%E5%88%98%E7%BE%8E%E8%B4%A4%E9%81%AD%E4%BF%84%E7%BD%97%E6%96%AF%E7%B2%89%E4%B8%9D%E5%90%90%E6%A7%BD%23) `118.0K 🔥`
1. [一盒内存条堪比一套房](https://s.weibo.com/weibo?q=%23%E4%B8%80%E7%9B%92%E5%86%85%E5%AD%98%E6%9D%A1%E5%A0%AA%E6%AF%94%E4%B8%80%E5%A5%97%E6%88%BF%23) `111.3K 🔥`
1. [全网最黑大熊猫出现了 (The darkest giant panda on the Internet appears)](https://s.weibo.com/weibo?q=%23%E5%85%A8%E7%BD%91%E6%9C%80%E9%BB%91%E5%A4%A7%E7%86%8A%E7%8C%AB%E5%87%BA%E7%8E%B0%E4%BA%86%23) `105.5K 🔥`
1. [林俊杰2026首支单曲](https://s.weibo.com/weibo?q=%23%E6%9E%97%E4%BF%8A%E6%9D%B02026%E9%A6%96%E6%94%AF%E5%8D%95%E6%9B%B2%23) `103.4K 🔥`
1. [孙千这段尴尬的我狂笑](https://s.weibo.com/weibo?q=%23%E5%AD%99%E5%8D%83%E8%BF%99%E6%AE%B5%E5%B0%B4%E5%B0%AC%E7%9A%84%E6%88%91%E7%8B%82%E7%AC%91%23) `103.2K 🔥`
1. [24岁女生成功诞下1男4女5胞胎 (24-year-old girl successfully gave birth to quintuplets, 1 boy, 4 girls)](https://s.weibo.com/weibo?q=%2324%E5%B2%81%E5%A5%B3%E7%94%9F%E6%88%90%E5%8A%9F%E8%AF%9E%E4%B8%8B1%E7%94%B74%E5%A5%B35%E8%83%9E%E8%83%8E%23) `311.4K 🔥` `-69%`
1. [手机 涨价](https://s.weibo.com/weibo?q=%23%E6%89%8B%E6%9C%BA%20%E6%B6%A8%E4%BB%B7%23) `114.3K 🔥` `-49%`

Updated at 2026-02-27 08:55:39

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
