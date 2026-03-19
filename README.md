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

1. [原著谢征和长玉提了分手 (In the original work, Xie Zheng and Chang Yu broke up)](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E8%91%97%E8%B0%A2%E5%BE%81%E5%92%8C%E9%95%BF%E7%8E%89%E6%8F%90%E4%BA%86%E5%88%86%E6%89%8B%23) `127.4K 🔥` `NEW`
1. [巴西女子嫁给布娃娃还连生4子](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E8%A5%BF%E5%A5%B3%E5%AD%90%E5%AB%81%E7%BB%99%E5%B8%83%E5%A8%83%E5%A8%83%E8%BF%98%E8%BF%9E%E7%94%9F4%E5%AD%90%23) `102.6K 🔥` `NEW`
1. [二月二](https://s.weibo.com/weibo?q=%23%E4%BA%8C%E6%9C%88%E4%BA%8C%23) `83.5K 🔥` `NEW`
1. [伊朗首次使用升级版导弹](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E9%A6%96%E6%AC%A1%E4%BD%BF%E7%94%A8%E5%8D%87%E7%BA%A7%E7%89%88%E5%AF%BC%E5%BC%B9%23) `54.8K 🔥` `NEW`
1. [哈莫尼黄金跌超6%](https://s.weibo.com/weibo?q=%23%E5%93%88%E8%8E%AB%E5%B0%BC%E9%BB%84%E9%87%91%E8%B7%8C%E8%B6%856%25%23) `51.4K 🔥` `NEW`
1. [CENESE全球品牌代言人虞书欣 (CENESE global brand spokesperson Yu Shuxin)](https://s.weibo.com/weibo?q=%23CENESE%E5%85%A8%E7%90%83%E5%93%81%E7%89%8C%E4%BB%A3%E8%A8%80%E4%BA%BA%E8%99%9E%E4%B9%A6%E6%AC%A3%23) `126.7K 🔥` `+50%`
1. [伊朗称击中美军F35战机](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E7%A7%B0%E5%87%BB%E4%B8%AD%E7%BE%8E%E5%86%9BF35%E6%88%98%E6%9C%BA%23) `126.6K 🔥` `+27%`
1. [小米汽车](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E6%B1%BD%E8%BD%A6%23) `125.9K 🔥` `+35%`
1. [以方暂停空袭伊朗能源设施](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E6%96%B9%E6%9A%82%E5%81%9C%E7%A9%BA%E8%A2%AD%E4%BC%8A%E6%9C%97%E8%83%BD%E6%BA%90%E8%AE%BE%E6%96%BD%23) `107.5K 🔥` `+24%`
1. [女子玩笑称买5000克黄金当存钱 (Woman joked that she bought 5,000 grams of gold to save money)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E7%8E%A9%E7%AC%91%E7%A7%B0%E4%B9%B05000%E5%85%8B%E9%BB%84%E9%87%91%E5%BD%93%E5%AD%98%E9%92%B1%23) `106.9K 🔥` `+24%`
1. [GEN的对手是BLG](https://s.weibo.com/weibo?q=%23GEN%E7%9A%84%E5%AF%B9%E6%89%8B%E6%98%AFBLG%23) `106.5K 🔥` `+46%`
1. [王格格 奔跑吧14 (Wang Gege Run 14)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A0%BC%E6%A0%BC%20%E5%A5%94%E8%B7%91%E5%90%A714%23) `90.6K 🔥` `+25%`
1. [樊长玉被众人排斥](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E9%95%BF%E7%8E%89%E8%A2%AB%E4%BC%97%E4%BA%BA%E6%8E%92%E6%96%A5%23) `64.2K 🔥` `+28%`
1. [7年前买的泡泡玛特盲盒才发货 (The Bubble Mart blind box I bought 7 years ago was just shipped.)](https://s.weibo.com/weibo?q=%237%E5%B9%B4%E5%89%8D%E4%B9%B0%E7%9A%84%E6%B3%A1%E6%B3%A1%E7%8E%9B%E7%89%B9%E7%9B%B2%E7%9B%92%E6%89%8D%E5%8F%91%E8%B4%A7%23) `1.0M 🔥`
1. [雷军感谢王兴兴给了投资宇树的机会 (Lei Jun thanked Wang Xingxing for giving him the opportunity to invest in Yushu)](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E5%86%9B%E6%84%9F%E8%B0%A2%E7%8E%8B%E5%85%B4%E5%85%B4%E7%BB%99%E4%BA%86%E6%8A%95%E8%B5%84%E5%AE%87%E6%A0%91%E7%9A%84%E6%9C%BA%E4%BC%9A%23) `771.9K 🔥`
1. [十五五规划纲要撰写的幕后 (Behind the scenes of writing the outline of the 15th Five-Year Plan)](https://s.weibo.com/weibo?q=%23%E5%8D%81%E4%BA%94%E4%BA%94%E8%A7%84%E5%88%92%E7%BA%B2%E8%A6%81%E6%92%B0%E5%86%99%E7%9A%84%E5%B9%95%E5%90%8E%23) `589.3K 🔥`
1. [春分 (spring equinox)](https://s.weibo.com/weibo?q=%23%E6%98%A5%E5%88%86%23) `139.7K 🔥`
1. [日本劫掠中国文物数量惊人 (Japan looted an alarming amount of Chinese cultural relics)](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E5%8A%AB%E6%8E%A0%E4%B8%AD%E5%9B%BD%E6%96%87%E7%89%A9%E6%95%B0%E9%87%8F%E6%83%8A%E4%BA%BA%23) `128.3K 🔥`
1. [神秘人花7500元预存500碗面 (A mysterious man spent 7,500 yuan to reserve 500 bowls of noodles)](https://s.weibo.com/weibo?q=%23%E7%A5%9E%E7%A7%98%E4%BA%BA%E8%8A%B17500%E5%85%83%E9%A2%84%E5%AD%98500%E7%A2%97%E9%9D%A2%23) `121.9K 🔥`
1. [奔跑吧14 (Run 14)](https://s.weibo.com/weibo?q=%23%E5%A5%94%E8%B7%91%E5%90%A714%23) `109.7K 🔥`
1. [特朗普见高市早苗提偷袭珍珠港](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E8%A7%81%E9%AB%98%E5%B8%82%E6%97%A9%E8%8B%97%E6%8F%90%E5%81%B7%E8%A2%AD%E7%8F%8D%E7%8F%A0%E6%B8%AF%23) `109.5K 🔥`
1. [女高管疑因在办公室偷吃被开除](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E9%AB%98%E7%AE%A1%E7%96%91%E5%9B%A0%E5%9C%A8%E5%8A%9E%E5%85%AC%E5%AE%A4%E5%81%B7%E5%90%83%E8%A2%AB%E5%BC%80%E9%99%A4%23) `109.4K 🔥`
1. [一觉醒来黄金挂坠亏了2000元](https://s.weibo.com/weibo?q=%23%E4%B8%80%E8%A7%89%E9%86%92%E6%9D%A5%E9%BB%84%E9%87%91%E6%8C%82%E5%9D%A0%E4%BA%8F%E4%BA%862000%E5%85%83%23) `109.2K 🔥`
1. [月经弄脏卧铺遭索赔女子称很愧疚](https://s.weibo.com/weibo?q=%23%E6%9C%88%E7%BB%8F%E5%BC%84%E8%84%8F%E5%8D%A7%E9%93%BA%E9%81%AD%E7%B4%A2%E8%B5%94%E5%A5%B3%E5%AD%90%E7%A7%B0%E5%BE%88%E6%84%A7%E7%96%9A%23) `109.0K 🔥`
1. [金价暴跌抄底7天越买越套 (The gold price plummeted and the bottom was bought for 7 days. The more you bought, the more you bought.)](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E6%9A%B4%E8%B7%8C%E6%8A%84%E5%BA%957%E5%A4%A9%E8%B6%8A%E4%B9%B0%E8%B6%8A%E5%A5%97%23) `108.8K 🔥`
1. [瞿颖香奈儿老了还是香奈儿 (Qu Ying Chanel is still Chanel when she gets old)](https://s.weibo.com/weibo?q=%23%E7%9E%BF%E9%A2%96%E9%A6%99%E5%A5%88%E5%84%BF%E8%80%81%E4%BA%86%E8%BF%98%E6%98%AF%E9%A6%99%E5%A5%88%E5%84%BF%23) `108.6K 🔥`
1. [小S复工后首期节目惊现惊喜嘉宾](https://s.weibo.com/weibo?q=%23%E5%B0%8FS%E5%A4%8D%E5%B7%A5%E5%90%8E%E9%A6%96%E6%9C%9F%E8%8A%82%E7%9B%AE%E6%83%8A%E7%8E%B0%E6%83%8A%E5%96%9C%E5%98%89%E5%AE%BE%23) `108.4K 🔥`
1. [被路虎别停8次男子个人信息疑泄露 (Man’s personal information suspected to have been leaked after being stopped by Land Rover 8 times)](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E8%B7%AF%E8%99%8E%E5%88%AB%E5%81%9C8%E6%AC%A1%E7%94%B7%E5%AD%90%E4%B8%AA%E4%BA%BA%E4%BF%A1%E6%81%AF%E7%96%91%E6%B3%84%E9%9C%B2%23) `108.3K 🔥`
1. [主人回应7只被偷小狗结伴逃回家 (Owner responds after 7 stolen puppies escaped home together)](https://s.weibo.com/weibo?q=%23%E4%B8%BB%E4%BA%BA%E5%9B%9E%E5%BA%947%E5%8F%AA%E8%A2%AB%E5%81%B7%E5%B0%8F%E7%8B%97%E7%BB%93%E4%BC%B4%E9%80%83%E5%9B%9E%E5%AE%B6%23) `108.0K 🔥`
1. [胡先煦秒删博 (Hu Xianxu deleted his blog instantly)](https://s.weibo.com/weibo?q=%23%E8%83%A1%E5%85%88%E7%85%A6%E7%A7%92%E5%88%A0%E5%8D%9A%23) `107.9K 🔥`
1. [伊朗导弹击中以色列海法炼油厂 (Iranian missile hits Israeli oil refinery in Haifa)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%AF%BC%E5%BC%B9%E5%87%BB%E4%B8%AD%E4%BB%A5%E8%89%B2%E5%88%97%E6%B5%B7%E6%B3%95%E7%82%BC%E6%B2%B9%E5%8E%82%23) `107.8K 🔥`
1. [美国女教师用蛋糕引诱性侵学生](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E5%A5%B3%E6%95%99%E5%B8%88%E7%94%A8%E8%9B%8B%E7%B3%95%E5%BC%95%E8%AF%B1%E6%80%A7%E4%BE%B5%E5%AD%A6%E7%94%9F%23) `107.7K 🔥`
1. [金银暴跌原因找到了](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%93%B6%E6%9A%B4%E8%B7%8C%E5%8E%9F%E5%9B%A0%E6%89%BE%E5%88%B0%E4%BA%86%23) `107.4K 🔥`
1. [台湾发生双尸案](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E6%B9%BE%E5%8F%91%E7%94%9F%E5%8F%8C%E5%B0%B8%E6%A1%88%23) `107.1K 🔥`
1. [中方对以方说法感到震惊](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%96%B9%E5%AF%B9%E4%BB%A5%E6%96%B9%E8%AF%B4%E6%B3%95%E6%84%9F%E5%88%B0%E9%9C%87%E6%83%8A%23) `106.8K 🔥`
1. [春分遇到龙抬头 (The dragon raises its head when encountering the spring equinox)](https://s.weibo.com/weibo?q=%23%E6%98%A5%E5%88%86%E9%81%87%E5%88%B0%E9%BE%99%E6%8A%AC%E5%A4%B4%23) `106.6K 🔥`
1. [伊朗称打击命中美第五舰队 (Iran says strike hits US 5th Fleet)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E7%A7%B0%E6%89%93%E5%87%BB%E5%91%BD%E4%B8%AD%E7%BE%8E%E7%AC%AC%E4%BA%94%E8%88%B0%E9%98%9F%23) `102.2K 🔥`
1. [逐玉31集经纪人最爱的一集 (Zhuyu Episode 31: The Agent’s Favorite Episode)](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%8931%E9%9B%86%E7%BB%8F%E7%BA%AA%E4%BA%BA%E6%9C%80%E7%88%B1%E7%9A%84%E4%B8%80%E9%9B%86%23) `92.5K 🔥`
1. [山姆回应三文鱼标注加热却被生食 (Sam responded to salmon being labeled as heated but eaten raw)](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E5%A7%86%E5%9B%9E%E5%BA%94%E4%B8%89%E6%96%87%E9%B1%BC%E6%A0%87%E6%B3%A8%E5%8A%A0%E7%83%AD%E5%8D%B4%E8%A2%AB%E7%94%9F%E9%A3%9F%23) `89.6K 🔥`
1. [黄金瀑布式跳水](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%E7%80%91%E5%B8%83%E5%BC%8F%E8%B7%B3%E6%B0%B4%23) `78.6K 🔥`
1. [小米新SU7起售价21.99万元 (Xiaomi’s new SU7 starts at 219,900 yuan)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E6%96%B0SU7%E8%B5%B7%E5%94%AE%E4%BB%B721.99%E4%B8%87%E5%85%83%23) `64.3K 🔥`
1. [父亲回应儿子北大毕业送外卖 (Father responds to son delivering food after graduating from Peking University)](https://s.weibo.com/weibo?q=%23%E7%88%B6%E4%BA%B2%E5%9B%9E%E5%BA%94%E5%84%BF%E5%AD%90%E5%8C%97%E5%A4%A7%E6%AF%95%E4%B8%9A%E9%80%81%E5%A4%96%E5%8D%96%23) `62.2K 🔥`
1. [小米笔记本 (Xiaomi Notebook)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E7%AC%94%E8%AE%B0%E6%9C%AC%23) `60.0K 🔥`
1. [鞠婧祎爱吃白开水泡饭 (Ju Jingyi likes to eat rice soaked in boiled water)](https://s.weibo.com/weibo?q=%23%E9%9E%A0%E5%A9%A7%E7%A5%8E%E7%88%B1%E5%90%83%E7%99%BD%E5%BC%80%E6%B0%B4%E6%B3%A1%E9%A5%AD%23) `57.7K 🔥`
1. [金价跌到看不懂 (The price of gold has fallen so low that I can’t understand)](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E8%B7%8C%E5%88%B0%E7%9C%8B%E4%B8%8D%E6%87%82%23) `53.6K 🔥`
1. [宝诗龙上海全明星阵容 (Boucheron Shanghai All-Star Lineup)](https://s.weibo.com/weibo?q=%23%E5%AE%9D%E8%AF%97%E9%BE%99%E4%B8%8A%E6%B5%B7%E5%85%A8%E6%98%8E%E6%98%9F%E9%98%B5%E5%AE%B9%23) `53.1K 🔥`
1. [逐玉 (Zhuyu)](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%23) `52.0K 🔥`
1. [JDG战胜LOUD](https://s.weibo.com/weibo?q=%23JDG%E6%88%98%E8%83%9CLOUD%23) `51.7K 🔥`
1. [樊长玉一句侯爷把谢征叫破防了 (Fan Changyu said that the Marquis called Xie Zheng to break the defense)](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E9%95%BF%E7%8E%89%E4%B8%80%E5%8F%A5%E4%BE%AF%E7%88%B7%E6%8A%8A%E8%B0%A2%E5%BE%81%E5%8F%AB%E7%A0%B4%E9%98%B2%E4%BA%86%23) `51.2K 🔥`
1. [网传奔跑吧14常驻嘉宾阵容 (Online news of running bar 14 permanent guest lineup)](https://s.weibo.com/weibo?q=%23%E7%BD%91%E4%BC%A0%E5%A5%94%E8%B7%91%E5%90%A714%E5%B8%B8%E9%A9%BB%E5%98%89%E5%AE%BE%E9%98%B5%E5%AE%B9%23) `46.7K 🔥`

Updated at 2026-03-20 07:59:38

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
