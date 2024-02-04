/**
 * @Date        2023/12/19 22:27:18
 * @Author      zono
 * @Description
 * */

const { log } = require("console");

/**
 *  一个理解map的例子
 * 就是说，map在用在对象上时，因为map会维护一个key-value的映射关系，所以可以用来做对象的查找
 * 而weakMap则不会维护这个映射关系，所以垃圾回收机制会回收这个对象
 * weakMap的key必须是对象，而且不能遍历，其一般用于对象的私有属性、缓存、DOM节点等，
 * 这也是为什么weakMap不能遍历的原因，因为遍历会暴露出这些信息；
 * 和为什么weakMap的key必须是对象，因为这样才能保证垃圾回收机制能回收这个对象
 * weakMap的value可以是任意类型，其放在value中的值不会被垃圾回收机制回收，value一般会被用来存放一些对象的信息
 * 比如说，weakMap的key是一个DOM节点，value是一个对象，这个对象中存放了这个DOM节点的一些信息
 * @param {type}
 * @returns
 * */
// 创建一个 Map 对象和一个 WeakMap 对象
let map = new Map();
let weakMap = new WeakMap();

let obj = { name: "Alice" };

// 在 Map 和 WeakMap 中添加键值对
map.set(obj, { age: 25 });
weakMap.set(obj, { age: 25 });

console.log(map.get(obj)); // 输出：{ age: 25 }
console.log(weakMap.get(obj)); // 输出：{ age: 25 }

// 当 obj 不再被引用时
obj = null;

// Map 中的键值对仍然存在
console.log([...map.entries()]); // 输出：[ [ { name: 'Alice' }, { age: 25 } ] ]

// 但是 WeakMap 中的键值对已经被垃圾回收
console.log([...weakMap.entries()]); // 抛出 TypeError: weakMap.entries is not a function
debugger;

// 对比set和weakSet
//Map和Set与WeakMap和WeakSet的区别是前者有对应的引用，而后者没有。
//也就是说，前者的引用是强引用，后者的引用是弱引用。
//Set一般用于数组去重，Map一般用于对象查找
//WeakSet一般用于DOM节点的存储，WeakMap一般用于对象的私有属性的存储

//`WeakMap` 和 `WeakSet` 都是 JavaScript 中的弱引用数据结构，它们的主要区别在于存储的内容和使用场景：

// 1. **存储的内容**：`WeakMap` 是键值对的集合，它的键必须是对象，值可以是任何类型。`WeakSet` 是一组对象，它只能存储对象，不能存储原始值。

// 2. **使用场景**：`WeakMap` 主要用于关联额外的信息到对象上，而不阻止这些对象被垃圾回收。例如，如果你想给一个对象添加一些私有数据，但是不想阻止这个对象被垃圾回收，那么可以使用 `WeakMap`。`WeakSet` 主要用于存储一组对象，而不阻止这些对象被垃圾回收。例如，如果你想跟踪一组 DOM 节点，但是不想阻止这些节点被垃圾回收，那么可以使用 `WeakSet`。

// 3. **方法的差异**：`WeakMap` 提供了 `get`、`set`、`delete` 和 `has` 方法，用于操作键值对。`WeakSet` 只提供了 `add`、`delete` 和 `has` 方法，用于操作对象集合。

// 总的来说，`WeakMap` 和 `WeakSet` 都是弱引用的数据结构，它们的主要区别在于存储的内容和使用场景。

// 一个理解weakSet的例子
// 创建一个 WeakSet 对象
let clickedButtons = new WeakSet();

// 添加事件监听器到所有的按钮
document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", () => {
    // 当按钮被点击时，将它添加到 WeakSet 中
    clickedButtons.add(button);
  });
});

// 现在，clickedButtons 中存储了所有被点击过的按钮
// 当一个按钮不再被文档引用时，它会被垃圾回收，即使它仍然在 clickedButtons 中
