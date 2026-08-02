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

1. [郑钦文无缘多伦多站正赛 (Zheng Qinwen missed the Toronto race)](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87%E6%97%A0%E7%BC%98%E5%A4%9A%E4%BC%A6%E5%A4%9A%E7%AB%99%E6%AD%A3%E8%B5%9B%23) `1.1M 🔥` `NEW`
1. [女儿说房主任愧疚式教育](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%84%BF%E8%AF%B4%E6%88%BF%E4%B8%BB%E4%BB%BB%E6%84%A7%E7%96%9A%E5%BC%8F%E6%95%99%E8%82%B2%23) `555.9K 🔥` `NEW`
1. [夏日特调站](https://s.weibo.com/weibo?q=%23%E5%A4%8F%E6%97%A5%E7%89%B9%E8%B0%83%E7%AB%99%23) `314.1K 🔥` `NEW`
1. [不吃压力并展示了基建](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E5%90%83%E5%8E%8B%E5%8A%9B%E5%B9%B6%E5%B1%95%E7%A4%BA%E4%BA%86%E5%9F%BA%E5%BB%BA%23) `308.3K 🔥` `NEW`
1. [徐洁云回应雷军说晚安被指营销](https://s.weibo.com/weibo?q=%23%E5%BE%90%E6%B4%81%E4%BA%91%E5%9B%9E%E5%BA%94%E9%9B%B7%E5%86%9B%E8%AF%B4%E6%99%9A%E5%AE%89%E8%A2%AB%E6%8C%87%E8%90%A5%E9%94%80%23) `200.6K 🔥` `NEW`
1. [部分民办本科出现招生难](https://s.weibo.com/weibo?q=%23%E9%83%A8%E5%88%86%E6%B0%91%E5%8A%9E%E6%9C%AC%E7%A7%91%E5%87%BA%E7%8E%B0%E6%8B%9B%E7%94%9F%E9%9A%BE%23) `183.2K 🔥` `NEW`
1. [谢贤前女友CoCo直播回应与张柏芝关系](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E8%B4%A4%E5%89%8D%E5%A5%B3%E5%8F%8BCoCo%E7%9B%B4%E6%92%AD%E5%9B%9E%E5%BA%94%E4%B8%8E%E5%BC%A0%E6%9F%8F%E8%8A%9D%E5%85%B3%E7%B3%BB%23) `174.1K 🔥` `NEW`
1. [娜扎尬到一分钟八百个假动作](https://s.weibo.com/weibo?q=%23%E5%A8%9C%E6%89%8E%E5%B0%AC%E5%88%B0%E4%B8%80%E5%88%86%E9%92%9F%E5%85%AB%E7%99%BE%E4%B8%AA%E5%81%87%E5%8A%A8%E4%BD%9C%23) `159.0K 🔥` `NEW`
1. [阿森纳与维尼修斯达成个人条款](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A3%AE%E7%BA%B3%E4%B8%8E%E7%BB%B4%E5%B0%BC%E4%BF%AE%E6%96%AF%E8%BE%BE%E6%88%90%E4%B8%AA%E4%BA%BA%E6%9D%A1%E6%AC%BE%23) `98.8K 🔥` `NEW`
1. [存储芯片利好来了](https://s.weibo.com/weibo?q=%23%E5%AD%98%E5%82%A8%E8%8A%AF%E7%89%87%E5%88%A9%E5%A5%BD%E6%9D%A5%E4%BA%86%23) `98.6K 🔥` `NEW`
1. [240名警力出动抓获飙车炸街103人 (240 police officers dispatched to arrest 103 people driving in the street)](https://s.weibo.com/weibo?q=%23240%E5%90%8D%E8%AD%A6%E5%8A%9B%E5%87%BA%E5%8A%A8%E6%8A%93%E8%8E%B7%E9%A3%99%E8%BD%A6%E7%82%B8%E8%A1%97103%E4%BA%BA%23) `97.7K 🔥` `NEW`
1. [王一博曾是YG第一](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E6%9B%BE%E6%98%AFYG%E7%AC%AC%E4%B8%80%23) `97.0K 🔥` `NEW`
1. [邹市明怀念从前的冉莹颖](https://s.weibo.com/weibo?q=%23%E9%82%B9%E5%B8%82%E6%98%8E%E6%80%80%E5%BF%B5%E4%BB%8E%E5%89%8D%E7%9A%84%E5%86%89%E8%8E%B9%E9%A2%96%23) `95.8K 🔥` `NEW`
1. [蜘蛛侠 屏摄](https://s.weibo.com/weibo?q=%23%E8%9C%98%E8%9B%9B%E4%BE%A0%20%E5%B1%8F%E6%91%84%23) `95.5K 🔥` `NEW`
1. [美以准备打击伊朗能源设施](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E4%BB%A5%E5%87%86%E5%A4%87%E6%89%93%E5%87%BB%E4%BC%8A%E6%9C%97%E8%83%BD%E6%BA%90%E8%AE%BE%E6%96%BD%23) `94.0K 🔥` `NEW`
1. [黄子韬给罗正刷礼物](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%AD%90%E9%9F%AC%E7%BB%99%E7%BD%97%E6%AD%A3%E5%88%B7%E7%A4%BC%E7%89%A9%23) `93.7K 🔥` `NEW`
1. [Jasper没赶上好时候](https://s.weibo.com/weibo?q=%23Jasper%E6%B2%A1%E8%B5%B6%E4%B8%8A%E5%A5%BD%E6%97%B6%E5%80%99%23) `91.9K 🔥` `NEW`
1. [穿15元鞋的女空降兵捐出1000万](https://s.weibo.com/weibo?q=%23%E7%A9%BF15%E5%85%83%E9%9E%8B%E7%9A%84%E5%A5%B3%E7%A9%BA%E9%99%8D%E5%85%B5%E6%8D%90%E5%87%BA1000%E4%B8%87%23) `90.2K 🔥` `NEW`
1. [蔡徐坤默片](https://s.weibo.com/weibo?q=%23%E8%94%A1%E5%BE%90%E5%9D%A4%E9%BB%98%E7%89%87%23) `85.2K 🔥` `NEW`
1. [婚外胚胎案女子对原配叫嚣我没错](https://s.weibo.com/weibo?q=%23%E5%A9%9A%E5%A4%96%E8%83%9A%E8%83%8E%E6%A1%88%E5%A5%B3%E5%AD%90%E5%AF%B9%E5%8E%9F%E9%85%8D%E5%8F%AB%E5%9A%A3%E6%88%91%E6%B2%A1%E9%94%99%23) `80.0K 🔥` `NEW`
1. [28岁的蔡徐坤 (28-year-old Cai Xukun)](https://s.weibo.com/weibo?q=%2328%E5%B2%81%E7%9A%84%E8%94%A1%E5%BE%90%E5%9D%A4%23) `72.6K 🔥` `NEW`
1. [王玉雯20个蒜扒了一期](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E7%8E%89%E9%9B%AF20%E4%B8%AA%E8%92%9C%E6%89%92%E4%BA%86%E4%B8%80%E6%9C%9F%23) `72.4K 🔥` `NEW`
1. [美国男排 看沉默了](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E7%94%B7%E6%8E%92%20%E7%9C%8B%E6%B2%89%E9%BB%98%E4%BA%86%23) `68.5K 🔥` `NEW`
1. [公职人员停车受阻暴力损坏地锁](https://s.weibo.com/weibo?q=%23%E5%85%AC%E8%81%8C%E4%BA%BA%E5%91%98%E5%81%9C%E8%BD%A6%E5%8F%97%E9%98%BB%E6%9A%B4%E5%8A%9B%E6%8D%9F%E5%9D%8F%E5%9C%B0%E9%94%81%23) `765.8K 🔥` `+50%`
1. [中国新型战机超视距猎杀 (China's new fighter jet hunts beyond visual range)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E6%96%B0%E5%9E%8B%E6%88%98%E6%9C%BA%E8%B6%85%E8%A7%86%E8%B7%9D%E7%8C%8E%E6%9D%80%23) `606.2K 🔥` `+49%`
1. [跟着劲酒的节奏养起来 (Follow the rhythm of strong wine and grow up)](https://s.weibo.com/weibo?q=%23%E8%B7%9F%E7%9D%80%E5%8A%B2%E9%85%92%E7%9A%84%E8%8A%82%E5%A5%8F%E5%85%BB%E8%B5%B7%E6%9D%A5%23) `600.9K 🔥` `+53%`
1. [直观感受到什么是家道中落 (Intuitively feel what it means to have a poor family)](https://s.weibo.com/weibo?q=%23%E7%9B%B4%E8%A7%82%E6%84%9F%E5%8F%97%E5%88%B0%E4%BB%80%E4%B9%88%E6%98%AF%E5%AE%B6%E9%81%93%E4%B8%AD%E8%90%BD%23) `593.9K 🔥` `+58%`
1. [雷军说晚安被指营销 (Lei Jun said good night and was accused of marketing)](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E5%86%9B%E8%AF%B4%E6%99%9A%E5%AE%89%E8%A2%AB%E6%8C%87%E8%90%A5%E9%94%80%23) `275.6K 🔥` `+134%`
1. [发现赚钱方式对人影响很大 (Discovered that the way you make money has a great influence on people)](https://s.weibo.com/weibo?q=%23%E5%8F%91%E7%8E%B0%E8%B5%9A%E9%92%B1%E6%96%B9%E5%BC%8F%E5%AF%B9%E4%BA%BA%E5%BD%B1%E5%93%8D%E5%BE%88%E5%A4%A7%23) `195.2K 🔥` `+45%`
1. [气象局称发生超强厄尔尼诺概率在增大 (The Bureau of Meteorology says the probability of a super strong El Niño is increasing)](https://s.weibo.com/weibo?q=%23%E6%B0%94%E8%B1%A1%E5%B1%80%E7%A7%B0%E5%8F%91%E7%94%9F%E8%B6%85%E5%BC%BA%E5%8E%84%E5%B0%94%E5%B0%BC%E8%AF%BA%E6%A6%82%E7%8E%87%E5%9C%A8%E5%A2%9E%E5%A4%A7%23) `160.3K 🔥` `+107%`
1. [马斯克关注DeepSeek账号](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E6%96%AF%E5%85%8B%E5%85%B3%E6%B3%A8DeepSeek%E8%B4%A6%E5%8F%B7%23) `98.3K 🔥` `+54%`
1. [已婚男子与军嫂同居被当场抓获](https://s.weibo.com/weibo?q=%23%E5%B7%B2%E5%A9%9A%E7%94%B7%E5%AD%90%E4%B8%8E%E5%86%9B%E5%AB%82%E5%90%8C%E5%B1%85%E8%A2%AB%E5%BD%93%E5%9C%BA%E6%8A%93%E8%8E%B7%23) `97.4K 🔥` `+52%`
1. [怀双胞胎1个流产1个105天后出生](https://s.weibo.com/weibo?q=%23%E6%80%80%E5%8F%8C%E8%83%9E%E8%83%8E1%E4%B8%AA%E6%B5%81%E4%BA%A71%E4%B8%AA105%E5%A4%A9%E5%90%8E%E5%87%BA%E7%94%9F%23) `96.1K 🔥` `+49%`
1. [找对象的尽头是初高中同学](https://s.weibo.com/weibo?q=%23%E6%89%BE%E5%AF%B9%E8%B1%A1%E7%9A%84%E5%B0%BD%E5%A4%B4%E6%98%AF%E5%88%9D%E9%AB%98%E4%B8%AD%E5%90%8C%E5%AD%A6%23) `95.4K 🔥` `+27%`
1. [伊朗用了新武器](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E7%94%A8%E4%BA%86%E6%96%B0%E6%AD%A6%E5%99%A8%23) `93.1K 🔥` `+45%`
1. [赵丽颖版尹新月为何成了白月光](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%B8%BD%E9%A2%96%E7%89%88%E5%B0%B9%E6%96%B0%E6%9C%88%E4%B8%BA%E4%BD%95%E6%88%90%E4%BA%86%E7%99%BD%E6%9C%88%E5%85%89%23) `79.5K 🔥` `+79%`
1. [解放军建军99周年 (The 99th anniversary of the founding of the People's Liberation Army)](https://s.weibo.com/weibo?q=%23%E8%A7%A3%E6%94%BE%E5%86%9B%E5%BB%BA%E5%86%9B99%E5%91%A8%E5%B9%B4%23) `78.5K 🔥` `+37%`
1. [人生是仅此一次的体验 (Life is a once-in-a-lifetime experience)](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E7%94%9F%E6%98%AF%E4%BB%85%E6%AD%A4%E4%B8%80%E6%AC%A1%E7%9A%84%E4%BD%93%E9%AA%8C%23) `72.4K 🔥` `+33%`
1. [张凌赫剧里的儿子跟本人好像](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%89%A7%E9%87%8C%E7%9A%84%E5%84%BF%E5%AD%90%E8%B7%9F%E6%9C%AC%E4%BA%BA%E5%A5%BD%E5%83%8F%23) `70.4K 🔥` `+42%`
1. [巨型章鱼紧紧吸在男子背上不肯下来](https://s.weibo.com/weibo?q=%23%E5%B7%A8%E5%9E%8B%E7%AB%A0%E9%B1%BC%E7%B4%A7%E7%B4%A7%E5%90%B8%E5%9C%A8%E7%94%B7%E5%AD%90%E8%83%8C%E4%B8%8A%E4%B8%8D%E8%82%AF%E4%B8%8B%E6%9D%A5%23) `68.8K 🔥` `+55%`
1. [5万人游进西班牙后4.8万人游回去了 (50,000 people swam into Spain, 48,000 people swam back)](https://s.weibo.com/weibo?q=%235%E4%B8%87%E4%BA%BA%E6%B8%B8%E8%BF%9B%E8%A5%BF%E7%8F%AD%E7%89%99%E5%90%8E4.8%E4%B8%87%E4%BA%BA%E6%B8%B8%E5%9B%9E%E5%8E%BB%E4%BA%86%23) `55.8K 🔥` `+24%`
1. [机器人练字比我还努力](https://s.weibo.com/weibo?q=%23%E6%9C%BA%E5%99%A8%E4%BA%BA%E7%BB%83%E5%AD%97%E6%AF%94%E6%88%91%E8%BF%98%E5%8A%AA%E5%8A%9B%23) `53.6K 🔥` `+21%`
1. [曾舜晞说孟子义拍戏动过真感情 (Zeng Shunxi said that Meng Ziyi had real feelings during filming)](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E8%88%9C%E6%99%9E%E8%AF%B4%E5%AD%9F%E5%AD%90%E4%B9%89%E6%8B%8D%E6%88%8F%E5%8A%A8%E8%BF%87%E7%9C%9F%E6%84%9F%E6%83%85%23) `391.3K 🔥`
1. [房主任母女关系](https://s.weibo.com/weibo?q=%23%E6%88%BF%E4%B8%BB%E4%BB%BB%E6%AF%8D%E5%A5%B3%E5%85%B3%E7%B3%BB%23) `96.5K 🔥`
1. [只有真母单才懂这段吐槽有多真实](https://s.weibo.com/weibo?q=%23%E5%8F%AA%E6%9C%89%E7%9C%9F%E6%AF%8D%E5%8D%95%E6%89%8D%E6%87%82%E8%BF%99%E6%AE%B5%E5%90%90%E6%A7%BD%E6%9C%89%E5%A4%9A%E7%9C%9F%E5%AE%9E%23) `91.4K 🔥`
1. [奥德赛上座率 (Odyssey attendance)](https://s.weibo.com/weibo?q=%23%E5%A5%A5%E5%BE%B7%E8%B5%9B%E4%B8%8A%E5%BA%A7%E7%8E%87%23) `76.7K 🔥`
1. [泰国假警察劫杀俄罗斯姐弟 (Fake police in Thailand kidnap and kill Russian siblings)](https://s.weibo.com/weibo?q=%23%E6%B3%B0%E5%9B%BD%E5%81%87%E8%AD%A6%E5%AF%9F%E5%8A%AB%E6%9D%80%E4%BF%84%E7%BD%97%E6%96%AF%E5%A7%90%E5%BC%9F%23) `72.4K 🔥`
1. [董璇也怀疑周也是自己女儿 (Dong Xuan also suspected that Zhou was also his daughter)](https://s.weibo.com/weibo?q=%23%E8%91%A3%E7%92%87%E4%B9%9F%E6%80%80%E7%96%91%E5%91%A8%E4%B9%9F%E6%98%AF%E8%87%AA%E5%B7%B1%E5%A5%B3%E5%84%BF%23) `97.9K 🔥` `-57%`
1. [王一博去韩国前在北京培训了一年](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E5%8E%BB%E9%9F%A9%E5%9B%BD%E5%89%8D%E5%9C%A8%E5%8C%97%E4%BA%AC%E5%9F%B9%E8%AE%AD%E4%BA%86%E4%B8%80%E5%B9%B4%23) `87.2K 🔥` `-50%`
1. [疑似第一批解暑冬瓜受害者出现了](https://s.weibo.com/weibo?q=%23%E7%96%91%E4%BC%BC%E7%AC%AC%E4%B8%80%E6%89%B9%E8%A7%A3%E6%9A%91%E5%86%AC%E7%93%9C%E5%8F%97%E5%AE%B3%E8%80%85%E5%87%BA%E7%8E%B0%E4%BA%86%23) `67.3K 🔥` `-22%`
1. [罗正经纪人问罗正前女友后悔吗 (Luo Zheng’s agent asked Luo Zheng if his ex-girlfriend regretted it)](https://s.weibo.com/weibo?q=%23%E7%BD%97%E6%AD%A3%E7%BB%8F%E7%BA%AA%E4%BA%BA%E9%97%AE%E7%BD%97%E6%AD%A3%E5%89%8D%E5%A5%B3%E5%8F%8B%E5%90%8E%E6%82%94%E5%90%97%23) `66.5K 🔥` `-52%`

Updated at 2026-08-02 08:11:40

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
