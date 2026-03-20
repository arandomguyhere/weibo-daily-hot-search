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

1. [二月二最硬核龙抬头 (The most hard-core dragon raises its head on February 2nd)](https://s.weibo.com/weibo?q=%23%E4%BA%8C%E6%9C%88%E4%BA%8C%E6%9C%80%E7%A1%AC%E6%A0%B8%E9%BE%99%E6%8A%AC%E5%A4%B4%23) `614.2K 🔥` `NEW`
1. [伊朗伊斯兰革命卫队发言人身亡](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E4%BC%8A%E6%96%AF%E5%85%B0%E9%9D%A9%E5%91%BD%E5%8D%AB%E9%98%9F%E5%8F%91%E8%A8%80%E4%BA%BA%E8%BA%AB%E4%BA%A1%23) `162.8K 🔥` `NEW`
1. [曝AI短剧使用杨紫的脸](https://s.weibo.com/weibo?q=%23%E6%9B%9DAI%E7%9F%AD%E5%89%A7%E4%BD%BF%E7%94%A8%E6%9D%A8%E7%B4%AB%E7%9A%84%E8%84%B8%23) `157.6K 🔥` `NEW`
1. [经期3个表现警惕子宫腺肌症](https://s.weibo.com/weibo?q=%23%E7%BB%8F%E6%9C%9F3%E4%B8%AA%E8%A1%A8%E7%8E%B0%E8%AD%A6%E6%83%95%E5%AD%90%E5%AE%AB%E8%85%BA%E8%82%8C%E7%97%87%23) `148.9K 🔥` `NEW`
1. [5岁女童扁桃体手术后死亡母亲发声](https://s.weibo.com/weibo?q=%235%E5%B2%81%E5%A5%B3%E7%AB%A5%E6%89%81%E6%A1%83%E4%BD%93%E6%89%8B%E6%9C%AF%E5%90%8E%E6%AD%BB%E4%BA%A1%E6%AF%8D%E4%BA%B2%E5%8F%91%E5%A3%B0%23) `146.3K 🔥` `NEW`
1. [中国女游客在泰国被流弹击中面部](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A5%B3%E6%B8%B8%E5%AE%A2%E5%9C%A8%E6%B3%B0%E5%9B%BD%E8%A2%AB%E6%B5%81%E5%BC%B9%E5%87%BB%E4%B8%AD%E9%9D%A2%E9%83%A8%23) `137.9K 🔥` `NEW`
1. [女童术后喷血死亡医院曾被罚20万](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E7%AB%A5%E6%9C%AF%E5%90%8E%E5%96%B7%E8%A1%80%E6%AD%BB%E4%BA%A1%E5%8C%BB%E9%99%A2%E6%9B%BE%E8%A2%AB%E7%BD%9A20%E4%B8%87%23) `136.0K 🔥` `NEW`
1. [网易严选 玩梗](https://s.weibo.com/weibo?q=%23%E7%BD%91%E6%98%93%E4%B8%A5%E9%80%89%20%E7%8E%A9%E6%A2%97%23) `113.9K 🔥` `NEW`
1. [白日提灯男二骂男主这段](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%97%A5%E6%8F%90%E7%81%AF%E7%94%B7%E4%BA%8C%E9%AA%82%E7%94%B7%E4%B8%BB%E8%BF%99%E6%AE%B5%23) `90.9K 🔥` `NEW`
1. [伊朗说能继续生产导弹](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E8%AF%B4%E8%83%BD%E7%BB%A7%E7%BB%AD%E7%94%9F%E4%BA%A7%E5%AF%BC%E5%BC%B9%23) `76.0K 🔥` `NEW`
1. [穆祉丞站着干饭 (Mu Zhicheng stood and cooked)](https://s.weibo.com/weibo?q=%23%E7%A9%86%E7%A5%89%E4%B8%9E%E7%AB%99%E7%9D%80%E5%B9%B2%E9%A5%AD%23) `73.1K 🔥` `NEW`
1. [超7成人午睡超过半小时](https://s.weibo.com/weibo?q=%23%E8%B6%857%E6%88%90%E4%BA%BA%E5%8D%88%E7%9D%A1%E8%B6%85%E8%BF%87%E5%8D%8A%E5%B0%8F%E6%97%B6%23) `72.2K 🔥` `NEW`
1. [马龙回应被叫龙队](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E9%BE%99%E5%9B%9E%E5%BA%94%E8%A2%AB%E5%8F%AB%E9%BE%99%E9%98%9F%23) `69.3K 🔥` `NEW`
1. [苏超吉祥物苏嘟嘟出道](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E8%B6%85%E5%90%89%E7%A5%A5%E7%89%A9%E8%8B%8F%E5%98%9F%E5%98%9F%E5%87%BA%E9%81%93%23) `68.4K 🔥` `NEW`
1. [瞿颖胡兵李静戴军孙浩团综](https://s.weibo.com/weibo?q=%23%E7%9E%BF%E9%A2%96%E8%83%A1%E5%85%B5%E6%9D%8E%E9%9D%99%E6%88%B4%E5%86%9B%E5%AD%99%E6%B5%A9%E5%9B%A2%E7%BB%BC%23) `201.9K 🔥` `+65%`
1. [岚图港股上市官宣空间王炸泰山X8 (Lantu's Hong Kong stock listing officially announced the Space King's Taishan X8)](https://s.weibo.com/weibo?q=%23%E5%B2%9A%E5%9B%BE%E6%B8%AF%E8%82%A1%E4%B8%8A%E5%B8%82%E5%AE%98%E5%AE%A3%E7%A9%BA%E9%97%B4%E7%8E%8B%E7%82%B8%E6%B3%B0%E5%B1%B1X8%23) `179.4K 🔥` `+44%`
1. [马龙车轮战霍启刚郭晶晶](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E9%BE%99%E8%BD%A6%E8%BD%AE%E6%88%98%E9%9C%8D%E5%90%AF%E5%88%9A%E9%83%AD%E6%99%B6%E6%99%B6%23) `177.8K 🔥` `+82%`
1. [青岛如何用一碗面撼动人心](https://s.weibo.com/weibo?q=%23%E9%9D%92%E5%B2%9B%E5%A6%82%E4%BD%95%E7%94%A8%E4%B8%80%E7%A2%97%E9%9D%A2%E6%92%BC%E5%8A%A8%E4%BA%BA%E5%BF%83%23) `149.3K 🔥` `+22%`
1. [智界V9诺贝尔奖材料MOFs上车](https://s.weibo.com/weibo?q=%23%E6%99%BA%E7%95%8CV9%E8%AF%BA%E8%B4%9D%E5%B0%94%E5%A5%96%E6%9D%90%E6%96%99MOFs%E4%B8%8A%E8%BD%A6%23) `147.8K 🔥` `+23%`
1. [李维嘉崩溃大哭到无法主持](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E7%BB%B4%E5%98%89%E5%B4%A9%E6%BA%83%E5%A4%A7%E5%93%AD%E5%88%B0%E6%97%A0%E6%B3%95%E4%B8%BB%E6%8C%81%23) `147.2K 🔥` `+24%`
1. [单依纯 维密](https://s.weibo.com/weibo?q=%23%E5%8D%95%E4%BE%9D%E7%BA%AF%20%E7%BB%B4%E5%AF%86%23) `145.9K 🔥` `+27%`
1. [迪丽热巴新经纪人郝阿三上岗了 (Dilireba’s new manager Hao Asan has taken up the post)](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E6%96%B0%E7%BB%8F%E7%BA%AA%E4%BA%BA%E9%83%9D%E9%98%BF%E4%B8%89%E4%B8%8A%E5%B2%97%E4%BA%86%23) `145.6K 🔥` `+25%`
1. [女子买8套老破小月收租2.1万 (A woman bought 8 old and dilapidated apartments and collected rent of 21,000 yuan a month)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E4%B9%B08%E5%A5%97%E8%80%81%E7%A0%B4%E5%B0%8F%E6%9C%88%E6%94%B6%E7%A7%9F2.1%E4%B8%87%23) `145.2K 🔥` `+79%`
1. [42岁婆婆刚给儿子娶完媳妇就怀孕了 (The 42-year-old mother-in-law became pregnant just after marrying her son)](https://s.weibo.com/weibo?q=%2342%E5%B2%81%E5%A9%86%E5%A9%86%E5%88%9A%E7%BB%99%E5%84%BF%E5%AD%90%E5%A8%B6%E5%AE%8C%E5%AA%B3%E5%A6%87%E5%B0%B1%E6%80%80%E5%AD%95%E4%BA%86%23) `141.0K 🔥` `+24%`
1. [33岁抗癌博主阿润离世](https://s.weibo.com/weibo?q=%2333%E5%B2%81%E6%8A%97%E7%99%8C%E5%8D%9A%E4%B8%BB%E9%98%BF%E6%B6%A6%E7%A6%BB%E4%B8%96%23) `113.1K 🔥` `+27%`
1. [重庆市长胡衡华被查 (Chongqing Mayor Hu Henghua was investigated)](https://s.weibo.com/weibo?q=%23%E9%87%8D%E5%BA%86%E5%B8%82%E9%95%BF%E8%83%A1%E8%A1%A1%E5%8D%8E%E8%A2%AB%E6%9F%A5%23) `1.1M 🔥`
1. [男子花350万元抄底7套天津老破小](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E8%8A%B1350%E4%B8%87%E5%85%83%E6%8A%84%E5%BA%957%E5%A5%97%E5%A4%A9%E6%B4%A5%E8%80%81%E7%A0%B4%E5%B0%8F%23) `761.9K 🔥`
1. [山姆被曝冷鲜猪肉是数月前屠宰的 (Sam’s chilled pork was revealed to have been slaughtered months ago)](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E5%A7%86%E8%A2%AB%E6%9B%9D%E5%86%B7%E9%B2%9C%E7%8C%AA%E8%82%89%E6%98%AF%E6%95%B0%E6%9C%88%E5%89%8D%E5%B1%A0%E5%AE%B0%E7%9A%84%23) `199.2K 🔥`
1. [退圈10年的顶流歌手满江杀回来了](https://s.weibo.com/weibo?q=%23%E9%80%80%E5%9C%8810%E5%B9%B4%E7%9A%84%E9%A1%B6%E6%B5%81%E6%AD%8C%E6%89%8B%E6%BB%A1%E6%B1%9F%E6%9D%80%E5%9B%9E%E6%9D%A5%E4%BA%86%23) `180.9K 🔥`
1. [男子缆车吸烟被劝阻后情绪失控 (Man loses control after being discouraged from smoking on cable car)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E7%BC%86%E8%BD%A6%E5%90%B8%E7%83%9F%E8%A2%AB%E5%8A%9D%E9%98%BB%E5%90%8E%E6%83%85%E7%BB%AA%E5%A4%B1%E6%8E%A7%23) `165.4K 🔥`
1. [铁路通报女子月经弄脏卧铺事件](https://s.weibo.com/weibo?q=%23%E9%93%81%E8%B7%AF%E9%80%9A%E6%8A%A5%E5%A5%B3%E5%AD%90%E6%9C%88%E7%BB%8F%E5%BC%84%E8%84%8F%E5%8D%A7%E9%93%BA%E4%BA%8B%E4%BB%B6%23) `160.8K 🔥`
1. [曝王一博乐华续约](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E7%8E%8B%E4%B8%80%E5%8D%9A%E4%B9%90%E5%8D%8E%E7%BB%AD%E7%BA%A6%23) `159.0K 🔥`
1. [迪丽热巴红衣女鬼塑](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E7%BA%A2%E8%A1%A3%E5%A5%B3%E9%AC%BC%E5%A1%91%23) `154.6K 🔥`
1. [大冰分享自己4个月减50斤的经验](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%86%B0%E5%88%86%E4%BA%AB%E8%87%AA%E5%B7%B14%E4%B8%AA%E6%9C%88%E5%87%8F50%E6%96%A4%E7%9A%84%E7%BB%8F%E9%AA%8C%23) `151.3K 🔥`
1. [女子举报退休领导母亲名下巨额财产](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E4%B8%BE%E6%8A%A5%E9%80%80%E4%BC%91%E9%A2%86%E5%AF%BC%E6%AF%8D%E4%BA%B2%E5%90%8D%E4%B8%8B%E5%B7%A8%E9%A2%9D%E8%B4%A2%E4%BA%A7%23) `148.9K 🔥`
1. [A股](https://s.weibo.com/weibo?q=%23A%E8%82%A1%23) `135.7K 🔥`
1. [夏弃疾拍的热巴陈飞宇 (Reba and Chen Feiyu photographed by Xia Qiji)](https://s.weibo.com/weibo?q=%23%E5%A4%8F%E5%BC%83%E7%96%BE%E6%8B%8D%E7%9A%84%E7%83%AD%E5%B7%B4%E9%99%88%E9%A3%9E%E5%AE%87%23) `116.1K 🔥`
1. [三亚回应戴军潜水时被拔呼吸器威胁 (Sanya responds to Dai Jun’s threat of having his respirator removed while diving)](https://s.weibo.com/weibo?q=%23%E4%B8%89%E4%BA%9A%E5%9B%9E%E5%BA%94%E6%88%B4%E5%86%9B%E6%BD%9C%E6%B0%B4%E6%97%B6%E8%A2%AB%E6%8B%94%E5%91%BC%E5%90%B8%E5%99%A8%E5%A8%81%E8%83%81%23) `109.9K 🔥`
1. [1岁幼儿睡前发现蜱虫钻进头皮在吸血](https://s.weibo.com/weibo?q=%231%E5%B2%81%E5%B9%BC%E5%84%BF%E7%9D%A1%E5%89%8D%E5%8F%91%E7%8E%B0%E8%9C%B1%E8%99%AB%E9%92%BB%E8%BF%9B%E5%A4%B4%E7%9A%AE%E5%9C%A8%E5%90%B8%E8%A1%80%23) `91.2K 🔥`
1. [女子每月痛经超20天求医生切子宫](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%AF%8F%E6%9C%88%E7%97%9B%E7%BB%8F%E8%B6%8520%E5%A4%A9%E6%B1%82%E5%8C%BB%E7%94%9F%E5%88%87%E5%AD%90%E5%AE%AB%23) `83.3K 🔥`
1. [山城小栗旬陈大榕结婚](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E5%9F%8E%E5%B0%8F%E6%A0%97%E6%97%AC%E9%99%88%E5%A4%A7%E6%A6%95%E7%BB%93%E5%A9%9A%23) `82.1K 🔥`
1. [黄金大跌买积存金亏了一辆车](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%E5%A4%A7%E8%B7%8C%E4%B9%B0%E7%A7%AF%E5%AD%98%E9%87%91%E4%BA%8F%E4%BA%86%E4%B8%80%E8%BE%86%E8%BD%A6%23) `75.9K 🔥`
1. [37岁牺牲民警抓捕视频公开](https://s.weibo.com/weibo?q=%2337%E5%B2%81%E7%89%BA%E7%89%B2%E6%B0%91%E8%AD%A6%E6%8A%93%E6%8D%95%E8%A7%86%E9%A2%91%E5%85%AC%E5%BC%80%23) `73.1K 🔥`
1. [沪指再度失守4000点](https://s.weibo.com/weibo?q=%23%E6%B2%AA%E6%8C%87%E5%86%8D%E5%BA%A6%E5%A4%B1%E5%AE%884000%E7%82%B9%23) `66.3K 🔥`
1. [BTS回归](https://s.weibo.com/weibo?q=%23BTS%E5%9B%9E%E5%BD%92%23) `166.3K 🔥` `-21%`
1. [手胖的人解释不清了](https://s.weibo.com/weibo?q=%23%E6%89%8B%E8%83%96%E7%9A%84%E4%BA%BA%E8%A7%A3%E9%87%8A%E4%B8%8D%E6%B8%85%E4%BA%86%23) `155.1K 🔥` `-24%`
1. [高叶爆料徐志胜不回微信](https://s.weibo.com/weibo?q=%23%E9%AB%98%E5%8F%B6%E7%88%86%E6%96%99%E5%BE%90%E5%BF%97%E8%83%9C%E4%B8%8D%E5%9B%9E%E5%BE%AE%E4%BF%A1%23) `90.0K 🔥` `-42%`
1. [张凌赫工作室连续删两条视频 (Zhang Linghe Studio deleted two videos in a row)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%B7%A5%E4%BD%9C%E5%AE%A4%E8%BF%9E%E7%BB%AD%E5%88%A0%E4%B8%A4%E6%9D%A1%E8%A7%86%E9%A2%91%23) `76.2K 🔥` `-22%`
1. [上海迪士尼十周年](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E8%BF%AA%E5%A3%AB%E5%B0%BC%E5%8D%81%E5%91%A8%E5%B9%B4%23) `73.1K 🔥` `-52%`
1. [张杰鸟巢站加场 (Zhangjie Bird's Nest Station added)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9D%B0%E9%B8%9F%E5%B7%A2%E7%AB%99%E5%8A%A0%E5%9C%BA%23) `70.4K 🔥` `-40%`
1. [A股半日放量1392亿 (A-share volume surged 139.2 billion in half-day)](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E5%8D%8A%E6%97%A5%E6%94%BE%E9%87%8F1392%E4%BA%BF%23) `67.6K 🔥` `-40%`

Updated at 2026-03-20 16:04:41

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
