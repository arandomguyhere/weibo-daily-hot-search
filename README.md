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

1. [孙杨张豆豆有孩子了 (Sun Yang and Zhang Doudou have a child)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%9D%A8%E5%BC%A0%E8%B1%86%E8%B1%86%E6%9C%89%E5%AD%A9%E5%AD%90%E4%BA%86%23) `1.1M 🔥` `NEW`
1. [男子被保时捷车主当交警面威胁](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E8%A2%AB%E4%BF%9D%E6%97%B6%E6%8D%B7%E8%BD%A6%E4%B8%BB%E5%BD%93%E4%BA%A4%E8%AD%A6%E9%9D%A2%E5%A8%81%E8%83%81%23) `793.8K 🔥` `NEW`
1. [最新暴雨强对流预警](https://s.weibo.com/weibo?q=%23%E6%9C%80%E6%96%B0%E6%9A%B4%E9%9B%A8%E5%BC%BA%E5%AF%B9%E6%B5%81%E9%A2%84%E8%AD%A6%23) `618.3K 🔥` `NEW`
1. [李纯马𬱖不办婚礼不拍婚纱照](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E7%BA%AF%E9%A9%AC%F0%AC%B1%96%E4%B8%8D%E5%8A%9E%E5%A9%9A%E7%A4%BC%E4%B8%8D%E6%8B%8D%E5%A9%9A%E7%BA%B1%E7%85%A7%23) `555.4K 🔥` `NEW`
1. [sbti测试](https://s.weibo.com/weibo?q=%23sbti%E6%B5%8B%E8%AF%95%23) `251.0K 🔥` `NEW`
1. [王者峡谷变色了](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%80%85%E5%B3%A1%E8%B0%B7%E5%8F%98%E8%89%B2%E4%BA%86%23) `171.1K 🔥` `NEW`
1. [薛之谦满头斑秃和水泡](https://s.weibo.com/weibo?q=%23%E8%96%9B%E4%B9%8B%E8%B0%A6%E6%BB%A1%E5%A4%B4%E6%96%91%E7%A7%83%E5%92%8C%E6%B0%B4%E6%B3%A1%23) `168.8K 🔥` `NEW`
1. [伊朗](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%23) `163.6K 🔥` `NEW`
1. [瘫痪女孩误买邓紫棋演唱会票平台拒退](https://s.weibo.com/weibo?q=%23%E7%98%AB%E7%97%AA%E5%A5%B3%E5%AD%A9%E8%AF%AF%E4%B9%B0%E9%82%93%E7%B4%AB%E6%A3%8B%E6%BC%94%E5%94%B1%E4%BC%9A%E7%A5%A8%E5%B9%B3%E5%8F%B0%E6%8B%92%E9%80%80%23) `158.4K 🔥` `NEW`
1. [中国军队有足够的能力反制威胁挑衅](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%86%9B%E9%98%9F%E6%9C%89%E8%B6%B3%E5%A4%9F%E7%9A%84%E8%83%BD%E5%8A%9B%E5%8F%8D%E5%88%B6%E5%A8%81%E8%83%81%E6%8C%91%E8%A1%85%23) `147.2K 🔥` `NEW`
1. [3秒即可克隆声音改词仅需不到1元 (You can clone the voice and change the words in 3 seconds for less than 1 yuan)](https://s.weibo.com/weibo?q=%233%E7%A7%92%E5%8D%B3%E5%8F%AF%E5%85%8B%E9%9A%86%E5%A3%B0%E9%9F%B3%E6%94%B9%E8%AF%8D%E4%BB%85%E9%9C%80%E4%B8%8D%E5%88%B01%E5%85%83%23) `146.7K 🔥` `NEW`
1. [9位乳腺癌患者自述早期信号](https://s.weibo.com/weibo?q=%239%E4%BD%8D%E4%B9%B3%E8%85%BA%E7%99%8C%E6%82%A3%E8%80%85%E8%87%AA%E8%BF%B0%E6%97%A9%E6%9C%9F%E4%BF%A1%E5%8F%B7%23) `145.9K 🔥` `NEW`
1. [以色列算盘打得太响](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E8%89%B2%E5%88%97%E7%AE%97%E7%9B%98%E6%89%93%E5%BE%97%E5%A4%AA%E5%93%8D%23) `142.2K 🔥` `NEW`
1. [特朗普称美伊停火不包括黎巴嫩](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E7%A7%B0%E7%BE%8E%E4%BC%8A%E5%81%9C%E7%81%AB%E4%B8%8D%E5%8C%85%E6%8B%AC%E9%BB%8E%E5%B7%B4%E5%AB%A9%23) `140.0K 🔥` `NEW`
1. [猫咪掉进百斤酒缸捞出后已快断片](https://s.weibo.com/weibo?q=%23%E7%8C%AB%E5%92%AA%E6%8E%89%E8%BF%9B%E7%99%BE%E6%96%A4%E9%85%92%E7%BC%B8%E6%8D%9E%E5%87%BA%E5%90%8E%E5%B7%B2%E5%BF%AB%E6%96%AD%E7%89%87%23) `139.9K 🔥` `NEW`
1. [张萌曾找过楚乔传原班人马](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E8%90%8C%E6%9B%BE%E6%89%BE%E8%BF%87%E6%A5%9A%E4%B9%94%E4%BC%A0%E5%8E%9F%E7%8F%AD%E4%BA%BA%E9%A9%AC%23) `133.0K 🔥` `NEW`
1. [优衣库被曝靠偷拍消费者防盗](https://s.weibo.com/weibo?q=%23%E4%BC%98%E8%A1%A3%E5%BA%93%E8%A2%AB%E6%9B%9D%E9%9D%A0%E5%81%B7%E6%8B%8D%E6%B6%88%E8%B4%B9%E8%80%85%E9%98%B2%E7%9B%97%23) `123.4K 🔥` `NEW`
1. [曝穆祉丞将演十日终焉金元勋](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E7%A9%86%E7%A5%89%E4%B8%9E%E5%B0%86%E6%BC%94%E5%8D%81%E6%97%A5%E7%BB%88%E7%84%89%E9%87%91%E5%85%83%E5%8B%8B%23) `99.5K 🔥` `NEW`
1. [狗狗精力太旺盛时就给它吃糯米纸](https://s.weibo.com/weibo?q=%23%E7%8B%97%E7%8B%97%E7%B2%BE%E5%8A%9B%E5%A4%AA%E6%97%BA%E7%9B%9B%E6%97%B6%E5%B0%B1%E7%BB%99%E5%AE%83%E5%90%83%E7%B3%AF%E7%B1%B3%E7%BA%B8%23) `98.8K 🔥` `NEW`
1. [合伙人定档官宣](https://s.weibo.com/weibo?q=%23%E5%90%88%E4%BC%99%E4%BA%BA%E5%AE%9A%E6%A1%A3%E5%AE%98%E5%AE%A3%23) `92.1K 🔥` `NEW`
1. [小时候吃的蘑古力居然是盗版 (The mushroom gullet I ate when I was a kid turned out to be a pirated version)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E6%97%B6%E5%80%99%E5%90%83%E7%9A%84%E8%98%91%E5%8F%A4%E5%8A%9B%E5%B1%85%E7%84%B6%E6%98%AF%E7%9B%97%E7%89%88%23) `89.9K 🔥` `NEW`
1. [多位艺人成名前都当过爱格模特](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E4%BD%8D%E8%89%BA%E4%BA%BA%E6%88%90%E5%90%8D%E5%89%8D%E9%83%BD%E5%BD%93%E8%BF%87%E7%88%B1%E6%A0%BC%E6%A8%A1%E7%89%B9%23) `88.2K 🔥` `NEW`
1. [以军称黎真主党领导人死亡](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E5%86%9B%E7%A7%B0%E9%BB%8E%E7%9C%9F%E4%B8%BB%E5%85%9A%E9%A2%86%E5%AF%BC%E4%BA%BA%E6%AD%BB%E4%BA%A1%23) `87.9K 🔥` `NEW`
1. [黄金转跌原因找到了](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%E8%BD%AC%E8%B7%8C%E5%8E%9F%E5%9B%A0%E6%89%BE%E5%88%B0%E4%BA%86%23) `76.7K 🔥` `NEW`
1. [峰学蔚来恢复常态化直播](https://s.weibo.com/weibo?q=%23%E5%B3%B0%E5%AD%A6%E8%94%9A%E6%9D%A5%E6%81%A2%E5%A4%8D%E5%B8%B8%E6%80%81%E5%8C%96%E7%9B%B4%E6%92%AD%23) `74.7K 🔥` `NEW`
1. [伊朗代表团9日晚抵达](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E4%BB%A3%E8%A1%A8%E5%9B%A29%E6%97%A5%E6%99%9A%E6%8A%B5%E8%BE%BE%23) `74.6K 🔥` `NEW`
1. [美国的停火谈判被以色列加了备注 (U.S. ceasefire talks were remarked by Israel)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E7%9A%84%E5%81%9C%E7%81%AB%E8%B0%88%E5%88%A4%E8%A2%AB%E4%BB%A5%E8%89%B2%E5%88%97%E5%8A%A0%E4%BA%86%E5%A4%87%E6%B3%A8%23) `281.9K 🔥` `+103%`
1. [胃癌真的是拖出来的](https://s.weibo.com/weibo?q=%23%E8%83%83%E7%99%8C%E7%9C%9F%E7%9A%84%E6%98%AF%E6%8B%96%E5%87%BA%E6%9D%A5%E7%9A%84%23) `156.8K 🔥` `+48%`
1. [蔚来ES9正式发布](https://s.weibo.com/weibo?q=%23%E8%94%9A%E6%9D%A5ES9%E6%AD%A3%E5%BC%8F%E5%8F%91%E5%B8%83%23) `266.8K 🔥`
1. [金莎孙丞潇领证 (Jinsha Sun Chengxiao receives the certificate)](https://s.weibo.com/weibo?q=%23%E9%87%91%E8%8E%8E%E5%AD%99%E4%B8%9E%E6%BD%87%E9%A2%86%E8%AF%81%23) `165.6K 🔥`
1. [郑合惠子签约杨幂新公司](https://s.weibo.com/weibo?q=%23%E9%83%91%E5%90%88%E6%83%A0%E5%AD%90%E7%AD%BE%E7%BA%A6%E6%9D%A8%E5%B9%82%E6%96%B0%E5%85%AC%E5%8F%B8%23) `154.0K 🔥`
1. [金子涵直播疑似求救 (Jin Jinhan's live broadcast is suspected of asking for help)](https://s.weibo.com/weibo?q=%23%E9%87%91%E5%AD%90%E6%B6%B5%E7%9B%B4%E6%92%AD%E7%96%91%E4%BC%BC%E6%B1%82%E6%95%91%23) `146.3K 🔥`
1. [35岁孕妇吃冰箱剩菜后去世](https://s.weibo.com/weibo?q=%2335%E5%B2%81%E5%AD%95%E5%A6%87%E5%90%83%E5%86%B0%E7%AE%B1%E5%89%A9%E8%8F%9C%E5%90%8E%E5%8E%BB%E4%B8%96%23) `141.3K 🔥`
1. [金子涵称后脑勺伤疤是植发手术留下的 (Jin Jinhan said the scar on the back of his head was caused by hair transplant surgery)](https://s.weibo.com/weibo?q=%23%E9%87%91%E5%AD%90%E6%B6%B5%E7%A7%B0%E5%90%8E%E8%84%91%E5%8B%BA%E4%BC%A4%E7%96%A4%E6%98%AF%E6%A4%8D%E5%8F%91%E6%89%8B%E6%9C%AF%E7%95%99%E4%B8%8B%E7%9A%84%23) `141.1K 🔥`
1. [用了很久的苹果手机才发现的功能](https://s.weibo.com/weibo?q=%23%E7%94%A8%E4%BA%86%E5%BE%88%E4%B9%85%E7%9A%84%E8%8B%B9%E6%9E%9C%E6%89%8B%E6%9C%BA%E6%89%8D%E5%8F%91%E7%8E%B0%E7%9A%84%E5%8A%9F%E8%83%BD%23) `115.9K 🔥`
1. [伊朗外长说美国必须二选一](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%A4%96%E9%95%BF%E8%AF%B4%E7%BE%8E%E5%9B%BD%E5%BF%85%E9%A1%BB%E4%BA%8C%E9%80%89%E4%B8%80%23) `273.4K 🔥` `-38%`
1. [女孩玩拼豆不幸触电离世 (Girl dies after being electrocuted while playing Pinto)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%A9%E7%8E%A9%E6%8B%BC%E8%B1%86%E4%B8%8D%E5%B9%B8%E8%A7%A6%E7%94%B5%E7%A6%BB%E4%B8%96%23) `261.8K 🔥` `-57%`
1. [房贷年利率3.8变8.7五年才发现](https://s.weibo.com/weibo?q=%23%E6%88%BF%E8%B4%B7%E5%B9%B4%E5%88%A9%E7%8E%873.8%E5%8F%988.7%E4%BA%94%E5%B9%B4%E6%89%8D%E5%8F%91%E7%8E%B0%23) `237.9K 🔥` `-78%`
1. [金莎孙丞潇已完成婚前财产公证](https://s.weibo.com/weibo?q=%23%E9%87%91%E8%8E%8E%E5%AD%99%E4%B8%9E%E6%BD%87%E5%B7%B2%E5%AE%8C%E6%88%90%E5%A9%9A%E5%89%8D%E8%B4%A2%E4%BA%A7%E5%85%AC%E8%AF%81%23) `149.3K 🔥` `-21%`
1. [孙俪回应危险关系收视率不好](https://s.weibo.com/weibo?q=%23%E5%AD%99%E4%BF%AA%E5%9B%9E%E5%BA%94%E5%8D%B1%E9%99%A9%E5%85%B3%E7%B3%BB%E6%94%B6%E8%A7%86%E7%8E%87%E4%B8%8D%E5%A5%BD%23) `147.0K 🔥` `-22%`
1. [迪丽热巴不知道市面上有什么剧本](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E4%B8%8D%E7%9F%A5%E9%81%93%E5%B8%82%E9%9D%A2%E4%B8%8A%E6%9C%89%E4%BB%80%E4%B9%88%E5%89%A7%E6%9C%AC%23) `146.3K 🔥` `-25%`
1. [十万头猪拱进沙漠治沙真成了](https://s.weibo.com/weibo?q=%23%E5%8D%81%E4%B8%87%E5%A4%B4%E7%8C%AA%E6%8B%B1%E8%BF%9B%E6%B2%99%E6%BC%A0%E6%B2%BB%E6%B2%99%E7%9C%9F%E6%88%90%E4%BA%86%23) `145.7K 🔥` `-55%`
1. [20元中6715万彩票店老板发声](https://s.weibo.com/weibo?q=%2320%E5%85%83%E4%B8%AD6715%E4%B8%87%E5%BD%A9%E7%A5%A8%E5%BA%97%E8%80%81%E6%9D%BF%E5%8F%91%E5%A3%B0%23) `134.2K 🔥` `-33%`
1. [张豆豆回应孙杨被说妈宝男 (Zhang Doudou responded to Sun Yang being called a "baby boy")](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E8%B1%86%E8%B1%86%E5%9B%9E%E5%BA%94%E5%AD%99%E6%9D%A8%E8%A2%AB%E8%AF%B4%E5%A6%88%E5%AE%9D%E7%94%B7%23) `125.3K 🔥` `-84%`
1. [蓝莓价格几乎腰斩](https://s.weibo.com/weibo?q=%23%E8%93%9D%E8%8E%93%E4%BB%B7%E6%A0%BC%E5%87%A0%E4%B9%8E%E8%85%B0%E6%96%A9%23) `104.2K 🔥` `-51%`
1. [张萌谈冰湖重生为什么没换角 (Zhang Meng talks about why the character was not changed in Ice Lake Rebirth)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E8%90%8C%E8%B0%88%E5%86%B0%E6%B9%96%E9%87%8D%E7%94%9F%E4%B8%BA%E4%BB%80%E4%B9%88%E6%B2%A1%E6%8D%A2%E8%A7%92%23) `102.9K 🔥` `-56%`
1. [女子空腹半斤蓝莓连吃两天患胃石症](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E7%A9%BA%E8%85%B9%E5%8D%8A%E6%96%A4%E8%93%9D%E8%8E%93%E8%BF%9E%E5%90%83%E4%B8%A4%E5%A4%A9%E6%82%A3%E8%83%83%E7%9F%B3%E7%97%87%23) `93.9K 🔥` `-44%`
1. [81岁的潘迎紫](https://s.weibo.com/weibo?q=%2381%E5%B2%81%E7%9A%84%E6%BD%98%E8%BF%8E%E7%B4%AB%23) `90.5K 🔥` `-47%`
1. [以色列政坛集体破防](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E8%89%B2%E5%88%97%E6%94%BF%E5%9D%9B%E9%9B%86%E4%BD%93%E7%A0%B4%E9%98%B2%23) `88.4K 🔥` `-54%`
1. [乳腺癌早期的5个警示症状](https://s.weibo.com/weibo?q=%23%E4%B9%B3%E8%85%BA%E7%99%8C%E6%97%A9%E6%9C%9F%E7%9A%845%E4%B8%AA%E8%AD%A6%E7%A4%BA%E7%97%87%E7%8A%B6%23) `85.3K 🔥` `-55%`
1. [垫底辣孩回应恋情 (The hottie at the bottom responds to love)](https://s.weibo.com/weibo?q=%23%E5%9E%AB%E5%BA%95%E8%BE%A3%E5%AD%A9%E5%9B%9E%E5%BA%94%E6%81%8B%E6%83%85%23) `77.5K 🔥` `-42%`

Updated at 2026-04-09 16:23:22

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
