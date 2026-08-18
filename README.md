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

1. [南京消防辟谣培训机构失火39人死亡 (Fire at Nanjing Fire Rumor Refuting Training Institute kills 39 people)](https://s.weibo.com/weibo?q=%23%E5%8D%97%E4%BA%AC%E6%B6%88%E9%98%B2%E8%BE%9F%E8%B0%A3%E5%9F%B9%E8%AE%AD%E6%9C%BA%E6%9E%84%E5%A4%B1%E7%81%AB39%E4%BA%BA%E6%AD%BB%E4%BA%A1%23) `449.1K 🔥` `NEW`
1. [重器 流氓罪死刑](https://s.weibo.com/weibo?q=%23%E9%87%8D%E5%99%A8%20%E6%B5%81%E6%B0%93%E7%BD%AA%E6%AD%BB%E5%88%91%23) `445.0K 🔥` `NEW`
1. [iPhone18Pro系列六大升级](https://s.weibo.com/weibo?q=%23iPhone18Pro%E7%B3%BB%E5%88%97%E5%85%AD%E5%A4%A7%E5%8D%87%E7%BA%A7%23) `422.3K 🔥` `NEW`
1. [3娃非亲生男子称对方愿赔偿3万元](https://s.weibo.com/weibo?q=%233%E5%A8%83%E9%9D%9E%E4%BA%B2%E7%94%9F%E7%94%B7%E5%AD%90%E7%A7%B0%E5%AF%B9%E6%96%B9%E6%84%BF%E8%B5%94%E5%81%BF3%E4%B8%87%E5%85%83%23) `416.8K 🔥` `NEW`
1. [辛芷蕾用滋水枪洗脚](https://s.weibo.com/weibo?q=%23%E8%BE%9B%E8%8A%B7%E8%95%BE%E7%94%A8%E6%BB%8B%E6%B0%B4%E6%9E%AA%E6%B4%97%E8%84%9A%23) `403.5K 🔥` `NEW`
1. [虞书欣何盼戏水路透](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E4%BD%95%E7%9B%BC%E6%88%8F%E6%B0%B4%E8%B7%AF%E9%80%8F%23) `399.0K 🔥` `NEW`
1. [招商蛇口总部开展调查](https://s.weibo.com/weibo?q=%23%E6%8B%9B%E5%95%86%E8%9B%87%E5%8F%A3%E6%80%BB%E9%83%A8%E5%BC%80%E5%B1%95%E8%B0%83%E6%9F%A5%23) `388.8K 🔥` `NEW`
1. [卡戴珊汉密尔顿热恋秀恩爱](https://s.weibo.com/weibo?q=%23%E5%8D%A1%E6%88%B4%E7%8F%8A%E6%B1%89%E5%AF%86%E5%B0%94%E9%A1%BF%E7%83%AD%E6%81%8B%E7%A7%80%E6%81%A9%E7%88%B1%23) `386.0K 🔥` `NEW`
1. [刘畊宏儿子女儿颜值](https://s.weibo.com/weibo?q=%23%E5%88%98%E7%95%8A%E5%AE%8F%E5%84%BF%E5%AD%90%E5%A5%B3%E5%84%BF%E9%A2%9C%E5%80%BC%23) `383.0K 🔥` `NEW`
1. [顶替上大学案北京借名买房成导火索](https://s.weibo.com/weibo?q=%23%E9%A1%B6%E6%9B%BF%E4%B8%8A%E5%A4%A7%E5%AD%A6%E6%A1%88%E5%8C%97%E4%BA%AC%E5%80%9F%E5%90%8D%E4%B9%B0%E6%88%BF%E6%88%90%E5%AF%BC%E7%81%AB%E7%B4%A2%23) `380.5K 🔥` `NEW`
1. [周杰伦被小女儿化妆 (Jay Chou was put on makeup by his little daughter)](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%9D%B0%E4%BC%A6%E8%A2%AB%E5%B0%8F%E5%A5%B3%E5%84%BF%E5%8C%96%E5%A6%86%23) `379.1K 🔥` `NEW`
1. [恋与深空畅销榜攀升](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%E7%95%85%E9%94%80%E6%A6%9C%E6%94%80%E5%8D%87%23) `369.5K 🔥` `NEW`
1. [TF家族四代演唱会收官深夜发文](https://s.weibo.com/weibo?q=%23TF%E5%AE%B6%E6%97%8F%E5%9B%9B%E4%BB%A3%E6%BC%94%E5%94%B1%E4%BC%9A%E6%94%B6%E5%AE%98%E6%B7%B1%E5%A4%9C%E5%8F%91%E6%96%87%23) `363.2K 🔥` `NEW`
1. [韩路分析大批AI博主停更原因](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E8%B7%AF%E5%88%86%E6%9E%90%E5%A4%A7%E6%89%B9AI%E5%8D%9A%E4%B8%BB%E5%81%9C%E6%9B%B4%E5%8E%9F%E5%9B%A0%23) `358.8K 🔥` `NEW`
1. [12345 滥用](https://s.weibo.com/weibo?q=%2312345%20%E6%BB%A5%E7%94%A8%23) `753.1K 🔥` `+95%`
1. [天安门下半旗悼念朱镕基同志 (Flags flown at half-mast in Tiananmen Square to mourn Comrade Zhu Rongji)](https://s.weibo.com/weibo?q=%23%E5%A4%A9%E5%AE%89%E9%97%A8%E4%B8%8B%E5%8D%8A%E6%97%97%E6%82%BC%E5%BF%B5%E6%9C%B1%E9%95%95%E5%9F%BA%E5%90%8C%E5%BF%97%23) `1.0M 🔥`
1. [前7个月国民经济总体平稳向新向优 (In the first seven months, the national economy has generally been stable and improving.)](https://s.weibo.com/weibo?q=%23%E5%89%8D7%E4%B8%AA%E6%9C%88%E5%9B%BD%E6%B0%91%E7%BB%8F%E6%B5%8E%E6%80%BB%E4%BD%93%E5%B9%B3%E7%A8%B3%E5%90%91%E6%96%B0%E5%90%91%E4%BC%98%23) `655.5K 🔥`
1. [印度教授发中国街景称被印媒骗惨了](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%BA%A6%E6%95%99%E6%8E%88%E5%8F%91%E4%B8%AD%E5%9B%BD%E8%A1%97%E6%99%AF%E7%A7%B0%E8%A2%AB%E5%8D%B0%E5%AA%92%E9%AA%97%E6%83%A8%E4%BA%86%23) `646.1K 🔥`
1. [泡面巨头靠涨价赚翻了](https://s.weibo.com/weibo?q=%23%E6%B3%A1%E9%9D%A2%E5%B7%A8%E5%A4%B4%E9%9D%A0%E6%B6%A8%E4%BB%B7%E8%B5%9A%E7%BF%BB%E4%BA%86%23) `451.7K 🔥`
1. [高考只差一分却过上了两种人生](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%80%83%E5%8F%AA%E5%B7%AE%E4%B8%80%E5%88%86%E5%8D%B4%E8%BF%87%E4%B8%8A%E4%BA%86%E4%B8%A4%E7%A7%8D%E4%BA%BA%E7%94%9F%23) `450.5K 🔥`
1. [不要允许人一边使用你一边否定你](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E8%A6%81%E5%85%81%E8%AE%B8%E4%BA%BA%E4%B8%80%E8%BE%B9%E4%BD%BF%E7%94%A8%E4%BD%A0%E4%B8%80%E8%BE%B9%E5%90%A6%E5%AE%9A%E4%BD%A0%23) `448.3K 🔥`
1. [榴莲价格彻底崩了 (Durian prices have completely collapsed)](https://s.weibo.com/weibo?q=%23%E6%A6%B4%E8%8E%B2%E4%BB%B7%E6%A0%BC%E5%BD%BB%E5%BA%95%E5%B4%A9%E4%BA%86%23) `447.2K 🔥`
1. [龙餐馆 现挂 (Dragon Restaurant now available)](https://s.weibo.com/weibo?q=%23%E9%BE%99%E9%A4%90%E9%A6%86%20%E7%8E%B0%E6%8C%82%23) `441.6K 🔥`
1. [3孩非亲生女方认为男方理应养孩子](https://s.weibo.com/weibo?q=%233%E5%AD%A9%E9%9D%9E%E4%BA%B2%E7%94%9F%E5%A5%B3%E6%96%B9%E8%AE%A4%E4%B8%BA%E7%94%B7%E6%96%B9%E7%90%86%E5%BA%94%E5%85%BB%E5%AD%A9%E5%AD%90%23) `439.0K 🔥`
1. [张若昀白客玩蔡徐坤梗 (Zhang Ruoyun plays with Cai Xukun)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E8%8B%A5%E6%98%80%E7%99%BD%E5%AE%A2%E7%8E%A9%E8%94%A1%E5%BE%90%E5%9D%A4%E6%A2%97%23) `438.4K 🔥`
1. [李嫣几乎看不见唇腭裂修复痕迹 (Li Yan’s cleft lip and palate repair traces are almost invisible)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%AB%A3%E5%87%A0%E4%B9%8E%E7%9C%8B%E4%B8%8D%E8%A7%81%E5%94%87%E8%85%AD%E8%A3%82%E4%BF%AE%E5%A4%8D%E7%97%95%E8%BF%B9%23) `436.1K 🔥`
1. [桃黑黑说真的挺不好意思 (Taoheihei is really embarrassed to say)](https://s.weibo.com/weibo?q=%23%E6%A1%83%E9%BB%91%E9%BB%91%E8%AF%B4%E7%9C%9F%E7%9A%84%E6%8C%BA%E4%B8%8D%E5%A5%BD%E6%84%8F%E6%80%9D%23) `433.5K 🔥`
1. [杭州酒局事件受害女子家人回应](https://s.weibo.com/weibo?q=%23%E6%9D%AD%E5%B7%9E%E9%85%92%E5%B1%80%E4%BA%8B%E4%BB%B6%E5%8F%97%E5%AE%B3%E5%A5%B3%E5%AD%90%E5%AE%B6%E4%BA%BA%E5%9B%9E%E5%BA%94%23) `429.9K 🔥`
1. [黄圣依离婚后首次带儿子安麟出镜](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%9C%A3%E4%BE%9D%E7%A6%BB%E5%A9%9A%E5%90%8E%E9%A6%96%E6%AC%A1%E5%B8%A6%E5%84%BF%E5%AD%90%E5%AE%89%E9%BA%9F%E5%87%BA%E9%95%9C%23) `426.5K 🔥`
1. [李嫣6岁举办了人生第一场画展](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%AB%A36%E5%B2%81%E4%B8%BE%E5%8A%9E%E4%BA%86%E4%BA%BA%E7%94%9F%E7%AC%AC%E4%B8%80%E5%9C%BA%E7%94%BB%E5%B1%95%23) `426.1K 🔥`
1. [左奇函过度透气 (Zuo Qihan is too breathable)](https://s.weibo.com/weibo?q=%23%E5%B7%A6%E5%A5%87%E5%87%BD%E8%BF%87%E5%BA%A6%E9%80%8F%E6%B0%94%23) `421.7K 🔥`
1. [赵海峰酒局 拿地潜规则](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E6%B5%B7%E5%B3%B0%E9%85%92%E5%B1%80%20%E6%8B%BF%E5%9C%B0%E6%BD%9C%E8%A7%84%E5%88%99%23) `418.1K 🔥`
1. [赵海峰 酒桌文化](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E6%B5%B7%E5%B3%B0%20%E9%85%92%E6%A1%8C%E6%96%87%E5%8C%96%23) `415.1K 🔥`
1. [杨幂用腾讯会议belike](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E7%94%A8%E8%85%BE%E8%AE%AF%E4%BC%9A%E8%AE%AEbelike%23) `412.1K 🔥`
1. [蓝盈莹和男友刚在一起没多久](https://s.weibo.com/weibo?q=%23%E8%93%9D%E7%9B%88%E8%8E%B9%E5%92%8C%E7%94%B7%E5%8F%8B%E5%88%9A%E5%9C%A8%E4%B8%80%E8%B5%B7%E6%B2%A1%E5%A4%9A%E4%B9%85%23) `409.8K 🔥`
1. [哈佛麻省理工造了83亿AI人 (Harvard and MIT created 8.3 billion AI people)](https://s.weibo.com/weibo?q=%23%E5%93%88%E4%BD%9B%E9%BA%BB%E7%9C%81%E7%90%86%E5%B7%A5%E9%80%A0%E4%BA%8683%E4%BA%BFAI%E4%BA%BA%23) `408.4K 🔥`
1. [曝时代少年团工作人员公费旅游 (Times Youth League staff members travel at public expense)](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E5%B7%A5%E4%BD%9C%E4%BA%BA%E5%91%98%E5%85%AC%E8%B4%B9%E6%97%85%E6%B8%B8%23) `407.1K 🔥`
1. [BBA大降价 宝马5系跌至28万](https://s.weibo.com/weibo?q=%23BBA%E5%A4%A7%E9%99%8D%E4%BB%B7%20%E5%AE%9D%E9%A9%AC5%E7%B3%BB%E8%B7%8C%E8%87%B328%E4%B8%87%23) `402.9K 🔥`
1. [赵海峰接受调查](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E6%B5%B7%E5%B3%B0%E6%8E%A5%E5%8F%97%E8%B0%83%E6%9F%A5%23) `397.9K 🔥`
1. [许家印崩了东北富二代42个亿 (Xu Jiayin lost 4.2 billion to the rich second generation of Northeast China)](https://s.weibo.com/weibo?q=%23%E8%AE%B8%E5%AE%B6%E5%8D%B0%E5%B4%A9%E4%BA%86%E4%B8%9C%E5%8C%97%E5%AF%8C%E4%BA%8C%E4%BB%A342%E4%B8%AA%E4%BA%BF%23) `396.2K 🔥`
1. [蓝盈莹承认恋情](https://s.weibo.com/weibo?q=%23%E8%93%9D%E7%9B%88%E8%8E%B9%E6%89%BF%E8%AE%A4%E6%81%8B%E6%83%85%23) `393.1K 🔥`
1. [杭州涉事高管曾是高考状元清华毕业](https://s.weibo.com/weibo?q=%23%E6%9D%AD%E5%B7%9E%E6%B6%89%E4%BA%8B%E9%AB%98%E7%AE%A1%E6%9B%BE%E6%98%AF%E9%AB%98%E8%80%83%E7%8A%B6%E5%85%83%E6%B8%85%E5%8D%8E%E6%AF%95%E4%B8%9A%23) `392.4K 🔥`
1. [频准激光中一签赚超45万](https://s.weibo.com/weibo?q=%23%E9%A2%91%E5%87%86%E6%BF%80%E5%85%89%E4%B8%AD%E4%B8%80%E7%AD%BE%E8%B5%9A%E8%B6%8545%E4%B8%87%23) `385.3K 🔥`
1. [陈都灵把拍立得放在张婧仪关晓彤中间](https://s.weibo.com/weibo?q=%23%E9%99%88%E9%83%BD%E7%81%B5%E6%8A%8A%E6%8B%8D%E7%AB%8B%E5%BE%97%E6%94%BE%E5%9C%A8%E5%BC%A0%E5%A9%A7%E4%BB%AA%E5%85%B3%E6%99%93%E5%BD%A4%E4%B8%AD%E9%97%B4%23) `377.2K 🔥`
1. [童装设计 引人触摸](https://s.weibo.com/weibo?q=%23%E7%AB%A5%E8%A3%85%E8%AE%BE%E8%AE%A1%20%E5%BC%95%E4%BA%BA%E8%A7%A6%E6%91%B8%23) `374.3K 🔥`
1. [孩子过度独立背后是父母不够独立](https://s.weibo.com/weibo?q=%23%E5%AD%A9%E5%AD%90%E8%BF%87%E5%BA%A6%E7%8B%AC%E7%AB%8B%E8%83%8C%E5%90%8E%E6%98%AF%E7%88%B6%E6%AF%8D%E4%B8%8D%E5%A4%9F%E7%8B%AC%E7%AB%8B%23) `371.9K 🔥`
1. [17岁女孩搭车路过邵阳司机下车失联被锁2小时 (A 17-year-old girl was hitchhiking in Shaoyang. The driver got out of the car and lost contact. She was locked for 2 hours.)](https://s.weibo.com/weibo?q=%2317%E5%B2%81%E5%A5%B3%E5%AD%A9%E6%90%AD%E8%BD%A6%E8%B7%AF%E8%BF%87%E9%82%B5%E9%98%B3%E5%8F%B8%E6%9C%BA%E4%B8%8B%E8%BD%A6%E5%A4%B1%E8%81%94%E8%A2%AB%E9%94%812%E5%B0%8F%E6%97%B6%23) `368.8K 🔥`
1. [多方回应女子杭州酒局遭伤害 (Many parties responded to the woman’s injury in a Hangzhou wine shop)](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E6%96%B9%E5%9B%9E%E5%BA%94%E5%A5%B3%E5%AD%90%E6%9D%AD%E5%B7%9E%E9%85%92%E5%B1%80%E9%81%AD%E4%BC%A4%E5%AE%B3%23) `366.5K 🔥`
1. [五公庆功宴](https://s.weibo.com/weibo?q=%23%E4%BA%94%E5%85%AC%E5%BA%86%E5%8A%9F%E5%AE%B4%23) `361.5K 🔥`
1. [6岁女儿学跳舞让爸爸减了37斤 (Dad lost 37 pounds after 6-year-old daughter learned to dance)](https://s.weibo.com/weibo?q=%236%E5%B2%81%E5%A5%B3%E5%84%BF%E5%AD%A6%E8%B7%B3%E8%88%9E%E8%AE%A9%E7%88%B8%E7%88%B8%E5%87%8F%E4%BA%8637%E6%96%A4%23) `356.7K 🔥`

Updated at 2026-08-18 12:10:05

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
