/**
* it's not provided arguments while executing. it waits for input
 */

package main

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
	"strings"
)

func main() {
	scan := bufio.NewScanner(os.Stdin)
	scan.Scan()
	dat := strings.Fields(scan.Text())
	n, _ := strconv.Atoi(dat[0])
	k, _ := strconv.Atoi(dat[1])

	for i := 0; i < k; i++ {
		if n%10 == 0 {
			n /= 10
		} else {
			n--
		}
	}

	fmt.Println(n)
}
