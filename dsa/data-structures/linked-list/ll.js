// Returning `this` allows for method chaining

class lNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  prepend(value) {
    const newNode = new lNode(value, this.head);
    this.head = newNode;

    if (!this.tail) this.tail = newNode;
    this.size++;
    return this;
  }

  append(value) {
    const newNode = new lNode(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return this;
    }

    this.tail.next = newNode
    this.tail = newNode
    this.size++
    return this
  }

  reverse() {
    let prev = null
    let next = null
    let curr = this.head

    while(curr) {
      next = curr.next
      curr.next = prev

      // move one step
      prev = curr
      curr = next
    }

    this.tail = this.head
    this.head = prev
  }
}

const list = new LinkedList();
list.append(43).append(2).append(34).append(322).append(42).append(1)
list.reverse()
console.log(list)

