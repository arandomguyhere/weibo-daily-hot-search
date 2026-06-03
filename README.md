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

1. [豆包不会做馒头 (Bean buns will not make steamed buns)](https://s.weibo.com/weibo?q=%23%E8%B1%86%E5%8C%85%E4%B8%8D%E4%BC%9A%E5%81%9A%E9%A6%92%E5%A4%B4%23) `1.4M 🔥` `NEW`
1. [翘楚配角 我不是AI](https://s.weibo.com/weibo?q=%23%E7%BF%98%E6%A5%9A%E9%85%8D%E8%A7%92%20%E6%88%91%E4%B8%8D%E6%98%AFAI%23) `889.0K 🔥` `NEW`
1. [一组数据看中国经济稳与进](https://s.weibo.com/weibo?q=%23%E4%B8%80%E7%BB%84%E6%95%B0%E6%8D%AE%E7%9C%8B%E4%B8%AD%E5%9B%BD%E7%BB%8F%E6%B5%8E%E7%A8%B3%E4%B8%8E%E8%BF%9B%23) `723.0K 🔥` `NEW`
1. [任敏此沙多上点网吧](https://s.weibo.com/weibo?q=%23%E4%BB%BB%E6%95%8F%E6%AD%A4%E6%B2%99%E5%A4%9A%E4%B8%8A%E7%82%B9%E7%BD%91%E5%90%A7%23) `526.5K 🔥` `NEW`
1. [美国把当年对日本话术套用给中国](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E6%8A%8A%E5%BD%93%E5%B9%B4%E5%AF%B9%E6%97%A5%E6%9C%AC%E8%AF%9D%E6%9C%AF%E5%A5%97%E7%94%A8%E7%BB%99%E4%B8%AD%E5%9B%BD%23) `454.7K 🔥` `NEW`
1. [罗永浩推荐花呗分期AI好物](https://s.weibo.com/weibo?q=%23%E7%BD%97%E6%B0%B8%E6%B5%A9%E6%8E%A8%E8%8D%90%E8%8A%B1%E5%91%97%E5%88%86%E6%9C%9FAI%E5%A5%BD%E7%89%A9%23) `427.5K 🔥` `NEW`
1. [樊振东发文庆祝三冠王](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E5%8F%91%E6%96%87%E5%BA%86%E7%A5%9D%E4%B8%89%E5%86%A0%E7%8E%8B%23) `407.0K 🔥` `NEW`
1. [邓弗里斯加盟皇马](https://s.weibo.com/weibo?q=%23%E9%82%93%E5%BC%97%E9%87%8C%E6%96%AF%E5%8A%A0%E7%9B%9F%E7%9A%87%E9%A9%AC%23) `404.3K 🔥` `NEW`
1. [陈学冬车祸后消失3年仍未痊愈](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%AD%A6%E5%86%AC%E8%BD%A6%E7%A5%B8%E5%90%8E%E6%B6%88%E5%A4%B13%E5%B9%B4%E4%BB%8D%E6%9C%AA%E7%97%8A%E6%84%88%23) `402.9K 🔥` `NEW`
1. [何猷君说奚梦瑶今天是自己走出来的](https://s.weibo.com/weibo?q=%23%E4%BD%95%E7%8C%B7%E5%90%9B%E8%AF%B4%E5%A5%9A%E6%A2%A6%E7%91%B6%E4%BB%8A%E5%A4%A9%E6%98%AF%E8%87%AA%E5%B7%B1%E8%B5%B0%E5%87%BA%E6%9D%A5%E7%9A%84%23) `401.5K 🔥` `NEW`
1. [纪检部门回应一公务员被曝脚踏两条船 (The disciplinary inspection department responded to a civil servant who was exposed to be treading two different boats.)](https://s.weibo.com/weibo?q=%23%E7%BA%AA%E6%A3%80%E9%83%A8%E9%97%A8%E5%9B%9E%E5%BA%94%E4%B8%80%E5%85%AC%E5%8A%A1%E5%91%98%E8%A2%AB%E6%9B%9D%E8%84%9A%E8%B8%8F%E4%B8%A4%E6%9D%A1%E8%88%B9%23) `399.9K 🔥` `NEW`
1. [国内金价跌破980元每克](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E5%86%85%E9%87%91%E4%BB%B7%E8%B7%8C%E7%A0%B4980%E5%85%83%E6%AF%8F%E5%85%8B%23) `398.6K 🔥` `NEW`
1. [美战机袭击一艘伊朗相关油轮](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E6%88%98%E6%9C%BA%E8%A2%AD%E5%87%BB%E4%B8%80%E8%89%98%E4%BC%8A%E6%9C%97%E7%9B%B8%E5%85%B3%E6%B2%B9%E8%BD%AE%23) `395.9K 🔥` `NEW`
1. [黄仁勋称员工薪水越高越好](https://s.weibo.com/weibo?q=%23%E9%BB%84%E4%BB%81%E5%8B%8B%E7%A7%B0%E5%91%98%E5%B7%A5%E8%96%AA%E6%B0%B4%E8%B6%8A%E9%AB%98%E8%B6%8A%E5%A5%BD%23) `394.2K 🔥` `NEW`
1. [田曦薇749万票断层领先](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87749%E4%B8%87%E7%A5%A8%E6%96%AD%E5%B1%82%E9%A2%86%E5%85%88%23) `394.2K 🔥` `NEW`
1. [傅首尔瘦了38斤](https://s.weibo.com/weibo?q=%23%E5%82%85%E9%A6%96%E5%B0%94%E7%98%A6%E4%BA%8638%E6%96%A4%23) `359.3K 🔥` `NEW`
1. [贺峻霖优秀毕业生](https://s.weibo.com/weibo?q=%23%E8%B4%BA%E5%B3%BB%E9%9C%96%E4%BC%98%E7%A7%80%E6%AF%95%E4%B8%9A%E7%94%9F%23) `358.7K 🔥` `NEW`
1. [名创优品不是会员不能买单](https://s.weibo.com/weibo?q=%23%E5%90%8D%E5%88%9B%E4%BC%98%E5%93%81%E4%B8%8D%E6%98%AF%E4%BC%9A%E5%91%98%E4%B8%8D%E8%83%BD%E4%B9%B0%E5%8D%95%23) `356.5K 🔥` `NEW`
1. [迪丽热巴抹胸刺绣高定](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E6%8A%B9%E8%83%B8%E5%88%BA%E7%BB%A3%E9%AB%98%E5%AE%9A%23) `353.6K 🔥` `NEW`
1. [公司闹老鼠于是养了一只猫](https://s.weibo.com/weibo?q=%23%E5%85%AC%E5%8F%B8%E9%97%B9%E8%80%81%E9%BC%A0%E4%BA%8E%E6%98%AF%E5%85%BB%E4%BA%86%E4%B8%80%E5%8F%AA%E7%8C%AB%23) `350.5K 🔥` `NEW`
1. [黑龙江发生极端大风灾害 (Extreme wind disaster occurs in Heilongjiang)](https://s.weibo.com/weibo?q=%23%E9%BB%91%E9%BE%99%E6%B1%9F%E5%8F%91%E7%94%9F%E6%9E%81%E7%AB%AF%E5%A4%A7%E9%A3%8E%E7%81%BE%E5%AE%B3%23) `348.8K 🔥` `NEW`
1. [逛山姆被赋予身份跃迁含义太荒诞](https://s.weibo.com/weibo?q=%23%E9%80%9B%E5%B1%B1%E5%A7%86%E8%A2%AB%E8%B5%8B%E4%BA%88%E8%BA%AB%E4%BB%BD%E8%B7%83%E8%BF%81%E5%90%AB%E4%B9%89%E5%A4%AA%E8%8D%92%E8%AF%9E%23) `346.9K 🔥` `NEW`
1. [夏美 王洋洋](https://s.weibo.com/weibo?q=%23%E5%A4%8F%E7%BE%8E%20%E7%8E%8B%E6%B4%8B%E6%B4%8B%23) `343.9K 🔥` `NEW`
1. [一车明星安全带全靠P漠视公共安全](https://s.weibo.com/weibo?q=%23%E4%B8%80%E8%BD%A6%E6%98%8E%E6%98%9F%E5%AE%89%E5%85%A8%E5%B8%A6%E5%85%A8%E9%9D%A0P%E6%BC%A0%E8%A7%86%E5%85%AC%E5%85%B1%E5%AE%89%E5%85%A8%23) `341.5K 🔥` `NEW`
1. [莫离](https://s.weibo.com/weibo?q=%23%E8%8E%AB%E7%A6%BB%23) `340.0K 🔥` `NEW`
1. [TOP团综飞行嘉宾](https://s.weibo.com/weibo?q=%23TOP%E5%9B%A2%E7%BB%BC%E9%A3%9E%E8%A1%8C%E5%98%89%E5%AE%BE%23) `339.3K 🔥` `NEW`
1. [曝iPhoneUltra确认液态金属铰链](https://s.weibo.com/weibo?q=%23%E6%9B%9DiPhoneUltra%E7%A1%AE%E8%AE%A4%E6%B6%B2%E6%80%81%E9%87%91%E5%B1%9E%E9%93%B0%E9%93%BE%23) `336.1K 🔥` `NEW`
1. [李佳航悼念魏宗万](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E4%BD%B3%E8%88%AA%E6%82%BC%E5%BF%B5%E9%AD%8F%E5%AE%97%E4%B8%87%23) `335.7K 🔥` `NEW`
1. [试穿72岁闺蜜衣帽间的收藏](https://s.weibo.com/weibo?q=%23%E8%AF%95%E7%A9%BF72%E5%B2%81%E9%97%BA%E8%9C%9C%E8%A1%A3%E5%B8%BD%E9%97%B4%E7%9A%84%E6%94%B6%E8%97%8F%23) `332.2K 🔥` `NEW`
1. [萨摩耶走秀时突然憋不住了](https://s.weibo.com/weibo?q=%23%E8%90%A8%E6%91%A9%E8%80%B6%E8%B5%B0%E7%A7%80%E6%97%B6%E7%AA%81%E7%84%B6%E6%86%8B%E4%B8%8D%E4%BD%8F%E4%BA%86%23) `329.7K 🔥` `NEW`
1. [王源工作强度 (Wang Yuan’s work intensity)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BA%90%E5%B7%A5%E4%BD%9C%E5%BC%BA%E5%BA%A6%23) `326.2K 🔥` `NEW`
1. [库里球鞋合同10年4亿美元](https://s.weibo.com/weibo?q=%23%E5%BA%93%E9%87%8C%E7%90%83%E9%9E%8B%E5%90%88%E5%90%8C10%E5%B9%B44%E4%BA%BF%E7%BE%8E%E5%85%83%23) `323.4K 🔥` `NEW`
1. [巴西女子掉下水道井盖自己合上了](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E8%A5%BF%E5%A5%B3%E5%AD%90%E6%8E%89%E4%B8%8B%E6%B0%B4%E9%81%93%E4%BA%95%E7%9B%96%E8%87%AA%E5%B7%B1%E5%90%88%E4%B8%8A%E4%BA%86%23) `322.3K 🔥` `NEW`
1. [杨紫新剧遇上更坏的前夫哥了](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E6%96%B0%E5%89%A7%E9%81%87%E4%B8%8A%E6%9B%B4%E5%9D%8F%E7%9A%84%E5%89%8D%E5%A4%AB%E5%93%A5%E4%BA%86%23) `320.0K 🔥` `NEW`
1. [忆秦娥下跪](https://s.weibo.com/weibo?q=%23%E5%BF%86%E7%A7%A6%E5%A8%A5%E4%B8%8B%E8%B7%AA%23) `318.2K 🔥` `NEW`
1. [台独挑衅越升级统一大势越明晰](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E7%8B%AC%E6%8C%91%E8%A1%85%E8%B6%8A%E5%8D%87%E7%BA%A7%E7%BB%9F%E4%B8%80%E5%A4%A7%E5%8A%BF%E8%B6%8A%E6%98%8E%E6%99%B0%23) `317.2K 🔥` `NEW`
1. [伊朗称袭击美国第五舰队总部](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E7%A7%B0%E8%A2%AD%E5%87%BB%E7%BE%8E%E5%9B%BD%E7%AC%AC%E4%BA%94%E8%88%B0%E9%98%9F%E6%80%BB%E9%83%A8%23) `311.0K 🔥` `NEW`
1. [小猫的面相真的会随主人](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%8C%AB%E7%9A%84%E9%9D%A2%E7%9B%B8%E7%9C%9F%E7%9A%84%E4%BC%9A%E9%9A%8F%E4%B8%BB%E4%BA%BA%23) `309.6K 🔥` `NEW`
1. [陈都灵回复](https://s.weibo.com/weibo?q=%23%E9%99%88%E9%83%BD%E7%81%B5%E5%9B%9E%E5%A4%8D%23) `307.6K 🔥` `NEW`
1. [关晓彤给李昀锐说了什么](https://s.weibo.com/weibo?q=%23%E5%85%B3%E6%99%93%E5%BD%A4%E7%BB%99%E6%9D%8E%E6%98%80%E9%94%90%E8%AF%B4%E4%BA%86%E4%BB%80%E4%B9%88%23) `305.5K 🔥` `NEW`
1. [公园老人搂抱女孩系祖孙正常互动 (An old man hugging a girl in the park is a normal interaction between grandparents and grandchildren)](https://s.weibo.com/weibo?q=%23%E5%85%AC%E5%9B%AD%E8%80%81%E4%BA%BA%E6%90%82%E6%8A%B1%E5%A5%B3%E5%AD%A9%E7%B3%BB%E7%A5%96%E5%AD%99%E6%AD%A3%E5%B8%B8%E4%BA%92%E5%8A%A8%23) `304.9K 🔥` `NEW`
1. [迪丽热巴真正有含金量的大满贯](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E7%9C%9F%E6%AD%A3%E6%9C%89%E5%90%AB%E9%87%91%E9%87%8F%E7%9A%84%E5%A4%A7%E6%BB%A1%E8%B4%AF%23) `302.5K 🔥` `NEW`
1. [八段锦国家级教材来了](https://s.weibo.com/weibo?q=%23%E5%85%AB%E6%AE%B5%E9%94%A6%E5%9B%BD%E5%AE%B6%E7%BA%A7%E6%95%99%E6%9D%90%E6%9D%A5%E4%BA%86%23) `301.1K 🔥` `NEW`
1. [孙正义再登亚洲首富 (Masayoshi Son becomes Asia's richest man again)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%AD%A3%E4%B9%89%E5%86%8D%E7%99%BB%E4%BA%9A%E6%B4%B2%E9%A6%96%E5%AF%8C%23) `560.5K 🔥` `+259%`
1. [电动车是最伟大的发明](https://s.weibo.com/weibo?q=%23%E7%94%B5%E5%8A%A8%E8%BD%A6%E6%98%AF%E6%9C%80%E4%BC%9F%E5%A4%A7%E7%9A%84%E5%8F%91%E6%98%8E%23) `407.0K 🔥` `+75%`
1. [灵魂摆渡](https://s.weibo.com/weibo?q=%23%E7%81%B5%E9%AD%82%E6%91%86%E6%B8%A1%23) `355.6K 🔥` `+47%`
1. [事业编考生笔试第1因围报被取消资格](https://s.weibo.com/weibo?q=%23%E4%BA%8B%E4%B8%9A%E7%BC%96%E8%80%83%E7%94%9F%E7%AC%94%E8%AF%95%E7%AC%AC1%E5%9B%A0%E5%9B%B4%E6%8A%A5%E8%A2%AB%E5%8F%96%E6%B6%88%E8%B5%84%E6%A0%BC%23) `345.6K 🔥` `+129%`
1. [胖是因为这些因素导致的](https://s.weibo.com/weibo?q=%23%E8%83%96%E6%98%AF%E5%9B%A0%E4%B8%BA%E8%BF%99%E4%BA%9B%E5%9B%A0%E7%B4%A0%E5%AF%BC%E8%87%B4%E7%9A%84%23) `332.7K 🔥` `+135%`
1. [演员魏宗万去世 (Actor Wei Zongwan passed away)](https://s.weibo.com/weibo?q=%23%E6%BC%94%E5%91%98%E9%AD%8F%E5%AE%97%E4%B8%87%E5%8E%BB%E4%B8%96%23) `327.1K 🔥` `+54%`
1. [马思纯 丰满是我的优势](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E6%80%9D%E7%BA%AF%20%E4%B8%B0%E6%BB%A1%E6%98%AF%E6%88%91%E7%9A%84%E4%BC%98%E5%8A%BF%23) `314.2K 🔥` `+101%`
1. [30岁女子爬楼瘦腿膝盖老成60岁](https://s.weibo.com/weibo?q=%2330%E5%B2%81%E5%A5%B3%E5%AD%90%E7%88%AC%E6%A5%BC%E7%98%A6%E8%85%BF%E8%86%9D%E7%9B%96%E8%80%81%E6%88%9060%E5%B2%81%23) `315.2K 🔥`

Updated at 2026-06-03 10:07:15

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
