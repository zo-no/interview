一日一章计划

# JSX

> [React 进阶实践指南 - 我不是外星人 - 掘金小册 (juejin.cn)](https://juejin.cn/book/6945998773818490884/section/6948337148202319908#heading-0)

`JSX`到`JS`的过程：`JSX`→`React Element`→`fiber`

## `JSX`到`React Element`：

> 因为js不认识jsx，所以需要这一步

1. 由`babel`在合适的位置插入`React.createElement`的过程

   > 这也是为什么`JXS`文件要加入`import react`的原因，因为转换后要调用api

2. 使用`React.createElement()`api

   > js逻辑会被递归执行

## `React Element`到`Fiber`

调和阶段,`React Element`子节点会形成一个与之对应的`fiber`对象，然后由`sibling`（兄弟）、`return`（子指父）、`child`（父指子） 将每一个 `fiber` 对象联系起来

> 调和（reconciliation）就是更新时，找不同，然后合并

1. `fiber tag`:用数字来简化表示

## 认识工具

`@babel/plugin-syntax-jsx `:解析 JSX 语法。

`@babel/plugin-transform-react-jsx` ：内部调用 @babel/plugin-syntax-jsx，把 React JSX 转化成 createElement 格式。

### 新版本

**Automatic Runtime**：直接使用插件，故不需要再JSX文件中引入react了

> 需要在`.babelrc`中设置`runtime: automatic`

过程：在node下，读取文件使用插件等

大致内容

```js
const fs = require('fs')
const babel = require("@babel/core")

/* 第一步：模拟读取文件内容。 */
fs.readFile('./element.js',(e,data)=>{ 
    const code = data.toString('utf-8')
    /* 第二步：转换 jsx 文件 */
    const result = babel.transformSync(code, {
        plugins: ["@babel/plugin-transform-react-jsx"],
    });
    /* 第三步：模拟重新写入内容。 */
    fs.writeFile('./element.js',result.code,function(){})
})
```
下一步
[深入理解React Fiber机制 - 掘金 (juejin.cn)](https://juejin.cn/post/7184747220036485177)