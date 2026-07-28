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

1. [网红书记带货知了猴被指破坏生态 (The Internet celebrity secretary who brought goods to the cicada monkey was accused of destroying the ecology)](https://s.weibo.com/weibo?q=%23%E7%BD%91%E7%BA%A2%E4%B9%A6%E8%AE%B0%E5%B8%A6%E8%B4%A7%E7%9F%A5%E4%BA%86%E7%8C%B4%E8%A2%AB%E6%8C%87%E7%A0%B4%E5%9D%8F%E7%94%9F%E6%80%81%23) `1.2M 🔥` `NEW`
1. [王虹 推荐信](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%99%B9%20%E6%8E%A8%E8%8D%90%E4%BF%A1%23) `1.2M 🔥` `NEW`
1. [紧急预拨1.8亿元支持6省防汛防台风](https://s.weibo.com/weibo?q=%23%E7%B4%A7%E6%80%A5%E9%A2%84%E6%8B%A81.8%E4%BA%BF%E5%85%83%E6%94%AF%E6%8C%816%E7%9C%81%E9%98%B2%E6%B1%9B%E9%98%B2%E5%8F%B0%E9%A3%8E%23) `1.1M 🔥` `NEW`
1. [租客曝全家总生病揭开墙布全屋发霉](https://s.weibo.com/weibo?q=%23%E7%A7%9F%E5%AE%A2%E6%9B%9D%E5%85%A8%E5%AE%B6%E6%80%BB%E7%94%9F%E7%97%85%E6%8F%AD%E5%BC%80%E5%A2%99%E5%B8%83%E5%85%A8%E5%B1%8B%E5%8F%91%E9%9C%89%23) `1.1M 🔥` `NEW`
1. [携程全员信曝光](https://s.weibo.com/weibo?q=%23%E6%90%BA%E7%A8%8B%E5%85%A8%E5%91%98%E4%BF%A1%E6%9B%9D%E5%85%89%23) `512.7K 🔥` `NEW`
1. [网络辟谣标签](https://s.weibo.com/weibo?q=%23%E7%BD%91%E7%BB%9C%E8%BE%9F%E8%B0%A3%E6%A0%87%E7%AD%BE%23) `508.9K 🔥` `NEW`
1. [长鑫科技跌超7%](https://s.weibo.com/weibo?q=%23%E9%95%BF%E9%91%AB%E7%A7%91%E6%8A%80%E8%B7%8C%E8%B6%857%25%23) `506.6K 🔥` `NEW`
1. [周星驰不再演戏的原因](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%98%9F%E9%A9%B0%E4%B8%8D%E5%86%8D%E6%BC%94%E6%88%8F%E7%9A%84%E5%8E%9F%E5%9B%A0%23) `425.9K 🔥` `NEW`
1. [詹姆斯下赛季或直升机通勤](https://s.weibo.com/weibo?q=%23%E8%A9%B9%E5%A7%86%E6%96%AF%E4%B8%8B%E8%B5%9B%E5%AD%A3%E6%88%96%E7%9B%B4%E5%8D%87%E6%9C%BA%E9%80%9A%E5%8B%A4%23) `398.5K 🔥` `NEW`
1. [杨天真 切胃瘦了但迅速又胖了](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%A4%A9%E7%9C%9F%20%E5%88%87%E8%83%83%E7%98%A6%E4%BA%86%E4%BD%86%E8%BF%85%E9%80%9F%E5%8F%88%E8%83%96%E4%BA%86%23) `389.1K 🔥` `NEW`
1. [衡水市成立联合调查组 (Hengshui City sets up joint investigation team)](https://s.weibo.com/weibo?q=%23%E8%A1%A1%E6%B0%B4%E5%B8%82%E6%88%90%E7%AB%8B%E8%81%94%E5%90%88%E8%B0%83%E6%9F%A5%E7%BB%84%23) `382.4K 🔥` `NEW`
1. [浙江宣传批李权哲高铁霸座](https://s.weibo.com/weibo?q=%23%E6%B5%99%E6%B1%9F%E5%AE%A3%E4%BC%A0%E6%89%B9%E6%9D%8E%E6%9D%83%E5%93%B2%E9%AB%98%E9%93%81%E9%9C%B8%E5%BA%A7%23) `371.5K 🔥` `NEW`
1. [170万理财亏166万银行被判无责](https://s.weibo.com/weibo?q=%23170%E4%B8%87%E7%90%86%E8%B4%A2%E4%BA%8F166%E4%B8%87%E9%93%B6%E8%A1%8C%E8%A2%AB%E5%88%A4%E6%97%A0%E8%B4%A3%23) `360.2K 🔥` `NEW`
1. [佛得角后卫轰出世界杯最佳进球](https://s.weibo.com/weibo?q=%23%E4%BD%9B%E5%BE%97%E8%A7%92%E5%90%8E%E5%8D%AB%E8%BD%B0%E5%87%BA%E4%B8%96%E7%95%8C%E6%9D%AF%E6%9C%80%E4%BD%B3%E8%BF%9B%E7%90%83%23) `357.3K 🔥` `NEW`
1. [王濛在伦敦机车被贴罚单](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BF%9B%E5%9C%A8%E4%BC%A6%E6%95%A6%E6%9C%BA%E8%BD%A6%E8%A2%AB%E8%B4%B4%E7%BD%9A%E5%8D%95%23) `346.7K 🔥` `NEW`
1. [谢霆锋演唱会大雨不打伞](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E9%9C%86%E9%94%8B%E6%BC%94%E5%94%B1%E4%BC%9A%E5%A4%A7%E9%9B%A8%E4%B8%8D%E6%89%93%E4%BC%9E%23) `342.8K 🔥` `NEW`
1. [今年震生50岁了](https://s.weibo.com/weibo?q=%23%E4%BB%8A%E5%B9%B4%E9%9C%87%E7%94%9F50%E5%B2%81%E4%BA%86%23) `335.3K 🔥` `NEW`
1. [姚昱辰济南大学生物制药专业](https://s.weibo.com/weibo?q=%23%E5%A7%9A%E6%98%B1%E8%BE%B0%E6%B5%8E%E5%8D%97%E5%A4%A7%E5%AD%A6%E7%94%9F%E7%89%A9%E5%88%B6%E8%8D%AF%E4%B8%93%E4%B8%9A%23) `317.8K 🔥` `NEW`
1. [余承东官宣尊界发布会](https://s.weibo.com/weibo?q=%23%E4%BD%99%E6%89%BF%E4%B8%9C%E5%AE%98%E5%AE%A3%E5%B0%8A%E7%95%8C%E5%8F%91%E5%B8%83%E4%BC%9A%23) `316.0K 🔥` `NEW`
1. [金鹰奖](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%B9%B0%E5%A5%96%23) `305.0K 🔥` `NEW`
1. [电视开始播放AI剧集了 (TV starts to play AI dramas)](https://s.weibo.com/weibo?q=%23%E7%94%B5%E8%A7%86%E5%BC%80%E5%A7%8B%E6%92%AD%E6%94%BEAI%E5%89%A7%E9%9B%86%E4%BA%86%23) `285.1K 🔥` `NEW`
1. [A股](https://s.weibo.com/weibo?q=%23A%E8%82%A1%23) `282.3K 🔥` `NEW`
1. [在外一定要注意幸福者退让原则](https://s.weibo.com/weibo?q=%23%E5%9C%A8%E5%A4%96%E4%B8%80%E5%AE%9A%E8%A6%81%E6%B3%A8%E6%84%8F%E5%B9%B8%E7%A6%8F%E8%80%85%E9%80%80%E8%AE%A9%E5%8E%9F%E5%88%99%23) `280.3K 🔥` `NEW`
1. [王虹演讲院士导师背着破洞包站窗外](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%99%B9%E6%BC%94%E8%AE%B2%E9%99%A2%E5%A3%AB%E5%AF%BC%E5%B8%88%E8%83%8C%E7%9D%80%E7%A0%B4%E6%B4%9E%E5%8C%85%E7%AB%99%E7%AA%97%E5%A4%96%23) `272.5K 🔥` `NEW`
1. [广西日报好会写标题](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E8%A5%BF%E6%97%A5%E6%8A%A5%E5%A5%BD%E4%BC%9A%E5%86%99%E6%A0%87%E9%A2%98%23) `269.7K 🔥` `NEW`
1. [超8成肠癌患者长期高脂高蛋白饮食](https://s.weibo.com/weibo?q=%23%E8%B6%858%E6%88%90%E8%82%A0%E7%99%8C%E6%82%A3%E8%80%85%E9%95%BF%E6%9C%9F%E9%AB%98%E8%84%82%E9%AB%98%E8%9B%8B%E7%99%BD%E9%A5%AE%E9%A3%9F%23) `262.5K 🔥` `NEW`
1. [黄灿灿丑美甲续集](https://s.weibo.com/weibo?q=%23%E9%BB%84%E7%81%BF%E7%81%BF%E4%B8%91%E7%BE%8E%E7%94%B2%E7%BB%AD%E9%9B%86%23) `247.0K 🔥` `NEW`
1. [真正消耗你情绪的都是身边人](https://s.weibo.com/weibo?q=%23%E7%9C%9F%E6%AD%A3%E6%B6%88%E8%80%97%E4%BD%A0%E6%83%85%E7%BB%AA%E7%9A%84%E9%83%BD%E6%98%AF%E8%BA%AB%E8%BE%B9%E4%BA%BA%23) `242.5K 🔥` `NEW`
1. [鞠婧祎连水珠都像加上的雀斑](https://s.weibo.com/weibo?q=%23%E9%9E%A0%E5%A9%A7%E7%A5%8E%E8%BF%9E%E6%B0%B4%E7%8F%A0%E9%83%BD%E5%83%8F%E5%8A%A0%E4%B8%8A%E7%9A%84%E9%9B%80%E6%96%91%23) `235.0K 🔥` `NEW`
1. [刘若英儿子长这么高了](https://s.weibo.com/weibo?q=%23%E5%88%98%E8%8B%A5%E8%8B%B1%E5%84%BF%E5%AD%90%E9%95%BF%E8%BF%99%E4%B9%88%E9%AB%98%E4%BA%86%23) `233.9K 🔥` `NEW`
1. [双胞胎相差1分被北大清华录取 (Twins admitted to Peking University and Tsinghua University with 1 point difference)](https://s.weibo.com/weibo?q=%23%E5%8F%8C%E8%83%9E%E8%83%8E%E7%9B%B8%E5%B7%AE1%E5%88%86%E8%A2%AB%E5%8C%97%E5%A4%A7%E6%B8%85%E5%8D%8E%E5%BD%95%E5%8F%96%23) `204.4K 🔥` `NEW`
1. [张凌赫回应想演反派](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%9B%9E%E5%BA%94%E6%83%B3%E6%BC%94%E5%8F%8D%E6%B4%BE%23) `203.2K 🔥` `NEW`
1. [AI终于知道自己很难超人类了](https://s.weibo.com/weibo?q=%23AI%E7%BB%88%E4%BA%8E%E7%9F%A5%E9%81%93%E8%87%AA%E5%B7%B1%E5%BE%88%E9%9A%BE%E8%B6%85%E4%BA%BA%E7%B1%BB%E4%BA%86%23) `201.5K 🔥` `NEW`
1. [陈伟霆曾舜晞护剧](https://s.weibo.com/weibo?q=%23%E9%99%88%E4%BC%9F%E9%9C%86%E6%9B%BE%E8%88%9C%E6%99%9E%E6%8A%A4%E5%89%A7%23) `199.3K 🔥` `NEW`
1. [时代少年团听到不能天天洗澡的反应](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E5%90%AC%E5%88%B0%E4%B8%8D%E8%83%BD%E5%A4%A9%E5%A4%A9%E6%B4%97%E6%BE%A1%E7%9A%84%E5%8F%8D%E5%BA%94%23) `195.9K 🔥` `NEW`
1. [高市早苗言论引爆日本舆论](https://s.weibo.com/weibo?q=%23%E9%AB%98%E5%B8%82%E6%97%A9%E8%8B%97%E8%A8%80%E8%AE%BA%E5%BC%95%E7%88%86%E6%97%A5%E6%9C%AC%E8%88%86%E8%AE%BA%23) `195.1K 🔥` `NEW`
1. [詹姆斯控球后卫](https://s.weibo.com/weibo?q=%23%E8%A9%B9%E5%A7%86%E6%96%AF%E6%8E%A7%E7%90%83%E5%90%8E%E5%8D%AB%23) `149.0K 🔥` `NEW`
1. [旅行搭子已经进化到这种程度了](https://s.weibo.com/weibo?q=%23%E6%97%85%E8%A1%8C%E6%90%AD%E5%AD%90%E5%B7%B2%E7%BB%8F%E8%BF%9B%E5%8C%96%E5%88%B0%E8%BF%99%E7%A7%8D%E7%A8%8B%E5%BA%A6%E4%BA%86%23) `144.7K 🔥` `NEW`
1. [樊振东领衔杜塞兄弟团即将出发](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E9%A2%86%E8%A1%94%E6%9D%9C%E5%A1%9E%E5%85%84%E5%BC%9F%E5%9B%A2%E5%8D%B3%E5%B0%86%E5%87%BA%E5%8F%91%23) `143.8K 🔥` `NEW`
1. [徐洁云辟谣雷军打新长鑫科技狂赚7亿](https://s.weibo.com/weibo?q=%23%E5%BE%90%E6%B4%81%E4%BA%91%E8%BE%9F%E8%B0%A3%E9%9B%B7%E5%86%9B%E6%89%93%E6%96%B0%E9%95%BF%E9%91%AB%E7%A7%91%E6%8A%80%E7%8B%82%E8%B5%9A7%E4%BA%BF%23) `143.7K 🔥` `NEW`
1. [LV中国业绩未好转疑与诉讼有关 (LV China’s poor performance is suspected to be related to litigation)](https://s.weibo.com/weibo?q=%23LV%E4%B8%AD%E5%9B%BD%E4%B8%9A%E7%BB%A9%E6%9C%AA%E5%A5%BD%E8%BD%AC%E7%96%91%E4%B8%8E%E8%AF%89%E8%AE%BC%E6%9C%89%E5%85%B3%23) `143.6K 🔥` `NEW`
1. [肠癌有两个特点](https://s.weibo.com/weibo?q=%23%E8%82%A0%E7%99%8C%E6%9C%89%E4%B8%A4%E4%B8%AA%E7%89%B9%E7%82%B9%23) `867.4K 🔥` `+176%`
1. [林志颖的基因彩票还在发力](https://s.weibo.com/weibo?q=%23%E6%9E%97%E5%BF%97%E9%A2%96%E7%9A%84%E5%9F%BA%E5%9B%A0%E5%BD%A9%E7%A5%A8%E8%BF%98%E5%9C%A8%E5%8F%91%E5%8A%9B%23) `395.4K 🔥` `+27%`
1. [谢霆锋真的好像妈妈狄波拉](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E9%9C%86%E9%94%8B%E7%9C%9F%E7%9A%84%E5%A5%BD%E5%83%8F%E5%A6%88%E5%A6%88%E7%8B%84%E6%B3%A2%E6%8B%89%23) `366.8K 🔥`
1. [李宏毅后援会会长正式提出辞职](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%AE%8F%E6%AF%85%E5%90%8E%E6%8F%B4%E4%BC%9A%E4%BC%9A%E9%95%BF%E6%AD%A3%E5%BC%8F%E6%8F%90%E5%87%BA%E8%BE%9E%E8%81%8C%23) `329.2K 🔥`
1. [唐山大地震50周年](https://s.weibo.com/weibo?q=%23%E5%94%90%E5%B1%B1%E5%A4%A7%E5%9C%B0%E9%9C%8750%E5%91%A8%E5%B9%B4%23) `276.8K 🔥`
1. [金鹰奖 提名名单 (Golden Eagle Award Nomination List)](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%B9%B0%E5%A5%96%20%E6%8F%90%E5%90%8D%E5%90%8D%E5%8D%95%23) `483.7K 🔥` `-42%`
1. [超过五年没联系的朋友直接删](https://s.weibo.com/weibo?q=%23%E8%B6%85%E8%BF%87%E4%BA%94%E5%B9%B4%E6%B2%A1%E8%81%94%E7%B3%BB%E7%9A%84%E6%9C%8B%E5%8F%8B%E7%9B%B4%E6%8E%A5%E5%88%A0%23) `281.7K 🔥` `-66%`
1. [影视寒冬哥哥们伙食倒是迎春了 (In the cold winter of film and television, brothers, the food is ready to welcome the spring.)](https://s.weibo.com/weibo?q=%23%E5%BD%B1%E8%A7%86%E5%AF%92%E5%86%AC%E5%93%A5%E5%93%A5%E4%BB%AC%E4%BC%99%E9%A3%9F%E5%80%92%E6%98%AF%E8%BF%8E%E6%98%A5%E4%BA%86%23) `192.8K 🔥` `-33%`
1. [父子景区划桨板遇台风落水爸爸去世 (Father and son paddleboarding in scenic spot fell into water during typhoon, father died)](https://s.weibo.com/weibo?q=%23%E7%88%B6%E5%AD%90%E6%99%AF%E5%8C%BA%E5%88%92%E6%A1%A8%E6%9D%BF%E9%81%87%E5%8F%B0%E9%A3%8E%E8%90%BD%E6%B0%B4%E7%88%B8%E7%88%B8%E5%8E%BB%E4%B8%96%23) `183.0K 🔥` `-68%`
1. [摊位脏臭但11岁杀鱼女孩满面笑容 (The stall is dirty and smelly, but the 11-year-old fish-killing girl is all smiles)](https://s.weibo.com/weibo?q=%23%E6%91%8A%E4%BD%8D%E8%84%8F%E8%87%AD%E4%BD%8611%E5%B2%81%E6%9D%80%E9%B1%BC%E5%A5%B3%E5%AD%A9%E6%BB%A1%E9%9D%A2%E7%AC%91%E5%AE%B9%23) `180.5K 🔥` `-46%`

Updated at 2026-07-28 11:17:32

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
