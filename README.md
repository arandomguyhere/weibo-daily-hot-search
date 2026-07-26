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

1. [卫健委介入24岁女孩正颌手术被做反 (The National Health Commission intervened in a 24-year-old girl's orthognathic surgery that was reversed)](https://s.weibo.com/weibo?q=%23%E5%8D%AB%E5%81%A5%E5%A7%94%E4%BB%8B%E5%85%A524%E5%B2%81%E5%A5%B3%E5%AD%A9%E6%AD%A3%E9%A2%8C%E6%89%8B%E6%9C%AF%E8%A2%AB%E5%81%9A%E5%8F%8D%23) `1.2M 🔥` `NEW`
1. [16岁女生服刑期发现漏罪被判12年](https://s.weibo.com/weibo?q=%2316%E5%B2%81%E5%A5%B3%E7%94%9F%E6%9C%8D%E5%88%91%E6%9C%9F%E5%8F%91%E7%8E%B0%E6%BC%8F%E7%BD%AA%E8%A2%AB%E5%88%A412%E5%B9%B4%23) `883.6K 🔥` `NEW`
1. [APEC人工智能未来合作开启新路径](https://s.weibo.com/weibo?q=%23APEC%E4%BA%BA%E5%B7%A5%E6%99%BA%E8%83%BD%E6%9C%AA%E6%9D%A5%E5%90%88%E4%BD%9C%E5%BC%80%E5%90%AF%E6%96%B0%E8%B7%AF%E5%BE%84%23) `676.3K 🔥` `NEW`
1. [八仙何仙姑](https://s.weibo.com/weibo?q=%23%E5%85%AB%E4%BB%99%E4%BD%95%E4%BB%99%E5%A7%91%23) `457.6K 🔥` `NEW`
1. [深圳台风](https://s.weibo.com/weibo?q=%23%E6%B7%B1%E5%9C%B3%E5%8F%B0%E9%A3%8E%23) `367.7K 🔥` `NEW`
1. [孟子义常驻好六](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89%E5%B8%B8%E9%A9%BB%E5%A5%BD%E5%85%AD%23) `348.1K 🔥` `NEW`
1. [中南大学已成立调查组](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%8D%97%E5%A4%A7%E5%AD%A6%E5%B7%B2%E6%88%90%E7%AB%8B%E8%B0%83%E6%9F%A5%E7%BB%84%23) `324.6K 🔥` `NEW`
1. [长鑫科技一签能赚多少](https://s.weibo.com/weibo?q=%23%E9%95%BF%E9%91%AB%E7%A7%91%E6%8A%80%E4%B8%80%E7%AD%BE%E8%83%BD%E8%B5%9A%E5%A4%9A%E5%B0%91%23) `322.3K 🔥` `NEW`
1. [韩路感谢华为手机](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E8%B7%AF%E6%84%9F%E8%B0%A2%E5%8D%8E%E4%B8%BA%E6%89%8B%E6%9C%BA%23) `320.9K 🔥` `NEW`
1. [张柏芝真的把大儿子教得很好](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9F%8F%E8%8A%9D%E7%9C%9F%E7%9A%84%E6%8A%8A%E5%A4%A7%E5%84%BF%E5%AD%90%E6%95%99%E5%BE%97%E5%BE%88%E5%A5%BD%23) `314.2K 🔥` `NEW`
1. [生理性喜欢是很多孽缘的开始 (Physiological love is the beginning of many bad relationships)](https://s.weibo.com/weibo?q=%23%E7%94%9F%E7%90%86%E6%80%A7%E5%96%9C%E6%AC%A2%E6%98%AF%E5%BE%88%E5%A4%9A%E5%AD%BD%E7%BC%98%E7%9A%84%E5%BC%80%E5%A7%8B%23) `311.2K 🔥` `NEW`
1. [鹿晗 与我无关的事情](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%20%E4%B8%8E%E6%88%91%E6%97%A0%E5%85%B3%E7%9A%84%E4%BA%8B%E6%83%85%23) `308.3K 🔥` `NEW`
1. [阿根廷人疯狂庆祝亚军的原因](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E4%BA%BA%E7%96%AF%E7%8B%82%E5%BA%86%E7%A5%9D%E4%BA%9A%E5%86%9B%E7%9A%84%E5%8E%9F%E5%9B%A0%23) `303.7K 🔥` `NEW`
1. [找到王俊凯折个鸡卖不出去的原因了](https://s.weibo.com/weibo?q=%23%E6%89%BE%E5%88%B0%E7%8E%8B%E4%BF%8A%E5%87%AF%E6%8A%98%E4%B8%AA%E9%B8%A1%E5%8D%96%E4%B8%8D%E5%87%BA%E5%8E%BB%E7%9A%84%E5%8E%9F%E5%9B%A0%E4%BA%86%23) `299.2K 🔥` `NEW`
1. [田曦薇初中登在校刊上的文章](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E5%88%9D%E4%B8%AD%E7%99%BB%E5%9C%A8%E6%A0%A1%E5%88%8A%E4%B8%8A%E7%9A%84%E6%96%87%E7%AB%A0%23) `289.1K 🔥` `NEW`
1. [韩路连续多晚遭验证码轰炸](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E8%B7%AF%E8%BF%9E%E7%BB%AD%E5%A4%9A%E6%99%9A%E9%81%AD%E9%AA%8C%E8%AF%81%E7%A0%81%E8%BD%B0%E7%82%B8%23) `284.0K 🔥` `NEW`
1. [BY2被陌生人按家门密码](https://s.weibo.com/weibo?q=%23BY2%E8%A2%AB%E9%99%8C%E7%94%9F%E4%BA%BA%E6%8C%89%E5%AE%B6%E9%97%A8%E5%AF%86%E7%A0%81%23) `268.8K 🔥` `NEW`
1. [感觉好多人没有基本礼貌](https://s.weibo.com/weibo?q=%23%E6%84%9F%E8%A7%89%E5%A5%BD%E5%A4%9A%E4%BA%BA%E6%B2%A1%E6%9C%89%E5%9F%BA%E6%9C%AC%E7%A4%BC%E8%B2%8C%23) `263.7K 🔥` `NEW`
1. [高露洁多款商标被宣告无效](https://s.weibo.com/weibo?q=%23%E9%AB%98%E9%9C%B2%E6%B4%81%E5%A4%9A%E6%AC%BE%E5%95%86%E6%A0%87%E8%A2%AB%E5%AE%A3%E5%91%8A%E6%97%A0%E6%95%88%23) `252.8K 🔥` `NEW`
1. [王楚然连夜离开深圳](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E7%84%B6%E8%BF%9E%E5%A4%9C%E7%A6%BB%E5%BC%80%E6%B7%B1%E5%9C%B3%23) `240.6K 🔥` `NEW`
1. [韦唯称嫁老外完全是上当 (Wei Wei says marrying a foreigner is totally a scam)](https://s.weibo.com/weibo?q=%23%E9%9F%A6%E5%94%AF%E7%A7%B0%E5%AB%81%E8%80%81%E5%A4%96%E5%AE%8C%E5%85%A8%E6%98%AF%E4%B8%8A%E5%BD%93%23) `231.9K 🔥` `NEW`
1. [员工发现顾客腹部异常隆起坚持送医](https://s.weibo.com/weibo?q=%23%E5%91%98%E5%B7%A5%E5%8F%91%E7%8E%B0%E9%A1%BE%E5%AE%A2%E8%85%B9%E9%83%A8%E5%BC%82%E5%B8%B8%E9%9A%86%E8%B5%B7%E5%9D%9A%E6%8C%81%E9%80%81%E5%8C%BB%23) `228.3K 🔥` `NEW`
1. [以我的审美给虞书欣辛芷蕾挑高定](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E6%88%91%E7%9A%84%E5%AE%A1%E7%BE%8E%E7%BB%99%E8%99%9E%E4%B9%A6%E6%AC%A3%E8%BE%9B%E8%8A%B7%E8%95%BE%E6%8C%91%E9%AB%98%E5%AE%9A%23) `227.9K 🔥` `NEW`
1. [曝白敬亭胡先煦现在就出发只录首站](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E7%99%BD%E6%95%AC%E4%BA%AD%E8%83%A1%E5%85%88%E7%85%A6%E7%8E%B0%E5%9C%A8%E5%B0%B1%E5%87%BA%E5%8F%91%E5%8F%AA%E5%BD%95%E9%A6%96%E7%AB%99%23) `224.6K 🔥` `NEW`
1. [乌克兰袭击伊朗商船致1死1伤](https://s.weibo.com/weibo?q=%23%E4%B9%8C%E5%85%8B%E5%85%B0%E8%A2%AD%E5%87%BB%E4%BC%8A%E6%9C%97%E5%95%86%E8%88%B9%E8%87%B41%E6%AD%BB1%E4%BC%A4%23) `224.5K 🔥` `NEW`
1. [6岁女童基因编辑试验后死亡](https://s.weibo.com/weibo?q=%236%E5%B2%81%E5%A5%B3%E7%AB%A5%E5%9F%BA%E5%9B%A0%E7%BC%96%E8%BE%91%E8%AF%95%E9%AA%8C%E5%90%8E%E6%AD%BB%E4%BA%A1%23) `224.4K 🔥` `NEW`
1. [正颌手术被做反女孩术后直接失业](https://s.weibo.com/weibo?q=%23%E6%AD%A3%E9%A2%8C%E6%89%8B%E6%9C%AF%E8%A2%AB%E5%81%9A%E5%8F%8D%E5%A5%B3%E5%AD%A9%E6%9C%AF%E5%90%8E%E7%9B%B4%E6%8E%A5%E5%A4%B1%E4%B8%9A%23) `224.3K 🔥` `NEW`
1. [谢霆锋领带上有只白蝴蝶](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E9%9C%86%E9%94%8B%E9%A2%86%E5%B8%A6%E4%B8%8A%E6%9C%89%E5%8F%AA%E7%99%BD%E8%9D%B4%E8%9D%B6%23) `224.3K 🔥` `NEW`
1. [TF四代rap导师王琳凯](https://s.weibo.com/weibo?q=%23TF%E5%9B%9B%E4%BB%A3rap%E5%AF%BC%E5%B8%88%E7%8E%8B%E7%90%B3%E5%87%AF%23) `210.2K 🔥` `NEW`
1. [一诺赛点守约24中16](https://s.weibo.com/weibo?q=%23%E4%B8%80%E8%AF%BA%E8%B5%9B%E7%82%B9%E5%AE%88%E7%BA%A624%E4%B8%AD16%23) `209.0K 🔥` `NEW`
1. [长得好看的人在人群中就像开了高清 (Good-looking people look like they have high-definition turned on in a crowd)](https://s.weibo.com/weibo?q=%23%E9%95%BF%E5%BE%97%E5%A5%BD%E7%9C%8B%E7%9A%84%E4%BA%BA%E5%9C%A8%E4%BA%BA%E7%BE%A4%E4%B8%AD%E5%B0%B1%E5%83%8F%E5%BC%80%E4%BA%86%E9%AB%98%E6%B8%85%23) `180.9K 🔥` `NEW`
1. [鹿晗粉丝配合ALin救场](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%E7%B2%89%E4%B8%9D%E9%85%8D%E5%90%88ALin%E6%95%91%E5%9C%BA%23) `180.6K 🔥` `NEW`
1. [C位不是谁都能站的](https://s.weibo.com/weibo?q=%23C%E4%BD%8D%E4%B8%8D%E6%98%AF%E8%B0%81%E9%83%BD%E8%83%BD%E7%AB%99%E7%9A%84%23) `179.1K 🔥` `NEW`
1. [台风红霞强于巴威](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E7%BA%A2%E9%9C%9E%E5%BC%BA%E4%BA%8E%E5%B7%B4%E5%A8%81%23) `177.8K 🔥` `NEW`
1. [电影年会不能停2提档](https://s.weibo.com/weibo?q=%23%E7%94%B5%E5%BD%B1%E5%B9%B4%E4%BC%9A%E4%B8%8D%E8%83%BD%E5%81%9C2%E6%8F%90%E6%A1%A3%23) `174.6K 🔥` `NEW`
1. [张雅琪受害者还有花少团](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%85%E7%90%AA%E5%8F%97%E5%AE%B3%E8%80%85%E8%BF%98%E6%9C%89%E8%8A%B1%E5%B0%91%E5%9B%A2%23) `171.9K 🔥` `NEW`
1. [深圳街头市民被强风吹得无法骑行](https://s.weibo.com/weibo?q=%23%E6%B7%B1%E5%9C%B3%E8%A1%97%E5%A4%B4%E5%B8%82%E6%B0%91%E8%A2%AB%E5%BC%BA%E9%A3%8E%E5%90%B9%E5%BE%97%E6%97%A0%E6%B3%95%E9%AA%91%E8%A1%8C%23) `157.7K 🔥` `NEW`
1. [开到荼蘼妆造被指不符定位](https://s.weibo.com/weibo?q=%23%E5%BC%80%E5%88%B0%E8%8D%BC%E8%98%BC%E5%A6%86%E9%80%A0%E8%A2%AB%E6%8C%87%E4%B8%8D%E7%AC%A6%E5%AE%9A%E4%BD%8D%23) `157.6K 🔥` `NEW`
1. [DeepSeek生成钱学森弹道动画](https://s.weibo.com/weibo?q=%23DeepSeek%E7%94%9F%E6%88%90%E9%92%B1%E5%AD%A6%E6%A3%AE%E5%BC%B9%E9%81%93%E5%8A%A8%E7%94%BB%23) `157.5K 🔥` `NEW`
1. [中国女排总决赛铜牌赛](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A5%B3%E6%8E%92%E6%80%BB%E5%86%B3%E8%B5%9B%E9%93%9C%E7%89%8C%E8%B5%9B%23) `157.3K 🔥` `NEW`
1. [詹姆斯早起训练 (James gets up early to train)](https://s.weibo.com/weibo?q=%23%E8%A9%B9%E5%A7%86%E6%96%AF%E6%97%A9%E8%B5%B7%E8%AE%AD%E7%BB%83%23) `157.3K 🔥` `NEW`
1. [油价预计7月31日上调](https://s.weibo.com/weibo?q=%23%E6%B2%B9%E4%BB%B7%E9%A2%84%E8%AE%A17%E6%9C%8831%E6%97%A5%E4%B8%8A%E8%B0%83%23) `150.7K 🔥` `NEW`
1. [中餐厅张雅琪这个发型](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E9%A4%90%E5%8E%85%E5%BC%A0%E9%9B%85%E7%90%AA%E8%BF%99%E4%B8%AA%E5%8F%91%E5%9E%8B%23) `605.2K 🔥` `+84%`
1. [红霞在广东惠州登陆 (Hongxia lands in Huizhou, Guangdong)](https://s.weibo.com/weibo?q=%23%E7%BA%A2%E9%9C%9E%E5%9C%A8%E5%B9%BF%E4%B8%9C%E6%83%A0%E5%B7%9E%E7%99%BB%E9%99%86%23) `296.7K 🔥` `-80%`
1. [医生回应女孩正颌手术做反了](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E7%94%9F%E5%9B%9E%E5%BA%94%E5%A5%B3%E5%AD%A9%E6%AD%A3%E9%A2%8C%E6%89%8B%E6%9C%AF%E5%81%9A%E5%8F%8D%E4%BA%86%23) `224.6K 🔥` `-28%`
1. [王一博给摩托姐姐点赞了](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E7%BB%99%E6%91%A9%E6%89%98%E5%A7%90%E5%A7%90%E7%82%B9%E8%B5%9E%E4%BA%86%23) `208.6K 🔥` `-37%`
1. [中餐厅5季以来首次亏损](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E9%A4%90%E5%8E%855%E5%AD%A3%E4%BB%A5%E6%9D%A5%E9%A6%96%E6%AC%A1%E4%BA%8F%E6%8D%9F%23) `196.4K 🔥` `-58%`
1. [罗永浩怒斥电视机厂商](https://s.weibo.com/weibo?q=%23%E7%BD%97%E6%B0%B8%E6%B5%A9%E6%80%92%E6%96%A5%E7%94%B5%E8%A7%86%E6%9C%BA%E5%8E%82%E5%95%86%23) `187.4K 🔥` `-79%`
1. [狩谎 欧阳震华](https://s.weibo.com/weibo?q=%23%E7%8B%A9%E8%B0%8E%20%E6%AC%A7%E9%98%B3%E9%9C%87%E5%8D%8E%23) `157.2K 🔥` `-50%`

Updated at 2026-07-26 11:54:31

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
