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

1. [孙颖莎vs王曼昱 (Sun Yingsha vs Wang Manyu)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8Evs%E7%8E%8B%E6%9B%BC%E6%98%B1%23) `769.5K 🔥` `NEW`
1. [妈妈不知儿子去世跟AI儿子聊了1年](https://s.weibo.com/weibo?q=%23%E5%A6%88%E5%A6%88%E4%B8%8D%E7%9F%A5%E5%84%BF%E5%AD%90%E5%8E%BB%E4%B8%96%E8%B7%9FAI%E5%84%BF%E5%AD%90%E8%81%8A%E4%BA%861%E5%B9%B4%23) `347.7K 🔥` `NEW`
1. [AG对战KSG](https://s.weibo.com/weibo?q=%23AG%E5%AF%B9%E6%88%98KSG%23) `207.9K 🔥` `NEW`
1. [男子年年带鲜花和酒祭扫无名烈士墓](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%B9%B4%E5%B9%B4%E5%B8%A6%E9%B2%9C%E8%8A%B1%E5%92%8C%E9%85%92%E7%A5%AD%E6%89%AB%E6%97%A0%E5%90%8D%E7%83%88%E5%A3%AB%E5%A2%93%23) `110.6K 🔥` `NEW`
1. [仙逆](https://s.weibo.com/weibo?q=%23%E4%BB%99%E9%80%86%23) `109.3K 🔥` `NEW`
1. [唐艺昕露背身材](https://s.weibo.com/weibo?q=%23%E5%94%90%E8%89%BA%E6%98%95%E9%9C%B2%E8%83%8C%E8%BA%AB%E6%9D%90%23) `97.8K 🔥` `NEW`
1. [咪其实是一只虎](https://s.weibo.com/weibo?q=%23%E5%92%AA%E5%85%B6%E5%AE%9E%E6%98%AF%E4%B8%80%E5%8F%AA%E8%99%8E%23) `97.5K 🔥` `NEW`
1. [佟丽娅给小酒窝朵朵听写作业](https://s.weibo.com/weibo?q=%23%E4%BD%9F%E4%B8%BD%E5%A8%85%E7%BB%99%E5%B0%8F%E9%85%92%E7%AA%9D%E6%9C%B5%E6%9C%B5%E5%90%AC%E5%86%99%E4%BD%9C%E4%B8%9A%23) `97.0K 🔥` `NEW`
1. [王楚钦6次交手松岛辉空](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A66%E6%AC%A1%E4%BA%A4%E6%89%8B%E6%9D%BE%E5%B2%9B%E8%BE%89%E7%A9%BA%23) `96.4K 🔥` `NEW`
1. [王玉雯拿到了宋威龙的应援登机牌](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E7%8E%89%E9%9B%AF%E6%8B%BF%E5%88%B0%E4%BA%86%E5%AE%8B%E5%A8%81%E9%BE%99%E7%9A%84%E5%BA%94%E6%8F%B4%E7%99%BB%E6%9C%BA%E7%89%8C%23) `95.9K 🔥` `NEW`
1. [女孩高铁换胰岛素被警察发现 (Girl was discovered by police while changing insulin on high-speed train)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%A9%E9%AB%98%E9%93%81%E6%8D%A2%E8%83%B0%E5%B2%9B%E7%B4%A0%E8%A2%AB%E8%AD%A6%E5%AF%9F%E5%8F%91%E7%8E%B0%23) `81.2K 🔥` `NEW`
1. [白日提灯](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%97%A5%E6%8F%90%E7%81%AF%23) `81.0K 🔥` `NEW`
1. [曹操墓前为何全是布洛芬](https://s.weibo.com/weibo?q=%23%E6%9B%B9%E6%93%8D%E5%A2%93%E5%89%8D%E4%B8%BA%E4%BD%95%E5%85%A8%E6%98%AF%E5%B8%83%E6%B4%9B%E8%8A%AC%23) `79.9K 🔥` `NEW`
1. [女棋手求合影卡尔森拍完立马举报](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E6%A3%8B%E6%89%8B%E6%B1%82%E5%90%88%E5%BD%B1%E5%8D%A1%E5%B0%94%E6%A3%AE%E6%8B%8D%E5%AE%8C%E7%AB%8B%E9%A9%AC%E4%B8%BE%E6%8A%A5%23) `68.2K 🔥` `NEW`
1. [腌了六年的咸金桔](https://s.weibo.com/weibo?q=%23%E8%85%8C%E4%BA%86%E5%85%AD%E5%B9%B4%E7%9A%84%E5%92%B8%E9%87%91%E6%A1%94%23) `60.6K 🔥` `NEW`
1. [我欲乘风领衔主演田曦薇王弘毅](https://s.weibo.com/weibo?q=%23%E6%88%91%E6%AC%B2%E4%B9%98%E9%A3%8E%E9%A2%86%E8%A1%94%E4%B8%BB%E6%BC%94%E7%94%B0%E6%9B%A6%E8%96%87%E7%8E%8B%E5%BC%98%E6%AF%85%23) `165.7K 🔥` `+45%`
1. [王楚钦把雨果打笑了](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E6%8A%8A%E9%9B%A8%E6%9E%9C%E6%89%93%E7%AC%91%E4%BA%86%23) `163.4K 🔥` `+66%`
1. [女子长期虐待2岁儿子还拍视频](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E9%95%BF%E6%9C%9F%E8%99%90%E5%BE%852%E5%B2%81%E5%84%BF%E5%AD%90%E8%BF%98%E6%8B%8D%E8%A7%86%E9%A2%91%23) `145.6K 🔥` `+21%`
1. [黄晓明已去交警部门接受处罚](https://s.weibo.com/weibo?q=%23%E9%BB%84%E6%99%93%E6%98%8E%E5%B7%B2%E5%8E%BB%E4%BA%A4%E8%AD%A6%E9%83%A8%E9%97%A8%E6%8E%A5%E5%8F%97%E5%A4%84%E7%BD%9A%23) `125.5K 🔥` `+27%`
1. [最好的蛋糕翻车案例](https://s.weibo.com/weibo?q=%23%E6%9C%80%E5%A5%BD%E7%9A%84%E8%9B%8B%E7%B3%95%E7%BF%BB%E8%BD%A6%E6%A1%88%E4%BE%8B%23) `111.4K 🔥` `+48%`
1. [张艺凡 时代峰峻果然不养闲人 (Zhang Yifan Shi Fengjun really doesn’t care for idle people)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E8%89%BA%E5%87%A1%20%E6%97%B6%E4%BB%A3%E5%B3%B0%E5%B3%BB%E6%9E%9C%E7%84%B6%E4%B8%8D%E5%85%BB%E9%97%B2%E4%BA%BA%23) `95.4K 🔥` `+26%`
1. [女子开车撞劫匪致1死2伤被判无罪 (Woman who hit robber with car, killing 1 and injuring 2, was found not guilty)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%BC%80%E8%BD%A6%E6%92%9E%E5%8A%AB%E5%8C%AA%E8%87%B41%E6%AD%BB2%E4%BC%A4%E8%A2%AB%E5%88%A4%E6%97%A0%E7%BD%AA%23) `1.1M 🔥`
1. [清明时节一起敬读碑文 (Let’s read the inscription together during the Qingming Festival)](https://s.weibo.com/weibo?q=%23%E6%B8%85%E6%98%8E%E6%97%B6%E8%8A%82%E4%B8%80%E8%B5%B7%E6%95%AC%E8%AF%BB%E7%A2%91%E6%96%87%23) `596.0K 🔥`
1. [吴优贴脸开大周冬雨 (Wu You kisses Zhou Dongyu)](https://s.weibo.com/weibo?q=%23%E5%90%B4%E4%BC%98%E8%B4%B4%E8%84%B8%E5%BC%80%E5%A4%A7%E5%91%A8%E5%86%AC%E9%9B%A8%23) `173.9K 🔥`
1. [老人称养大4个子女晚年却无人陪伴](https://s.weibo.com/weibo?q=%23%E8%80%81%E4%BA%BA%E7%A7%B0%E5%85%BB%E5%A4%A74%E4%B8%AA%E5%AD%90%E5%A5%B3%E6%99%9A%E5%B9%B4%E5%8D%B4%E6%97%A0%E4%BA%BA%E9%99%AA%E4%BC%B4%23) `166.2K 🔥`
1. [蓝色果然抑制食欲](https://s.weibo.com/weibo?q=%23%E8%93%9D%E8%89%B2%E6%9E%9C%E7%84%B6%E6%8A%91%E5%88%B6%E9%A3%9F%E6%AC%B2%23) `147.9K 🔥`
1. [美炸毁2架执行救援故障运输机](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E7%82%B8%E6%AF%812%E6%9E%B6%E6%89%A7%E8%A1%8C%E6%95%91%E6%8F%B4%E6%95%85%E9%9A%9C%E8%BF%90%E8%BE%93%E6%9C%BA%23) `146.5K 🔥`
1. [散粉高反](https://s.weibo.com/weibo?q=%23%E6%95%A3%E7%B2%89%E9%AB%98%E5%8F%8D%23) `143.2K 🔥`
1. [孙怡紧急撤回一个盘腿](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%80%A1%E7%B4%A7%E6%80%A5%E6%92%A4%E5%9B%9E%E4%B8%80%E4%B8%AA%E7%9B%98%E8%85%BF%23) `140.8K 🔥`
1. [文淇称妇科检查时医生对其有敌意](https://s.weibo.com/weibo?q=%23%E6%96%87%E6%B7%87%E7%A7%B0%E5%A6%87%E7%A7%91%E6%A3%80%E6%9F%A5%E6%97%B6%E5%8C%BB%E7%94%9F%E5%AF%B9%E5%85%B6%E6%9C%89%E6%95%8C%E6%84%8F%23) `140.4K 🔥`
1. [美军营救行动致伊朗5死8伤 (US military rescue operation leaves 5 dead and 8 injured in Iran)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%86%9B%E8%90%A5%E6%95%91%E8%A1%8C%E5%8A%A8%E8%87%B4%E4%BC%8A%E6%9C%975%E6%AD%BB8%E4%BC%A4%23) `137.4K 🔥`
1. [新加坡偶遇唐嫣罗晋一家三口](https://s.weibo.com/weibo?q=%23%E6%96%B0%E5%8A%A0%E5%9D%A1%E5%81%B6%E9%81%87%E5%94%90%E5%AB%A3%E7%BD%97%E6%99%8B%E4%B8%80%E5%AE%B6%E4%B8%89%E5%8F%A3%23) `111.1K 🔥`
1. [撒贝宁 章子怡](https://s.weibo.com/weibo?q=%23%E6%92%92%E8%B4%9D%E5%AE%81%20%E7%AB%A0%E5%AD%90%E6%80%A1%23) `110.2K 🔥`
1. [黄晓明就带娃骑行道歉](https://s.weibo.com/weibo?q=%23%E9%BB%84%E6%99%93%E6%98%8E%E5%B0%B1%E5%B8%A6%E5%A8%83%E9%AA%91%E8%A1%8C%E9%81%93%E6%AD%89%23) `109.6K 🔥`
1. [谢娜抚养权判给谁了 (Who was awarded the custody of Xie Na?)](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%A8%9C%E6%8A%9A%E5%85%BB%E6%9D%83%E5%88%A4%E7%BB%99%E8%B0%81%E4%BA%86%23) `107.6K 🔥`
1. [毛新宇绕毛主席铜像一周 (Mao Xinyu walked around the bronze statue of Chairman Mao)](https://s.weibo.com/weibo?q=%23%E6%AF%9B%E6%96%B0%E5%AE%87%E7%BB%95%E6%AF%9B%E4%B8%BB%E5%B8%AD%E9%93%9C%E5%83%8F%E4%B8%80%E5%91%A8%23) `98.6K 🔥`
1. [以色列民众先破防了 (The Israeli people broke through the defense first)](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E8%89%B2%E5%88%97%E6%B0%91%E4%BC%97%E5%85%88%E7%A0%B4%E9%98%B2%E4%BA%86%23) `98.5K 🔥`
1. [黄晓明带9岁娃骑行再温馨也违法 (Huang Xiaoming takes his 9-year-old child for a ride, no matter how cozy it is, it is illegal)](https://s.weibo.com/weibo?q=%23%E9%BB%84%E6%99%93%E6%98%8E%E5%B8%A69%E5%B2%81%E5%A8%83%E9%AA%91%E8%A1%8C%E5%86%8D%E6%B8%A9%E9%A6%A8%E4%B9%9F%E8%BF%9D%E6%B3%95%23) `98.1K 🔥`
1. [五哈6观后感](https://s.weibo.com/weibo?q=%23%E4%BA%94%E5%93%886%E8%A7%82%E5%90%8E%E6%84%9F%23) `96.4K 🔥`
1. [青岛仅25平米小酒馆月营业额六七万元](https://s.weibo.com/weibo?q=%23%E9%9D%92%E5%B2%9B%E4%BB%8525%E5%B9%B3%E7%B1%B3%E5%B0%8F%E9%85%92%E9%A6%86%E6%9C%88%E8%90%A5%E4%B8%9A%E9%A2%9D%E5%85%AD%E4%B8%83%E4%B8%87%E5%85%83%23) `94.9K 🔥`
1. [网传白玉兰最佳女主初选投票](https://s.weibo.com/weibo?q=%23%E7%BD%91%E4%BC%A0%E7%99%BD%E7%8E%89%E5%85%B0%E6%9C%80%E4%BD%B3%E5%A5%B3%E4%B8%BB%E5%88%9D%E9%80%89%E6%8A%95%E7%A5%A8%23) `94.7K 🔥`
1. [张凌赫拍的云 (Clouds photographed by Zhang Linghe)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E6%8B%8D%E7%9A%84%E4%BA%91%23) `90.0K 🔥`
1. [广东广西人不吃苹果但爱买苹果](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E4%B8%9C%E5%B9%BF%E8%A5%BF%E4%BA%BA%E4%B8%8D%E5%90%83%E8%8B%B9%E6%9E%9C%E4%BD%86%E7%88%B1%E4%B9%B0%E8%8B%B9%E6%9E%9C%23) `63.5K 🔥`
1. [网传浪姐7一公分组名单](https://s.weibo.com/weibo?q=%23%E7%BD%91%E4%BC%A0%E6%B5%AA%E5%A7%907%E4%B8%80%E5%85%AC%E5%88%86%E7%BB%84%E5%90%8D%E5%8D%95%23) `136.5K 🔥` `-37%`
1. [孙俪 当bro以为自己很有影响力](https://s.weibo.com/weibo?q=%23%E5%AD%99%E4%BF%AA%20%E5%BD%93bro%E4%BB%A5%E4%B8%BA%E8%87%AA%E5%B7%B1%E5%BE%88%E6%9C%89%E5%BD%B1%E5%93%8D%E5%8A%9B%23) `134.8K 🔥` `-33%`
1. [王楚钦淘汰卫冕冠军](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E6%B7%98%E6%B1%B0%E5%8D%AB%E5%86%95%E5%86%A0%E5%86%9B%23) `133.1K 🔥` `-49%`
1. [曝姐姐们集体抗议浪姐直播 (It was revealed that the sisters collectively protested against Sister Lang’s live broadcast)](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%A7%90%E5%A7%90%E4%BB%AC%E9%9B%86%E4%BD%93%E6%8A%97%E8%AE%AE%E6%B5%AA%E5%A7%90%E7%9B%B4%E6%92%AD%23) `132.2K 🔥` `-21%`
1. [张月陈瑶徐梦洁一组 (Zhang Yue, Chen Yao and Xu Mengjie group)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%88%E9%99%88%E7%91%B6%E5%BE%90%E6%A2%A6%E6%B4%81%E4%B8%80%E7%BB%84%23) `65.6K 🔥` `-45%`
1. [苏州一彩民喜中6715万大奖](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E5%B7%9E%E4%B8%80%E5%BD%A9%E6%B0%91%E5%96%9C%E4%B8%AD6715%E4%B8%87%E5%A4%A7%E5%A5%96%23) `63.4K 🔥` `-29%`
1. [快递遭血液污染暴露顺丰两大硬伤 (Blood contamination of express delivery exposed two major flaws of SF Express)](https://s.weibo.com/weibo?q=%23%E5%BF%AB%E9%80%92%E9%81%AD%E8%A1%80%E6%B6%B2%E6%B1%A1%E6%9F%93%E6%9A%B4%E9%9C%B2%E9%A1%BA%E4%B8%B0%E4%B8%A4%E5%A4%A7%E7%A1%AC%E4%BC%A4%23) `62.9K 🔥` `-24%`

Updated at 2026-04-05 19:41:21

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
