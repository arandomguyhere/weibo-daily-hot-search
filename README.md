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

1. [22岁男子看望生病奶奶过桥时坠亡](https://s.weibo.com/weibo?q=%2322%E5%B2%81%E7%94%B7%E5%AD%90%E7%9C%8B%E6%9C%9B%E7%94%9F%E7%97%85%E5%A5%B6%E5%A5%B6%E8%BF%87%E6%A1%A5%E6%97%B6%E5%9D%A0%E4%BA%A1%23) `816.8K 🔥` `NEW`
1. [王戟说与其内耗不如放手去干](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%88%9F%E8%AF%B4%E4%B8%8E%E5%85%B6%E5%86%85%E8%80%97%E4%B8%8D%E5%A6%82%E6%94%BE%E6%89%8B%E5%8E%BB%E5%B9%B2%23) `733.3K 🔥` `NEW`
1. [小米澎程让你久等了](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E6%BE%8E%E7%A8%8B%E8%AE%A9%E4%BD%A0%E4%B9%85%E7%AD%89%E4%BA%86%23) `727.1K 🔥` `NEW`
1. [4岁男童的手是碰还是摸不该情绪定罪](https://s.weibo.com/weibo?q=%234%E5%B2%81%E7%94%B7%E7%AB%A5%E7%9A%84%E6%89%8B%E6%98%AF%E7%A2%B0%E8%BF%98%E6%98%AF%E6%91%B8%E4%B8%8D%E8%AF%A5%E6%83%85%E7%BB%AA%E5%AE%9A%E7%BD%AA%23) `727.0K 🔥` `NEW`
1. [霸王茶姬 茶叶蛋](https://s.weibo.com/weibo?q=%23%E9%9C%B8%E7%8E%8B%E8%8C%B6%E5%A7%AC%20%E8%8C%B6%E5%8F%B6%E8%9B%8B%23) `716.7K 🔥` `NEW`
1. [檀健次为几秒戏份生吞七十包山楂粉](https://s.weibo.com/weibo?q=%23%E6%AA%80%E5%81%A5%E6%AC%A1%E4%B8%BA%E5%87%A0%E7%A7%92%E6%88%8F%E4%BB%BD%E7%94%9F%E5%90%9E%E4%B8%83%E5%8D%81%E5%8C%85%E5%B1%B1%E6%A5%82%E7%B2%89%23) `716.4K 🔥` `NEW`
1. [阿维塔9系](https://s.weibo.com/weibo?q=%23%E9%98%BF%E7%BB%B4%E5%A1%949%E7%B3%BB%23) `711.8K 🔥` `NEW`
1. [美网8强](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E7%BD%918%E5%BC%BA%23) `708.0K 🔥` `NEW`
1. [广东人真正的执念太真实了](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E4%B8%9C%E4%BA%BA%E7%9C%9F%E6%AD%A3%E7%9A%84%E6%89%A7%E5%BF%B5%E5%A4%AA%E7%9C%9F%E5%AE%9E%E4%BA%86%23) `703.1K 🔥` `NEW`
1. [民政部门称赴港看演出属于高消费](https://s.weibo.com/weibo?q=%23%E6%B0%91%E6%94%BF%E9%83%A8%E9%97%A8%E7%A7%B0%E8%B5%B4%E6%B8%AF%E7%9C%8B%E6%BC%94%E5%87%BA%E5%B1%9E%E4%BA%8E%E9%AB%98%E6%B6%88%E8%B4%B9%23) `702.2K 🔥` `NEW`
1. [4岁男童摸臀算性骚扰吗](https://s.weibo.com/weibo?q=%234%E5%B2%81%E7%94%B7%E7%AB%A5%E6%91%B8%E8%87%80%E7%AE%97%E6%80%A7%E9%AA%9A%E6%89%B0%E5%90%97%23) `698.7K 🔥` `NEW`
1. [网红宣传捐款百万实际只捐1元](https://s.weibo.com/weibo?q=%23%E7%BD%91%E7%BA%A2%E5%AE%A3%E4%BC%A0%E6%8D%90%E6%AC%BE%E7%99%BE%E4%B8%87%E5%AE%9E%E9%99%85%E5%8F%AA%E6%8D%901%E5%85%83%23) `695.4K 🔥` `NEW`
1. [尚雯婕公司起诉曾舜晞](https://s.weibo.com/weibo?q=%23%E5%B0%9A%E9%9B%AF%E5%A9%95%E5%85%AC%E5%8F%B8%E8%B5%B7%E8%AF%89%E6%9B%BE%E8%88%9C%E6%99%9E%23) `692.3K 🔥` `NEW`
1. [小米18Fold中折叠评测](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B318Fold%E4%B8%AD%E6%8A%98%E5%8F%A0%E8%AF%84%E6%B5%8B%23) `687.3K 🔥` `NEW`
1. [赵今麦风格大变](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%BB%8A%E9%BA%A6%E9%A3%8E%E6%A0%BC%E5%A4%A7%E5%8F%98%23) `682.6K 🔥` `NEW`
1. [指控4岁男童摸屁股是纠缠式维权](https://s.weibo.com/weibo?q=%23%E6%8C%87%E6%8E%A74%E5%B2%81%E7%94%B7%E7%AB%A5%E6%91%B8%E5%B1%81%E8%82%A1%E6%98%AF%E7%BA%A0%E7%BC%A0%E5%BC%8F%E7%BB%B4%E6%9D%83%23) `681.5K 🔥` `NEW`
1. [心动的信号9](https://s.weibo.com/weibo?q=%23%E5%BF%83%E5%8A%A8%E7%9A%84%E4%BF%A1%E5%8F%B79%23) `677.8K 🔥` `NEW`
1. [特朗普10分钟帖子信息量爆炸](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE10%E5%88%86%E9%92%9F%E5%B8%96%E5%AD%90%E4%BF%A1%E6%81%AF%E9%87%8F%E7%88%86%E7%82%B8%23) `675.6K 🔥` `NEW`
1. [麒麟9050Pro现真身](https://s.weibo.com/weibo?q=%23%E9%BA%92%E9%BA%9F9050Pro%E7%8E%B0%E7%9C%9F%E8%BA%AB%23) `672.0K 🔥` `NEW`
1. [死刑改死缓被害人家属奔走16年申诉](https://s.weibo.com/weibo?q=%23%E6%AD%BB%E5%88%91%E6%94%B9%E6%AD%BB%E7%BC%93%E8%A2%AB%E5%AE%B3%E4%BA%BA%E5%AE%B6%E5%B1%9E%E5%A5%94%E8%B5%B016%E5%B9%B4%E7%94%B3%E8%AF%89%23) `668.3K 🔥` `NEW`
1. [保护眼睛居然有这么冷门的办法](https://s.weibo.com/weibo?q=%23%E4%BF%9D%E6%8A%A4%E7%9C%BC%E7%9D%9B%E5%B1%85%E7%84%B6%E6%9C%89%E8%BF%99%E4%B9%88%E5%86%B7%E9%97%A8%E7%9A%84%E5%8A%9E%E6%B3%95%23) `660.0K 🔥` `NEW`
1. [郑钦文以为3比5结果是4比5](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87%E4%BB%A5%E4%B8%BA3%E6%AF%945%E7%BB%93%E6%9E%9C%E6%98%AF4%E6%AF%945%23) `656.0K 🔥` `NEW`
1. [郑钦文收获中网正赛外卡](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87%E6%94%B6%E8%8E%B7%E4%B8%AD%E7%BD%91%E6%AD%A3%E8%B5%9B%E5%A4%96%E5%8D%A1%23) `655.1K 🔥` `NEW`
1. [王一博 ALO](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%20ALO%23) `649.4K 🔥` `NEW`
1. [杨洋工作室出高人了](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E6%B4%8B%E5%B7%A5%E4%BD%9C%E5%AE%A4%E5%87%BA%E9%AB%98%E4%BA%BA%E4%BA%86%23) `645.9K 🔥` `NEW`
1. [花少2团队否认暖气是导演组搞鬼](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%B0%912%E5%9B%A2%E9%98%9F%E5%90%A6%E8%AE%A4%E6%9A%96%E6%B0%94%E6%98%AF%E5%AF%BC%E6%BC%94%E7%BB%84%E6%90%9E%E9%AC%BC%23) `634.9K 🔥` `NEW`
1. [张新当选羽协主席](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%96%B0%E5%BD%93%E9%80%89%E7%BE%BD%E5%8D%8F%E4%B8%BB%E5%B8%AD%23) `633.4K 🔥` `NEW`
1. [倪虹洁随手扔烟头](https://s.weibo.com/weibo?q=%23%E5%80%AA%E8%99%B9%E6%B4%81%E9%9A%8F%E6%89%8B%E6%89%94%E7%83%9F%E5%A4%B4%23) `630.5K 🔥` `NEW`
1. [宋雨琦胖了五斤](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E9%9B%A8%E7%90%A6%E8%83%96%E4%BA%86%E4%BA%94%E6%96%A4%23) `626.4K 🔥` `NEW`
1. [女子称被男童摸臀调解未果准备诉讼](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E7%A7%B0%E8%A2%AB%E7%94%B7%E7%AB%A5%E6%91%B8%E8%87%80%E8%B0%83%E8%A7%A3%E6%9C%AA%E6%9E%9C%E5%87%86%E5%A4%87%E8%AF%89%E8%AE%BC%23) `624.3K 🔥` `NEW`
1. [吴谨言同款座驾领克20开启预订](https://s.weibo.com/weibo?q=%23%E5%90%B4%E8%B0%A8%E8%A8%80%E5%90%8C%E6%AC%BE%E5%BA%A7%E9%A9%BE%E9%A2%86%E5%85%8B20%E5%BC%80%E5%90%AF%E9%A2%84%E8%AE%A2%23) `620.6K 🔥` `NEW`
1. [范趣町抽奖过程应有公示](https://s.weibo.com/weibo?q=%23%E8%8C%83%E8%B6%A3%E7%94%BA%E6%8A%BD%E5%A5%96%E8%BF%87%E7%A8%8B%E5%BA%94%E6%9C%89%E5%85%AC%E7%A4%BA%23) `614.7K 🔥` `NEW`
1. [赵晴怎么美成这样了](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E6%99%B4%E6%80%8E%E4%B9%88%E7%BE%8E%E6%88%90%E8%BF%99%E6%A0%B7%E4%BA%86%23) `612.5K 🔥` `NEW`
1. [成年后意识到世界根本没有大人](https://s.weibo.com/weibo?q=%23%E6%88%90%E5%B9%B4%E5%90%8E%E6%84%8F%E8%AF%86%E5%88%B0%E4%B8%96%E7%95%8C%E6%A0%B9%E6%9C%AC%E6%B2%A1%E6%9C%89%E5%A4%A7%E4%BA%BA%23) `606.1K 🔥` `NEW`
1. [早春晴朗晋江金榜第一](https://s.weibo.com/weibo?q=%23%E6%97%A9%E6%98%A5%E6%99%B4%E6%9C%97%E6%99%8B%E6%B1%9F%E9%87%91%E6%A6%9C%E7%AC%AC%E4%B8%80%23) `602.4K 🔥` `NEW`
1. [郑钦文回应多伦多惨败后封闭训练](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87%E5%9B%9E%E5%BA%94%E5%A4%9A%E4%BC%A6%E5%A4%9A%E6%83%A8%E8%B4%A5%E5%90%8E%E5%B0%81%E9%97%AD%E8%AE%AD%E7%BB%83%23) `599.9K 🔥` `NEW`
1. [王一博26年新增9个商务](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A26%E5%B9%B4%E6%96%B0%E5%A2%9E9%E4%B8%AA%E5%95%86%E5%8A%A1%23) `597.0K 🔥` `NEW`
1. [痞幼在梅尼耶婚礼上哭了](https://s.weibo.com/weibo?q=%23%E7%97%9E%E5%B9%BC%E5%9C%A8%E6%A2%85%E5%B0%BC%E8%80%B6%E5%A9%9A%E7%A4%BC%E4%B8%8A%E5%93%AD%E4%BA%86%23) `593.2K 🔥` `NEW`
1. [日本记者感慨日本人反战败不反战](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E8%AE%B0%E8%80%85%E6%84%9F%E6%85%A8%E6%97%A5%E6%9C%AC%E4%BA%BA%E5%8F%8D%E6%88%98%E8%B4%A5%E4%B8%8D%E5%8F%8D%E6%88%98%23) `589.0K 🔥` `NEW`
1. [突然理解花少2了](https://s.weibo.com/weibo?q=%23%E7%AA%81%E7%84%B6%E7%90%86%E8%A7%A3%E8%8A%B1%E5%B0%912%E4%BA%86%23) `585.8K 🔥` `NEW`
1. [小鹏第一位机器人自己走下产线](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E9%B9%8F%E7%AC%AC%E4%B8%80%E4%BD%8D%E6%9C%BA%E5%99%A8%E4%BA%BA%E8%87%AA%E5%B7%B1%E8%B5%B0%E4%B8%8B%E4%BA%A7%E7%BA%BF%23) `583.1K 🔥` `NEW`
1. [白露后身体3处不要露](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%9C%B2%E5%90%8E%E8%BA%AB%E4%BD%933%E5%A4%84%E4%B8%8D%E8%A6%81%E9%9C%B2%23) `578.9K 🔥` `NEW`
1. [电影史上最伟大的开场之一](https://s.weibo.com/weibo?q=%23%E7%94%B5%E5%BD%B1%E5%8F%B2%E4%B8%8A%E6%9C%80%E4%BC%9F%E5%A4%A7%E7%9A%84%E5%BC%80%E5%9C%BA%E4%B9%8B%E4%B8%80%23) `576.5K 🔥` `NEW`
1. [Luke头发梳上去了](https://s.weibo.com/weibo?q=%23Luke%E5%A4%B4%E5%8F%91%E6%A2%B3%E4%B8%8A%E5%8E%BB%E4%BA%86%23) `572.2K 🔥` `NEW`
1. [小米18Fold首销数据](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B318Fold%E9%A6%96%E9%94%80%E6%95%B0%E6%8D%AE%23) `567.2K 🔥` `NEW`
1. [原来大家是这样长脑子的](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E5%A4%A7%E5%AE%B6%E6%98%AF%E8%BF%99%E6%A0%B7%E9%95%BF%E8%84%91%E5%AD%90%E7%9A%84%23) `566.0K 🔥` `NEW`
1. [早春晴朗](https://s.weibo.com/weibo?q=%23%E6%97%A9%E6%98%A5%E6%99%B4%E6%9C%97%23) `1.1M 🔥` `+852%`
1. [宝格丽小公主缺席晚宴](https://s.weibo.com/weibo?q=%23%E5%AE%9D%E6%A0%BC%E4%B8%BD%E5%B0%8F%E5%85%AC%E4%B8%BB%E7%BC%BA%E5%B8%AD%E6%99%9A%E5%AE%B4%23) `665.1K 🔥` `+90%`
1. [张家齐录完我家那闺女就搬家了](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%AE%B6%E9%BD%90%E5%BD%95%E5%AE%8C%E6%88%91%E5%AE%B6%E9%82%A3%E9%97%BA%E5%A5%B3%E5%B0%B1%E6%90%AC%E5%AE%B6%E4%BA%86%23) `644.9K 🔥` `+458%`
1. [日本不婚族老阿姨](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E4%B8%8D%E5%A9%9A%E6%97%8F%E8%80%81%E9%98%BF%E5%A7%A8%23) `641.1K 🔥` `+348%`
1. [郑钦文逆转震惊美网](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87%E9%80%86%E8%BD%AC%E9%9C%87%E6%83%8A%E7%BE%8E%E7%BD%91%23) `609.5K 🔥` `-78%`

Updated at 2026-09-08 13:13:01

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
