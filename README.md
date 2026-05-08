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

1. [浪姐补偿方案 (Sister Lang Compensation Plan)](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E8%A1%A5%E5%81%BF%E6%96%B9%E6%A1%88%23) `1.3M 🔥` `NEW`
1. [美军称袭击伊朗军事设施](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%86%9B%E7%A7%B0%E8%A2%AD%E5%87%BB%E4%BC%8A%E6%9C%97%E5%86%9B%E4%BA%8B%E8%AE%BE%E6%96%BD%23) `651.3K 🔥` `NEW`
1. [网友神助攻 黄子韬被请上岗](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%8F%8B%E7%A5%9E%E5%8A%A9%E6%94%BB%20%E9%BB%84%E5%AD%90%E9%9F%AC%E8%A2%AB%E8%AF%B7%E4%B8%8A%E5%B2%97%23) `574.5K 🔥` `NEW`
1. [伊朗倒逼美国承认既定事实](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%80%92%E9%80%BC%E7%BE%8E%E5%9B%BD%E6%89%BF%E8%AE%A4%E6%97%A2%E5%AE%9A%E4%BA%8B%E5%AE%9E%23) `356.0K 🔥` `NEW`
1. [原来好的大学真的有隐形福利](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E5%A5%BD%E7%9A%84%E5%A4%A7%E5%AD%A6%E7%9C%9F%E7%9A%84%E6%9C%89%E9%9A%90%E5%BD%A2%E7%A6%8F%E5%88%A9%23) `344.6K 🔥` `NEW`
1. [王楚钦不提倡不参与生日应援活动](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E4%B8%8D%E6%8F%90%E5%80%A1%E4%B8%8D%E5%8F%82%E4%B8%8E%E7%94%9F%E6%97%A5%E5%BA%94%E6%8F%B4%E6%B4%BB%E5%8A%A8%23) `325.0K 🔥` `NEW`
1. [暴发致命病毒邮轮中国乘客发声](https://s.weibo.com/weibo?q=%23%E6%9A%B4%E5%8F%91%E8%87%B4%E5%91%BD%E7%97%85%E6%AF%92%E9%82%AE%E8%BD%AE%E4%B8%AD%E5%9B%BD%E4%B9%98%E5%AE%A2%E5%8F%91%E5%A3%B0%23) `302.4K 🔥` `NEW`
1. [美国3艘军舰穿越霍尔木兹遭袭](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD3%E8%89%98%E5%86%9B%E8%88%B0%E7%A9%BF%E8%B6%8A%E9%9C%8D%E5%B0%94%E6%9C%A8%E5%85%B9%E9%81%AD%E8%A2%AD%23) `239.1K 🔥` `NEW`
1. [马斯克被曝主动向女下属提出捐精](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E6%96%AF%E5%85%8B%E8%A2%AB%E6%9B%9D%E4%B8%BB%E5%8A%A8%E5%90%91%E5%A5%B3%E4%B8%8B%E5%B1%9E%E6%8F%90%E5%87%BA%E6%8D%90%E7%B2%BE%23) `218.6K 🔥` `NEW`
1. [女子婚检查出高危HPV感染2次复查阴性](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%A9%9A%E6%A3%80%E6%9F%A5%E5%87%BA%E9%AB%98%E5%8D%B1HPV%E6%84%9F%E6%9F%932%E6%AC%A1%E5%A4%8D%E6%9F%A5%E9%98%B4%E6%80%A7%23) `205.6K 🔥` `NEW`
1. [金银价格大涨 (Gold and silver prices soar)](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%93%B6%E4%BB%B7%E6%A0%BC%E5%A4%A7%E6%B6%A8%23) `203.4K 🔥` `NEW`
1. [黄金关键信号](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%E5%85%B3%E9%94%AE%E4%BF%A1%E5%8F%B7%23) `193.8K 🔥` `NEW`
1. [上海成2028奥运会资格系列赛举办城市](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E6%88%902028%E5%A5%A5%E8%BF%90%E4%BC%9A%E8%B5%84%E6%A0%BC%E7%B3%BB%E5%88%97%E8%B5%9B%E4%B8%BE%E5%8A%9E%E5%9F%8E%E5%B8%82%23) `175.7K 🔥` `NEW`
1. [三星史上最大罢工逼近](https://s.weibo.com/weibo?q=%23%E4%B8%89%E6%98%9F%E5%8F%B2%E4%B8%8A%E6%9C%80%E5%A4%A7%E7%BD%A2%E5%B7%A5%E9%80%BC%E8%BF%91%23) `136.9K 🔥` `NEW`
1. [宁艺卓戴了未发售款高珠](https://s.weibo.com/weibo?q=%23%E5%AE%81%E8%89%BA%E5%8D%93%E6%88%B4%E4%BA%86%E6%9C%AA%E5%8F%91%E5%94%AE%E6%AC%BE%E9%AB%98%E7%8F%A0%23) `130.8K 🔥` `NEW`
1. [林昀儒回应率队晋级四强](https://s.weibo.com/weibo?q=%23%E6%9E%97%E6%98%80%E5%84%92%E5%9B%9E%E5%BA%94%E7%8E%87%E9%98%9F%E6%99%8B%E7%BA%A7%E5%9B%9B%E5%BC%BA%23) `130.6K 🔥` `NEW`
1. [中国台北男团3比2瑞典](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%8F%B0%E5%8C%97%E7%94%B7%E5%9B%A23%E6%AF%942%E7%91%9E%E5%85%B8%23) `123.7K 🔥` `NEW`
1. [东契奇回应恢复进展](https://s.weibo.com/weibo?q=%23%E4%B8%9C%E5%A5%91%E5%A5%87%E5%9B%9E%E5%BA%94%E6%81%A2%E5%A4%8D%E8%BF%9B%E5%B1%95%23) `123.3K 🔥` `NEW`
1. [刘浩存主角](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%B5%A9%E5%AD%98%E4%B8%BB%E8%A7%92%23) `115.7K 🔥` `NEW`
1. [榴莲遭仅退款商家驱车1600公里找买家 (Durian merchant drove 1,600 kilometers to find buyer after only refunding money)](https://s.weibo.com/weibo?q=%23%E6%A6%B4%E8%8E%B2%E9%81%AD%E4%BB%85%E9%80%80%E6%AC%BE%E5%95%86%E5%AE%B6%E9%A9%B1%E8%BD%A61600%E5%85%AC%E9%87%8C%E6%89%BE%E4%B9%B0%E5%AE%B6%23) `1.6M 🔥` `+962%`
1. [假日经济点燃消费热潮](https://s.weibo.com/weibo?q=%23%E5%81%87%E6%97%A5%E7%BB%8F%E6%B5%8E%E7%82%B9%E7%87%83%E6%B6%88%E8%B4%B9%E7%83%AD%E6%BD%AE%23) `694.8K 🔥` `+72%`
1. [刘维去谢娜演唱会被指忘本 (Liu Wei went to Xie Na's concert and was accused of forgetting his roots)](https://s.weibo.com/weibo?q=%23%E5%88%98%E7%BB%B4%E5%8E%BB%E8%B0%A2%E5%A8%9C%E6%BC%94%E5%94%B1%E4%BC%9A%E8%A2%AB%E6%8C%87%E5%BF%98%E6%9C%AC%23) `673.3K 🔥` `+88%`
1. [林昀儒零封莫雷加德卡尔伯格 (Lin Yunru blocked Moregard Carlberg)](https://s.weibo.com/weibo?q=%23%E6%9E%97%E6%98%80%E5%84%92%E9%9B%B6%E5%B0%81%E8%8E%AB%E9%9B%B7%E5%8A%A0%E5%BE%B7%E5%8D%A1%E5%B0%94%E4%BC%AF%E6%A0%BC%23) `475.2K 🔥` `+34%`
1. [胖东来1公斤黄樱桃416元 (Pangdonglai 1kg yellow cherries 416 yuan)](https://s.weibo.com/weibo?q=%23%E8%83%96%E4%B8%9C%E6%9D%A51%E5%85%AC%E6%96%A4%E9%BB%84%E6%A8%B1%E6%A1%83416%E5%85%83%23) `365.8K 🔥` `+90%`
1. [薛之谦点赞了和刘维的合照](https://s.weibo.com/weibo?q=%23%E8%96%9B%E4%B9%8B%E8%B0%A6%E7%82%B9%E8%B5%9E%E4%BA%86%E5%92%8C%E5%88%98%E7%BB%B4%E7%9A%84%E5%90%88%E7%85%A7%23) `298.2K 🔥` `+103%`
1. [当你意识到自己无法升职时 (When you realize you can't get promoted)](https://s.weibo.com/weibo?q=%23%E5%BD%93%E4%BD%A0%E6%84%8F%E8%AF%86%E5%88%B0%E8%87%AA%E5%B7%B1%E6%97%A0%E6%B3%95%E5%8D%87%E8%81%8C%E6%97%B6%23) `279.4K 🔥` `+21%`
1. [贵州蘸水](https://s.weibo.com/weibo?q=%23%E8%B4%B5%E5%B7%9E%E8%98%B8%E6%B0%B4%23) `262.4K 🔥` `+77%`
1. [李现张婧仪吻戏](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E7%8E%B0%E5%BC%A0%E5%A9%A7%E4%BB%AA%E5%90%BB%E6%88%8F%23) `227.5K 🔥` `+56%`
1. [男童凌晨4点抱被子街头哭泣独行 (A boy hugged a quilt and cried alone on the street at 4 a.m.)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E7%AB%A5%E5%87%8C%E6%99%A84%E7%82%B9%E6%8A%B1%E8%A2%AB%E5%AD%90%E8%A1%97%E5%A4%B4%E5%93%AD%E6%B3%A3%E7%8B%AC%E8%A1%8C%23) `205.7K 🔥` `+39%`
1. [安崎晕倒](https://s.weibo.com/weibo?q=%23%E5%AE%89%E5%B4%8E%E6%99%95%E5%80%92%23) `197.8K 🔥` `+112%`
1. [何润东 彭于晏是女人幻想的性感尤物](https://s.weibo.com/weibo?q=%23%E4%BD%95%E6%B6%A6%E4%B8%9C%20%E5%BD%AD%E4%BA%8E%E6%99%8F%E6%98%AF%E5%A5%B3%E4%BA%BA%E5%B9%BB%E6%83%B3%E7%9A%84%E6%80%A7%E6%84%9F%E5%B0%A4%E7%89%A9%23) `147.4K 🔥` `+70%`
1. [汉坦病毒首发病例感染轨迹曝光 (Infection trajectory of first hantavirus case exposed)](https://s.weibo.com/weibo?q=%23%E6%B1%89%E5%9D%A6%E7%97%85%E6%AF%92%E9%A6%96%E5%8F%91%E7%97%85%E4%BE%8B%E6%84%9F%E6%9F%93%E8%BD%A8%E8%BF%B9%E6%9B%9D%E5%85%89%23) `141.2K 🔥` `+23%`
1. [当奶奶吃到了年轻人的零食 (When grandma eats young people’s snacks)](https://s.weibo.com/weibo?q=%23%E5%BD%93%E5%A5%B6%E5%A5%B6%E5%90%83%E5%88%B0%E4%BA%86%E5%B9%B4%E8%BD%BB%E4%BA%BA%E7%9A%84%E9%9B%B6%E9%A3%9F%23) `130.9K 🔥` `+88%`
1. [桃花坞11个新人6个综艺首秀](https://s.weibo.com/weibo?q=%23%E6%A1%83%E8%8A%B1%E5%9D%9E11%E4%B8%AA%E6%96%B0%E4%BA%BA6%E4%B8%AA%E7%BB%BC%E8%89%BA%E9%A6%96%E7%A7%80%23) `123.3K 🔥` `+34%`
1. [皇马内讧 (Real Madrid internal strife)](https://s.weibo.com/weibo?q=%23%E7%9A%87%E9%A9%AC%E5%86%85%E8%AE%A7%23) `121.3K 🔥` `+37%`
1. [Kid回应合同](https://s.weibo.com/weibo?q=%23Kid%E5%9B%9E%E5%BA%94%E5%90%88%E5%90%8C%23) `107.3K 🔥` `+55%`
1. [孙亚龙 dys变天 (Sun Yalong's dystrophy changes to the sky)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E4%BA%9A%E9%BE%99%20dys%E5%8F%98%E5%A4%A9%23) `105.1K 🔥` `+24%`
1. [八千多的手机拍照也不行啊](https://s.weibo.com/weibo?q=%23%E5%85%AB%E5%8D%83%E5%A4%9A%E7%9A%84%E6%89%8B%E6%9C%BA%E6%8B%8D%E7%85%A7%E4%B9%9F%E4%B8%8D%E8%A1%8C%E5%95%8A%23) `575.5K 🔥`
1. [华人夫妇在美国豪宅离奇失踪一年](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%BA%BA%E5%A4%AB%E5%A6%87%E5%9C%A8%E7%BE%8E%E5%9B%BD%E8%B1%AA%E5%AE%85%E7%A6%BB%E5%A5%87%E5%A4%B1%E8%B8%AA%E4%B8%80%E5%B9%B4%23) `171.4K 🔥`
1. [运城遇害女教师丈夫22年后被判无期 (Husband of female teacher murdered in Yuncheng sentenced to life after 22 years)](https://s.weibo.com/weibo?q=%23%E8%BF%90%E5%9F%8E%E9%81%87%E5%AE%B3%E5%A5%B3%E6%95%99%E5%B8%88%E4%B8%88%E5%A4%AB22%E5%B9%B4%E5%90%8E%E8%A2%AB%E5%88%A4%E6%97%A0%E6%9C%9F%23) `146.0K 🔥`
1. [孙颖莎连得10分逆转取胜](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E8%BF%9E%E5%BE%9710%E5%88%86%E9%80%86%E8%BD%AC%E5%8F%96%E8%83%9C%23) `140.7K 🔥`
1. [日本街头疑现芬太尼丧尸 (Fentanyl-laced zombies suspected to be found on Japanese streets)](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E8%A1%97%E5%A4%B4%E7%96%91%E7%8E%B0%E8%8A%AC%E5%A4%AA%E5%B0%BC%E4%B8%A7%E5%B0%B8%23) `125.0K 🔥`
1. [印尼惊现罕见的彩虹云刷爆全网 (A rare rainbow cloud appears in Indonesia and breaks the internet)](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%B0%BC%E6%83%8A%E7%8E%B0%E7%BD%95%E8%A7%81%E7%9A%84%E5%BD%A9%E8%99%B9%E4%BA%91%E5%88%B7%E7%88%86%E5%85%A8%E7%BD%91%23) `123.2K 🔥`
1. [孙杨坚持要回电车乘车点的原因 (The reason why Sun Yang insisted on returning to the tram boarding point)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%9D%A8%E5%9D%9A%E6%8C%81%E8%A6%81%E5%9B%9E%E7%94%B5%E8%BD%A6%E4%B9%98%E8%BD%A6%E7%82%B9%E7%9A%84%E5%8E%9F%E5%9B%A0%23) `121.7K 🔥`
1. [小区531户仅25户交物业费业主发声](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%8C%BA531%E6%88%B7%E4%BB%8525%E6%88%B7%E4%BA%A4%E7%89%A9%E4%B8%9A%E8%B4%B9%E4%B8%9A%E4%B8%BB%E5%8F%91%E5%A3%B0%23) `121.6K 🔥`
1. [14岁男孩为父庆生饮酒后翻窗坠亡](https://s.weibo.com/weibo?q=%2314%E5%B2%81%E7%94%B7%E5%AD%A9%E4%B8%BA%E7%88%B6%E5%BA%86%E7%94%9F%E9%A5%AE%E9%85%92%E5%90%8E%E7%BF%BB%E7%AA%97%E5%9D%A0%E4%BA%A1%23) `119.4K 🔥`
1. [低智商犯罪](https://s.weibo.com/weibo?q=%23%E4%BD%8E%E6%99%BA%E5%95%86%E7%8A%AF%E7%BD%AA%23) `105.2K 🔥`
1. [曝浪姐三公不直播 (It is revealed that Sister Lang and her husband are not live broadcasting)](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%B5%AA%E5%A7%90%E4%B8%89%E5%85%AC%E4%B8%8D%E7%9B%B4%E6%92%AD%23) `104.7K 🔥`
1. [微信未读语音消息变灰](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E4%BF%A1%E6%9C%AA%E8%AF%BB%E8%AF%AD%E9%9F%B3%E6%B6%88%E6%81%AF%E5%8F%98%E7%81%B0%23) `359.4K 🔥` `-50%`
1. [宁艺卓到韩国第二天就和SM签约](https://s.weibo.com/weibo?q=%23%E5%AE%81%E8%89%BA%E5%8D%93%E5%88%B0%E9%9F%A9%E5%9B%BD%E7%AC%AC%E4%BA%8C%E5%A4%A9%E5%B0%B1%E5%92%8CSM%E7%AD%BE%E7%BA%A6%23) `161.5K 🔥` `-32%`
1. [王菲新歌 听笑了](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%8F%B2%E6%96%B0%E6%AD%8C%20%E5%90%AC%E7%AC%91%E4%BA%86%23) `141.3K 🔥` `-35%`

Updated at 2026-05-08 08:08:29

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
