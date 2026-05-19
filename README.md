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

1. [豆包崩了 (The bean bag collapsed)](https://s.weibo.com/weibo?q=%23%E8%B1%86%E5%8C%85%E5%B4%A9%E4%BA%86%23) `1.9M 🔥` `NEW`
1. [给阿嬷的情书 删减的最后一封信](https://s.weibo.com/weibo?q=%23%E7%BB%99%E9%98%BF%E5%AC%B7%E7%9A%84%E6%83%85%E4%B9%A6%20%E5%88%A0%E5%87%8F%E7%9A%84%E6%9C%80%E5%90%8E%E4%B8%80%E5%B0%81%E4%BF%A1%23) `966.8K 🔥` `NEW`
1. [走好网上群众路线百个成绩突出账号](https://s.weibo.com/weibo?q=%23%E8%B5%B0%E5%A5%BD%E7%BD%91%E4%B8%8A%E7%BE%A4%E4%BC%97%E8%B7%AF%E7%BA%BF%E7%99%BE%E4%B8%AA%E6%88%90%E7%BB%A9%E7%AA%81%E5%87%BA%E8%B4%A6%E5%8F%B7%23) `740.6K 🔥` `NEW`
1. [腾势N9闪充版上市价40.98万起](https://s.weibo.com/weibo?q=%23%E8%85%BE%E5%8A%BFN9%E9%97%AA%E5%85%85%E7%89%88%E4%B8%8A%E5%B8%82%E4%BB%B740.98%E4%B8%87%E8%B5%B7%23) `687.2K 🔥` `NEW`
1. [工作留痕的重要性](https://s.weibo.com/weibo?q=%23%E5%B7%A5%E4%BD%9C%E7%95%99%E7%97%95%E7%9A%84%E9%87%8D%E8%A6%81%E6%80%A7%23) `686.6K 🔥` `NEW`
1. [24岁女孩遗体放殡仪馆18年无人处理](https://s.weibo.com/weibo?q=%2324%E5%B2%81%E5%A5%B3%E5%AD%A9%E9%81%97%E4%BD%93%E6%94%BE%E6%AE%A1%E4%BB%AA%E9%A6%8618%E5%B9%B4%E6%97%A0%E4%BA%BA%E5%A4%84%E7%90%86%23) `615.5K 🔥` `NEW`
1. [白玉兰](https://s.weibo.com/weibo?q=%23%E7%99%BD%E7%8E%89%E5%85%B0%23) `504.1K 🔥` `NEW`
1. [关于荨麻疹的几种说法是谣言](https://s.weibo.com/weibo?q=%23%E5%85%B3%E4%BA%8E%E8%8D%A8%E9%BA%BB%E7%96%B9%E7%9A%84%E5%87%A0%E7%A7%8D%E8%AF%B4%E6%B3%95%E6%98%AF%E8%B0%A3%E8%A8%80%23) `498.9K 🔥` `NEW`
1. [机建燃油费](https://s.weibo.com/weibo?q=%23%E6%9C%BA%E5%BB%BA%E7%87%83%E6%B2%B9%E8%B4%B9%23) `344.2K 🔥` `NEW`
1. [曝平台三部剧逃档](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%B9%B3%E5%8F%B0%E4%B8%89%E9%83%A8%E5%89%A7%E9%80%83%E6%A1%A3%23) `296.6K 🔥` `NEW`
1. [天赐的声音 穆祉丞 (God-given voice Mu Zhicheng)](https://s.weibo.com/weibo?q=%23%E5%A4%A9%E8%B5%90%E7%9A%84%E5%A3%B0%E9%9F%B3%20%E7%A9%86%E7%A5%89%E4%B8%9E%23) `262.4K 🔥` `NEW`
1. [主任医师在近500人群里发私密照](https://s.weibo.com/weibo?q=%23%E4%B8%BB%E4%BB%BB%E5%8C%BB%E5%B8%88%E5%9C%A8%E8%BF%91500%E4%BA%BA%E7%BE%A4%E9%87%8C%E5%8F%91%E7%A7%81%E5%AF%86%E7%85%A7%23) `249.3K 🔥` `NEW`
1. [毛巾少爷最新视频去二叔化](https://s.weibo.com/weibo?q=%23%E6%AF%9B%E5%B7%BE%E5%B0%91%E7%88%B7%E6%9C%80%E6%96%B0%E8%A7%86%E9%A2%91%E5%8E%BB%E4%BA%8C%E5%8F%94%E5%8C%96%23) `247.5K 🔥` `NEW`
1. [恋与深空礼盒](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%E7%A4%BC%E7%9B%92%23) `246.9K 🔥` `NEW`
1. [马嘉祺宋亚轩中戏校园卡照片](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%98%89%E7%A5%BA%E5%AE%8B%E4%BA%9A%E8%BD%A9%E4%B8%AD%E6%88%8F%E6%A0%A1%E5%9B%AD%E5%8D%A1%E7%85%A7%E7%89%87%23) `223.2K 🔥` `NEW`
1. [梁靖崑说登上洛杉矶奥运是梦想](https://s.weibo.com/weibo?q=%23%E6%A2%81%E9%9D%96%E5%B4%91%E8%AF%B4%E7%99%BB%E4%B8%8A%E6%B4%9B%E6%9D%89%E7%9F%B6%E5%A5%A5%E8%BF%90%E6%98%AF%E6%A2%A6%E6%83%B3%23) `223.1K 🔥` `NEW`
1. [杨紫把韩东君气疯了](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E6%8A%8A%E9%9F%A9%E4%B8%9C%E5%90%9B%E6%B0%94%E7%96%AF%E4%BA%86%23) `223.0K 🔥` `NEW`
1. [孙丞潇给金莎的备注是黄逗犟](https://s.weibo.com/weibo?q=%23%E5%AD%99%E4%B8%9E%E6%BD%87%E7%BB%99%E9%87%91%E8%8E%8E%E7%9A%84%E5%A4%87%E6%B3%A8%E6%98%AF%E9%BB%84%E9%80%97%E7%8A%9F%23) `197.5K 🔥` `NEW`
1. [巨力索具杨氏家族套现已30亿](https://s.weibo.com/weibo?q=%23%E5%B7%A8%E5%8A%9B%E7%B4%A2%E5%85%B7%E6%9D%A8%E6%B0%8F%E5%AE%B6%E6%97%8F%E5%A5%97%E7%8E%B0%E5%B7%B230%E4%BA%BF%23) `192.8K 🔥` `NEW`
1. [曝李庚希提名白玉兰最佳女主角](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%9D%8E%E5%BA%9A%E5%B8%8C%E6%8F%90%E5%90%8D%E7%99%BD%E7%8E%89%E5%85%B0%E6%9C%80%E4%BD%B3%E5%A5%B3%E4%B8%BB%E8%A7%92%23) `189.7K 🔥` `NEW`
1. [柳州地震全家11口最后一刻逃生 (A family of 11 escaped from Liuzhou earthquake at the last moment)](https://s.weibo.com/weibo?q=%23%E6%9F%B3%E5%B7%9E%E5%9C%B0%E9%9C%87%E5%85%A8%E5%AE%B611%E5%8F%A3%E6%9C%80%E5%90%8E%E4%B8%80%E5%88%BB%E9%80%83%E7%94%9F%23) `189.4K 🔥` `NEW`
1. [汪涵在大学时就有红的前兆](https://s.weibo.com/weibo?q=%23%E6%B1%AA%E6%B6%B5%E5%9C%A8%E5%A4%A7%E5%AD%A6%E6%97%B6%E5%B0%B1%E6%9C%89%E7%BA%A2%E7%9A%84%E5%89%8D%E5%85%86%23) `178.0K 🔥` `NEW`
1. [主角](https://s.weibo.com/weibo?q=%23%E4%B8%BB%E8%A7%92%23) `177.4K 🔥` `NEW`
1. [AI服务涉黄第一案本周再开庭](https://s.weibo.com/weibo?q=%23AI%E6%9C%8D%E5%8A%A1%E6%B6%89%E9%BB%84%E7%AC%AC%E4%B8%80%E6%A1%88%E6%9C%AC%E5%91%A8%E5%86%8D%E5%BC%80%E5%BA%AD%23) `177.4K 🔥` `NEW`
1. [TVB前艺人马浚伟转行做高管](https://s.weibo.com/weibo?q=%23TVB%E5%89%8D%E8%89%BA%E4%BA%BA%E9%A9%AC%E6%B5%9A%E4%BC%9F%E8%BD%AC%E8%A1%8C%E5%81%9A%E9%AB%98%E7%AE%A1%23) `177.3K 🔥` `NEW`
1. [张凌赫丁程鑫拥抱](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E4%B8%81%E7%A8%8B%E9%91%AB%E6%8B%A5%E6%8A%B1%23) `165.7K 🔥` `NEW`
1. [3岁娃被独自分到8节外静音车厢](https://s.weibo.com/weibo?q=%233%E5%B2%81%E5%A8%83%E8%A2%AB%E7%8B%AC%E8%87%AA%E5%88%86%E5%88%B08%E8%8A%82%E5%A4%96%E9%9D%99%E9%9F%B3%E8%BD%A6%E5%8E%A2%23) `164.0K 🔥` `NEW`
1. [章晓梅章晓燕为无关个体](https://s.weibo.com/weibo?q=%23%E7%AB%A0%E6%99%93%E6%A2%85%E7%AB%A0%E6%99%93%E7%87%95%E4%B8%BA%E6%97%A0%E5%85%B3%E4%B8%AA%E4%BD%93%23) `161.0K 🔥` `NEW`
1. [杨紫新剧刚开播为何现千条雷同差评](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E6%96%B0%E5%89%A7%E5%88%9A%E5%BC%80%E6%92%AD%E4%B8%BA%E4%BD%95%E7%8E%B0%E5%8D%83%E6%9D%A1%E9%9B%B7%E5%90%8C%E5%B7%AE%E8%AF%84%23) `156.0K 🔥` `NEW`
1. [汪浚熙 音乐节](https://s.weibo.com/weibo?q=%23%E6%B1%AA%E6%B5%9A%E7%86%99%20%E9%9F%B3%E4%B9%90%E8%8A%82%23) `152.4K 🔥` `NEW`
1. [张凌赫解压方式是研究参数 (Zhang Linghe’s decompression method is a research parameter)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E8%A7%A3%E5%8E%8B%E6%96%B9%E5%BC%8F%E6%98%AF%E7%A0%94%E7%A9%B6%E5%8F%82%E6%95%B0%23) `150.3K 🔥` `NEW`
1. [家业](https://s.weibo.com/weibo?q=%23%E5%AE%B6%E4%B8%9A%23) `146.5K 🔥` `NEW`
1. [叠纸心意开智了](https://s.weibo.com/weibo?q=%23%E5%8F%A0%E7%BA%B8%E5%BF%83%E6%84%8F%E5%BC%80%E6%99%BA%E4%BA%86%23) `145.6K 🔥` `NEW`
1. [联想发布会 张凌赫](https://s.weibo.com/weibo?q=%23%E8%81%94%E6%83%B3%E5%8F%91%E5%B8%83%E4%BC%9A%20%E5%BC%A0%E5%87%8C%E8%B5%AB%23) `144.3K 🔥` `NEW`
1. [泰国终止60天免签](https://s.weibo.com/weibo?q=%23%E6%B3%B0%E5%9B%BD%E7%BB%88%E6%AD%A260%E5%A4%A9%E5%85%8D%E7%AD%BE%23) `135.4K 🔥` `NEW`
1. [小米获有色金属工业科学技术一等奖](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E8%8E%B7%E6%9C%89%E8%89%B2%E9%87%91%E5%B1%9E%E5%B7%A5%E4%B8%9A%E7%A7%91%E5%AD%A6%E6%8A%80%E6%9C%AF%E4%B8%80%E7%AD%89%E5%A5%96%23) `134.1K 🔥` `NEW`
1. [特朗普暗示日本过头了](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E6%9A%97%E7%A4%BA%E6%97%A5%E6%9C%AC%E8%BF%87%E5%A4%B4%E4%BA%86%23) `418.8K 🔥`
1. [女子帮亲哥贷款23万买房后成黑户](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%B8%AE%E4%BA%B2%E5%93%A5%E8%B4%B7%E6%AC%BE23%E4%B8%87%E4%B9%B0%E6%88%BF%E5%90%8E%E6%88%90%E9%BB%91%E6%88%B7%23) `184.4K 🔥`
1. [白鹿侯明昊17年拍的剧要上了](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E4%BE%AF%E6%98%8E%E6%98%8A17%E5%B9%B4%E6%8B%8D%E7%9A%84%E5%89%A7%E8%A6%81%E4%B8%8A%E4%BA%86%23) `495.6K 🔥` `-39%`
1. [第一次被中式美学震撼到](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%AC%A1%E8%A2%AB%E4%B8%AD%E5%BC%8F%E7%BE%8E%E5%AD%A6%E9%9C%87%E6%92%BC%E5%88%B0%23) `401.0K 🔥` `-48%`
1. [长白头发不是因为老是你太累了 (The reason you have gray hair is not because you are too tired all the time.)](https://s.weibo.com/weibo?q=%23%E9%95%BF%E7%99%BD%E5%A4%B4%E5%8F%91%E4%B8%8D%E6%98%AF%E5%9B%A0%E4%B8%BA%E8%80%81%E6%98%AF%E4%BD%A0%E5%A4%AA%E7%B4%AF%E4%BA%86%23) `374.7K 🔥` `-52%`
1. [黄灿灿 发腮受益者](https://s.weibo.com/weibo?q=%23%E9%BB%84%E7%81%BF%E7%81%BF%20%E5%8F%91%E8%85%AE%E5%8F%97%E7%9B%8A%E8%80%85%23) `370.1K 🔥` `-28%`
1. [孙杨采访时突然开始点餐](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%9D%A8%E9%87%87%E8%AE%BF%E6%97%B6%E7%AA%81%E7%84%B6%E5%BC%80%E5%A7%8B%E7%82%B9%E9%A4%90%23) `321.9K 🔥` `-37%`
1. [24岁短剧男演员去世 (Short drama actor dies at 24)](https://s.weibo.com/weibo?q=%2324%E5%B2%81%E7%9F%AD%E5%89%A7%E7%94%B7%E6%BC%94%E5%91%98%E5%8E%BB%E4%B8%96%23) `285.6K 🔥` `-44%`
1. [金手镯没直接给新娘一周后得知丢了](https://s.weibo.com/weibo?q=%23%E9%87%91%E6%89%8B%E9%95%AF%E6%B2%A1%E7%9B%B4%E6%8E%A5%E7%BB%99%E6%96%B0%E5%A8%98%E4%B8%80%E5%91%A8%E5%90%8E%E5%BE%97%E7%9F%A5%E4%B8%A2%E4%BA%86%23) `270.9K 🔥` `-46%`
1. [林俊杰现身七七毕业典礼](https://s.weibo.com/weibo?q=%23%E6%9E%97%E4%BF%8A%E6%9D%B0%E7%8E%B0%E8%BA%AB%E4%B8%83%E4%B8%83%E6%AF%95%E4%B8%9A%E5%85%B8%E7%A4%BC%23) `245.8K 🔥` `-22%`
1. [杨梅泡药事件冲击浙江杨梅市场 (Incident of soaked bayberry medicine affects Zhejiang bayberry market)](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E6%A2%85%E6%B3%A1%E8%8D%AF%E4%BA%8B%E4%BB%B6%E5%86%B2%E5%87%BB%E6%B5%99%E6%B1%9F%E6%9D%A8%E6%A2%85%E5%B8%82%E5%9C%BA%23) `243.2K 🔥` `-79%`
1. [普京访华俄方代表团名单公布](https://s.weibo.com/weibo?q=%23%E6%99%AE%E4%BA%AC%E8%AE%BF%E5%8D%8E%E4%BF%84%E6%96%B9%E4%BB%A3%E8%A1%A8%E5%9B%A2%E5%90%8D%E5%8D%95%E5%85%AC%E5%B8%83%23) `239.3K 🔥` `-72%`
1. [林允 女孩儿胖一点真的好](https://s.weibo.com/weibo?q=%23%E6%9E%97%E5%85%81%20%E5%A5%B3%E5%AD%A9%E5%84%BF%E8%83%96%E4%B8%80%E7%82%B9%E7%9C%9F%E7%9A%84%E5%A5%BD%23) `225.6K 🔥` `-52%`
1. [让高品质文旅点亮诗和远方](https://s.weibo.com/weibo?q=%23%E8%AE%A9%E9%AB%98%E5%93%81%E8%B4%A8%E6%96%87%E6%97%85%E7%82%B9%E4%BA%AE%E8%AF%97%E5%92%8C%E8%BF%9C%E6%96%B9%23) `190.3K 🔥` `-77%`
1. [普京访华](https://s.weibo.com/weibo?q=%23%E6%99%AE%E4%BA%AC%E8%AE%BF%E5%8D%8E%23) `170.0K 🔥` `-41%`
1. [离职要上交公司小狗](https://s.weibo.com/weibo?q=%23%E7%A6%BB%E8%81%8C%E8%A6%81%E4%B8%8A%E4%BA%A4%E5%85%AC%E5%8F%B8%E5%B0%8F%E7%8B%97%23) `150.6K 🔥` `-54%`

Updated at 2026-05-19 20:45:29

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
