class CounterSingleton {
  #count = 0
  static instance;

  constructor() {
    if(CounterSingleton.instance) {
      return CounterSingleton.instance
    }
    CounterSingleton.instance = this
  }

  increment() {
    this.#count++
  }

  getCount() {
    console.log(this.#count)
  }
}

let c1 = new CounterSingleton()
let c2 = new CounterSingleton()


c1.increment()
c2.increment()

c1.getCount()
c1.increment()
c2.increment()

c2.getCount()

// ------ Functional approach ---------
const CounterSingletonFunc = (function() {
    let instance; // Private variable for singleton instance
    let count = 0; // Private variable for count

    function createInstance() {
        // Private methods
        function increment() {
            count++;
            console.log(`Count: ${count}`);
        }

        function getCount() {
            return count;
        }

        // Public methods
        return {
            increment,
            getCount
        };
    }

    return {
        getInstance: function() {
            // Public method to get singleton instance
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();

// Usage
const counter1 = CounterSingletonFunc.getInstance();
counter1.increment(); // Output: Count: 1

const counter2 = CounterSingletonFunc.getInstance(); // Getting the same instance
counter2.increment(); // Output: Count: 2

console.log(counter1.getCount()); // Output: 2
console.log(counter2.getCount()); // Output: 2

