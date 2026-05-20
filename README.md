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

1. [英伟达财报 (Nvidia financial report)](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E4%BC%9F%E8%BE%BE%E8%B4%A2%E6%8A%A5%23) `951.3K 🔥` `NEW`
1. [天猫618补贴价更低](https://s.weibo.com/weibo?q=%23%E5%A4%A9%E7%8C%AB618%E8%A1%A5%E8%B4%B4%E4%BB%B7%E6%9B%B4%E4%BD%8E%23) `694.6K 🔥` `NEW`
1. [印度选美冠军不堪高额嫁妆上吊身亡](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%BA%A6%E9%80%89%E7%BE%8E%E5%86%A0%E5%86%9B%E4%B8%8D%E5%A0%AA%E9%AB%98%E9%A2%9D%E5%AB%81%E5%A6%86%E4%B8%8A%E5%90%8A%E8%BA%AB%E4%BA%A1%23) `673.5K 🔥` `NEW`
1. [粤超球员将踢亚洲杯决赛](https://s.weibo.com/weibo?q=%23%E7%B2%A4%E8%B6%85%E7%90%83%E5%91%98%E5%B0%86%E8%B8%A2%E4%BA%9A%E6%B4%B2%E6%9D%AF%E5%86%B3%E8%B5%9B%23) `260.2K 🔥` `NEW`
1. [布伦森回应G1逆转骑士](https://s.weibo.com/weibo?q=%23%E5%B8%83%E4%BC%A6%E6%A3%AE%E5%9B%9E%E5%BA%94G1%E9%80%86%E8%BD%AC%E9%AA%91%E5%A3%AB%23) `256.9K 🔥` `NEW`
1. [碳水脸是对碳水的污名化](https://s.weibo.com/weibo?q=%23%E7%A2%B3%E6%B0%B4%E8%84%B8%E6%98%AF%E5%AF%B9%E7%A2%B3%E6%B0%B4%E7%9A%84%E6%B1%A1%E5%90%8D%E5%8C%96%23) `255.6K 🔥` `NEW`
1. [穆祉丞戛纳G社生图](https://s.weibo.com/weibo?q=%23%E7%A9%86%E7%A5%89%E4%B8%9E%E6%88%9B%E7%BA%B3G%E7%A4%BE%E7%94%9F%E5%9B%BE%23) `239.7K 🔥` `NEW`
1. [前女友直播锤李嘉凯](https://s.weibo.com/weibo?q=%23%E5%89%8D%E5%A5%B3%E5%8F%8B%E7%9B%B4%E6%92%AD%E9%94%A4%E6%9D%8E%E5%98%89%E5%87%AF%23) `207.0K 🔥` `NEW`
1. [黄景瑜徐若晗拥吻路透](https://s.weibo.com/weibo?q=%23%E9%BB%84%E6%99%AF%E7%91%9C%E5%BE%90%E8%8B%A5%E6%99%97%E6%8B%A5%E5%90%BB%E8%B7%AF%E9%80%8F%23) `205.9K 🔥` `NEW`
1. [建议所有成年人都查一次脂蛋白A](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E6%89%80%E6%9C%89%E6%88%90%E5%B9%B4%E4%BA%BA%E9%83%BD%E6%9F%A5%E4%B8%80%E6%AC%A1%E8%84%82%E8%9B%8B%E7%99%BDA%23) `203.8K 🔥` `NEW`
1. [CBA](https://s.weibo.com/weibo?q=%23CBA%23) `138.6K 🔥` `NEW`
1. [T1战胜KRX](https://s.weibo.com/weibo?q=%23T1%E6%88%98%E8%83%9CKRX%23) `134.0K 🔥` `NEW`
1. [英伟达Q1净利润583亿美元](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E4%BC%9F%E8%BE%BEQ1%E5%87%80%E5%88%A9%E6%B6%A6583%E4%BA%BF%E7%BE%8E%E5%85%83%23) `114.4K 🔥` `NEW`
1. [黄金白银拉升了](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%E7%99%BD%E9%93%B6%E6%8B%89%E5%8D%87%E4%BA%86%23) `106.8K 🔥` `NEW`
1. [ARM股价大涨16%创新高](https://s.weibo.com/weibo?q=%23ARM%E8%82%A1%E4%BB%B7%E5%A4%A7%E6%B6%A816%25%E5%88%9B%E6%96%B0%E9%AB%98%23) `81.6K 🔥` `NEW`
1. [女子极端饮食月瘦20斤重度脂肪肝](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%9E%81%E7%AB%AF%E9%A5%AE%E9%A3%9F%E6%9C%88%E7%98%A620%E6%96%A4%E9%87%8D%E5%BA%A6%E8%84%82%E8%82%AA%E8%82%9D%23) `78.7K 🔥` `NEW`
1. [小学网购45把伞用后全损退回 (Primary school purchased 45 umbrellas online and returned them all damaged after use)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%AD%A6%E7%BD%91%E8%B4%AD45%E6%8A%8A%E4%BC%9E%E7%94%A8%E5%90%8E%E5%85%A8%E6%8D%9F%E9%80%80%E5%9B%9E%23) `707.2K 🔥` `+263%`
1. [中俄元首会谈现场都有谁](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E4%BF%84%E5%85%83%E9%A6%96%E4%BC%9A%E8%B0%88%E7%8E%B0%E5%9C%BA%E9%83%BD%E6%9C%89%E8%B0%81%23) `696.2K 🔥` `+244%`
1. [为什么520朋友圈秀恩爱的变少了](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88520%E6%9C%8B%E5%8F%8B%E5%9C%88%E7%A7%80%E6%81%A9%E7%88%B1%E7%9A%84%E5%8F%98%E5%B0%91%E4%BA%86%23) `694.6K 🔥` `+90%`
1. [中俄两国联合声明](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E4%BF%84%E4%B8%A4%E5%9B%BD%E8%81%94%E5%90%88%E5%A3%B0%E6%98%8E%23) `692.4K 🔥` `+160%`
1. [医生辟谣喝醋喝红酒能降血压](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E7%94%9F%E8%BE%9F%E8%B0%A3%E5%96%9D%E9%86%8B%E5%96%9D%E7%BA%A2%E9%85%92%E8%83%BD%E9%99%8D%E8%A1%80%E5%8E%8B%23) `622.8K 🔥` `+321%`
1. [抖音禁止录播伪装为直播 (Douyin prohibits recording and broadcasting disguised as live broadcasts)](https://s.weibo.com/weibo?q=%23%E6%8A%96%E9%9F%B3%E7%A6%81%E6%AD%A2%E5%BD%95%E6%92%AD%E4%BC%AA%E8%A3%85%E4%B8%BA%E7%9B%B4%E6%92%AD%23) `524.3K 🔥` `+175%`
1. [淑柔扮演者回应为何不进演艺圈](https://s.weibo.com/weibo?q=%23%E6%B7%91%E6%9F%94%E6%89%AE%E6%BC%94%E8%80%85%E5%9B%9E%E5%BA%94%E4%B8%BA%E4%BD%95%E4%B8%8D%E8%BF%9B%E6%BC%94%E8%89%BA%E5%9C%88%23) `260.6K 🔥` `+274%`
1. [杨梅滞留树上70岁奶奶崩溃哭 (70-year-old grandma breaks down and cries after bayberry stuck on tree)](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E6%A2%85%E6%BB%9E%E7%95%99%E6%A0%91%E4%B8%8A70%E5%B2%81%E5%A5%B6%E5%A5%B6%E5%B4%A9%E6%BA%83%E5%93%AD%23) `254.4K 🔥` `+304%`
1. [普京结束访华 (Putin ends visit to China)](https://s.weibo.com/weibo?q=%23%E6%99%AE%E4%BA%AC%E7%BB%93%E6%9D%9F%E8%AE%BF%E5%8D%8E%23) `252.3K 🔥` `+61%`
1. [律师谈女教师劝架被学生划伤眼球 (Lawyer talks about female teacher’s eyeball being scratched by student after trying to break up a fight)](https://s.weibo.com/weibo?q=%23%E5%BE%8B%E5%B8%88%E8%B0%88%E5%A5%B3%E6%95%99%E5%B8%88%E5%8A%9D%E6%9E%B6%E8%A2%AB%E5%AD%A6%E7%94%9F%E5%88%92%E4%BC%A4%E7%9C%BC%E7%90%83%23) `250.6K 🔥` `+292%`
1. [颜颜回复凯凯](https://s.weibo.com/weibo?q=%23%E9%A2%9C%E9%A2%9C%E5%9B%9E%E5%A4%8D%E5%87%AF%E5%87%AF%23) `248.8K 🔥` `+290%`
1. [倒过来看才看明白那些云是石头](https://s.weibo.com/weibo?q=%23%E5%80%92%E8%BF%87%E6%9D%A5%E7%9C%8B%E6%89%8D%E7%9C%8B%E6%98%8E%E7%99%BD%E9%82%A3%E4%BA%9B%E4%BA%91%E6%98%AF%E7%9F%B3%E5%A4%B4%23) `240.7K 🔥` `+408%`
1. [讨好型人格建议反复阅读 (Please read it again and again)](https://s.weibo.com/weibo?q=%23%E8%AE%A8%E5%A5%BD%E5%9E%8B%E4%BA%BA%E6%A0%BC%E5%BB%BA%E8%AE%AE%E5%8F%8D%E5%A4%8D%E9%98%85%E8%AF%BB%23) `232.7K 🔥` `+78%`
1. [有种痛苦叫邻居买大车](https://s.weibo.com/weibo?q=%23%E6%9C%89%E7%A7%8D%E7%97%9B%E8%8B%A6%E5%8F%AB%E9%82%BB%E5%B1%85%E4%B9%B0%E5%A4%A7%E8%BD%A6%23) `207.2K 🔥` `+230%`
1. [刘浩存穆桂英剧照](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%B5%A9%E5%AD%98%E7%A9%86%E6%A1%82%E8%8B%B1%E5%89%A7%E7%85%A7%23) `202.2K 🔥` `+215%`
1. [福建漳州泡药杨梅事件5人被刑拘 (Five people were detained in Zhangzhou, Fujian Province for brewing bayberry medicine incident)](https://s.weibo.com/weibo?q=%23%E7%A6%8F%E5%BB%BA%E6%BC%B3%E5%B7%9E%E6%B3%A1%E8%8D%AF%E6%9D%A8%E6%A2%85%E4%BA%8B%E4%BB%B65%E4%BA%BA%E8%A2%AB%E5%88%91%E6%8B%98%23) `174.1K 🔥` `+365%`
1. [尚公主 (Princess Shang)](https://s.weibo.com/weibo?q=%23%E5%B0%9A%E5%85%AC%E4%B8%BB%23) `172.0K 🔥` `+45%`
1. [陈赫在综艺发火了 (Chen He got angry in a variety show)](https://s.weibo.com/weibo?q=%23%E9%99%88%E8%B5%AB%E5%9C%A8%E7%BB%BC%E8%89%BA%E5%8F%91%E7%81%AB%E4%BA%86%23) `147.0K 🔥` `+131%`
1. [孙浩演技 最佳男配](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%B5%A9%E6%BC%94%E6%8A%80%20%E6%9C%80%E4%BD%B3%E7%94%B7%E9%85%8D%23) `131.4K 🔥` `+263%`
1. [奔驰车主2次调整故意碾压猫咪](https://s.weibo.com/weibo?q=%23%E5%A5%94%E9%A9%B0%E8%BD%A6%E4%B8%BB2%E6%AC%A1%E8%B0%83%E6%95%B4%E6%95%85%E6%84%8F%E7%A2%BE%E5%8E%8B%E7%8C%AB%E5%92%AA%23) `130.3K 🔥` `+109%`
1. [被普京抱过的男孩回应年龄像50多岁](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E6%99%AE%E4%BA%AC%E6%8A%B1%E8%BF%87%E7%9A%84%E7%94%B7%E5%AD%A9%E5%9B%9E%E5%BA%94%E5%B9%B4%E9%BE%84%E5%83%8F50%E5%A4%9A%E5%B2%81%23) `114.0K 🔥` `+243%`
1. [翻倍牛股一字涨停 (Bull stocks double their daily limit)](https://s.weibo.com/weibo?q=%23%E7%BF%BB%E5%80%8D%E7%89%9B%E8%82%A1%E4%B8%80%E5%AD%97%E6%B6%A8%E5%81%9C%23) `105.5K 🔥` `+117%`
1. [女子刮大腿疏通胆经像刨木头](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%88%AE%E5%A4%A7%E8%85%BF%E7%96%8F%E9%80%9A%E8%83%86%E7%BB%8F%E5%83%8F%E5%88%A8%E6%9C%A8%E5%A4%B4%23) `105.2K 🔥` `+116%`
1. [抖音封了打焦赞直播间 (Douyin blocked Dajiaozan live broadcast room)](https://s.weibo.com/weibo?q=%23%E6%8A%96%E9%9F%B3%E5%B0%81%E4%BA%86%E6%89%93%E7%84%A6%E8%B5%9E%E7%9B%B4%E6%92%AD%E9%97%B4%23) `95.4K 🔥` `+122%`
1. [普京离京对送行人群微笑点头致意](https://s.weibo.com/weibo?q=%23%E6%99%AE%E4%BA%AC%E7%A6%BB%E4%BA%AC%E5%AF%B9%E9%80%81%E8%A1%8C%E4%BA%BA%E7%BE%A4%E5%BE%AE%E7%AC%91%E7%82%B9%E5%A4%B4%E8%87%B4%E6%84%8F%23) `94.3K 🔥` `+185%`
1. [对人是真皮的有了实感](https://s.weibo.com/weibo?q=%23%E5%AF%B9%E4%BA%BA%E6%98%AF%E7%9C%9F%E7%9A%AE%E7%9A%84%E6%9C%89%E4%BA%86%E5%AE%9E%E6%84%9F%23) `90.1K 🔥` `+76%`
1. [深圳暴雨 (Heavy rain in Shenzhen)](https://s.weibo.com/weibo?q=%23%E6%B7%B1%E5%9C%B3%E6%9A%B4%E9%9B%A8%23) `85.8K 🔥` `+182%`
1. [给阿嬷的情书](https://s.weibo.com/weibo?q=%23%E7%BB%99%E9%98%BF%E5%AC%B7%E7%9A%84%E6%83%85%E4%B9%A6%23) `85.4K 🔥` `+112%`
1. [刘宇宁说我的身材很曼妙](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AE%87%E5%AE%81%E8%AF%B4%E6%88%91%E7%9A%84%E8%BA%AB%E6%9D%90%E5%BE%88%E6%9B%BC%E5%A6%99%23) `84.0K 🔥` `+137%`
1. [杨梅果农的生路不该靠消费者的同情](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E6%A2%85%E6%9E%9C%E5%86%9C%E7%9A%84%E7%94%9F%E8%B7%AF%E4%B8%8D%E8%AF%A5%E9%9D%A0%E6%B6%88%E8%B4%B9%E8%80%85%E7%9A%84%E5%90%8C%E6%83%85%23) `83.7K 🔥` `+144%`
1. [醉酒女钻进锅炉房重度烧伤后中毒身亡 (Drunk woman got into the boiler room and was severely burned and died of poisoning)](https://s.weibo.com/weibo?q=%23%E9%86%89%E9%85%92%E5%A5%B3%E9%92%BB%E8%BF%9B%E9%94%85%E7%82%89%E6%88%BF%E9%87%8D%E5%BA%A6%E7%83%A7%E4%BC%A4%E5%90%8E%E4%B8%AD%E6%AF%92%E8%BA%AB%E4%BA%A1%23) `71.9K 🔥` `+75%`
1. [小鹏GX价格炸裂 (Xpeng GX price explodes)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E9%B9%8FGX%E4%BB%B7%E6%A0%BC%E7%82%B8%E8%A3%82%23) `70.1K 🔥` `+155%`
1. [凯凯回应](https://s.weibo.com/weibo?q=%23%E5%87%AF%E5%87%AF%E5%9B%9E%E5%BA%94%23) `203.4K 🔥`
1. [谢依霖谈丈夫重病与事业暂停](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E4%BE%9D%E9%9C%96%E8%B0%88%E4%B8%88%E5%A4%AB%E9%87%8D%E7%97%85%E4%B8%8E%E4%BA%8B%E4%B8%9A%E6%9A%82%E5%81%9C%23) `218.3K 🔥` `-46%`
1. [宋威龙手动打码 (Song Weilong manually coded)](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E5%A8%81%E9%BE%99%E6%89%8B%E5%8A%A8%E6%89%93%E7%A0%81%23) `70.1K 🔥` `-83%`

Updated at 2026-05-21 07:40:42

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
