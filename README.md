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

1. [王楚钦问孙颖莎你的奖杯帽呢 (Wang Chuqin asked Sun Yingsha where is your trophy hat?)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E9%97%AE%E5%AD%99%E9%A2%96%E8%8E%8E%E4%BD%A0%E7%9A%84%E5%A5%96%E6%9D%AF%E5%B8%BD%E5%91%A2%23) `696.8K 🔥` `NEW`
1. [伊朗打击以色列能源设施](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%89%93%E5%87%BB%E4%BB%A5%E8%89%B2%E5%88%97%E8%83%BD%E6%BA%90%E8%AE%BE%E6%96%BD%23) `282.5K 🔥` `NEW`
1. [SJ首尔演唱会栏杆断裂粉丝坠落](https://s.weibo.com/weibo?q=%23SJ%E9%A6%96%E5%B0%94%E6%BC%94%E5%94%B1%E4%BC%9A%E6%A0%8F%E6%9D%86%E6%96%AD%E8%A3%82%E7%B2%89%E4%B8%9D%E5%9D%A0%E8%90%BD%23) `149.7K 🔥` `NEW`
1. [赵心童单赛季四冠王](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E5%BF%83%E7%AB%A5%E5%8D%95%E8%B5%9B%E5%AD%A3%E5%9B%9B%E5%86%A0%E7%8E%8B%23) `144.5K 🔥` `NEW`
1. [有电瓶车门店销量下滑40%](https://s.weibo.com/weibo?q=%23%E6%9C%89%E7%94%B5%E7%93%B6%E8%BD%A6%E9%97%A8%E5%BA%97%E9%94%80%E9%87%8F%E4%B8%8B%E6%BB%9140%25%23) `95.6K 🔥` `NEW`
1. [北大医学部最小的大体老师仅29天](https://s.weibo.com/weibo?q=%23%E5%8C%97%E5%A4%A7%E5%8C%BB%E5%AD%A6%E9%83%A8%E6%9C%80%E5%B0%8F%E7%9A%84%E5%A4%A7%E4%BD%93%E8%80%81%E5%B8%88%E4%BB%8529%E5%A4%A9%23) `94.6K 🔥` `NEW`
1. [Rookie和新女友一起逛街](https://s.weibo.com/weibo?q=%23Rookie%E5%92%8C%E6%96%B0%E5%A5%B3%E5%8F%8B%E4%B8%80%E8%B5%B7%E9%80%9B%E8%A1%97%23) `94.0K 🔥` `NEW`
1. [日本整形医生趁麻醉性侵21名女性](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E6%95%B4%E5%BD%A2%E5%8C%BB%E7%94%9F%E8%B6%81%E9%BA%BB%E9%86%89%E6%80%A7%E4%BE%B521%E5%90%8D%E5%A5%B3%E6%80%A7%23) `93.2K 🔥` `NEW`
1. [特朗普暗示最后通牒再延迟1天](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E6%9A%97%E7%A4%BA%E6%9C%80%E5%90%8E%E9%80%9A%E7%89%92%E5%86%8D%E5%BB%B6%E8%BF%9F1%E5%A4%A9%23) `91.8K 🔥` `NEW`
1. [美逃生飞行员被曝处境凶险](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E9%80%83%E7%94%9F%E9%A3%9E%E8%A1%8C%E5%91%98%E8%A2%AB%E6%9B%9D%E5%A4%84%E5%A2%83%E5%87%B6%E9%99%A9%23) `78.5K 🔥` `NEW`
1. [钢铁森林 (steel forest)](https://s.weibo.com/weibo?q=%23%E9%92%A2%E9%93%81%E6%A3%AE%E6%9E%97%23) `52.7K 🔥` `NEW`
1. [孙颖莎王楚钦合照](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E7%8E%8B%E6%A5%9A%E9%92%A6%E5%90%88%E7%85%A7%23) `46.2K 🔥` `NEW`
1. [王楚钦离大满贯还差什么](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E7%A6%BB%E5%A4%A7%E6%BB%A1%E8%B4%AF%E8%BF%98%E5%B7%AE%E4%BB%80%E4%B9%88%23) `46.1K 🔥` `NEW`
1. [王楚钦孙颖莎合照](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E5%AD%99%E9%A2%96%E8%8E%8E%E5%90%88%E7%85%A7%23) `43.4K 🔥` `NEW`
1. [美军营救行动细节曝光](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%86%9B%E8%90%A5%E6%95%91%E8%A1%8C%E5%8A%A8%E7%BB%86%E8%8A%82%E6%9B%9D%E5%85%89%23) `42.1K 🔥` `NEW`
1. [郭艾伦被诈骗近千万 (Guo Ailun was defrauded of nearly 10 million yuan)](https://s.weibo.com/weibo?q=%23%E9%83%AD%E8%89%BE%E4%BC%A6%E8%A2%AB%E8%AF%88%E9%AA%97%E8%BF%91%E5%8D%83%E4%B8%87%23) `983.2K 🔥` `+39%`
1. [先辈给我们的留言 (Messages from our ancestors)](https://s.weibo.com/weibo?q=%23%E5%85%88%E8%BE%88%E7%BB%99%E6%88%91%E4%BB%AC%E7%9A%84%E7%95%99%E8%A8%80%23) `577.6K 🔥` `+40%`
1. [周杰伦3小时演唱会实唱不足90分钟 (Jay Chou's 3-hour concert actually performed for less than 90 minutes)](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%9D%B0%E4%BC%A63%E5%B0%8F%E6%97%B6%E6%BC%94%E5%94%B1%E4%BC%9A%E5%AE%9E%E5%94%B1%E4%B8%8D%E8%B6%B390%E5%88%86%E9%92%9F%23) `487.2K 🔥` `+42%`
1. [官方辟谣吹风机养生有奇效 (Official refutes rumors that hair dryers have miraculous health effects)](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E8%BE%9F%E8%B0%A3%E5%90%B9%E9%A3%8E%E6%9C%BA%E5%85%BB%E7%94%9F%E6%9C%89%E5%A5%87%E6%95%88%23) `260.7K 🔥` `+528%`
1. [孙俪回应梅婷发文 (Sun Li responded to Mei Ting’s post)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E4%BF%AA%E5%9B%9E%E5%BA%94%E6%A2%85%E5%A9%B7%E5%8F%91%E6%96%87%23) `249.0K 🔥` `+70%`
1. [妈妈不知儿子去世跟AI儿子聊了1年](https://s.weibo.com/weibo?q=%23%E5%A6%88%E5%A6%88%E4%B8%8D%E7%9F%A5%E5%84%BF%E5%AD%90%E5%8E%BB%E4%B8%96%E8%B7%9FAI%E5%84%BF%E5%AD%90%E8%81%8A%E4%BA%861%E5%B9%B4%23) `164.4K 🔥` `+38%`
1. [博物馆回应曹操墓前摆满布洛芬 (Museum responds to Cao Cao’s tomb being filled with ibuprofen)](https://s.weibo.com/weibo?q=%23%E5%8D%9A%E7%89%A9%E9%A6%86%E5%9B%9E%E5%BA%94%E6%9B%B9%E6%93%8D%E5%A2%93%E5%89%8D%E6%91%86%E6%BB%A1%E5%B8%83%E6%B4%9B%E8%8A%AC%23) `155.1K 🔥` `+63%`
1. [黄晓明已去交警部门接受处罚 (Huang Xiaoming has gone to the traffic police department to accept punishment)](https://s.weibo.com/weibo?q=%23%E9%BB%84%E6%99%93%E6%98%8E%E5%B7%B2%E5%8E%BB%E4%BA%A4%E8%AD%A6%E9%83%A8%E9%97%A8%E6%8E%A5%E5%8F%97%E5%A4%84%E7%BD%9A%23) `153.3K 🔥` `+63%`
1. [孙怡浪姐把脚踩在椅子上 (Sister Sun Yilang stepped on the chair)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%80%A1%E6%B5%AA%E5%A7%90%E6%8A%8A%E8%84%9A%E8%B8%A9%E5%9C%A8%E6%A4%85%E5%AD%90%E4%B8%8A%23) `151.1K 🔥` `+61%`
1. [快递食品被血污染换箱在掩盖什么](https://s.weibo.com/weibo?q=%23%E5%BF%AB%E9%80%92%E9%A3%9F%E5%93%81%E8%A2%AB%E8%A1%80%E6%B1%A1%E6%9F%93%E6%8D%A2%E7%AE%B1%E5%9C%A8%E6%8E%A9%E7%9B%96%E4%BB%80%E4%B9%88%23) `129.2K 🔥` `+27%`
1. [男子用AI写歌仅版权赚了5位数](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E7%94%A8AI%E5%86%99%E6%AD%8C%E4%BB%85%E7%89%88%E6%9D%83%E8%B5%9A%E4%BA%865%E4%BD%8D%E6%95%B0%23) `128.0K 🔥` `+229%`
1. [食客拆台莫氏鸡煲鸡带毛冷冻 (Diners take issue with Moh's Chicken Claypot Chicken Frozen with Feathers)](https://s.weibo.com/weibo?q=%23%E9%A3%9F%E5%AE%A2%E6%8B%86%E5%8F%B0%E8%8E%AB%E6%B0%8F%E9%B8%A1%E7%85%B2%E9%B8%A1%E5%B8%A6%E6%AF%9B%E5%86%B7%E5%86%BB%23) `118.7K 🔥` `+63%`
1. [缓解内耗的解药 (An antidote to relieve internal friction)](https://s.weibo.com/weibo?q=%23%E7%BC%93%E8%A7%A3%E5%86%85%E8%80%97%E7%9A%84%E8%A7%A3%E8%8D%AF%23) `91.6K 🔥` `+37%`
1. [女生托闺蜜照顾5只猫不料全被饿死](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E7%94%9F%E6%89%98%E9%97%BA%E8%9C%9C%E7%85%A7%E9%A1%BE5%E5%8F%AA%E7%8C%AB%E4%B8%8D%E6%96%99%E5%85%A8%E8%A2%AB%E9%A5%BF%E6%AD%BB%23) `90.5K 🔥` `+51%`
1. [伊朗称美军为遮羞轰炸被击落军机](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E7%A7%B0%E7%BE%8E%E5%86%9B%E4%B8%BA%E9%81%AE%E7%BE%9E%E8%BD%B0%E7%82%B8%E8%A2%AB%E5%87%BB%E8%90%BD%E5%86%9B%E6%9C%BA%23) `86.7K 🔥` `+124%`
1. [陕西地震 (Shaanxi earthquake)](https://s.weibo.com/weibo?q=%23%E9%99%95%E8%A5%BF%E5%9C%B0%E9%9C%87%23) `86.0K 🔥` `+59%`
1. [女子晒婆婆升级当奶奶后三天变化 (Woman reveals how her mother-in-law changed in three days after she became a grandmother)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%99%92%E5%A9%86%E5%A9%86%E5%8D%87%E7%BA%A7%E5%BD%93%E5%A5%B6%E5%A5%B6%E5%90%8E%E4%B8%89%E5%A4%A9%E5%8F%98%E5%8C%96%23) `85.6K 🔥` `+54%`
1. [谢娜抚养权判给谁了 (Who was awarded the custody of Xie Na?)](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%A8%9C%E6%8A%9A%E5%85%BB%E6%9D%83%E5%88%A4%E7%BB%99%E8%B0%81%E4%BA%86%23) `78.7K 🔥` `+101%`
1. [撒贝宁 章子怡 (Sa Beining Zhang Ziyi)](https://s.weibo.com/weibo?q=%23%E6%92%92%E8%B4%9D%E5%AE%81%20%E7%AB%A0%E5%AD%90%E6%80%A1%23) `69.9K 🔥` `+21%`
1. [TES举报宁王 (TES reports King Ning)](https://s.weibo.com/weibo?q=%23TES%E4%B8%BE%E6%8A%A5%E5%AE%81%E7%8E%8B%23) `57.9K 🔥` `+30%`
1. [李现张婧仪雾里青4月底开机 (Li Xian, Zhang Jingyi and Wu Li Qing will be released at the end of April)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E7%8E%B0%E5%BC%A0%E5%A9%A7%E4%BB%AA%E9%9B%BE%E9%87%8C%E9%9D%924%E6%9C%88%E5%BA%95%E5%BC%80%E6%9C%BA%23) `52.9K 🔥` `+37%`
1. [美军试图炸死在伊朗失联飞行员 (US military tried to kill pilot missing in Iran)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%86%9B%E8%AF%95%E5%9B%BE%E7%82%B8%E6%AD%BB%E5%9C%A8%E4%BC%8A%E6%9C%97%E5%A4%B1%E8%81%94%E9%A3%9E%E8%A1%8C%E5%91%98%23) `51.5K 🔥` `+36%`
1. [200万火锅店营业额990 (2 million hot pot restaurant turnover 990)](https://s.weibo.com/weibo?q=%23200%E4%B8%87%E7%81%AB%E9%94%85%E5%BA%97%E8%90%A5%E4%B8%9A%E9%A2%9D990%23) `51.0K 🔥` `+35%`
1. [女子回应被抢后开车撞劫匪致1死2伤](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%9B%9E%E5%BA%94%E8%A2%AB%E6%8A%A2%E5%90%8E%E5%BC%80%E8%BD%A6%E6%92%9E%E5%8A%AB%E5%8C%AA%E8%87%B41%E6%AD%BB2%E4%BC%A4%23) `160.9K 🔥`
1. [美官员说失踪飞行员尚未脱险](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%AE%98%E5%91%98%E8%AF%B4%E5%A4%B1%E8%B8%AA%E9%A3%9E%E8%A1%8C%E5%91%98%E5%B0%9A%E6%9C%AA%E8%84%B1%E9%99%A9%23) `78.5K 🔥`
1. [特朗普透露美军营救飞行员细节 (Trump reveals details of US military rescue of pilot)](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E9%80%8F%E9%9C%B2%E7%BE%8E%E5%86%9B%E8%90%A5%E6%95%91%E9%A3%9E%E8%A1%8C%E5%91%98%E7%BB%86%E8%8A%82%23) `78.4K 🔥`
1. [孙颖莎王楚钦顶峰相见 (Sun Yingsha and Wang Chuqin meet at the top)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E7%8E%8B%E6%A5%9A%E9%92%A6%E9%A1%B6%E5%B3%B0%E7%9B%B8%E8%A7%81%23) `78.4K 🔥`
1. [新加坡偶遇唐嫣罗晋一家三口 (Encounter with Tang Yan and Luo Jin’s family of three in Singapore)](https://s.weibo.com/weibo?q=%23%E6%96%B0%E5%8A%A0%E5%9D%A1%E5%81%B6%E9%81%87%E5%94%90%E5%AB%A3%E7%BD%97%E6%99%8B%E4%B8%80%E5%AE%B6%E4%B8%89%E5%8F%A3%23) `68.5K 🔥`
1. [女子长期虐待2岁儿子还拍视频 (Woman abuses her 2-year-old son for a long time and makes video)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E9%95%BF%E6%9C%9F%E8%99%90%E5%BE%852%E5%B2%81%E5%84%BF%E5%AD%90%E8%BF%98%E6%8B%8D%E8%A7%86%E9%A2%91%23) `61.3K 🔥`
1. [陈赫女儿是鹿晗干女儿](https://s.weibo.com/weibo?q=%23%E9%99%88%E8%B5%AB%E5%A5%B3%E5%84%BF%E6%98%AF%E9%B9%BF%E6%99%97%E5%B9%B2%E5%A5%B3%E5%84%BF%23) `58.4K 🔥`
1. [孙俪吴慷仁演技 高手过招 (Sun Li and Wu Kangren's acting skills compete with the masters)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E4%BF%AA%E5%90%B4%E6%85%B7%E4%BB%81%E6%BC%94%E6%8A%80%20%E9%AB%98%E6%89%8B%E8%BF%87%E6%8B%9B%23) `50.8K 🔥`
1. [孙颖莎填补长达53年空白 (Sun Yingsha fills the gap of 53 years)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E5%A1%AB%E8%A1%A5%E9%95%BF%E8%BE%BE53%E5%B9%B4%E7%A9%BA%E7%99%BD%23) `42.4K 🔥`
1. [伊朗称美军营救飞行员任务失败 (Iran says US military mission to rescue pilot failed)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E7%A7%B0%E7%BE%8E%E5%86%9B%E8%90%A5%E6%95%91%E9%A3%9E%E8%A1%8C%E5%91%98%E4%BB%BB%E5%8A%A1%E5%A4%B1%E8%B4%A5%23) `42.1K 🔥`
1. [赵心童vs特鲁姆普](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E5%BF%83%E7%AB%A5vs%E7%89%B9%E9%B2%81%E5%A7%86%E6%99%AE%23) `42.1K 🔥`
1. [王楚钦夺冠 (Wang Chuqin won the championship)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E5%A4%BA%E5%86%A0%23) `261.6K 🔥` `-49%`
1. [王楚钦距大满贯只差奥运冠军](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E8%B7%9D%E5%A4%A7%E6%BB%A1%E8%B4%AF%E5%8F%AA%E5%B7%AE%E5%A5%A5%E8%BF%90%E5%86%A0%E5%86%9B%23) `96.0K 🔥` `-25%`

Updated at 2026-04-06 07:52:04

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
