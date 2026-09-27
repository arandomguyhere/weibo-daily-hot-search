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

1. [孙颖莎vs早田希娜](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8Evs%E6%97%A9%E7%94%B0%E5%B8%8C%E5%A8%9C%23) `2.1M 🔥` `NEW`
1. [乒乓球](https://s.weibo.com/weibo?q=%23%E4%B9%92%E4%B9%93%E7%90%83%23) `1.3M 🔥` `NEW`
1. [世界技能大赛的动人瞬间](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%8A%80%E8%83%BD%E5%A4%A7%E8%B5%9B%E7%9A%84%E5%8A%A8%E4%BA%BA%E7%9E%AC%E9%97%B4%23) `1.2M 🔥` `NEW`
1. [豆包回答70岁前去世占比](https://s.weibo.com/weibo?q=%23%E8%B1%86%E5%8C%85%E5%9B%9E%E7%AD%9470%E5%B2%81%E5%89%8D%E5%8E%BB%E4%B8%96%E5%8D%A0%E6%AF%94%23) `1.1M 🔥` `NEW`
1. [国乒男双无缘会师决赛](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%E7%94%B7%E5%8F%8C%E6%97%A0%E7%BC%98%E4%BC%9A%E5%B8%88%E5%86%B3%E8%B5%9B%23) `825.2K 🔥` `NEW`
1. [北京释放7亿只小蜂治毛毛虫](https://s.weibo.com/weibo?q=%23%E5%8C%97%E4%BA%AC%E9%87%8A%E6%94%BE7%E4%BA%BF%E5%8F%AA%E5%B0%8F%E8%9C%82%E6%B2%BB%E6%AF%9B%E6%AF%9B%E8%99%AB%23) `603.9K 🔥` `NEW`
1. [长生契蹦极直播](https://s.weibo.com/weibo?q=%23%E9%95%BF%E7%94%9F%E5%A5%91%E8%B9%A6%E6%9E%81%E7%9B%B4%E6%92%AD%23) `525.2K 🔥` `NEW`
1. [王曼昱亚运双杀张本美和](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%9B%BC%E6%98%B1%E4%BA%9A%E8%BF%90%E5%8F%8C%E6%9D%80%E5%BC%A0%E6%9C%AC%E7%BE%8E%E5%92%8C%23) `493.1K 🔥` `NEW`
1. [研究生导师把丑话说在前面](https://s.weibo.com/weibo?q=%23%E7%A0%94%E7%A9%B6%E7%94%9F%E5%AF%BC%E5%B8%88%E6%8A%8A%E4%B8%91%E8%AF%9D%E8%AF%B4%E5%9C%A8%E5%89%8D%E9%9D%A2%23) `490.3K 🔥` `NEW`
1. [交强险经营亏损两百多亿](https://s.weibo.com/weibo?q=%23%E4%BA%A4%E5%BC%BA%E9%99%A9%E7%BB%8F%E8%90%A5%E4%BA%8F%E6%8D%9F%E4%B8%A4%E7%99%BE%E5%A4%9A%E4%BA%BF%23) `445.7K 🔥` `NEW`
1. [蔡磊夫妇分居共战渐冻症](https://s.weibo.com/weibo?q=%23%E8%94%A1%E7%A3%8A%E5%A4%AB%E5%A6%87%E5%88%86%E5%B1%85%E5%85%B1%E6%88%98%E6%B8%90%E5%86%BB%E7%97%87%23) `438.6K 🔥` `NEW`
1. [井柏然 恨我的继续爱我的别停](https://s.weibo.com/weibo?q=%23%E4%BA%95%E6%9F%8F%E7%84%B6%20%E6%81%A8%E6%88%91%E7%9A%84%E7%BB%A7%E7%BB%AD%E7%88%B1%E6%88%91%E7%9A%84%E5%88%AB%E5%81%9C%23) `435.1K 🔥` `NEW`
1. [九岁儿子护母推倒奶奶尾骨摔折](https://s.weibo.com/weibo?q=%23%E4%B9%9D%E5%B2%81%E5%84%BF%E5%AD%90%E6%8A%A4%E6%AF%8D%E6%8E%A8%E5%80%92%E5%A5%B6%E5%A5%B6%E5%B0%BE%E9%AA%A8%E6%91%94%E6%8A%98%23) `419.6K 🔥` `NEW`
1. [胡歌黄曦宁在一起已经六年了](https://s.weibo.com/weibo?q=%23%E8%83%A1%E6%AD%8C%E9%BB%84%E6%9B%A6%E5%AE%81%E5%9C%A8%E4%B8%80%E8%B5%B7%E5%B7%B2%E7%BB%8F%E5%85%AD%E5%B9%B4%E4%BA%86%23) `413.4K 🔥` `NEW`
1. [袁娅维把微博发到了萨顶顶超话](https://s.weibo.com/weibo?q=%23%E8%A2%81%E5%A8%85%E7%BB%B4%E6%8A%8A%E5%BE%AE%E5%8D%9A%E5%8F%91%E5%88%B0%E4%BA%86%E8%90%A8%E9%A1%B6%E9%A1%B6%E8%B6%85%E8%AF%9D%23) `409.0K 🔥` `NEW`
1. [汶颂破苏炳添亚运纪录意味着什么](https://s.weibo.com/weibo?q=%23%E6%B1%B6%E9%A2%82%E7%A0%B4%E8%8B%8F%E7%82%B3%E6%B7%BB%E4%BA%9A%E8%BF%90%E7%BA%AA%E5%BD%95%E6%84%8F%E5%91%B3%E7%9D%80%E4%BB%80%E4%B9%88%23) `369.4K 🔥` `NEW`
1. [孙颖莎4比1赢了早田希娜](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E4%E6%AF%941%E8%B5%A2%E4%BA%86%E6%97%A9%E7%94%B0%E5%B8%8C%E5%A8%9C%23) `336.4K 🔥` `NEW`
1. [王一博采访道歉](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E9%87%87%E8%AE%BF%E9%81%93%E6%AD%89%23) `308.6K 🔥` `NEW`
1. [王曼昱4比1晋级决赛](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%9B%BC%E6%98%B14%E6%AF%941%E6%99%8B%E7%BA%A7%E5%86%B3%E8%B5%9B%23) `256.1K 🔥` `NEW`
1. [OpenAI暂停其最强模型训练](https://s.weibo.com/weibo?q=%23OpenAI%E6%9A%82%E5%81%9C%E5%85%B6%E6%9C%80%E5%BC%BA%E6%A8%A1%E5%9E%8B%E8%AE%AD%E7%BB%83%23) `253.8K 🔥` `NEW`
1. [罗永浩称俞敏洪卖劣质溜溜凳](https://s.weibo.com/weibo?q=%23%E7%BD%97%E6%B0%B8%E6%B5%A9%E7%A7%B0%E4%BF%9E%E6%95%8F%E6%B4%AA%E5%8D%96%E5%8A%A3%E8%B4%A8%E6%BA%9C%E6%BA%9C%E5%87%B3%23) `247.3K 🔥` `NEW`
1. [淡淡男友](https://s.weibo.com/weibo?q=%23%E6%B7%A1%E6%B7%A1%E7%94%B7%E5%8F%8B%23) `241.8K 🔥` `NEW`
1. [郎朗悼念刘欢](https://s.weibo.com/weibo?q=%23%E9%83%8E%E6%9C%97%E6%82%BC%E5%BF%B5%E5%88%98%E6%AC%A2%23) `240.1K 🔥` `NEW`
1. [婚后9年发现喜褥里有对棉花小人](https://s.weibo.com/weibo?q=%23%E5%A9%9A%E5%90%8E9%E5%B9%B4%E5%8F%91%E7%8E%B0%E5%96%9C%E8%A4%A5%E9%87%8C%E6%9C%89%E5%AF%B9%E6%A3%89%E8%8A%B1%E5%B0%8F%E4%BA%BA%23) `233.1K 🔥` `NEW`
1. [哈尔滨工程大学学生翻墙被警告处分](https://s.weibo.com/weibo?q=%23%E5%93%88%E5%B0%94%E6%BB%A8%E5%B7%A5%E7%A8%8B%E5%A4%A7%E5%AD%A6%E5%AD%A6%E7%94%9F%E7%BF%BB%E5%A2%99%E8%A2%AB%E8%AD%A6%E5%91%8A%E5%A4%84%E5%88%86%23) `230.6K 🔥` `NEW`
1. [新郎一句现在也是你妈妈了](https://s.weibo.com/weibo?q=%23%E6%96%B0%E9%83%8E%E4%B8%80%E5%8F%A5%E7%8E%B0%E5%9C%A8%E4%B9%9F%E6%98%AF%E4%BD%A0%E5%A6%88%E5%A6%88%E4%BA%86%23) `221.4K 🔥` `NEW`
1. [巴黎偶遇迪丽热巴了](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E9%BB%8E%E5%81%B6%E9%81%87%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E4%BA%86%23) `216.3K 🔥` `NEW`
1. [原来我养脸方式一直都是错的](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E6%88%91%E5%85%BB%E8%84%B8%E6%96%B9%E5%BC%8F%E4%B8%80%E7%9B%B4%E9%83%BD%E6%98%AF%E9%94%99%E7%9A%84%23) `211.5K 🔥` `NEW`
1. [广州岭南印象园一女演员从高处坠落](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E5%B7%9E%E5%B2%AD%E5%8D%97%E5%8D%B0%E8%B1%A1%E5%9B%AD%E4%B8%80%E5%A5%B3%E6%BC%94%E5%91%98%E4%BB%8E%E9%AB%98%E5%A4%84%E5%9D%A0%E8%90%BD%23) `211.5K 🔥` `NEW`
1. [温瑞博男团决赛丢两分男双遭大逆转](https://s.weibo.com/weibo?q=%23%E6%B8%A9%E7%91%9E%E5%8D%9A%E7%94%B7%E5%9B%A2%E5%86%B3%E8%B5%9B%E4%B8%A2%E4%B8%A4%E5%88%86%E7%94%B7%E5%8F%8C%E9%81%AD%E5%A4%A7%E9%80%86%E8%BD%AC%23) `209.2K 🔥` `NEW`
1. [第五人格](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%BA%94%E4%BA%BA%E6%A0%BC%23) `205.5K 🔥` `NEW`
1. [不会做饭的人建议反复观看](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E4%BC%9A%E5%81%9A%E9%A5%AD%E7%9A%84%E4%BA%BA%E5%BB%BA%E8%AE%AE%E5%8F%8D%E5%A4%8D%E8%A7%82%E7%9C%8B%23) `197.7K 🔥` `NEW`
1. [烧纸也开始上科技了](https://s.weibo.com/weibo?q=%23%E7%83%A7%E7%BA%B8%E4%B9%9F%E5%BC%80%E5%A7%8B%E4%B8%8A%E7%A7%91%E6%8A%80%E4%BA%86%23) `193.7K 🔥` `NEW`
1. [孙颖莎我听见了](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E6%88%91%E5%90%AC%E8%A7%81%E4%BA%86%23) `188.4K 🔥` `NEW`
1. [许兰香喂林锦岐吃骡子剩的红糖](https://s.weibo.com/weibo?q=%23%E8%AE%B8%E5%85%B0%E9%A6%99%E5%96%82%E6%9E%97%E9%94%A6%E5%B2%90%E5%90%83%E9%AA%A1%E5%AD%90%E5%89%A9%E7%9A%84%E7%BA%A2%E7%B3%96%23) `186.6K 🔥` `NEW`
1. [刘欢逝世带来一个健康提醒](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%AC%A2%E9%80%9D%E4%B8%96%E5%B8%A6%E6%9D%A5%E4%B8%80%E4%B8%AA%E5%81%A5%E5%BA%B7%E6%8F%90%E9%86%92%23) `184.1K 🔥` `NEW`
1. [贾乃亮祝经纪人新婚大喜](https://s.weibo.com/weibo?q=%23%E8%B4%BE%E4%B9%83%E4%BA%AE%E7%A5%9D%E7%BB%8F%E7%BA%AA%E4%BA%BA%E6%96%B0%E5%A9%9A%E5%A4%A7%E5%96%9C%23) `174.7K 🔥` `NEW`
1. [厦门的挖机在TikTok火了](https://s.weibo.com/weibo?q=%23%E5%8E%A6%E9%97%A8%E7%9A%84%E6%8C%96%E6%9C%BA%E5%9C%A8TikTok%E7%81%AB%E4%BA%86%23) `165.6K 🔥` `NEW`
1. [跳舞的好处被严重低估了](https://s.weibo.com/weibo?q=%23%E8%B7%B3%E8%88%9E%E7%9A%84%E5%A5%BD%E5%A4%84%E8%A2%AB%E4%B8%A5%E9%87%8D%E4%BD%8E%E4%BC%B0%E4%BA%86%23) `161.8K 🔥` `NEW`
1. [韩乔生谈王曼昱4比1战胜张本美和](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E4%B9%94%E7%94%9F%E8%B0%88%E7%8E%8B%E6%9B%BC%E6%98%B14%E6%AF%941%E6%88%98%E8%83%9C%E5%BC%A0%E6%9C%AC%E7%BE%8E%E5%92%8C%23) `159.6K 🔥` `NEW`
1. [这首诗是易烊千玺写的吗](https://s.weibo.com/weibo?q=%23%E8%BF%99%E9%A6%96%E8%AF%97%E6%98%AF%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%E5%86%99%E7%9A%84%E5%90%97%23) `158.6K 🔥` `NEW`
1. [孙千刘雯这次真的无妄之灾](https://s.weibo.com/weibo?q=%23%E5%AD%99%E5%8D%83%E5%88%98%E9%9B%AF%E8%BF%99%E6%AC%A1%E7%9C%9F%E7%9A%84%E6%97%A0%E5%A6%84%E4%B9%8B%E7%81%BE%23) `154.9K 🔥` `NEW`
1. [Linda爷崩溃了](https://s.weibo.com/weibo?q=%23Linda%E7%88%B7%E5%B4%A9%E6%BA%83%E4%BA%86%23) `143.7K 🔥` `NEW`
1. [男子称恋爱四年遭女友多次殴打](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E7%A7%B0%E6%81%8B%E7%88%B1%E5%9B%9B%E5%B9%B4%E9%81%AD%E5%A5%B3%E5%8F%8B%E5%A4%9A%E6%AC%A1%E6%AE%B4%E6%89%93%23) `141.8K 🔥` `NEW`
1. [谁看了沈月喝可乐这段能不笑](https://s.weibo.com/weibo?q=%23%E8%B0%81%E7%9C%8B%E4%BA%86%E6%B2%88%E6%9C%88%E5%96%9D%E5%8F%AF%E4%B9%90%E8%BF%99%E6%AE%B5%E8%83%BD%E4%B8%8D%E7%AC%91%23) `139.3K 🔥` `NEW`
1. [成毅好友央视总台请客狩谎剧组](https://s.weibo.com/weibo?q=%23%E6%88%90%E6%AF%85%E5%A5%BD%E5%8F%8B%E5%A4%AE%E8%A7%86%E6%80%BB%E5%8F%B0%E8%AF%B7%E5%AE%A2%E7%8B%A9%E8%B0%8E%E5%89%A7%E7%BB%84%23) `133.4K 🔥` `NEW`
1. [王一博rmb组合](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9Armb%E7%BB%84%E5%90%88%23) `130.1K 🔥` `NEW`
1. [科技新一谈问界溢价](https://s.weibo.com/weibo?q=%23%E7%A7%91%E6%8A%80%E6%96%B0%E4%B8%80%E8%B0%88%E9%97%AE%E7%95%8C%E6%BA%A2%E4%BB%B7%23) `125.2K 🔥` `NEW`
1. [胡歌3岁女儿近照](https://s.weibo.com/weibo?q=%23%E8%83%A1%E6%AD%8C3%E5%B2%81%E5%A5%B3%E5%84%BF%E8%BF%91%E7%85%A7%23) `287.8K 🔥` `+27%`
1. [中国赏秋路线一路向秋放心去追](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E8%B5%8F%E7%A7%8B%E8%B7%AF%E7%BA%BF%E4%B8%80%E8%B7%AF%E5%90%91%E7%A7%8B%E6%94%BE%E5%BF%83%E5%8E%BB%E8%BF%BD%23) `1.2M 🔥`
1. [结婚总比一个人独居强](https://s.weibo.com/weibo?q=%23%E7%BB%93%E5%A9%9A%E6%80%BB%E6%AF%94%E4%B8%80%E4%B8%AA%E4%BA%BA%E7%8B%AC%E5%B1%85%E5%BC%BA%23) `164.4K 🔥` `-26%`
1. [亚运乒乓球女单](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E8%BF%90%E4%B9%92%E4%B9%93%E7%90%83%E5%A5%B3%E5%8D%95%23) `135.8K 🔥` `-91%`

Updated at 2026-09-27 15:29:01

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
