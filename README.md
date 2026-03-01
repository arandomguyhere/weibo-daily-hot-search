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

1. [演员逼真到根本看不出来是AI (The actors are so lifelike that you can’t even tell they are AI)](https://s.weibo.com/weibo?q=%23%E6%BC%94%E5%91%98%E9%80%BC%E7%9C%9F%E5%88%B0%E6%A0%B9%E6%9C%AC%E7%9C%8B%E4%B8%8D%E5%87%BA%E6%9D%A5%E6%98%AFAI%23) `832.9K 🔥` `NEW`
1. [椰子水](https://s.weibo.com/weibo?q=%23%E6%A4%B0%E5%AD%90%E6%B0%B4%23) `195.5K 🔥` `NEW`
1. [英法德三国联合声明](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E6%B3%95%E5%BE%B7%E4%B8%89%E5%9B%BD%E8%81%94%E5%90%88%E5%A3%B0%E6%98%8E%23) `195.4K 🔥` `NEW`
1. [伊朗称击落美军死神无人机](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E7%A7%B0%E5%87%BB%E8%90%BD%E7%BE%8E%E5%86%9B%E6%AD%BB%E7%A5%9E%E6%97%A0%E4%BA%BA%E6%9C%BA%23) `194.8K 🔥` `NEW`
1. [美军承认使用新装备](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%86%9B%E6%89%BF%E8%AE%A4%E4%BD%BF%E7%94%A8%E6%96%B0%E8%A3%85%E5%A4%87%23) `194.8K 🔥` `NEW`
1. [伊朗前总统内贾德遇袭身亡 (Former Iranian President Mahmoud Ahmadinejad killed in attack)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%89%8D%E6%80%BB%E7%BB%9F%E5%86%85%E8%B4%BE%E5%BE%B7%E9%81%87%E8%A2%AD%E8%BA%AB%E4%BA%A1%23) `1.1M 🔥` `+25%`
1. [难怪周杰伦再也没来成都开过演唱会](https://s.weibo.com/weibo?q=%23%E9%9A%BE%E6%80%AA%E5%91%A8%E6%9D%B0%E4%BC%A6%E5%86%8D%E4%B9%9F%E6%B2%A1%E6%9D%A5%E6%88%90%E9%83%BD%E5%BC%80%E8%BF%87%E6%BC%94%E5%94%B1%E4%BC%9A%23) `572.7K 🔥` `+152%`
1. [WiFi 穿墙透视 (WiFi see-through wall)](https://s.weibo.com/weibo?q=%23WiFi%20%E7%A9%BF%E5%A2%99%E9%80%8F%E8%A7%86%23) `195.7K 🔥` `+22%`
1. [伊朗7名指挥官确认死亡](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%977%E5%90%8D%E6%8C%87%E6%8C%A5%E5%AE%98%E7%A1%AE%E8%AE%A4%E6%AD%BB%E4%BA%A1%23) `195.7K 🔥` `+140%`
1. [王楚钦孙颖莎冠军自拍 (Wang Chuqin and Sun Yingsha’s championship selfie)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E5%AD%99%E9%A2%96%E8%8E%8E%E5%86%A0%E5%86%9B%E8%87%AA%E6%8B%8D%23) `195.7K 🔥` `+41%`
1. [伊朗将走向何方 (Where will Iran go?)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%B0%86%E8%B5%B0%E5%90%91%E4%BD%95%E6%96%B9%23) `195.6K 🔥` `+131%`
1. [俄罗斯在中东的布局被美国搅乱了 (Russia's layout in the Middle East has been disrupted by the United States)](https://s.weibo.com/weibo?q=%23%E4%BF%84%E7%BD%97%E6%96%AF%E5%9C%A8%E4%B8%AD%E4%B8%9C%E7%9A%84%E5%B8%83%E5%B1%80%E8%A2%AB%E7%BE%8E%E5%9B%BD%E6%90%85%E4%B9%B1%E4%BA%86%23) `195.5K 🔥` `+42%`
1. [迪丽热巴化妆王亚飞发型丽杰 (Dilireba's makeup, Wang Yafei's hairstyle, Lijie)](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E5%8C%96%E5%A6%86%E7%8E%8B%E4%BA%9A%E9%A3%9E%E5%8F%91%E5%9E%8B%E4%B8%BD%E6%9D%B0%23) `195.5K 🔥` `+119%`
1. [AI短剧 (AI skit)](https://s.weibo.com/weibo?q=%23AI%E7%9F%AD%E5%89%A7%23) `195.4K 🔥` `+120%`
1. [中东冲突出现外溢苗头 (Conflicts in the Middle East are showing signs of spillover)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E4%B8%9C%E5%86%B2%E7%AA%81%E5%87%BA%E7%8E%B0%E5%A4%96%E6%BA%A2%E8%8B%97%E5%A4%B4%23) `195.4K 🔥` `+165%`
1. [迪丽热巴连续4年出席迪奥巴黎大秀 (Dilireba attends Dior Paris show for 4 consecutive years)](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E8%BF%9E%E7%BB%AD4%E5%B9%B4%E5%87%BA%E5%B8%AD%E8%BF%AA%E5%A5%A5%E5%B7%B4%E9%BB%8E%E5%A4%A7%E7%A7%80%23) `195.3K 🔥` `+80%`
1. [浙江省地震局通报称今晚浙江没地震 (The Zhejiang Provincial Seismological Bureau reported that there will be no earthquake in Zhejiang tonight)](https://s.weibo.com/weibo?q=%23%E6%B5%99%E6%B1%9F%E7%9C%81%E5%9C%B0%E9%9C%87%E5%B1%80%E9%80%9A%E6%8A%A5%E7%A7%B0%E4%BB%8A%E6%99%9A%E6%B5%99%E6%B1%9F%E6%B2%A1%E5%9C%B0%E9%9C%87%23) `195.3K 🔥` `+84%`
1. [伊朗向美军林肯号航母发射导弹 (Iran fires missiles at USS Lincoln aircraft carrier)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%90%91%E7%BE%8E%E5%86%9B%E6%9E%97%E8%82%AF%E5%8F%B7%E8%88%AA%E6%AF%8D%E5%8F%91%E5%B0%84%E5%AF%BC%E5%BC%B9%23) `195.2K 🔥` `+43%`
1. [纪凌尘与韩国女友泰国度假](https://s.weibo.com/weibo?q=%23%E7%BA%AA%E5%87%8C%E5%B0%98%E4%B8%8E%E9%9F%A9%E5%9B%BD%E5%A5%B3%E5%8F%8B%E6%B3%B0%E5%9B%BD%E5%BA%A6%E5%81%87%23) `195.2K 🔥` `+84%`
1. [赵今麦流浪地球3造型 (Zhao Jinmai's Wandering Earth 3 appearance)](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%BB%8A%E9%BA%A6%E6%B5%81%E6%B5%AA%E5%9C%B0%E7%90%833%E9%80%A0%E5%9E%8B%23) `195.2K 🔥` `+84%`
1. [出轨对象得知感染HIV还瞒着自己 (The cheating partner learned that he was infected with HIV and kept it secret from himself)](https://s.weibo.com/weibo?q=%23%E5%87%BA%E8%BD%A8%E5%AF%B9%E8%B1%A1%E5%BE%97%E7%9F%A5%E6%84%9F%E6%9F%93HIV%E8%BF%98%E7%9E%92%E7%9D%80%E8%87%AA%E5%B7%B1%23) `195.1K 🔥` `+140%`
1. [美以袭击伊朗金价为何下跌 (Why gold prices fell after US-Israeli attack on Iran)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E4%BB%A5%E8%A2%AD%E5%87%BB%E4%BC%8A%E6%9C%97%E9%87%91%E4%BB%B7%E4%B8%BA%E4%BD%95%E4%B8%8B%E8%B7%8C%23) `195.1K 🔥` `+45%`
1. [鞠婧祎化淡妆](https://s.weibo.com/weibo?q=%23%E9%9E%A0%E5%A9%A7%E7%A5%8E%E5%8C%96%E6%B7%A1%E5%A6%86%23) `195.0K 🔥` `+164%`
1. [一家4口爬山祈福妻子坠亡 (Family of 4 climbs mountain to pray for wife's death after falling)](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%AE%B64%E5%8F%A3%E7%88%AC%E5%B1%B1%E7%A5%88%E7%A6%8F%E5%A6%BB%E5%AD%90%E5%9D%A0%E4%BA%A1%23) `195.0K 🔥` `+171%`
1. [一油轮欲通过霍尔木兹海峡被击中 (An oil tanker was hit while trying to pass through the Strait of Hormuz)](https://s.weibo.com/weibo?q=%23%E4%B8%80%E6%B2%B9%E8%BD%AE%E6%AC%B2%E9%80%9A%E8%BF%87%E9%9C%8D%E5%B0%94%E6%9C%A8%E5%85%B9%E6%B5%B7%E5%B3%A1%E8%A2%AB%E5%87%BB%E4%B8%AD%23) `195.0K 🔥` `+171%`
1. [王楚钦男单夺冠 (Wang Chuqin wins men's singles championship)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E7%94%B7%E5%8D%95%E5%A4%BA%E5%86%A0%23) `194.9K 🔥` `+150%`
1. [中国军号发布视频 (China Military Bugle releases video)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%86%9B%E5%8F%B7%E5%8F%91%E5%B8%83%E8%A7%86%E9%A2%91%23) `194.9K 🔥` `+160%`
1. [中东全面战争一触即发 (A total war in the Middle East is about to break out)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E4%B8%9C%E5%85%A8%E9%9D%A2%E6%88%98%E4%BA%89%E4%B8%80%E8%A7%A6%E5%8D%B3%E5%8F%91%23) `194.8K 🔥` `+46%`
1. [伊朗总统就哈梅内伊身亡发声明](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%80%BB%E7%BB%9F%E5%B0%B1%E5%93%88%E6%A2%85%E5%86%85%E4%BC%8A%E8%BA%AB%E4%BA%A1%E5%8F%91%E5%A3%B0%E6%98%8E%23) `194.7K 🔥` `+160%`
1. [以色列陷入多线作战的战争泥潭 (Israel is mired in a multi-front war)](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E8%89%B2%E5%88%97%E9%99%B7%E5%85%A5%E5%A4%9A%E7%BA%BF%E4%BD%9C%E6%88%98%E7%9A%84%E6%88%98%E4%BA%89%E6%B3%A5%E6%BD%AD%23) `194.7K 🔥` `+47%`
1. [伊朗导弹击中以色列中部致6死23伤 (Iranian missile hits central Israel, killing 6 and injuring 23)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%AF%BC%E5%BC%B9%E5%87%BB%E4%B8%AD%E4%BB%A5%E8%89%B2%E5%88%97%E4%B8%AD%E9%83%A8%E8%87%B46%E6%AD%BB23%E4%BC%A4%23) `166.2K 🔥` `+126%`
1. [伊朗袭击27个美军基地 (Iran attacks 27 US military bases)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E8%A2%AD%E5%87%BB27%E4%B8%AA%E7%BE%8E%E5%86%9B%E5%9F%BA%E5%9C%B0%23) `159.4K 🔥` `+50%`
1. [孟子义两年最长休息两天 (Meng Ziyi’s longest break in two years is two days)](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89%E4%B8%A4%E5%B9%B4%E6%9C%80%E9%95%BF%E4%BC%91%E6%81%AF%E4%B8%A4%E5%A4%A9%23) `157.6K 🔥` `+119%`
1. [孙颖莎女单夺冠 (Sun Yingsha wins women's singles championship)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E5%A5%B3%E5%8D%95%E5%A4%BA%E5%86%A0%23) `150.6K 🔥` `+109%`
1. [中东冲突全面扩散](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E4%B8%9C%E5%86%B2%E7%AA%81%E5%85%A8%E9%9D%A2%E6%89%A9%E6%95%A3%23) `146.4K 🔥` `+103%`
1. [迪拜家长安抚孩子外面是烟花](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E6%8B%9C%E5%AE%B6%E9%95%BF%E5%AE%89%E6%8A%9A%E5%AD%A9%E5%AD%90%E5%A4%96%E9%9D%A2%E6%98%AF%E7%83%9F%E8%8A%B1%23) `146.1K 🔥` `+103%`
1. [伊朗临时领导委员会开始工作 (Iran's interim leadership council begins work)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E4%B8%B4%E6%97%B6%E9%A2%86%E5%AF%BC%E5%A7%94%E5%91%98%E4%BC%9A%E5%BC%80%E5%A7%8B%E5%B7%A5%E4%BD%9C%23) `136.2K 🔥` `+89%`
1. [王天辰郭晓婷 这样的距离算适当吗 (Wang Tianchen Guo Xiaoting Is this distance appropriate?)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%A4%A9%E8%BE%B0%E9%83%AD%E6%99%93%E5%A9%B7%20%E8%BF%99%E6%A0%B7%E7%9A%84%E8%B7%9D%E7%A6%BB%E7%AE%97%E9%80%82%E5%BD%93%E5%90%97%23) `135.2K 🔥` `+88%`
1. [逐玉 (Zhuyu)](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%23) `135.0K 🔥` `+88%`
1. [以色列对伊新一轮空袭 (Israel launches new round of air strikes against Iraq)](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E8%89%B2%E5%88%97%E5%AF%B9%E4%BC%8A%E6%96%B0%E4%B8%80%E8%BD%AE%E7%A9%BA%E8%A2%AD%23) `132.7K 🔥` `+84%`
1. [WTT新加坡大满贯 (WTT Singapore Grand Slam)](https://s.weibo.com/weibo?q=%23WTT%E6%96%B0%E5%8A%A0%E5%9D%A1%E5%A4%A7%E6%BB%A1%E8%B4%AF%23) `131.8K 🔥` `+83%`
1. [中国男篮险胜中国台北男篮](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%94%B7%E7%AF%AE%E9%99%A9%E8%83%9C%E4%B8%AD%E5%9B%BD%E5%8F%B0%E5%8C%97%E7%94%B7%E7%AF%AE%23) `131.3K 🔥` `+82%`
1. [2026新春走基层 (2026 New Year Goes to the Grassroots)](https://s.weibo.com/weibo?q=%232026%E6%96%B0%E6%98%A5%E8%B5%B0%E5%9F%BA%E5%B1%82%23) `575.1K 🔥`
1. [伊朗发布击落美无人机画面 (Iran releases footage of downing US drone)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%8F%91%E5%B8%83%E5%87%BB%E8%90%BD%E7%BE%8E%E6%97%A0%E4%BA%BA%E6%9C%BA%E7%94%BB%E9%9D%A2%23) `567.1K 🔥`
1. [三甲医生回应秦岚嗓子哑了三年 (A top-level doctor responded that Qin Lan’s voice has been hoarse for three years.)](https://s.weibo.com/weibo?q=%23%E4%B8%89%E7%94%B2%E5%8C%BB%E7%94%9F%E5%9B%9E%E5%BA%94%E7%A7%A6%E5%B2%9A%E5%97%93%E5%AD%90%E5%93%91%E4%BA%86%E4%B8%89%E5%B9%B4%23) `296.2K 🔥`
1. [年轻人的第一台轿跑可以更新了 (Young people’s first coupe can be updated)](https://s.weibo.com/weibo?q=%23%E5%B9%B4%E8%BD%BB%E4%BA%BA%E7%9A%84%E7%AC%AC%E4%B8%80%E5%8F%B0%E8%BD%BF%E8%B7%91%E5%8F%AF%E4%BB%A5%E6%9B%B4%E6%96%B0%E4%BA%86%23) `252.3K 🔥`
1. [小伙腹痛CT查出肠道卡2把勺子 (Boy with abdominal pain, CT found two spoons stuck in intestine)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E4%BC%99%E8%85%B9%E7%97%9BCT%E6%9F%A5%E5%87%BA%E8%82%A0%E9%81%93%E5%8D%A12%E6%8A%8A%E5%8B%BA%E5%AD%90%23) `241.3K 🔥`
1. [伊朗国家电视台总部遭袭 (Iranian state television headquarters attacked)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%9B%BD%E5%AE%B6%E7%94%B5%E8%A7%86%E5%8F%B0%E6%80%BB%E9%83%A8%E9%81%AD%E8%A2%AD%23) `195.6K 🔥`
1. [迪拜已拦截超百次伊朗炸弹 (Dubai has intercepted more than 100 Iranian bombs)](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E6%8B%9C%E5%B7%B2%E6%8B%A6%E6%88%AA%E8%B6%85%E7%99%BE%E6%AC%A1%E4%BC%8A%E6%9C%97%E7%82%B8%E5%BC%B9%23) `156.3K 🔥`
1. [伊朗革命卫队发起新一轮打击 (Iran's Revolutionary Guard launches new round of strikes)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E9%9D%A9%E5%91%BD%E5%8D%AB%E9%98%9F%E5%8F%91%E8%B5%B7%E6%96%B0%E4%B8%80%E8%BD%AE%E6%89%93%E5%87%BB%23) `146.1K 🔥`
1. [多国就美以袭击伊朗表态 (Many countries express their stance on the US-Israeli attack on Iran)](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E5%9B%BD%E5%B0%B1%E7%BE%8E%E4%BB%A5%E8%A2%AD%E5%87%BB%E4%BC%8A%E6%9C%97%E8%A1%A8%E6%80%81%23) `135.0K 🔥`

Updated at 2026-03-02 07:45:09

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
