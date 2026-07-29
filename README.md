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

1. [卫健委回应医生发除非死人不要临时请假 (The National Health Commission responded to the doctor’s advice not to ask for temporary leave unless the patient is deceased.)](https://s.weibo.com/weibo?q=%23%E5%8D%AB%E5%81%A5%E5%A7%94%E5%9B%9E%E5%BA%94%E5%8C%BB%E7%94%9F%E5%8F%91%E9%99%A4%E9%9D%9E%E6%AD%BB%E4%BA%BA%E4%B8%8D%E8%A6%81%E4%B8%B4%E6%97%B6%E8%AF%B7%E5%81%87%23) `1.2M 🔥` `NEW`
1. [泸溪河桃酥 牙冠](https://s.weibo.com/weibo?q=%23%E6%B3%B8%E6%BA%AA%E6%B2%B3%E6%A1%83%E9%85%A5%20%E7%89%99%E5%86%A0%23) `937.6K 🔥` `NEW`
1. [李沁 花少被指背锅](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%B2%81%20%E8%8A%B1%E5%B0%91%E8%A2%AB%E6%8C%87%E8%83%8C%E9%94%85%23) `935.9K 🔥` `NEW`
1. [于正陈哲远和解](https://s.weibo.com/weibo?q=%23%E4%BA%8E%E6%AD%A3%E9%99%88%E5%93%B2%E8%BF%9C%E5%92%8C%E8%A7%A3%23) `490.9K 🔥` `NEW`
1. [Bin 圣枪哥](https://s.weibo.com/weibo?q=%23Bin%20%E5%9C%A3%E6%9E%AA%E5%93%A5%23) `413.3K 🔥` `NEW`
1. [街道回应男童挡电梯等家长女子催促被打](https://s.weibo.com/weibo?q=%23%E8%A1%97%E9%81%93%E5%9B%9E%E5%BA%94%E7%94%B7%E7%AB%A5%E6%8C%A1%E7%94%B5%E6%A2%AF%E7%AD%89%E5%AE%B6%E9%95%BF%E5%A5%B3%E5%AD%90%E5%82%AC%E4%BF%83%E8%A2%AB%E6%89%93%23) `386.0K 🔥` `NEW`
1. [日本或有重大伤亡](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E6%88%96%E6%9C%89%E9%87%8D%E5%A4%A7%E4%BC%A4%E4%BA%A1%23) `371.1K 🔥` `NEW`
1. [朕和漫威何时有过嫌隙](https://s.weibo.com/weibo?q=%23%E6%9C%95%E5%92%8C%E6%BC%AB%E5%A8%81%E4%BD%95%E6%97%B6%E6%9C%89%E8%BF%87%E5%AB%8C%E9%9A%99%23) `370.6K 🔥` `NEW`
1. [暴雨致弥勒城区积水没过胸口](https://s.weibo.com/weibo?q=%23%E6%9A%B4%E9%9B%A8%E8%87%B4%E5%BC%A5%E5%8B%92%E5%9F%8E%E5%8C%BA%E7%A7%AF%E6%B0%B4%E6%B2%A1%E8%BF%87%E8%83%B8%E5%8F%A3%23) `364.3K 🔥` `NEW`
1. [莫氏鸡煲老板称流量来得快去得快](https://s.weibo.com/weibo?q=%23%E8%8E%AB%E6%B0%8F%E9%B8%A1%E7%85%B2%E8%80%81%E6%9D%BF%E7%A7%B0%E6%B5%81%E9%87%8F%E6%9D%A5%E5%BE%97%E5%BF%AB%E5%8E%BB%E5%BE%97%E5%BF%AB%23) `358.1K 🔥` `NEW`
1. [曝修杰楷近况 (Revealing the current situation of Xiu Jie Kai Kai)](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E4%BF%AE%E6%9D%B0%E6%A5%B7%E8%BF%91%E5%86%B5%23) `354.0K 🔥` `NEW`
1. [朱志鑫MyMan 不舒服](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E5%BF%97%E9%91%ABMyMan%20%E4%B8%8D%E8%88%92%E6%9C%8D%23) `349.6K 🔥` `NEW`
1. [揽佬 中国人能飞](https://s.weibo.com/weibo?q=%23%E6%8F%BD%E4%BD%AC%20%E4%B8%AD%E5%9B%BD%E4%BA%BA%E8%83%BD%E9%A3%9E%23) `344.0K 🔥` `NEW`
1. [花儿与少年](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%84%BF%E4%B8%8E%E5%B0%91%E5%B9%B4%23) `340.8K 🔥` `NEW`
1. [鞠婧祎跳了恋爱的条件手势舞](https://s.weibo.com/weibo?q=%23%E9%9E%A0%E5%A9%A7%E7%A5%8E%E8%B7%B3%E4%BA%86%E6%81%8B%E7%88%B1%E7%9A%84%E6%9D%A1%E4%BB%B6%E6%89%8B%E5%8A%BF%E8%88%9E%23) `329.8K 🔥` `NEW`
1. [河南再回应三支一扶高分成绩争议](https://s.weibo.com/weibo?q=%23%E6%B2%B3%E5%8D%97%E5%86%8D%E5%9B%9E%E5%BA%94%E4%B8%89%E6%94%AF%E4%B8%80%E6%89%B6%E9%AB%98%E5%88%86%E6%88%90%E7%BB%A9%E4%BA%89%E8%AE%AE%23) `323.7K 🔥` `NEW`
1. [SK海力士财报不及预期](https://s.weibo.com/weibo?q=%23SK%E6%B5%B7%E5%8A%9B%E5%A3%AB%E8%B4%A2%E6%8A%A5%E4%B8%8D%E5%8F%8A%E9%A2%84%E6%9C%9F%23) `319.3K 🔥` `NEW`
1. [女子通勤1.5小时从天津去北京上班](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E9%80%9A%E5%8B%A41.5%E5%B0%8F%E6%97%B6%E4%BB%8E%E5%A4%A9%E6%B4%A5%E5%8E%BB%E5%8C%97%E4%BA%AC%E4%B8%8A%E7%8F%AD%23) `316.3K 🔥` `NEW`
1. [在金靖的叙述里爱上了刘胜瑛](https://s.weibo.com/weibo?q=%23%E5%9C%A8%E9%87%91%E9%9D%96%E7%9A%84%E5%8F%99%E8%BF%B0%E9%87%8C%E7%88%B1%E4%B8%8A%E4%BA%86%E5%88%98%E8%83%9C%E7%91%9B%23) `314.1K 🔥` `NEW`
1. [郑钦文状态怎么了](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87%E7%8A%B6%E6%80%81%E6%80%8E%E4%B9%88%E4%BA%86%23) `313.2K 🔥` `NEW`
1. [江苏省乒协通报曹彦灏省内禁赛1年 (Jiangsu Table Tennis Association notifies Cao Yanhao of a one-year provincial ban)](https://s.weibo.com/weibo?q=%23%E6%B1%9F%E8%8B%8F%E7%9C%81%E4%B9%92%E5%8D%8F%E9%80%9A%E6%8A%A5%E6%9B%B9%E5%BD%A6%E7%81%8F%E7%9C%81%E5%86%85%E7%A6%81%E8%B5%9B1%E5%B9%B4%23) `311.4K 🔥` `NEW`
1. [医生群里发除非死人不要临时请假 (Doctors' group message: Don't ask for temporary leave unless the patient is dead)](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E7%94%9F%E7%BE%A4%E9%87%8C%E5%8F%91%E9%99%A4%E9%9D%9E%E6%AD%BB%E4%BA%BA%E4%B8%8D%E8%A6%81%E4%B8%B4%E6%97%B6%E8%AF%B7%E5%81%87%23) `1.7M 🔥` `+754%`
1. [一封封侨批情系家国 (A letter of approval for overseas Chinese expressing love for home and country)](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%B0%81%E5%B0%81%E4%BE%A8%E6%89%B9%E6%83%85%E7%B3%BB%E5%AE%B6%E5%9B%BD%23) `939.2K 🔥` `+66%`
1. [刘浩存代言飞鹤 (Liu Haocun endorses Feihe)](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%B5%A9%E5%AD%98%E4%BB%A3%E8%A8%80%E9%A3%9E%E9%B9%A4%23) `938.4K 🔥` `+288%`
1. [日本坍塌购物中心多人确认死亡 (Many people confirmed dead in collapsed shopping mall in Japan)](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E5%9D%8D%E5%A1%8C%E8%B4%AD%E7%89%A9%E4%B8%AD%E5%BF%83%E5%A4%9A%E4%BA%BA%E7%A1%AE%E8%AE%A4%E6%AD%BB%E4%BA%A1%23) `711.3K 🔥` `+30%`
1. [曝Flandre加入BLG](https://s.weibo.com/weibo?q=%23%E6%9B%9DFlandre%E5%8A%A0%E5%85%A5BLG%23) `595.1K 🔥` `+76%`
1. [AI公司 原版书籍销毁 (AI company original books destroyed)](https://s.weibo.com/weibo?q=%23AI%E5%85%AC%E5%8F%B8%20%E5%8E%9F%E7%89%88%E4%B9%A6%E7%B1%8D%E9%94%80%E6%AF%81%23) `407.0K 🔥` `+270%`
1. [吴谨言全世界乳腺最畅通之人](https://s.weibo.com/weibo?q=%23%E5%90%B4%E8%B0%A8%E8%A8%80%E5%85%A8%E4%B8%96%E7%95%8C%E4%B9%B3%E8%85%BA%E6%9C%80%E7%95%85%E9%80%9A%E4%B9%8B%E4%BA%BA%23) `398.8K 🔥` `+75%`
1. [SK海力士二季度业绩](https://s.weibo.com/weibo?q=%23SK%E6%B5%B7%E5%8A%9B%E5%A3%AB%E4%BA%8C%E5%AD%A3%E5%BA%A6%E4%B8%9A%E7%BB%A9%23) `372.9K 🔥` `+178%`
1. [日本地震熊本商场爆炸瞬间](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E5%9C%B0%E9%9C%87%E7%86%8A%E6%9C%AC%E5%95%86%E5%9C%BA%E7%88%86%E7%82%B8%E7%9E%AC%E9%97%B4%23) `372.9K 🔥` `+64%`
1. [法医完成王建隆遗体尸检 (Forensic doctor completes autopsy on Wang Jianlong's body)](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%8C%BB%E5%AE%8C%E6%88%90%E7%8E%8B%E5%BB%BA%E9%9A%86%E9%81%97%E4%BD%93%E5%B0%B8%E6%A3%80%23) `372.9K 🔥` `+354%`
1. [该不该把家里的财务状况告诉孩子](https://s.weibo.com/weibo?q=%23%E8%AF%A5%E4%B8%8D%E8%AF%A5%E6%8A%8A%E5%AE%B6%E9%87%8C%E7%9A%84%E8%B4%A2%E5%8A%A1%E7%8A%B6%E5%86%B5%E5%91%8A%E8%AF%89%E5%AD%A9%E5%AD%90%23) `368.9K 🔥` `+352%`
1. [蜘蛛侠 (spiderman)](https://s.weibo.com/weibo?q=%23%E8%9C%98%E8%9B%9B%E4%BE%A0%23) `366.0K 🔥` `+28%`
1. [男童挡电梯20秒等家长女子催促被打 (Boy was beaten after blocking elevator for 20 seconds while waiting for parent and woman to urge him)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E7%AB%A5%E6%8C%A1%E7%94%B5%E6%A2%AF20%E7%A7%92%E7%AD%89%E5%AE%B6%E9%95%BF%E5%A5%B3%E5%AD%90%E5%82%AC%E4%BF%83%E8%A2%AB%E6%89%93%23) `361.5K 🔥` `+170%`
1. [郑钦文 连丢三局](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87%20%E8%BF%9E%E4%B8%A2%E4%B8%89%E5%B1%80%23) `357.4K 🔥` `+57%`
1. [时代少年团 阿迪达斯](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%20%E9%98%BF%E8%BF%AA%E8%BE%BE%E6%96%AF%23) `356.1K 🔥` `+333%`
1. [奇瑞2000万的全球化含量有多高](https://s.weibo.com/weibo?q=%23%E5%A5%87%E7%91%9E2000%E4%B8%87%E7%9A%84%E5%85%A8%E7%90%83%E5%8C%96%E5%90%AB%E9%87%8F%E6%9C%89%E5%A4%9A%E9%AB%98%23) `351.9K 🔥` `+523%`
1. [倪妮我想象中旅行穿搭出片的样子](https://s.weibo.com/weibo?q=%23%E5%80%AA%E5%A6%AE%E6%88%91%E6%83%B3%E8%B1%A1%E4%B8%AD%E6%97%85%E8%A1%8C%E7%A9%BF%E6%90%AD%E5%87%BA%E7%89%87%E7%9A%84%E6%A0%B7%E5%AD%90%23) `347.9K 🔥` `+166%`
1. [退货千万不要提前给取件码 (Never give a pickup code in advance when returning goods)](https://s.weibo.com/weibo?q=%23%E9%80%80%E8%B4%A7%E5%8D%83%E4%B8%87%E4%B8%8D%E8%A6%81%E6%8F%90%E5%89%8D%E7%BB%99%E5%8F%96%E4%BB%B6%E7%A0%81%23) `345.4K 🔥` `+44%`
1. [香港何伯去世 (Hong Kong Uncle Ho passed away)](https://s.weibo.com/weibo?q=%23%E9%A6%99%E6%B8%AF%E4%BD%95%E4%BC%AF%E5%8E%BB%E4%B8%96%23) `342.7K 🔥` `+334%`
1. [普京称俄罗斯未来岌岌可危 (Putin says Russia's future is at stake)](https://s.weibo.com/weibo?q=%23%E6%99%AE%E4%BA%AC%E7%A7%B0%E4%BF%84%E7%BD%97%E6%96%AF%E6%9C%AA%E6%9D%A5%E5%B2%8C%E5%B2%8C%E5%8F%AF%E5%8D%B1%23) `336.6K 🔥` `+201%`
1. [网红霸占无居民海岛直播荒岛改造被查 (Internet celebrities occupied uninhabited islands and broadcast live broadcasts of desert island transformation and were investigated)](https://s.weibo.com/weibo?q=%23%E7%BD%91%E7%BA%A2%E9%9C%B8%E5%8D%A0%E6%97%A0%E5%B1%85%E6%B0%91%E6%B5%B7%E5%B2%9B%E7%9B%B4%E6%92%AD%E8%8D%92%E5%B2%9B%E6%94%B9%E9%80%A0%E8%A2%AB%E6%9F%A5%23) `335.4K 🔥` `+172%`
1. [半熟恋人5成了四对](https://s.weibo.com/weibo?q=%23%E5%8D%8A%E7%86%9F%E6%81%8B%E4%BA%BA5%E6%88%90%E4%BA%86%E5%9B%9B%E5%AF%B9%23) `334.0K 🔥` `+132%`
1. [日本7.1级地震民众哭喊声一片 (People cry out after Japan's 7.1-magnitude earthquake)](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC7.1%E7%BA%A7%E5%9C%B0%E9%9C%87%E6%B0%91%E4%BC%97%E5%93%AD%E5%96%8A%E5%A3%B0%E4%B8%80%E7%89%87%23) `331.8K 🔥` `+337%`
1. [张凌赫我最讨厌事后道歉](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E6%88%91%E6%9C%80%E8%AE%A8%E5%8E%8C%E4%BA%8B%E5%90%8E%E9%81%93%E6%AD%89%23) `327.7K 🔥` `+178%`
1. [女子摸田螺溺亡儿子连扇自己巴掌 (Woman touches snail and drowns, son slaps herself)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%91%B8%E7%94%B0%E8%9E%BA%E6%BA%BA%E4%BA%A1%E5%84%BF%E5%AD%90%E8%BF%9E%E6%89%87%E8%87%AA%E5%B7%B1%E5%B7%B4%E6%8E%8C%23) `325.9K 🔥` `+307%`
1. [赵昭仪御廷谣演技 (Zhao Zhaoyi's acting skills in imperial ballads)](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E6%98%AD%E4%BB%AA%E5%BE%A1%E5%BB%B7%E8%B0%A3%E6%BC%94%E6%8A%80%23) `321.5K 🔥` `+166%`
1. [曝Bin圣枪哥处境相反](https://s.weibo.com/weibo?q=%23%E6%9B%9DBin%E5%9C%A3%E6%9E%AA%E5%93%A5%E5%A4%84%E5%A2%83%E7%9B%B8%E5%8F%8D%23) `320.3K 🔥` `+290%`
1. [原来这就是英语思维 (It turns out that this is English thinking)](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E8%BF%99%E5%B0%B1%E6%98%AF%E8%8B%B1%E8%AF%AD%E6%80%9D%E7%BB%B4%23) `376.2K 🔥`
1. [任嘉伦我在锦衣卫负责抄家的日子](https://s.weibo.com/weibo?q=%23%E4%BB%BB%E5%98%89%E4%BC%A6%E6%88%91%E5%9C%A8%E9%94%A6%E8%A1%A3%E5%8D%AB%E8%B4%9F%E8%B4%A3%E6%8A%84%E5%AE%B6%E7%9A%84%E6%97%A5%E5%AD%90%23) `339.5K 🔥`
1. [男友逼坠楼生还女孩返还恋爱开销](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%8F%8B%E9%80%BC%E5%9D%A0%E6%A5%BC%E7%94%9F%E8%BF%98%E5%A5%B3%E5%AD%A9%E8%BF%94%E8%BF%98%E6%81%8B%E7%88%B1%E5%BC%80%E9%94%80%23) `362.0K 🔥` `-69%`

Updated at 2026-07-29 09:03:17

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
