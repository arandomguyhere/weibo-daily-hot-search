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

1. [证监会原副主席方星海被查 (Fang Xinghai, former vice chairman of China Securities Regulatory Commission, under investigation)](https://s.weibo.com/weibo?q=%23%E8%AF%81%E7%9B%91%E4%BC%9A%E5%8E%9F%E5%89%AF%E4%B8%BB%E5%B8%AD%E6%96%B9%E6%98%9F%E6%B5%B7%E8%A2%AB%E6%9F%A5%23) `820.5K 🔥` `NEW`
1. [孙颖莎俱乐部回应伤情](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E4%BF%B1%E4%B9%90%E9%83%A8%E5%9B%9E%E5%BA%94%E4%BC%A4%E6%83%85%23) `802.4K 🔥` `NEW`
1. [歌手歌王冲刺月发大招](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B%E6%AD%8C%E7%8E%8B%E5%86%B2%E5%88%BA%E6%9C%88%E5%8F%91%E5%A4%A7%E6%8B%9B%23) `723.5K 🔥` `NEW`
1. [白鹿回应新剧短发造型](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E5%9B%9E%E5%BA%94%E6%96%B0%E5%89%A7%E7%9F%AD%E5%8F%91%E9%80%A0%E5%9E%8B%23) `574.9K 🔥` `NEW`
1. [韦东奕和王虹的课后讨论](https://s.weibo.com/weibo?q=%23%E9%9F%A6%E4%B8%9C%E5%A5%95%E5%92%8C%E7%8E%8B%E8%99%B9%E7%9A%84%E8%AF%BE%E5%90%8E%E8%AE%A8%E8%AE%BA%23) `476.6K 🔥` `NEW`
1. [杨洋成为岚图追光S首位车主](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E6%B4%8B%E6%88%90%E4%B8%BA%E5%B2%9A%E5%9B%BE%E8%BF%BD%E5%85%89S%E9%A6%96%E4%BD%8D%E8%BD%A6%E4%B8%BB%23) `418.1K 🔥` `NEW`
1. [KPL](https://s.weibo.com/weibo?q=%23KPL%23) `407.8K 🔥` `NEW`
1. [林诗栋1比2李天阳](https://s.weibo.com/weibo?q=%23%E6%9E%97%E8%AF%97%E6%A0%8B1%E6%AF%942%E6%9D%8E%E5%A4%A9%E9%98%B3%23) `310.5K 🔥` `NEW`
1. [汪苏泷好多遍你喜欢我吗](https://s.weibo.com/weibo?q=%23%E6%B1%AA%E8%8B%8F%E6%B3%B7%E5%A5%BD%E5%A4%9A%E9%81%8D%E4%BD%A0%E5%96%9C%E6%AC%A2%E6%88%91%E5%90%97%23) `309.9K 🔥` `NEW`
1. [高价网红面包店开始批量倒闭了](https://s.weibo.com/weibo?q=%23%E9%AB%98%E4%BB%B7%E7%BD%91%E7%BA%A2%E9%9D%A2%E5%8C%85%E5%BA%97%E5%BC%80%E5%A7%8B%E6%89%B9%E9%87%8F%E5%80%92%E9%97%AD%E4%BA%86%23) `309.2K 🔥` `NEW`
1. [乔欣晒瑞士旅行随拍 (Qiao Xin shares photos of her travels in Switzerland)](https://s.weibo.com/weibo?q=%23%E4%B9%94%E6%AC%A3%E6%99%92%E7%91%9E%E5%A3%AB%E6%97%85%E8%A1%8C%E9%9A%8F%E6%8B%8D%23) `308.0K 🔥` `NEW`
1. [官俊臣带娃](https://s.weibo.com/weibo?q=%23%E5%AE%98%E4%BF%8A%E8%87%A3%E5%B8%A6%E5%A8%83%23) `305.7K 🔥` `NEW`
1. [TF四代陪官俊臣查分](https://s.weibo.com/weibo?q=%23TF%E5%9B%9B%E4%BB%A3%E9%99%AA%E5%AE%98%E4%BF%8A%E8%87%A3%E6%9F%A5%E5%88%86%23) `295.9K 🔥` `NEW`
1. [总算知道冰箱贴的受众是谁了](https://s.weibo.com/weibo?q=%23%E6%80%BB%E7%AE%97%E7%9F%A5%E9%81%93%E5%86%B0%E7%AE%B1%E8%B4%B4%E7%9A%84%E5%8F%97%E4%BC%97%E6%98%AF%E8%B0%81%E4%BA%86%23) `295.5K 🔥` `NEW`
1. [长鑫上市前一天 A股为何极致缩量](https://s.weibo.com/weibo?q=%23%E9%95%BF%E9%91%AB%E4%B8%8A%E5%B8%82%E5%89%8D%E4%B8%80%E5%A4%A9%20A%E8%82%A1%E4%B8%BA%E4%BD%95%E6%9E%81%E8%87%B4%E7%BC%A9%E9%87%8F%23) `281.1K 🔥` `NEW`
1. [张凌赫王楚然回复那英](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%8E%8B%E6%A5%9A%E7%84%B6%E5%9B%9E%E5%A4%8D%E9%82%A3%E8%8B%B1%23) `248.1K 🔥` `NEW`
1. [黄璐再婚](https://s.weibo.com/weibo?q=%23%E9%BB%84%E7%92%90%E5%86%8D%E5%A9%9A%23) `244.1K 🔥` `NEW`
1. [买新房要先带小狗看看](https://s.weibo.com/weibo?q=%23%E4%B9%B0%E6%96%B0%E6%88%BF%E8%A6%81%E5%85%88%E5%B8%A6%E5%B0%8F%E7%8B%97%E7%9C%8B%E7%9C%8B%23) `232.1K 🔥` `NEW`
1. [49岁男子连环杀人案一审择期宣判](https://s.weibo.com/weibo?q=%2349%E5%B2%81%E7%94%B7%E5%AD%90%E8%BF%9E%E7%8E%AF%E6%9D%80%E4%BA%BA%E6%A1%88%E4%B8%80%E5%AE%A1%E6%8B%A9%E6%9C%9F%E5%AE%A3%E5%88%A4%23) `230.9K 🔥` `NEW`
1. [佩德里来了](https://s.weibo.com/weibo?q=%23%E4%BD%A9%E5%BE%B7%E9%87%8C%E6%9D%A5%E4%BA%86%23) `226.7K 🔥` `NEW`
1. [aespa日专宁艺卓断层领先 (aespa Japan's Ningyi Zhuo takes the lead in faults)](https://s.weibo.com/weibo?q=%23aespa%E6%97%A5%E4%B8%93%E5%AE%81%E8%89%BA%E5%8D%93%E6%96%AD%E5%B1%82%E9%A2%86%E5%85%88%23) `226.0K 🔥` `NEW`
1. [气泡水销量下滑20%](https://s.weibo.com/weibo?q=%23%E6%B0%94%E6%B3%A1%E6%B0%B4%E9%94%80%E9%87%8F%E4%B8%8B%E6%BB%9120%25%23) `210.1K 🔥` `NEW`
1. [丁禹兮压轴](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A6%B9%E5%85%AE%E5%8E%8B%E8%BD%B4%23) `209.2K 🔥` `NEW`
1. [窦靖童 好听](https://s.weibo.com/weibo?q=%23%E7%AA%A6%E9%9D%96%E7%AB%A5%20%E5%A5%BD%E5%90%AC%23) `206.0K 🔥` `NEW`
1. [中国男篮vs喀麦隆男篮](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%94%B7%E7%AF%AEvs%E5%96%80%E9%BA%A6%E9%9A%86%E7%94%B7%E7%AF%AE%23) `172.2K 🔥` `NEW`
1. [A股科技牛行情未终结](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E7%A7%91%E6%8A%80%E7%89%9B%E8%A1%8C%E6%83%85%E6%9C%AA%E7%BB%88%E7%BB%93%23) `165.8K 🔥` `NEW`
1. [宇树发布新机器狗](https://s.weibo.com/weibo?q=%23%E5%AE%87%E6%A0%91%E5%8F%91%E5%B8%83%E6%96%B0%E6%9C%BA%E5%99%A8%E7%8B%97%23) `164.7K 🔥` `NEW`
1. [卖淫案涉事派出所副所长被判无罪](https://s.weibo.com/weibo?q=%23%E5%8D%96%E6%B7%AB%E6%A1%88%E6%B6%89%E4%BA%8B%E6%B4%BE%E5%87%BA%E6%89%80%E5%89%AF%E6%89%80%E9%95%BF%E8%A2%AB%E5%88%A4%E6%97%A0%E7%BD%AA%23) `926.7K 🔥` `+67%`
1. [长江十年行](https://s.weibo.com/weibo?q=%23%E9%95%BF%E6%B1%9F%E5%8D%81%E5%B9%B4%E8%A1%8C%23) `912.5K 🔥` `+26%`
1. [四字名已经满足不了90后家长了](https://s.weibo.com/weibo?q=%23%E5%9B%9B%E5%AD%97%E5%90%8D%E5%B7%B2%E7%BB%8F%E6%BB%A1%E8%B6%B3%E4%B8%8D%E4%BA%8690%E5%90%8E%E5%AE%B6%E9%95%BF%E4%BA%86%23) `910.5K 🔥` `+87%`
1. [歌手直播 (Singer live broadcast)](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B%E7%9B%B4%E6%92%AD%23) `677.3K 🔥` `+317%`
1. [长相思超爽的结算画面](https://s.weibo.com/weibo?q=%23%E9%95%BF%E7%9B%B8%E6%80%9D%E8%B6%85%E7%88%BD%E7%9A%84%E7%BB%93%E7%AE%97%E7%94%BB%E9%9D%A2%23) `422.0K 🔥` `+214%`
1. [Angelababy13岁旧照](https://s.weibo.com/weibo?q=%23Angelababy13%E5%B2%81%E6%97%A7%E7%85%A7%23) `393.4K 🔥` `+100%`
1. [刘耀文去办美签了](https://s.weibo.com/weibo?q=%23%E5%88%98%E8%80%80%E6%96%87%E5%8E%BB%E5%8A%9E%E7%BE%8E%E7%AD%BE%E4%BA%86%23) `384.5K 🔥` `+94%`
1. [俄罗斯奶牛猫运毒被抓只能喵喵喵](https://s.weibo.com/weibo?q=%23%E4%BF%84%E7%BD%97%E6%96%AF%E5%A5%B6%E7%89%9B%E7%8C%AB%E8%BF%90%E6%AF%92%E8%A2%AB%E6%8A%93%E5%8F%AA%E8%83%BD%E5%96%B5%E5%96%B5%E5%96%B5%23) `312.6K 🔥` `+61%`
1. [DeepSeek纠结了10秒还是决定谄媚 (DeepSeek hesitated for 10 seconds and decided to flatter)](https://s.weibo.com/weibo?q=%23DeepSeek%E7%BA%A0%E7%BB%93%E4%BA%8610%E7%A7%92%E8%BF%98%E6%98%AF%E5%86%B3%E5%AE%9A%E8%B0%84%E5%AA%9A%23) `312.2K 🔥` `+79%`
1. [张柏芝这些年被路人偶遇时拍到的图片](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9F%8F%E8%8A%9D%E8%BF%99%E4%BA%9B%E5%B9%B4%E8%A2%AB%E8%B7%AF%E4%BA%BA%E5%81%B6%E9%81%87%E6%97%B6%E6%8B%8D%E5%88%B0%E7%9A%84%E5%9B%BE%E7%89%87%23) `306.8K 🔥` `+82%`
1. [原来生理性喜欢是这样的](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E7%94%9F%E7%90%86%E6%80%A7%E5%96%9C%E6%AC%A2%E6%98%AF%E8%BF%99%E6%A0%B7%E7%9A%84%23) `306.4K 🔥` `+79%`
1. [蜘蛛侠](https://s.weibo.com/weibo?q=%23%E8%9C%98%E8%9B%9B%E4%BE%A0%23) `302.5K 🔥` `+118%`
1. [逐玉红利](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%E7%BA%A2%E5%88%A9%23) `295.9K 🔥` `+73%`
1. [刘亦菲带哈哈晒太阳](https://s.weibo.com/weibo?q=%23%E5%88%98%E4%BA%A6%E8%8F%B2%E5%B8%A6%E5%93%88%E5%93%88%E6%99%92%E5%A4%AA%E9%98%B3%23) `277.3K 🔥` `+59%`
1. [小鹏召回33473辆X9汽车 (Xpeng recalls 33,473 X9 cars)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E9%B9%8F%E5%8F%AC%E5%9B%9E33473%E8%BE%86X9%E6%B1%BD%E8%BD%A6%23) `255.1K 🔥` `+87%`
1. [今年饮料卖不动了 (I can’t sell drinks this year.)](https://s.weibo.com/weibo?q=%23%E4%BB%8A%E5%B9%B4%E9%A5%AE%E6%96%99%E5%8D%96%E4%B8%8D%E5%8A%A8%E4%BA%86%23) `220.1K 🔥` `+24%`
1. [取消午休四点下班你会同意吗](https://s.weibo.com/weibo?q=%23%E5%8F%96%E6%B6%88%E5%8D%88%E4%BC%91%E5%9B%9B%E7%82%B9%E4%B8%8B%E7%8F%AD%E4%BD%A0%E4%BC%9A%E5%90%8C%E6%84%8F%E5%90%97%23) `382.9K 🔥`
1. [台风红霞](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E7%BA%A2%E9%9C%9E%23) `230.4K 🔥`
1. [菲律宾](https://s.weibo.com/weibo?q=%23%E8%8F%B2%E5%BE%8B%E5%AE%BE%23) `209.0K 🔥`
1. [李宏毅变化好大](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%AE%8F%E6%AF%85%E5%8F%98%E5%8C%96%E5%A5%BD%E5%A4%A7%23) `171.4K 🔥`
1. [男子在家裸体被邻居拍照发群](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%9C%A8%E5%AE%B6%E8%A3%B8%E4%BD%93%E8%A2%AB%E9%82%BB%E5%B1%85%E6%8B%8D%E7%85%A7%E5%8F%91%E7%BE%A4%23) `167.8K 🔥`
1. [魏如萱跟王源说不用叫姐](https://s.weibo.com/weibo?q=%23%E9%AD%8F%E5%A6%82%E8%90%B1%E8%B7%9F%E7%8E%8B%E6%BA%90%E8%AF%B4%E4%B8%8D%E7%94%A8%E5%8F%AB%E5%A7%90%23) `164.4K 🔥`
1. [微信撤回消息后可删除提示字 (Prompt words can be deleted after WeChat withdraws the message)](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E4%BF%A1%E6%92%A4%E5%9B%9E%E6%B6%88%E6%81%AF%E5%90%8E%E5%8F%AF%E5%88%A0%E9%99%A4%E6%8F%90%E7%A4%BA%E5%AD%97%23) `1.5M 🔥` `-21%`
1. [产妇羊水栓塞抢救11小时换3次血](https://s.weibo.com/weibo?q=%23%E4%BA%A7%E5%A6%87%E7%BE%8A%E6%B0%B4%E6%A0%93%E5%A1%9E%E6%8A%A2%E6%95%9111%E5%B0%8F%E6%97%B6%E6%8D%A23%E6%AC%A1%E8%A1%80%23) `296.4K 🔥` `-69%`

Updated at 2026-07-24 20:53:16

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
