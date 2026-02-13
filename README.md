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

1. [萨多洛夫花滑男单金牌 (Sadov wins gold medal in men's figure skating)](https://s.weibo.com/weibo?q=%23%E8%90%A8%E5%A4%9A%E6%B4%9B%E5%A4%AB%E8%8A%B1%E6%BB%91%E7%94%B7%E5%8D%95%E9%87%91%E7%89%8C%23) `121.1K 🔥` `NEW`
1. [保罗正式宣布退役](https://s.weibo.com/weibo?q=%23%E4%BF%9D%E7%BD%97%E6%AD%A3%E5%BC%8F%E5%AE%A3%E5%B8%83%E9%80%80%E5%BD%B9%23) `64.8K 🔥` `NEW`
1. [金博洋米兰冬奥谢幕](https://s.weibo.com/weibo?q=%23%E9%87%91%E5%8D%9A%E6%B4%8B%E7%B1%B3%E5%85%B0%E5%86%AC%E5%A5%A5%E8%B0%A2%E5%B9%95%23) `25.2K 🔥` `NEW`
1. [快捷酒店卖出五星级酒店价格](https://s.weibo.com/weibo?q=%23%E5%BF%AB%E6%8D%B7%E9%85%92%E5%BA%97%E5%8D%96%E5%87%BA%E4%BA%94%E6%98%9F%E7%BA%A7%E9%85%92%E5%BA%97%E4%BB%B7%E6%A0%BC%23) `19.7K 🔥` `NEW`
1. [情人节 (Valentine's Day)](https://s.weibo.com/weibo?q=%23%E6%83%85%E4%BA%BA%E8%8A%82%23) `513.3K 🔥` `+87%`
1. [黄冈通报产检正常娃出生却先天畸形 (Huanggang reports that baby born with normal prenatal checkup was born with congenital malformation)](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%86%88%E9%80%9A%E6%8A%A5%E4%BA%A7%E6%A3%80%E6%AD%A3%E5%B8%B8%E5%A8%83%E5%87%BA%E7%94%9F%E5%8D%B4%E5%85%88%E5%A4%A9%E7%95%B8%E5%BD%A2%23) `384.7K 🔥` `+92%`
1. [回家路上随手拍 (Random photo taken on the way home)](https://s.weibo.com/weibo?q=%23%E5%9B%9E%E5%AE%B6%E8%B7%AF%E4%B8%8A%E9%9A%8F%E6%89%8B%E6%8B%8D%23) `305.1K 🔥` `+101%`
1. [金博洋自由滑142.53分](https://s.weibo.com/weibo?q=%23%E9%87%91%E5%8D%9A%E6%B4%8B%E8%87%AA%E7%94%B1%E6%BB%91142.53%E5%88%86%23) `137.7K 🔥` `+822%`
1. [女子幽门螺杆菌阳性3年后查出胃癌](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%B9%BD%E9%97%A8%E8%9E%BA%E6%9D%86%E8%8F%8C%E9%98%B3%E6%80%A73%E5%B9%B4%E5%90%8E%E6%9F%A5%E5%87%BA%E8%83%83%E7%99%8C%23) `94.5K 🔥` `+85%`
1. [乌运动员因头盔被取消冬奥资格 (Ukrainian athlete disqualified from Winter Olympics because of helmet)](https://s.weibo.com/weibo?q=%23%E4%B9%8C%E8%BF%90%E5%8A%A8%E5%91%98%E5%9B%A0%E5%A4%B4%E7%9B%94%E8%A2%AB%E5%8F%96%E6%B6%88%E5%86%AC%E5%A5%A5%E8%B5%84%E6%A0%BC%23) `82.6K 🔥` `+61%`
1. [豆包红包 (bean bag red envelope)](https://s.weibo.com/weibo?q=%23%E8%B1%86%E5%8C%85%E7%BA%A2%E5%8C%85%23) `51.2K 🔥` `+77%`
1. [三亚通报8499元订民宿被临时毁约](https://s.weibo.com/weibo?q=%23%E4%B8%89%E4%BA%9A%E9%80%9A%E6%8A%A58499%E5%85%83%E8%AE%A2%E6%B0%91%E5%AE%BF%E8%A2%AB%E4%B8%B4%E6%97%B6%E6%AF%81%E7%BA%A6%23) `48.3K 🔥` `+60%`
1. [新娘称婚宴4000一桌被亲友说最难吃 (The bride said her wedding banquet cost 4,000 per table and her relatives and friends said it was the worst food.)](https://s.weibo.com/weibo?q=%23%E6%96%B0%E5%A8%98%E7%A7%B0%E5%A9%9A%E5%AE%B44000%E4%B8%80%E6%A1%8C%E8%A2%AB%E4%BA%B2%E5%8F%8B%E8%AF%B4%E6%9C%80%E9%9A%BE%E5%90%83%23) `48.2K 🔥` `+76%`
1. [民警厕所打人受害人被打致小便失禁 (Victim beaten by police in restroom was left incontinent)](https://s.weibo.com/weibo?q=%23%E6%B0%91%E8%AD%A6%E5%8E%95%E6%89%80%E6%89%93%E4%BA%BA%E5%8F%97%E5%AE%B3%E4%BA%BA%E8%A2%AB%E6%89%93%E8%87%B4%E5%B0%8F%E4%BE%BF%E5%A4%B1%E7%A6%81%23) `48.1K 🔥` `+79%`
1. [瑶一瑶小肉包近30天掉粉6万](https://s.weibo.com/weibo?q=%23%E7%91%B6%E4%B8%80%E7%91%B6%E5%B0%8F%E8%82%89%E5%8C%85%E8%BF%9130%E5%A4%A9%E6%8E%89%E7%B2%896%E4%B8%87%23) `48.0K 🔥` `+83%`
1. [男子卖前女友送的银镯子竟是银包金 (A man sells a silver bracelet given by his ex-girlfriend but it’s silver-coated with gold)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%8D%96%E5%89%8D%E5%A5%B3%E5%8F%8B%E9%80%81%E7%9A%84%E9%93%B6%E9%95%AF%E5%AD%90%E7%AB%9F%E6%98%AF%E9%93%B6%E5%8C%85%E9%87%91%23) `47.8K 🔥` `+86%`
1. [瑶一瑶藏剪刀被安检发现](https://s.weibo.com/weibo?q=%23%E7%91%B6%E4%B8%80%E7%91%B6%E8%97%8F%E5%89%AA%E5%88%80%E8%A2%AB%E5%AE%89%E6%A3%80%E5%8F%91%E7%8E%B0%23) `47.7K 🔥` `+91%`
1. [主动投案的王鑫是易烊千玺等人老师 (Wang Xin, who took the initiative to surrender, was the teacher of Yi Yang Qianxi and others.)](https://s.weibo.com/weibo?q=%23%E4%B8%BB%E5%8A%A8%E6%8A%95%E6%A1%88%E7%9A%84%E7%8E%8B%E9%91%AB%E6%98%AF%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%E7%AD%89%E4%BA%BA%E8%80%81%E5%B8%88%23) `47.5K 🔥` `+91%`
1. [市民吐槽百果园一根甘蔗卖87元 (Citizens complain about Baiguoyuan selling a piece of sugar cane for 87 yuan)](https://s.weibo.com/weibo?q=%23%E5%B8%82%E6%B0%91%E5%90%90%E6%A7%BD%E7%99%BE%E6%9E%9C%E5%9B%AD%E4%B8%80%E6%A0%B9%E7%94%98%E8%94%97%E5%8D%9687%E5%85%83%23) `47.5K 🔥` `+59%`
1. [全球最大航母驶向中东 (The world's largest aircraft carrier sails to the Middle East)](https://s.weibo.com/weibo?q=%23%E5%85%A8%E7%90%83%E6%9C%80%E5%A4%A7%E8%88%AA%E6%AF%8D%E9%A9%B6%E5%90%91%E4%B8%AD%E4%B8%9C%23) `45.1K 🔥` `+109%`
1. [21岁孙子97岁奶奶都觉得对方很好带 (Both the 21-year-old grandson and the 97-year-old grandma think he is easy to take care of.)](https://s.weibo.com/weibo?q=%2321%E5%B2%81%E5%AD%99%E5%AD%9097%E5%B2%81%E5%A5%B6%E5%A5%B6%E9%83%BD%E8%A7%89%E5%BE%97%E5%AF%B9%E6%96%B9%E5%BE%88%E5%A5%BD%E5%B8%A6%23) `38.7K 🔥` `+41%`
1. [宜昌一精神病院患者自杀情况属实 (It is true that a patient in a mental hospital in Yichang committed suicide)](https://s.weibo.com/weibo?q=%23%E5%AE%9C%E6%98%8C%E4%B8%80%E7%B2%BE%E7%A5%9E%E7%97%85%E9%99%A2%E6%82%A3%E8%80%85%E8%87%AA%E6%9D%80%E6%83%85%E5%86%B5%E5%B1%9E%E5%AE%9E%23) `36.9K 🔥` `+33%`
1. [白敬亭 宋轶 (Bai Jingting Song Yi)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%95%AC%E4%BA%AD%20%E5%AE%8B%E8%BD%B6%23) `36.7K 🔥` `+77%`
1. [骨折女生乘卧铺从乌鲁木齐躺回江西](https://s.weibo.com/weibo?q=%23%E9%AA%A8%E6%8A%98%E5%A5%B3%E7%94%9F%E4%B9%98%E5%8D%A7%E9%93%BA%E4%BB%8E%E4%B9%8C%E9%B2%81%E6%9C%A8%E9%BD%90%E8%BA%BA%E5%9B%9E%E6%B1%9F%E8%A5%BF%23) `35.3K 🔥` `+72%`
1. [微博之夜 二刷 (Weibo night second brush)](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E5%8D%9A%E4%B9%8B%E5%A4%9C%20%E4%BA%8C%E5%88%B7%23) `34.3K 🔥` `+41%`
1. [谁给迪丽热巴买的手机壳 (Who bought the mobile phone case for Dilireba?)](https://s.weibo.com/weibo?q=%23%E8%B0%81%E7%BB%99%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E4%B9%B0%E7%9A%84%E6%89%8B%E6%9C%BA%E5%A3%B3%23) `31.2K 🔥` `+29%`
1. [湖北精神病医院有关问题调查结果](https://s.weibo.com/weibo?q=%23%E6%B9%96%E5%8C%97%E7%B2%BE%E7%A5%9E%E7%97%85%E5%8C%BB%E9%99%A2%E6%9C%89%E5%85%B3%E9%97%AE%E9%A2%98%E8%B0%83%E6%9F%A5%E7%BB%93%E6%9E%9C%23) `30.7K 🔥` `+59%`
1. [宋轶换微博背景 (Song Yi changes Weibo background)](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E8%BD%B6%E6%8D%A2%E5%BE%AE%E5%8D%9A%E8%83%8C%E6%99%AF%23) `29.8K 🔥` `+65%`
1. [原著粉最满意的阵容出现了 (The most satisfying lineup for fans of the original novel has appeared)](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E8%91%97%E7%B2%89%E6%9C%80%E6%BB%A1%E6%84%8F%E7%9A%84%E9%98%B5%E5%AE%B9%E5%87%BA%E7%8E%B0%E4%BA%86%23) `27.7K 🔥` `+51%`
1. [最强大脑](https://s.weibo.com/weibo?q=%23%E6%9C%80%E5%BC%BA%E5%A4%A7%E8%84%91%23) `25.3K 🔥` `+54%`
1. [萨摩耶得知自己被托孤角落偷落泪 (Samoyed shed tears when he learned that he had been left alone in a corner)](https://s.weibo.com/weibo?q=%23%E8%90%A8%E6%91%A9%E8%80%B6%E5%BE%97%E7%9F%A5%E8%87%AA%E5%B7%B1%E8%A2%AB%E6%89%98%E5%AD%A4%E8%A7%92%E8%90%BD%E5%81%B7%E8%90%BD%E6%B3%AA%23) `25.1K 🔥` `+48%`
1. [孟子义情人节三部剧物料](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89%E6%83%85%E4%BA%BA%E8%8A%82%E4%B8%89%E9%83%A8%E5%89%A7%E7%89%A9%E6%96%99%23) `25.0K 🔥` `+45%`
1. [泰山 禁石令 (Mount Tai stone ban)](https://s.weibo.com/weibo?q=%23%E6%B3%B0%E5%B1%B1%20%E7%A6%81%E7%9F%B3%E4%BB%A4%23) `24.0K 🔥` `+43%`
1. [李家诚告周秀娜诽谤及骚扰 (Li Ka-shing sues Chrissie Chau for defamation and harassment)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%AE%B6%E8%AF%9A%E5%91%8A%E5%91%A8%E7%A7%80%E5%A8%9C%E8%AF%BD%E8%B0%A4%E5%8F%8A%E9%AA%9A%E6%89%B0%23) `22.0K 🔥` `+47%`
1. [丞磊第20集6分47秒](https://s.weibo.com/weibo?q=%23%E4%B8%9E%E7%A3%8A%E7%AC%AC20%E9%9B%866%E5%88%8647%E7%A7%92%23) `21.5K 🔥` `+49%`
1. [马克龙手上的中国葡萄酒什么来头 (What is the origin of the Chinese wine in Macron’s hands?)](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%85%8B%E9%BE%99%E6%89%8B%E4%B8%8A%E7%9A%84%E4%B8%AD%E5%9B%BD%E8%91%A1%E8%90%84%E9%85%92%E4%BB%80%E4%B9%88%E6%9D%A5%E5%A4%B4%23) `21.5K 🔥` `+43%`
1. [官方回应湛江发现儒艮尸体 (Official response to dugong carcass found in Zhanjiang)](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E5%9B%9E%E5%BA%94%E6%B9%9B%E6%B1%9F%E5%8F%91%E7%8E%B0%E5%84%92%E8%89%AE%E5%B0%B8%E4%BD%93%23) `20.9K 🔥` `+42%`
1. [王俊凯周杰伦到底还有多少合照 (How many photos do Wang Junkai and Jay Chou have together?)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E5%91%A8%E6%9D%B0%E4%BC%A6%E5%88%B0%E5%BA%95%E8%BF%98%E6%9C%89%E5%A4%9A%E5%B0%91%E5%90%88%E7%85%A7%23) `20.2K 🔥` `+44%`
1. [没有彭昱畅的6点半是不完整的](https://s.weibo.com/weibo?q=%23%E6%B2%A1%E6%9C%89%E5%BD%AD%E6%98%B1%E7%95%85%E7%9A%846%E7%82%B9%E5%8D%8A%E6%98%AF%E4%B8%8D%E5%AE%8C%E6%95%B4%E7%9A%84%23) `19.7K 🔥` `+40%`
1. [懒懒自曝78斤](https://s.weibo.com/weibo?q=%23%E6%87%92%E6%87%92%E8%87%AA%E6%9B%9D78%E6%96%A4%23) `19.7K 🔥` `+41%`
1. [中国队何时能摘首金](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E9%98%9F%E4%BD%95%E6%97%B6%E8%83%BD%E6%91%98%E9%A6%96%E9%87%91%23) `19.7K 🔥` `+41%`
1. [王者荣耀福气码 (King of Glory Blessing Code)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%80%85%E8%8D%A3%E8%80%80%E7%A6%8F%E6%B0%94%E7%A0%81%23) `19.7K 🔥` `+32%`
1. [yushi六代男豆首支百万饭拍 (yushi's sixth-generation male bean's first million-dollar shot)](https://s.weibo.com/weibo?q=%23yushi%E5%85%AD%E4%BB%A3%E7%94%B7%E8%B1%86%E9%A6%96%E6%94%AF%E7%99%BE%E4%B8%87%E9%A5%AD%E6%8B%8D%23) `19.7K 🔥` `+40%`
1. [薛之谦湖泊唱片版 (Joker Xue Lake Record Edition)](https://s.weibo.com/weibo?q=%23%E8%96%9B%E4%B9%8B%E8%B0%A6%E6%B9%96%E6%B3%8A%E5%94%B1%E7%89%87%E7%89%88%23) `19.7K 🔥` `+41%`
1. [冰壶 (Curling)](https://s.weibo.com/weibo?q=%23%E5%86%B0%E5%A3%B6%23) `26.5K 🔥`
1. [商务部回应安世半导体案裁决结果](https://s.weibo.com/weibo?q=%23%E5%95%86%E5%8A%A1%E9%83%A8%E5%9B%9E%E5%BA%94%E5%AE%89%E4%B8%96%E5%8D%8A%E5%AF%BC%E4%BD%93%E6%A1%88%E8%A3%81%E5%86%B3%E7%BB%93%E6%9E%9C%23) `20.8K 🔥`
1. [王橹杰彝族血统发力了](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%E5%BD%9D%E6%97%8F%E8%A1%80%E7%BB%9F%E5%8F%91%E5%8A%9B%E4%BA%86%23) `19.9K 🔥`
1. [唐宫奇案 (Strange Cases in Tang Palace)](https://s.weibo.com/weibo?q=%23%E5%94%90%E5%AE%AB%E5%A5%87%E6%A1%88%23) `19.7K 🔥`
1. [Angelababy兔耳朵撕拉片 (Angelababy bunny ears tear-off tabs)](https://s.weibo.com/weibo?q=%23Angelababy%E5%85%94%E8%80%B3%E6%9C%B5%E6%92%95%E6%8B%89%E7%89%87%23) `19.7K 🔥`
1. [我家那小子首发阵容官宣 (My boy’s starting lineup official announcement)](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%AE%B6%E9%82%A3%E5%B0%8F%E5%AD%90%E9%A6%96%E5%8F%91%E9%98%B5%E5%AE%B9%E5%AE%98%E5%AE%A3%23) `19.7K 🔥`

Updated at 2026-02-14 06:49:29

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
