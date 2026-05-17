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

1. [广西皮卡坠河9人失联 (9 people missing after pickup truck crashes into river in Guangxi)](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E8%A5%BF%E7%9A%AE%E5%8D%A1%E5%9D%A0%E6%B2%B39%E4%BA%BA%E5%A4%B1%E8%81%94%23) `198.0K 🔥` `NEW`
1. [利雅得胜利0比1大阪钢巴](https://s.weibo.com/weibo?q=%23%E5%88%A9%E9%9B%85%E5%BE%97%E8%83%9C%E5%88%A90%E6%AF%941%E5%A4%A7%E9%98%AA%E9%92%A2%E5%B7%B4%23) `168.8K 🔥` `NEW`
1. [13岁女生被闺蜜胁迫卖淫](https://s.weibo.com/weibo?q=%2313%E5%B2%81%E5%A5%B3%E7%94%9F%E8%A2%AB%E9%97%BA%E8%9C%9C%E8%83%81%E8%BF%AB%E5%8D%96%E6%B7%AB%23) `168.8K 🔥` `NEW`
1. [狗狗啃了半年的抽屉还挺有设计感](https://s.weibo.com/weibo?q=%23%E7%8B%97%E7%8B%97%E5%95%83%E4%BA%86%E5%8D%8A%E5%B9%B4%E7%9A%84%E6%8A%BD%E5%B1%89%E8%BF%98%E6%8C%BA%E6%9C%89%E8%AE%BE%E8%AE%A1%E6%84%9F%23) `168.7K 🔥` `NEW`
1. [张凌赫随时带着自己的阿贝贝](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E9%9A%8F%E6%97%B6%E5%B8%A6%E7%9D%80%E8%87%AA%E5%B7%B1%E7%9A%84%E9%98%BF%E8%B4%9D%E8%B4%9D%23) `168.5K 🔥` `NEW`
1. [内娱的红从来都是意想不到的](https://s.weibo.com/weibo?q=%23%E5%86%85%E5%A8%B1%E7%9A%84%E7%BA%A2%E4%BB%8E%E6%9D%A5%E9%83%BD%E6%98%AF%E6%84%8F%E6%83%B3%E4%B8%8D%E5%88%B0%E7%9A%84%23) `168.5K 🔥` `NEW`
1. [30岁女子用爬楼机锻炼摔倒身亡](https://s.weibo.com/weibo?q=%2330%E5%B2%81%E5%A5%B3%E5%AD%90%E7%94%A8%E7%88%AC%E6%A5%BC%E6%9C%BA%E9%94%BB%E7%82%BC%E6%91%94%E5%80%92%E8%BA%AB%E4%BA%A1%23) `168.4K 🔥` `NEW`
1. [苹果华为小米集体降价](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C%E5%8D%8E%E4%B8%BA%E5%B0%8F%E7%B1%B3%E9%9B%86%E4%BD%93%E9%99%8D%E4%BB%B7%23) `157.6K 🔥` `NEW`
1. [张凌赫被保镖架起感觉在空中飞行](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E8%A2%AB%E4%BF%9D%E9%95%96%E6%9E%B6%E8%B5%B7%E6%84%9F%E8%A7%89%E5%9C%A8%E7%A9%BA%E4%B8%AD%E9%A3%9E%E8%A1%8C%23) `156.8K 🔥` `NEW`
1. [多名中国男子赴泰后集体失联](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E5%90%8D%E4%B8%AD%E5%9B%BD%E7%94%B7%E5%AD%90%E8%B5%B4%E6%B3%B0%E5%90%8E%E9%9B%86%E4%BD%93%E5%A4%B1%E8%81%94%23) `155.9K 🔥` `NEW`
1. [21世纪大君夫人大结局 (The 21st Century Maharaja’s Wife Finale)](https://s.weibo.com/weibo?q=%2321%E4%B8%96%E7%BA%AA%E5%A4%A7%E5%90%9B%E5%A4%AB%E4%BA%BA%E5%A4%A7%E7%BB%93%E5%B1%80%23) `150.0K 🔥` `NEW`
1. [35岁男子新婚不久确诊胃癌晚期](https://s.weibo.com/weibo?q=%2335%E5%B2%81%E7%94%B7%E5%AD%90%E6%96%B0%E5%A9%9A%E4%B8%8D%E4%B9%85%E7%A1%AE%E8%AF%8A%E8%83%83%E7%99%8C%E6%99%9A%E6%9C%9F%23) `141.4K 🔥` `NEW`
1. [徐梦洁通宵练宝莲](https://s.weibo.com/weibo?q=%23%E5%BE%90%E6%A2%A6%E6%B4%81%E9%80%9A%E5%AE%B5%E7%BB%83%E5%AE%9D%E8%8E%B2%23) `91.8K 🔥` `NEW`
1. [王安宇偶尔可以吃点三文鱼了](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%AE%89%E5%AE%87%E5%81%B6%E5%B0%94%E5%8F%AF%E4%BB%A5%E5%90%83%E7%82%B9%E4%B8%89%E6%96%87%E9%B1%BC%E4%BA%86%23) `77.6K 🔥` `NEW`
1. [以为自己天赋异禀结果是体脂高](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E4%B8%BA%E8%87%AA%E5%B7%B1%E5%A4%A9%E8%B5%8B%E5%BC%82%E7%A6%80%E7%BB%93%E6%9E%9C%E6%98%AF%E4%BD%93%E8%84%82%E9%AB%98%23) `74.2K 🔥` `NEW`
1. [郑州警方打掉特大传销组织](https://s.weibo.com/weibo?q=%23%E9%83%91%E5%B7%9E%E8%AD%A6%E6%96%B9%E6%89%93%E6%8E%89%E7%89%B9%E5%A4%A7%E4%BC%A0%E9%94%80%E7%BB%84%E7%BB%87%23) `71.6K 🔥` `NEW`
1. [日本动漫巅峰时期技术现在依旧震撼](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E5%8A%A8%E6%BC%AB%E5%B7%85%E5%B3%B0%E6%97%B6%E6%9C%9F%E6%8A%80%E6%9C%AF%E7%8E%B0%E5%9C%A8%E4%BE%9D%E6%97%A7%E9%9C%87%E6%92%BC%23) `67.6K 🔥` `NEW`
1. [金饰价格一夜跌15元](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%A5%B0%E4%BB%B7%E6%A0%BC%E4%B8%80%E5%A4%9C%E8%B7%8C15%E5%85%83%23) `65.8K 🔥` `NEW`
1. [耳帝分析歌手2026阵容实力](https://s.weibo.com/weibo?q=%23%E8%80%B3%E5%B8%9D%E5%88%86%E6%9E%90%E6%AD%8C%E6%89%8B2026%E9%98%B5%E5%AE%B9%E5%AE%9E%E5%8A%9B%23) `62.0K 🔥` `NEW`
1. [卢伟冰爆料小米17Max](https://s.weibo.com/weibo?q=%23%E5%8D%A2%E4%BC%9F%E5%86%B0%E7%88%86%E6%96%99%E5%B0%8F%E7%B1%B317Max%23) `58.8K 🔥` `NEW`
1. [特朗普警告台独 (Trump warns Taiwan independence)](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E8%AD%A6%E5%91%8A%E5%8F%B0%E7%8B%AC%23) `1.8M 🔥` `+81%`
1. [给阿嬷的情书 (A love letter to grandma)](https://s.weibo.com/weibo?q=%23%E7%BB%99%E9%98%BF%E5%AC%B7%E7%9A%84%E6%83%85%E4%B9%A6%23) `919.6K 🔥` `+75%`
1. [中国式支付圈粉全球](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%BC%8F%E6%94%AF%E4%BB%98%E5%9C%88%E7%B2%89%E5%85%A8%E7%90%83%23) `763.2K 🔥` `+81%`
1. [万千惠点名徐梦洁 (Wan Qianhui named Xu Mengjie)](https://s.weibo.com/weibo?q=%23%E4%B8%87%E5%8D%83%E6%83%A0%E7%82%B9%E5%90%8D%E5%BE%90%E6%A2%A6%E6%B4%81%23) `500.8K 🔥` `+72%`
1. [遇到和已逝亲人很像的人是啥感觉 (How does it feel to meet someone who resembles a deceased relative?)](https://s.weibo.com/weibo?q=%23%E9%81%87%E5%88%B0%E5%92%8C%E5%B7%B2%E9%80%9D%E4%BA%B2%E4%BA%BA%E5%BE%88%E5%83%8F%E7%9A%84%E4%BA%BA%E6%98%AF%E5%95%A5%E6%84%9F%E8%A7%89%23) `273.5K 🔥` `+202%`
1. [暴雨大暴雨范围扩大 (Heavy rainstorms expand in scope)](https://s.weibo.com/weibo?q=%23%E6%9A%B4%E9%9B%A8%E5%A4%A7%E6%9A%B4%E9%9B%A8%E8%8C%83%E5%9B%B4%E6%89%A9%E5%A4%A7%23) `260.0K 🔥` `+190%`
1. [张艺兴君佩全球首位品牌代言人 (Zhang Yixing Junpei is the world's first brand spokesperson)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E8%89%BA%E5%85%B4%E5%90%9B%E4%BD%A9%E5%85%A8%E7%90%83%E9%A6%96%E4%BD%8D%E5%93%81%E7%89%8C%E4%BB%A3%E8%A8%80%E4%BA%BA%23) `247.1K 🔥` `+334%`
1. [樊振东单手接球观众直呼好帅 (Fan Zhendong catches the ball with one hand and the audience calls him so handsome)](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E5%8D%95%E6%89%8B%E6%8E%A5%E7%90%83%E8%A7%82%E4%BC%97%E7%9B%B4%E5%91%BC%E5%A5%BD%E5%B8%85%23) `245.6K 🔥` `+173%`
1. [朱孝天上节目内涵阿信](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E5%AD%9D%E5%A4%A9%E4%B8%8A%E8%8A%82%E7%9B%AE%E5%86%85%E6%B6%B5%E9%98%BF%E4%BF%A1%23) `227.4K 🔥` `+54%`
1. [日本担心中美关系稳定自己被晾在一边](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E6%8B%85%E5%BF%83%E4%B8%AD%E7%BE%8E%E5%85%B3%E7%B3%BB%E7%A8%B3%E5%AE%9A%E8%87%AA%E5%B7%B1%E8%A2%AB%E6%99%BE%E5%9C%A8%E4%B8%80%E8%BE%B9%23) `168.6K 🔥` `+87%`
1. [摆拍盲道被撞女生系百万粉丝网红 (The girl who was hit while posing on a blind road is an Internet celebrity with millions of fans)](https://s.weibo.com/weibo?q=%23%E6%91%86%E6%8B%8D%E7%9B%B2%E9%81%93%E8%A2%AB%E6%92%9E%E5%A5%B3%E7%94%9F%E7%B3%BB%E7%99%BE%E4%B8%87%E7%B2%89%E4%B8%9D%E7%BD%91%E7%BA%A2%23) `168.6K 🔥` `+87%`
1. [宿管拦住了妈妈但没拦住爱](https://s.weibo.com/weibo?q=%23%E5%AE%BF%E7%AE%A1%E6%8B%A6%E4%BD%8F%E4%BA%86%E5%A6%88%E5%A6%88%E4%BD%86%E6%B2%A1%E6%8B%A6%E4%BD%8F%E7%88%B1%23) `168.3K 🔥` `+112%`
1. [清华女博士丈夫雇人抢走2岁半儿子 (The husband of a female doctor from Tsinghua University hired someone to kidnap her 2.5-year-old son)](https://s.weibo.com/weibo?q=%23%E6%B8%85%E5%8D%8E%E5%A5%B3%E5%8D%9A%E5%A3%AB%E4%B8%88%E5%A4%AB%E9%9B%87%E4%BA%BA%E6%8A%A2%E8%B5%B02%E5%B2%81%E5%8D%8A%E5%84%BF%E5%AD%90%23) `159.9K 🔥` `+78%`
1. [红霉素软膏绝不能随便用 (Erythromycin ointment should never be used casually)](https://s.weibo.com/weibo?q=%23%E7%BA%A2%E9%9C%89%E7%B4%A0%E8%BD%AF%E8%86%8F%E7%BB%9D%E4%B8%8D%E8%83%BD%E9%9A%8F%E4%BE%BF%E7%94%A8%23) `157.2K 🔥` `+109%`
1. [减掉内脏脂肪才是减肥关键](https://s.weibo.com/weibo?q=%23%E5%87%8F%E6%8E%89%E5%86%85%E8%84%8F%E8%84%82%E8%82%AA%E6%89%8D%E6%98%AF%E5%87%8F%E8%82%A5%E5%85%B3%E9%94%AE%23) `141.8K 🔥` `+92%`
1. [女子试管7年得子丈夫肺癌脑转移](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E8%AF%95%E7%AE%A17%E5%B9%B4%E5%BE%97%E5%AD%90%E4%B8%88%E5%A4%AB%E8%82%BA%E7%99%8C%E8%84%91%E8%BD%AC%E7%A7%BB%23) `140.9K 🔥` `+173%`
1. [大爷卖房跨省投奔女儿养老人间蒸发 (The uncle sold his house across the province to seek refuge with his daughter for the elderly and disappeared.)](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E7%88%B7%E5%8D%96%E6%88%BF%E8%B7%A8%E7%9C%81%E6%8A%95%E5%A5%94%E5%A5%B3%E5%84%BF%E5%85%BB%E8%80%81%E4%BA%BA%E9%97%B4%E8%92%B8%E5%8F%91%23) `123.3K 🔥` `+38%`
1. [吴镇宇用嘴喂郝蕾吃药](https://s.weibo.com/weibo?q=%23%E5%90%B4%E9%95%87%E5%AE%87%E7%94%A8%E5%98%B4%E5%96%82%E9%83%9D%E8%95%BE%E5%90%83%E8%8D%AF%23) `119.5K 🔥` `+34%`
1. [杨紫3部作品入围金鹰奖 (Three of Yang Zi’s works were shortlisted for the Golden Eagle Award)](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB3%E9%83%A8%E4%BD%9C%E5%93%81%E5%85%A5%E5%9B%B4%E9%87%91%E9%B9%B0%E5%A5%96%23) `110.0K 🔥` `+23%`
1. [算力版国家电网要来了 (The computing power version of State Grid is coming)](https://s.weibo.com/weibo?q=%23%E7%AE%97%E5%8A%9B%E7%89%88%E5%9B%BD%E5%AE%B6%E7%94%B5%E7%BD%91%E8%A6%81%E6%9D%A5%E4%BA%86%23) `107.6K 🔥` `+151%`
1. [吴艳妮100米栏13秒16](https://s.weibo.com/weibo?q=%23%E5%90%B4%E8%89%B3%E5%A6%AE100%E7%B1%B3%E6%A0%8F13%E7%A7%9216%23) `107.1K 🔥` `+32%`
1. [单依纯大连演唱会上座率](https://s.weibo.com/weibo?q=%23%E5%8D%95%E4%BE%9D%E7%BA%AF%E5%A4%A7%E8%BF%9E%E6%BC%94%E5%94%B1%E4%BC%9A%E4%B8%8A%E5%BA%A7%E7%8E%87%23) `103.8K 🔥` `+61%`
1. [专家建议金价大跌多买小跌少买 (Experts recommend buying more when the price of gold drops sharply and buying less when the price drops sharply.)](https://s.weibo.com/weibo?q=%23%E4%B8%93%E5%AE%B6%E5%BB%BA%E8%AE%AE%E9%87%91%E4%BB%B7%E5%A4%A7%E8%B7%8C%E5%A4%9A%E4%B9%B0%E5%B0%8F%E8%B7%8C%E5%B0%91%E4%B9%B0%23) `84.5K 🔥` `+69%`
1. [招聘时的尴尬被HR轻松接住了 (The embarrassment during recruitment was easily handled by HR)](https://s.weibo.com/weibo?q=%23%E6%8B%9B%E8%81%98%E6%97%B6%E7%9A%84%E5%B0%B4%E5%B0%AC%E8%A2%ABHR%E8%BD%BB%E6%9D%BE%E6%8E%A5%E4%BD%8F%E4%BA%86%23) `75.3K 🔥` `+76%`
1. [白鹿经典露齿笑 (White deer classic toothy smile)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E7%BB%8F%E5%85%B8%E9%9C%B2%E9%BD%BF%E7%AC%91%23) `72.4K 🔥` `+79%`
1. [张雪机车捷克站夺冠 (Zhang Xue won the Czech Republic Championship)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%E6%8D%B7%E5%85%8B%E7%AB%99%E5%A4%BA%E5%86%A0%23) `63.5K 🔥` `+31%`
1. [张雪机车身后4台雅马哈](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%E8%BA%AB%E5%90%8E4%E5%8F%B0%E9%9B%85%E9%A9%AC%E5%93%88%23) `62.9K 🔥` `+69%`
1. [张雪喊话德比斯培养一个中国车手 (Zhang Xue calls on Derby to train a Chinese driver)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E5%96%8A%E8%AF%9D%E5%BE%B7%E6%AF%94%E6%96%AF%E5%9F%B9%E5%85%BB%E4%B8%80%E4%B8%AA%E4%B8%AD%E5%9B%BD%E8%BD%A6%E6%89%8B%23) `62.4K 🔥` `+70%`
1. [女孩盲道被撞摆拍细节露馅](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%A9%E7%9B%B2%E9%81%93%E8%A2%AB%E6%92%9E%E6%91%86%E6%8B%8D%E7%BB%86%E8%8A%82%E9%9C%B2%E9%A6%85%23) `92.2K 🔥`
1. [给阿嬷的情书女主有站姐了](https://s.weibo.com/weibo?q=%23%E7%BB%99%E9%98%BF%E5%AC%B7%E7%9A%84%E6%83%85%E4%B9%A6%E5%A5%B3%E4%B8%BB%E6%9C%89%E7%AB%99%E5%A7%90%E4%BA%86%23) `66.8K 🔥` `-73%`
1. [一个很好的解压方法](https://s.weibo.com/weibo?q=%23%E4%B8%80%E4%B8%AA%E5%BE%88%E5%A5%BD%E7%9A%84%E8%A7%A3%E5%8E%8B%E6%96%B9%E6%B3%95%23) `63.7K 🔥` `-30%`

Updated at 2026-05-17 08:02:35

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
