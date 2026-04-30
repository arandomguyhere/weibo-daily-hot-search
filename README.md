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

1. [莫氏鸡煲老板还剩40万债务 (The owner of Mo’s Chicken Pot still has a debt of 400,000 yuan)](https://s.weibo.com/weibo?q=%23%E8%8E%AB%E6%B0%8F%E9%B8%A1%E7%85%B2%E8%80%81%E6%9D%BF%E8%BF%98%E5%89%A940%E4%B8%87%E5%80%BA%E5%8A%A1%23) `757.3K 🔥` `NEW`
1. [2025全国十大考古新发现](https://s.weibo.com/weibo?q=%232025%E5%85%A8%E5%9B%BD%E5%8D%81%E5%A4%A7%E8%80%83%E5%8F%A4%E6%96%B0%E5%8F%91%E7%8E%B0%23) `682.5K 🔥` `NEW`
1. [厦门好有意思从这片海开始](https://s.weibo.com/weibo?q=%23%E5%8E%A6%E9%97%A8%E5%A5%BD%E6%9C%89%E6%84%8F%E6%80%9D%E4%BB%8E%E8%BF%99%E7%89%87%E6%B5%B7%E5%BC%80%E5%A7%8B%23) `606.9K 🔥` `NEW`
1. [马竞1比1阿森纳](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E7%AB%9E1%E6%AF%941%E9%98%BF%E6%A3%AE%E7%BA%B3%23) `570.9K 🔥` `NEW`
1. [女子生姜当水果1天1斤坚持10年](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E7%94%9F%E5%A7%9C%E5%BD%93%E6%B0%B4%E6%9E%9C1%E5%A4%A91%E6%96%A4%E5%9D%9A%E6%8C%8110%E5%B9%B4%23) `510.3K 🔥` `NEW`
1. [张豆豆一脸母亲看儿子的宠溺样](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E8%B1%86%E8%B1%86%E4%B8%80%E8%84%B8%E6%AF%8D%E4%BA%B2%E7%9C%8B%E5%84%BF%E5%AD%90%E7%9A%84%E5%AE%A0%E6%BA%BA%E6%A0%B7%23) `460.4K 🔥` `NEW`
1. [专家谈47岁汤唯怀二胎](https://s.weibo.com/weibo?q=%23%E4%B8%93%E5%AE%B6%E8%B0%8847%E5%B2%81%E6%B1%A4%E5%94%AF%E6%80%80%E4%BA%8C%E8%83%8E%23) `423.6K 🔥` `NEW`
1. [霸王茶姬奶茶中喝出水银调查结果](https://s.weibo.com/weibo?q=%23%E9%9C%B8%E7%8E%8B%E8%8C%B6%E5%A7%AC%E5%A5%B6%E8%8C%B6%E4%B8%AD%E5%96%9D%E5%87%BA%E6%B0%B4%E9%93%B6%E8%B0%83%E6%9F%A5%E7%BB%93%E6%9E%9C%23) `345.4K 🔥` `NEW`
1. [赵心童不敌墨菲](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E5%BF%83%E7%AB%A5%E4%B8%8D%E6%95%8C%E5%A2%A8%E8%8F%B2%23) `343.2K 🔥` `NEW`
1. [五一假期10大城市上榜了](https://s.weibo.com/weibo?q=%23%E4%BA%94%E4%B8%80%E5%81%87%E6%9C%9F10%E5%A4%A7%E5%9F%8E%E5%B8%82%E4%B8%8A%E6%A6%9C%E4%BA%86%23) `271.0K 🔥` `NEW`
1. [霍尔木兹海峡部分被困船员已遇难 (Some crew members trapped in the Strait of Hormuz have died)](https://s.weibo.com/weibo?q=%23%E9%9C%8D%E5%B0%94%E6%9C%A8%E5%85%B9%E6%B5%B7%E5%B3%A1%E9%83%A8%E5%88%86%E8%A2%AB%E5%9B%B0%E8%88%B9%E5%91%98%E5%B7%B2%E9%81%87%E9%9A%BE%23) `255.5K 🔥` `NEW`
1. [中国空间站快要住不下了](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%A9%BA%E9%97%B4%E7%AB%99%E5%BF%AB%E8%A6%81%E4%BD%8F%E4%B8%8D%E4%B8%8B%E4%BA%86%23) `251.2K 🔥` `NEW`
1. [宝宝差点摔倒一车厢人都动了](https://s.weibo.com/weibo?q=%23%E5%AE%9D%E5%AE%9D%E5%B7%AE%E7%82%B9%E6%91%94%E5%80%92%E4%B8%80%E8%BD%A6%E5%8E%A2%E4%BA%BA%E9%83%BD%E5%8A%A8%E4%BA%86%23) `235.0K 🔥` `NEW`
1. [李兰迪喀什恋歌](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%85%B0%E8%BF%AA%E5%96%80%E4%BB%80%E6%81%8B%E6%AD%8C%23) `208.8K 🔥` `NEW`
1. [女生攒到10万怕被嘲笑网友全是鼓励](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E7%94%9F%E6%94%92%E5%88%B010%E4%B8%87%E6%80%95%E8%A2%AB%E5%98%B2%E7%AC%91%E7%BD%91%E5%8F%8B%E5%85%A8%E6%98%AF%E9%BC%93%E5%8A%B1%23) `179.8K 🔥` `NEW`
1. [吴宜泽冲击世锦赛决赛](https://s.weibo.com/weibo?q=%23%E5%90%B4%E5%AE%9C%E6%B3%BD%E5%86%B2%E5%87%BB%E4%B8%96%E9%94%A6%E8%B5%9B%E5%86%B3%E8%B5%9B%23) `173.6K 🔥` `NEW`
1. [王俊凯演出前48h舞台全被推翻](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E6%BC%94%E5%87%BA%E5%89%8D48h%E8%88%9E%E5%8F%B0%E5%85%A8%E8%A2%AB%E6%8E%A8%E7%BF%BB%23) `165.4K 🔥` `NEW`
1. [赵心童无缘打破克鲁斯堡魔咒](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E5%BF%83%E7%AB%A5%E6%97%A0%E7%BC%98%E6%89%93%E7%A0%B4%E5%85%8B%E9%B2%81%E6%96%AF%E5%A0%A1%E9%AD%94%E5%92%92%23) `145.5K 🔥` `NEW`
1. [伊能静回应与秦昊婚姻状态](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E8%83%BD%E9%9D%99%E5%9B%9E%E5%BA%94%E4%B8%8E%E7%A7%A6%E6%98%8A%E5%A9%9A%E5%A7%BB%E7%8A%B6%E6%80%81%23) `142.1K 🔥` `NEW`
1. [千万存款被转走银行称你赶上了](https://s.weibo.com/weibo?q=%23%E5%8D%83%E4%B8%87%E5%AD%98%E6%AC%BE%E8%A2%AB%E8%BD%AC%E8%B5%B0%E9%93%B6%E8%A1%8C%E7%A7%B0%E4%BD%A0%E8%B5%B6%E4%B8%8A%E4%BA%86%23) `117.2K 🔥` `NEW`
1. [张真源要唱在加纳共和国离婚 (Jang Jin-won wants to sing about divorce in the Republic of Ghana)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%9C%9F%E6%BA%90%E8%A6%81%E5%94%B1%E5%9C%A8%E5%8A%A0%E7%BA%B3%E5%85%B1%E5%92%8C%E5%9B%BD%E7%A6%BB%E5%A9%9A%23) `114.5K 🔥` `NEW`
1. [曝一加和realme合并](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E4%B8%80%E5%8A%A0%E5%92%8Crealme%E5%90%88%E5%B9%B6%23) `108.5K 🔥` `NEW`
1. [化疗胖了40斤付辛博也能一眼认出我](https://s.weibo.com/weibo?q=%23%E5%8C%96%E7%96%97%E8%83%96%E4%BA%8640%E6%96%A4%E4%BB%98%E8%BE%9B%E5%8D%9A%E4%B9%9F%E8%83%BD%E4%B8%80%E7%9C%BC%E8%AE%A4%E5%87%BA%E6%88%91%23) `98.6K 🔥` `NEW`
1. [男子借宿同学家致一死一伤案取消开庭 (The trial of a man who stayed at a classmate's house, killing one and injuring one, has been cancelled.)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%80%9F%E5%AE%BF%E5%90%8C%E5%AD%A6%E5%AE%B6%E8%87%B4%E4%B8%80%E6%AD%BB%E4%B8%80%E4%BC%A4%E6%A1%88%E5%8F%96%E6%B6%88%E5%BC%80%E5%BA%AD%23) `1.1M 🔥` `+56%`
1. [2026世界市长对话西安 (2026 World Mayors Dialogue in Xi’an)](https://s.weibo.com/weibo?q=%232026%E4%B8%96%E7%95%8C%E5%B8%82%E9%95%BF%E5%AF%B9%E8%AF%9D%E8%A5%BF%E5%AE%89%23) `682.7K 🔥` `+57%`
1. [孙杨向张豆豆挥拳的表情 (The expression of Sun Yang punching Zhang Doudou)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%9D%A8%E5%90%91%E5%BC%A0%E8%B1%86%E8%B1%86%E6%8C%A5%E6%8B%B3%E7%9A%84%E8%A1%A8%E6%83%85%23) `675.7K 🔥` `+83%`
1. [宇宙或仅剩约333亿年的寿命 (The universe may only have about 33.3 billion years left to live)](https://s.weibo.com/weibo?q=%23%E5%AE%87%E5%AE%99%E6%88%96%E4%BB%85%E5%89%A9%E7%BA%A6333%E4%BA%BF%E5%B9%B4%E7%9A%84%E5%AF%BF%E5%91%BD%23) `628.5K 🔥` `+48%`
1. [赵心童vs墨菲 (Zhao Xintong vs Murphy)](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E5%BF%83%E7%AB%A5vs%E5%A2%A8%E8%8F%B2%23) `605.6K 🔥` `+362%`
1. [电脑涨价20%市场人流空荡荡 (Computer prices increased by 20%, the market was empty)](https://s.weibo.com/weibo?q=%23%E7%94%B5%E8%84%91%E6%B6%A8%E4%BB%B720%25%E5%B8%82%E5%9C%BA%E4%BA%BA%E6%B5%81%E7%A9%BA%E8%8D%A1%E8%8D%A1%23) `552.8K 🔥` `+322%`
1. [这对儿带货CP要火](https://s.weibo.com/weibo?q=%23%E8%BF%99%E5%AF%B9%E5%84%BF%E5%B8%A6%E8%B4%A7CP%E8%A6%81%E7%81%AB%23) `530.1K 🔥` `+316%`
1. [金价](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%23) `482.7K 🔥` `+217%`
1. [老式水果为何消失了](https://s.weibo.com/weibo?q=%23%E8%80%81%E5%BC%8F%E6%B0%B4%E6%9E%9C%E4%B8%BA%E4%BD%95%E6%B6%88%E5%A4%B1%E4%BA%86%23) `465.5K 🔥` `+201%`
1. [谭松韵任嘉伦 二搭 (Tan Songyun and Ren Jialun second partner)](https://s.weibo.com/weibo?q=%23%E8%B0%AD%E6%9D%BE%E9%9F%B5%E4%BB%BB%E5%98%89%E4%BC%A6%20%E4%BA%8C%E6%90%AD%23) `387.7K 🔥` `+169%`
1. [油价又大涨了 (Oil prices have risen sharply again)](https://s.weibo.com/weibo?q=%23%E6%B2%B9%E4%BB%B7%E5%8F%88%E5%A4%A7%E6%B6%A8%E4%BA%86%23) `383.3K 🔥` `+157%`
1. [汤唯确认怀二胎 (Tang Wei confirms she is pregnant with second child)](https://s.weibo.com/weibo?q=%23%E6%B1%A4%E5%94%AF%E7%A1%AE%E8%AE%A4%E6%80%80%E4%BA%8C%E8%83%8E%23) `321.0K 🔥` `+95%`
1. [特朗普再次无视英王室规矩拍国王肩膀](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E5%86%8D%E6%AC%A1%E6%97%A0%E8%A7%86%E8%8B%B1%E7%8E%8B%E5%AE%A4%E8%A7%84%E7%9F%A9%E6%8B%8D%E5%9B%BD%E7%8E%8B%E8%82%A9%E8%86%80%23) `314.1K 🔥` `+129%`
1. [高铁上C座D座齐刷刷伸手 (On the high-speed rail, people on Blocks C and D all stretched out their hands.)](https://s.weibo.com/weibo?q=%23%E9%AB%98%E9%93%81%E4%B8%8AC%E5%BA%A7D%E5%BA%A7%E9%BD%90%E5%88%B7%E5%88%B7%E4%BC%B8%E6%89%8B%23) `296.6K 🔥` `+103%`
1. [婆婆一次性给足三年20万保姆费](https://s.weibo.com/weibo?q=%23%E5%A9%86%E5%A9%86%E4%B8%80%E6%AC%A1%E6%80%A7%E7%BB%99%E8%B6%B3%E4%B8%89%E5%B9%B420%E4%B8%87%E4%BF%9D%E5%A7%86%E8%B4%B9%23) `288.1K 🔥` `+110%`
1. [历届北京大学生电影节影帝影后](https://s.weibo.com/weibo?q=%23%E5%8E%86%E5%B1%8A%E5%8C%97%E4%BA%AC%E5%A4%A7%E5%AD%A6%E7%94%9F%E7%94%B5%E5%BD%B1%E8%8A%82%E5%BD%B1%E5%B8%9D%E5%BD%B1%E5%90%8E%23) `279.4K 🔥` `+98%`
1. [林子烨 下巴后缩 (Lin Ziye’s chin recedes)](https://s.weibo.com/weibo?q=%23%E6%9E%97%E5%AD%90%E7%83%A8%20%E4%B8%8B%E5%B7%B4%E5%90%8E%E7%BC%A9%23) `278.8K 🔥` `+113%`
1. [陈律求痞幼复合 (Chen Luqiu and the gangsters reunited)](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%BE%8B%E6%B1%82%E7%97%9E%E5%B9%BC%E5%A4%8D%E5%90%88%23) `256.6K 🔥` `+59%`
1. [女子洁癖严重结婚19年无法同房 (Woman with severe mysophobia cannot have sex after 19 years of marriage)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%B4%81%E7%99%96%E4%B8%A5%E9%87%8D%E7%BB%93%E5%A9%9A19%E5%B9%B4%E6%97%A0%E6%B3%95%E5%90%8C%E6%88%BF%23) `180.3K 🔥` `+38%`
1. [多读书真的会影响你的三观](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E8%AF%BB%E4%B9%A6%E7%9C%9F%E7%9A%84%E4%BC%9A%E5%BD%B1%E5%93%8D%E4%BD%A0%E7%9A%84%E4%B8%89%E8%A7%82%23) `443.2K 🔥`
1. [霍尔木兹海峡上演奇葩大戏 (A bizarre drama unfolds in the Strait of Hormuz)](https://s.weibo.com/weibo?q=%23%E9%9C%8D%E5%B0%94%E6%9C%A8%E5%85%B9%E6%B5%B7%E5%B3%A1%E4%B8%8A%E6%BC%94%E5%A5%87%E8%91%A9%E5%A4%A7%E6%88%8F%23) `309.7K 🔥`
1. [面试时就这样解释空窗期 (This is how you explain your window period during the interview)](https://s.weibo.com/weibo?q=%23%E9%9D%A2%E8%AF%95%E6%97%B6%E5%B0%B1%E8%BF%99%E6%A0%B7%E8%A7%A3%E9%87%8A%E7%A9%BA%E7%AA%97%E6%9C%9F%23) `277.0K 🔥`
1. [23岁中国女孩在澳被两女子打成重伤 (A 23-year-old Chinese girl was seriously injured by two women in Australia)](https://s.weibo.com/weibo?q=%2323%E5%B2%81%E4%B8%AD%E5%9B%BD%E5%A5%B3%E5%AD%A9%E5%9C%A8%E6%BE%B3%E8%A2%AB%E4%B8%A4%E5%A5%B3%E5%AD%90%E6%89%93%E6%88%90%E9%87%8D%E4%BC%A4%23) `124.8K 🔥`
1. [胖东来回应249元奢侈品毛巾](https://s.weibo.com/weibo?q=%23%E8%83%96%E4%B8%9C%E6%9D%A5%E5%9B%9E%E5%BA%94249%E5%85%83%E5%A5%A2%E4%BE%88%E5%93%81%E6%AF%9B%E5%B7%BE%23) `122.6K 🔥`
1. [日本民众为南京大屠杀流泪致歉](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E6%B0%91%E4%BC%97%E4%B8%BA%E5%8D%97%E4%BA%AC%E5%A4%A7%E5%B1%A0%E6%9D%80%E6%B5%81%E6%B3%AA%E8%87%B4%E6%AD%89%23) `122.5K 🔥`
1. [女子身份证不离身1000万存款被转走 (The woman’s 10 million deposit was transferred away without leaving her ID card)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E8%BA%AB%E4%BB%BD%E8%AF%81%E4%B8%8D%E7%A6%BB%E8%BA%AB1000%E4%B8%87%E5%AD%98%E6%AC%BE%E8%A2%AB%E8%BD%AC%E8%B5%B0%23) `343.1K 🔥` `-30%`
1. [瑶一瑶持续掉粉 (Yao Yiyao continues to lose fans)](https://s.weibo.com/weibo?q=%23%E7%91%B6%E4%B8%80%E7%91%B6%E6%8C%81%E7%BB%AD%E6%8E%89%E7%B2%89%23) `97.7K 🔥` `-36%`

Updated at 2026-04-30 08:08:35

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
