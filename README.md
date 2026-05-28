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

1. [浪姐宿舍 甲醛 (Sister Lang's Dormitory Formaldehyde)](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E5%AE%BF%E8%88%8D%20%E7%94%B2%E9%86%9B%23) `1.4M 🔥` `NEW`
1. [美国伊朗开始爆发直接冲突](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E4%BC%8A%E6%9C%97%E5%BC%80%E5%A7%8B%E7%88%86%E5%8F%91%E7%9B%B4%E6%8E%A5%E5%86%B2%E7%AA%81%23) `696.2K 🔥` `NEW`
1. [数码产品的颜色哲学](https://s.weibo.com/weibo?q=%23%E6%95%B0%E7%A0%81%E4%BA%A7%E5%93%81%E7%9A%84%E9%A2%9C%E8%89%B2%E5%93%B2%E5%AD%A6%23) `669.5K 🔥` `NEW`
1. [王曦雨首进法网32强](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%9B%A6%E9%9B%A8%E9%A6%96%E8%BF%9B%E6%B3%95%E7%BD%9132%E5%BC%BA%23) `669.1K 🔥` `NEW`
1. [水晶宫1比0巴列卡诺](https://s.weibo.com/weibo?q=%23%E6%B0%B4%E6%99%B6%E5%AE%AB1%E6%AF%940%E5%B7%B4%E5%88%97%E5%8D%A1%E8%AF%BA%23) `664.7K 🔥` `NEW`
1. [林俊杰删掉大哥大嫂合照](https://s.weibo.com/weibo?q=%23%E6%9E%97%E4%BF%8A%E6%9D%B0%E5%88%A0%E6%8E%89%E5%A4%A7%E5%93%A5%E5%A4%A7%E5%AB%82%E5%90%88%E7%85%A7%23) `656.8K 🔥` `NEW`
1. [王鹤棣咸鱼飞升](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%B9%A4%E6%A3%A3%E5%92%B8%E9%B1%BC%E9%A3%9E%E5%8D%87%23) `638.4K 🔥` `NEW`
1. [唱歌变声器](https://s.weibo.com/weibo?q=%23%E5%94%B1%E6%AD%8C%E5%8F%98%E5%A3%B0%E5%99%A8%23) `632.3K 🔥` `NEW`
1. [2026高考](https://s.weibo.com/weibo?q=%232026%E9%AB%98%E8%80%83%23) `603.0K 🔥` `NEW`
1. [向太称黄晓明是娱乐圈老好人](https://s.weibo.com/weibo?q=%23%E5%90%91%E5%A4%AA%E7%A7%B0%E9%BB%84%E6%99%93%E6%98%8E%E6%98%AF%E5%A8%B1%E4%B9%90%E5%9C%88%E8%80%81%E5%A5%BD%E4%BA%BA%23) `602.3K 🔥` `NEW`
1. [A股半导体板块集体爆发 (A-share semiconductor sector broke out collectively)](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E5%8D%8A%E5%AF%BC%E4%BD%93%E6%9D%BF%E5%9D%97%E9%9B%86%E4%BD%93%E7%88%86%E5%8F%91%23) `590.5K 🔥` `NEW`
1. [孙俪眼睛血管破裂](https://s.weibo.com/weibo?q=%23%E5%AD%99%E4%BF%AA%E7%9C%BC%E7%9D%9B%E8%A1%80%E7%AE%A1%E7%A0%B4%E8%A3%82%23) `573.8K 🔥` `NEW`
1. [蔡康永 你知道TFBOYS现在有多红吗](https://s.weibo.com/weibo?q=%23%E8%94%A1%E5%BA%B7%E6%B0%B8%20%E4%BD%A0%E7%9F%A5%E9%81%93TFBOYS%E7%8E%B0%E5%9C%A8%E6%9C%89%E5%A4%9A%E7%BA%A2%E5%90%97%23) `563.1K 🔥` `NEW`
1. [欢迎航天员张陆武飞张洪章回家](https://s.weibo.com/weibo?q=%23%E6%AC%A2%E8%BF%8E%E8%88%AA%E5%A4%A9%E5%91%98%E5%BC%A0%E9%99%86%E6%AD%A6%E9%A3%9E%E5%BC%A0%E6%B4%AA%E7%AB%A0%E5%9B%9E%E5%AE%B6%23) `556.0K 🔥` `NEW`
1. [536分捡漏进北大学生曾被3次退档](https://s.weibo.com/weibo?q=%23536%E5%88%86%E6%8D%A1%E6%BC%8F%E8%BF%9B%E5%8C%97%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%9B%BE%E8%A2%AB3%E6%AC%A1%E9%80%80%E6%A1%A3%23) `554.4K 🔥` `NEW`
1. [林俊杰](https://s.weibo.com/weibo?q=%23%E6%9E%97%E4%BF%8A%E6%9D%B0%23) `552.3K 🔥` `NEW`
1. [金高银 淡极生艳](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%AB%98%E9%93%B6%20%E6%B7%A1%E6%9E%81%E7%94%9F%E8%89%B3%23) `539.7K 🔥` `NEW`
1. [武契奇获颁友谊勋章父母都哭了](https://s.weibo.com/weibo?q=%23%E6%AD%A6%E5%A5%91%E5%A5%87%E8%8E%B7%E9%A2%81%E5%8F%8B%E8%B0%8A%E5%8B%8B%E7%AB%A0%E7%88%B6%E6%AF%8D%E9%83%BD%E5%93%AD%E4%BA%86%23) `537.9K 🔥` `NEW`
1. [耀眼卫视收视率登顶](https://s.weibo.com/weibo?q=%23%E8%80%80%E7%9C%BC%E5%8D%AB%E8%A7%86%E6%94%B6%E8%A7%86%E7%8E%87%E7%99%BB%E9%A1%B6%23) `525.8K 🔥` `NEW`
1. [外国网红中国搭便车的视频火到国外 (Video of foreign internet celebrity hitchhiking in China goes viral abroad)](https://s.weibo.com/weibo?q=%23%E5%A4%96%E5%9B%BD%E7%BD%91%E7%BA%A2%E4%B8%AD%E5%9B%BD%E6%90%AD%E4%BE%BF%E8%BD%A6%E7%9A%84%E8%A7%86%E9%A2%91%E7%81%AB%E5%88%B0%E5%9B%BD%E5%A4%96%23) `898.1K 🔥` `+112%`
1. [优质网络主播中国行天津行](https://s.weibo.com/weibo?q=%23%E4%BC%98%E8%B4%A8%E7%BD%91%E7%BB%9C%E4%B8%BB%E6%92%AD%E4%B8%AD%E5%9B%BD%E8%A1%8C%E5%A4%A9%E6%B4%A5%E8%A1%8C%23) `709.2K 🔥` `+69%`
1. [杨紫韩东君真的拍了落地签 (Yang Zi and Han Dongjun really took the visa on arrival)](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E9%9F%A9%E4%B8%9C%E5%90%9B%E7%9C%9F%E7%9A%84%E6%8B%8D%E4%BA%86%E8%90%BD%E5%9C%B0%E7%AD%BE%23) `669.7K 🔥` `+60%`
1. [男子连吃半个月香蕉补钾进了ICU (Man was admitted to ICU after eating bananas for half a month to supplement potassium)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E8%BF%9E%E5%90%83%E5%8D%8A%E4%B8%AA%E6%9C%88%E9%A6%99%E8%95%89%E8%A1%A5%E9%92%BE%E8%BF%9B%E4%BA%86ICU%23) `661.1K 🔥` `+58%`
1. [王鹤棣不舒服只是迟到的自我保护](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%B9%A4%E6%A3%A3%E4%B8%8D%E8%88%92%E6%9C%8D%E5%8F%AA%E6%98%AF%E8%BF%9F%E5%88%B0%E7%9A%84%E8%87%AA%E6%88%91%E4%BF%9D%E6%8A%A4%23) `656.1K 🔥` `+57%`
1. [女教师打伞事件双方并非父女](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E6%95%99%E5%B8%88%E6%89%93%E4%BC%9E%E4%BA%8B%E4%BB%B6%E5%8F%8C%E6%96%B9%E5%B9%B6%E9%9D%9E%E7%88%B6%E5%A5%B3%23) `652.5K 🔥` `+144%`
1. [刘宇宁说王玉雯跳出体弱多病的感觉](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AE%87%E5%AE%81%E8%AF%B4%E7%8E%8B%E7%8E%89%E9%9B%AF%E8%B7%B3%E5%87%BA%E4%BD%93%E5%BC%B1%E5%A4%9A%E7%97%85%E7%9A%84%E6%84%9F%E8%A7%89%23) `647.9K 🔥` `+427%`
1. [失去报刊亭的故事会 一生被毁了](https://s.weibo.com/weibo?q=%23%E5%A4%B1%E5%8E%BB%E6%8A%A5%E5%88%8A%E4%BA%AD%E7%9A%84%E6%95%85%E4%BA%8B%E4%BC%9A%20%E4%B8%80%E7%94%9F%E8%A2%AB%E6%AF%81%E4%BA%86%23) `641.8K 🔥` `+235%`
1. [南方暴雨或最终影响所有人 (Heavy rain in the South may eventually affect everyone)](https://s.weibo.com/weibo?q=%23%E5%8D%97%E6%96%B9%E6%9A%B4%E9%9B%A8%E6%88%96%E6%9C%80%E7%BB%88%E5%BD%B1%E5%93%8D%E6%89%80%E6%9C%89%E4%BA%BA%23) `634.0K 🔥` `+413%`
1. [两儿子非亲生案大儿子拒绝亲子鉴定](https://s.weibo.com/weibo?q=%23%E4%B8%A4%E5%84%BF%E5%AD%90%E9%9D%9E%E4%BA%B2%E7%94%9F%E6%A1%88%E5%A4%A7%E5%84%BF%E5%AD%90%E6%8B%92%E7%BB%9D%E4%BA%B2%E5%AD%90%E9%89%B4%E5%AE%9A%23) `629.0K 🔥` `+902%`
1. [南部战区回应荷兰军舰侵闯 (The southern theater responded to the intrusion of Dutch warships)](https://s.weibo.com/weibo?q=%23%E5%8D%97%E9%83%A8%E6%88%98%E5%8C%BA%E5%9B%9E%E5%BA%94%E8%8D%B7%E5%85%B0%E5%86%9B%E8%88%B0%E4%BE%B5%E9%97%AF%23) `625.1K 🔥` `+414%`
1. [女记者暗访代孕窝点被打骨折](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E8%AE%B0%E8%80%85%E6%9A%97%E8%AE%BF%E4%BB%A3%E5%AD%95%E7%AA%9D%E7%82%B9%E8%A2%AB%E6%89%93%E9%AA%A8%E6%8A%98%23) `621.6K 🔥` `+401%`
1. [杭州非法代孕窝点现场曝光](https://s.weibo.com/weibo?q=%23%E6%9D%AD%E5%B7%9E%E9%9D%9E%E6%B3%95%E4%BB%A3%E5%AD%95%E7%AA%9D%E7%82%B9%E7%8E%B0%E5%9C%BA%E6%9B%9D%E5%85%89%23) `616.2K 🔥` `+862%`
1. [25岁小伙恋32岁女老板因88万彩礼分手 (A 25-year-old man fell in love with a 32-year-old female boss and broke up because of a gift of 880,000 yuan.)](https://s.weibo.com/weibo?q=%2325%E5%B2%81%E5%B0%8F%E4%BC%99%E6%81%8B32%E5%B2%81%E5%A5%B3%E8%80%81%E6%9D%BF%E5%9B%A088%E4%B8%87%E5%BD%A9%E7%A4%BC%E5%88%86%E6%89%8B%23) `613.1K 🔥` `+859%`
1. [全世界最容易撞衫的地方就是大学](https://s.weibo.com/weibo?q=%23%E5%85%A8%E4%B8%96%E7%95%8C%E6%9C%80%E5%AE%B9%E6%98%93%E6%92%9E%E8%A1%AB%E7%9A%84%E5%9C%B0%E6%96%B9%E5%B0%B1%E6%98%AF%E5%A4%A7%E5%AD%A6%23) `610.7K 🔥` `+939%`
1. [颜颜为李嘉凯发声 (Yan Yan speaks out for Li Jiakai)](https://s.weibo.com/weibo?q=%23%E9%A2%9C%E9%A2%9C%E4%B8%BA%E6%9D%8E%E5%98%89%E5%87%AF%E5%8F%91%E5%A3%B0%23) `608.2K 🔥` `+508%`
1. [四川彩民18元中2576万元大奖](https://s.weibo.com/weibo?q=%23%E5%9B%9B%E5%B7%9D%E5%BD%A9%E6%B0%9118%E5%85%83%E4%B8%AD2576%E4%B8%87%E5%85%83%E5%A4%A7%E5%A5%96%23) `596.8K 🔥` `+389%`
1. [4分钟黄金凯格尔运动 (4 Minutes Golden Kegel Exercise)](https://s.weibo.com/weibo?q=%234%E5%88%86%E9%92%9F%E9%BB%84%E9%87%91%E5%87%AF%E6%A0%BC%E5%B0%94%E8%BF%90%E5%8A%A8%23) `586.5K 🔥` `+819%`
1. [50万买蔚来还是买宝马 (Should I buy NIO or BMW for 500,000?)](https://s.weibo.com/weibo?q=%2350%E4%B8%87%E4%B9%B0%E8%94%9A%E6%9D%A5%E8%BF%98%E6%98%AF%E4%B9%B0%E5%AE%9D%E9%A9%AC%23) `585.7K 🔥` `+911%`
1. [店家是不是对小菜有什么误解](https://s.weibo.com/weibo?q=%23%E5%BA%97%E5%AE%B6%E6%98%AF%E4%B8%8D%E6%98%AF%E5%AF%B9%E5%B0%8F%E8%8F%9C%E6%9C%89%E4%BB%80%E4%B9%88%E8%AF%AF%E8%A7%A3%23) `582.4K 🔥` `+367%`
1. [耀眼人物关系图](https://s.weibo.com/weibo?q=%23%E8%80%80%E7%9C%BC%E4%BA%BA%E7%89%A9%E5%85%B3%E7%B3%BB%E5%9B%BE%23) `578.9K 🔥` `+889%`
1. [男子脑梗女友想结婚被男方亲属拒绝](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E8%84%91%E6%A2%97%E5%A5%B3%E5%8F%8B%E6%83%B3%E7%BB%93%E5%A9%9A%E8%A2%AB%E7%94%B7%E6%96%B9%E4%BA%B2%E5%B1%9E%E6%8B%92%E7%BB%9D%23) `569.5K 🔥` `+875%`
1. [鞠婧祎看见粉丝cos露芜衣的表情 (Ju Jingyi saw the fan's cosplay expression showing off her clothes)](https://s.weibo.com/weibo?q=%23%E9%9E%A0%E5%A9%A7%E7%A5%8E%E7%9C%8B%E8%A7%81%E7%B2%89%E4%B8%9Dcos%E9%9C%B2%E8%8A%9C%E8%A1%A3%E7%9A%84%E8%A1%A8%E6%83%85%23) `568.7K 🔥` `+866%`
1. [金银油集体大跌](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%93%B6%E6%B2%B9%E9%9B%86%E4%BD%93%E5%A4%A7%E8%B7%8C%23) `560.2K 🔥` `+862%`
1. [金靖有了张凌赫忘了丁程鑫](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%9D%96%E6%9C%89%E4%BA%86%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%BF%98%E4%BA%86%E4%B8%81%E7%A8%8B%E9%91%AB%23) `546.1K 🔥` `+651%`
1. [莱巴金娜法网爆冷出局 (Rybakina crashes out of French Open)](https://s.weibo.com/weibo?q=%23%E8%8E%B1%E5%B7%B4%E9%87%91%E5%A8%9C%E6%B3%95%E7%BD%91%E7%88%86%E5%86%B7%E5%87%BA%E5%B1%80%23) `544.7K 🔥` `+338%`
1. [打个伞 怎么了](https://s.weibo.com/weibo?q=%23%E6%89%93%E4%B8%AA%E4%BC%9E%20%E6%80%8E%E4%B9%88%E4%BA%86%23) `534.1K 🔥` `+833%`
1. [将门独后 综艺](https://s.weibo.com/weibo?q=%23%E5%B0%86%E9%97%A8%E7%8B%AC%E5%90%8E%20%E7%BB%BC%E8%89%BA%23) `529.1K 🔥` `+811%`
1. [家业云包场乱成一锅粥了](https://s.weibo.com/weibo?q=%23%E5%AE%B6%E4%B8%9A%E4%BA%91%E5%8C%85%E5%9C%BA%E4%B9%B1%E6%88%90%E4%B8%80%E9%94%85%E7%B2%A5%E4%BA%86%23) `524.9K 🔥` `+772%`
1. [给阿嬷的情书 (A love letter to grandma)](https://s.weibo.com/weibo?q=%23%E7%BB%99%E9%98%BF%E5%AC%B7%E7%9A%84%E6%83%85%E4%B9%A6%23) `694.5K 🔥`

Updated at 2026-05-28 08:03:49

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
