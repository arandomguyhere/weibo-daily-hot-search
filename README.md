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

1. [华晨宇拿下三块地 (Hua Chenyu won three pieces of land)](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E6%99%A8%E5%AE%87%E6%8B%BF%E4%B8%8B%E4%B8%89%E5%9D%97%E5%9C%B0%23) `365.5K 🔥` `NEW`
1. [11岁女儿极致收纳被子枕头每天入柜](https://s.weibo.com/weibo?q=%2311%E5%B2%81%E5%A5%B3%E5%84%BF%E6%9E%81%E8%87%B4%E6%94%B6%E7%BA%B3%E8%A2%AB%E5%AD%90%E6%9E%95%E5%A4%B4%E6%AF%8F%E5%A4%A9%E5%85%A5%E6%9F%9C%23) `204.1K 🔥` `NEW`
1. [黄多多如果忧郁是一种天赋](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%A4%9A%E5%A4%9A%E5%A6%82%E6%9E%9C%E5%BF%A7%E9%83%81%E6%98%AF%E4%B8%80%E7%A7%8D%E5%A4%A9%E8%B5%8B%23) `100.3K 🔥` `NEW`
1. [冬奥速滑男子5000米刘瀚彬创历史](https://s.weibo.com/weibo?q=%23%E5%86%AC%E5%A5%A5%E9%80%9F%E6%BB%91%E7%94%B7%E5%AD%905000%E7%B1%B3%E5%88%98%E7%80%9A%E5%BD%AC%E5%88%9B%E5%8E%86%E5%8F%B2%23) `99.3K 🔥` `NEW`
1. [办婚礼没领证女子在爱人祭日被赶婚房](https://s.weibo.com/weibo?q=%23%E5%8A%9E%E5%A9%9A%E7%A4%BC%E6%B2%A1%E9%A2%86%E8%AF%81%E5%A5%B3%E5%AD%90%E5%9C%A8%E7%88%B1%E4%BA%BA%E7%A5%AD%E6%97%A5%E8%A2%AB%E8%B5%B6%E5%A9%9A%E6%88%BF%23) `97.3K 🔥` `NEW`
1. [谁给了窗口人员收1614万的勇气](https://s.weibo.com/weibo?q=%23%E8%B0%81%E7%BB%99%E4%BA%86%E7%AA%97%E5%8F%A3%E4%BA%BA%E5%91%98%E6%94%B61614%E4%B8%87%E7%9A%84%E5%8B%87%E6%B0%94%23) `90.8K 🔥` `NEW`
1. [王楚钦倒地爆冲张本智和](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E5%80%92%E5%9C%B0%E7%88%86%E5%86%B2%E5%BC%A0%E6%9C%AC%E6%99%BA%E5%92%8C%23) `89.7K 🔥` `NEW`
1. [情商低的8个典型表现](https://s.weibo.com/weibo?q=%23%E6%83%85%E5%95%86%E4%BD%8E%E7%9A%848%E4%B8%AA%E5%85%B8%E5%9E%8B%E8%A1%A8%E7%8E%B0%23) `86.8K 🔥` `NEW`
1. [当沙溢记住了娜扎叠穿](https://s.weibo.com/weibo?q=%23%E5%BD%93%E6%B2%99%E6%BA%A2%E8%AE%B0%E4%BD%8F%E4%BA%86%E5%A8%9C%E6%89%8E%E5%8F%A0%E7%A9%BF%23) `61.6K 🔥` `NEW`
1. [胡锡进称日本此次选举是自娱自乐](https://s.weibo.com/weibo?q=%23%E8%83%A1%E9%94%A1%E8%BF%9B%E7%A7%B0%E6%97%A5%E6%9C%AC%E6%AD%A4%E6%AC%A1%E9%80%89%E4%B8%BE%E6%98%AF%E8%87%AA%E5%A8%B1%E8%87%AA%E4%B9%90%23) `59.0K 🔥` `NEW`
1. [王一博只留最得体的姿态 (Wang Yibo only retains the most appropriate posture)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E5%8F%AA%E7%95%99%E6%9C%80%E5%BE%97%E4%BD%93%E7%9A%84%E5%A7%BF%E6%80%81%23) `57.4K 🔥` `NEW`
1. [成何体统第三](https://s.weibo.com/weibo?q=%23%E6%88%90%E4%BD%95%E4%BD%93%E7%BB%9F%E7%AC%AC%E4%B8%89%23) `55.3K 🔥` `NEW`
1. [丞磊成何体统](https://s.weibo.com/weibo?q=%23%E4%B8%9E%E7%A3%8A%E6%88%90%E4%BD%95%E4%BD%93%E7%BB%9F%23) `50.7K 🔥` `NEW`
1. [花花把树压断了](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E8%8A%B1%E6%8A%8A%E6%A0%91%E5%8E%8B%E6%96%AD%E4%BA%86%23) `38.7K 🔥` `NEW`
1. [中国军网点名张本智和 (China Military Net names Zhang Benzhihe)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%86%9B%E7%BD%91%E7%82%B9%E5%90%8D%E5%BC%A0%E6%9C%AC%E6%99%BA%E5%92%8C%23) `969.3K 🔥` `+56%`
1. [21岁国际名模在新家猝然离世 (21-year-old international supermodel passed away suddenly in her new home)](https://s.weibo.com/weibo?q=%2321%E5%B2%81%E5%9B%BD%E9%99%85%E5%90%8D%E6%A8%A1%E5%9C%A8%E6%96%B0%E5%AE%B6%E7%8C%9D%E7%84%B6%E7%A6%BB%E4%B8%96%23) `703.7K 🔥` `+352%`
1. [12306已发售春运期间车票超1.5亿张 (12306 Over 150 million tickets have been sold during the Spring Festival travel season)](https://s.weibo.com/weibo?q=%2312306%E5%B7%B2%E5%8F%91%E5%94%AE%E6%98%A5%E8%BF%90%E6%9C%9F%E9%97%B4%E8%BD%A6%E7%A5%A8%E8%B6%851.5%E4%BA%BF%E5%BC%A0%23) `561.3K 🔥` `+64%`
1. [蒙牛致敬骨子里要强的中国队 (Mengniu pays tribute to the Chinese team, which is stronger at heart)](https://s.weibo.com/weibo?q=%23%E8%92%99%E7%89%9B%E8%87%B4%E6%95%AC%E9%AA%A8%E5%AD%90%E9%87%8C%E8%A6%81%E5%BC%BA%E7%9A%84%E4%B8%AD%E5%9B%BD%E9%98%9F%23) `379.2K 🔥` `+431%`
1. [父亲去世试管婴儿获工亡抚恤金 (IVF baby receives death-on-the-job pension after father dies)](https://s.weibo.com/weibo?q=%23%E7%88%B6%E4%BA%B2%E5%8E%BB%E4%B8%96%E8%AF%95%E7%AE%A1%E5%A9%B4%E5%84%BF%E8%8E%B7%E5%B7%A5%E4%BA%A1%E6%8A%9A%E6%81%A4%E9%87%91%23) `186.5K 🔥` `+69%`
1. [孙颖莎合照给王曼昱挪位置 (Sun Yingsha took a group photo and moved her position to Wang Manyu)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E5%90%88%E7%85%A7%E7%BB%99%E7%8E%8B%E6%9B%BC%E6%98%B1%E6%8C%AA%E4%BD%8D%E7%BD%AE%23) `153.5K 🔥` `+63%`
1. [王楚钦vs张本智和 (Wang Chuqin vs Zhang Benzhihe)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6vs%E5%BC%A0%E6%9C%AC%E6%99%BA%E5%92%8C%23) `103.0K 🔥` `+82%`
1. [爱泼斯坦案无码版本不允许拍摄 (Uncensored version of Epstein case not allowed to be filmed)](https://s.weibo.com/weibo?q=%23%E7%88%B1%E6%B3%BC%E6%96%AF%E5%9D%A6%E6%A1%88%E6%97%A0%E7%A0%81%E7%89%88%E6%9C%AC%E4%B8%8D%E5%85%81%E8%AE%B8%E6%8B%8D%E6%91%84%23) `102.5K 🔥` `+53%`
1. [医生提醒5个体检项目千万别不做](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E7%94%9F%E6%8F%90%E9%86%925%E4%B8%AA%E4%BD%93%E6%A3%80%E9%A1%B9%E7%9B%AE%E5%8D%83%E4%B8%87%E5%88%AB%E4%B8%8D%E5%81%9A%23) `101.7K 🔥` `+52%`
1. [亲哥去世员工请假奔丧被辞 (An employee who took time off to attend the funeral was fired after his brother died.)](https://s.weibo.com/weibo?q=%23%E4%BA%B2%E5%93%A5%E5%8E%BB%E4%B8%96%E5%91%98%E5%B7%A5%E8%AF%B7%E5%81%87%E5%A5%94%E4%B8%A7%E8%A2%AB%E8%BE%9E%23) `99.0K 🔥` `+57%`
1. [法官回应订婚强奸案男方被判3年](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%AE%98%E5%9B%9E%E5%BA%94%E8%AE%A2%E5%A9%9A%E5%BC%BA%E5%A5%B8%E6%A1%88%E7%94%B7%E6%96%B9%E8%A2%AB%E5%88%A43%E5%B9%B4%23) `97.5K 🔥` `+46%`
1. [花样滑冰团体决赛](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E6%A0%B7%E6%BB%91%E5%86%B0%E5%9B%A2%E4%BD%93%E5%86%B3%E8%B5%9B%23) `95.2K 🔥` `+52%`
1. [张杰官宣世界巡回演唱会 (Zhang Jie officially announces world tour concert)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9D%B0%E5%AE%98%E5%AE%A3%E4%B8%96%E7%95%8C%E5%B7%A1%E5%9B%9E%E6%BC%94%E5%94%B1%E4%BC%9A%23) `95.0K 🔥` `+45%`
1. [怀孕弟妹与婆婆惨遭杀害大儿媳发声 (The eldest daughter-in-law speaks out after her pregnant sister-in-law and mother-in-law were brutally murdered)](https://s.weibo.com/weibo?q=%23%E6%80%80%E5%AD%95%E5%BC%9F%E5%A6%B9%E4%B8%8E%E5%A9%86%E5%A9%86%E6%83%A8%E9%81%AD%E6%9D%80%E5%AE%B3%E5%A4%A7%E5%84%BF%E5%AA%B3%E5%8F%91%E5%A3%B0%23) `90.6K 🔥` `+110%`
1. [男子经常口干一查血糖超出正常值两倍 (A man often has a dry mouth and checks his blood sugar, which is twice the normal value.)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E7%BB%8F%E5%B8%B8%E5%8F%A3%E5%B9%B2%E4%B8%80%E6%9F%A5%E8%A1%80%E7%B3%96%E8%B6%85%E5%87%BA%E6%AD%A3%E5%B8%B8%E5%80%BC%E4%B8%A4%E5%80%8D%23) `87.8K 🔥` `+104%`
1. [12306回应无座票乘客被劝离静音车厢 (12306 Response Passengers without seat tickets were persuaded to leave the silent carriage)](https://s.weibo.com/weibo?q=%2312306%E5%9B%9E%E5%BA%94%E6%97%A0%E5%BA%A7%E7%A5%A8%E4%B9%98%E5%AE%A2%E8%A2%AB%E5%8A%9D%E7%A6%BB%E9%9D%99%E9%9F%B3%E8%BD%A6%E5%8E%A2%23) `86.5K 🔥` `+101%`
1. [王皓说张本智和拉不死王楚钦 (Wang Hao said that Zhang Benzhi and Wang Chuqin were unable to die)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E7%9A%93%E8%AF%B4%E5%BC%A0%E6%9C%AC%E6%99%BA%E5%92%8C%E6%8B%89%E4%B8%8D%E6%AD%BB%E7%8E%8B%E6%A5%9A%E9%92%A6%23) `73.3K 🔥` `+43%`
1. [白鹿破万四连拍](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E7%A0%B4%E4%B8%87%E5%9B%9B%E8%BF%9E%E6%8B%8D%23) `72.3K 🔥` `+63%`
1. [柯南宝可梦 漫展禁止 (Pokémon Conan Banned at Comic-Con)](https://s.weibo.com/weibo?q=%23%E6%9F%AF%E5%8D%97%E5%AE%9D%E5%8F%AF%E6%A2%A6%20%E6%BC%AB%E5%B1%95%E7%A6%81%E6%AD%A2%23) `65.3K 🔥` `+74%`
1. [黄多多斜肩黑裙](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%A4%9A%E5%A4%9A%E6%96%9C%E8%82%A9%E9%BB%91%E8%A3%99%23) `62.3K 🔥` `+83%`
1. [能激活生命力的3个爱好](https://s.weibo.com/weibo?q=%23%E8%83%BD%E6%BF%80%E6%B4%BB%E7%94%9F%E5%91%BD%E5%8A%9B%E7%9A%843%E4%B8%AA%E7%88%B1%E5%A5%BD%23) `52.5K 🔥` `+80%`
1. [王楚钦金牌 (Wang Chuqin gold medal)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E9%87%91%E7%89%8C%23) `50.9K 🔥` `+36%`
1. [李昀锐批改网球作业 (Li Yunrui corrects tennis homework)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%98%80%E9%94%90%E6%89%B9%E6%94%B9%E7%BD%91%E7%90%83%E4%BD%9C%E4%B8%9A%23) `50.6K 🔥` `+55%`
1. [孙颖莎金牌](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E9%87%91%E7%89%8C%23) `50.1K 🔥` `+53%`
1. [陈浚铭从baby到daddy只需要一个月 (It only takes one month for Chen Junming to go from baby to daddy)](https://s.weibo.com/weibo?q=%23%E9%99%88%E6%B5%9A%E9%93%AD%E4%BB%8Ebaby%E5%88%B0daddy%E5%8F%AA%E9%9C%80%E8%A6%81%E4%B8%80%E4%B8%AA%E6%9C%88%23) `49.7K 🔥` `+43%`
1. [利物浦1比2曼城 (Liverpool 1-2 Manchester City)](https://s.weibo.com/weibo?q=%23%E5%88%A9%E7%89%A9%E6%B5%A61%E6%AF%942%E6%9B%BC%E5%9F%8E%23) `41.8K 🔥` `+44%`
1. [太平年 (Taiping Year)](https://s.weibo.com/weibo?q=%23%E5%A4%AA%E5%B9%B3%E5%B9%B4%23) `41.6K 🔥` `+105%`
1. [白鹿第四部破万剧 (The fourth part of White Deer breaks the 10,000 mark)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E7%AC%AC%E5%9B%9B%E9%83%A8%E7%A0%B4%E4%B8%87%E5%89%A7%23) `40.1K 🔥` `+60%`
1. [孙颖莎vs王曼昱 (Sun Yingsha vs Wang Manyu)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8Evs%E7%8E%8B%E6%9B%BC%E6%98%B1%23) `39.8K 🔥` `+28%`
1. [蔡徐坤直播 (Cai Xukun live broadcast)](https://s.weibo.com/weibo?q=%23%E8%94%A1%E5%BE%90%E5%9D%A4%E7%9B%B4%E6%92%AD%23) `39.6K 🔥` `+29%`
1. [日本众议院选举投票结束](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E4%BC%97%E8%AE%AE%E9%99%A2%E9%80%89%E4%B8%BE%E6%8A%95%E7%A5%A8%E7%BB%93%E6%9D%9F%23) `38.9K 🔥` `+55%`
1. [王楚钦夺冠后指向王皓](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E5%A4%BA%E5%86%A0%E5%90%8E%E6%8C%87%E5%90%91%E7%8E%8B%E7%9A%93%23) `251.2K 🔥`
1. [与人相处能落落大方的秘诀 (The secret to being gracious when dealing with others)](https://s.weibo.com/weibo?q=%23%E4%B8%8E%E4%BA%BA%E7%9B%B8%E5%A4%84%E8%83%BD%E8%90%BD%E8%90%BD%E5%A4%A7%E6%96%B9%E7%9A%84%E7%A7%98%E8%AF%80%23) `79.4K 🔥`
1. [自从你出道很少看内娱营销富二代人设](https://s.weibo.com/weibo?q=%23%E8%87%AA%E4%BB%8E%E4%BD%A0%E5%87%BA%E9%81%93%E5%BE%88%E5%B0%91%E7%9C%8B%E5%86%85%E5%A8%B1%E8%90%A5%E9%94%80%E5%AF%8C%E4%BA%8C%E4%BB%A3%E4%BA%BA%E8%AE%BE%23) `44.2K 🔥`
1. [孙颖莎王曼昱争议球](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E7%8E%8B%E6%9B%BC%E6%98%B1%E4%BA%89%E8%AE%AE%E7%90%83%23) `41.8K 🔥`
1. [春晚完成第四次彩排 (Spring Festival Gala completes fourth rehearsal)](https://s.weibo.com/weibo?q=%23%E6%98%A5%E6%99%9A%E5%AE%8C%E6%88%90%E7%AC%AC%E5%9B%9B%E6%AC%A1%E5%BD%A9%E6%8E%92%23) `41.8K 🔥`
1. [苏翊鸣谷爱凌对失利的同一种回答 (Su Yi Minggu Ailing’s same answer to failure)](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E7%BF%8A%E9%B8%A3%E8%B0%B7%E7%88%B1%E5%87%8C%E5%AF%B9%E5%A4%B1%E5%88%A9%E7%9A%84%E5%90%8C%E4%B8%80%E7%A7%8D%E5%9B%9E%E7%AD%94%23) `265.5K 🔥` `-39%`

Updated at 2026-02-09 07:42:58

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
