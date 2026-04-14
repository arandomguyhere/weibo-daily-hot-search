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

1. [4人合伙买彩票中500万后起纠纷 (A dispute broke out after 4 people won 5 million in lottery tickets together.)](https://s.weibo.com/weibo?q=%234%E4%BA%BA%E5%90%88%E4%BC%99%E4%B9%B0%E5%BD%A9%E7%A5%A8%E4%B8%AD500%E4%B8%87%E5%90%8E%E8%B5%B7%E7%BA%A0%E7%BA%B7%23) `58.2K 🔥`
1. [公司连亏6年股价却暴涨10倍 (The company has been losing money for six consecutive years but its stock price has soared 10 times)](https://s.weibo.com/weibo?q=%23%E5%85%AC%E5%8F%B8%E8%BF%9E%E4%BA%8F6%E5%B9%B4%E8%82%A1%E4%BB%B7%E5%8D%B4%E6%9A%B4%E6%B6%A810%E5%80%8D%23) `23.6K 🔥`
1. [长期饭后吃水果或诱发糖尿病](https://s.weibo.com/weibo?q=%23%E9%95%BF%E6%9C%9F%E9%A5%AD%E5%90%8E%E5%90%83%E6%B0%B4%E6%9E%9C%E6%88%96%E8%AF%B1%E5%8F%91%E7%B3%96%E5%B0%BF%E7%97%85%23) `23.1K 🔥`
1. [十日终焉外景](https://s.weibo.com/weibo?q=%23%E5%8D%81%E6%97%A5%E7%BB%88%E7%84%89%E5%A4%96%E6%99%AF%23) `21.7K 🔥`
1. [特朗普说伊朗没牌了遭北约盟友打脸](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E8%AF%B4%E4%BC%8A%E6%9C%97%E6%B2%A1%E7%89%8C%E4%BA%86%E9%81%AD%E5%8C%97%E7%BA%A6%E7%9B%9F%E5%8F%8B%E6%89%93%E8%84%B8%23) `21.5K 🔥`
1. [五一飞往东南亚航班大规模取消](https://s.weibo.com/weibo?q=%23%E4%BA%94%E4%B8%80%E9%A3%9E%E5%BE%80%E4%B8%9C%E5%8D%97%E4%BA%9A%E8%88%AA%E7%8F%AD%E5%A4%A7%E8%A7%84%E6%A8%A1%E5%8F%96%E6%B6%88%23) `20.4K 🔥`
1. [尹锡悦夫妇法庭相见细节曝光](https://s.weibo.com/weibo?q=%23%E5%B0%B9%E9%94%A1%E6%82%A6%E5%A4%AB%E5%A6%87%E6%B3%95%E5%BA%AD%E7%9B%B8%E8%A7%81%E7%BB%86%E8%8A%82%E6%9B%9D%E5%85%89%23) `20.3K 🔥`
1. [中方从不承认所谓阿鲁纳恰尔邦](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%96%B9%E4%BB%8E%E4%B8%8D%E6%89%BF%E8%AE%A4%E6%89%80%E8%B0%93%E9%98%BF%E9%B2%81%E7%BA%B3%E6%81%B0%E5%B0%94%E9%82%A6%23) `19.0K 🔥`
1. [伊朗誓言确保霍尔木兹海峡控制权](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E8%AA%93%E8%A8%80%E7%A1%AE%E4%BF%9D%E9%9C%8D%E5%B0%94%E6%9C%A8%E5%85%B9%E6%B5%B7%E5%B3%A1%E6%8E%A7%E5%88%B6%E6%9D%83%23) `18.9K 🔥`
1. [41岁男子戴隐形眼镜睡一夜后失明 (41-year-old man goes blind after sleeping with contact lenses overnight)](https://s.weibo.com/weibo?q=%2341%E5%B2%81%E7%94%B7%E5%AD%90%E6%88%B4%E9%9A%90%E5%BD%A2%E7%9C%BC%E9%95%9C%E7%9D%A1%E4%B8%80%E5%A4%9C%E5%90%8E%E5%A4%B1%E6%98%8E%23) `18.3K 🔥`
1. [牛排店被查唯一干净的竟是喂狗碗](https://s.weibo.com/weibo?q=%23%E7%89%9B%E6%8E%92%E5%BA%97%E8%A2%AB%E6%9F%A5%E5%94%AF%E4%B8%80%E5%B9%B2%E5%87%80%E7%9A%84%E7%AB%9F%E6%98%AF%E5%96%82%E7%8B%97%E7%A2%97%23) `16.6K 🔥`
1. [班主任猥亵女学生被调到做后勤工作 (The head teacher who molested a female student was transferred to support work)](https://s.weibo.com/weibo?q=%23%E7%8F%AD%E4%B8%BB%E4%BB%BB%E7%8C%A5%E4%BA%B5%E5%A5%B3%E5%AD%A6%E7%94%9F%E8%A2%AB%E8%B0%83%E5%88%B0%E5%81%9A%E5%90%8E%E5%8B%A4%E5%B7%A5%E4%BD%9C%23) `16.4K 🔥`
1. [lululemon中国市场成救命稻草 (lululemon China market becomes life-saving straw)](https://s.weibo.com/weibo?q=%23lululemon%E4%B8%AD%E5%9B%BD%E5%B8%82%E5%9C%BA%E6%88%90%E6%95%91%E5%91%BD%E7%A8%BB%E8%8D%89%23) `15.9K 🔥`
1. [外卖员说最不能点的外卖是黄焖鸡 (The takeaway guy said the worst takeaway thing to order is braised chicken)](https://s.weibo.com/weibo?q=%23%E5%A4%96%E5%8D%96%E5%91%98%E8%AF%B4%E6%9C%80%E4%B8%8D%E8%83%BD%E7%82%B9%E7%9A%84%E5%A4%96%E5%8D%96%E6%98%AF%E9%BB%84%E7%84%96%E9%B8%A1%23) `15.8K 🔥`
1. [鞠婧祎露芜衣连续9天霸榜](https://s.weibo.com/weibo?q=%23%E9%9E%A0%E5%A9%A7%E7%A5%8E%E9%9C%B2%E8%8A%9C%E8%A1%A3%E8%BF%9E%E7%BB%AD9%E5%A4%A9%E9%9C%B8%E6%A6%9C%23) `15.3K 🔥`
1. [胖东来多宝鱼被指吃出溯源标签 (Fat Donglai Turbot was accused of eating traceability labels)](https://s.weibo.com/weibo?q=%23%E8%83%96%E4%B8%9C%E6%9D%A5%E5%A4%9A%E5%AE%9D%E9%B1%BC%E8%A2%AB%E6%8C%87%E5%90%83%E5%87%BA%E6%BA%AF%E6%BA%90%E6%A0%87%E7%AD%BE%23) `15.1K 🔥`
1. [7个亿的农业实训基地没基地](https://s.weibo.com/weibo?q=%237%E4%B8%AA%E4%BA%BF%E7%9A%84%E5%86%9C%E4%B8%9A%E5%AE%9E%E8%AE%AD%E5%9F%BA%E5%9C%B0%E6%B2%A1%E5%9F%BA%E5%9C%B0%23) `14.8K 🔥`
1. [外交部回应韩国标注中国台湾](https://s.weibo.com/weibo?q=%23%E5%A4%96%E4%BA%A4%E9%83%A8%E5%9B%9E%E5%BA%94%E9%9F%A9%E5%9B%BD%E6%A0%87%E6%B3%A8%E4%B8%AD%E5%9B%BD%E5%8F%B0%E6%B9%BE%23) `14.8K 🔥`
1. [33岁抗癌博主去世](https://s.weibo.com/weibo?q=%2333%E5%B2%81%E6%8A%97%E7%99%8C%E5%8D%9A%E4%B8%BB%E5%8E%BB%E4%B8%96%23) `14.8K 🔥`
1. [以黎代表在华盛顿举行会谈](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E9%BB%8E%E4%BB%A3%E8%A1%A8%E5%9C%A8%E5%8D%8E%E7%9B%9B%E9%A1%BF%E4%B8%BE%E8%A1%8C%E4%BC%9A%E8%B0%88%23) `14.8K 🔥`
1. [龚俊家事法庭收官视频](https://s.weibo.com/weibo?q=%23%E9%BE%9A%E4%BF%8A%E5%AE%B6%E4%BA%8B%E6%B3%95%E5%BA%AD%E6%94%B6%E5%AE%98%E8%A7%86%E9%A2%91%23) `14.8K 🔥`
1. [萨尔布吕肯将为樊振东办告别仪式](https://s.weibo.com/weibo?q=%23%E8%90%A8%E5%B0%94%E5%B8%83%E5%90%95%E8%82%AF%E5%B0%86%E4%B8%BA%E6%A8%8A%E6%8C%AF%E4%B8%9C%E5%8A%9E%E5%91%8A%E5%88%AB%E4%BB%AA%E5%BC%8F%23) `14.8K 🔥`
1. [中方回应美封锁伊海上交通 (China responds to US blockade of maritime traffic with Iran)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%96%B9%E5%9B%9E%E5%BA%94%E7%BE%8E%E5%B0%81%E9%94%81%E4%BC%8A%E6%B5%B7%E4%B8%8A%E4%BA%A4%E9%80%9A%23) `14.8K 🔥`
1. [女子习惯饭后吃水果血糖30险截肢](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E4%B9%A0%E6%83%AF%E9%A5%AD%E5%90%8E%E5%90%83%E6%B0%B4%E6%9E%9C%E8%A1%80%E7%B3%9630%E9%99%A9%E6%88%AA%E8%82%A2%23) `14.8K 🔥`
1. [尹锡悦夫妇时隔9个月法庭相见](https://s.weibo.com/weibo?q=%23%E5%B0%B9%E9%94%A1%E6%82%A6%E5%A4%AB%E5%A6%87%E6%97%B6%E9%9A%949%E4%B8%AA%E6%9C%88%E6%B3%95%E5%BA%AD%E7%9B%B8%E8%A7%81%23) `14.8K 🔥`
1. [苏新皓solo舞台全站第一](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E6%96%B0%E7%9A%93solo%E8%88%9E%E5%8F%B0%E5%85%A8%E7%AB%99%E7%AC%AC%E4%B8%80%23) `14.8K 🔥`
1. [什么是AI幻觉 (What is AI hallucination?)](https://s.weibo.com/weibo?q=%23%E4%BB%80%E4%B9%88%E6%98%AFAI%E5%B9%BB%E8%A7%89%23) `14.8K 🔥`
1. [鞠婧祎狐妖衣闻录第八回](https://s.weibo.com/weibo?q=%23%E9%9E%A0%E5%A9%A7%E7%A5%8E%E7%8B%90%E5%A6%96%E8%A1%A3%E9%97%BB%E5%BD%95%E7%AC%AC%E5%85%AB%E5%9B%9E%23) `14.8K 🔥`
1. [男子打赌输了被拍受辱视频后抑郁](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E6%89%93%E8%B5%8C%E8%BE%93%E4%BA%86%E8%A2%AB%E6%8B%8D%E5%8F%97%E8%BE%B1%E8%A7%86%E9%A2%91%E5%90%8E%E6%8A%91%E9%83%81%23) `14.8K 🔥`
1. [杨幂 越素越美 (Yang Mi is more beautiful as she becomes more plain.)](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%20%E8%B6%8A%E7%B4%A0%E8%B6%8A%E7%BE%8E%23) `14.8K 🔥`
1. [以防你不知道手机发展得有多快](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E9%98%B2%E4%BD%A0%E4%B8%8D%E7%9F%A5%E9%81%93%E6%89%8B%E6%9C%BA%E5%8F%91%E5%B1%95%E5%BE%97%E6%9C%89%E5%A4%9A%E5%BF%AB%23) `14.8K 🔥`
1. [66岁男子吸烟失火与87岁母亲身亡](https://s.weibo.com/weibo?q=%2366%E5%B2%81%E7%94%B7%E5%AD%90%E5%90%B8%E7%83%9F%E5%A4%B1%E7%81%AB%E4%B8%8E87%E5%B2%81%E6%AF%8D%E4%BA%B2%E8%BA%AB%E4%BA%A1%23) `14.8K 🔥`
1. [民航局回应一航班发生重着陆弹跳](https://s.weibo.com/weibo?q=%23%E6%B0%91%E8%88%AA%E5%B1%80%E5%9B%9E%E5%BA%94%E4%B8%80%E8%88%AA%E7%8F%AD%E5%8F%91%E7%94%9F%E9%87%8D%E7%9D%80%E9%99%86%E5%BC%B9%E8%B7%B3%23) `14.8K 🔥`
1. [广东将再次迎来暴雨](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E4%B8%9C%E5%B0%86%E5%86%8D%E6%AC%A1%E8%BF%8E%E6%9D%A5%E6%9A%B4%E9%9B%A8%23) `14.8K 🔥`
1. [孙颖莎megastar的含金量](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8Emegastar%E7%9A%84%E5%90%AB%E9%87%91%E9%87%8F%23) `14.8K 🔥`
1. [谁懂这次换手机的意义 (Who knows the significance of changing mobile phones this time?)](https://s.weibo.com/weibo?q=%23%E8%B0%81%E6%87%82%E8%BF%99%E6%AC%A1%E6%8D%A2%E6%89%8B%E6%9C%BA%E7%9A%84%E6%84%8F%E4%B9%89%23) `14.7K 🔥`
1. [医生回应每年体检突然查出中晚期肝癌 (Doctor responds to sudden diagnosis of intermediate and advanced liver cancer during annual physical examination)](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E7%94%9F%E5%9B%9E%E5%BA%94%E6%AF%8F%E5%B9%B4%E4%BD%93%E6%A3%80%E7%AA%81%E7%84%B6%E6%9F%A5%E5%87%BA%E4%B8%AD%E6%99%9A%E6%9C%9F%E8%82%9D%E7%99%8C%23) `14.7K 🔥`
1. [蜜语纪热度](https://s.weibo.com/weibo?q=%23%E8%9C%9C%E8%AF%AD%E7%BA%AA%E7%83%AD%E5%BA%A6%23) `14.7K 🔥`
1. [卖不完的果切都去哪了](https://s.weibo.com/weibo?q=%23%E5%8D%96%E4%B8%8D%E5%AE%8C%E7%9A%84%E6%9E%9C%E5%88%87%E9%83%BD%E5%8E%BB%E5%93%AA%E4%BA%86%23) `14.7K 🔥`
1. [IG战胜TES (IG defeated TES)](https://s.weibo.com/weibo?q=%23IG%E6%88%98%E8%83%9CTES%23) `14.7K 🔥`
1. [原神布伦妮](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E7%A5%9E%E5%B8%83%E4%BC%A6%E5%A6%AE%23) `14.7K 🔥`
1. [网友给拼豆店提建议被老板一一反驳](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%8F%8B%E7%BB%99%E6%8B%BC%E8%B1%86%E5%BA%97%E6%8F%90%E5%BB%BA%E8%AE%AE%E8%A2%AB%E8%80%81%E6%9D%BF%E4%B8%80%E4%B8%80%E5%8F%8D%E9%A9%B3%23) `31.0K 🔥` `-30%`
1. [赏花经济点亮乡村振兴新图景 (Flower appreciation economy lights up new picture of rural revitalization)](https://s.weibo.com/weibo?q=%23%E8%B5%8F%E8%8A%B1%E7%BB%8F%E6%B5%8E%E7%82%B9%E4%BA%AE%E4%B9%A1%E6%9D%91%E6%8C%AF%E5%85%B4%E6%96%B0%E5%9B%BE%E6%99%AF%23) `23.7K 🔥` `-22%`
1. [新科技旗舰小鹏GX今晚预售 (New technology flagship Xpeng GX is on pre-sale tonight)](https://s.weibo.com/weibo?q=%23%E6%96%B0%E7%A7%91%E6%8A%80%E6%97%97%E8%88%B0%E5%B0%8F%E9%B9%8FGX%E4%BB%8A%E6%99%9A%E9%A2%84%E5%94%AE%23) `23.7K 🔥` `-22%`
1. [上万美军正封锁进出伊朗港口船只](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E4%B8%87%E7%BE%8E%E5%86%9B%E6%AD%A3%E5%B0%81%E9%94%81%E8%BF%9B%E5%87%BA%E4%BC%8A%E6%9C%97%E6%B8%AF%E5%8F%A3%E8%88%B9%E5%8F%AA%23) `23.7K 🔥` `-23%`
1. [伊朗看透了 (Iran has seen through)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E7%9C%8B%E9%80%8F%E4%BA%86%23) `23.6K 🔥` `-22%`
1. [腾势Z9GT首登时尚顶刊](https://s.weibo.com/weibo?q=%23%E8%85%BE%E5%8A%BFZ9GT%E9%A6%96%E7%99%BB%E6%97%B6%E5%B0%9A%E9%A1%B6%E5%88%8A%23) `23.5K 🔥` `-56%`
1. [者来家族扩大](https://s.weibo.com/weibo?q=%23%E8%80%85%E6%9D%A5%E5%AE%B6%E6%97%8F%E6%89%A9%E5%A4%A7%23) `22.3K 🔥` `-25%`
1. [微信余额没三五百元不给面试引争议 (Don’t cause controversy in interviews if your WeChat balance is less than three to five hundred yuan)](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E4%BF%A1%E4%BD%99%E9%A2%9D%E6%B2%A1%E4%B8%89%E4%BA%94%E7%99%BE%E5%85%83%E4%B8%8D%E7%BB%99%E9%9D%A2%E8%AF%95%E5%BC%95%E4%BA%89%E8%AE%AE%23) `16.5K 🔥` `-22%`
1. [网传虞书欣邓为主演神仙肉](https://s.weibo.com/weibo?q=%23%E7%BD%91%E4%BC%A0%E8%99%9E%E4%B9%A6%E6%AC%A3%E9%82%93%E4%B8%BA%E4%B8%BB%E6%BC%94%E7%A5%9E%E4%BB%99%E8%82%89%23) `16.0K 🔥` `-23%`
1. [2026美加墨世界杯球衣翻车](https://s.weibo.com/weibo?q=%232026%E7%BE%8E%E5%8A%A0%E5%A2%A8%E4%B8%96%E7%95%8C%E6%9D%AF%E7%90%83%E8%A1%A3%E7%BF%BB%E8%BD%A6%23) `14.7K 🔥` `-40%`

Updated at 2026-04-15 04:34:02

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
