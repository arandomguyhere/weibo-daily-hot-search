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

1. [三亚回应戴军潜水时被拔呼吸器威胁 (Sanya responds to Dai Jun’s threat of having his respirator removed while diving)](https://s.weibo.com/weibo?q=%23%E4%B8%89%E4%BA%9A%E5%9B%9E%E5%BA%94%E6%88%B4%E5%86%9B%E6%BD%9C%E6%B0%B4%E6%97%B6%E8%A2%AB%E6%8B%94%E5%91%BC%E5%90%B8%E5%99%A8%E5%A8%81%E8%83%81%23) `1.1M 🔥` `NEW`
1. [领克08极光套装灵感上新](https://s.weibo.com/weibo?q=%23%E9%A2%86%E5%85%8B08%E6%9E%81%E5%85%89%E5%A5%97%E8%A3%85%E7%81%B5%E6%84%9F%E4%B8%8A%E6%96%B0%23) `574.7K 🔥` `NEW`
1. [金正恩女儿试驾朝鲜新型主战坦克](https://s.weibo.com/weibo?q=%23%E9%87%91%E6%AD%A3%E6%81%A9%E5%A5%B3%E5%84%BF%E8%AF%95%E9%A9%BE%E6%9C%9D%E9%B2%9C%E6%96%B0%E5%9E%8B%E4%B8%BB%E6%88%98%E5%9D%A6%E5%85%8B%23) `526.2K 🔥` `NEW`
1. [张凌赫工作室连续删两条视频](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%B7%A5%E4%BD%9C%E5%AE%A4%E8%BF%9E%E7%BB%AD%E5%88%A0%E4%B8%A4%E6%9D%A1%E8%A7%86%E9%A2%91%23) `318.8K 🔥` `NEW`
1. [痞幼回应为什么不跟梅尼耶在一起](https://s.weibo.com/weibo?q=%23%E7%97%9E%E5%B9%BC%E5%9B%9E%E5%BA%94%E4%B8%BA%E4%BB%80%E4%B9%88%E4%B8%8D%E8%B7%9F%E6%A2%85%E5%B0%BC%E8%80%B6%E5%9C%A8%E4%B8%80%E8%B5%B7%23) `313.2K 🔥` `NEW`
1. [山城小栗旬陈大榕结婚](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E5%9F%8E%E5%B0%8F%E6%A0%97%E6%97%AC%E9%99%88%E5%A4%A7%E6%A6%95%E7%BB%93%E5%A9%9A%23) `224.1K 🔥` `NEW`
1. [让迪丽热巴演女鬼的简直是天才](https://s.weibo.com/weibo?q=%23%E8%AE%A9%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E6%BC%94%E5%A5%B3%E9%AC%BC%E7%9A%84%E7%AE%80%E7%9B%B4%E6%98%AF%E5%A4%A9%E6%89%8D%23) `145.6K 🔥` `NEW`
1. [打到臭车的那一刻天塌了](https://s.weibo.com/weibo?q=%23%E6%89%93%E5%88%B0%E8%87%AD%E8%BD%A6%E7%9A%84%E9%82%A3%E4%B8%80%E5%88%BB%E5%A4%A9%E5%A1%8C%E4%BA%86%23) `114.2K 🔥` `NEW`
1. [世界最长跨海大桥要来了](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9C%80%E9%95%BF%E8%B7%A8%E6%B5%B7%E5%A4%A7%E6%A1%A5%E8%A6%81%E6%9D%A5%E4%BA%86%23) `109.4K 🔥` `NEW`
1. [金泰亨镜头](https://s.weibo.com/weibo?q=%23%E9%87%91%E6%B3%B0%E4%BA%A8%E9%95%9C%E5%A4%B4%23) `102.2K 🔥` `NEW`
1. [42岁婆婆刚给儿子娶完媳妇就怀孕了 (The 42-year-old mother-in-law became pregnant just after marrying her son)](https://s.weibo.com/weibo?q=%2342%E5%B2%81%E5%A9%86%E5%A9%86%E5%88%9A%E7%BB%99%E5%84%BF%E5%AD%90%E5%A8%B6%E5%AE%8C%E5%AA%B3%E5%A6%87%E5%B0%B1%E6%80%80%E5%AD%95%E4%BA%86%23) `98.9K 🔥` `NEW`
1. [王一博有115部作品](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E6%9C%89115%E9%83%A8%E4%BD%9C%E5%93%81%23) `96.4K 🔥` `NEW`
1. [上班后自动开智](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E7%8F%AD%E5%90%8E%E8%87%AA%E5%8A%A8%E5%BC%80%E6%99%BA%23) `88.9K 🔥` `NEW`
1. [雪山救狐狸的风吹到了南部空军](https://s.weibo.com/weibo?q=%23%E9%9B%AA%E5%B1%B1%E6%95%91%E7%8B%90%E7%8B%B8%E7%9A%84%E9%A3%8E%E5%90%B9%E5%88%B0%E4%BA%86%E5%8D%97%E9%83%A8%E7%A9%BA%E5%86%9B%23) `84.2K 🔥` `NEW`
1. [李维嘉崩溃大哭到无法主持](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E7%BB%B4%E5%98%89%E5%B4%A9%E6%BA%83%E5%A4%A7%E5%93%AD%E5%88%B0%E6%97%A0%E6%B3%95%E4%B8%BB%E6%8C%81%23) `82.7K 🔥` `NEW`
1. [女子400万买内部渠道奢侈品被骗光](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90400%E4%B8%87%E4%B9%B0%E5%86%85%E9%83%A8%E6%B8%A0%E9%81%93%E5%A5%A2%E4%BE%88%E5%93%81%E8%A2%AB%E9%AA%97%E5%85%89%23) `78.6K 🔥` `NEW`
1. [阴阳师](https://s.weibo.com/weibo?q=%23%E9%98%B4%E9%98%B3%E5%B8%88%23) `77.8K 🔥` `NEW`
1. [高市见特朗普时逞强说英语](https://s.weibo.com/weibo?q=%23%E9%AB%98%E5%B8%82%E8%A7%81%E7%89%B9%E6%9C%97%E6%99%AE%E6%97%B6%E9%80%9E%E5%BC%BA%E8%AF%B4%E8%8B%B1%E8%AF%AD%23) `74.9K 🔥` `NEW`
1. [马龙霍启刚对谈](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E9%BE%99%E9%9C%8D%E5%90%AF%E5%88%9A%E5%AF%B9%E8%B0%88%23) `73.8K 🔥` `NEW`
1. [人类幼崽电量耗尽](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E7%B1%BB%E5%B9%BC%E5%B4%BD%E7%94%B5%E9%87%8F%E8%80%97%E5%B0%BD%23) `71.7K 🔥` `NEW`
1. [25岁女子牙疼口腔感染拖进ICU (25-year-old woman with toothache and oral infection dragged to ICU)](https://s.weibo.com/weibo?q=%2325%E5%B2%81%E5%A5%B3%E5%AD%90%E7%89%99%E7%96%BC%E5%8F%A3%E8%85%94%E6%84%9F%E6%9F%93%E6%8B%96%E8%BF%9BICU%23) `68.7K 🔥` `NEW`
1. [汉密尔顿离开中国的戒断反应](https://s.weibo.com/weibo?q=%23%E6%B1%89%E5%AF%86%E5%B0%94%E9%A1%BF%E7%A6%BB%E5%BC%80%E4%B8%AD%E5%9B%BD%E7%9A%84%E6%88%92%E6%96%AD%E5%8F%8D%E5%BA%94%23) `68.4K 🔥` `NEW`
1. [魏哲鸣体制内白月光杀回来了](https://s.weibo.com/weibo?q=%23%E9%AD%8F%E5%93%B2%E9%B8%A3%E4%BD%93%E5%88%B6%E5%86%85%E7%99%BD%E6%9C%88%E5%85%89%E6%9D%80%E5%9B%9E%E6%9D%A5%E4%BA%86%23) `67.9K 🔥` `NEW`
1. [男子缆车吸烟被劝阻后情绪失控](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E7%BC%86%E8%BD%A6%E5%90%B8%E7%83%9F%E8%A2%AB%E5%8A%9D%E9%98%BB%E5%90%8E%E6%83%85%E7%BB%AA%E5%A4%B1%E6%8E%A7%23) `67.6K 🔥` `NEW`
1. [三亚辟谣戴军在当地潜水被摘面罩](https://s.weibo.com/weibo?q=%23%E4%B8%89%E4%BA%9A%E8%BE%9F%E8%B0%A3%E6%88%B4%E5%86%9B%E5%9C%A8%E5%BD%93%E5%9C%B0%E6%BD%9C%E6%B0%B4%E8%A2%AB%E6%91%98%E9%9D%A2%E7%BD%A9%23) `66.8K 🔥` `NEW`
1. [最平整折叠屏OPPOFindN6火爆开售 (OPPO Find N6, the flattest folding screen, is now on sale)](https://s.weibo.com/weibo?q=%23%E6%9C%80%E5%B9%B3%E6%95%B4%E6%8A%98%E5%8F%A0%E5%B1%8FOPPOFindN6%E7%81%AB%E7%88%86%E5%BC%80%E5%94%AE%23) `623.0K 🔥` `+92%`
1. [BTS回归](https://s.weibo.com/weibo?q=%23BTS%E5%9B%9E%E5%BD%92%23) `587.4K 🔥` `+121%`
1. [手胖的人解释不清了](https://s.weibo.com/weibo?q=%23%E6%89%8B%E8%83%96%E7%9A%84%E4%BA%BA%E8%A7%A3%E9%87%8A%E4%B8%8D%E6%B8%85%E4%BA%86%23) `587.2K 🔥` `+354%`
1. [曝马斯克拟采购200亿中国光伏设备 (It is revealed that Musk plans to purchase 20 billion Chinese photovoltaic equipment)](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E9%A9%AC%E6%96%AF%E5%85%8B%E6%8B%9F%E9%87%87%E8%B4%AD200%E4%BA%BF%E4%B8%AD%E5%9B%BD%E5%85%89%E4%BC%8F%E8%AE%BE%E5%A4%87%23) `573.2K 🔥` `+555%`
1. [32G内存涨了约3000元 (32G memory has increased by about 3,000 yuan)](https://s.weibo.com/weibo?q=%2332G%E5%86%85%E5%AD%98%E6%B6%A8%E4%BA%86%E7%BA%A63000%E5%85%83%23) `542.3K 🔥` `+102%`
1. [孟羽童再上初入职场和董明珠说了](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E7%BE%BD%E7%AB%A5%E5%86%8D%E4%B8%8A%E5%88%9D%E5%85%A5%E8%81%8C%E5%9C%BA%E5%92%8C%E8%91%A3%E6%98%8E%E7%8F%A0%E8%AF%B4%E4%BA%86%23) `475.0K 🔥` `+84%`
1. [葛夕被留几手气哭了](https://s.weibo.com/weibo?q=%23%E8%91%9B%E5%A4%95%E8%A2%AB%E7%95%99%E5%87%A0%E6%89%8B%E6%B0%94%E5%93%AD%E4%BA%86%23) `458.3K 🔥` `+75%`
1. [女子举报退休领导母亲名下巨额财产](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E4%B8%BE%E6%8A%A5%E9%80%80%E4%BC%91%E9%A2%86%E5%AF%BC%E6%AF%8D%E4%BA%B2%E5%90%8D%E4%B8%8B%E5%B7%A8%E9%A2%9D%E8%B4%A2%E4%BA%A7%23) `442.8K 🔥` `+66%`
1. [迪丽热巴新经纪人郝阿三上岗了 (Dilireba’s new manager Hao Asan has taken up the post)](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E6%96%B0%E7%BB%8F%E7%BA%AA%E4%BA%BA%E9%83%9D%E9%98%BF%E4%B8%89%E4%B8%8A%E5%B2%97%E4%BA%86%23) `388.8K 🔥` `+47%`
1. [美军或夺岛迫伊朗开放霍尔木兹海峡](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%86%9B%E6%88%96%E5%A4%BA%E5%B2%9B%E8%BF%AB%E4%BC%8A%E6%9C%97%E5%BC%80%E6%94%BE%E9%9C%8D%E5%B0%94%E6%9C%A8%E5%85%B9%E6%B5%B7%E5%B3%A1%23) `318.6K 🔥` `+22%`
1. [巴西女子嫁给布娃娃还连生4子](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E8%A5%BF%E5%A5%B3%E5%AD%90%E5%AB%81%E7%BB%99%E5%B8%83%E5%A8%83%E5%A8%83%E8%BF%98%E8%BF%9E%E7%94%9F4%E5%AD%90%23) `309.0K 🔥` `+144%`
1. [1岁幼儿睡前发现蜱虫钻进头皮在吸血](https://s.weibo.com/weibo?q=%231%E5%B2%81%E5%B9%BC%E5%84%BF%E7%9D%A1%E5%89%8D%E5%8F%91%E7%8E%B0%E8%9C%B1%E8%99%AB%E9%92%BB%E8%BF%9B%E5%A4%B4%E7%9A%AE%E5%9C%A8%E5%90%B8%E8%A1%80%23) `148.4K 🔥` `+50%`
1. [南昌舰以一敌二逼退外舰细节公布](https://s.weibo.com/weibo?q=%23%E5%8D%97%E6%98%8C%E8%88%B0%E4%BB%A5%E4%B8%80%E6%95%8C%E4%BA%8C%E9%80%BC%E9%80%80%E5%A4%96%E8%88%B0%E7%BB%86%E8%8A%82%E5%85%AC%E5%B8%83%23) `793.2K 🔥`
1. [中国科学家培育出长寿水稻](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%A7%91%E5%AD%A6%E5%AE%B6%E5%9F%B9%E8%82%B2%E5%87%BA%E9%95%BF%E5%AF%BF%E6%B0%B4%E7%A8%BB%23) `626.2K 🔥`
1. [言承旭提词器 (Yan Chengxu teleprompter)](https://s.weibo.com/weibo?q=%23%E8%A8%80%E6%89%BF%E6%97%AD%E6%8F%90%E8%AF%8D%E5%99%A8%23) `315.9K 🔥`
1. [喜欢吃蓝莓和炒饭的都沉默了](https://s.weibo.com/weibo?q=%23%E5%96%9C%E6%AC%A2%E5%90%83%E8%93%9D%E8%8E%93%E5%92%8C%E7%82%92%E9%A5%AD%E7%9A%84%E9%83%BD%E6%B2%89%E9%BB%98%E4%BA%86%23) `311.2K 🔥`
1. [A股第8只千元股](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E7%AC%AC8%E5%8F%AA%E5%8D%83%E5%85%83%E8%82%A1%23) `306.9K 🔥`
1. [金价](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%23) `305.8K 🔥`
1. [单依纯 维密](https://s.weibo.com/weibo?q=%23%E5%8D%95%E4%BE%9D%E7%BA%AF%20%E7%BB%B4%E5%AF%86%23) `221.3K 🔥`
1. [泡过胖东来馒头的水清澈见底 (The water in which Fat Donglai Steamed Buns have been soaked is crystal clear.)](https://s.weibo.com/weibo?q=%23%E6%B3%A1%E8%BF%87%E8%83%96%E4%B8%9C%E6%9D%A5%E9%A6%92%E5%A4%B4%E7%9A%84%E6%B0%B4%E6%B8%85%E6%BE%88%E8%A7%81%E5%BA%95%23) `79.6K 🔥`
1. [你是迟来的欢喜定档 (You are the belated happy date)](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E6%98%AF%E8%BF%9F%E6%9D%A5%E7%9A%84%E6%AC%A2%E5%96%9C%E5%AE%9A%E6%A1%A3%23) `589.9K 🔥` `-46%`
1. [女子每月痛经超20天求医生切子宫](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%AF%8F%E6%9C%88%E7%97%9B%E7%BB%8F%E8%B6%8520%E5%A4%A9%E6%B1%82%E5%8C%BB%E7%94%9F%E5%88%87%E5%AD%90%E5%AE%AB%23) `141.3K 🔥` `-40%`
1. [白日提灯定档 (Daytime lantern scheduled)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%97%A5%E6%8F%90%E7%81%AF%E5%AE%9A%E6%A1%A3%23) `137.6K 🔥` `-53%`
1. [伊朗导弹击中以色列海法炼油厂 (Iranian missile hits Israeli oil refinery in Haifa)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%AF%BC%E5%BC%B9%E5%87%BB%E4%B8%AD%E4%BB%A5%E8%89%B2%E5%88%97%E6%B5%B7%E6%B3%95%E7%82%BC%E6%B2%B9%E5%8E%82%23) `124.2K 🔥` `-54%`
1. [原著谢征和长玉提了分手 (In the original work, Xie Zheng and Chang Yu broke up)](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E8%91%97%E8%B0%A2%E5%BE%81%E5%92%8C%E9%95%BF%E7%8E%89%E6%8F%90%E4%BA%86%E5%88%86%E6%89%8B%23) `108.2K 🔥` `-48%`
1. [女子罕见双子宫双阴道10年3次剖宫产](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E7%BD%95%E8%A7%81%E5%8F%8C%E5%AD%90%E5%AE%AB%E5%8F%8C%E9%98%B4%E9%81%9310%E5%B9%B43%E6%AC%A1%E5%89%96%E5%AE%AB%E4%BA%A7%23) `100.4K 🔥` `-37%`
1. [方圆自曝舍不得花钱](https://s.weibo.com/weibo?q=%23%E6%96%B9%E5%9C%86%E8%87%AA%E6%9B%9D%E8%88%8D%E4%B8%8D%E5%BE%97%E8%8A%B1%E9%92%B1%23) `72.1K 🔥` `-38%`

Updated at 2026-03-20 13:37:00

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
