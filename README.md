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

1. [王鹤棣深圳派发巧乐兹 (Wang Hedi distributes Qiaolezi in Shenzhen)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%B9%A4%E6%A3%A3%E6%B7%B1%E5%9C%B3%E6%B4%BE%E5%8F%91%E5%B7%A7%E4%B9%90%E5%85%B9%23) `545.6K 🔥` `NEW`
1. [金鹰奖提名预测名单](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%B9%B0%E5%A5%96%E6%8F%90%E5%90%8D%E9%A2%84%E6%B5%8B%E5%90%8D%E5%8D%95%23) `347.2K 🔥` `NEW`
1. [何宣林要求退出师姐帮唱](https://s.weibo.com/weibo?q=%23%E4%BD%95%E5%AE%A3%E6%9E%97%E8%A6%81%E6%B1%82%E9%80%80%E5%87%BA%E5%B8%88%E5%A7%90%E5%B8%AE%E5%94%B1%23) `316.9K 🔥` `NEW`
1. [U17国足3比1逆转胜沙特队](https://s.weibo.com/weibo?q=%23U17%E5%9B%BD%E8%B6%B33%E6%AF%941%E9%80%86%E8%BD%AC%E8%83%9C%E6%B2%99%E7%89%B9%E9%98%9F%23) `311.4K 🔥` `NEW`
1. [金价跌麻了](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E8%B7%8C%E9%BA%BB%E4%BA%86%23) `247.7K 🔥` `NEW`
1. [白鹿卢昱晓 短视频营业](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E5%8D%A2%E6%98%B1%E6%99%93%20%E7%9F%AD%E8%A7%86%E9%A2%91%E8%90%A5%E4%B8%9A%23) `241.0K 🔥` `NEW`
1. [支付宝回应深夜扣款184万](https://s.weibo.com/weibo?q=%23%E6%94%AF%E4%BB%98%E5%AE%9D%E5%9B%9E%E5%BA%94%E6%B7%B1%E5%A4%9C%E6%89%A3%E6%AC%BE184%E4%B8%87%23) `229.7K 🔥` `NEW`
1. [王濛打孙怡被萧蔷一把拉走](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BF%9B%E6%89%93%E5%AD%99%E6%80%A1%E8%A2%AB%E8%90%A7%E8%94%B7%E4%B8%80%E6%8A%8A%E6%8B%89%E8%B5%B0%23) `229.3K 🔥` `NEW`
1. [丁程鑫泰国](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A8%8B%E9%91%AB%E6%B3%B0%E5%9B%BD%23) `219.3K 🔥` `NEW`
1. [女同学因被偷拍长期遭霸凌致抑郁](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%90%8C%E5%AD%A6%E5%9B%A0%E8%A2%AB%E5%81%B7%E6%8B%8D%E9%95%BF%E6%9C%9F%E9%81%AD%E9%9C%B8%E5%87%8C%E8%87%B4%E6%8A%91%E9%83%81%23) `126.5K 🔥` `NEW`
1. [蒋毅赵樱子贴身热舞 (Jiang Yi and Zhao Yingzi dance closely)](https://s.weibo.com/weibo?q=%23%E8%92%8B%E6%AF%85%E8%B5%B5%E6%A8%B1%E5%AD%90%E8%B4%B4%E8%BA%AB%E7%83%AD%E8%88%9E%23) `125.8K 🔥` `NEW`
1. [窦靖童歌手首位官宣](https://s.weibo.com/weibo?q=%23%E7%AA%A6%E9%9D%96%E7%AB%A5%E6%AD%8C%E6%89%8B%E9%A6%96%E4%BD%8D%E5%AE%98%E5%AE%A3%23) `125.3K 🔥` `NEW`
1. [阿斯顿维拉4比2利物浦](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%96%AF%E9%A1%BF%E7%BB%B4%E6%8B%894%E6%AF%942%E5%88%A9%E7%89%A9%E6%B5%A6%23) `102.1K 🔥` `NEW`
1. [女生误解医生把饭吃干净点一周胖5斤](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E7%94%9F%E8%AF%AF%E8%A7%A3%E5%8C%BB%E7%94%9F%E6%8A%8A%E9%A5%AD%E5%90%83%E5%B9%B2%E5%87%80%E7%82%B9%E4%B8%80%E5%91%A8%E8%83%965%E6%96%A4%23) `94.6K 🔥` `NEW`
1. [女子4岁烧伤用化妆重拾自信](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%904%E5%B2%81%E7%83%A7%E4%BC%A4%E7%94%A8%E5%8C%96%E5%A6%86%E9%87%8D%E6%8B%BE%E8%87%AA%E4%BF%A1%23) `88.0K 🔥` `NEW`
1. [中美元首会晤情况和共识 (Situation and consensus of the meeting between the heads of state of China and the United States)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E7%BE%8E%E5%85%83%E9%A6%96%E4%BC%9A%E6%99%A4%E6%83%85%E5%86%B5%E5%92%8C%E5%85%B1%E8%AF%86%23) `1.1M 🔥` `+53%`
1. [跑男真夫妻就是甜](https://s.weibo.com/weibo?q=%23%E8%B7%91%E7%94%B7%E7%9C%9F%E5%A4%AB%E5%A6%BB%E5%B0%B1%E6%98%AF%E7%94%9C%23) `760.6K 🔥` `+456%`
1. [天坛的文化与建筑之美](https://s.weibo.com/weibo?q=%23%E5%A4%A9%E5%9D%9B%E7%9A%84%E6%96%87%E5%8C%96%E4%B8%8E%E5%BB%BA%E7%AD%91%E4%B9%8B%E7%BE%8E%23) `586.4K 🔥` `+50%`
1. [特朗普说能待得惯可能都不想走了](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E8%AF%B4%E8%83%BD%E5%BE%85%E5%BE%97%E6%83%AF%E5%8F%AF%E8%83%BD%E9%83%BD%E4%B8%8D%E6%83%B3%E8%B5%B0%E4%BA%86%23) `252.7K 🔥` `+46%`
1. [巨力索具被证监会立案 (Juli Rigging was filed by the China Securities Regulatory Commission)](https://s.weibo.com/weibo?q=%23%E5%B7%A8%E5%8A%9B%E7%B4%A2%E5%85%B7%E8%A2%AB%E8%AF%81%E7%9B%91%E4%BC%9A%E7%AB%8B%E6%A1%88%23) `250.6K 🔥` `+182%`
1. [流量撑不起演员的底气 (Traffic cannot support actors’ confidence)](https://s.weibo.com/weibo?q=%23%E6%B5%81%E9%87%8F%E6%92%91%E4%B8%8D%E8%B5%B7%E6%BC%94%E5%91%98%E7%9A%84%E5%BA%95%E6%B0%94%23) `246.9K 🔥` `+40%`
1. [新娘回应婚礼没敬酒宾客已散场](https://s.weibo.com/weibo?q=%23%E6%96%B0%E5%A8%98%E5%9B%9E%E5%BA%94%E5%A9%9A%E7%A4%BC%E6%B2%A1%E6%95%AC%E9%85%92%E5%AE%BE%E5%AE%A2%E5%B7%B2%E6%95%A3%E5%9C%BA%23) `243.5K 🔥` `+39%`
1. [央视6000万美元拿下世界杯版权 (CCTV acquires World Cup rights for US$60 million)](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%866000%E4%B8%87%E7%BE%8E%E5%85%83%E6%8B%BF%E4%B8%8B%E4%B8%96%E7%95%8C%E6%9D%AF%E7%89%88%E6%9D%83%23) `236.8K 🔥` `+36%`
1. [女子救落水儿童后手机报废无人问津](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%95%91%E8%90%BD%E6%B0%B4%E5%84%BF%E7%AB%A5%E5%90%8E%E6%89%8B%E6%9C%BA%E6%8A%A5%E5%BA%9F%E6%97%A0%E4%BA%BA%E9%97%AE%E6%B4%A5%23) `235.9K 🔥` `+37%`
1. [曝蒋毅离婚 (Jiang Yi’s divorce revealed)](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E8%92%8B%E6%AF%85%E7%A6%BB%E5%A9%9A%23) `126.0K 🔥` `+23%`
1. [国际足联回应央视世界杯版权费](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E9%99%85%E8%B6%B3%E8%81%94%E5%9B%9E%E5%BA%94%E5%A4%AE%E8%A7%86%E4%B8%96%E7%95%8C%E6%9D%AF%E7%89%88%E6%9D%83%E8%B4%B9%23) `125.0K 🔥` `+41%`
1. [上一个被说像京圈佛子的是任嘉伦](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E4%B8%80%E4%B8%AA%E8%A2%AB%E8%AF%B4%E5%83%8F%E4%BA%AC%E5%9C%88%E4%BD%9B%E5%AD%90%E7%9A%84%E6%98%AF%E4%BB%BB%E5%98%89%E4%BC%A6%23) `122.9K 🔥` `+74%`
1. [曝小酒窝周扬青去胡彦斌音乐学校上课](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%B0%8F%E9%85%92%E7%AA%9D%E5%91%A8%E6%89%AC%E9%9D%92%E5%8E%BB%E8%83%A1%E5%BD%A6%E6%96%8C%E9%9F%B3%E4%B9%90%E5%AD%A6%E6%A0%A1%E4%B8%8A%E8%AF%BE%23) `90.3K 🔥` `+38%`
1. [迪丽热巴冰淇淋掉衣服上](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E5%86%B0%E6%B7%87%E6%B7%8B%E6%8E%89%E8%A1%A3%E6%9C%8D%E4%B8%8A%23) `84.7K 🔥` `+47%`
1. [61岁总裁离婚持股98%分前妻](https://s.weibo.com/weibo?q=%2361%E5%B2%81%E6%80%BB%E8%A3%81%E7%A6%BB%E5%A9%9A%E6%8C%81%E8%82%A198%25%E5%88%86%E5%89%8D%E5%A6%BB%23) `78.9K 🔥` `+103%`
1. [原来是过敏啊还以为脂肪在燃烧](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E6%98%AF%E8%BF%87%E6%95%8F%E5%95%8A%E8%BF%98%E4%BB%A5%E4%B8%BA%E8%84%82%E8%82%AA%E5%9C%A8%E7%87%83%E7%83%A7%23) `435.1K 🔥`
1. [我记得教师以前是份体面工作啊](https://s.weibo.com/weibo?q=%23%E6%88%91%E8%AE%B0%E5%BE%97%E6%95%99%E5%B8%88%E4%BB%A5%E5%89%8D%E6%98%AF%E4%BB%BD%E4%BD%93%E9%9D%A2%E5%B7%A5%E4%BD%9C%E5%95%8A%23) `383.8K 🔥`
1. [罗永浩怒怼保时捷被抄袭无奈论](https://s.weibo.com/weibo?q=%23%E7%BD%97%E6%B0%B8%E6%B5%A9%E6%80%92%E6%80%BC%E4%BF%9D%E6%97%B6%E6%8D%B7%E8%A2%AB%E6%8A%84%E8%A2%AD%E6%97%A0%E5%A5%88%E8%AE%BA%23) `126.8K 🔥`
1. [赵樱子回应蒋毅妻子喊话](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E6%A8%B1%E5%AD%90%E5%9B%9E%E5%BA%94%E8%92%8B%E6%AF%85%E5%A6%BB%E5%AD%90%E5%96%8A%E8%AF%9D%23) `126.7K 🔥`
1. [原来表达能力是这么练出来的 (It turns out that this is how you develop your ability to express yourself)](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E8%A1%A8%E8%BE%BE%E8%83%BD%E5%8A%9B%E6%98%AF%E8%BF%99%E4%B9%88%E7%BB%83%E5%87%BA%E6%9D%A5%E7%9A%84%23) `126.4K 🔥`
1. [女子从174斤减到95斤判若两人 (The woman reduced her weight from 174 pounds to 95 pounds and became a completely different person)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E4%BB%8E174%E6%96%A4%E5%87%8F%E5%88%B095%E6%96%A4%E5%88%A4%E8%8B%A5%E4%B8%A4%E4%BA%BA%23) `126.2K 🔥`
1. [毛巾少爷曾说父亲爷爷不愿其接班 (Master Towel once said that his father and grandfather did not want him to take over)](https://s.weibo.com/weibo?q=%23%E6%AF%9B%E5%B7%BE%E5%B0%91%E7%88%B7%E6%9B%BE%E8%AF%B4%E7%88%B6%E4%BA%B2%E7%88%B7%E7%88%B7%E4%B8%8D%E6%84%BF%E5%85%B6%E6%8E%A5%E7%8F%AD%23) `124.8K 🔥`
1. [当小朋友说要通宵看电视](https://s.weibo.com/weibo?q=%23%E5%BD%93%E5%B0%8F%E6%9C%8B%E5%8F%8B%E8%AF%B4%E8%A6%81%E9%80%9A%E5%AE%B5%E7%9C%8B%E7%94%B5%E8%A7%86%23) `124.5K 🔥`
1. [黄仁勋库克发声](https://s.weibo.com/weibo?q=%23%E9%BB%84%E4%BB%81%E5%8B%8B%E5%BA%93%E5%85%8B%E5%8F%91%E5%A3%B0%23) `124.4K 🔥`
1. [iPhone一年一换比三年一换更省钱 (It saves money to replace an iPhone once a year rather than every three years)](https://s.weibo.com/weibo?q=%23iPhone%E4%B8%80%E5%B9%B4%E4%B8%80%E6%8D%A2%E6%AF%94%E4%B8%89%E5%B9%B4%E4%B8%80%E6%8D%A2%E6%9B%B4%E7%9C%81%E9%92%B1%23) `124.3K 🔥`
1. [王楚钦个人捐款20万](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E4%B8%AA%E4%BA%BA%E6%8D%90%E6%AC%BE20%E4%B8%87%23) `119.9K 🔥`
1. [奶奶真成档案管理大师了 (Grandma has truly become a master of file management.)](https://s.weibo.com/weibo?q=%23%E5%A5%B6%E5%A5%B6%E7%9C%9F%E6%88%90%E6%A1%A3%E6%A1%88%E7%AE%A1%E7%90%86%E5%A4%A7%E5%B8%88%E4%BA%86%23) `112.6K 🔥`
1. [刘浩存好长好直的腿](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%B5%A9%E5%AD%98%E5%A5%BD%E9%95%BF%E5%A5%BD%E7%9B%B4%E7%9A%84%E8%85%BF%23) `104.1K 🔥`
1. [鹿晗这就是京圈佛子吗 (Is Lu Han the Buddhist son of Beijing Circle?)](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%E8%BF%99%E5%B0%B1%E6%98%AF%E4%BA%AC%E5%9C%88%E4%BD%9B%E5%AD%90%E5%90%97%23) `97.2K 🔥`
1. [21世纪大君夫人 (21st Century Maharaja’s Wife)](https://s.weibo.com/weibo?q=%2321%E4%B8%96%E7%BA%AA%E5%A4%A7%E5%90%9B%E5%A4%AB%E4%BA%BA%23) `81.0K 🔥`
1. [刘丹担任白玉兰评委](https://s.weibo.com/weibo?q=%23%E5%88%98%E4%B8%B9%E6%8B%85%E4%BB%BB%E7%99%BD%E7%8E%89%E5%85%B0%E8%AF%84%E5%A7%94%23) `78.2K 🔥`
1. [Deepseek不语 只是一味跟团](https://s.weibo.com/weibo?q=%23Deepseek%E4%B8%8D%E8%AF%AD%20%E5%8F%AA%E6%98%AF%E4%B8%80%E5%91%B3%E8%B7%9F%E5%9B%A2%23) `125.6K 🔥` `-40%`
1. [建议喜欢熬夜的反复观看 (Recommended for those who like to stay up late and watch it again and again)](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E5%96%9C%E6%AC%A2%E7%86%AC%E5%A4%9C%E7%9A%84%E5%8F%8D%E5%A4%8D%E8%A7%82%E7%9C%8B%23) `125.5K 🔥` `-38%`
1. [给阿嬷的情书 (A love letter to grandma)](https://s.weibo.com/weibo?q=%23%E7%BB%99%E9%98%BF%E5%AC%B7%E7%9A%84%E6%83%85%E4%B9%A6%23) `125.2K 🔥` `-75%`
1. [球迷帮孙颖莎在周杰伦演唱会点歌 (Fans helped Sun Yingsha request songs at Jay Chou's concert)](https://s.weibo.com/weibo?q=%23%E7%90%83%E8%BF%B7%E5%B8%AE%E5%AD%99%E9%A2%96%E8%8E%8E%E5%9C%A8%E5%91%A8%E6%9D%B0%E4%BC%A6%E6%BC%94%E5%94%B1%E4%BC%9A%E7%82%B9%E6%AD%8C%23) `124.7K 🔥` `-30%`
1. [央视已获世界杯转播权](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E5%B7%B2%E8%8E%B7%E4%B8%96%E7%95%8C%E6%9D%AF%E8%BD%AC%E6%92%AD%E6%9D%83%23) `87.7K 🔥` `-51%`

Updated at 2026-05-16 08:10:05

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
