var numberChanged = document.getElementById('changer-number')
var numberRender = document.getElementById('number-render')

numberChanged.onchange = function () {
    console.log(numberChanged.value);
    romanNumber100up = (Math.floor(numberChanged.value / 100)*100 )
    romanNumber10up = numberChanged.value % 100
    console.log(romanNumber100up)
    if (numberChanged.value < 0) {
        alert('số nhập vào phải là số nguyên dương')
    }
    // number duoi hoac bang 10
    else if (numberChanged.value <= 10) {
        console.log(changeNumber[numberChanged.value])
        return numberRender.textContent =changeNumber[numberChanged.value]
        // number lon hon 10 nho hon 20
    } else if (numberChanged.value > 10 && numberChanged.value < 20) {
        console.log(`X${changeNumber[numberChanged.value % 10]}`)
        return numberRender.textContent =`X${changeNumber[numberChanged.value % 10]}`
        // number lon hon 20 nho hon 40
    } else if (numberChanged.value >= 20 && numberChanged.value <= 100) {
        console.log(`${changeNumber[(Math.floor(numberChanged.value / 10) * 10)]}${changeNumber[numberChanged.value % 10]}`)
        return numberRender.textContent =`${changeNumber[(Math.floor(numberChanged.value / 10) * 10)]}${changeNumber[numberChanged.value % 10]}`
    } else if (numberChanged.value > 100 && numberChanged.value <= 1000) {

        console.log(Math.floor(romanNumber10up / 10) *10)
        console.log(changeNumber[romanNumber10up])

        return numberRender.textContent =`${changeNumber[romanNumber100up]}${changeNumber[Math.floor(romanNumber10up / 10) *10]}${changeNumber[romanNumber10up % 10]}`
    } 

}

var changeNumber = {
    0: '',
    1: 'I',
    2: 'II',
    3: 'III',
    4: 'IV',
    5: 'V',
    6: 'VI',
    7: 'VII',
    8: 'VIII',
    9: 'IX',
    10: 'X',
    20:'XX',
    30:'XXX',
    40:'XL',
    50:'L',
    60:'LX',
    70:'LXX',
    80:'LXXX',
    90:'XC',
    100:'C',
    200:'CC',
    300:'CCC',
    400:'CD',
    500:'D',
    600:'DC',
    700:'DCC',
    800:'DCCC',
    900:'CM',
    1000:'M',
}
