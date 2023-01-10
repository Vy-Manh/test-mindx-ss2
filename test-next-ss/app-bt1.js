function hailstone(number){
    const sequence = []
    sequence[0] = number
   while ( number != 1) {
    if (number % 2 === 0){
        number = number/2

    } else {
     number = number*3 + 1
    }
    sequence.push(number)
    }
   console.log(sequence)

    return sequence
}


 hailstone(7)  //=>  [7, 22, 11, 34, 17, 52, 26, 13, 40, 20, 10, 5, 16, 8, 4, 2, 1]
 hailstone(10) //=> [10, 5, 16, 8, 4, 2, 1]
 hailstone(1) //=> [1]