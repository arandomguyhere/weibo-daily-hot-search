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

1. [阿森纳是冠军 (Arsenal are champions)](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A3%AE%E7%BA%B3%E6%98%AF%E5%86%A0%E5%86%9B%23) `270.9K 🔥` `NEW`
1. [俞灏明说要为小家庭未雨绸缪了](https://s.weibo.com/weibo?q=%23%E4%BF%9E%E7%81%8F%E6%98%8E%E8%AF%B4%E8%A6%81%E4%B8%BA%E5%B0%8F%E5%AE%B6%E5%BA%AD%E6%9C%AA%E9%9B%A8%E7%BB%B8%E7%BC%AA%E4%BA%86%23) `51.4K 🔥` `NEW`
1. [阿森纳](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A3%AE%E7%BA%B3%23) `810.8K 🔥` `+1193%`
1. [普京到达北京 (Putin arrives in Beijing)](https://s.weibo.com/weibo?q=%23%E6%99%AE%E4%BA%AC%E5%88%B0%E8%BE%BE%E5%8C%97%E4%BA%AC%23) `774.1K 🔥` `+267%`
1. [南宁十条护航涉企网络生态 (Nanning's Ten Guidelines to Protect the Network Ecosystem of Enterprises)](https://s.weibo.com/weibo?q=%23%E5%8D%97%E5%AE%81%E5%8D%81%E6%9D%A1%E6%8A%A4%E8%88%AA%E6%B6%89%E4%BC%81%E7%BD%91%E7%BB%9C%E7%94%9F%E6%80%81%23) `346.4K 🔥` `+183%`
1. [泰国终止60天免签 (Thailand ends 60-day visa exemption)](https://s.weibo.com/weibo?q=%23%E6%B3%B0%E5%9B%BD%E7%BB%88%E6%AD%A260%E5%A4%A9%E5%85%8D%E7%AD%BE%23) `191.3K 🔥` `+27%`
1. [家业收视率](https://s.weibo.com/weibo?q=%23%E5%AE%B6%E4%B8%9A%E6%94%B6%E8%A7%86%E7%8E%87%23) `187.7K 🔥` `+196%`
1. [构建你的AI](https://s.weibo.com/weibo?q=%23%E6%9E%84%E5%BB%BA%E4%BD%A0%E7%9A%84AI%23) `173.1K 🔥` `+184%`
1. [武汉市联合调查组发布情况通报 (The Wuhan Joint Investigation Team issued a briefing)](https://s.weibo.com/weibo?q=%23%E6%AD%A6%E6%B1%89%E5%B8%82%E8%81%94%E5%90%88%E8%B0%83%E6%9F%A5%E7%BB%84%E5%8F%91%E5%B8%83%E6%83%85%E5%86%B5%E9%80%9A%E6%8A%A5%23) `172.5K 🔥` `+111%`
1. [在不关注的领域世界有另一个样子 (The world looks different in areas you don’t pay attention to)](https://s.weibo.com/weibo?q=%23%E5%9C%A8%E4%B8%8D%E5%85%B3%E6%B3%A8%E7%9A%84%E9%A2%86%E5%9F%9F%E4%B8%96%E7%95%8C%E6%9C%89%E5%8F%A6%E4%B8%80%E4%B8%AA%E6%A0%B7%E5%AD%90%23) `161.2K 🔥` `+177%`
1. [普京抵京画面 (Putin's arrival in Beijing)](https://s.weibo.com/weibo?q=%23%E6%99%AE%E4%BA%AC%E6%8A%B5%E4%BA%AC%E7%94%BB%E9%9D%A2%23) `161.1K 🔥` `+164%`
1. [曝白玉兰提名名单](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E7%99%BD%E7%8E%89%E5%85%B0%E6%8F%90%E5%90%8D%E5%90%8D%E5%8D%95%23) `119.0K 🔥` `+145%`
1. [普京抱过的中国男孩将再见普京 (The Chinese boy Putin hugged will see Putin again)](https://s.weibo.com/weibo?q=%23%E6%99%AE%E4%BA%AC%E6%8A%B1%E8%BF%87%E7%9A%84%E4%B8%AD%E5%9B%BD%E7%94%B7%E5%AD%A9%E5%B0%86%E5%86%8D%E8%A7%81%E6%99%AE%E4%BA%AC%23) `118.7K 🔥` `+148%`
1. [玻璃](https://s.weibo.com/weibo?q=%23%E7%8E%BB%E7%92%83%23) `117.4K 🔥` `+168%`
1. [章晓梅章晓燕为婆媳关系非姐妹](https://s.weibo.com/weibo?q=%23%E7%AB%A0%E6%99%93%E6%A2%85%E7%AB%A0%E6%99%93%E7%87%95%E4%B8%BA%E5%A9%86%E5%AA%B3%E5%85%B3%E7%B3%BB%E9%9D%9E%E5%A7%90%E5%A6%B9%23) `116.4K 🔥` `+160%`
1. [杉杉来了真夫妻结婚13年了](https://s.weibo.com/weibo?q=%23%E6%9D%89%E6%9D%89%E6%9D%A5%E4%BA%86%E7%9C%9F%E5%A4%AB%E5%A6%BB%E7%BB%93%E5%A9%9A13%E5%B9%B4%E4%BA%86%23) `115.3K 🔥` `+145%`
1. [黄金直线跳水原因找到了](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%E7%9B%B4%E7%BA%BF%E8%B7%B3%E6%B0%B4%E5%8E%9F%E5%9B%A0%E6%89%BE%E5%88%B0%E4%BA%86%23) `114.1K 🔥` `+202%`
1. [离婚争娃却不养致俩孩子流落养老院 (Divorced and fought over children but failed to raise them, resulting in two children living in a nursing home)](https://s.weibo.com/weibo?q=%23%E7%A6%BB%E5%A9%9A%E4%BA%89%E5%A8%83%E5%8D%B4%E4%B8%8D%E5%85%BB%E8%87%B4%E4%BF%A9%E5%AD%A9%E5%AD%90%E6%B5%81%E8%90%BD%E5%85%BB%E8%80%81%E9%99%A2%23) `113.8K 🔥` `+166%`
1. [普京走出机舱](https://s.weibo.com/weibo?q=%23%E6%99%AE%E4%BA%AC%E8%B5%B0%E5%87%BA%E6%9C%BA%E8%88%B1%23) `112.9K 🔥` `+145%`
1. [王源衣服上手缝了三万多颗珠子](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BA%90%E8%A1%A3%E6%9C%8D%E4%B8%8A%E6%89%8B%E7%BC%9D%E4%BA%86%E4%B8%89%E4%B8%87%E5%A4%9A%E9%A2%97%E7%8F%A0%E5%AD%90%23) `94.0K 🔥` `+75%`
1. [千万别用塑料容器加热食物](https://s.weibo.com/weibo?q=%23%E5%8D%83%E4%B8%87%E5%88%AB%E7%94%A8%E5%A1%91%E6%96%99%E5%AE%B9%E5%99%A8%E5%8A%A0%E7%83%AD%E9%A3%9F%E7%89%A9%23) `82.5K 🔥` `+148%`
1. [渣打银行宣布将裁员近8000人 (Standard Chartered Bank announces it will lay off nearly 8,000 employees)](https://s.weibo.com/weibo?q=%23%E6%B8%A3%E6%89%93%E9%93%B6%E8%A1%8C%E5%AE%A3%E5%B8%83%E5%B0%86%E8%A3%81%E5%91%98%E8%BF%918000%E4%BA%BA%23) `81.2K 🔥` `+106%`
1. [5个不经意间摄入微塑料的习惯](https://s.weibo.com/weibo?q=%235%E4%B8%AA%E4%B8%8D%E7%BB%8F%E6%84%8F%E9%97%B4%E6%91%84%E5%85%A5%E5%BE%AE%E5%A1%91%E6%96%99%E7%9A%84%E4%B9%A0%E6%83%AF%23) `81.0K 🔥` `+140%`
1. [白发重新变黑的方法 (How to make gray hair black again)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E5%8F%91%E9%87%8D%E6%96%B0%E5%8F%98%E9%BB%91%E7%9A%84%E6%96%B9%E6%B3%95%23) `81.0K 🔥` `+140%`
1. [专家解释阿嬷的读音](https://s.weibo.com/weibo?q=%23%E4%B8%93%E5%AE%B6%E8%A7%A3%E9%87%8A%E9%98%BF%E5%AC%B7%E7%9A%84%E8%AF%BB%E9%9F%B3%23) `80.6K 🔥` `+137%`
1. [佳偶天成](https://s.weibo.com/weibo?q=%23%E4%BD%B3%E5%81%B6%E5%A4%A9%E6%88%90%23) `65.1K 🔥` `+54%`
1. [被马龙王楚钦薪火相传感动了](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E9%A9%AC%E9%BE%99%E7%8E%8B%E6%A5%9A%E9%92%A6%E8%96%AA%E7%81%AB%E7%9B%B8%E4%BC%A0%E6%84%9F%E5%8A%A8%E4%BA%86%23) `63.5K 🔥` `+177%`
1. [郭晶晶说爱情比门当户对更重要](https://s.weibo.com/weibo?q=%23%E9%83%AD%E6%99%B6%E6%99%B6%E8%AF%B4%E7%88%B1%E6%83%85%E6%AF%94%E9%97%A8%E5%BD%93%E6%88%B7%E5%AF%B9%E6%9B%B4%E9%87%8D%E8%A6%81%23) `57.0K 🔥` `+84%`
1. [买东西不看尺寸的后果 (The consequences of buying things without looking at the size)](https://s.weibo.com/weibo?q=%23%E4%B9%B0%E4%B8%9C%E8%A5%BF%E4%B8%8D%E7%9C%8B%E5%B0%BA%E5%AF%B8%E7%9A%84%E5%90%8E%E6%9E%9C%23) `56.6K 🔥` `+84%`
1. [女博士丈夫抢子法院裁定三日内送回](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%8D%9A%E5%A3%AB%E4%B8%88%E5%A4%AB%E6%8A%A2%E5%AD%90%E6%B3%95%E9%99%A2%E8%A3%81%E5%AE%9A%E4%B8%89%E6%97%A5%E5%86%85%E9%80%81%E5%9B%9E%23) `56.4K 🔥` `+148%`
1. [白鹿侯明昊17年拍的剧要上了 (White Deer Hou Minghao's drama filmed in 2017 is about to be released)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E4%BE%AF%E6%98%8E%E6%98%8A17%E5%B9%B4%E6%8B%8D%E7%9A%84%E5%89%A7%E8%A6%81%E4%B8%8A%E4%BA%86%23) `51.8K 🔥` `+115%`
1. [杨紫把韩东君气疯了](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E6%8A%8A%E9%9F%A9%E4%B8%9C%E5%90%9B%E6%B0%94%E7%96%AF%E4%BA%86%23) `51.8K 🔥` `+128%`
1. [你一般每天刷牙几次](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E4%B8%80%E8%88%AC%E6%AF%8F%E5%A4%A9%E5%88%B7%E7%89%99%E5%87%A0%E6%AC%A1%23) `51.8K 🔥` `+119%`
1. [特斯拉放弃印度建厂](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%96%AF%E6%8B%89%E6%94%BE%E5%BC%83%E5%8D%B0%E5%BA%A6%E5%BB%BA%E5%8E%82%23) `51.8K 🔥` `+112%`
1. [警方通报中学女生跑操后死亡 (Police report middle school girl dies after running for exercise)](https://s.weibo.com/weibo?q=%23%E8%AD%A6%E6%96%B9%E9%80%9A%E6%8A%A5%E4%B8%AD%E5%AD%A6%E5%A5%B3%E7%94%9F%E8%B7%91%E6%93%8D%E5%90%8E%E6%AD%BB%E4%BA%A1%23) `51.7K 🔥` `+128%`
1. [DeepSeek最新回应](https://s.weibo.com/weibo?q=%23DeepSeek%E6%9C%80%E6%96%B0%E5%9B%9E%E5%BA%94%23) `51.7K 🔥` `+81%`
1. [雨霖铃一二集重剪了](https://s.weibo.com/weibo?q=%23%E9%9B%A8%E9%9C%96%E9%93%83%E4%B8%80%E4%BA%8C%E9%9B%86%E9%87%8D%E5%89%AA%E4%BA%86%23) `51.7K 🔥` `+136%`
1. [赖清德暗怼特朗普后心虚了 (Lai Qingde felt guilty after secretly criticizing Trump)](https://s.weibo.com/weibo?q=%23%E8%B5%96%E6%B8%85%E5%BE%B7%E6%9A%97%E6%80%BC%E7%89%B9%E6%9C%97%E6%99%AE%E5%90%8E%E5%BF%83%E8%99%9A%E4%BA%86%23) `51.6K 🔥` `+130%`
1. [葡萄牙公布世界杯名单](https://s.weibo.com/weibo?q=%23%E8%91%A1%E8%90%84%E7%89%99%E5%85%AC%E5%B8%83%E4%B8%96%E7%95%8C%E6%9D%AF%E5%90%8D%E5%8D%95%23) `51.6K 🔥` `+111%`
1. [杨紫新剧刚开播为何现千条雷同差评 (Why did Yang Zi’s new drama get thousands of similar negative reviews when it first aired?)](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E6%96%B0%E5%89%A7%E5%88%9A%E5%BC%80%E6%92%AD%E4%B8%BA%E4%BD%95%E7%8E%B0%E5%8D%83%E6%9D%A1%E9%9B%B7%E5%90%8C%E5%B7%AE%E8%AF%84%23) `51.6K 🔥` `+135%`
1. [3岁娃被独自分到8节外静音车厢 (The 3-year-old child was assigned to a silent car 8 cars away by herself)](https://s.weibo.com/weibo?q=%233%E5%B2%81%E5%A8%83%E8%A2%AB%E7%8B%AC%E8%87%AA%E5%88%86%E5%88%B08%E8%8A%82%E5%A4%96%E9%9D%99%E9%9F%B3%E8%BD%A6%E5%8E%A2%23) `51.5K 🔥` `+135%`
1. [华东最大水果批发市场只卖云南杨梅](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%9C%E6%9C%80%E5%A4%A7%E6%B0%B4%E6%9E%9C%E6%89%B9%E5%8F%91%E5%B8%82%E5%9C%BA%E5%8F%AA%E5%8D%96%E4%BA%91%E5%8D%97%E6%9D%A8%E6%A2%85%23) `51.5K 🔥` `+135%`
1. [主角](https://s.weibo.com/weibo?q=%23%E4%B8%BB%E8%A7%92%23) `51.5K 🔥` `+71%`
1. [苏新皓新歌登顶全站第一](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E6%96%B0%E7%9A%93%E6%96%B0%E6%AD%8C%E7%99%BB%E9%A1%B6%E5%85%A8%E7%AB%99%E7%AC%AC%E4%B8%80%23) `51.4K 🔥` `+135%`
1. [爱情有烟火播出时间 (Love Has Fireworks broadcast time)](https://s.weibo.com/weibo?q=%23%E7%88%B1%E6%83%85%E6%9C%89%E7%83%9F%E7%81%AB%E6%92%AD%E5%87%BA%E6%97%B6%E9%97%B4%23) `51.4K 🔥` `+135%`
1. [种地吧 (Farm it)](https://s.weibo.com/weibo?q=%23%E7%A7%8D%E5%9C%B0%E5%90%A7%23) `51.4K 🔥` `+126%`
1. [古装男主出场被韩东君卷起来了](https://s.weibo.com/weibo?q=%23%E5%8F%A4%E8%A3%85%E7%94%B7%E4%B8%BB%E5%87%BA%E5%9C%BA%E8%A2%AB%E9%9F%A9%E4%B8%9C%E5%90%9B%E5%8D%B7%E8%B5%B7%E6%9D%A5%E4%BA%86%23) `51.3K 🔥` `+122%`
1. [杨洋释小龙展昭vs展昭 (Yang Yang Shi Xiaolong Zhan Zhao vs Zhan Zhao)](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E6%B4%8B%E9%87%8A%E5%B0%8F%E9%BE%99%E5%B1%95%E6%98%ADvs%E5%B1%95%E6%98%AD%23) `51.3K 🔥` `+134%`
1. [白玉兰](https://s.weibo.com/weibo?q=%23%E7%99%BD%E7%8E%89%E5%85%B0%23) `51.3K 🔥` `+135%`
1. [孙杨采访时突然开始点餐](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%9D%A8%E9%87%87%E8%AE%BF%E6%97%B6%E7%AA%81%E7%84%B6%E5%BC%80%E5%A7%8B%E7%82%B9%E9%A4%90%23) `51.2K 🔥` `+133%`
1. [华尔街股神做空芯片股](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E5%B0%94%E8%A1%97%E8%82%A1%E7%A5%9E%E5%81%9A%E7%A9%BA%E8%8A%AF%E7%89%87%E8%82%A1%23) `51.2K 🔥` `+134%`
1. [520送礼上淘宝更优惠](https://s.weibo.com/weibo?q=%23520%E9%80%81%E7%A4%BC%E4%B8%8A%E6%B7%98%E5%AE%9D%E6%9B%B4%E4%BC%98%E6%83%A0%23) `278.4K 🔥` `-74%`

Updated at 2026-05-20 06:49:48

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
