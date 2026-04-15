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

1. [军工人员疯狂泄密却被开空头支票 (Military workers leaked secrets like crazy but were given bad checks)](https://s.weibo.com/weibo?q=%23%E5%86%9B%E5%B7%A5%E4%BA%BA%E5%91%98%E7%96%AF%E7%8B%82%E6%B3%84%E5%AF%86%E5%8D%B4%E8%A2%AB%E5%BC%80%E7%A9%BA%E5%A4%B4%E6%94%AF%E7%A5%A8%23) `1.1M 🔥` `NEW`
1. [神仙肉](https://s.weibo.com/weibo?q=%23%E7%A5%9E%E4%BB%99%E8%82%89%23) `811.0K 🔥` `NEW`
1. [全民国家安全教育日](https://s.weibo.com/weibo?q=%23%E5%85%A8%E6%B0%91%E5%9B%BD%E5%AE%B6%E5%AE%89%E5%85%A8%E6%95%99%E8%82%B2%E6%97%A5%23) `716.6K 🔥` `NEW`
1. [你以为吃的是素菜其实全是油脂](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E4%BB%A5%E4%B8%BA%E5%90%83%E7%9A%84%E6%98%AF%E7%B4%A0%E8%8F%9C%E5%85%B6%E5%AE%9E%E5%85%A8%E6%98%AF%E6%B2%B9%E8%84%82%23) `681.7K 🔥` `NEW`
1. [女子生产坚持不打无痛老公苦苦哀求](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E7%94%9F%E4%BA%A7%E5%9D%9A%E6%8C%81%E4%B8%8D%E6%89%93%E6%97%A0%E7%97%9B%E8%80%81%E5%85%AC%E8%8B%A6%E8%8B%A6%E5%93%80%E6%B1%82%23) `450.5K 🔥` `NEW`
1. [云南泼水节车前喷水小鸡袭击路人](https://s.weibo.com/weibo?q=%23%E4%BA%91%E5%8D%97%E6%B3%BC%E6%B0%B4%E8%8A%82%E8%BD%A6%E5%89%8D%E5%96%B7%E6%B0%B4%E5%B0%8F%E9%B8%A1%E8%A2%AD%E5%87%BB%E8%B7%AF%E4%BA%BA%23) `343.7K 🔥` `NEW`
1. [可心柔乖巧宝宝联名](https://s.weibo.com/weibo?q=%23%E5%8F%AF%E5%BF%83%E6%9F%94%E4%B9%96%E5%B7%A7%E5%AE%9D%E5%AE%9D%E8%81%94%E5%90%8D%23) `332.2K 🔥` `NEW`
1. [苹果官方发文提醒](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C%E5%AE%98%E6%96%B9%E5%8F%91%E6%96%87%E6%8F%90%E9%86%92%23) `308.8K 🔥` `NEW`
1. [于正为吴谨言许凯宣传新剧](https://s.weibo.com/weibo?q=%23%E4%BA%8E%E6%AD%A3%E4%B8%BA%E5%90%B4%E8%B0%A8%E8%A8%80%E8%AE%B8%E5%87%AF%E5%AE%A3%E4%BC%A0%E6%96%B0%E5%89%A7%23) `261.5K 🔥` `NEW`
1. [曝何与辞演神仙肉](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E4%BD%95%E4%B8%8E%E8%BE%9E%E6%BC%94%E7%A5%9E%E4%BB%99%E8%82%89%23) `216.8K 🔥` `NEW`
1. [美军称已完全切断伊朗海上进出口贸易 (The US military says it has completely cut off Iran’s maritime import and export trade)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%86%9B%E7%A7%B0%E5%B7%B2%E5%AE%8C%E5%85%A8%E5%88%87%E6%96%AD%E4%BC%8A%E6%9C%97%E6%B5%B7%E4%B8%8A%E8%BF%9B%E5%87%BA%E5%8F%A3%E8%B4%B8%E6%98%93%23) `215.2K 🔥` `NEW`
1. [教体局称猥亵女孩老师已降最低等级](https://s.weibo.com/weibo?q=%23%E6%95%99%E4%BD%93%E5%B1%80%E7%A7%B0%E7%8C%A5%E4%BA%B5%E5%A5%B3%E5%AD%A9%E8%80%81%E5%B8%88%E5%B7%B2%E9%99%8D%E6%9C%80%E4%BD%8E%E7%AD%89%E7%BA%A7%23) `214.4K 🔥` `NEW`
1. [孙颖莎代言白象](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E4%BB%A3%E8%A8%80%E7%99%BD%E8%B1%A1%23) `209.3K 🔥` `NEW`
1. [何润东逐玉的红利](https://s.weibo.com/weibo?q=%23%E4%BD%95%E6%B6%A6%E4%B8%9C%E9%80%90%E7%8E%89%E7%9A%84%E7%BA%A2%E5%88%A9%23) `207.8K 🔥` `NEW`
1. [三球附加赛加时绝杀热火](https://s.weibo.com/weibo?q=%23%E4%B8%89%E7%90%83%E9%99%84%E5%8A%A0%E8%B5%9B%E5%8A%A0%E6%97%B6%E7%BB%9D%E6%9D%80%E7%83%AD%E7%81%AB%23) `204.4K 🔥` `NEW`
1. [卫健委回应卫生院用杆秤称新生儿](https://s.weibo.com/weibo?q=%23%E5%8D%AB%E5%81%A5%E5%A7%94%E5%9B%9E%E5%BA%94%E5%8D%AB%E7%94%9F%E9%99%A2%E7%94%A8%E6%9D%86%E7%A7%A4%E7%A7%B0%E6%96%B0%E7%94%9F%E5%84%BF%23) `193.8K 🔥` `NEW`
1. [半夜醒来千万不要看时间](https://s.weibo.com/weibo?q=%23%E5%8D%8A%E5%A4%9C%E9%86%92%E6%9D%A5%E5%8D%83%E4%B8%87%E4%B8%8D%E8%A6%81%E7%9C%8B%E6%97%B6%E9%97%B4%23) `164.8K 🔥` `NEW`
1. [张伦硕说钟丽缇把财产给女儿没意见](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E4%BC%A6%E7%A1%95%E8%AF%B4%E9%92%9F%E4%B8%BD%E7%BC%87%E6%8A%8A%E8%B4%A2%E4%BA%A7%E7%BB%99%E5%A5%B3%E5%84%BF%E6%B2%A1%E6%84%8F%E8%A7%81%23) `164.7K 🔥` `NEW`
1. [普京提议帮伊朗管理浓缩铀](https://s.weibo.com/weibo?q=%23%E6%99%AE%E4%BA%AC%E6%8F%90%E8%AE%AE%E5%B8%AE%E4%BC%8A%E6%9C%97%E7%AE%A1%E7%90%86%E6%B5%93%E7%BC%A9%E9%93%80%23) `155.0K 🔥` `NEW`
1. [女子把生姜当水果吃每日1盆](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%8A%8A%E7%94%9F%E5%A7%9C%E5%BD%93%E6%B0%B4%E6%9E%9C%E5%90%83%E6%AF%8F%E6%97%A51%E7%9B%86%23) `149.3K 🔥` `NEW`
1. [尽量别用微波炉加热液体 (Try not to heat liquids in the microwave)](https://s.weibo.com/weibo?q=%23%E5%B0%BD%E9%87%8F%E5%88%AB%E7%94%A8%E5%BE%AE%E6%B3%A2%E7%82%89%E5%8A%A0%E7%83%AD%E6%B6%B2%E4%BD%93%23) `147.0K 🔥` `NEW`
1. [4种牙病可能跟血糖高有关](https://s.weibo.com/weibo?q=%234%E7%A7%8D%E7%89%99%E7%97%85%E5%8F%AF%E8%83%BD%E8%B7%9F%E8%A1%80%E7%B3%96%E9%AB%98%E6%9C%89%E5%85%B3%23) `127.8K 🔥` `NEW`
1. [杨紫官方后援会致歉](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E5%AE%98%E6%96%B9%E5%90%8E%E6%8F%B4%E4%BC%9A%E8%87%B4%E6%AD%89%23) `121.8K 🔥` `NEW`
1. [TFBOYS十二周年](https://s.weibo.com/weibo?q=%23TFBOYS%E5%8D%81%E4%BA%8C%E5%91%A8%E5%B9%B4%23) `118.8K 🔥` `NEW`
1. [减脂水果从夯到拉](https://s.weibo.com/weibo?q=%23%E5%87%8F%E8%84%82%E6%B0%B4%E6%9E%9C%E4%BB%8E%E5%A4%AF%E5%88%B0%E6%8B%89%23) `116.8K 🔥` `NEW`
1. [卧床吸烟致母子二人葬身火海](https://s.weibo.com/weibo?q=%23%E5%8D%A7%E5%BA%8A%E5%90%B8%E7%83%9F%E8%87%B4%E6%AF%8D%E5%AD%90%E4%BA%8C%E4%BA%BA%E8%91%AC%E8%BA%AB%E7%81%AB%E6%B5%B7%23) `110.5K 🔥` `NEW`
1. [驻外人员嫖娼遭仙人跳出卖国家秘密](https://s.weibo.com/weibo?q=%23%E9%A9%BB%E5%A4%96%E4%BA%BA%E5%91%98%E5%AB%96%E5%A8%BC%E9%81%AD%E4%BB%99%E4%BA%BA%E8%B7%B3%E5%87%BA%E5%8D%96%E5%9B%BD%E5%AE%B6%E7%A7%98%E5%AF%86%23) `106.7K 🔥` `NEW`
1. [永辉超市仲裁胜诉](https://s.weibo.com/weibo?q=%23%E6%B0%B8%E8%BE%89%E8%B6%85%E5%B8%82%E4%BB%B2%E8%A3%81%E8%83%9C%E8%AF%89%23) `101.0K 🔥` `NEW`
1. [警察不帮忙管娃男子3h报警47次](https://s.weibo.com/weibo?q=%23%E8%AD%A6%E5%AF%9F%E4%B8%8D%E5%B8%AE%E5%BF%99%E7%AE%A1%E5%A8%83%E7%94%B7%E5%AD%903h%E6%8A%A5%E8%AD%A647%E6%AC%A1%23) `100.4K 🔥` `NEW`
1. [蜜语纪 霸总爱上离婚做保洁的我](https://s.weibo.com/weibo?q=%23%E8%9C%9C%E8%AF%AD%E7%BA%AA%20%E9%9C%B8%E6%80%BB%E7%88%B1%E4%B8%8A%E7%A6%BB%E5%A9%9A%E5%81%9A%E4%BF%9D%E6%B4%81%E7%9A%84%E6%88%91%23) `96.7K 🔥` `NEW`
1. [王健林孙喜双等需支付超38亿元 (Wang Jianlin, Sun Xishuang and others need to pay more than 3.8 billion yuan)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%81%A5%E6%9E%97%E5%AD%99%E5%96%9C%E5%8F%8C%E7%AD%89%E9%9C%80%E6%94%AF%E4%BB%98%E8%B6%8538%E4%BA%BF%E5%85%83%23) `91.6K 🔥` `NEW`
1. [女子在澳遭小孩挑衅后被其母殴打](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%9C%A8%E6%BE%B3%E9%81%AD%E5%B0%8F%E5%AD%A9%E6%8C%91%E8%A1%85%E5%90%8E%E8%A2%AB%E5%85%B6%E6%AF%8D%E6%AE%B4%E6%89%93%23) `85.2K 🔥` `NEW`
1. [iOS26泄露案动态](https://s.weibo.com/weibo?q=%23iOS26%E6%B3%84%E9%9C%B2%E6%A1%88%E5%8A%A8%E6%80%81%23) `83.4K 🔥` `NEW`
1. [牙周病是糖尿病第六大并发症](https://s.weibo.com/weibo?q=%23%E7%89%99%E5%91%A8%E7%97%85%E6%98%AF%E7%B3%96%E5%B0%BF%E7%97%85%E7%AC%AC%E5%85%AD%E5%A4%A7%E5%B9%B6%E5%8F%91%E7%97%87%23) `81.8K 🔥` `NEW`
1. [黄金跌破4840美元关口](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%E8%B7%8C%E7%A0%B44840%E7%BE%8E%E5%85%83%E5%85%B3%E5%8F%A3%23) `81.6K 🔥` `NEW`
1. [苹果AppStore下架两款违规应用](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9CAppStore%E4%B8%8B%E6%9E%B6%E4%B8%A4%E6%AC%BE%E8%BF%9D%E8%A7%84%E5%BA%94%E7%94%A8%23) `78.2K 🔥` `NEW`
1. [山东临沂成立联合调查组](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E4%B8%9C%E4%B8%B4%E6%B2%82%E6%88%90%E7%AB%8B%E8%81%94%E5%90%88%E8%B0%83%E6%9F%A5%E7%BB%84%23) `71.7K 🔥` `NEW`
1. [多方回应中国女子在澳遇袭](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E6%96%B9%E5%9B%9E%E5%BA%94%E4%B8%AD%E5%9B%BD%E5%A5%B3%E5%AD%90%E5%9C%A8%E6%BE%B3%E9%81%87%E8%A2%AD%23) `70.5K 🔥` `NEW`
1. [GQ四月王一博封面](https://s.weibo.com/weibo?q=%23GQ%E5%9B%9B%E6%9C%88%E7%8E%8B%E4%B8%80%E5%8D%9A%E5%B0%81%E9%9D%A2%23) `68.4K 🔥` `NEW`
1. [玲娜贝儿到了山东都长高了](https://s.weibo.com/weibo?q=%23%E7%8E%B2%E5%A8%9C%E8%B4%9D%E5%84%BF%E5%88%B0%E4%BA%86%E5%B1%B1%E4%B8%9C%E9%83%BD%E9%95%BF%E9%AB%98%E4%BA%86%23) `67.5K 🔥` `NEW`
1. [秦昊带伊能静品尝他的一生挚爱 (Qin Hao takes Yi Nengjing to taste the love of his life)](https://s.weibo.com/weibo?q=%23%E7%A7%A6%E6%98%8A%E5%B8%A6%E4%BC%8A%E8%83%BD%E9%9D%99%E5%93%81%E5%B0%9D%E4%BB%96%E7%9A%84%E4%B8%80%E7%94%9F%E6%8C%9A%E7%88%B1%23) `65.4K 🔥` `NEW`
1. [开拓者vs太阳](https://s.weibo.com/weibo?q=%23%E5%BC%80%E6%8B%93%E8%80%85vs%E5%A4%AA%E9%98%B3%23) `62.2K 🔥` `NEW`
1. [以色列被曝想抢伊朗浓缩铀](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E8%89%B2%E5%88%97%E8%A2%AB%E6%9B%9D%E6%83%B3%E6%8A%A2%E4%BC%8A%E6%9C%97%E6%B5%93%E7%BC%A9%E9%93%80%23) `62.0K 🔥` `NEW`
1. [三球拉到阿德巴约脚踝](https://s.weibo.com/weibo?q=%23%E4%B8%89%E7%90%83%E6%8B%89%E5%88%B0%E9%98%BF%E5%BE%B7%E5%B7%B4%E7%BA%A6%E8%84%9A%E8%B8%9D%23) `61.4K 🔥` `NEW`
1. [孟子义颜选缤果Pro预售价5.88万元起 (Mencius Yi Yanxuan Bingo Pro pre-sale price starts from 58,800 yuan)](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89%E9%A2%9C%E9%80%89%E7%BC%A4%E6%9E%9CPro%E9%A2%84%E5%94%AE%E4%BB%B75.88%E4%B8%87%E5%85%83%E8%B5%B7%23) `685.5K 🔥` `+251%`
1. [10年前的孟子义](https://s.weibo.com/weibo?q=%2310%E5%B9%B4%E5%89%8D%E7%9A%84%E5%AD%9F%E5%AD%90%E4%B9%89%23) `210.6K 🔥` `+85%`
1. [两女子泼水节被多人用高压水枪喷射](https://s.weibo.com/weibo?q=%23%E4%B8%A4%E5%A5%B3%E5%AD%90%E6%B3%BC%E6%B0%B4%E8%8A%82%E8%A2%AB%E5%A4%9A%E4%BA%BA%E7%94%A8%E9%AB%98%E5%8E%8B%E6%B0%B4%E6%9E%AA%E5%96%B7%E5%B0%84%23) `112.2K 🔥` `+40%`
1. [田馥甄回应拒绝浪姐邀约 (Tian Fuzhen responded by rejecting Sister Lang’s invitation)](https://s.weibo.com/weibo?q=%23%E7%94%B0%E9%A6%A5%E7%94%84%E5%9B%9E%E5%BA%94%E6%8B%92%E7%BB%9D%E6%B5%AA%E5%A7%90%E9%82%80%E7%BA%A6%23) `206.2K 🔥` `-53%`
1. [鸡煲公主爆火前后反差](https://s.weibo.com/weibo?q=%23%E9%B8%A1%E7%85%B2%E5%85%AC%E4%B8%BB%E7%88%86%E7%81%AB%E5%89%8D%E5%90%8E%E5%8F%8D%E5%B7%AE%23) `131.5K 🔥` `-57%`
1. [4人合伙买彩票中500万后起纠纷 (A dispute broke out after 4 people won 5 million in lottery tickets together.)](https://s.weibo.com/weibo?q=%234%E4%BA%BA%E5%90%88%E4%BC%99%E4%B9%B0%E5%BD%A9%E7%A5%A8%E4%B8%AD500%E4%B8%87%E5%90%8E%E8%B5%B7%E7%BA%A0%E7%BA%B7%23) `110.0K 🔥` `-86%`
1. [冰湖重生降级](https://s.weibo.com/weibo?q=%23%E5%86%B0%E6%B9%96%E9%87%8D%E7%94%9F%E9%99%8D%E7%BA%A7%23) `81.5K 🔥` `-52%`
1. [陈哲远是泰国泼水节最大赢家吧](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%93%B2%E8%BF%9C%E6%98%AF%E6%B3%B0%E5%9B%BD%E6%B3%BC%E6%B0%B4%E8%8A%82%E6%9C%80%E5%A4%A7%E8%B5%A2%E5%AE%B6%E5%90%A7%23) `72.1K 🔥` `-72%`

Updated at 2026-04-15 11:34:49

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
