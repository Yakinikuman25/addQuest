// 交通費の合計
let transportFee = 10000 * 4;

// 宿代の合計
let hotelFee = 15000 * 4;

// 昼食代
let lunchFee = 4500;

// 割引額
let discountFee = 999;

// 総合計金額
let totalFee = transportFee + hotelFee + lunchFee - discountFee;

// 合計金額の表示
console.log('旅費の総合計は' + totalFee + '円です。');

// あまりの金額
let restFee = totalFee % 4 ;

// 小数にしないため、あまり金額を合計金額から差し引き
let workFee = totalFee - restFee;

// 1人当たりの金額
let unitFee = workFee / 4;

// 1人当たりの金額の表示
console.log('1人あたりの金額は' + unitFee + '円です。');

// あまり金額の表示
console.log(restFee + '円、誰かが多く払う必要があります。')