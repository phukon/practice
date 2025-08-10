// Since getInstance() is static, it belongs to the class itself, not an instance. This means you don’t need to create an object before calling getInstance().
class CounterSingleton {
  private static instance: CounterSingleton;
  private count = 0;

  private constructor() {} // Private constructor to prevent direct instantiation

  static getInstance(): CounterSingleton {
    if (!CounterSingleton.instance) {
      CounterSingleton.instance = new CounterSingleton();
    }
    return CounterSingleton.instance;
  }

  increment(): void {
    this.count++;
  }

  getCount(): number {
    return this.count;
  }
}

// Usage
const c1 = CounterSingleton.getInstance();
const c2 = CounterSingleton.getInstance();

c1.increment();
c2.increment();

console.log(c1.getCount()); // Output: 2
console.log(c2.getCount()); // Output: 2

// ---------------- Functional Approach in TypeScript ----------------

interface CounterSingletonFuncType {
  increment: () => void;
  getCount: () => number;
}

const CounterSingletonFunc = (function () {
  let instance: CounterSingletonFuncType | null = null;
  let count = 0;

  function createInstance(): CounterSingletonFuncType {
    return {
      increment: () => {
        count++;
        console.log(`Count: ${count}`);
      },
      getCount: () => count,
    };
  }

  return {
    getInstance: (): CounterSingletonFuncType => {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();

// Usage
const counter1 = CounterSingletonFunc.getInstance();
counter1.increment(); // Output: Count: 1

const counter2 = CounterSingletonFunc.getInstance(); // Getting the same instance
counter2.increment(); // Output: Count: 2

console.log(counter1.getCount()); // Output: 2
console.log(counter2.getCount()); // Output: 2
