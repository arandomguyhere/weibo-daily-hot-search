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

1. [腾讯发布2025年财报 (Tencent releases 2025 financial report)](https://s.weibo.com/weibo?q=%23%E8%85%BE%E8%AE%AF%E5%8F%91%E5%B8%832025%E5%B9%B4%E8%B4%A2%E6%8A%A5%23) `765.0K 🔥` `NEW`
1. [中国人4900年前造出水坝群](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E4%BA%BA4900%E5%B9%B4%E5%89%8D%E9%80%A0%E5%87%BA%E6%B0%B4%E5%9D%9D%E7%BE%A4%23) `618.4K 🔥` `NEW`
1. [张凌赫 我和他都没演过长风渡](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%20%E6%88%91%E5%92%8C%E4%BB%96%E9%83%BD%E6%B2%A1%E6%BC%94%E8%BF%87%E9%95%BF%E9%A3%8E%E6%B8%A1%23) `474.8K 🔥` `NEW`
1. [我家楼下有鹿晗](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%AE%B6%E6%A5%BC%E4%B8%8B%E6%9C%89%E9%B9%BF%E6%99%97%23) `202.9K 🔥` `NEW`
1. [福建一鸭子活吞41只小鸡](https://s.weibo.com/weibo?q=%23%E7%A6%8F%E5%BB%BA%E4%B8%80%E9%B8%AD%E5%AD%90%E6%B4%BB%E5%90%9E41%E5%8F%AA%E5%B0%8F%E9%B8%A1%23) `201.1K 🔥` `NEW`
1. [雷军点赞小米车主助人善举](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E5%86%9B%E7%82%B9%E8%B5%9E%E5%B0%8F%E7%B1%B3%E8%BD%A6%E4%B8%BB%E5%8A%A9%E4%BA%BA%E5%96%84%E4%B8%BE%23) `176.9K 🔥` `NEW`
1. [半个娱乐圈的人都抱过林沐然](https://s.weibo.com/weibo?q=%23%E5%8D%8A%E4%B8%AA%E5%A8%B1%E4%B9%90%E5%9C%88%E7%9A%84%E4%BA%BA%E9%83%BD%E6%8A%B1%E8%BF%87%E6%9E%97%E6%B2%90%E7%84%B6%23) `109.6K 🔥` `NEW`
1. [薛之谦演唱会](https://s.weibo.com/weibo?q=%23%E8%96%9B%E4%B9%8B%E8%B0%A6%E6%BC%94%E5%94%B1%E4%BC%9A%23) `100.0K 🔥` `NEW`
1. [这些信号可能是你的肝在求救](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%BA%9B%E4%BF%A1%E5%8F%B7%E5%8F%AF%E8%83%BD%E6%98%AF%E4%BD%A0%E7%9A%84%E8%82%9D%E5%9C%A8%E6%B1%82%E6%95%91%23) `89.5K 🔥` `NEW`
1. [原来你就是武安侯](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E4%BD%A0%E5%B0%B1%E6%98%AF%E6%AD%A6%E5%AE%89%E4%BE%AF%23) `80.8K 🔥` `NEW`
1. [AI换脸华妃还催蒋欣生儿子 (AI's face-changing Concubine Hua also urged Jiang Xin to have a son)](https://s.weibo.com/weibo?q=%23AI%E6%8D%A2%E8%84%B8%E5%8D%8E%E5%A6%83%E8%BF%98%E5%82%AC%E8%92%8B%E6%AC%A3%E7%94%9F%E5%84%BF%E5%AD%90%23) `79.5K 🔥` `NEW`
1. [诺奖得主推荐的神药收割爸妈](https://s.weibo.com/weibo?q=%23%E8%AF%BA%E5%A5%96%E5%BE%97%E4%B8%BB%E6%8E%A8%E8%8D%90%E7%9A%84%E7%A5%9E%E8%8D%AF%E6%94%B6%E5%89%B2%E7%88%B8%E5%A6%88%23) `79.5K 🔥` `NEW`
1. [耀客AI演员 赵今麦翟子路](https://s.weibo.com/weibo?q=%23%E8%80%80%E5%AE%A2AI%E6%BC%94%E5%91%98%20%E8%B5%B5%E4%BB%8A%E9%BA%A6%E7%BF%9F%E5%AD%90%E8%B7%AF%23) `79.4K 🔥` `NEW`
1. [韩国股市涨5%启动熔断机制](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E8%82%A1%E5%B8%82%E6%B6%A85%25%E5%90%AF%E5%8A%A8%E7%86%94%E6%96%AD%E6%9C%BA%E5%88%B6%23) `79.4K 🔥` `NEW`
1. [孟子义新角色为失忆监国公主](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89%E6%96%B0%E8%A7%92%E8%89%B2%E4%B8%BA%E5%A4%B1%E5%BF%86%E7%9B%91%E5%9B%BD%E5%85%AC%E4%B8%BB%23) `79.4K 🔥` `NEW`
1. [国台办回应台湾面临断油断气危险](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E5%8F%B0%E5%8A%9E%E5%9B%9E%E5%BA%94%E5%8F%B0%E6%B9%BE%E9%9D%A2%E4%B8%B4%E6%96%AD%E6%B2%B9%E6%96%AD%E6%B0%94%E5%8D%B1%E9%99%A9%23) `75.7K 🔥` `NEW`
1. [里弗斯自杀式叫暂停](https://s.weibo.com/weibo?q=%23%E9%87%8C%E5%BC%97%E6%96%AF%E8%87%AA%E6%9D%80%E5%BC%8F%E5%8F%AB%E6%9A%82%E5%81%9C%23) `64.2K 🔥` `NEW`
1. [中国学生开始卷海外考公了 (Chinese students begin to take public exams overseas)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%AD%A6%E7%94%9F%E5%BC%80%E5%A7%8B%E5%8D%B7%E6%B5%B7%E5%A4%96%E8%80%83%E5%85%AC%E4%BA%86%23) `221.7K 🔥` `+106%`
1. [烧饭阿姨把三文鱼煮了](https://s.weibo.com/weibo?q=%23%E7%83%A7%E9%A5%AD%E9%98%BF%E5%A7%A8%E6%8A%8A%E4%B8%89%E6%96%87%E9%B1%BC%E7%85%AE%E4%BA%86%23) `221.5K 🔥` `+109%`
1. [以色列刺杀伊朗情报部长](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E8%89%B2%E5%88%97%E5%88%BA%E6%9D%80%E4%BC%8A%E6%9C%97%E6%83%85%E6%8A%A5%E9%83%A8%E9%95%BF%23) `219.3K 🔥` `+53%`
1. [鱼塘主坚持2年用辣椒喂鱼](https://s.weibo.com/weibo?q=%23%E9%B1%BC%E5%A1%98%E4%B8%BB%E5%9D%9A%E6%8C%812%E5%B9%B4%E7%94%A8%E8%BE%A3%E6%A4%92%E5%96%82%E9%B1%BC%23) `219.1K 🔥` `+88%`
1. [樊长玉谢征 好孕赘婿 (Fan Changyu, Xie Zheng, pregnant son-in-law)](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E9%95%BF%E7%8E%89%E8%B0%A2%E5%BE%81%20%E5%A5%BD%E5%AD%95%E8%B5%98%E5%A9%BF%23) `214.4K 🔥` `+34%`
1. [5岁孩子狂赚20亿短剧人设引争议](https://s.weibo.com/weibo?q=%235%E5%B2%81%E5%AD%A9%E5%AD%90%E7%8B%82%E8%B5%9A20%E4%BA%BF%E7%9F%AD%E5%89%A7%E4%BA%BA%E8%AE%BE%E5%BC%95%E4%BA%89%E8%AE%AE%23) `213.2K 🔥` `+31%`
1. [果然人老了干什么都心酸 (Sure enough, when you are old, you will feel sad no matter what you do.)](https://s.weibo.com/weibo?q=%23%E6%9E%9C%E7%84%B6%E4%BA%BA%E8%80%81%E4%BA%86%E5%B9%B2%E4%BB%80%E4%B9%88%E9%83%BD%E5%BF%83%E9%85%B8%23) `210.7K 🔥` `+30%`
1. [拉里贾尼被斩首细节披露](https://s.weibo.com/weibo?q=%23%E6%8B%89%E9%87%8C%E8%B4%BE%E5%B0%BC%E8%A2%AB%E6%96%A9%E9%A6%96%E7%BB%86%E8%8A%82%E6%8A%AB%E9%9C%B2%23) `206.7K 🔥` `+28%`
1. [婴儿倒挂近1分钟爸爸全程玩手机](https://s.weibo.com/weibo?q=%23%E5%A9%B4%E5%84%BF%E5%80%92%E6%8C%82%E8%BF%911%E5%88%86%E9%92%9F%E7%88%B8%E7%88%B8%E5%85%A8%E7%A8%8B%E7%8E%A9%E6%89%8B%E6%9C%BA%23) `204.1K 🔥` `+28%`
1. [耀客签约AI演员](https://s.weibo.com/weibo?q=%23%E8%80%80%E5%AE%A2%E7%AD%BE%E7%BA%A6AI%E6%BC%94%E5%91%98%23) `201.4K 🔥` `+34%`
1. [钮钴禄Jennie](https://s.weibo.com/weibo?q=%23%E9%92%AE%E9%92%B4%E7%A6%84Jennie%23) `201.0K 🔥` `+105%`
1. [网传落生去世 (Internet rumors about death)](https://s.weibo.com/weibo?q=%23%E7%BD%91%E4%BC%A0%E8%90%BD%E7%94%9F%E5%8E%BB%E4%B8%96%23) `189.9K 🔥` `+21%`
1. [迪丽热巴代言甄稀冰淇淋](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E4%BB%A3%E8%A8%80%E7%94%84%E7%A8%80%E5%86%B0%E6%B7%87%E6%B7%8B%23) `171.0K 🔥` `+43%`
1. [李佳琦自曝想出国留学](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E4%BD%B3%E7%90%A6%E8%87%AA%E6%9B%9D%E6%83%B3%E5%87%BA%E5%9B%BD%E7%95%99%E5%AD%A6%23) `160.2K 🔥` `+72%`
1. [小米新SU7](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E6%96%B0SU7%23) `1.1M 🔥`
1. [建议年轻人少去公园容易伤自尊 (It is recommended that young people go to the park less often because it may hurt their self-esteem.)](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E5%B9%B4%E8%BD%BB%E4%BA%BA%E5%B0%91%E5%8E%BB%E5%85%AC%E5%9B%AD%E5%AE%B9%E6%98%93%E4%BC%A4%E8%87%AA%E5%B0%8A%23) `217.4K 🔥`
1. [油价涨了冲锋衣可能更贵](https://s.weibo.com/weibo?q=%23%E6%B2%B9%E4%BB%B7%E6%B6%A8%E4%BA%86%E5%86%B2%E9%94%8B%E8%A1%A3%E5%8F%AF%E8%83%BD%E6%9B%B4%E8%B4%B5%23) `215.7K 🔥`
1. [特朗普再称马克龙很快就下台了 (Trump says Macron will step down soon)](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E5%86%8D%E7%A7%B0%E9%A9%AC%E5%85%8B%E9%BE%99%E5%BE%88%E5%BF%AB%E5%B0%B1%E4%B8%8B%E5%8F%B0%E4%BA%86%23) `104.2K 🔥`
1. [50岁女职工被强制退休获赔94万 (A 50-year-old female employee was forced to retire and received a compensation of NT$940,000)](https://s.weibo.com/weibo?q=%2350%E5%B2%81%E5%A5%B3%E8%81%8C%E5%B7%A5%E8%A2%AB%E5%BC%BA%E5%88%B6%E9%80%80%E4%BC%91%E8%8E%B7%E8%B5%9494%E4%B8%87%23) `83.9K 🔥`
1. [五十公里桃花坞6](https://s.weibo.com/weibo?q=%23%E4%BA%94%E5%8D%81%E5%85%AC%E9%87%8C%E6%A1%83%E8%8A%B1%E5%9D%9E6%23) `79.4K 🔥`
1. [周杰伦新专辑太阳之子 (Jay Chou's new album Son of the Sun)](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%9D%B0%E4%BC%A6%E6%96%B0%E4%B8%93%E8%BE%91%E5%A4%AA%E9%98%B3%E4%B9%8B%E5%AD%90%23) `79.4K 🔥`
1. [孔雪儿曾是邓凯的偶像](https://s.weibo.com/weibo?q=%23%E5%AD%94%E9%9B%AA%E5%84%BF%E6%9B%BE%E6%98%AF%E9%82%93%E5%87%AF%E7%9A%84%E5%81%B6%E5%83%8F%23) `75.0K 🔥`
1. [文身店免费给65岁以上老人文身](https://s.weibo.com/weibo?q=%23%E6%96%87%E8%BA%AB%E5%BA%97%E5%85%8D%E8%B4%B9%E7%BB%9965%E5%B2%81%E4%BB%A5%E4%B8%8A%E8%80%81%E4%BA%BA%E6%96%87%E8%BA%AB%23) `212.0K 🔥` `-72%`
1. [百花杀](https://s.weibo.com/weibo?q=%23%E7%99%BE%E8%8A%B1%E6%9D%80%23) `209.0K 🔥` `-54%`
1. [离职要走发现同事在窗口举牌](https://s.weibo.com/weibo?q=%23%E7%A6%BB%E8%81%8C%E8%A6%81%E8%B5%B0%E5%8F%91%E7%8E%B0%E5%90%8C%E4%BA%8B%E5%9C%A8%E7%AA%97%E5%8F%A3%E4%B8%BE%E7%89%8C%23) `208.1K 🔥` `-54%`
1. [耀客一直在等孟子义 (Yaoke has been waiting for Meng Ziyi)](https://s.weibo.com/weibo?q=%23%E8%80%80%E5%AE%A2%E4%B8%80%E7%9B%B4%E5%9C%A8%E7%AD%89%E5%AD%9F%E5%AD%90%E4%B9%89%23) `205.4K 🔥` `-56%`
1. [伊朗革命卫队报复行动升级 (Iran's Revolutionary Guards escalate retaliatory actions)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E9%9D%A9%E5%91%BD%E5%8D%AB%E9%98%9F%E6%8A%A5%E5%A4%8D%E8%A1%8C%E5%8A%A8%E5%8D%87%E7%BA%A7%23) `111.2K 🔥` `-59%`
1. [全球机票将涨价](https://s.weibo.com/weibo?q=%23%E5%85%A8%E7%90%83%E6%9C%BA%E7%A5%A8%E5%B0%86%E6%B6%A8%E4%BB%B7%23) `107.0K 🔥` `-25%`
1. [以色列因总理身亡传言连发3天视频](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E8%89%B2%E5%88%97%E5%9B%A0%E6%80%BB%E7%90%86%E8%BA%AB%E4%BA%A1%E4%BC%A0%E8%A8%80%E8%BF%9E%E5%8F%913%E5%A4%A9%E8%A7%86%E9%A2%91%23) `97.3K 🔥` `-32%`
1. [奶奶减肥法](https://s.weibo.com/weibo?q=%23%E5%A5%B6%E5%A5%B6%E5%87%8F%E8%82%A5%E6%B3%95%23) `81.2K 🔥` `-44%`
1. [小S街头大哭](https://s.weibo.com/weibo?q=%23%E5%B0%8FS%E8%A1%97%E5%A4%B4%E5%A4%A7%E5%93%AD%23) `81.2K 🔥` `-44%`
1. [李昀锐黄杨钿甜冰湖重生新预告 (New trailer for Li Yunrui, Huang Yangdian and Sweet Ice Lake Rebirth)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%98%80%E9%94%90%E9%BB%84%E6%9D%A8%E9%92%BF%E7%94%9C%E5%86%B0%E6%B9%96%E9%87%8D%E7%94%9F%E6%96%B0%E9%A2%84%E5%91%8A%23) `72.5K 🔥` `-55%`
1. [男子误给离世者转5万被银行划扣3万](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E8%AF%AF%E7%BB%99%E7%A6%BB%E4%B8%96%E8%80%85%E8%BD%AC5%E4%B8%87%E8%A2%AB%E9%93%B6%E8%A1%8C%E5%88%92%E6%89%A33%E4%B8%87%23) `65.5K 🔥` `-23%`

Updated at 2026-03-18 18:09:52

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
