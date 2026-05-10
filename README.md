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

1. [优酷官宣藏海传2等高分续作 (Youku officially announces high-scoring sequel to Hidden Haiden 2)](https://s.weibo.com/weibo?q=%23%E4%BC%98%E9%85%B7%E5%AE%98%E5%AE%A3%E8%97%8F%E6%B5%B7%E4%BC%A02%E7%AD%89%E9%AB%98%E5%88%86%E7%BB%AD%E4%BD%9C%23) `1.2M 🔥` `NEW`
1. [有生之年还能看见猪肉下岗](https://s.weibo.com/weibo?q=%23%E6%9C%89%E7%94%9F%E4%B9%8B%E5%B9%B4%E8%BF%98%E8%83%BD%E7%9C%8B%E8%A7%81%E7%8C%AA%E8%82%89%E4%B8%8B%E5%B2%97%23) `310.4K 🔥` `NEW`
1. [狩谎](https://s.weibo.com/weibo?q=%23%E7%8B%A9%E8%B0%8E%23) `306.4K 🔥` `NEW`
1. [疑似维嘉卖掉的衣服被马丁淘回来了](https://s.weibo.com/weibo?q=%23%E7%96%91%E4%BC%BC%E7%BB%B4%E5%98%89%E5%8D%96%E6%8E%89%E7%9A%84%E8%A1%A3%E6%9C%8D%E8%A2%AB%E9%A9%AC%E4%B8%81%E6%B7%98%E5%9B%9E%E6%9D%A5%E4%BA%86%23) `299.7K 🔥` `NEW`
1. [朱丹曝有人做医美吃止痛片](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E4%B8%B9%E6%9B%9D%E6%9C%89%E4%BA%BA%E5%81%9A%E5%8C%BB%E7%BE%8E%E5%90%83%E6%AD%A2%E7%97%9B%E7%89%87%23) `293.5K 🔥` `NEW`
1. [巴萨2比0皇马](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E8%90%A82%E6%AF%940%E7%9A%87%E9%A9%AC%23) `278.5K 🔥` `NEW`
1. [何猷君关联公司近7亿元三亚拿地](https://s.weibo.com/weibo?q=%23%E4%BD%95%E7%8C%B7%E5%90%9B%E5%85%B3%E8%81%94%E5%85%AC%E5%8F%B8%E8%BF%917%E4%BA%BF%E5%85%83%E4%B8%89%E4%BA%9A%E6%8B%BF%E5%9C%B0%23) `245.7K 🔥` `NEW`
1. [到底谁是马雪晴啊](https://s.weibo.com/weibo?q=%23%E5%88%B0%E5%BA%95%E8%B0%81%E6%98%AF%E9%A9%AC%E9%9B%AA%E6%99%B4%E5%95%8A%23) `214.1K 🔥` `NEW`
1. [王楚钦当选MVP](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E5%BD%93%E9%80%89MVP%23) `214.0K 🔥` `NEW`
1. [原来这才是有效的控糖方式](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E8%BF%99%E6%89%8D%E6%98%AF%E6%9C%89%E6%95%88%E7%9A%84%E6%8E%A7%E7%B3%96%E6%96%B9%E5%BC%8F%23) `211.3K 🔥` `NEW`
1. [美客机撞到人致其被吸入引擎死亡 (US passenger plane hits man and dies after being sucked into engine)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%AE%A2%E6%9C%BA%E6%92%9E%E5%88%B0%E4%BA%BA%E8%87%B4%E5%85%B6%E8%A2%AB%E5%90%B8%E5%85%A5%E5%BC%95%E6%93%8E%E6%AD%BB%E4%BA%A1%23) `210.3K 🔥` `NEW`
1. [歌手2026阵容和热度不会差](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B2026%E9%98%B5%E5%AE%B9%E5%92%8C%E7%83%AD%E5%BA%A6%E4%B8%8D%E4%BC%9A%E5%B7%AE%23) `207.4K 🔥` `NEW`
1. [国家体育总局中国奥委会贺信](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E5%AE%B6%E4%BD%93%E8%82%B2%E6%80%BB%E5%B1%80%E4%B8%AD%E5%9B%BD%E5%A5%A5%E5%A7%94%E4%BC%9A%E8%B4%BA%E4%BF%A1%23) `205.5K 🔥` `NEW`
1. [孙颖莎不停支招王曼昱](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E4%B8%8D%E5%81%9C%E6%94%AF%E6%8B%9B%E7%8E%8B%E6%9B%BC%E6%98%B1%23) `204.4K 🔥` `NEW`
1. [半挂司机养了只半挂猫](https://s.weibo.com/weibo?q=%23%E5%8D%8A%E6%8C%82%E5%8F%B8%E6%9C%BA%E5%85%BB%E4%BA%86%E5%8F%AA%E5%8D%8A%E6%8C%82%E7%8C%AB%23) `193.7K 🔥` `NEW`
1. [严浩翔正常毕业流程当中](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E6%B5%A9%E7%BF%94%E6%AD%A3%E5%B8%B8%E6%AF%95%E4%B8%9A%E6%B5%81%E7%A8%8B%E5%BD%93%E4%B8%AD%23) `172.1K 🔥` `NEW`
1. [17岁的张桂源](https://s.weibo.com/weibo?q=%2317%E5%B2%81%E7%9A%84%E5%BC%A0%E6%A1%82%E6%BA%90%23) `142.4K 🔥` `NEW`
1. [德国跨国迷奸案涉华人高管名校学生](https://s.weibo.com/weibo?q=%23%E5%BE%B7%E5%9B%BD%E8%B7%A8%E5%9B%BD%E8%BF%B7%E5%A5%B8%E6%A1%88%E6%B6%89%E5%8D%8E%E4%BA%BA%E9%AB%98%E7%AE%A1%E5%90%8D%E6%A0%A1%E5%AD%A6%E7%94%9F%23) `115.3K 🔥` `NEW`
1. [国乒男团围圈庆祝](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%E7%94%B7%E5%9B%A2%E5%9B%B4%E5%9C%88%E5%BA%86%E7%A5%9D%23) `111.1K 🔥` `NEW`
1. [种地吧4见天地宣传片](https://s.weibo.com/weibo?q=%23%E7%A7%8D%E5%9C%B0%E5%90%A74%E8%A7%81%E5%A4%A9%E5%9C%B0%E5%AE%A3%E4%BC%A0%E7%89%87%23) `97.3K 🔥` `NEW`
1. [领克07GT公告图曝光 (Lynk & Co 07GT announcement image exposed)](https://s.weibo.com/weibo?q=%23%E9%A2%86%E5%85%8B07GT%E5%85%AC%E5%91%8A%E5%9B%BE%E6%9B%9D%E5%85%89%23) `96.7K 🔥` `NEW`
1. [国乒男团3比0大胜日本](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%E7%94%B7%E5%9B%A23%E6%AF%940%E5%A4%A7%E8%83%9C%E6%97%A5%E6%9C%AC%23) `3.7M 🔥` `+93%`
1. [中国潜水器发现深海生命绿洲 (Chinese submersible discovers deep-sea oasis of life)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E6%BD%9C%E6%B0%B4%E5%99%A8%E5%8F%91%E7%8E%B0%E6%B7%B1%E6%B5%B7%E7%94%9F%E5%91%BD%E7%BB%BF%E6%B4%B2%23) `771.3K 🔥` `+108%`
1. [身体的炎症全部消失22个tips (22 tips to make all inflammation in your body disappear)](https://s.weibo.com/weibo?q=%23%E8%BA%AB%E4%BD%93%E7%9A%84%E7%82%8E%E7%97%87%E5%85%A8%E9%83%A8%E6%B6%88%E5%A4%B122%E4%B8%AAtips%23) `649.7K 🔥` `+101%`
1. [中国妇女报评OPPO母亲节文案](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A6%87%E5%A5%B3%E6%8A%A5%E8%AF%84OPPO%E6%AF%8D%E4%BA%B2%E8%8A%82%E6%96%87%E6%A1%88%23) `320.1K 🔥` `+358%`
1. [梁靖崑逆转张本智和](https://s.weibo.com/weibo?q=%23%E6%A2%81%E9%9D%96%E5%B4%91%E9%80%86%E8%BD%AC%E5%BC%A0%E6%9C%AC%E6%99%BA%E5%92%8C%23) `318.8K 🔥` `+50%`
1. [盼弟 来弟](https://s.weibo.com/weibo?q=%23%E7%9B%BC%E5%BC%9F%20%E6%9D%A5%E5%BC%9F%23) `307.2K 🔥` `+26%`
1. [王楚钦回应国乒男团夺冠](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E5%9B%9E%E5%BA%94%E5%9B%BD%E4%B9%92%E7%94%B7%E5%9B%A2%E5%A4%BA%E5%86%A0%23) `301.8K 🔥` `+140%`
1. [王曼昱哭了 (Wang Manyu cried)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%9B%BC%E6%98%B1%E5%93%AD%E4%BA%86%23) `290.9K 🔥` `+139%`
1. [孙颖莎新世纪中国女乒单届最佳战绩](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E6%96%B0%E4%B8%96%E7%BA%AA%E4%B8%AD%E5%9B%BD%E5%A5%B3%E4%B9%92%E5%8D%95%E5%B1%8A%E6%9C%80%E4%BD%B3%E6%88%98%E7%BB%A9%23) `280.9K 🔥` `+91%`
1. [村民被眼镜王蛇咬伤打了13支血清](https://s.weibo.com/weibo?q=%23%E6%9D%91%E6%B0%91%E8%A2%AB%E7%9C%BC%E9%95%9C%E7%8E%8B%E8%9B%87%E5%92%AC%E4%BC%A4%E6%89%93%E4%BA%8613%E6%94%AF%E8%A1%80%E6%B8%85%23) `269.3K 🔥` `+124%`
1. [主角收视率 (Protagonist ratings)](https://s.weibo.com/weibo?q=%23%E4%B8%BB%E8%A7%92%E6%94%B6%E8%A7%86%E7%8E%87%23) `247.7K 🔥` `+225%`
1. [王楚钦vs松岛辉空 (Wang Chuqin vs. Matsushima Terukong)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6vs%E6%9D%BE%E5%B2%9B%E8%BE%89%E7%A9%BA%23) `244.5K 🔥` `+115%`
1. [林诗栋vs户上隼辅 (Lin Shidong vs. Togami Hayabusa)](https://s.weibo.com/weibo?q=%23%E6%9E%97%E8%AF%97%E6%A0%8Bvs%E6%88%B7%E4%B8%8A%E9%9A%BC%E8%BE%85%23) `214.7K 🔥` `+86%`
1. [阿森纳](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A3%AE%E7%BA%B3%23) `213.8K 🔥` `+70%`
1. [梁家辉方回应接触狩谎](https://s.weibo.com/weibo?q=%23%E6%A2%81%E5%AE%B6%E8%BE%89%E6%96%B9%E5%9B%9E%E5%BA%94%E6%8E%A5%E8%A7%A6%E7%8B%A9%E8%B0%8E%23) `208.2K 🔥` `+360%`
1. [身体有炎症要忌口4种食物 (4 foods to avoid if you have inflammation in your body)](https://s.weibo.com/weibo?q=%23%E8%BA%AB%E4%BD%93%E6%9C%89%E7%82%8E%E7%97%87%E8%A6%81%E5%BF%8C%E5%8F%A34%E7%A7%8D%E9%A3%9F%E7%89%A9%23) `173.0K 🔥` `+122%`
1. [梁靖崑让二追三的神 (Liang Jingkun lets two men chase three gods)](https://s.weibo.com/weibo?q=%23%E6%A2%81%E9%9D%96%E5%B4%91%E8%AE%A9%E4%BA%8C%E8%BF%BD%E4%B8%89%E7%9A%84%E7%A5%9E%23) `169.1K 🔥` `+45%`
1. [汉坦病毒邮轮零号病人身份曝光 (Hantavirus cruise ship patient zero’s identity revealed)](https://s.weibo.com/weibo?q=%23%E6%B1%89%E5%9D%A6%E7%97%85%E6%AF%92%E9%82%AE%E8%BD%AE%E9%9B%B6%E5%8F%B7%E7%97%85%E4%BA%BA%E8%BA%AB%E4%BB%BD%E6%9B%9D%E5%85%89%23) `156.5K 🔥` `+101%`
1. [吃出24块鸡头顾客被免单仍想市监介入 (The customer who ate 24 pieces of chicken head was exempted from the order but still wants the city supervisor to intervene)](https://s.weibo.com/weibo?q=%23%E5%90%83%E5%87%BA24%E5%9D%97%E9%B8%A1%E5%A4%B4%E9%A1%BE%E5%AE%A2%E8%A2%AB%E5%85%8D%E5%8D%95%E4%BB%8D%E6%83%B3%E5%B8%82%E7%9B%91%E4%BB%8B%E5%85%A5%23) `150.1K 🔥` `+70%`
1. [伊朗称国产潜艇在霍尔木兹执行任务 (Iran says domestically produced submarines carried out mission in Hormuz)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E7%A7%B0%E5%9B%BD%E4%BA%A7%E6%BD%9C%E8%89%87%E5%9C%A8%E9%9C%8D%E5%B0%94%E6%9C%A8%E5%85%B9%E6%89%A7%E8%A1%8C%E4%BB%BB%E5%8A%A1%23) `137.8K 🔥` `+149%`
1. [水谷隼盛赞孙颖莎伟大](https://s.weibo.com/weibo?q=%23%E6%B0%B4%E8%B0%B7%E9%9A%BC%E7%9B%9B%E8%B5%9E%E5%AD%99%E9%A2%96%E8%8E%8E%E4%BC%9F%E5%A4%A7%23) `126.5K 🔥` `+64%`
1. [梁靖崑vs张本智和 (Liang Jingkun vs Zhang Benzhihe)](https://s.weibo.com/weibo?q=%23%E6%A2%81%E9%9D%96%E5%B4%91vs%E5%BC%A0%E6%9C%AC%E6%99%BA%E5%92%8C%23) `123.5K 🔥` `+58%`
1. [中国男团vs日本 (Chinese men's team vs Japan)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%94%B7%E5%9B%A2vs%E6%97%A5%E6%9C%AC%23) `106.5K 🔥` `+83%`
1. [主角 (main character)](https://s.weibo.com/weibo?q=%23%E4%B8%BB%E8%A7%92%23) `98.7K 🔥` `+151%`
1. [王曼昱说孙颖莎站了出来](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%9B%BC%E6%98%B1%E8%AF%B4%E5%AD%99%E9%A2%96%E8%8E%8E%E7%AB%99%E4%BA%86%E5%87%BA%E6%9D%A5%23) `290.2K 🔥`
1. [宋祖儿的腿瘦凹回去了](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E7%A5%96%E5%84%BF%E7%9A%84%E8%85%BF%E7%98%A6%E5%87%B9%E5%9B%9E%E5%8E%BB%E4%BA%86%23) `245.1K 🔥`
1. [睫毛掉进眼睛里钙化了 (Eyelashes fell into eyes and became calcified)](https://s.weibo.com/weibo?q=%23%E7%9D%AB%E6%AF%9B%E6%8E%89%E8%BF%9B%E7%9C%BC%E7%9D%9B%E9%87%8C%E9%92%99%E5%8C%96%E4%BA%86%23) `141.8K 🔥`
1. [潘玮柏一周7喜爽透顶 (Wilber Pan is so happy at 7 a week)](https://s.weibo.com/weibo?q=%23%E6%BD%98%E7%8E%AE%E6%9F%8F%E4%B8%80%E5%91%A87%E5%96%9C%E7%88%BD%E9%80%8F%E9%A1%B6%23) `316.8K 🔥` `-69%`
1. [国乒男团12连冠 (National table tennis men's team wins 12th consecutive championship)](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%E7%94%B7%E5%9B%A212%E8%BF%9E%E5%86%A0%23) `314.7K 🔥` `-42%`
1. [央视曝光三无手搓汽车](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E6%9B%9D%E5%85%89%E4%B8%89%E6%97%A0%E6%89%8B%E6%90%93%E6%B1%BD%E8%BD%A6%23) `105.7K 🔥` `-21%`

Updated at 2026-05-11 07:26:04

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
