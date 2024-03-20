class Heap {
  constructor(compareFn) {
    this.list = []; //堆
    this.compareFn = compareFn; //
  }
  // 加入
  push(val) {
    this.list.push(val);

    //上浮
    let index = this.size() - 1; //得到下标
    let parent = Math.floor((index - 1) / 2); //得到父亲节点位置

    //父亲节点存在并且大于他
    while (parent >= 0 && this.compare(parent, index) > 0) {
      //交换
      [this.list[index], this.list[parent]] = [
        this.list[parent],
        this.list[index],
      ];

      //获取下一次比较的索引
      index = parent;
      parent = Math.floor((index - 1) / 2);
    }
  }

  pop(val) {
    const out = this.list[0]; //取出栈顶
    //把最后一个放到顶面
    this.list[0] = this.list.pop();

    //开始下沉
    let index = 0;
    let left = 1;
    let child = this.compare(left, left + 1) ? left + 1 : left; //判断高级的节点

    //递归交换
    //父亲节点存在并且大于他
    while (child !== undefined && this.compare(index, child) > 0) {
      //交换
      [this.list[index], this.list[child]] = [
        this.list[child],
        this.list[index],
      ];

      index = child;
      left = 2 * index + 1;
      //获取下一次比较的索引
      child = this.compare(left, left + 1) > 0 ? left + 1 : left;
    }
    return out;
  }

  isEmpty() {
    return !this.list.length;
  }
  size() {
    return this.list.length;
  }

  compare(index1, index2) {
    if (this.list[index1] === undefined) return 1;
    if (this.list[index2] === undefined) return -1;

    //由比较函数来确认哪个高级
    return this.compareFn(this.list[index1], this.list[index2]);
  }
}

const heap = new Heap((a, b) => a > b); // 示例比较函数为 a > b，即升序排列
heap.push(5);
heap.push(2);
heap.push(7);
console.log(heap.size());
console.log(heap.isEmpty());
console.log(heap.list);
console.log(heap.pop());
