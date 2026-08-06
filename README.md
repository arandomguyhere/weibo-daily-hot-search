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

1. [金鹰奖 (Golden Eagle Award)](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%B9%B0%E5%A5%96%23) `2.0M 🔥` `NEW`
1. [儿子举报身价上亿父亲说家已破碎](https://s.weibo.com/weibo?q=%23%E5%84%BF%E5%AD%90%E4%B8%BE%E6%8A%A5%E8%BA%AB%E4%BB%B7%E4%B8%8A%E4%BA%BF%E7%88%B6%E4%BA%B2%E8%AF%B4%E5%AE%B6%E5%B7%B2%E7%A0%B4%E7%A2%8E%23) `1.1M 🔥` `NEW`
1. [6图看我国海洋经济稳步增长](https://s.weibo.com/weibo?q=%236%E5%9B%BE%E7%9C%8B%E6%88%91%E5%9B%BD%E6%B5%B7%E6%B4%8B%E7%BB%8F%E6%B5%8E%E7%A8%B3%E6%AD%A5%E5%A2%9E%E9%95%BF%23) `1.0M 🔥` `NEW`
1. [千山茶客 来日有信](https://s.weibo.com/weibo?q=%23%E5%8D%83%E5%B1%B1%E8%8C%B6%E5%AE%A2%20%E6%9D%A5%E6%97%A5%E6%9C%89%E4%BF%A1%23) `448.6K 🔥` `NEW`
1. [金鹰奖下午公布提名名单](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%B9%B0%E5%A5%96%E4%B8%8B%E5%8D%88%E5%85%AC%E5%B8%83%E6%8F%90%E5%90%8D%E5%90%8D%E5%8D%95%23) `346.4K 🔥` `NEW`
1. [小米徐洁云回应孩go言论](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E5%BE%90%E6%B4%81%E4%BA%91%E5%9B%9E%E5%BA%94%E5%AD%A9go%E8%A8%80%E8%AE%BA%23) `345.4K 🔥` `NEW`
1. [曝Bin回BLG基地](https://s.weibo.com/weibo?q=%23%E6%9B%9DBin%E5%9B%9EBLG%E5%9F%BA%E5%9C%B0%23) `343.2K 🔥` `NEW`
1. [田曦薇 有刘海儿漂亮没刘海儿也漂亮](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%20%E6%9C%89%E5%88%98%E6%B5%B7%E5%84%BF%E6%BC%82%E4%BA%AE%E6%B2%A1%E5%88%98%E6%B5%B7%E5%84%BF%E4%B9%9F%E6%BC%82%E4%BA%AE%23) `341.7K 🔥` `NEW`
1. [时代少年团把丁程鑫刘耀文合照放C位](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E6%8A%8A%E4%B8%81%E7%A8%8B%E9%91%AB%E5%88%98%E8%80%80%E6%96%87%E5%90%88%E7%85%A7%E6%94%BEC%E4%BD%8D%23) `340.4K 🔥` `NEW`
1. [王腾回应吐槽小米汽车](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%85%BE%E5%9B%9E%E5%BA%94%E5%90%90%E6%A7%BD%E5%B0%8F%E7%B1%B3%E6%B1%BD%E8%BD%A6%23) `339.1K 🔥` `NEW`
1. [戚薇真的把自己做成AI了 (Qi Wei really made herself an AI)](https://s.weibo.com/weibo?q=%23%E6%88%9A%E8%96%87%E7%9C%9F%E7%9A%84%E6%8A%8A%E8%87%AA%E5%B7%B1%E5%81%9A%E6%88%90AI%E4%BA%86%23) `336.6K 🔥` `NEW`
1. [鲨川川认证鞠婧祎是撕拉片的神](https://s.weibo.com/weibo?q=%23%E9%B2%A8%E5%B7%9D%E5%B7%9D%E8%AE%A4%E8%AF%81%E9%9E%A0%E5%A9%A7%E7%A5%8E%E6%98%AF%E6%92%95%E6%8B%89%E7%89%87%E7%9A%84%E7%A5%9E%23) `335.7K 🔥` `NEW`
1. [父亲起诉9岁私生子被儿子斥畜生不如](https://s.weibo.com/weibo?q=%23%E7%88%B6%E4%BA%B2%E8%B5%B7%E8%AF%899%E5%B2%81%E7%A7%81%E7%94%9F%E5%AD%90%E8%A2%AB%E5%84%BF%E5%AD%90%E6%96%A5%E7%95%9C%E7%94%9F%E4%B8%8D%E5%A6%82%23) `333.1K 🔥` `NEW`
1. [酸萝卜老鸭汤](https://s.weibo.com/weibo?q=%23%E9%85%B8%E8%90%9D%E5%8D%9C%E8%80%81%E9%B8%AD%E6%B1%A4%23) `331.2K 🔥` `NEW`
1. [海南征集公职人员涉黑涉恶等线索](https://s.weibo.com/weibo?q=%23%E6%B5%B7%E5%8D%97%E5%BE%81%E9%9B%86%E5%85%AC%E8%81%8C%E4%BA%BA%E5%91%98%E6%B6%89%E9%BB%91%E6%B6%89%E6%81%B6%E7%AD%89%E7%BA%BF%E7%B4%A2%23) `329.3K 🔥` `NEW`
1. [突然意识到曾小贤今年51岁了](https://s.weibo.com/weibo?q=%23%E7%AA%81%E7%84%B6%E6%84%8F%E8%AF%86%E5%88%B0%E6%9B%BE%E5%B0%8F%E8%B4%A4%E4%BB%8A%E5%B9%B451%E5%B2%81%E4%BA%86%23) `327.3K 🔥` `NEW`
1. [上海 床虱](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%20%E5%BA%8A%E8%99%B1%23) `323.2K 🔥` `NEW`
1. [南大数院院长 辞职信](https://s.weibo.com/weibo?q=%23%E5%8D%97%E5%A4%A7%E6%95%B0%E9%99%A2%E9%99%A2%E9%95%BF%20%E8%BE%9E%E8%81%8C%E4%BF%A1%23) `320.6K 🔥` `NEW`
1. [周也疑似分手](https://s.weibo.com/weibo?q=%23%E5%91%A8%E4%B9%9F%E7%96%91%E4%BC%BC%E5%88%86%E6%89%8B%23) `317.2K 🔥` `NEW`
1. [侯卓成曾和杨汝晴提过分手](https://s.weibo.com/weibo?q=%23%E4%BE%AF%E5%8D%93%E6%88%90%E6%9B%BE%E5%92%8C%E6%9D%A8%E6%B1%9D%E6%99%B4%E6%8F%90%E8%BF%87%E5%88%86%E6%89%8B%23) `315.5K 🔥` `NEW`
1. [日女网红被扒出曾陪酒遭人身攻击 (Japanese internet celebrity was revealed to have been drinking with her and was physically assaulted)](https://s.weibo.com/weibo?q=%23%E6%97%A5%E5%A5%B3%E7%BD%91%E7%BA%A2%E8%A2%AB%E6%89%92%E5%87%BA%E6%9B%BE%E9%99%AA%E9%85%92%E9%81%AD%E4%BA%BA%E8%BA%AB%E6%94%BB%E5%87%BB%23) `311.6K 🔥` `NEW`
1. [弟弟落水妈妈哥哥下水救人不幸溺亡](https://s.weibo.com/weibo?q=%23%E5%BC%9F%E5%BC%9F%E8%90%BD%E6%B0%B4%E5%A6%88%E5%A6%88%E5%93%A5%E5%93%A5%E4%B8%8B%E6%B0%B4%E6%95%91%E4%BA%BA%E4%B8%8D%E5%B9%B8%E6%BA%BA%E4%BA%A1%23) `288.2K 🔥` `NEW`
1. [披荆斩棘的哥哥阵容前瞻](https://s.weibo.com/weibo?q=%23%E6%8A%AB%E8%8D%86%E6%96%A9%E6%A3%98%E7%9A%84%E5%93%A5%E5%93%A5%E9%98%B5%E5%AE%B9%E5%89%8D%E7%9E%BB%23) `283.3K 🔥` `NEW`
1. [王楚然演技](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E7%84%B6%E6%BC%94%E6%8A%80%23) `282.1K 🔥` `NEW`
1. [张韶涵发文悼念化妆师](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9F%B6%E6%B6%B5%E5%8F%91%E6%96%87%E6%82%BC%E5%BF%B5%E5%8C%96%E5%A6%86%E5%B8%88%23) `281.2K 🔥` `NEW`
1. [曾舜晞戴瘦脸绷带](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E8%88%9C%E6%99%9E%E6%88%B4%E7%98%A6%E8%84%B8%E7%BB%B7%E5%B8%A6%23) `278.1K 🔥` `NEW`
1. [直播自杀女网红疑因追星遭受网暴](https://s.weibo.com/weibo?q=%23%E7%9B%B4%E6%92%AD%E8%87%AA%E6%9D%80%E5%A5%B3%E7%BD%91%E7%BA%A2%E7%96%91%E5%9B%A0%E8%BF%BD%E6%98%9F%E9%81%AD%E5%8F%97%E7%BD%91%E6%9A%B4%23) `257.9K 🔥` `NEW`
1. [火把节上最亮的不止是火把](https://s.weibo.com/weibo?q=%23%E7%81%AB%E6%8A%8A%E8%8A%82%E4%B8%8A%E6%9C%80%E4%BA%AE%E7%9A%84%E4%B8%8D%E6%AD%A2%E6%98%AF%E7%81%AB%E6%8A%8A%23) `243.9K 🔥` `NEW`
1. [白海豚将打破山竹纪录](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%B5%B7%E8%B1%9A%E5%B0%86%E6%89%93%E7%A0%B4%E5%B1%B1%E7%AB%B9%E7%BA%AA%E5%BD%95%23) `242.5K 🔥` `NEW`
1. [时代少年团喊你来疯四](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E5%96%8A%E4%BD%A0%E6%9D%A5%E7%96%AF%E5%9B%9B%23) `227.5K 🔥` `NEW`
1. [字节跳动内部严禁蒸馏开源模型 (Distillation of open source models is strictly prohibited within ByteDance)](https://s.weibo.com/weibo?q=%23%E5%AD%97%E8%8A%82%E8%B7%B3%E5%8A%A8%E5%86%85%E9%83%A8%E4%B8%A5%E7%A6%81%E8%92%B8%E9%A6%8F%E5%BC%80%E6%BA%90%E6%A8%A1%E5%9E%8B%23) `216.4K 🔥` `NEW`
1. [患癌妻子质问到底销毁几个胚胎](https://s.weibo.com/weibo?q=%23%E6%82%A3%E7%99%8C%E5%A6%BB%E5%AD%90%E8%B4%A8%E9%97%AE%E5%88%B0%E5%BA%95%E9%94%80%E6%AF%81%E5%87%A0%E4%B8%AA%E8%83%9A%E8%83%8E%23) `196.7K 🔥` `NEW`
1. [原来不上班有这么多能做的事](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E4%B8%8D%E4%B8%8A%E7%8F%AD%E6%9C%89%E8%BF%99%E4%B9%88%E5%A4%9A%E8%83%BD%E5%81%9A%E7%9A%84%E4%BA%8B%23) `195.4K 🔥` `NEW`
1. [内娱进化到床戏都有路透了](https://s.weibo.com/weibo?q=%23%E5%86%85%E5%A8%B1%E8%BF%9B%E5%8C%96%E5%88%B0%E5%BA%8A%E6%88%8F%E9%83%BD%E6%9C%89%E8%B7%AF%E9%80%8F%E4%BA%86%23) `195.4K 🔥` `NEW`
1. [陈伟霆看见开始上水果天塌了](https://s.weibo.com/weibo?q=%23%E9%99%88%E4%BC%9F%E9%9C%86%E7%9C%8B%E8%A7%81%E5%BC%80%E5%A7%8B%E4%B8%8A%E6%B0%B4%E6%9E%9C%E5%A4%A9%E5%A1%8C%E4%BA%86%23) `195.3K 🔥` `NEW`
1. [同事用AI半天干了我一周的活](https://s.weibo.com/weibo?q=%23%E5%90%8C%E4%BA%8B%E7%94%A8AI%E5%8D%8A%E5%A4%A9%E5%B9%B2%E4%BA%86%E6%88%91%E4%B8%80%E5%91%A8%E7%9A%84%E6%B4%BB%23) `195.1K 🔥` `NEW`
1. [曝维尼修斯给姆巴佩情侣牵线](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E7%BB%B4%E5%B0%BC%E4%BF%AE%E6%96%AF%E7%BB%99%E5%A7%86%E5%B7%B4%E4%BD%A9%E6%83%85%E4%BE%A3%E7%89%B5%E7%BA%BF%23) `195.0K 🔥` `NEW`
1. [工作其实是很养人的 (Work is actually very nourishing.)](https://s.weibo.com/weibo?q=%23%E5%B7%A5%E4%BD%9C%E5%85%B6%E5%AE%9E%E6%98%AF%E5%BE%88%E5%85%BB%E4%BA%BA%E7%9A%84%23) `693.7K 🔥` `+40%`
1. [苏泊尔 擦边 (Supor edge)](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E6%B3%8A%E5%B0%94%20%E6%93%A6%E8%BE%B9%23) `546.2K 🔥` `+147%`
1. [无限暖暖](https://s.weibo.com/weibo?q=%23%E6%97%A0%E9%99%90%E6%9A%96%E6%9A%96%23) `314.2K 🔥` `+57%`
1. [韩国到底有多热](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E5%88%B0%E5%BA%95%E6%9C%89%E5%A4%9A%E7%83%AD%23) `281.4K 🔥` `+58%`
1. [为什么理性的长期主义者更喜欢租](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E7%90%86%E6%80%A7%E7%9A%84%E9%95%BF%E6%9C%9F%E4%B8%BB%E4%B9%89%E8%80%85%E6%9B%B4%E5%96%9C%E6%AC%A2%E7%A7%9F%23) `330.4K 🔥`
1. [女子用漏洞0元买了3千台电器 (Woman used loophole to buy 3,000 electrical appliances for 0 yuan)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E7%94%A8%E6%BC%8F%E6%B4%9E0%E5%85%83%E4%B9%B0%E4%BA%863%E5%8D%83%E5%8F%B0%E7%94%B5%E5%99%A8%23) `1.0M 🔥` `-26%`
1. [田曦薇连续16部铁刘海剧 (Tian Xiwei's 16th consecutive drama with iron bangs)](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E8%BF%9E%E7%BB%AD16%E9%83%A8%E9%93%81%E5%88%98%E6%B5%B7%E5%89%A7%23) `331.5K 🔥` `-34%`
1. [双休](https://s.weibo.com/weibo?q=%23%E5%8F%8C%E4%BC%91%23) `325.2K 🔥` `-53%`
1. [侯卓成已报案](https://s.weibo.com/weibo?q=%23%E4%BE%AF%E5%8D%93%E6%88%90%E5%B7%B2%E6%8A%A5%E6%A1%88%23) `324.1K 🔥` `-36%`
1. [关之琳模特新男友才27岁](https://s.weibo.com/weibo?q=%23%E5%85%B3%E4%B9%8B%E7%90%B3%E6%A8%A1%E7%89%B9%E6%96%B0%E7%94%B7%E5%8F%8B%E6%89%8D27%E5%B2%81%23) `321.2K 🔥` `-30%`
1. [呵呵力挺白鹿](https://s.weibo.com/weibo?q=%23%E5%91%B5%E5%91%B5%E5%8A%9B%E6%8C%BA%E7%99%BD%E9%B9%BF%23) `318.0K 🔥` `-31%`
1. [曝侯明昊违反交规被约谈](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E4%BE%AF%E6%98%8E%E6%98%8A%E8%BF%9D%E5%8F%8D%E4%BA%A4%E8%A7%84%E8%A2%AB%E7%BA%A6%E8%B0%88%23) `311.6K 🔥` `-37%`
1. [张雅琪的性格](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%85%E7%90%AA%E7%9A%84%E6%80%A7%E6%A0%BC%23) `243.7K 🔥` `-50%`

Updated at 2026-08-06 18:03:19

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
