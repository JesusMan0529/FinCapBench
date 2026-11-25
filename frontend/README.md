# XJTUSE CNFinBench 前端

打开 [dist/index.html](dist/index.html) 即可浏览，HTML、CSS、JavaScript、快照数据和图片均随源码提供。

若需以 HTTP 运行，在本目录执行：

~~~bash
python -m http.server 8000 --directory dist
~~~

打开 [http://localhost:8000](http://localhost:8000)。使用井号路由，直接打开详情、刷新和浏览器前进/后退均可保留页面地址。

## 前端页面

| 页面 | 操作 |
| --- | --- |
| 首页 | 展开两类评测维度，复制 BibTeX，复制邮箱，打开邮件客户端 |
| 评测榜单 | 切换大语言模型、智能体和历史期次，筛选类型，搜索，按分数排序和分页 |
| 评测数据集 | 浏览 28 个参考数据集和 18 个 FinCapBench 能力，按分组搜索，查看字段，点赞、复制和下载自编示例 |
| 文档 | 用目录定位说明，复制提示词和命令，展开常见问题 |
| CNFinPayBench | 浏览六类支付能力及分项排行，检查并预览参评申请 |
| 智能体竞技场 | 选择金融案例，对比两份预置回答，投票和重置 |
| 登录与加入评测 | 打开参评表单或参考平台入口 |

申请表在浏览器内校验并显示预览。竞技场用预置回答展示交互。点赞和本机浏览次数使用浏览器存储。

## 数据及来源

- 榜单、期次、评测类别和数据集元数据取自 CNFinBench 参考站，采集于 2026 年 11 月 25 日。正式成绩和最新发布以参考站为准。主页与榜单的“查看参考站”链接可直接查阅。 [CNFinBench 参考站](https://cnfinbench.opencompass.org.cn/home)
- FinCapBench v1.0 的任务名称与主指标来自交付目录的任务注册表，记录数来自数据清单，字段来自各能力的 Schema，核心集记录数来自冒烟检查报告。打包内容使用汇总与字段定义，所有可下载题例均为演示文本。
- 数据集名称沿用参考目录。任务介绍按名称重新撰写，详情附参考链接。 [CNFinBench 公开数据集](https://cnfinbench.opencompass.org.cn/dataset/llm)
- 论文引用保留原作者及出版信息。 [上游 GitHub](https://github.com/open-compass/CNFinBench) · [KDD 2026 论文](https://doi.org/10.1145/3770855.3817482)
- 校徽与校名标识由用户提供，在网页中呈现为白色透明样式。首屏背景由内置 ImageGen 生成，位置在 [dist/assets/hero.webp](dist/assets/hero.webp)。

<details>
<summary>首屏背景的生成提示词</summary>

> Create a cinematic ultra-wide website hero background for a university financial model evaluation platform, with absolutely no text, numbers, labels, logos, watermark or UI. An original photorealistic studio render of several fine translucent crimson glass sheets and a flowing market-data surface, like bent precision-machined glass fins illuminated from within by delicate ruby and warm coral highlights. Viewed in three-quarter perspective, the glass architecture rises across the right side, with an elegant sweeping arc of fine threads and layered reflections. Deep burgundy and oxblood palette, soft dark maroon shadows, natural bloom, controlled high contrast, finely detailed editorial graphic. Leave the left 46 percent quiet, very dark and clear for white header text. Keep all intense light to the far right, have the artwork fade seamlessly into near-black burgundy on the far left and near the boundaries. Widescreen landscape 1536x1024 or 16:9, physically plausible glass and directional lighting, no globe, no planet, no stock tickers, no blue, no purple.

</details>
