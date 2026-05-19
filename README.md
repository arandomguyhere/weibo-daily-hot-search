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

1. [美国大满贯王楚钦孙颖莎混双 (American Grand Slam king Chuqin and Sun Yingsha mixed doubles)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E5%A4%A7%E6%BB%A1%E8%B4%AF%E7%8E%8B%E6%A5%9A%E9%92%A6%E5%AD%99%E9%A2%96%E8%8E%8E%E6%B7%B7%E5%8F%8C%23) `939.1K 🔥` `NEW`
1. [王源帅之酷之红之](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BA%90%E5%B8%85%E4%B9%8B%E9%85%B7%E4%B9%8B%E7%BA%A2%E4%B9%8B%23) `321.7K 🔥` `NEW`
1. [日本汽车产业遇重创](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E6%B1%BD%E8%BD%A6%E4%BA%A7%E4%B8%9A%E9%81%87%E9%87%8D%E5%88%9B%23) `223.8K 🔥` `NEW`
1. [张峻豪红包](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%B3%BB%E8%B1%AA%E7%BA%A2%E5%8C%85%23) `223.1K 🔥` `NEW`
1. [U17国足2比0澳大利亚U17](https://s.weibo.com/weibo?q=%23U17%E5%9B%BD%E8%B6%B32%E6%AF%940%E6%BE%B3%E5%A4%A7%E5%88%A9%E4%BA%9AU17%23) `221.5K 🔥` `NEW`
1. [王毅机场迎接普京](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%AF%85%E6%9C%BA%E5%9C%BA%E8%BF%8E%E6%8E%A5%E6%99%AE%E4%BA%AC%23) `211.2K 🔥` `NEW`
1. [用柳州地震营销的蛋糕店道歉](https://s.weibo.com/weibo?q=%23%E7%94%A8%E6%9F%B3%E5%B7%9E%E5%9C%B0%E9%9C%87%E8%90%A5%E9%94%80%E7%9A%84%E8%9B%8B%E7%B3%95%E5%BA%97%E9%81%93%E6%AD%89%23) `190.4K 🔥` `NEW`
1. [气鼓鼓的孙颖莎](https://s.weibo.com/weibo?q=%23%E6%B0%94%E9%BC%93%E9%BC%93%E7%9A%84%E5%AD%99%E9%A2%96%E8%8E%8E%23) `141.9K 🔥` `NEW`
1. [OpenAI创始人跳槽Anthropic](https://s.weibo.com/weibo?q=%23OpenAI%E5%88%9B%E5%A7%8B%E4%BA%BA%E8%B7%B3%E6%A7%BDAnthropic%23) `129.0K 🔥` `NEW`
1. [U17国足晋级亚洲杯决赛](https://s.weibo.com/weibo?q=%23U17%E5%9B%BD%E8%B6%B3%E6%99%8B%E7%BA%A7%E4%BA%9A%E6%B4%B2%E6%9D%AF%E5%86%B3%E8%B5%9B%23) `98.4K 🔥` `NEW`
1. [普京面带笑容同王毅交谈 (Putin talks with Wang Yi with a smile on his face)](https://s.weibo.com/weibo?q=%23%E6%99%AE%E4%BA%AC%E9%9D%A2%E5%B8%A6%E7%AC%91%E5%AE%B9%E5%90%8C%E7%8E%8B%E6%AF%85%E4%BA%A4%E8%B0%88%23) `84.3K 🔥` `NEW`
1. [伯恩茅斯1比1曼城](https://s.weibo.com/weibo?q=%23%E4%BC%AF%E6%81%A9%E8%8C%85%E6%96%AF1%E6%AF%941%E6%9B%BC%E5%9F%8E%23) `83.8K 🔥` `NEW`
1. [普京总统专车车牌3个8](https://s.weibo.com/weibo?q=%23%E6%99%AE%E4%BA%AC%E6%80%BB%E7%BB%9F%E4%B8%93%E8%BD%A6%E8%BD%A6%E7%89%8C3%E4%B8%AA8%23) `82.9K 🔥` `NEW`
1. [丁程鑫双综官宣](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A8%8B%E9%91%AB%E5%8F%8C%E7%BB%BC%E5%AE%98%E5%AE%A3%23) `74.5K 🔥` `NEW`
1. [益阳网红蕾蕾突然去世年仅32岁](https://s.weibo.com/weibo?q=%23%E7%9B%8A%E9%98%B3%E7%BD%91%E7%BA%A2%E8%95%BE%E8%95%BE%E7%AA%81%E7%84%B6%E5%8E%BB%E4%B8%96%E5%B9%B4%E4%BB%8532%E5%B2%81%23) `73.5K 🔥` `NEW`
1. [杨紫谢谢谢娜](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E8%B0%A2%E8%B0%A2%E8%B0%A2%E5%A8%9C%23) `71.8K 🔥` `NEW`
1. [普京到达北京 (Putin arrives in Beijing)](https://s.weibo.com/weibo?q=%23%E6%99%AE%E4%BA%AC%E5%88%B0%E8%BE%BE%E5%8C%97%E4%BA%AC%23) `1.7M 🔥` `+123%`
1. [阿森纳是冠军 (Arsenal are champions)](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A3%AE%E7%BA%B3%E6%98%AF%E5%86%A0%E5%86%9B%23) `1.2M 🔥` `+350%`
1. [南宁十条护航涉企网络生态 (Nanning's Ten Guidelines to Protect the Network Ecosystem of Enterprises)](https://s.weibo.com/weibo?q=%23%E5%8D%97%E5%AE%81%E5%8D%81%E6%9D%A1%E6%8A%A4%E8%88%AA%E6%B6%89%E4%BC%81%E7%BD%91%E7%BB%9C%E7%94%9F%E6%80%81%23) `1.0M 🔥` `+201%`
1. [520送礼上淘宝更优惠](https://s.weibo.com/weibo?q=%23520%E9%80%81%E7%A4%BC%E4%B8%8A%E6%B7%98%E5%AE%9D%E6%9B%B4%E4%BC%98%E6%83%A0%23) `949.5K 🔥` `+241%`
1. [普京抱过的中国男孩将再见普京 (The Chinese boy Putin hugged will see Putin again)](https://s.weibo.com/weibo?q=%23%E6%99%AE%E4%BA%AC%E6%8A%B1%E8%BF%87%E7%9A%84%E4%B8%AD%E5%9B%BD%E7%94%B7%E5%AD%A9%E5%B0%86%E5%86%8D%E8%A7%81%E6%99%AE%E4%BA%AC%23) `627.1K 🔥` `+428%`
1. [普京抵京画面 (Putin's arrival in Beijing)](https://s.weibo.com/weibo?q=%23%E6%99%AE%E4%BA%AC%E6%8A%B5%E4%BA%AC%E7%94%BB%E9%9D%A2%23) `351.2K 🔥` `+118%`
1. [家业收视率](https://s.weibo.com/weibo?q=%23%E5%AE%B6%E4%B8%9A%E6%94%B6%E8%A7%86%E7%8E%87%23) `300.4K 🔥` `+60%`
1. [特斯拉放弃印度建厂](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%96%AF%E6%8B%89%E6%94%BE%E5%BC%83%E5%8D%B0%E5%BA%A6%E5%BB%BA%E5%8E%82%23) `228.8K 🔥` `+342%`
1. [曝白玉兰提名名单](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E7%99%BD%E7%8E%89%E5%85%B0%E6%8F%90%E5%90%8D%E5%90%8D%E5%8D%95%23) `223.6K 🔥` `+88%`
1. [章晓梅章晓燕为婆媳关系非姐妹 (Zhang Xiaomei and Zhang Xiaoyan are not sisters because of the relationship between mother-in-law and daughter-in-law.)](https://s.weibo.com/weibo?q=%23%E7%AB%A0%E6%99%93%E6%A2%85%E7%AB%A0%E6%99%93%E7%87%95%E4%B8%BA%E5%A9%86%E5%AA%B3%E5%85%B3%E7%B3%BB%E9%9D%9E%E5%A7%90%E5%A6%B9%23) `221.9K 🔥` `+91%`
1. [在不关注的领域世界有另一个样子 (The world looks different in areas you don’t pay attention to)](https://s.weibo.com/weibo?q=%23%E5%9C%A8%E4%B8%8D%E5%85%B3%E6%B3%A8%E7%9A%84%E9%A2%86%E5%9F%9F%E4%B8%96%E7%95%8C%E6%9C%89%E5%8F%A6%E4%B8%80%E4%B8%AA%E6%A0%B7%E5%AD%90%23) `221.4K 🔥` `+37%`
1. [武汉市联合调查组发布情况通报 (The Wuhan Joint Investigation Team issued a briefing)](https://s.weibo.com/weibo?q=%23%E6%AD%A6%E6%B1%89%E5%B8%82%E8%81%94%E5%90%88%E8%B0%83%E6%9F%A5%E7%BB%84%E5%8F%91%E5%B8%83%E6%83%85%E5%86%B5%E9%80%9A%E6%8A%A5%23) `218.4K 🔥` `+27%`
1. [玻璃](https://s.weibo.com/weibo?q=%23%E7%8E%BB%E7%92%83%23) `215.2K 🔥` `+83%`
1. [千万别用塑料容器加热食物](https://s.weibo.com/weibo?q=%23%E5%8D%83%E4%B8%87%E5%88%AB%E7%94%A8%E5%A1%91%E6%96%99%E5%AE%B9%E5%99%A8%E5%8A%A0%E7%83%AD%E9%A3%9F%E7%89%A9%23) `212.7K 🔥` `+158%`
1. [离婚争娃却不养致俩孩子流落养老院 (Divorced and fought over children but failed to raise them, resulting in two children living in a nursing home)](https://s.weibo.com/weibo?q=%23%E7%A6%BB%E5%A9%9A%E4%BA%89%E5%A8%83%E5%8D%B4%E4%B8%8D%E5%85%BB%E8%87%B4%E4%BF%A9%E5%AD%A9%E5%AD%90%E6%B5%81%E8%90%BD%E5%85%BB%E8%80%81%E9%99%A2%23) `209.7K 🔥` `+84%`
1. [5个不经意间摄入微塑料的习惯](https://s.weibo.com/weibo?q=%235%E4%B8%AA%E4%B8%8D%E7%BB%8F%E6%84%8F%E9%97%B4%E6%91%84%E5%85%A5%E5%BE%AE%E5%A1%91%E6%96%99%E7%9A%84%E4%B9%A0%E6%83%AF%23) `197.0K 🔥` `+143%`
1. [杉杉来了真夫妻结婚13年了](https://s.weibo.com/weibo?q=%23%E6%9D%89%E6%9D%89%E6%9D%A5%E4%BA%86%E7%9C%9F%E5%A4%AB%E5%A6%BB%E7%BB%93%E5%A9%9A13%E5%B9%B4%E4%BA%86%23) `164.1K 🔥` `+42%`
1. [黄金直线跳水原因找到了](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%E7%9B%B4%E7%BA%BF%E8%B7%B3%E6%B0%B4%E5%8E%9F%E5%9B%A0%E6%89%BE%E5%88%B0%E4%BA%86%23) `163.6K 🔥` `+43%`
1. [普京走出机舱](https://s.weibo.com/weibo?q=%23%E6%99%AE%E4%BA%AC%E8%B5%B0%E5%87%BA%E6%9C%BA%E8%88%B1%23) `150.5K 🔥` `+33%`
1. [王源衣服上手缝了三万多颗珠子](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BA%90%E8%A1%A3%E6%9C%8D%E4%B8%8A%E6%89%8B%E7%BC%9D%E4%BA%86%E4%B8%89%E4%B8%87%E5%A4%9A%E9%A2%97%E7%8F%A0%E5%AD%90%23) `129.8K 🔥` `+38%`
1. [白发重新变黑的方法 (How to make gray hair black again)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E5%8F%91%E9%87%8D%E6%96%B0%E5%8F%98%E9%BB%91%E7%9A%84%E6%96%B9%E6%B3%95%23) `123.5K 🔥` `+53%`
1. [渣打银行宣布将裁员近8000人 (Standard Chartered Bank announces it will lay off nearly 8,000 employees)](https://s.weibo.com/weibo?q=%23%E6%B8%A3%E6%89%93%E9%93%B6%E8%A1%8C%E5%AE%A3%E5%B8%83%E5%B0%86%E8%A3%81%E5%91%98%E8%BF%918000%E4%BA%BA%23) `117.1K 🔥` `+44%`
1. [买东西不看尺寸的后果 (The consequences of buying things without looking at the size)](https://s.weibo.com/weibo?q=%23%E4%B9%B0%E4%B8%9C%E8%A5%BF%E4%B8%8D%E7%9C%8B%E5%B0%BA%E5%AF%B8%E7%9A%84%E5%90%8E%E6%9E%9C%23) `116.3K 🔥` `+105%`
1. [专家解释阿嬷的读音](https://s.weibo.com/weibo?q=%23%E4%B8%93%E5%AE%B6%E8%A7%A3%E9%87%8A%E9%98%BF%E5%AC%B7%E7%9A%84%E8%AF%BB%E9%9F%B3%23) `102.0K 🔥` `+26%`
1. [佳偶天成](https://s.weibo.com/weibo?q=%23%E4%BD%B3%E5%81%B6%E5%A4%A9%E6%88%90%23) `90.6K 🔥` `+39%`
1. [女博士丈夫抢子法院裁定三日内送回 (The court ordered that the husband of a female doctor snatched the child and return it within three days.)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%8D%9A%E5%A3%AB%E4%B8%88%E5%A4%AB%E6%8A%A2%E5%AD%90%E6%B3%95%E9%99%A2%E8%A3%81%E5%AE%9A%E4%B8%89%E6%97%A5%E5%86%85%E9%80%81%E5%9B%9E%23) `86.1K 🔥` `+53%`
1. [雨霖铃一二集重剪了](https://s.weibo.com/weibo?q=%23%E9%9B%A8%E9%9C%96%E9%93%83%E4%B8%80%E4%BA%8C%E9%9B%86%E9%87%8D%E5%89%AA%E4%BA%86%23) `81.7K 🔥` `+58%`
1. [杨紫把韩东君气疯了](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E6%8A%8A%E9%9F%A9%E4%B8%9C%E5%90%9B%E6%B0%94%E7%96%AF%E4%BA%86%23) `79.9K 🔥` `+54%`
1. [郭晶晶说爱情比门当户对更重要](https://s.weibo.com/weibo?q=%23%E9%83%AD%E6%99%B6%E6%99%B6%E8%AF%B4%E7%88%B1%E6%83%85%E6%AF%94%E9%97%A8%E5%BD%93%E6%88%B7%E5%AF%B9%E6%9B%B4%E9%87%8D%E8%A6%81%23) `74.6K 🔥` `+31%`
1. [赖清德暗怼特朗普后心虚了 (Lai Qingde felt guilty after secretly criticizing Trump)](https://s.weibo.com/weibo?q=%23%E8%B5%96%E6%B8%85%E5%BE%B7%E6%9A%97%E6%80%BC%E7%89%B9%E6%9C%97%E6%99%AE%E5%90%8E%E5%BF%83%E8%99%9A%E4%BA%86%23) `72.0K 🔥` `+39%`
1. [白鹿侯明昊17年拍的剧要上了 (White Deer Hou Minghao's drama filmed in 2017 is about to be released)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E4%BE%AF%E6%98%8E%E6%98%8A17%E5%B9%B4%E6%8B%8D%E7%9A%84%E5%89%A7%E8%A6%81%E4%B8%8A%E4%BA%86%23) `67.4K 🔥` `+30%`
1. [DeepSeek最新回应](https://s.weibo.com/weibo?q=%23DeepSeek%E6%9C%80%E6%96%B0%E5%9B%9E%E5%BA%94%23) `66.9K 🔥` `+29%`
1. [泰国终止60天免签 (Thailand ends 60-day visa exemption)](https://s.weibo.com/weibo?q=%23%E6%B3%B0%E5%9B%BD%E7%BB%88%E6%AD%A260%E5%A4%A9%E5%85%8D%E7%AD%BE%23) `222.9K 🔥`
1. [24岁短剧男演员去世 (Short drama actor dies at 24)](https://s.weibo.com/weibo?q=%2324%E5%B2%81%E7%9F%AD%E5%89%A7%E7%94%B7%E6%BC%94%E5%91%98%E5%8E%BB%E4%B8%96%23) `222.2K 🔥`
1. [林俊杰晒和七七合照](https://s.weibo.com/weibo?q=%23%E6%9E%97%E4%BF%8A%E6%9D%B0%E6%99%92%E5%92%8C%E4%B8%83%E4%B8%83%E5%90%88%E7%85%A7%23) `210.9K 🔥` `-27%`
1. [七七的毕业作品 (Qiqi’s graduation work)](https://s.weibo.com/weibo?q=%23%E4%B8%83%E4%B8%83%E7%9A%84%E6%AF%95%E4%B8%9A%E4%BD%9C%E5%93%81%23) `203.2K 🔥` `-29%`

Updated at 2026-05-20 07:50:13

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
