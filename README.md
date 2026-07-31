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

1. [连云港消防回应火灾母女坠楼 (Lianyungang fire department responded to fire and mother and daughter fell from building)](https://s.weibo.com/weibo?q=%23%E8%BF%9E%E4%BA%91%E6%B8%AF%E6%B6%88%E9%98%B2%E5%9B%9E%E5%BA%94%E7%81%AB%E7%81%BE%E6%AF%8D%E5%A5%B3%E5%9D%A0%E6%A5%BC%23) `7.9M 🔥` `NEW`
1. [强军制胜不负荣光](https://s.weibo.com/weibo?q=%23%E5%BC%BA%E5%86%9B%E5%88%B6%E8%83%9C%E4%B8%8D%E8%B4%9F%E8%8D%A3%E5%85%89%23) `1.8M 🔥` `NEW`
1. [歌手排名](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B%E6%8E%92%E5%90%8D%23) `1.6M 🔥` `NEW`
1. [微博文化交流之夜马来西亚站倒计时1天](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E5%8D%9A%E6%96%87%E5%8C%96%E4%BA%A4%E6%B5%81%E4%B9%8B%E5%A4%9C%E9%A9%AC%E6%9D%A5%E8%A5%BF%E4%BA%9A%E7%AB%99%E5%80%92%E8%AE%A1%E6%97%B61%E5%A4%A9%23) `468.0K 🔥` `NEW`
1. [魏如萱淘汰](https://s.weibo.com/weibo?q=%23%E9%AD%8F%E5%A6%82%E8%90%B1%E6%B7%98%E6%B1%B0%23) `465.2K 🔥` `NEW`
1. [王楚钦徐瑛彬 伤病对决](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E5%BE%90%E7%91%9B%E5%BD%AC%20%E4%BC%A4%E7%97%85%E5%AF%B9%E5%86%B3%23) `381.4K 🔥` `NEW`
1. [山东魏桥8比2北京一点心动](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E4%B8%9C%E9%AD%8F%E6%A1%A58%E6%AF%942%E5%8C%97%E4%BA%AC%E4%B8%80%E7%82%B9%E5%BF%83%E5%8A%A8%23) `377.4K 🔥` `NEW`
1. [申惠善获青龙视后](https://s.weibo.com/weibo?q=%23%E7%94%B3%E6%83%A0%E5%96%84%E8%8E%B7%E9%9D%92%E9%BE%99%E8%A7%86%E5%90%8E%23) `366.7K 🔥` `NEW`
1. [章若楠ins第一条百万赞](https://s.weibo.com/weibo?q=%23%E7%AB%A0%E8%8B%A5%E6%A5%A0ins%E7%AC%AC%E4%B8%80%E6%9D%A1%E7%99%BE%E4%B8%87%E8%B5%9E%23) `363.8K 🔥` `NEW`
1. [低价大流量卡将集体退场](https://s.weibo.com/weibo?q=%23%E4%BD%8E%E4%BB%B7%E5%A4%A7%E6%B5%81%E9%87%8F%E5%8D%A1%E5%B0%86%E9%9B%86%E4%BD%93%E9%80%80%E5%9C%BA%23) `362.6K 🔥` `NEW`
1. [马斯克发丧尸片视频形容非法移民 (Musk posts zombie video to describe illegal immigrants)](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E6%96%AF%E5%85%8B%E5%8F%91%E4%B8%A7%E5%B0%B8%E7%89%87%E8%A7%86%E9%A2%91%E5%BD%A2%E5%AE%B9%E9%9D%9E%E6%B3%95%E7%A7%BB%E6%B0%91%23) `362.3K 🔥` `NEW`
1. [三大运营商将停止第三方互联网渠道办卡](https://s.weibo.com/weibo?q=%23%E4%B8%89%E5%A4%A7%E8%BF%90%E8%90%A5%E5%95%86%E5%B0%86%E5%81%9C%E6%AD%A2%E7%AC%AC%E4%B8%89%E6%96%B9%E4%BA%92%E8%81%94%E7%BD%91%E6%B8%A0%E9%81%93%E5%8A%9E%E5%8D%A1%23) `361.7K 🔥` `NEW`
1. [母女坠落时消防和群众已拉被褥接人](https://s.weibo.com/weibo?q=%23%E6%AF%8D%E5%A5%B3%E5%9D%A0%E8%90%BD%E6%97%B6%E6%B6%88%E9%98%B2%E5%92%8C%E7%BE%A4%E4%BC%97%E5%B7%B2%E6%8B%89%E8%A2%AB%E8%A4%A5%E6%8E%A5%E4%BA%BA%23) `361.2K 🔥` `NEW`
1. [万妮达综合第一](https://s.weibo.com/weibo?q=%23%E4%B8%87%E5%A6%AE%E8%BE%BE%E7%BB%BC%E5%90%88%E7%AC%AC%E4%B8%80%23) `360.1K 🔥` `NEW`
1. [女子称婚外胚胎销毁前绝不离婚](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E7%A7%B0%E5%A9%9A%E5%A4%96%E8%83%9A%E8%83%8E%E9%94%80%E6%AF%81%E5%89%8D%E7%BB%9D%E4%B8%8D%E7%A6%BB%E5%A9%9A%23) `359.4K 🔥` `NEW`
1. [原来到一定年龄就想生小孩了](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E5%88%B0%E4%B8%80%E5%AE%9A%E5%B9%B4%E9%BE%84%E5%B0%B1%E6%83%B3%E7%94%9F%E5%B0%8F%E5%AD%A9%E4%BA%86%23) `358.6K 🔥` `NEW`
1. [上海一顾客因大盘鸡里有土豆报警](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E4%B8%80%E9%A1%BE%E5%AE%A2%E5%9B%A0%E5%A4%A7%E7%9B%98%E9%B8%A1%E9%87%8C%E6%9C%89%E5%9C%9F%E8%B1%86%E6%8A%A5%E8%AD%A6%23) `357.9K 🔥` `NEW`
1. [国家电网原董事长辛保安被查](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E5%AE%B6%E7%94%B5%E7%BD%91%E5%8E%9F%E8%91%A3%E4%BA%8B%E9%95%BF%E8%BE%9B%E4%BF%9D%E5%AE%89%E8%A2%AB%E6%9F%A5%23) `345.7K 🔥` `NEW`
1. [原神至冬](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E7%A5%9E%E8%87%B3%E5%86%AC%23) `343.4K 🔥` `NEW`
1. [丈夫周密规划未来抛弃原配母子](https://s.weibo.com/weibo?q=%23%E4%B8%88%E5%A4%AB%E5%91%A8%E5%AF%86%E8%A7%84%E5%88%92%E6%9C%AA%E6%9D%A5%E6%8A%9B%E5%BC%83%E5%8E%9F%E9%85%8D%E6%AF%8D%E5%AD%90%23) `342.6K 🔥` `NEW`
1. [华尔街AI股神高杠杆爆仓出局 (Wall Street’s AI stock god is out of business due to highly leveraged positions)](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E5%B0%94%E8%A1%97AI%E8%82%A1%E7%A5%9E%E9%AB%98%E6%9D%A0%E6%9D%86%E7%88%86%E4%BB%93%E5%87%BA%E5%B1%80%23) `321.9K 🔥` `NEW`
1. [尤长靖歌手第一](https://s.weibo.com/weibo?q=%23%E5%B0%A4%E9%95%BF%E9%9D%96%E6%AD%8C%E6%89%8B%E7%AC%AC%E4%B8%80%23) `321.8K 🔥` `NEW`
1. [小区 不具备铺设条件](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%8C%BA%20%E4%B8%8D%E5%85%B7%E5%A4%87%E9%93%BA%E8%AE%BE%E6%9D%A1%E4%BB%B6%23) `306.7K 🔥` `NEW`
1. [九门 鬼片](https://s.weibo.com/weibo?q=%23%E4%B9%9D%E9%97%A8%20%E9%AC%BC%E7%89%87%23) `306.1K 🔥` `NEW`
1. [杨幂百花奖史上第一位女配双提名](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E7%99%BE%E8%8A%B1%E5%A5%96%E5%8F%B2%E4%B8%8A%E7%AC%AC%E4%B8%80%E4%BD%8D%E5%A5%B3%E9%85%8D%E5%8F%8C%E6%8F%90%E5%90%8D%23) `301.2K 🔥` `NEW`
1. [李光洙起哄金宇彬申敏儿](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%85%89%E6%B4%99%E8%B5%B7%E5%93%84%E9%87%91%E5%AE%87%E5%BD%AC%E7%94%B3%E6%95%8F%E5%84%BF%23) `268.3K 🔥` `NEW`
1. [金高银青龙大赏](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%AB%98%E9%93%B6%E9%9D%92%E9%BE%99%E5%A4%A7%E8%B5%8F%23) `253.6K 🔥` `NEW`
1. [连云港火灾坠楼母亲伤情平稳](https://s.weibo.com/weibo?q=%23%E8%BF%9E%E4%BA%91%E6%B8%AF%E7%81%AB%E7%81%BE%E5%9D%A0%E6%A5%BC%E6%AF%8D%E4%BA%B2%E4%BC%A4%E6%83%85%E5%B9%B3%E7%A8%B3%23) `242.4K 🔥` `NEW`
1. [父母遇撞船6天后母亲遗体现沙滩](https://s.weibo.com/weibo?q=%23%E7%88%B6%E6%AF%8D%E9%81%87%E6%92%9E%E8%88%B96%E5%A4%A9%E5%90%8E%E6%AF%8D%E4%BA%B2%E9%81%97%E4%BD%93%E7%8E%B0%E6%B2%99%E6%BB%A9%23) `232.0K 🔥` `NEW`
1. [张信哲晒和张远聊天记录](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E4%BF%A1%E5%93%B2%E6%99%92%E5%92%8C%E5%BC%A0%E8%BF%9C%E8%81%8A%E5%A4%A9%E8%AE%B0%E5%BD%95%23) `231.9K 🔥` `NEW`
1. [何洛洛吃饭被问微信 (He Luoluo was asked about WeChat while eating)](https://s.weibo.com/weibo?q=%23%E4%BD%95%E6%B4%9B%E6%B4%9B%E5%90%83%E9%A5%AD%E8%A2%AB%E9%97%AE%E5%BE%AE%E4%BF%A1%23) `200.7K 🔥` `NEW`
1. [房主任被停演3个月](https://s.weibo.com/weibo?q=%23%E6%88%BF%E4%B8%BB%E4%BB%BB%E8%A2%AB%E5%81%9C%E6%BC%943%E4%B8%AA%E6%9C%88%23) `2.2M 🔥` `+494%`
1. [周星驰质疑董宇辉看大话西游500遍](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%98%9F%E9%A9%B0%E8%B4%A8%E7%96%91%E8%91%A3%E5%AE%87%E8%BE%89%E7%9C%8B%E5%A4%A7%E8%AF%9D%E8%A5%BF%E6%B8%B8500%E9%81%8D%23) `976.8K 🔥` `+428%`
1. [公公强奸儿媳案丈夫认定妻子是自愿](https://s.weibo.com/weibo?q=%23%E5%85%AC%E5%85%AC%E5%BC%BA%E5%A5%B8%E5%84%BF%E5%AA%B3%E6%A1%88%E4%B8%88%E5%A4%AB%E8%AE%A4%E5%AE%9A%E5%A6%BB%E5%AD%90%E6%98%AF%E8%87%AA%E6%84%BF%23) `376.0K 🔥` `+54%`
1. [移民涌入西班牙像僵尸入侵 (Immigrants pouring into Spain like a zombie invasion)](https://s.weibo.com/weibo?q=%23%E7%A7%BB%E6%B0%91%E6%B6%8C%E5%85%A5%E8%A5%BF%E7%8F%AD%E7%89%99%E5%83%8F%E5%83%B5%E5%B0%B8%E5%85%A5%E4%BE%B5%23) `337.5K 🔥` `+37%`
1. [被安排冥婚女星26岁时自杀身亡](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E5%AE%89%E6%8E%92%E5%86%A5%E5%A9%9A%E5%A5%B3%E6%98%9F26%E5%B2%81%E6%97%B6%E8%87%AA%E6%9D%80%E8%BA%AB%E4%BA%A1%23) `323.4K 🔥` `+72%`
1. [Adobe称法国AI排名全球第三](https://s.weibo.com/weibo?q=%23Adobe%E7%A7%B0%E6%B3%95%E5%9B%BDAI%E6%8E%92%E5%90%8D%E5%85%A8%E7%90%83%E7%AC%AC%E4%B8%89%23) `232.6K 🔥` `+45%`
1. [孙珍妮胳膊瘦到只剩骨头了](https://s.weibo.com/weibo?q=%23%E5%AD%99%E7%8F%8D%E5%A6%AE%E8%83%B3%E8%86%8A%E7%98%A6%E5%88%B0%E5%8F%AA%E5%89%A9%E9%AA%A8%E5%A4%B4%E4%BA%86%23) `373.9K 🔥`
1. [婚外试管小三正面拍照挑衅患癌原配](https://s.weibo.com/weibo?q=%23%E5%A9%9A%E5%A4%96%E8%AF%95%E7%AE%A1%E5%B0%8F%E4%B8%89%E6%AD%A3%E9%9D%A2%E6%8B%8D%E7%85%A7%E6%8C%91%E8%A1%85%E6%82%A3%E7%99%8C%E5%8E%9F%E9%85%8D%23) `371.0K 🔥`
1. [唐艺昕没有妊娠纹](https://s.weibo.com/weibo?q=%23%E5%94%90%E8%89%BA%E6%98%95%E6%B2%A1%E6%9C%89%E5%A6%8A%E5%A8%A0%E7%BA%B9%23) `348.3K 🔥`
1. [菲律宾严重侵犯中国领土主权](https://s.weibo.com/weibo?q=%23%E8%8F%B2%E5%BE%8B%E5%AE%BE%E4%B8%A5%E9%87%8D%E4%BE%B5%E7%8A%AF%E4%B8%AD%E5%9B%BD%E9%A2%86%E5%9C%9F%E4%B8%BB%E6%9D%83%23) `337.3K 🔥`
1. [邓紫棋偷看歌手又被发现了 (Deng Ziqi was caught peeking at the singer again)](https://s.weibo.com/weibo?q=%23%E9%82%93%E7%B4%AB%E6%A3%8B%E5%81%B7%E7%9C%8B%E6%AD%8C%E6%89%8B%E5%8F%88%E8%A2%AB%E5%8F%91%E7%8E%B0%E4%BA%86%23) `334.7K 🔥`
1. [DeepSeekV4能力在GLM5.2和KimiK3之间 (DeepSeekV4 capabilities are between GLM5.2 and KimiK3)](https://s.weibo.com/weibo?q=%23DeepSeekV4%E8%83%BD%E5%8A%9B%E5%9C%A8GLM5.2%E5%92%8CKimiK3%E4%B9%8B%E9%97%B4%23) `232.1K 🔥`
1. [客服 坏了他真会啊](https://s.weibo.com/weibo?q=%23%E5%AE%A2%E6%9C%8D%20%E5%9D%8F%E4%BA%86%E4%BB%96%E7%9C%9F%E4%BC%9A%E5%95%8A%23) `468.1K 🔥` `-41%`
1. [三大运营商发布公告](https://s.weibo.com/weibo?q=%23%E4%B8%89%E5%A4%A7%E8%BF%90%E8%90%A5%E5%95%86%E5%8F%91%E5%B8%83%E5%85%AC%E5%91%8A%23) `382.6K 🔥` `-28%`
1. [外籍主播古爱华放弃入职敦煌融媒体](https://s.weibo.com/weibo?q=%23%E5%A4%96%E7%B1%8D%E4%B8%BB%E6%92%AD%E5%8F%A4%E7%88%B1%E5%8D%8E%E6%94%BE%E5%BC%83%E5%85%A5%E8%81%8C%E6%95%A6%E7%85%8C%E8%9E%8D%E5%AA%92%E4%BD%93%23) `281.3K 🔥` `-31%`
1. [白鹿广东凉鞋](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E5%B9%BF%E4%B8%9C%E5%87%89%E9%9E%8B%23) `260.9K 🔥` `-31%`
1. [保时捷女销冠已向法院立案](https://s.weibo.com/weibo?q=%23%E4%BF%9D%E6%97%B6%E6%8D%B7%E5%A5%B3%E9%94%80%E5%86%A0%E5%B7%B2%E5%90%91%E6%B3%95%E9%99%A2%E7%AB%8B%E6%A1%88%23) `258.5K 🔥` `-75%`
1. [歌手直播](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B%E7%9B%B4%E6%92%AD%23) `256.6K 🔥` `-43%`
1. [窦靖童 王菲的声音窦唯的造型](https://s.weibo.com/weibo?q=%23%E7%AA%A6%E9%9D%96%E7%AB%A5%20%E7%8E%8B%E8%8F%B2%E7%9A%84%E5%A3%B0%E9%9F%B3%E7%AA%A6%E5%94%AF%E7%9A%84%E9%80%A0%E5%9E%8B%23) `242.1K 🔥` `-42%`

Updated at 2026-07-31 23:27:29

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
