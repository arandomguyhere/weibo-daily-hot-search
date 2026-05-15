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

1. [iPhone17Pro降价2000 (iPhone 17 Pro price cut by 2,000)](https://s.weibo.com/weibo?q=%23iPhone17Pro%E9%99%8D%E4%BB%B72000%23) `1.5M 🔥` `NEW`
1. [天猫618 iPhone17系最大优惠来了](https://s.weibo.com/weibo?q=%23%E5%A4%A9%E7%8C%AB618%20iPhone17%E7%B3%BB%E6%9C%80%E5%A4%A7%E4%BC%98%E6%83%A0%E6%9D%A5%E4%BA%86%23) `871.8K 🔥` `NEW`
1. [方媛回应要住男生单人间](https://s.weibo.com/weibo?q=%23%E6%96%B9%E5%AA%9B%E5%9B%9E%E5%BA%94%E8%A6%81%E4%BD%8F%E7%94%B7%E7%94%9F%E5%8D%95%E4%BA%BA%E9%97%B4%23) `867.2K 🔥` `NEW`
1. [甲状腺结节该吃碘盐还是无碘盐](https://s.weibo.com/weibo?q=%23%E7%94%B2%E7%8A%B6%E8%85%BA%E7%BB%93%E8%8A%82%E8%AF%A5%E5%90%83%E7%A2%98%E7%9B%90%E8%BF%98%E6%98%AF%E6%97%A0%E7%A2%98%E7%9B%90%23) `673.7K 🔥` `NEW`
1. [法国队公布世界杯26人大名单](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%9B%BD%E9%98%9F%E5%85%AC%E5%B8%83%E4%B8%96%E7%95%8C%E6%9D%AF26%E4%BA%BA%E5%A4%A7%E5%90%8D%E5%8D%95%23) `510.4K 🔥` `NEW`
1. [榜一大哥花400万追主播连面都没见过](https://s.weibo.com/weibo?q=%23%E6%A6%9C%E4%B8%80%E5%A4%A7%E5%93%A5%E8%8A%B1400%E4%B8%87%E8%BF%BD%E4%B8%BB%E6%92%AD%E8%BF%9E%E9%9D%A2%E9%83%BD%E6%B2%A1%E8%A7%81%E8%BF%87%23) `395.9K 🔥` `NEW`
1. [巴基斯坦总理将访华](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E5%9F%BA%E6%96%AF%E5%9D%A6%E6%80%BB%E7%90%86%E5%B0%86%E8%AE%BF%E5%8D%8E%23) `395.7K 🔥` `NEW`
1. [机票燃油附加费明天起上调](https://s.weibo.com/weibo?q=%23%E6%9C%BA%E7%A5%A8%E7%87%83%E6%B2%B9%E9%99%84%E5%8A%A0%E8%B4%B9%E6%98%8E%E5%A4%A9%E8%B5%B7%E4%B8%8A%E8%B0%83%23) `280.1K 🔥` `NEW`
1. [男生上午被银环蛇咬下午才就医](https://s.weibo.com/weibo?q=%23%E7%94%B7%E7%94%9F%E4%B8%8A%E5%8D%88%E8%A2%AB%E9%93%B6%E7%8E%AF%E8%9B%87%E5%92%AC%E4%B8%8B%E5%8D%88%E6%89%8D%E5%B0%B1%E5%8C%BB%23) `276.5K 🔥` `NEW`
1. [新能源车开启涨价潮](https://s.weibo.com/weibo?q=%23%E6%96%B0%E8%83%BD%E6%BA%90%E8%BD%A6%E5%BC%80%E5%90%AF%E6%B6%A8%E4%BB%B7%E6%BD%AE%23) `273.7K 🔥` `NEW`
1. [杨幂中国视协双新工作委员会副会长 (Yang Mi, Vice Chairman of China Television Association Double New Working Committee)](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E4%B8%AD%E5%9B%BD%E8%A7%86%E5%8D%8F%E5%8F%8C%E6%96%B0%E5%B7%A5%E4%BD%9C%E5%A7%94%E5%91%98%E4%BC%9A%E5%89%AF%E4%BC%9A%E9%95%BF%23) `272.0K 🔥` `NEW`
1. [我被AI短剧盗脸了](https://s.weibo.com/weibo?q=%23%E6%88%91%E8%A2%ABAI%E7%9F%AD%E5%89%A7%E7%9B%97%E8%84%B8%E4%BA%86%23) `271.3K 🔥` `NEW`
1. [河南17岁失联男孩遗体已找到](https://s.weibo.com/weibo?q=%23%E6%B2%B3%E5%8D%9717%E5%B2%81%E5%A4%B1%E8%81%94%E7%94%B7%E5%AD%A9%E9%81%97%E4%BD%93%E5%B7%B2%E6%89%BE%E5%88%B0%23) `267.5K 🔥` `NEW`
1. [马頔送李纯手搓玫瑰花](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E9%A0%94%E9%80%81%E6%9D%8E%E7%BA%AF%E6%89%8B%E6%90%93%E7%8E%AB%E7%91%B0%E8%8A%B1%23) `266.4K 🔥` `NEW`
1. [阿嬷的情书票房预计超7亿](https://s.weibo.com/weibo?q=%23%E9%98%BF%E5%AC%B7%E7%9A%84%E6%83%85%E4%B9%A6%E7%A5%A8%E6%88%BF%E9%A2%84%E8%AE%A1%E8%B6%857%E4%BA%BF%23) `265.1K 🔥` `NEW`
1. [李昀锐别把白鹿扇感冒了](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%98%80%E9%94%90%E5%88%AB%E6%8A%8A%E7%99%BD%E9%B9%BF%E6%89%87%E6%84%9F%E5%86%92%E4%BA%86%23) `261.4K 🔥` `NEW`
1. [压力大的可以看看徐若晗](https://s.weibo.com/weibo?q=%23%E5%8E%8B%E5%8A%9B%E5%A4%A7%E7%9A%84%E5%8F%AF%E4%BB%A5%E7%9C%8B%E7%9C%8B%E5%BE%90%E8%8B%A5%E6%99%97%23) `259.9K 🔥` `NEW`
1. [樊振东令欧冠斩获中国媒体突破](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E4%BB%A4%E6%AC%A7%E5%86%A0%E6%96%A9%E8%8E%B7%E4%B8%AD%E5%9B%BD%E5%AA%92%E4%BD%93%E7%AA%81%E7%A0%B4%23) `254.9K 🔥` `NEW`
1. [学生邱某某发虐猫影像被开除学籍](https://s.weibo.com/weibo?q=%23%E5%AD%A6%E7%94%9F%E9%82%B1%E6%9F%90%E6%9F%90%E5%8F%91%E8%99%90%E7%8C%AB%E5%BD%B1%E5%83%8F%E8%A2%AB%E5%BC%80%E9%99%A4%E5%AD%A6%E7%B1%8D%23) `254.1K 🔥` `NEW`
1. [杨紫新剧一人一巴掌](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E6%96%B0%E5%89%A7%E4%B8%80%E4%BA%BA%E4%B8%80%E5%B7%B4%E6%8E%8C%23) `252.2K 🔥` `NEW`
1. [男子套取1426万科研经费获刑8年 (Man sentenced to 8 years in prison for swindling RMB 14.26 million in scientific research funds)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%A5%97%E5%8F%961426%E4%B8%87%E7%A7%91%E7%A0%94%E7%BB%8F%E8%B4%B9%E8%8E%B7%E5%88%918%E5%B9%B4%23) `245.3K 🔥` `NEW`
1. [戛纳偶遇章泽天](https://s.weibo.com/weibo?q=%23%E6%88%9B%E7%BA%B3%E5%81%B6%E9%81%87%E7%AB%A0%E6%B3%BD%E5%A4%A9%23) `242.1K 🔥` `NEW`
1. [中美领导人致辞 (Speeches from Chinese and American leaders)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E7%BE%8E%E9%A2%86%E5%AF%BC%E4%BA%BA%E8%87%B4%E8%BE%9E%23) `1.5M 🔥` `+79%`
1. [天坛里的中国古建智慧](https://s.weibo.com/weibo?q=%23%E5%A4%A9%E5%9D%9B%E9%87%8C%E7%9A%84%E4%B8%AD%E5%9B%BD%E5%8F%A4%E5%BB%BA%E6%99%BA%E6%85%A7%23) `879.5K 🔥` `+38%`
1. [樊振东心相印品牌代言人 (Fan Zhendong is the brand spokesperson)](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E5%BF%83%E7%9B%B8%E5%8D%B0%E5%93%81%E7%89%8C%E4%BB%A3%E8%A8%80%E4%BA%BA%23) `606.4K 🔥` `+34%`
1. [有的猫一看面相就老实巴交](https://s.weibo.com/weibo?q=%23%E6%9C%89%E7%9A%84%E7%8C%AB%E4%B8%80%E7%9C%8B%E9%9D%A2%E7%9B%B8%E5%B0%B1%E8%80%81%E5%AE%9E%E5%B7%B4%E4%BA%A4%23) `601.9K 🔥` `+32%`
1. [李现看给阿嬷的情书哭得好狼狈](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E7%8E%B0%E7%9C%8B%E7%BB%99%E9%98%BF%E5%AC%B7%E7%9A%84%E6%83%85%E4%B9%A6%E5%93%AD%E5%BE%97%E5%A5%BD%E7%8B%BC%E7%8B%88%23) `395.9K 🔥` `+25%`
1. [马斯克回复360度转圈拍人民大会堂 (Musk replied with a 360-degree circle shot of the Great Hall of the People)](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E6%96%AF%E5%85%8B%E5%9B%9E%E5%A4%8D360%E5%BA%A6%E8%BD%AC%E5%9C%88%E6%8B%8D%E4%BA%BA%E6%B0%91%E5%A4%A7%E4%BC%9A%E5%A0%82%23) `395.8K 🔥` `+60%`
1. [马斯克携幼子现身人民大会堂](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E6%96%AF%E5%85%8B%E6%90%BA%E5%B9%BC%E5%AD%90%E7%8E%B0%E8%BA%AB%E4%BA%BA%E6%B0%91%E5%A4%A7%E4%BC%9A%E5%A0%82%23) `395.7K 🔥` `+31%`
1. [女子让全家常年食用无碘盐 (Woman lets her whole family eat iodized salt all year round)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E8%AE%A9%E5%85%A8%E5%AE%B6%E5%B8%B8%E5%B9%B4%E9%A3%9F%E7%94%A8%E6%97%A0%E7%A2%98%E7%9B%90%23) `395.7K 🔥` `+58%`
1. [大唐辟珠记 田曦薇](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%94%90%E8%BE%9F%E7%8F%A0%E8%AE%B0%20%E7%94%B0%E6%9B%A6%E8%96%87%23) `395.6K 🔥` `+359%`
1. [NewJeans更新Haerin近照](https://s.weibo.com/weibo?q=%23NewJeans%E6%9B%B4%E6%96%B0Haerin%E8%BF%91%E7%85%A7%23) `359.9K 🔥` `+284%`
1. [李昀锐孟子义沦为陌路只用了半年](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%98%80%E9%94%90%E5%AD%9F%E5%AD%90%E4%B9%89%E6%B2%A6%E4%B8%BA%E9%99%8C%E8%B7%AF%E5%8F%AA%E7%94%A8%E4%BA%86%E5%8D%8A%E5%B9%B4%23) `321.8K 🔥` `+101%`
1. [马斯克谈会晤感受 (Musk talks about his feelings about the meeting)](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E6%96%AF%E5%85%8B%E8%B0%88%E4%BC%9A%E6%99%A4%E6%84%9F%E5%8F%97%23) `279.7K 🔥` `+58%`
1. [阚清子吃汉堡发现汉堡皮装反了](https://s.weibo.com/weibo?q=%23%E9%98%9A%E6%B8%85%E5%AD%90%E5%90%83%E6%B1%89%E5%A0%A1%E5%8F%91%E7%8E%B0%E6%B1%89%E5%A0%A1%E7%9A%AE%E8%A3%85%E5%8F%8D%E4%BA%86%23) `275.1K 🔥` `+72%`
1. [睡前做这个动作30秒连续三天都睡得香 (Do this for 30 seconds before going to bed and sleep soundly for three days in a row)](https://s.weibo.com/weibo?q=%23%E7%9D%A1%E5%89%8D%E5%81%9A%E8%BF%99%E4%B8%AA%E5%8A%A8%E4%BD%9C30%E7%A7%92%E8%BF%9E%E7%BB%AD%E4%B8%89%E5%A4%A9%E9%83%BD%E7%9D%A1%E5%BE%97%E9%A6%99%23) `269.3K 🔥` `+68%`
1. [复旦大学王德峰教授谈缘起性空](https://s.weibo.com/weibo?q=%23%E5%A4%8D%E6%97%A6%E5%A4%A7%E5%AD%A6%E7%8E%8B%E5%BE%B7%E5%B3%B0%E6%95%99%E6%8E%88%E8%B0%88%E7%BC%98%E8%B5%B7%E6%80%A7%E7%A9%BA%23) `262.9K 🔥` `+63%`
1. [国际足联官员来京谈判转播权](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E9%99%85%E8%B6%B3%E8%81%94%E5%AE%98%E5%91%98%E6%9D%A5%E4%BA%AC%E8%B0%88%E5%88%A4%E8%BD%AC%E6%92%AD%E6%9D%83%23) `256.7K 🔥` `+118%`
1. [歌手2026全民举荐](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B2026%E5%85%A8%E6%B0%91%E4%B8%BE%E8%8D%90%23) `250.8K 🔥` `+169%`
1. [特朗普说美高法门楣刻孔子无比荣幸 (Trump said it was a great honor to have Confucius engraved on the lintel of the US High School)](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E8%AF%B4%E7%BE%8E%E9%AB%98%E6%B3%95%E9%97%A8%E6%A5%A3%E5%88%BB%E5%AD%94%E5%AD%90%E6%97%A0%E6%AF%94%E8%8D%A3%E5%B9%B8%23) `249.8K 🔥` `+167%`
1. [白鹿演唱会官宣1小时想看近两万 (White Deer Concert Officially Announces Nearly 20,000 Viewers in One Hour)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E6%BC%94%E5%94%B1%E4%BC%9A%E5%AE%98%E5%AE%A31%E5%B0%8F%E6%97%B6%E6%83%B3%E7%9C%8B%E8%BF%91%E4%B8%A4%E4%B8%87%23) `247.1K 🔥` `+296%`
1. [内娱集体宿舍大通铺名场面又来了](https://s.weibo.com/weibo?q=%23%E5%86%85%E5%A8%B1%E9%9B%86%E4%BD%93%E5%AE%BF%E8%88%8D%E5%A4%A7%E9%80%9A%E9%93%BA%E5%90%8D%E5%9C%BA%E9%9D%A2%E5%8F%88%E6%9D%A5%E4%BA%86%23) `246.7K 🔥` `+163%`
1. [多方回应关闭支付功能后被扣184万](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E6%96%B9%E5%9B%9E%E5%BA%94%E5%85%B3%E9%97%AD%E6%94%AF%E4%BB%98%E5%8A%9F%E8%83%BD%E5%90%8E%E8%A2%AB%E6%89%A3184%E4%B8%87%23) `243.8K 🔥` `+337%`
1. [曝又一部剧男主跑路](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%8F%88%E4%B8%80%E9%83%A8%E5%89%A7%E7%94%B7%E4%B8%BB%E8%B7%91%E8%B7%AF%23) `240.2K 🔥` `+123%`
1. [特朗普访华欢迎宴会](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E8%AE%BF%E5%8D%8E%E6%AC%A2%E8%BF%8E%E5%AE%B4%E4%BC%9A%23) `606.9K 🔥`
1. [国家反诈中心APP 检测AI图](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E5%AE%B6%E5%8F%8D%E8%AF%88%E4%B8%AD%E5%BF%83APP%20%E6%A3%80%E6%B5%8BAI%E5%9B%BE%23) `485.7K 🔥`
1. [杨威一家六口挤香港40多平租房 (Yang Wei's family of six squeeze into a rental house of more than 40 square meters in Hong Kong)](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%A8%81%E4%B8%80%E5%AE%B6%E5%85%AD%E5%8F%A3%E6%8C%A4%E9%A6%99%E6%B8%AF40%E5%A4%9A%E5%B9%B3%E7%A7%9F%E6%88%BF%23) `395.9K 🔥`
1. [泰兰尼斯被曝千元童鞋成本仅37元](https://s.weibo.com/weibo?q=%23%E6%B3%B0%E5%85%B0%E5%B0%BC%E6%96%AF%E8%A2%AB%E6%9B%9D%E5%8D%83%E5%85%83%E7%AB%A5%E9%9E%8B%E6%88%90%E6%9C%AC%E4%BB%8537%E5%85%83%23) `336.6K 🔥`
1. [方媛坚持要住男生单人间 (Fang Yuan insisted on staying in a single room for boys)](https://s.weibo.com/weibo?q=%23%E6%96%B9%E5%AA%9B%E5%9D%9A%E6%8C%81%E8%A6%81%E4%BD%8F%E7%94%B7%E7%94%9F%E5%8D%95%E4%BA%BA%E9%97%B4%23) `395.8K 🔥` `-38%`
1. [疑似周也对戛纳火力全开 (It is suspected that Zhou Ye is full of enthusiasm for Cannes)](https://s.weibo.com/weibo?q=%23%E7%96%91%E4%BC%BC%E5%91%A8%E4%B9%9F%E5%AF%B9%E6%88%9B%E7%BA%B3%E7%81%AB%E5%8A%9B%E5%85%A8%E5%BC%80%23) `278.5K 🔥` `-35%`
1. [英国乒乓球官方称赞孙颖莎人品和球技](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E5%9B%BD%E4%B9%92%E4%B9%93%E7%90%83%E5%AE%98%E6%96%B9%E7%A7%B0%E8%B5%9E%E5%AD%99%E9%A2%96%E8%8E%8E%E4%BA%BA%E5%93%81%E5%92%8C%E7%90%83%E6%8A%80%23) `262.0K 🔥` `-37%`
1. [AI还原烂梗有多毒 (How toxic is AI's restoration of rotten memes?)](https://s.weibo.com/weibo?q=%23AI%E8%BF%98%E5%8E%9F%E7%83%82%E6%A2%97%E6%9C%89%E5%A4%9A%E6%AF%92%23) `257.7K 🔥` `-32%`

Updated at 2026-05-15 09:30:23

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
