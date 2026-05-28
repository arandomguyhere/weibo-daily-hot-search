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

1. [阿根廷队世界杯26人名单 (Argentina's 26-man World Cup squad)](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E9%98%9F%E4%B8%96%E7%95%8C%E6%9D%AF26%E4%BA%BA%E5%90%8D%E5%8D%95%23) `839.9K 🔥` `NEW`
1. [华为超新星手表X1系列今日开售](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BA%E8%B6%85%E6%96%B0%E6%98%9F%E6%89%8B%E8%A1%A8X1%E7%B3%BB%E5%88%97%E4%BB%8A%E6%97%A5%E5%BC%80%E5%94%AE%23) `655.5K 🔥` `NEW`
1. [全员加速中2026停播的一封信](https://s.weibo.com/weibo?q=%23%E5%85%A8%E5%91%98%E5%8A%A0%E9%80%9F%E4%B8%AD2026%E5%81%9C%E6%92%AD%E7%9A%84%E4%B8%80%E5%B0%81%E4%BF%A1%23) `255.1K 🔥` `NEW`
1. [歌手2026第二期彩排repo](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B2026%E7%AC%AC%E4%BA%8C%E6%9C%9F%E5%BD%A9%E6%8E%92repo%23) `254.5K 🔥` `NEW`
1. [货车小区内超速奶奶保护孙子身亡](https://s.weibo.com/weibo?q=%23%E8%B4%A7%E8%BD%A6%E5%B0%8F%E5%8C%BA%E5%86%85%E8%B6%85%E9%80%9F%E5%A5%B6%E5%A5%B6%E4%BF%9D%E6%8A%A4%E5%AD%99%E5%AD%90%E8%BA%AB%E4%BA%A1%23) `247.2K 🔥` `NEW`
1. [网传浪姐三公个喜前十](https://s.weibo.com/weibo?q=%23%E7%BD%91%E4%BC%A0%E6%B5%AA%E5%A7%90%E4%B8%89%E5%85%AC%E4%B8%AA%E5%96%9C%E5%89%8D%E5%8D%81%23) `241.2K 🔥` `NEW`
1. [黄仁勋称我比较有钱不用请我](https://s.weibo.com/weibo?q=%23%E9%BB%84%E4%BB%81%E5%8B%8B%E7%A7%B0%E6%88%91%E6%AF%94%E8%BE%83%E6%9C%89%E9%92%B1%E4%B8%8D%E7%94%A8%E8%AF%B7%E6%88%91%23) `240.0K 🔥` `NEW`
1. [王传君王子奇吃瓜差点亲上](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BC%A0%E5%90%9B%E7%8E%8B%E5%AD%90%E5%A5%87%E5%90%83%E7%93%9C%E5%B7%AE%E7%82%B9%E4%BA%B2%E4%B8%8A%23) `238.4K 🔥` `NEW`
1. [全职高手](https://s.weibo.com/weibo?q=%23%E5%85%A8%E8%81%8C%E9%AB%98%E6%89%8B%23) `236.5K 🔥` `NEW`
1. [中国车市要变天了吗](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E8%BD%A6%E5%B8%82%E8%A6%81%E5%8F%98%E5%A4%A9%E4%BA%86%E5%90%97%23) `210.1K 🔥` `NEW`
1. [农妇袭警案当事人已无法正常讲话 (The person involved in the case of the peasant woman assaulting the police is no longer able to speak normally)](https://s.weibo.com/weibo?q=%23%E5%86%9C%E5%A6%87%E8%A2%AD%E8%AD%A6%E6%A1%88%E5%BD%93%E4%BA%8B%E4%BA%BA%E5%B7%B2%E6%97%A0%E6%B3%95%E6%AD%A3%E5%B8%B8%E8%AE%B2%E8%AF%9D%23) `206.1K 🔥` `NEW`
1. [33岁环卫女工一边扫地一边考研](https://s.weibo.com/weibo?q=%2333%E5%B2%81%E7%8E%AF%E5%8D%AB%E5%A5%B3%E5%B7%A5%E4%B8%80%E8%BE%B9%E6%89%AB%E5%9C%B0%E4%B8%80%E8%BE%B9%E8%80%83%E7%A0%94%23) `193.4K 🔥` `NEW`
1. [警方介入网红边牧被180元转卖宰杀](https://s.weibo.com/weibo?q=%23%E8%AD%A6%E6%96%B9%E4%BB%8B%E5%85%A5%E7%BD%91%E7%BA%A2%E8%BE%B9%E7%89%A7%E8%A2%AB180%E5%85%83%E8%BD%AC%E5%8D%96%E5%AE%B0%E6%9D%80%23) `150.1K 🔥` `NEW`
1. [刘宇宁 谁上星光大赏敢要钱](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AE%87%E5%AE%81%20%E8%B0%81%E4%B8%8A%E6%98%9F%E5%85%89%E5%A4%A7%E8%B5%8F%E6%95%A2%E8%A6%81%E9%92%B1%23) `142.9K 🔥` `NEW`
1. [曝小巷人家2长辈组退居辅线](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%B0%8F%E5%B7%B7%E4%BA%BA%E5%AE%B62%E9%95%BF%E8%BE%88%E7%BB%84%E9%80%80%E5%B1%85%E8%BE%85%E7%BA%BF%23) `114.7K 🔥` `NEW`
1. [孙杨一天给张豆豆发100多条消息](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%9D%A8%E4%B8%80%E5%A4%A9%E7%BB%99%E5%BC%A0%E8%B1%86%E8%B1%86%E5%8F%91100%E5%A4%9A%E6%9D%A1%E6%B6%88%E6%81%AF%23) `104.9K 🔥` `NEW`
1. [金价又跌麻了](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E5%8F%88%E8%B7%8C%E9%BA%BB%E4%BA%86%23) `98.2K 🔥` `NEW`
1. [张凌赫丁程鑫第一案赢了](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E4%B8%81%E7%A8%8B%E9%91%AB%E7%AC%AC%E4%B8%80%E6%A1%88%E8%B5%A2%E4%BA%86%23) `97.9K 🔥` `NEW`
1. [接住薇V星光](https://s.weibo.com/weibo?q=%23%E6%8E%A5%E4%BD%8F%E8%96%87V%E6%98%9F%E5%85%89%23) `97.1K 🔥` `NEW`
1. [中国情侣在富士山便利店前跳舞被批](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E6%83%85%E4%BE%A3%E5%9C%A8%E5%AF%8C%E5%A3%AB%E5%B1%B1%E4%BE%BF%E5%88%A9%E5%BA%97%E5%89%8D%E8%B7%B3%E8%88%9E%E8%A2%AB%E6%89%B9%23) `84.9K 🔥` `NEW`
1. [甘孜通报稻城亚丁景区违规封堵省道 (Ganzi notified Daocheng Yading Scenic Area of ​​illegally blocking provincial roads)](https://s.weibo.com/weibo?q=%23%E7%94%98%E5%AD%9C%E9%80%9A%E6%8A%A5%E7%A8%BB%E5%9F%8E%E4%BA%9A%E4%B8%81%E6%99%AF%E5%8C%BA%E8%BF%9D%E8%A7%84%E5%B0%81%E5%A0%B5%E7%9C%81%E9%81%93%23) `1.3M 🔥` `+122%`
1. [三夏大规模小麦机收全面展开 (Large-scale wheat harvest in Sanxia is in full swing)](https://s.weibo.com/weibo?q=%23%E4%B8%89%E5%A4%8F%E5%A4%A7%E8%A7%84%E6%A8%A1%E5%B0%8F%E9%BA%A6%E6%9C%BA%E6%94%B6%E5%85%A8%E9%9D%A2%E5%B1%95%E5%BC%80%23) `704.1K 🔥` `+107%`
1. [解放军驱离荷兰军机现场画面 (Live footage of the People's Liberation Army driving away Dutch military aircraft)](https://s.weibo.com/weibo?q=%23%E8%A7%A3%E6%94%BE%E5%86%9B%E9%A9%B1%E7%A6%BB%E8%8D%B7%E5%85%B0%E5%86%9B%E6%9C%BA%E7%8E%B0%E5%9C%BA%E7%94%BB%E9%9D%A2%23) `556.8K 🔥` `+114%`
1. [吴彤你别念了宋亚轩要笑晕了](https://s.weibo.com/weibo?q=%23%E5%90%B4%E5%BD%A4%E4%BD%A0%E5%88%AB%E5%BF%B5%E4%BA%86%E5%AE%8B%E4%BA%9A%E8%BD%A9%E8%A6%81%E7%AC%91%E6%99%95%E4%BA%86%23) `498.9K 🔥` `+164%`
1. [买增程选大众](https://s.weibo.com/weibo?q=%23%E4%B9%B0%E5%A2%9E%E7%A8%8B%E9%80%89%E5%A4%A7%E4%BC%97%23) `385.7K 🔥` `+158%`
1. [银行人员让村会计找单身穷的办贷款 (The bank staff asked the village accountant to find single and poor people to apply for loans.)](https://s.weibo.com/weibo?q=%23%E9%93%B6%E8%A1%8C%E4%BA%BA%E5%91%98%E8%AE%A9%E6%9D%91%E4%BC%9A%E8%AE%A1%E6%89%BE%E5%8D%95%E8%BA%AB%E7%A9%B7%E7%9A%84%E5%8A%9E%E8%B4%B7%E6%AC%BE%23) `252.6K 🔥` `+109%`
1. [双汇的傲慢比抗生素超标更可怕](https://s.weibo.com/weibo?q=%23%E5%8F%8C%E6%B1%87%E7%9A%84%E5%82%B2%E6%85%A2%E6%AF%94%E6%8A%97%E7%94%9F%E7%B4%A0%E8%B6%85%E6%A0%87%E6%9B%B4%E5%8F%AF%E6%80%95%23) `249.1K 🔥` `+179%`
1. [女子微信辱骂他人被多人围殴成脑震荡 (A woman insulted others on WeChat and was beaten by many people and suffered a concussion.)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%BE%AE%E4%BF%A1%E8%BE%B1%E9%AA%82%E4%BB%96%E4%BA%BA%E8%A2%AB%E5%A4%9A%E4%BA%BA%E5%9B%B4%E6%AE%B4%E6%88%90%E8%84%91%E9%9C%87%E8%8D%A1%23) `244.9K 🔥` `+175%`
1. [姜乘澜眼镜妆](https://s.weibo.com/weibo?q=%23%E5%A7%9C%E4%B9%98%E6%BE%9C%E7%9C%BC%E9%95%9C%E5%A6%86%23) `242.3K 🔥` `+66%`
1. [算力价格](https://s.weibo.com/weibo?q=%23%E7%AE%97%E5%8A%9B%E4%BB%B7%E6%A0%BC%23) `234.4K 🔥` `+166%`
1. [金饰价格集体大跌 (Prices of gold jewelry plummeted)](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%A5%B0%E4%BB%B7%E6%A0%BC%E9%9B%86%E4%BD%93%E5%A4%A7%E8%B7%8C%23) `223.4K 🔥` `+153%`
1. [山东问题鸡蛋已封存](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E4%B8%9C%E9%97%AE%E9%A2%98%E9%B8%A1%E8%9B%8B%E5%B7%B2%E5%B0%81%E5%AD%98%23) `215.0K 🔥` `+142%`
1. [法拉利史上首款电动车亮相](https://s.weibo.com/weibo?q=%23%E6%B3%95%E6%8B%89%E5%88%A9%E5%8F%B2%E4%B8%8A%E9%A6%96%E6%AC%BE%E7%94%B5%E5%8A%A8%E8%BD%A6%E4%BA%AE%E7%9B%B8%23) `198.5K 🔥` `+30%`
1. [第一次对宋亚轩的身高有了实感](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%AC%A1%E5%AF%B9%E5%AE%8B%E4%BA%9A%E8%BD%A9%E7%9A%84%E8%BA%AB%E9%AB%98%E6%9C%89%E4%BA%86%E5%AE%9E%E6%84%9F%23) `184.9K 🔥` `+108%`
1. [25岁vs55岁肌肉的真实差别 (The real difference in muscles between a 25-year-old and a 55-year-old)](https://s.weibo.com/weibo?q=%2325%E5%B2%81vs55%E5%B2%81%E8%82%8C%E8%82%89%E7%9A%84%E7%9C%9F%E5%AE%9E%E5%B7%AE%E5%88%AB%23) `173.5K 🔥` `+128%`
1. [男子遭妻子家暴跳楼身亡细节公开 (Details of man who jumped from building to death after being violently raped by his wife are revealed)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E9%81%AD%E5%A6%BB%E5%AD%90%E5%AE%B6%E6%9A%B4%E8%B7%B3%E6%A5%BC%E8%BA%AB%E4%BA%A1%E7%BB%86%E8%8A%82%E5%85%AC%E5%BC%80%23) `163.7K 🔥` `+87%`
1. [小巷人家2剧情](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%B7%B7%E4%BA%BA%E5%AE%B62%E5%89%A7%E6%83%85%23) `150.7K 🔥` `+68%`
1. [推特自动翻译 巴别塔 (Twitter automatic translation Tower of Babel)](https://s.weibo.com/weibo?q=%23%E6%8E%A8%E7%89%B9%E8%87%AA%E5%8A%A8%E7%BF%BB%E8%AF%91%20%E5%B7%B4%E5%88%AB%E5%A1%94%23) `148.4K 🔥` `+65%`
1. [清华女博士称孩子像小狗一样被拴着 (A female doctor from Tsinghua University said her children were tethered like puppies)](https://s.weibo.com/weibo?q=%23%E6%B8%85%E5%8D%8E%E5%A5%B3%E5%8D%9A%E5%A3%AB%E7%A7%B0%E5%AD%A9%E5%AD%90%E5%83%8F%E5%B0%8F%E7%8B%97%E4%B8%80%E6%A0%B7%E8%A2%AB%E6%8B%B4%E7%9D%80%23) `131.1K 🔥` `+54%`
1. [黄磊我也不舒服了](https://s.weibo.com/weibo?q=%23%E9%BB%84%E7%A3%8A%E6%88%91%E4%B9%9F%E4%B8%8D%E8%88%92%E6%9C%8D%E4%BA%86%23) `115.3K 🔥` `+31%`
1. [追尾致13死3伤车主已被控制](https://s.weibo.com/weibo?q=%23%E8%BF%BD%E5%B0%BE%E8%87%B413%E6%AD%BB3%E4%BC%A4%E8%BD%A6%E4%B8%BB%E5%B7%B2%E8%A2%AB%E6%8E%A7%E5%88%B6%23) `114.7K 🔥` `+31%`
1. [中国自研高算力芯片突破4纳米](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E8%87%AA%E7%A0%94%E9%AB%98%E7%AE%97%E5%8A%9B%E8%8A%AF%E7%89%87%E7%AA%81%E7%A0%B44%E7%BA%B3%E7%B1%B3%23) `98.9K 🔥` `+82%`
1. [高校教职工生日蛋糕预算66万](https://s.weibo.com/weibo?q=%23%E9%AB%98%E6%A0%A1%E6%95%99%E8%81%8C%E5%B7%A5%E7%94%9F%E6%97%A5%E8%9B%8B%E7%B3%95%E9%A2%84%E7%AE%9766%E4%B8%87%23) `96.7K 🔥` `+93%`
1. [A股集体大涨原因](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E9%9B%86%E4%BD%93%E5%A4%A7%E6%B6%A8%E5%8E%9F%E5%9B%A0%23) `94.6K 🔥` `+88%`
1. [同一个人的早上和晚上区别有多大](https://s.weibo.com/weibo?q=%23%E5%90%8C%E4%B8%80%E4%B8%AA%E4%BA%BA%E7%9A%84%E6%97%A9%E4%B8%8A%E5%92%8C%E6%99%9A%E4%B8%8A%E5%8C%BA%E5%88%AB%E6%9C%89%E5%A4%9A%E5%A4%A7%23) `492.6K 🔥`
1. [曝Jennie和内娱顶流谈过恋爱](https://s.weibo.com/weibo?q=%23%E6%9B%9DJennie%E5%92%8C%E5%86%85%E5%A8%B1%E9%A1%B6%E6%B5%81%E8%B0%88%E8%BF%87%E6%81%8B%E7%88%B1%23) `251.8K 🔥`
1. [欧阳娣娣晒与严浩翔合照](https://s.weibo.com/weibo?q=%23%E6%AC%A7%E9%98%B3%E5%A8%A3%E5%A8%A3%E6%99%92%E4%B8%8E%E4%B8%A5%E6%B5%A9%E7%BF%94%E5%90%88%E7%85%A7%23) `246.5K 🔥` `-23%`
1. [张子枫是严浩翔答辩老师 (Zhang Zifeng is Yan Haoxiang’s defense teacher)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%AD%90%E6%9E%AB%E6%98%AF%E4%B8%A5%E6%B5%A9%E7%BF%94%E7%AD%94%E8%BE%A9%E8%80%81%E5%B8%88%23) `233.9K 🔥` `-42%`
1. [91岁演员罗兰回应被TVB除名](https://s.weibo.com/weibo?q=%2391%E5%B2%81%E6%BC%94%E5%91%98%E7%BD%97%E5%85%B0%E5%9B%9E%E5%BA%94%E8%A2%ABTVB%E9%99%A4%E5%90%8D%23) `115.0K 🔥` `-24%`
1. [曝景甜降价出售上海豪宅 (Exposed Jingtian sells Shanghai mansion at reduced price)](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%99%AF%E7%94%9C%E9%99%8D%E4%BB%B7%E5%87%BA%E5%94%AE%E4%B8%8A%E6%B5%B7%E8%B1%AA%E5%AE%85%23) `93.7K 🔥` `-70%`

Updated at 2026-05-29 07:58:05

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
