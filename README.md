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

1. [工业新动能持续释放发展活力 (New kinetic energy in industry continues to release development vitality)](https://s.weibo.com/weibo?q=%23%E5%B7%A5%E4%B8%9A%E6%96%B0%E5%8A%A8%E8%83%BD%E6%8C%81%E7%BB%AD%E9%87%8A%E6%94%BE%E5%8F%91%E5%B1%95%E6%B4%BB%E5%8A%9B%23) `715.7K 🔥` `NEW`
1. [山东临沂小区爆炸现场画面](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E4%B8%9C%E4%B8%B4%E6%B2%82%E5%B0%8F%E5%8C%BA%E7%88%86%E7%82%B8%E7%8E%B0%E5%9C%BA%E7%94%BB%E9%9D%A2%23) `382.5K 🔥` `NEW`
1. [孙颖莎的控场力有多强](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E7%9A%84%E6%8E%A7%E5%9C%BA%E5%8A%9B%E6%9C%89%E5%A4%9A%E5%BC%BA%23) `334.8K 🔥` `NEW`
1. [一句话证明你看过脱友3](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%8F%A5%E8%AF%9D%E8%AF%81%E6%98%8E%E4%BD%A0%E7%9C%8B%E8%BF%87%E8%84%B1%E5%8F%8B3%23) `322.4K 🔥` `NEW`
1. [JDG晋级上海全球冠军赛](https://s.weibo.com/weibo?q=%23JDG%E6%99%8B%E7%BA%A7%E4%B8%8A%E6%B5%B7%E5%85%A8%E7%90%83%E5%86%A0%E5%86%9B%E8%B5%9B%23) `240.6K 🔥` `NEW`
1. [长沙老赖欠账砍价扬言黑红也是红](https://s.weibo.com/weibo?q=%23%E9%95%BF%E6%B2%99%E8%80%81%E8%B5%96%E6%AC%A0%E8%B4%A6%E7%A0%8D%E4%BB%B7%E6%89%AC%E8%A8%80%E9%BB%91%E7%BA%A2%E4%B9%9F%E6%98%AF%E7%BA%A2%23) `165.6K 🔥` `NEW`
1. [张婧仪妆前素颜状态](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%A9%A7%E4%BB%AA%E5%A6%86%E5%89%8D%E7%B4%A0%E9%A2%9C%E7%8A%B6%E6%80%81%23) `165.3K 🔥` `NEW`
1. [升学宴事故有伤者仍在ICU](https://s.weibo.com/weibo?q=%23%E5%8D%87%E5%AD%A6%E5%AE%B4%E4%BA%8B%E6%95%85%E6%9C%89%E4%BC%A4%E8%80%85%E4%BB%8D%E5%9C%A8ICU%23) `158.8K 🔥` `NEW`
1. [蔡依林 你觉得我的人生很悲惨吗](https://s.weibo.com/weibo?q=%23%E8%94%A1%E4%BE%9D%E6%9E%97%20%E4%BD%A0%E8%A7%89%E5%BE%97%E6%88%91%E7%9A%84%E4%BA%BA%E7%94%9F%E5%BE%88%E6%82%B2%E6%83%A8%E5%90%97%23) `156.9K 🔥` `NEW`
1. [娜扎眼疾恢复后状态](https://s.weibo.com/weibo?q=%23%E5%A8%9C%E6%89%8E%E7%9C%BC%E7%96%BE%E6%81%A2%E5%A4%8D%E5%90%8E%E7%8A%B6%E6%80%81%23) `130.7K 🔥` `NEW`
1. [又多了一个喝水的理由 (One more reason to drink water)](https://s.weibo.com/weibo?q=%23%E5%8F%88%E5%A4%9A%E4%BA%86%E4%B8%80%E4%B8%AA%E5%96%9D%E6%B0%B4%E7%9A%84%E7%90%86%E7%94%B1%23) `126.3K 🔥` `NEW`
1. [披荆斩棘直播](https://s.weibo.com/weibo?q=%23%E6%8A%AB%E8%8D%86%E6%96%A9%E6%A3%98%E7%9B%B4%E6%92%AD%23) `123.3K 🔥` `NEW`
1. [李嘉诚戴400美元西铁城](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%98%89%E8%AF%9A%E6%88%B4400%E7%BE%8E%E5%85%83%E8%A5%BF%E9%93%81%E5%9F%8E%23) `120.9K 🔥` `NEW`
1. [LV至少6次告国知局](https://s.weibo.com/weibo?q=%23LV%E8%87%B3%E5%B0%916%E6%AC%A1%E5%91%8A%E5%9B%BD%E7%9F%A5%E5%B1%80%23) `120.8K 🔥` `NEW`
1. [张月陈瑶 青春芒果夜](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%88%E9%99%88%E7%91%B6%20%E9%9D%92%E6%98%A5%E8%8A%92%E6%9E%9C%E5%A4%9C%23) `120.8K 🔥` `NEW`
1. [影院午睡2.5小时仅1元多](https://s.weibo.com/weibo?q=%23%E5%BD%B1%E9%99%A2%E5%8D%88%E7%9D%A12.5%E5%B0%8F%E6%97%B6%E4%BB%851%E5%85%83%E5%A4%9A%23) `667.3K 🔥` `+30%`
1. [时代峰峻被F1发函了](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B3%B0%E5%B3%BB%E8%A2%ABF1%E5%8F%91%E5%87%BD%E4%BA%86%23) `342.6K 🔥` `+72%`
1. [马思纯又瘦了](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E6%80%9D%E7%BA%AF%E5%8F%88%E7%98%A6%E4%BA%86%23) `333.6K 🔥` `+27%`
1. [LV将彻底退出贵州市场](https://s.weibo.com/weibo?q=%23LV%E5%B0%86%E5%BD%BB%E5%BA%95%E9%80%80%E5%87%BA%E8%B4%B5%E5%B7%9E%E5%B8%82%E5%9C%BA%23) `1.4M 🔥`
1. [于文明一审被判十五年 (Yu Wenming was sentenced to fifteen years in the first trial)](https://s.weibo.com/weibo?q=%23%E4%BA%8E%E6%96%87%E6%98%8E%E4%B8%80%E5%AE%A1%E8%A2%AB%E5%88%A4%E5%8D%81%E4%BA%94%E5%B9%B4%23) `865.0K 🔥`
1. [跟着乐事现在就出发 (Let’s go now with Leshi)](https://s.weibo.com/weibo?q=%23%E8%B7%9F%E7%9D%80%E4%B9%90%E4%BA%8B%E7%8E%B0%E5%9C%A8%E5%B0%B1%E5%87%BA%E5%8F%91%23) `710.9K 🔥`
1. [原来爱真的可以细腻成这样](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E7%88%B1%E7%9C%9F%E7%9A%84%E5%8F%AF%E4%BB%A5%E7%BB%86%E8%85%BB%E6%88%90%E8%BF%99%E6%A0%B7%23) `461.8K 🔥`
1. [云南白药京东超级品牌日 (Yunnan Baiyao JD Super Brand Day)](https://s.weibo.com/weibo?q=%23%E4%BA%91%E5%8D%97%E7%99%BD%E8%8D%AF%E4%BA%AC%E4%B8%9C%E8%B6%85%E7%BA%A7%E5%93%81%E7%89%8C%E6%97%A5%23) `443.3K 🔥`
1. [第21届金鹿奖入围名单](https://s.weibo.com/weibo?q=%23%E7%AC%AC21%E5%B1%8A%E9%87%91%E9%B9%BF%E5%A5%96%E5%85%A5%E5%9B%B4%E5%90%8D%E5%8D%95%23) `384.5K 🔥`
1. [怪不得金店不许留指甲](https://s.weibo.com/weibo?q=%23%E6%80%AA%E4%B8%8D%E5%BE%97%E9%87%91%E5%BA%97%E4%B8%8D%E8%AE%B8%E7%95%99%E6%8C%87%E7%94%B2%23) `344.0K 🔥`
1. [45岁的陈冠希48岁的黄晓明](https://s.weibo.com/weibo?q=%2345%E5%B2%81%E7%9A%84%E9%99%88%E5%86%A0%E5%B8%8C48%E5%B2%81%E7%9A%84%E9%BB%84%E6%99%93%E6%98%8E%23) `341.8K 🔥`
1. [微信聊天框 难看](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E4%BF%A1%E8%81%8A%E5%A4%A9%E6%A1%86%20%E9%9A%BE%E7%9C%8B%23) `340.7K 🔥`
1. [中餐厅给张雅琪配了时钟后期](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E9%A4%90%E5%8E%85%E7%BB%99%E5%BC%A0%E9%9B%85%E7%90%AA%E9%85%8D%E4%BA%86%E6%97%B6%E9%92%9F%E5%90%8E%E6%9C%9F%23) `338.9K 🔥`
1. [曝时代峰峻工作人员卖流浪狗](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%97%B6%E4%BB%A3%E5%B3%B0%E5%B3%BB%E5%B7%A5%E4%BD%9C%E4%BA%BA%E5%91%98%E5%8D%96%E6%B5%81%E6%B5%AA%E7%8B%97%23) `337.0K 🔥`
1. [女子游泳馆内偷拍他人洗澡发给丈夫 (Secretly filming someone taking a shower in a women's swimming pool and sending it to her husband)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%B8%B8%E6%B3%B3%E9%A6%86%E5%86%85%E5%81%B7%E6%8B%8D%E4%BB%96%E4%BA%BA%E6%B4%97%E6%BE%A1%E5%8F%91%E7%BB%99%E4%B8%88%E5%A4%AB%23) `336.6K 🔥`
1. [时代少年团 个唱](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%20%E4%B8%AA%E5%94%B1%23) `332.7K 🔥`
1. [黄金 (gold)](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%23) `310.2K 🔥`
1. [迪丽热巴耳洞发炎](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E8%80%B3%E6%B4%9E%E5%8F%91%E7%82%8E%23) `297.5K 🔥`
1. [为什么建议定期更换水杯](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E5%BB%BA%E8%AE%AE%E5%AE%9A%E6%9C%9F%E6%9B%B4%E6%8D%A2%E6%B0%B4%E6%9D%AF%23) `285.4K 🔥`
1. [日本公务人员与情人开房时出席线上会 (Japanese civil servants attended an online meeting with their lover when they checked into a hotel room)](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E5%85%AC%E5%8A%A1%E4%BA%BA%E5%91%98%E4%B8%8E%E6%83%85%E4%BA%BA%E5%BC%80%E6%88%BF%E6%97%B6%E5%87%BA%E5%B8%AD%E7%BA%BF%E4%B8%8A%E4%BC%9A%23) `270.9K 🔥`
1. [MG07上市降2万 (MG07 is launched for a price of RMB 20,000)](https://s.weibo.com/weibo?q=%23MG07%E4%B8%8A%E5%B8%82%E9%99%8D2%E4%B8%87%23) `270.3K 🔥`
1. [62岁女子生下6斤重婴儿](https://s.weibo.com/weibo?q=%2362%E5%B2%81%E5%A5%B3%E5%AD%90%E7%94%9F%E4%B8%8B6%E6%96%A4%E9%87%8D%E5%A9%B4%E5%84%BF%23) `269.7K 🔥`
1. [张子枫瘦得脸颊肉都没了](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%AD%90%E6%9E%AB%E7%98%A6%E5%BE%97%E8%84%B8%E9%A2%8A%E8%82%89%E9%83%BD%E6%B2%A1%E4%BA%86%23) `256.0K 🔥`
1. [周杰伦以昆凌名义购入豪宅](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%9D%B0%E4%BC%A6%E4%BB%A5%E6%98%86%E5%87%8C%E5%90%8D%E4%B9%89%E8%B4%AD%E5%85%A5%E8%B1%AA%E5%AE%85%23) `254.9K 🔥`
1. [大王瘦了47斤](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E7%8E%8B%E7%98%A6%E4%BA%8647%E6%96%A4%23) `166.9K 🔥`
1. [有纹身被叫符文法师](https://s.weibo.com/weibo?q=%23%E6%9C%89%E7%BA%B9%E8%BA%AB%E8%A2%AB%E5%8F%AB%E7%AC%A6%E6%96%87%E6%B3%95%E5%B8%88%23) `159.3K 🔥`
1. [张雅琪中餐厅宿舍镜头](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%85%E7%90%AA%E4%B8%AD%E9%A4%90%E5%8E%85%E5%AE%BF%E8%88%8D%E9%95%9C%E5%A4%B4%23) `158.7K 🔥`
1. [癌症疫苗价格 (cancer vaccine prices)](https://s.weibo.com/weibo?q=%23%E7%99%8C%E7%97%87%E7%96%AB%E8%8B%97%E4%BB%B7%E6%A0%BC%23) `120.8K 🔥`
1. [微信 按住转文字 (WeChat press and hold to text)](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E4%BF%A1%20%E6%8C%89%E4%BD%8F%E8%BD%AC%E6%96%87%E5%AD%97%23) `464.7K 🔥` `-33%`
1. [黄晓明说陈梦永远是赢家 (Huang Xiaoming said Chen Meng is always the winner)](https://s.weibo.com/weibo?q=%23%E9%BB%84%E6%99%93%E6%98%8E%E8%AF%B4%E9%99%88%E6%A2%A6%E6%B0%B8%E8%BF%9C%E6%98%AF%E8%B5%A2%E5%AE%B6%23) `278.3K 🔥` `-21%`
1. [丁禹兮柯淳新剧状态 (Ding Yuxi Ke Chun new drama status)](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A6%B9%E5%85%AE%E6%9F%AF%E6%B7%B3%E6%96%B0%E5%89%A7%E7%8A%B6%E6%80%81%23) `207.2K 🔥` `-22%`
1. [MG07价格爆爆爆爆爆爆爆爆爆爆爆](https://s.weibo.com/weibo?q=%23MG07%E4%BB%B7%E6%A0%BC%E7%88%86%E7%88%86%E7%88%86%E7%88%86%E7%88%86%E7%88%86%E7%88%86%E7%88%86%E7%88%86%E7%88%86%E7%88%86%23) `184.1K 🔥` `-48%`
1. [在座位排泄女子该担责赔偿吗](https://s.weibo.com/weibo?q=%23%E5%9C%A8%E5%BA%A7%E4%BD%8D%E6%8E%92%E6%B3%84%E5%A5%B3%E5%AD%90%E8%AF%A5%E6%8B%85%E8%B4%A3%E8%B5%94%E5%81%BF%E5%90%97%23) `183.1K 🔥` `-42%`
1. [老爷爷抱两只打架猫咪拍照 (Grandpa takes photos with two fighting cats)](https://s.weibo.com/weibo?q=%23%E8%80%81%E7%88%B7%E7%88%B7%E6%8A%B1%E4%B8%A4%E5%8F%AA%E6%89%93%E6%9E%B6%E7%8C%AB%E5%92%AA%E6%8B%8D%E7%85%A7%23) `178.5K 🔥` `-25%`
1. [时代少年团F1商标相似度](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2F1%E5%95%86%E6%A0%87%E7%9B%B8%E4%BC%BC%E5%BA%A6%23) `166.5K 🔥` `-30%`
1. [加木遭遇严重车祸 (Jiamu suffered a serious car accident)](https://s.weibo.com/weibo?q=%23%E5%8A%A0%E6%9C%A8%E9%81%AD%E9%81%87%E4%B8%A5%E9%87%8D%E8%BD%A6%E7%A5%B8%23) `158.0K 🔥` `-28%`
1. [80后保命要紧 (It is important for those born in the 1980s to save their lives)](https://s.weibo.com/weibo?q=%2380%E5%90%8E%E4%BF%9D%E5%91%BD%E8%A6%81%E7%B4%A7%23) `156.6K 🔥` `-24%`

Updated at 2026-08-21 19:35:39

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
