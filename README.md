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

1. [夏雨荷和乾隆一见误终生是这样的 (Xia Yuhe and Qianlong met like this for the rest of their lives.)](https://s.weibo.com/weibo?q=%23%E5%A4%8F%E9%9B%A8%E8%8D%B7%E5%92%8C%E4%B9%BE%E9%9A%86%E4%B8%80%E8%A7%81%E8%AF%AF%E7%BB%88%E7%94%9F%E6%98%AF%E8%BF%99%E6%A0%B7%E7%9A%84%23) `277.2K 🔥` `NEW`
1. [小年](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%B9%B4%23) `141.3K 🔥` `NEW`
1. [15岁男生徒手掰苹果掰断80公斤臂力器](https://s.weibo.com/weibo?q=%2315%E5%B2%81%E7%94%B7%E7%94%9F%E5%BE%92%E6%89%8B%E6%8E%B0%E8%8B%B9%E6%9E%9C%E6%8E%B0%E6%96%AD80%E5%85%AC%E6%96%A4%E8%87%82%E5%8A%9B%E5%99%A8%23) `90.0K 🔥` `NEW`
1. [女子给哥哥买房后却不许除夕留宿](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E7%BB%99%E5%93%A5%E5%93%A5%E4%B9%B0%E6%88%BF%E5%90%8E%E5%8D%B4%E4%B8%8D%E8%AE%B8%E9%99%A4%E5%A4%95%E7%95%99%E5%AE%BF%23) `68.1K 🔥` `NEW`
1. [妻子孕期丈夫却在女厕爬马桶偷拍](https://s.weibo.com/weibo?q=%23%E5%A6%BB%E5%AD%90%E5%AD%95%E6%9C%9F%E4%B8%88%E5%A4%AB%E5%8D%B4%E5%9C%A8%E5%A5%B3%E5%8E%95%E7%88%AC%E9%A9%AC%E6%A1%B6%E5%81%B7%E6%8B%8D%23) `64.2K 🔥` `NEW`
1. [成毅片场被冻到](https://s.weibo.com/weibo?q=%23%E6%88%90%E6%AF%85%E7%89%87%E5%9C%BA%E8%A2%AB%E5%86%BB%E5%88%B0%23) `53.2K 🔥` `NEW`
1. [伊朗向中俄通报美伊谈判细节](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%90%91%E4%B8%AD%E4%BF%84%E9%80%9A%E6%8A%A5%E7%BE%8E%E4%BC%8A%E8%B0%88%E5%88%A4%E7%BB%86%E8%8A%82%23) `53.0K 🔥` `NEW`
1. [2025年微博十大热搜艺人](https://s.weibo.com/weibo?q=%232025%E5%B9%B4%E5%BE%AE%E5%8D%9A%E5%8D%81%E5%A4%A7%E7%83%AD%E6%90%9C%E8%89%BA%E4%BA%BA%23) `47.6K 🔥` `NEW`
1. [内存价格飙升90%](https://s.weibo.com/weibo?q=%23%E5%86%85%E5%AD%98%E4%BB%B7%E6%A0%BC%E9%A3%99%E5%8D%8790%25%23) `46.9K 🔥` `NEW`
1. [贾乃亮公司年会奖励万元红包](https://s.weibo.com/weibo?q=%23%E8%B4%BE%E4%B9%83%E4%BA%AE%E5%85%AC%E5%8F%B8%E5%B9%B4%E4%BC%9A%E5%A5%96%E5%8A%B1%E4%B8%87%E5%85%83%E7%BA%A2%E5%8C%85%23) `42.1K 🔥` `NEW`
1. [高市早苗修宪扩军将畅通无阻 (Takaichi Sanae's constitutional amendment and military expansion will go smoothly)](https://s.weibo.com/weibo?q=%23%E9%AB%98%E5%B8%82%E6%97%A9%E8%8B%97%E4%BF%AE%E5%AE%AA%E6%89%A9%E5%86%9B%E5%B0%86%E7%95%85%E9%80%9A%E6%97%A0%E9%98%BB%23) `36.8K 🔥` `NEW`
1. [米兰冬奥会](https://s.weibo.com/weibo?q=%23%E7%B1%B3%E5%85%B0%E5%86%AC%E5%A5%A5%E4%BC%9A%23) `35.2K 🔥` `NEW`
1. [米兰冬奥首金得主再添一金](https://s.weibo.com/weibo?q=%23%E7%B1%B3%E5%85%B0%E5%86%AC%E5%A5%A5%E9%A6%96%E9%87%91%E5%BE%97%E4%B8%BB%E5%86%8D%E6%B7%BB%E4%B8%80%E9%87%91%23) `30.8K 🔥` `NEW`
1. [谷爱凌为做到自己最好感到骄傲](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E4%B8%BA%E5%81%9A%E5%88%B0%E8%87%AA%E5%B7%B1%E6%9C%80%E5%A5%BD%E6%84%9F%E5%88%B0%E9%AA%84%E5%82%B2%23) `29.9K 🔥` `NEW`
1. [南博文物事件24人被处理](https://s.weibo.com/weibo?q=%23%E5%8D%97%E5%8D%9A%E6%96%87%E7%89%A9%E4%BA%8B%E4%BB%B624%E4%BA%BA%E8%A2%AB%E5%A4%84%E7%90%86%23) `755.2K 🔥` `+60%`
1. [车厘子价格崩了口感也崩了 (The price of cherries has plummeted, and so has their taste.)](https://s.weibo.com/weibo?q=%23%E8%BD%A6%E5%8E%98%E5%AD%90%E4%BB%B7%E6%A0%BC%E5%B4%A9%E4%BA%86%E5%8F%A3%E6%84%9F%E4%B9%9F%E5%B4%A9%E4%BA%86%23) `552.9K 🔥` `+57%`
1. [冰上版速度与激情观看指南](https://s.weibo.com/weibo?q=%23%E5%86%B0%E4%B8%8A%E7%89%88%E9%80%9F%E5%BA%A6%E4%B8%8E%E6%BF%80%E6%83%85%E8%A7%82%E7%9C%8B%E6%8C%87%E5%8D%97%23) `425.4K 🔥` `+57%`
1. [小年上京东买年货领2026元补贴](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%B9%B4%E4%B8%8A%E4%BA%AC%E4%B8%9C%E4%B9%B0%E5%B9%B4%E8%B4%A7%E9%A2%862026%E5%85%83%E8%A1%A5%E8%B4%B4%23) `287.5K 🔥` `+314%`
1. [宋祺武创男子跳台滑雪历史](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E7%A5%BA%E6%AD%A6%E5%88%9B%E7%94%B7%E5%AD%90%E8%B7%B3%E5%8F%B0%E6%BB%91%E9%9B%AA%E5%8E%86%E5%8F%B2%23) `205.2K 🔥` `+193%`
1. [开始推理吧4 (Let’s start reasoning 4)](https://s.weibo.com/weibo?q=%23%E5%BC%80%E5%A7%8B%E6%8E%A8%E7%90%86%E5%90%A74%23) `181.4K 🔥` `+95%`
1. [谷爱凌回应米兰冬奥银牌](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E5%9B%9E%E5%BA%94%E7%B1%B3%E5%85%B0%E5%86%AC%E5%A5%A5%E9%93%B6%E7%89%8C%23) `98.8K 🔥` `+129%`
1. [陈飞宇 阿瑟帅回宫了](https://s.weibo.com/weibo?q=%23%E9%99%88%E9%A3%9E%E5%AE%87%20%E9%98%BF%E7%91%9F%E5%B8%85%E5%9B%9E%E5%AE%AB%E4%BA%86%23) `87.9K 🔥` `+114%`
1. [女子孕期被疑出轨公公转650万安抚 (Woman suspected of cheating on her father-in-law during pregnancy sends 6.5 million yuan to comfort her)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%AD%95%E6%9C%9F%E8%A2%AB%E7%96%91%E5%87%BA%E8%BD%A8%E5%85%AC%E5%85%AC%E8%BD%AC650%E4%B8%87%E5%AE%89%E6%8A%9A%23) `87.5K 🔥` `+119%`
1. [爱泼斯坦被爆可能没死 (Epstein may not be dead after being exposed)](https://s.weibo.com/weibo?q=%23%E7%88%B1%E6%B3%BC%E6%96%AF%E5%9D%A6%E8%A2%AB%E7%88%86%E5%8F%AF%E8%83%BD%E6%B2%A1%E6%AD%BB%23) `86.1K 🔥` `+117%`
1. [保姆按要求分房睡老人离世成被告 (The nanny slept in separate rooms as required and the elderly man died and was accused)](https://s.weibo.com/weibo?q=%23%E4%BF%9D%E5%A7%86%E6%8C%89%E8%A6%81%E6%B1%82%E5%88%86%E6%88%BF%E7%9D%A1%E8%80%81%E4%BA%BA%E7%A6%BB%E4%B8%96%E6%88%90%E8%A2%AB%E5%91%8A%23) `85.3K 🔥` `+115%`
1. [受害者第1次见爱泼斯坦被带进红房间](https://s.weibo.com/weibo?q=%23%E5%8F%97%E5%AE%B3%E8%80%85%E7%AC%AC1%E6%AC%A1%E8%A7%81%E7%88%B1%E6%B3%BC%E6%96%AF%E5%9D%A6%E8%A2%AB%E5%B8%A6%E8%BF%9B%E7%BA%A2%E6%88%BF%E9%97%B4%23) `83.1K 🔥` `+110%`
1. [谷爱凌拿出了自己的最佳表现](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E6%8B%BF%E5%87%BA%E4%BA%86%E8%87%AA%E5%B7%B1%E7%9A%84%E6%9C%80%E4%BD%B3%E8%A1%A8%E7%8E%B0%23) `83.0K 🔥` `+271%`
1. [男子在女厕所偷拍摔倒被当场抓获 (Man secretly filmed falling down in women's restroom and caught red-handed)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%9C%A8%E5%A5%B3%E5%8E%95%E6%89%80%E5%81%B7%E6%8B%8D%E6%91%94%E5%80%92%E8%A2%AB%E5%BD%93%E5%9C%BA%E6%8A%93%E8%8E%B7%23) `82.9K 🔥` `+110%`
1. [山东招远一金矿发生坠罐事故致7死 (Seven people died in a tank falling accident at a gold mine in Zhaoyuan, Shandong)](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E4%B8%9C%E6%8B%9B%E8%BF%9C%E4%B8%80%E9%87%91%E7%9F%BF%E5%8F%91%E7%94%9F%E5%9D%A0%E7%BD%90%E4%BA%8B%E6%95%85%E8%87%B47%E6%AD%BB%23) `80.6K 🔥` `+76%`
1. [男子让6个月孩子看电视女友劝阻后被打](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E8%AE%A96%E4%B8%AA%E6%9C%88%E5%AD%A9%E5%AD%90%E7%9C%8B%E7%94%B5%E8%A7%86%E5%A5%B3%E5%8F%8B%E5%8A%9D%E9%98%BB%E5%90%8E%E8%A2%AB%E6%89%93%23) `78.0K 🔥` `+98%`
1. [南京博物院事件最新通报 (The latest report on the incident at Nanjing Museum)](https://s.weibo.com/weibo?q=%23%E5%8D%97%E4%BA%AC%E5%8D%9A%E7%89%A9%E9%99%A2%E4%BA%8B%E4%BB%B6%E6%9C%80%E6%96%B0%E9%80%9A%E6%8A%A5%23) `72.6K 🔥` `+37%`
1. [只要华为不跪产品就不贵](https://s.weibo.com/weibo?q=%23%E5%8F%AA%E8%A6%81%E5%8D%8E%E4%B8%BA%E4%B8%8D%E8%B7%AA%E4%BA%A7%E5%93%81%E5%B0%B1%E4%B8%8D%E8%B4%B5%23) `71.8K 🔥` `+92%`
1. [易烊千玺打耳洞了 (Yi Yang Qianxi had her ears pierced)](https://s.weibo.com/weibo?q=%23%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%E6%89%93%E8%80%B3%E6%B4%9E%E4%BA%86%23) `63.3K 🔥` `+81%`
1. [高德打车被约谈整改](https://s.weibo.com/weibo?q=%23%E9%AB%98%E5%BE%B7%E6%89%93%E8%BD%A6%E8%A2%AB%E7%BA%A6%E8%B0%88%E6%95%B4%E6%94%B9%23) `60.2K 🔥` `+178%`
1. [多只小鸟撞西安万象城玻璃墙死亡 (Several birds died after hitting the glass wall of Xi'an Vientiane City)](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E5%8F%AA%E5%B0%8F%E9%B8%9F%E6%92%9E%E8%A5%BF%E5%AE%89%E4%B8%87%E8%B1%A1%E5%9F%8E%E7%8E%BB%E7%92%83%E5%A2%99%E6%AD%BB%E4%BA%A1%23) `59.9K 🔥` `+100%`
1. [郑钦文逆转前澳网冠军 (Zheng Qinwen reverses the former Australian Open champion)](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87%E9%80%86%E8%BD%AC%E5%89%8D%E6%BE%B3%E7%BD%91%E5%86%A0%E5%86%9B%23) `58.3K 🔥` `+46%`
1. [这家人的住商好高 (This family's residential property is so high)](https://s.weibo.com/weibo?q=%23%E8%BF%99%E5%AE%B6%E4%BA%BA%E7%9A%84%E4%BD%8F%E5%95%86%E5%A5%BD%E9%AB%98%23) `46.9K 🔥` `+71%`
1. [金晨风波后现身澳门 (Jin Chen appeared in Macau after the incident)](https://s.weibo.com/weibo?q=%23%E9%87%91%E6%99%A8%E9%A3%8E%E6%B3%A2%E5%90%8E%E7%8E%B0%E8%BA%AB%E6%BE%B3%E9%97%A8%23) `46.8K 🔥` `+34%`
1. [小马糕 (pony cake)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E9%A9%AC%E7%B3%95%23) `46.7K 🔥` `+35%`
1. [生命树白菊爆头](https://s.weibo.com/weibo?q=%23%E7%94%9F%E5%91%BD%E6%A0%91%E7%99%BD%E8%8F%8A%E7%88%86%E5%A4%B4%23) `46.4K 🔥` `+70%`
1. [从未上过班却有6份社保记录](https://s.weibo.com/weibo?q=%23%E4%BB%8E%E6%9C%AA%E4%B8%8A%E8%BF%87%E7%8F%AD%E5%8D%B4%E6%9C%896%E4%BB%BD%E7%A4%BE%E4%BF%9D%E8%AE%B0%E5%BD%95%23) `42.1K 🔥` `+57%`
1. [谷爱凌跟妈妈边抱边哭40秒 (Gu Ailing hugged her mother and cried for 40 seconds)](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E8%B7%9F%E5%A6%88%E5%A6%88%E8%BE%B9%E6%8A%B1%E8%BE%B9%E5%93%AD40%E7%A7%92%23) `37.3K 🔥` `+72%`
1. [谷爱凌青花瓷龙战袍绝美](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E9%9D%92%E8%8A%B1%E7%93%B7%E9%BE%99%E6%88%98%E8%A2%8D%E7%BB%9D%E7%BE%8E%23) `36.7K 🔥` `+24%`
1. [白鹿新剧放过了自己没放过别人](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E6%96%B0%E5%89%A7%E6%94%BE%E8%BF%87%E4%BA%86%E8%87%AA%E5%B7%B1%E6%B2%A1%E6%94%BE%E8%BF%87%E5%88%AB%E4%BA%BA%23) `36.0K 🔥` `+67%`
1. [谷爱凌决赛 (Gu Ailing finals)](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E5%86%B3%E8%B5%9B%23) `35.9K 🔥` `+56%`
1. [丝芭学历最高的人出现了 (Siba, the person with the highest academic level appears)](https://s.weibo.com/weibo?q=%23%E4%B8%9D%E8%8A%AD%E5%AD%A6%E5%8E%86%E6%9C%80%E9%AB%98%E7%9A%84%E4%BA%BA%E5%87%BA%E7%8E%B0%E4%BA%86%23) `34.4K 🔥` `+59%`
1. [时代少年团 外务 (Times Youth League Foreign Affairs)](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%20%E5%A4%96%E5%8A%A1%23) `32.4K 🔥` `+34%`
1. [冬奥会 (winter olympics)](https://s.weibo.com/weibo?q=%23%E5%86%AC%E5%A5%A5%E4%BC%9A%23) `32.0K 🔥` `+37%`
1. [谍报上不封顶 (There is no cap on espionage)](https://s.weibo.com/weibo?q=%23%E8%B0%8D%E6%8A%A5%E4%B8%8A%E4%B8%8D%E5%B0%81%E9%A1%B6%23) `31.5K 🔥` `+38%`
1. [吴克群说做自媒体拍吃喝很无聊 (Kequn Wu said that doing self-media photos of eating and drinking is boring)](https://s.weibo.com/weibo?q=%23%E5%90%B4%E5%85%8B%E7%BE%A4%E8%AF%B4%E5%81%9A%E8%87%AA%E5%AA%92%E4%BD%93%E6%8B%8D%E5%90%83%E5%96%9D%E5%BE%88%E6%97%A0%E8%81%8A%23) `39.1K 🔥`
1. [瓦窑沟墓地M1墓主或为商代鬼方之王](https://s.weibo.com/weibo?q=%23%E7%93%A6%E7%AA%91%E6%B2%9F%E5%A2%93%E5%9C%B0M1%E5%A2%93%E4%B8%BB%E6%88%96%E4%B8%BA%E5%95%86%E4%BB%A3%E9%AC%BC%E6%96%B9%E4%B9%8B%E7%8E%8B%23) `34.2K 🔥`

Updated at 2026-02-10 07:22:54

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
