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
- **Time-of-day weighting**: Heat values adjusted by collection hour for accuracy

## Today's Hot Searches

<!-- BEGIN -->

1. [成何体统前8集最燃的镜头出现了 (The most irritating scenes from the first 8 episodes of "What a Body" have appeared)](https://s.weibo.com/weibo?q=%23%E6%88%90%E4%BD%95%E4%BD%93%E7%BB%9F%E5%89%8D8%E9%9B%86%E6%9C%80%E7%87%83%E7%9A%84%E9%95%9C%E5%A4%B4%E5%87%BA%E7%8E%B0%E4%BA%86%23) `268.4K 🔥` `NEW`
1. [东部战区一线战斗场景](https://s.weibo.com/weibo?q=%23%E4%B8%9C%E9%83%A8%E6%88%98%E5%8C%BA%E4%B8%80%E7%BA%BF%E6%88%98%E6%96%97%E5%9C%BA%E6%99%AF%23) `268.1K 🔥` `NEW`
1. [田曦薇闫桉雪中吻戏](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E9%97%AB%E6%A1%89%E9%9B%AA%E4%B8%AD%E5%90%BB%E6%88%8F%23) `263.2K 🔥` `NEW`
1. [男子因1条评论杀害2人](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%9B%A01%E6%9D%A1%E8%AF%84%E8%AE%BA%E6%9D%80%E5%AE%B32%E4%BA%BA%23) `261.6K 🔥` `NEW`
1. [立威廉得知恶耗时才49岁](https://s.weibo.com/weibo?q=%23%E7%AB%8B%E5%A8%81%E5%BB%89%E5%BE%97%E7%9F%A5%E6%81%B6%E8%80%97%E6%97%B6%E6%89%8D49%E5%B2%81%23) `258.4K 🔥` `NEW`
1. [孕妇独自驾车就医致一男子死亡](https://s.weibo.com/weibo?q=%23%E5%AD%95%E5%A6%87%E7%8B%AC%E8%87%AA%E9%A9%BE%E8%BD%A6%E5%B0%B1%E5%8C%BB%E8%87%B4%E4%B8%80%E7%94%B7%E5%AD%90%E6%AD%BB%E4%BA%A1%23) `255.5K 🔥` `NEW`
1. [程潇真的拥有芭比的容貌和人生](https://s.weibo.com/weibo?q=%23%E7%A8%8B%E6%BD%87%E7%9C%9F%E7%9A%84%E6%8B%A5%E6%9C%89%E8%8A%AD%E6%AF%94%E7%9A%84%E5%AE%B9%E8%B2%8C%E5%92%8C%E4%BA%BA%E7%94%9F%23) `241.3K 🔥` `NEW`
1. [演员立威廉已重新安排遗嘱](https://s.weibo.com/weibo?q=%23%E6%BC%94%E5%91%98%E7%AB%8B%E5%A8%81%E5%BB%89%E5%B7%B2%E9%87%8D%E6%96%B0%E5%AE%89%E6%8E%92%E9%81%97%E5%98%B1%23) `228.6K 🔥` `NEW`
1. [马伯骞回关虞书欣](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E4%BC%AF%E9%AA%9E%E5%9B%9E%E5%85%B3%E8%99%9E%E4%B9%A6%E6%AC%A3%23) `228.4K 🔥` `NEW`
1. [英国48家集团主席呼吁到中国去](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E5%9B%BD48%E5%AE%B6%E9%9B%86%E5%9B%A2%E4%B8%BB%E5%B8%AD%E5%91%BC%E5%90%81%E5%88%B0%E4%B8%AD%E5%9B%BD%E5%8E%BB%23) `209.2K 🔥` `NEW`
1. [林俊杰谢谢张艺兴一起合唱翅膀 (JJ Lin thanks Zhang Yixing for singing Wings together)](https://s.weibo.com/weibo?q=%23%E6%9E%97%E4%BF%8A%E6%9D%B0%E8%B0%A2%E8%B0%A2%E5%BC%A0%E8%89%BA%E5%85%B4%E4%B8%80%E8%B5%B7%E5%90%88%E5%94%B1%E7%BF%85%E8%86%80%23) `203.8K 🔥` `NEW`
1. [碧血蝉直播](https://s.weibo.com/weibo?q=%23%E7%A2%A7%E8%A1%80%E8%9D%89%E7%9B%B4%E6%92%AD%23) `192.7K 🔥` `NEW`
1. [妈妈对谷爱凌说了什么](https://s.weibo.com/weibo?q=%23%E5%A6%88%E5%A6%88%E5%AF%B9%E8%B0%B7%E7%88%B1%E5%87%8C%E8%AF%B4%E4%BA%86%E4%BB%80%E4%B9%88%23) `170.0K 🔥` `NEW`
1. [金晨被罚或因未充分履行法定义务](https://s.weibo.com/weibo?q=%23%E9%87%91%E6%99%A8%E8%A2%AB%E7%BD%9A%E6%88%96%E5%9B%A0%E6%9C%AA%E5%85%85%E5%88%86%E5%B1%A5%E8%A1%8C%E6%B3%95%E5%AE%9A%E4%B9%89%E5%8A%A1%23) `168.3K 🔥` `NEW`
1. [教育局回应成绩单用星星显示](https://s.weibo.com/weibo?q=%23%E6%95%99%E8%82%B2%E5%B1%80%E5%9B%9E%E5%BA%94%E6%88%90%E7%BB%A9%E5%8D%95%E7%94%A8%E6%98%9F%E6%98%9F%E6%98%BE%E7%A4%BA%23) `164.7K 🔥` `NEW`
1. [王曼昱vs申裕斌](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%9B%BC%E6%98%B1vs%E7%94%B3%E8%A3%95%E6%96%8C%23) `160.0K 🔥` `NEW`
1. [87岁的核武院士让中国垃圾不够烧](https://s.weibo.com/weibo?q=%2387%E5%B2%81%E7%9A%84%E6%A0%B8%E6%AD%A6%E9%99%A2%E5%A3%AB%E8%AE%A9%E4%B8%AD%E5%9B%BD%E5%9E%83%E5%9C%BE%E4%B8%8D%E5%A4%9F%E7%83%A7%23) `152.9K 🔥` `NEW`
1. [工作留痕真的能保命](https://s.weibo.com/weibo?q=%23%E5%B7%A5%E4%BD%9C%E7%95%99%E7%97%95%E7%9C%9F%E7%9A%84%E8%83%BD%E4%BF%9D%E5%91%BD%23) `140.6K 🔥` `NEW`
1. [权志龙把所有热门舞cha了一遍](https://s.weibo.com/weibo?q=%23%E6%9D%83%E5%BF%97%E9%BE%99%E6%8A%8A%E6%89%80%E6%9C%89%E7%83%AD%E9%97%A8%E8%88%9Echa%E4%BA%86%E4%B8%80%E9%81%8D%23) `132.1K 🔥` `NEW`
1. [耙耙柑粑粑柑傻傻分不清楚](https://s.weibo.com/weibo?q=%23%E8%80%99%E8%80%99%E6%9F%91%E7%B2%91%E7%B2%91%E6%9F%91%E5%82%BB%E5%82%BB%E5%88%86%E4%B8%8D%E6%B8%85%E6%A5%9A%23) `129.8K 🔥` `NEW`
1. [王曼昱11比1申裕斌 (Wang Manyu 11 to 1 Shen Yubin)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%9B%BC%E6%98%B111%E6%AF%941%E7%94%B3%E8%A3%95%E6%96%8C%23) `126.3K 🔥` `NEW`
1. [黄明昊演唱会](https://s.weibo.com/weibo?q=%23%E9%BB%84%E6%98%8E%E6%98%8A%E6%BC%94%E5%94%B1%E4%BC%9A%23) `121.1K 🔥` `NEW`
1. [王昶钱天一共同成立新公司](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%98%B6%E9%92%B1%E5%A4%A9%E4%B8%80%E5%85%B1%E5%90%8C%E6%88%90%E7%AB%8B%E6%96%B0%E5%85%AC%E5%8F%B8%23) `118.8K 🔥` `NEW`
1. [向佐说自己原生家庭有问题](https://s.weibo.com/weibo?q=%23%E5%90%91%E4%BD%90%E8%AF%B4%E8%87%AA%E5%B7%B1%E5%8E%9F%E7%94%9F%E5%AE%B6%E5%BA%AD%E6%9C%89%E9%97%AE%E9%A2%98%23) `117.5K 🔥` `NEW`
1. [医院招实习生要求未就业有执业资格](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E9%99%A2%E6%8B%9B%E5%AE%9E%E4%B9%A0%E7%94%9F%E8%A6%81%E6%B1%82%E6%9C%AA%E5%B0%B1%E4%B8%9A%E6%9C%89%E6%89%A7%E4%B8%9A%E8%B5%84%E6%A0%BC%23) `116.0K 🔥` `NEW`
1. [2026中国网络视听盛典红毯](https://s.weibo.com/weibo?q=%232026%E4%B8%AD%E5%9B%BD%E7%BD%91%E7%BB%9C%E8%A7%86%E5%90%AC%E7%9B%9B%E5%85%B8%E7%BA%A2%E6%AF%AF%23) `115.3K 🔥` `NEW`
1. [女子临终将婆婆300万养老钱送姐姐](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E4%B8%B4%E7%BB%88%E5%B0%86%E5%A9%86%E5%A9%86300%E4%B8%87%E5%85%BB%E8%80%81%E9%92%B1%E9%80%81%E5%A7%90%E5%A7%90%23) `114.3K 🔥` `NEW`
1. [王楚钦倒地爆冲结束比赛](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E5%80%92%E5%9C%B0%E7%88%86%E5%86%B2%E7%BB%93%E6%9D%9F%E6%AF%94%E8%B5%9B%23) `109.8K 🔥` `NEW`
1. [徐明浩3条iG创造了360万美元价值](https://s.weibo.com/weibo?q=%23%E5%BE%90%E6%98%8E%E6%B5%A93%E6%9D%A1iG%E5%88%9B%E9%80%A0%E4%BA%86360%E4%B8%87%E7%BE%8E%E5%85%83%E4%BB%B7%E5%80%BC%23) `107.8K 🔥` `NEW`
1. [ILLIT和LESSERAFIM成员一起聚餐](https://s.weibo.com/weibo?q=%23ILLIT%E5%92%8CLESSERAFIM%E6%88%90%E5%91%98%E4%B8%80%E8%B5%B7%E8%81%9A%E9%A4%90%23) `103.1K 🔥` `NEW`
1. [苏翊鸣出战大跳台决赛 (Su Yiming competes in the big platform finals)](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E7%BF%8A%E9%B8%A3%E5%87%BA%E6%88%98%E5%A4%A7%E8%B7%B3%E5%8F%B0%E5%86%B3%E8%B5%9B%23) `103.0K 🔥` `NEW`
1. [谷爱凌滑雪不基础上镜更不基础](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E6%BB%91%E9%9B%AA%E4%B8%8D%E5%9F%BA%E7%A1%80%E4%B8%8A%E9%95%9C%E6%9B%B4%E4%B8%8D%E5%9F%BA%E7%A1%80%23) `101.9K 🔥` `NEW`
1. [六个合法查询网站帮你看清一个人 (Six legal search websites to help you identify a person clearly)](https://s.weibo.com/weibo?q=%23%E5%85%AD%E4%B8%AA%E5%90%88%E6%B3%95%E6%9F%A5%E8%AF%A2%E7%BD%91%E7%AB%99%E5%B8%AE%E4%BD%A0%E7%9C%8B%E6%B8%85%E4%B8%80%E4%B8%AA%E4%BA%BA%23) `1.3M 🔥` `+40%`
1. [中国网络视听盛典 (China Internet Audiovisual Festival)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%BD%91%E7%BB%9C%E8%A7%86%E5%90%AC%E7%9B%9B%E5%85%B8%23) `855.4K 🔥`
1. [买冰雪运动同款就上淘宝 (Buy winter sports gear on Taobao)](https://s.weibo.com/weibo?q=%23%E4%B9%B0%E5%86%B0%E9%9B%AA%E8%BF%90%E5%8A%A8%E5%90%8C%E6%AC%BE%E5%B0%B1%E4%B8%8A%E6%B7%98%E5%AE%9D%23) `679.1K 🔥`
1. [米兰冬奥首金诞生](https://s.weibo.com/weibo?q=%23%E7%B1%B3%E5%85%B0%E5%86%AC%E5%A5%A5%E9%A6%96%E9%87%91%E8%AF%9E%E7%94%9F%23) `597.9K 🔥`
1. [我们的少年时代2开机花篮](https://s.weibo.com/weibo?q=%23%E6%88%91%E4%BB%AC%E7%9A%84%E5%B0%91%E5%B9%B4%E6%97%B6%E4%BB%A32%E5%BC%80%E6%9C%BA%E8%8A%B1%E7%AF%AE%23) `422.4K 🔥`
1. [女子黄金手镯断裂竟掉出2颗钢珠](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E9%BB%84%E9%87%91%E6%89%8B%E9%95%AF%E6%96%AD%E8%A3%82%E7%AB%9F%E6%8E%89%E5%87%BA2%E9%A2%97%E9%92%A2%E7%8F%A0%23) `390.5K 🔥`
1. [千问 (Qianwen)](https://s.weibo.com/weibo?q=%23%E5%8D%83%E9%97%AE%23) `2.9M 🔥` `-91%`
1. [谷爱凌第一滑摔倒 (Gu Ailing fell down in her first slip)](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E7%AC%AC%E4%B8%80%E6%BB%91%E6%91%94%E5%80%92%23) `2.8M 🔥` `-92%`
1. [金晨肇事逃逸被罚1500元 (Jin Chen was fined 1,500 yuan for hit-and-run accident)](https://s.weibo.com/weibo?q=%23%E9%87%91%E6%99%A8%E8%82%87%E4%BA%8B%E9%80%83%E9%80%B8%E8%A2%AB%E7%BD%9A1500%E5%85%83%23) `2.0M 🔥` `-87%`
1. [谷爱凌锁定决赛 (Gu Ailing locked in the finals)](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E9%94%81%E5%AE%9A%E5%86%B3%E8%B5%9B%23) `1.3M 🔥` `-82%`
1. [山姆你还续卡吗 (Are you still renewing your Sam's Club membership?)](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E5%A7%86%E4%BD%A0%E8%BF%98%E7%BB%AD%E5%8D%A1%E5%90%97%23) `1.3M 🔥` `-25%`
1. [谷爱凌完成第二滑 (Gu Ailing completed the second slide)](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E5%AE%8C%E6%88%90%E7%AC%AC%E4%BA%8C%E6%BB%91%23) `1.0M 🔥` `-89%`
1. [中国银行坚决拥护党中央决定 (Bank of China firmly supports the decision of the Party Central Committee)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E9%93%B6%E8%A1%8C%E5%9D%9A%E5%86%B3%E6%8B%A5%E6%8A%A4%E5%85%9A%E4%B8%AD%E5%A4%AE%E5%86%B3%E5%AE%9A%23) `949.1K 🔥` `-89%`
1. [王楚然只贴三片黄瓜美成这样 (Wang Churan only posted three slices of cucumber and looked like this)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E7%84%B6%E5%8F%AA%E8%B4%B4%E4%B8%89%E7%89%87%E9%BB%84%E7%93%9C%E7%BE%8E%E6%88%90%E8%BF%99%E6%A0%B7%23) `515.0K 🔥` `-80%`
1. [跟着撒贝宁解锁国台酒智造魔法 (Follow Sa Beining to unlock the magic of Guotai Liquor Manufacturing)](https://s.weibo.com/weibo?q=%23%E8%B7%9F%E7%9D%80%E6%92%92%E8%B4%9D%E5%AE%81%E8%A7%A3%E9%94%81%E5%9B%BD%E5%8F%B0%E9%85%92%E6%99%BA%E9%80%A0%E9%AD%94%E6%B3%95%23) `480.3K 🔥` `-24%`
1. [很火但难吃的水果 (Very popular but unpalatable fruit)](https://s.weibo.com/weibo?q=%23%E5%BE%88%E7%81%AB%E4%BD%86%E9%9A%BE%E5%90%83%E7%9A%84%E6%B0%B4%E6%9E%9C%23) `440.4K 🔥` `-32%`
1. [谷爱凌第二轮75.30分 (Gu Ailing scored 75.30 points in the second round)](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E7%AC%AC%E4%BA%8C%E8%BD%AE75.30%E5%88%86%23) `435.1K 🔥` `-42%`
1. [湖南卫视春晚全阵容官宣 (Hunan TV Spring Festival Gala full lineup announced)](https://s.weibo.com/weibo?q=%23%E6%B9%96%E5%8D%97%E5%8D%AB%E8%A7%86%E6%98%A5%E6%99%9A%E5%85%A8%E9%98%B5%E5%AE%B9%E5%AE%98%E5%AE%A3%23) `356.7K 🔥` `-60%`
1. [山姆品控危机引发退卡风波 (Sam's Club quality control crisis sparks membership cancellation wave)](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E5%A7%86%E5%93%81%E6%8E%A7%E5%8D%B1%E6%9C%BA%E5%BC%95%E5%8F%91%E9%80%80%E5%8D%A1%E9%A3%8E%E6%B3%A2%23) `321.1K 🔥` `-28%`

Updated at 2026-02-07 21:08:18

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
| `count` | Heat value (adjusted by time-of-day weight) |
| `firstSeen` | ISO timestamp when topic first appeared today |
| `peakCount` | Highest count recorded for this topic today |
| `prevCount` | Count from previous scrape cycle |
| `status` | Lifecycle stage: `new`, `rising`, `hot`, `falling`, `gone` |
| `velocity` | Percentage change from previous scrape |
| `engagement` | Post engagement metrics (top 10 topics): posts, likes, comments, reposts |

### Time-of-Day Weights

Heat values are weighted by time of day during collection to better reflect true popularity:

| Period | Hours (CST) | Weight |
|--------|-------------|--------|
| Night | 02:00-05:00 | 0.5x |
| Morning | 06:00-10:00 | 0.8x |
| Peak | 11:00-13:00, 17:00-23:00, 00:00 | 1.2x |
| Default | 01:00, 14:00-16:00 | 1.0x |

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
