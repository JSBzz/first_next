import { AnyCnameRecord } from "dns";

interface position {
  x: number;
  y: number;
}

class SnakeNode {
  data: position;
  next: SnakeNode | null;
  constructor(data: position, next: SnakeNode | null = null) {
    this.data = data;
    this.next = next;
  }
}

export class LinkedList {
  private head: SnakeNode;
  private tail: SnakeNode;
  private tailAddPos: position | null;

  constructor(initPos: position) {
    this.tail = new SnakeNode({ x: initPos.x, y: initPos.y + 1 }, null);
    this.head = new SnakeNode(initPos, this.tail);
    this.tailAddPos = null;
  }
  insertTail() {
    const newTail = new SnakeNode(this.tailAddPos!, null);
    this.tail.next = newTail;
    this.tail = newTail;
  }

  getNext(node: SnakeNode) {
    if (node?.next == null) return false;
    return node.next;
  }

  move(direction: "UP" | "DOWN" | "LEFT" | "RIGHT") {
    this.tailAddPos = this.tail.data;
    let current = this.head;

    while (current.next != null) {
      if (current.next == this.tail) {
        current.next = null;
        this.tail = current;
        break;
      } else {
        current = current.next;
      }
    }

    let headPos = { x: 0, y: 0 };
    switch (direction) {
      case "UP":
        headPos = { x: this.head.data.x, y: this.head.data.y - 1 };
        break;
      case "DOWN":
        headPos = { x: this.head.data.x, y: this.head.data.y + 1 };
        break;
      case "LEFT":
        headPos = { x: this.head.data.x - 1, y: this.head.data.y };
        break;
      case "RIGHT":
        headPos = { x: this.head.data.x + 1, y: this.head.data.y };
        break;
    }
    const newHead = new SnakeNode(headPos, this.head);
    this.head = newHead;
  }

  getHead() {
    return this.head;
  }
  getTail() {
    return this.tail;
  }
  getTailAddPos() {
    return this.tailAddPos;
  }
  getAll() {
    let node: SnakeNode | null = this.head;
    let nodeArray = [];
    while (node != null) {
      nodeArray.push(node);
      node = node.next;
    }
    return nodeArray;
  }
  set(setSnake: any) {
    setSnake = this.getAll();
  }
}
