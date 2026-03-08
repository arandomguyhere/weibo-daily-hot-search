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

1. [千问AI眼镜现货开售 (Qianwen AI glasses now on sale)](https://s.weibo.com/weibo?q=%23%E5%8D%83%E9%97%AEAI%E7%9C%BC%E9%95%9C%E7%8E%B0%E8%B4%A7%E5%BC%80%E5%94%AE%23) `350.4K 🔥` `NEW`
1. [逐玉走势](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%E8%B5%B0%E5%8A%BF%23) `167.3K 🔥` `NEW`
1. [如果什么都是淡淡的就好了](https://s.weibo.com/weibo?q=%23%E5%A6%82%E6%9E%9C%E4%BB%80%E4%B9%88%E9%83%BD%E6%98%AF%E6%B7%A1%E6%B7%A1%E7%9A%84%E5%B0%B1%E5%A5%BD%E4%BA%86%23) `155.8K 🔥` `NEW`
1. [严屹宽 天涯四美](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E5%B1%B9%E5%AE%BD%20%E5%A4%A9%E6%B6%AF%E5%9B%9B%E7%BE%8E%23) `155.0K 🔥` `NEW`
1. [张凯丽 网红能当一辈子吗](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%AF%E4%B8%BD%20%E7%BD%91%E7%BA%A2%E8%83%BD%E5%BD%93%E4%B8%80%E8%BE%88%E5%AD%90%E5%90%97%23) `154.6K 🔥` `NEW`
1. [中国孩子坐警车看表演火爆外网](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%AD%A9%E5%AD%90%E5%9D%90%E8%AD%A6%E8%BD%A6%E7%9C%8B%E8%A1%A8%E6%BC%94%E7%81%AB%E7%88%86%E5%A4%96%E7%BD%91%23) `392.8K 🔥` `+29%`
1. [在北京穿了将近半年的羽绒服](https://s.weibo.com/weibo?q=%23%E5%9C%A8%E5%8C%97%E4%BA%AC%E7%A9%BF%E4%BA%86%E5%B0%86%E8%BF%91%E5%8D%8A%E5%B9%B4%E7%9A%84%E7%BE%BD%E7%BB%92%E6%9C%8D%23) `388.7K 🔥` `+66%`
1. [退出APP显示残忍离开到底谁发明的](https://s.weibo.com/weibo?q=%23%E9%80%80%E5%87%BAAPP%E6%98%BE%E7%A4%BA%E6%AE%8B%E5%BF%8D%E7%A6%BB%E5%BC%80%E5%88%B0%E5%BA%95%E8%B0%81%E5%8F%91%E6%98%8E%E7%9A%84%23) `388.3K 🔥` `+86%`
1. [王毅回应两岸统一时间表 (Wang Yi responded to the timetable for cross-Strait reunification)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%AF%85%E5%9B%9E%E5%BA%94%E4%B8%A4%E5%B2%B8%E7%BB%9F%E4%B8%80%E6%97%B6%E9%97%B4%E8%A1%A8%23) `1.1M 🔥`
1. [AI龙虾爆火工信部发布高危风险预警](https://s.weibo.com/weibo?q=%23AI%E9%BE%99%E8%99%BE%E7%88%86%E7%81%AB%E5%B7%A5%E4%BF%A1%E9%83%A8%E5%8F%91%E5%B8%83%E9%AB%98%E5%8D%B1%E9%A3%8E%E9%99%A9%E9%A2%84%E8%AD%A6%23) `788.7K 🔥`
1. [世界乱象丛生祖国稳如泰山 (The world is in chaos, but the motherland is as stable as Mount Tai)](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E4%B9%B1%E8%B1%A1%E4%B8%9B%E7%94%9F%E7%A5%96%E5%9B%BD%E7%A8%B3%E5%A6%82%E6%B3%B0%E5%B1%B1%23) `617.1K 🔥`
1. [伊朗宣布将采用全新攻击方式](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%AE%A3%E5%B8%83%E5%B0%86%E9%87%87%E7%94%A8%E5%85%A8%E6%96%B0%E6%94%BB%E5%87%BB%E6%96%B9%E5%BC%8F%23) `276.7K 🔥`
1. [建议规范食品有效期标注 (It is recommended to standardize food expiry date labeling)](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E8%A7%84%E8%8C%83%E9%A3%9F%E5%93%81%E6%9C%89%E6%95%88%E6%9C%9F%E6%A0%87%E6%B3%A8%23) `238.5K 🔥`
1. [中国人有天下为公的格局 (Chinese people have a pattern of serving the world for the common good)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E4%BA%BA%E6%9C%89%E5%A4%A9%E4%B8%8B%E4%B8%BA%E5%85%AC%E7%9A%84%E6%A0%BC%E5%B1%80%23) `224.2K 🔥`
1. [时代少年团广州演唱会 (Times Youth League Guangzhou Concert)](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E5%B9%BF%E5%B7%9E%E6%BC%94%E5%94%B1%E4%BC%9A%23) `222.4K 🔥`
1. [伊朗亮底线 (Iran shows bottom line)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E4%BA%AE%E5%BA%95%E7%BA%BF%23) `216.7K 🔥`
1. [逐玉9集封神了](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%899%E9%9B%86%E5%B0%81%E7%A5%9E%E4%BA%86%23) `206.8K 🔥`
1. [氧化菊回应被央视用作妇女节封面](https://s.weibo.com/weibo?q=%23%E6%B0%A7%E5%8C%96%E8%8F%8A%E5%9B%9E%E5%BA%94%E8%A2%AB%E5%A4%AE%E8%A7%86%E7%94%A8%E4%BD%9C%E5%A6%87%E5%A5%B3%E8%8A%82%E5%B0%81%E9%9D%A2%23) `167.4K 🔥`
1. [人脸验证时千万记得穿衣服 (Remember to wear clothes during face verification)](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E8%84%B8%E9%AA%8C%E8%AF%81%E6%97%B6%E5%8D%83%E4%B8%87%E8%AE%B0%E5%BE%97%E7%A9%BF%E8%A1%A3%E6%9C%8D%23) `167.4K 🔥`
1. [接红包做发光大女主](https://s.weibo.com/weibo?q=%23%E6%8E%A5%E7%BA%A2%E5%8C%85%E5%81%9A%E5%8F%91%E5%85%89%E5%A4%A7%E5%A5%B3%E4%B8%BB%23) `167.4K 🔥`
1. [很喜欢用嘿嘿这两个字](https://s.weibo.com/weibo?q=%23%E5%BE%88%E5%96%9C%E6%AC%A2%E7%94%A8%E5%98%BF%E5%98%BF%E8%BF%99%E4%B8%A4%E4%B8%AA%E5%AD%97%23) `167.3K 🔥`
1. [马来西亚通报MH370搜寻最新进展 (Malaysia reports latest progress in search for MH370)](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E6%9D%A5%E8%A5%BF%E4%BA%9A%E9%80%9A%E6%8A%A5MH370%E6%90%9C%E5%AF%BB%E6%9C%80%E6%96%B0%E8%BF%9B%E5%B1%95%23) `167.3K 🔥`
1. [仙逆动画](https://s.weibo.com/weibo?q=%23%E4%BB%99%E9%80%86%E5%8A%A8%E7%94%BB%23) `167.3K 🔥`
1. [仁科 国足拿世界杯五条人就解散](https://s.weibo.com/weibo?q=%23%E4%BB%81%E7%A7%91%20%E5%9B%BD%E8%B6%B3%E6%8B%BF%E4%B8%96%E7%95%8C%E6%9D%AF%E4%BA%94%E6%9D%A1%E4%BA%BA%E5%B0%B1%E8%A7%A3%E6%95%A3%23) `167.3K 🔥`
1. [严屹宽一出场皇帝瞬间被衬成公公 (As soon as Yan Yikuan appeared, the emperor was instantly transformed into a father-in-law)](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E5%B1%B9%E5%AE%BD%E4%B8%80%E5%87%BA%E5%9C%BA%E7%9A%87%E5%B8%9D%E7%9E%AC%E9%97%B4%E8%A2%AB%E8%A1%AC%E6%88%90%E5%85%AC%E5%85%AC%23) `167.3K 🔥`
1. [伊朗选出新最高领袖 (Iran elects new supreme leader)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E9%80%89%E5%87%BA%E6%96%B0%E6%9C%80%E9%AB%98%E9%A2%86%E8%A2%96%23) `167.3K 🔥`
1. [时代少年团直播](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E7%9B%B4%E6%92%AD%23) `167.3K 🔥`
1. [桃黑黑抽奖 (Peach Hei Hei Lottery)](https://s.weibo.com/weibo?q=%23%E6%A1%83%E9%BB%91%E9%BB%91%E6%8A%BD%E5%A5%96%23) `167.3K 🔥`
1. [张凌赫晒谢征日常 (Zhang Linghe shares Xie Zheng's daily routine)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E6%99%92%E8%B0%A2%E5%BE%81%E6%97%A5%E5%B8%B8%23) `167.3K 🔥`
1. [女子糖尿病不忌口8年变尿毒症](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E7%B3%96%E5%B0%BF%E7%97%85%E4%B8%8D%E5%BF%8C%E5%8F%A38%E5%B9%B4%E5%8F%98%E5%B0%BF%E6%AF%92%E7%97%87%23) `163.2K 🔥`
1. [逐玉 (Zhuyu)](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%23) `157.4K 🔥`
1. [山东的煎饼是要考研吗](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E4%B8%9C%E7%9A%84%E7%85%8E%E9%A5%BC%E6%98%AF%E8%A6%81%E8%80%83%E7%A0%94%E5%90%97%23) `157.4K 🔥`
1. [王一博Lacoste的造型 (Wang Yibo’s Lacoste style)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9ALacoste%E7%9A%84%E9%80%A0%E5%9E%8B%23) `157.3K 🔥`
1. [赵丽颖乔妍带假发摇摆 (Zhao Liying and Qiao Yan rock a wig)](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%B8%BD%E9%A2%96%E4%B9%94%E5%A6%8D%E5%B8%A6%E5%81%87%E5%8F%91%E6%91%87%E6%91%86%23) `157.2K 🔥`
1. [BLG对战JDG](https://s.weibo.com/weibo?q=%23BLG%E5%AF%B9%E6%88%98JDG%23) `157.0K 🔥`
1. [妇女节 (women's day)](https://s.weibo.com/weibo?q=%23%E5%A6%87%E5%A5%B3%E8%8A%82%23) `156.9K 🔥`
1. [微波炉泡面](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E6%B3%A2%E7%82%89%E6%B3%A1%E9%9D%A2%23) `156.7K 🔥`
1. [中国体操队夺美国杯混团冠军](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E4%BD%93%E6%93%8D%E9%98%9F%E5%A4%BA%E7%BE%8E%E5%9B%BD%E6%9D%AF%E6%B7%B7%E5%9B%A2%E5%86%A0%E5%86%9B%23) `156.6K 🔥`
1. [公务员谈养龙虾真实感受](https://s.weibo.com/weibo?q=%23%E5%85%AC%E5%8A%A1%E5%91%98%E8%B0%88%E5%85%BB%E9%BE%99%E8%99%BE%E7%9C%9F%E5%AE%9E%E6%84%9F%E5%8F%97%23) `156.5K 🔥`
1. [妇女节红包 (women's day red envelope)](https://s.weibo.com/weibo?q=%23%E5%A6%87%E5%A5%B3%E8%8A%82%E7%BA%A2%E5%8C%85%23) `156.4K 🔥`
1. [DYG对战KSG](https://s.weibo.com/weibo?q=%23DYG%E5%AF%B9%E6%88%98KSG%23) `156.3K 🔥`
1. [伊朗说将推动美国完全撤出中东](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E8%AF%B4%E5%B0%86%E6%8E%A8%E5%8A%A8%E7%BE%8E%E5%9B%BD%E5%AE%8C%E5%85%A8%E6%92%A4%E5%87%BA%E4%B8%AD%E4%B8%9C%23) `156.1K 🔥`
1. [惠英红 是妇女节快乐](https://s.weibo.com/weibo?q=%23%E6%83%A0%E8%8B%B1%E7%BA%A2%20%E6%98%AF%E5%A6%87%E5%A5%B3%E8%8A%82%E5%BF%AB%E4%B9%90%23) `156.0K 🔥`
1. [108公斤27岁女生花1年减掉108斤 (A 27-year-old girl weighing 108 kg spent 1 year losing 108 catties)](https://s.weibo.com/weibo?q=%23108%E5%85%AC%E6%96%A427%E5%B2%81%E5%A5%B3%E7%94%9F%E8%8A%B11%E5%B9%B4%E5%87%8F%E6%8E%89108%E6%96%A4%23) `155.9K 🔥`
1. [月薪8千快递员夫妻坚持带娃务工](https://s.weibo.com/weibo?q=%23%E6%9C%88%E8%96%AA8%E5%8D%83%E5%BF%AB%E9%80%92%E5%91%98%E5%A4%AB%E5%A6%BB%E5%9D%9A%E6%8C%81%E5%B8%A6%E5%A8%83%E5%8A%A1%E5%B7%A5%23) `155.6K 🔥`
1. [孙颖莎收到自己漫画形象礼物](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E6%94%B6%E5%88%B0%E8%87%AA%E5%B7%B1%E6%BC%AB%E7%94%BB%E5%BD%A2%E8%B1%A1%E7%A4%BC%E7%89%A9%23) `155.5K 🔥`
1. [田曦薇演技好灵 (Tian Xiwei's acting skills are good)](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E6%BC%94%E6%8A%80%E5%A5%BD%E7%81%B5%23) `155.4K 🔥`
1. [敖瑞鹏异域古装造型路透 (Ao Ruipeng's exotic costume styling Reuters)](https://s.weibo.com/weibo?q=%23%E6%95%96%E7%91%9E%E9%B9%8F%E5%BC%82%E5%9F%9F%E5%8F%A4%E8%A3%85%E9%80%A0%E5%9E%8B%E8%B7%AF%E9%80%8F%23) `155.3K 🔥`
1. [不同体重下猫正面坐姿的区别](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E5%90%8C%E4%BD%93%E9%87%8D%E4%B8%8B%E7%8C%AB%E6%AD%A3%E9%9D%A2%E5%9D%90%E5%A7%BF%E7%9A%84%E5%8C%BA%E5%88%AB%23) `155.1K 🔥`
1. [高至霆我从小美好就跟你了 (Gao Zhiting, I have been with you since I was a child.)](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%87%B3%E9%9C%86%E6%88%91%E4%BB%8E%E5%B0%8F%E7%BE%8E%E5%A5%BD%E5%B0%B1%E8%B7%9F%E4%BD%A0%E4%BA%86%23) `154.9K 🔥`
1. [家里已经有你这只小猫](https://s.weibo.com/weibo?q=%23%E5%AE%B6%E9%87%8C%E5%B7%B2%E7%BB%8F%E6%9C%89%E4%BD%A0%E8%BF%99%E5%8F%AA%E5%B0%8F%E7%8C%AB%23) `154.8K 🔥`
1. [38节送礼就上淘宝 (Go to Taobao to give gifts during the 38th Festival)](https://s.weibo.com/weibo?q=%2338%E8%8A%82%E9%80%81%E7%A4%BC%E5%B0%B1%E4%B8%8A%E6%B7%98%E5%AE%9D%23) `466.8K 🔥` `-35%`

Updated at 2026-03-08 19:58:39

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
