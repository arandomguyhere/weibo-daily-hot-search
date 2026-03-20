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

1. [沈腾说有点不配站在马丽旁边 (Shen Teng said he was a little unworthy to stand next to Ma Li.)](https://s.weibo.com/weibo?q=%23%E6%B2%88%E8%85%BE%E8%AF%B4%E6%9C%89%E7%82%B9%E4%B8%8D%E9%85%8D%E7%AB%99%E5%9C%A8%E9%A9%AC%E4%B8%BD%E6%97%81%E8%BE%B9%23) `346.8K 🔥` `NEW`
1. [在泰射击场中弹中国游客女儿发声](https://s.weibo.com/weibo?q=%23%E5%9C%A8%E6%B3%B0%E5%B0%84%E5%87%BB%E5%9C%BA%E4%B8%AD%E5%BC%B9%E4%B8%AD%E5%9B%BD%E6%B8%B8%E5%AE%A2%E5%A5%B3%E5%84%BF%E5%8F%91%E5%A3%B0%23) `290.3K 🔥` `NEW`
1. [山姆回应所售鲜猪肉是数月前屠宰](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E5%A7%86%E5%9B%9E%E5%BA%94%E6%89%80%E5%94%AE%E9%B2%9C%E7%8C%AA%E8%82%89%E6%98%AF%E6%95%B0%E6%9C%88%E5%89%8D%E5%B1%A0%E5%AE%B0%23) `270.8K 🔥` `NEW`
1. [女子听信科学坐月子落下月子病](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%90%AC%E4%BF%A1%E7%A7%91%E5%AD%A6%E5%9D%90%E6%9C%88%E5%AD%90%E8%90%BD%E4%B8%8B%E6%9C%88%E5%AD%90%E7%97%85%23) `243.0K 🔥` `NEW`
1. [黄金白银狂泻](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%E7%99%BD%E9%93%B6%E7%8B%82%E6%B3%BB%23) `168.7K 🔥` `NEW`
1. [伊朗最高领袖就伊朗新年发表贺词](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%9C%80%E9%AB%98%E9%A2%86%E8%A2%96%E5%B0%B1%E4%BC%8A%E6%9C%97%E6%96%B0%E5%B9%B4%E5%8F%91%E8%A1%A8%E8%B4%BA%E8%AF%8D%23) `144.3K 🔥` `NEW`
1. [谷爱凌雪盟总决赛夺冠](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E9%9B%AA%E7%9B%9F%E6%80%BB%E5%86%B3%E8%B5%9B%E5%A4%BA%E5%86%A0%23) `88.8K 🔥` `NEW`
1. [迪丽热巴的项链是护身符](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E7%9A%84%E9%A1%B9%E9%93%BE%E6%98%AF%E6%8A%A4%E8%BA%AB%E7%AC%A6%23) `84.6K 🔥` `NEW`
1. [宁娘的富贵命格藏不住了](https://s.weibo.com/weibo?q=%23%E5%AE%81%E5%A8%98%E7%9A%84%E5%AF%8C%E8%B4%B5%E5%91%BD%E6%A0%BC%E8%97%8F%E4%B8%8D%E4%BD%8F%E4%BA%86%23) `84.1K 🔥` `NEW`
1. [最快女护士张水华辞职后最新近况](https://s.weibo.com/weibo?q=%23%E6%9C%80%E5%BF%AB%E5%A5%B3%E6%8A%A4%E5%A3%AB%E5%BC%A0%E6%B0%B4%E5%8D%8E%E8%BE%9E%E8%81%8C%E5%90%8E%E6%9C%80%E6%96%B0%E8%BF%91%E5%86%B5%23) `74.2K 🔥` `NEW`
1. [女子办离婚被问你要离哪一段 (When a woman went through a divorce, she was asked which period she wanted to divorce from.)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%8A%9E%E7%A6%BB%E5%A9%9A%E8%A2%AB%E9%97%AE%E4%BD%A0%E8%A6%81%E7%A6%BB%E5%93%AA%E4%B8%80%E6%AE%B5%23) `63.8K 🔥` `NEW`
1. [不痛不痒29岁男子满口牙齿全掉光](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E7%97%9B%E4%B8%8D%E7%97%9229%E5%B2%81%E7%94%B7%E5%AD%90%E6%BB%A1%E5%8F%A3%E7%89%99%E9%BD%BF%E5%85%A8%E6%8E%89%E5%85%89%23) `58.2K 🔥` `NEW`
1. [掌掴幼儿事件孩子妈妈发声](https://s.weibo.com/weibo?q=%23%E6%8E%8C%E6%8E%B4%E5%B9%BC%E5%84%BF%E4%BA%8B%E4%BB%B6%E5%AD%A9%E5%AD%90%E5%A6%88%E5%A6%88%E5%8F%91%E5%A3%B0%23) `53.2K 🔥` `NEW`
1. [长玉妈咪](https://s.weibo.com/weibo?q=%23%E9%95%BF%E7%8E%89%E5%A6%88%E5%92%AA%23) `52.0K 🔥` `NEW`
1. [中方回应日美领导人会谈](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%96%B9%E5%9B%9E%E5%BA%94%E6%97%A5%E7%BE%8E%E9%A2%86%E5%AF%BC%E4%BA%BA%E4%BC%9A%E8%B0%88%23) `49.6K 🔥` `NEW`
1. [易烊千玺白T获奖感言](https://s.weibo.com/weibo?q=%23%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%E7%99%BDT%E8%8E%B7%E5%A5%96%E6%84%9F%E8%A8%80%23) `47.7K 🔥` `NEW`
1. [女子托人看娃如厕后儿子失踪](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%89%98%E4%BA%BA%E7%9C%8B%E5%A8%83%E5%A6%82%E5%8E%95%E5%90%8E%E5%84%BF%E5%AD%90%E5%A4%B1%E8%B8%AA%23) `45.4K 🔥` `NEW`
1. [多地日本民众疯抢卫生纸](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E5%9C%B0%E6%97%A5%E6%9C%AC%E6%B0%91%E4%BC%97%E7%96%AF%E6%8A%A2%E5%8D%AB%E7%94%9F%E7%BA%B8%23) `42.8K 🔥` `NEW`
1. [油价或全面涨至9元时代](https://s.weibo.com/weibo?q=%23%E6%B2%B9%E4%BB%B7%E6%88%96%E5%85%A8%E9%9D%A2%E6%B6%A8%E8%87%B39%E5%85%83%E6%97%B6%E4%BB%A3%23) `40.4K 🔥` `NEW`
1. [Gala对线遭对手调侃](https://s.weibo.com/weibo?q=%23Gala%E5%AF%B9%E7%BA%BF%E9%81%AD%E5%AF%B9%E6%89%8B%E8%B0%83%E4%BE%83%23) `40.4K 🔥` `NEW`
1. [黄金或成风险资产 (Gold may become a risky asset)](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%E6%88%96%E6%88%90%E9%A3%8E%E9%99%A9%E8%B5%84%E4%BA%A7%23) `39.2K 🔥` `NEW`
1. [伯恩茅斯2比2曼联](https://s.weibo.com/weibo?q=%23%E4%BC%AF%E6%81%A9%E8%8C%85%E6%96%AF2%E6%AF%942%E6%9B%BC%E8%81%94%23) `38.3K 🔥` `NEW`
1. [G2暗示Caps进入名人堂](https://s.weibo.com/weibo?q=%23G2%E6%9A%97%E7%A4%BACaps%E8%BF%9B%E5%85%A5%E5%90%8D%E4%BA%BA%E5%A0%82%23) `37.4K 🔥` `NEW`
1. [郑钦文迈阿密赛首战推迟](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87%E8%BF%88%E9%98%BF%E5%AF%86%E8%B5%9B%E9%A6%96%E6%88%98%E6%8E%A8%E8%BF%9F%23) `37.3K 🔥` `NEW`
1. [为什么生物地理会被踢出中考计分 (Why was biogeography kicked out of the high school entrance exam?)](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E7%94%9F%E7%89%A9%E5%9C%B0%E7%90%86%E4%BC%9A%E8%A2%AB%E8%B8%A2%E5%87%BA%E4%B8%AD%E8%80%83%E8%AE%A1%E5%88%86%23) `849.4K 🔥` `+93%`
1. [72岁蔡正元入狱前最后直播 (72-year-old Cai Zhengyuan’s last live broadcast before being imprisoned)](https://s.weibo.com/weibo?q=%2372%E5%B2%81%E8%94%A1%E6%AD%A3%E5%85%83%E5%85%A5%E7%8B%B1%E5%89%8D%E6%9C%80%E5%90%8E%E7%9B%B4%E6%92%AD%23) `612.3K 🔥` `+665%`
1. [沙某编造传播涉科大讯飞网络谣言被拘](https://s.weibo.com/weibo?q=%23%E6%B2%99%E6%9F%90%E7%BC%96%E9%80%A0%E4%BC%A0%E6%92%AD%E6%B6%89%E7%A7%91%E5%A4%A7%E8%AE%AF%E9%A3%9E%E7%BD%91%E7%BB%9C%E8%B0%A3%E8%A8%80%E8%A2%AB%E6%8B%98%23) `501.0K 🔥` `+43%`
1. [章子怡脸咋了](https://s.weibo.com/weibo?q=%23%E7%AB%A0%E5%AD%90%E6%80%A1%E8%84%B8%E5%92%8B%E4%BA%86%23) `392.8K 🔥` `+38%`
1. [菲方飞机非法闯入中国空域 (Philippine plane illegally intrudes into Chinese airspace)](https://s.weibo.com/weibo?q=%23%E8%8F%B2%E6%96%B9%E9%A3%9E%E6%9C%BA%E9%9D%9E%E6%B3%95%E9%97%AF%E5%85%A5%E4%B8%AD%E5%9B%BD%E7%A9%BA%E5%9F%9F%23) `375.3K 🔥` `+1125%`
1. [伊朗问美国为何不敢让航母靠近 (Iran asks the U.S. why it doesn’t dare to let the aircraft carrier get closer)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E9%97%AE%E7%BE%8E%E5%9B%BD%E4%B8%BA%E4%BD%95%E4%B8%8D%E6%95%A2%E8%AE%A9%E8%88%AA%E6%AF%8D%E9%9D%A0%E8%BF%91%23) `362.1K 🔥` `+367%`
1. [母亲带女儿买鞋在店门口犹豫半小时](https://s.weibo.com/weibo?q=%23%E6%AF%8D%E4%BA%B2%E5%B8%A6%E5%A5%B3%E5%84%BF%E4%B9%B0%E9%9E%8B%E5%9C%A8%E5%BA%97%E9%97%A8%E5%8F%A3%E7%8A%B9%E8%B1%AB%E5%8D%8A%E5%B0%8F%E6%97%B6%23) `323.7K 🔥` `+357%`
1. [官方通报月经弄脏卧铺事件详情](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E9%80%9A%E6%8A%A5%E6%9C%88%E7%BB%8F%E5%BC%84%E8%84%8F%E5%8D%A7%E9%93%BA%E4%BA%8B%E4%BB%B6%E8%AF%A6%E6%83%85%23) `258.4K 🔥` `+347%`
1. [papi酱又给内娱指了条明路 (Papi Jiang once again pointed out a clear path for internal entertainment)](https://s.weibo.com/weibo?q=%23papi%E9%85%B1%E5%8F%88%E7%BB%99%E5%86%85%E5%A8%B1%E6%8C%87%E4%BA%86%E6%9D%A1%E6%98%8E%E8%B7%AF%23) `224.8K 🔥` `+297%`
1. [章子怡高叶影后双黄蛋](https://s.weibo.com/weibo?q=%23%E7%AB%A0%E5%AD%90%E6%80%A1%E9%AB%98%E5%8F%B6%E5%BD%B1%E5%90%8E%E5%8F%8C%E9%BB%84%E8%9B%8B%23) `165.6K 🔥` `+190%`
1. [周冬雨穿自己淘的裙子走红毯 (Zhou Dongyu wears a dress she purchased on the red carpet)](https://s.weibo.com/weibo?q=%23%E5%91%A8%E5%86%AC%E9%9B%A8%E7%A9%BF%E8%87%AA%E5%B7%B1%E6%B7%98%E7%9A%84%E8%A3%99%E5%AD%90%E8%B5%B0%E7%BA%A2%E6%AF%AF%23) `148.8K 🔥` `+97%`
1. [外网也意识到韩国偷文化了](https://s.weibo.com/weibo?q=%23%E5%A4%96%E7%BD%91%E4%B9%9F%E6%84%8F%E8%AF%86%E5%88%B0%E9%9F%A9%E5%9B%BD%E5%81%B7%E6%96%87%E5%8C%96%E4%BA%86%23) `109.0K 🔥` `+93%`
1. [好想来上架山姆零食 (I really want to put Sam’s snacks on the shelves)](https://s.weibo.com/weibo?q=%23%E5%A5%BD%E6%83%B3%E6%9D%A5%E4%B8%8A%E6%9E%B6%E5%B1%B1%E5%A7%86%E9%9B%B6%E9%A3%9F%23) `85.8K 🔥` `+48%`
1. [金饰价格再次大幅下跌 (Gold jewelery prices fall sharply again)](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%A5%B0%E4%BB%B7%E6%A0%BC%E5%86%8D%E6%AC%A1%E5%A4%A7%E5%B9%85%E4%B8%8B%E8%B7%8C%23) `85.3K 🔥` `+160%`
1. [谢征给樊长玉脖子亲出吻痕 (Xie Zheng gave a kiss to Fan Changyu’s neck)](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%BE%81%E7%BB%99%E6%A8%8A%E9%95%BF%E7%8E%89%E8%84%96%E5%AD%90%E4%BA%B2%E5%87%BA%E5%90%BB%E7%97%95%23) `69.6K 🔥` `+27%`
1. [爷爷酒后多次用力掌掴幼儿 (Grandpa slapped his child hard many times after drinking)](https://s.weibo.com/weibo?q=%23%E7%88%B7%E7%88%B7%E9%85%92%E5%90%8E%E5%A4%9A%E6%AC%A1%E7%94%A8%E5%8A%9B%E6%8E%8C%E6%8E%B4%E5%B9%BC%E5%84%BF%23) `66.9K 🔥` `+105%`
1. [月经弄脏卧铺涉事铁路段上架卫生巾](https://s.weibo.com/weibo?q=%23%E6%9C%88%E7%BB%8F%E5%BC%84%E8%84%8F%E5%8D%A7%E9%93%BA%E6%B6%89%E4%BA%8B%E9%93%81%E8%B7%AF%E6%AE%B5%E4%B8%8A%E6%9E%B6%E5%8D%AB%E7%94%9F%E5%B7%BE%23) `58.7K 🔥` `+90%`
1. [丁彦雨航退役 (Ding Yanyuhang retires)](https://s.weibo.com/weibo?q=%23%E4%B8%81%E5%BD%A6%E9%9B%A8%E8%88%AA%E9%80%80%E5%BD%B9%23) `55.8K 🔥` `+82%`
1. [前员工爆料海底捞高层点炮制度 (A former employee revealed the high-level shooting system of Haidilao)](https://s.weibo.com/weibo?q=%23%E5%89%8D%E5%91%98%E5%B7%A5%E7%88%86%E6%96%99%E6%B5%B7%E5%BA%95%E6%8D%9E%E9%AB%98%E5%B1%82%E7%82%B9%E7%82%AE%E5%88%B6%E5%BA%A6%23) `48.4K 🔥` `+48%`
1. [被宝妈劝阻吸烟情绪失控游客已道歉](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E5%AE%9D%E5%A6%88%E5%8A%9D%E9%98%BB%E5%90%B8%E7%83%9F%E6%83%85%E7%BB%AA%E5%A4%B1%E6%8E%A7%E6%B8%B8%E5%AE%A2%E5%B7%B2%E9%81%93%E6%AD%89%23) `46.8K 🔥` `+45%`
1. [刘昊然易烊千玺CMG双黄蛋 (Liu Haoran Yi Yang Qianxi CMG double yolk egg)](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%98%8A%E7%84%B6%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BACMG%E5%8F%8C%E9%BB%84%E8%9B%8B%23) `40.7K 🔥` `+33%`
1. [伊朗攻击美国多个军事基地 (Iran attacks multiple US military bases)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%94%BB%E5%87%BB%E7%BE%8E%E5%9B%BD%E5%A4%9A%E4%B8%AA%E5%86%9B%E4%BA%8B%E5%9F%BA%E5%9C%B0%23) `85.0K 🔥`
1. [七旬老人呼吸困难自行拿剪刀捅胸 (A 70-year-old man has difficulty breathing and stabs his chest with scissors)](https://s.weibo.com/weibo?q=%23%E4%B8%83%E6%97%AC%E8%80%81%E4%BA%BA%E5%91%BC%E5%90%B8%E5%9B%B0%E9%9A%BE%E8%87%AA%E8%A1%8C%E6%8B%BF%E5%89%AA%E5%88%80%E6%8D%85%E8%83%B8%23) `58.2K 🔥`
1. [伊朗动员穷人组织情报部门负责人身亡](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%8A%A8%E5%91%98%E7%A9%B7%E4%BA%BA%E7%BB%84%E7%BB%87%E6%83%85%E6%8A%A5%E9%83%A8%E9%97%A8%E8%B4%9F%E8%B4%A3%E4%BA%BA%E8%BA%AB%E4%BA%A1%23) `49.2K 🔥`
1. [迪丽热巴迪奥活动直拍 (Direct shots of Dilire Badio’s activities)](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E8%BF%AA%E5%A5%A5%E6%B4%BB%E5%8A%A8%E7%9B%B4%E6%8B%8D%23) `40.9K 🔥`

Updated at 2026-03-21 07:38:48

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
