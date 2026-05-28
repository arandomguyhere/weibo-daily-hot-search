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

1. [芒果一口气宣了89部大剧 (Mango announced 89 dramas in one breath)](https://s.weibo.com/weibo?q=%23%E8%8A%92%E6%9E%9C%E4%B8%80%E5%8F%A3%E6%B0%94%E5%AE%A3%E4%BA%8689%E9%83%A8%E5%A4%A7%E5%89%A7%23) `1.8M 🔥` `NEW`
1. [711雪糕 劣爆了](https://s.weibo.com/weibo?q=%23711%E9%9B%AA%E7%B3%95%20%E5%8A%A3%E7%88%86%E4%BA%86%23) `1.3M 🔥` `NEW`
1. [神21航天员要返回地球了](https://s.weibo.com/weibo?q=%23%E7%A5%9E21%E8%88%AA%E5%A4%A9%E5%91%98%E8%A6%81%E8%BF%94%E5%9B%9E%E5%9C%B0%E7%90%83%E4%BA%86%23) `820.0K 🔥` `NEW`
1. [周一请假和周五请假是不一样的](https://s.weibo.com/weibo?q=%23%E5%91%A8%E4%B8%80%E8%AF%B7%E5%81%87%E5%92%8C%E5%91%A8%E4%BA%94%E8%AF%B7%E5%81%87%E6%98%AF%E4%B8%8D%E4%B8%80%E6%A0%B7%E7%9A%84%23) `819.6K 🔥` `NEW`
1. [杭州非法试管婴儿事件情况通报](https://s.weibo.com/weibo?q=%23%E6%9D%AD%E5%B7%9E%E9%9D%9E%E6%B3%95%E8%AF%95%E7%AE%A1%E5%A9%B4%E5%84%BF%E4%BA%8B%E4%BB%B6%E6%83%85%E5%86%B5%E9%80%9A%E6%8A%A5%23) `815.5K 🔥` `NEW`
1. [上飞猪抢濮院电竞节无畏契约门票](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E9%A3%9E%E7%8C%AA%E6%8A%A2%E6%BF%AE%E9%99%A2%E7%94%B5%E7%AB%9E%E8%8A%82%E6%97%A0%E7%95%8F%E5%A5%91%E7%BA%A6%E9%97%A8%E7%A5%A8%23) `797.4K 🔥` `NEW`
1. [小巷人家2是原班人马](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%B7%B7%E4%BA%BA%E5%AE%B62%E6%98%AF%E5%8E%9F%E7%8F%AD%E4%BA%BA%E9%A9%AC%23) `795.2K 🔥` `NEW`
1. [VOGUE直播间两位明星不出镜](https://s.weibo.com/weibo?q=%23VOGUE%E7%9B%B4%E6%92%AD%E9%97%B4%E4%B8%A4%E4%BD%8D%E6%98%8E%E6%98%9F%E4%B8%8D%E5%87%BA%E9%95%9C%23) `605.2K 🔥` `NEW`
1. [孙颖莎下一站清华](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E4%B8%8B%E4%B8%80%E7%AB%99%E6%B8%85%E5%8D%8E%23) `424.5K 🔥` `NEW`
1. [黄仁勋加入清华大学顾问委员会](https://s.weibo.com/weibo?q=%23%E9%BB%84%E4%BB%81%E5%8B%8B%E5%8A%A0%E5%85%A5%E6%B8%85%E5%8D%8E%E5%A4%A7%E5%AD%A6%E9%A1%BE%E9%97%AE%E5%A7%94%E5%91%98%E4%BC%9A%23) `423.3K 🔥` `NEW`
1. [陆毅17岁女儿不会剥虾 (Lu Yi’s 17-year-old daughter can’t peel shrimps)](https://s.weibo.com/weibo?q=%23%E9%99%86%E6%AF%8517%E5%B2%81%E5%A5%B3%E5%84%BF%E4%B8%8D%E4%BC%9A%E5%89%A5%E8%99%BE%23) `420.9K 🔥` `NEW`
1. [孙颖莎王曼昱毕业照](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E7%8E%8B%E6%9B%BC%E6%98%B1%E6%AF%95%E4%B8%9A%E7%85%A7%23) `417.0K 🔥` `NEW`
1. [陈小希爸妈为沈月发声](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%B0%8F%E5%B8%8C%E7%88%B8%E5%A6%88%E4%B8%BA%E6%B2%88%E6%9C%88%E5%8F%91%E5%A3%B0%23) `416.1K 🔥` `NEW`
1. [年会不能停2定档](https://s.weibo.com/weibo?q=%23%E5%B9%B4%E4%BC%9A%E4%B8%8D%E8%83%BD%E5%81%9C2%E5%AE%9A%E6%A1%A3%23) `413.6K 🔥` `NEW`
1. [公安部派工作组赴河南南阳](https://s.weibo.com/weibo?q=%23%E5%85%AC%E5%AE%89%E9%83%A8%E6%B4%BE%E5%B7%A5%E4%BD%9C%E7%BB%84%E8%B5%B4%E6%B2%B3%E5%8D%97%E5%8D%97%E9%98%B3%23) `411.2K 🔥` `NEW`
1. [歌手第二期歌单](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B%E7%AC%AC%E4%BA%8C%E6%9C%9F%E6%AD%8C%E5%8D%95%23) `408.9K 🔥` `NEW`
1. [长鑫科技日赚2.75亿元](https://s.weibo.com/weibo?q=%23%E9%95%BF%E9%91%AB%E7%A7%91%E6%8A%80%E6%97%A5%E8%B5%9A2.75%E4%BA%BF%E5%85%83%23) `407.8K 🔥` `NEW`
1. [李嘉凯被封号](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%98%89%E5%87%AF%E8%A2%AB%E5%B0%81%E5%8F%B7%23) `404.6K 🔥` `NEW`
1. [孕检一切正常孩子一岁多确诊SMA](https://s.weibo.com/weibo?q=%23%E5%AD%95%E6%A3%80%E4%B8%80%E5%88%87%E6%AD%A3%E5%B8%B8%E5%AD%A9%E5%AD%90%E4%B8%80%E5%B2%81%E5%A4%9A%E7%A1%AE%E8%AF%8ASMA%23) `404.3K 🔥` `NEW`
1. [官方回应嫌榴莲苦吃了8块要求退](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E5%9B%9E%E5%BA%94%E5%AB%8C%E6%A6%B4%E8%8E%B2%E8%8B%A6%E5%90%83%E4%BA%868%E5%9D%97%E8%A6%81%E6%B1%82%E9%80%80%23) `401.3K 🔥` `NEW`
1. [日本卖惨给谁看 (Who can show Japan’s misfortune?)](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E5%8D%96%E6%83%A8%E7%BB%99%E8%B0%81%E7%9C%8B%23) `398.8K 🔥` `NEW`
1. [严浩翔没拍上毕业合照](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E6%B5%A9%E7%BF%94%E6%B2%A1%E6%8B%8D%E4%B8%8A%E6%AF%95%E4%B8%9A%E5%90%88%E7%85%A7%23) `397.4K 🔥` `NEW`
1. [香港女星自曝在中山买房不到200万港币](https://s.weibo.com/weibo?q=%23%E9%A6%99%E6%B8%AF%E5%A5%B3%E6%98%9F%E8%87%AA%E6%9B%9D%E5%9C%A8%E4%B8%AD%E5%B1%B1%E4%B9%B0%E6%88%BF%E4%B8%8D%E5%88%B0200%E4%B8%87%E6%B8%AF%E5%B8%81%23) `394.6K 🔥` `NEW`
1. [DeepSeek崩了](https://s.weibo.com/weibo?q=%23DeepSeek%E5%B4%A9%E4%BA%86%23) `393.3K 🔥` `NEW`
1. [林俊杰妈妈疑似取关大嫂](https://s.weibo.com/weibo?q=%23%E6%9E%97%E4%BF%8A%E6%9D%B0%E5%A6%88%E5%A6%88%E7%96%91%E4%BC%BC%E5%8F%96%E5%85%B3%E5%A4%A7%E5%AB%82%23) `391.9K 🔥` `NEW`
1. [经期需要更高标准卫生巾](https://s.weibo.com/weibo?q=%23%E7%BB%8F%E6%9C%9F%E9%9C%80%E8%A6%81%E6%9B%B4%E9%AB%98%E6%A0%87%E5%87%86%E5%8D%AB%E7%94%9F%E5%B7%BE%23) `389.9K 🔥` `NEW`
1. [曝何宝生放弃3亿家产出家真正原因](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E4%BD%95%E5%AE%9D%E7%94%9F%E6%94%BE%E5%BC%833%E4%BA%BF%E5%AE%B6%E4%BA%A7%E5%87%BA%E5%AE%B6%E7%9C%9F%E6%AD%A3%E5%8E%9F%E5%9B%A0%23) `387.7K 🔥` `NEW`
1. [华为 时代少年团](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BA%20%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%23) `385.2K 🔥` `NEW`
1. [金价](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%23) `384.1K 🔥` `NEW`
1. [浪姐有人嗓子痛有人流鼻血](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E6%9C%89%E4%BA%BA%E5%97%93%E5%AD%90%E7%97%9B%E6%9C%89%E4%BA%BA%E6%B5%81%E9%BC%BB%E8%A1%80%23) `381.4K 🔥` `NEW`
1. [双汇发布致歉声明 (Shuanghui issues apology statement)](https://s.weibo.com/weibo?q=%23%E5%8F%8C%E6%B1%87%E5%8F%91%E5%B8%83%E8%87%B4%E6%AD%89%E5%A3%B0%E6%98%8E%23) `379.6K 🔥` `NEW`
1. [印度留学生称感觉内脏在沸腾](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%BA%A6%E7%95%99%E5%AD%A6%E7%94%9F%E7%A7%B0%E6%84%9F%E8%A7%89%E5%86%85%E8%84%8F%E5%9C%A8%E6%B2%B8%E8%85%BE%23) `376.3K 🔥` `NEW`
1. [员工隐瞒肺结核致多名同事被传染](https://s.weibo.com/weibo?q=%23%E5%91%98%E5%B7%A5%E9%9A%90%E7%9E%92%E8%82%BA%E7%BB%93%E6%A0%B8%E8%87%B4%E5%A4%9A%E5%90%8D%E5%90%8C%E4%BA%8B%E8%A2%AB%E4%BC%A0%E6%9F%93%23) `373.3K 🔥` `NEW`
1. [杨紫白玉兰提名高光片段](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E7%99%BD%E7%8E%89%E5%85%B0%E6%8F%90%E5%90%8D%E9%AB%98%E5%85%89%E7%89%87%E6%AE%B5%23) `371.7K 🔥` `NEW`
1. [李沁咸鱼飞升神女镜头](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%B2%81%E5%92%B8%E9%B1%BC%E9%A3%9E%E5%8D%87%E7%A5%9E%E5%A5%B3%E9%95%9C%E5%A4%B4%23) `369.6K 🔥` `NEW`
1. [詹姆斯阵营立场正式曝光](https://s.weibo.com/weibo?q=%23%E8%A9%B9%E5%A7%86%E6%96%AF%E9%98%B5%E8%90%A5%E7%AB%8B%E5%9C%BA%E6%AD%A3%E5%BC%8F%E6%9B%9D%E5%85%89%23) `367.3K 🔥` `NEW`
1. [小酒窝另一个青梅竹马佟大为儿子](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E9%85%92%E7%AA%9D%E5%8F%A6%E4%B8%80%E4%B8%AA%E9%9D%92%E6%A2%85%E7%AB%B9%E9%A9%AC%E4%BD%9F%E5%A4%A7%E4%B8%BA%E5%84%BF%E5%AD%90%23) `364.7K 🔥` `NEW`
1. [刘耀文说宋亚轩是中登](https://s.weibo.com/weibo?q=%23%E5%88%98%E8%80%80%E6%96%87%E8%AF%B4%E5%AE%8B%E4%BA%9A%E8%BD%A9%E6%98%AF%E4%B8%AD%E7%99%BB%23) `364.2K 🔥` `NEW`
1. [卫生巾应该分坐用跟躺用](https://s.weibo.com/weibo?q=%23%E5%8D%AB%E7%94%9F%E5%B7%BE%E5%BA%94%E8%AF%A5%E5%88%86%E5%9D%90%E7%94%A8%E8%B7%9F%E8%BA%BA%E7%94%A8%23) `360.5K 🔥` `NEW`
1. [黄灿灿 张月哪里不舒服要跟我讲](https://s.weibo.com/weibo?q=%23%E9%BB%84%E7%81%BF%E7%81%BF%20%E5%BC%A0%E6%9C%88%E5%93%AA%E9%87%8C%E4%B8%8D%E8%88%92%E6%9C%8D%E8%A6%81%E8%B7%9F%E6%88%91%E8%AE%B2%23) `359.9K 🔥` `NEW`
1. [凯凯道歉 (Kaikai apologizes)](https://s.weibo.com/weibo?q=%23%E5%87%AF%E5%87%AF%E9%81%93%E6%AD%89%23) `357.3K 🔥` `NEW`
1. [父亲当街踹女儿男子制止致其轻伤](https://s.weibo.com/weibo?q=%23%E7%88%B6%E4%BA%B2%E5%BD%93%E8%A1%97%E8%B8%B9%E5%A5%B3%E5%84%BF%E7%94%B7%E5%AD%90%E5%88%B6%E6%AD%A2%E8%87%B4%E5%85%B6%E8%BD%BB%E4%BC%A4%23) `354.5K 🔥` `NEW`
1. [敖瑞鹏身材有自己的计量单位](https://s.weibo.com/weibo?q=%23%E6%95%96%E7%91%9E%E9%B9%8F%E8%BA%AB%E6%9D%90%E6%9C%89%E8%87%AA%E5%B7%B1%E7%9A%84%E8%AE%A1%E9%87%8F%E5%8D%95%E4%BD%8D%23) `353.8K 🔥` `NEW`
1. [NBA官方追加升级普拉姆利犯规](https://s.weibo.com/weibo?q=%23NBA%E5%AE%98%E6%96%B9%E8%BF%BD%E5%8A%A0%E5%8D%87%E7%BA%A7%E6%99%AE%E6%8B%89%E5%A7%86%E5%88%A9%E7%8A%AF%E8%A7%84%23) `351.9K 🔥` `NEW`
1. [微型电脑主机全球卖爆了](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E5%9E%8B%E7%94%B5%E8%84%91%E4%B8%BB%E6%9C%BA%E5%85%A8%E7%90%83%E5%8D%96%E7%88%86%E4%BA%86%23) `349.6K 🔥` `NEW`
1. [开盘全阵容官宣](https://s.weibo.com/weibo?q=%23%E5%BC%80%E7%9B%98%E5%85%A8%E9%98%B5%E5%AE%B9%E5%AE%98%E5%AE%A3%23) `345.5K 🔥` `NEW`
1. [528中国宝宝日](https://s.weibo.com/weibo?q=%23528%E4%B8%AD%E5%9B%BD%E5%AE%9D%E5%AE%9D%E6%97%A5%23) `819.8K 🔥` `+900%`
1. [王鹤棣咸鱼飞升](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%B9%A4%E6%A3%A3%E5%92%B8%E9%B1%BC%E9%A3%9E%E5%8D%87%23) `798.4K 🔥` `+25%`
1. [浪姐宿舍 甲醛 (Sister Lang's Dormitory Formaldehyde)](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E5%AE%BF%E8%88%8D%20%E7%94%B2%E9%86%9B%23) `420.4K 🔥` `-70%`
1. [林俊杰删掉大哥大嫂合照](https://s.weibo.com/weibo?q=%23%E6%9E%97%E4%BF%8A%E6%9D%B0%E5%88%A0%E6%8E%89%E5%A4%A7%E5%93%A5%E5%A4%A7%E5%AB%82%E5%90%88%E7%85%A7%23) `378.0K 🔥` `-42%`
1. [唱歌变声器](https://s.weibo.com/weibo?q=%23%E5%94%B1%E6%AD%8C%E5%8F%98%E5%A3%B0%E5%99%A8%23) `346.9K 🔥` `-45%`
1. [美国伊朗开始爆发直接冲突 (Direct conflict breaks out between the United States and Iran)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E4%BC%8A%E6%9C%97%E5%BC%80%E5%A7%8B%E7%88%86%E5%8F%91%E7%9B%B4%E6%8E%A5%E5%86%B2%E7%AA%81%23) `343.4K 🔥` `-51%`

Updated at 2026-05-28 12:35:42

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
