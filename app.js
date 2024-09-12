const sum = (a,b) => {
    return a+b
}


/* 

EURO/USD 1 = 1.07 ◄

USD/YEN = 156,5/1,07 = 146.26 ◄

YEN/GBP = 0.87/156.5 = 0.0055 ◄
*/

const fromEuroToDollar = (euroAmount) =>{
    return euroAmount * 1.07
}

const fromDollarToYen = (dollarAmount) =>{
    let dolarToEuro = dollarAmount / 1.07
    let yen = dolarToEuro * 156.5
    return yen
}


const fromYenToPound = (yenAmount) =>{
    let yenToEuro = yenAmount / 156.5
    let pound = yenToEuro * 0.87
    return pound
}



module.exports= {sum, fromEuroToDollar, fromDollarToYen, fromYenToPound}


