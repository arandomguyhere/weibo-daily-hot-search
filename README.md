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

1. [第二代腾势D9搭载闪充今晚上市 (The second generation Denza D9 equipped with flash charging will be launched tonight)](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%BA%8C%E4%BB%A3%E8%85%BE%E5%8A%BFD9%E6%90%AD%E8%BD%BD%E9%97%AA%E5%85%85%E4%BB%8A%E6%99%9A%E4%B8%8A%E5%B8%82%23) `397.0K 🔥` `NEW`
1. [男子乱小便踹人致自己骨折](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E4%B9%B1%E5%B0%8F%E4%BE%BF%E8%B8%B9%E4%BA%BA%E8%87%B4%E8%87%AA%E5%B7%B1%E9%AA%A8%E6%8A%98%23) `166.9K 🔥` `NEW`
1. [宋茜到西安就像老鼠掉进了米缸](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E8%8C%9C%E5%88%B0%E8%A5%BF%E5%AE%89%E5%B0%B1%E5%83%8F%E8%80%81%E9%BC%A0%E6%8E%89%E8%BF%9B%E4%BA%86%E7%B1%B3%E7%BC%B8%23) `77.9K 🔥` `NEW`
1. [生命树杨紫的家成了打卡点](https://s.weibo.com/weibo?q=%23%E7%94%9F%E5%91%BD%E6%A0%91%E6%9D%A8%E7%B4%AB%E7%9A%84%E5%AE%B6%E6%88%90%E4%BA%86%E6%89%93%E5%8D%A1%E7%82%B9%23) `53.6K 🔥` `NEW`
1. [鸿星尔克董事长比员工更想下班](https://s.weibo.com/weibo?q=%23%E9%B8%BF%E6%98%9F%E5%B0%94%E5%85%8B%E8%91%A3%E4%BA%8B%E9%95%BF%E6%AF%94%E5%91%98%E5%B7%A5%E6%9B%B4%E6%83%B3%E4%B8%8B%E7%8F%AD%23) `53.6K 🔥` `NEW`
1. [歌手2026 (singer 2026)](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B2026%23) `693.7K 🔥` `+110%`
1. [特朗普夫人反应迅速](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E5%A4%AB%E4%BA%BA%E5%8F%8D%E5%BA%94%E8%BF%85%E9%80%9F%23) `493.6K 🔥` `+308%`
1. [影视文旅成消费新风口](https://s.weibo.com/weibo?q=%23%E5%BD%B1%E8%A7%86%E6%96%87%E6%97%85%E6%88%90%E6%B6%88%E8%B4%B9%E6%96%B0%E9%A3%8E%E5%8F%A3%23) `398.2K 🔥` `+54%`
1. [伊朗最高领袖突然发文 (Iran’s supreme leader suddenly issued a message)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%9C%80%E9%AB%98%E9%A2%86%E8%A2%96%E7%AA%81%E7%84%B6%E5%8F%91%E6%96%87%23) `375.7K 🔥` `+87%`
1. [张月 挂电](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%88%20%E6%8C%82%E7%94%B5%23) `300.6K 🔥` `+160%`
1. [东方甄选新CEO为何与老将难共存 (Why is it difficult for Dongfang to select a new CEO to coexist with veterans?)](https://s.weibo.com/weibo?q=%23%E4%B8%9C%E6%96%B9%E7%94%84%E9%80%89%E6%96%B0CEO%E4%B8%BA%E4%BD%95%E4%B8%8E%E8%80%81%E5%B0%86%E9%9A%BE%E5%85%B1%E5%AD%98%23) `260.7K 🔥` `+83%`
1. [AG确认晋级挑杯十六强](https://s.weibo.com/weibo?q=%23AG%E7%A1%AE%E8%AE%A4%E6%99%8B%E7%BA%A7%E6%8C%91%E6%9D%AF%E5%8D%81%E5%85%AD%E5%BC%BA%23) `250.2K 🔥` `+83%`
1. [迪丽热巴跑男只录了12天 (Di Lieba's Running Man only recorded for 12 days)](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E8%B7%91%E7%94%B7%E5%8F%AA%E5%BD%95%E4%BA%8612%E5%A4%A9%23) `243.9K 🔥` `+65%`
1. [世界上两个最离不开手的东西合体了](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E4%B8%8A%E4%B8%A4%E4%B8%AA%E6%9C%80%E7%A6%BB%E4%B8%8D%E5%BC%80%E6%89%8B%E7%9A%84%E4%B8%9C%E8%A5%BF%E5%90%88%E4%BD%93%E4%BA%86%23) `213.5K 🔥` `+54%`
1. [唐艺昕 何宣林 (Tang Yixin He Xuanlin)](https://s.weibo.com/weibo?q=%23%E5%94%90%E8%89%BA%E6%98%95%20%E4%BD%95%E5%AE%A3%E6%9E%97%23) `213.3K 🔥` `+87%`
1. [张颂文没看过狂飙 (Zhang Songwen has never watched Kuangbiao)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%A2%82%E6%96%87%E6%B2%A1%E7%9C%8B%E8%BF%87%E7%8B%82%E9%A3%99%23) `209.0K 🔥` `+458%`
1. [女子老太地铁抢座打架谁更该羞愧 (Woman and old woman fight over subway seats, who should be ashamed more)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E8%80%81%E5%A4%AA%E5%9C%B0%E9%93%81%E6%8A%A2%E5%BA%A7%E6%89%93%E6%9E%B6%E8%B0%81%E6%9B%B4%E8%AF%A5%E7%BE%9E%E6%84%A7%23) `201.5K 🔥` `+129%`
1. [陈德修 够爱 (Chen Dexiu Love it enough)](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%BE%B7%E4%BF%AE%20%E5%A4%9F%E7%88%B1%23) `198.6K 🔥` `+87%`
1. [男子从内地偷运51公斤盒饭回澳门 (Man smuggles 51 kilograms of lunch boxes from the mainland back to Macau)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E4%BB%8E%E5%86%85%E5%9C%B0%E5%81%B7%E8%BF%9051%E5%85%AC%E6%96%A4%E7%9B%92%E9%A5%AD%E5%9B%9E%E6%BE%B3%E9%97%A8%23) `195.0K 🔥` `+73%`
1. [胖东来18元瓶装矿泉水遭哄抢 (Pang Donglai’s 18 yuan bottle of mineral water was robbed)](https://s.weibo.com/weibo?q=%23%E8%83%96%E4%B8%9C%E6%9D%A518%E5%85%83%E7%93%B6%E8%A3%85%E7%9F%BF%E6%B3%89%E6%B0%B4%E9%81%AD%E5%93%84%E6%8A%A2%23) `186.4K 🔥` `+94%`
1. [网店卖8年假耐克赚了126万 (Online store earns 1.26 million from selling 8-year-old fake Nike)](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%BA%97%E5%8D%968%E5%B9%B4%E5%81%87%E8%80%90%E5%85%8B%E8%B5%9A%E4%BA%86126%E4%B8%87%23) `185.7K 🔥` `+115%`
1. [连续两周上四休三 (Two weeks in a row, four days off and three days off)](https://s.weibo.com/weibo?q=%23%E8%BF%9E%E7%BB%AD%E4%B8%A4%E5%91%A8%E4%B8%8A%E5%9B%9B%E4%BC%91%E4%B8%89%23) `179.5K 🔥` `+184%`
1. [佳偶天成](https://s.weibo.com/weibo?q=%23%E4%BD%B3%E5%81%B6%E5%A4%A9%E6%88%90%23) `116.8K 🔥` `+55%`
1. [浪姐直播疑似没人理何宣林](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E7%9B%B4%E6%92%AD%E7%96%91%E4%BC%BC%E6%B2%A1%E4%BA%BA%E7%90%86%E4%BD%95%E5%AE%A3%E6%9E%97%23) `111.6K 🔥` `+68%`
1. [女生腹痛以为肠胃不适查出满肚肿瘤](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E7%94%9F%E8%85%B9%E7%97%9B%E4%BB%A5%E4%B8%BA%E8%82%A0%E8%83%83%E4%B8%8D%E9%80%82%E6%9F%A5%E5%87%BA%E6%BB%A1%E8%82%9A%E8%82%BF%E7%98%A4%23) `99.5K 🔥` `+109%`
1. [许凯演技 (Xu Kai's acting skills)](https://s.weibo.com/weibo?q=%23%E8%AE%B8%E5%87%AF%E6%BC%94%E6%8A%80%23) `97.6K 🔥` `+127%`
1. [杨幂冯太后盘发造型路透 (Yang Mi and Queen Mother Feng’s hairstyle Reuters)](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E5%86%AF%E5%A4%AA%E5%90%8E%E7%9B%98%E5%8F%91%E9%80%A0%E5%9E%8B%E8%B7%AF%E9%80%8F%23) `88.7K 🔥` `+37%`
1. [男童泡温泉遇蛇吓出应激创伤 (Boy encounters snake in hot spring and suffers from stress trauma)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E7%AB%A5%E6%B3%A1%E6%B8%A9%E6%B3%89%E9%81%87%E8%9B%87%E5%90%93%E5%87%BA%E5%BA%94%E6%BF%80%E5%88%9B%E4%BC%A4%23) `87.3K 🔥` `+123%`
1. [张小斐 没有讨好感的眼神和动作 (Zhang Xiaofei’s unflattering eyes and actions)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%B0%8F%E6%96%90%20%E6%B2%A1%E6%9C%89%E8%AE%A8%E5%A5%BD%E6%84%9F%E7%9A%84%E7%9C%BC%E7%A5%9E%E5%92%8C%E5%8A%A8%E4%BD%9C%23) `81.1K 🔥` `+46%`
1. [魏笑老公曾参加过恋综 (Wei Xiao’s husband once participated in a love variety show)](https://s.weibo.com/weibo?q=%23%E9%AD%8F%E7%AC%91%E8%80%81%E5%85%AC%E6%9B%BE%E5%8F%82%E5%8A%A0%E8%BF%87%E6%81%8B%E7%BB%BC%23) `76.7K 🔥` `+104%`
1. [别在乱充电提早损害电池健康了 (Don’t charge randomly and damage the health of the battery in advance.)](https://s.weibo.com/weibo?q=%23%E5%88%AB%E5%9C%A8%E4%B9%B1%E5%85%85%E7%94%B5%E6%8F%90%E6%97%A9%E6%8D%9F%E5%AE%B3%E7%94%B5%E6%B1%A0%E5%81%A5%E5%BA%B7%E4%BA%86%23) `76.5K 🔥` `+83%`
1. [刘雨昕好辣 (Liu Yuxin is so spicy)](https://s.weibo.com/weibo?q=%23%E5%88%98%E9%9B%A8%E6%98%95%E5%A5%BD%E8%BE%A3%23) `75.6K 🔥` `+98%`
1. [李小冉跟心愿便利贴女主陈乔恩相遇了](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B0%8F%E5%86%89%E8%B7%9F%E5%BF%83%E6%84%BF%E4%BE%BF%E5%88%A9%E8%B4%B4%E5%A5%B3%E4%B8%BB%E9%99%88%E4%B9%94%E6%81%A9%E7%9B%B8%E9%81%87%E4%BA%86%23) `72.6K 🔥` `+51%`
1. [一笙回应](https://s.weibo.com/weibo?q=%23%E4%B8%80%E7%AC%99%E5%9B%9E%E5%BA%94%23) `69.9K 🔥` `+23%`
1. [俞敏洪坦言公司管理方式出现偏差](https://s.weibo.com/weibo?q=%23%E4%BF%9E%E6%95%8F%E6%B4%AA%E5%9D%A6%E8%A8%80%E5%85%AC%E5%8F%B8%E7%AE%A1%E7%90%86%E6%96%B9%E5%BC%8F%E5%87%BA%E7%8E%B0%E5%81%8F%E5%B7%AE%23) `68.7K 🔥` `+45%`
1. [狗狗脚脱臼了医患双方都很紧张](https://s.weibo.com/weibo?q=%23%E7%8B%97%E7%8B%97%E8%84%9A%E8%84%B1%E8%87%BC%E4%BA%86%E5%8C%BB%E6%82%A3%E5%8F%8C%E6%96%B9%E9%83%BD%E5%BE%88%E7%B4%A7%E5%BC%A0%23) `66.7K 🔥` `+34%`
1. [aespa回归预告](https://s.weibo.com/weibo?q=%23aespa%E5%9B%9E%E5%BD%92%E9%A2%84%E5%91%8A%23) `56.9K 🔥` `+52%`
1. [AG春季赛总冠军 (AG Spring Split Champion)](https://s.weibo.com/weibo?q=%23AG%E6%98%A5%E5%AD%A3%E8%B5%9B%E6%80%BB%E5%86%A0%E5%86%9B%23) `55.2K 🔥` `+48%`
1. [A股一季度最赚钱公司曝光 (The most profitable companies in A-share market in the first quarter exposed)](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E4%B8%80%E5%AD%A3%E5%BA%A6%E6%9C%80%E8%B5%9A%E9%92%B1%E5%85%AC%E5%8F%B8%E6%9B%9D%E5%85%89%23) `53.6K 🔥` `+111%`
1. [翘楚和莫离都暂定同一天播出 (Both Qiao Chu and Mo Li are tentatively scheduled to air on the same day)](https://s.weibo.com/weibo?q=%23%E7%BF%98%E6%A5%9A%E5%92%8C%E8%8E%AB%E7%A6%BB%E9%83%BD%E6%9A%82%E5%AE%9A%E5%90%8C%E4%B8%80%E5%A4%A9%E6%92%AD%E5%87%BA%23) `53.6K 🔥` `+39%`
1. [张月 没保护好者来女是我的遗憾 (Zhang Yue, it’s my regret that I didn’t protect the good girl.)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%88%20%E6%B2%A1%E4%BF%9D%E6%8A%A4%E5%A5%BD%E8%80%85%E6%9D%A5%E5%A5%B3%E6%98%AF%E6%88%91%E7%9A%84%E9%81%97%E6%86%BE%23) `53.6K 🔥` `+43%`
1. [父亲病重去世主播停播失联遭公司索赔](https://s.weibo.com/weibo?q=%23%E7%88%B6%E4%BA%B2%E7%97%85%E9%87%8D%E5%8E%BB%E4%B8%96%E4%B8%BB%E6%92%AD%E5%81%9C%E6%92%AD%E5%A4%B1%E8%81%94%E9%81%AD%E5%85%AC%E5%8F%B8%E7%B4%A2%E8%B5%94%23) `53.6K 🔥` `+34%`
1. [东方甄选为何留不住人 (Why can’t Eastern Selection retain people?)](https://s.weibo.com/weibo?q=%23%E4%B8%9C%E6%96%B9%E7%94%84%E9%80%89%E4%B8%BA%E4%BD%95%E7%95%99%E4%B8%8D%E4%BD%8F%E4%BA%BA%23) `53.5K 🔥` `+43%`
1. [一笙后援会集体辞职 (Yisheng Supporters Association collectively resigned)](https://s.weibo.com/weibo?q=%23%E4%B8%80%E7%AC%99%E5%90%8E%E6%8F%B4%E4%BC%9A%E9%9B%86%E4%BD%93%E8%BE%9E%E8%81%8C%23) `53.5K 🔥` `+43%`
1. [丁禹兮尔木萄全球品牌代言人 (Ding Yuxi Ermutao global brand spokesperson)](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A6%B9%E5%85%AE%E5%B0%94%E6%9C%A8%E8%90%84%E5%85%A8%E7%90%83%E5%93%81%E7%89%8C%E4%BB%A3%E8%A8%80%E4%BA%BA%23) `285.4K 🔥`
1. [美国特勤局肉弹特工再次出镜 (U.S. Secret Service bomb agent appears again)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E7%89%B9%E5%8B%A4%E5%B1%80%E8%82%89%E5%BC%B9%E7%89%B9%E5%B7%A5%E5%86%8D%E6%AC%A1%E5%87%BA%E9%95%9C%23) `128.4K 🔥`
1. [外籍游客三亚旅游15元误付1.5万 (Foreign tourist mistakenly paid 15,000 yuan for a trip to Sanya)](https://s.weibo.com/weibo?q=%23%E5%A4%96%E7%B1%8D%E6%B8%B8%E5%AE%A2%E4%B8%89%E4%BA%9A%E6%97%85%E6%B8%B815%E5%85%83%E8%AF%AF%E4%BB%981.5%E4%B8%87%23) `83.3K 🔥`
1. [浴室除霉菌 霉菌视角 (Bathroom Mold Removal Mold Perspective)](https://s.weibo.com/weibo?q=%23%E6%B5%B4%E5%AE%A4%E9%99%A4%E9%9C%89%E8%8F%8C%20%E9%9C%89%E8%8F%8C%E8%A7%86%E8%A7%92%23) `77.4K 🔥`
1. [1岁女童小区玩耍感染广州管圆线虫](https://s.weibo.com/weibo?q=%231%E5%B2%81%E5%A5%B3%E7%AB%A5%E5%B0%8F%E5%8C%BA%E7%8E%A9%E8%80%8D%E6%84%9F%E6%9F%93%E5%B9%BF%E5%B7%9E%E7%AE%A1%E5%9C%86%E7%BA%BF%E8%99%AB%23) `63.8K 🔥`
1. [集体离职撕开东方甄选内部乱象 (Collective resignations opened up internal chaos at Oriental Selection)](https://s.weibo.com/weibo?q=%23%E9%9B%86%E4%BD%93%E7%A6%BB%E8%81%8C%E6%92%95%E5%BC%80%E4%B8%9C%E6%96%B9%E7%94%84%E9%80%89%E5%86%85%E9%83%A8%E4%B9%B1%E8%B1%A1%23) `59.3K 🔥`
1. [人类马拉松破二](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E7%B1%BB%E9%A9%AC%E6%8B%89%E6%9D%BE%E7%A0%B4%E4%BA%8C%23) `53.8K 🔥`
1. [身份证照片最接近别人肉眼看到的自己 (The ID photo is the closest to what others see of you.)](https://s.weibo.com/weibo?q=%23%E8%BA%AB%E4%BB%BD%E8%AF%81%E7%85%A7%E7%89%87%E6%9C%80%E6%8E%A5%E8%BF%91%E5%88%AB%E4%BA%BA%E8%82%89%E7%9C%BC%E7%9C%8B%E5%88%B0%E7%9A%84%E8%87%AA%E5%B7%B1%23) `389.7K 🔥` `-28%`

Updated at 2026-04-27 07:09:34

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
