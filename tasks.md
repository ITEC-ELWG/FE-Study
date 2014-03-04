ELWG前端学习小组任务
=====

## 任务说明
* 如无通知，默认每周一和周四早上检查进度和交流（节假日除外）
* 加粗体的任务为实践任务，需要提交，检查完成进度
* 带`+`号的为选做任务，加号越多难度越大

## 任务0：准备工作
* 了解以下概念：HTML、CSS、Javascript、版本控制、SVN、Git
* 了解各大公司前端开发工程师招聘的要求，了解前端开发的技术体系
* 学习W3School的[网站构建初级教程](http://www.w3school.com.cn/web/index.asp)
* 注册Github账号
* 安装并配置好相关的开发环境（[推荐开发环境](https://github.com/ELWG-FE-Study/tasks#%E6%8E%A8%E8%8D%90%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83)）

## 任务1：初识Git和Github

* 学习Git的基本使用方法，推荐阅读[Git Community Book 中文版](http://gitbook.liuhui998.com/index.html)的第2章（第一步）和第3章（基本用法）。其他参考读物：[Git Immersion](http://gitimmersion.com)
* **按照[部署说明](https://github.com/ELWG-FE-Study/tasks#%E9%83%A8%E7%BD%B2%E8%AF%B4%E6%98%8E)，在你们的专有文件夹（以你的姓名全拼命名）下，修改base.md文件，在里面填上你们的姓名、手机，以及诸如兴趣爱好等你愿意介绍的个人信息，然后发起一次Pull Request**

## 任务2：HTML与CSS入门

* 学习W3School的[HTML基础教程](http://www.w3school.com.cn/html/index.asp)（页面左侧“课程表”的“HTML基础教程”部分）
* 学习W3School的[CSS基础教程](http://www.w3school.com.cn/css/index.asp)（页面左侧“课程表”的“CSS基础教程”“CSS样式”“CSS框模型”“CSS定位”部分）
* 学习Chrome DevTools的[Elements面板](https://developers.google.com/chrome-developer-tools/docs/dom-and-styles?hl=zh-CN)（可能需要翻墙），了解“审查元素”及HTML/CSS的调试方法
* **设计一个简单的登录页面login.html和你的个人主页首页index.html。要求：项目名称`Blog`；登录页面使用居中布局（[参考图](http://ww2.sinaimg.cn/large/74990035jw1edvnyluzlvj21al0qfahl.jpg)）；首页使用上中下布局（[参考图](http://ww3.sinaimg.cn/large/74990035jw1edvnyxdby7j20zd0a60sz.jpg)）；登录页点击“登录”跳转到首页。首页的标题、内容、脚注的内容和样式没有特定要求，一切按照你的个人喜好来设计。**

## 任务3：Javascript入门

* 学习W3School的[Javascript教程](http://www.w3school.com.cn/js/index.asp)（页面左侧“课程表”的“JS教程”“JS HTML DOM”“JS对象”部分）
* **+**推荐读物：[《Javascript语言精粹》](http://book.douban.com/subject/11874748/)
* **使用HTML/CSS/Javascript制作一个简单的计算器，要求：项目名称`Calculator`；具备两个数字（包括小数）的加减乘除，一个数字的求百分比功能；各种颜色和字体等样式都按照你的个人喜好来设计（[参考图](http://ww1.sinaimg.cn/large/74990035gw1edwkx6v8hjj208h08j3ym.jpg)）。**

## 任务4：初识服务器后台和数据库

* 学习W3School的[SQL教程](http://www.w3school.com.cn/sql/index.asp)（页面左侧“课程表”的“SQL基础教程”部分）
* 学习W3School的[PHP教程](http://www.w3school.com.cn/php/index.asp)（页面左侧“课程表”的“PHP基础教程”“PHP数据库”以及“PHP高级教程（日期、Include、文件、文件上传、Cookies、Sessions）”部分）
* **在你们的机器上部署一套PHP开发环境（Apache+PHP+MySQL），Windows用户推荐安装[WAMP集成环境](http://www.wampserver.com/en/)（其他系统的就得自己折腾了）和[数据库管理工具Navicat For MySQL](http://www.navicat.com.cn/products/navicat-for-mysql)。配置Apache的alias指向你们的`blog`文件夹，然后把`login.html`改成`login.php`，在浏览器中访问`http://localhost/blog`可以正常打开登录页面即可。**

