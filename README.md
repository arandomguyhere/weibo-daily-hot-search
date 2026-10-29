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

1. [姆巴佩事件致西甲每赛季潜在损失1亿欧](https://s.weibo.com/weibo?q=%23%E5%A7%86%E5%B7%B4%E4%BD%A9%E4%BA%8B%E4%BB%B6%E8%87%B4%E8%A5%BF%E7%94%B2%E6%AF%8F%E8%B5%9B%E5%AD%A3%E6%BD%9C%E5%9C%A8%E6%8D%9F%E5%A4%B11%E4%BA%BF%E6%AC%A7%23) `1.1M 🔥` `NEW`
1. [外交部回应三丽鸥取消Vivant联名](https://s.weibo.com/weibo?q=%23%E5%A4%96%E4%BA%A4%E9%83%A8%E5%9B%9E%E5%BA%94%E4%B8%89%E4%B8%BD%E9%B8%A5%E5%8F%96%E6%B6%88Vivant%E8%81%94%E5%90%8D%23) `783.7K 🔥` `NEW`
1. [以旧换新惠民生促消费](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E6%97%A7%E6%8D%A2%E6%96%B0%E6%83%A0%E6%B0%91%E7%94%9F%E4%BF%83%E6%B6%88%E8%B4%B9%23) `782.8K 🔥` `NEW`
1. [杨洋可口可乐充乐联盟现场](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E6%B4%8B%E5%8F%AF%E5%8F%A3%E5%8F%AF%E4%B9%90%E5%85%85%E4%B9%90%E8%81%94%E7%9B%9F%E7%8E%B0%E5%9C%BA%23) `781.8K 🔥` `NEW`
1. [熟人借钱被拒后让我贷款](https://s.weibo.com/weibo?q=%23%E7%86%9F%E4%BA%BA%E5%80%9F%E9%92%B1%E8%A2%AB%E6%8B%92%E5%90%8E%E8%AE%A9%E6%88%91%E8%B4%B7%E6%AC%BE%23) `775.5K 🔥` `NEW`
1. [Meiko打服LYON辅助](https://s.weibo.com/weibo?q=%23Meiko%E6%89%93%E6%9C%8DLYON%E8%BE%85%E5%8A%A9%23) `772.5K 🔥` `NEW`
1. [三甲医生回应医学博士不会打方结](https://s.weibo.com/weibo?q=%23%E4%B8%89%E7%94%B2%E5%8C%BB%E7%94%9F%E5%9B%9E%E5%BA%94%E5%8C%BB%E5%AD%A6%E5%8D%9A%E5%A3%AB%E4%B8%8D%E4%BC%9A%E6%89%93%E6%96%B9%E7%BB%93%23) `769.2K 🔥` `NEW`
1. [母亲照顾截瘫儿子35年出奇迹](https://s.weibo.com/weibo?q=%23%E6%AF%8D%E4%BA%B2%E7%85%A7%E9%A1%BE%E6%88%AA%E7%98%AB%E5%84%BF%E5%AD%9035%E5%B9%B4%E5%87%BA%E5%A5%87%E8%BF%B9%23) `763.1K 🔥` `NEW`
1. [洛阳一卤蛋店爆火老板跪求少来](https://s.weibo.com/weibo?q=%23%E6%B4%9B%E9%98%B3%E4%B8%80%E5%8D%A4%E8%9B%8B%E5%BA%97%E7%88%86%E7%81%AB%E8%80%81%E6%9D%BF%E8%B7%AA%E6%B1%82%E5%B0%91%E6%9D%A5%23) `756.8K 🔥` `NEW`
1. [我国超大规模市场向全球释放红利](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%9B%BD%E8%B6%85%E5%A4%A7%E8%A7%84%E6%A8%A1%E5%B8%82%E5%9C%BA%E5%90%91%E5%85%A8%E7%90%83%E9%87%8A%E6%94%BE%E7%BA%A2%E5%88%A9%23) `754.3K 🔥` `NEW`
1. [MONAL05车大好开又好玩](https://s.weibo.com/weibo?q=%23MONAL05%E8%BD%A6%E5%A4%A7%E5%A5%BD%E5%BC%80%E5%8F%88%E5%A5%BD%E7%8E%A9%23) `748.4K 🔥` `NEW`
1. [给阿嬷的情书为何口碑反转](https://s.weibo.com/weibo?q=%23%E7%BB%99%E9%98%BF%E5%AC%B7%E7%9A%84%E6%83%85%E4%B9%A6%E4%B8%BA%E4%BD%95%E5%8F%A3%E7%A2%91%E5%8F%8D%E8%BD%AC%23) `744.2K 🔥` `NEW`
1. [孙颖莎等10人记大功](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E7%AD%8910%E4%BA%BA%E8%AE%B0%E5%A4%A7%E5%8A%9F%23) `742.0K 🔥` `NEW`
1. [张升民同志简历](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%8D%87%E6%B0%91%E5%90%8C%E5%BF%97%E7%AE%80%E5%8E%86%23) `714.8K 🔥` `NEW`
1. [女高管隆胸死亡前曾抱怨全是坑](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E9%AB%98%E7%AE%A1%E9%9A%86%E8%83%B8%E6%AD%BB%E4%BA%A1%E5%89%8D%E6%9B%BE%E6%8A%B1%E6%80%A8%E5%85%A8%E6%98%AF%E5%9D%91%23) `620.5K 🔥` `NEW`
1. [为什么得银屑病的年轻人越来越多](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E5%BE%97%E9%93%B6%E5%B1%91%E7%97%85%E7%9A%84%E5%B9%B4%E8%BD%BB%E4%BA%BA%E8%B6%8A%E6%9D%A5%E8%B6%8A%E5%A4%9A%23) `457.4K 🔥` `NEW`
1. [39岁女高管隆胸因麻醉过敏死亡](https://s.weibo.com/weibo?q=%2339%E5%B2%81%E5%A5%B3%E9%AB%98%E7%AE%A1%E9%9A%86%E8%83%B8%E5%9B%A0%E9%BA%BB%E9%86%89%E8%BF%87%E6%95%8F%E6%AD%BB%E4%BA%A1%23) `427.0K 🔥` `NEW`
1. [校方回应大体老师骨骼被写轻浮文字](https://s.weibo.com/weibo?q=%23%E6%A0%A1%E6%96%B9%E5%9B%9E%E5%BA%94%E5%A4%A7%E4%BD%93%E8%80%81%E5%B8%88%E9%AA%A8%E9%AA%BC%E8%A2%AB%E5%86%99%E8%BD%BB%E6%B5%AE%E6%96%87%E5%AD%97%23) `275.5K 🔥` `NEW`
1. [苹果新电脑卖12万](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C%E6%96%B0%E7%94%B5%E8%84%91%E5%8D%9612%E4%B8%87%23) `236.4K 🔥` `NEW`
1. [A股后市稳步走强或是主旋律](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E5%90%8E%E5%B8%82%E7%A8%B3%E6%AD%A5%E8%B5%B0%E5%BC%BA%E6%88%96%E6%98%AF%E4%B8%BB%E6%97%8B%E5%BE%8B%23) `216.5K 🔥` `NEW`
1. [辛芷蕾胡先煦花少5新母带](https://s.weibo.com/weibo?q=%23%E8%BE%9B%E8%8A%B7%E8%95%BE%E8%83%A1%E5%85%88%E7%85%A6%E8%8A%B1%E5%B0%915%E6%96%B0%E6%AF%8D%E5%B8%A6%23) `209.2K 🔥` `NEW`
1. [何洁曾发和李宇春聊天记录截图](https://s.weibo.com/weibo?q=%23%E4%BD%95%E6%B4%81%E6%9B%BE%E5%8F%91%E5%92%8C%E6%9D%8E%E5%AE%87%E6%98%A5%E8%81%8A%E5%A4%A9%E8%AE%B0%E5%BD%95%E6%88%AA%E5%9B%BE%23) `209.2K 🔥` `NEW`
1. [31省份居民花钱数据出炉](https://s.weibo.com/weibo?q=%2331%E7%9C%81%E4%BB%BD%E5%B1%85%E6%B0%91%E8%8A%B1%E9%92%B1%E6%95%B0%E6%8D%AE%E5%87%BA%E7%82%89%23) `208.8K 🔥` `NEW`
1. [疑似王子璇文吉儿知情人爆料](https://s.weibo.com/weibo?q=%23%E7%96%91%E4%BC%BC%E7%8E%8B%E5%AD%90%E7%92%87%E6%96%87%E5%90%89%E5%84%BF%E7%9F%A5%E6%83%85%E4%BA%BA%E7%88%86%E6%96%99%23) `208.4K 🔥` `NEW`
1. [男子吃凉土豆蘸辣椒面2个月瘦22斤](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%90%83%E5%87%89%E5%9C%9F%E8%B1%86%E8%98%B8%E8%BE%A3%E6%A4%92%E9%9D%A22%E4%B8%AA%E6%9C%88%E7%98%A622%E6%96%A4%23) `208.2K 🔥` `NEW`
1. [神仙打架股民跟着买单](https://s.weibo.com/weibo?q=%23%E7%A5%9E%E4%BB%99%E6%89%93%E6%9E%B6%E8%82%A1%E6%B0%91%E8%B7%9F%E7%9D%80%E4%B9%B0%E5%8D%95%23) `207.8K 🔥` `NEW`
1. [李宇春翻查何洁婚礼短信到凌晨两点](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%AE%87%E6%98%A5%E7%BF%BB%E6%9F%A5%E4%BD%95%E6%B4%81%E5%A9%9A%E7%A4%BC%E7%9F%AD%E4%BF%A1%E5%88%B0%E5%87%8C%E6%99%A8%E4%B8%A4%E7%82%B9%23) `207.5K 🔥` `NEW`
1. [150人考试149人通过牵出作弊案](https://s.weibo.com/weibo?q=%23150%E4%BA%BA%E8%80%83%E8%AF%95149%E4%BA%BA%E9%80%9A%E8%BF%87%E7%89%B5%E5%87%BA%E4%BD%9C%E5%BC%8A%E6%A1%88%23) `207.2K 🔥` `NEW`
1. [魏娆直接废了太子](https://s.weibo.com/weibo?q=%23%E9%AD%8F%E5%A8%86%E7%9B%B4%E6%8E%A5%E5%BA%9F%E4%BA%86%E5%A4%AA%E5%AD%90%23) `207.0K 🔥` `NEW`
1. [ChatGPT被指致用户死亡](https://s.weibo.com/weibo?q=%23ChatGPT%E8%A2%AB%E6%8C%87%E8%87%B4%E7%94%A8%E6%88%B7%E6%AD%BB%E4%BA%A1%23) `206.7K 🔥` `NEW`
1. [难怪说钟楚曦两年能画出一套房](https://s.weibo.com/weibo?q=%23%E9%9A%BE%E6%80%AA%E8%AF%B4%E9%92%9F%E6%A5%9A%E6%9B%A6%E4%B8%A4%E5%B9%B4%E8%83%BD%E7%94%BB%E5%87%BA%E4%B8%80%E5%A5%97%E6%88%BF%23) `206.3K 🔥` `NEW`
1. [女子月薪3500扣完开销仅剩2元](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%9C%88%E8%96%AA3500%E6%89%A3%E5%AE%8C%E5%BC%80%E9%94%80%E4%BB%85%E5%89%A92%E5%85%83%23) `205.9K 🔥` `NEW`
1. [阿维塔](https://s.weibo.com/weibo?q=%23%E9%98%BF%E7%BB%B4%E5%A1%94%23) `205.7K 🔥` `NEW`
1. [西班牙列车事故车厢座椅当场掀飞](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%8F%AD%E7%89%99%E5%88%97%E8%BD%A6%E4%BA%8B%E6%95%85%E8%BD%A6%E5%8E%A2%E5%BA%A7%E6%A4%85%E5%BD%93%E5%9C%BA%E6%8E%80%E9%A3%9E%23) `205.5K 🔥` `NEW`
1. [三阴性乳腺癌被称为乳腺癌之王](https://s.weibo.com/weibo?q=%23%E4%B8%89%E9%98%B4%E6%80%A7%E4%B9%B3%E8%85%BA%E7%99%8C%E8%A2%AB%E7%A7%B0%E4%B8%BA%E4%B9%B3%E8%85%BA%E7%99%8C%E4%B9%8B%E7%8E%8B%23) `205.0K 🔥` `NEW`
1. [田曦薇15年高中时期的视频](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%8715%E5%B9%B4%E9%AB%98%E4%B8%AD%E6%97%B6%E6%9C%9F%E7%9A%84%E8%A7%86%E9%A2%91%23) `204.6K 🔥` `NEW`
1. [KPL](https://s.weibo.com/weibo?q=%23KPL%23) `204.5K 🔥` `NEW`
1. [官方通报多名学生共用针头](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E9%80%9A%E6%8A%A5%E5%A4%9A%E5%90%8D%E5%AD%A6%E7%94%9F%E5%85%B1%E7%94%A8%E9%92%88%E5%A4%B4%23) `197.2K 🔥` `NEW`
1. [马天宇嘴都紫了还想吃瓜](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%A4%A9%E5%AE%87%E5%98%B4%E9%83%BD%E7%B4%AB%E4%BA%86%E8%BF%98%E6%83%B3%E5%90%83%E7%93%9C%23) `186.6K 🔥` `NEW`
1. [梁靖崑3比0温瑞博](https://s.weibo.com/weibo?q=%23%E6%A2%81%E9%9D%96%E5%B4%913%E6%AF%940%E6%B8%A9%E7%91%9E%E5%8D%9A%23) `176.2K 🔥` `NEW`
1. [小城良方进入大失恋时代](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%9F%8E%E8%89%AF%E6%96%B9%E8%BF%9B%E5%85%A5%E5%A4%A7%E5%A4%B1%E6%81%8B%E6%97%B6%E4%BB%A3%23) `167.5K 🔥` `NEW`
1. [卡戎梁思伟合体直播](https://s.weibo.com/weibo?q=%23%E5%8D%A1%E6%88%8E%E6%A2%81%E6%80%9D%E4%BC%9F%E5%90%88%E4%BD%93%E7%9B%B4%E6%92%AD%23) `167.5K 🔥` `NEW`
1. [陈哲远直播](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%93%B2%E8%BF%9C%E7%9B%B4%E6%92%AD%23) `167.5K 🔥` `NEW`
1. [孙心然救赛点逆转](https://s.weibo.com/weibo?q=%23%E5%AD%99%E5%BF%83%E7%84%B6%E6%95%91%E8%B5%9B%E7%82%B9%E9%80%86%E8%BD%AC%23) `165.5K 🔥` `NEW`
1. [爱康粉红丝带点亮重庆大剧院](https://s.weibo.com/weibo?q=%23%E7%88%B1%E5%BA%B7%E7%B2%89%E7%BA%A2%E4%B8%9D%E5%B8%A6%E7%82%B9%E4%BA%AE%E9%87%8D%E5%BA%86%E5%A4%A7%E5%89%A7%E9%99%A2%23) `164.4K 🔥` `NEW`
1. [张元英给金智媛让C](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%85%83%E8%8B%B1%E7%BB%99%E9%87%91%E6%99%BA%E5%AA%9B%E8%AE%A9C%23) `164.0K 🔥` `NEW`
1. [曝恋人开年大剧](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%81%8B%E4%BA%BA%E5%BC%80%E5%B9%B4%E5%A4%A7%E5%89%A7%23) `156.7K 🔥` `NEW`
1. [王子璇最怕节目播出后被说诈骗](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%AD%90%E7%92%87%E6%9C%80%E6%80%95%E8%8A%82%E7%9B%AE%E6%92%AD%E5%87%BA%E5%90%8E%E8%A2%AB%E8%AF%B4%E8%AF%88%E9%AA%97%23) `149.8K 🔥` `NEW`
1. [邓超看baby的眼神](https://s.weibo.com/weibo?q=%23%E9%82%93%E8%B6%85%E7%9C%8Bbaby%E7%9A%84%E7%9C%BC%E7%A5%9E%23) `132.2K 🔥` `NEW`
1. [梁靖崑蒙彼利埃站开门红](https://s.weibo.com/weibo?q=%23%E6%A2%81%E9%9D%96%E5%B4%91%E8%92%99%E5%BD%BC%E5%88%A9%E5%9F%83%E7%AB%99%E5%BC%80%E9%97%A8%E7%BA%A2%23) `118.4K 🔥` `NEW`
1. [王腾回应ISHORing被质疑智商税](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%85%BE%E5%9B%9E%E5%BA%94ISHORing%E8%A2%AB%E8%B4%A8%E7%96%91%E6%99%BA%E5%95%86%E7%A8%8E%23) `118.3K 🔥` `NEW`

Updated at 2026-10-29 20:52:02

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
