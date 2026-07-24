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

1. [王虹教授在清华大学开讲挂谷猜想 (Professor Wang Hong gave a lecture on Kakeya Conjecture at Tsinghua University)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%99%B9%E6%95%99%E6%8E%88%E5%9C%A8%E6%B8%85%E5%8D%8E%E5%A4%A7%E5%AD%A6%E5%BC%80%E8%AE%B2%E6%8C%82%E8%B0%B7%E7%8C%9C%E6%83%B3%23) `1.7M 🔥` `NEW`
1. [印度博主穷游中国](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%BA%A6%E5%8D%9A%E4%B8%BB%E7%A9%B7%E6%B8%B8%E4%B8%AD%E5%9B%BD%23) `925.2K 🔥` `NEW`
1. [白鹿戴假发没遮全](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E6%88%B4%E5%81%87%E5%8F%91%E6%B2%A1%E9%81%AE%E5%85%A8%23) `718.6K 🔥` `NEW`
1. [瘦了二十斤后手的变化](https://s.weibo.com/weibo?q=%23%E7%98%A6%E4%BA%86%E4%BA%8C%E5%8D%81%E6%96%A4%E5%90%8E%E6%89%8B%E7%9A%84%E5%8F%98%E5%8C%96%23) `711.0K 🔥` `NEW`
1. [真的建议大家不要过度礼貌](https://s.weibo.com/weibo?q=%23%E7%9C%9F%E7%9A%84%E5%BB%BA%E8%AE%AE%E5%A4%A7%E5%AE%B6%E4%B8%8D%E8%A6%81%E8%BF%87%E5%BA%A6%E7%A4%BC%E8%B2%8C%23) `705.2K 🔥` `NEW`
1. [西班牙26号给了罗梅罗一巴掌](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%8F%AD%E7%89%9926%E5%8F%B7%E7%BB%99%E4%BA%86%E7%BD%97%E6%A2%85%E7%BD%97%E4%B8%80%E5%B7%B4%E6%8E%8C%23) `553.1K 🔥` `NEW`
1. [十个勤天的来时路](https://s.weibo.com/weibo?q=%23%E5%8D%81%E4%B8%AA%E5%8B%A4%E5%A4%A9%E7%9A%84%E6%9D%A5%E6%97%B6%E8%B7%AF%23) `535.5K 🔥` `NEW`
1. [裸体在家犯法还是拍别人裸照犯法](https://s.weibo.com/weibo?q=%23%E8%A3%B8%E4%BD%93%E5%9C%A8%E5%AE%B6%E7%8A%AF%E6%B3%95%E8%BF%98%E6%98%AF%E6%8B%8D%E5%88%AB%E4%BA%BA%E8%A3%B8%E7%85%A7%E7%8A%AF%E6%B3%95%23) `525.4K 🔥` `NEW`
1. [张柏芝一个人带大两个孩子那些年](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9F%8F%E8%8A%9D%E4%B8%80%E4%B8%AA%E4%BA%BA%E5%B8%A6%E5%A4%A7%E4%B8%A4%E4%B8%AA%E5%AD%A9%E5%AD%90%E9%82%A3%E4%BA%9B%E5%B9%B4%23) `498.7K 🔥` `NEW`
1. [Angelababy13岁旧照](https://s.weibo.com/weibo?q=%23Angelababy13%E5%B2%81%E6%97%A7%E7%85%A7%23) `492.5K 🔥` `NEW`
1. [发现相亲一个很有趣的现象 (Discovered a very interesting phenomenon of blind date)](https://s.weibo.com/weibo?q=%23%E5%8F%91%E7%8E%B0%E7%9B%B8%E4%BA%B2%E4%B8%80%E4%B8%AA%E5%BE%88%E6%9C%89%E8%B6%A3%E7%9A%84%E7%8E%B0%E8%B1%A1%23) `437.8K 🔥` `NEW`
1. [白鹿常华森领衔主演彭冠英特别出演](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E5%B8%B8%E5%8D%8E%E6%A3%AE%E9%A2%86%E8%A1%94%E4%B8%BB%E6%BC%94%E5%BD%AD%E5%86%A0%E8%8B%B1%E7%89%B9%E5%88%AB%E5%87%BA%E6%BC%94%23) `436.6K 🔥` `NEW`
1. [霸王茶姬爆单](https://s.weibo.com/weibo?q=%23%E9%9C%B8%E7%8E%8B%E8%8C%B6%E5%A7%AC%E7%88%86%E5%8D%95%23) `398.1K 🔥` `NEW`
1. [为什么不见程序员害怕失业抵制AI](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E4%B8%8D%E8%A7%81%E7%A8%8B%E5%BA%8F%E5%91%98%E5%AE%B3%E6%80%95%E5%A4%B1%E4%B8%9A%E6%8A%B5%E5%88%B6AI%23) `318.7K 🔥` `NEW`
1. [产妇羊水栓塞抢救11小时换3次血](https://s.weibo.com/weibo?q=%23%E4%BA%A7%E5%A6%87%E7%BE%8A%E6%B0%B4%E6%A0%93%E5%A1%9E%E6%8A%A2%E6%95%9111%E5%B0%8F%E6%97%B6%E6%8D%A23%E6%AC%A1%E8%A1%80%23) `318.3K 🔥` `NEW`
1. [早8晚11六年后上了清退名单](https://s.weibo.com/weibo?q=%23%E6%97%A98%E6%99%9A11%E5%85%AD%E5%B9%B4%E5%90%8E%E4%B8%8A%E4%BA%86%E6%B8%85%E9%80%80%E5%90%8D%E5%8D%95%23) `317.8K 🔥` `NEW`
1. [郑恺看到苗苗剪短发后的反应](https://s.weibo.com/weibo?q=%23%E9%83%91%E6%81%BA%E7%9C%8B%E5%88%B0%E8%8B%97%E8%8B%97%E5%89%AA%E7%9F%AD%E5%8F%91%E5%90%8E%E7%9A%84%E5%8F%8D%E5%BA%94%23) `316.9K 🔥` `NEW`
1. [母亲发现女儿多张毕业照露出内裤](https://s.weibo.com/weibo?q=%23%E6%AF%8D%E4%BA%B2%E5%8F%91%E7%8E%B0%E5%A5%B3%E5%84%BF%E5%A4%9A%E5%BC%A0%E6%AF%95%E4%B8%9A%E7%85%A7%E9%9C%B2%E5%87%BA%E5%86%85%E8%A3%A4%23) `315.2K 🔥` `NEW`
1. [直观感受到了沈月的美](https://s.weibo.com/weibo?q=%23%E7%9B%B4%E8%A7%82%E6%84%9F%E5%8F%97%E5%88%B0%E4%BA%86%E6%B2%88%E6%9C%88%E7%9A%84%E7%BE%8E%23) `313.7K 🔥` `NEW`
1. [TVB更名](https://s.weibo.com/weibo?q=%23TVB%E6%9B%B4%E5%90%8D%23) `313.0K 🔥` `NEW`
1. [王者荣耀 (King of Glory)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%80%85%E8%8D%A3%E8%80%80%23) `312.8K 🔥` `NEW`
1. [A股半日缩量2306亿](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E5%8D%8A%E6%97%A5%E7%BC%A9%E9%87%8F2306%E4%BA%BF%23) `282.6K 🔥` `NEW`
1. [长相思](https://s.weibo.com/weibo?q=%23%E9%95%BF%E7%9B%B8%E6%80%9D%23) `218.2K 🔥` `NEW`
1. [八仙](https://s.weibo.com/weibo?q=%23%E5%85%AB%E4%BB%99%23) `213.3K 🔥` `NEW`
1. [王虹接终身教授邀请邮件以为是诈骗](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%99%B9%E6%8E%A5%E7%BB%88%E8%BA%AB%E6%95%99%E6%8E%88%E9%82%80%E8%AF%B7%E9%82%AE%E4%BB%B6%E4%BB%A5%E4%B8%BA%E6%98%AF%E8%AF%88%E9%AA%97%23) `212.8K 🔥` `NEW`
1. [建议不要粗糙的使用自己的时间](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E4%B8%8D%E8%A6%81%E7%B2%97%E7%B3%99%E7%9A%84%E4%BD%BF%E7%94%A8%E8%87%AA%E5%B7%B1%E7%9A%84%E6%97%B6%E9%97%B4%23) `212.6K 🔥` `NEW`
1. [严浩翔又用鼻梁戴面具](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E6%B5%A9%E7%BF%94%E5%8F%88%E7%94%A8%E9%BC%BB%E6%A2%81%E6%88%B4%E9%9D%A2%E5%85%B7%23) `212.2K 🔥` `NEW`
1. [迪丽热巴新人美时期](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E6%96%B0%E4%BA%BA%E7%BE%8E%E6%97%B6%E6%9C%9F%23) `212.0K 🔥` `NEW`
1. [和很好的闺蜜闹掰后](https://s.weibo.com/weibo?q=%23%E5%92%8C%E5%BE%88%E5%A5%BD%E7%9A%84%E9%97%BA%E8%9C%9C%E9%97%B9%E6%8E%B0%E5%90%8E%23) `211.7K 🔥` `NEW`
1. [邓煜还是位诗人](https://s.weibo.com/weibo?q=%23%E9%82%93%E7%85%9C%E8%BF%98%E6%98%AF%E4%BD%8D%E8%AF%97%E4%BA%BA%23) `211.4K 🔥` `NEW`
1. [日本民众发现恶魔一直藏在身边 (Japanese people discovered that the devil has always been hiding around them)](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E6%B0%91%E4%BC%97%E5%8F%91%E7%8E%B0%E6%81%B6%E9%AD%94%E4%B8%80%E7%9B%B4%E8%97%8F%E5%9C%A8%E8%BA%AB%E8%BE%B9%23) `210.9K 🔥` `NEW`
1. [迪丽热巴这是红牌不是奖牌](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E8%BF%99%E6%98%AF%E7%BA%A2%E7%89%8C%E4%B8%8D%E6%98%AF%E5%A5%96%E7%89%8C%23) `210.6K 🔥` `NEW`
1. [DeepSeek不同聊天框的内容是共享的](https://s.weibo.com/weibo?q=%23DeepSeek%E4%B8%8D%E5%90%8C%E8%81%8A%E5%A4%A9%E6%A1%86%E7%9A%84%E5%86%85%E5%AE%B9%E6%98%AF%E5%85%B1%E4%BA%AB%E7%9A%84%23) `210.3K 🔥` `NEW`
1. [脱口秀演员高考加50分被大专录取](https://s.weibo.com/weibo?q=%23%E8%84%B1%E5%8F%A3%E7%A7%80%E6%BC%94%E5%91%98%E9%AB%98%E8%80%83%E5%8A%A050%E5%88%86%E8%A2%AB%E5%A4%A7%E4%B8%93%E5%BD%95%E5%8F%96%23) `210.2K 🔥` `NEW`
1. [BLG Hoya](https://s.weibo.com/weibo?q=%23BLG%20Hoya%23) `209.5K 🔥` `NEW`
1. [黄灿灿真买车了](https://s.weibo.com/weibo?q=%23%E9%BB%84%E7%81%BF%E7%81%BF%E7%9C%9F%E4%B9%B0%E8%BD%A6%E4%BA%86%23) `209.2K 🔥` `NEW`
1. [上市公司高管怼量化每天跟遛狗一样](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E5%B8%82%E5%85%AC%E5%8F%B8%E9%AB%98%E7%AE%A1%E6%80%BC%E9%87%8F%E5%8C%96%E6%AF%8F%E5%A4%A9%E8%B7%9F%E9%81%9B%E7%8B%97%E4%B8%80%E6%A0%B7%23) `198.4K 🔥` `NEW`
1. [COCO说和谢贤分手是很难过的](https://s.weibo.com/weibo?q=%23COCO%E8%AF%B4%E5%92%8C%E8%B0%A2%E8%B4%A4%E5%88%86%E6%89%8B%E6%98%AF%E5%BE%88%E9%9A%BE%E8%BF%87%E7%9A%84%23) `181.6K 🔥` `NEW`
1. [陈伟霆陈瑶曾威航领衔主演](https://s.weibo.com/weibo?q=%23%E9%99%88%E4%BC%9F%E9%9C%86%E9%99%88%E7%91%B6%E6%9B%BE%E5%A8%81%E8%88%AA%E9%A2%86%E8%A1%94%E4%B8%BB%E6%BC%94%23) `153.7K 🔥` `NEW`
1. [王俊凯不莱玫品牌首位全球代言人 (Wang Junkai is the first global spokesperson for the brand)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E4%B8%8D%E8%8E%B1%E7%8E%AB%E5%93%81%E7%89%8C%E9%A6%96%E4%BD%8D%E5%85%A8%E7%90%83%E4%BB%A3%E8%A8%80%E4%BA%BA%23) `708.3K 🔥`
1. [男子在家裸体被邻居拍照发群](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%9C%A8%E5%AE%B6%E8%A3%B8%E4%BD%93%E8%A2%AB%E9%82%BB%E5%B1%85%E6%8B%8D%E7%85%A7%E5%8F%91%E7%BE%A4%23) `459.2K 🔥`
1. [官俊臣班成绩 全名校阵容 (Guan Junchen’s class results and full lineup of famous schools)](https://s.weibo.com/weibo?q=%23%E5%AE%98%E4%BF%8A%E8%87%A3%E7%8F%AD%E6%88%90%E7%BB%A9%20%E5%85%A8%E5%90%8D%E6%A0%A1%E9%98%B5%E5%AE%B9%23) `316.0K 🔥`
1. [高温天气如何防护](https://s.weibo.com/weibo?q=%23%E9%AB%98%E6%B8%A9%E5%A4%A9%E6%B0%94%E5%A6%82%E4%BD%95%E9%98%B2%E6%8A%A4%23) `728.7K 🔥` `-22%`
1. [对月薪三万有了直观的感受](https://s.weibo.com/weibo?q=%23%E5%AF%B9%E6%9C%88%E8%96%AA%E4%B8%89%E4%B8%87%E6%9C%89%E4%BA%86%E7%9B%B4%E8%A7%82%E7%9A%84%E6%84%9F%E5%8F%97%23) `712.6K 🔥` `-23%`
1. [腾讯317万年终奖员工因泄密被辞退 (Tencent employee with annual bonus of RMB 3.17 million was fired for leaking secrets)](https://s.weibo.com/weibo?q=%23%E8%85%BE%E8%AE%AF317%E4%B8%87%E5%B9%B4%E7%BB%88%E5%A5%96%E5%91%98%E5%B7%A5%E5%9B%A0%E6%B3%84%E5%AF%86%E8%A2%AB%E8%BE%9E%E9%80%80%23) `537.2K 🔥` `-75%`
1. [王虹获奖别再说寒门难出贵子](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%99%B9%E8%8E%B7%E5%A5%96%E5%88%AB%E5%86%8D%E8%AF%B4%E5%AF%92%E9%97%A8%E9%9A%BE%E5%87%BA%E8%B4%B5%E5%AD%90%23) `213.1K 🔥` `-81%`
1. [孙伊涵当妈](https://s.weibo.com/weibo?q=%23%E5%AD%99%E4%BC%8A%E6%B6%B5%E5%BD%93%E5%A6%88%23) `209.6K 🔥` `-46%`
1. [王虹说北大同学叫邓煜邓神](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%99%B9%E8%AF%B4%E5%8C%97%E5%A4%A7%E5%90%8C%E5%AD%A6%E5%8F%AB%E9%82%93%E7%85%9C%E9%82%93%E7%A5%9E%23) `208.9K 🔥` `-65%`
1. [苗苗自己剪了短发 (Miaomiao cut her hair short)](https://s.weibo.com/weibo?q=%23%E8%8B%97%E8%8B%97%E8%87%AA%E5%B7%B1%E5%89%AA%E4%BA%86%E7%9F%AD%E5%8F%91%23) `191.4K 🔥` `-46%`
1. [邓煜谈是否回国发展](https://s.weibo.com/weibo?q=%23%E9%82%93%E7%85%9C%E8%B0%88%E6%98%AF%E5%90%A6%E5%9B%9E%E5%9B%BD%E5%8F%91%E5%B1%95%23) `186.4K 🔥` `-48%`
1. [故宫下周一免费开放](https://s.weibo.com/weibo?q=%23%E6%95%85%E5%AE%AB%E4%B8%8B%E5%91%A8%E4%B8%80%E5%85%8D%E8%B4%B9%E5%BC%80%E6%94%BE%23) `153.1K 🔥` `-83%`

Updated at 2026-07-24 15:13:32

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
