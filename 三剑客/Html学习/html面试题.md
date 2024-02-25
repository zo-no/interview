
# 行内元素和块级元素
html标签可以分为：为块级元素（display：block）、行内元素（display: inline）、行内块级元素（display：inline-block）

元素模式 | Column B | Column C
---------|----------|---------
 A1 | B1 | C1
 A2 | B2 | C2
 A3 | B3 | C3

# html面试题
1. 请说一下前端语义化是什么？有什么用?
> 语义化是指根据内容的结构化（内容语义化），选择合适的标签（代码语义化），便于开发者阅读和写出更优雅的代码的同时。
> 语义化的好处：
> 方便搜索引擎的爬虫程序抓取数据，方便seo
> 方便阅读每个部分的意义

2. 块级元素和内联元素是什么？
> 块级元素：`display:block/table`，独占一行，可以设置宽高，可以设置margin和padding,例如：div、h1~h6、p、ul、ol、li、table、form
> 内联元素：`display:inline/inline-block`不独占一行，不可以设置宽高，不可以设置margin和padding，例如：span、a、img、input、button 