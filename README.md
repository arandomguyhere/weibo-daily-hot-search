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

1. [地震50年后突然搜到已故父亲名字 (Fifty years after the earthquake, my late father’s name was suddenly found)](https://s.weibo.com/weibo?q=%23%E5%9C%B0%E9%9C%8750%E5%B9%B4%E5%90%8E%E7%AA%81%E7%84%B6%E6%90%9C%E5%88%B0%E5%B7%B2%E6%95%85%E7%88%B6%E4%BA%B2%E5%90%8D%E5%AD%97%23) `1.2M 🔥` `NEW`
1. [北大教授雷军为王虹写推荐信](https://s.weibo.com/weibo?q=%23%E5%8C%97%E5%A4%A7%E6%95%99%E6%8E%88%E9%9B%B7%E5%86%9B%E4%B8%BA%E7%8E%8B%E8%99%B9%E5%86%99%E6%8E%A8%E8%8D%90%E4%BF%A1%23) `853.0K 🔥` `NEW`
1. [改善脖子前倾最简单的动作](https://s.weibo.com/weibo?q=%23%E6%94%B9%E5%96%84%E8%84%96%E5%AD%90%E5%89%8D%E5%80%BE%E6%9C%80%E7%AE%80%E5%8D%95%E7%9A%84%E5%8A%A8%E4%BD%9C%23) `634.1K 🔥` `NEW`
1. [在张雅琪身上看到了自己的同事](https://s.weibo.com/weibo?q=%23%E5%9C%A8%E5%BC%A0%E9%9B%85%E7%90%AA%E8%BA%AB%E4%B8%8A%E7%9C%8B%E5%88%B0%E4%BA%86%E8%87%AA%E5%B7%B1%E7%9A%84%E5%90%8C%E4%BA%8B%23) `624.1K 🔥` `NEW`
1. [小米展出澎程6万公里路测车](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E5%B1%95%E5%87%BA%E6%BE%8E%E7%A8%8B6%E4%B8%87%E5%85%AC%E9%87%8C%E8%B7%AF%E6%B5%8B%E8%BD%A6%23) `590.9K 🔥` `NEW`
1. [第二代身份证会被消磁系谣言](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%BA%8C%E4%BB%A3%E8%BA%AB%E4%BB%BD%E8%AF%81%E4%BC%9A%E8%A2%AB%E6%B6%88%E7%A3%81%E7%B3%BB%E8%B0%A3%E8%A8%80%23) `556.4K 🔥` `NEW`
1. [青海地震](https://s.weibo.com/weibo?q=%23%E9%9D%92%E6%B5%B7%E5%9C%B0%E9%9C%87%23) `544.2K 🔥` `NEW`
1. [御廷谣没播](https://s.weibo.com/weibo?q=%23%E5%BE%A1%E5%BB%B7%E8%B0%A3%E6%B2%A1%E6%92%AD%23) `350.5K 🔥` `NEW`
1. [刘亦菲素颜女大](https://s.weibo.com/weibo?q=%23%E5%88%98%E4%BA%A6%E8%8F%B2%E7%B4%A0%E9%A2%9C%E5%A5%B3%E5%A4%A7%23) `347.5K 🔥` `NEW`
1. [禁止涉军队退役报废装备销售活动](https://s.weibo.com/weibo?q=%23%E7%A6%81%E6%AD%A2%E6%B6%89%E5%86%9B%E9%98%9F%E9%80%80%E5%BD%B9%E6%8A%A5%E5%BA%9F%E8%A3%85%E5%A4%87%E9%94%80%E5%94%AE%E6%B4%BB%E5%8A%A8%23) `344.6K 🔥` `NEW`
1. [王祖蓝俩女儿颜值 (The appearance of Wang Zulan’s two daughters)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E7%A5%96%E8%93%9D%E4%BF%A9%E5%A5%B3%E5%84%BF%E9%A2%9C%E5%80%BC%23) `343.8K 🔥` `NEW`
1. [全球芯片股暴跌原因找到了](https://s.weibo.com/weibo?q=%23%E5%85%A8%E7%90%83%E8%8A%AF%E7%89%87%E8%82%A1%E6%9A%B4%E8%B7%8C%E5%8E%9F%E5%9B%A0%E6%89%BE%E5%88%B0%E4%BA%86%23) `340.5K 🔥` `NEW`
1. [黄磊小儿子长得好像黄磊](https://s.weibo.com/weibo?q=%23%E9%BB%84%E7%A3%8A%E5%B0%8F%E5%84%BF%E5%AD%90%E9%95%BF%E5%BE%97%E5%A5%BD%E5%83%8F%E9%BB%84%E7%A3%8A%23) `339.4K 🔥` `NEW`
1. [白鹿丞磊王楚然包场陈哲远新剧](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E4%B8%9E%E7%A3%8A%E7%8E%8B%E6%A5%9A%E7%84%B6%E5%8C%85%E5%9C%BA%E9%99%88%E5%93%B2%E8%BF%9C%E6%96%B0%E5%89%A7%23) `337.8K 🔥` `NEW`
1. [爱情公寓真的太超前了](https://s.weibo.com/weibo?q=%23%E7%88%B1%E6%83%85%E5%85%AC%E5%AF%93%E7%9C%9F%E7%9A%84%E5%A4%AA%E8%B6%85%E5%89%8D%E4%BA%86%23) `335.9K 🔥` `NEW`
1. [詹姆斯引用中国名言却写错出处](https://s.weibo.com/weibo?q=%23%E8%A9%B9%E5%A7%86%E6%96%AF%E5%BC%95%E7%94%A8%E4%B8%AD%E5%9B%BD%E5%90%8D%E8%A8%80%E5%8D%B4%E5%86%99%E9%94%99%E5%87%BA%E5%A4%84%23) `334.5K 🔥` `NEW`
1. [多国掀起反印度移民浪潮](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E5%9B%BD%E6%8E%80%E8%B5%B7%E5%8F%8D%E5%8D%B0%E5%BA%A6%E7%A7%BB%E6%B0%91%E6%B5%AA%E6%BD%AE%23) `332.0K 🔥` `NEW`
1. [当我发现同事是伪人](https://s.weibo.com/weibo?q=%23%E5%BD%93%E6%88%91%E5%8F%91%E7%8E%B0%E5%90%8C%E4%BA%8B%E6%98%AF%E4%BC%AA%E4%BA%BA%23) `330.2K 🔥` `NEW`
1. [18楼坠楼女子家属拒男友探视](https://s.weibo.com/weibo?q=%2318%E6%A5%BC%E5%9D%A0%E6%A5%BC%E5%A5%B3%E5%AD%90%E5%AE%B6%E5%B1%9E%E6%8B%92%E7%94%B7%E5%8F%8B%E6%8E%A2%E8%A7%86%23) `329.9K 🔥` `NEW`
1. [官方通报价值8亿学校股权以2元转让](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E9%80%9A%E6%8A%A5%E4%BB%B7%E5%80%BC8%E4%BA%BF%E5%AD%A6%E6%A0%A1%E8%82%A1%E6%9D%83%E4%BB%A52%E5%85%83%E8%BD%AC%E8%AE%A9%23) `327.9K 🔥` `NEW`
1. [网红景区10人遇难3次预警为何失效 (Why did 3 early warnings for 10 people killed in an Internet celebrity scenic spot fail?)](https://s.weibo.com/weibo?q=%23%E7%BD%91%E7%BA%A2%E6%99%AF%E5%8C%BA10%E4%BA%BA%E9%81%87%E9%9A%BE3%E6%AC%A1%E9%A2%84%E8%AD%A6%E4%B8%BA%E4%BD%95%E5%A4%B1%E6%95%88%23) `324.6K 🔥` `NEW`
1. [AI漫剧就是一场巨大的侵权事件](https://s.weibo.com/weibo?q=%23AI%E6%BC%AB%E5%89%A7%E5%B0%B1%E6%98%AF%E4%B8%80%E5%9C%BA%E5%B7%A8%E5%A4%A7%E7%9A%84%E4%BE%B5%E6%9D%83%E4%BA%8B%E4%BB%B6%23) `323.3K 🔥` `NEW`
1. [内娱来了三个手电筒](https://s.weibo.com/weibo?q=%23%E5%86%85%E5%A8%B1%E6%9D%A5%E4%BA%86%E4%B8%89%E4%B8%AA%E6%89%8B%E7%94%B5%E7%AD%92%23) `322.0K 🔥` `NEW`
1. [御廷谣](https://s.weibo.com/weibo?q=%23%E5%BE%A1%E5%BB%B7%E8%B0%A3%23) `318.7K 🔥` `NEW`
1. [王虹北大录取照与巴黎理工学生照](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%99%B9%E5%8C%97%E5%A4%A7%E5%BD%95%E5%8F%96%E7%85%A7%E4%B8%8E%E5%B7%B4%E9%BB%8E%E7%90%86%E5%B7%A5%E5%AD%A6%E7%94%9F%E7%85%A7%23) `317.1K 🔥` `NEW`
1. [妈妈回应买大路灯孩子视力1年涨200度](https://s.weibo.com/weibo?q=%23%E5%A6%88%E5%A6%88%E5%9B%9E%E5%BA%94%E4%B9%B0%E5%A4%A7%E8%B7%AF%E7%81%AF%E5%AD%A9%E5%AD%90%E8%A7%86%E5%8A%9B1%E5%B9%B4%E6%B6%A8200%E5%BA%A6%23) `314.6K 🔥` `NEW`
1. [空调吹多了产生能出门的错觉](https://s.weibo.com/weibo?q=%23%E7%A9%BA%E8%B0%83%E5%90%B9%E5%A4%9A%E4%BA%86%E4%BA%A7%E7%94%9F%E8%83%BD%E5%87%BA%E9%97%A8%E7%9A%84%E9%94%99%E8%A7%89%23) `313.8K 🔥` `NEW`
1. [袁一琦真的面试了花少](https://s.weibo.com/weibo?q=%23%E8%A2%81%E4%B8%80%E7%90%A6%E7%9C%9F%E7%9A%84%E9%9D%A2%E8%AF%95%E4%BA%86%E8%8A%B1%E5%B0%91%23) `310.6K 🔥` `NEW`
1. [上半年个税收入9000亿](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E5%8D%8A%E5%B9%B4%E4%B8%AA%E7%A8%8E%E6%94%B6%E5%85%A59000%E4%BA%BF%23) `308.9K 🔥` `NEW`
1. [东野圭吾到底留下多少钱](https://s.weibo.com/weibo?q=%23%E4%B8%9C%E9%87%8E%E5%9C%AD%E5%90%BE%E5%88%B0%E5%BA%95%E7%95%99%E4%B8%8B%E5%A4%9A%E5%B0%91%E9%92%B1%23) `307.9K 🔥` `NEW`
1. [江山为聘改名御廷谣 (Jiang Shanwei changed his name to Yu Tingyao)](https://s.weibo.com/weibo?q=%23%E6%B1%9F%E5%B1%B1%E4%B8%BA%E8%81%98%E6%94%B9%E5%90%8D%E5%BE%A1%E5%BB%B7%E8%B0%A3%23) `303.6K 🔥` `NEW`
1. [每天的工作状态belike](https://s.weibo.com/weibo?q=%23%E6%AF%8F%E5%A4%A9%E7%9A%84%E5%B7%A5%E4%BD%9C%E7%8A%B6%E6%80%81belike%23) `302.9K 🔥` `NEW`
1. [美反华机构竟宣称每年都要来中国](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%8F%8D%E5%8D%8E%E6%9C%BA%E6%9E%84%E7%AB%9F%E5%AE%A3%E7%A7%B0%E6%AF%8F%E5%B9%B4%E9%83%BD%E8%A6%81%E6%9D%A5%E4%B8%AD%E5%9B%BD%23) `301.6K 🔥` `NEW`
1. [真正的少女心事是不甘人后的野心](https://s.weibo.com/weibo?q=%23%E7%9C%9F%E6%AD%A3%E7%9A%84%E5%B0%91%E5%A5%B3%E5%BF%83%E4%BA%8B%E6%98%AF%E4%B8%8D%E7%94%98%E4%BA%BA%E5%90%8E%E7%9A%84%E9%87%8E%E5%BF%83%23) `298.9K 🔥` `NEW`
1. [交警被强行冲卡货车碾压牺牲](https://s.weibo.com/weibo?q=%23%E4%BA%A4%E8%AD%A6%E8%A2%AB%E5%BC%BA%E8%A1%8C%E5%86%B2%E5%8D%A1%E8%B4%A7%E8%BD%A6%E7%A2%BE%E5%8E%8B%E7%89%BA%E7%89%B2%23) `297.5K 🔥` `NEW`
1. [陈哲远吴谨言新剧预告](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%93%B2%E8%BF%9C%E5%90%B4%E8%B0%A8%E8%A8%80%E6%96%B0%E5%89%A7%E9%A2%84%E5%91%8A%23) `295.4K 🔥` `NEW`
1. [LV在华业绩](https://s.weibo.com/weibo?q=%23LV%E5%9C%A8%E5%8D%8E%E4%B8%9A%E7%BB%A9%23) `293.2K 🔥` `NEW`
1. [你好星期六直播](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E5%A5%BD%E6%98%9F%E6%9C%9F%E5%85%AD%E7%9B%B4%E6%92%AD%23) `292.0K 🔥` `NEW`
1. [世界杯决赛后立刻挂哨的两位裁判](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%E5%86%B3%E8%B5%9B%E5%90%8E%E7%AB%8B%E5%88%BB%E6%8C%82%E5%93%A8%E7%9A%84%E4%B8%A4%E4%BD%8D%E8%A3%81%E5%88%A4%23) `289.7K 🔥` `NEW`
1. [不想洗手却想摸小狗](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E6%83%B3%E6%B4%97%E6%89%8B%E5%8D%B4%E6%83%B3%E6%91%B8%E5%B0%8F%E7%8B%97%23) `289.3K 🔥` `NEW`
1. [纽约中央公园出轨门男女身份确认 (The identity of the man and woman behind the cheating scandal in New York's Central Park has been confirmed)](https://s.weibo.com/weibo?q=%23%E7%BA%BD%E7%BA%A6%E4%B8%AD%E5%A4%AE%E5%85%AC%E5%9B%AD%E5%87%BA%E8%BD%A8%E9%97%A8%E7%94%B7%E5%A5%B3%E8%BA%AB%E4%BB%BD%E7%A1%AE%E8%AE%A4%23) `287.0K 🔥` `NEW`
1. [高市早苗言论引爆日本舆论](https://s.weibo.com/weibo?q=%23%E9%AB%98%E5%B8%82%E6%97%A9%E8%8B%97%E8%A8%80%E8%AE%BA%E5%BC%95%E7%88%86%E6%97%A5%E6%9C%AC%E8%88%86%E8%AE%BA%23) `404.7K 🔥` `+107%`
1. [詹姆斯下赛季或直升机通勤](https://s.weibo.com/weibo?q=%23%E8%A9%B9%E5%A7%86%E6%96%AF%E4%B8%8B%E8%B5%9B%E5%AD%A3%E6%88%96%E7%9B%B4%E5%8D%87%E6%9C%BA%E9%80%9A%E5%8B%A4%23) `350.0K 🔥`
1. [杨天真 切胃瘦了但迅速又胖了](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%A4%A9%E7%9C%9F%20%E5%88%87%E8%83%83%E7%98%A6%E4%BA%86%E4%BD%86%E8%BF%85%E9%80%9F%E5%8F%88%E8%83%96%E4%BA%86%23) `347.3K 🔥`
1. [林志颖的基因彩票还在发力](https://s.weibo.com/weibo?q=%23%E6%9E%97%E5%BF%97%E9%A2%96%E7%9A%84%E5%9F%BA%E5%9B%A0%E5%BD%A9%E7%A5%A8%E8%BF%98%E5%9C%A8%E5%8F%91%E5%8A%9B%23) `341.4K 🔥`
1. [佛得角后卫轰出世界杯最佳进球](https://s.weibo.com/weibo?q=%23%E4%BD%9B%E5%BE%97%E8%A7%92%E5%90%8E%E5%8D%AB%E8%BD%B0%E5%87%BA%E4%B8%96%E7%95%8C%E6%9D%AF%E6%9C%80%E4%BD%B3%E8%BF%9B%E7%90%83%23) `319.2K 🔥`
1. [紧急预拨1.8亿元支持6省防汛防台风](https://s.weibo.com/weibo?q=%23%E7%B4%A7%E6%80%A5%E9%A2%84%E6%8B%A81.8%E4%BA%BF%E5%85%83%E6%94%AF%E6%8C%816%E7%9C%81%E9%98%B2%E6%B1%9B%E9%98%B2%E5%8F%B0%E9%A3%8E%23) `658.4K 🔥` `-42%`
1. [网红书记带货知了猴被指破坏生态 (The Internet celebrity secretary who brought goods to the cicada monkey was accused of destroying the ecology)](https://s.weibo.com/weibo?q=%23%E7%BD%91%E7%BA%A2%E4%B9%A6%E8%AE%B0%E5%B8%A6%E8%B4%A7%E7%9F%A5%E4%BA%86%E7%8C%B4%E8%A2%AB%E6%8C%87%E7%A0%B4%E5%9D%8F%E7%94%9F%E6%80%81%23) `326.6K 🔥` `-72%`
1. [租客曝全家总生病揭开墙布全屋发霉](https://s.weibo.com/weibo?q=%23%E7%A7%9F%E5%AE%A2%E6%9B%9D%E5%85%A8%E5%AE%B6%E6%80%BB%E7%94%9F%E7%97%85%E6%8F%AD%E5%BC%80%E5%A2%99%E5%B8%83%E5%85%A8%E5%B1%8B%E5%8F%91%E9%9C%89%23) `311.8K 🔥` `-72%`
1. [肠癌有两个特点](https://s.weibo.com/weibo?q=%23%E8%82%A0%E7%99%8C%E6%9C%89%E4%B8%A4%E4%B8%AA%E7%89%B9%E7%82%B9%23) `306.0K 🔥` `-65%`
1. [金鹰奖 提名名单 (Golden Eagle Award Nomination List)](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%B9%B0%E5%A5%96%20%E6%8F%90%E5%90%8D%E5%90%8D%E5%8D%95%23) `295.9K 🔥` `-39%`

Updated at 2026-07-28 14:05:47

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
