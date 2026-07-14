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

1. [上半年外贸稳规模优结构成效明显 (In the first half of the year, foreign trade achieved significant results in stabilizing scale and optimizing structure.)](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E5%8D%8A%E5%B9%B4%E5%A4%96%E8%B4%B8%E7%A8%B3%E8%A7%84%E6%A8%A1%E4%BC%98%E7%BB%93%E6%9E%84%E6%88%90%E6%95%88%E6%98%8E%E6%98%BE%23) `770.8K 🔥` `NEW`
1. [姆巴佩喊你看法拦西](https://s.weibo.com/weibo?q=%23%E5%A7%86%E5%B7%B4%E4%BD%A9%E5%96%8A%E4%BD%A0%E7%9C%8B%E6%B3%95%E6%8B%A6%E8%A5%BF%23) `761.0K 🔥` `NEW`
1. [16岁少年被捅身亡母亲抱遗体6小时](https://s.weibo.com/weibo?q=%2316%E5%B2%81%E5%B0%91%E5%B9%B4%E8%A2%AB%E6%8D%85%E8%BA%AB%E4%BA%A1%E6%AF%8D%E4%BA%B2%E6%8A%B1%E9%81%97%E4%BD%936%E5%B0%8F%E6%97%B6%23) `758.2K 🔥` `NEW`
1. [西北大学还要沉默多久](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E5%8C%97%E5%A4%A7%E5%AD%A6%E8%BF%98%E8%A6%81%E6%B2%89%E9%BB%98%E5%A4%9A%E4%B9%85%23) `710.6K 🔥` `NEW`
1. [多位歌手缺席突围赛](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E4%BD%8D%E6%AD%8C%E6%89%8B%E7%BC%BA%E5%B8%AD%E7%AA%81%E5%9B%B4%E8%B5%9B%23) `692.7K 🔥` `NEW`
1. [不知道陈伟霆的直播很曼妙](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E7%9F%A5%E9%81%93%E9%99%88%E4%BC%9F%E9%9C%86%E7%9A%84%E7%9B%B4%E6%92%AD%E5%BE%88%E6%9B%BC%E5%A6%99%23) `633.4K 🔥` `NEW`
1. [巴西总统批评巴西国家队](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E8%A5%BF%E6%80%BB%E7%BB%9F%E6%89%B9%E8%AF%84%E5%B7%B4%E8%A5%BF%E5%9B%BD%E5%AE%B6%E9%98%9F%23) `614.7K 🔥` `NEW`
1. [谁让迪丽热巴唱的大魔王好无语](https://s.weibo.com/weibo?q=%23%E8%B0%81%E8%AE%A9%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E5%94%B1%E7%9A%84%E5%A4%A7%E9%AD%94%E7%8E%8B%E5%A5%BD%E6%97%A0%E8%AF%AD%23) `555.1K 🔥` `NEW`
1. [伊朗前总统内贾德被软禁](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%89%8D%E6%80%BB%E7%BB%9F%E5%86%85%E8%B4%BE%E5%BE%B7%E8%A2%AB%E8%BD%AF%E7%A6%81%23) `407.9K 🔥` `NEW`
1. [吴克群空降红米发布会](https://s.weibo.com/weibo?q=%23%E5%90%B4%E5%85%8B%E7%BE%A4%E7%A9%BA%E9%99%8D%E7%BA%A2%E7%B1%B3%E5%8F%91%E5%B8%83%E4%BC%9A%23) `366.2K 🔥` `NEW`
1. [沈阳玫瑰音乐节取消 (Shenyang Rose Music Festival canceled)](https://s.weibo.com/weibo?q=%23%E6%B2%88%E9%98%B3%E7%8E%AB%E7%91%B0%E9%9F%B3%E4%B9%90%E8%8A%82%E5%8F%96%E6%B6%88%23) `352.6K 🔥` `NEW`
1. [被送矫正学校男孩称需贿赂寝室长](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E9%80%81%E7%9F%AB%E6%AD%A3%E5%AD%A6%E6%A0%A1%E7%94%B7%E5%AD%A9%E7%A7%B0%E9%9C%80%E8%B4%BF%E8%B5%82%E5%AF%9D%E5%AE%A4%E9%95%BF%23) `345.0K 🔥` `NEW`
1. [北电表演录取的前十名](https://s.weibo.com/weibo?q=%23%E5%8C%97%E7%94%B5%E8%A1%A8%E6%BC%94%E5%BD%95%E5%8F%96%E7%9A%84%E5%89%8D%E5%8D%81%E5%90%8D%23) `343.9K 🔥` `NEW`
1. [入伏后做好6件事攒气血](https://s.weibo.com/weibo?q=%23%E5%85%A5%E4%BC%8F%E5%90%8E%E5%81%9A%E5%A5%BD6%E4%BB%B6%E4%BA%8B%E6%94%92%E6%B0%94%E8%A1%80%23) `328.5K 🔥` `NEW`
1. [男子回应在妻子孕期出轨留亲密照](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%9B%9E%E5%BA%94%E5%9C%A8%E5%A6%BB%E5%AD%90%E5%AD%95%E6%9C%9F%E5%87%BA%E8%BD%A8%E7%95%99%E4%BA%B2%E5%AF%86%E7%85%A7%23) `281.4K 🔥` `NEW`
1. [TF家族公众号更新严浩翔](https://s.weibo.com/weibo?q=%23TF%E5%AE%B6%E6%97%8F%E5%85%AC%E4%BC%97%E5%8F%B7%E6%9B%B4%E6%96%B0%E4%B8%A5%E6%B5%A9%E7%BF%94%23) `259.0K 🔥` `NEW`
1. [沈阳继续停工停课一天](https://s.weibo.com/weibo?q=%23%E6%B2%88%E9%98%B3%E7%BB%A7%E7%BB%AD%E5%81%9C%E5%B7%A5%E5%81%9C%E8%AF%BE%E4%B8%80%E5%A4%A9%23) `257.2K 🔥` `NEW`
1. [世界杯](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%23) `221.2K 🔥` `NEW`
1. [明明心情好还是躯体化了](https://s.weibo.com/weibo?q=%23%E6%98%8E%E6%98%8E%E5%BF%83%E6%83%85%E5%A5%BD%E8%BF%98%E6%98%AF%E8%BA%AF%E4%BD%93%E5%8C%96%E4%BA%86%23) `191.2K 🔥` `NEW`
1. [徐州一小区三名男孩虐猫致死亡](https://s.weibo.com/weibo?q=%23%E5%BE%90%E5%B7%9E%E4%B8%80%E5%B0%8F%E5%8C%BA%E4%B8%89%E5%90%8D%E7%94%B7%E5%AD%A9%E8%99%90%E7%8C%AB%E8%87%B4%E6%AD%BB%E4%BA%A1%23) `190.7K 🔥` `NEW`
1. [曾沛慈活粉量 (Tsang Pei Chi Active Powder Quantity)](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E6%B2%9B%E6%85%88%E6%B4%BB%E7%B2%89%E9%87%8F%23) `186.1K 🔥` `NEW`
1. [A股猴王赚翻](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E7%8C%B4%E7%8E%8B%E8%B5%9A%E7%BF%BB%23) `184.6K 🔥` `NEW`
1. [普陀山3元水机被关周边8元起](https://s.weibo.com/weibo?q=%23%E6%99%AE%E9%99%80%E5%B1%B13%E5%85%83%E6%B0%B4%E6%9C%BA%E8%A2%AB%E5%85%B3%E5%91%A8%E8%BE%B98%E5%85%83%E8%B5%B7%23) `184.2K 🔥` `NEW`
1. [张籽沐北电录取](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%B1%BD%E6%B2%90%E5%8C%97%E7%94%B5%E5%BD%95%E5%8F%96%23) `183.4K 🔥` `NEW`
1. [王一博练车vlog](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E7%BB%83%E8%BD%A6vlog%23) `178.7K 🔥` `NEW`
1. [巴威可能重新进入江苏](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E5%A8%81%E5%8F%AF%E8%83%BD%E9%87%8D%E6%96%B0%E8%BF%9B%E5%85%A5%E6%B1%9F%E8%8B%8F%23) `166.3K 🔥` `NEW`
1. [享界G9获批北京L3自动驾驶测试牌照](https://s.weibo.com/weibo?q=%23%E4%BA%AB%E7%95%8CG9%E8%8E%B7%E6%89%B9%E5%8C%97%E4%BA%ACL3%E8%87%AA%E5%8A%A8%E9%A9%BE%E9%A9%B6%E6%B5%8B%E8%AF%95%E7%89%8C%E7%85%A7%23) `163.2K 🔥` `NEW`
1. [宋威龙张婧仪看过对方代表作](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E5%A8%81%E9%BE%99%E5%BC%A0%E5%A9%A7%E4%BB%AA%E7%9C%8B%E8%BF%87%E5%AF%B9%E6%96%B9%E4%BB%A3%E8%A1%A8%E4%BD%9C%23) `162.8K 🔥` `NEW`
1. [野狗骨头这段幸好没烂俗的接吻](https://s.weibo.com/weibo?q=%23%E9%87%8E%E7%8B%97%E9%AA%A8%E5%A4%B4%E8%BF%99%E6%AE%B5%E5%B9%B8%E5%A5%BD%E6%B2%A1%E7%83%82%E4%BF%97%E7%9A%84%E6%8E%A5%E5%90%BB%23) `157.7K 🔥` `NEW`
1. [内娱请把古偶还给少男少女](https://s.weibo.com/weibo?q=%23%E5%86%85%E5%A8%B1%E8%AF%B7%E6%8A%8A%E5%8F%A4%E5%81%B6%E8%BF%98%E7%BB%99%E5%B0%91%E7%94%B7%E5%B0%91%E5%A5%B3%23) `1.3M 🔥` `+496%`
1. [女子追尾身亡男友副驾睡觉被起诉 (Woman killed in rear-end collision, boyfriend charged while sleeping in front passenger seat)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E8%BF%BD%E5%B0%BE%E8%BA%AB%E4%BA%A1%E7%94%B7%E5%8F%8B%E5%89%AF%E9%A9%BE%E7%9D%A1%E8%A7%89%E8%A2%AB%E8%B5%B7%E8%AF%89%23) `1.1M 🔥` `+27%`
1. [敌敌畏渗到大腿男生被下病危通知 (Boy was notified of critical illness after dichlorvos seeped into his thigh)](https://s.weibo.com/weibo?q=%23%E6%95%8C%E6%95%8C%E7%95%8F%E6%B8%97%E5%88%B0%E5%A4%A7%E8%85%BF%E7%94%B7%E7%94%9F%E8%A2%AB%E4%B8%8B%E7%97%85%E5%8D%B1%E9%80%9A%E7%9F%A5%23) `560.6K 🔥` `+42%`
1. [请愿逐出阿根廷人数已超500万 (Number of people petitioning for deportation from Argentina exceeds 5 million)](https://s.weibo.com/weibo?q=%23%E8%AF%B7%E6%84%BF%E9%80%90%E5%87%BA%E9%98%BF%E6%A0%B9%E5%BB%B7%E4%BA%BA%E6%95%B0%E5%B7%B2%E8%B6%85500%E4%B8%87%23) `548.1K 🔥` `+33%`
1. [章若楠跑男化妆师评论区被阴阳白干](https://s.weibo.com/weibo?q=%23%E7%AB%A0%E8%8B%A5%E6%A5%A0%E8%B7%91%E7%94%B7%E5%8C%96%E5%A6%86%E5%B8%88%E8%AF%84%E8%AE%BA%E5%8C%BA%E8%A2%AB%E9%98%B4%E9%98%B3%E7%99%BD%E5%B9%B2%23) `545.0K 🔥` `+36%`
1. [虞书欣 全世界正数第一会穿搭 (Yu Shuxin is the best in the world at dressing up)](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%20%E5%85%A8%E4%B8%96%E7%95%8C%E6%AD%A3%E6%95%B0%E7%AC%AC%E4%B8%80%E4%BC%9A%E7%A9%BF%E6%90%AD%23) `531.0K 🔥` `+33%`
1. [小林栋哲考上中戏](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E6%9E%97%E6%A0%8B%E5%93%B2%E8%80%83%E4%B8%8A%E4%B8%AD%E6%88%8F%23) `405.0K 🔥` `+44%`
1. [感觉谈恋爱真的很尴尬](https://s.weibo.com/weibo?q=%23%E6%84%9F%E8%A7%89%E8%B0%88%E6%81%8B%E7%88%B1%E7%9C%9F%E7%9A%84%E5%BE%88%E5%B0%B4%E5%B0%AC%23) `232.1K 🔥` `+61%`
1. [中国燃油车只剩最后一根续命稻草](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%87%83%E6%B2%B9%E8%BD%A6%E5%8F%AA%E5%89%A9%E6%9C%80%E5%90%8E%E4%B8%80%E6%A0%B9%E7%BB%AD%E5%91%BD%E7%A8%BB%E8%8D%89%23) `526.2K 🔥`
1. [A股暴力拉升原因](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E6%9A%B4%E5%8A%9B%E6%8B%89%E5%8D%87%E5%8E%9F%E5%9B%A0%23) `405.0K 🔥`
1. [妻子孕四月发现丈夫海量亲密照](https://s.weibo.com/weibo?q=%23%E5%A6%BB%E5%AD%90%E5%AD%95%E5%9B%9B%E6%9C%88%E5%8F%91%E7%8E%B0%E4%B8%88%E5%A4%AB%E6%B5%B7%E9%87%8F%E4%BA%B2%E5%AF%86%E7%85%A7%23) `384.2K 🔥`
1. [台媒拍的曾沛慈的一天](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E5%AA%92%E6%8B%8D%E7%9A%84%E6%9B%BE%E6%B2%9B%E6%85%88%E7%9A%84%E4%B8%80%E5%A4%A9%23) `331.7K 🔥`
1. [温宜公主被北电录取](https://s.weibo.com/weibo?q=%23%E6%B8%A9%E5%AE%9C%E5%85%AC%E4%B8%BB%E8%A2%AB%E5%8C%97%E7%94%B5%E5%BD%95%E5%8F%96%23) `325.2K 🔥`
1. [余宇涵看朱志鑫的大屏应援](https://s.weibo.com/weibo?q=%23%E4%BD%99%E5%AE%87%E6%B6%B5%E7%9C%8B%E6%9C%B1%E5%BF%97%E9%91%AB%E7%9A%84%E5%A4%A7%E5%B1%8F%E5%BA%94%E6%8F%B4%23) `317.0K 🔥`
1. [朋友圈只适合分享浮于表面的东西 (Moments are only suitable for sharing superficial things)](https://s.weibo.com/weibo?q=%23%E6%9C%8B%E5%8F%8B%E5%9C%88%E5%8F%AA%E9%80%82%E5%90%88%E5%88%86%E4%BA%AB%E6%B5%AE%E4%BA%8E%E8%A1%A8%E9%9D%A2%E7%9A%84%E4%B8%9C%E8%A5%BF%23) `256.0K 🔥`
1. [李泽锋 养死士](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%B3%BD%E9%94%8B%20%E5%85%BB%E6%AD%BB%E5%A3%AB%23) `202.7K 🔥`
1. [疑AI照片拿了摄影比赛一等奖](https://s.weibo.com/weibo?q=%23%E7%96%91AI%E7%85%A7%E7%89%87%E6%8B%BF%E4%BA%86%E6%91%84%E5%BD%B1%E6%AF%94%E8%B5%9B%E4%B8%80%E7%AD%89%E5%A5%96%23) `522.5K 🔥` `-56%`
1. [离开JYP的TWICE成员 (TWICE members who left JYP)](https://s.weibo.com/weibo?q=%23%E7%A6%BB%E5%BC%80JYP%E7%9A%84TWICE%E6%88%90%E5%91%98%23) `275.8K 🔥` `-28%`
1. [迪丽热巴姐姐这一面我等了11年](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E5%A7%90%E5%A7%90%E8%BF%99%E4%B8%80%E9%9D%A2%E6%88%91%E7%AD%89%E4%BA%8611%E5%B9%B4%23) `236.4K 🔥` `-34%`
1. [功夫女足破7亿票房](https://s.weibo.com/weibo?q=%23%E5%8A%9F%E5%A4%AB%E5%A5%B3%E8%B6%B3%E7%A0%B47%E4%BA%BF%E7%A5%A8%E6%88%BF%23) `228.5K 🔥` `-45%`
1. [宋威龙灵感来源张婧仪唯粉](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E5%A8%81%E9%BE%99%E7%81%B5%E6%84%9F%E6%9D%A5%E6%BA%90%E5%BC%A0%E5%A9%A7%E4%BB%AA%E5%94%AF%E7%B2%89%23) `189.6K 🔥` `-49%`
1. [第一批注销校园卡的人发现不对劲了 (The first batch of people who canceled their campus cards realized something was wrong.)](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%89%B9%E6%B3%A8%E9%94%80%E6%A0%A1%E5%9B%AD%E5%8D%A1%E7%9A%84%E4%BA%BA%E5%8F%91%E7%8E%B0%E4%B8%8D%E5%AF%B9%E5%8A%B2%E4%BA%86%23) `183.9K 🔥` `-47%`
1. [工资向一线岗位倾斜](https://s.weibo.com/weibo?q=%23%E5%B7%A5%E8%B5%84%E5%90%91%E4%B8%80%E7%BA%BF%E5%B2%97%E4%BD%8D%E5%80%BE%E6%96%9C%23) `163.8K 🔥` `-76%`

Updated at 2026-07-14 21:08:06

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
