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

1. [意大利小偷把肾结石误认黄金偷走 (Italian thief mistook kidney stone for gold and stole it)](https://s.weibo.com/weibo?q=%23%E6%84%8F%E5%A4%A7%E5%88%A9%E5%B0%8F%E5%81%B7%E6%8A%8A%E8%82%BE%E7%BB%93%E7%9F%B3%E8%AF%AF%E8%AE%A4%E9%BB%84%E9%87%91%E5%81%B7%E8%B5%B0%23) `851.2K 🔥` `NEW`
1. [三星S26](https://s.weibo.com/weibo?q=%23%E4%B8%89%E6%98%9FS26%23) `633.9K 🔥` `NEW`
1. [Cat退役发长文](https://s.weibo.com/weibo?q=%23Cat%E9%80%80%E5%BD%B9%E5%8F%91%E9%95%BF%E6%96%87%23) `261.8K 🔥` `NEW`
1. [伊能静 真的别再雌竞了](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E8%83%BD%E9%9D%99%20%E7%9C%9F%E7%9A%84%E5%88%AB%E5%86%8D%E9%9B%8C%E7%AB%9E%E4%BA%86%23) `208.6K 🔥` `NEW`
1. [杨幂登陆少年组合Prada大秀同框](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E7%99%BB%E9%99%86%E5%B0%91%E5%B9%B4%E7%BB%84%E5%90%88Prada%E5%A4%A7%E7%A7%80%E5%90%8C%E6%A1%86%23) `186.4K 🔥` `NEW`
1. [虎跳峡落水失联男子仍未找到](https://s.weibo.com/weibo?q=%23%E8%99%8E%E8%B7%B3%E5%B3%A1%E8%90%BD%E6%B0%B4%E5%A4%B1%E8%81%94%E7%94%B7%E5%AD%90%E4%BB%8D%E6%9C%AA%E6%89%BE%E5%88%B0%23) `184.9K 🔥` `NEW`
1. [Tiffany卞耀汉结婚](https://s.weibo.com/weibo?q=%23Tiffany%E5%8D%9E%E8%80%80%E6%B1%89%E7%BB%93%E5%A9%9A%23) `180.5K 🔥` `NEW`
1. [头像洁癖](https://s.weibo.com/weibo?q=%23%E5%A4%B4%E5%83%8F%E6%B4%81%E7%99%96%23) `176.2K 🔥` `NEW`
1. [今天的饺子是王一博擀的皮](https://s.weibo.com/weibo?q=%23%E4%BB%8A%E5%A4%A9%E7%9A%84%E9%A5%BA%E5%AD%90%E6%98%AF%E7%8E%8B%E4%B8%80%E5%8D%9A%E6%93%80%E7%9A%84%E7%9A%AE%23) `172.3K 🔥` `NEW`
1. [魅族](https://s.weibo.com/weibo?q=%23%E9%AD%85%E6%97%8F%23) `157.8K 🔥` `NEW`
1. [高叶宋妍霏回应臭脸 (Gao Ye and Song Yanfei responded with a bad face)](https://s.weibo.com/weibo?q=%23%E9%AB%98%E5%8F%B6%E5%AE%8B%E5%A6%8D%E9%9C%8F%E5%9B%9E%E5%BA%94%E8%87%AD%E8%84%B8%23) `143.0K 🔥` `NEW`
1. [见春天 陈飞宇王影璐](https://s.weibo.com/weibo?q=%23%E8%A7%81%E6%98%A5%E5%A4%A9%20%E9%99%88%E9%A3%9E%E5%AE%87%E7%8E%8B%E5%BD%B1%E7%92%90%23) `103.3K 🔥` `NEW`
1. [美国16岁的男孩非法打工被送上法庭](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD16%E5%B2%81%E7%9A%84%E7%94%B7%E5%AD%A9%E9%9D%9E%E6%B3%95%E6%89%93%E5%B7%A5%E8%A2%AB%E9%80%81%E4%B8%8A%E6%B3%95%E5%BA%AD%23) `99.9K 🔥` `NEW`
1. [少女时代第一个结婚的人](https://s.weibo.com/weibo?q=%23%E5%B0%91%E5%A5%B3%E6%97%B6%E4%BB%A3%E7%AC%AC%E4%B8%80%E4%B8%AA%E7%BB%93%E5%A9%9A%E7%9A%84%E4%BA%BA%23) `99.7K 🔥` `NEW`
1. [白鹿真帮手假客人](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E7%9C%9F%E5%B8%AE%E6%89%8B%E5%81%87%E5%AE%A2%E4%BA%BA%23) `99.6K 🔥` `NEW`
1. [43岁也能考编了](https://s.weibo.com/weibo?q=%2343%E5%B2%81%E4%B9%9F%E8%83%BD%E8%80%83%E7%BC%96%E4%BA%86%23) `99.5K 🔥` `NEW`
1. [老年病正悄悄逼近年轻人](https://s.weibo.com/weibo?q=%23%E8%80%81%E5%B9%B4%E7%97%85%E6%AD%A3%E6%82%84%E6%82%84%E9%80%BC%E8%BF%91%E5%B9%B4%E8%BD%BB%E4%BA%BA%23) `99.2K 🔥` `NEW`
1. [唐嫣Fendi大秀位置](https://s.weibo.com/weibo?q=%23%E5%94%90%E5%AB%A3Fendi%E5%A4%A7%E7%A7%80%E4%BD%8D%E7%BD%AE%23) `99.1K 🔥` `NEW`
1. [上班自己哄下班自己宠](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E7%8F%AD%E8%87%AA%E5%B7%B1%E5%93%84%E4%B8%8B%E7%8F%AD%E8%87%AA%E5%B7%B1%E5%AE%A0%23) `92.4K 🔥` `NEW`
1. [金智秀MV镜头](https://s.weibo.com/weibo?q=%23%E9%87%91%E6%99%BA%E7%A7%80MV%E9%95%9C%E5%A4%B4%23) `91.9K 🔥` `NEW`
1. [草莓开屏 (Strawberry opening)](https://s.weibo.com/weibo?q=%23%E8%8D%89%E8%8E%93%E5%BC%80%E5%B1%8F%23) `85.4K 🔥` `NEW`
1. [王安宇回应出演年轻版张弛](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%AE%89%E5%AE%87%E5%9B%9E%E5%BA%94%E5%87%BA%E6%BC%94%E5%B9%B4%E8%BD%BB%E7%89%88%E5%BC%A0%E5%BC%9B%23) `82.5K 🔥` `NEW`
1. [现在就出发4 (Let's go now 4)](https://s.weibo.com/weibo?q=%23%E7%8E%B0%E5%9C%A8%E5%B0%B1%E5%87%BA%E5%8F%914%23) `1.1M 🔥` `+45%`
1. [彪马店员说买不起别试](https://s.weibo.com/weibo?q=%23%E5%BD%AA%E9%A9%AC%E5%BA%97%E5%91%98%E8%AF%B4%E4%B9%B0%E4%B8%8D%E8%B5%B7%E5%88%AB%E8%AF%95%23) `330.0K 🔥` `+55%`
1. [芯片涨价原因](https://s.weibo.com/weibo?q=%23%E8%8A%AF%E7%89%87%E6%B6%A8%E4%BB%B7%E5%8E%9F%E5%9B%A0%23) `214.9K 🔥` `+55%`
1. [刘晓艳现身小徐直播间](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%99%93%E8%89%B3%E7%8E%B0%E8%BA%AB%E5%B0%8F%E5%BE%90%E7%9B%B4%E6%92%AD%E9%97%B4%23) `207.9K 🔥` `+78%`
1. [美国发动网攻侵占全球虚拟资产](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E5%8F%91%E5%8A%A8%E7%BD%91%E6%94%BB%E4%BE%B5%E5%8D%A0%E5%85%A8%E7%90%83%E8%99%9A%E6%8B%9F%E8%B5%84%E4%BA%A7%23) `645.2K 🔥`
1. [姜妍常驻现在就出发](https://s.weibo.com/weibo?q=%23%E5%A7%9C%E5%A6%8D%E5%B8%B8%E9%A9%BB%E7%8E%B0%E5%9C%A8%E5%B0%B1%E5%87%BA%E5%8F%91%23) `545.7K 🔥`
1. [不建议在朋友圈展示技能](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E5%BB%BA%E8%AE%AE%E5%9C%A8%E6%9C%8B%E5%8F%8B%E5%9C%88%E5%B1%95%E7%A4%BA%E6%8A%80%E8%83%BD%23) `390.4K 🔥`
1. [周五晚高疯甜蜜剧本上新了](https://s.weibo.com/weibo?q=%23%E5%91%A8%E4%BA%94%E6%99%9A%E9%AB%98%E7%96%AF%E7%94%9C%E8%9C%9C%E5%89%A7%E6%9C%AC%E4%B8%8A%E6%96%B0%E4%BA%86%23) `353.6K 🔥`
1. [小徐六级277分](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%BE%90%E5%85%AD%E7%BA%A7277%E5%88%86%23) `213.9K 🔥`
1. [虞书欣父亲借贷案三大焦点 (Three major focuses of Yu Shuxin’s father’s loan case)](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E7%88%B6%E4%BA%B2%E5%80%9F%E8%B4%B7%E6%A1%88%E4%B8%89%E5%A4%A7%E7%84%A6%E7%82%B9%23) `211.8K 🔥`
1. [尘白禁区联动取消 (Linkage cancellation of Chenbai restricted area)](https://s.weibo.com/weibo?q=%23%E5%B0%98%E7%99%BD%E7%A6%81%E5%8C%BA%E8%81%94%E5%8A%A8%E5%8F%96%E6%B6%88%23) `210.3K 🔥`
1. [姐姐姐夫](https://s.weibo.com/weibo?q=%23%E5%A7%90%E5%A7%90%E5%A7%90%E5%A4%AB%23) `190.1K 🔥`
1. [王嘉尔抽到了热巴的礼物 (Wang Jiaer got a gift from Reba)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%98%89%E5%B0%94%E6%8A%BD%E5%88%B0%E4%BA%86%E7%83%AD%E5%B7%B4%E7%9A%84%E7%A4%BC%E7%89%A9%23) `190.1K 🔥`
1. [白宇和前女友分手原因](https://s.weibo.com/weibo?q=%23%E7%99%BD%E5%AE%87%E5%92%8C%E5%89%8D%E5%A5%B3%E5%8F%8B%E5%88%86%E6%89%8B%E5%8E%9F%E5%9B%A0%23) `177.9K 🔥`
1. [比尔盖茨被曝是裸体夜店常客](https://s.weibo.com/weibo?q=%23%E6%AF%94%E5%B0%94%E7%9B%96%E8%8C%A8%E8%A2%AB%E6%9B%9D%E6%98%AF%E8%A3%B8%E4%BD%93%E5%A4%9C%E5%BA%97%E5%B8%B8%E5%AE%A2%23) `177.6K 🔥`
1. [山西卫健委已严肃约谈市急救中心](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E8%A5%BF%E5%8D%AB%E5%81%A5%E5%A7%94%E5%B7%B2%E4%B8%A5%E8%82%83%E7%BA%A6%E8%B0%88%E5%B8%82%E6%80%A5%E6%95%91%E4%B8%AD%E5%BF%83%23) `163.0K 🔥`
1. [澳游客在泰路怒遭瑞典男子手刀身亡](https://s.weibo.com/weibo?q=%23%E6%BE%B3%E6%B8%B8%E5%AE%A2%E5%9C%A8%E6%B3%B0%E8%B7%AF%E6%80%92%E9%81%AD%E7%91%9E%E5%85%B8%E7%94%B7%E5%AD%90%E6%89%8B%E5%88%80%E8%BA%AB%E4%BA%A1%23) `121.9K 🔥`
1. [28岁王一博素颜状态](https://s.weibo.com/weibo?q=%2328%E5%B2%81%E7%8E%8B%E4%B8%80%E5%8D%9A%E7%B4%A0%E9%A2%9C%E7%8A%B6%E6%80%81%23) `115.1K 🔥`
1. [何与虞书欣 二搭 (He and Yu Shuxin two partners)](https://s.weibo.com/weibo?q=%23%E4%BD%95%E4%B8%8E%E8%99%9E%E4%B9%A6%E6%AC%A3%20%E4%BA%8C%E6%90%AD%23) `111.3K 🔥`
1. [人一定要很金贵地对待自己](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E4%B8%80%E5%AE%9A%E8%A6%81%E5%BE%88%E9%87%91%E8%B4%B5%E5%9C%B0%E5%AF%B9%E5%BE%85%E8%87%AA%E5%B7%B1%23) `110.1K 🔥`
1. [比尔盖茨人设崩了 (Bill Gates' character collapsed)](https://s.weibo.com/weibo?q=%23%E6%AF%94%E5%B0%94%E7%9B%96%E8%8C%A8%E4%BA%BA%E8%AE%BE%E5%B4%A9%E4%BA%86%23) `92.6K 🔥`
1. [陈垣宇3比1雨果](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%9E%A3%E5%AE%873%E6%AF%941%E9%9B%A8%E6%9E%9C%23) `81.5K 🔥`
1. [替父请假2小时致其被开除女子发声](https://s.weibo.com/weibo?q=%23%E6%9B%BF%E7%88%B6%E8%AF%B7%E5%81%872%E5%B0%8F%E6%97%B6%E8%87%B4%E5%85%B6%E8%A2%AB%E5%BC%80%E9%99%A4%E5%A5%B3%E5%AD%90%E5%8F%91%E5%A3%B0%23) `558.8K 🔥` `-50%`
1. [丈夫准备给诞下5胞胎老婆送黄金 (Husband plans to give gold to wife who gave birth to quintuplets)](https://s.weibo.com/weibo?q=%23%E4%B8%88%E5%A4%AB%E5%87%86%E5%A4%87%E7%BB%99%E8%AF%9E%E4%B8%8B5%E8%83%9E%E8%83%8E%E8%80%81%E5%A9%86%E9%80%81%E9%BB%84%E9%87%91%23) `234.2K 🔥` `-41%`
1. [千元机或将消失](https://s.weibo.com/weibo?q=%23%E5%8D%83%E5%85%83%E6%9C%BA%E6%88%96%E5%B0%86%E6%B6%88%E5%A4%B1%23) `206.8K 🔥` `-46%`
1. [台独刘世芳亲属在大陆投资谋利](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E7%8B%AC%E5%88%98%E4%B8%96%E8%8A%B3%E4%BA%B2%E5%B1%9E%E5%9C%A8%E5%A4%A7%E9%99%86%E6%8A%95%E8%B5%84%E8%B0%8B%E5%88%A9%23) `116.2K 🔥` `-28%`
1. [BLACKPINK GO MV](https://s.weibo.com/weibo?q=%23BLACKPINK%20GO%20MV%23) `102.5K 🔥` `-39%`
1. [将微胖还给真正胖的人 (Return the slight fatness to the really fat people)](https://s.weibo.com/weibo?q=%23%E5%B0%86%E5%BE%AE%E8%83%96%E8%BF%98%E7%BB%99%E7%9C%9F%E6%AD%A3%E8%83%96%E7%9A%84%E4%BA%BA%23) `92.7K 🔥` `-43%`
1. [逐玉定档全是柿子 (Zhuyu’s set files are all persimmons)](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%E5%AE%9A%E6%A1%A3%E5%85%A8%E6%98%AF%E6%9F%BF%E5%AD%90%23) `91.7K 🔥` `-35%`
1. [aespa新歌 (aespa new song)](https://s.weibo.com/weibo?q=%23aespa%E6%96%B0%E6%AD%8C%23) `83.6K 🔥` `-47%`

Updated at 2026-02-27 15:55:52

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
