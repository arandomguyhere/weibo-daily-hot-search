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

1. [父子景区划桨板遇台风落水爸爸去世 (Father and son paddleboarding in scenic spot fell into water during typhoon, father died)](https://s.weibo.com/weibo?q=%23%E7%88%B6%E5%AD%90%E6%99%AF%E5%8C%BA%E5%88%92%E6%A1%A8%E6%9D%BF%E9%81%87%E5%8F%B0%E9%A3%8E%E8%90%BD%E6%B0%B4%E7%88%B8%E7%88%B8%E5%8E%BB%E4%B8%96%23) `567.5K 🔥` `NEW`
1. [世预赛中国男篮诸暨主场迎战黎巴嫩](https://s.weibo.com/weibo?q=%23%E4%B8%96%E9%A2%84%E8%B5%9B%E4%B8%AD%E5%9B%BD%E7%94%B7%E7%AF%AE%E8%AF%B8%E6%9A%A8%E4%B8%BB%E5%9C%BA%E8%BF%8E%E6%88%98%E9%BB%8E%E5%B7%B4%E5%AB%A9%23) `355.6K 🔥` `NEW`
1. [李宏毅后援会会长正式提出辞职](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%AE%8F%E6%AF%85%E5%90%8E%E6%8F%B4%E4%BC%9A%E4%BC%9A%E9%95%BF%E6%AD%A3%E5%BC%8F%E6%8F%90%E5%87%BA%E8%BE%9E%E8%81%8C%23) `352.3K 🔥` `NEW`
1. [3位三支一扶考生疑13天提高20余分](https://s.weibo.com/weibo?q=%233%E4%BD%8D%E4%B8%89%E6%94%AF%E4%B8%80%E6%89%B6%E8%80%83%E7%94%9F%E7%96%9113%E5%A4%A9%E6%8F%90%E9%AB%9820%E4%BD%99%E5%88%86%23) `351.3K 🔥` `NEW`
1. [金鹰奖女主名单总共6名](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%B9%B0%E5%A5%96%E5%A5%B3%E4%B8%BB%E5%90%8D%E5%8D%95%E6%80%BB%E5%85%B16%E5%90%8D%23) `348.0K 🔥` `NEW`
1. [媒体评李姓艺人高铁占座](https://s.weibo.com/weibo?q=%23%E5%AA%92%E4%BD%93%E8%AF%84%E6%9D%8E%E5%A7%93%E8%89%BA%E4%BA%BA%E9%AB%98%E9%93%81%E5%8D%A0%E5%BA%A7%23) `347.2K 🔥` `NEW`
1. [唐山大地震50周年](https://s.weibo.com/weibo?q=%23%E5%94%90%E5%B1%B1%E5%A4%A7%E5%9C%B0%E9%9C%8750%E5%91%A8%E5%B9%B4%23) `342.8K 🔥` `NEW`
1. [王虹导师窗外凝望其报告会满座火了](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%99%B9%E5%AF%BC%E5%B8%88%E7%AA%97%E5%A4%96%E5%87%9D%E6%9C%9B%E5%85%B6%E6%8A%A5%E5%91%8A%E4%BC%9A%E6%BB%A1%E5%BA%A7%E7%81%AB%E4%BA%86%23) `341.1K 🔥` `NEW`
1. [金鹰奖最佳女主角预测提名](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%B9%B0%E5%A5%96%E6%9C%80%E4%BD%B3%E5%A5%B3%E4%B8%BB%E8%A7%92%E9%A2%84%E6%B5%8B%E6%8F%90%E5%90%8D%23) `335.8K 🔥` `NEW`
1. [听泉赏宝炒股把爸妈工资卡里的钱亏没了](https://s.weibo.com/weibo?q=%23%E5%90%AC%E6%B3%89%E8%B5%8F%E5%AE%9D%E7%82%92%E8%82%A1%E6%8A%8A%E7%88%B8%E5%A6%88%E5%B7%A5%E8%B5%84%E5%8D%A1%E9%87%8C%E7%9A%84%E9%92%B1%E4%BA%8F%E6%B2%A1%E4%BA%86%23) `325.5K 🔥` `NEW`
1. [张凌赫的眼泪像断了线的珍珠 (Zhang Linghe's tears are like broken pearls)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%9A%84%E7%9C%BC%E6%B3%AA%E5%83%8F%E6%96%AD%E4%BA%86%E7%BA%BF%E7%9A%84%E7%8F%8D%E7%8F%A0%23) `320.3K 🔥` `NEW`
1. [苏有朋20年后赴约大同喊如萍](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E6%9C%89%E6%9C%8B20%E5%B9%B4%E5%90%8E%E8%B5%B4%E7%BA%A6%E5%A4%A7%E5%90%8C%E5%96%8A%E5%A6%82%E8%90%8D%23) `317.4K 🔥` `NEW`
1. [肠癌有两个特点](https://s.weibo.com/weibo?q=%23%E8%82%A0%E7%99%8C%E6%9C%89%E4%B8%A4%E4%B8%AA%E7%89%B9%E7%82%B9%23) `314.1K 🔥` `NEW`
1. [谢霆锋真的好像妈妈狄波拉](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E9%9C%86%E9%94%8B%E7%9C%9F%E7%9A%84%E5%A5%BD%E5%83%8F%E5%A6%88%E5%A6%88%E7%8B%84%E6%B3%A2%E6%8B%89%23) `312.3K 🔥` `NEW`
1. [林志颖的基因彩票还在发力](https://s.weibo.com/weibo?q=%23%E6%9E%97%E5%BF%97%E9%A2%96%E7%9A%84%E5%9F%BA%E5%9B%A0%E5%BD%A9%E7%A5%A8%E8%BF%98%E5%9C%A8%E5%8F%91%E5%8A%9B%23) `310.4K 🔥` `NEW`
1. [四辆越野车高速并行警方已介入](https://s.weibo.com/weibo?q=%23%E5%9B%9B%E8%BE%86%E8%B6%8A%E9%87%8E%E8%BD%A6%E9%AB%98%E9%80%9F%E5%B9%B6%E8%A1%8C%E8%AD%A6%E6%96%B9%E5%B7%B2%E4%BB%8B%E5%85%A5%23) `307.8K 🔥` `NEW`
1. [徐艺洋扮鸵鸟吓黄子韬](https://s.weibo.com/weibo?q=%23%E5%BE%90%E8%89%BA%E6%B4%8B%E6%89%AE%E9%B8%B5%E9%B8%9F%E5%90%93%E9%BB%84%E5%AD%90%E9%9F%AC%23) `305.9K 🔥` `NEW`
1. [迪丽热巴五大月刊全满贯](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E4%BA%94%E5%A4%A7%E6%9C%88%E5%88%8A%E5%85%A8%E6%BB%A1%E8%B4%AF%23) `304.4K 🔥` `NEW`
1. [鞠婧祎苏绿夏 贩卖魔药](https://s.weibo.com/weibo?q=%23%E9%9E%A0%E5%A9%A7%E7%A5%8E%E8%8B%8F%E7%BB%BF%E5%A4%8F%20%E8%B4%A9%E5%8D%96%E9%AD%94%E8%8D%AF%23) `293.1K 🔥` `NEW`
1. [佛得角门将泪流满面图片为AI生成](https://s.weibo.com/weibo?q=%23%E4%BD%9B%E5%BE%97%E8%A7%92%E9%97%A8%E5%B0%86%E6%B3%AA%E6%B5%81%E6%BB%A1%E9%9D%A2%E5%9B%BE%E7%89%87%E4%B8%BAAI%E7%94%9F%E6%88%90%23) `290.9K 🔥` `NEW`
1. [影视寒冬哥哥们伙食倒是迎春了 (In the cold winter of film and television, brothers, the food is ready to welcome the spring.)](https://s.weibo.com/weibo?q=%23%E5%BD%B1%E8%A7%86%E5%AF%92%E5%86%AC%E5%93%A5%E5%93%A5%E4%BB%AC%E4%BC%99%E9%A3%9F%E5%80%92%E6%98%AF%E8%BF%8E%E6%98%A5%E4%BA%86%23) `286.5K 🔥` `NEW`
1. [DeepSeek不押C端反而是优势](https://s.weibo.com/weibo?q=%23DeepSeek%E4%B8%8D%E6%8A%BCC%E7%AB%AF%E5%8F%8D%E8%80%8C%E6%98%AF%E4%BC%98%E5%8A%BF%23) `283.8K 🔥` `NEW`
1. [李卿第一部正剧题材男主剧](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%8D%BF%E7%AC%AC%E4%B8%80%E9%83%A8%E6%AD%A3%E5%89%A7%E9%A2%98%E6%9D%90%E7%94%B7%E4%B8%BB%E5%89%A7%23) `282.9K 🔥` `NEW`
1. [美股 (US stocks)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E8%82%A1%23) `1.1M 🔥` `+288%`
1. [金鹰奖 提名名单 (Golden Eagle Award Nomination List)](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%B9%B0%E5%A5%96%20%E6%8F%90%E5%90%8D%E5%90%8D%E5%8D%95%23) `827.2K 🔥` `+41%`
1. [数说中国硬核经济亮点](https://s.weibo.com/weibo?q=%23%E6%95%B0%E8%AF%B4%E4%B8%AD%E5%9B%BD%E7%A1%AC%E6%A0%B8%E7%BB%8F%E6%B5%8E%E4%BA%AE%E7%82%B9%23) `824.3K 🔥` `+121%`
1. [超过五年没联系的朋友直接删](https://s.weibo.com/weibo?q=%23%E8%B6%85%E8%BF%87%E4%BA%94%E5%B9%B4%E6%B2%A1%E8%81%94%E7%B3%BB%E7%9A%84%E6%9C%8B%E5%8F%8B%E7%9B%B4%E6%8E%A5%E5%88%A0%23) `822.6K 🔥` `+143%`
1. [徐正溪赵今麦好有药味的父女线 (Xu Zhengxi and Zhao Jinmai have a medicinal father-daughter line)](https://s.weibo.com/weibo?q=%23%E5%BE%90%E6%AD%A3%E6%BA%AA%E8%B5%B5%E4%BB%8A%E9%BA%A6%E5%A5%BD%E6%9C%89%E8%8D%AF%E5%91%B3%E7%9A%84%E7%88%B6%E5%A5%B3%E7%BA%BF%23) `359.0K 🔥` `+48%`
1. [各个行业被AI取代的概率](https://s.weibo.com/weibo?q=%23%E5%90%84%E4%B8%AA%E8%A1%8C%E4%B8%9A%E8%A2%ABAI%E5%8F%96%E4%BB%A3%E7%9A%84%E6%A6%82%E7%8E%87%23) `358.8K 🔥` `+303%`
1. [白夜行一个恶生恶的故事](https://s.weibo.com/weibo?q=%23%E7%99%BD%E5%A4%9C%E8%A1%8C%E4%B8%80%E4%B8%AA%E6%81%B6%E7%94%9F%E6%81%B6%E7%9A%84%E6%95%85%E4%BA%8B%23) `354.4K 🔥` `+69%`
1. [15个不成熟父母的特征 (15 Characteristics of Immature Parents)](https://s.weibo.com/weibo?q=%2315%E4%B8%AA%E4%B8%8D%E6%88%90%E7%86%9F%E7%88%B6%E6%AF%8D%E7%9A%84%E7%89%B9%E5%BE%81%23) `345.3K 🔥` `+209%`
1. [阿里押注长鑫76亿搏出近1700亿 (Alibaba bet 7.6 billion on Changxin and made nearly 170 billion)](https://s.weibo.com/weibo?q=%23%E9%98%BF%E9%87%8C%E6%8A%BC%E6%B3%A8%E9%95%BF%E9%91%AB76%E4%BA%BF%E6%90%8F%E5%87%BA%E8%BF%911700%E4%BA%BF%23) `339.5K 🔥` `+298%`
1. [20岁女孩从18楼坠落奇迹生还](https://s.weibo.com/weibo?q=%2320%E5%B2%81%E5%A5%B3%E5%AD%A9%E4%BB%8E18%E6%A5%BC%E5%9D%A0%E8%90%BD%E5%A5%87%E8%BF%B9%E7%94%9F%E8%BF%98%23) `337.3K 🔥` `+371%`
1. [摊位脏臭但11岁杀鱼女孩满面笑容 (The stall is dirty and smelly, but the 11-year-old fish-killing girl is all smiles)](https://s.weibo.com/weibo?q=%23%E6%91%8A%E4%BD%8D%E8%84%8F%E8%87%AD%E4%BD%8611%E5%B2%81%E6%9D%80%E9%B1%BC%E5%A5%B3%E5%AD%A9%E6%BB%A1%E9%9D%A2%E7%AC%91%E5%AE%B9%23) `333.8K 🔥` `+430%`
1. [老人一个月内被骗光600万积蓄](https://s.weibo.com/weibo?q=%23%E8%80%81%E4%BA%BA%E4%B8%80%E4%B8%AA%E6%9C%88%E5%86%85%E8%A2%AB%E9%AA%97%E5%85%89600%E4%B8%87%E7%A7%AF%E8%93%84%23) `332.1K 🔥` `+426%`
1. [好大儿把猫妈快压扁了](https://s.weibo.com/weibo?q=%23%E5%A5%BD%E5%A4%A7%E5%84%BF%E6%8A%8A%E7%8C%AB%E5%A6%88%E5%BF%AB%E5%8E%8B%E6%89%81%E4%BA%86%23) `331.4K 🔥` `+428%`
1. [肠癌很多人发现就是中晚期 (Many people with bowel cancer are diagnosed in the middle and late stages)](https://s.weibo.com/weibo?q=%23%E8%82%A0%E7%99%8C%E5%BE%88%E5%A4%9A%E4%BA%BA%E5%8F%91%E7%8E%B0%E5%B0%B1%E6%98%AF%E4%B8%AD%E6%99%9A%E6%9C%9F%23) `327.3K 🔥` `+306%`
1. [美国掀起中国科技大讨论 (The United States sets off a major discussion on China's science and technology)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E6%8E%80%E8%B5%B7%E4%B8%AD%E5%9B%BD%E7%A7%91%E6%8A%80%E5%A4%A7%E8%AE%A8%E8%AE%BA%23) `323.9K 🔥` `+258%`
1. [丁禹兮侯明昊官宣同一场音乐节 (Ding Yuxi and Hou Minghao officially announce the same music festival)](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A6%B9%E5%85%AE%E4%BE%AF%E6%98%8E%E6%98%8A%E5%AE%98%E5%AE%A3%E5%90%8C%E4%B8%80%E5%9C%BA%E9%9F%B3%E4%B9%90%E8%8A%82%23) `322.0K 🔥` `+414%`
1. [A股隐形龙头涨幅远超长鑫科技 (A-share invisible leader has gained much more than Changxin Technology)](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E9%9A%90%E5%BD%A2%E9%BE%99%E5%A4%B4%E6%B6%A8%E5%B9%85%E8%BF%9C%E8%B6%85%E9%95%BF%E9%91%AB%E7%A7%91%E6%8A%80%23) `302.0K 🔥` `+379%`
1. [敬一丹公众号疑似辟谣去世传闻 (Jing Yidan’s public account appears to refute rumors of his death)](https://s.weibo.com/weibo?q=%23%E6%95%AC%E4%B8%80%E4%B8%B9%E5%85%AC%E4%BC%97%E5%8F%B7%E7%96%91%E4%BC%BC%E8%BE%9F%E8%B0%A3%E5%8E%BB%E4%B8%96%E4%BC%A0%E9%97%BB%23) `299.1K 🔥` `+375%`
1. [露营遇山洪7人放弃财产全获救](https://s.weibo.com/weibo?q=%23%E9%9C%B2%E8%90%A5%E9%81%87%E5%B1%B1%E6%B4%AA7%E4%BA%BA%E6%94%BE%E5%BC%83%E8%B4%A2%E4%BA%A7%E5%85%A8%E8%8E%B7%E6%95%91%23) `297.5K 🔥` `+373%`
1. [到了这个年纪开始共情反派](https://s.weibo.com/weibo?q=%23%E5%88%B0%E4%BA%86%E8%BF%99%E4%B8%AA%E5%B9%B4%E7%BA%AA%E5%BC%80%E5%A7%8B%E5%85%B1%E6%83%85%E5%8F%8D%E6%B4%BE%23) `295.4K 🔥` `+368%`
1. [逐玉配角第一个飞升的是李卿](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%E9%85%8D%E8%A7%92%E7%AC%AC%E4%B8%80%E4%B8%AA%E9%A3%9E%E5%8D%87%E7%9A%84%E6%98%AF%E6%9D%8E%E5%8D%BF%23) `291.9K 🔥` `+364%`
1. [胡杏儿吴莫愁你俩这样张凌赫知道吗](https://s.weibo.com/weibo?q=%23%E8%83%A1%E6%9D%8F%E5%84%BF%E5%90%B4%E8%8E%AB%E6%84%81%E4%BD%A0%E4%BF%A9%E8%BF%99%E6%A0%B7%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%9F%A5%E9%81%93%E5%90%97%23) `288.3K 🔥` `+361%`
1. [成都暴雨 (Heavy rain in Chengdu)](https://s.weibo.com/weibo?q=%23%E6%88%90%E9%83%BD%E6%9A%B4%E9%9B%A8%23) `281.8K 🔥` `+347%`
1. [肠癌留了10年逃生窗口期 (Bowel cancer has a 10-year escape window)](https://s.weibo.com/weibo?q=%23%E8%82%A0%E7%99%8C%E7%95%99%E4%BA%8610%E5%B9%B4%E9%80%83%E7%94%9F%E7%AA%97%E5%8F%A3%E6%9C%9F%23) `511.9K 🔥`
1. [李宏毅李登科和解 (Li Hongyi and Li Dengke reconcile)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%AE%8F%E6%AF%85%E6%9D%8E%E7%99%BB%E7%A7%91%E5%92%8C%E8%A7%A3%23) `328.3K 🔥`
1. [宋亚轩刘耀文一件衣服穿了三年](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E4%BA%9A%E8%BD%A9%E5%88%98%E8%80%80%E6%96%87%E4%B8%80%E4%BB%B6%E8%A1%A3%E6%9C%8D%E7%A9%BF%E4%BA%86%E4%B8%89%E5%B9%B4%23) `315.2K 🔥`

Updated at 2026-07-28 07:57:27

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
