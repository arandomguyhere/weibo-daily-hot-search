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

1. [东方甄选主播离职原因 (Reasons why Oriental Selection anchor resigned)](https://s.weibo.com/weibo?q=%23%E4%B8%9C%E6%96%B9%E7%94%84%E9%80%89%E4%B8%BB%E6%92%AD%E7%A6%BB%E8%81%8C%E5%8E%9F%E5%9B%A0%23) `1.2M 🔥` `NEW`
1. [北京西城新晋打卡顶流](https://s.weibo.com/weibo?q=%23%E5%8C%97%E4%BA%AC%E8%A5%BF%E5%9F%8E%E6%96%B0%E6%99%8B%E6%89%93%E5%8D%A1%E9%A1%B6%E6%B5%81%23) `720.3K 🔥` `NEW`
1. [满屏都是阚清子老公送的流星雨](https://s.weibo.com/weibo?q=%23%E6%BB%A1%E5%B1%8F%E9%83%BD%E6%98%AF%E9%98%9A%E6%B8%85%E5%AD%90%E8%80%81%E5%85%AC%E9%80%81%E7%9A%84%E6%B5%81%E6%98%9F%E9%9B%A8%23) `689.1K 🔥` `NEW`
1. [榴莲已经20多元一斤了](https://s.weibo.com/weibo?q=%23%E6%A6%B4%E8%8E%B2%E5%B7%B2%E7%BB%8F20%E5%A4%9A%E5%85%83%E4%B8%80%E6%96%A4%E4%BA%86%23) `515.5K 🔥` `NEW`
1. [东方甄选4名主播同日宣布离职](https://s.weibo.com/weibo?q=%23%E4%B8%9C%E6%96%B9%E7%94%84%E9%80%894%E5%90%8D%E4%B8%BB%E6%92%AD%E5%90%8C%E6%97%A5%E5%AE%A3%E5%B8%83%E7%A6%BB%E8%81%8C%23) `437.1K 🔥` `NEW`
1. [蜜语纪](https://s.weibo.com/weibo?q=%23%E8%9C%9C%E8%AF%AD%E7%BA%AA%23) `258.5K 🔥` `NEW`
1. [宁艺卓回怼粉丝](https://s.weibo.com/weibo?q=%23%E5%AE%81%E8%89%BA%E5%8D%93%E5%9B%9E%E6%80%BC%E7%B2%89%E4%B8%9D%23) `248.6K 🔥` `NEW`
1. [黄金经历惨烈抛售](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%E7%BB%8F%E5%8E%86%E6%83%A8%E7%83%88%E6%8A%9B%E5%94%AE%23) `230.6K 🔥` `NEW`
1. [俞敏洪回应多位主播离职](https://s.weibo.com/weibo?q=%23%E4%BF%9E%E6%95%8F%E6%B4%AA%E5%9B%9E%E5%BA%94%E5%A4%9A%E4%BD%8D%E4%B8%BB%E6%92%AD%E7%A6%BB%E8%81%8C%23) `185.4K 🔥` `NEW`
1. [雷霆3比0太阳](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E9%9C%863%E6%AF%940%E5%A4%AA%E9%98%B3%23) `183.0K 🔥` `NEW`
1. [阚清子老公游戏账号谐音喜欢阚清子 (Kan Qingzi’s husband’s game account is homophonic and he likes Kan Qingzi)](https://s.weibo.com/weibo?q=%23%E9%98%9A%E6%B8%85%E5%AD%90%E8%80%81%E5%85%AC%E6%B8%B8%E6%88%8F%E8%B4%A6%E5%8F%B7%E8%B0%90%E9%9F%B3%E5%96%9C%E6%AC%A2%E9%98%9A%E6%B8%85%E5%AD%90%23) `179.7K 🔥` `NEW`
1. [特朗普称取消美代表赴巴基斯坦行程](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E7%A7%B0%E5%8F%96%E6%B6%88%E7%BE%8E%E4%BB%A3%E8%A1%A8%E8%B5%B4%E5%B7%B4%E5%9F%BA%E6%96%AF%E5%9D%A6%E8%A1%8C%E7%A8%8B%23) `178.1K 🔥` `NEW`
1. [霍思燕淡出演艺圈后深耕训犬领域](https://s.weibo.com/weibo?q=%23%E9%9C%8D%E6%80%9D%E7%87%95%E6%B7%A1%E5%87%BA%E6%BC%94%E8%89%BA%E5%9C%88%E5%90%8E%E6%B7%B1%E8%80%95%E8%AE%AD%E7%8A%AC%E9%A2%86%E5%9F%9F%23) `173.7K 🔥` `NEW`
1. [环境对一个人的影响有多大](https://s.weibo.com/weibo?q=%23%E7%8E%AF%E5%A2%83%E5%AF%B9%E4%B8%80%E4%B8%AA%E4%BA%BA%E7%9A%84%E5%BD%B1%E5%93%8D%E6%9C%89%E5%A4%9A%E5%A4%A7%23) `172.1K 🔥` `NEW`
1. [解放军战机挂弹硬刚外军航母编队](https://s.weibo.com/weibo?q=%23%E8%A7%A3%E6%94%BE%E5%86%9B%E6%88%98%E6%9C%BA%E6%8C%82%E5%BC%B9%E7%A1%AC%E5%88%9A%E5%A4%96%E5%86%9B%E8%88%AA%E6%AF%8D%E7%BC%96%E9%98%9F%23) `170.0K 🔥` `NEW`
1. [新生儿颅骨骨折医生诊断为脑积水](https://s.weibo.com/weibo?q=%23%E6%96%B0%E7%94%9F%E5%84%BF%E9%A2%85%E9%AA%A8%E9%AA%A8%E6%8A%98%E5%8C%BB%E7%94%9F%E8%AF%8A%E6%96%AD%E4%B8%BA%E8%84%91%E7%A7%AF%E6%B0%B4%23) `169.2K 🔥` `NEW`
1. [网传浪姐二公个喜排名](https://s.weibo.com/weibo?q=%23%E7%BD%91%E4%BC%A0%E6%B5%AA%E5%A7%90%E4%BA%8C%E5%85%AC%E4%B8%AA%E5%96%9C%E6%8E%92%E5%90%8D%23) `169.2K 🔥` `NEW`
1. [佳偶天成首播观众反响](https://s.weibo.com/weibo?q=%23%E4%BD%B3%E5%81%B6%E5%A4%A9%E6%88%90%E9%A6%96%E6%92%AD%E8%A7%82%E4%BC%97%E5%8F%8D%E5%93%8D%23) `165.9K 🔥` `NEW`
1. [26岁澳籍富豪勒颈韩裔网红女友](https://s.weibo.com/weibo?q=%2326%E5%B2%81%E6%BE%B3%E7%B1%8D%E5%AF%8C%E8%B1%AA%E5%8B%92%E9%A2%88%E9%9F%A9%E8%A3%94%E7%BD%91%E7%BA%A2%E5%A5%B3%E5%8F%8B%23) `164.2K 🔥` `NEW`
1. [美国白宫记者晚宴传出枪声](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E7%99%BD%E5%AE%AB%E8%AE%B0%E8%80%85%E6%99%9A%E5%AE%B4%E4%BC%A0%E5%87%BA%E6%9E%AA%E5%A3%B0%23) `164.1K 🔥` `NEW`
1. [洗空气空调 (Wash air conditioner)](https://s.weibo.com/weibo?q=%23%E6%B4%97%E7%A9%BA%E6%B0%94%E7%A9%BA%E8%B0%83%23) `143.6K 🔥` `NEW`
1. [王勉说家里暂不开放旅游业务](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%8B%89%E8%AF%B4%E5%AE%B6%E9%87%8C%E6%9A%82%E4%B8%8D%E5%BC%80%E6%94%BE%E6%97%85%E6%B8%B8%E4%B8%9A%E5%8A%A1%23) `134.6K 🔥` `NEW`
1. [校方提出对男子学位证进行司法鉴定](https://s.weibo.com/weibo?q=%23%E6%A0%A1%E6%96%B9%E6%8F%90%E5%87%BA%E5%AF%B9%E7%94%B7%E5%AD%90%E5%AD%A6%E4%BD%8D%E8%AF%81%E8%BF%9B%E8%A1%8C%E5%8F%B8%E6%B3%95%E9%89%B4%E5%AE%9A%23) `124.2K 🔥` `NEW`
1. [伊朗总统说不接受在威胁下谈判](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%80%BB%E7%BB%9F%E8%AF%B4%E4%B8%8D%E6%8E%A5%E5%8F%97%E5%9C%A8%E5%A8%81%E8%83%81%E4%B8%8B%E8%B0%88%E5%88%A4%23) `123.8K 🔥` `NEW`
1. [全球黄金主力买家抛售超22吨黄金](https://s.weibo.com/weibo?q=%23%E5%85%A8%E7%90%83%E9%BB%84%E9%87%91%E4%B8%BB%E5%8A%9B%E4%B9%B0%E5%AE%B6%E6%8A%9B%E5%94%AE%E8%B6%8522%E5%90%A8%E9%BB%84%E9%87%91%23) `112.6K 🔥` `NEW`
1. [魏哲鸣张艺凡十指紧扣](https://s.weibo.com/weibo?q=%23%E9%AD%8F%E5%93%B2%E9%B8%A3%E5%BC%A0%E8%89%BA%E5%87%A1%E5%8D%81%E6%8C%87%E7%B4%A7%E6%89%A3%23) `104.1K 🔥` `NEW`
1. [东方甄选明明离职原因 (Oriental Selection’s clear reason for resignation)](https://s.weibo.com/weibo?q=%23%E4%B8%9C%E6%96%B9%E7%94%84%E9%80%89%E6%98%8E%E6%98%8E%E7%A6%BB%E8%81%8C%E5%8E%9F%E5%9B%A0%23) `855.7K 🔥` `+272%`
1. [数读一季度消费市场成绩单 (A digital reading of the consumer market report card for the first quarter)](https://s.weibo.com/weibo?q=%23%E6%95%B0%E8%AF%BB%E4%B8%80%E5%AD%A3%E5%BA%A6%E6%B6%88%E8%B4%B9%E5%B8%82%E5%9C%BA%E6%88%90%E7%BB%A9%E5%8D%95%23) `752.7K 🔥` `+44%`
1. [29.98万起大众9X真香](https://s.weibo.com/weibo?q=%2329.98%E4%B8%87%E8%B5%B7%E5%A4%A7%E4%BC%979X%E7%9C%9F%E9%A6%99%23) `413.6K 🔥` `+205%`
1. [曾沛慈听到者来女淘汰爆哭](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E6%B2%9B%E6%85%88%E5%90%AC%E5%88%B0%E8%80%85%E6%9D%A5%E5%A5%B3%E6%B7%98%E6%B1%B0%E7%88%86%E5%93%AD%23) `322.4K 🔥` `+342%`
1. [16岁高中生或发现侵华日军新罪证](https://s.weibo.com/weibo?q=%2316%E5%B2%81%E9%AB%98%E4%B8%AD%E7%94%9F%E6%88%96%E5%8F%91%E7%8E%B0%E4%BE%B5%E5%8D%8E%E6%97%A5%E5%86%9B%E6%96%B0%E7%BD%AA%E8%AF%81%23) `279.3K 🔥` `+123%`
1. [得知胎儿色盲孕晚期女子称害了孩子](https://s.weibo.com/weibo?q=%23%E5%BE%97%E7%9F%A5%E8%83%8E%E5%84%BF%E8%89%B2%E7%9B%B2%E5%AD%95%E6%99%9A%E6%9C%9F%E5%A5%B3%E5%AD%90%E7%A7%B0%E5%AE%B3%E4%BA%86%E5%AD%A9%E5%AD%90%23) `210.6K 🔥` `+117%`
1. [拒绝退役军人如厕后续调查 (Follow-up investigation on refusal of veterans to use the toilet)](https://s.weibo.com/weibo?q=%23%E6%8B%92%E7%BB%9D%E9%80%80%E5%BD%B9%E5%86%9B%E4%BA%BA%E5%A6%82%E5%8E%95%E5%90%8E%E7%BB%AD%E8%B0%83%E6%9F%A5%23) `181.3K 🔥` `+176%`
1. [建议大家衣服不要攒一起洗](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E5%A4%A7%E5%AE%B6%E8%A1%A3%E6%9C%8D%E4%B8%8D%E8%A6%81%E6%94%92%E4%B8%80%E8%B5%B7%E6%B4%97%23) `178.9K 🔥` `+91%`
1. [洗头发油慢的小方法](https://s.weibo.com/weibo?q=%23%E6%B4%97%E5%A4%B4%E5%8F%91%E6%B2%B9%E6%85%A2%E7%9A%84%E5%B0%8F%E6%96%B9%E6%B3%95%23) `176.1K 🔥` `+91%`
1. [东方甄选中灿官宣离职 (Can Guan announced his resignation from Oriental Screening)](https://s.weibo.com/weibo?q=%23%E4%B8%9C%E6%96%B9%E7%94%84%E9%80%89%E4%B8%AD%E7%81%BF%E5%AE%98%E5%AE%A3%E7%A6%BB%E8%81%8C%23) `175.6K 🔥` `+86%`
1. [范丞丞你要毁了李昀锐吗](https://s.weibo.com/weibo?q=%23%E8%8C%83%E4%B8%9E%E4%B8%9E%E4%BD%A0%E8%A6%81%E6%AF%81%E4%BA%86%E6%9D%8E%E6%98%80%E9%94%90%E5%90%97%23) `174.0K 🔥` `+94%`
1. [王濛吐槽李小冉 (Wang Meng complained about Li Xiaoran)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BF%9B%E5%90%90%E6%A7%BD%E6%9D%8E%E5%B0%8F%E5%86%89%23) `172.5K 🔥` `+80%`
1. [断绝孩子手机上瘾最快的偏方 (The fastest way to stop your child’s cell phone addiction)](https://s.weibo.com/weibo?q=%23%E6%96%AD%E7%BB%9D%E5%AD%A9%E5%AD%90%E6%89%8B%E6%9C%BA%E4%B8%8A%E7%98%BE%E6%9C%80%E5%BF%AB%E7%9A%84%E5%81%8F%E6%96%B9%23) `171.5K 🔥` `+79%`
1. [明明感谢俞敏洪 (Obviously thank you Yu Minhong)](https://s.weibo.com/weibo?q=%23%E6%98%8E%E6%98%8E%E6%84%9F%E8%B0%A2%E4%BF%9E%E6%95%8F%E6%B4%AA%23) `170.9K 🔥` `+240%`
1. [曝金泰梨区别对待中粉](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E9%87%91%E6%B3%B0%E6%A2%A8%E5%8C%BA%E5%88%AB%E5%AF%B9%E5%BE%85%E4%B8%AD%E7%B2%89%23) `170.7K 🔥` `+199%`
1. [李小冉短短两周经历了什么](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B0%8F%E5%86%89%E7%9F%AD%E7%9F%AD%E4%B8%A4%E5%91%A8%E7%BB%8F%E5%8E%86%E4%BA%86%E4%BB%80%E4%B9%88%23) `170.1K 🔥` `+74%`
1. [这周唐艺昕一个人站岗](https://s.weibo.com/weibo?q=%23%E8%BF%99%E5%91%A8%E5%94%90%E8%89%BA%E6%98%95%E4%B8%80%E4%B8%AA%E4%BA%BA%E7%AB%99%E5%B2%97%23) `164.1K 🔥` `+183%`
1. [李昀锐连孟子义名字都不提 (Li Yunrui didn’t even mention Meng Ziyi’s name)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%98%80%E9%94%90%E8%BF%9E%E5%AD%9F%E5%AD%90%E4%B9%89%E5%90%8D%E5%AD%97%E9%83%BD%E4%B8%8D%E6%8F%90%23) `130.8K 🔥` `+37%`
1. [斯诺克](https://s.weibo.com/weibo?q=%23%E6%96%AF%E8%AF%BA%E5%85%8B%23) `123.7K 🔥` `+69%`
1. [秦昊马頔孙丞潇都在点孙杨了 (Qin Hao, Ma Di, and Sun Chengxiao are all ordering Sun Yang)](https://s.weibo.com/weibo?q=%23%E7%A7%A6%E6%98%8A%E9%A9%AC%E9%A0%94%E5%AD%99%E4%B8%9E%E6%BD%87%E9%83%BD%E5%9C%A8%E7%82%B9%E5%AD%99%E6%9D%A8%E4%BA%86%23) `123.7K 🔥` `+29%`
1. [中国乒乓运动员张缤月参加MLTT选秀](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E4%B9%92%E4%B9%93%E8%BF%90%E5%8A%A8%E5%91%98%E5%BC%A0%E7%BC%A4%E6%9C%88%E5%8F%82%E5%8A%A0MLTT%E9%80%89%E7%A7%80%23) `118.9K 🔥` `+91%`
1. [者来女淘汰 (Whoever comes, the female will be eliminated)](https://s.weibo.com/weibo?q=%23%E8%80%85%E6%9D%A5%E5%A5%B3%E6%B7%98%E6%B1%B0%23) `197.1K 🔥`
1. [美伊停火谈判 (US-Iran ceasefire negotiations)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E4%BC%8A%E5%81%9C%E7%81%AB%E8%B0%88%E5%88%A4%23) `391.9K 🔥` `-41%`
1. [齐思钧表情](https://s.weibo.com/weibo?q=%23%E9%BD%90%E6%80%9D%E9%92%A7%E8%A1%A8%E6%83%85%23) `226.7K 🔥` `-41%`
1. [副所长为完成任务设计让6人吸毒 (The deputy director planned to let 6 people take drugs to complete the task)](https://s.weibo.com/weibo?q=%23%E5%89%AF%E6%89%80%E9%95%BF%E4%B8%BA%E5%AE%8C%E6%88%90%E4%BB%BB%E5%8A%A1%E8%AE%BE%E8%AE%A1%E8%AE%A96%E4%BA%BA%E5%90%B8%E6%AF%92%23) `182.6K 🔥` `-80%`
1. [旅游很多次才知道的事 (Things you only know after traveling many times)](https://s.weibo.com/weibo?q=%23%E6%97%85%E6%B8%B8%E5%BE%88%E5%A4%9A%E6%AC%A1%E6%89%8D%E7%9F%A5%E9%81%93%E7%9A%84%E4%BA%8B%23) `172.6K 🔥` `-23%`

Updated at 2026-04-26 09:12:43

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
