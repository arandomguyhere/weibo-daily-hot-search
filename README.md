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

1. [还好戴着它 (Good thing I'm wearing it)](https://s.weibo.com/weibo?q=%23%E8%BF%98%E5%A5%BD%E6%88%B4%E7%9D%80%E5%AE%83%23) `154.7K 🔥` `NEW`
1. [单依纯 新沙宣](https://s.weibo.com/weibo?q=%23%E5%8D%95%E4%BE%9D%E7%BA%AF%20%E6%96%B0%E6%B2%99%E5%AE%A3%23) `125.2K 🔥` `NEW`
1. [马龙许昕不用说话就很好哭](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E9%BE%99%E8%AE%B8%E6%98%95%E4%B8%8D%E7%94%A8%E8%AF%B4%E8%AF%9D%E5%B0%B1%E5%BE%88%E5%A5%BD%E5%93%AD%23) `41.7K 🔥` `NEW`
1. [灵魂摆渡电影全AI生成 (Soul Ferry movie is fully AI-generated)](https://s.weibo.com/weibo?q=%23%E7%81%B5%E9%AD%82%E6%91%86%E6%B8%A1%E7%94%B5%E5%BD%B1%E5%85%A8AI%E7%94%9F%E6%88%90%23) `263.2K 🔥` `+144%`
1. [义乌请量产吧](https://s.weibo.com/weibo?q=%23%E4%B9%89%E4%B9%8C%E8%AF%B7%E9%87%8F%E4%BA%A7%E5%90%A7%23) `186.0K 🔥` `+35%`
1. [中国工业成绩单亮了](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%B7%A5%E4%B8%9A%E6%88%90%E7%BB%A9%E5%8D%95%E4%BA%AE%E4%BA%86%23) `162.0K 🔥` `+59%`
1. [谢娜 没票的朋友们别着急](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%A8%9C%20%E6%B2%A1%E7%A5%A8%E7%9A%84%E6%9C%8B%E5%8F%8B%E4%BB%AC%E5%88%AB%E7%9D%80%E6%80%A5%23) `153.1K 🔥` `+62%`
1. [中韩同日表态 (China and South Korea expressed their stance on the same day)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E9%9F%A9%E5%90%8C%E6%97%A5%E8%A1%A8%E6%80%81%23) `138.4K 🔥` `+57%`
1. [伊朗储油罐要满了](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%82%A8%E6%B2%B9%E7%BD%90%E8%A6%81%E6%BB%A1%E4%BA%86%23) `132.5K 🔥` `+35%`
1. [特朗普称美伊停火到期将继续轰炸 (Trump says US-Iran bombings will continue if ceasefire expires)](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E7%A7%B0%E7%BE%8E%E4%BC%8A%E5%81%9C%E7%81%AB%E5%88%B0%E6%9C%9F%E5%B0%86%E7%BB%A7%E7%BB%AD%E8%BD%B0%E7%82%B8%23) `119.9K 🔥` `+33%`
1. [亿万富豪教女儿如何看钱](https://s.weibo.com/weibo?q=%23%E4%BA%BF%E4%B8%87%E5%AF%8C%E8%B1%AA%E6%95%99%E5%A5%B3%E5%84%BF%E5%A6%82%E4%BD%95%E7%9C%8B%E9%92%B1%23) `107.0K 🔥` `+53%`
1. [巴萨下架不当图片内容 (Barcelona removes inappropriate graphic content)](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E8%90%A8%E4%B8%8B%E6%9E%B6%E4%B8%8D%E5%BD%93%E5%9B%BE%E7%89%87%E5%86%85%E5%AE%B9%23) `75.9K 🔥` `+37%`
1. [女子拍下日本地震时画面 (Woman captures footage of Japan earthquake)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%8B%8D%E4%B8%8B%E6%97%A5%E6%9C%AC%E5%9C%B0%E9%9C%87%E6%97%B6%E7%94%BB%E9%9D%A2%23) `67.4K 🔥` `+29%`
1. [小伙养6个弟妹又有7弟外婆发声](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E4%BC%99%E5%85%BB6%E4%B8%AA%E5%BC%9F%E5%A6%B9%E5%8F%88%E6%9C%897%E5%BC%9F%E5%A4%96%E5%A9%86%E5%8F%91%E5%A3%B0%23) `66.2K 🔥` `+29%`
1. [伊朗导弹与防空系统实力](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%AF%BC%E5%BC%B9%E4%B8%8E%E9%98%B2%E7%A9%BA%E7%B3%BB%E7%BB%9F%E5%AE%9E%E5%8A%9B%23) `66.0K 🔥` `+100%`
1. [周杰伦认证邓紫棋改编的爱琴海 (Jay Chou certified Deng Ziqi's adaptation of Aegean Sea)](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%9D%B0%E4%BC%A6%E8%AE%A4%E8%AF%81%E9%82%93%E7%B4%AB%E6%A3%8B%E6%94%B9%E7%BC%96%E7%9A%84%E7%88%B1%E7%90%B4%E6%B5%B7%23) `65.6K 🔥` `+29%`
1. [解放军强硬回应台空军喊话 (The People's Liberation Army responds strongly to the Taiwan Air Force's call)](https://s.weibo.com/weibo?q=%23%E8%A7%A3%E6%94%BE%E5%86%9B%E5%BC%BA%E7%A1%AC%E5%9B%9E%E5%BA%94%E5%8F%B0%E7%A9%BA%E5%86%9B%E5%96%8A%E8%AF%9D%23) `60.9K 🔥` `+67%`
1. [教育局回应学生暴雨天体测800米 (The Education Bureau responds to students’ rainstorm celestial body measurement of 800 meters)](https://s.weibo.com/weibo?q=%23%E6%95%99%E8%82%B2%E5%B1%80%E5%9B%9E%E5%BA%94%E5%AD%A6%E7%94%9F%E6%9A%B4%E9%9B%A8%E5%A4%A9%E4%BD%93%E6%B5%8B800%E7%B1%B3%23) `59.9K 🔥` `+76%`
1. [老外回国后得连夜写篇意林](https://s.weibo.com/weibo?q=%23%E8%80%81%E5%A4%96%E5%9B%9E%E5%9B%BD%E5%90%8E%E5%BE%97%E8%BF%9E%E5%A4%9C%E5%86%99%E7%AF%87%E6%84%8F%E6%9E%97%23) `46.7K 🔥` `+41%`
1. [遭老板性侵女子主张应赔付250余万 (Woman who was sexually assaulted by boss claims compensation of more than 2.5 million yuan)](https://s.weibo.com/weibo?q=%23%E9%81%AD%E8%80%81%E6%9D%BF%E6%80%A7%E4%BE%B5%E5%A5%B3%E5%AD%90%E4%B8%BB%E5%BC%A0%E5%BA%94%E8%B5%94%E4%BB%98250%E4%BD%99%E4%B8%87%23) `46.0K 🔥` `+39%`
1. [宁德时代新电池续航可超1500km](https://s.weibo.com/weibo?q=%23%E5%AE%81%E5%BE%B7%E6%97%B6%E4%BB%A3%E6%96%B0%E7%94%B5%E6%B1%A0%E7%BB%AD%E8%88%AA%E5%8F%AF%E8%B6%851500km%23) `45.9K 🔥` `+39%`
1. [疑有中国女留学生被ICE当街逮捕](https://s.weibo.com/weibo?q=%23%E7%96%91%E6%9C%89%E4%B8%AD%E5%9B%BD%E5%A5%B3%E7%95%99%E5%AD%A6%E7%94%9F%E8%A2%ABICE%E5%BD%93%E8%A1%97%E9%80%AE%E6%8D%95%23) `41.8K 🔥` `+27%`
1. [女子34万装修踩坑极简风变灵堂风](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%9034%E4%B8%87%E8%A3%85%E4%BF%AE%E8%B8%A9%E5%9D%91%E6%9E%81%E7%AE%80%E9%A3%8E%E5%8F%98%E7%81%B5%E5%A0%82%E9%A3%8E%23) `41.8K 🔥` `+21%`
1. [宁德时代](https://s.weibo.com/weibo?q=%23%E5%AE%81%E5%BE%B7%E6%97%B6%E4%BB%A3%23) `41.8K 🔥` `+27%`
1. [身上出现肉疙瘩警惕这4种瘤 (If you have pimples on your body, be wary of these 4 types of tumors)](https://s.weibo.com/weibo?q=%23%E8%BA%AB%E4%B8%8A%E5%87%BA%E7%8E%B0%E8%82%89%E7%96%99%E7%98%A9%E8%AD%A6%E6%83%95%E8%BF%994%E7%A7%8D%E7%98%A4%23) `41.8K 🔥` `+27%`
1. [乔布斯曾说绝不能让营销人员成为CEO (Steve Jobs once said that marketers should never be CEOs)](https://s.weibo.com/weibo?q=%23%E4%B9%94%E5%B8%83%E6%96%AF%E6%9B%BE%E8%AF%B4%E7%BB%9D%E4%B8%8D%E8%83%BD%E8%AE%A9%E8%90%A5%E9%94%80%E4%BA%BA%E5%91%98%E6%88%90%E4%B8%BACEO%23) `41.7K 🔥` `+27%`
1. [央视曝卧铺大巴隐患 (CCTV exposes hidden dangers of sleeper buses)](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E6%9B%9D%E5%8D%A7%E9%93%BA%E5%A4%A7%E5%B7%B4%E9%9A%90%E6%82%A3%23) `41.7K 🔥` `+27%`
1. [上汽高管称真智能汽车不应外挂AI](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B1%BD%E9%AB%98%E7%AE%A1%E7%A7%B0%E7%9C%9F%E6%99%BA%E8%83%BD%E6%B1%BD%E8%BD%A6%E4%B8%8D%E5%BA%94%E5%A4%96%E6%8C%82AI%23) `41.7K 🔥` `+27%`
1. [吃原型食物](https://s.weibo.com/weibo?q=%23%E5%90%83%E5%8E%9F%E5%9E%8B%E9%A3%9F%E7%89%A9%23) `41.6K 🔥` `+26%`
1. [一诺周年发文](https://s.weibo.com/weibo?q=%23%E4%B8%80%E8%AF%BA%E5%91%A8%E5%B9%B4%E5%8F%91%E6%96%87%23) `41.6K 🔥` `+26%`
1. [光明日报发虞书欣新歌](https://s.weibo.com/weibo?q=%23%E5%85%89%E6%98%8E%E6%97%A5%E6%8A%A5%E5%8F%91%E8%99%9E%E4%B9%A6%E6%AC%A3%E6%96%B0%E6%AD%8C%23) `41.6K 🔥` `+26%`
1. [OPPO哈苏双两亿影像给到夯 (OPPO Hasselblad’s double 200 million images are awesome)](https://s.weibo.com/weibo?q=%23OPPO%E5%93%88%E8%8B%8F%E5%8F%8C%E4%B8%A4%E4%BA%BF%E5%BD%B1%E5%83%8F%E7%BB%99%E5%88%B0%E5%A4%AF%23) `41.5K 🔥` `+26%`
1. [董力给阿诺发全职妈妈工资 (Dong Li pays Arnold a full-time mother’s salary)](https://s.weibo.com/weibo?q=%23%E8%91%A3%E5%8A%9B%E7%BB%99%E9%98%BF%E8%AF%BA%E5%8F%91%E5%85%A8%E8%81%8C%E5%A6%88%E5%A6%88%E5%B7%A5%E8%B5%84%23) `41.5K 🔥` `+26%`
1. [苹果CEO库克将转任 (Apple CEO Cook will transfer)](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9CCEO%E5%BA%93%E5%85%8B%E5%B0%86%E8%BD%AC%E4%BB%BB%23) `41.4K 🔥` `+26%`
1. [虞书欣新歌](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E6%96%B0%E6%AD%8C%23) `41.4K 🔥` `+26%`
1. [榜一大姐打赏10万无感却舍不得买包](https://s.weibo.com/weibo?q=%23%E6%A6%9C%E4%B8%80%E5%A4%A7%E5%A7%90%E6%89%93%E8%B5%8F10%E4%B8%87%E6%97%A0%E6%84%9F%E5%8D%B4%E8%88%8D%E4%B8%8D%E5%BE%97%E4%B9%B0%E5%8C%85%23) `41.4K 🔥` `+26%`
1. [红米K90Max发布会](https://s.weibo.com/weibo?q=%23%E7%BA%A2%E7%B1%B3K90Max%E5%8F%91%E5%B8%83%E4%BC%9A%23) `41.3K 🔥` `+25%`
1. [杨蓉面部烫伤恢复近照 (Recent photos of Yang Rong recovering from facial burns)](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E8%93%89%E9%9D%A2%E9%83%A8%E7%83%AB%E4%BC%A4%E6%81%A2%E5%A4%8D%E8%BF%91%E7%85%A7%23) `41.2K 🔥` `+25%`
1. [哪吒造车3年烧掉183亿 (Nezha burned 18.3 billion in three years of building cars)](https://s.weibo.com/weibo?q=%23%E5%93%AA%E5%90%92%E9%80%A0%E8%BD%A63%E5%B9%B4%E7%83%A7%E6%8E%89183%E4%BA%BF%23) `70.0K 🔥`
1. [女孩为何宁愿坐牢也不配合追回打赏](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%A9%E4%B8%BA%E4%BD%95%E5%AE%81%E6%84%BF%E5%9D%90%E7%89%A2%E4%B9%9F%E4%B8%8D%E9%85%8D%E5%90%88%E8%BF%BD%E5%9B%9E%E6%89%93%E8%B5%8F%23) `69.5K 🔥`
1. [走丢男童父母送女孩终身免费牛排卡](https://s.weibo.com/weibo?q=%23%E8%B5%B0%E4%B8%A2%E7%94%B7%E7%AB%A5%E7%88%B6%E6%AF%8D%E9%80%81%E5%A5%B3%E5%AD%A9%E7%BB%88%E8%BA%AB%E5%85%8D%E8%B4%B9%E7%89%9B%E6%8E%92%E5%8D%A1%23) `69.1K 🔥`
1. [生了7个娃还想再生的男子年近50岁](https://s.weibo.com/weibo?q=%23%E7%94%9F%E4%BA%867%E4%B8%AA%E5%A8%83%E8%BF%98%E6%83%B3%E5%86%8D%E7%94%9F%E7%9A%84%E7%94%B7%E5%AD%90%E5%B9%B4%E8%BF%9150%E5%B2%81%23) `68.6K 🔥`
1. [男子心脏停跳2天后生还](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%BF%83%E8%84%8F%E5%81%9C%E8%B7%B32%E5%A4%A9%E5%90%8E%E7%94%9F%E8%BF%98%23) `67.8K 🔥`
1. [赵雨蝶一审死缓](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E9%9B%A8%E8%9D%B6%E4%B8%80%E5%AE%A1%E6%AD%BB%E7%BC%93%23) `67.0K 🔥`
1. [挪用1700万打赏女生发声](https://s.weibo.com/weibo?q=%23%E6%8C%AA%E7%94%A81700%E4%B8%87%E6%89%93%E8%B5%8F%E5%A5%B3%E7%94%9F%E5%8F%91%E5%A3%B0%23) `48.5K 🔥`
1. [巴萨 (Barcelona)](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E8%90%A8%23) `48.3K 🔥`
1. [高市早苗吹嘘日武器时坦克爆炸 (Tank explodes as Takaichi Sanae brags about Japanese weapons)](https://s.weibo.com/weibo?q=%23%E9%AB%98%E5%B8%82%E6%97%A9%E8%8B%97%E5%90%B9%E5%98%98%E6%97%A5%E6%AD%A6%E5%99%A8%E6%97%B6%E5%9D%A6%E5%85%8B%E7%88%86%E7%82%B8%23) `41.5K 🔥`
1. [唐诡导演 真人能演为啥让AI演 (Director Tang Gui: Why let AI act when real people can act?)](https://s.weibo.com/weibo?q=%23%E5%94%90%E8%AF%A1%E5%AF%BC%E6%BC%94%20%E7%9C%9F%E4%BA%BA%E8%83%BD%E6%BC%94%E4%B8%BA%E5%95%A5%E8%AE%A9AI%E6%BC%94%23) `41.4K 🔥`
1. [上午刷到巴掌帽下午义乌已出货 (I picked up the slap hat in the morning and it was shipped to Yiwu in the afternoon.)](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E5%8D%88%E5%88%B7%E5%88%B0%E5%B7%B4%E6%8E%8C%E5%B8%BD%E4%B8%8B%E5%8D%88%E4%B9%89%E4%B9%8C%E5%B7%B2%E5%87%BA%E8%B4%A7%23) `41.4K 🔥`
1. [官方回应南昌一婴儿遭母亲虐待](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E5%9B%9E%E5%BA%94%E5%8D%97%E6%98%8C%E4%B8%80%E5%A9%B4%E5%84%BF%E9%81%AD%E6%AF%8D%E4%BA%B2%E8%99%90%E5%BE%85%23) `41.3K 🔥`
1. [人与人最大的区别就是出门 (The biggest difference between people is going out)](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E4%B8%8E%E4%BA%BA%E6%9C%80%E5%A4%A7%E7%9A%84%E5%8C%BA%E5%88%AB%E5%B0%B1%E6%98%AF%E5%87%BA%E9%97%A8%23) `41.3K 🔥`
1. [肯德基多要酱收费](https://s.weibo.com/weibo?q=%23%E8%82%AF%E5%BE%B7%E5%9F%BA%E5%A4%9A%E8%A6%81%E9%85%B1%E6%94%B6%E8%B4%B9%23) `42.4K 🔥` `-26%`

Updated at 2026-04-22 05:58:24

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
