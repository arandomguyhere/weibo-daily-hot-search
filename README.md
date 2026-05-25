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

1. [四公分组 (Four centimeters group)](https://s.weibo.com/weibo?q=%23%E5%9B%9B%E5%85%AC%E5%88%86%E7%BB%84%23) `876.5K 🔥` `NEW`
1. [今年首个红色山洪灾害预警](https://s.weibo.com/weibo?q=%23%E4%BB%8A%E5%B9%B4%E9%A6%96%E4%B8%AA%E7%BA%A2%E8%89%B2%E5%B1%B1%E6%B4%AA%E7%81%BE%E5%AE%B3%E9%A2%84%E8%AD%A6%23) `694.9K 🔥` `NEW`
1. [洪涛回应歌手淘汰庾澄庆](https://s.weibo.com/weibo?q=%23%E6%B4%AA%E6%B6%9B%E5%9B%9E%E5%BA%94%E6%AD%8C%E6%89%8B%E6%B7%98%E6%B1%B0%E5%BA%BE%E6%BE%84%E5%BA%86%23) `637.9K 🔥` `NEW`
1. [漳州龙海杨梅泡药最新处理结果](https://s.weibo.com/weibo?q=%23%E6%BC%B3%E5%B7%9E%E9%BE%99%E6%B5%B7%E6%9D%A8%E6%A2%85%E6%B3%A1%E8%8D%AF%E6%9C%80%E6%96%B0%E5%A4%84%E7%90%86%E7%BB%93%E6%9E%9C%23) `553.9K 🔥` `NEW`
1. [专家说小猫上床是不脏的](https://s.weibo.com/weibo?q=%23%E4%B8%93%E5%AE%B6%E8%AF%B4%E5%B0%8F%E7%8C%AB%E4%B8%8A%E5%BA%8A%E6%98%AF%E4%B8%8D%E8%84%8F%E7%9A%84%23) `515.5K 🔥` `NEW`
1. [神21神23航天员全家福](https://s.weibo.com/weibo?q=%23%E7%A5%9E21%E7%A5%9E23%E8%88%AA%E5%A4%A9%E5%91%98%E5%85%A8%E5%AE%B6%E7%A6%8F%23) `361.7K 🔥` `NEW`
1. [香港市民看神23发射激动到叫破喉咙](https://s.weibo.com/weibo?q=%23%E9%A6%99%E6%B8%AF%E5%B8%82%E6%B0%91%E7%9C%8B%E7%A5%9E23%E5%8F%91%E5%B0%84%E6%BF%80%E5%8A%A8%E5%88%B0%E5%8F%AB%E7%A0%B4%E5%96%89%E5%92%99%23) `355.9K 🔥` `NEW`
1. [张艺上打车走了](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E8%89%BA%E4%B8%8A%E6%89%93%E8%BD%A6%E8%B5%B0%E4%BA%86%23) `353.9K 🔥` `NEW`
1. [仙逆王林](https://s.weibo.com/weibo?q=%23%E4%BB%99%E9%80%86%E7%8E%8B%E6%9E%97%23) `346.4K 🔥` `NEW`
1. [让肝脏变好的7个日常习惯](https://s.weibo.com/weibo?q=%23%E8%AE%A9%E8%82%9D%E8%84%8F%E5%8F%98%E5%A5%BD%E7%9A%847%E4%B8%AA%E6%97%A5%E5%B8%B8%E4%B9%A0%E6%83%AF%23) `340.8K 🔥` `NEW`
1. [殷世航曝童锦程收入 (Yin Shihang reveals Tong Jincheng’s income)](https://s.weibo.com/weibo?q=%23%E6%AE%B7%E4%B8%96%E8%88%AA%E6%9B%9D%E7%AB%A5%E9%94%A6%E7%A8%8B%E6%94%B6%E5%85%A5%23) `340.1K 🔥` `NEW`
1. [普京回应俄小学遭乌克兰袭击致11死](https://s.weibo.com/weibo?q=%23%E6%99%AE%E4%BA%AC%E5%9B%9E%E5%BA%94%E4%BF%84%E5%B0%8F%E5%AD%A6%E9%81%AD%E4%B9%8C%E5%85%8B%E5%85%B0%E8%A2%AD%E5%87%BB%E8%87%B411%E6%AD%BB%23) `338.4K 🔥` `NEW`
1. [白鹿的跑男热度](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E7%9A%84%E8%B7%91%E7%94%B7%E7%83%AD%E5%BA%A6%23) `331.5K 🔥` `NEW`
1. [怎样才算真正爱自己](https://s.weibo.com/weibo?q=%23%E6%80%8E%E6%A0%B7%E6%89%8D%E7%AE%97%E7%9C%9F%E6%AD%A3%E7%88%B1%E8%87%AA%E5%B7%B1%23) `326.5K 🔥` `NEW`
1. [武汉21岁大学生卖1500元手搓蝴蝶爆火](https://s.weibo.com/weibo?q=%23%E6%AD%A6%E6%B1%8921%E5%B2%81%E5%A4%A7%E5%AD%A6%E7%94%9F%E5%8D%961500%E5%85%83%E6%89%8B%E6%90%93%E8%9D%B4%E8%9D%B6%E7%88%86%E7%81%AB%23) `324.6K 🔥` `NEW`
1. [任权前女友怒斥薛小婉](https://s.weibo.com/weibo?q=%23%E4%BB%BB%E6%9D%83%E5%89%8D%E5%A5%B3%E5%8F%8B%E6%80%92%E6%96%A5%E8%96%9B%E5%B0%8F%E5%A9%89%23) `323.9K 🔥` `NEW`
1. [王健林又背上超30亿债务](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%81%A5%E6%9E%97%E5%8F%88%E8%83%8C%E4%B8%8A%E8%B6%8530%E4%BA%BF%E5%80%BA%E5%8A%A1%23) `321.3K 🔥` `NEW`
1. [韩东君突然出现在杨紫直播间](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E4%B8%9C%E5%90%9B%E7%AA%81%E7%84%B6%E5%87%BA%E7%8E%B0%E5%9C%A8%E6%9D%A8%E7%B4%AB%E7%9B%B4%E6%92%AD%E9%97%B4%23) `317.4K 🔥` `NEW`
1. [何宣林倒数第二](https://s.weibo.com/weibo?q=%23%E4%BD%95%E5%AE%A3%E6%9E%97%E5%80%92%E6%95%B0%E7%AC%AC%E4%BA%8C%23) `315.2K 🔥` `NEW`
1. [管乐太强了](https://s.weibo.com/weibo?q=%23%E7%AE%A1%E4%B9%90%E5%A4%AA%E5%BC%BA%E4%BA%86%23) `309.8K 🔥` `NEW`
1. [曼城1比2阿斯顿维拉 (Manchester City 1-2 Aston Villa)](https://s.weibo.com/weibo?q=%23%E6%9B%BC%E5%9F%8E1%E6%AF%942%E9%98%BF%E6%96%AF%E9%A1%BF%E7%BB%B4%E6%8B%89%23) `304.1K 🔥` `NEW`
1. [68岁男子出轨90后称从没想过离婚](https://s.weibo.com/weibo?q=%2368%E5%B2%81%E7%94%B7%E5%AD%90%E5%87%BA%E8%BD%A890%E5%90%8E%E7%A7%B0%E4%BB%8E%E6%B2%A1%E6%83%B3%E8%BF%87%E7%A6%BB%E5%A9%9A%23) `299.0K 🔥` `NEW`
1. [白鹿给湖南灾区捐赠100万](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E7%BB%99%E6%B9%96%E5%8D%97%E7%81%BE%E5%8C%BA%E6%8D%90%E8%B5%A0100%E4%B8%87%23) `294.7K 🔥` `NEW`
1. [黄金白银又拉涨](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%E7%99%BD%E9%93%B6%E5%8F%88%E6%8B%89%E6%B6%A8%23) `291.1K 🔥` `NEW`
1. [中国航天员第8次太空会师](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E8%88%AA%E5%A4%A9%E5%91%98%E7%AC%AC8%E6%AC%A1%E5%A4%AA%E7%A9%BA%E4%BC%9A%E5%B8%88%23) `1.4M 🔥` `+1425%`
1. [王濛 我们就一个群](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BF%9B%20%E6%88%91%E4%BB%AC%E5%B0%B1%E4%B8%80%E4%B8%AA%E7%BE%A4%23) `551.4K 🔥` `+179%`
1. [7只半导体热门股拟套现近127亿 (7 popular semiconductor stocks plan to cash out nearly 12.7 billion)](https://s.weibo.com/weibo?q=%237%E5%8F%AA%E5%8D%8A%E5%AF%BC%E4%BD%93%E7%83%AD%E9%97%A8%E8%82%A1%E6%8B%9F%E5%A5%97%E7%8E%B0%E8%BF%91127%E4%BA%BF%23) `514.8K 🔥` `+152%`
1. [阿森纳捧起英超冠军奖杯](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A3%AE%E7%BA%B3%E6%8D%A7%E8%B5%B7%E8%8B%B1%E8%B6%85%E5%86%A0%E5%86%9B%E5%A5%96%E6%9D%AF%23) `361.4K 🔥` `+218%`
1. [王鹤棣直播人气](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%B9%A4%E6%A3%A3%E7%9B%B4%E6%92%AD%E4%BA%BA%E6%B0%94%23) `358.2K 🔥` `+217%`
1. [死了么APP又改名了](https://s.weibo.com/weibo?q=%23%E6%AD%BB%E4%BA%86%E4%B9%88APP%E5%8F%88%E6%94%B9%E5%90%8D%E4%BA%86%23) `351.0K 🔥` `+219%`
1. [汪峰晒与四个孩子合照](https://s.weibo.com/weibo?q=%23%E6%B1%AA%E5%B3%B0%E6%99%92%E4%B8%8E%E5%9B%9B%E4%B8%AA%E5%AD%A9%E5%AD%90%E5%90%88%E7%85%A7%23) `348.1K 🔥` `+209%`
1. [王鹤棣风波后首度公开亮相 (Wang Hedi made his first public appearance after the controversy)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%B9%A4%E6%A3%A3%E9%A3%8E%E6%B3%A2%E5%90%8E%E9%A6%96%E5%BA%A6%E5%85%AC%E5%BC%80%E4%BA%AE%E7%9B%B8%23) `342.6K 🔥` `+211%`
1. [折磨三天最后还是淘汰侯宇 (After three days of torture, Hou Yu was finally eliminated.)](https://s.weibo.com/weibo?q=%23%E6%8A%98%E7%A3%A8%E4%B8%89%E5%A4%A9%E6%9C%80%E5%90%8E%E8%BF%98%E6%98%AF%E6%B7%98%E6%B1%B0%E4%BE%AF%E5%AE%87%23) `335.9K 🔥` `+202%`
1. [李连杰回应换年轻武僧心脏 (Jet Li responded by changing the heart of a young warrior monk)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E8%BF%9E%E6%9D%B0%E5%9B%9E%E5%BA%94%E6%8D%A2%E5%B9%B4%E8%BD%BB%E6%AD%A6%E5%83%A7%E5%BF%83%E8%84%8F%23) `335.0K 🔥` `+203%`
1. [武汉停课停业](https://s.weibo.com/weibo?q=%23%E6%AD%A6%E6%B1%89%E5%81%9C%E8%AF%BE%E5%81%9C%E4%B8%9A%23) `331.8K 🔥` `+99%`
1. [刘晓艳回应叮嘱高颜值女生视频走红 (Liu Xiaoyan responds to video of good-looking girls becoming popular)](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%99%93%E8%89%B3%E5%9B%9E%E5%BA%94%E5%8F%AE%E5%98%B1%E9%AB%98%E9%A2%9C%E5%80%BC%E5%A5%B3%E7%94%9F%E8%A7%86%E9%A2%91%E8%B5%B0%E7%BA%A2%23) `329.6K 🔥` `+194%`
1. [官方通报小区马匹受惊致女童死亡](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E9%80%9A%E6%8A%A5%E5%B0%8F%E5%8C%BA%E9%A9%AC%E5%8C%B9%E5%8F%97%E6%83%8A%E8%87%B4%E5%A5%B3%E7%AB%A5%E6%AD%BB%E4%BA%A1%23) `318.1K 🔥` `+100%`
1. [温峥嵘 可不可以我走](https://s.weibo.com/weibo?q=%23%E6%B8%A9%E5%B3%A5%E5%B5%98%20%E5%8F%AF%E4%B8%8D%E5%8F%AF%E4%BB%A5%E6%88%91%E8%B5%B0%23) `311.7K 🔥` `+187%`
1. [网红主播把假一赔万当成口号 (Internet celebrity anchors use "compensate for 10,000 fakes" as a slogan)](https://s.weibo.com/weibo?q=%23%E7%BD%91%E7%BA%A2%E4%B8%BB%E6%92%AD%E6%8A%8A%E5%81%87%E4%B8%80%E8%B5%94%E4%B8%87%E5%BD%93%E6%88%90%E5%8F%A3%E5%8F%B7%23) `307.3K 🔥` `+180%`
1. [侯宇淘汰 (Hou Yu was eliminated)](https://s.weibo.com/weibo?q=%23%E4%BE%AF%E5%AE%87%E6%B7%98%E6%B1%B0%23) `306.0K 🔥` `+181%`
1. [小澈复出了](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E6%BE%88%E5%A4%8D%E5%87%BA%E4%BA%86%23) `302.5K 🔥` `+198%`
1. [刘浩存首部破万女主剧](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%B5%A9%E5%AD%98%E9%A6%96%E9%83%A8%E7%A0%B4%E4%B8%87%E5%A5%B3%E4%B8%BB%E5%89%A7%23) `300.9K 🔥` `+180%`
1. [王霏霏孟佳这段好强 (Wang Feifei and Meng Jia are so strong)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%9C%8F%E9%9C%8F%E5%AD%9F%E4%BD%B3%E8%BF%99%E6%AE%B5%E5%A5%BD%E5%BC%BA%23) `297.1K 🔥` `+180%`
1. [68岁男子出轨90后生子称妻子同意 (68-year-old man cheated on a 90-year-old boy and said his wife agreed)](https://s.weibo.com/weibo?q=%2368%E5%B2%81%E7%94%B7%E5%AD%90%E5%87%BA%E8%BD%A890%E5%90%8E%E7%94%9F%E5%AD%90%E7%A7%B0%E5%A6%BB%E5%AD%90%E5%90%8C%E6%84%8F%23) `294.1K 🔥` `+173%`
1. [神23与空间站完成对接](https://s.weibo.com/weibo?q=%23%E7%A5%9E23%E4%B8%8E%E7%A9%BA%E9%97%B4%E7%AB%99%E5%AE%8C%E6%88%90%E5%AF%B9%E6%8E%A5%23) `289.3K 🔥` `+209%`
1. [谢娜主持能力 (Xie Na's hosting ability)](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%A8%9C%E4%B8%BB%E6%8C%81%E8%83%BD%E5%8A%9B%23) `356.8K 🔥`
1. [浪姐排名 (Sister Lang ranking)](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E6%8E%92%E5%90%8D%23) `351.9K 🔥` `-49%`
1. [苗苗也不舒服了 (Miaomiao is not feeling well either.)](https://s.weibo.com/weibo?q=%23%E8%8B%97%E8%8B%97%E4%B9%9F%E4%B8%8D%E8%88%92%E6%9C%8D%E4%BA%86%23) `345.1K 🔥` `-61%`
1. [迪丽热巴在我边上做头发](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E5%9C%A8%E6%88%91%E8%BE%B9%E4%B8%8A%E5%81%9A%E5%A4%B4%E5%8F%91%23) `321.0K 🔥` `-61%`
1. [神23发射成功](https://s.weibo.com/weibo?q=%23%E7%A5%9E23%E5%8F%91%E5%B0%84%E6%88%90%E5%8A%9F%23) `312.4K 🔥` `-37%`

Updated at 2026-05-25 08:14:35

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
