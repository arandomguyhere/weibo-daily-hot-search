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

1. [五哈6开播 (Wuha 6 starts broadcasting)](https://s.weibo.com/weibo?q=%23%E4%BA%94%E5%93%886%E5%BC%80%E6%92%AD%23) `793.3K 🔥` `NEW`
1. [张艺上 下次争取只美不崩溃](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E8%89%BA%E4%B8%8A%20%E4%B8%8B%E6%AC%A1%E4%BA%89%E5%8F%96%E5%8F%AA%E7%BE%8E%E4%B8%8D%E5%B4%A9%E6%BA%83%23) `214.7K 🔥` `NEW`
1. [易军怒斥张雪机车被无底线消费](https://s.weibo.com/weibo?q=%23%E6%98%93%E5%86%9B%E6%80%92%E6%96%A5%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%E8%A2%AB%E6%97%A0%E5%BA%95%E7%BA%BF%E6%B6%88%E8%B4%B9%23) `182.1K 🔥` `NEW`
1. [T1战胜HLE](https://s.weibo.com/weibo?q=%23T1%E6%88%98%E8%83%9CHLE%23) `180.3K 🔥` `NEW`
1. [赵子琪回应浪姐唯一人脉](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E5%AD%90%E7%90%AA%E5%9B%9E%E5%BA%94%E6%B5%AA%E5%A7%90%E5%94%AF%E4%B8%80%E4%BA%BA%E8%84%89%23) `166.7K 🔥` `NEW`
1. [陈幸同vs申裕斌](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%B9%B8%E5%90%8Cvs%E7%94%B3%E8%A3%95%E6%96%8C%23) `154.7K 🔥` `NEW`
1. [鞠婧祎露芜衣夕阳下跳舞](https://s.weibo.com/weibo?q=%23%E9%9E%A0%E5%A9%A7%E7%A5%8E%E9%9C%B2%E8%8A%9C%E8%A1%A3%E5%A4%95%E9%98%B3%E4%B8%8B%E8%B7%B3%E8%88%9E%23) `141.5K 🔥` `NEW`
1. [红果多部短剧AI角色撞脸易烊千玺](https://s.weibo.com/weibo?q=%23%E7%BA%A2%E6%9E%9C%E5%A4%9A%E9%83%A8%E7%9F%AD%E5%89%A7AI%E8%A7%92%E8%89%B2%E6%92%9E%E8%84%B8%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%23) `131.1K 🔥` `NEW`
1. [酒店员工提醒小孩别玩门家长报警](https://s.weibo.com/weibo?q=%23%E9%85%92%E5%BA%97%E5%91%98%E5%B7%A5%E6%8F%90%E9%86%92%E5%B0%8F%E5%AD%A9%E5%88%AB%E7%8E%A9%E9%97%A8%E5%AE%B6%E9%95%BF%E6%8A%A5%E8%AD%A6%23) `127.4K 🔥` `NEW`
1. [陈都灵雾妄言角色热度破亿](https://s.weibo.com/weibo?q=%23%E9%99%88%E9%83%BD%E7%81%B5%E9%9B%BE%E5%A6%84%E8%A8%80%E8%A7%92%E8%89%B2%E7%83%AD%E5%BA%A6%E7%A0%B4%E4%BA%BF%23) `109.5K 🔥` `NEW`
1. [广东仅珠海仍全域禁止电动自行车 (Only Zhuhai in Guangdong still bans electric bicycles)](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E4%B8%9C%E4%BB%85%E7%8F%A0%E6%B5%B7%E4%BB%8D%E5%85%A8%E5%9F%9F%E7%A6%81%E6%AD%A2%E7%94%B5%E5%8A%A8%E8%87%AA%E8%A1%8C%E8%BD%A6%23) `108.1K 🔥` `NEW`
1. [许昕说孙颖莎赢得侥幸](https://s.weibo.com/weibo?q=%23%E8%AE%B8%E6%98%95%E8%AF%B4%E5%AD%99%E9%A2%96%E8%8E%8E%E8%B5%A2%E5%BE%97%E4%BE%A5%E5%B9%B8%23) `99.3K 🔥` `NEW`
1. [汉娜高达看孙颖莎200多场比赛录像](https://s.weibo.com/weibo?q=%23%E6%B1%89%E5%A8%9C%E9%AB%98%E8%BE%BE%E7%9C%8B%E5%AD%99%E9%A2%96%E8%8E%8E200%E5%A4%9A%E5%9C%BA%E6%AF%94%E8%B5%9B%E5%BD%95%E5%83%8F%23) `92.8K 🔥` `NEW`
1. [曝iPhone18标准版设计没变](https://s.weibo.com/weibo?q=%23%E6%9B%9DiPhone18%E6%A0%87%E5%87%86%E7%89%88%E8%AE%BE%E8%AE%A1%E6%B2%A1%E5%8F%98%23) `76.5K 🔥` `NEW`
1. [檀健次卢昱晓片场好抽象](https://s.weibo.com/weibo?q=%23%E6%AA%80%E5%81%A5%E6%AC%A1%E5%8D%A2%E6%98%B1%E6%99%93%E7%89%87%E5%9C%BA%E5%A5%BD%E6%8A%BD%E8%B1%A1%23) `65.6K 🔥` `NEW`
1. [T.O.P新歌官方翻译歌词](https://s.weibo.com/weibo?q=%23T.O.P%E6%96%B0%E6%AD%8C%E5%AE%98%E6%96%B9%E7%BF%BB%E8%AF%91%E6%AD%8C%E8%AF%8D%23) `61.6K 🔥` `NEW`
1. [土耳其狂抛近120吨黄金](https://s.weibo.com/weibo?q=%23%E5%9C%9F%E8%80%B3%E5%85%B6%E7%8B%82%E6%8A%9B%E8%BF%91120%E5%90%A8%E9%BB%84%E9%87%91%23) `58.6K 🔥` `NEW`
1. [国企董事长上门打人最新进展](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%BC%81%E8%91%A3%E4%BA%8B%E9%95%BF%E4%B8%8A%E9%97%A8%E6%89%93%E4%BA%BA%E6%9C%80%E6%96%B0%E8%BF%9B%E5%B1%95%23) `57.7K 🔥` `NEW`
1. [莫雷加德无缘四强](https://s.weibo.com/weibo?q=%23%E8%8E%AB%E9%9B%B7%E5%8A%A0%E5%BE%B7%E6%97%A0%E7%BC%98%E5%9B%9B%E5%BC%BA%23) `56.9K 🔥` `NEW`
1. [高铁站禁烟仅1天男子当众吸烟被拍 (Only one day after smoking was banned at a high-speed rail station, a man was photographed smoking in public)](https://s.weibo.com/weibo?q=%23%E9%AB%98%E9%93%81%E7%AB%99%E7%A6%81%E7%83%9F%E4%BB%851%E5%A4%A9%E7%94%B7%E5%AD%90%E5%BD%93%E4%BC%97%E5%90%B8%E7%83%9F%E8%A2%AB%E6%8B%8D%23) `1.1M 🔥` `+34%`
1. [王传君和爱情公寓和解了](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BC%A0%E5%90%9B%E5%92%8C%E7%88%B1%E6%83%85%E5%85%AC%E5%AF%93%E5%92%8C%E8%A7%A3%E4%BA%86%23) `508.8K 🔥` `+371%`
1. [伊朗驻华大使馆发布战果 (The Iranian Embassy in China released the results of the battle)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E9%A9%BB%E5%8D%8E%E5%A4%A7%E4%BD%BF%E9%A6%86%E5%8F%91%E5%B8%83%E6%88%98%E6%9E%9C%23) `176.3K 🔥` `+151%`
1. [虞书欣签售会 (Yu Shuxin’s book signing)](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E7%AD%BE%E5%94%AE%E4%BC%9A%23) `174.8K 🔥` `+32%`
1. [何宣林回应是孟子义班主任](https://s.weibo.com/weibo?q=%23%E4%BD%95%E5%AE%A3%E6%9E%97%E5%9B%9E%E5%BA%94%E6%98%AF%E5%AD%9F%E5%AD%90%E4%B9%89%E7%8F%AD%E4%B8%BB%E4%BB%BB%23) `173.2K 🔥` `+30%`
1. [刘琳琳拍的虞书欣](https://s.weibo.com/weibo?q=%23%E5%88%98%E7%90%B3%E7%90%B3%E6%8B%8D%E7%9A%84%E8%99%9E%E4%B9%A6%E6%AC%A3%23) `140.0K 🔥` `+106%`
1. [虞书欣香水](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E9%A6%99%E6%B0%B4%23) `131.6K 🔥` `+22%`
1. [韩国男子将女友制成木乃伊藏尸 (South Korean man mummifies girlfriend and hides body)](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E7%94%B7%E5%AD%90%E5%B0%86%E5%A5%B3%E5%8F%8B%E5%88%B6%E6%88%90%E6%9C%A8%E4%B9%83%E4%BC%8A%E8%97%8F%E5%B0%B8%23) `105.7K 🔥` `+22%`
1. [无人继承的巨额遗产或在拖垮日本](https://s.weibo.com/weibo?q=%23%E6%97%A0%E4%BA%BA%E7%BB%A7%E6%89%BF%E7%9A%84%E5%B7%A8%E9%A2%9D%E9%81%97%E4%BA%A7%E6%88%96%E5%9C%A8%E6%8B%96%E5%9E%AE%E6%97%A5%E6%9C%AC%23) `105.4K 🔥` `+22%`
1. [文旅共绘诗与远方新画卷 (Culture and tourism jointly paint poems and new pictures of distant places)](https://s.weibo.com/weibo?q=%23%E6%96%87%E6%97%85%E5%85%B1%E7%BB%98%E8%AF%97%E4%B8%8E%E8%BF%9C%E6%96%B9%E6%96%B0%E7%94%BB%E5%8D%B7%23) `595.8K 🔥`
1. [逼出最强孙颖莎的高达才18岁](https://s.weibo.com/weibo?q=%23%E9%80%BC%E5%87%BA%E6%9C%80%E5%BC%BA%E5%AD%99%E9%A2%96%E8%8E%8E%E7%9A%84%E9%AB%98%E8%BE%BE%E6%89%8D18%E5%B2%81%23) `145.0K 🔥`
1. [1099元内衣外穿年轻人买单吗](https://s.weibo.com/weibo?q=%231099%E5%85%83%E5%86%85%E8%A1%A3%E5%A4%96%E7%A9%BF%E5%B9%B4%E8%BD%BB%E4%BA%BA%E4%B9%B0%E5%8D%95%E5%90%97%23) `144.9K 🔥`
1. [汉娜高达创造历史](https://s.weibo.com/weibo?q=%23%E6%B1%89%E5%A8%9C%E9%AB%98%E8%BE%BE%E5%88%9B%E9%80%A0%E5%8E%86%E5%8F%B2%23) `132.6K 🔥`
1. [印度女子好心给水喝反遭强奸](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%BA%A6%E5%A5%B3%E5%AD%90%E5%A5%BD%E5%BF%83%E7%BB%99%E6%B0%B4%E5%96%9D%E5%8F%8D%E9%81%AD%E5%BC%BA%E5%A5%B8%23) `130.4K 🔥`
1. [刘耀文举宋亚轩路透](https://s.weibo.com/weibo?q=%23%E5%88%98%E8%80%80%E6%96%87%E4%B8%BE%E5%AE%8B%E4%BA%9A%E8%BD%A9%E8%B7%AF%E9%80%8F%23) `125.7K 🔥`
1. [解决了辣条的油腻和减脂餐的清淡 (Solve the greasiness of spicy strips and the blandness of fat-reducing meals)](https://s.weibo.com/weibo?q=%23%E8%A7%A3%E5%86%B3%E4%BA%86%E8%BE%A3%E6%9D%A1%E7%9A%84%E6%B2%B9%E8%85%BB%E5%92%8C%E5%87%8F%E8%84%82%E9%A4%90%E7%9A%84%E6%B8%85%E6%B7%A1%23) `104.2K 🔥`
1. [黄磊12岁二女儿身高 (The height of Huang Lei's 12-year-old second daughter)](https://s.weibo.com/weibo?q=%23%E9%BB%84%E7%A3%8A12%E5%B2%81%E4%BA%8C%E5%A5%B3%E5%84%BF%E8%BA%AB%E9%AB%98%23) `85.6K 🔥`
1. [JackeyLove零击杀 (JackeyLove zero kills)](https://s.weibo.com/weibo?q=%23JackeyLove%E9%9B%B6%E5%87%BB%E6%9D%80%23) `75.5K 🔥`
1. [午睡时间超1小时死亡风险增加30%](https://s.weibo.com/weibo?q=%23%E5%8D%88%E7%9D%A1%E6%97%B6%E9%97%B4%E8%B6%851%E5%B0%8F%E6%97%B6%E6%AD%BB%E4%BA%A1%E9%A3%8E%E9%99%A9%E5%A2%9E%E5%8A%A030%25%23) `72.0K 🔥`
1. [TOP演唱会首次公开销量](https://s.weibo.com/weibo?q=%23TOP%E6%BC%94%E5%94%B1%E4%BC%9A%E9%A6%96%E6%AC%A1%E5%85%AC%E5%BC%80%E9%94%80%E9%87%8F%23) `61.4K 🔥`
1. [莫氏鸡煲老板娘直呼生无可恋](https://s.weibo.com/weibo?q=%23%E8%8E%AB%E6%B0%8F%E9%B8%A1%E7%85%B2%E8%80%81%E6%9D%BF%E5%A8%98%E7%9B%B4%E5%91%BC%E7%94%9F%E6%97%A0%E5%8F%AF%E6%81%8B%23) `219.0K 🔥` `-36%`
1. [埃及一航班行李全部丢失](https://s.weibo.com/weibo?q=%23%E5%9F%83%E5%8F%8A%E4%B8%80%E8%88%AA%E7%8F%AD%E8%A1%8C%E6%9D%8E%E5%85%A8%E9%83%A8%E4%B8%A2%E5%A4%B1%23) `200.8K 🔥` `-28%`
1. [爆火鸡煲店老板称用的冰冻鸡 (The owner of the fried turkey pot shop claims that he uses frozen chicken)](https://s.weibo.com/weibo?q=%23%E7%88%86%E7%81%AB%E9%B8%A1%E7%85%B2%E5%BA%97%E8%80%81%E6%9D%BF%E7%A7%B0%E7%94%A8%E7%9A%84%E5%86%B0%E5%86%BB%E9%B8%A1%23) `186.2K 🔥` `-43%`
1. [白日提灯反派骂女主台词](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%97%A5%E6%8F%90%E7%81%AF%E5%8F%8D%E6%B4%BE%E9%AA%82%E5%A5%B3%E4%B8%BB%E5%8F%B0%E8%AF%8D%23) `178.2K 🔥` `-84%`
1. [狗 爷爷这么做一定有他的道理](https://s.weibo.com/weibo?q=%23%E7%8B%97%20%E7%88%B7%E7%88%B7%E8%BF%99%E4%B9%88%E5%81%9A%E4%B8%80%E5%AE%9A%E6%9C%89%E4%BB%96%E7%9A%84%E9%81%93%E7%90%86%23) `172.2K 🔥` `-35%`
1. [嫌顾客消费86元太少商家被处罚](https://s.weibo.com/weibo?q=%23%E5%AB%8C%E9%A1%BE%E5%AE%A2%E6%B6%88%E8%B4%B986%E5%85%83%E5%A4%AA%E5%B0%91%E5%95%86%E5%AE%B6%E8%A2%AB%E5%A4%84%E7%BD%9A%23) `93.7K 🔥` `-21%`
1. [iG战胜TES](https://s.weibo.com/weibo?q=%23iG%E6%88%98%E8%83%9CTES%23) `90.9K 🔥` `-44%`
1. [杨紫看了黄灿灿初舞台](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E7%9C%8B%E4%BA%86%E9%BB%84%E7%81%BF%E7%81%BF%E5%88%9D%E8%88%9E%E5%8F%B0%23) `82.5K 🔥` `-35%`
1. [范玮琪希望网友不要被舆论带偏 (Fan Weiqi hopes netizens will not be led astray by public opinion)](https://s.weibo.com/weibo?q=%23%E8%8C%83%E7%8E%AE%E7%90%AA%E5%B8%8C%E6%9C%9B%E7%BD%91%E5%8F%8B%E4%B8%8D%E8%A6%81%E8%A2%AB%E8%88%86%E8%AE%BA%E5%B8%A6%E5%81%8F%23) `76.1K 🔥` `-26%`
1. [十日终焉](https://s.weibo.com/weibo?q=%23%E5%8D%81%E6%97%A5%E7%BB%88%E7%84%89%23) `75.3K 🔥` `-40%`
1. [T1迎战HLE](https://s.weibo.com/weibo?q=%23T1%E8%BF%8E%E6%88%98HLE%23) `64.7K 🔥` `-40%`

Updated at 2026-04-04 18:51:12

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
