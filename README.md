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

1. [法国vs瑞典太精彩了 (France vs Sweden is so exciting)](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%9B%BDvs%E7%91%9E%E5%85%B8%E5%A4%AA%E7%B2%BE%E5%BD%A9%E4%BA%86%23) `898.0K 🔥` `NEW`
1. [姆巴佩破门](https://s.weibo.com/weibo?q=%23%E5%A7%86%E5%B7%B4%E4%BD%A9%E7%A0%B4%E9%97%A8%23) `598.8K 🔥` `NEW`
1. [吉尼斯辟谣世界最年长陆龟去世](https://s.weibo.com/weibo?q=%23%E5%90%89%E5%B0%BC%E6%96%AF%E8%BE%9F%E8%B0%A3%E4%B8%96%E7%95%8C%E6%9C%80%E5%B9%B4%E9%95%BF%E9%99%86%E9%BE%9F%E5%8E%BB%E4%B8%96%23) `484.1K 🔥` `NEW`
1. [法国3比0瑞典](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%9B%BD3%E6%AF%940%E7%91%9E%E5%85%B8%23) `365.9K 🔥` `NEW`
1. [姆巴佩梅开二度](https://s.weibo.com/weibo?q=%23%E5%A7%86%E5%B7%B4%E4%BD%A9%E6%A2%85%E5%BC%80%E4%BA%8C%E5%BA%A6%23) `312.4K 🔥` `NEW`
1. [瑞典最佳门将 门柱](https://s.weibo.com/weibo?q=%23%E7%91%9E%E5%85%B8%E6%9C%80%E4%BD%B3%E9%97%A8%E5%B0%86%20%E9%97%A8%E6%9F%B1%23) `193.7K 🔥` `NEW`
1. [SK海力士申请上市](https://s.weibo.com/weibo?q=%23SK%E6%B5%B7%E5%8A%9B%E5%A3%AB%E7%94%B3%E8%AF%B7%E4%B8%8A%E5%B8%82%23) `182.6K 🔥` `NEW`
1. [奥利塞 传球艺术家](https://s.weibo.com/weibo?q=%23%E5%A5%A5%E5%88%A9%E5%A1%9E%20%E4%BC%A0%E7%90%83%E8%89%BA%E6%9C%AF%E5%AE%B6%23) `170.7K 🔥` `NEW`
1. [海信空调法国暴涨100%](https://s.weibo.com/weibo?q=%23%E6%B5%B7%E4%BF%A1%E7%A9%BA%E8%B0%83%E6%B3%95%E5%9B%BD%E6%9A%B4%E6%B6%A8100%25%23) `155.1K 🔥` `NEW`
1. [姆巴佩世界杯18场18球](https://s.weibo.com/weibo?q=%23%E5%A7%86%E5%B7%B4%E4%BD%A9%E4%B8%96%E7%95%8C%E6%9D%AF18%E5%9C%BA18%E7%90%83%23) `154.2K 🔥` `NEW`
1. [法国超跑 (French supercar)](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%9B%BD%E8%B6%85%E8%B7%91%23) `153.9K 🔥` `NEW`
1. [上半年A股涨幅王](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E5%8D%8A%E5%B9%B4A%E8%82%A1%E6%B6%A8%E5%B9%85%E7%8E%8B%23) `153.5K 🔥` `NEW`
1. [哈兰德绝杀破门 (Haaland scores a stunning goal)](https://s.weibo.com/weibo?q=%23%E5%93%88%E5%85%B0%E5%BE%B7%E7%BB%9D%E6%9D%80%E7%A0%B4%E9%97%A8%23) `2.0M 🔥` `+101%`
1. [法国vs瑞典 (France vs Sweden)](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%9B%BDvs%E7%91%9E%E5%85%B8%23) `1.1M 🔥` `+133%`
1. [7月起一批重要法律法规将施行](https://s.weibo.com/weibo?q=%237%E6%9C%88%E8%B5%B7%E4%B8%80%E6%89%B9%E9%87%8D%E8%A6%81%E6%B3%95%E5%BE%8B%E6%B3%95%E8%A7%84%E5%B0%86%E6%96%BD%E8%A1%8C%23) `910.1K 🔥` `+318%`
1. [詹姆斯确定离开湖人 (James confirms leaving Lakers)](https://s.weibo.com/weibo?q=%23%E8%A9%B9%E5%A7%86%E6%96%AF%E7%A1%AE%E5%AE%9A%E7%A6%BB%E5%BC%80%E6%B9%96%E4%BA%BA%23) `562.5K 🔥` `+238%`
1. [张凌赫我连心疼你都有时差](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E6%88%91%E8%BF%9E%E5%BF%83%E7%96%BC%E4%BD%A0%E9%83%BD%E6%9C%89%E6%97%B6%E5%B7%AE%23) `392.0K 🔥` `+187%`
1. [詹姆斯](https://s.weibo.com/weibo?q=%23%E8%A9%B9%E5%A7%86%E6%96%AF%23) `337.3K 🔥` `+185%`
1. [白鹿演蚌精vs虞书欣演蚌精 (Bailu plays the role of the clam spirit vs Yu Shuxin plays the role of the clam spirit)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E6%BC%94%E8%9A%8C%E7%B2%BEvs%E8%99%9E%E4%B9%A6%E6%AC%A3%E6%BC%94%E8%9A%8C%E7%B2%BE%23) `318.6K 🔥` `+569%`
1. [医院护工九年劝你别太心疼爹妈](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E9%99%A2%E6%8A%A4%E5%B7%A5%E4%B9%9D%E5%B9%B4%E5%8A%9D%E4%BD%A0%E5%88%AB%E5%A4%AA%E5%BF%83%E7%96%BC%E7%88%B9%E5%A6%88%23) `314.9K 🔥` `+250%`
1. [暑假工才是真正的315](https://s.weibo.com/weibo?q=%23%E6%9A%91%E5%81%87%E5%B7%A5%E6%89%8D%E6%98%AF%E7%9C%9F%E6%AD%A3%E7%9A%84315%23) `303.1K 🔥` `+231%`
1. [大爷静脉曲张十几年取出40厘米血栓 (Uncle had varicose veins and removed 40cm of blood clot for more than ten years)](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E7%88%B7%E9%9D%99%E8%84%89%E6%9B%B2%E5%BC%A0%E5%8D%81%E5%87%A0%E5%B9%B4%E5%8F%96%E5%87%BA40%E5%8E%98%E7%B1%B3%E8%A1%80%E6%A0%93%23) `211.8K 🔥` `+45%`
1. [姆巴佩单刀进球被吹](https://s.weibo.com/weibo?q=%23%E5%A7%86%E5%B7%B4%E4%BD%A9%E5%8D%95%E5%88%80%E8%BF%9B%E7%90%83%E8%A2%AB%E5%90%B9%23) `201.0K 🔥` `+73%`
1. [科特迪瓦1比2挪威](https://s.weibo.com/weibo?q=%23%E7%A7%91%E7%89%B9%E8%BF%AA%E7%93%A61%E6%AF%942%E6%8C%AA%E5%A8%81%23) `189.7K 🔥` `+163%`
1. [男生4年练一个字体高考英语147分](https://s.weibo.com/weibo?q=%23%E7%94%B7%E7%94%9F4%E5%B9%B4%E7%BB%83%E4%B8%80%E4%B8%AA%E5%AD%97%E4%BD%93%E9%AB%98%E8%80%83%E8%8B%B1%E8%AF%AD147%E5%88%86%23) `184.0K 🔥` `+429%`
1. [南部档案 (southern archives)](https://s.weibo.com/weibo?q=%23%E5%8D%97%E9%83%A8%E6%A1%A3%E6%A1%88%23) `182.8K 🔥` `+279%`
1. [恋与深空连续3天发文道歉](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%E8%BF%9E%E7%BB%AD3%E5%A4%A9%E5%8F%91%E6%96%87%E9%81%93%E6%AD%89%23) `182.6K 🔥` `+312%`
1. [恋与深空敖尹物料仍未下架](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%E6%95%96%E5%B0%B9%E7%89%A9%E6%96%99%E4%BB%8D%E6%9C%AA%E4%B8%8B%E6%9E%B6%23) `169.2K 🔥` `+296%`
1. [多囊卵巢综合征正式更名 (Polycystic ovary syndrome officially changes its name)](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E5%9B%8A%E5%8D%B5%E5%B7%A2%E7%BB%BC%E5%90%88%E5%BE%81%E6%AD%A3%E5%BC%8F%E6%9B%B4%E5%90%8D%23) `157.1K 🔥` `+170%`
1. [挪威门将立大功](https://s.weibo.com/weibo?q=%23%E6%8C%AA%E5%A8%81%E9%97%A8%E5%B0%86%E7%AB%8B%E5%A4%A7%E5%8A%9F%23) `155.3K 🔥` `+38%`
1. [张家界玻璃桥印度游客堵塞栈道 (Zhangjiajie Glass Bridge Indian tourists block the plank road)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%AE%B6%E7%95%8C%E7%8E%BB%E7%92%83%E6%A1%A5%E5%8D%B0%E5%BA%A6%E6%B8%B8%E5%AE%A2%E5%A0%B5%E5%A1%9E%E6%A0%88%E9%81%93%23) `155.3K 🔥` `+264%`
1. [张凌赫遗传了父母最精华的部分](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E9%81%97%E4%BC%A0%E4%BA%86%E7%88%B6%E6%AF%8D%E6%9C%80%E7%B2%BE%E5%8D%8E%E7%9A%84%E9%83%A8%E5%88%86%23) `155.2K 🔥` `+376%`
1. [机器人概念暴涨原因](https://s.weibo.com/weibo?q=%23%E6%9C%BA%E5%99%A8%E4%BA%BA%E6%A6%82%E5%BF%B5%E6%9A%B4%E6%B6%A8%E5%8E%9F%E5%9B%A0%23) `155.2K 🔥` `+378%`
1. [金鹰奖最佳男主角参评名单公布](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%B9%B0%E5%A5%96%E6%9C%80%E4%BD%B3%E7%94%B7%E4%B8%BB%E8%A7%92%E5%8F%82%E8%AF%84%E5%90%8D%E5%8D%95%E5%85%AC%E5%B8%83%23) `155.0K 🔥` `+368%`
1. [科特迪瓦vs挪威](https://s.weibo.com/weibo?q=%23%E7%A7%91%E7%89%B9%E8%BF%AA%E7%93%A6vs%E6%8C%AA%E5%A8%81%23) `154.9K 🔥` `+213%`
1. [我有发现95%情侣都长得像](https://s.weibo.com/weibo?q=%23%E6%88%91%E6%9C%89%E5%8F%91%E7%8E%B095%25%E6%83%85%E4%BE%A3%E9%83%BD%E9%95%BF%E5%BE%97%E5%83%8F%23) `154.9K 🔥` `+245%`
1. [哈兰德头球](https://s.weibo.com/weibo?q=%23%E5%93%88%E5%85%B0%E5%BE%B7%E5%A4%B4%E7%90%83%23) `154.7K 🔥` `+92%`
1. [一个人好命是什么样子 (What does it look like for a person to have a good life?)](https://s.weibo.com/weibo?q=%23%E4%B8%80%E4%B8%AA%E4%BA%BA%E5%A5%BD%E5%91%BD%E6%98%AF%E4%BB%80%E4%B9%88%E6%A0%B7%E5%AD%90%23) `154.6K 🔥` `+290%`
1. [花33万捐了350套路灯全是假货 (I spent 330,000 to donate 350 sets of street lights, all of which were fake.)](https://s.weibo.com/weibo?q=%23%E8%8A%B133%E4%B8%87%E6%8D%90%E4%BA%86350%E5%A5%97%E8%B7%AF%E7%81%AF%E5%85%A8%E6%98%AF%E5%81%87%E8%B4%A7%23) `154.6K 🔥` `+341%`
1. [女乘务员悄悄拉走女生换车厢 (The female flight attendant quietly took the girl away to change carriages)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E4%B9%98%E5%8A%A1%E5%91%98%E6%82%84%E6%82%84%E6%8B%89%E8%B5%B0%E5%A5%B3%E7%94%9F%E6%8D%A2%E8%BD%A6%E5%8E%A2%23) `154.5K 🔥` `+370%`
1. [德国队已原地解散](https://s.weibo.com/weibo?q=%23%E5%BE%B7%E5%9B%BD%E9%98%9F%E5%B7%B2%E5%8E%9F%E5%9C%B0%E8%A7%A3%E6%95%A3%23) `154.4K 🔥` `+190%`
1. [十二星座7月月运](https://s.weibo.com/weibo?q=%23%E5%8D%81%E4%BA%8C%E6%98%9F%E5%BA%A77%E6%9C%88%E6%9C%88%E8%BF%90%23) `154.3K 🔥` `+310%`
1. [德国队多个球星不敢罚点球](https://s.weibo.com/weibo?q=%23%E5%BE%B7%E5%9B%BD%E9%98%9F%E5%A4%9A%E4%B8%AA%E7%90%83%E6%98%9F%E4%B8%8D%E6%95%A2%E7%BD%9A%E7%82%B9%E7%90%83%23) `154.3K 🔥` `+141%`
1. [医生与老外英文对话火了](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E7%94%9F%E4%B8%8E%E8%80%81%E5%A4%96%E8%8B%B1%E6%96%87%E5%AF%B9%E8%AF%9D%E7%81%AB%E4%BA%86%23) `154.1K 🔥` `+370%`
1. [乒乓球收视率远不及世界杯 (Table tennis ratings are far lower than those of the World Cup)](https://s.weibo.com/weibo?q=%23%E4%B9%92%E4%B9%93%E7%90%83%E6%94%B6%E8%A7%86%E7%8E%87%E8%BF%9C%E4%B8%8D%E5%8F%8A%E4%B8%96%E7%95%8C%E6%9D%AF%23) `154.1K 🔥` `+377%`
1. [黄多多首部电影重新立项 (Huang Duoduo's first film project re-established)](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%A4%9A%E5%A4%9A%E9%A6%96%E9%83%A8%E7%94%B5%E5%BD%B1%E9%87%8D%E6%96%B0%E7%AB%8B%E9%A1%B9%23) `153.7K 🔥` `+377%`
1. [39岁男子4年不管血糖心脏近乎报废](https://s.weibo.com/weibo?q=%2339%E5%B2%81%E7%94%B7%E5%AD%904%E5%B9%B4%E4%B8%8D%E7%AE%A1%E8%A1%80%E7%B3%96%E5%BF%83%E8%84%8F%E8%BF%91%E4%B9%8E%E6%8A%A5%E5%BA%9F%23) `153.7K 🔥` `+369%`
1. [苹果清除iPhone18Pro泄露素材](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C%E6%B8%85%E9%99%A4iPhone18Pro%E6%B3%84%E9%9C%B2%E7%B4%A0%E6%9D%90%23) `153.6K 🔥` `+324%`
1. [现在就出发4 接原班人马](https://s.weibo.com/weibo?q=%23%E7%8E%B0%E5%9C%A8%E5%B0%B1%E5%87%BA%E5%8F%914%20%E6%8E%A5%E5%8E%9F%E7%8F%AD%E4%BA%BA%E9%A9%AC%23) `153.8K 🔥`
1. [陈翔六点半妹爷扮演者去世](https://s.weibo.com/weibo?q=%23%E9%99%88%E7%BF%94%E5%85%AD%E7%82%B9%E5%8D%8A%E5%A6%B9%E7%88%B7%E6%89%AE%E6%BC%94%E8%80%85%E5%8E%BB%E4%B8%96%23) `154.0K 🔥` `-60%`

Updated at 2026-07-01 07:04:49

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
