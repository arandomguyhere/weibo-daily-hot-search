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

1. [黄晓明带妈妈小海绵逛游乐园 (Huang Xiaoming takes his mother Sponge to visit the amusement park)](https://s.weibo.com/weibo?q=%23%E9%BB%84%E6%99%93%E6%98%8E%E5%B8%A6%E5%A6%88%E5%A6%88%E5%B0%8F%E6%B5%B7%E7%BB%B5%E9%80%9B%E6%B8%B8%E4%B9%90%E5%9B%AD%23) `272.5K 🔥` `NEW`
1. [尤伯杯](https://s.weibo.com/weibo?q=%23%E5%B0%A4%E4%BC%AF%E6%9D%AF%23) `270.4K 🔥` `NEW`
1. [奶茶卖到188元一杯](https://s.weibo.com/weibo?q=%23%E5%A5%B6%E8%8C%B6%E5%8D%96%E5%88%B0188%E5%85%83%E4%B8%80%E6%9D%AF%23) `262.1K 🔥` `NEW`
1. [张继科说国乒男队技术迭代不足](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%BB%A7%E7%A7%91%E8%AF%B4%E5%9B%BD%E4%B9%92%E7%94%B7%E9%98%9F%E6%8A%80%E6%9C%AF%E8%BF%AD%E4%BB%A3%E4%B8%8D%E8%B6%B3%23) `256.4K 🔥` `NEW`
1. [朱志鑫游泳](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E5%BF%97%E9%91%AB%E6%B8%B8%E6%B3%B3%23) `241.9K 🔥` `NEW`
1. [Jennie 妈咪降临](https://s.weibo.com/weibo?q=%23Jennie%20%E5%A6%88%E5%92%AA%E9%99%8D%E4%B8%B4%23) `182.7K 🔥` `NEW`
1. [特朗普发布奇怪AI图片](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E5%8F%91%E5%B8%83%E5%A5%87%E6%80%AAAI%E5%9B%BE%E7%89%87%23) `130.1K 🔥` `NEW`
1. [何昶希采访](https://s.weibo.com/weibo?q=%23%E4%BD%95%E6%98%B6%E5%B8%8C%E9%87%87%E8%AE%BF%23) `116.2K 🔥` `NEW`
1. [尤杯决赛国羽落后韩国](https://s.weibo.com/weibo?q=%23%E5%B0%A4%E6%9D%AF%E5%86%B3%E8%B5%9B%E5%9B%BD%E7%BE%BD%E8%90%BD%E5%90%8E%E9%9F%A9%E5%9B%BD%23) `111.6K 🔥` `NEW`
1. [仙逆](https://s.weibo.com/weibo?q=%23%E4%BB%99%E9%80%86%23) `109.1K 🔥` `NEW`
1. [尤杯国羽1比1韩国 (You Cup Guoyu 1 to 1 South Korea)](https://s.weibo.com/weibo?q=%23%E5%B0%A4%E6%9D%AF%E5%9B%BD%E7%BE%BD1%E6%AF%941%E9%9F%A9%E5%9B%BD%23) `107.8K 🔥` `NEW`
1. [狼队对战Hero](https://s.weibo.com/weibo?q=%23%E7%8B%BC%E9%98%9F%E5%AF%B9%E6%88%98Hero%23) `107.6K 🔥` `NEW`
1. [黄灿灿手机都掉洞里了还在吃薯片](https://s.weibo.com/weibo?q=%23%E9%BB%84%E7%81%BF%E7%81%BF%E6%89%8B%E6%9C%BA%E9%83%BD%E6%8E%89%E6%B4%9E%E9%87%8C%E4%BA%86%E8%BF%98%E5%9C%A8%E5%90%83%E8%96%AF%E7%89%87%23) `106.9K 🔥` `NEW`
1. [郑恺来了也得拍重庆落地签](https://s.weibo.com/weibo?q=%23%E9%83%91%E6%81%BA%E6%9D%A5%E4%BA%86%E4%B9%9F%E5%BE%97%E6%8B%8D%E9%87%8D%E5%BA%86%E8%90%BD%E5%9C%B0%E7%AD%BE%23) `106.4K 🔥` `NEW`
1. [妖刀轮换](https://s.weibo.com/weibo?q=%23%E5%A6%96%E5%88%80%E8%BD%AE%E6%8D%A2%23) `105.8K 🔥` `NEW`
1. [银行为何又开始猛推大额存单](https://s.weibo.com/weibo?q=%23%E9%93%B6%E8%A1%8C%E4%B8%BA%E4%BD%95%E5%8F%88%E5%BC%80%E5%A7%8B%E7%8C%9B%E6%8E%A8%E5%A4%A7%E9%A2%9D%E5%AD%98%E5%8D%95%23) `101.7K 🔥` `NEW`
1. [河南蒜苔 再说原地址给你补五十斤](https://s.weibo.com/weibo?q=%23%E6%B2%B3%E5%8D%97%E8%92%9C%E8%8B%94%20%E5%86%8D%E8%AF%B4%E5%8E%9F%E5%9C%B0%E5%9D%80%E7%BB%99%E4%BD%A0%E8%A1%A5%E4%BA%94%E5%8D%81%E6%96%A4%23) `496.8K 🔥` `+28%`
1. [在天上光选妈妈忘了选姐姐](https://s.weibo.com/weibo?q=%23%E5%9C%A8%E5%A4%A9%E4%B8%8A%E5%85%89%E9%80%89%E5%A6%88%E5%A6%88%E5%BF%98%E4%BA%86%E9%80%89%E5%A7%90%E5%A7%90%23) `352.9K 🔥` `+38%`
1. [山姆仓库卸货太吵业主一夜报四次警](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E5%A7%86%E4%BB%93%E5%BA%93%E5%8D%B8%E8%B4%A7%E5%A4%AA%E5%90%B5%E4%B8%9A%E4%B8%BB%E4%B8%80%E5%A4%9C%E6%8A%A5%E5%9B%9B%E6%AC%A1%E8%AD%A6%23) `228.4K 🔥` `+72%`
1. [湖南广电 AI播新闻 (Hunan Radio and Television AI news broadcast)](https://s.weibo.com/weibo?q=%23%E6%B9%96%E5%8D%97%E5%B9%BF%E7%94%B5%20AI%E6%92%AD%E6%96%B0%E9%97%BB%23) `1.2M 🔥`
1. [国乒男团技术已无明显优势](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%E7%94%B7%E5%9B%A2%E6%8A%80%E6%9C%AF%E5%B7%B2%E6%97%A0%E6%98%8E%E6%98%BE%E4%BC%98%E5%8A%BF%23) `832.0K 🔥`
1. [这个五一假期惠民福利停不下来 (We cannot stop benefiting the people during this May Day holiday)](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%B8%AA%E4%BA%94%E4%B8%80%E5%81%87%E6%9C%9F%E6%83%A0%E6%B0%91%E7%A6%8F%E5%88%A9%E5%81%9C%E4%B8%8D%E4%B8%8B%E6%9D%A5%23) `670.0K 🔥`
1. [泡泡岛 舞台坍塌 (Bubble Island stage collapse)](https://s.weibo.com/weibo?q=%23%E6%B3%A1%E6%B3%A1%E5%B2%9B%20%E8%88%9E%E5%8F%B0%E5%9D%8D%E5%A1%8C%23) `491.7K 🔥`
1. [把自己当成糖尿病人来吃饭](https://s.weibo.com/weibo?q=%23%E6%8A%8A%E8%87%AA%E5%B7%B1%E5%BD%93%E6%88%90%E7%B3%96%E5%B0%BF%E7%97%85%E4%BA%BA%E6%9D%A5%E5%90%83%E9%A5%AD%23) `280.9K 🔥`
1. [以色列全面进入备战状态](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E8%89%B2%E5%88%97%E5%85%A8%E9%9D%A2%E8%BF%9B%E5%85%A5%E5%A4%87%E6%88%98%E7%8A%B6%E6%80%81%23) `280.4K 🔥`
1. [繁殖犬 抑郁](https://s.weibo.com/weibo?q=%23%E7%B9%81%E6%AE%96%E7%8A%AC%20%E6%8A%91%E9%83%81%23) `277.5K 🔥`
1. [女子凌晨接到去世半年表弟来电](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%87%8C%E6%99%A8%E6%8E%A5%E5%88%B0%E5%8E%BB%E4%B8%96%E5%8D%8A%E5%B9%B4%E8%A1%A8%E5%BC%9F%E6%9D%A5%E7%94%B5%23) `275.4K 🔥`
1. [上科大39岁教授营救至亲溺水去世 (A 39-year-old professor at Shanghai University of Science and Technology died from drowning after rescuing a relative)](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E7%A7%91%E5%A4%A739%E5%B2%81%E6%95%99%E6%8E%88%E8%90%A5%E6%95%91%E8%87%B3%E4%BA%B2%E6%BA%BA%E6%B0%B4%E5%8E%BB%E4%B8%96%23) `274.6K 🔥`
1. [吴彦祖妻子宣布复出 (Daniel Wu’s wife announces comeback)](https://s.weibo.com/weibo?q=%23%E5%90%B4%E5%BD%A6%E7%A5%96%E5%A6%BB%E5%AD%90%E5%AE%A3%E5%B8%83%E5%A4%8D%E5%87%BA%23) `268.9K 🔥`
1. [跑男摄影师谈白鹿 身正不怕影子歪](https://s.weibo.com/weibo?q=%23%E8%B7%91%E7%94%B7%E6%91%84%E5%BD%B1%E5%B8%88%E8%B0%88%E7%99%BD%E9%B9%BF%20%E8%BA%AB%E6%AD%A3%E4%B8%8D%E6%80%95%E5%BD%B1%E5%AD%90%E6%AD%AA%23) `266.2K 🔥`
1. [谈没谈过恋爱一眼就能看出来](https://s.weibo.com/weibo?q=%23%E8%B0%88%E6%B2%A1%E8%B0%88%E8%BF%87%E6%81%8B%E7%88%B1%E4%B8%80%E7%9C%BC%E5%B0%B1%E8%83%BD%E7%9C%8B%E5%87%BA%E6%9D%A5%23) `259.1K 🔥`
1. [东方甄选主播明明离职后首次开播](https://s.weibo.com/weibo?q=%23%E4%B8%9C%E6%96%B9%E7%94%84%E9%80%89%E4%B8%BB%E6%92%AD%E6%98%8E%E6%98%8E%E7%A6%BB%E8%81%8C%E5%90%8E%E9%A6%96%E6%AC%A1%E5%BC%80%E6%92%AD%23) `225.5K 🔥`
1. [水果我只吃不出轨的](https://s.weibo.com/weibo?q=%23%E6%B0%B4%E6%9E%9C%E6%88%91%E5%8F%AA%E5%90%83%E4%B8%8D%E5%87%BA%E8%BD%A8%E7%9A%84%23) `126.1K 🔥`
1. [80斤女生不吃碳水闭经体脂率超标](https://s.weibo.com/weibo?q=%2380%E6%96%A4%E5%A5%B3%E7%94%9F%E4%B8%8D%E5%90%83%E7%A2%B3%E6%B0%B4%E9%97%AD%E7%BB%8F%E4%BD%93%E8%84%82%E7%8E%87%E8%B6%85%E6%A0%87%23) `315.3K 🔥` `-40%`
1. [重庆落地签 (Chongqing visa on arrival)](https://s.weibo.com/weibo?q=%23%E9%87%8D%E5%BA%86%E8%90%BD%E5%9C%B0%E7%AD%BE%23) `287.0K 🔥` `-45%`
1. [白鹿被孟子义说挂相 (Bai Lu was criticized by Mencius Yi)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E8%A2%AB%E5%AD%9F%E5%AD%90%E4%B9%89%E8%AF%B4%E6%8C%82%E7%9B%B8%23) `278.6K 🔥` `-59%`
1. [严浩翔 爱一个人需要另一个人](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E6%B5%A9%E7%BF%94%20%E7%88%B1%E4%B8%80%E4%B8%AA%E4%BA%BA%E9%9C%80%E8%A6%81%E5%8F%A6%E4%B8%80%E4%B8%AA%E4%BA%BA%23) `271.6K 🔥` `-38%`
1. [孙俪 我们家的狗装死把邓超吓晕了](https://s.weibo.com/weibo?q=%23%E5%AD%99%E4%BF%AA%20%E6%88%91%E4%BB%AC%E5%AE%B6%E7%9A%84%E7%8B%97%E8%A3%85%E6%AD%BB%E6%8A%8A%E9%82%93%E8%B6%85%E5%90%93%E6%99%95%E4%BA%86%23) `231.5K 🔥` `-30%`
1. [大睡特睡 修复前额叶](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E7%9D%A1%E7%89%B9%E7%9D%A1%20%E4%BF%AE%E5%A4%8D%E5%89%8D%E9%A2%9D%E5%8F%B6%23) `190.7K 🔥` `-26%`
1. [李小冉你是真火了 (Li Xiaoran, you are so popular)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B0%8F%E5%86%89%E4%BD%A0%E6%98%AF%E7%9C%9F%E7%81%AB%E4%BA%86%23) `129.8K 🔥` `-57%`
1. [四辆车爆胎报警后警车来了也爆胎](https://s.weibo.com/weibo?q=%23%E5%9B%9B%E8%BE%86%E8%BD%A6%E7%88%86%E8%83%8E%E6%8A%A5%E8%AD%A6%E5%90%8E%E8%AD%A6%E8%BD%A6%E6%9D%A5%E4%BA%86%E4%B9%9F%E7%88%86%E8%83%8E%23) `128.8K 🔥` `-35%`
1. [39岁教授溺水遇险系因救自己孩子](https://s.weibo.com/weibo?q=%2339%E5%B2%81%E6%95%99%E6%8E%88%E6%BA%BA%E6%B0%B4%E9%81%87%E9%99%A9%E7%B3%BB%E5%9B%A0%E6%95%91%E8%87%AA%E5%B7%B1%E5%AD%A9%E5%AD%90%23) `127.5K 🔥` `-38%`
1. [朱孝天的妻子生病独自手术](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E5%AD%9D%E5%A4%A9%E7%9A%84%E5%A6%BB%E5%AD%90%E7%94%9F%E7%97%85%E7%8B%AC%E8%87%AA%E6%89%8B%E6%9C%AF%23) `127.0K 🔥` `-41%`
1. [汤晶媚吐槽黄宗泽牙龈萎缩](https://s.weibo.com/weibo?q=%23%E6%B1%A4%E6%99%B6%E5%AA%9A%E5%90%90%E6%A7%BD%E9%BB%84%E5%AE%97%E6%B3%BD%E7%89%99%E9%BE%88%E8%90%8E%E7%BC%A9%23) `120.8K 🔥` `-26%`
1. [穆祉丞有个人巡演规划 (Mu Zhicheng has personal tour plans)](https://s.weibo.com/weibo?q=%23%E7%A9%86%E7%A5%89%E4%B8%9E%E6%9C%89%E4%B8%AA%E4%BA%BA%E5%B7%A1%E6%BC%94%E8%A7%84%E5%88%92%23) `109.7K 🔥` `-36%`
1. [雄鹰一样的女人孔苑苑逝世 (The eagle-like woman Kong Yuanyuan passed away)](https://s.weibo.com/weibo?q=%23%E9%9B%84%E9%B9%B0%E4%B8%80%E6%A0%B7%E7%9A%84%E5%A5%B3%E4%BA%BA%E5%AD%94%E8%8B%91%E8%8B%91%E9%80%9D%E4%B8%96%23) `108.7K 🔥` `-27%`
1. [马龙许昕出发伦敦](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E9%BE%99%E8%AE%B8%E6%98%95%E5%87%BA%E5%8F%91%E4%BC%A6%E6%95%A6%23) `105.4K 🔥` `-35%`
1. [姜十七回应整容](https://s.weibo.com/weibo?q=%23%E5%A7%9C%E5%8D%81%E4%B8%83%E5%9B%9E%E5%BA%94%E6%95%B4%E5%AE%B9%23) `102.6K 🔥` `-55%`
1. [男子领养孩子养到11岁亲生父母要带走 (Man adopts a child and raises it until he is 11 years old, his biological parents want to take him away)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E9%A2%86%E5%85%BB%E5%AD%A9%E5%AD%90%E5%85%BB%E5%88%B011%E5%B2%81%E4%BA%B2%E7%94%9F%E7%88%B6%E6%AF%8D%E8%A6%81%E5%B8%A6%E8%B5%B0%23) `102.6K 🔥` `-39%`

Updated at 2026-05-03 19:27:14

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
