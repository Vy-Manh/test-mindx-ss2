function freeShipping(order) {
    let isFreeShip = false
    var a = 0
    const orderLength = Object.values(order).length
    for ( let i = 0; i < orderLength; i++) {
        a += Object.values(order)[i]
        if (a >= 50 ) {
            isFreeShip = true
        }
    }
    return console.log(isFreeShip) 
}

freeShipping({ "Shampoo": 5.99, "Rubber Ducks": 15.99 },) //➞ false
freeShipping({ "Flatscreen TV": 399.99 })// ➞ true
freeShipping({ "Monopoly": 11.99, "Secret Hitler": 35.99, "Bananagrams": 13.99 })// ➞ true
freeShipping({ "1": 2.3, "2": 35.4, "3": 42.2 })// ➞ true