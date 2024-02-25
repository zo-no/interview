// 导入链表
import { LinkedList, Node } from "./定义链表";
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  addNode(data) {
    const newNode = new Node(data);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  display() {
    let current = this.head;
    while (current !== null) {
      console.log(current.data);
      current = current.next;
    }
  }
}

// 创建一个链表并添加一些节点
const linkedList = new LinkedList();
linkedList.addNode(1);
linkedList.addNode(2);
linkedList.addNode(3);
linkedList.addNode(4);

// 显示链表中的节点
linkedList.display();

var swapPairs = function (head) {
  let cur = head;

  //一次循环变换一次
  while (cur) {
    const next = cur.next;
    cur.next = next.next;
    next.next = cur;
    cur = cur.next; //转换到下下个
  }
  return head;
};

swapPairs(linkedList.head);
linkedList.display();
