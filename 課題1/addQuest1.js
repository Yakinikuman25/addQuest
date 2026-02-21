// 旅行者人数4人
let traveler ;
traveler = 4 ;

// 一人当たり交通費10000円
let carfare ;
carfare = 10000 ; 

// 一人当たり宿代15000円
let hotelBill ;
hotelBill = 15000 ;

// 昼食代4人で4500円
let lunch ;
lunch = 4500 ;

// 割引4人で999円
let discount ;
discount = 999 ;

// 総合計
let total;
total = (traveler * (carfare + hotelBill)) + lunch - discount;


// 一人当たりの金額
let cost =Math.floor(total/4);

// 一人当たりで割り切れなかった金額
let overCost ;
overCost = total % 4 ;

// 表示
console.log("旅行の総合計は"+ total +"円です");
console.log("一人当たりの金額は"+cost+"円です");
console.log(overCost+"円、誰か多く支払う必要がある");

