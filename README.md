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

1. [Deepseek被指变冷淡了 (Deepseek is accused of becoming cold)](https://s.weibo.com/weibo?q=%23Deepseek%E8%A2%AB%E6%8C%87%E5%8F%98%E5%86%B7%E6%B7%A1%E4%BA%86%23) `825.6K 🔥` `NEW`
1. [家国同春 福马临门](https://s.weibo.com/weibo?q=%23%E5%AE%B6%E5%9B%BD%E5%90%8C%E6%98%A5%20%E7%A6%8F%E9%A9%AC%E4%B8%B4%E9%97%A8%23) `474.4K 🔥` `NEW`
1. [用智搜看湖北卫视春晚精彩亮点](https://s.weibo.com/weibo?q=%23%E7%94%A8%E6%99%BA%E6%90%9C%E7%9C%8B%E6%B9%96%E5%8C%97%E5%8D%AB%E8%A7%86%E6%98%A5%E6%99%9A%E7%B2%BE%E5%BD%A9%E4%BA%AE%E7%82%B9%23) `210.6K 🔥` `NEW`
1. [虞书欣直播](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E7%9B%B4%E6%92%AD%23) `140.0K 🔥` `NEW`
1. [丞磊在飞机上帮王楚然剔牙](https://s.weibo.com/weibo?q=%23%E4%B8%9E%E7%A3%8A%E5%9C%A8%E9%A3%9E%E6%9C%BA%E4%B8%8A%E5%B8%AE%E7%8E%8B%E6%A5%9A%E7%84%B6%E5%89%94%E7%89%99%23) `134.1K 🔥` `NEW`
1. [宋亚轩遇到了最懂他的刘耀文](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E4%BA%9A%E8%BD%A9%E9%81%87%E5%88%B0%E4%BA%86%E6%9C%80%E6%87%82%E4%BB%96%E7%9A%84%E5%88%98%E8%80%80%E6%96%87%23) `125.3K 🔥` `NEW`
1. [书源心脏不适](https://s.weibo.com/weibo?q=%23%E4%B9%A6%E6%BA%90%E5%BF%83%E8%84%8F%E4%B8%8D%E9%80%82%23) `108.6K 🔥` `NEW`
1. [小马打架被咬伤负气出逃跑上高架](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E9%A9%AC%E6%89%93%E6%9E%B6%E8%A2%AB%E5%92%AC%E4%BC%A4%E8%B4%9F%E6%B0%94%E5%87%BA%E9%80%83%E8%B7%91%E4%B8%8A%E9%AB%98%E6%9E%B6%23) `107.9K 🔥` `NEW`
1. [三亚春节机票翻倍酒店涨超200%](https://s.weibo.com/weibo?q=%23%E4%B8%89%E4%BA%9A%E6%98%A5%E8%8A%82%E6%9C%BA%E7%A5%A8%E7%BF%BB%E5%80%8D%E9%85%92%E5%BA%97%E6%B6%A8%E8%B6%85200%25%23) `107.3K 🔥` `NEW`
1. [何与miumiu活动生图路透](https://s.weibo.com/weibo?q=%23%E4%BD%95%E4%B8%8Emiumiu%E6%B4%BB%E5%8A%A8%E7%94%9F%E5%9B%BE%E8%B7%AF%E9%80%8F%23) `101.5K 🔥` `NEW`
1. [严浩翔贺峻霖抽到同一条红绳 (Yan Haoxiang and He Junlin drew the same red rope)](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E6%B5%A9%E7%BF%94%E8%B4%BA%E5%B3%BB%E9%9C%96%E6%8A%BD%E5%88%B0%E5%90%8C%E4%B8%80%E6%9D%A1%E7%BA%A2%E7%BB%B3%23) `99.2K 🔥` `NEW`
1. [彭小苒 古早韩剧财阀家大小姐](https://s.weibo.com/weibo?q=%23%E5%BD%AD%E5%B0%8F%E8%8B%92%20%E5%8F%A4%E6%97%A9%E9%9F%A9%E5%89%A7%E8%B4%A2%E9%98%80%E5%AE%B6%E5%A4%A7%E5%B0%8F%E5%A7%90%23) `96.4K 🔥` `NEW`
1. [王楚然丞磊怎么会熟成这样](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E7%84%B6%E4%B8%9E%E7%A3%8A%E6%80%8E%E4%B9%88%E4%BC%9A%E7%86%9F%E6%88%90%E8%BF%99%E6%A0%B7%23) `90.1K 🔥` `NEW`
1. [12306回应绿皮车到底能不能开窗](https://s.weibo.com/weibo?q=%2312306%E5%9B%9E%E5%BA%94%E7%BB%BF%E7%9A%AE%E8%BD%A6%E5%88%B0%E5%BA%95%E8%83%BD%E4%B8%8D%E8%83%BD%E5%BC%80%E7%AA%97%23) `77.7K 🔥` `NEW`
1. [微博之夜 绝美打光](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E5%8D%9A%E4%B9%8B%E5%A4%9C%20%E7%BB%9D%E7%BE%8E%E6%89%93%E5%85%89%23) `69.8K 🔥` `NEW`
1. [王楚钦糖画年味氛围](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E7%B3%96%E7%94%BB%E5%B9%B4%E5%91%B3%E6%B0%9B%E5%9B%B4%23) `68.9K 🔥` `NEW`
1. [郑思维带员工游轮团建6天5夜](https://s.weibo.com/weibo?q=%23%E9%83%91%E6%80%9D%E7%BB%B4%E5%B8%A6%E5%91%98%E5%B7%A5%E6%B8%B8%E8%BD%AE%E5%9B%A2%E5%BB%BA6%E5%A4%A95%E5%A4%9C%23) `64.8K 🔥` `NEW`
1. [寒假作业被偷温州民警5小时找回](https://s.weibo.com/weibo?q=%23%E5%AF%92%E5%81%87%E4%BD%9C%E4%B8%9A%E8%A2%AB%E5%81%B7%E6%B8%A9%E5%B7%9E%E6%B0%91%E8%AD%A65%E5%B0%8F%E6%97%B6%E6%89%BE%E5%9B%9E%23) `64.6K 🔥` `NEW`
1. [22岁主播每天焊妆两次确诊肺炎](https://s.weibo.com/weibo?q=%2322%E5%B2%81%E4%B8%BB%E6%92%AD%E6%AF%8F%E5%A4%A9%E7%84%8A%E5%A6%86%E4%B8%A4%E6%AC%A1%E7%A1%AE%E8%AF%8A%E8%82%BA%E7%82%8E%23) `1.1M 🔥` `+799%`
1. [王者荣耀超话爆了 (King of Glory is super exciting)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%80%85%E8%8D%A3%E8%80%80%E8%B6%85%E8%AF%9D%E7%88%86%E4%BA%86%23) `406.7K 🔥` `+43%`
1. [太平年大结局](https://s.weibo.com/weibo?q=%23%E5%A4%AA%E5%B9%B3%E5%B9%B4%E5%A4%A7%E7%BB%93%E5%B1%80%23) `209.2K 🔥` `+78%`
1. [我家的C位年货 (My family’s C-position New Year’s goods)](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%AE%B6%E7%9A%84C%E4%BD%8D%E5%B9%B4%E8%B4%A7%23) `648.6K 🔥`
1. [女子火车上熟睡8000元手机被偷 (Woman’s 8,000 yuan mobile phone stolen while sleeping on train)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E7%81%AB%E8%BD%A6%E4%B8%8A%E7%86%9F%E7%9D%A18000%E5%85%83%E6%89%8B%E6%9C%BA%E8%A2%AB%E5%81%B7%23) `129.2K 🔥`
1. [蒋欣 当年真的错怪你了 (Jiang Xin, I really blamed you wrongly back then)](https://s.weibo.com/weibo?q=%23%E8%92%8B%E6%AC%A3%20%E5%BD%93%E5%B9%B4%E7%9C%9F%E7%9A%84%E9%94%99%E6%80%AA%E4%BD%A0%E4%BA%86%23) `123.7K 🔥`
1. [王者荣耀马年全明星表演赛](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%80%85%E8%8D%A3%E8%80%80%E9%A9%AC%E5%B9%B4%E5%85%A8%E6%98%8E%E6%98%9F%E8%A1%A8%E6%BC%94%E8%B5%9B%23) `117.4K 🔥`
1. [36岁何穗状态](https://s.weibo.com/weibo?q=%2336%E5%B2%81%E4%BD%95%E7%A9%97%E7%8A%B6%E6%80%81%23) `112.7K 🔥`
1. [母亲花6万为智力残障儿子娶外籍妻子](https://s.weibo.com/weibo?q=%23%E6%AF%8D%E4%BA%B2%E8%8A%B16%E4%B8%87%E4%B8%BA%E6%99%BA%E5%8A%9B%E6%AE%8B%E9%9A%9C%E5%84%BF%E5%AD%90%E5%A8%B6%E5%A4%96%E7%B1%8D%E5%A6%BB%E5%AD%90%23) `109.5K 🔥`
1. [吃烤全羊发现大量粪便店家赔偿1500 (After eating a roasted whole lamb and finding a lot of feces, the store compensated me 1,500)](https://s.weibo.com/weibo?q=%23%E5%90%83%E7%83%A4%E5%85%A8%E7%BE%8A%E5%8F%91%E7%8E%B0%E5%A4%A7%E9%87%8F%E7%B2%AA%E4%BE%BF%E5%BA%97%E5%AE%B6%E8%B5%94%E5%81%BF1500%23) `108.2K 🔥`
1. [男子就医喊饿竟是全身血液已近流干 (A man went to the doctor and complained that he was hungry, but it turned out that the blood in his body was almost dry)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%B0%B1%E5%8C%BB%E5%96%8A%E9%A5%BF%E7%AB%9F%E6%98%AF%E5%85%A8%E8%BA%AB%E8%A1%80%E6%B6%B2%E5%B7%B2%E8%BF%91%E6%B5%81%E5%B9%B2%23) `108.1K 🔥`
1. [姐姐被藏尸位置就在弟弟店铺正上方 (The location where my sister’s body was buried is right above my brother’s shop.)](https://s.weibo.com/weibo?q=%23%E5%A7%90%E5%A7%90%E8%A2%AB%E8%97%8F%E5%B0%B8%E4%BD%8D%E7%BD%AE%E5%B0%B1%E5%9C%A8%E5%BC%9F%E5%BC%9F%E5%BA%97%E9%93%BA%E6%AD%A3%E4%B8%8A%E6%96%B9%23) `108.1K 🔥`
1. [杨幂白色高筒袜](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E7%99%BD%E8%89%B2%E9%AB%98%E7%AD%92%E8%A2%9C%23) `108.0K 🔥`
1. [蔡徐坤回复无畏](https://s.weibo.com/weibo?q=%23%E8%94%A1%E5%BE%90%E5%9D%A4%E5%9B%9E%E5%A4%8D%E6%97%A0%E7%95%8F%23) `107.9K 🔥`
1. [年少有为](https://s.weibo.com/weibo?q=%23%E5%B9%B4%E5%B0%91%E6%9C%89%E4%B8%BA%23) `107.0K 🔥`
1. [王濛精准预判有新的纪录产生](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BF%9B%E7%B2%BE%E5%87%86%E9%A2%84%E5%88%A4%E6%9C%89%E6%96%B0%E7%9A%84%E7%BA%AA%E5%BD%95%E4%BA%A7%E7%94%9F%23) `106.7K 🔥`
1. [张元英BANGBANG直拍 (Zhang Yuanying BANGBANG direct shot)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%85%83%E8%8B%B1BANGBANG%E7%9B%B4%E6%8B%8D%23) `102.0K 🔥`
1. [六国联名反对欧盟加大对华限制](https://s.weibo.com/weibo?q=%23%E5%85%AD%E5%9B%BD%E8%81%94%E5%90%8D%E5%8F%8D%E5%AF%B9%E6%AC%A7%E7%9B%9F%E5%8A%A0%E5%A4%A7%E5%AF%B9%E5%8D%8E%E9%99%90%E5%88%B6%23) `100.4K 🔥`
1. [舌头翘一翘身体好坏都知道](https://s.weibo.com/weibo?q=%23%E8%88%8C%E5%A4%B4%E7%BF%98%E4%B8%80%E7%BF%98%E8%BA%AB%E4%BD%93%E5%A5%BD%E5%9D%8F%E9%83%BD%E7%9F%A5%E9%81%93%23) `91.2K 🔥`
1. [曝陈哲远每年让员工带薪出国旅游 (It is revealed that Chen Zheyuan allows employees to travel abroad with pay every year)](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E9%99%88%E5%93%B2%E8%BF%9C%E6%AF%8F%E5%B9%B4%E8%AE%A9%E5%91%98%E5%B7%A5%E5%B8%A6%E8%96%AA%E5%87%BA%E5%9B%BD%E6%97%85%E6%B8%B8%23) `85.0K 🔥`
1. [和小狗击掌小狗会回咬手礼](https://s.weibo.com/weibo?q=%23%E5%92%8C%E5%B0%8F%E7%8B%97%E5%87%BB%E6%8E%8C%E5%B0%8F%E7%8B%97%E4%BC%9A%E5%9B%9E%E5%92%AC%E6%89%8B%E7%A4%BC%23) `69.9K 🔥`
1. [坏果太多胖东来下架全部智利车厘子 (There are too many bad fruits. Fat Donglai has removed all Chilean cherries from the shelves.)](https://s.weibo.com/weibo?q=%23%E5%9D%8F%E6%9E%9C%E5%A4%AA%E5%A4%9A%E8%83%96%E4%B8%9C%E6%9D%A5%E4%B8%8B%E6%9E%B6%E5%85%A8%E9%83%A8%E6%99%BA%E5%88%A9%E8%BD%A6%E5%8E%98%E5%AD%90%23) `263.0K 🔥` `-76%`
1. [爸爸被劝酒女儿站身后霸气挡酒](https://s.weibo.com/weibo?q=%23%E7%88%B8%E7%88%B8%E8%A2%AB%E5%8A%9D%E9%85%92%E5%A5%B3%E5%84%BF%E7%AB%99%E8%BA%AB%E5%90%8E%E9%9C%B8%E6%B0%94%E6%8C%A1%E9%85%92%23) `256.1K 🔥` `-30%`
1. [成何体统](https://s.weibo.com/weibo?q=%23%E6%88%90%E4%BD%95%E4%BD%93%E7%BB%9F%23) `174.5K 🔥` `-78%`
1. [第一次看到一箱草莓毫无食欲](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%AC%A1%E7%9C%8B%E5%88%B0%E4%B8%80%E7%AE%B1%E8%8D%89%E8%8E%93%E6%AF%AB%E6%97%A0%E9%A3%9F%E6%AC%B2%23) `166.6K 🔥` `-39%`
1. [今年为啥没有年三十](https://s.weibo.com/weibo?q=%23%E4%BB%8A%E5%B9%B4%E4%B8%BA%E5%95%A5%E6%B2%A1%E6%9C%89%E5%B9%B4%E4%B8%89%E5%8D%81%23) `140.2K 🔥` `-34%`
1. [车厘子卖家赌涨价压货](https://s.weibo.com/weibo?q=%23%E8%BD%A6%E5%8E%98%E5%AD%90%E5%8D%96%E5%AE%B6%E8%B5%8C%E6%B6%A8%E4%BB%B7%E5%8E%8B%E8%B4%A7%23) `108.2K 🔥` `-36%`
1. [第一批回村的人已经出片了](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%89%B9%E5%9B%9E%E6%9D%91%E7%9A%84%E4%BA%BA%E5%B7%B2%E7%BB%8F%E5%87%BA%E7%89%87%E4%BA%86%23) `93.7K 🔥` `-21%`
1. [宋亚轩 没有任何击杀但是MVP](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E4%BA%9A%E8%BD%A9%20%E6%B2%A1%E6%9C%89%E4%BB%BB%E4%BD%95%E5%87%BB%E6%9D%80%E4%BD%86%E6%98%AFMVP%23) `92.6K 🔥` `-24%`
1. [肥猫郑则仕减重70斤感谢周润发](https://s.weibo.com/weibo?q=%23%E8%82%A5%E7%8C%AB%E9%83%91%E5%88%99%E4%BB%95%E5%87%8F%E9%87%8D70%E6%96%A4%E6%84%9F%E8%B0%A2%E5%91%A8%E6%B6%A6%E5%8F%91%23) `77.7K 🔥` `-31%`
1. [男子性侵前妻闺蜜被判10年8个月 (Man sentenced to 10 years and 8 months for sexually assaulting ex-wife's best friend)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E6%80%A7%E4%BE%B5%E5%89%8D%E5%A6%BB%E9%97%BA%E8%9C%9C%E8%A2%AB%E5%88%A410%E5%B9%B48%E4%B8%AA%E6%9C%88%23) `77.7K 🔥` `-32%`
1. [生命树今晚自爆两狼](https://s.weibo.com/weibo?q=%23%E7%94%9F%E5%91%BD%E6%A0%91%E4%BB%8A%E6%99%9A%E8%87%AA%E7%88%86%E4%B8%A4%E7%8B%BC%23) `77.7K 🔥` `-36%`
1. [杨幂校花学姐](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E6%A0%A1%E8%8A%B1%E5%AD%A6%E5%A7%90%23) `76.9K 🔥` `-33%`
1. [生命树集体沉默的60秒](https://s.weibo.com/weibo?q=%23%E7%94%9F%E5%91%BD%E6%A0%91%E9%9B%86%E4%BD%93%E6%B2%89%E9%BB%98%E7%9A%8460%E7%A7%92%23) `65.7K 🔥` `-52%`

Updated at 2026-02-12 23:32:28

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
