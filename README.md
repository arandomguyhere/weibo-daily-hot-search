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

1. [BLG首发上单Flandre (BLG’s first top laner Flandre)](https://s.weibo.com/weibo?q=%23BLG%E9%A6%96%E5%8F%91%E4%B8%8A%E5%8D%95Flandre%23) `150.2K 🔥` `NEW`
1. [桑德斯要求三大AI公司暂停开发](https://s.weibo.com/weibo?q=%23%E6%A1%91%E5%BE%B7%E6%96%AF%E8%A6%81%E6%B1%82%E4%B8%89%E5%A4%A7AI%E5%85%AC%E5%8F%B8%E6%9A%82%E5%81%9C%E5%BC%80%E5%8F%91%23) `139.5K 🔥` `NEW`
1. [韩乔生谈C罗年薪19亿足坛第一](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E4%B9%94%E7%94%9F%E8%B0%88C%E7%BD%97%E5%B9%B4%E8%96%AA19%E4%BA%BF%E8%B6%B3%E5%9D%9B%E7%AC%AC%E4%B8%80%23) `139.4K 🔥` `NEW`
1. [上海暴雨](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E6%9A%B4%E9%9B%A8%23) `139.2K 🔥` `NEW`
1. [高考444分考生回应被殡葬专业录取](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%80%83444%E5%88%86%E8%80%83%E7%94%9F%E5%9B%9E%E5%BA%94%E8%A2%AB%E6%AE%A1%E8%91%AC%E4%B8%93%E4%B8%9A%E5%BD%95%E5%8F%96%23) `122.7K 🔥` `NEW`
1. [白鹿直播破1000万人次](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E7%9B%B4%E6%92%AD%E7%A0%B41000%E4%B8%87%E4%BA%BA%E6%AC%A1%23) `89.0K 🔥` `NEW`
1. [原配妻子称丈夫非常坚定选择第三者](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E9%85%8D%E5%A6%BB%E5%AD%90%E7%A7%B0%E4%B8%88%E5%A4%AB%E9%9D%9E%E5%B8%B8%E5%9D%9A%E5%AE%9A%E9%80%89%E6%8B%A9%E7%AC%AC%E4%B8%89%E8%80%85%23) `85.3K 🔥` `NEW`
1. [以后再也不好奇酸奶碗了](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E5%90%8E%E5%86%8D%E4%B9%9F%E4%B8%8D%E5%A5%BD%E5%A5%87%E9%85%B8%E5%A5%B6%E7%A2%97%E4%BA%86%23) `82.2K 🔥` `NEW`
1. [女明星贴头皮造型](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E6%98%8E%E6%98%9F%E8%B4%B4%E5%A4%B4%E7%9A%AE%E9%80%A0%E5%9E%8B%23) `76.8K 🔥` `NEW`
1. [丁程鑫一路披荆斩棘走到了今天](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A8%8B%E9%91%AB%E4%B8%80%E8%B7%AF%E6%8A%AB%E8%8D%86%E6%96%A9%E6%A3%98%E8%B5%B0%E5%88%B0%E4%BA%86%E4%BB%8A%E5%A4%A9%23) `62.5K 🔥` `NEW`
1. [小鹏G9L全球首秀 (Xpeng G9L makes its world debut)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E9%B9%8FG9L%E5%85%A8%E7%90%83%E9%A6%96%E7%A7%80%23) `57.6K 🔥` `NEW`
1. [郭兰英逝世 (Guo Lanying passed away)](https://s.weibo.com/weibo?q=%23%E9%83%AD%E5%85%B0%E8%8B%B1%E9%80%9D%E4%B8%96%23) `1.3M 🔥` `+217%`
1. [曝赵一鸣4块牛肉干64元复称仅17元 (It was revealed that Zhao Yiming’s 4 pieces of beef jerky cost 64 yuan and were renamed to only 17 yuan.)](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E8%B5%B5%E4%B8%80%E9%B8%A34%E5%9D%97%E7%89%9B%E8%82%89%E5%B9%B264%E5%85%83%E5%A4%8D%E7%A7%B0%E4%BB%8517%E5%85%83%23) `732.9K 🔥` `+26%`
1. [请查收这份暴雨天避险指南 (Please check this guide to avoid heavy rainstorms)](https://s.weibo.com/weibo?q=%23%E8%AF%B7%E6%9F%A5%E6%94%B6%E8%BF%99%E4%BB%BD%E6%9A%B4%E9%9B%A8%E5%A4%A9%E9%81%BF%E9%99%A9%E6%8C%87%E5%8D%97%23) `544.0K 🔥` `+65%`
1. [忙到晕倒炸鸡店员工已结算工资离职 (Fried chicken restaurant employee was so busy that he fainted and resigned after paying his salary)](https://s.weibo.com/weibo?q=%23%E5%BF%99%E5%88%B0%E6%99%95%E5%80%92%E7%82%B8%E9%B8%A1%E5%BA%97%E5%91%98%E5%B7%A5%E5%B7%B2%E7%BB%93%E7%AE%97%E5%B7%A5%E8%B5%84%E7%A6%BB%E8%81%8C%23) `524.1K 🔥` `+539%`
1. [韩国新恋综 我剩下的恋爱 (Korean New Love Variety My Remaining Love)](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E6%96%B0%E6%81%8B%E7%BB%BC%20%E6%88%91%E5%89%A9%E4%B8%8B%E7%9A%84%E6%81%8B%E7%88%B1%23) `139.6K 🔥` `+70%`
1. [赵一鸣涉事店铺老板回应](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%B8%80%E9%B8%A3%E6%B6%89%E4%BA%8B%E5%BA%97%E9%93%BA%E8%80%81%E6%9D%BF%E5%9B%9E%E5%BA%94%23) `138.4K 🔥` `+70%`
1. [恢复生命力只需要一些低成本爱好 (All it takes to regain your vitality is some low-cost hobbies)](https://s.weibo.com/weibo?q=%23%E6%81%A2%E5%A4%8D%E7%94%9F%E5%91%BD%E5%8A%9B%E5%8F%AA%E9%9C%80%E8%A6%81%E4%B8%80%E4%BA%9B%E4%BD%8E%E6%88%90%E6%9C%AC%E7%88%B1%E5%A5%BD%23) `138.3K 🔥` `+38%`
1. [结婚40年都AA制丈夫认为公平合理](https://s.weibo.com/weibo?q=%23%E7%BB%93%E5%A9%9A40%E5%B9%B4%E9%83%BDAA%E5%88%B6%E4%B8%88%E5%A4%AB%E8%AE%A4%E4%B8%BA%E5%85%AC%E5%B9%B3%E5%90%88%E7%90%86%23) `138.1K 🔥` `+111%`
1. [龙餐馆豆瓣开分8.4 (Dragon Restaurant’s Douban score is 8.4)](https://s.weibo.com/weibo?q=%23%E9%BE%99%E9%A4%90%E9%A6%86%E8%B1%86%E7%93%A3%E5%BC%80%E5%88%868.4%23) `122.8K 🔥` `+89%`
1. [哪吒获奖台下嘉宾反应冷淡原因 (The reason for the cold reaction from the guests in the audience when Nezha won the award)](https://s.weibo.com/weibo?q=%23%E5%93%AA%E5%90%92%E8%8E%B7%E5%A5%96%E5%8F%B0%E4%B8%8B%E5%98%89%E5%AE%BE%E5%8F%8D%E5%BA%94%E5%86%B7%E6%B7%A1%E5%8E%9F%E5%9B%A0%23) `122.6K 🔥` `+106%`
1. [曝刺棠女主换成杨超越了](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%88%BA%E6%A3%A0%E5%A5%B3%E4%B8%BB%E6%8D%A2%E6%88%90%E6%9D%A8%E8%B6%85%E8%B6%8A%E4%BA%86%23) `122.5K 🔥` `+57%`
1. [父亲耗时二十多年把榕树养成天然树屋 (My father spent more than 20 years growing a banyan tree into a natural tree house)](https://s.weibo.com/weibo?q=%23%E7%88%B6%E4%BA%B2%E8%80%97%E6%97%B6%E4%BA%8C%E5%8D%81%E5%A4%9A%E5%B9%B4%E6%8A%8A%E6%A6%95%E6%A0%91%E5%85%BB%E6%88%90%E5%A4%A9%E7%84%B6%E6%A0%91%E5%B1%8B%23) `121.4K 🔥` `+105%`
1. [男子上班脑出血家属无奈拔管后死亡](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E4%B8%8A%E7%8F%AD%E8%84%91%E5%87%BA%E8%A1%80%E5%AE%B6%E5%B1%9E%E6%97%A0%E5%A5%88%E6%8B%94%E7%AE%A1%E5%90%8E%E6%AD%BB%E4%BA%A1%23) `113.3K 🔥` `+90%`
1. [我听交警的涉事女子道歉赔偿](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%90%AC%E4%BA%A4%E8%AD%A6%E7%9A%84%E6%B6%89%E4%BA%8B%E5%A5%B3%E5%AD%90%E9%81%93%E6%AD%89%E8%B5%94%E5%81%BF%23) `105.9K 🔥` `+31%`
1. [樊振东WTT冠军榜位列第二 (Fan Zhendong ranks second in WTT championship list)](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9CWTT%E5%86%A0%E5%86%9B%E6%A6%9C%E4%BD%8D%E5%88%97%E7%AC%AC%E4%BA%8C%23) `92.1K 🔥` `+23%`
1. [梁文锋跻身全球最富有50人之列](https://s.weibo.com/weibo?q=%23%E6%A2%81%E6%96%87%E9%94%8B%E8%B7%BB%E8%BA%AB%E5%85%A8%E7%90%83%E6%9C%80%E5%AF%8C%E6%9C%8950%E4%BA%BA%E4%B9%8B%E5%88%97%23) `88.8K 🔥` `+91%`
1. [人这一辈子不是在算一个性价比](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E8%BF%99%E4%B8%80%E8%BE%88%E5%AD%90%E4%B8%8D%E6%98%AF%E5%9C%A8%E7%AE%97%E4%B8%80%E4%B8%AA%E6%80%A7%E4%BB%B7%E6%AF%94%23) `88.8K 🔥` `+106%`
1. [娜扎上户口的时候名字多打字了 (When Nazha registered her household registration, she typed her name too much.)](https://s.weibo.com/weibo?q=%23%E5%A8%9C%E6%89%8E%E4%B8%8A%E6%88%B7%E5%8F%A3%E7%9A%84%E6%97%B6%E5%80%99%E5%90%8D%E5%AD%97%E5%A4%9A%E6%89%93%E5%AD%97%E4%BA%86%23) `88.7K 🔥` `+113%`
1. [台风白海豚 (Typhoon White Dolphin)](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E7%99%BD%E6%B5%B7%E8%B1%9A%23) `74.7K 🔥` `+25%`
1. [丁程鑫录制好六提前离场](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A8%8B%E9%91%AB%E5%BD%95%E5%88%B6%E5%A5%BD%E5%85%AD%E6%8F%90%E5%89%8D%E7%A6%BB%E5%9C%BA%23) `74.7K 🔥` `+23%`
1. [婚外胚胎案男方被指有三支律师团队](https://s.weibo.com/weibo?q=%23%E5%A9%9A%E5%A4%96%E8%83%9A%E8%83%8E%E6%A1%88%E7%94%B7%E6%96%B9%E8%A2%AB%E6%8C%87%E6%9C%89%E4%B8%89%E6%94%AF%E5%BE%8B%E5%B8%88%E5%9B%A2%E9%98%9F%23) `70.9K 🔥` `+38%`
1. [哪吒159亿票房为何换不来全体起立 (Why can’t everyone stand up in exchange for Nezha’s 15.9 billion box office?)](https://s.weibo.com/weibo?q=%23%E5%93%AA%E5%90%92159%E4%BA%BF%E7%A5%A8%E6%88%BF%E4%B8%BA%E4%BD%95%E6%8D%A2%E4%B8%8D%E6%9D%A5%E5%85%A8%E4%BD%93%E8%B5%B7%E7%AB%8B%23) `69.7K 🔥` `+36%`
1. [男子直播淫秽内容获利0.1元被判刑 (Man was sentenced for making 0.1 yuan from live broadcast of obscene content)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E7%9B%B4%E6%92%AD%E6%B7%AB%E7%A7%BD%E5%86%85%E5%AE%B9%E8%8E%B7%E5%88%A90.1%E5%85%83%E8%A2%AB%E5%88%A4%E5%88%91%23) `62.1K 🔥` `+44%`
1. [宇树科技中签者发声 (Winners of Yushu Technology speak out)](https://s.weibo.com/weibo?q=%23%E5%AE%87%E6%A0%91%E7%A7%91%E6%8A%80%E4%B8%AD%E7%AD%BE%E8%80%85%E5%8F%91%E5%A3%B0%23) `61.5K 🔥` `+120%`
1. [AI构建中国天庭在外网火了 (AI builds China’s paradise and becomes popular on the Internet)](https://s.weibo.com/weibo?q=%23AI%E6%9E%84%E5%BB%BA%E4%B8%AD%E5%9B%BD%E5%A4%A9%E5%BA%AD%E5%9C%A8%E5%A4%96%E7%BD%91%E7%81%AB%E4%BA%86%23) `57.9K 🔥` `+25%`
1. [曝卢昱晓不演刺棠进七星彩 (Revealed that Lu Yuxiao will not play Ci Tang in Qixingcai)](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%8D%A2%E6%98%B1%E6%99%93%E4%B8%8D%E6%BC%94%E5%88%BA%E6%A3%A0%E8%BF%9B%E4%B8%83%E6%98%9F%E5%BD%A9%23) `57.3K 🔥` `+32%`
1. [新势力销冠零跑6万级新车A05上市 (New force’s best-selling 60,000-class new car A05 is launched)](https://s.weibo.com/weibo?q=%23%E6%96%B0%E5%8A%BF%E5%8A%9B%E9%94%80%E5%86%A0%E9%9B%B6%E8%B7%916%E4%B8%87%E7%BA%A7%E6%96%B0%E8%BD%A6A05%E4%B8%8A%E5%B8%82%23) `527.7K 🔥`
1. [贺峻霖向往的生活常驻 (The life that He Junlin longs for is permanent)](https://s.weibo.com/weibo?q=%23%E8%B4%BA%E5%B3%BB%E9%9C%96%E5%90%91%E5%BE%80%E7%9A%84%E7%94%9F%E6%B4%BB%E5%B8%B8%E9%A9%BB%23) `176.9K 🔥`
1. [北京暴雨 (Heavy rain in Beijing)](https://s.weibo.com/weibo?q=%23%E5%8C%97%E4%BA%AC%E6%9A%B4%E9%9B%A8%23) `138.8K 🔥`
1. [胚胎案妻子遭短信轰炸 (Embryo case: Wife bombarded with text messages)](https://s.weibo.com/weibo?q=%23%E8%83%9A%E8%83%8E%E6%A1%88%E5%A6%BB%E5%AD%90%E9%81%AD%E7%9F%AD%E4%BF%A1%E8%BD%B0%E7%82%B8%23) `138.0K 🔥`
1. [六公主力挺赵丽颖百花奖 (Six Princesses Support Zhao Liying Hundred Flowers Award)](https://s.weibo.com/weibo?q=%23%E5%85%AD%E5%85%AC%E4%B8%BB%E5%8A%9B%E6%8C%BA%E8%B5%B5%E4%B8%BD%E9%A2%96%E7%99%BE%E8%8A%B1%E5%A5%96%23) `123.7K 🔥`
1. [我的前半生有五个视帝视后 (In the first half of my life, I had five emperors and queens)](https://s.weibo.com/weibo?q=%23%E6%88%91%E7%9A%84%E5%89%8D%E5%8D%8A%E7%94%9F%E6%9C%89%E4%BA%94%E4%B8%AA%E8%A7%86%E5%B8%9D%E8%A7%86%E5%90%8E%23) `65.2K 🔥`
1. [DeepSeek会偷偷给人取外号](https://s.weibo.com/weibo?q=%23DeepSeek%E4%BC%9A%E5%81%B7%E5%81%B7%E7%BB%99%E4%BA%BA%E5%8F%96%E5%A4%96%E5%8F%B7%23) `63.0K 🔥`
1. [建议女生不要在网上过度分享](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E5%A5%B3%E7%94%9F%E4%B8%8D%E8%A6%81%E5%9C%A8%E7%BD%91%E4%B8%8A%E8%BF%87%E5%BA%A6%E5%88%86%E4%BA%AB%23) `60.1K 🔥`
1. [日本篡改历史被反噬了](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E7%AF%A1%E6%94%B9%E5%8E%86%E5%8F%B2%E8%A2%AB%E5%8F%8D%E5%99%AC%E4%BA%86%23) `138.7K 🔥` `-42%`
1. [加拿大偶遇郑恺苗苗](https://s.weibo.com/weibo?q=%23%E5%8A%A0%E6%8B%BF%E5%A4%A7%E5%81%B6%E9%81%87%E9%83%91%E6%81%BA%E8%8B%97%E8%8B%97%23) `97.9K 🔥` `-45%`
1. [白鹿的带货能力 (Bailu’s ability to carry goods)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E7%9A%84%E5%B8%A6%E8%B4%A7%E8%83%BD%E5%8A%9B%23) `79.0K 🔥` `-79%`
1. [巴旦木公主晒结婚证 (Princess Badanmu shows off her marriage certificate)](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E6%97%A6%E6%9C%A8%E5%85%AC%E4%B8%BB%E6%99%92%E7%BB%93%E5%A9%9A%E8%AF%81%23) `72.6K 🔥` `-80%`
1. [杨洋陈都灵 等风热吻你](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E6%B4%8B%E9%99%88%E9%83%BD%E7%81%B5%20%E7%AD%89%E9%A3%8E%E7%83%AD%E5%90%BB%E4%BD%A0%23) `59.5K 🔥` `-83%`

Updated at 2026-08-12 07:31:53

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
