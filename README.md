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

1. [榴莲仅退款买家骂哭客服不敢还嘴 (Durian only refunds the buyer, but the customer service didn’t dare to talk back after he scolded the customer.)](https://s.weibo.com/weibo?q=%23%E6%A6%B4%E8%8E%B2%E4%BB%85%E9%80%80%E6%AC%BE%E4%B9%B0%E5%AE%B6%E9%AA%82%E5%93%AD%E5%AE%A2%E6%9C%8D%E4%B8%8D%E6%95%A2%E8%BF%98%E5%98%B4%23) `1.9M 🔥` `NEW`
1. [很喜欢登机前的十分钟](https://s.weibo.com/weibo?q=%23%E5%BE%88%E5%96%9C%E6%AC%A2%E7%99%BB%E6%9C%BA%E5%89%8D%E7%9A%84%E5%8D%81%E5%88%86%E9%92%9F%23) `781.9K 🔥` `NEW`
1. [李嘉诚次子1.7亿买下时间最差世界杯](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%98%89%E8%AF%9A%E6%AC%A1%E5%AD%901.7%E4%BA%BF%E4%B9%B0%E4%B8%8B%E6%97%B6%E9%97%B4%E6%9C%80%E5%B7%AE%E4%B8%96%E7%95%8C%E6%9D%AF%23) `306.0K 🔥` `NEW`
1. [刘涛妈祖诞辰守夜](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%B6%9B%E5%A6%88%E7%A5%96%E8%AF%9E%E8%BE%B0%E5%AE%88%E5%A4%9C%23) `302.4K 🔥` `NEW`
1. [中国绝不接受当世界杯提款机](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%BB%9D%E4%B8%8D%E6%8E%A5%E5%8F%97%E5%BD%93%E4%B8%96%E7%95%8C%E6%9D%AF%E6%8F%90%E6%AC%BE%E6%9C%BA%23) `301.5K 🔥` `NEW`
1. [OPPO倾听批评 评论精选](https://s.weibo.com/weibo?q=%23OPPO%E5%80%BE%E5%90%AC%E6%89%B9%E8%AF%84%20%E8%AF%84%E8%AE%BA%E7%B2%BE%E9%80%89%23) `287.6K 🔥` `NEW`
1. [雷霆众将围在一旁笑看湖人与裁判交谈](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E9%9C%86%E4%BC%97%E5%B0%86%E5%9B%B4%E5%9C%A8%E4%B8%80%E6%97%81%E7%AC%91%E7%9C%8B%E6%B9%96%E4%BA%BA%E4%B8%8E%E8%A3%81%E5%88%A4%E4%BA%A4%E8%B0%88%23) `281.3K 🔥` `NEW`
1. [田曦薇 刘海](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%20%E5%88%98%E6%B5%B7%23) `280.5K 🔥` `NEW`
1. [南京富豪遇害凶宅68.2万拍出](https://s.weibo.com/weibo?q=%23%E5%8D%97%E4%BA%AC%E5%AF%8C%E8%B1%AA%E9%81%87%E5%AE%B3%E5%87%B6%E5%AE%8568.2%E4%B8%87%E6%8B%8D%E5%87%BA%23) `278.5K 🔥` `NEW`
1. [轻断食减肥正确方法](https://s.weibo.com/weibo?q=%23%E8%BD%BB%E6%96%AD%E9%A3%9F%E5%87%8F%E8%82%A5%E6%AD%A3%E7%A1%AE%E6%96%B9%E6%B3%95%23) `275.9K 🔥` `NEW`
1. [文佳煐第一位95后韩国三大影后 (Moon Ga Young is the first among the top three Korean actresses born in 1995.)](https://s.weibo.com/weibo?q=%23%E6%96%87%E4%BD%B3%E7%85%90%E7%AC%AC%E4%B8%80%E4%BD%8D95%E5%90%8E%E9%9F%A9%E5%9B%BD%E4%B8%89%E5%A4%A7%E5%BD%B1%E5%90%8E%23) `274.0K 🔥` `NEW`
1. [榴莲仅退款商家希望买家公开道歉](https://s.weibo.com/weibo?q=%23%E6%A6%B4%E8%8E%B2%E4%BB%85%E9%80%80%E6%AC%BE%E5%95%86%E5%AE%B6%E5%B8%8C%E6%9C%9B%E4%B9%B0%E5%AE%B6%E5%85%AC%E5%BC%80%E9%81%93%E6%AD%89%23) `271.6K 🔥` `NEW`
1. [后来的我们](https://s.weibo.com/weibo?q=%23%E5%90%8E%E6%9D%A5%E7%9A%84%E6%88%91%E4%BB%AC%23) `270.0K 🔥` `NEW`
1. [黄仁勋称铜线已无法满足需求](https://s.weibo.com/weibo?q=%23%E9%BB%84%E4%BB%81%E5%8B%8B%E7%A7%B0%E9%93%9C%E7%BA%BF%E5%B7%B2%E6%97%A0%E6%B3%95%E6%BB%A1%E8%B6%B3%E9%9C%80%E6%B1%82%23) `191.8K 🔥` `NEW`
1. [梅西说与C罗无私人关系但相互尊重](https://s.weibo.com/weibo?q=%23%E6%A2%85%E8%A5%BF%E8%AF%B4%E4%B8%8EC%E7%BD%97%E6%97%A0%E7%A7%81%E4%BA%BA%E5%85%B3%E7%B3%BB%E4%BD%86%E7%9B%B8%E4%BA%92%E5%B0%8A%E9%87%8D%23) `188.9K 🔥` `NEW`
1. [田曦薇新剧登顶](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E6%96%B0%E5%89%A7%E7%99%BB%E9%A1%B6%23) `188.2K 🔥` `NEW`
1. [卵巢癌为什么很难早期发现](https://s.weibo.com/weibo?q=%23%E5%8D%B5%E5%B7%A2%E7%99%8C%E4%B8%BA%E4%BB%80%E4%B9%88%E5%BE%88%E9%9A%BE%E6%97%A9%E6%9C%9F%E5%8F%91%E7%8E%B0%23) `187.5K 🔥` `NEW`
1. [天价皮皮虾真相虽到但是太晚](https://s.weibo.com/weibo?q=%23%E5%A4%A9%E4%BB%B7%E7%9A%AE%E7%9A%AE%E8%99%BE%E7%9C%9F%E7%9B%B8%E8%99%BD%E5%88%B0%E4%BD%86%E6%98%AF%E5%A4%AA%E6%99%9A%23) `185.6K 🔥` `NEW`
1. [DRG老板道歉](https://s.weibo.com/weibo?q=%23DRG%E8%80%81%E6%9D%BF%E9%81%93%E6%AD%89%23) `180.6K 🔥` `NEW`
1. [浪姐音乐会 淘汰姐姐返场](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E9%9F%B3%E4%B9%90%E4%BC%9A%20%E6%B7%98%E6%B1%B0%E5%A7%90%E5%A7%90%E8%BF%94%E5%9C%BA%23) `169.1K 🔥` `NEW`
1. [乌克兰称不会攻击红场阅兵 (Ukraine says it will not attack Red Square military parade)](https://s.weibo.com/weibo?q=%23%E4%B9%8C%E5%85%8B%E5%85%B0%E7%A7%B0%E4%B8%8D%E4%BC%9A%E6%94%BB%E5%87%BB%E7%BA%A2%E5%9C%BA%E9%98%85%E5%85%B5%23) `137.7K 🔥` `NEW`
1. [刘浩存王晓晨让C](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%B5%A9%E5%AD%98%E7%8E%8B%E6%99%93%E6%99%A8%E8%AE%A9C%23) `137.6K 🔥` `NEW`
1. [存储大牛股紧急提示风险](https://s.weibo.com/weibo?q=%23%E5%AD%98%E5%82%A8%E5%A4%A7%E7%89%9B%E8%82%A1%E7%B4%A7%E6%80%A5%E6%8F%90%E7%A4%BA%E9%A3%8E%E9%99%A9%23) `137.1K 🔥` `NEW`
1. [OPPO暴露对网络亚文化缺乏边界感](https://s.weibo.com/weibo?q=%23OPPO%E6%9A%B4%E9%9C%B2%E5%AF%B9%E7%BD%91%E7%BB%9C%E4%BA%9A%E6%96%87%E5%8C%96%E7%BC%BA%E4%B9%8F%E8%BE%B9%E7%95%8C%E6%84%9F%23) `136.1K 🔥` `NEW`
1. [跑男新一期收视率创新低 (The ratings for the new episode of Running Man hit a new low)](https://s.weibo.com/weibo?q=%23%E8%B7%91%E7%94%B7%E6%96%B0%E4%B8%80%E6%9C%9F%E6%94%B6%E8%A7%86%E7%8E%87%E5%88%9B%E6%96%B0%E4%BD%8E%23) `2.3M 🔥` `+72%`
1. [五一消费潜力充分释放](https://s.weibo.com/weibo?q=%23%E4%BA%94%E4%B8%80%E6%B6%88%E8%B4%B9%E6%BD%9C%E5%8A%9B%E5%85%85%E5%88%86%E9%87%8A%E6%94%BE%23) `1.2M 🔥` `+83%`
1. [女子怀孕后发现公务员男友无业已婚](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%80%80%E5%AD%95%E5%90%8E%E5%8F%91%E7%8E%B0%E5%85%AC%E5%8A%A1%E5%91%98%E7%94%B7%E5%8F%8B%E6%97%A0%E4%B8%9A%E5%B7%B2%E5%A9%9A%23) `960.7K 🔥` `+383%`
1. [8家车企被约谈](https://s.weibo.com/weibo?q=%238%E5%AE%B6%E8%BD%A6%E4%BC%81%E8%A2%AB%E7%BA%A6%E8%B0%88%23) `709.9K 🔥` `+266%`
1. [同价买奥迪还是买小米](https://s.weibo.com/weibo?q=%23%E5%90%8C%E4%BB%B7%E4%B9%B0%E5%A5%A5%E8%BF%AA%E8%BF%98%E6%98%AF%E4%B9%B0%E5%B0%8F%E7%B1%B3%23) `692.4K 🔥` `+238%`
1. [国乒男团半决赛对阵法国](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%E7%94%B7%E5%9B%A2%E5%8D%8A%E5%86%B3%E8%B5%9B%E5%AF%B9%E9%98%B5%E6%B3%95%E5%9B%BD%23) `496.3K 🔥` `+248%`
1. [范丞丞被徐艺洋气到给黄子韬打电话 (Fan Chengcheng was so angry with Xu Yi that he called Huang Zitao)](https://s.weibo.com/weibo?q=%23%E8%8C%83%E4%B8%9E%E4%B8%9E%E8%A2%AB%E5%BE%90%E8%89%BA%E6%B4%8B%E6%B0%94%E5%88%B0%E7%BB%99%E9%BB%84%E5%AD%90%E9%9F%AC%E6%89%93%E7%94%B5%E8%AF%9D%23) `312.7K 🔥` `+79%`
1. [李金铭发表情回应](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E9%87%91%E9%93%AD%E5%8F%91%E8%A1%A8%E6%83%85%E5%9B%9E%E5%BA%94%23) `312.5K 🔥` `+55%`
1. [皮皮虾事件隔壁海鲜店发声 (The seafood shop next door speaks out about the Pipi shrimp incident)](https://s.weibo.com/weibo?q=%23%E7%9A%AE%E7%9A%AE%E8%99%BE%E4%BA%8B%E4%BB%B6%E9%9A%94%E5%A3%81%E6%B5%B7%E9%B2%9C%E5%BA%97%E5%8F%91%E5%A3%B0%23) `292.2K 🔥` `+59%`
1. [中情局报告泄了特朗普的底](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%83%85%E5%B1%80%E6%8A%A5%E5%91%8A%E6%B3%84%E4%BA%86%E7%89%B9%E6%9C%97%E6%99%AE%E7%9A%84%E5%BA%95%23) `282.7K 🔥` `+137%`
1. [金高银好可惜 (What a pity Kim Go Eun)](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%AB%98%E9%93%B6%E5%A5%BD%E5%8F%AF%E6%83%9C%23) `271.2K 🔥` `+50%`
1. [汉坦病毒](https://s.weibo.com/weibo?q=%23%E6%B1%89%E5%9D%A6%E7%97%85%E6%AF%92%23) `191.5K 🔥` `+81%`
1. [刷圈霸榜的奥迪E7X卖28.98万起](https://s.weibo.com/weibo?q=%23%E5%88%B7%E5%9C%88%E9%9C%B8%E6%A6%9C%E7%9A%84%E5%A5%A5%E8%BF%AAE7X%E5%8D%9628.98%E4%B8%87%E8%B5%B7%23) `190.6K 🔥` `+212%`
1. [玄彬感谢孙艺珍和儿子 (Hyun Bin thanks Son Ye Jin and his son)](https://s.weibo.com/weibo?q=%23%E7%8E%84%E5%BD%AC%E6%84%9F%E8%B0%A2%E5%AD%99%E8%89%BA%E7%8F%8D%E5%92%8C%E5%84%BF%E5%AD%90%23) `179.7K 🔥` `+23%`
1. [泰国濑尿虾一夜可能就死了](https://s.weibo.com/weibo?q=%23%E6%B3%B0%E5%9B%BD%E6%BF%91%E5%B0%BF%E8%99%BE%E4%B8%80%E5%A4%9C%E5%8F%AF%E8%83%BD%E5%B0%B1%E6%AD%BB%E4%BA%86%23) `176.0K 🔥` `+124%`
1. [网友喊话任嘉伦取回60多万的酒](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%8F%8B%E5%96%8A%E8%AF%9D%E4%BB%BB%E5%98%89%E4%BC%A6%E5%8F%96%E5%9B%9E60%E5%A4%9A%E4%B8%87%E7%9A%84%E9%85%92%23) `155.9K 🔥` `+71%`
1. [王俊凯去看了五月天](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E5%8E%BB%E7%9C%8B%E4%BA%86%E4%BA%94%E6%9C%88%E5%A4%A9%23) `152.8K 🔥` `+48%`
1. [再有消息就是要结婚了](https://s.weibo.com/weibo?q=%23%E5%86%8D%E6%9C%89%E6%B6%88%E6%81%AF%E5%B0%B1%E6%98%AF%E8%A6%81%E7%BB%93%E5%A9%9A%E4%BA%86%23) `730.3K 🔥`
1. [精神病院炒股炒成公司前十大股东](https://s.weibo.com/weibo?q=%23%E7%B2%BE%E7%A5%9E%E7%97%85%E9%99%A2%E7%82%92%E8%82%A1%E7%82%92%E6%88%90%E5%85%AC%E5%8F%B8%E5%89%8D%E5%8D%81%E5%A4%A7%E8%82%A1%E4%B8%9C%23) `295.4K 🔥`
1. [朴宝英百想视后](https://s.weibo.com/weibo?q=%23%E6%9C%B4%E5%AE%9D%E8%8B%B1%E7%99%BE%E6%83%B3%E8%A7%86%E5%90%8E%23) `286.7K 🔥`
1. [浏阳爆炸烟花厂内部画面 (Internal footage of Liuyang explosive fireworks factory)](https://s.weibo.com/weibo?q=%23%E6%B5%8F%E9%98%B3%E7%88%86%E7%82%B8%E7%83%9F%E8%8A%B1%E5%8E%82%E5%86%85%E9%83%A8%E7%94%BB%E9%9D%A2%23) `186.3K 🔥`
1. [白鹿自己摔了还不忘扶周洁琼 (Bai Lu didn’t forget to help Zhou Jieqiong even after he fell.)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E8%87%AA%E5%B7%B1%E6%91%94%E4%BA%86%E8%BF%98%E4%B8%8D%E5%BF%98%E6%89%B6%E5%91%A8%E6%B4%81%E7%90%BC%23) `185.5K 🔥`
1. [易易紫说Angelababy喜欢权志龙是跟风 (Yi Yizi said that Angelababy is following the trend by liking Quan Zhilong)](https://s.weibo.com/weibo?q=%23%E6%98%93%E6%98%93%E7%B4%AB%E8%AF%B4Angelababy%E5%96%9C%E6%AC%A2%E6%9D%83%E5%BF%97%E9%BE%99%E6%98%AF%E8%B7%9F%E9%A3%8E%23) `170.5K 🔥`
1. [14岁男孩网购竹叶青当宠物被咬 (14-year-old boy was bitten after buying green bamboo leaves online as pets)](https://s.weibo.com/weibo?q=%2314%E5%B2%81%E7%94%B7%E5%AD%A9%E7%BD%91%E8%B4%AD%E7%AB%B9%E5%8F%B6%E9%9D%92%E5%BD%93%E5%AE%A0%E7%89%A9%E8%A2%AB%E5%92%AC%23) `161.5K 🔥`
1. [皮皮虾事件当事人否认想吃白食 (The person involved in the Pippi shrimp incident denies wanting to freeload)](https://s.weibo.com/weibo?q=%23%E7%9A%AE%E7%9A%AE%E8%99%BE%E4%BA%8B%E4%BB%B6%E5%BD%93%E4%BA%8B%E4%BA%BA%E5%90%A6%E8%AE%A4%E6%83%B3%E5%90%83%E7%99%BD%E9%A3%9F%23) `189.8K 🔥` `-42%`
1. [增距镜成为韩国人必买中国特产 (Teleconverter becomes a must-buy Chinese specialty for Koreans)](https://s.weibo.com/weibo?q=%23%E5%A2%9E%E8%B7%9D%E9%95%9C%E6%88%90%E4%B8%BA%E9%9F%A9%E5%9B%BD%E4%BA%BA%E5%BF%85%E4%B9%B0%E4%B8%AD%E5%9B%BD%E7%89%B9%E4%BA%A7%23) `135.6K 🔥` `-21%`

Updated at 2026-05-09 09:18:46

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
