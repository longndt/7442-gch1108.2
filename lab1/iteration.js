//for loop
for (i = 1; i <= 10; i++) {
   if (i%2==0)
      console.log(i)
}

//while loop
x = 1
while (x <= 10) {
   console.log(x)
   x++
}

//do while
n = 1
do {
   console.log(n)
   n++
} while (n <= 10)

//foreach loop
cities = ["hanoi", "da nang", "nha trang", "hue"]
console.log (cities[0]) //index 0 => 1st element in array
cities.forEach(displayList)

function displayList(item, index) {
   console.log((index + 1) + ' : ' + item)
}
