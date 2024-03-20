class Heap {
  list;
  compareFn;

  constructor(compareFn) {
    this.list = [];
    this.compareFn = compareFn;
  }
  push(item) {
    this.list.push(item);
    //上浮
    let index = this.size() - 1; //下标
    let parent = Math.floor((index - 1) / 2); //当前元素除以2就是父结点
    while (parent >= 0 && this.compare(parent, index) > 0) {
      [this.list[index], this.list[parent]] = [
        this.list[parent],
        this.list[index],
      ];
      index = parent;
      parent = Math.floor((index - 1) / 2);
    }
  }
  pop(item) {
    //堆顶
    const out = this.list[0];
    //移除堆顶，填入最后一个元素
    this.list[0] = this.list.pop();
    //下沉
    let index = 0;
    let left = 1;
    let searchChild = this.compare(left, left + 1) > 0 ? left + 1 : left; //判断左右子节点哪个大;
    while (searchChild !== undefined && this.compare(index, searchChild) > 0) {
      [this.list[index], this.list[searchChild]] = [
        this.list[searchChild],
        this.list[index],
      ];
      index = searchChild;
      left = 2 * index + 1;
      searchChild = this.compare(left, left + 1) > 0 ? left + 1 : left; //判断左右子节点哪个大;
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
    return this.compareFn(this.list[index1], this.list[index2]);
  }
}

const heap = new Heap((a, b) => a > b); // 示例比较函数为 a > b，即升序排列
heap.push(5);
heap.push(2);
heap.push(7);
console.log(heap.size());
console.log(heap.isEmpty());
console.log(heap.pop());
