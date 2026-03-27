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

1. [黄灿灿浪姐连麦杨紫 (Huang Cancanlang's sister Lianmai Yangzi)](https://s.weibo.com/weibo?q=%23%E9%BB%84%E7%81%BF%E7%81%BF%E6%B5%AA%E5%A7%90%E8%BF%9E%E9%BA%A6%E6%9D%A8%E7%B4%AB%23) `231.8K 🔥` `NEW`
1. [今日辟谣](https://s.weibo.com/weibo?q=%23%E4%BB%8A%E6%97%A5%E8%BE%9F%E8%B0%A3%23) `231.6K 🔥` `NEW`
1. [伊朗革命卫队称霍尔木兹海峡关闭](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E9%9D%A9%E5%91%BD%E5%8D%AB%E9%98%9F%E7%A7%B0%E9%9C%8D%E5%B0%94%E6%9C%A8%E5%85%B9%E6%B5%B7%E5%B3%A1%E5%85%B3%E9%97%AD%23) `228.7K 🔥` `NEW`
1. [中方回应美称中企向伊军提供芯片](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%96%B9%E5%9B%9E%E5%BA%94%E7%BE%8E%E7%A7%B0%E4%B8%AD%E4%BC%81%E5%90%91%E4%BC%8A%E5%86%9B%E6%8F%90%E4%BE%9B%E8%8A%AF%E7%89%87%23) `208.4K 🔥` `NEW`
1. [法院通报副院长与原告同吃同拜佛](https://s.weibo.com/weibo?q=%23%E6%B3%95%E9%99%A2%E9%80%9A%E6%8A%A5%E5%89%AF%E9%99%A2%E9%95%BF%E4%B8%8E%E5%8E%9F%E5%91%8A%E5%90%8C%E5%90%83%E5%90%8C%E6%8B%9C%E4%BD%9B%23) `201.1K 🔥` `NEW`
1. [韩国开始抢购垃圾袋了](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E5%BC%80%E5%A7%8B%E6%8A%A2%E8%B4%AD%E5%9E%83%E5%9C%BE%E8%A2%8B%E4%BA%86%23) `197.7K 🔥` `NEW`
1. [深蓝董事长拆解行驶50万公里电驱](https://s.weibo.com/weibo?q=%23%E6%B7%B1%E8%93%9D%E8%91%A3%E4%BA%8B%E9%95%BF%E6%8B%86%E8%A7%A3%E8%A1%8C%E9%A9%B650%E4%B8%87%E5%85%AC%E9%87%8C%E7%94%B5%E9%A9%B1%23) `196.2K 🔥` `NEW`
1. [起底日本撞人族](https://s.weibo.com/weibo?q=%23%E8%B5%B7%E5%BA%95%E6%97%A5%E6%9C%AC%E6%92%9E%E4%BA%BA%E6%97%8F%23) `182.6K 🔥` `NEW`
1. [疑似商K工作人员回应](https://s.weibo.com/weibo?q=%23%E7%96%91%E4%BC%BC%E5%95%86K%E5%B7%A5%E4%BD%9C%E4%BA%BA%E5%91%98%E5%9B%9E%E5%BA%94%23) `175.3K 🔥` `NEW`
1. [王橹杰换头像](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%E6%8D%A2%E5%A4%B4%E5%83%8F%23) `161.1K 🔥` `NEW`
1. [尚界Z7随行美容舱 (Shangjie Z7 accompanying beauty cabin)](https://s.weibo.com/weibo?q=%23%E5%B0%9A%E7%95%8CZ7%E9%9A%8F%E8%A1%8C%E7%BE%8E%E5%AE%B9%E8%88%B1%23) `136.5K 🔥` `NEW`
1. [虞书欣工作室出图](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E5%B7%A5%E4%BD%9C%E5%AE%A4%E5%87%BA%E5%9B%BE%23) `135.5K 🔥` `NEW`
1. [王源新纹身](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BA%90%E6%96%B0%E7%BA%B9%E8%BA%AB%23) `122.1K 🔥` `NEW`
1. [陈思罕新头像](https://s.weibo.com/weibo?q=%23%E9%99%88%E6%80%9D%E7%BD%95%E6%96%B0%E5%A4%B4%E5%83%8F%23) `104.2K 🔥` `NEW`
1. [WART艺术晚高峰](https://s.weibo.com/weibo?q=%23WART%E8%89%BA%E6%9C%AF%E6%99%9A%E9%AB%98%E5%B3%B0%23) `102.5K 🔥` `NEW`
1. [UNIQ组合已解散](https://s.weibo.com/weibo?q=%23UNIQ%E7%BB%84%E5%90%88%E5%B7%B2%E8%A7%A3%E6%95%A3%23) `102.3K 🔥` `NEW`
1. [小女孩跪诊室门口为大出血妈妈加油](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%A5%B3%E5%AD%A9%E8%B7%AA%E8%AF%8A%E5%AE%A4%E9%97%A8%E5%8F%A3%E4%B8%BA%E5%A4%A7%E5%87%BA%E8%A1%80%E5%A6%88%E5%A6%88%E5%8A%A0%E6%B2%B9%23) `99.9K 🔥` `NEW`
1. [刘昊然方发律师声明](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%98%8A%E7%84%B6%E6%96%B9%E5%8F%91%E5%BE%8B%E5%B8%88%E5%A3%B0%E6%98%8E%23) `97.5K 🔥` `NEW`
1. [TES欢迎JackeyLove归来](https://s.weibo.com/weibo?q=%23TES%E6%AC%A2%E8%BF%8EJackeyLove%E5%BD%92%E6%9D%A5%23) `97.4K 🔥` `NEW`
1. [大部分人觉得旅游累的原因](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E9%83%A8%E5%88%86%E4%BA%BA%E8%A7%89%E5%BE%97%E6%97%85%E6%B8%B8%E7%B4%AF%E7%9A%84%E5%8E%9F%E5%9B%A0%23) `96.1K 🔥` `NEW`
1. [大头博士直播 (Dr. Big Head live broadcast)](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%A4%B4%E5%8D%9A%E5%A3%AB%E7%9B%B4%E6%92%AD%23) `91.5K 🔥` `NEW`
1. [一60多页的县级规划有用的就3页](https://s.weibo.com/weibo?q=%23%E4%B8%8060%E5%A4%9A%E9%A1%B5%E7%9A%84%E5%8E%BF%E7%BA%A7%E8%A7%84%E5%88%92%E6%9C%89%E7%94%A8%E7%9A%84%E5%B0%B13%E9%A1%B5%23) `89.4K 🔥` `NEW`
1. [职称评审将迎重大调整](https://s.weibo.com/weibo?q=%23%E8%81%8C%E7%A7%B0%E8%AF%84%E5%AE%A1%E5%B0%86%E8%BF%8E%E9%87%8D%E5%A4%A7%E8%B0%83%E6%95%B4%23) `1.0M 🔥` `+324%`
1. [国足赢了世界杯球队](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E8%B6%B3%E8%B5%A2%E4%BA%86%E4%B8%96%E7%95%8C%E6%9D%AF%E7%90%83%E9%98%9F%23) `774.9K 🔥` `+317%`
1. [郭永航被查](https://s.weibo.com/weibo?q=%23%E9%83%AD%E6%B0%B8%E8%88%AA%E8%A2%AB%E6%9F%A5%23) `243.9K 🔥` `+92%`
1. [苏轼 吃beef (Su Shi eats beef)](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E8%BD%BC%20%E5%90%83beef%23) `231.5K 🔥` `+192%`
1. [乘风2026官宣阵容 (Chengfeng 2026 official lineup announced)](https://s.weibo.com/weibo?q=%23%E4%B9%98%E9%A3%8E2026%E5%AE%98%E5%AE%A3%E9%98%B5%E5%AE%B9%23) `226.2K 🔥` `+37%`
1. [老师捏裂幼儿耳朵被采取强制措施](https://s.weibo.com/weibo?q=%23%E8%80%81%E5%B8%88%E6%8D%8F%E8%A3%82%E5%B9%BC%E5%84%BF%E8%80%B3%E6%9C%B5%E8%A2%AB%E9%87%87%E5%8F%96%E5%BC%BA%E5%88%B6%E6%8E%AA%E6%96%BD%23) `195.9K 🔥` `+41%`
1. [王一博微博改名](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E5%BE%AE%E5%8D%9A%E6%94%B9%E5%90%8D%23) `180.5K 🔥` `+42%`
1. [女子手指截肢放肚里养1个月变小肉球](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%89%8B%E6%8C%87%E6%88%AA%E8%82%A2%E6%94%BE%E8%82%9A%E9%87%8C%E5%85%BB1%E4%B8%AA%E6%9C%88%E5%8F%98%E5%B0%8F%E8%82%89%E7%90%83%23) `173.4K 🔥` `+36%`
1. [刘昊然 商K](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%98%8A%E7%84%B6%20%E5%95%86K%23) `168.3K 🔥` `+32%`
1. [奉劝大家还是尽量多存钱](https://s.weibo.com/weibo?q=%23%E5%A5%89%E5%8A%9D%E5%A4%A7%E5%AE%B6%E8%BF%98%E6%98%AF%E5%B0%BD%E9%87%8F%E5%A4%9A%E5%AD%98%E9%92%B1%23) `152.2K 🔥` `+36%`
1. [海南自贸港封关运作100天 (Hainan Free Trade Port closed for 100 days)](https://s.weibo.com/weibo?q=%23%E6%B5%B7%E5%8D%97%E8%87%AA%E8%B4%B8%E6%B8%AF%E5%B0%81%E5%85%B3%E8%BF%90%E4%BD%9C100%E5%A4%A9%23) `617.7K 🔥`
1. [中国博士后遭美方约谈盘问后自杀 (Chinese postdoctoral fellow committed suicide after being interviewed and questioned by the US)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%8D%9A%E5%A3%AB%E5%90%8E%E9%81%AD%E7%BE%8E%E6%96%B9%E7%BA%A6%E8%B0%88%E7%9B%98%E9%97%AE%E5%90%8E%E8%87%AA%E6%9D%80%23) `277.6K 🔥`
1. [乘风2026](https://s.weibo.com/weibo?q=%23%E4%B9%98%E9%A3%8E2026%23) `230.0K 🔥`
1. [王一博乐华续约](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E4%B9%90%E5%8D%8E%E7%BB%AD%E7%BA%A6%23) `135.9K 🔥`
1. [熬夜的人要多吃一类食物](https://s.weibo.com/weibo?q=%23%E7%86%AC%E5%A4%9C%E7%9A%84%E4%BA%BA%E8%A6%81%E5%A4%9A%E5%90%83%E4%B8%80%E7%B1%BB%E9%A3%9F%E7%89%A9%23) `132.9K 🔥`
1. [迪丽热巴提灯走机场 (Dilireba walks through the airport holding a lantern)](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E6%8F%90%E7%81%AF%E8%B5%B0%E6%9C%BA%E5%9C%BA%23) `131.0K 🔥`
1. [乘风2026师姐帮帮唱 (Chengfeng 2026 senior sister helps sing)](https://s.weibo.com/weibo?q=%23%E4%B9%98%E9%A3%8E2026%E5%B8%88%E5%A7%90%E5%B8%AE%E5%B8%AE%E5%94%B1%23) `103.8K 🔥`
1. [郭麒麟对接回应KTV传闻](https://s.weibo.com/weibo?q=%23%E9%83%AD%E9%BA%92%E9%BA%9F%E5%AF%B9%E6%8E%A5%E5%9B%9E%E5%BA%94KTV%E4%BC%A0%E9%97%BB%23) `100.8K 🔥`
1. [昆凌旧照 看完理解周杰伦了 (After reading Kunling’s old photos, I now understand Jay Chou)](https://s.weibo.com/weibo?q=%23%E6%98%86%E5%87%8C%E6%97%A7%E7%85%A7%20%E7%9C%8B%E5%AE%8C%E7%90%86%E8%A7%A3%E5%91%A8%E6%9D%B0%E4%BC%A6%E4%BA%86%23) `98.9K 🔥`
1. [UNIQ组合](https://s.weibo.com/weibo?q=%23UNIQ%E7%BB%84%E5%90%88%23) `96.8K 🔥`
1. [全红婵嘉人四月刊生日封面](https://s.weibo.com/weibo?q=%23%E5%85%A8%E7%BA%A2%E5%A9%B5%E5%98%89%E4%BA%BA%E5%9B%9B%E6%9C%88%E5%88%8A%E7%94%9F%E6%97%A5%E5%B0%81%E9%9D%A2%23) `96.4K 🔥`
1. [阚清子说浪姐强度大要养好身体 (Kan Qingzi said that Sister Lang is very strong and needs to take good care of her body.)](https://s.weibo.com/weibo?q=%23%E9%98%9A%E6%B8%85%E5%AD%90%E8%AF%B4%E6%B5%AA%E5%A7%90%E5%BC%BA%E5%BA%A6%E5%A4%A7%E8%A6%81%E5%85%BB%E5%A5%BD%E8%BA%AB%E4%BD%93%23) `94.5K 🔥`
1. [专家说年轻人可以考虑买房了 (Experts say young people can consider buying a house)](https://s.weibo.com/weibo?q=%23%E4%B8%93%E5%AE%B6%E8%AF%B4%E5%B9%B4%E8%BD%BB%E4%BA%BA%E5%8F%AF%E4%BB%A5%E8%80%83%E8%99%91%E4%B9%B0%E6%88%BF%E4%BA%86%23) `227.2K 🔥` `-72%`
1. [保留奔跑吧艺人剩菜店家道歉](https://s.weibo.com/weibo?q=%23%E4%BF%9D%E7%95%99%E5%A5%94%E8%B7%91%E5%90%A7%E8%89%BA%E4%BA%BA%E5%89%A9%E8%8F%9C%E5%BA%97%E5%AE%B6%E9%81%93%E6%AD%89%23) `226.6K 🔥` `-80%`
1. [花少8在约宋威龙张凌赫](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%B0%918%E5%9C%A8%E7%BA%A6%E5%AE%8B%E5%A8%81%E9%BE%99%E5%BC%A0%E5%87%8C%E8%B5%AB%23) `184.4K 🔥` `-29%`
1. [4500元冲锋衣被湿巾擦坏仅赔278元 (A 4,500 yuan jacket was damaged by a wet wipe and only 278 yuan was paid.)](https://s.weibo.com/weibo?q=%234500%E5%85%83%E5%86%B2%E9%94%8B%E8%A1%A3%E8%A2%AB%E6%B9%BF%E5%B7%BE%E6%93%A6%E5%9D%8F%E4%BB%85%E8%B5%94278%E5%85%83%23) `170.4K 🔥` `-42%`
1. [Naiyou终身禁赛](https://s.weibo.com/weibo?q=%23Naiyou%E7%BB%88%E8%BA%AB%E7%A6%81%E8%B5%9B%23) `105.2K 🔥` `-30%`
1. [乘风2026定档 (Chengfeng 2026 scheduled)](https://s.weibo.com/weibo?q=%23%E4%B9%98%E9%A3%8E2026%E5%AE%9A%E6%A1%A3%23) `96.4K 🔥` `-37%`

Updated at 2026-03-27 19:26:03

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
