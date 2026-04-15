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

1. [白日提灯 双结局 (Lantern by Day Double Ending)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%97%A5%E6%8F%90%E7%81%AF%20%E5%8F%8C%E7%BB%93%E5%B1%80%23) `194.8K 🔥` `NEW`
1. [白日提灯大结局](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%97%A5%E6%8F%90%E7%81%AF%E5%A4%A7%E7%BB%93%E5%B1%80%23) `189.3K 🔥` `NEW`
1. [孟子义李昀锐 等风热吻你](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89%E6%9D%8E%E6%98%80%E9%94%90%20%E7%AD%89%E9%A3%8E%E7%83%AD%E5%90%BB%E4%BD%A0%23) `153.5K 🔥` `NEW`
1. [朱一龙直播](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E4%B8%80%E9%BE%99%E7%9B%B4%E6%92%AD%23) `126.0K 🔥` `NEW`
1. [王星越开保时捷上班](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%98%9F%E8%B6%8A%E5%BC%80%E4%BF%9D%E6%97%B6%E6%8D%B7%E4%B8%8A%E7%8F%AD%23) `101.5K 🔥` `NEW`
1. [小鹏GX把四大安全测试场搬到发布会](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E9%B9%8FGX%E6%8A%8A%E5%9B%9B%E5%A4%A7%E5%AE%89%E5%85%A8%E6%B5%8B%E8%AF%95%E5%9C%BA%E6%90%AC%E5%88%B0%E5%8F%91%E5%B8%83%E4%BC%9A%23) `100.5K 🔥` `NEW`
1. [张凌赫还当过爱格的模特](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E8%BF%98%E5%BD%93%E8%BF%87%E7%88%B1%E6%A0%BC%E7%9A%84%E6%A8%A1%E7%89%B9%23) `100.2K 🔥` `NEW`
1. [李小冉肉眼可见的越来越累](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B0%8F%E5%86%89%E8%82%89%E7%9C%BC%E5%8F%AF%E8%A7%81%E7%9A%84%E8%B6%8A%E6%9D%A5%E8%B6%8A%E7%B4%AF%23) `98.8K 🔥` `NEW`
1. [当地文旅呼吁不得借泼水之名骚扰](https://s.weibo.com/weibo?q=%23%E5%BD%93%E5%9C%B0%E6%96%87%E6%97%85%E5%91%BC%E5%90%81%E4%B8%8D%E5%BE%97%E5%80%9F%E6%B3%BC%E6%B0%B4%E4%B9%8B%E5%90%8D%E9%AA%9A%E6%89%B0%23) `98.7K 🔥` `NEW`
1. [何润东 资源从天而降](https://s.weibo.com/weibo?q=%23%E4%BD%95%E6%B6%A6%E4%B8%9C%20%E8%B5%84%E6%BA%90%E4%BB%8E%E5%A4%A9%E8%80%8C%E9%99%8D%23) `98.0K 🔥` `NEW`
1. [中国三胞胎的视频在推特上火了 (Video of Chinese triplets goes viral on Twitter)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E4%B8%89%E8%83%9E%E8%83%8E%E7%9A%84%E8%A7%86%E9%A2%91%E5%9C%A8%E6%8E%A8%E7%89%B9%E4%B8%8A%E7%81%AB%E4%BA%86%23) `97.5K 🔥` `NEW`
1. [莫氏鸡煲少当家成中年富二代](https://s.weibo.com/weibo?q=%23%E8%8E%AB%E6%B0%8F%E9%B8%A1%E7%85%B2%E5%B0%91%E5%BD%93%E5%AE%B6%E6%88%90%E4%B8%AD%E5%B9%B4%E5%AF%8C%E4%BA%8C%E4%BB%A3%23) `97.3K 🔥` `NEW`
1. [李小冉比温峥嵘还大两岁](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B0%8F%E5%86%89%E6%AF%94%E6%B8%A9%E5%B3%A5%E5%B5%98%E8%BF%98%E5%A4%A7%E4%B8%A4%E5%B2%81%23) `94.3K 🔥` `NEW`
1. [张柏芝开灯瞬间 惊艳](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9F%8F%E8%8A%9D%E5%BC%80%E7%81%AF%E7%9E%AC%E9%97%B4%20%E6%83%8A%E8%89%B3%23) `82.3K 🔥` `NEW`
1. [当你是公司最小的员工](https://s.weibo.com/weibo?q=%23%E5%BD%93%E4%BD%A0%E6%98%AF%E5%85%AC%E5%8F%B8%E6%9C%80%E5%B0%8F%E7%9A%84%E5%91%98%E5%B7%A5%23) `80.5K 🔥` `NEW`
1. [王一博素颜拍GQ](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E7%B4%A0%E9%A2%9C%E6%8B%8DGQ%23) `80.4K 🔥` `NEW`
1. [峰学蔚来负责人回应公司近况](https://s.weibo.com/weibo?q=%23%E5%B3%B0%E5%AD%A6%E8%94%9A%E6%9D%A5%E8%B4%9F%E8%B4%A3%E4%BA%BA%E5%9B%9E%E5%BA%94%E5%85%AC%E5%8F%B8%E8%BF%91%E5%86%B5%23) `69.6K 🔥` `NEW`
1. [松岛教练直言输王楚钦无解](https://s.weibo.com/weibo?q=%23%E6%9D%BE%E5%B2%9B%E6%95%99%E7%BB%83%E7%9B%B4%E8%A8%80%E8%BE%93%E7%8E%8B%E6%A5%9A%E9%92%A6%E6%97%A0%E8%A7%A3%23) `69.5K 🔥` `NEW`
1. [想咬一口结果舌头伸到嗓子眼了](https://s.weibo.com/weibo?q=%23%E6%83%B3%E5%92%AC%E4%B8%80%E5%8F%A3%E7%BB%93%E6%9E%9C%E8%88%8C%E5%A4%B4%E4%BC%B8%E5%88%B0%E5%97%93%E5%AD%90%E7%9C%BC%E4%BA%86%23) `63.1K 🔥` `NEW`
1. [小米17Max通过认证](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B317Max%E9%80%9A%E8%BF%87%E8%AE%A4%E8%AF%81%23) `58.5K 🔥` `NEW`
1. [法国罕见全票通过文物归还法案 (France passes a rare unanimous vote to repatriate cultural relics)](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%9B%BD%E7%BD%95%E8%A7%81%E5%85%A8%E7%A5%A8%E9%80%9A%E8%BF%87%E6%96%87%E7%89%A9%E5%BD%92%E8%BF%98%E6%B3%95%E6%A1%88%23) `1.1M 🔥` `+1053%`
1. [香港14岁男学生成黑社会骨干](https://s.weibo.com/weibo?q=%23%E9%A6%99%E6%B8%AF14%E5%B2%81%E7%94%B7%E5%AD%A6%E7%94%9F%E6%88%90%E9%BB%91%E7%A4%BE%E4%BC%9A%E9%AA%A8%E5%B9%B2%23) `231.0K 🔥` `+184%`
1. [唐禹哲承认逃兵役](https://s.weibo.com/weibo?q=%23%E5%94%90%E7%A6%B9%E5%93%B2%E6%89%BF%E8%AE%A4%E9%80%83%E5%85%B5%E5%BD%B9%23) `164.3K 🔥` `+81%`
1. [上万美军封锁霍尔木兹海峡](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E4%B8%87%E7%BE%8E%E5%86%9B%E5%B0%81%E9%94%81%E9%9C%8D%E5%B0%94%E6%9C%A8%E5%85%B9%E6%B5%B7%E5%B3%A1%23) `150.3K 🔥` `+66%`
1. [姚安娜代言华为](https://s.weibo.com/weibo?q=%23%E5%A7%9A%E5%AE%89%E5%A8%9C%E4%BB%A3%E8%A8%80%E5%8D%8E%E4%B8%BA%23) `136.2K 🔥` `+44%`
1. [家国长安宁全民共守护](https://s.weibo.com/weibo?q=%23%E5%AE%B6%E5%9B%BD%E9%95%BF%E5%AE%89%E5%AE%81%E5%85%A8%E6%B0%91%E5%85%B1%E5%AE%88%E6%8A%A4%23) `650.1K 🔥`
1. [2026中国大学排名](https://s.weibo.com/weibo?q=%232026%E4%B8%AD%E5%9B%BD%E5%A4%A7%E5%AD%A6%E6%8E%92%E5%90%8D%23) `164.9K 🔥`
1. [网红炫迈妹子被猫误伤毁容](https://s.weibo.com/weibo?q=%23%E7%BD%91%E7%BA%A2%E7%82%AB%E8%BF%88%E5%A6%B9%E5%AD%90%E8%A2%AB%E7%8C%AB%E8%AF%AF%E4%BC%A4%E6%AF%81%E5%AE%B9%23) `142.3K 🔥`
1. [小米上线电池升级服务](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E4%B8%8A%E7%BA%BF%E7%94%B5%E6%B1%A0%E5%8D%87%E7%BA%A7%E6%9C%8D%E5%8A%A1%23) `102.1K 🔥`
1. [叶舒华ins评论区](https://s.weibo.com/weibo?q=%23%E5%8F%B6%E8%88%92%E5%8D%8Eins%E8%AF%84%E8%AE%BA%E5%8C%BA%23) `99.9K 🔥`
1. [在德读硕中国小伙多次下药迷奸女友 (A Chinese guy studying for a master's degree in Germany drugged and raped his girlfriend multiple times)](https://s.weibo.com/weibo?q=%23%E5%9C%A8%E5%BE%B7%E8%AF%BB%E7%A1%95%E4%B8%AD%E5%9B%BD%E5%B0%8F%E4%BC%99%E5%A4%9A%E6%AC%A1%E4%B8%8B%E8%8D%AF%E8%BF%B7%E5%A5%B8%E5%A5%B3%E5%8F%8B%23) `99.6K 🔥`
1. [魏晨儿子都这么大了](https://s.weibo.com/weibo?q=%23%E9%AD%8F%E6%99%A8%E5%84%BF%E5%AD%90%E9%83%BD%E8%BF%99%E4%B9%88%E5%A4%A7%E4%BA%86%23) `99.1K 🔥`
1. [出生4天被秤砣砸中女婴3次尿血](https://s.weibo.com/weibo?q=%23%E5%87%BA%E7%94%9F4%E5%A4%A9%E8%A2%AB%E7%A7%A4%E7%A0%A3%E7%A0%B8%E4%B8%AD%E5%A5%B3%E5%A9%B43%E6%AC%A1%E5%B0%BF%E8%A1%80%23) `92.9K 🔥`
1. [张真源暂时缺席录制跑男](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%9C%9F%E6%BA%90%E6%9A%82%E6%97%B6%E7%BC%BA%E5%B8%AD%E5%BD%95%E5%88%B6%E8%B7%91%E7%94%B7%23) `87.8K 🔥`
1. [肝癌症状常常被误以为是太累](https://s.weibo.com/weibo?q=%23%E8%82%9D%E7%99%8C%E7%97%87%E7%8A%B6%E5%B8%B8%E5%B8%B8%E8%A2%AB%E8%AF%AF%E4%BB%A5%E4%B8%BA%E6%98%AF%E5%A4%AA%E7%B4%AF%23) `86.4K 🔥`
1. [比伯儿子都这么大了](https://s.weibo.com/weibo?q=%23%E6%AF%94%E4%BC%AF%E5%84%BF%E5%AD%90%E9%83%BD%E8%BF%99%E4%B9%88%E5%A4%A7%E4%BA%86%23) `82.9K 🔥`
1. [骗B太大山女孩被百万网红长期资助 (The girl who deceived B Taishan was funded by millions of Internet celebrities for a long time)](https://s.weibo.com/weibo?q=%23%E9%AA%97B%E5%A4%AA%E5%A4%A7%E5%B1%B1%E5%A5%B3%E5%AD%A9%E8%A2%AB%E7%99%BE%E4%B8%87%E7%BD%91%E7%BA%A2%E9%95%BF%E6%9C%9F%E8%B5%84%E5%8A%A9%23) `791.8K 🔥` `-29%`
1. [成毅绽家首位品牌全球代言人 (Cheng Yixuan’s first global brand spokesperson)](https://s.weibo.com/weibo?q=%23%E6%88%90%E6%AF%85%E7%BB%BD%E5%AE%B6%E9%A6%96%E4%BD%8D%E5%93%81%E7%89%8C%E5%85%A8%E7%90%83%E4%BB%A3%E8%A8%80%E4%BA%BA%23) `243.5K 🔥` `-51%`
1. [俄方提出帮助中国弥补能源短缺](https://s.weibo.com/weibo?q=%23%E4%BF%84%E6%96%B9%E6%8F%90%E5%87%BA%E5%B8%AE%E5%8A%A9%E4%B8%AD%E5%9B%BD%E5%BC%A5%E8%A1%A5%E8%83%BD%E6%BA%90%E7%9F%AD%E7%BC%BA%23) `196.5K 🔥` `-76%`
1. [人体器官衰老的时间规律](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E4%BD%93%E5%99%A8%E5%AE%98%E8%A1%B0%E8%80%81%E7%9A%84%E6%97%B6%E9%97%B4%E8%A7%84%E5%BE%8B%23) `194.6K 🔥` `-31%`
1. [皮蛋黄瓜汤](https://s.weibo.com/weibo?q=%23%E7%9A%AE%E8%9B%8B%E9%BB%84%E7%93%9C%E6%B1%A4%23) `194.5K 🔥` `-37%`
1. [我旅游不跟三种人出去](https://s.weibo.com/weibo?q=%23%E6%88%91%E6%97%85%E6%B8%B8%E4%B8%8D%E8%B7%9F%E4%B8%89%E7%A7%8D%E4%BA%BA%E5%87%BA%E5%8E%BB%23) `191.6K 🔥` `-48%`
1. [灵隐寺严正声明 (Lingyin Temple solemn statement)](https://s.weibo.com/weibo?q=%23%E7%81%B5%E9%9A%90%E5%AF%BA%E4%B8%A5%E6%AD%A3%E5%A3%B0%E6%98%8E%23) `129.6K 🔥` `-51%`
1. [王者荣耀 (King of Glory)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%80%85%E8%8D%A3%E8%80%80%23) `122.8K 🔥` `-29%`
1. [罗志祥举日期为自己辟谣 (Luo Zhixiang cited the date to refute the rumors)](https://s.weibo.com/weibo?q=%23%E7%BD%97%E5%BF%97%E7%A5%A5%E4%B8%BE%E6%97%A5%E6%9C%9F%E4%B8%BA%E8%87%AA%E5%B7%B1%E8%BE%9F%E8%B0%A3%23) `102.0K 🔥` `-41%`
1. [北京文旅一觉醒来天塌了](https://s.weibo.com/weibo?q=%23%E5%8C%97%E4%BA%AC%E6%96%87%E6%97%85%E4%B8%80%E8%A7%89%E9%86%92%E6%9D%A5%E5%A4%A9%E5%A1%8C%E4%BA%86%23) `101.3K 🔥` `-42%`
1. [谢娜演唱会门票秒罄](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%A8%9C%E6%BC%94%E5%94%B1%E4%BC%9A%E9%97%A8%E7%A5%A8%E7%A7%92%E7%BD%84%23) `100.8K 🔥` `-69%`
1. [痞幼胖了17斤](https://s.weibo.com/weibo?q=%23%E7%97%9E%E5%B9%BC%E8%83%96%E4%BA%8617%E6%96%A4%23) `98.1K 🔥` `-43%`
1. [何润东接上王者荣耀商务了](https://s.weibo.com/weibo?q=%23%E4%BD%95%E6%B6%A6%E4%B8%9C%E6%8E%A5%E4%B8%8A%E7%8E%8B%E8%80%85%E8%8D%A3%E8%80%80%E5%95%86%E5%8A%A1%E4%BA%86%23) `91.3K 🔥` `-47%`
1. [曾沛慈 毛巾包头](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E6%B2%9B%E6%85%88%20%E6%AF%9B%E5%B7%BE%E5%8C%85%E5%A4%B4%23) `79.9K 🔥` `-54%`
1. [第1天入职第2天就出国 (On the first day of employment, he left the country on the second day)](https://s.weibo.com/weibo?q=%23%E7%AC%AC1%E5%A4%A9%E5%85%A5%E8%81%8C%E7%AC%AC2%E5%A4%A9%E5%B0%B1%E5%87%BA%E5%9B%BD%23) `68.2K 🔥` `-61%`
1. [霍尔木兹堵不住中国 (Hormuz cannot stop China)](https://s.weibo.com/weibo?q=%23%E9%9C%8D%E5%B0%94%E6%9C%A8%E5%85%B9%E5%A0%B5%E4%B8%8D%E4%BD%8F%E4%B8%AD%E5%9B%BD%23) `63.1K 🔥` `-32%`

Updated at 2026-04-15 19:30:50

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
