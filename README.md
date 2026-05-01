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

1. [医生辟谣吃兔肉会致胎儿唇腭裂 (Doctor refutes rumor that eating rabbit meat can cause cleft lip and palate in fetuses)](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E7%94%9F%E8%BE%9F%E8%B0%A3%E5%90%83%E5%85%94%E8%82%89%E4%BC%9A%E8%87%B4%E8%83%8E%E5%84%BF%E5%94%87%E8%85%AD%E8%A3%82%23) `225.4K 🔥` `NEW`
1. [李若彤被路人认成40岁](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E8%8B%A5%E5%BD%A4%E8%A2%AB%E8%B7%AF%E4%BA%BA%E8%AE%A4%E6%88%9040%E5%B2%81%23) `107.3K 🔥` `NEW`
1. [房主任瘦了16斤](https://s.weibo.com/weibo?q=%23%E6%88%BF%E4%B8%BB%E4%BB%BB%E7%98%A6%E4%BA%8616%E6%96%A4%23) `76.7K 🔥` `NEW`
1. [极氪月交付量创历史新高](https://s.weibo.com/weibo?q=%23%E6%9E%81%E6%B0%AA%E6%9C%88%E4%BA%A4%E4%BB%98%E9%87%8F%E5%88%9B%E5%8E%86%E5%8F%B2%E6%96%B0%E9%AB%98%23) `58.5K 🔥` `NEW`
1. [火车票开售即售罄的原因找到了](https://s.weibo.com/weibo?q=%23%E7%81%AB%E8%BD%A6%E7%A5%A8%E5%BC%80%E5%94%AE%E5%8D%B3%E5%94%AE%E7%BD%84%E7%9A%84%E5%8E%9F%E5%9B%A0%E6%89%BE%E5%88%B0%E4%BA%86%23) `817.4K 🔥` `+438%`
1. [张雪机车杆位赛第6名 (Zhang Xue finished 6th in the motorcycle pole race)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%E6%9D%86%E4%BD%8D%E8%B5%9B%E7%AC%AC6%E5%90%8D%23) `582.0K 🔥` `+1365%`
1. [数读我国创新全方位加速突破](https://s.weibo.com/weibo?q=%23%E6%95%B0%E8%AF%BB%E6%88%91%E5%9B%BD%E5%88%9B%E6%96%B0%E5%85%A8%E6%96%B9%E4%BD%8D%E5%8A%A0%E9%80%9F%E7%AA%81%E7%A0%B4%23) `453.9K 🔥` `+81%`
1. [陈思诚说1200万票房不够电影院房租](https://s.weibo.com/weibo?q=%23%E9%99%88%E6%80%9D%E8%AF%9A%E8%AF%B41200%E4%B8%87%E7%A5%A8%E6%88%BF%E4%B8%8D%E5%A4%9F%E7%94%B5%E5%BD%B1%E9%99%A2%E6%88%BF%E7%A7%9F%23) `371.5K 🔥` `+67%`
1. [人到了一定年纪就会解锁的动作 (Actions that people will unlock when they reach a certain age)](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E5%88%B0%E4%BA%86%E4%B8%80%E5%AE%9A%E5%B9%B4%E7%BA%AA%E5%B0%B1%E4%BC%9A%E8%A7%A3%E9%94%81%E7%9A%84%E5%8A%A8%E4%BD%9C%23) `220.7K 🔥` `+105%`
1. [美军福特号航母离开中东](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%86%9B%E7%A6%8F%E7%89%B9%E5%8F%B7%E8%88%AA%E6%AF%8D%E7%A6%BB%E5%BC%80%E4%B8%AD%E4%B8%9C%23) `180.6K 🔥` `+73%`
1. [21世纪大君夫人 (The 21st Century Maharaja’s Wife)](https://s.weibo.com/weibo?q=%2321%E4%B8%96%E7%BA%AA%E5%A4%A7%E5%90%9B%E5%A4%AB%E4%BA%BA%23) `127.9K 🔥` `+61%`
1. [京东把项羽复刻铠甲送回宿迁](https://s.weibo.com/weibo?q=%23%E4%BA%AC%E4%B8%9C%E6%8A%8A%E9%A1%B9%E7%BE%BD%E5%A4%8D%E5%88%BB%E9%93%A0%E7%94%B2%E9%80%81%E5%9B%9E%E5%AE%BF%E8%BF%81%23) `126.7K 🔥` `+219%`
1. [女子照顾瘫痪丈夫19年想有个孩子 (Woman takes care of her paralyzed husband for 19 years and wants to have a child)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E7%85%A7%E9%A1%BE%E7%98%AB%E7%97%AA%E4%B8%88%E5%A4%AB19%E5%B9%B4%E6%83%B3%E6%9C%89%E4%B8%AA%E5%AD%A9%E5%AD%90%23) `122.6K 🔥` `+62%`
1. [难听 (ugly)](https://s.weibo.com/weibo?q=%23%E9%9A%BE%E5%90%AC%23) `119.5K 🔥` `+58%`
1. [主人经期贫血晕厥2只狗子立大功 (The owner suffered from menstrual anemia and fainted, and the two dogs made great achievements)](https://s.weibo.com/weibo?q=%23%E4%B8%BB%E4%BA%BA%E7%BB%8F%E6%9C%9F%E8%B4%AB%E8%A1%80%E6%99%95%E5%8E%A52%E5%8F%AA%E7%8B%97%E5%AD%90%E7%AB%8B%E5%A4%A7%E5%8A%9F%23) `113.8K 🔥` `+51%`
1. [刘耀文你随便吧 (Liu Yaowen, do whatever you want)](https://s.weibo.com/weibo?q=%23%E5%88%98%E8%80%80%E6%96%87%E4%BD%A0%E9%9A%8F%E4%BE%BF%E5%90%A7%23) `93.7K 🔥` `+66%`
1. [李建宏讣告 (Li Jianhong's obituary)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%BB%BA%E5%AE%8F%E8%AE%A3%E5%91%8A%23) `91.2K 🔥` `+21%`
1. [5岁男童被自家哈士奇咬伤面部颈部](https://s.weibo.com/weibo?q=%235%E5%B2%81%E7%94%B7%E7%AB%A5%E8%A2%AB%E8%87%AA%E5%AE%B6%E5%93%88%E5%A3%AB%E5%A5%87%E5%92%AC%E4%BC%A4%E9%9D%A2%E9%83%A8%E9%A2%88%E9%83%A8%23) `91.2K 🔥` `+129%`
1. [白鹿摘了姚译添眼镜给自己戴 (Bailu took off Yao Yitian's glasses and put them on himself)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E6%91%98%E4%BA%86%E5%A7%9A%E8%AF%91%E6%B7%BB%E7%9C%BC%E9%95%9C%E7%BB%99%E8%87%AA%E5%B7%B1%E6%88%B4%23) `88.8K 🔥` `+86%`
1. [莫氏鸡煲分店开业客流不及预期 (Mo’s Chicken Pot branch’s opening customer flow is lower than expected)](https://s.weibo.com/weibo?q=%23%E8%8E%AB%E6%B0%8F%E9%B8%A1%E7%85%B2%E5%88%86%E5%BA%97%E5%BC%80%E4%B8%9A%E5%AE%A2%E6%B5%81%E4%B8%8D%E5%8F%8A%E9%A2%84%E6%9C%9F%23) `87.9K 🔥` `+121%`
1. [深圳地铁平均每天亏超1个亿 (Shenzhen Metro loses more than 100 million a day on average)](https://s.weibo.com/weibo?q=%23%E6%B7%B1%E5%9C%B3%E5%9C%B0%E9%93%81%E5%B9%B3%E5%9D%87%E6%AF%8F%E5%A4%A9%E4%BA%8F%E8%B6%851%E4%B8%AA%E4%BA%BF%23) `86.0K 🔥` `+82%`
1. [什么细节让你觉得一个人可靠](https://s.weibo.com/weibo?q=%23%E4%BB%80%E4%B9%88%E7%BB%86%E8%8A%82%E8%AE%A9%E4%BD%A0%E8%A7%89%E5%BE%97%E4%B8%80%E4%B8%AA%E4%BA%BA%E5%8F%AF%E9%9D%A0%23) `72.1K 🔥` `+45%`
1. [这个店没了咪不行 (I can't do this without this store.)](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%B8%AA%E5%BA%97%E6%B2%A1%E4%BA%86%E5%92%AA%E4%B8%8D%E8%A1%8C%23) `71.6K 🔥` `+76%`
1. [小猫被小龙虾一击必杀 (The kitten will be killed by the crayfish in one hit)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%8C%AB%E8%A2%AB%E5%B0%8F%E9%BE%99%E8%99%BE%E4%B8%80%E5%87%BB%E5%BF%85%E6%9D%80%23) `67.9K 🔥` `+71%`
1. [刘国梁拍肩鼓励王楚钦](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%9B%BD%E6%A2%81%E6%8B%8D%E8%82%A9%E9%BC%93%E5%8A%B1%E7%8E%8B%E6%A5%9A%E9%92%A6%23) `66.6K 🔥` `+67%`
1. [上海申花vs成都蓉城](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E7%94%B3%E8%8A%B1vs%E6%88%90%E9%83%BD%E8%93%89%E5%9F%8E%23) `66.0K 🔥` `+177%`
1. [女子被AI误导闯入毒蛇窝](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E8%A2%ABAI%E8%AF%AF%E5%AF%BC%E9%97%AF%E5%85%A5%E6%AF%92%E8%9B%87%E7%AA%9D%23) `65.9K 🔥` `+66%`
1. [司机到河南送货被塞30斤蒜薹 (A driver was stuffed with 30 kilograms of garlic sprouts while delivering goods in Henan)](https://s.weibo.com/weibo?q=%23%E5%8F%B8%E6%9C%BA%E5%88%B0%E6%B2%B3%E5%8D%97%E9%80%81%E8%B4%A7%E8%A2%AB%E5%A1%9E30%E6%96%A4%E8%92%9C%E8%96%B9%23) `59.6K 🔥` `+50%`
1. [任嘉伦唱跳太热血了 (Ren Jialun's singing and dancing are so passionate)](https://s.weibo.com/weibo?q=%23%E4%BB%BB%E5%98%89%E4%BC%A6%E5%94%B1%E8%B7%B3%E5%A4%AA%E7%83%AD%E8%A1%80%E4%BA%86%23) `58.7K 🔥` `+47%`
1. [榴莲大降价有果商1天卖了9千斤](https://s.weibo.com/weibo?q=%23%E6%A6%B4%E8%8E%B2%E5%A4%A7%E9%99%8D%E4%BB%B7%E6%9C%89%E6%9E%9C%E5%95%861%E5%A4%A9%E5%8D%96%E4%BA%869%E5%8D%83%E6%96%A4%23) `58.6K 🔥` `+48%`
1. [伊朗递交最新谈判方案](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E9%80%92%E4%BA%A4%E6%9C%80%E6%96%B0%E8%B0%88%E5%88%A4%E6%96%B9%E6%A1%88%23) `58.6K 🔥` `+47%`
1. [胖东来没有淡季只有旺季旺旺季 (There is no off-season in Fat Donglai, only peak season.)](https://s.weibo.com/weibo?q=%23%E8%83%96%E4%B8%9C%E6%9D%A5%E6%B2%A1%E6%9C%89%E6%B7%A1%E5%AD%A3%E5%8F%AA%E6%9C%89%E6%97%BA%E5%AD%A3%E6%97%BA%E6%97%BA%E5%AD%A3%23) `58.6K 🔥` `+48%`
1. [姜武出演张雪 (Jiang Wu stars as Zhang Xue)](https://s.weibo.com/weibo?q=%23%E5%A7%9C%E6%AD%A6%E5%87%BA%E6%BC%94%E5%BC%A0%E9%9B%AA%23) `58.6K 🔥` `+47%`
1. [时团没唱爆米花 (The band didn't sing popcorn)](https://s.weibo.com/weibo?q=%23%E6%97%B6%E5%9B%A2%E6%B2%A1%E5%94%B1%E7%88%86%E7%B1%B3%E8%8A%B1%23) `58.6K 🔥` `+47%`
1. [王楚钦吐槽伦敦物价高](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E5%90%90%E6%A7%BD%E4%BC%A6%E6%95%A6%E7%89%A9%E4%BB%B7%E9%AB%98%23) `58.6K 🔥` `+48%`
1. [曾沛慈一把牵走张慧雯 (Zeng Peici took away Zhang Huiwen)](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E6%B2%9B%E6%85%88%E4%B8%80%E6%8A%8A%E7%89%B5%E8%B5%B0%E5%BC%A0%E6%85%A7%E9%9B%AF%23) `58.6K 🔥` `+45%`
1. [张真源唱在加纳共和国离婚 (Jang Jin Won sings about divorce in the Republic of Ghana)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%9C%9F%E6%BA%90%E5%94%B1%E5%9C%A8%E5%8A%A0%E7%BA%B3%E5%85%B1%E5%92%8C%E5%9B%BD%E7%A6%BB%E5%A9%9A%23) `58.6K 🔥` `+47%`
1. [KPL](https://s.weibo.com/weibo?q=%23KPL%23) `58.6K 🔥` `+47%`
1. [阚清子为穿仙女裙有多拼](https://s.weibo.com/weibo?q=%23%E9%98%9A%E6%B8%85%E5%AD%90%E4%B8%BA%E7%A9%BF%E4%BB%99%E5%A5%B3%E8%A3%99%E6%9C%89%E5%A4%9A%E6%8B%BC%23) `58.5K 🔥` `+27%`
1. [又发现了新的表白方式](https://s.weibo.com/weibo?q=%23%E5%8F%88%E5%8F%91%E7%8E%B0%E4%BA%86%E6%96%B0%E7%9A%84%E8%A1%A8%E7%99%BD%E6%96%B9%E5%BC%8F%23) `58.5K 🔥` `+47%`
1. [警方回应莫氏鸡煲已报警 (Police responded that Mo’s Chicken Pot has called the police)](https://s.weibo.com/weibo?q=%23%E8%AD%A6%E6%96%B9%E5%9B%9E%E5%BA%94%E8%8E%AB%E6%B0%8F%E9%B8%A1%E7%85%B2%E5%B7%B2%E6%8A%A5%E8%AD%A6%23) `58.5K 🔥` `+47%`
1. [台湾地震](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E6%B9%BE%E5%9C%B0%E9%9C%87%23) `58.5K 🔥` `+47%`
1. [美伊停火谈判 (US-Iran ceasefire negotiations)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E4%BC%8A%E5%81%9C%E7%81%AB%E8%B0%88%E5%88%A4%23) `58.5K 🔥` `+47%`
1. [这不叫堵车 这叫铺红地毯](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%B8%8D%E5%8F%AB%E5%A0%B5%E8%BD%A6%20%E8%BF%99%E5%8F%AB%E9%93%BA%E7%BA%A2%E5%9C%B0%E6%AF%AF%23) `256.9K 🔥`
1. [发明创可贴当鼠标垫的是天才 (The person who invented Band-Aid as a mouse pad is a genius)](https://s.weibo.com/weibo?q=%23%E5%8F%91%E6%98%8E%E5%88%9B%E5%8F%AF%E8%B4%B4%E5%BD%93%E9%BC%A0%E6%A0%87%E5%9E%AB%E7%9A%84%E6%98%AF%E5%A4%A9%E6%89%8D%23) `96.5K 🔥`
1. [保姆抱娃踩床边台阶摔倒在地](https://s.weibo.com/weibo?q=%23%E4%BF%9D%E5%A7%86%E6%8A%B1%E5%A8%83%E8%B8%A9%E5%BA%8A%E8%BE%B9%E5%8F%B0%E9%98%B6%E6%91%94%E5%80%92%E5%9C%A8%E5%9C%B0%23) `83.1K 🔥`
1. [王菊卖700万房子给男友创业这段 (Wang Ju sells a house worth 7 million to her boyfriend to start a business)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%8F%8A%E5%8D%96700%E4%B8%87%E6%88%BF%E5%AD%90%E7%BB%99%E7%94%B7%E5%8F%8B%E5%88%9B%E4%B8%9A%E8%BF%99%E6%AE%B5%23) `76.9K 🔥`
1. [甲亢哥在深圳买的手机掉海里了 (The mobile phone bought by the hyperthyroid brother in Shenzhen fell into the sea)](https://s.weibo.com/weibo?q=%23%E7%94%B2%E4%BA%A2%E5%93%A5%E5%9C%A8%E6%B7%B1%E5%9C%B3%E4%B9%B0%E7%9A%84%E6%89%8B%E6%9C%BA%E6%8E%89%E6%B5%B7%E9%87%8C%E4%BA%86%23) `63.4K 🔥`
1. [真的有人能成功请到这三天假吗](https://s.weibo.com/weibo?q=%23%E7%9C%9F%E7%9A%84%E6%9C%89%E4%BA%BA%E8%83%BD%E6%88%90%E5%8A%9F%E8%AF%B7%E5%88%B0%E8%BF%99%E4%B8%89%E5%A4%A9%E5%81%87%E5%90%97%23) `326.7K 🔥` `-24%`
1. [迪丽热巴在还63张自拍的债了](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E5%9C%A8%E8%BF%9863%E5%BC%A0%E8%87%AA%E6%8B%8D%E7%9A%84%E5%80%BA%E4%BA%86%23) `110.3K 🔥` `-60%`
1. [心理医生的含金量还在上升](https://s.weibo.com/weibo?q=%23%E5%BF%83%E7%90%86%E5%8C%BB%E7%94%9F%E7%9A%84%E5%90%AB%E9%87%91%E9%87%8F%E8%BF%98%E5%9C%A8%E4%B8%8A%E5%8D%87%23) `58.5K 🔥` `-22%`

Updated at 2026-05-02 07:30:37

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
