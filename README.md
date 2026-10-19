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

1. [六个字读懂中国经济新亮点](https://s.weibo.com/weibo?q=%23%E5%85%AD%E4%B8%AA%E5%AD%97%E8%AF%BB%E6%87%82%E4%B8%AD%E5%9B%BD%E7%BB%8F%E6%B5%8E%E6%96%B0%E4%BA%AE%E7%82%B9%23) `390.3K 🔥` `NEW`
1. [京东11.11多买多返最高返2000元](https://s.weibo.com/weibo?q=%23%E4%BA%AC%E4%B8%9C11.11%E5%A4%9A%E4%B9%B0%E5%A4%9A%E8%BF%94%E6%9C%80%E9%AB%98%E8%BF%942000%E5%85%83%23) `383.6K 🔥` `NEW`
1. [王一博拍摄华北豹](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E6%8B%8D%E6%91%84%E5%8D%8E%E5%8C%97%E8%B1%B9%23) `87.4K 🔥` `NEW`
1. [房子降到150万好卖多了](https://s.weibo.com/weibo?q=%23%E6%88%BF%E5%AD%90%E9%99%8D%E5%88%B0150%E4%B8%87%E5%A5%BD%E5%8D%96%E5%A4%9A%E4%BA%86%23) `86.5K 🔥` `NEW`
1. [想要的晚年状态被10后老人具象化了](https://s.weibo.com/weibo?q=%23%E6%83%B3%E8%A6%81%E7%9A%84%E6%99%9A%E5%B9%B4%E7%8A%B6%E6%80%81%E8%A2%AB10%E5%90%8E%E8%80%81%E4%BA%BA%E5%85%B7%E8%B1%A1%E5%8C%96%E4%BA%86%23) `79.7K 🔥` `NEW`
1. [数码店老板吐槽iPhone18Pro卖不动](https://s.weibo.com/weibo?q=%23%E6%95%B0%E7%A0%81%E5%BA%97%E8%80%81%E6%9D%BF%E5%90%90%E6%A7%BDiPhone18Pro%E5%8D%96%E4%B8%8D%E5%8A%A8%23) `61.5K 🔥` `NEW`
1. [酒店回应房间挂画后藏设备间](https://s.weibo.com/weibo?q=%23%E9%85%92%E5%BA%97%E5%9B%9E%E5%BA%94%E6%88%BF%E9%97%B4%E6%8C%82%E7%94%BB%E5%90%8E%E8%97%8F%E8%AE%BE%E5%A4%87%E9%97%B4%23) `61.4K 🔥` `NEW`
1. [代谢快的人vs代谢慢的人](https://s.weibo.com/weibo?q=%23%E4%BB%A3%E8%B0%A2%E5%BF%AB%E7%9A%84%E4%BA%BAvs%E4%BB%A3%E8%B0%A2%E6%85%A2%E7%9A%84%E4%BA%BA%23) `59.9K 🔥` `NEW`
1. [尤浩然去吃了998一个的巨型汉堡](https://s.weibo.com/weibo?q=%23%E5%B0%A4%E6%B5%A9%E7%84%B6%E5%8E%BB%E5%90%83%E4%BA%86998%E4%B8%80%E4%B8%AA%E7%9A%84%E5%B7%A8%E5%9E%8B%E6%B1%89%E5%A0%A1%23) `52.6K 🔥` `NEW`
1. [奔跑吧大湾区篇](https://s.weibo.com/weibo?q=%23%E5%A5%94%E8%B7%91%E5%90%A7%E5%A4%A7%E6%B9%BE%E5%8C%BA%E7%AF%87%23) `52.6K 🔥` `NEW`
1. [邓超孙俪12岁女儿身高](https://s.weibo.com/weibo?q=%23%E9%82%93%E8%B6%85%E5%AD%99%E4%BF%AA12%E5%B2%81%E5%A5%B3%E5%84%BF%E8%BA%AB%E9%AB%98%23) `48.7K 🔥` `NEW`
1. [狗狗有蜱虫主人找鸡帮忙](https://s.weibo.com/weibo?q=%23%E7%8B%97%E7%8B%97%E6%9C%89%E8%9C%B1%E8%99%AB%E4%B8%BB%E4%BA%BA%E6%89%BE%E9%B8%A1%E5%B8%AE%E5%BF%99%23) `48.6K 🔥` `NEW`
1. [A股将迎至少360亿活水](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E5%B0%86%E8%BF%8E%E8%87%B3%E5%B0%91360%E4%BA%BF%E6%B4%BB%E6%B0%B4%23) `48.6K 🔥` `NEW`
1. [张雪官宣首款电摩](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E5%AE%98%E5%AE%A3%E9%A6%96%E6%AC%BE%E7%94%B5%E6%91%A9%23) `48.6K 🔥` `NEW`
1. [蒙古国草原大火为何没烧进来](https://s.weibo.com/weibo?q=%23%E8%92%99%E5%8F%A4%E5%9B%BD%E8%8D%89%E5%8E%9F%E5%A4%A7%E7%81%AB%E4%B8%BA%E4%BD%95%E6%B2%A1%E7%83%A7%E8%BF%9B%E6%9D%A5%23) `708.6K 🔥` `+474%`
1. [高反去世男子母亲付了救援相关费用](https://s.weibo.com/weibo?q=%23%E9%AB%98%E5%8F%8D%E5%8E%BB%E4%B8%96%E7%94%B7%E5%AD%90%E6%AF%8D%E4%BA%B2%E4%BB%98%E4%BA%86%E6%95%91%E6%8F%B4%E7%9B%B8%E5%85%B3%E8%B4%B9%E7%94%A8%23) `511.9K 🔥` `+1065%`
1. [留学生披旭日旗暴露个人精神的病态](https://s.weibo.com/weibo?q=%23%E7%95%99%E5%AD%A6%E7%94%9F%E6%8A%AB%E6%97%AD%E6%97%A5%E6%97%97%E6%9A%B4%E9%9C%B2%E4%B8%AA%E4%BA%BA%E7%B2%BE%E7%A5%9E%E7%9A%84%E7%97%85%E6%80%81%23) `223.4K 🔥` `+379%`
1. [原来学霸是这样背书的](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E5%AD%A6%E9%9C%B8%E6%98%AF%E8%BF%99%E6%A0%B7%E8%83%8C%E4%B9%A6%E7%9A%84%23) `200.3K 🔥` `+361%`
1. [谭松韵刘学义像疲惫了一天的新郎新娘](https://s.weibo.com/weibo?q=%23%E8%B0%AD%E6%9D%BE%E9%9F%B5%E5%88%98%E5%AD%A6%E4%B9%89%E5%83%8F%E7%96%B2%E6%83%AB%E4%BA%86%E4%B8%80%E5%A4%A9%E7%9A%84%E6%96%B0%E9%83%8E%E6%96%B0%E5%A8%98%23) `144.5K 🔥` `+215%`
1. [身披旭日旗中国留学生或被开除遣返](https://s.weibo.com/weibo?q=%23%E8%BA%AB%E6%8A%AB%E6%97%AD%E6%97%A5%E6%97%97%E4%B8%AD%E5%9B%BD%E7%95%99%E5%AD%A6%E7%94%9F%E6%88%96%E8%A2%AB%E5%BC%80%E9%99%A4%E9%81%A3%E8%BF%94%23) `103.3K 🔥` `+130%`
1. [特朗普喊话美国民众别去法国参加革命](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E5%96%8A%E8%AF%9D%E7%BE%8E%E5%9B%BD%E6%B0%91%E4%BC%97%E5%88%AB%E5%8E%BB%E6%B3%95%E5%9B%BD%E5%8F%82%E5%8A%A0%E9%9D%A9%E5%91%BD%23) `92.6K 🔥` `+138%`
1. [田曦薇剧宣真穿的婚纱](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E5%89%A7%E5%AE%A3%E7%9C%9F%E7%A9%BF%E7%9A%84%E5%A9%9A%E7%BA%B1%23) `89.7K 🔥` `+94%`
1. [法国骚乱反差一幕](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%9B%BD%E9%AA%9A%E4%B9%B1%E5%8F%8D%E5%B7%AE%E4%B8%80%E5%B9%95%23) `89.2K 🔥` `+97%`
1. [李小冉参加乘风时徐佳宁打赏至榜一](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B0%8F%E5%86%89%E5%8F%82%E5%8A%A0%E4%B9%98%E9%A3%8E%E6%97%B6%E5%BE%90%E4%BD%B3%E5%AE%81%E6%89%93%E8%B5%8F%E8%87%B3%E6%A6%9C%E4%B8%80%23) `89.0K 🔥` `+101%`
1. [男子出狱发现账户50多万只剩六块四](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%87%BA%E7%8B%B1%E5%8F%91%E7%8E%B0%E8%B4%A6%E6%88%B750%E5%A4%9A%E4%B8%87%E5%8F%AA%E5%89%A9%E5%85%AD%E5%9D%97%E5%9B%9B%23) `88.0K 🔥` `+101%`
1. [徐佳宁求婚时说给你五个亿让你作](https://s.weibo.com/weibo?q=%23%E5%BE%90%E4%BD%B3%E5%AE%81%E6%B1%82%E5%A9%9A%E6%97%B6%E8%AF%B4%E7%BB%99%E4%BD%A0%E4%BA%94%E4%B8%AA%E4%BA%BF%E8%AE%A9%E4%BD%A0%E4%BD%9C%23) `87.8K 🔥` `+93%`
1. [李小冉离婚后找闺蜜疗伤](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B0%8F%E5%86%89%E7%A6%BB%E5%A9%9A%E5%90%8E%E6%89%BE%E9%97%BA%E8%9C%9C%E7%96%97%E4%BC%A4%23) `84.5K 🔥` `+85%`
1. [Aijing](https://s.weibo.com/weibo?q=%23Aijing%23) `80.1K 🔥` `+97%`
1. [谭松韵刘学义直播避嫌避成啥样了](https://s.weibo.com/weibo?q=%23%E8%B0%AD%E6%9D%BE%E9%9F%B5%E5%88%98%E5%AD%A6%E4%B9%89%E7%9B%B4%E6%92%AD%E9%81%BF%E5%AB%8C%E9%81%BF%E6%88%90%E5%95%A5%E6%A0%B7%E4%BA%86%23) `62.8K 🔥` `+46%`
1. [仙人跳后报警被强奸多名受害人被抓](https://s.weibo.com/weibo?q=%23%E4%BB%99%E4%BA%BA%E8%B7%B3%E5%90%8E%E6%8A%A5%E8%AD%A6%E8%A2%AB%E5%BC%BA%E5%A5%B8%E5%A4%9A%E5%90%8D%E5%8F%97%E5%AE%B3%E4%BA%BA%E8%A2%AB%E6%8A%93%23) `61.5K 🔥` `+48%`
1. [98岁爷爷嫌吃不饱要打工](https://s.weibo.com/weibo?q=%2398%E5%B2%81%E7%88%B7%E7%88%B7%E5%AB%8C%E5%90%83%E4%B8%8D%E9%A5%B1%E8%A6%81%E6%89%93%E5%B7%A5%23) `61.5K 🔥` `+92%`
1. [萨摩耶走秀时突然憋不住了](https://s.weibo.com/weibo?q=%23%E8%90%A8%E6%91%A9%E8%80%B6%E8%B5%B0%E7%A7%80%E6%97%B6%E7%AA%81%E7%84%B6%E6%86%8B%E4%B8%8D%E4%BD%8F%E4%BA%86%23) `58.9K 🔥` `+44%`
1. [出去玩十天回来被追着还钱](https://s.weibo.com/weibo?q=%23%E5%87%BA%E5%8E%BB%E7%8E%A9%E5%8D%81%E5%A4%A9%E5%9B%9E%E6%9D%A5%E8%A2%AB%E8%BF%BD%E7%9D%80%E8%BF%98%E9%92%B1%23) `56.4K 🔥` `+40%`
1. [苹果手机很多人不知道的操作](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C%E6%89%8B%E6%9C%BA%E5%BE%88%E5%A4%9A%E4%BA%BA%E4%B8%8D%E7%9F%A5%E9%81%93%E7%9A%84%E6%93%8D%E4%BD%9C%23) `53.0K 🔥` `+45%`
1. [田曦薇跳娆黛摇](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E8%B7%B3%E5%A8%86%E9%BB%9B%E6%91%87%23) `52.8K 🔥` `+23%`
1. [滚筒洗衣机排污口90%的人没打开过](https://s.weibo.com/weibo?q=%23%E6%BB%9A%E7%AD%92%E6%B4%97%E8%A1%A3%E6%9C%BA%E6%8E%92%E6%B1%A1%E5%8F%A390%25%E7%9A%84%E4%BA%BA%E6%B2%A1%E6%89%93%E5%BC%80%E8%BF%87%23) `52.8K 🔥` `+37%`
1. [社保基金会原副理事长王文灵被双开](https://s.weibo.com/weibo?q=%23%E7%A4%BE%E4%BF%9D%E5%9F%BA%E9%87%91%E4%BC%9A%E5%8E%9F%E5%89%AF%E7%90%86%E4%BA%8B%E9%95%BF%E7%8E%8B%E6%96%87%E7%81%B5%E8%A2%AB%E5%8F%8C%E5%BC%80%23) `52.8K 🔥` `+65%`
1. [沙特宣布处决两名孟加拉国公民](https://s.weibo.com/weibo?q=%23%E6%B2%99%E7%89%B9%E5%AE%A3%E5%B8%83%E5%A4%84%E5%86%B3%E4%B8%A4%E5%90%8D%E5%AD%9F%E5%8A%A0%E6%8B%89%E5%9B%BD%E5%85%AC%E6%B0%91%23) `52.7K 🔥` `+64%`
1. [奚梦瑶怀孕时胖到140斤](https://s.weibo.com/weibo?q=%23%E5%A5%9A%E6%A2%A6%E7%91%B6%E6%80%80%E5%AD%95%E6%97%B6%E8%83%96%E5%88%B0140%E6%96%A4%23) `52.7K 🔥` `+35%`
1. [仙人跳团伙多次真报警来胁迫受害者](https://s.weibo.com/weibo?q=%23%E4%BB%99%E4%BA%BA%E8%B7%B3%E5%9B%A2%E4%BC%99%E5%A4%9A%E6%AC%A1%E7%9C%9F%E6%8A%A5%E8%AD%A6%E6%9D%A5%E8%83%81%E8%BF%AB%E5%8F%97%E5%AE%B3%E8%80%85%23) `51.0K 🔥` `+45%`
1. [宫内孕同时也可能合并宫外孕](https://s.weibo.com/weibo?q=%23%E5%AE%AB%E5%86%85%E5%AD%95%E5%90%8C%E6%97%B6%E4%B9%9F%E5%8F%AF%E8%83%BD%E5%90%88%E5%B9%B6%E5%AE%AB%E5%A4%96%E5%AD%95%23) `49.5K 🔥` `+55%`
1. [仙人跳团伙利用15岁成员作诱饵敲诈](https://s.weibo.com/weibo?q=%23%E4%BB%99%E4%BA%BA%E8%B7%B3%E5%9B%A2%E4%BC%99%E5%88%A9%E7%94%A815%E5%B2%81%E6%88%90%E5%91%98%E4%BD%9C%E8%AF%B1%E9%A5%B5%E6%95%B2%E8%AF%88%23) `48.7K 🔥` `+52%`
1. [孙颖莎拒应援河北卫视下场引导](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E6%8B%92%E5%BA%94%E6%8F%B4%E6%B2%B3%E5%8C%97%E5%8D%AB%E8%A7%86%E4%B8%8B%E5%9C%BA%E5%BC%95%E5%AF%BC%23) `48.7K 🔥` `+25%`
1. [马斯克家族关系图](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E6%96%AF%E5%85%8B%E5%AE%B6%E6%97%8F%E5%85%B3%E7%B3%BB%E5%9B%BE%23) `48.7K 🔥` `+52%`
1. [蒋龙感谢金鸡奖陈思诚](https://s.weibo.com/weibo?q=%23%E8%92%8B%E9%BE%99%E6%84%9F%E8%B0%A2%E9%87%91%E9%B8%A1%E5%A5%96%E9%99%88%E6%80%9D%E8%AF%9A%23) `48.6K 🔥` `+52%`
1. [男友说大海还没你好看](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%8F%8B%E8%AF%B4%E5%A4%A7%E6%B5%B7%E8%BF%98%E6%B2%A1%E4%BD%A0%E5%A5%BD%E7%9C%8B%23) `48.6K 🔥` `+52%`
1. [盛艾敬妈妈和裴珠泫一样大](https://s.weibo.com/weibo?q=%23%E7%9B%9B%E8%89%BE%E6%95%AC%E5%A6%88%E5%A6%88%E5%92%8C%E8%A3%B4%E7%8F%A0%E6%B3%AB%E4%B8%80%E6%A0%B7%E5%A4%A7%23) `48.6K 🔥` `+26%`
1. [菲方不能把中方克制当软弱](https://s.weibo.com/weibo?q=%23%E8%8F%B2%E6%96%B9%E4%B8%8D%E8%83%BD%E6%8A%8A%E4%B8%AD%E6%96%B9%E5%85%8B%E5%88%B6%E5%BD%93%E8%BD%AF%E5%BC%B1%23) `48.6K 🔥` `+52%`
1. [高反支帐篷躺卧男子去世目击者发声](https://s.weibo.com/weibo?q=%23%E9%AB%98%E5%8F%8D%E6%94%AF%E5%B8%90%E7%AF%B7%E8%BA%BA%E5%8D%A7%E7%94%B7%E5%AD%90%E5%8E%BB%E4%B8%96%E7%9B%AE%E5%87%BB%E8%80%85%E5%8F%91%E5%A3%B0%23) `48.7K 🔥`
1. [女儿用拼多多给农村父母远程装修](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%84%BF%E7%94%A8%E6%8B%BC%E5%A4%9A%E5%A4%9A%E7%BB%99%E5%86%9C%E6%9D%91%E7%88%B6%E6%AF%8D%E8%BF%9C%E7%A8%8B%E8%A3%85%E4%BF%AE%23) `48.6K 🔥`
1. [京东多买多返明日上线](https://s.weibo.com/weibo?q=%23%E4%BA%AC%E4%B8%9C%E5%A4%9A%E4%B9%B0%E5%A4%9A%E8%BF%94%E6%98%8E%E6%97%A5%E4%B8%8A%E7%BA%BF%23) `48.6K 🔥`

Updated at 2026-10-20 07:07:37

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
