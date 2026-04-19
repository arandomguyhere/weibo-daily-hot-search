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

1. [女子万达广场坠楼商户称人当场没了 (Woman fell from Wanda Plaza, merchant said she was dead on the spot)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%9D%A0%E6%A5%BC%E5%95%86%E6%88%B7%E7%A7%B0%E4%BA%BA%E5%BD%93%E5%9C%BA%E6%B2%A1%E4%BA%86%23) `2.2M 🔥` `NEW`
1. [铁路12306已拒绝出票105.6万张](https://s.weibo.com/weibo?q=%23%E9%93%81%E8%B7%AF12306%E5%B7%B2%E6%8B%92%E7%BB%9D%E5%87%BA%E7%A5%A8105.6%E4%B8%87%E5%BC%A0%23) `598.6K 🔥` `NEW`
1. [薛之谦方回应李雨桐被行拘](https://s.weibo.com/weibo?q=%23%E8%96%9B%E4%B9%8B%E8%B0%A6%E6%96%B9%E5%9B%9E%E5%BA%94%E6%9D%8E%E9%9B%A8%E6%A1%90%E8%A2%AB%E8%A1%8C%E6%8B%98%23) `335.6K 🔥` `NEW`
1. [仙逆](https://s.weibo.com/weibo?q=%23%E4%BB%99%E9%80%86%23) `327.8K 🔥` `NEW`
1. [男子在电诈园区开超市被判刑](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%9C%A8%E7%94%B5%E8%AF%88%E5%9B%AD%E5%8C%BA%E5%BC%80%E8%B6%85%E5%B8%82%E8%A2%AB%E5%88%A4%E5%88%91%23) `279.9K 🔥` `NEW`
1. [薛之谦方公开李雨桐行政处罚决定书](https://s.weibo.com/weibo?q=%23%E8%96%9B%E4%B9%8B%E8%B0%A6%E6%96%B9%E5%85%AC%E5%BC%80%E6%9D%8E%E9%9B%A8%E6%A1%90%E8%A1%8C%E6%94%BF%E5%A4%84%E7%BD%9A%E5%86%B3%E5%AE%9A%E4%B9%A6%23) `270.6K 🔥` `NEW`
1. [虞丕杰律师回应索赔17万败诉](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B8%95%E6%9D%B0%E5%BE%8B%E5%B8%88%E5%9B%9E%E5%BA%94%E7%B4%A2%E8%B5%9417%E4%B8%87%E8%B4%A5%E8%AF%89%23) `260.5K 🔥` `NEW`
1. [出门和不出门过的是两种人生](https://s.weibo.com/weibo?q=%23%E5%87%BA%E9%97%A8%E5%92%8C%E4%B8%8D%E5%87%BA%E9%97%A8%E8%BF%87%E7%9A%84%E6%98%AF%E4%B8%A4%E7%A7%8D%E4%BA%BA%E7%94%9F%23) `215.3K 🔥` `NEW`
1. [惠英红金像奖定制红裙](https://s.weibo.com/weibo?q=%23%E6%83%A0%E8%8B%B1%E7%BA%A2%E9%87%91%E5%83%8F%E5%A5%96%E5%AE%9A%E5%88%B6%E7%BA%A2%E8%A3%99%23) `214.0K 🔥` `NEW`
1. [张凌赫ins点赞两小时破五十万](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%ABins%E7%82%B9%E8%B5%9E%E4%B8%A4%E5%B0%8F%E6%97%B6%E7%A0%B4%E4%BA%94%E5%8D%81%E4%B8%87%23) `210.9K 🔥` `NEW`
1. [黄圣依小儿子颜值 (The appearance of Huang Shengyi’s youngest son)](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%9C%A3%E4%BE%9D%E5%B0%8F%E5%84%BF%E5%AD%90%E9%A2%9C%E5%80%BC%23) `177.5K 🔥` `NEW`
1. [TF四代History舞台](https://s.weibo.com/weibo?q=%23TF%E5%9B%9B%E4%BB%A3History%E8%88%9E%E5%8F%B0%23) `177.5K 🔥` `NEW`
1. [迪丽热巴白日提灯获年度原创文学ip奖](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E7%99%BD%E6%97%A5%E6%8F%90%E7%81%AF%E8%8E%B7%E5%B9%B4%E5%BA%A6%E5%8E%9F%E5%88%9B%E6%96%87%E5%AD%A6ip%E5%A5%96%23) `167.1K 🔥` `NEW`
1. [李雨桐被行拘 (Li Yutong was detained)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E9%9B%A8%E6%A1%90%E8%A2%AB%E8%A1%8C%E6%8B%98%23) `12.6M 🔥` `+25%`
1. [消博会上的硬核科技展现未来趋势](https://s.weibo.com/weibo?q=%23%E6%B6%88%E5%8D%9A%E4%BC%9A%E4%B8%8A%E7%9A%84%E7%A1%AC%E6%A0%B8%E7%A7%91%E6%8A%80%E5%B1%95%E7%8E%B0%E6%9C%AA%E6%9D%A5%E8%B6%8B%E5%8A%BF%23) `1.8M 🔥` `+22%`
1. [歌手2026 (singer 2026)](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B2026%23) `516.9K 🔥` `+27%`
1. [专家称黄金完成了阶段性的历史使命](https://s.weibo.com/weibo?q=%23%E4%B8%93%E5%AE%B6%E7%A7%B0%E9%BB%84%E9%87%91%E5%AE%8C%E6%88%90%E4%BA%86%E9%98%B6%E6%AE%B5%E6%80%A7%E7%9A%84%E5%8E%86%E5%8F%B2%E4%BD%BF%E5%91%BD%23) `402.8K 🔥` `+44%`
1. [现在都开始有人直播西天取经了](https://s.weibo.com/weibo?q=%23%E7%8E%B0%E5%9C%A8%E9%83%BD%E5%BC%80%E5%A7%8B%E6%9C%89%E4%BA%BA%E7%9B%B4%E6%92%AD%E8%A5%BF%E5%A4%A9%E5%8F%96%E7%BB%8F%E4%BA%86%23) `262.8K 🔥` `+51%`
1. [金像奖](https://s.weibo.com/weibo?q=%23%E9%87%91%E5%83%8F%E5%A5%96%23) `253.0K 🔥` `+32%`
1. [穿普拉达的女王2亚裔争议 (The Devil Wears Prada 2 Asian Controversy)](https://s.weibo.com/weibo?q=%23%E7%A9%BF%E6%99%AE%E6%8B%89%E8%BE%BE%E7%9A%84%E5%A5%B3%E7%8E%8B2%E4%BA%9A%E8%A3%94%E4%BA%89%E8%AE%AE%23) `773.1K 🔥`
1. [哈弗猛龙PLUS预售18.98万起 (Haval Raptor PLUS pre-sale starts at 189,800)](https://s.weibo.com/weibo?q=%23%E5%93%88%E5%BC%97%E7%8C%9B%E9%BE%99PLUS%E9%A2%84%E5%94%AE18.98%E4%B8%87%E8%B5%B7%23) `528.3K 🔥`
1. [张雪机车热身赛再获第一](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%E7%83%AD%E8%BA%AB%E8%B5%9B%E5%86%8D%E8%8E%B7%E7%AC%AC%E4%B8%80%23) `345.7K 🔥`
1. [虞书欣父亲索赔17w败诉](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E7%88%B6%E4%BA%B2%E7%B4%A2%E8%B5%9417w%E8%B4%A5%E8%AF%89%23) `343.4K 🔥`
1. [Jennie八年来都长一个样](https://s.weibo.com/weibo?q=%23Jennie%E5%85%AB%E5%B9%B4%E6%9D%A5%E9%83%BD%E9%95%BF%E4%B8%80%E4%B8%AA%E6%A0%B7%23) `323.8K 🔥`
1. [夫妻骑车为躲狗摔倒致妻死亡 (Couple fell down while trying to hide from dog while riding bicycle, killing wife)](https://s.weibo.com/weibo?q=%23%E5%A4%AB%E5%A6%BB%E9%AA%91%E8%BD%A6%E4%B8%BA%E8%BA%B2%E7%8B%97%E6%91%94%E5%80%92%E8%87%B4%E5%A6%BB%E6%AD%BB%E4%BA%A1%23) `308.0K 🔥`
1. [曝李小冉退出浪姐](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%9D%8E%E5%B0%8F%E5%86%89%E9%80%80%E5%87%BA%E6%B5%AA%E5%A7%90%23) `303.8K 🔥`
1. [丞磊你家枇杷熟了](https://s.weibo.com/weibo?q=%23%E4%B8%9E%E7%A3%8A%E4%BD%A0%E5%AE%B6%E6%9E%87%E6%9D%B7%E7%86%9F%E4%BA%86%23) `261.3K 🔥`
1. [上海地铁回应一拉杆箱有血渍渗出](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E5%9C%B0%E9%93%81%E5%9B%9E%E5%BA%94%E4%B8%80%E6%8B%89%E6%9D%86%E7%AE%B1%E6%9C%89%E8%A1%80%E6%B8%8D%E6%B8%97%E5%87%BA%23) `232.2K 🔥`
1. [网易云更新 动脉血变成静脉血了](https://s.weibo.com/weibo?q=%23%E7%BD%91%E6%98%93%E4%BA%91%E6%9B%B4%E6%96%B0%20%E5%8A%A8%E8%84%89%E8%A1%80%E5%8F%98%E6%88%90%E9%9D%99%E8%84%89%E8%A1%80%E4%BA%86%23) `222.4K 🔥`
1. [浪姐有属于自己的SHE](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E6%9C%89%E5%B1%9E%E4%BA%8E%E8%87%AA%E5%B7%B1%E7%9A%84SHE%23) `214.5K 🔥`
1. [28岁女子手汗严重恋爱2年没牵过手](https://s.weibo.com/weibo?q=%2328%E5%B2%81%E5%A5%B3%E5%AD%90%E6%89%8B%E6%B1%97%E4%B8%A5%E9%87%8D%E6%81%8B%E7%88%B12%E5%B9%B4%E6%B2%A1%E7%89%B5%E8%BF%87%E6%89%8B%23) `210.9K 🔥`
1. [魏大勋这辈子都不会忘记耻骨在哪 (Wei Daxun will never forget where his pubic bone is in his life)](https://s.weibo.com/weibo?q=%23%E9%AD%8F%E5%A4%A7%E5%8B%8B%E8%BF%99%E8%BE%88%E5%AD%90%E9%83%BD%E4%B8%8D%E4%BC%9A%E5%BF%98%E8%AE%B0%E8%80%BB%E9%AA%A8%E5%9C%A8%E5%93%AA%23) `210.7K 🔥`
1. [花少8 南美 (Hua Shao 8 South America)](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%B0%918%20%E5%8D%97%E7%BE%8E%23) `177.4K 🔥`
1. [中东局势48小时极致反转](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E4%B8%9C%E5%B1%80%E5%8A%BF48%E5%B0%8F%E6%97%B6%E6%9E%81%E8%87%B4%E5%8F%8D%E8%BD%AC%23) `177.4K 🔥`
1. [25岁女子下楼玩手机摔成大小便失禁](https://s.weibo.com/weibo?q=%2325%E5%B2%81%E5%A5%B3%E5%AD%90%E4%B8%8B%E6%A5%BC%E7%8E%A9%E6%89%8B%E6%9C%BA%E6%91%94%E6%88%90%E5%A4%A7%E5%B0%8F%E4%BE%BF%E5%A4%B1%E7%A6%81%23) `151.7K 🔥`
1. [可爱型人格做的好事也可爱](https://s.weibo.com/weibo?q=%23%E5%8F%AF%E7%88%B1%E5%9E%8B%E4%BA%BA%E6%A0%BC%E5%81%9A%E7%9A%84%E5%A5%BD%E4%BA%8B%E4%B9%9F%E5%8F%AF%E7%88%B1%23) `149.1K 🔥`
1. [李小冉疑回应退出浪姐 (Li Xiaoran responded to the question of quitting Sister Lang)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B0%8F%E5%86%89%E7%96%91%E5%9B%9E%E5%BA%94%E9%80%80%E5%87%BA%E6%B5%AA%E5%A7%90%23) `908.8K 🔥` `-25%`
1. [韩警方称骚扰中国游客日本男子愿回韩 (South Korean police say Japanese man harasses Chinese tourists and wants to return to South Korea)](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E8%AD%A6%E6%96%B9%E7%A7%B0%E9%AA%9A%E6%89%B0%E4%B8%AD%E5%9B%BD%E6%B8%B8%E5%AE%A2%E6%97%A5%E6%9C%AC%E7%94%B7%E5%AD%90%E6%84%BF%E5%9B%9E%E9%9F%A9%23) `406.0K 🔥` `-79%`
1. [王一博车轮 85105 (Wang Yibo wheels 85105)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E8%BD%A6%E8%BD%AE%2085105%23) `315.6K 🔥` `-21%`
1. [稚楚回应](https://s.weibo.com/weibo?q=%23%E7%A8%9A%E6%A5%9A%E5%9B%9E%E5%BA%94%23) `296.4K 🔥` `-25%`
1. [孙丞潇 有没有不吵架的节目](https://s.weibo.com/weibo?q=%23%E5%AD%99%E4%B8%9E%E6%BD%87%20%E6%9C%89%E6%B2%A1%E6%9C%89%E4%B8%8D%E5%90%B5%E6%9E%B6%E7%9A%84%E8%8A%82%E7%9B%AE%23) `288.2K 🔥` `-27%`
1. [沈梦辰连续4年做热玛吉脸越打越薄 (Shen Mengchen’s face became thinner and thinner after having Thermage for 4 consecutive years)](https://s.weibo.com/weibo?q=%23%E6%B2%88%E6%A2%A6%E8%BE%B0%E8%BF%9E%E7%BB%AD4%E5%B9%B4%E5%81%9A%E7%83%AD%E7%8E%9B%E5%90%89%E8%84%B8%E8%B6%8A%E6%89%93%E8%B6%8A%E8%96%84%23) `264.4K 🔥` `-33%`
1. [女子情不自禁到处表白确诊桃花癫 (A woman couldn't help but confess her love everywhere and was diagnosed with epilepsy)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%83%85%E4%B8%8D%E8%87%AA%E7%A6%81%E5%88%B0%E5%A4%84%E8%A1%A8%E7%99%BD%E7%A1%AE%E8%AF%8A%E6%A1%83%E8%8A%B1%E7%99%AB%23) `257.9K 🔥` `-33%`
1. [12306拒绝抢票软件出票超百万张](https://s.weibo.com/weibo?q=%2312306%E6%8B%92%E7%BB%9D%E6%8A%A2%E7%A5%A8%E8%BD%AF%E4%BB%B6%E5%87%BA%E7%A5%A8%E8%B6%85%E7%99%BE%E4%B8%87%E5%BC%A0%23) `226.7K 🔥` `-44%`
1. [攻玉回应换男主 (Gong Yu responded by changing the male lead)](https://s.weibo.com/weibo?q=%23%E6%94%BB%E7%8E%89%E5%9B%9E%E5%BA%94%E6%8D%A2%E7%94%B7%E4%B8%BB%23) `219.3K 🔥` `-43%`
1. [赵丽颖38岁状态](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%B8%BD%E9%A2%9638%E5%B2%81%E7%8A%B6%E6%80%81%23) `218.7K 🔥` `-38%`
1. [自家孩子趴桌睡为何给别人捐躺椅 (Why do you donate recliners to others when your child sleeps on the table?)](https://s.weibo.com/weibo?q=%23%E8%87%AA%E5%AE%B6%E5%AD%A9%E5%AD%90%E8%B6%B4%E6%A1%8C%E7%9D%A1%E4%B8%BA%E4%BD%95%E7%BB%99%E5%88%AB%E4%BA%BA%E6%8D%90%E8%BA%BA%E6%A4%85%23) `184.3K 🔥` `-54%`
1. [马頔为了通告费亲嘴李纯知道吗](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E9%A0%94%E4%B8%BA%E4%BA%86%E9%80%9A%E5%91%8A%E8%B4%B9%E4%BA%B2%E5%98%B4%E6%9D%8E%E7%BA%AF%E7%9F%A5%E9%81%93%E5%90%97%23) `177.5K 🔥` `-28%`
1. [福原爱三胎生子](https://s.weibo.com/weibo?q=%23%E7%A6%8F%E5%8E%9F%E7%88%B1%E4%B8%89%E8%83%8E%E7%94%9F%E5%AD%90%23) `177.5K 🔥` `-54%`
1. [谁家猫怀孕都怀到脖子上了 (Whose cat is pregnant up to its neck?)](https://s.weibo.com/weibo?q=%23%E8%B0%81%E5%AE%B6%E7%8C%AB%E6%80%80%E5%AD%95%E9%83%BD%E6%80%80%E5%88%B0%E8%84%96%E5%AD%90%E4%B8%8A%E4%BA%86%23) `167.0K 🔥` `-35%`
1. [张雪机车四次第一被围剿](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%E5%9B%9B%E6%AC%A1%E7%AC%AC%E4%B8%80%E8%A2%AB%E5%9B%B4%E5%89%BF%23) `158.6K 🔥` `-61%`

Updated at 2026-04-19 18:21:26

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
