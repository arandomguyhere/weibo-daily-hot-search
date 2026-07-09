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

1. [阿根廷夺冠概率跌至第四 (Argentina's title odds drop to fourth)](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E5%A4%BA%E5%86%A0%E6%A6%82%E7%8E%87%E8%B7%8C%E8%87%B3%E7%AC%AC%E5%9B%9B%23) `932.3K 🔥` `NEW`
1. [蔚来ES8大五座版上市](https://s.weibo.com/weibo?q=%23%E8%94%9A%E6%9D%A5ES8%E5%A4%A7%E4%BA%94%E5%BA%A7%E7%89%88%E4%B8%8A%E5%B8%82%23) `444.6K 🔥` `NEW`
1. [河南大哥带6000份烩面驰援广西](https://s.weibo.com/weibo?q=%23%E6%B2%B3%E5%8D%97%E5%A4%A7%E5%93%A5%E5%B8%A66000%E4%BB%BD%E7%83%A9%E9%9D%A2%E9%A9%B0%E6%8F%B4%E5%B9%BF%E8%A5%BF%23) `440.7K 🔥` `NEW`
1. [台风巴威10日起影响杭州](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E5%B7%B4%E5%A8%8110%E6%97%A5%E8%B5%B7%E5%BD%B1%E5%93%8D%E6%9D%AD%E5%B7%9E%23) `438.3K 🔥` `NEW`
1. [横州养殖户称每间蛇房都有铁丝网](https://s.weibo.com/weibo?q=%23%E6%A8%AA%E5%B7%9E%E5%85%BB%E6%AE%96%E6%88%B7%E7%A7%B0%E6%AF%8F%E9%97%B4%E8%9B%87%E6%88%BF%E9%83%BD%E6%9C%89%E9%93%81%E4%B8%9D%E7%BD%91%23) `436.5K 🔥` `NEW`
1. [巴威](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E5%A8%81%23) `430.3K 🔥` `NEW`
1. [宜宾高县地震](https://s.weibo.com/weibo?q=%23%E5%AE%9C%E5%AE%BE%E9%AB%98%E5%8E%BF%E5%9C%B0%E9%9C%87%23) `427.1K 🔥` `NEW`
1. [黄灿灿 体重方面我会注意的](https://s.weibo.com/weibo?q=%23%E9%BB%84%E7%81%BF%E7%81%BF%20%E4%BD%93%E9%87%8D%E6%96%B9%E9%9D%A2%E6%88%91%E4%BC%9A%E6%B3%A8%E6%84%8F%E7%9A%84%23) `425.6K 🔥` `NEW`
1. [长鑫科技新股申购](https://s.weibo.com/weibo?q=%23%E9%95%BF%E9%91%AB%E7%A7%91%E6%8A%80%E6%96%B0%E8%82%A1%E7%94%B3%E8%B4%AD%23) `422.4K 🔥` `NEW`
1. [雷军坦言车内空间不应该固定](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E5%86%9B%E5%9D%A6%E8%A8%80%E8%BD%A6%E5%86%85%E7%A9%BA%E9%97%B4%E4%B8%8D%E5%BA%94%E8%AF%A5%E5%9B%BA%E5%AE%9A%23) `419.2K 🔥` `NEW`
1. [野狗骨头看完亲嘴再看这个好美味 (After watching Wild Dog Bones and kissing it, watch this, it’s so delicious)](https://s.weibo.com/weibo?q=%23%E9%87%8E%E7%8B%97%E9%AA%A8%E5%A4%B4%E7%9C%8B%E5%AE%8C%E4%BA%B2%E5%98%B4%E5%86%8D%E7%9C%8B%E8%BF%99%E4%B8%AA%E5%A5%BD%E7%BE%8E%E5%91%B3%23) `418.2K 🔥` `NEW`
1. [广西一老人为救邻居10岁孩子被冲走](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E8%A5%BF%E4%B8%80%E8%80%81%E4%BA%BA%E4%B8%BA%E6%95%91%E9%82%BB%E5%B1%8510%E5%B2%81%E5%AD%A9%E5%AD%90%E8%A2%AB%E5%86%B2%E8%B5%B0%23) `416.3K 🔥` `NEW`
1. [被蛇咬伤村民在家看到五六条蛇](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E8%9B%87%E5%92%AC%E4%BC%A4%E6%9D%91%E6%B0%91%E5%9C%A8%E5%AE%B6%E7%9C%8B%E5%88%B0%E4%BA%94%E5%85%AD%E6%9D%A1%E8%9B%87%23) `412.4K 🔥` `NEW`
1. [千亿民企被曝全员停薪](https://s.weibo.com/weibo?q=%23%E5%8D%83%E4%BA%BF%E6%B0%91%E4%BC%81%E8%A2%AB%E6%9B%9D%E5%85%A8%E5%91%98%E5%81%9C%E8%96%AA%23) `409.4K 🔥` `NEW`
1. [丁禹兮 刷子](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A6%B9%E5%85%AE%20%E5%88%B7%E5%AD%90%23) `406.3K 🔥` `NEW`
1. [宋亚轩发型师是谁](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E4%BA%9A%E8%BD%A9%E5%8F%91%E5%9E%8B%E5%B8%88%E6%98%AF%E8%B0%81%23) `403.0K 🔥` `NEW`
1. [Angelababy给小酒窝比心](https://s.weibo.com/weibo?q=%23Angelababy%E7%BB%99%E5%B0%8F%E9%85%92%E7%AA%9D%E6%AF%94%E5%BF%83%23) `400.1K 🔥` `NEW`
1. [周星驰新片票房预测](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%98%9F%E9%A9%B0%E6%96%B0%E7%89%87%E7%A5%A8%E6%88%BF%E9%A2%84%E6%B5%8B%23) `397.3K 🔥` `NEW`
1. [王俊凯演唱会有实感了](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E6%BC%94%E5%94%B1%E4%BC%9A%E6%9C%89%E5%AE%9E%E6%84%9F%E4%BA%86%23) `393.6K 🔥` `NEW`
1. [邕江已出现70.92米的洪峰](https://s.weibo.com/weibo?q=%23%E9%82%95%E6%B1%9F%E5%B7%B2%E5%87%BA%E7%8E%B070.92%E7%B1%B3%E7%9A%84%E6%B4%AA%E5%B3%B0%23) `392.4K 🔥` `NEW`
1. [德尚回应阿根廷裁判组执法 (Deschamps responds to Argentine refereeing team's enforcement)](https://s.weibo.com/weibo?q=%23%E5%BE%B7%E5%B0%9A%E5%9B%9E%E5%BA%94%E9%98%BF%E6%A0%B9%E5%BB%B7%E8%A3%81%E5%88%A4%E7%BB%84%E6%89%A7%E6%B3%95%23) `382.2K 🔥` `NEW`
1. [中央气象台发了台风黄色预警](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%A4%AE%E6%B0%94%E8%B1%A1%E5%8F%B0%E5%8F%91%E4%BA%86%E5%8F%B0%E9%A3%8E%E9%BB%84%E8%89%B2%E9%A2%84%E8%AD%A6%23) `376.7K 🔥` `NEW`
1. [世界杯决赛中场秀嘉宾](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%E5%86%B3%E8%B5%9B%E4%B8%AD%E5%9C%BA%E7%A7%80%E5%98%89%E5%AE%BE%23) `373.6K 🔥` `NEW`
1. [宋威龙张婧仪第一场戏就是初吻](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E5%A8%81%E9%BE%99%E5%BC%A0%E5%A9%A7%E4%BB%AA%E7%AC%AC%E4%B8%80%E5%9C%BA%E6%88%8F%E5%B0%B1%E6%98%AF%E5%88%9D%E5%90%BB%23) `361.3K 🔥` `NEW`
1. [茶颜悦色吃出蟑螂干寄回才能赔付](https://s.weibo.com/weibo?q=%23%E8%8C%B6%E9%A2%9C%E6%82%A6%E8%89%B2%E5%90%83%E5%87%BA%E8%9F%91%E8%9E%82%E5%B9%B2%E5%AF%84%E5%9B%9E%E6%89%8D%E8%83%BD%E8%B5%94%E4%BB%98%23) `352.3K 🔥` `NEW`
1. [台风巴威可能正面登陆 (Typhoon Bavi may make landfall head-on)](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E5%B7%B4%E5%A8%81%E5%8F%AF%E8%83%BD%E6%AD%A3%E9%9D%A2%E7%99%BB%E9%99%86%23) `1.9M 🔥` `+34%`
1. [当寂静的广西街头响起子弟兵口号 (When the silent streets of Guangxi rang out the slogans of the disciples)](https://s.weibo.com/weibo?q=%23%E5%BD%93%E5%AF%82%E9%9D%99%E7%9A%84%E5%B9%BF%E8%A5%BF%E8%A1%97%E5%A4%B4%E5%93%8D%E8%B5%B7%E5%AD%90%E5%BC%9F%E5%85%B5%E5%8F%A3%E5%8F%B7%23) `836.0K 🔥` `+32%`
1. [e-tron带你去看球](https://s.weibo.com/weibo?q=%23e-tron%E5%B8%A6%E4%BD%A0%E5%8E%BB%E7%9C%8B%E7%90%83%23) `828.1K 🔥` `+70%`
1. [FBI调查阿根廷足协在美资金运作](https://s.weibo.com/weibo?q=%23FBI%E8%B0%83%E6%9F%A5%E9%98%BF%E6%A0%B9%E5%BB%B7%E8%B6%B3%E5%8D%8F%E5%9C%A8%E7%BE%8E%E8%B5%84%E9%87%91%E8%BF%90%E4%BD%9C%23) `824.1K 🔥` `+372%`
1. [粉笔CEO张小龙辞职](https://s.weibo.com/weibo?q=%23%E7%B2%89%E7%AC%94CEO%E5%BC%A0%E5%B0%8F%E9%BE%99%E8%BE%9E%E8%81%8C%23) `445.8K 🔥` `+146%`
1. [虞书欣就这样一胖一瘦地过来了](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E5%B0%B1%E8%BF%99%E6%A0%B7%E4%B8%80%E8%83%96%E4%B8%80%E7%98%A6%E5%9C%B0%E8%BF%87%E6%9D%A5%E4%BA%86%23) `445.6K 🔥` `+148%`
1. [功夫女足质感](https://s.weibo.com/weibo?q=%23%E5%8A%9F%E5%A4%AB%E5%A5%B3%E8%B6%B3%E8%B4%A8%E6%84%9F%23) `443.1K 🔥` `+157%`
1. [上海暴雨 (Heavy rain in Shanghai)](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E6%9A%B4%E9%9B%A8%23) `434.9K 🔥` `+166%`
1. [良子体检报告出来了](https://s.weibo.com/weibo?q=%23%E8%89%AF%E5%AD%90%E4%BD%93%E6%A3%80%E6%8A%A5%E5%91%8A%E5%87%BA%E6%9D%A5%E4%BA%86%23) `432.1K 🔥` `+144%`
1. [才知道宝贝回家是给本人看的](https://s.weibo.com/weibo?q=%23%E6%89%8D%E7%9F%A5%E9%81%93%E5%AE%9D%E8%B4%9D%E5%9B%9E%E5%AE%B6%E6%98%AF%E7%BB%99%E6%9C%AC%E4%BA%BA%E7%9C%8B%E7%9A%84%23) `423.3K 🔥` `+160%`
1. [邓紫棋已经尽全力给到大家补偿了](https://s.weibo.com/weibo?q=%23%E9%82%93%E7%B4%AB%E6%A3%8B%E5%B7%B2%E7%BB%8F%E5%B0%BD%E5%85%A8%E5%8A%9B%E7%BB%99%E5%88%B0%E5%A4%A7%E5%AE%B6%E8%A1%A5%E5%81%BF%E4%BA%86%23) `411.1K 🔥` `+139%`
1. [印度12岁少女被4男轮奸沉塘 (12-year-old Indian girl was gang-raped by four men in Shentang)](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%BA%A612%E5%B2%81%E5%B0%91%E5%A5%B3%E8%A2%AB4%E7%94%B7%E8%BD%AE%E5%A5%B8%E6%B2%89%E5%A1%98%23) `404.3K 🔥` `+141%`
1. [台风](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%23) `391.4K 🔥` `+64%`
1. [广东IP劝江浙沪囤货](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E4%B8%9CIP%E5%8A%9D%E6%B1%9F%E6%B5%99%E6%B2%AA%E5%9B%A4%E8%B4%A7%23) `388.3K 🔥` `+120%`
1. [范丞丞方起诉司晓迪](https://s.weibo.com/weibo?q=%23%E8%8C%83%E4%B8%9E%E4%B8%9E%E6%96%B9%E8%B5%B7%E8%AF%89%E5%8F%B8%E6%99%93%E8%BF%AA%23) `386.8K 🔥` `+127%`
1. [44岁渐冻症男子创奇迹结婚生下俩女](https://s.weibo.com/weibo?q=%2344%E5%B2%81%E6%B8%90%E5%86%BB%E7%97%87%E7%94%B7%E5%AD%90%E5%88%9B%E5%A5%87%E8%BF%B9%E7%BB%93%E5%A9%9A%E7%94%9F%E4%B8%8B%E4%BF%A9%E5%A5%B3%23) `385.2K 🔥` `+125%`
1. [第一次见这么完美的西瓜 (It’s the first time I’ve seen such a perfect watermelon)](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%AC%A1%E8%A7%81%E8%BF%99%E4%B9%88%E5%AE%8C%E7%BE%8E%E7%9A%84%E8%A5%BF%E7%93%9C%23) `380.1K 🔥` `+120%`
1. [C罗乘私人飞机离开 (Ronaldo leaves on private jet)](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E4%B9%98%E7%A7%81%E4%BA%BA%E9%A3%9E%E6%9C%BA%E7%A6%BB%E5%BC%80%23) `377.4K 🔥` `+126%`
1. [一家三口被风卷走坠亡官方介入](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%AE%B6%E4%B8%89%E5%8F%A3%E8%A2%AB%E9%A3%8E%E5%8D%B7%E8%B5%B0%E5%9D%A0%E4%BA%A1%E5%AE%98%E6%96%B9%E4%BB%8B%E5%85%A5%23) `371.4K 🔥` `+130%`
1. [韦东奕获国家自然科学二等奖](https://s.weibo.com/weibo?q=%23%E9%9F%A6%E4%B8%9C%E5%A5%95%E8%8E%B7%E5%9B%BD%E5%AE%B6%E8%87%AA%E7%84%B6%E7%A7%91%E5%AD%A6%E4%BA%8C%E7%AD%89%E5%A5%96%23) `369.0K 🔥` `+107%`
1. [黑天鹅突袭全球股市 (Black swan strikes global stock markets)](https://s.weibo.com/weibo?q=%23%E9%BB%91%E5%A4%A9%E9%B9%85%E7%AA%81%E8%A2%AD%E5%85%A8%E7%90%83%E8%82%A1%E5%B8%82%23) `365.6K 🔥` `+117%`
1. [良子今年的血糖和血压甚至更健康了](https://s.weibo.com/weibo?q=%23%E8%89%AF%E5%AD%90%E4%BB%8A%E5%B9%B4%E7%9A%84%E8%A1%80%E7%B3%96%E5%92%8C%E8%A1%80%E5%8E%8B%E7%94%9A%E8%87%B3%E6%9B%B4%E5%81%A5%E5%BA%B7%E4%BA%86%23) `363.7K 🔥` `+137%`
1. [纯电GLC价格给到夯 (The price of pure electric GLC is high)](https://s.weibo.com/weibo?q=%23%E7%BA%AF%E7%94%B5GLC%E4%BB%B7%E6%A0%BC%E7%BB%99%E5%88%B0%E5%A4%AF%23) `358.6K 🔥` `+305%`
1. [功夫女足找回了港片黄金时代的味儿](https://s.weibo.com/weibo?q=%23%E5%8A%9F%E5%A4%AB%E5%A5%B3%E8%B6%B3%E6%89%BE%E5%9B%9E%E4%BA%86%E6%B8%AF%E7%89%87%E9%BB%84%E9%87%91%E6%97%B6%E4%BB%A3%E7%9A%84%E5%91%B3%E5%84%BF%23) `356.6K 🔥` `+136%`
1. [研究称Claude内部有类人脑架构](https://s.weibo.com/weibo?q=%23%E7%A0%94%E7%A9%B6%E7%A7%B0Claude%E5%86%85%E9%83%A8%E6%9C%89%E7%B1%BB%E4%BA%BA%E8%84%91%E6%9E%B6%E6%9E%84%23) `355.2K 🔥` `+137%`
1. [审美是一种无法伪装的能力](https://s.weibo.com/weibo?q=%23%E5%AE%A1%E7%BE%8E%E6%98%AF%E4%B8%80%E7%A7%8D%E6%97%A0%E6%B3%95%E4%BC%AA%E8%A3%85%E7%9A%84%E8%83%BD%E5%8A%9B%23) `367.7K 🔥`
1. [家人被卷走身亡幸存大儿子被送医院 (The family was swept away and died. The surviving eldest son was sent to the hospital.)](https://s.weibo.com/weibo?q=%23%E5%AE%B6%E4%BA%BA%E8%A2%AB%E5%8D%B7%E8%B5%B0%E8%BA%AB%E4%BA%A1%E5%B9%B8%E5%AD%98%E5%A4%A7%E5%84%BF%E5%AD%90%E8%A2%AB%E9%80%81%E5%8C%BB%E9%99%A2%23) `398.2K 🔥` `-50%`

Updated at 2026-07-09 09:19:26

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
