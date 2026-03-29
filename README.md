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

1. [观众反感的从来不是帅将军 (It’s never the handsome general that the audience dislikes)](https://s.weibo.com/weibo?q=%23%E8%A7%82%E4%BC%97%E5%8F%8D%E6%84%9F%E7%9A%84%E4%BB%8E%E6%9D%A5%E4%B8%8D%E6%98%AF%E5%B8%85%E5%B0%86%E5%86%9B%23) `857.1K 🔥` `NEW`
1. [何老师维嘉好六哭了](https://s.weibo.com/weibo?q=%23%E4%BD%95%E8%80%81%E5%B8%88%E7%BB%B4%E5%98%89%E5%A5%BD%E5%85%AD%E5%93%AD%E4%BA%86%23) `581.6K 🔥` `NEW`
1. [官方通报申请国家赔偿被中止办理](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E9%80%9A%E6%8A%A5%E7%94%B3%E8%AF%B7%E5%9B%BD%E5%AE%B6%E8%B5%94%E5%81%BF%E8%A2%AB%E4%B8%AD%E6%AD%A2%E5%8A%9E%E7%90%86%23) `398.4K 🔥` `NEW`
1. [太原火灾已致3死23伤](https://s.weibo.com/weibo?q=%23%E5%A4%AA%E5%8E%9F%E7%81%AB%E7%81%BE%E5%B7%B2%E8%87%B43%E6%AD%BB23%E4%BC%A4%23) `359.2K 🔥` `NEW`
1. [婴儿险窒息爸爸玩手机近1分钟未发觉](https://s.weibo.com/weibo?q=%23%E5%A9%B4%E5%84%BF%E9%99%A9%E7%AA%92%E6%81%AF%E7%88%B8%E7%88%B8%E7%8E%A9%E6%89%8B%E6%9C%BA%E8%BF%911%E5%88%86%E9%92%9F%E6%9C%AA%E5%8F%91%E8%A7%89%23) `261.2K 🔥` `NEW`
1. [伊朗警告袭击地区内美以大学](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E8%AD%A6%E5%91%8A%E8%A2%AD%E5%87%BB%E5%9C%B0%E5%8C%BA%E5%86%85%E7%BE%8E%E4%BB%A5%E5%A4%A7%E5%AD%A6%23) `246.7K 🔥` `NEW`
1. [萨巴伦卡回应阳光双冠](https://s.weibo.com/weibo?q=%23%E8%90%A8%E5%B7%B4%E4%BC%A6%E5%8D%A1%E5%9B%9E%E5%BA%94%E9%98%B3%E5%85%89%E5%8F%8C%E5%86%A0%23) `244.6K 🔥` `NEW`
1. [王俊凯回应拿错奖杯了](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E5%9B%9E%E5%BA%94%E6%8B%BF%E9%94%99%E5%A5%96%E6%9D%AF%E4%BA%86%23) `202.1K 🔥` `NEW`
1. [美军福特号航母抵港克罗地亚维修](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%86%9B%E7%A6%8F%E7%89%B9%E5%8F%B7%E8%88%AA%E6%AF%8D%E6%8A%B5%E6%B8%AF%E5%85%8B%E7%BD%97%E5%9C%B0%E4%BA%9A%E7%BB%B4%E4%BF%AE%23) `183.3K 🔥` `NEW`
1. [美军或出动上千人夺取伊朗浓缩铀](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%86%9B%E6%88%96%E5%87%BA%E5%8A%A8%E4%B8%8A%E5%8D%83%E4%BA%BA%E5%A4%BA%E5%8F%96%E4%BC%8A%E6%9C%97%E6%B5%93%E7%BC%A9%E9%93%80%23) `158.6K 🔥` `NEW`
1. [1米85的小学生开口要一套宝可梦卡 (A 1.85 meter primary school student asked for a set of Pokémon cards)](https://s.weibo.com/weibo?q=%231%E7%B1%B385%E7%9A%84%E5%B0%8F%E5%AD%A6%E7%94%9F%E5%BC%80%E5%8F%A3%E8%A6%81%E4%B8%80%E5%A5%97%E5%AE%9D%E5%8F%AF%E6%A2%A6%E5%8D%A1%23) `158.0K 🔥` `NEW`
1. [长玉路呢路呢 谢征嘴呢嘴呢](https://s.weibo.com/weibo?q=%23%E9%95%BF%E7%8E%89%E8%B7%AF%E5%91%A2%E8%B7%AF%E5%91%A2%20%E8%B0%A2%E5%BE%81%E5%98%B4%E5%91%A2%E5%98%B4%E5%91%A2%23) `138.3K 🔥` `NEW`
1. [雷军回应新su7首周交付量](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E5%86%9B%E5%9B%9E%E5%BA%94%E6%96%B0su7%E9%A6%96%E5%91%A8%E4%BA%A4%E4%BB%98%E9%87%8F%23) `133.1K 🔥` `NEW`
1. [带18袋毒品入境包装上印大麻标识](https://s.weibo.com/weibo?q=%23%E5%B8%A618%E8%A2%8B%E6%AF%92%E5%93%81%E5%85%A5%E5%A2%83%E5%8C%85%E8%A3%85%E4%B8%8A%E5%8D%B0%E5%A4%A7%E9%BA%BB%E6%A0%87%E8%AF%86%23) `133.0K 🔥` `NEW`
1. [被拐男子爱吃折耳根坚信是云贵川人](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E6%8B%90%E7%94%B7%E5%AD%90%E7%88%B1%E5%90%83%E6%8A%98%E8%80%B3%E6%A0%B9%E5%9D%9A%E4%BF%A1%E6%98%AF%E4%BA%91%E8%B4%B5%E5%B7%9D%E4%BA%BA%23) `132.2K 🔥` `NEW`
1. [你的屏幕可能正在被实时直播](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E7%9A%84%E5%B1%8F%E5%B9%95%E5%8F%AF%E8%83%BD%E6%AD%A3%E5%9C%A8%E8%A2%AB%E5%AE%9E%E6%97%B6%E7%9B%B4%E6%92%AD%23) `105.9K 🔥` `NEW`
1. [原来老辈子的不是不理解二次元](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E8%80%81%E8%BE%88%E5%AD%90%E7%9A%84%E4%B8%8D%E6%98%AF%E4%B8%8D%E7%90%86%E8%A7%A3%E4%BA%8C%E6%AC%A1%E5%85%83%23) `99.5K 🔥` `NEW`
1. [男子私下遗嘱房子给妹妹后妻子起诉](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E7%A7%81%E4%B8%8B%E9%81%97%E5%98%B1%E6%88%BF%E5%AD%90%E7%BB%99%E5%A6%B9%E5%A6%B9%E5%90%8E%E5%A6%BB%E5%AD%90%E8%B5%B7%E8%AF%89%23) `93.5K 🔥` `NEW`
1. [太原建筑火灾或因饭店起火引发](https://s.weibo.com/weibo?q=%23%E5%A4%AA%E5%8E%9F%E5%BB%BA%E7%AD%91%E7%81%AB%E7%81%BE%E6%88%96%E5%9B%A0%E9%A5%AD%E5%BA%97%E8%B5%B7%E7%81%AB%E5%BC%95%E5%8F%91%23) `82.5K 🔥` `NEW`
1. [刘宇宁这是我能听的吗](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AE%87%E5%AE%81%E8%BF%99%E6%98%AF%E6%88%91%E8%83%BD%E5%90%AC%E7%9A%84%E5%90%97%23) `80.0K 🔥` `NEW`
1. [严屹宽说鞭打张凌赫的戏拍了一天 (Yan Yikuan said that the scene of whipping Zhang Linghe took one day to film)](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E5%B1%B9%E5%AE%BD%E8%AF%B4%E9%9E%AD%E6%89%93%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%9A%84%E6%88%8F%E6%8B%8D%E4%BA%86%E4%B8%80%E5%A4%A9%23) `76.3K 🔥` `NEW`
1. [伊朗威胁袭击美以大学](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%A8%81%E8%83%81%E8%A2%AD%E5%87%BB%E7%BE%8E%E4%BB%A5%E5%A4%A7%E5%AD%A6%23) `71.2K 🔥` `NEW`
1. [鞠婧祎浴室歌手来舞台了](https://s.weibo.com/weibo?q=%23%E9%9E%A0%E5%A9%A7%E7%A5%8E%E6%B5%B4%E5%AE%A4%E6%AD%8C%E6%89%8B%E6%9D%A5%E8%88%9E%E5%8F%B0%E4%BA%86%23) `69.9K 🔥` `NEW`
1. [伊朗称正制定战争结束条件](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E7%A7%B0%E6%AD%A3%E5%88%B6%E5%AE%9A%E6%88%98%E4%BA%89%E7%BB%93%E6%9D%9F%E6%9D%A1%E4%BB%B6%23) `68.3K 🔥` `NEW`
1. [金饰克价逼近1400元](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%A5%B0%E5%85%8B%E4%BB%B7%E9%80%BC%E8%BF%911400%E5%85%83%23) `67.7K 🔥` `NEW`
1. [28岁小伙为赶公交百米冲刺后心梗](https://s.weibo.com/weibo?q=%2328%E5%B2%81%E5%B0%8F%E4%BC%99%E4%B8%BA%E8%B5%B6%E5%85%AC%E4%BA%A4%E7%99%BE%E7%B1%B3%E5%86%B2%E5%88%BA%E5%90%8E%E5%BF%83%E6%A2%97%23) `65.9K 🔥` `NEW`
1. [女子半年没回家卧室开窗变邻居阳台](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%8D%8A%E5%B9%B4%E6%B2%A1%E5%9B%9E%E5%AE%B6%E5%8D%A7%E5%AE%A4%E5%BC%80%E7%AA%97%E5%8F%98%E9%82%BB%E5%B1%85%E9%98%B3%E5%8F%B0%23) `1.4M 🔥` `+639%`
1. [我不希望敌人捡到我的电视就能看](https://s.weibo.com/weibo?q=%23%E6%88%91%E4%B8%8D%E5%B8%8C%E6%9C%9B%E6%95%8C%E4%BA%BA%E6%8D%A1%E5%88%B0%E6%88%91%E7%9A%84%E7%94%B5%E8%A7%86%E5%B0%B1%E8%83%BD%E7%9C%8B%23) `196.7K 🔥` `+301%`
1. [杨紫给黄灿灿的浪姐建议](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E7%BB%99%E9%BB%84%E7%81%BF%E7%81%BF%E7%9A%84%E6%B5%AA%E5%A7%90%E5%BB%BA%E8%AE%AE%23) `187.8K 🔥` `+164%`
1. [严屹宽回应法拉利遇法拉利](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E5%B1%B9%E5%AE%BD%E5%9B%9E%E5%BA%94%E6%B3%95%E6%8B%89%E5%88%A9%E9%81%87%E6%B3%95%E6%8B%89%E5%88%A9%23) `178.7K 🔥` `+262%`
1. [油价又飙升了 (Oil prices soar again)](https://s.weibo.com/weibo?q=%23%E6%B2%B9%E4%BB%B7%E5%8F%88%E9%A3%99%E5%8D%87%E4%BA%86%23) `168.7K 🔥` `+49%`
1. [小猴穿游客衣服酷似拜师时的悟空 (The little monkey wears tourist clothes and looks like Wukong when he was apprentice)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%8C%B4%E7%A9%BF%E6%B8%B8%E5%AE%A2%E8%A1%A3%E6%9C%8D%E9%85%B7%E4%BC%BC%E6%8B%9C%E5%B8%88%E6%97%B6%E7%9A%84%E6%82%9F%E7%A9%BA%23) `96.0K 🔥` `+91%`
1. [白鹿回来复盘撕名牌](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E5%9B%9E%E6%9D%A5%E5%A4%8D%E7%9B%98%E6%92%95%E5%90%8D%E7%89%8C%23) `92.7K 🔥` `+56%`
1. [吴镇宇回应4年前扇刘耀文巴掌](https://s.weibo.com/weibo?q=%23%E5%90%B4%E9%95%87%E5%AE%87%E5%9B%9E%E5%BA%944%E5%B9%B4%E5%89%8D%E6%89%87%E5%88%98%E8%80%80%E6%96%87%E5%B7%B4%E6%8E%8C%23) `65.3K 🔥` `+53%`
1. [政企新媒体怎么火出圈 (How do new media in government and enterprises become popular?)](https://s.weibo.com/weibo?q=%23%E6%94%BF%E4%BC%81%E6%96%B0%E5%AA%92%E4%BD%93%E6%80%8E%E4%B9%88%E7%81%AB%E5%87%BA%E5%9C%88%23) `683.7K 🔥`
1. [低精力人群的周末安排belike](https://s.weibo.com/weibo?q=%23%E4%BD%8E%E7%B2%BE%E5%8A%9B%E4%BA%BA%E7%BE%A4%E7%9A%84%E5%91%A8%E6%9C%AB%E5%AE%89%E6%8E%92belike%23) `112.2K 🔥`
1. [女顾客打印后要求归类被拒当场崩溃 (After printing, the female customer asked for classification and was refused. She collapsed on the spot.)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E9%A1%BE%E5%AE%A2%E6%89%93%E5%8D%B0%E5%90%8E%E8%A6%81%E6%B1%82%E5%BD%92%E7%B1%BB%E8%A2%AB%E6%8B%92%E5%BD%93%E5%9C%BA%E5%B4%A9%E6%BA%83%23) `102.2K 🔥`
1. [氦气价格暴涨50% (Helium prices skyrocketed by 50%)](https://s.weibo.com/weibo?q=%23%E6%B0%A6%E6%B0%94%E4%BB%B7%E6%A0%BC%E6%9A%B4%E6%B6%A850%25%23) `98.3K 🔥`
1. [严浩翔上线](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E6%B5%A9%E7%BF%94%E4%B8%8A%E7%BA%BF%23) `97.9K 🔥`
1. [站姐愚人节团建预告 (Zhanjie’s April Fool’s Day Team Building Preview)](https://s.weibo.com/weibo?q=%23%E7%AB%99%E5%A7%90%E6%84%9A%E4%BA%BA%E8%8A%82%E5%9B%A2%E5%BB%BA%E9%A2%84%E5%91%8A%23) `89.4K 🔥`
1. [以军参谋长说以军常规部队已崩溃](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E5%86%9B%E5%8F%82%E8%B0%8B%E9%95%BF%E8%AF%B4%E4%BB%A5%E5%86%9B%E5%B8%B8%E8%A7%84%E9%83%A8%E9%98%9F%E5%B7%B2%E5%B4%A9%E6%BA%83%23) `88.7K 🔥`
1. [杨臣刚自曝因老鼠爱大米收入1.7亿 (Yang Chengang revealed that he earned 170 million because rats love rice.)](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E8%87%A3%E5%88%9A%E8%87%AA%E6%9B%9D%E5%9B%A0%E8%80%81%E9%BC%A0%E7%88%B1%E5%A4%A7%E7%B1%B3%E6%94%B6%E5%85%A51.7%E4%BA%BF%23) `88.7K 🔥`
1. [女子在家被流浪狗咬伤3天后狗死了](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%9C%A8%E5%AE%B6%E8%A2%AB%E6%B5%81%E6%B5%AA%E7%8B%97%E5%92%AC%E4%BC%A43%E5%A4%A9%E5%90%8E%E7%8B%97%E6%AD%BB%E4%BA%86%23) `66.8K 🔥`
1. [删除汪苏泷名字让徐良又生气又煎熬](https://s.weibo.com/weibo?q=%23%E5%88%A0%E9%99%A4%E6%B1%AA%E8%8B%8F%E6%B3%B7%E5%90%8D%E5%AD%97%E8%AE%A9%E5%BE%90%E8%89%AF%E5%8F%88%E7%94%9F%E6%B0%94%E5%8F%88%E7%85%8E%E7%86%AC%23) `373.0K 🔥` `-23%`
1. [女子被羁押821天无罪释放国赔被叫停 (The woman was released without charge after 821 days in custody and the state compensation was suspended.)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E8%A2%AB%E7%BE%81%E6%8A%BC821%E5%A4%A9%E6%97%A0%E7%BD%AA%E9%87%8A%E6%94%BE%E5%9B%BD%E8%B5%94%E8%A2%AB%E5%8F%AB%E5%81%9C%23) `244.6K 🔥` `-65%`
1. [世上顶好顶好的老太婆走了 (The best old woman in the world is gone)](https://s.weibo.com/weibo?q=%23%E4%B8%96%E4%B8%8A%E9%A1%B6%E5%A5%BD%E9%A1%B6%E5%A5%BD%E7%9A%84%E8%80%81%E5%A4%AA%E5%A9%86%E8%B5%B0%E4%BA%86%23) `192.0K 🔥` `-80%`
1. [伊朗连遭重创绝地反击 (Iran was hit hard and fought back)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E8%BF%9E%E9%81%AD%E9%87%8D%E5%88%9B%E7%BB%9D%E5%9C%B0%E5%8F%8D%E5%87%BB%23) `190.8K 🔥` `-32%`
1. [迪丽热巴有高度近视 (Dilraba is highly myopic)](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E6%9C%89%E9%AB%98%E5%BA%A6%E8%BF%91%E8%A7%86%23) `144.2K 🔥` `-22%`
1. [以色列三面受敌 (Israel is surrounded by enemies on three sides)](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E8%89%B2%E5%88%97%E4%B8%89%E9%9D%A2%E5%8F%97%E6%95%8C%23) `132.1K 🔥` `-36%`
1. [徐良方致歉声明 (Xu Liangfang’s apology statement)](https://s.weibo.com/weibo?q=%23%E5%BE%90%E8%89%AF%E6%96%B9%E8%87%B4%E6%AD%89%E5%A3%B0%E6%98%8E%23) `85.7K 🔥` `-24%`

Updated at 2026-03-29 09:16:02

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
