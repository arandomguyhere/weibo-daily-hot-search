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

1. [王戟不宕机 (Wang Ji is not down)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%88%9F%E4%B8%8D%E5%AE%95%E6%9C%BA%23) `780.6K 🔥` `NEW`
1. [开车是最容易进入心流状态的活动](https://s.weibo.com/weibo?q=%23%E5%BC%80%E8%BD%A6%E6%98%AF%E6%9C%80%E5%AE%B9%E6%98%93%E8%BF%9B%E5%85%A5%E5%BF%83%E6%B5%81%E7%8A%B6%E6%80%81%E7%9A%84%E6%B4%BB%E5%8A%A8%23) `778.7K 🔥` `NEW`
1. [高个子最为薄弱的地方](https://s.weibo.com/weibo?q=%23%E9%AB%98%E4%B8%AA%E5%AD%90%E6%9C%80%E4%B8%BA%E8%96%84%E5%BC%B1%E7%9A%84%E5%9C%B0%E6%96%B9%23) `762.9K 🔥` `NEW`
1. [小区电梯失控从31楼下坠到负2楼](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%8C%BA%E7%94%B5%E6%A2%AF%E5%A4%B1%E6%8E%A7%E4%BB%8E31%E6%A5%BC%E4%B8%8B%E5%9D%A0%E5%88%B0%E8%B4%9F2%E6%A5%BC%23) `583.5K 🔥` `NEW`
1. [丁俊晖vs赵心童](https://s.weibo.com/weibo?q=%23%E4%B8%81%E4%BF%8A%E6%99%96vs%E8%B5%B5%E5%BF%83%E7%AB%A5%23) `573.7K 🔥` `NEW`
1. [雷军感谢各地文旅支持](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E5%86%9B%E6%84%9F%E8%B0%A2%E5%90%84%E5%9C%B0%E6%96%87%E6%97%85%E6%94%AF%E6%8C%81%23) `566.6K 🔥` `NEW`
1. [李佳薇方要求周锐公开道歉](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E4%BD%B3%E8%96%87%E6%96%B9%E8%A6%81%E6%B1%82%E5%91%A8%E9%94%90%E5%85%AC%E5%BC%80%E9%81%93%E6%AD%89%23) `520.1K 🔥` `NEW`
1. [不要再指责现在的人过度防晒了](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E8%A6%81%E5%86%8D%E6%8C%87%E8%B4%A3%E7%8E%B0%E5%9C%A8%E7%9A%84%E4%BA%BA%E8%BF%87%E5%BA%A6%E9%98%B2%E6%99%92%E4%BA%86%23) `519.0K 🔥` `NEW`
1. [蜘蛛侠 好看](https://s.weibo.com/weibo?q=%23%E8%9C%98%E8%9B%9B%E4%BE%A0%20%E5%A5%BD%E7%9C%8B%23) `408.4K 🔥` `NEW`
1. [MLCC涨价30%](https://s.weibo.com/weibo?q=%23MLCC%E6%B6%A8%E4%BB%B730%25%23) `405.7K 🔥` `NEW`
1. [高志溶承认已离婚两年 (Gao Zhiyong admits that he has been divorced for two years)](https://s.weibo.com/weibo?q=%23%E9%AB%98%E5%BF%97%E6%BA%B6%E6%89%BF%E8%AE%A4%E5%B7%B2%E7%A6%BB%E5%A9%9A%E4%B8%A4%E5%B9%B4%23) `402.8K 🔥` `NEW`
1. [强降雨致吉林一地突发洪水](https://s.weibo.com/weibo?q=%23%E5%BC%BA%E9%99%8D%E9%9B%A8%E8%87%B4%E5%90%89%E6%9E%97%E4%B8%80%E5%9C%B0%E7%AA%81%E5%8F%91%E6%B4%AA%E6%B0%B4%23) `383.8K 🔥` `NEW`
1. [王橹杰杨博文cha](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%E6%9D%A8%E5%8D%9A%E6%96%87cha%23) `357.0K 🔥` `NEW`
1. [女子隐私照未打码被医美发朋友圈](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E9%9A%90%E7%A7%81%E7%85%A7%E6%9C%AA%E6%89%93%E7%A0%81%E8%A2%AB%E5%8C%BB%E7%BE%8E%E5%8F%91%E6%9C%8B%E5%8F%8B%E5%9C%88%23) `348.5K 🔥` `NEW`
1. [郭涛儿子身材](https://s.weibo.com/weibo?q=%23%E9%83%AD%E6%B6%9B%E5%84%BF%E5%AD%90%E8%BA%AB%E6%9D%90%23) `318.1K 🔥` `NEW`
1. [蜘蛛侠4](https://s.weibo.com/weibo?q=%23%E8%9C%98%E8%9B%9B%E4%BE%A04%23) `303.6K 🔥` `NEW`
1. [朱一明拟增持兆易创新不低于10亿元](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E4%B8%80%E6%98%8E%E6%8B%9F%E5%A2%9E%E6%8C%81%E5%85%86%E6%98%93%E5%88%9B%E6%96%B0%E4%B8%8D%E4%BD%8E%E4%BA%8E10%E4%BA%BF%E5%85%83%23) `295.2K 🔥` `NEW`
1. [薛之谦全部专辑版权归自己](https://s.weibo.com/weibo?q=%23%E8%96%9B%E4%B9%8B%E8%B0%A6%E5%85%A8%E9%83%A8%E4%B8%93%E8%BE%91%E7%89%88%E6%9D%83%E5%BD%92%E8%87%AA%E5%B7%B1%23) `281.6K 🔥` `NEW`
1. [TF运动会趣味奖项](https://s.weibo.com/weibo?q=%23TF%E8%BF%90%E5%8A%A8%E4%BC%9A%E8%B6%A3%E5%91%B3%E5%A5%96%E9%A1%B9%23) `270.9K 🔥` `NEW`
1. [A股](https://s.weibo.com/weibo?q=%23A%E8%82%A1%23) `265.1K 🔥` `NEW`
1. [易烊千玺工作留痕 (Yi Yang Qianxi’s work leaves traces)](https://s.weibo.com/weibo?q=%23%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%E5%B7%A5%E4%BD%9C%E7%95%99%E7%97%95%23) `259.6K 🔥` `NEW`
1. [朱志鑫 无死角建模](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E5%BF%97%E9%91%AB%20%E6%97%A0%E6%AD%BB%E8%A7%92%E5%BB%BA%E6%A8%A1%23) `252.6K 🔥` `NEW`
1. [泸溪河桃酥牙冠当事人发声](https://s.weibo.com/weibo?q=%23%E6%B3%B8%E6%BA%AA%E6%B2%B3%E6%A1%83%E9%85%A5%E7%89%99%E5%86%A0%E5%BD%93%E4%BA%8B%E4%BA%BA%E5%8F%91%E5%A3%B0%23) `223.0K 🔥` `NEW`
1. [穆祉丞六边形战士](https://s.weibo.com/weibo?q=%23%E7%A9%86%E7%A5%89%E4%B8%9E%E5%85%AD%E8%BE%B9%E5%BD%A2%E6%88%98%E5%A3%AB%23) `219.5K 🔥` `NEW`
1. [保姆因不能生育拐走雇主家10月大男婴](https://s.weibo.com/weibo?q=%23%E4%BF%9D%E5%A7%86%E5%9B%A0%E4%B8%8D%E8%83%BD%E7%94%9F%E8%82%B2%E6%8B%90%E8%B5%B0%E9%9B%87%E4%B8%BB%E5%AE%B610%E6%9C%88%E5%A4%A7%E7%94%B7%E5%A9%B4%23) `211.2K 🔥` `NEW`
1. [舒淇在宝格丽晚宴即兴跳舞](https://s.weibo.com/weibo?q=%23%E8%88%92%E6%B7%87%E5%9C%A8%E5%AE%9D%E6%A0%BC%E4%B8%BD%E6%99%9A%E5%AE%B4%E5%8D%B3%E5%85%B4%E8%B7%B3%E8%88%9E%23) `207.3K 🔥` `NEW`
1. [中国男排vs日本男排](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%94%B7%E6%8E%92vs%E6%97%A5%E6%9C%AC%E7%94%B7%E6%8E%92%23) `205.0K 🔥` `NEW`
1. [白敬亭身材](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%95%AC%E4%BA%AD%E8%BA%AB%E6%9D%90%23) `204.7K 🔥` `NEW`
1. [九门](https://s.weibo.com/weibo?q=%23%E4%B9%9D%E9%97%A8%23) `188.4K 🔥` `NEW`
1. [中国国产大模型不断刷新全球纪录](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%9B%BD%E4%BA%A7%E5%A4%A7%E6%A8%A1%E5%9E%8B%E4%B8%8D%E6%96%AD%E5%88%B7%E6%96%B0%E5%85%A8%E7%90%83%E7%BA%AA%E5%BD%95%23) `187.4K 🔥` `NEW`
1. [Viper吸血鬼 (ViperVampire)](https://s.weibo.com/weibo?q=%23Viper%E5%90%B8%E8%A1%80%E9%AC%BC%23) `186.2K 🔥` `NEW`
1. [MG07发布会](https://s.weibo.com/weibo?q=%23MG07%E5%8F%91%E5%B8%83%E4%BC%9A%23) `185.7K 🔥` `NEW`
1. [女孩摆拍盲道被撞细节曝光](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%A9%E6%91%86%E6%8B%8D%E7%9B%B2%E9%81%93%E8%A2%AB%E6%92%9E%E7%BB%86%E8%8A%82%E6%9B%9D%E5%85%89%23) `1.1M 🔥` `+234%`
1. [开车久了真的会有准确的直觉](https://s.weibo.com/weibo?q=%23%E5%BC%80%E8%BD%A6%E4%B9%85%E4%BA%86%E7%9C%9F%E7%9A%84%E4%BC%9A%E6%9C%89%E5%87%86%E7%A1%AE%E7%9A%84%E7%9B%B4%E8%A7%89%23) `277.8K 🔥` `+25%`
1. [周星驰做客董宇辉直播间](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%98%9F%E9%A9%B0%E5%81%9A%E5%AE%A2%E8%91%A3%E5%AE%87%E8%BE%89%E7%9B%B4%E6%92%AD%E9%97%B4%23) `210.1K 🔥` `+31%`
1. [莫氏鸡煲首轮遭淘汰 (Mo's Chicken Pot was eliminated in the first round)](https://s.weibo.com/weibo?q=%23%E8%8E%AB%E6%B0%8F%E9%B8%A1%E7%85%B2%E9%A6%96%E8%BD%AE%E9%81%AD%E6%B7%98%E6%B1%B0%23) `842.0K 🔥`
1. [千万不要把手机交给商家写好评](https://s.weibo.com/weibo?q=%23%E5%8D%83%E4%B8%87%E4%B8%8D%E8%A6%81%E6%8A%8A%E6%89%8B%E6%9C%BA%E4%BA%A4%E7%BB%99%E5%95%86%E5%AE%B6%E5%86%99%E5%A5%BD%E8%AF%84%23) `779.0K 🔥`
1. [赵昭仪演戏一直这样吗](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E6%98%AD%E4%BB%AA%E6%BC%94%E6%88%8F%E4%B8%80%E7%9B%B4%E8%BF%99%E6%A0%B7%E5%90%97%23) `776.0K 🔥`
1. [修杰楷开庭认罪请求缓刑](https://s.weibo.com/weibo?q=%23%E4%BF%AE%E6%9D%B0%E6%A5%B7%E5%BC%80%E5%BA%AD%E8%AE%A4%E7%BD%AA%E8%AF%B7%E6%B1%82%E7%BC%93%E5%88%91%23) `543.3K 🔥`
1. [智驾小蓝灯将被禁用](https://s.weibo.com/weibo?q=%23%E6%99%BA%E9%A9%BE%E5%B0%8F%E8%93%9D%E7%81%AF%E5%B0%86%E8%A2%AB%E7%A6%81%E7%94%A8%23) `403.6K 🔥`
1. [已经忘了微信是怎么取代QQ的了 (I have forgotten how WeChat replaced QQ)](https://s.weibo.com/weibo?q=%23%E5%B7%B2%E7%BB%8F%E5%BF%98%E4%BA%86%E5%BE%AE%E4%BF%A1%E6%98%AF%E6%80%8E%E4%B9%88%E5%8F%96%E4%BB%A3QQ%E7%9A%84%E4%BA%86%23) `403.0K 🔥` `-65%`
1. [杨幂我今年52](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E6%88%91%E4%BB%8A%E5%B9%B452%23) `374.7K 🔥` `-21%`
1. [王楚钦vs宁贤坤 (Wang Chuqin vs Ning Xiankun)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6vs%E5%AE%81%E8%B4%A4%E5%9D%A4%23) `367.8K 🔥` `-23%`
1. [眼镜蛇断头5分钟后把人咬成重伤](https://s.weibo.com/weibo?q=%23%E7%9C%BC%E9%95%9C%E8%9B%87%E6%96%AD%E5%A4%B45%E5%88%86%E9%92%9F%E5%90%8E%E6%8A%8A%E4%BA%BA%E5%92%AC%E6%88%90%E9%87%8D%E4%BC%A4%23) `326.5K 🔥` `-25%`
1. [穆祉丞视角仅王橹杰一人可见](https://s.weibo.com/weibo?q=%23%E7%A9%86%E7%A5%89%E4%B8%9E%E8%A7%86%E8%A7%92%E4%BB%85%E7%8E%8B%E6%A9%B9%E6%9D%B0%E4%B8%80%E4%BA%BA%E5%8F%AF%E8%A7%81%23) `271.1K 🔥` `-37%`
1. [曝白鹿工作室买了本现言ip](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E7%99%BD%E9%B9%BF%E5%B7%A5%E4%BD%9C%E5%AE%A4%E4%B9%B0%E4%BA%86%E6%9C%AC%E7%8E%B0%E8%A8%80ip%23) `213.8K 🔥` `-41%`
1. [柳柳周佑凌官宣](https://s.weibo.com/weibo?q=%23%E6%9F%B3%E6%9F%B3%E5%91%A8%E4%BD%91%E5%87%8C%E5%AE%98%E5%AE%A3%23) `195.1K 🔥` `-57%`
1. [银行大面积调整营业时间](https://s.weibo.com/weibo?q=%23%E9%93%B6%E8%A1%8C%E5%A4%A7%E9%9D%A2%E7%A7%AF%E8%B0%83%E6%95%B4%E8%90%A5%E4%B8%9A%E6%97%B6%E9%97%B4%23) `188.4K 🔥` `-61%`

Updated at 2026-07-29 22:32:02

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
