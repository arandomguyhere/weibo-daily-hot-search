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

1. [李亚鹏回应张雪卖车捐款嫣然 (Li Yapeng responded to Zhang Xue’s donation to Yanran by selling her car)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E4%BA%9A%E9%B9%8F%E5%9B%9E%E5%BA%94%E5%BC%A0%E9%9B%AA%E5%8D%96%E8%BD%A6%E6%8D%90%E6%AC%BE%E5%AB%A3%E7%84%B6%23) `806.6K 🔥` `NEW`
1. [袁咏仪说浪姐请不到我李心洁请到](https://s.weibo.com/weibo?q=%23%E8%A2%81%E5%92%8F%E4%BB%AA%E8%AF%B4%E6%B5%AA%E5%A7%90%E8%AF%B7%E4%B8%8D%E5%88%B0%E6%88%91%E6%9D%8E%E5%BF%83%E6%B4%81%E8%AF%B7%E5%88%B0%23) `369.3K 🔥` `NEW`
1. [边牧在公路被抛弃遇到了真正的主人](https://s.weibo.com/weibo?q=%23%E8%BE%B9%E7%89%A7%E5%9C%A8%E5%85%AC%E8%B7%AF%E8%A2%AB%E6%8A%9B%E5%BC%83%E9%81%87%E5%88%B0%E4%BA%86%E7%9C%9F%E6%AD%A3%E7%9A%84%E4%B8%BB%E4%BA%BA%23) `323.6K 🔥` `NEW`
1. [范丞丞赵今麦 绝命循环](https://s.weibo.com/weibo?q=%23%E8%8C%83%E4%B8%9E%E4%B8%9E%E8%B5%B5%E4%BB%8A%E9%BA%A6%20%E7%BB%9D%E5%91%BD%E5%BE%AA%E7%8E%AF%23) `249.3K 🔥` `NEW`
1. [时代峰峻高会声明](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B3%B0%E5%B3%BB%E9%AB%98%E4%BC%9A%E5%A3%B0%E6%98%8E%23) `167.3K 🔥` `NEW`
1. [男子趁老婆上厕所称自己离异上台相亲](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E8%B6%81%E8%80%81%E5%A9%86%E4%B8%8A%E5%8E%95%E6%89%80%E7%A7%B0%E8%87%AA%E5%B7%B1%E7%A6%BB%E5%BC%82%E4%B8%8A%E5%8F%B0%E7%9B%B8%E4%BA%B2%23) `164.5K 🔥` `NEW`
1. [小伙网恋因一顿外卖15天闪婚](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E4%BC%99%E7%BD%91%E6%81%8B%E5%9B%A0%E4%B8%80%E9%A1%BF%E5%A4%96%E5%8D%9615%E5%A4%A9%E9%97%AA%E5%A9%9A%23) `159.4K 🔥` `NEW`
1. [一汽大众全新纯电SUV谍照曝光](https://s.weibo.com/weibo?q=%23%E4%B8%80%E6%B1%BD%E5%A4%A7%E4%BC%97%E5%85%A8%E6%96%B0%E7%BA%AF%E7%94%B5SUV%E8%B0%8D%E7%85%A7%E6%9B%9D%E5%85%89%23) `157.3K 🔥` `NEW`
1. [电池安全标准不止于国标](https://s.weibo.com/weibo?q=%23%E7%94%B5%E6%B1%A0%E5%AE%89%E5%85%A8%E6%A0%87%E5%87%86%E4%B8%8D%E6%AD%A2%E4%BA%8E%E5%9B%BD%E6%A0%87%23) `156.5K 🔥` `NEW`
1. [王濛李小冉小声蛐蛐全被拍了](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BF%9B%E6%9D%8E%E5%B0%8F%E5%86%89%E5%B0%8F%E5%A3%B0%E8%9B%90%E8%9B%90%E5%85%A8%E8%A2%AB%E6%8B%8D%E4%BA%86%23) `145.7K 🔥` `NEW`
1. [受不了声音大情绪太外化的人 (Can't stand people who are loud and overly emotional)](https://s.weibo.com/weibo?q=%23%E5%8F%97%E4%B8%8D%E4%BA%86%E5%A3%B0%E9%9F%B3%E5%A4%A7%E6%83%85%E7%BB%AA%E5%A4%AA%E5%A4%96%E5%8C%96%E7%9A%84%E4%BA%BA%23) `132.7K 🔥` `NEW`
1. [曝孔雪儿邓凯在谈三搭](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%AD%94%E9%9B%AA%E5%84%BF%E9%82%93%E5%87%AF%E5%9C%A8%E8%B0%88%E4%B8%89%E6%90%AD%23) `130.9K 🔥` `NEW`
1. [合资一发力车机TOP1](https://s.weibo.com/weibo?q=%23%E5%90%88%E8%B5%84%E4%B8%80%E5%8F%91%E5%8A%9B%E8%BD%A6%E6%9C%BATOP1%23) `127.5K 🔥` `NEW`
1. [猪精液制成的眼药水可治疗眼肿瘤](https://s.weibo.com/weibo?q=%23%E7%8C%AA%E7%B2%BE%E6%B6%B2%E5%88%B6%E6%88%90%E7%9A%84%E7%9C%BC%E8%8D%AF%E6%B0%B4%E5%8F%AF%E6%B2%BB%E7%96%97%E7%9C%BC%E8%82%BF%E7%98%A4%23) `126.0K 🔥` `NEW`
1. [伊朗再称击落美军F35战机](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%86%8D%E7%A7%B0%E5%87%BB%E8%90%BD%E7%BE%8E%E5%86%9BF35%E6%88%98%E6%9C%BA%23) `122.7K 🔥` `NEW`
1. [学霸辞职读研](https://s.weibo.com/weibo?q=%23%E5%AD%A6%E9%9C%B8%E8%BE%9E%E8%81%8C%E8%AF%BB%E7%A0%94%23) `121.9K 🔥` `NEW`
1. [手掌太红大批网友提醒张雪及时就医](https://s.weibo.com/weibo?q=%23%E6%89%8B%E6%8E%8C%E5%A4%AA%E7%BA%A2%E5%A4%A7%E6%89%B9%E7%BD%91%E5%8F%8B%E6%8F%90%E9%86%92%E5%BC%A0%E9%9B%AA%E5%8F%8A%E6%97%B6%E5%B0%B1%E5%8C%BB%23) `110.5K 🔥` `NEW`
1. [湖人惨败雷霆43分](https://s.weibo.com/weibo?q=%23%E6%B9%96%E4%BA%BA%E6%83%A8%E8%B4%A5%E9%9B%B7%E9%9C%8643%E5%88%86%23) `104.0K 🔥` `NEW`
1. [苹果天价扫荡全球手机内存](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C%E5%A4%A9%E4%BB%B7%E6%89%AB%E8%8D%A1%E5%85%A8%E7%90%83%E6%89%8B%E6%9C%BA%E5%86%85%E5%AD%98%23) `101.2K 🔥` `NEW`
1. [找工作烦了我就这样刻薄](https://s.weibo.com/weibo?q=%23%E6%89%BE%E5%B7%A5%E4%BD%9C%E7%83%A6%E4%BA%86%E6%88%91%E5%B0%B1%E8%BF%99%E6%A0%B7%E5%88%BB%E8%96%84%23) `100.2K 🔥` `NEW`
1. [优思益代工厂曾38次抽检均合格 (Yousiyi foundry has passed 38 random inspections.)](https://s.weibo.com/weibo?q=%23%E4%BC%98%E6%80%9D%E7%9B%8A%E4%BB%A3%E5%B7%A5%E5%8E%82%E6%9B%BE38%E6%AC%A1%E6%8A%BD%E6%A3%80%E5%9D%87%E5%90%88%E6%A0%BC%23) `98.8K 🔥` `NEW`
1. [男子被诈骗8600元后自杀](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E8%A2%AB%E8%AF%88%E9%AA%978600%E5%85%83%E5%90%8E%E8%87%AA%E6%9D%80%23) `97.7K 🔥` `NEW`
1. [中国中产还是lululemon的救命稻草吗](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E4%B8%AD%E4%BA%A7%E8%BF%98%E6%98%AFlululemon%E7%9A%84%E6%95%91%E5%91%BD%E7%A8%BB%E8%8D%89%E5%90%97%23) `92.8K 🔥` `NEW`
1. [采茶阿姨哭诉饮用水质差](https://s.weibo.com/weibo?q=%23%E9%87%87%E8%8C%B6%E9%98%BF%E5%A7%A8%E5%93%AD%E8%AF%89%E9%A5%AE%E7%94%A8%E6%B0%B4%E8%B4%A8%E5%B7%AE%23) `92.6K 🔥` `NEW`
1. [这个部位的脂肪可能是癌症推手](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%B8%AA%E9%83%A8%E4%BD%8D%E7%9A%84%E8%84%82%E8%82%AA%E5%8F%AF%E8%83%BD%E6%98%AF%E7%99%8C%E7%97%87%E6%8E%A8%E6%89%8B%23) `84.3K 🔥` `NEW`
1. [沧元图](https://s.weibo.com/weibo?q=%23%E6%B2%A7%E5%85%83%E5%9B%BE%23) `83.6K 🔥` `NEW`
1. [洛克王国世界给我打电话了](https://s.weibo.com/weibo?q=%23%E6%B4%9B%E5%85%8B%E7%8E%8B%E5%9B%BD%E4%B8%96%E7%95%8C%E7%BB%99%E6%88%91%E6%89%93%E7%94%B5%E8%AF%9D%E4%BA%86%23) `80.5K 🔥` `NEW`
1. [石破茂公开评价特朗普喜欢被奉承](https://s.weibo.com/weibo?q=%23%E7%9F%B3%E7%A0%B4%E8%8C%82%E5%85%AC%E5%BC%80%E8%AF%84%E4%BB%B7%E7%89%B9%E6%9C%97%E6%99%AE%E5%96%9C%E6%AC%A2%E8%A2%AB%E5%A5%89%E6%89%BF%23) `80.2K 🔥` `NEW`
1. [冰湖重生OST歌词被指抄袭](https://s.weibo.com/weibo?q=%23%E5%86%B0%E6%B9%96%E9%87%8D%E7%94%9FOST%E6%AD%8C%E8%AF%8D%E8%A2%AB%E6%8C%87%E6%8A%84%E8%A2%AD%23) `72.2K 🔥` `NEW`
1. [白宫紧急下架特朗普讲话视频](https://s.weibo.com/weibo?q=%23%E7%99%BD%E5%AE%AB%E7%B4%A7%E6%80%A5%E4%B8%8B%E6%9E%B6%E7%89%B9%E6%9C%97%E6%99%AE%E8%AE%B2%E8%AF%9D%E8%A7%86%E9%A2%91%23) `168.4K 🔥` `+72%`
1. [何润东回应不参加综艺 (Peter Ho responds that he will not participate in variety shows)](https://s.weibo.com/weibo?q=%23%E4%BD%95%E6%B6%A6%E4%B8%9C%E5%9B%9E%E5%BA%94%E4%B8%8D%E5%8F%82%E5%8A%A0%E7%BB%BC%E8%89%BA%23) `152.7K 🔥` `+49%`
1. [美国被曝想用停火换霍尔木兹海峡通航](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E8%A2%AB%E6%9B%9D%E6%83%B3%E7%94%A8%E5%81%9C%E7%81%AB%E6%8D%A2%E9%9C%8D%E5%B0%94%E6%9C%A8%E5%85%B9%E6%B5%B7%E5%B3%A1%E9%80%9A%E8%88%AA%23) `119.3K 🔥` `+22%`
1. [原来身份证不是全国统一的 (It turns out that ID cards are not uniform across the country.)](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E8%BA%AB%E4%BB%BD%E8%AF%81%E4%B8%8D%E6%98%AF%E5%85%A8%E5%9B%BD%E7%BB%9F%E4%B8%80%E7%9A%84%23) `1.1M 🔥`
1. [致敬所有隐蔽战线的无名英雄](https://s.weibo.com/weibo?q=%23%E8%87%B4%E6%95%AC%E6%89%80%E6%9C%89%E9%9A%90%E8%94%BD%E6%88%98%E7%BA%BF%E7%9A%84%E6%97%A0%E5%90%8D%E8%8B%B1%E9%9B%84%23) `645.0K 🔥`
1. [欧阳娜娜同款小鹏MONA起售价11.98万](https://s.weibo.com/weibo?q=%23%E6%AC%A7%E9%98%B3%E5%A8%9C%E5%A8%9C%E5%90%8C%E6%AC%BE%E5%B0%8F%E9%B9%8FMONA%E8%B5%B7%E5%94%AE%E4%BB%B711.98%E4%B8%87%23) `573.3K 🔥`
1. [半个娱乐圈为它道歉谁该负责](https://s.weibo.com/weibo?q=%23%E5%8D%8A%E4%B8%AA%E5%A8%B1%E4%B9%90%E5%9C%88%E4%B8%BA%E5%AE%83%E9%81%93%E6%AD%89%E8%B0%81%E8%AF%A5%E8%B4%9F%E8%B4%A3%23) `324.5K 🔥`
1. [张凌赫待播剧一个是医生一个是草根](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%BE%85%E6%92%AD%E5%89%A7%E4%B8%80%E4%B8%AA%E6%98%AF%E5%8C%BB%E7%94%9F%E4%B8%80%E4%B8%AA%E6%98%AF%E8%8D%89%E6%A0%B9%23) `160.6K 🔥`
1. [王一博在蕉内欢迎光临 (Welcome to Wang Yibo in Jiao Nei)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E5%9C%A8%E8%95%89%E5%86%85%E6%AC%A2%E8%BF%8E%E5%85%89%E4%B8%B4%23) `322.2K 🔥` `-30%`
1. [韩国40岁导演遭围殴致死引众怒](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD40%E5%B2%81%E5%AF%BC%E6%BC%94%E9%81%AD%E5%9B%B4%E6%AE%B4%E8%87%B4%E6%AD%BB%E5%BC%95%E4%BC%97%E6%80%92%23) `320.8K 🔥` `-62%`
1. [老爸评测就优思益事件道歉](https://s.weibo.com/weibo?q=%23%E8%80%81%E7%88%B8%E8%AF%84%E6%B5%8B%E5%B0%B1%E4%BC%98%E6%80%9D%E7%9B%8A%E4%BA%8B%E4%BB%B6%E9%81%93%E6%AD%89%23) `273.1K 🔥` `-49%`
1. [小米调价](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E8%B0%83%E4%BB%B7%23) `170.0K 🔥` `-61%`
1. [秦岚说沈月确实漂亮](https://s.weibo.com/weibo?q=%23%E7%A7%A6%E5%B2%9A%E8%AF%B4%E6%B2%88%E6%9C%88%E7%A1%AE%E5%AE%9E%E6%BC%82%E4%BA%AE%23) `165.5K 🔥` `-66%`
1. [黄灿灿浪姐直播闯祸 (Sister Huang Cancanlang got into trouble during her live broadcast)](https://s.weibo.com/weibo?q=%23%E9%BB%84%E7%81%BF%E7%81%BF%E6%B5%AA%E5%A7%90%E7%9B%B4%E6%92%AD%E9%97%AF%E7%A5%B8%23) `162.7K 🔥` `-72%`
1. [张天爱变样了 (Zhang Tianai has changed)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%A4%A9%E7%88%B1%E5%8F%98%E6%A0%B7%E4%BA%86%23) `154.2K 🔥` `-49%`
1. [涠洲岛20余艘观鲸船围堵鲸鱼](https://s.weibo.com/weibo?q=%23%E6%B6%A0%E6%B4%B2%E5%B2%9B20%E4%BD%99%E8%89%98%E8%A7%82%E9%B2%B8%E8%88%B9%E5%9B%B4%E5%A0%B5%E9%B2%B8%E9%B1%BC%23) `151.7K 🔥` `-34%`
1. [张天爱发文回应变样](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%A4%A9%E7%88%B1%E5%8F%91%E6%96%87%E5%9B%9E%E5%BA%94%E5%8F%98%E6%A0%B7%23) `132.3K 🔥` `-47%`
1. [乘风2026](https://s.weibo.com/weibo?q=%23%E4%B9%98%E9%A3%8E2026%23) `127.1K 🔥` `-53%`
1. [会计的噩梦](https://s.weibo.com/weibo?q=%23%E4%BC%9A%E8%AE%A1%E7%9A%84%E5%99%A9%E6%A2%A6%23) `116.1K 🔥` `-56%`
1. [18岁缉毒烈士牺牲时姿势让人破防 (The 18-year-old anti-drug martyr’s posture when he died was shocking)](https://s.weibo.com/weibo?q=%2318%E5%B2%81%E7%BC%89%E6%AF%92%E7%83%88%E5%A3%AB%E7%89%BA%E7%89%B2%E6%97%B6%E5%A7%BF%E5%8A%BF%E8%AE%A9%E4%BA%BA%E7%A0%B4%E9%98%B2%23) `96.6K 🔥` `-35%`
1. [医保政策调整](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E4%BF%9D%E6%94%BF%E7%AD%96%E8%B0%83%E6%95%B4%23) `95.1K 🔥` `-54%`
1. [老虎伍兹被捕现场](https://s.weibo.com/weibo?q=%23%E8%80%81%E8%99%8E%E4%BC%8D%E5%85%B9%E8%A2%AB%E6%8D%95%E7%8E%B0%E5%9C%BA%23) `85.6K 🔥` `-39%`
1. [天龙三号](https://s.weibo.com/weibo?q=%23%E5%A4%A9%E9%BE%99%E4%B8%89%E5%8F%B7%23) `80.4K 🔥` `-47%`

Updated at 2026-04-03 14:01:52

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
