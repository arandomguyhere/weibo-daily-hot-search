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

1. [自从你出道很少看内娱营销富二代人设 (Since you debuted, you rarely see the rich second-generation characters in domestic entertainment marketing.)](https://s.weibo.com/weibo?q=%23%E8%87%AA%E4%BB%8E%E4%BD%A0%E5%87%BA%E9%81%93%E5%BE%88%E5%B0%91%E7%9C%8B%E5%86%85%E5%A8%B1%E8%90%A5%E9%94%80%E5%AF%8C%E4%BA%8C%E4%BB%A3%E4%BA%BA%E8%AE%BE%23) `214.9K 🔥` `NEW`
1. [迪丽热巴上车后又下车收信](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E4%B8%8A%E8%BD%A6%E5%90%8E%E5%8F%88%E4%B8%8B%E8%BD%A6%E6%94%B6%E4%BF%A1%23) `166.5K 🔥` `NEW`
1. [怀孕弟妹与婆婆惨遭杀害大儿媳发声](https://s.weibo.com/weibo?q=%23%E6%80%80%E5%AD%95%E5%BC%9F%E5%A6%B9%E4%B8%8E%E5%A9%86%E5%A9%86%E6%83%A8%E9%81%AD%E6%9D%80%E5%AE%B3%E5%A4%A7%E5%84%BF%E5%AA%B3%E5%8F%91%E5%A3%B0%23) `158.1K 🔥` `NEW`
1. [21岁国际名模在新家猝然离世](https://s.weibo.com/weibo?q=%2321%E5%B2%81%E5%9B%BD%E9%99%85%E5%90%8D%E6%A8%A1%E5%9C%A8%E6%96%B0%E5%AE%B6%E7%8C%9D%E7%84%B6%E7%A6%BB%E4%B8%96%23) `150.1K 🔥` `NEW`
1. [王皓说张本智和拉不死王楚钦](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E7%9A%93%E8%AF%B4%E5%BC%A0%E6%9C%AC%E6%99%BA%E5%92%8C%E6%8B%89%E4%B8%8D%E6%AD%BB%E7%8E%8B%E6%A5%9A%E9%92%A6%23) `147.1K 🔥` `NEW`
1. [张本智和银牌](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%AC%E6%99%BA%E5%92%8C%E9%93%B6%E7%89%8C%23) `146.1K 🔥` `NEW`
1. [亲哥去世员工请假奔丧被辞](https://s.weibo.com/weibo?q=%23%E4%BA%B2%E5%93%A5%E5%8E%BB%E4%B8%96%E5%91%98%E5%B7%A5%E8%AF%B7%E5%81%87%E5%A5%94%E4%B8%A7%E8%A2%AB%E8%BE%9E%23) `134.0K 🔥` `NEW`
1. [王楚钦亚洲杯两连冠](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E4%BA%9A%E6%B4%B2%E6%9D%AF%E4%B8%A4%E8%BF%9E%E5%86%A0%23) `126.3K 🔥` `NEW`
1. [tws回归预告封面没有韩振](https://s.weibo.com/weibo?q=%23tws%E5%9B%9E%E5%BD%92%E9%A2%84%E5%91%8A%E5%B0%81%E9%9D%A2%E6%B2%A1%E6%9C%89%E9%9F%A9%E6%8C%AF%23) `123.9K 🔥` `NEW`
1. [大巴公司回应高速上多个行李箱甩出](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%B7%B4%E5%85%AC%E5%8F%B8%E5%9B%9E%E5%BA%94%E9%AB%98%E9%80%9F%E4%B8%8A%E5%A4%9A%E4%B8%AA%E8%A1%8C%E6%9D%8E%E7%AE%B1%E7%94%A9%E5%87%BA%23) `114.4K 🔥` `NEW`
1. [飞机餐真的缩水了吗 (Has airplane food really shrunk?)](https://s.weibo.com/weibo?q=%23%E9%A3%9E%E6%9C%BA%E9%A4%90%E7%9C%9F%E7%9A%84%E7%BC%A9%E6%B0%B4%E4%BA%86%E5%90%97%23) `114.2K 🔥` `NEW`
1. [王楚钦4比2张本智和](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A64%E6%AF%942%E5%BC%A0%E6%9C%AC%E6%99%BA%E5%92%8C%23) `110.7K 🔥` `NEW`
1. [孙颖莎按下亚洲杯冠军手模](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E6%8C%89%E4%B8%8B%E4%BA%9A%E6%B4%B2%E6%9D%AF%E5%86%A0%E5%86%9B%E6%89%8B%E6%A8%A1%23) `105.0K 🔥` `NEW`
1. [Bin微博火遍LCK与LPL](https://s.weibo.com/weibo?q=%23Bin%E5%BE%AE%E5%8D%9A%E7%81%AB%E9%81%8DLCK%E4%B8%8ELPL%23) `101.1K 🔥` `NEW`
1. [吃盼盼看冬奥 (Eat and watch the Winter Olympics)](https://s.weibo.com/weibo?q=%23%E5%90%83%E7%9B%BC%E7%9B%BC%E7%9C%8B%E5%86%AC%E5%A5%A5%23) `1.0M 🔥` `+145%`
1. [民宿老板得知携程被调查放烟花庆祝](https://s.weibo.com/weibo?q=%23%E6%B0%91%E5%AE%BF%E8%80%81%E6%9D%BF%E5%BE%97%E7%9F%A5%E6%90%BA%E7%A8%8B%E8%A2%AB%E8%B0%83%E6%9F%A5%E6%94%BE%E7%83%9F%E8%8A%B1%E5%BA%86%E7%A5%9D%23) `252.0K 🔥` `+45%`
1. [孙颖莎左手奖杯右手金牌](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E5%B7%A6%E6%89%8B%E5%A5%96%E6%9D%AF%E5%8F%B3%E6%89%8B%E9%87%91%E7%89%8C%23) `237.6K 🔥` `+50%`
1. [时代峰峻在六公主三代同堂](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B3%B0%E5%B3%BB%E5%9C%A8%E5%85%AD%E5%85%AC%E4%B8%BB%E4%B8%89%E4%BB%A3%E5%90%8C%E5%A0%82%23) `206.0K 🔥` `+21%`
1. [王楚钦vs张本智和](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6vs%E5%BC%A0%E6%9C%AC%E6%99%BA%E5%92%8C%23) `6.5M 🔥`
1. [羽绒服能当救生衣吗消防员跳冰水亲测 (Can a down jacket be used as a life jacket? Firefighters tested it by jumping into icy water)](https://s.weibo.com/weibo?q=%23%E7%BE%BD%E7%BB%92%E6%9C%8D%E8%83%BD%E5%BD%93%E6%95%91%E7%94%9F%E8%A1%A3%E5%90%97%E6%B6%88%E9%98%B2%E5%91%98%E8%B7%B3%E5%86%B0%E6%B0%B4%E4%BA%B2%E6%B5%8B%23) `503.5K 🔥`
1. [亚洲杯](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E6%B4%B2%E6%9D%AF%23) `492.9K 🔥`
1. [亚洲杯颁奖 (Asian Cup Awards)](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E6%B4%B2%E6%9D%AF%E9%A2%81%E5%A5%96%23) `167.1K 🔥`
1. [蔡徐坤直播 (Cai Xukun live broadcast)](https://s.weibo.com/weibo?q=%23%E8%94%A1%E5%BE%90%E5%9D%A4%E7%9B%B4%E6%92%AD%23) `159.1K 🔥`
1. [黄多多斜肩黑裙 (Huang Duoduo sloping shoulder black dress)](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%A4%9A%E5%A4%9A%E6%96%9C%E8%82%A9%E9%BB%91%E8%A3%99%23) `157.5K 🔥`
1. [QQ音乐巅峰榜将退款误购套餐](https://s.weibo.com/weibo?q=%23QQ%E9%9F%B3%E4%B9%90%E5%B7%85%E5%B3%B0%E6%A6%9C%E5%B0%86%E9%80%80%E6%AC%BE%E8%AF%AF%E8%B4%AD%E5%A5%97%E9%A4%90%23) `105.6K 🔥`
1. [孙颖莎生涯首个亚洲杯冠军 (Sun Yingsha wins first Asian Cup title in her career)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E7%94%9F%E6%B6%AF%E9%A6%96%E4%B8%AA%E4%BA%9A%E6%B4%B2%E6%9D%AF%E5%86%A0%E5%86%9B%23) `104.1K 🔥`
1. [王楚钦金牌 (Wang Chuqin gold medal)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E9%87%91%E7%89%8C%23) `2.0M 🔥` `-23%`
1. [他们把忠诚写在祖国的边境线上](https://s.weibo.com/weibo?q=%23%E4%BB%96%E4%BB%AC%E6%8A%8A%E5%BF%A0%E8%AF%9A%E5%86%99%E5%9C%A8%E7%A5%96%E5%9B%BD%E7%9A%84%E8%BE%B9%E5%A2%83%E7%BA%BF%E4%B8%8A%23) `1.2M 🔥` `-55%`
1. [孙颖莎金牌 (Sun Yingsha gold medal)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E9%87%91%E7%89%8C%23) `947.3K 🔥` `-31%`
1. [中国军网点名张本智和 (China military network named Zhang Benzhihe)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%86%9B%E7%BD%91%E7%82%B9%E5%90%8D%E5%BC%A0%E6%9C%AC%E6%99%BA%E5%92%8C%23) `663.3K 🔥` `-29%`
1. [孙颖莎vs王曼昱 (Sun Yingsha vs Wang Manyu)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8Evs%E7%8E%8B%E6%9B%BC%E6%98%B1%23) `569.0K 🔥` `-78%`
1. [白鹿破万四连拍](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E7%A0%B4%E4%B8%87%E5%9B%9B%E8%BF%9E%E6%8B%8D%23) `465.3K 🔥` `-28%`
1. [Jasmine的MV是蔡徐坤自己剪的](https://s.weibo.com/weibo?q=%23Jasmine%E7%9A%84MV%E6%98%AF%E8%94%A1%E5%BE%90%E5%9D%A4%E8%87%AA%E5%B7%B1%E5%89%AA%E7%9A%84%23) `257.7K 🔥` `-29%`
1. [孙颖莎王曼昱争议球](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E7%8E%8B%E6%9B%BC%E6%98%B1%E4%BA%89%E8%AE%AE%E7%90%83%23) `251.6K 🔥` `-37%`
1. [高市将继续执政](https://s.weibo.com/weibo?q=%23%E9%AB%98%E5%B8%82%E5%B0%86%E7%BB%A7%E7%BB%AD%E6%89%A7%E6%94%BF%23) `251.6K 🔥` `-26%`
1. [父亲去世试管婴儿获工亡抚恤金](https://s.weibo.com/weibo?q=%23%E7%88%B6%E4%BA%B2%E5%8E%BB%E4%B8%96%E8%AF%95%E7%AE%A1%E5%A9%B4%E5%84%BF%E8%8E%B7%E5%B7%A5%E4%BA%A1%E6%8A%9A%E6%81%A4%E9%87%91%23) `249.9K 🔥` `-53%`
1. [王玉雯春晚路透缎面长裙好仙](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E7%8E%89%E9%9B%AF%E6%98%A5%E6%99%9A%E8%B7%AF%E9%80%8F%E7%BC%8E%E9%9D%A2%E9%95%BF%E8%A3%99%E5%A5%BD%E4%BB%99%23) `164.4K 🔥` `-41%`
1. [王楚钦这才是爆冲](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E8%BF%99%E6%89%8D%E6%98%AF%E7%88%86%E5%86%B2%23) `159.9K 🔥` `-22%`
1. [杨紫张哲华吻戏 (Yang Zi and Zhang Zhehua kiss scene)](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E5%BC%A0%E5%93%B2%E5%8D%8E%E5%90%BB%E6%88%8F%23) `153.6K 🔥` `-22%`
1. [日本军国主义渗透文体领域 (Japanese militarism penetrates the cultural and sports fields)](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E5%86%9B%E5%9B%BD%E4%B8%BB%E4%B9%89%E6%B8%97%E9%80%8F%E6%96%87%E4%BD%93%E9%A2%86%E5%9F%9F%23) `151.1K 🔥` `-36%`
1. [王楚钦在训练场围观女单决赛](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E5%9C%A8%E8%AE%AD%E7%BB%83%E5%9C%BA%E5%9B%B4%E8%A7%82%E5%A5%B3%E5%8D%95%E5%86%B3%E8%B5%9B%23) `141.0K 🔥` `-28%`
1. [鞠婧祎指尖蝴蝶 (Ju Jingyi fingertip butterfly)](https://s.weibo.com/weibo?q=%23%E9%9E%A0%E5%A9%A7%E7%A5%8E%E6%8C%87%E5%B0%96%E8%9D%B4%E8%9D%B6%23) `138.8K 🔥` `-21%`
1. [井川里予晒比基尼照](https://s.weibo.com/weibo?q=%23%E4%BA%95%E5%B7%9D%E9%87%8C%E4%BA%88%E6%99%92%E6%AF%94%E5%9F%BA%E5%B0%BC%E7%85%A7%23) `135.1K 🔥` `-23%`
1. [十个勤天想邀请TOP去种地](https://s.weibo.com/weibo?q=%23%E5%8D%81%E4%B8%AA%E5%8B%A4%E5%A4%A9%E6%83%B3%E9%82%80%E8%AF%B7TOP%E5%8E%BB%E7%A7%8D%E5%9C%B0%23) `133.9K 🔥` `-38%`
1. [张杰演唱会现场官宣鸟巢](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9D%B0%E6%BC%94%E5%94%B1%E4%BC%9A%E7%8E%B0%E5%9C%BA%E5%AE%98%E5%AE%A3%E9%B8%9F%E5%B7%A2%23) `126.0K 🔥` `-60%`
1. [男子经常口干一查血糖超出正常值两倍](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E7%BB%8F%E5%B8%B8%E5%8F%A3%E5%B9%B2%E4%B8%80%E6%9F%A5%E8%A1%80%E7%B3%96%E8%B6%85%E5%87%BA%E6%AD%A3%E5%B8%B8%E5%80%BC%E4%B8%A4%E5%80%8D%23) `125.2K 🔥` `-30%`
1. [唐宫奇案破万](https://s.weibo.com/weibo?q=%23%E5%94%90%E5%AE%AB%E5%A5%87%E6%A1%88%E7%A0%B4%E4%B8%87%23) `115.9K 🔥` `-41%`
1. [王楚钦沉浸式观赛](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E6%B2%89%E6%B5%B8%E5%BC%8F%E8%A7%82%E8%B5%9B%23) `114.1K 🔥` `-28%`
1. [太平年赵匡胤黄袍加身](https://s.weibo.com/weibo?q=%23%E5%A4%AA%E5%B9%B3%E5%B9%B4%E8%B5%B5%E5%8C%A1%E8%83%A4%E9%BB%84%E8%A2%8D%E5%8A%A0%E8%BA%AB%23) `108.4K 🔥` `-33%`
1. [张凌赫 电竞男主 (Zhang Linghe E-sports male protagonist)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%20%E7%94%B5%E7%AB%9E%E7%94%B7%E4%B8%BB%23) `107.3K 🔥` `-23%`
1. [U17国足](https://s.weibo.com/weibo?q=%23U17%E5%9B%BD%E8%B6%B3%23) `101.0K 🔥` `-24%`
1. [男生寒假打工烤糊200多个鸡翅 (Boy worked during winter vacation and baked more than 200 chicken wings)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E7%94%9F%E5%AF%92%E5%81%87%E6%89%93%E5%B7%A5%E7%83%A4%E7%B3%8A200%E5%A4%9A%E4%B8%AA%E9%B8%A1%E7%BF%85%23) `101.0K 🔥` `-41%`

Updated at 2026-02-08 23:33:20

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
