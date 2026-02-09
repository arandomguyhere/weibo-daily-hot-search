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

1. [新时代推动法治进程2025十大案件 (Top Ten Cases Promoting the Rule of Law in the New Era by 2025)](https://s.weibo.com/weibo?q=%23%E6%96%B0%E6%97%B6%E4%BB%A3%E6%8E%A8%E5%8A%A8%E6%B3%95%E6%B2%BB%E8%BF%9B%E7%A8%8B2025%E5%8D%81%E5%A4%A7%E6%A1%88%E4%BB%B6%23) `674.6K 🔥` `NEW`
1. [王楚然模仿妲己](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E7%84%B6%E6%A8%A1%E4%BB%BF%E5%A6%B2%E5%B7%B1%23) `303.0K 🔥` `NEW`
1. [易烊千玺意识到被叫叔叔的反应](https://s.weibo.com/weibo?q=%23%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%E6%84%8F%E8%AF%86%E5%88%B0%E8%A2%AB%E5%8F%AB%E5%8F%94%E5%8F%94%E7%9A%84%E5%8F%8D%E5%BA%94%23) `267.3K 🔥` `NEW`
1. [英国名媛称未入爱泼斯坦档案是侮辱](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E5%9B%BD%E5%90%8D%E5%AA%9B%E7%A7%B0%E6%9C%AA%E5%85%A5%E7%88%B1%E6%B3%BC%E6%96%AF%E5%9D%A6%E6%A1%A3%E6%A1%88%E6%98%AF%E4%BE%AE%E8%BE%B1%23) `220.7K 🔥` `NEW`
1. [成何体统](https://s.weibo.com/weibo?q=%23%E6%88%90%E4%BD%95%E4%BD%93%E7%BB%9F%23) `183.3K 🔥` `NEW`
1. [于谦被恢复执行](https://s.weibo.com/weibo?q=%23%E4%BA%8E%E8%B0%A6%E8%A2%AB%E6%81%A2%E5%A4%8D%E6%89%A7%E8%A1%8C%23) `178.7K 🔥` `NEW`
1. [王楚然 夹冒烟了](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E7%84%B6%20%E5%A4%B9%E5%86%92%E7%83%9F%E4%BA%86%23) `174.4K 🔥` `NEW`
1. [速滑小将摔倒失忆险些错过冬奥会](https://s.weibo.com/weibo?q=%23%E9%80%9F%E6%BB%91%E5%B0%8F%E5%B0%86%E6%91%94%E5%80%92%E5%A4%B1%E5%BF%86%E9%99%A9%E4%BA%9B%E9%94%99%E8%BF%87%E5%86%AC%E5%A5%A5%E4%BC%9A%23) `171.1K 🔥` `NEW`
1. [爱泼斯坦曾订购大量硫酸](https://s.weibo.com/weibo?q=%23%E7%88%B1%E6%B3%BC%E6%96%AF%E5%9D%A6%E6%9B%BE%E8%AE%A2%E8%B4%AD%E5%A4%A7%E9%87%8F%E7%A1%AB%E9%85%B8%23) `169.1K 🔥` `NEW`
1. [瑶一瑶小肉包1分钟视频报价45万](https://s.weibo.com/weibo?q=%23%E7%91%B6%E4%B8%80%E7%91%B6%E5%B0%8F%E8%82%89%E5%8C%851%E5%88%86%E9%92%9F%E8%A7%86%E9%A2%91%E6%8A%A5%E4%BB%B745%E4%B8%87%23) `166.5K 🔥` `NEW`
1. [河南一摊贩当街摔死多只兔子 (A street vendor in Henan killed several rabbits on the street)](https://s.weibo.com/weibo?q=%23%E6%B2%B3%E5%8D%97%E4%B8%80%E6%91%8A%E8%B4%A9%E5%BD%93%E8%A1%97%E6%91%94%E6%AD%BB%E5%A4%9A%E5%8F%AA%E5%85%94%E5%AD%90%23) `159.1K 🔥` `NEW`
1. [除夕夜iPhone降价](https://s.weibo.com/weibo?q=%23%E9%99%A4%E5%A4%95%E5%A4%9CiPhone%E9%99%8D%E4%BB%B7%23) `145.4K 🔥` `NEW`
1. [谷爱凌含泪说怕不能再滑雪了](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E5%90%AB%E6%B3%AA%E8%AF%B4%E6%80%95%E4%B8%8D%E8%83%BD%E5%86%8D%E6%BB%91%E9%9B%AA%E4%BA%86%23) `144.9K 🔥` `NEW`
1. [成何体统直播](https://s.weibo.com/weibo?q=%23%E6%88%90%E4%BD%95%E4%BD%93%E7%BB%9F%E7%9B%B4%E6%92%AD%23) `142.6K 🔥` `NEW`
1. [日本应在靖国神社等问题上谨言慎行](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E5%BA%94%E5%9C%A8%E9%9D%96%E5%9B%BD%E7%A5%9E%E7%A4%BE%E7%AD%89%E9%97%AE%E9%A2%98%E4%B8%8A%E8%B0%A8%E8%A8%80%E6%85%8E%E8%A1%8C%23) `130.5K 🔥` `NEW`
1. [王者荣耀貂蝉](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%80%85%E8%8D%A3%E8%80%80%E8%B2%82%E8%9D%89%23) `128.0K 🔥` `NEW`
1. [爱泼斯坦性侵案受害者在超级碗投广](https://s.weibo.com/weibo?q=%23%E7%88%B1%E6%B3%BC%E6%96%AF%E5%9D%A6%E6%80%A7%E4%BE%B5%E6%A1%88%E5%8F%97%E5%AE%B3%E8%80%85%E5%9C%A8%E8%B6%85%E7%BA%A7%E7%A2%97%E6%8A%95%E5%B9%BF%23) `124.5K 🔥` `NEW`
1. [许知远想让易烊千玺演梁启超](https://s.weibo.com/weibo?q=%23%E8%AE%B8%E7%9F%A5%E8%BF%9C%E6%83%B3%E8%AE%A9%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%E6%BC%94%E6%A2%81%E5%90%AF%E8%B6%85%23) `106.5K 🔥` `NEW`
1. [去了后不祛魅的城市](https://s.weibo.com/weibo?q=%23%E5%8E%BB%E4%BA%86%E5%90%8E%E4%B8%8D%E7%A5%9B%E9%AD%85%E7%9A%84%E5%9F%8E%E5%B8%82%23) `96.0K 🔥` `NEW`
1. [古天乐有轻度失忆](https://s.weibo.com/weibo?q=%23%E5%8F%A4%E5%A4%A9%E4%B9%90%E6%9C%89%E8%BD%BB%E5%BA%A6%E5%A4%B1%E5%BF%86%23) `95.8K 🔥` `NEW`
1. [蚂蚁阿福高铁春运文案 (Ant-Afu High-speed Railway Spring Festival Transport Copywriting)](https://s.weibo.com/weibo?q=%23%E8%9A%82%E8%9A%81%E9%98%BF%E7%A6%8F%E9%AB%98%E9%93%81%E6%98%A5%E8%BF%90%E6%96%87%E6%A1%88%23) `95.8K 🔥` `NEW`
1. [吉克隽逸 过年了老子要美翻全世界](https://s.weibo.com/weibo?q=%23%E5%90%89%E5%85%8B%E9%9A%BD%E9%80%B8%20%E8%BF%87%E5%B9%B4%E4%BA%86%E8%80%81%E5%AD%90%E8%A6%81%E7%BE%8E%E7%BF%BB%E5%85%A8%E4%B8%96%E7%95%8C%23) `95.8K 🔥` `NEW`
1. [中方回应高市赢得选举](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%96%B9%E5%9B%9E%E5%BA%94%E9%AB%98%E5%B8%82%E8%B5%A2%E5%BE%97%E9%80%89%E4%B8%BE%23) `94.2K 🔥` `NEW`
1. [貂蝉神骥聚万邦新皮肤爆料](https://s.weibo.com/weibo?q=%23%E8%B2%82%E8%9D%89%E7%A5%9E%E9%AA%A5%E8%81%9A%E4%B8%87%E9%82%A6%E6%96%B0%E7%9A%AE%E8%82%A4%E7%88%86%E6%96%99%23) `93.1K 🔥` `NEW`
1. [A股三大重磅来袭](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E4%B8%89%E5%A4%A7%E9%87%8D%E7%A3%85%E6%9D%A5%E8%A2%AD%23) `81.5K 🔥` `NEW`
1. [日本彻底右转](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E5%BD%BB%E5%BA%95%E5%8F%B3%E8%BD%AC%23) `894.7K 🔥` `+498%`
1. [周一请假和周五请假的区别](https://s.weibo.com/weibo?q=%23%E5%91%A8%E4%B8%80%E8%AF%B7%E5%81%87%E5%92%8C%E5%91%A8%E4%BA%94%E8%AF%B7%E5%81%87%E7%9A%84%E5%8C%BA%E5%88%AB%23) `269.1K 🔥` `+117%`
1. [吉赛尔否认和宁艺卓约会 (Gisele denies dating Ning Yizhuo)](https://s.weibo.com/weibo?q=%23%E5%90%89%E8%B5%9B%E5%B0%94%E5%90%A6%E8%AE%A4%E5%92%8C%E5%AE%81%E8%89%BA%E5%8D%93%E7%BA%A6%E4%BC%9A%23) `181.3K 🔥` `+70%`
1. [权珉娥医美后毁容](https://s.weibo.com/weibo?q=%23%E6%9D%83%E7%8F%89%E5%A8%A5%E5%8C%BB%E7%BE%8E%E5%90%8E%E6%AF%81%E5%AE%B9%23) `182.9K 🔥`
1. [黑诊所放血疗法地面血流成泊](https://s.weibo.com/weibo?q=%23%E9%BB%91%E8%AF%8A%E6%89%80%E6%94%BE%E8%A1%80%E7%96%97%E6%B3%95%E5%9C%B0%E9%9D%A2%E8%A1%80%E6%B5%81%E6%88%90%E6%B3%8A%23) `179.9K 🔥`
1. [瑶一瑶摆拍后一年掉粉近120万 (Yao Yiyao lost nearly 1.2 million followers in one year after posing for photos)](https://s.weibo.com/weibo?q=%23%E7%91%B6%E4%B8%80%E7%91%B6%E6%91%86%E6%8B%8D%E5%90%8E%E4%B8%80%E5%B9%B4%E6%8E%89%E7%B2%89%E8%BF%91120%E4%B8%87%23) `176.9K 🔥`
1. [爱泼斯坦案亚裔受害者曝性虐待细节](https://s.weibo.com/weibo?q=%23%E7%88%B1%E6%B3%BC%E6%96%AF%E5%9D%A6%E6%A1%88%E4%BA%9A%E8%A3%94%E5%8F%97%E5%AE%B3%E8%80%85%E6%9B%9D%E6%80%A7%E8%99%90%E5%BE%85%E7%BB%86%E8%8A%82%23) `175.9K 🔥`
1. [爱吃桃酥的人天塌了 (For those who love peach cakes, the sky is falling)](https://s.weibo.com/weibo?q=%23%E7%88%B1%E5%90%83%E6%A1%83%E9%85%A5%E7%9A%84%E4%BA%BA%E5%A4%A9%E5%A1%8C%E4%BA%86%23) `168.2K 🔥`
1. [孙颖莎亚洲杯夺冠后发文](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E4%BA%9A%E6%B4%B2%E6%9D%AF%E5%A4%BA%E5%86%A0%E5%90%8E%E5%8F%91%E6%96%87%23) `165.7K 🔥`
1. [黄金](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%23) `165.7K 🔥`
1. [沈佳润的资源](https://s.weibo.com/weibo?q=%23%E6%B2%88%E4%BD%B3%E6%B6%A6%E7%9A%84%E8%B5%84%E6%BA%90%23) `127.3K 🔥`
1. [对方拒绝催婚并跳了段舞蹈](https://s.weibo.com/weibo?q=%23%E5%AF%B9%E6%96%B9%E6%8B%92%E7%BB%9D%E5%82%AC%E5%A9%9A%E5%B9%B6%E8%B7%B3%E4%BA%86%E6%AE%B5%E8%88%9E%E8%B9%88%23) `114.5K 🔥`
1. [丑照全在骑手的手机里](https://s.weibo.com/weibo?q=%23%E4%B8%91%E7%85%A7%E5%85%A8%E5%9C%A8%E9%AA%91%E6%89%8B%E7%9A%84%E6%89%8B%E6%9C%BA%E9%87%8C%23) `88.5K 🔥`
1. [金饰价涨到1568元](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%A5%B0%E4%BB%B7%E6%B6%A8%E5%88%B01568%E5%85%83%23) `83.9K 🔥`
1. [大连地震 (Dalian earthquake)](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E8%BF%9E%E5%9C%B0%E9%9C%87%23) `1.2M 🔥` `-56%`
1. [蒙牛致敬骨子里要强的中国队 (Mengniu pays tribute to the Chinese team, which is stronger at heart)](https://s.weibo.com/weibo?q=%23%E8%92%99%E7%89%9B%E8%87%B4%E6%95%AC%E9%AA%A8%E5%AD%90%E9%87%8C%E8%A6%81%E5%BC%BA%E7%9A%84%E4%B8%AD%E5%9B%BD%E9%98%9F%23) `329.0K 🔥` `-21%`
1. [超级碗 (super bowl)](https://s.weibo.com/weibo?q=%23%E8%B6%85%E7%BA%A7%E7%A2%97%23) `273.9K 🔥` `-73%`
1. [星河入梦预售开启锁定入梦席位](https://s.weibo.com/weibo?q=%23%E6%98%9F%E6%B2%B3%E5%85%A5%E6%A2%A6%E9%A2%84%E5%94%AE%E5%BC%80%E5%90%AF%E9%94%81%E5%AE%9A%E5%85%A5%E6%A2%A6%E5%B8%AD%E4%BD%8D%23) `267.8K 🔥` `-26%`
1. [空气炸锅半年清洗一次](https://s.weibo.com/weibo?q=%23%E7%A9%BA%E6%B0%94%E7%82%B8%E9%94%85%E5%8D%8A%E5%B9%B4%E6%B8%85%E6%B4%97%E4%B8%80%E6%AC%A1%23) `183.2K 🔥` `-28%`
1. [迪丽热巴Hi6卷发上班路透](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4Hi6%E5%8D%B7%E5%8F%91%E4%B8%8A%E7%8F%AD%E8%B7%AF%E9%80%8F%23) `173.1K 🔥` `-30%`
1. [年后辞职我都不敢这么演 (I don’t dare to act like this even if I resign after the year)](https://s.weibo.com/weibo?q=%23%E5%B9%B4%E5%90%8E%E8%BE%9E%E8%81%8C%E6%88%91%E9%83%BD%E4%B8%8D%E6%95%A2%E8%BF%99%E4%B9%88%E6%BC%94%23) `172.0K 🔥` `-28%`
1. [朋友圈跳赞 (Like in Moments)](https://s.weibo.com/weibo?q=%23%E6%9C%8B%E5%8F%8B%E5%9C%88%E8%B7%B3%E8%B5%9E%23) `118.7K 🔥` `-30%`
1. [成何体统谢永儿吓晕了 (How unbecoming Xie Yong'er was so frightened that he fainted)](https://s.weibo.com/weibo?q=%23%E6%88%90%E4%BD%95%E4%BD%93%E7%BB%9F%E8%B0%A2%E6%B0%B8%E5%84%BF%E5%90%93%E6%99%95%E4%BA%86%23) `103.7K 🔥` `-29%`
1. [庄序你早这样林屿森都是你的 (Zhuang Xu, if you have been like this, Lin Yusen will be yours.)](https://s.weibo.com/weibo?q=%23%E5%BA%84%E5%BA%8F%E4%BD%A0%E6%97%A9%E8%BF%99%E6%A0%B7%E6%9E%97%E5%B1%BF%E6%A3%AE%E9%83%BD%E6%98%AF%E4%BD%A0%E7%9A%84%23) `95.8K 🔥` `-25%`
1. [史上最长的春节要来了](https://s.weibo.com/weibo?q=%23%E5%8F%B2%E4%B8%8A%E6%9C%80%E9%95%BF%E7%9A%84%E6%98%A5%E8%8A%82%E8%A6%81%E6%9D%A5%E4%BA%86%23) `94.3K 🔥` `-34%`
1. [爱泼斯坦案秘密照片曝光 (Secret photos from Epstein case revealed)](https://s.weibo.com/weibo?q=%23%E7%88%B1%E6%B3%BC%E6%96%AF%E5%9D%A6%E6%A1%88%E7%A7%98%E5%AF%86%E7%85%A7%E7%89%87%E6%9B%9D%E5%85%89%23) `86.4K 🔥` `-30%`
1. [迪丽热巴给粉丝点了奶茶面包鸡汤](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E7%BB%99%E7%B2%89%E4%B8%9D%E7%82%B9%E4%BA%86%E5%A5%B6%E8%8C%B6%E9%9D%A2%E5%8C%85%E9%B8%A1%E6%B1%A4%23) `80.9K 🔥` `-51%`

Updated at 2026-02-09 16:28:11

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
