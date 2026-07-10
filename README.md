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

1. [台风巴威位置 (Typhoon Bavi location)](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E5%B7%B4%E5%A8%81%E4%BD%8D%E7%BD%AE%23) `3.0M 🔥` `NEW`
1. [乒乓球全锦赛双打名单](https://s.weibo.com/weibo?q=%23%E4%B9%92%E4%B9%93%E7%90%83%E5%85%A8%E9%94%A6%E8%B5%9B%E5%8F%8C%E6%89%93%E5%90%8D%E5%8D%95%23) `1.1M 🔥` `NEW`
1. [全国夏粮获丰收](https://s.weibo.com/weibo?q=%23%E5%85%A8%E5%9B%BD%E5%A4%8F%E7%B2%AE%E8%8E%B7%E4%B8%B0%E6%94%B6%23) `940.9K 🔥` `NEW`
1. [这次旅行VLOG一下](https://s.weibo.com/weibo?q=%23%E8%BF%99%E6%AC%A1%E6%97%85%E8%A1%8CVLOG%E4%B8%80%E4%B8%8B%23) `927.2K 🔥` `NEW`
1. [当我意识到西瓜也是瓜](https://s.weibo.com/weibo?q=%23%E5%BD%93%E6%88%91%E6%84%8F%E8%AF%86%E5%88%B0%E8%A5%BF%E7%93%9C%E4%B9%9F%E6%98%AF%E7%93%9C%23) `921.1K 🔥` `NEW`
1. [26版西游记确实比86版带劲](https://s.weibo.com/weibo?q=%2326%E7%89%88%E8%A5%BF%E6%B8%B8%E8%AE%B0%E7%A1%AE%E5%AE%9E%E6%AF%9486%E7%89%88%E5%B8%A6%E5%8A%B2%23) `891.3K 🔥` `NEW`
1. [电影功夫女足首支长预告](https://s.weibo.com/weibo?q=%23%E7%94%B5%E5%BD%B1%E5%8A%9F%E5%A4%AB%E5%A5%B3%E8%B6%B3%E9%A6%96%E6%94%AF%E9%95%BF%E9%A2%84%E5%91%8A%23) `802.6K 🔥` `NEW`
1. [美团司南口腔榜发布](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%A2%E5%8F%B8%E5%8D%97%E5%8F%A3%E8%85%94%E6%A6%9C%E5%8F%91%E5%B8%83%23) `801.6K 🔥` `NEW`
1. [税务部门回应发票中奖者全部姓蒲](https://s.weibo.com/weibo?q=%23%E7%A8%8E%E5%8A%A1%E9%83%A8%E9%97%A8%E5%9B%9E%E5%BA%94%E5%8F%91%E7%A5%A8%E4%B8%AD%E5%A5%96%E8%80%85%E5%85%A8%E9%83%A8%E5%A7%93%E8%92%B2%23) `776.7K 🔥` `NEW`
1. [张小斐迪丽热巴对手戏](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%B0%8F%E6%96%90%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E5%AF%B9%E6%89%8B%E6%88%8F%23) `620.3K 🔥` `NEW`
1. [李钟硕多次向IU求婚 (Lee Jong Suk proposed to IU many times)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E9%92%9F%E7%A1%95%E5%A4%9A%E6%AC%A1%E5%90%91IU%E6%B1%82%E5%A9%9A%23) `611.4K 🔥` `NEW`
1. [黄晓明因为小海绵全家搬到上海](https://s.weibo.com/weibo?q=%23%E9%BB%84%E6%99%93%E6%98%8E%E5%9B%A0%E4%B8%BA%E5%B0%8F%E6%B5%B7%E7%BB%B5%E5%85%A8%E5%AE%B6%E6%90%AC%E5%88%B0%E4%B8%8A%E6%B5%B7%23) `609.3K 🔥` `NEW`
1. [霸占业主8万车位女子当面道歉](https://s.weibo.com/weibo?q=%23%E9%9C%B8%E5%8D%A0%E4%B8%9A%E4%B8%BB8%E4%B8%87%E8%BD%A6%E4%BD%8D%E5%A5%B3%E5%AD%90%E5%BD%93%E9%9D%A2%E9%81%93%E6%AD%89%23) `606.0K 🔥` `NEW`
1. [为什么一眼看出你很老实](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E4%B8%80%E7%9C%BC%E7%9C%8B%E5%87%BA%E4%BD%A0%E5%BE%88%E8%80%81%E5%AE%9E%23) `602.1K 🔥` `NEW`
1. [李冰冰怎么做到左脸哭右脸笑的](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%86%B0%E5%86%B0%E6%80%8E%E4%B9%88%E5%81%9A%E5%88%B0%E5%B7%A6%E8%84%B8%E5%93%AD%E5%8F%B3%E8%84%B8%E7%AC%91%E7%9A%84%23) `599.5K 🔥` `NEW`
1. [峰哥 反指](https://s.weibo.com/weibo?q=%23%E5%B3%B0%E5%93%A5%20%E5%8F%8D%E6%8C%87%23) `594.0K 🔥` `NEW`
1. [王俊凯对小鱼干是生理性喜欢吧](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E5%AF%B9%E5%B0%8F%E9%B1%BC%E5%B9%B2%E6%98%AF%E7%94%9F%E7%90%86%E6%80%A7%E5%96%9C%E6%AC%A2%E5%90%A7%23) `591.0K 🔥` `NEW`
1. [张凌赫不着急结婚生孩子](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E4%B8%8D%E7%9D%80%E6%80%A5%E7%BB%93%E5%A9%9A%E7%94%9F%E5%AD%A9%E5%AD%90%23) `589.7K 🔥` `NEW`
1. [王天辰郭晓婷三搭了](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%A4%A9%E8%BE%B0%E9%83%AD%E6%99%93%E5%A9%B7%E4%B8%89%E6%90%AD%E4%BA%86%23) `586.4K 🔥` `NEW`
1. [贵港动物园狮子被洪水吓呆](https://s.weibo.com/weibo?q=%23%E8%B4%B5%E6%B8%AF%E5%8A%A8%E7%89%A9%E5%9B%AD%E7%8B%AE%E5%AD%90%E8%A2%AB%E6%B4%AA%E6%B0%B4%E5%90%93%E5%91%86%23) `582.3K 🔥` `NEW`
1. [男子进山采蘑菇疑遭黑熊袭击遇难 (Man went to the mountains to collect mushrooms and was attacked by a suspected black bear.)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E8%BF%9B%E5%B1%B1%E9%87%87%E8%98%91%E8%8F%87%E7%96%91%E9%81%AD%E9%BB%91%E7%86%8A%E8%A2%AD%E5%87%BB%E9%81%87%E9%9A%BE%23) `577.5K 🔥` `NEW`
1. [桃米洗菜](https://s.weibo.com/weibo?q=%23%E6%A1%83%E7%B1%B3%E6%B4%97%E8%8F%9C%23) `574.7K 🔥` `NEW`
1. [黄子弘凡回应只提父亲不提母亲](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%AD%90%E5%BC%98%E5%87%A1%E5%9B%9E%E5%BA%94%E5%8F%AA%E6%8F%90%E7%88%B6%E4%BA%B2%E4%B8%8D%E6%8F%90%E6%AF%8D%E4%BA%B2%23) `573.0K 🔥` `NEW`
1. [轩染公开喊话钟意](https://s.weibo.com/weibo?q=%23%E8%BD%A9%E6%9F%93%E5%85%AC%E5%BC%80%E5%96%8A%E8%AF%9D%E9%92%9F%E6%84%8F%23) `571.4K 🔥` `NEW`
1. [用拼豆修补了小区电梯按键](https://s.weibo.com/weibo?q=%23%E7%94%A8%E6%8B%BC%E8%B1%86%E4%BF%AE%E8%A1%A5%E4%BA%86%E5%B0%8F%E5%8C%BA%E7%94%B5%E6%A2%AF%E6%8C%89%E9%94%AE%23) `534.0K 🔥` `NEW`
1. [TOP 无畏契约](https://s.weibo.com/weibo?q=%23TOP%20%E6%97%A0%E7%95%8F%E5%A5%91%E7%BA%A6%23) `526.2K 🔥` `NEW`
1. [科技股大幅回调原因](https://s.weibo.com/weibo?q=%23%E7%A7%91%E6%8A%80%E8%82%A1%E5%A4%A7%E5%B9%85%E5%9B%9E%E8%B0%83%E5%8E%9F%E5%9B%A0%23) `525.7K 🔥` `NEW`
1. [莲花酱油能在拼多多卖爆的秘密](https://s.weibo.com/weibo?q=%23%E8%8E%B2%E8%8A%B1%E9%85%B1%E6%B2%B9%E8%83%BD%E5%9C%A8%E6%8B%BC%E5%A4%9A%E5%A4%9A%E5%8D%96%E7%88%86%E7%9A%84%E7%A7%98%E5%AF%86%23) `525.6K 🔥` `NEW`
1. [附近鞋厂老板用铁盒包裹配电箱](https://s.weibo.com/weibo?q=%23%E9%99%84%E8%BF%91%E9%9E%8B%E5%8E%82%E8%80%81%E6%9D%BF%E7%94%A8%E9%93%81%E7%9B%92%E5%8C%85%E8%A3%B9%E9%85%8D%E7%94%B5%E7%AE%B1%23) `525.6K 🔥` `NEW`
1. [副处长霸车位拒道歉尽显傲慢](https://s.weibo.com/weibo?q=%23%E5%89%AF%E5%A4%84%E9%95%BF%E9%9C%B8%E8%BD%A6%E4%BD%8D%E6%8B%92%E9%81%93%E6%AD%89%E5%B0%BD%E6%98%BE%E5%82%B2%E6%85%A2%23) `525.6K 🔥` `NEW`
1. [张家界天梯被外国网友称为潘多拉星球 (Zhangjiajie Sky Ladder is called Pandora Planet by foreign netizens)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%AE%B6%E7%95%8C%E5%A4%A9%E6%A2%AF%E8%A2%AB%E5%A4%96%E5%9B%BD%E7%BD%91%E5%8F%8B%E7%A7%B0%E4%B8%BA%E6%BD%98%E5%A4%9A%E6%8B%89%E6%98%9F%E7%90%83%23) `473.4K 🔥` `NEW`
1. [商业航天](https://s.weibo.com/weibo?q=%23%E5%95%86%E4%B8%9A%E8%88%AA%E5%A4%A9%23) `457.5K 🔥` `NEW`
1. [台风巴威进入24小时警戒线](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E5%B7%B4%E5%A8%81%E8%BF%9B%E5%85%A524%E5%B0%8F%E6%97%B6%E8%AD%A6%E6%88%92%E7%BA%BF%23) `408.0K 🔥` `NEW`
1. [姆巴佩20球](https://s.weibo.com/weibo?q=%23%E5%A7%86%E5%B7%B4%E4%BD%A920%E7%90%83%23) `316.9K 🔥` `NEW`
1. [上班族都是这样规划的](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E7%8F%AD%E6%97%8F%E9%83%BD%E6%98%AF%E8%BF%99%E6%A0%B7%E8%A7%84%E5%88%92%E7%9A%84%23) `313.1K 🔥` `NEW`
1. [时代少年团目前各个领域发展最好的](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E7%9B%AE%E5%89%8D%E5%90%84%E4%B8%AA%E9%A2%86%E5%9F%9F%E5%8F%91%E5%B1%95%E6%9C%80%E5%A5%BD%E7%9A%84%23) `312.2K 🔥` `NEW`
1. [福建晋江鞋厂着火部位为一层冲床车间](https://s.weibo.com/weibo?q=%23%E7%A6%8F%E5%BB%BA%E6%99%8B%E6%B1%9F%E9%9E%8B%E5%8E%82%E7%9D%80%E7%81%AB%E9%83%A8%E4%BD%8D%E4%B8%BA%E4%B8%80%E5%B1%82%E5%86%B2%E5%BA%8A%E8%BD%A6%E9%97%B4%23) `287.0K 🔥` `NEW`
1. [邹市明不知道儿子读几年级](https://s.weibo.com/weibo?q=%23%E9%82%B9%E5%B8%82%E6%98%8E%E4%B8%8D%E7%9F%A5%E9%81%93%E5%84%BF%E5%AD%90%E8%AF%BB%E5%87%A0%E5%B9%B4%E7%BA%A7%23) `269.5K 🔥` `NEW`
1. [王俊凯不允许别人蹭周杰伦的流量](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E4%B8%8D%E5%85%81%E8%AE%B8%E5%88%AB%E4%BA%BA%E8%B9%AD%E5%91%A8%E6%9D%B0%E4%BC%A6%E7%9A%84%E6%B5%81%E9%87%8F%23) `268.4K 🔥` `NEW`
1. [微信红包转账有新变化](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E4%BF%A1%E7%BA%A2%E5%8C%85%E8%BD%AC%E8%B4%A6%E6%9C%89%E6%96%B0%E5%8F%98%E5%8C%96%23) `266.8K 🔥` `NEW`
1. [安陵容终于熬成太后了 (An Lingrong finally became the Queen Mother)](https://s.weibo.com/weibo?q=%23%E5%AE%89%E9%99%B5%E5%AE%B9%E7%BB%88%E4%BA%8E%E7%86%AC%E6%88%90%E5%A4%AA%E5%90%8E%E4%BA%86%23) `266.3K 🔥` `NEW`
1. [小米澎程N90外观公布](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E6%BE%8E%E7%A8%8BN90%E5%A4%96%E8%A7%82%E5%85%AC%E5%B8%83%23) `265.0K 🔥` `NEW`
1. [美议员拍反华广告翻车](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E8%AE%AE%E5%91%98%E6%8B%8D%E5%8F%8D%E5%8D%8E%E5%B9%BF%E5%91%8A%E7%BF%BB%E8%BD%A6%23) `263.8K 🔥` `NEW`
1. [妈妈教儿子暗码标批发价全网都会了](https://s.weibo.com/weibo?q=%23%E5%A6%88%E5%A6%88%E6%95%99%E5%84%BF%E5%AD%90%E6%9A%97%E7%A0%81%E6%A0%87%E6%89%B9%E5%8F%91%E4%BB%B7%E5%85%A8%E7%BD%91%E9%83%BD%E4%BC%9A%E4%BA%86%23) `262.2K 🔥` `NEW`
1. [Jennie跳舞把眼镜甩掉了](https://s.weibo.com/weibo?q=%23Jennie%E8%B7%B3%E8%88%9E%E6%8A%8A%E7%9C%BC%E9%95%9C%E7%94%A9%E6%8E%89%E4%BA%86%23) `261.1K 🔥` `NEW`
1. [长征十号乙火箭回收成功](https://s.weibo.com/weibo?q=%23%E9%95%BF%E5%BE%81%E5%8D%81%E5%8F%B7%E4%B9%99%E7%81%AB%E7%AE%AD%E5%9B%9E%E6%94%B6%E6%88%90%E5%8A%9F%23) `617.5K 🔥` `-46%`
1. [大疆救人](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E7%96%86%E6%95%91%E4%BA%BA%23) `616.5K 🔥` `-63%`
1. [李钟硕IU宣布分手 (Lee Jong Suk, IU announce breakup)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E9%92%9F%E7%A1%95IU%E5%AE%A3%E5%B8%83%E5%88%86%E6%89%8B%23) `597.8K 🔥` `-95%`
1. [原则上无人机不许吊人但人民大于原则](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E5%88%99%E4%B8%8A%E6%97%A0%E4%BA%BA%E6%9C%BA%E4%B8%8D%E8%AE%B8%E5%90%8A%E4%BA%BA%E4%BD%86%E4%BA%BA%E6%B0%91%E5%A4%A7%E4%BA%8E%E5%8E%9F%E5%88%99%23) `484.7K 🔥` `-95%`
1. [上班隐形成本真的很高](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E7%8F%AD%E9%9A%90%E5%BD%A2%E6%88%90%E6%9C%AC%E7%9C%9F%E7%9A%84%E5%BE%88%E9%AB%98%23) `474.0K 🔥` `-36%`
1. [张婧仪唯一关注是陈都灵](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%A9%A7%E4%BB%AA%E5%94%AF%E4%B8%80%E5%85%B3%E6%B3%A8%E6%98%AF%E9%99%88%E9%83%BD%E7%81%B5%23) `365.9K 🔥` `-51%`
1. [很多人低估了五万存款的威力 (Many people underestimate the power of a 50,000 deposit)](https://s.weibo.com/weibo?q=%23%E5%BE%88%E5%A4%9A%E4%BA%BA%E4%BD%8E%E4%BC%B0%E4%BA%86%E4%BA%94%E4%B8%87%E5%AD%98%E6%AC%BE%E7%9A%84%E5%A8%81%E5%8A%9B%23) `267.7K 🔥` `-67%`

Updated at 2026-07-10 16:34:31

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
