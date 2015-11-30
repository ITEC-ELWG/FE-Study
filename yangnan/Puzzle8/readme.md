# 数字拼图游戏

## 功能

+ 默认为3 * 3的数字拼图。用户输入数字n（2 < n < 10），点击“重置”按钮生成n * n的。
+ 点击“重置”按钮可获得打乱的拼图。
+ 点击方块时若周围有空格则移动。
+ 可用键盘的“上下左右”键移动方块。
+ 可判定胜利与否。

___

## 代码说明

+   random_number_generator.php

    功能：验证用户输入**（正则表达式）**，若合法，返回相应的乱序排列的数字**（json）**。

+   puzzle.js

    新技能get：

    + 键盘事件响应
    + 自定义表格**（jQuery元素删除与添加）**
    + 与服务器传递数据并显示**（jQuery AJAX、json、jQuery元素遍历、设置）**
    + 验证用户输入**（正则表达式）**。

    可改进（猜想）：

    创建Puzzle对象。属性可以包含维度`dim`、所有单元格元素`$("td")`（将`$("td")`作为全局变量，每次生成表格时赋值，避免拼图过程中多次选取；使用对象可减少全局变量污染）。将与表格相关的操作封装起来（代码中使用的多为元素标签选择器，不利于移植，封装成类似于jQuery DataTables插件？）。

___

## 练习小结

+ `<input>`标签的pattern属性：用于表单提交时进行自动验证。 `<input>`+JS处理用户输入，而没有提交动作时，该属性无效。
+ 注意浏览器兼容性。如pattern属性，当有部分所需的浏览器不兼容时，舍弃，自行实现。[查看浏览器兼容性](http://caniuse.mojijs.com/)
+ [CSS 表格属性（Table）](http://www.w3school.com.cn/cssref/index.asp#table)
+ **（待学习）**正则表达式。PHP：[preg_match](http://php.net/manual/zh/function.preg-match.php)、JavaScript：[RegExp对象](http://www.w3school.com.cn/jsref/jsref_obj_regexp.asp)
+ **（待学习）**[JS、PHP数据交互-json](http://my.oschina.net/wbo0801/blog/145249)
+ JS中，尽量通过添加/删除类的方式修改样式，避免耦合CSS代码。
+ jQuery匹配DOM元素很耗性能**（为什么）**。**（待学习）**[提高jQuery性能的诀窍](http://www.ruanyifeng.com/blog/2011/08/jquery_best_practices.html)。