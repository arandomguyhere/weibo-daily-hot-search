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

1. [雅典娜遇害名单截图出自反诈片 (The screenshot of Athena’s murder list is from an anti-fraud film)](https://s.weibo.com/weibo?q=%23%E9%9B%85%E5%85%B8%E5%A8%9C%E9%81%87%E5%AE%B3%E5%90%8D%E5%8D%95%E6%88%AA%E5%9B%BE%E5%87%BA%E8%87%AA%E5%8F%8D%E8%AF%88%E7%89%87%23) `1.3M 🔥` `NEW`
1. [雅典娜](https://s.weibo.com/weibo?q=%23%E9%9B%85%E5%85%B8%E5%A8%9C%23) `982.5K 🔥` `NEW`
1. [遇城市内涝这些事千万不能做](https://s.weibo.com/weibo?q=%23%E9%81%87%E5%9F%8E%E5%B8%82%E5%86%85%E6%B6%9D%E8%BF%99%E4%BA%9B%E4%BA%8B%E5%8D%83%E4%B8%87%E4%B8%8D%E8%83%BD%E5%81%9A%23) `955.9K 🔥` `NEW`
1. [买车的欲望已经到了极致](https://s.weibo.com/weibo?q=%23%E4%B9%B0%E8%BD%A6%E7%9A%84%E6%AC%B2%E6%9C%9B%E5%B7%B2%E7%BB%8F%E5%88%B0%E4%BA%86%E6%9E%81%E8%87%B4%23) `941.4K 🔥` `NEW`
1. [她说世界](https://s.weibo.com/weibo?q=%23%E5%A5%B9%E8%AF%B4%E4%B8%96%E7%95%8C%23) `545.6K 🔥` `NEW`
1. [农村电商物流业务量涨势亮眼](https://s.weibo.com/weibo?q=%23%E5%86%9C%E6%9D%91%E7%94%B5%E5%95%86%E7%89%A9%E6%B5%81%E4%B8%9A%E5%8A%A1%E9%87%8F%E6%B6%A8%E5%8A%BF%E4%BA%AE%E7%9C%BC%23) `486.9K 🔥` `NEW`
1. [孕妇胎监异常4天后剖宫产胎儿死亡](https://s.weibo.com/weibo?q=%23%E5%AD%95%E5%A6%87%E8%83%8E%E7%9B%91%E5%BC%82%E5%B8%B84%E5%A4%A9%E5%90%8E%E5%89%96%E5%AE%AB%E4%BA%A7%E8%83%8E%E5%84%BF%E6%AD%BB%E4%BA%A1%23) `462.8K 🔥` `NEW`
1. [阎鹤祥让你坐稳了再出发](https://s.weibo.com/weibo?q=%23%E9%98%8E%E9%B9%A4%E7%A5%A5%E8%AE%A9%E4%BD%A0%E5%9D%90%E7%A8%B3%E4%BA%86%E5%86%8D%E5%87%BA%E5%8F%91%23) `452.9K 🔥` `NEW`
1. [于东来自掏65亿建商场当包租公](https://s.weibo.com/weibo?q=%23%E4%BA%8E%E4%B8%9C%E6%9D%A5%E8%87%AA%E6%8E%8F65%E4%BA%BF%E5%BB%BA%E5%95%86%E5%9C%BA%E5%BD%93%E5%8C%85%E7%A7%9F%E5%85%AC%23) `447.7K 🔥` `NEW`
1. [马斯克母子强推中国游](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E6%96%AF%E5%85%8B%E6%AF%8D%E5%AD%90%E5%BC%BA%E6%8E%A8%E4%B8%AD%E5%9B%BD%E6%B8%B8%23) `444.3K 🔥` `NEW`
1. [偷偷藏不住疑似撤档 (Unable to hide secretly, suspected withdrawal)](https://s.weibo.com/weibo?q=%23%E5%81%B7%E5%81%B7%E8%97%8F%E4%B8%8D%E4%BD%8F%E7%96%91%E4%BC%BC%E6%92%A4%E6%A1%A3%23) `437.9K 🔥` `NEW`
1. [俄女子称逃离缅甸电诈园游河到泰国](https://s.weibo.com/weibo?q=%23%E4%BF%84%E5%A5%B3%E5%AD%90%E7%A7%B0%E9%80%83%E7%A6%BB%E7%BC%85%E7%94%B8%E7%94%B5%E8%AF%88%E5%9B%AD%E6%B8%B8%E6%B2%B3%E5%88%B0%E6%B3%B0%E5%9B%BD%23) `435.3K 🔥` `NEW`
1. [ai大制作短剧到底什么水平](https://s.weibo.com/weibo?q=%23ai%E5%A4%A7%E5%88%B6%E4%BD%9C%E7%9F%AD%E5%89%A7%E5%88%B0%E5%BA%95%E4%BB%80%E4%B9%88%E6%B0%B4%E5%B9%B3%23) `429.3K 🔥` `NEW`
1. [曝TF四代五公后宣布开启出道计划](https://s.weibo.com/weibo?q=%23%E6%9B%9DTF%E5%9B%9B%E4%BB%A3%E4%BA%94%E5%85%AC%E5%90%8E%E5%AE%A3%E5%B8%83%E5%BC%80%E5%90%AF%E5%87%BA%E9%81%93%E8%AE%A1%E5%88%92%23) `426.9K 🔥` `NEW`
1. [女子买西瓜切出膜状异物](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E4%B9%B0%E8%A5%BF%E7%93%9C%E5%88%87%E5%87%BA%E8%86%9C%E7%8A%B6%E5%BC%82%E7%89%A9%23) `414.5K 🔥` `NEW`
1. [17年寻女终确认女儿2008年已溺亡](https://s.weibo.com/weibo?q=%2317%E5%B9%B4%E5%AF%BB%E5%A5%B3%E7%BB%88%E7%A1%AE%E8%AE%A4%E5%A5%B3%E5%84%BF2008%E5%B9%B4%E5%B7%B2%E6%BA%BA%E4%BA%A1%23) `368.7K 🔥` `NEW`
1. [你永远猜不到小孩把东西藏哪](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E6%B0%B8%E8%BF%9C%E7%8C%9C%E4%B8%8D%E5%88%B0%E5%B0%8F%E5%AD%A9%E6%8A%8A%E4%B8%9C%E8%A5%BF%E8%97%8F%E5%93%AA%23) `288.7K 🔥` `NEW`
1. [谢娜偶像来了名场面翻红](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%A8%9C%E5%81%B6%E5%83%8F%E6%9D%A5%E4%BA%86%E5%90%8D%E5%9C%BA%E9%9D%A2%E7%BF%BB%E7%BA%A2%23) `276.5K 🔥` `NEW`
1. [银河战舰700完成环塔标准夏测](https://s.weibo.com/weibo?q=%23%E9%93%B6%E6%B2%B3%E6%88%98%E8%88%B0700%E5%AE%8C%E6%88%90%E7%8E%AF%E5%A1%94%E6%A0%87%E5%87%86%E5%A4%8F%E6%B5%8B%23) `266.0K 🔥` `NEW`
1. [金卡戴珊豪宅遭入室盗窃](https://s.weibo.com/weibo?q=%23%E9%87%91%E5%8D%A1%E6%88%B4%E7%8F%8A%E8%B1%AA%E5%AE%85%E9%81%AD%E5%85%A5%E5%AE%A4%E7%9B%97%E7%AA%83%23) `266.0K 🔥` `NEW`
1. [试衣服的正确方法找到了 (Found the right way to try on clothes)](https://s.weibo.com/weibo?q=%23%E8%AF%95%E8%A1%A3%E6%9C%8D%E7%9A%84%E6%AD%A3%E7%A1%AE%E6%96%B9%E6%B3%95%E6%89%BE%E5%88%B0%E4%BA%86%23) `265.9K 🔥` `NEW`
1. [男孩见猴子喝脏水主动送水](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%A9%E8%A7%81%E7%8C%B4%E5%AD%90%E5%96%9D%E8%84%8F%E6%B0%B4%E4%B8%BB%E5%8A%A8%E9%80%81%E6%B0%B4%23) `253.3K 🔥` `NEW`
1. [对张凌赫的身高有了新的认知](https://s.weibo.com/weibo?q=%23%E5%AF%B9%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%9A%84%E8%BA%AB%E9%AB%98%E6%9C%89%E4%BA%86%E6%96%B0%E7%9A%84%E8%AE%A4%E7%9F%A5%23) `206.3K 🔥` `NEW`
1. [王玉雯18岁到29岁颜值变化](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E7%8E%89%E9%9B%AF18%E5%B2%81%E5%88%B029%E5%B2%81%E9%A2%9C%E5%80%BC%E5%8F%98%E5%8C%96%23) `203.9K 🔥` `NEW`
1. [古画新生 AI 重塑东方美](https://s.weibo.com/weibo?q=%23%E5%8F%A4%E7%94%BB%E6%96%B0%E7%94%9F%20AI%20%E9%87%8D%E5%A1%91%E4%B8%9C%E6%96%B9%E7%BE%8E%23) `202.5K 🔥` `NEW`
1. [陈瑶回复叶祖新](https://s.weibo.com/weibo?q=%23%E9%99%88%E7%91%B6%E5%9B%9E%E5%A4%8D%E5%8F%B6%E7%A5%96%E6%96%B0%23) `178.3K 🔥` `NEW`
1. [河南瓜农们正在经历最难的夏天](https://s.weibo.com/weibo?q=%23%E6%B2%B3%E5%8D%97%E7%93%9C%E5%86%9C%E4%BB%AC%E6%AD%A3%E5%9C%A8%E7%BB%8F%E5%8E%86%E6%9C%80%E9%9A%BE%E7%9A%84%E5%A4%8F%E5%A4%A9%23) `172.3K 🔥` `NEW`
1. [奕境X9全球首秀鸿蒙座舱6 (Yijing X9 debuts Hongmeng Cockpit 6 in the world)](https://s.weibo.com/weibo?q=%23%E5%A5%95%E5%A2%83X9%E5%85%A8%E7%90%83%E9%A6%96%E7%A7%80%E9%B8%BF%E8%92%99%E5%BA%A7%E8%88%B16%23) `953.2K 🔥` `+23%`
1. [建议大家装修不要太大众](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E5%A4%A7%E5%AE%B6%E8%A3%85%E4%BF%AE%E4%B8%8D%E8%A6%81%E5%A4%AA%E5%A4%A7%E4%BC%97%23) `948.7K 🔥` `+41%`
1. [姜小柔](https://s.weibo.com/weibo?q=%23%E5%A7%9C%E5%B0%8F%E6%9F%94%23) `455.1K 🔥` `+25%`
1. [陈俊生150万年薪让罗子君买8万的鞋](https://s.weibo.com/weibo?q=%23%E9%99%88%E4%BF%8A%E7%94%9F150%E4%B8%87%E5%B9%B4%E8%96%AA%E8%AE%A9%E7%BD%97%E5%AD%90%E5%90%9B%E4%B9%B08%E4%B8%87%E7%9A%84%E9%9E%8B%23) `751.3K 🔥`
1. [7月销量前十仅一款燃油车 (There was only one fuel vehicle in the top ten sales in July)](https://s.weibo.com/weibo?q=%237%E6%9C%88%E9%94%80%E9%87%8F%E5%89%8D%E5%8D%81%E4%BB%85%E4%B8%80%E6%AC%BE%E7%87%83%E6%B2%B9%E8%BD%A6%23) `545.6K 🔥`
1. [易烊千玺仅差华表奖大满贯](https://s.weibo.com/weibo?q=%23%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%E4%BB%85%E5%B7%AE%E5%8D%8E%E8%A1%A8%E5%A5%96%E5%A4%A7%E6%BB%A1%E8%B4%AF%23) `466.4K 🔥`
1. [C罗年薪19亿足坛断档第一](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E5%B9%B4%E8%96%AA19%E4%BA%BF%E8%B6%B3%E5%9D%9B%E6%96%AD%E6%A1%A3%E7%AC%AC%E4%B8%80%23) `466.2K 🔥`
1. [韩网友因张元英说中文愤怒 (Korean netizens are angry because Zhang Yuanying speaks Chinese)](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E7%BD%91%E5%8F%8B%E5%9B%A0%E5%BC%A0%E5%85%83%E8%8B%B1%E8%AF%B4%E4%B8%AD%E6%96%87%E6%84%A4%E6%80%92%23) `442.0K 🔥`
1. [龙餐馆灯塔预测票房35亿](https://s.weibo.com/weibo?q=%23%E9%BE%99%E9%A4%90%E9%A6%86%E7%81%AF%E5%A1%94%E9%A2%84%E6%B5%8B%E7%A5%A8%E6%88%BF35%E4%BA%BF%23) `431.7K 🔥`
1. [猫耳声刻2026阵容](https://s.weibo.com/weibo?q=%23%E7%8C%AB%E8%80%B3%E5%A3%B0%E5%88%BB2026%E9%98%B5%E5%AE%B9%23) `384.4K 🔥`
1. [女子被拐关地下室被虐8年 (Woman abducted, locked up in basement and tortured for 8 years)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E8%A2%AB%E6%8B%90%E5%85%B3%E5%9C%B0%E4%B8%8B%E5%AE%A4%E8%A2%AB%E8%99%908%E5%B9%B4%23) `355.4K 🔥`
1. [睡车里被酒店收150元住宿费事件反转](https://s.weibo.com/weibo?q=%23%E7%9D%A1%E8%BD%A6%E9%87%8C%E8%A2%AB%E9%85%92%E5%BA%97%E6%94%B6150%E5%85%83%E4%BD%8F%E5%AE%BF%E8%B4%B9%E4%BA%8B%E4%BB%B6%E5%8F%8D%E8%BD%AC%23) `459.0K 🔥` `-61%`
1. [马薇薇回应消失5年](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E8%96%87%E8%96%87%E5%9B%9E%E5%BA%94%E6%B6%88%E5%A4%B15%E5%B9%B4%23) `318.7K 🔥` `-23%`
1. [日本大量网帖否认核爆 (Japan's massive online posts deny nuclear explosions)](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E5%A4%A7%E9%87%8F%E7%BD%91%E5%B8%96%E5%90%A6%E8%AE%A4%E6%A0%B8%E7%88%86%23) `274.9K 🔥` `-31%`
1. [白鹿黑丝御姐黑西装](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E9%BB%91%E4%B8%9D%E5%BE%A1%E5%A7%90%E9%BB%91%E8%A5%BF%E8%A3%85%23) `274.9K 🔥` `-31%`
1. [真正的顶级友谊这种分寸感](https://s.weibo.com/weibo?q=%23%E7%9C%9F%E6%AD%A3%E7%9A%84%E9%A1%B6%E7%BA%A7%E5%8F%8B%E8%B0%8A%E8%BF%99%E7%A7%8D%E5%88%86%E5%AF%B8%E6%84%9F%23) `266.6K 🔥` `-44%`
1. [当老板意识到AI比人工贵](https://s.weibo.com/weibo?q=%23%E5%BD%93%E8%80%81%E6%9D%BF%E6%84%8F%E8%AF%86%E5%88%B0AI%E6%AF%94%E4%BA%BA%E5%B7%A5%E8%B4%B5%23) `266.0K 🔥` `-33%`
1. [黄金 (gold)](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%23) `229.2K 🔥` `-42%`
1. [胖东来公布2起侵犯员工人格尊严案例](https://s.weibo.com/weibo?q=%23%E8%83%96%E4%B8%9C%E6%9D%A5%E5%85%AC%E5%B8%832%E8%B5%B7%E4%BE%B5%E7%8A%AF%E5%91%98%E5%B7%A5%E4%BA%BA%E6%A0%BC%E5%B0%8A%E4%B8%A5%E6%A1%88%E4%BE%8B%23) `221.6K 🔥` `-49%`
1. [抓娃娃小演员易烊千玺合照](https://s.weibo.com/weibo?q=%23%E6%8A%93%E5%A8%83%E5%A8%83%E5%B0%8F%E6%BC%94%E5%91%98%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%E5%90%88%E7%85%A7%23) `202.2K 🔥` `-48%`
1. [百花奖 (Hundred Flowers Award)](https://s.weibo.com/weibo?q=%23%E7%99%BE%E8%8A%B1%E5%A5%96%23) `196.0K 🔥` `-47%`
1. [阿维塔 华为](https://s.weibo.com/weibo?q=%23%E9%98%BF%E7%BB%B4%E5%A1%94%20%E5%8D%8E%E4%B8%BA%23) `195.8K 🔥` `-61%`
1. [两部门紧急预拨1.8亿元救灾资金 (The two departments urgently allocated 180 million yuan in disaster relief funds)](https://s.weibo.com/weibo?q=%23%E4%B8%A4%E9%83%A8%E9%97%A8%E7%B4%A7%E6%80%A5%E9%A2%84%E6%8B%A81.8%E4%BA%BF%E5%85%83%E6%95%91%E7%81%BE%E8%B5%84%E9%87%91%23) `178.1K 🔥` `-74%`
1. [姆巴佩回归倒钩破门](https://s.weibo.com/weibo?q=%23%E5%A7%86%E5%B7%B4%E4%BD%A9%E5%9B%9E%E5%BD%92%E5%80%92%E9%92%A9%E7%A0%B4%E9%97%A8%23) `176.5K 🔥` `-50%`
1. [王一博滑雪摔懵了](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E6%BB%91%E9%9B%AA%E6%91%94%E6%87%B5%E4%BA%86%23) `175.3K 🔥` `-54%`

Updated at 2026-08-11 15:54:08

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
