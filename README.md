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

1. [山河为卷万象郑州 (Mountains and rivers sweep everything around Zhengzhou)](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E6%B2%B3%E4%B8%BA%E5%8D%B7%E4%B8%87%E8%B1%A1%E9%83%91%E5%B7%9E%23) `167.0K 🔥` `NEW`
1. [这下更不认识张钧甯名字了](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%B8%8B%E6%9B%B4%E4%B8%8D%E8%AE%A4%E8%AF%86%E5%BC%A0%E9%92%A7%E7%94%AF%E5%90%8D%E5%AD%97%E4%BA%86%23) `44.2K 🔥` `NEW`
1. [江山大同](https://s.weibo.com/weibo?q=%23%E6%B1%9F%E5%B1%B1%E5%A4%A7%E5%90%8C%23) `26.3K 🔥` `NEW`
1. [莫离](https://s.weibo.com/weibo?q=%23%E8%8E%AB%E7%A6%BB%23) `26.1K 🔥` `NEW`
1. [北京棉花云](https://s.weibo.com/weibo?q=%23%E5%8C%97%E4%BA%AC%E6%A3%89%E8%8A%B1%E4%BA%91%23) `26.1K 🔥` `NEW`
1. [内马尔首秀](https://s.weibo.com/weibo?q=%23%E5%86%85%E9%A9%AC%E5%B0%94%E9%A6%96%E7%A7%80%23) `216.9K 🔥` `+274%`
1. [世界最快高铁跑出中国创新加速度](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9C%80%E5%BF%AB%E9%AB%98%E9%93%81%E8%B7%91%E5%87%BA%E4%B8%AD%E5%9B%BD%E5%88%9B%E6%96%B0%E5%8A%A0%E9%80%9F%E5%BA%A6%23) `167.1K 🔥` `+71%`
1. [瑞士vs加拿大 (Switzerland vs Canada)](https://s.weibo.com/weibo?q=%23%E7%91%9E%E5%A3%ABvs%E5%8A%A0%E6%8B%BF%E5%A4%A7%23) `114.9K 🔥` `+72%`
1. [客厅对于小家庭来说完全没必要](https://s.weibo.com/weibo?q=%23%E5%AE%A2%E5%8E%85%E5%AF%B9%E4%BA%8E%E5%B0%8F%E5%AE%B6%E5%BA%AD%E6%9D%A5%E8%AF%B4%E5%AE%8C%E5%85%A8%E6%B2%A1%E5%BF%85%E8%A6%81%23) `73.2K 🔥` `+25%`
1. [副院长出轨眼科主任事件最新进展 (The latest developments in the case of the vice president cheating on the director of the ophthalmology department)](https://s.weibo.com/weibo?q=%23%E5%89%AF%E9%99%A2%E9%95%BF%E5%87%BA%E8%BD%A8%E7%9C%BC%E7%A7%91%E4%B8%BB%E4%BB%BB%E4%BA%8B%E4%BB%B6%E6%9C%80%E6%96%B0%E8%BF%9B%E5%B1%95%23) `53.7K 🔥` `+30%`
1. [12岁女孩服感冒药后急性心衰死亡](https://s.weibo.com/weibo?q=%2312%E5%B2%81%E5%A5%B3%E5%AD%A9%E6%9C%8D%E6%84%9F%E5%86%92%E8%8D%AF%E5%90%8E%E6%80%A5%E6%80%A7%E5%BF%83%E8%A1%B0%E6%AD%BB%E4%BA%A1%23) `52.5K 🔥` `+24%`
1. [副院长出轨眼科主任女方离职男复出](https://s.weibo.com/weibo?q=%23%E5%89%AF%E9%99%A2%E9%95%BF%E5%87%BA%E8%BD%A8%E7%9C%BC%E7%A7%91%E4%B8%BB%E4%BB%BB%E5%A5%B3%E6%96%B9%E7%A6%BB%E8%81%8C%E7%94%B7%E5%A4%8D%E5%87%BA%23) `51.6K 🔥` `+37%`
1. [美光科技财报 (Micron Technology Financial Report)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%85%89%E7%A7%91%E6%8A%80%E8%B4%A2%E6%8A%A5%23) `47.3K 🔥` `+26%`
1. [发明这么吃早餐的绝对是个天才](https://s.weibo.com/weibo?q=%23%E5%8F%91%E6%98%8E%E8%BF%99%E4%B9%88%E5%90%83%E6%97%A9%E9%A4%90%E7%9A%84%E7%BB%9D%E5%AF%B9%E6%98%AF%E4%B8%AA%E5%A4%A9%E6%89%8D%23) `46.9K 🔥` `+22%`
1. [十日终焉 预感大爆](https://s.weibo.com/weibo?q=%23%E5%8D%81%E6%97%A5%E7%BB%88%E7%84%89%20%E9%A2%84%E6%84%9F%E5%A4%A7%E7%88%86%23) `169.4K 🔥`
1. [故意不接领导电话事情反而解决了](https://s.weibo.com/weibo?q=%23%E6%95%85%E6%84%8F%E4%B8%8D%E6%8E%A5%E9%A2%86%E5%AF%BC%E7%94%B5%E8%AF%9D%E4%BA%8B%E6%83%85%E5%8F%8D%E8%80%8C%E8%A7%A3%E5%86%B3%E4%BA%86%23) `88.2K 🔥`
1. [鹅今天官宣了120部大剧](https://s.weibo.com/weibo?q=%23%E9%B9%85%E4%BB%8A%E5%A4%A9%E5%AE%98%E5%AE%A3%E4%BA%86120%E9%83%A8%E5%A4%A7%E5%89%A7%23) `77.9K 🔥`
1. [李宛妲在十日终焉美得像bjd](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%AE%9B%E5%A6%B2%E5%9C%A8%E5%8D%81%E6%97%A5%E7%BB%88%E7%84%89%E7%BE%8E%E5%BE%97%E5%83%8Fbjd%23) `66.1K 🔥`
1. [波黑vs卡塔尔](https://s.weibo.com/weibo?q=%23%E6%B3%A2%E9%BB%91vs%E5%8D%A1%E5%A1%94%E5%B0%94%23) `58.6K 🔥`
1. [毛晓彤吓到我了](https://s.weibo.com/weibo?q=%23%E6%AF%9B%E6%99%93%E5%BD%A4%E5%90%93%E5%88%B0%E6%88%91%E4%BA%86%23) `50.4K 🔥`
1. [无畏的猫真的太太太大了](https://s.weibo.com/weibo?q=%23%E6%97%A0%E7%95%8F%E7%9A%84%E7%8C%AB%E7%9C%9F%E7%9A%84%E5%A4%AA%E5%A4%AA%E5%A4%AA%E5%A4%A7%E4%BA%86%23) `49.3K 🔥`
1. [河南高考分数线 (Henan college entrance examination score line)](https://s.weibo.com/weibo?q=%23%E6%B2%B3%E5%8D%97%E9%AB%98%E8%80%83%E5%88%86%E6%95%B0%E7%BA%BF%23) `46.4K 🔥`
1. [刘学义杨幂胡军领衔主演](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AD%A6%E4%B9%89%E6%9D%A8%E5%B9%82%E8%83%A1%E5%86%9B%E9%A2%86%E8%A1%94%E4%B8%BB%E6%BC%94%23) `45.3K 🔥`
1. [印度5名歹徒轮奸30岁已婚女子 (Five gangsters gang-rape 30-year-old married woman in India)](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%BA%A65%E5%90%8D%E6%AD%B9%E5%BE%92%E8%BD%AE%E5%A5%B830%E5%B2%81%E5%B7%B2%E5%A9%9A%E5%A5%B3%E5%AD%90%23) `44.2K 🔥`
1. [女子2根手指碳化变黑仨月才求医 (It took three months for a woman's two fingers to turn black due to carbonization and seek medical attention.)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%902%E6%A0%B9%E6%89%8B%E6%8C%87%E7%A2%B3%E5%8C%96%E5%8F%98%E9%BB%91%E4%BB%A8%E6%9C%88%E6%89%8D%E6%B1%82%E5%8C%BB%23) `43.7K 🔥`
1. [恋与深空一意孤行只会自损口碑](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%E4%B8%80%E6%84%8F%E5%AD%A4%E8%A1%8C%E5%8F%AA%E4%BC%9A%E8%87%AA%E6%8D%9F%E5%8F%A3%E7%A2%91%23) `42.9K 🔥`
1. [白鹿回复陆虎](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E5%9B%9E%E5%A4%8D%E9%99%86%E8%99%8E%23) `41.6K 🔥`
1. [37岁教师身体不适坚持上课心梗去世](https://s.weibo.com/weibo?q=%2337%E5%B2%81%E6%95%99%E5%B8%88%E8%BA%AB%E4%BD%93%E4%B8%8D%E9%80%82%E5%9D%9A%E6%8C%81%E4%B8%8A%E8%AF%BE%E5%BF%83%E6%A2%97%E5%8E%BB%E4%B8%96%23) `40.2K 🔥`
1. [孟子义亲李昀锐镜头太欲了](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89%E4%BA%B2%E6%9D%8E%E6%98%80%E9%94%90%E9%95%9C%E5%A4%B4%E5%A4%AA%E6%AC%B2%E4%BA%86%23) `37.9K 🔥`
1. [13岁女孩称被强奸案细节披露](https://s.weibo.com/weibo?q=%2313%E5%B2%81%E5%A5%B3%E5%AD%A9%E7%A7%B0%E8%A2%AB%E5%BC%BA%E5%A5%B8%E6%A1%88%E7%BB%86%E8%8A%82%E6%8A%AB%E9%9C%B2%23) `35.6K 🔥`
1. [江山大同 杨幂](https://s.weibo.com/weibo?q=%23%E6%B1%9F%E5%B1%B1%E5%A4%A7%E5%90%8C%20%E6%9D%A8%E5%B9%82%23) `33.5K 🔥`
1. [山西沁源县委原书记李丁夫主动投案 (Li Dingfu, former secretary of the Qinyuan County Party Committee in Shanxi, voluntarily surrendered)](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E8%A5%BF%E6%B2%81%E6%BA%90%E5%8E%BF%E5%A7%94%E5%8E%9F%E4%B9%A6%E8%AE%B0%E6%9D%8E%E4%B8%81%E5%A4%AB%E4%B8%BB%E5%8A%A8%E6%8A%95%E6%A1%88%23) `33.2K 🔥`
1. [建议不要把快递带回家里拆](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E4%B8%8D%E8%A6%81%E6%8A%8A%E5%BF%AB%E9%80%92%E5%B8%A6%E5%9B%9E%E5%AE%B6%E9%87%8C%E6%8B%86%23) `33.1K 🔥`
1. [剑来全阵容正式官宣](https://s.weibo.com/weibo?q=%23%E5%89%91%E6%9D%A5%E5%85%A8%E9%98%B5%E5%AE%B9%E6%AD%A3%E5%BC%8F%E5%AE%98%E5%AE%A3%23) `32.7K 🔥`
1. [1点点 背刺 (1 point backstab)](https://s.weibo.com/weibo?q=%231%E7%82%B9%E7%82%B9%20%E8%83%8C%E5%88%BA%23) `165.7K 🔥` `-42%`
1. [王者荣耀婉拒逆水寒 (King of Glory declined Nishui Han)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%80%85%E8%8D%A3%E8%80%80%E5%A9%89%E6%8B%92%E9%80%86%E6%B0%B4%E5%AF%92%23) `37.7K 🔥` `-50%`
1. [普通人不要轻易尝试绑头巾](https://s.weibo.com/weibo?q=%23%E6%99%AE%E9%80%9A%E4%BA%BA%E4%B8%8D%E8%A6%81%E8%BD%BB%E6%98%93%E5%B0%9D%E8%AF%95%E7%BB%91%E5%A4%B4%E5%B7%BE%23) `33.1K 🔥` `-32%`
1. [高考出分后全世界都吻上来了 (After the college entrance examination results, the whole world kissed)](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%80%83%E5%87%BA%E5%88%86%E5%90%8E%E5%85%A8%E4%B8%96%E7%95%8C%E9%83%BD%E5%90%BB%E4%B8%8A%E6%9D%A5%E4%BA%86%23) `29.7K 🔥` `-21%`
1. [infp最不能理解的娱乐方式](https://s.weibo.com/weibo?q=%23infp%E6%9C%80%E4%B8%8D%E8%83%BD%E7%90%86%E8%A7%A3%E7%9A%84%E5%A8%B1%E4%B9%90%E6%96%B9%E5%BC%8F%23) `27.1K 🔥` `-46%`
1. [王俊凯 就算不喜欢也没关系](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%20%E5%B0%B1%E7%AE%97%E4%B8%8D%E5%96%9C%E6%AC%A2%E4%B9%9F%E6%B2%A1%E5%85%B3%E7%B3%BB%23) `27.0K 🔥` `-28%`
1. [张凌赫林允这两张脸赢麻了 (Zhang Ling, He and Lin Yun are so stupid.)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E6%9E%97%E5%85%81%E8%BF%99%E4%B8%A4%E5%BC%A0%E8%84%B8%E8%B5%A2%E9%BA%BB%E4%BA%86%23) `26.9K 🔥` `-28%`
1. [瘦子 夏天没食欲](https://s.weibo.com/weibo?q=%23%E7%98%A6%E5%AD%90%20%E5%A4%8F%E5%A4%A9%E6%B2%A1%E9%A3%9F%E6%AC%B2%23) `26.4K 🔥` `-35%`
1. [男频剧](https://s.weibo.com/weibo?q=%23%E7%94%B7%E9%A2%91%E5%89%A7%23) `26.1K 🔥` `-31%`
1. [六年前资助的小孩 现在成为我的依靠](https://s.weibo.com/weibo?q=%23%E5%85%AD%E5%B9%B4%E5%89%8D%E8%B5%84%E5%8A%A9%E7%9A%84%E5%B0%8F%E5%AD%A9%20%E7%8E%B0%E5%9C%A8%E6%88%90%E4%B8%BA%E6%88%91%E7%9A%84%E4%BE%9D%E9%9D%A0%23) `26.1K 🔥` `-31%`
1. [万一减肥减猛了](https://s.weibo.com/weibo?q=%23%E4%B8%87%E4%B8%80%E5%87%8F%E8%82%A5%E5%87%8F%E7%8C%9B%E4%BA%86%23) `26.1K 🔥` `-31%`
1. [孙俪美回甄嬛时期](https://s.weibo.com/weibo?q=%23%E5%AD%99%E4%BF%AA%E7%BE%8E%E5%9B%9E%E7%94%84%E5%AC%9B%E6%97%B6%E6%9C%9F%23) `26.1K 🔥` `-73%`
1. [十日终焉癫人和回响者的特效 (Special effects for The Maniac and Echoer)](https://s.weibo.com/weibo?q=%23%E5%8D%81%E6%97%A5%E7%BB%88%E7%84%89%E7%99%AB%E4%BA%BA%E5%92%8C%E5%9B%9E%E5%93%8D%E8%80%85%E7%9A%84%E7%89%B9%E6%95%88%23) `26.1K 🔥` `-31%`
1. [山西高考成绩](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E8%A5%BF%E9%AB%98%E8%80%83%E6%88%90%E7%BB%A9%23) `26.1K 🔥` `-31%`
1. [张凌赫归鸾一滴泪镜头](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%BD%92%E9%B8%BE%E4%B8%80%E6%BB%B4%E6%B3%AA%E9%95%9C%E5%A4%B4%23) `26.1K 🔥` `-31%`
1. [十日终焉众生集结角色短片 (Short film about the gathering of all sentient beings at the end of the tenth day)](https://s.weibo.com/weibo?q=%23%E5%8D%81%E6%97%A5%E7%BB%88%E7%84%89%E4%BC%97%E7%94%9F%E9%9B%86%E7%BB%93%E8%A7%92%E8%89%B2%E7%9F%AD%E7%89%87%23) `26.1K 🔥` `-31%`

Updated at 2026-06-25 05:40:38

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
