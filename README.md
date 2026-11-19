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

1. [别克称增程对于MPV是过渡技术](https://s.weibo.com/weibo?q=%23%E5%88%AB%E5%85%8B%E7%A7%B0%E5%A2%9E%E7%A8%8B%E5%AF%B9%E4%BA%8EMPV%E6%98%AF%E8%BF%87%E6%B8%A1%E6%8A%80%E6%9C%AF%23) `255.5K 🔥` `NEW`
1. [伊能静一眼看破所有嘉宾](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E8%83%BD%E9%9D%99%E4%B8%80%E7%9C%BC%E7%9C%8B%E7%A0%B4%E6%89%80%E6%9C%89%E5%98%89%E5%AE%BE%23) `193.3K 🔥` `NEW`
1. [全妆深圳惊艳了世界](https://s.weibo.com/weibo?q=%23%E5%85%A8%E5%A6%86%E6%B7%B1%E5%9C%B3%E6%83%8A%E8%89%B3%E4%BA%86%E4%B8%96%E7%95%8C%23) `131.4K 🔥` `NEW`
1. [Anthropic七位创始人百亿美元](https://s.weibo.com/weibo?q=%23Anthropic%E4%B8%83%E4%BD%8D%E5%88%9B%E5%A7%8B%E4%BA%BA%E7%99%BE%E4%BA%BF%E7%BE%8E%E5%85%83%23) `124.7K 🔥` `NEW`
1. [文吉儿王子璇的友谊本质](https://s.weibo.com/weibo?q=%23%E6%96%87%E5%90%89%E5%84%BF%E7%8E%8B%E5%AD%90%E7%92%87%E7%9A%84%E5%8F%8B%E8%B0%8A%E6%9C%AC%E8%B4%A8%23) `124.4K 🔥` `NEW`
1. [宇宙其实根本就没有白天](https://s.weibo.com/weibo?q=%23%E5%AE%87%E5%AE%99%E5%85%B6%E5%AE%9E%E6%A0%B9%E6%9C%AC%E5%B0%B1%E6%B2%A1%E6%9C%89%E7%99%BD%E5%A4%A9%23) `123.4K 🔥` `NEW`
1. [APEC同款荔枝冰酒原果汁含量100%](https://s.weibo.com/weibo?q=%23APEC%E5%90%8C%E6%AC%BE%E8%8D%94%E6%9E%9D%E5%86%B0%E9%85%92%E5%8E%9F%E6%9E%9C%E6%B1%81%E5%90%AB%E9%87%8F100%25%23) `110.1K 🔥` `NEW`
1. [苗苗怀二胎身材走样锻炼时被郑恺逗了一下](https://s.weibo.com/weibo?q=%23%E8%8B%97%E8%8B%97%E6%80%80%E4%BA%8C%E8%83%8E%E8%BA%AB%E6%9D%90%E8%B5%B0%E6%A0%B7%E9%94%BB%E7%82%BC%E6%97%B6%E8%A2%AB%E9%83%91%E6%81%BA%E9%80%97%E4%BA%86%E4%B8%80%E4%B8%8B%23) `108.3K 🔥` `NEW`
1. [五星上将麦克阿瑟谈深圳50年巨变](https://s.weibo.com/weibo?q=%23%E4%BA%94%E6%98%9F%E4%B8%8A%E5%B0%86%E9%BA%A6%E5%85%8B%E9%98%BF%E7%91%9F%E8%B0%88%E6%B7%B1%E5%9C%B350%E5%B9%B4%E5%B7%A8%E5%8F%98%23) `104.3K 🔥` `NEW`
1. [有观众举报后会友期](https://s.weibo.com/weibo?q=%23%E6%9C%89%E8%A7%82%E4%BC%97%E4%B8%BE%E6%8A%A5%E5%90%8E%E4%BC%9A%E5%8F%8B%E6%9C%9F%23) `103.0K 🔥` `NEW`
1. [青岛失联女生最后监控走向海边](https://s.weibo.com/weibo?q=%23%E9%9D%92%E5%B2%9B%E5%A4%B1%E8%81%94%E5%A5%B3%E7%94%9F%E6%9C%80%E5%90%8E%E7%9B%91%E6%8E%A7%E8%B5%B0%E5%90%91%E6%B5%B7%E8%BE%B9%23) `102.2K 🔥` `NEW`
1. [芦玉菲退役后社保被欠七年五个月](https://s.weibo.com/weibo?q=%23%E8%8A%A6%E7%8E%89%E8%8F%B2%E9%80%80%E5%BD%B9%E5%90%8E%E7%A4%BE%E4%BF%9D%E8%A2%AB%E6%AC%A0%E4%B8%83%E5%B9%B4%E4%BA%94%E4%B8%AA%E6%9C%88%23) `83.8K 🔥` `NEW`
1. [比亚迪发布DMS超级混动全能平台](https://s.weibo.com/weibo?q=%23%E6%AF%94%E4%BA%9A%E8%BF%AA%E5%8F%91%E5%B8%83DMS%E8%B6%85%E7%BA%A7%E6%B7%B7%E5%8A%A8%E5%85%A8%E8%83%BD%E5%B9%B3%E5%8F%B0%23) `81.5K 🔥` `NEW`
1. [多所高校不向2027级研究生提供宿舍](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E6%89%80%E9%AB%98%E6%A0%A1%E4%B8%8D%E5%90%912027%E7%BA%A7%E7%A0%94%E7%A9%B6%E7%94%9F%E6%8F%90%E4%BE%9B%E5%AE%BF%E8%88%8D%23) `77.4K 🔥` `NEW`
1. [熟鸡蛋放口袋半年变玻璃球](https://s.weibo.com/weibo?q=%23%E7%86%9F%E9%B8%A1%E8%9B%8B%E6%94%BE%E5%8F%A3%E8%A2%8B%E5%8D%8A%E5%B9%B4%E5%8F%98%E7%8E%BB%E7%92%83%E7%90%83%23) `72.4K 🔥` `NEW`
1. [孙俪家的狗获最丑宠物第一名](https://s.weibo.com/weibo?q=%23%E5%AD%99%E4%BF%AA%E5%AE%B6%E7%9A%84%E7%8B%97%E8%8E%B7%E6%9C%80%E4%B8%91%E5%AE%A0%E7%89%A9%E7%AC%AC%E4%B8%80%E5%90%8D%23) `72.3K 🔥` `NEW`
1. [跟狗长大的猫成了狗狗猫](https://s.weibo.com/weibo?q=%23%E8%B7%9F%E7%8B%97%E9%95%BF%E5%A4%A7%E7%9A%84%E7%8C%AB%E6%88%90%E4%BA%86%E7%8B%97%E7%8B%97%E7%8C%AB%23) `68.1K 🔥` `NEW`
1. [Gucci降价算不算背刺老客](https://s.weibo.com/weibo?q=%23Gucci%E9%99%8D%E4%BB%B7%E7%AE%97%E4%B8%8D%E7%AE%97%E8%83%8C%E5%88%BA%E8%80%81%E5%AE%A2%23) `66.3K 🔥` `NEW`
1. [中国航天让一个个神话实现了](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E8%88%AA%E5%A4%A9%E8%AE%A9%E4%B8%80%E4%B8%AA%E4%B8%AA%E7%A5%9E%E8%AF%9D%E5%AE%9E%E7%8E%B0%E4%BA%86%23) `63.3K 🔥` `NEW`
1. [为什么沈腾经常赖皮但不惹人讨厌](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E6%B2%88%E8%85%BE%E7%BB%8F%E5%B8%B8%E8%B5%96%E7%9A%AE%E4%BD%86%E4%B8%8D%E6%83%B9%E4%BA%BA%E8%AE%A8%E5%8E%8C%23) `62.5K 🔥` `NEW`
1. [美联储或将多次加息](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E8%81%94%E5%82%A8%E6%88%96%E5%B0%86%E5%A4%9A%E6%AC%A1%E5%8A%A0%E6%81%AF%23) `57.8K 🔥` `NEW`
1. [杨乐乐分享和汪涵谈恋爱过程](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E4%B9%90%E4%B9%90%E5%88%86%E4%BA%AB%E5%92%8C%E6%B1%AA%E6%B6%B5%E8%B0%88%E6%81%8B%E7%88%B1%E8%BF%87%E7%A8%8B%23) `56.7K 🔥` `NEW`
1. [许飞说可以和厉娜去观察室了](https://s.weibo.com/weibo?q=%23%E8%AE%B8%E9%A3%9E%E8%AF%B4%E5%8F%AF%E4%BB%A5%E5%92%8C%E5%8E%89%E5%A8%9C%E5%8E%BB%E8%A7%82%E5%AF%9F%E5%AE%A4%E4%BA%86%23) `55.6K 🔥` `NEW`
1. [GTA6玩家有多疯狂](https://s.weibo.com/weibo?q=%23GTA6%E7%8E%A9%E5%AE%B6%E6%9C%89%E5%A4%9A%E7%96%AF%E7%8B%82%23) `55.6K 🔥` `NEW`
1. [三国重申能源稳定流动的重要性](https://s.weibo.com/weibo?q=%23%E4%B8%89%E5%9B%BD%E9%87%8D%E7%94%B3%E8%83%BD%E6%BA%90%E7%A8%B3%E5%AE%9A%E6%B5%81%E5%8A%A8%E7%9A%84%E9%87%8D%E8%A6%81%E6%80%A7%23) `55.6K 🔥` `NEW`
1. [中俄美元首和平宣言](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E4%BF%84%E7%BE%8E%E5%85%83%E9%A6%96%E5%92%8C%E5%B9%B3%E5%AE%A3%E8%A8%80%23) `769.6K 🔥` `+26%`
1. [马斯克从深圳飞到了上海](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E6%96%AF%E5%85%8B%E4%BB%8E%E6%B7%B1%E5%9C%B3%E9%A3%9E%E5%88%B0%E4%BA%86%E4%B8%8A%E6%B5%B7%23) `654.1K 🔥` `+218%`
1. [一图读懂深圳倡议](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%9B%BE%E8%AF%BB%E6%87%82%E6%B7%B1%E5%9C%B3%E5%80%A1%E8%AE%AE%23) `442.5K 🔥` `+31%`
1. [特朗普登机前又做标志性动作](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E7%99%BB%E6%9C%BA%E5%89%8D%E5%8F%88%E5%81%9A%E6%A0%87%E5%BF%97%E6%80%A7%E5%8A%A8%E4%BD%9C%23) `194.4K 🔥`
1. [对亚洲女生服美役的程度感到震惊](https://s.weibo.com/weibo?q=%23%E5%AF%B9%E4%BA%9A%E6%B4%B2%E5%A5%B3%E7%94%9F%E6%9C%8D%E7%BE%8E%E5%BD%B9%E7%9A%84%E7%A8%8B%E5%BA%A6%E6%84%9F%E5%88%B0%E9%9C%87%E6%83%8A%23) `117.3K 🔥`
1. [特朗普登上空军一号挥手告别](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E7%99%BB%E4%B8%8A%E7%A9%BA%E5%86%9B%E4%B8%80%E5%8F%B7%E6%8C%A5%E6%89%8B%E5%91%8A%E5%88%AB%23) `237.0K 🔥` `-53%`
1. [APEC晚宴用荔枝酒已限购](https://s.weibo.com/weibo?q=%23APEC%E6%99%9A%E5%AE%B4%E7%94%A8%E8%8D%94%E6%9E%9D%E9%85%92%E5%B7%B2%E9%99%90%E8%B4%AD%23) `180.7K 🔥` `-24%`
1. [20多天婴儿被喂白开水中毒肾损伤](https://s.weibo.com/weibo?q=%2320%E5%A4%9A%E5%A4%A9%E5%A9%B4%E5%84%BF%E8%A2%AB%E5%96%82%E7%99%BD%E5%BC%80%E6%B0%B4%E4%B8%AD%E6%AF%92%E8%82%BE%E6%8D%9F%E4%BC%A4%23) `123.1K 🔥` `-49%`
1. [伊能静还是不负众望](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E8%83%BD%E9%9D%99%E8%BF%98%E6%98%AF%E4%B8%8D%E8%B4%9F%E4%BC%97%E6%9C%9B%23) `122.1K 🔥` `-49%`
1. [马天宇自曝幼时因打疫苗遭毒打](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%A4%A9%E5%AE%87%E8%87%AA%E6%9B%9D%E5%B9%BC%E6%97%B6%E5%9B%A0%E6%89%93%E7%96%AB%E8%8B%97%E9%81%AD%E6%AF%92%E6%89%93%23) `121.5K 🔥` `-49%`
1. [文吉儿又有新综艺了](https://s.weibo.com/weibo?q=%23%E6%96%87%E5%90%89%E5%84%BF%E5%8F%88%E6%9C%89%E6%96%B0%E7%BB%BC%E8%89%BA%E4%BA%86%23) `120.9K 🔥` `-49%`
1. [优先招35岁以上员工餐厅停业](https://s.weibo.com/weibo?q=%23%E4%BC%98%E5%85%88%E6%8B%9B35%E5%B2%81%E4%BB%A5%E4%B8%8A%E5%91%98%E5%B7%A5%E9%A4%90%E5%8E%85%E5%81%9C%E4%B8%9A%23) `120.4K 🔥` `-43%`
1. [这就是Dior点灯活动C位的含金量吗](https://s.weibo.com/weibo?q=%23%E8%BF%99%E5%B0%B1%E6%98%AFDior%E7%82%B9%E7%81%AF%E6%B4%BB%E5%8A%A8C%E4%BD%8D%E7%9A%84%E5%90%AB%E9%87%91%E9%87%8F%E5%90%97%23) `119.8K 🔥` `-50%`
1. [老芒果诡计多端](https://s.weibo.com/weibo?q=%23%E8%80%81%E8%8A%92%E6%9E%9C%E8%AF%A1%E8%AE%A1%E5%A4%9A%E7%AB%AF%23) `109.8K 🔥` `-54%`
1. [赵丽颖合影被拉到C位](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%B8%BD%E9%A2%96%E5%90%88%E5%BD%B1%E8%A2%AB%E6%8B%89%E5%88%B0C%E4%BD%8D%23) `106.8K 🔥` `-55%`
1. [青稚回应王栎鑫](https://s.weibo.com/weibo?q=%23%E9%9D%92%E7%A8%9A%E5%9B%9E%E5%BA%94%E7%8E%8B%E6%A0%8E%E9%91%AB%23) `101.3K 🔥` `-58%`
1. [泰国总理携夫人在深圳南山吃宵夜](https://s.weibo.com/weibo?q=%23%E6%B3%B0%E5%9B%BD%E6%80%BB%E7%90%86%E6%90%BA%E5%A4%AB%E4%BA%BA%E5%9C%A8%E6%B7%B1%E5%9C%B3%E5%8D%97%E5%B1%B1%E5%90%83%E5%AE%B5%E5%A4%9C%23) `97.9K 🔥` `-70%`
1. [赵丽颖帮曹翠芬穿衣服](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%B8%BD%E9%A2%96%E5%B8%AE%E6%9B%B9%E7%BF%A0%E8%8A%AC%E7%A9%BF%E8%A1%A3%E6%9C%8D%23) `74.4K 🔥` `-69%`
1. [李在明发文感谢中国热情接待](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%9C%A8%E6%98%8E%E5%8F%91%E6%96%87%E6%84%9F%E8%B0%A2%E4%B8%AD%E5%9B%BD%E7%83%AD%E6%83%85%E6%8E%A5%E5%BE%85%23) `73.2K 🔥` `-73%`
1. [韩国总统夫人被舞狮英歌舞表演圈粉](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E6%80%BB%E7%BB%9F%E5%A4%AB%E4%BA%BA%E8%A2%AB%E8%88%9E%E7%8B%AE%E8%8B%B1%E6%AD%8C%E8%88%9E%E8%A1%A8%E6%BC%94%E5%9C%88%E7%B2%89%23) `68.4K 🔥` `-58%`
1. [后会友期全员都想吃文王的瓜](https://s.weibo.com/weibo?q=%23%E5%90%8E%E4%BC%9A%E5%8F%8B%E6%9C%9F%E5%85%A8%E5%91%98%E9%83%BD%E6%83%B3%E5%90%83%E6%96%87%E7%8E%8B%E7%9A%84%E7%93%9C%23) `67.0K 🔥` `-72%`
1. [王菲窦靖童李嫣将合作发歌](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%8F%B2%E7%AA%A6%E9%9D%96%E7%AB%A5%E6%9D%8E%E5%AB%A3%E5%B0%86%E5%90%88%E4%BD%9C%E5%8F%91%E6%AD%8C%23) `64.8K 🔥` `-48%`
1. [胖东来撤走后降到四百万依然没有人接盘](https://s.weibo.com/weibo?q=%23%E8%83%96%E4%B8%9C%E6%9D%A5%E6%92%A4%E8%B5%B0%E5%90%8E%E9%99%8D%E5%88%B0%E5%9B%9B%E7%99%BE%E4%B8%87%E4%BE%9D%E7%84%B6%E6%B2%A1%E6%9C%89%E4%BA%BA%E6%8E%A5%E7%9B%98%23) `60.5K 🔥` `-50%`
1. [秦岚你学学刘涛怎么保暖的](https://s.weibo.com/weibo?q=%23%E7%A7%A6%E5%B2%9A%E4%BD%A0%E5%AD%A6%E5%AD%A6%E5%88%98%E6%B6%9B%E6%80%8E%E4%B9%88%E4%BF%9D%E6%9A%96%E7%9A%84%23) `57.8K 🔥` `-44%`
1. [APEC晚宴用荔枝冰酒销量暴增900倍](https://s.weibo.com/weibo?q=%23APEC%E6%99%9A%E5%AE%B4%E7%94%A8%E8%8D%94%E6%9E%9D%E5%86%B0%E9%85%92%E9%94%80%E9%87%8F%E6%9A%B4%E5%A2%9E900%E5%80%8D%23) `56.7K 🔥` `-75%`
1. [普京说这些把中俄美联系在一起](https://s.weibo.com/weibo?q=%23%E6%99%AE%E4%BA%AC%E8%AF%B4%E8%BF%99%E4%BA%9B%E6%8A%8A%E4%B8%AD%E4%BF%84%E7%BE%8E%E8%81%94%E7%B3%BB%E5%9C%A8%E4%B8%80%E8%B5%B7%23) `55.6K 🔥` `-77%`

Updated at 2026-11-20 07:28:35

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
