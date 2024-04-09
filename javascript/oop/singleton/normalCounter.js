class Counter {
  #count = 0; // Private variable using private fields

  increment() {
    this.#count++;
  }

  getCount() {
    console.log(this.#count);
  }
}

const counter1 = new Counter();
counter1.increment();
counter1.getCount()
counter1.increment();
counter1.getCount()

console.log();

const counter2 = new Counter();
counter2.increment(); 
counter2.getCount()
counter2.increment();
counter2.increment();
counter2.getCount()
