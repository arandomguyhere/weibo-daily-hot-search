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

1. [C罗宣布结婚 (Cristiano Ronaldo announces marriage)](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E5%AE%A3%E5%B8%83%E7%BB%93%E5%A9%9A%23) `4.5M 🔥` `NEW`
1. [雷军回应小米自研发光材料](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E5%86%9B%E5%9B%9E%E5%BA%94%E5%B0%8F%E7%B1%B3%E8%87%AA%E7%A0%94%E5%8F%91%E5%85%89%E6%9D%90%E6%96%99%23) `243.9K 🔥` `NEW`
1. [雅典娜朋友发声](https://s.weibo.com/weibo?q=%23%E9%9B%85%E5%85%B8%E5%A8%9C%E6%9C%8B%E5%8F%8B%E5%8F%91%E5%A3%B0%23) `243.4K 🔥` `NEW`
1. [众球星祝贺C罗](https://s.weibo.com/weibo?q=%23%E4%BC%97%E7%90%83%E6%98%9F%E7%A5%9D%E8%B4%BAC%E7%BD%97%23) `242.2K 🔥` `NEW`
1. [Angelababy时隔一年千鸟格造型](https://s.weibo.com/weibo?q=%23Angelababy%E6%97%B6%E9%9A%94%E4%B8%80%E5%B9%B4%E5%8D%83%E9%B8%9F%E6%A0%BC%E9%80%A0%E5%9E%8B%23) `241.1K 🔥` `NEW`
1. [马伊琍想让谁顺谁就顺极了](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E4%BC%8A%E7%90%8D%E6%83%B3%E8%AE%A9%E8%B0%81%E9%A1%BA%E8%B0%81%E5%B0%B1%E9%A1%BA%E6%9E%81%E4%BA%86%23) `239.0K 🔥` `NEW`
1. [欢迎来龙餐馆票房](https://s.weibo.com/weibo?q=%23%E6%AC%A2%E8%BF%8E%E6%9D%A5%E9%BE%99%E9%A4%90%E9%A6%86%E7%A5%A8%E6%88%BF%23) `235.5K 🔥` `NEW`
1. [高血压擅自停药的受害者出现了](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%A1%80%E5%8E%8B%E6%93%85%E8%87%AA%E5%81%9C%E8%8D%AF%E7%9A%84%E5%8F%97%E5%AE%B3%E8%80%85%E5%87%BA%E7%8E%B0%E4%BA%86%23) `218.5K 🔥` `NEW`
1. [莫雷加德0比3奥恰洛夫](https://s.weibo.com/weibo?q=%23%E8%8E%AB%E9%9B%B7%E5%8A%A0%E5%BE%B70%E6%AF%943%E5%A5%A5%E6%81%B0%E6%B4%9B%E5%A4%AB%23) `149.2K 🔥` `NEW`
1. [国家体育总局体操中心声明](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E5%AE%B6%E4%BD%93%E8%82%B2%E6%80%BB%E5%B1%80%E4%BD%93%E6%93%8D%E4%B8%AD%E5%BF%83%E5%A3%B0%E6%98%8E%23) `149.1K 🔥` `NEW`
1. [因为大厂用花名躲过了家里的追击 (Because Dachang used his fancy name to avoid being pursued by his family.)](https://s.weibo.com/weibo?q=%23%E5%9B%A0%E4%B8%BA%E5%A4%A7%E5%8E%82%E7%94%A8%E8%8A%B1%E5%90%8D%E8%BA%B2%E8%BF%87%E4%BA%86%E5%AE%B6%E9%87%8C%E7%9A%84%E8%BF%BD%E5%87%BB%23) `113.3K 🔥` `NEW`
1. [披荆斩棘送考人阵容](https://s.weibo.com/weibo?q=%23%E6%8A%AB%E8%8D%86%E6%96%A9%E6%A3%98%E9%80%81%E8%80%83%E4%BA%BA%E9%98%B5%E5%AE%B9%23) `107.5K 🔥` `NEW`
1. [印度人享受加拿大医疗却从未工作一天](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%BA%A6%E4%BA%BA%E4%BA%AB%E5%8F%97%E5%8A%A0%E6%8B%BF%E5%A4%A7%E5%8C%BB%E7%96%97%E5%8D%B4%E4%BB%8E%E6%9C%AA%E5%B7%A5%E4%BD%9C%E4%B8%80%E5%A4%A9%23) `99.6K 🔥` `NEW`
1. [请查收这份暴雨天避险指南 (Please check this guide to avoid heavy rainstorms)](https://s.weibo.com/weibo?q=%23%E8%AF%B7%E6%9F%A5%E6%94%B6%E8%BF%99%E4%BB%BD%E6%9A%B4%E9%9B%A8%E5%A4%A9%E9%81%BF%E9%99%A9%E6%8C%87%E5%8D%97%23) `973.2K 🔥` `+79%`
1. [新势力销冠零跑6万级新车A05上市 (New force’s best-selling 60,000-class new car A05 is launched)](https://s.weibo.com/weibo?q=%23%E6%96%B0%E5%8A%BF%E5%8A%9B%E9%94%80%E5%86%A0%E9%9B%B6%E8%B7%916%E4%B8%87%E7%BA%A7%E6%96%B0%E8%BD%A6A05%E4%B8%8A%E5%B8%82%23) `924.0K 🔥` `+75%`
1. [上海暴雨](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E6%9A%B4%E9%9B%A8%23) `913.2K 🔥` `+556%`
1. [贺峻霖向往的生活常驻 (The life that He Junlin longs for is permanent)](https://s.weibo.com/weibo?q=%23%E8%B4%BA%E5%B3%BB%E9%9C%96%E5%90%91%E5%BE%80%E7%9A%84%E7%94%9F%E6%B4%BB%E5%B8%B8%E9%A9%BB%23) `338.2K 🔥` `+91%`
1. [六公主力挺赵丽颖百花奖 (Six Princesses Support Zhao Liying Hundred Flowers Award)](https://s.weibo.com/weibo?q=%23%E5%85%AD%E5%85%AC%E4%B8%BB%E5%8A%9B%E6%8C%BA%E8%B5%B5%E4%B8%BD%E9%A2%96%E7%99%BE%E8%8A%B1%E5%A5%96%23) `310.9K 🔥` `+151%`
1. [恢复生命力只需要一些低成本爱好 (All it takes to regain your vitality is some low-cost hobbies)](https://s.weibo.com/weibo?q=%23%E6%81%A2%E5%A4%8D%E7%94%9F%E5%91%BD%E5%8A%9B%E5%8F%AA%E9%9C%80%E8%A6%81%E4%B8%80%E4%BA%9B%E4%BD%8E%E6%88%90%E6%9C%AC%E7%88%B1%E5%A5%BD%23) `245.4K 🔥` `+77%`
1. [桑德斯要求三大AI公司暂停开发](https://s.weibo.com/weibo?q=%23%E6%A1%91%E5%BE%B7%E6%96%AF%E8%A6%81%E6%B1%82%E4%B8%89%E5%A4%A7AI%E5%85%AC%E5%8F%B8%E6%9A%82%E5%81%9C%E5%BC%80%E5%8F%91%23) `245.3K 🔥` `+76%`
1. [高考444分考生回应被殡葬专业录取](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%80%83444%E5%88%86%E8%80%83%E7%94%9F%E5%9B%9E%E5%BA%94%E8%A2%AB%E6%AE%A1%E8%91%AC%E4%B8%93%E4%B8%9A%E5%BD%95%E5%8F%96%23) `240.4K 🔥` `+96%`
1. [原配妻子称丈夫非常坚定选择第三者](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E9%85%8D%E5%A6%BB%E5%AD%90%E7%A7%B0%E4%B8%88%E5%A4%AB%E9%9D%9E%E5%B8%B8%E5%9D%9A%E5%AE%9A%E9%80%89%E6%8B%A9%E7%AC%AC%E4%B8%89%E8%80%85%23) `238.2K 🔥` `+179%`
1. [赵一鸣涉事店铺老板回应](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%B8%80%E9%B8%A3%E6%B6%89%E4%BA%8B%E5%BA%97%E9%93%BA%E8%80%81%E6%9D%BF%E5%9B%9E%E5%BA%94%23) `237.5K 🔥` `+72%`
1. [日本篡改历史被反噬了](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E7%AF%A1%E6%94%B9%E5%8E%86%E5%8F%B2%E8%A2%AB%E5%8F%8D%E5%99%AC%E4%BA%86%23) `236.1K 🔥` `+70%`
1. [哪吒获奖台下嘉宾反应冷淡原因 (The reason for the cold reaction from the guests in the audience when Nezha won the award)](https://s.weibo.com/weibo?q=%23%E5%93%AA%E5%90%92%E8%8E%B7%E5%A5%96%E5%8F%B0%E4%B8%8B%E5%98%89%E5%AE%BE%E5%8F%8D%E5%BA%94%E5%86%B7%E6%B7%A1%E5%8E%9F%E5%9B%A0%23) `233.0K 🔥` `+90%`
1. [白鹿直播破1000万人次](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E7%9B%B4%E6%92%AD%E7%A0%B41000%E4%B8%87%E4%BA%BA%E6%AC%A1%23) `232.4K 🔥` `+161%`
1. [结婚40年都AA制丈夫认为公平合理 (After 40 years of marriage, my husband thinks it is fair and reasonable)](https://s.weibo.com/weibo?q=%23%E7%BB%93%E5%A9%9A40%E5%B9%B4%E9%83%BDAA%E5%88%B6%E4%B8%88%E5%A4%AB%E8%AE%A4%E4%B8%BA%E5%85%AC%E5%B9%B3%E5%90%88%E7%90%86%23) `213.6K 🔥` `+55%`
1. [北京暴雨 (Heavy rain in Beijing)](https://s.weibo.com/weibo?q=%23%E5%8C%97%E4%BA%AC%E6%9A%B4%E9%9B%A8%23) `210.0K 🔥` `+51%`
1. [胚胎案妻子遭短信轰炸 (Embryo case: Wife bombarded with text messages)](https://s.weibo.com/weibo?q=%23%E8%83%9A%E8%83%8E%E6%A1%88%E5%A6%BB%E5%AD%90%E9%81%AD%E7%9F%AD%E4%BF%A1%E8%BD%B0%E7%82%B8%23) `199.7K 🔥` `+45%`
1. [曝刺棠女主换成杨超越了](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%88%BA%E6%A3%A0%E5%A5%B3%E4%B8%BB%E6%8D%A2%E6%88%90%E6%9D%A8%E8%B6%85%E8%B6%8A%E4%BA%86%23) `155.1K 🔥` `+27%`
1. [叙利亚前总统被判死刑](https://s.weibo.com/weibo?q=%23%E5%8F%99%E5%88%A9%E4%BA%9A%E5%89%8D%E6%80%BB%E7%BB%9F%E8%A2%AB%E5%88%A4%E6%AD%BB%E5%88%91%23) `149.3K 🔥` `+206%`
1. [龙餐馆豆瓣开分8.4 (Dragon Restaurant’s Douban score is 8.4)](https://s.weibo.com/weibo?q=%23%E9%BE%99%E9%A4%90%E9%A6%86%E8%B1%86%E7%93%A3%E5%BC%80%E5%88%868.4%23) `148.5K 🔥` `+21%`
1. [丁程鑫一路披荆斩棘走到了今天](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A8%8B%E9%91%AB%E4%B8%80%E8%B7%AF%E6%8A%AB%E8%8D%86%E6%96%A9%E6%A3%98%E8%B5%B0%E5%88%B0%E4%BA%86%E4%BB%8A%E5%A4%A9%23) `144.1K 🔥` `+130%`
1. [AI构建中国天庭在外网火了 (AI builds China’s paradise and becomes popular on the Internet)](https://s.weibo.com/weibo?q=%23AI%E6%9E%84%E5%BB%BA%E4%B8%AD%E5%9B%BD%E5%A4%A9%E5%BA%AD%E5%9C%A8%E5%A4%96%E7%BD%91%E7%81%AB%E4%BA%86%23) `143.5K 🔥` `+148%`
1. [我听交警的涉事女子道歉赔偿](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%90%AC%E4%BA%A4%E8%AD%A6%E7%9A%84%E6%B6%89%E4%BA%8B%E5%A5%B3%E5%AD%90%E9%81%93%E6%AD%89%E8%B5%94%E5%81%BF%23) `132.5K 🔥` `+25%`
1. [巴旦木公主晒结婚证 (Princess Badanmu shows off her marriage certificate)](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E6%97%A6%E6%9C%A8%E5%85%AC%E4%B8%BB%E6%99%92%E7%BB%93%E5%A9%9A%E8%AF%81%23) `113.8K 🔥` `+57%`
1. [女明星贴头皮造型](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E6%98%8E%E6%98%9F%E8%B4%B4%E5%A4%B4%E7%9A%AE%E9%80%A0%E5%9E%8B%23) `112.7K 🔥` `+47%`
1. [女子因丈夫私自给公婆转50万怒提离婚 (Woman filed for divorce because her husband secretly transferred 500,000 to her parents-in-law)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%9B%A0%E4%B8%88%E5%A4%AB%E7%A7%81%E8%87%AA%E7%BB%99%E5%85%AC%E5%A9%86%E8%BD%AC50%E4%B8%87%E6%80%92%E6%8F%90%E7%A6%BB%E5%A9%9A%23) `112.0K 🔥` `+90%`
1. [樊振东WTT冠军榜位列第二 (Fan Zhendong ranks second in WTT championship list)](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9CWTT%E5%86%A0%E5%86%9B%E6%A6%9C%E4%BD%8D%E5%88%97%E7%AC%AC%E4%BA%8C%23) `111.8K 🔥` `+21%`
1. [白鹿的带货能力 (Bailu’s ability to carry goods)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E7%9A%84%E5%B8%A6%E8%B4%A7%E8%83%BD%E5%8A%9B%23) `106.7K 🔥` `+35%`
1. [丁程鑫录制好六提前离场](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A8%8B%E9%91%AB%E5%BD%95%E5%88%B6%E5%A5%BD%E5%85%AD%E6%8F%90%E5%89%8D%E7%A6%BB%E5%9C%BA%23) `97.2K 🔥` `+30%`
1. [宇树科技中签者发声 (Winners of Yushu Technology speak out)](https://s.weibo.com/weibo?q=%23%E5%AE%87%E6%A0%91%E7%A7%91%E6%8A%80%E4%B8%AD%E7%AD%BE%E8%80%85%E5%8F%91%E5%A3%B0%23) `90.0K 🔥` `+46%`
1. [小鹏G9L全球首秀 (Xpeng G9L makes its world debut)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E9%B9%8FG9L%E5%85%A8%E7%90%83%E9%A6%96%E7%A7%80%23) `88.6K 🔥` `+54%`
1. [郭兰英逝世 (Guo Lanying passed away)](https://s.weibo.com/weibo?q=%23%E9%83%AD%E5%85%B0%E8%8B%B1%E9%80%9D%E4%B8%96%23) `1.3M 🔥`
1. [曝赵一鸣4块牛肉干64元复称仅17元 (It was revealed that Zhao Yiming’s 4 pieces of beef jerky cost 64 yuan and were renamed to only 17 yuan.)](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E8%B5%B5%E4%B8%80%E9%B8%A34%E5%9D%97%E7%89%9B%E8%82%89%E5%B9%B264%E5%85%83%E5%A4%8D%E7%A7%B0%E4%BB%8517%E5%85%83%23) `854.5K 🔥`
1. [BLG首发上单Flandre (BLG’s first top laner Flandre)](https://s.weibo.com/weibo?q=%23BLG%E9%A6%96%E5%8F%91%E4%B8%8A%E5%8D%95Flandre%23) `165.6K 🔥`
1. [韩国新恋综 我剩下的恋爱 (Korean New Love Variety My Remaining Love)](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E6%96%B0%E6%81%8B%E7%BB%BC%20%E6%88%91%E5%89%A9%E4%B8%8B%E7%9A%84%E6%81%8B%E7%88%B1%23) `143.1K 🔥`
1. [父亲耗时二十多年把榕树养成天然树屋 (My father spent more than 20 years growing a banyan tree into a natural tree house)](https://s.weibo.com/weibo?q=%23%E7%88%B6%E4%BA%B2%E8%80%97%E6%97%B6%E4%BA%8C%E5%8D%81%E5%A4%9A%E5%B9%B4%E6%8A%8A%E6%A6%95%E6%A0%91%E5%85%BB%E6%88%90%E5%A4%A9%E7%84%B6%E6%A0%91%E5%B1%8B%23) `129.1K 🔥`
1. [男子上班脑出血家属无奈拔管后死亡](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E4%B8%8A%E7%8F%AD%E8%84%91%E5%87%BA%E8%A1%80%E5%AE%B6%E5%B1%9E%E6%97%A0%E5%A5%88%E6%8B%94%E7%AE%A1%E5%90%8E%E6%AD%BB%E4%BA%A1%23) `109.7K 🔥`
1. [忙到晕倒炸鸡店员工已结算工资离职 (Fried chicken restaurant employee was so busy that he fainted and resigned after paying his salary)](https://s.weibo.com/weibo?q=%23%E5%BF%99%E5%88%B0%E6%99%95%E5%80%92%E7%82%B8%E9%B8%A1%E5%BA%97%E5%91%98%E5%B7%A5%E5%B7%B2%E7%BB%93%E7%AE%97%E5%B7%A5%E8%B5%84%E7%A6%BB%E8%81%8C%23) `233.7K 🔥` `-55%`

Updated at 2026-08-12 08:09:23

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
