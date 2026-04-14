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

1. [Lululemon被调查 (Lululemon under investigation)](https://s.weibo.com/weibo?q=%23Lululemon%E8%A2%AB%E8%B0%83%E6%9F%A5%23) `1.2M 🔥` `NEW`
1. [天安门挂起中西越三国国旗](https://s.weibo.com/weibo?q=%23%E5%A4%A9%E5%AE%89%E9%97%A8%E6%8C%82%E8%B5%B7%E4%B8%AD%E8%A5%BF%E8%B6%8A%E4%B8%89%E5%9B%BD%E5%9B%BD%E6%97%97%23) `829.1K 🔥` `NEW`
1. [中国式现代化万千气象看江西](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%BC%8F%E7%8E%B0%E4%BB%A3%E5%8C%96%E4%B8%87%E5%8D%83%E6%B0%94%E8%B1%A1%E7%9C%8B%E6%B1%9F%E8%A5%BF%23) `688.1K 🔥` `NEW`
1. [突然意识到长辈从没独居过](https://s.weibo.com/weibo?q=%23%E7%AA%81%E7%84%B6%E6%84%8F%E8%AF%86%E5%88%B0%E9%95%BF%E8%BE%88%E4%BB%8E%E6%B2%A1%E7%8B%AC%E5%B1%85%E8%BF%87%23) `304.4K 🔥` `NEW`
1. [盛世天下女帝篇](https://s.weibo.com/weibo?q=%23%E7%9B%9B%E4%B8%96%E5%A4%A9%E4%B8%8B%E5%A5%B3%E5%B8%9D%E7%AF%87%23) `294.6K 🔥` `NEW`
1. [陈芋汐将搭档崔家溪双人10米台](https://s.weibo.com/weibo?q=%23%E9%99%88%E8%8A%8B%E6%B1%90%E5%B0%86%E6%90%AD%E6%A1%A3%E5%B4%94%E5%AE%B6%E6%BA%AA%E5%8F%8C%E4%BA%BA10%E7%B1%B3%E5%8F%B0%23) `224.4K 🔥` `NEW`
1. [怦然心动20岁](https://s.weibo.com/weibo?q=%23%E6%80%A6%E7%84%B6%E5%BF%83%E5%8A%A820%E5%B2%81%23) `220.9K 🔥` `NEW`
1. [全红婵缺席跳水世界杯总决赛](https://s.weibo.com/weibo?q=%23%E5%85%A8%E7%BA%A2%E5%A9%B5%E7%BC%BA%E5%B8%AD%E8%B7%B3%E6%B0%B4%E4%B8%96%E7%95%8C%E6%9D%AF%E6%80%BB%E5%86%B3%E8%B5%9B%23) `213.1K 🔥` `NEW`
1. [郭敬明的剧连演员本人都看不懂](https://s.weibo.com/weibo?q=%23%E9%83%AD%E6%95%AC%E6%98%8E%E7%9A%84%E5%89%A7%E8%BF%9E%E6%BC%94%E5%91%98%E6%9C%AC%E4%BA%BA%E9%83%BD%E7%9C%8B%E4%B8%8D%E6%87%82%23) `206.4K 🔥` `NEW`
1. [孙怡你知道的我从金依蓓时候就跟你了](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%80%A1%E4%BD%A0%E7%9F%A5%E9%81%93%E7%9A%84%E6%88%91%E4%BB%8E%E9%87%91%E4%BE%9D%E8%93%93%E6%97%B6%E5%80%99%E5%B0%B1%E8%B7%9F%E4%BD%A0%E4%BA%86%23) `196.3K 🔥` `NEW`
1. [特朗普在白宫摆拍点外卖 (Trump poses for photos at the White House ordering takeout)](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E5%9C%A8%E7%99%BD%E5%AE%AB%E6%91%86%E6%8B%8D%E7%82%B9%E5%A4%96%E5%8D%96%23) `190.1K 🔥` `NEW`
1. [被央视曝光的涉黄AI软件致歉](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E5%A4%AE%E8%A7%86%E6%9B%9D%E5%85%89%E7%9A%84%E6%B6%89%E9%BB%84AI%E8%BD%AF%E4%BB%B6%E8%87%B4%E6%AD%89%23) `175.3K 🔥` `NEW`
1. [内塔尼亚胡指责二战后欧洲道德沦丧](https://s.weibo.com/weibo?q=%23%E5%86%85%E5%A1%94%E5%B0%BC%E4%BA%9A%E8%83%A1%E6%8C%87%E8%B4%A3%E4%BA%8C%E6%88%98%E5%90%8E%E6%AC%A7%E6%B4%B2%E9%81%93%E5%BE%B7%E6%B2%A6%E4%B8%A7%23) `175.2K 🔥` `NEW`
1. [36岁男子分饰两角诱骗多名少女援交](https://s.weibo.com/weibo?q=%2336%E5%B2%81%E7%94%B7%E5%AD%90%E5%88%86%E9%A5%B0%E4%B8%A4%E8%A7%92%E8%AF%B1%E9%AA%97%E5%A4%9A%E5%90%8D%E5%B0%91%E5%A5%B3%E6%8F%B4%E4%BA%A4%23) `175.1K 🔥` `NEW`
1. [俄外长抵达中国现场画面](https://s.weibo.com/weibo?q=%23%E4%BF%84%E5%A4%96%E9%95%BF%E6%8A%B5%E8%BE%BE%E4%B8%AD%E5%9B%BD%E7%8E%B0%E5%9C%BA%E7%94%BB%E9%9D%A2%23) `173.8K 🔥` `NEW`
1. [田嘉瑞月鳞绮纪里面造型神似刘亦菲](https://s.weibo.com/weibo?q=%23%E7%94%B0%E5%98%89%E7%91%9E%E6%9C%88%E9%B3%9E%E7%BB%AE%E7%BA%AA%E9%87%8C%E9%9D%A2%E9%80%A0%E5%9E%8B%E7%A5%9E%E4%BC%BC%E5%88%98%E4%BA%A6%E8%8F%B2%23) `173.5K 🔥` `NEW`
1. [张凌赫 杀死另世我](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%20%E6%9D%80%E6%AD%BB%E5%8F%A6%E4%B8%96%E6%88%91%23) `157.4K 🔥` `NEW`
1. [向太晒第一次为郭碧婷拍的照片](https://s.weibo.com/weibo?q=%23%E5%90%91%E5%A4%AA%E6%99%92%E7%AC%AC%E4%B8%80%E6%AC%A1%E4%B8%BA%E9%83%AD%E7%A2%A7%E5%A9%B7%E6%8B%8D%E7%9A%84%E7%85%A7%E7%89%87%23) `122.1K 🔥` `NEW`
1. [张本智和觉得中日男队五五开](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%AC%E6%99%BA%E5%92%8C%E8%A7%89%E5%BE%97%E4%B8%AD%E6%97%A5%E7%94%B7%E9%98%9F%E4%BA%94%E4%BA%94%E5%BC%80%23) `114.8K 🔥` `NEW`
1. [唐艺昕李小冉王濛自拍](https://s.weibo.com/weibo?q=%23%E5%94%90%E8%89%BA%E6%98%95%E6%9D%8E%E5%B0%8F%E5%86%89%E7%8E%8B%E6%BF%9B%E8%87%AA%E6%8B%8D%23) `101.9K 🔥` `NEW`
1. [A股尾盘急涨 (A shares surged in late trading)](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E5%B0%BE%E7%9B%98%E6%80%A5%E6%B6%A8%23) `101.2K 🔥` `NEW`
1. [印度女生拒嫁艾滋男被注射毒血报复](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%BA%A6%E5%A5%B3%E7%94%9F%E6%8B%92%E5%AB%81%E8%89%BE%E6%BB%8B%E7%94%B7%E8%A2%AB%E6%B3%A8%E5%B0%84%E6%AF%92%E8%A1%80%E6%8A%A5%E5%A4%8D%23) `101.0K 🔥` `NEW`
1. [曝有5支NBA球队希望邀请徐昕试训](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%9C%895%E6%94%AFNBA%E7%90%83%E9%98%9F%E5%B8%8C%E6%9C%9B%E9%82%80%E8%AF%B7%E5%BE%90%E6%98%95%E8%AF%95%E8%AE%AD%23) `97.5K 🔥` `NEW`
1. [12306积分转让成了一门生意](https://s.weibo.com/weibo?q=%2312306%E7%A7%AF%E5%88%86%E8%BD%AC%E8%AE%A9%E6%88%90%E4%BA%86%E4%B8%80%E9%97%A8%E7%94%9F%E6%84%8F%23) `96.8K 🔥` `NEW`
1. [当地回应女婴遭秤砣砸伤](https://s.weibo.com/weibo?q=%23%E5%BD%93%E5%9C%B0%E5%9B%9E%E5%BA%94%E5%A5%B3%E5%A9%B4%E9%81%AD%E7%A7%A4%E7%A0%A3%E7%A0%B8%E4%BC%A4%23) `88.0K 🔥` `NEW`
1. [电商复刻莫氏鸡煲同款两天狂卖千单](https://s.weibo.com/weibo?q=%23%E7%94%B5%E5%95%86%E5%A4%8D%E5%88%BB%E8%8E%AB%E6%B0%8F%E9%B8%A1%E7%85%B2%E5%90%8C%E6%AC%BE%E4%B8%A4%E5%A4%A9%E7%8B%82%E5%8D%96%E5%8D%83%E5%8D%95%23) `87.4K 🔥` `NEW`
1. [深圳开发商喷辣椒水驱散买房人群](https://s.weibo.com/weibo?q=%23%E6%B7%B1%E5%9C%B3%E5%BC%80%E5%8F%91%E5%95%86%E5%96%B7%E8%BE%A3%E6%A4%92%E6%B0%B4%E9%A9%B1%E6%95%A3%E4%B9%B0%E6%88%BF%E4%BA%BA%E7%BE%A4%23) `86.9K 🔥` `NEW`
1. [量子计算机9分钟破解比特币](https://s.weibo.com/weibo?q=%23%E9%87%8F%E5%AD%90%E8%AE%A1%E7%AE%97%E6%9C%BA9%E5%88%86%E9%92%9F%E7%A0%B4%E8%A7%A3%E6%AF%94%E7%89%B9%E5%B8%81%23) `85.9K 🔥` `NEW`
1. [吴谨言魏哲鸣新剧凤不栖开机](https://s.weibo.com/weibo?q=%23%E5%90%B4%E8%B0%A8%E8%A8%80%E9%AD%8F%E5%93%B2%E9%B8%A3%E6%96%B0%E5%89%A7%E5%87%A4%E4%B8%8D%E6%A0%96%E5%BC%80%E6%9C%BA%23) `85.4K 🔥` `NEW`
1. [王安宇王玉雯我们三个人很暧昧](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%AE%89%E5%AE%87%E7%8E%8B%E7%8E%89%E9%9B%AF%E6%88%91%E4%BB%AC%E4%B8%89%E4%B8%AA%E4%BA%BA%E5%BE%88%E6%9A%A7%E6%98%A7%23) `216.2K 🔥` `+61%`
1. [罗志祥方否认猝死传闻 (Luo Zhixiang denies rumors of sudden death)](https://s.weibo.com/weibo?q=%23%E7%BD%97%E5%BF%97%E7%A5%A5%E6%96%B9%E5%90%A6%E8%AE%A4%E7%8C%9D%E6%AD%BB%E4%BC%A0%E9%97%BB%23) `210.6K 🔥` `+43%`
1. [爷爷的微信运动少了一个人点赞](https://s.weibo.com/weibo?q=%23%E7%88%B7%E7%88%B7%E7%9A%84%E5%BE%AE%E4%BF%A1%E8%BF%90%E5%8A%A8%E5%B0%91%E4%BA%86%E4%B8%80%E4%B8%AA%E4%BA%BA%E7%82%B9%E8%B5%9E%23) `201.8K 🔥` `+124%`
1. [胡巴每年都给井柏然过母亲节](https://s.weibo.com/weibo?q=%23%E8%83%A1%E5%B7%B4%E6%AF%8F%E5%B9%B4%E9%83%BD%E7%BB%99%E4%BA%95%E6%9F%8F%E7%84%B6%E8%BF%87%E6%AF%8D%E4%BA%B2%E8%8A%82%23) `190.9K 🔥` `+32%`
1. [宋祖儿被男粉求婚](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E7%A5%96%E5%84%BF%E8%A2%AB%E7%94%B7%E7%B2%89%E6%B1%82%E5%A9%9A%23) `175.2K 🔥` `+25%`
1. [王晓晨曾回应已婚留言称我头昏](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%99%93%E6%99%A8%E6%9B%BE%E5%9B%9E%E5%BA%94%E5%B7%B2%E5%A9%9A%E7%95%99%E8%A8%80%E7%A7%B0%E6%88%91%E5%A4%B4%E6%98%8F%23) `172.2K 🔥` `+25%`
1. [王星和女友回应不结婚的原因](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%98%9F%E5%92%8C%E5%A5%B3%E5%8F%8B%E5%9B%9E%E5%BA%94%E4%B8%8D%E7%BB%93%E5%A9%9A%E7%9A%84%E5%8E%9F%E5%9B%A0%23) `176.5K 🔥`
1. [伊朗放重磅信号](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%94%BE%E9%87%8D%E7%A3%85%E4%BF%A1%E5%8F%B7%23) `175.2K 🔥`
1. [恒大集团恒大地产及许家印案一审开庭](https://s.weibo.com/weibo?q=%23%E6%81%92%E5%A4%A7%E9%9B%86%E5%9B%A2%E6%81%92%E5%A4%A7%E5%9C%B0%E4%BA%A7%E5%8F%8A%E8%AE%B8%E5%AE%B6%E5%8D%B0%E6%A1%88%E4%B8%80%E5%AE%A1%E5%BC%80%E5%BA%AD%23) `172.8K 🔥`
1. [毛肚草莓火锅把四川人整沉默了](https://s.weibo.com/weibo?q=%23%E6%AF%9B%E8%82%9A%E8%8D%89%E8%8E%93%E7%81%AB%E9%94%85%E6%8A%8A%E5%9B%9B%E5%B7%9D%E4%BA%BA%E6%95%B4%E6%B2%89%E9%BB%98%E4%BA%86%23) `133.1K 🔥`
1. [怦然心动20岁 七月潘纬轩](https://s.weibo.com/weibo?q=%23%E6%80%A6%E7%84%B6%E5%BF%83%E5%8A%A820%E5%B2%81%20%E4%B8%83%E6%9C%88%E6%BD%98%E7%BA%AC%E8%BD%A9%23) `127.4K 🔥`
1. [朴信惠怀二胎了 (Park Shin Hye is pregnant with her second child)](https://s.weibo.com/weibo?q=%23%E6%9C%B4%E4%BF%A1%E6%83%A0%E6%80%80%E4%BA%8C%E8%83%8E%E4%BA%86%23) `125.7K 🔥`
1. [女子称出130斤生气踩爆体重秤 (Woman stepped on the scale in anger after weighing 130 pounds)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E7%A7%B0%E5%87%BA130%E6%96%A4%E7%94%9F%E6%B0%94%E8%B8%A9%E7%88%86%E4%BD%93%E9%87%8D%E7%A7%A4%23) `122.7K 🔥`
1. [何穗做了面部提升针灸](https://s.weibo.com/weibo?q=%23%E4%BD%95%E7%A9%97%E5%81%9A%E4%BA%86%E9%9D%A2%E9%83%A8%E6%8F%90%E5%8D%87%E9%92%88%E7%81%B8%23) `121.4K 🔥`
1. [多地新能源车牌绿色变白色](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E5%9C%B0%E6%96%B0%E8%83%BD%E6%BA%90%E8%BD%A6%E7%89%8C%E7%BB%BF%E8%89%B2%E5%8F%98%E7%99%BD%E8%89%B2%23) `249.6K 🔥` `-77%`
1. [银行招聘被骂上热搜不能怪网友](https://s.weibo.com/weibo?q=%23%E9%93%B6%E8%A1%8C%E6%8B%9B%E8%81%98%E8%A2%AB%E9%AA%82%E4%B8%8A%E7%83%AD%E6%90%9C%E4%B8%8D%E8%83%BD%E6%80%AA%E7%BD%91%E5%8F%8B%23) `247.0K 🔥` `-67%`
1. [博主花18万帮助大山女孩竟被骗](https://s.weibo.com/weibo?q=%23%E5%8D%9A%E4%B8%BB%E8%8A%B118%E4%B8%87%E5%B8%AE%E5%8A%A9%E5%A4%A7%E5%B1%B1%E5%A5%B3%E5%AD%A9%E7%AB%9F%E8%A2%AB%E9%AA%97%23) `109.4K 🔥` `-21%`
1. [印度男孩遭蛇咬伤被父母浸入恒河 (Indian boy bitten by snake and immersed in Ganges river by parents)](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%BA%A6%E7%94%B7%E5%AD%A9%E9%81%AD%E8%9B%87%E5%92%AC%E4%BC%A4%E8%A2%AB%E7%88%B6%E6%AF%8D%E6%B5%B8%E5%85%A5%E6%81%92%E6%B2%B3%23) `104.8K 🔥` `-28%`
1. [泰国海岸惊现被斩首美人鱼](https://s.weibo.com/weibo?q=%23%E6%B3%B0%E5%9B%BD%E6%B5%B7%E5%B2%B8%E6%83%8A%E7%8E%B0%E8%A2%AB%E6%96%A9%E9%A6%96%E7%BE%8E%E4%BA%BA%E9%B1%BC%23) `101.6K 🔥` `-29%`
1. [阚清子新妆造](https://s.weibo.com/weibo?q=%23%E9%98%9A%E6%B8%85%E5%AD%90%E6%96%B0%E5%A6%86%E9%80%A0%23) `86.4K 🔥` `-36%`
1. [时代少年团 错票无法入场 (Times Youth League won’t be able to enter if you have the wrong ticket)](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%20%E9%94%99%E7%A5%A8%E6%97%A0%E6%B3%95%E5%85%A5%E5%9C%BA%23) `86.3K 🔥` `-39%`

Updated at 2026-04-14 16:55:51

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
