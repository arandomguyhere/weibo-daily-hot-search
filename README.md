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

1. [朱雀三号 (Suzaku No.3)](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E9%9B%80%E4%B8%89%E5%8F%B7%23) `707.1K 🔥` `NEW`
1. [公积金用途又多了](https://s.weibo.com/weibo?q=%23%E5%85%AC%E7%A7%AF%E9%87%91%E7%94%A8%E9%80%94%E5%8F%88%E5%A4%9A%E4%BA%86%23) `535.8K 🔥` `NEW`
1. [七夕送礼上美团闪购](https://s.weibo.com/weibo?q=%23%E4%B8%83%E5%A4%95%E9%80%81%E7%A4%BC%E4%B8%8A%E7%BE%8E%E5%9B%A2%E9%97%AA%E8%B4%AD%23) `532.2K 🔥` `NEW`
1. [美国以色列达成一致](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E4%BB%A5%E8%89%B2%E5%88%97%E8%BE%BE%E6%88%90%E4%B8%80%E8%87%B4%23) `284.0K 🔥` `NEW`
1. [小米机器人将首次亮相](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E6%9C%BA%E5%99%A8%E4%BA%BA%E5%B0%86%E9%A6%96%E6%AC%A1%E4%BA%AE%E7%9B%B8%23) `265.7K 🔥` `NEW`
1. [周深两场演唱会带动周边消费近3亿](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%B7%B1%E4%B8%A4%E5%9C%BA%E6%BC%94%E5%94%B1%E4%BC%9A%E5%B8%A6%E5%8A%A8%E5%91%A8%E8%BE%B9%E6%B6%88%E8%B4%B9%E8%BF%913%E4%BA%BF%23) `262.9K 🔥` `NEW`
1. [朱镕基同志生平 (Comrade Zhu Rongji's Life)](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E9%95%95%E5%9F%BA%E5%90%8C%E5%BF%97%E7%94%9F%E5%B9%B3%23) `946.8K 🔥` `+21%`
1. [睡前代谢皮质醇流程 (Cortisol metabolism process before bed)](https://s.weibo.com/weibo?q=%23%E7%9D%A1%E5%89%8D%E4%BB%A3%E8%B0%A2%E7%9A%AE%E8%B4%A8%E9%86%87%E6%B5%81%E7%A8%8B%23) `500.3K 🔥` `+52%`
1. [狗妈妈每天叼4只崽上楼吹空调](https://s.weibo.com/weibo?q=%23%E7%8B%97%E5%A6%88%E5%A6%88%E6%AF%8F%E5%A4%A9%E5%8F%BC4%E5%8F%AA%E5%B4%BD%E4%B8%8A%E6%A5%BC%E5%90%B9%E7%A9%BA%E8%B0%83%23) `462.3K 🔥` `+274%`
1. [胖东来招聘不包含性侵犯罪人员 (Fat Dong Lai recruits people who do not include sexual assault crimes)](https://s.weibo.com/weibo?q=%23%E8%83%96%E4%B8%9C%E6%9D%A5%E6%8B%9B%E8%81%98%E4%B8%8D%E5%8C%85%E5%90%AB%E6%80%A7%E4%BE%B5%E7%8A%AF%E7%BD%AA%E4%BA%BA%E5%91%98%23) `352.3K 🔥` `+37%`
1. [做事千万不要有状态洁癖](https://s.weibo.com/weibo?q=%23%E5%81%9A%E4%BA%8B%E5%8D%83%E4%B8%87%E4%B8%8D%E8%A6%81%E6%9C%89%E7%8A%B6%E6%80%81%E6%B4%81%E7%99%96%23) `347.2K 🔥` `+26%`
1. [上海2026社保基数公布 (Shanghai 2026 social security base announced)](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B72026%E7%A4%BE%E4%BF%9D%E5%9F%BA%E6%95%B0%E5%85%AC%E5%B8%83%23) `338.1K 🔥` `+100%`
1. [公积金](https://s.weibo.com/weibo?q=%23%E5%85%AC%E7%A7%AF%E9%87%91%23) `330.3K 🔥` `+140%`
1. [女子开门杀反遭关门杀 (Woman opens door to kill but closes door to kill her)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%BC%80%E9%97%A8%E6%9D%80%E5%8F%8D%E9%81%AD%E5%85%B3%E9%97%A8%E6%9D%80%23) `323.6K 🔥` `+138%`
1. [李现回沙溪古镇了 (Li Xian returned to Shaxi Ancient Town)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E7%8E%B0%E5%9B%9E%E6%B2%99%E6%BA%AA%E5%8F%A4%E9%95%87%E4%BA%86%23) `321.6K 🔥` `+139%`
1. [全国首例反强拆致死判正当防卫案 (The country's first case of self-defense against forced demolition resulting in death)](https://s.weibo.com/weibo?q=%23%E5%85%A8%E5%9B%BD%E9%A6%96%E4%BE%8B%E5%8F%8D%E5%BC%BA%E6%8B%86%E8%87%B4%E6%AD%BB%E5%88%A4%E6%AD%A3%E5%BD%93%E9%98%B2%E5%8D%AB%E6%A1%88%23) `321.5K 🔥` `+138%`
1. [你的经济属于什么水平](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E7%9A%84%E7%BB%8F%E6%B5%8E%E5%B1%9E%E4%BA%8E%E4%BB%80%E4%B9%88%E6%B0%B4%E5%B9%B3%23) `319.0K 🔥` `+139%`
1. [美股 (US stocks)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E8%82%A1%23) `318.2K 🔥` `+140%`
1. [公积金 强制缴纳 (Provident fund compulsory payment)](https://s.weibo.com/weibo?q=%23%E5%85%AC%E7%A7%AF%E9%87%91%20%E5%BC%BA%E5%88%B6%E7%BC%B4%E7%BA%B3%23) `315.3K 🔥` `+135%`
1. [柯洁装弱智赢AI围棋 (Ke Jie pretends to be mentally retarded and wins AI Go)](https://s.weibo.com/weibo?q=%23%E6%9F%AF%E6%B4%81%E8%A3%85%E5%BC%B1%E6%99%BA%E8%B5%A2AI%E5%9B%B4%E6%A3%8B%23) `315.0K 🔥` `+149%`
1. [何炅因年龄大被密室拒绝 (He Jiong was rejected by the secret room because of his age)](https://s.weibo.com/weibo?q=%23%E4%BD%95%E7%82%85%E5%9B%A0%E5%B9%B4%E9%BE%84%E5%A4%A7%E8%A2%AB%E5%AF%86%E5%AE%A4%E6%8B%92%E7%BB%9D%23) `313.5K 🔥` `+151%`
1. [白鹿包场敖瑞鹏孙珍妮师兄太稳健 (Bailu Private Ao Ruipeng and Sun Jenny are too steady)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E5%8C%85%E5%9C%BA%E6%95%96%E7%91%9E%E9%B9%8F%E5%AD%99%E7%8F%8D%E5%A6%AE%E5%B8%88%E5%85%84%E5%A4%AA%E7%A8%B3%E5%81%A5%23) `311.4K 🔥` `+151%`
1. [穆祉丞像七夕报备的男友](https://s.weibo.com/weibo?q=%23%E7%A9%86%E7%A5%89%E4%B8%9E%E5%83%8F%E4%B8%83%E5%A4%95%E6%8A%A5%E5%A4%87%E7%9A%84%E7%94%B7%E5%8F%8B%23) `309.7K 🔥` `+142%`
1. [Dior全球公关总监去世 (Dior's global PR director dies)](https://s.weibo.com/weibo?q=%23Dior%E5%85%A8%E7%90%83%E5%85%AC%E5%85%B3%E6%80%BB%E7%9B%91%E5%8E%BB%E4%B8%96%23) `308.4K 🔥` `+138%`
1. [真心喜欢一个人是什么样的 (What does it feel like to really like someone?)](https://s.weibo.com/weibo?q=%23%E7%9C%9F%E5%BF%83%E5%96%9C%E6%AC%A2%E4%B8%80%E4%B8%AA%E4%BA%BA%E6%98%AF%E4%BB%80%E4%B9%88%E6%A0%B7%E7%9A%84%23) `306.0K 🔥` `+137%`
1. [保送中南大学的女孩因蓝发走红 (The girl recommended to Central South University became famous because of her blue hair)](https://s.weibo.com/weibo?q=%23%E4%BF%9D%E9%80%81%E4%B8%AD%E5%8D%97%E5%A4%A7%E5%AD%A6%E7%9A%84%E5%A5%B3%E5%AD%A9%E5%9B%A0%E8%93%9D%E5%8F%91%E8%B5%B0%E7%BA%A2%23) `305.4K 🔥` `+140%`
1. [甲状腺最怕的坏习惯 (The bad habits thyroid fears most)](https://s.weibo.com/weibo?q=%23%E7%94%B2%E7%8A%B6%E8%85%BA%E6%9C%80%E6%80%95%E7%9A%84%E5%9D%8F%E4%B9%A0%E6%83%AF%23) `303.9K 🔥` `+137%`
1. [比野生狗奶还永久的存在出现了 (A more permanent existence than wild dog milk appears)](https://s.weibo.com/weibo?q=%23%E6%AF%94%E9%87%8E%E7%94%9F%E7%8B%97%E5%A5%B6%E8%BF%98%E6%B0%B8%E4%B9%85%E7%9A%84%E5%AD%98%E5%9C%A8%E5%87%BA%E7%8E%B0%E4%BA%86%23) `301.9K 🔥` `+127%`
1. [刘亦菲携爱宠登芭莎九月封面](https://s.weibo.com/weibo?q=%23%E5%88%98%E4%BA%A6%E8%8F%B2%E6%90%BA%E7%88%B1%E5%AE%A0%E7%99%BB%E8%8A%AD%E8%8E%8E%E4%B9%9D%E6%9C%88%E5%B0%81%E9%9D%A2%23) `300.4K 🔥` `+144%`
1. [爱奇艺第二季度收入62.9亿元](https://s.weibo.com/weibo?q=%23%E7%88%B1%E5%A5%87%E8%89%BA%E7%AC%AC%E4%BA%8C%E5%AD%A3%E5%BA%A6%E6%94%B6%E5%85%A562.9%E4%BA%BF%E5%85%83%23) `298.2K 🔥` `+138%`
1. [吴泽林曾在现场情绪失控](https://s.weibo.com/weibo?q=%23%E5%90%B4%E6%B3%BD%E6%9E%97%E6%9B%BE%E5%9C%A8%E7%8E%B0%E5%9C%BA%E6%83%85%E7%BB%AA%E5%A4%B1%E6%8E%A7%23) `296.1K 🔥` `+126%`
1. [闫佩伦演技 (Yan Peilun's acting skills)](https://s.weibo.com/weibo?q=%23%E9%97%AB%E4%BD%A9%E4%BC%A6%E6%BC%94%E6%8A%80%23) `294.5K 🔥` `+160%`
1. [调查组通报杭州酒局事件 (Investigation team reports incident at Hangzhou Wine Bureau)](https://s.weibo.com/weibo?q=%23%E8%B0%83%E6%9F%A5%E7%BB%84%E9%80%9A%E6%8A%A5%E6%9D%AD%E5%B7%9E%E9%85%92%E5%B1%80%E4%BA%8B%E4%BB%B6%23) `294.0K 🔥` `+115%`
1. [杭州酒局事件涉事者未喝多 (The person involved in the Hangzhou Wine Bureau incident did not drink too much)](https://s.weibo.com/weibo?q=%23%E6%9D%AD%E5%B7%9E%E9%85%92%E5%B1%80%E4%BA%8B%E4%BB%B6%E6%B6%89%E4%BA%8B%E8%80%85%E6%9C%AA%E5%96%9D%E5%A4%9A%23) `292.5K 🔥` `+132%`
1. [女子下车被电动车撞回车内双方发声 (Woman got off the car and was hit by an electric car and returned to the car. Both parties spoke out)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E4%B8%8B%E8%BD%A6%E8%A2%AB%E7%94%B5%E5%8A%A8%E8%BD%A6%E6%92%9E%E5%9B%9E%E8%BD%A6%E5%86%85%E5%8F%8C%E6%96%B9%E5%8F%91%E5%A3%B0%23) `290.2K 🔥` `+141%`
1. [现在该不该换手机 (Should I change my mobile phone now?)](https://s.weibo.com/weibo?q=%23%E7%8E%B0%E5%9C%A8%E8%AF%A5%E4%B8%8D%E8%AF%A5%E6%8D%A2%E6%89%8B%E6%9C%BA%23) `286.9K 🔥` `+118%`
1. [日本稀土进口量降至中国管制前2成](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E7%A8%80%E5%9C%9F%E8%BF%9B%E5%8F%A3%E9%87%8F%E9%99%8D%E8%87%B3%E4%B8%AD%E5%9B%BD%E7%AE%A1%E5%88%B6%E5%89%8D2%E6%88%90%23) `284.8K 🔥` `+134%`
1. [青海海西发生5.6级地震](https://s.weibo.com/weibo?q=%23%E9%9D%92%E6%B5%B7%E6%B5%B7%E8%A5%BF%E5%8F%91%E7%94%9F5.6%E7%BA%A7%E5%9C%B0%E9%9C%87%23) `282.2K 🔥` `+136%`
1. [25岁小伙见网恋女友失联近两年 (25-year-old man lost contact with his online girlfriend for nearly two years)](https://s.weibo.com/weibo?q=%2325%E5%B2%81%E5%B0%8F%E4%BC%99%E8%A7%81%E7%BD%91%E6%81%8B%E5%A5%B3%E5%8F%8B%E5%A4%B1%E8%81%94%E8%BF%91%E4%B8%A4%E5%B9%B4%23) `280.6K 🔥` `+326%`
1. [公积金新规 通俗解读](https://s.weibo.com/weibo?q=%23%E5%85%AC%E7%A7%AF%E9%87%91%E6%96%B0%E8%A7%84%20%E9%80%9A%E4%BF%97%E8%A7%A3%E8%AF%BB%23) `278.9K 🔥` `+130%`
1. [女子在洗澡间装了张凌赫窗帘](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%9C%A8%E6%B4%97%E6%BE%A1%E9%97%B4%E8%A3%85%E4%BA%86%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%AA%97%E5%B8%98%23) `278.1K 🔥` `+141%`
1. [杭州酒局事件受害方入院时一度昏迷 (The victim of the Hangzhou Wine Bureau incident was in a coma when he was admitted to the hospital)](https://s.weibo.com/weibo?q=%23%E6%9D%AD%E5%B7%9E%E9%85%92%E5%B1%80%E4%BA%8B%E4%BB%B6%E5%8F%97%E5%AE%B3%E6%96%B9%E5%85%A5%E9%99%A2%E6%97%B6%E4%B8%80%E5%BA%A6%E6%98%8F%E8%BF%B7%23) `276.1K 🔥` `+138%`
1. [一餐馆未打码曝光多名逃单顾客照片 (A restaurant exposed photos of multiple customers who skipped orders without coding)](https://s.weibo.com/weibo?q=%23%E4%B8%80%E9%A4%90%E9%A6%86%E6%9C%AA%E6%89%93%E7%A0%81%E6%9B%9D%E5%85%89%E5%A4%9A%E5%90%8D%E9%80%83%E5%8D%95%E9%A1%BE%E5%AE%A2%E7%85%A7%E7%89%87%23) `273.7K 🔥` `+145%`
1. [真正决定一个人能走多远的三种能力 (Three abilities that really determine how far a person can go)](https://s.weibo.com/weibo?q=%23%E7%9C%9F%E6%AD%A3%E5%86%B3%E5%AE%9A%E4%B8%80%E4%B8%AA%E4%BA%BA%E8%83%BD%E8%B5%B0%E5%A4%9A%E8%BF%9C%E7%9A%84%E4%B8%89%E7%A7%8D%E8%83%BD%E5%8A%9B%23) `272.4K 🔥` `+132%`
1. [赵某峰将被害人推倒致腰部受伤 (Zhao Moufeng pushed the victim down and injured his waist)](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E6%9F%90%E5%B3%B0%E5%B0%86%E8%A2%AB%E5%AE%B3%E4%BA%BA%E6%8E%A8%E5%80%92%E8%87%B4%E8%85%B0%E9%83%A8%E5%8F%97%E4%BC%A4%23) `271.1K 🔥` `+132%`
1. [鞠婧祎的车开到长江国际了 (Ju Jingyi’s car has arrived at Yangtze River International)](https://s.weibo.com/weibo?q=%23%E9%9E%A0%E5%A9%A7%E7%A5%8E%E7%9A%84%E8%BD%A6%E5%BC%80%E5%88%B0%E9%95%BF%E6%B1%9F%E5%9B%BD%E9%99%85%E4%BA%86%23) `269.5K 🔥` `+127%`
1. [我的前半生 (my first half life)](https://s.weibo.com/weibo?q=%23%E6%88%91%E7%9A%84%E5%89%8D%E5%8D%8A%E7%94%9F%23) `267.6K 🔥` `+105%`
1. [周洛汐演唱会喊话KPOP三大公司](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%B4%9B%E6%B1%90%E6%BC%94%E5%94%B1%E4%BC%9A%E5%96%8A%E8%AF%9DKPOP%E4%B8%89%E5%A4%A7%E5%85%AC%E5%8F%B8%23) `264.8K 🔥` `+136%`
1. [外卖备注孩子化疗收到100元现金 (Takeaway note: My child received 100 yuan in cash during chemotherapy)](https://s.weibo.com/weibo?q=%23%E5%A4%96%E5%8D%96%E5%A4%87%E6%B3%A8%E5%AD%A9%E5%AD%90%E5%8C%96%E7%96%97%E6%94%B6%E5%88%B0100%E5%85%83%E7%8E%B0%E9%87%91%23) `261.9K 🔥` `+128%`
1. [七夕 (Chinese Valentine's Day)](https://s.weibo.com/weibo?q=%23%E4%B8%83%E5%A4%95%23) `366.7K 🔥` `-35%`
1. [9部门发文活跃县域消费 (9 departments issued documents to activate consumption in counties)](https://s.weibo.com/weibo?q=%239%E9%83%A8%E9%97%A8%E5%8F%91%E6%96%87%E6%B4%BB%E8%B7%83%E5%8E%BF%E5%9F%9F%E6%B6%88%E8%B4%B9%23) `288.8K 🔥` `-38%`

Updated at 2026-08-19 07:54:12

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
