function towerOfHanoi(n, a, b, c) {
  if (n > 0) {
    towerOfHanoi(n - 1, a, c, b)
    console.log(`Move a disc ${n} from  ${a} to ${c}`)
    towerOfHanoi(n - 1, b, a, c)
  }
}

towerOfHanoi(2, 1, 2, 3)
