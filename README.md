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

1. [中签长鑫宇树男子回应打新技巧 (Chang Xin Yushu, the man who won the lottery, responded with new skills)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E7%AD%BE%E9%95%BF%E9%91%AB%E5%AE%87%E6%A0%91%E7%94%B7%E5%AD%90%E5%9B%9E%E5%BA%94%E6%89%93%E6%96%B0%E6%8A%80%E5%B7%A7%23) `785.4K 🔥` `NEW`
1. [AI演员都有线下路透了](https://s.weibo.com/weibo?q=%23AI%E6%BC%94%E5%91%98%E9%83%BD%E6%9C%89%E7%BA%BF%E4%B8%8B%E8%B7%AF%E9%80%8F%E4%BA%86%23) `352.8K 🔥` `NEW`
1. [别克爱的主打车七夕满配出发](https://s.weibo.com/weibo?q=%23%E5%88%AB%E5%85%8B%E7%88%B1%E7%9A%84%E4%B8%BB%E6%89%93%E8%BD%A6%E4%B8%83%E5%A4%95%E6%BB%A1%E9%85%8D%E5%87%BA%E5%8F%91%23) `348.0K 🔥` `NEW`
1. [网盘平台被曝私自给用户申报个税](https://s.weibo.com/weibo?q=%23%E7%BD%91%E7%9B%98%E5%B9%B3%E5%8F%B0%E8%A2%AB%E6%9B%9D%E7%A7%81%E8%87%AA%E7%BB%99%E7%94%A8%E6%88%B7%E7%94%B3%E6%8A%A5%E4%B8%AA%E7%A8%8E%23) `346.9K 🔥` `NEW`
1. [新一代玄戒芯片已成功回片](https://s.weibo.com/weibo?q=%23%E6%96%B0%E4%B8%80%E4%BB%A3%E7%8E%84%E6%88%92%E8%8A%AF%E7%89%87%E5%B7%B2%E6%88%90%E5%8A%9F%E5%9B%9E%E7%89%87%23) `330.6K 🔥` `NEW`
1. [2026七夕晚会节目单](https://s.weibo.com/weibo?q=%232026%E4%B8%83%E5%A4%95%E6%99%9A%E4%BC%9A%E8%8A%82%E7%9B%AE%E5%8D%95%23) `328.7K 🔥` `NEW`
1. [丁禹兮工作室道歉](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A6%B9%E5%85%AE%E5%B7%A5%E4%BD%9C%E5%AE%A4%E9%81%93%E6%AD%89%23) `327.4K 🔥` `NEW`
1. [青岛男子辱骂女游客](https://s.weibo.com/weibo?q=%23%E9%9D%92%E5%B2%9B%E7%94%B7%E5%AD%90%E8%BE%B1%E9%AA%82%E5%A5%B3%E6%B8%B8%E5%AE%A2%23) `322.9K 🔥` `NEW`
1. [拒绝搭讪被恐吓](https://s.weibo.com/weibo?q=%23%E6%8B%92%E7%BB%9D%E6%90%AD%E8%AE%AA%E8%A2%AB%E6%81%90%E5%90%93%23) `319.1K 🔥` `NEW`
1. [DeepSeek的思维链就这么招笑](https://s.weibo.com/weibo?q=%23DeepSeek%E7%9A%84%E6%80%9D%E7%BB%B4%E9%93%BE%E5%B0%B1%E8%BF%99%E4%B9%88%E6%8B%9B%E7%AC%91%23) `309.6K 🔥` `NEW`
1. [BIGBANG新歌空降第一 (BIGBANG’s new song lands at number one)](https://s.weibo.com/weibo?q=%23BIGBANG%E6%96%B0%E6%AD%8C%E7%A9%BA%E9%99%8D%E7%AC%AC%E4%B8%80%23) `297.6K 🔥` `NEW`
1. [四六级查分时间](https://s.weibo.com/weibo?q=%23%E5%9B%9B%E5%85%AD%E7%BA%A7%E6%9F%A5%E5%88%86%E6%97%B6%E9%97%B4%23) `295.9K 🔥` `NEW`
1. [宇树科技上市庆功照流出 (Photos of Yushu Technology’s listing celebration leaked)](https://s.weibo.com/weibo?q=%23%E5%AE%87%E6%A0%91%E7%A7%91%E6%8A%80%E4%B8%8A%E5%B8%82%E5%BA%86%E5%8A%9F%E7%85%A7%E6%B5%81%E5%87%BA%23) `1.1M 🔥` `+32%`
1. [七夕 去情人节化 (Chinese Valentine's Day becomes Valentine's Day)](https://s.weibo.com/weibo?q=%23%E4%B8%83%E5%A4%95%20%E5%8E%BB%E6%83%85%E4%BA%BA%E8%8A%82%E5%8C%96%23) `841.3K 🔥` `+48%`
1. [第二代家庭旗舰奕境X9预售30万起 (The second-generation family flagship Yijing X9 pre-sale starts at 300,000)](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%BA%8C%E4%BB%A3%E5%AE%B6%E5%BA%AD%E6%97%97%E8%88%B0%E5%A5%95%E5%A2%83X9%E9%A2%84%E5%94%AE30%E4%B8%87%E8%B5%B7%23) `789.7K 🔥` `+40%`
1. [王者新英雄王维上线体验服](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%80%85%E6%96%B0%E8%8B%B1%E9%9B%84%E7%8E%8B%E7%BB%B4%E4%B8%8A%E7%BA%BF%E4%BD%93%E9%AA%8C%E6%9C%8D%23) `782.5K 🔥` `+38%`
1. [官方辟谣浏阳周末焰火秀重启](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E8%BE%9F%E8%B0%A3%E6%B5%8F%E9%98%B3%E5%91%A8%E6%9C%AB%E7%84%B0%E7%81%AB%E7%A7%80%E9%87%8D%E5%90%AF%23) `782.3K 🔥` `+38%`
1. [山姆苹果干一包就是半个苹果](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E5%A7%86%E8%8B%B9%E6%9E%9C%E5%B9%B2%E4%B8%80%E5%8C%85%E5%B0%B1%E6%98%AF%E5%8D%8A%E4%B8%AA%E8%8B%B9%E6%9E%9C%23) `774.0K 🔥` `+36%`
1. [王星被拐案新进展](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%98%9F%E8%A2%AB%E6%8B%90%E6%A1%88%E6%96%B0%E8%BF%9B%E5%B1%95%23) `768.4K 🔥` `+35%`
1. [乞巧节](https://s.weibo.com/weibo?q=%23%E4%B9%9E%E5%B7%A7%E8%8A%82%23) `762.7K 🔥` `+42%`
1. [七夕 (Chinese Valentine's Day)](https://s.weibo.com/weibo?q=%23%E4%B8%83%E5%A4%95%23) `758.5K 🔥` `+37%`
1. [未来5年全民医保这样干 (This is how universal health insurance will work in the next five years)](https://s.weibo.com/weibo?q=%23%E6%9C%AA%E6%9D%A55%E5%B9%B4%E5%85%A8%E6%B0%91%E5%8C%BB%E4%BF%9D%E8%BF%99%E6%A0%B7%E5%B9%B2%23) `791.3K 🔥`
1. [男子将遗产全部留给弟弟不给妻儿](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%B0%86%E9%81%97%E4%BA%A7%E5%85%A8%E9%83%A8%E7%95%99%E7%BB%99%E5%BC%9F%E5%BC%9F%E4%B8%8D%E7%BB%99%E5%A6%BB%E5%84%BF%23) `789.2K 🔥`
1. [王者新英雄王维 (King's New Hero Wang Wei)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%80%85%E6%96%B0%E8%8B%B1%E9%9B%84%E7%8E%8B%E7%BB%B4%23) `745.4K 🔥`
1. [买票占座放零食这座位能让吗](https://s.weibo.com/weibo?q=%23%E4%B9%B0%E7%A5%A8%E5%8D%A0%E5%BA%A7%E6%94%BE%E9%9B%B6%E9%A3%9F%E8%BF%99%E5%BA%A7%E4%BD%8D%E8%83%BD%E8%AE%A9%E5%90%97%23) `754.0K 🔥` `-34%`
1. [丁禹兮直播取消](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A6%B9%E5%85%AE%E7%9B%B4%E6%92%AD%E5%8F%96%E6%B6%88%23) `354.1K 🔥` `-32%`
1. [BIGBANG新歌 (BIGBANG new song)](https://s.weibo.com/weibo?q=%23BIGBANG%E6%96%B0%E6%AD%8C%23) `350.9K 🔥` `-37%`
1. [李昀锐孟子义七夕物料不像演的 (Li Yunrui and Meng Ziyi's Chinese Valentine's Day material doesn't look like the one in the performance)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%98%80%E9%94%90%E5%AD%9F%E5%AD%90%E4%B9%89%E4%B8%83%E5%A4%95%E7%89%A9%E6%96%99%E4%B8%8D%E5%83%8F%E6%BC%94%E7%9A%84%23) `349.8K 🔥` `-34%`
1. [商家你要迪丽热巴返图不](https://s.weibo.com/weibo?q=%23%E5%95%86%E5%AE%B6%E4%BD%A0%E8%A6%81%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E8%BF%94%E5%9B%BE%E4%B8%8D%23) `342.8K 🔥` `-35%`
1. [甲状腺不好常吃两种水果](https://s.weibo.com/weibo?q=%23%E7%94%B2%E7%8A%B6%E8%85%BA%E4%B8%8D%E5%A5%BD%E5%B8%B8%E5%90%83%E4%B8%A4%E7%A7%8D%E6%B0%B4%E6%9E%9C%23) `342.2K 🔥` `-37%`
1. [Angelababy拿玫瑰花自拍](https://s.weibo.com/weibo?q=%23Angelababy%E6%8B%BF%E7%8E%AB%E7%91%B0%E8%8A%B1%E8%87%AA%E6%8B%8D%23) `339.6K 🔥` `-40%`
1. [张恒远因黑色素瘤病逝](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%81%92%E8%BF%9C%E5%9B%A0%E9%BB%91%E8%89%B2%E7%B4%A0%E7%98%A4%E7%97%85%E9%80%9D%23) `339.2K 🔥` `-34%`
1. [七夕 民政局](https://s.weibo.com/weibo?q=%23%E4%B8%83%E5%A4%95%20%E6%B0%91%E6%94%BF%E5%B1%80%23) `336.1K 🔥` `-39%`
1. [刘宇宁直播](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AE%87%E5%AE%81%E7%9B%B4%E6%92%AD%23) `335.7K 🔥` `-38%`
1. [王力宏宇树 (Wang Leehom Yushu)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%8A%9B%E5%AE%8F%E5%AE%87%E6%A0%91%23) `333.7K 🔥` `-41%`
1. [Selina胖了好多 (Selina has gained a lot of weight)](https://s.weibo.com/weibo?q=%23Selina%E8%83%96%E4%BA%86%E5%A5%BD%E5%A4%9A%23) `332.1K 🔥` `-38%`
1. [人到中年爱好开始逐渐离谱了 (As people reach middle age, their hobbies begin to become increasingly outrageous.)](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E5%88%B0%E4%B8%AD%E5%B9%B4%E7%88%B1%E5%A5%BD%E5%BC%80%E5%A7%8B%E9%80%90%E6%B8%90%E7%A6%BB%E8%B0%B1%E4%BA%86%23) `325.5K 🔥` `-43%`
1. [黄灿灿光脚做面筋 (Huang Cancan makes gluten with bare feet)](https://s.weibo.com/weibo?q=%23%E9%BB%84%E7%81%BF%E7%81%BF%E5%85%89%E8%84%9A%E5%81%9A%E9%9D%A2%E7%AD%8B%23) `322.5K 🔥` `-36%`
1. [时代少年团庆七夕](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E5%BA%86%E4%B8%83%E5%A4%95%23) `320.0K 🔥` `-35%`
1. [二搭会让内娱爆炸的男女主 (The male and female protagonist whose second partner will make domestic entertainment explode)](https://s.weibo.com/weibo?q=%23%E4%BA%8C%E6%90%AD%E4%BC%9A%E8%AE%A9%E5%86%85%E5%A8%B1%E7%88%86%E7%82%B8%E7%9A%84%E7%94%B7%E5%A5%B3%E4%B8%BB%23) `316.7K 🔥` `-37%`
1. [宋亚轩七夕祝福](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E4%BA%9A%E8%BD%A9%E4%B8%83%E5%A4%95%E7%A5%9D%E7%A6%8F%23) `316.1K 🔥` `-34%`
1. [老人院内晾花生遭小车进院全部碾碎](https://s.weibo.com/weibo?q=%23%E8%80%81%E4%BA%BA%E9%99%A2%E5%86%85%E6%99%BE%E8%8A%B1%E7%94%9F%E9%81%AD%E5%B0%8F%E8%BD%A6%E8%BF%9B%E9%99%A2%E5%85%A8%E9%83%A8%E7%A2%BE%E7%A2%8E%23) `314.0K 🔥` `-35%`
1. [英国网红在新疆用飞猪帮帮打卡非遗 (British internet celebrity uses Fliggy to help check in intangible cultural heritage in Xinjiang)](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E5%9B%BD%E7%BD%91%E7%BA%A2%E5%9C%A8%E6%96%B0%E7%96%86%E7%94%A8%E9%A3%9E%E7%8C%AA%E5%B8%AE%E5%B8%AE%E6%89%93%E5%8D%A1%E9%9D%9E%E9%81%97%23) `312.2K 🔥` `-41%`
1. [空枪](https://s.weibo.com/weibo?q=%23%E7%A9%BA%E6%9E%AA%23) `310.8K 🔥` `-41%`
1. [七夕 冷清](https://s.weibo.com/weibo?q=%23%E4%B8%83%E5%A4%95%20%E5%86%B7%E6%B8%85%23) `306.9K 🔥` `-46%`
1. [白鹿被巨无霸大笔整笑了](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E8%A2%AB%E5%B7%A8%E6%97%A0%E9%9C%B8%E5%A4%A7%E7%AC%94%E6%95%B4%E7%AC%91%E4%BA%86%23) `306.0K 🔥` `-37%`
1. [朱志鑫完全电竞男主](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E5%BF%97%E9%91%AB%E5%AE%8C%E5%85%A8%E7%94%B5%E7%AB%9E%E7%94%B7%E4%B8%BB%23) `304.2K 🔥` `-37%`
1. [中国女足5比0皇马 (Chinese women's football team 5-0 Real Madrid)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A5%B3%E8%B6%B35%E6%AF%940%E7%9A%87%E9%A9%AC%23) `302.8K 🔥` `-39%`
1. [易烊千玺和我的前半生交集上了 (Yi Yang Qianxi and I intersected in the first half of our lives)](https://s.weibo.com/weibo?q=%23%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%E5%92%8C%E6%88%91%E7%9A%84%E5%89%8D%E5%8D%8A%E7%94%9F%E4%BA%A4%E9%9B%86%E4%B8%8A%E4%BA%86%23) `301.0K 🔥` `-37%`
1. [A股全市场逾百股跌停](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E5%85%A8%E5%B8%82%E5%9C%BA%E9%80%BE%E7%99%BE%E8%82%A1%E8%B7%8C%E5%81%9C%23) `299.3K 🔥` `-37%`

Updated at 2026-08-19 19:49:39

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
