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

1. [刘翔 (Liu Xiang)](https://s.weibo.com/weibo?q=%23%E5%88%98%E7%BF%94%23) `796.4K 🔥` `NEW`
1. [3万件物资支持西藏救灾](https://s.weibo.com/weibo?q=%233%E4%B8%87%E4%BB%B6%E7%89%A9%E8%B5%84%E6%94%AF%E6%8C%81%E8%A5%BF%E8%97%8F%E6%95%91%E7%81%BE%23) `492.9K 🔥` `NEW`
1. [办事大厅被拍空岗后禁群众带手机进入](https://s.weibo.com/weibo?q=%23%E5%8A%9E%E4%BA%8B%E5%A4%A7%E5%8E%85%E8%A2%AB%E6%8B%8D%E7%A9%BA%E5%B2%97%E5%90%8E%E7%A6%81%E7%BE%A4%E4%BC%97%E5%B8%A6%E6%89%8B%E6%9C%BA%E8%BF%9B%E5%85%A5%23) `491.5K 🔥` `NEW`
1. [刘翔回应安置二选一](https://s.weibo.com/weibo?q=%23%E5%88%98%E7%BF%94%E5%9B%9E%E5%BA%94%E5%AE%89%E7%BD%AE%E4%BA%8C%E9%80%89%E4%B8%80%23) `271.5K 🔥` `NEW`
1. [刘翔再发文征求广大网友意见](https://s.weibo.com/weibo?q=%23%E5%88%98%E7%BF%94%E5%86%8D%E5%8F%91%E6%96%87%E5%BE%81%E6%B1%82%E5%B9%BF%E5%A4%A7%E7%BD%91%E5%8F%8B%E6%84%8F%E8%A7%81%23) `267.4K 🔥` `NEW`
1. [包文婧并非为爱改姓](https://s.weibo.com/weibo?q=%23%E5%8C%85%E6%96%87%E5%A9%A7%E5%B9%B6%E9%9D%9E%E4%B8%BA%E7%88%B1%E6%94%B9%E5%A7%93%23) `260.4K 🔥` `NEW`
1. [尼泊尔山洪已致157死](https://s.weibo.com/weibo?q=%23%E5%B0%BC%E6%B3%8A%E5%B0%94%E5%B1%B1%E6%B4%AA%E5%B7%B2%E8%87%B4157%E6%AD%BB%23) `258.3K 🔥` `NEW`
1. [早春晴朗开播下沉市场口碑](https://s.weibo.com/weibo?q=%23%E6%97%A9%E6%98%A5%E6%99%B4%E6%9C%97%E5%BC%80%E6%92%AD%E4%B8%8B%E6%B2%89%E5%B8%82%E5%9C%BA%E5%8F%A3%E7%A2%91%23) `256.4K 🔥` `NEW`
1. [6个症状要警惕胃癌前兆](https://s.weibo.com/weibo?q=%236%E4%B8%AA%E7%97%87%E7%8A%B6%E8%A6%81%E8%AD%A6%E6%83%95%E8%83%83%E7%99%8C%E5%89%8D%E5%85%86%23) `253.5K 🔥` `NEW`
1. [买来的东西如果不合适一定要立马退掉](https://s.weibo.com/weibo?q=%23%E4%B9%B0%E6%9D%A5%E7%9A%84%E4%B8%9C%E8%A5%BF%E5%A6%82%E6%9E%9C%E4%B8%8D%E5%90%88%E9%80%82%E4%B8%80%E5%AE%9A%E8%A6%81%E7%AB%8B%E9%A9%AC%E9%80%80%E6%8E%89%23) `233.8K 🔥` `NEW`
1. [爱情公寓 (love apartment)](https://s.weibo.com/weibo?q=%23%E7%88%B1%E6%83%85%E5%85%AC%E5%AF%93%23) `217.6K 🔥` `NEW`
1. [吉隆口岸 地势](https://s.weibo.com/weibo?q=%23%E5%90%89%E9%9A%86%E5%8F%A3%E5%B2%B8%20%E5%9C%B0%E5%8A%BF%23) `212.7K 🔥` `NEW`
1. [西藏泥石流265人失联3人遇难 (265 people missing, 3 killed in mudslide in Tibet)](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E8%97%8F%E6%B3%A5%E7%9F%B3%E6%B5%81265%E4%BA%BA%E5%A4%B1%E8%81%943%E4%BA%BA%E9%81%87%E9%9A%BE%23) `925.8K 🔥` `+405%`
1. [泰钽700才是颜王该开的车 (Taitantalum 700 is the car that King Yan should drive)](https://s.weibo.com/weibo?q=%23%E6%B3%B0%E9%92%BD700%E6%89%8D%E6%98%AF%E9%A2%9C%E7%8E%8B%E8%AF%A5%E5%BC%80%E7%9A%84%E8%BD%A6%23) `492.2K 🔥` `+26%`
1. [金价大涨终于熬出头](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E5%A4%A7%E6%B6%A8%E7%BB%88%E4%BA%8E%E7%86%AC%E5%87%BA%E5%A4%B4%23) `355.6K 🔥` `+379%`
1. [惠英红回应郭晓婷长得像 (Hui Yinghong responded to Guo Xiaoting’s resemblance)](https://s.weibo.com/weibo?q=%23%E6%83%A0%E8%8B%B1%E7%BA%A2%E5%9B%9E%E5%BA%94%E9%83%AD%E6%99%93%E5%A9%B7%E9%95%BF%E5%BE%97%E5%83%8F%23) `276.6K 🔥` `+271%`
1. [吃药期间能喝绿豆汤吗](https://s.weibo.com/weibo?q=%23%E5%90%83%E8%8D%AF%E6%9C%9F%E9%97%B4%E8%83%BD%E5%96%9D%E7%BB%BF%E8%B1%86%E6%B1%A4%E5%90%97%23) `272.8K 🔥` `+49%`
1. [男频和女频的区别](https://s.weibo.com/weibo?q=%23%E7%94%B7%E9%A2%91%E5%92%8C%E5%A5%B3%E9%A2%91%E7%9A%84%E5%8C%BA%E5%88%AB%23) `272.0K 🔥` `+62%`
1. [台湾童星徐杰去世](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E6%B9%BE%E7%AB%A5%E6%98%9F%E5%BE%90%E6%9D%B0%E5%8E%BB%E4%B8%96%23) `269.4K 🔥` `+86%`
1. [王安宇晒与贾冰白敬亭合照放C位](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%AE%89%E5%AE%87%E6%99%92%E4%B8%8E%E8%B4%BE%E5%86%B0%E7%99%BD%E6%95%AC%E4%BA%AD%E5%90%88%E7%85%A7%E6%94%BEC%E4%BD%8D%23) `268.0K 🔥` `+263%`
1. [小天才还要逼疯多少家长 (How many parents will this little genius drive crazy?)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%A4%A9%E6%89%8D%E8%BF%98%E8%A6%81%E9%80%BC%E7%96%AF%E5%A4%9A%E5%B0%91%E5%AE%B6%E9%95%BF%23) `265.6K 🔥` `+254%`
1. [吉隆口岸仍处于失联状态](https://s.weibo.com/weibo?q=%23%E5%90%89%E9%9A%86%E5%8F%A3%E5%B2%B8%E4%BB%8D%E5%A4%84%E4%BA%8E%E5%A4%B1%E8%81%94%E7%8A%B6%E6%80%81%23) `264.9K 🔥` `+254%`
1. [安踏前CEO前脚说爱国扭头搬家美国](https://s.weibo.com/weibo?q=%23%E5%AE%89%E8%B8%8F%E5%89%8DCEO%E5%89%8D%E8%84%9A%E8%AF%B4%E7%88%B1%E5%9B%BD%E6%89%AD%E5%A4%B4%E6%90%AC%E5%AE%B6%E7%BE%8E%E5%9B%BD%23) `263.7K 🔥` `+257%`
1. [西藏泥石流救援现场](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E8%97%8F%E6%B3%A5%E7%9F%B3%E6%B5%81%E6%95%91%E6%8F%B4%E7%8E%B0%E5%9C%BA%23) `261.4K 🔥` `+254%`
1. [年轻人不会被电诈的原因 (Reasons why young people will not be scammed by phone)](https://s.weibo.com/weibo?q=%23%E5%B9%B4%E8%BD%BB%E4%BA%BA%E4%B8%8D%E4%BC%9A%E8%A2%AB%E7%94%B5%E8%AF%88%E7%9A%84%E5%8E%9F%E5%9B%A0%23) `257.2K 🔥` `+244%`
1. [理想汽车二季度业绩 (Li Auto’s second quarter results)](https://s.weibo.com/weibo?q=%23%E7%90%86%E6%83%B3%E6%B1%BD%E8%BD%A6%E4%BA%8C%E5%AD%A3%E5%BA%A6%E4%B8%9A%E7%BB%A9%23) `254.8K 🔥` `+249%`
1. [磁场干净的人有奶香味](https://s.weibo.com/weibo?q=%23%E7%A3%81%E5%9C%BA%E5%B9%B2%E5%87%80%E7%9A%84%E4%BA%BA%E6%9C%89%E5%A5%B6%E9%A6%99%E5%91%B3%23) `251.9K 🔥` `+242%`
1. [尼泊尔方面找到97具山洪遇难者遗体](https://s.weibo.com/weibo?q=%23%E5%B0%BC%E6%B3%8A%E5%B0%94%E6%96%B9%E9%9D%A2%E6%89%BE%E5%88%B097%E5%85%B7%E5%B1%B1%E6%B4%AA%E9%81%87%E9%9A%BE%E8%80%85%E9%81%97%E4%BD%93%23) `250.7K 🔥` `+240%`
1. [原配称想不通第三者比自己大10岁](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E9%85%8D%E7%A7%B0%E6%83%B3%E4%B8%8D%E9%80%9A%E7%AC%AC%E4%B8%89%E8%80%85%E6%AF%94%E8%87%AA%E5%B7%B1%E5%A4%A710%E5%B2%81%23) `249.3K 🔥` `+239%`
1. [海南大学失联女研究生最后现身桥下](https://s.weibo.com/weibo?q=%23%E6%B5%B7%E5%8D%97%E5%A4%A7%E5%AD%A6%E5%A4%B1%E8%81%94%E5%A5%B3%E7%A0%94%E7%A9%B6%E7%94%9F%E6%9C%80%E5%90%8E%E7%8E%B0%E8%BA%AB%E6%A1%A5%E4%B8%8B%23) `247.6K 🔥` `+235%`
1. [成毅用工作人员肩膀压腿](https://s.weibo.com/weibo?q=%23%E6%88%90%E6%AF%85%E7%94%A8%E5%B7%A5%E4%BD%9C%E4%BA%BA%E5%91%98%E8%82%A9%E8%86%80%E5%8E%8B%E8%85%BF%23) `246.5K 🔥` `+235%`
1. [吉隆口岸附近多发地质灾害原因探秘](https://s.weibo.com/weibo?q=%23%E5%90%89%E9%9A%86%E5%8F%A3%E5%B2%B8%E9%99%84%E8%BF%91%E5%A4%9A%E5%8F%91%E5%9C%B0%E8%B4%A8%E7%81%BE%E5%AE%B3%E5%8E%9F%E5%9B%A0%E6%8E%A2%E7%A7%98%23) `244.4K 🔥` `+230%`
1. [尼泊尔失联外国游客多数来自印度](https://s.weibo.com/weibo?q=%23%E5%B0%BC%E6%B3%8A%E5%B0%94%E5%A4%B1%E8%81%94%E5%A4%96%E5%9B%BD%E6%B8%B8%E5%AE%A2%E5%A4%9A%E6%95%B0%E6%9D%A5%E8%87%AA%E5%8D%B0%E5%BA%A6%23) `243.4K 🔥` `+232%`
1. [欢子搞错被告了](https://s.weibo.com/weibo?q=%23%E6%AC%A2%E5%AD%90%E6%90%9E%E9%94%99%E8%A2%AB%E5%91%8A%E4%BA%86%23) `241.7K 🔥` `+228%`
1. [吉隆口岸](https://s.weibo.com/weibo?q=%23%E5%90%89%E9%9A%86%E5%8F%A3%E5%B2%B8%23) `240.3K 🔥` `+224%`
1. [千万不要把秘密留在行李箱 (Never leave secrets in your suitcase)](https://s.weibo.com/weibo?q=%23%E5%8D%83%E4%B8%87%E4%B8%8D%E8%A6%81%E6%8A%8A%E7%A7%98%E5%AF%86%E7%95%99%E5%9C%A8%E8%A1%8C%E6%9D%8E%E7%AE%B1%23) `240.2K 🔥` `+226%`
1. [500万人口政务App每天仅60人用 (With a population of 5 million, only 60 people use the government app every day)](https://s.weibo.com/weibo?q=%23500%E4%B8%87%E4%BA%BA%E5%8F%A3%E6%94%BF%E5%8A%A1App%E6%AF%8F%E5%A4%A9%E4%BB%8560%E4%BA%BA%E7%94%A8%23) `237.6K 🔥` `+222%`
1. [学费被家长充错成话费了](https://s.weibo.com/weibo?q=%23%E5%AD%A6%E8%B4%B9%E8%A2%AB%E5%AE%B6%E9%95%BF%E5%85%85%E9%94%99%E6%88%90%E8%AF%9D%E8%B4%B9%E4%BA%86%23) `237.1K 🔥` `+216%`
1. [警方通报女骑手高速狂飙时速超200公里 (Police report female rider speeding at speed exceeding 200 kilometers per hour)](https://s.weibo.com/weibo?q=%23%E8%AD%A6%E6%96%B9%E9%80%9A%E6%8A%A5%E5%A5%B3%E9%AA%91%E6%89%8B%E9%AB%98%E9%80%9F%E7%8B%82%E9%A3%99%E6%97%B6%E9%80%9F%E8%B6%85200%E5%85%AC%E9%87%8C%23) `234.8K 🔥` `+220%`
1. [社保有多厉害可能超乎你的想象 (How powerful social security is may be beyond your imagination)](https://s.weibo.com/weibo?q=%23%E7%A4%BE%E4%BF%9D%E6%9C%89%E5%A4%9A%E5%8E%89%E5%AE%B3%E5%8F%AF%E8%83%BD%E8%B6%85%E4%B9%8E%E4%BD%A0%E7%9A%84%E6%83%B3%E8%B1%A1%23) `233.1K 🔥` `+216%`
1. [心软的人缺的不是狠是边界](https://s.weibo.com/weibo?q=%23%E5%BF%83%E8%BD%AF%E7%9A%84%E4%BA%BA%E7%BC%BA%E7%9A%84%E4%B8%8D%E6%98%AF%E7%8B%A0%E6%98%AF%E8%BE%B9%E7%95%8C%23) `231.9K 🔥` `+216%`
1. [做好6件事远离胃癌](https://s.weibo.com/weibo?q=%23%E5%81%9A%E5%A5%BD6%E4%BB%B6%E4%BA%8B%E8%BF%9C%E7%A6%BB%E8%83%83%E7%99%8C%23) `229.2K 🔥` `+213%`
1. [婚礼41天丧夫女子被赶出婆家](https://s.weibo.com/weibo?q=%23%E5%A9%9A%E7%A4%BC41%E5%A4%A9%E4%B8%A7%E5%A4%AB%E5%A5%B3%E5%AD%90%E8%A2%AB%E8%B5%B6%E5%87%BA%E5%A9%86%E5%AE%B6%23) `229.2K 🔥` `+212%`
1. [什么会影响前额叶的状态](https://s.weibo.com/weibo?q=%23%E4%BB%80%E4%B9%88%E4%BC%9A%E5%BD%B1%E5%93%8D%E5%89%8D%E9%A2%9D%E5%8F%B6%E7%9A%84%E7%8A%B6%E6%80%81%23) `226.6K 🔥` `+210%`
1. [西部战区空军派无人机赴吉隆勘察](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E9%83%A8%E6%88%98%E5%8C%BA%E7%A9%BA%E5%86%9B%E6%B4%BE%E6%97%A0%E4%BA%BA%E6%9C%BA%E8%B5%B4%E5%90%89%E9%9A%86%E5%8B%98%E5%AF%9F%23) `225.8K 🔥` `+206%`
1. [30岁女子长期吃外卖出现心衰征兆](https://s.weibo.com/weibo?q=%2330%E5%B2%81%E5%A5%B3%E5%AD%90%E9%95%BF%E6%9C%9F%E5%90%83%E5%A4%96%E5%8D%96%E5%87%BA%E7%8E%B0%E5%BF%83%E8%A1%B0%E5%BE%81%E5%85%86%23) `224.1K 🔥` `+205%`
1. [尼泊尔山洪遇难人数升至72人](https://s.weibo.com/weibo?q=%23%E5%B0%BC%E6%B3%8A%E5%B0%94%E5%B1%B1%E6%B4%AA%E9%81%87%E9%9A%BE%E4%BA%BA%E6%95%B0%E5%8D%87%E8%87%B372%E4%BA%BA%23) `223.1K 🔥` `+200%`
1. [娜扎演技 进步](https://s.weibo.com/weibo?q=%23%E5%A8%9C%E6%89%8E%E6%BC%94%E6%8A%80%20%E8%BF%9B%E6%AD%A5%23) `221.9K 🔥` `+202%`
1. [刘翔名下企业已注销 (The company under Liu Xiang’s name has been cancelled.)](https://s.weibo.com/weibo?q=%23%E5%88%98%E7%BF%94%E5%90%8D%E4%B8%8B%E4%BC%81%E4%B8%9A%E5%B7%B2%E6%B3%A8%E9%94%80%23) `219.7K 🔥` `+199%`
1. [早春晴朗口碑](https://s.weibo.com/weibo?q=%23%E6%97%A9%E6%98%A5%E6%99%B4%E6%9C%97%E5%8F%A3%E7%A2%91%23) `218.2K 🔥` `+196%`
1. [黄金价格持续上涨 (Gold prices continue to rise)](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%E4%BB%B7%E6%A0%BC%E6%8C%81%E7%BB%AD%E4%B8%8A%E6%B6%A8%23) `216.5K 🔥` `+196%`
1. [用洗衣机洗鞋的人天塌了](https://s.weibo.com/weibo?q=%23%E7%94%A8%E6%B4%97%E8%A1%A3%E6%9C%BA%E6%B4%97%E9%9E%8B%E7%9A%84%E4%BA%BA%E5%A4%A9%E5%A1%8C%E4%BA%86%23) `214.0K 🔥` `+191%`

Updated at 2026-08-27 07:27:24

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
