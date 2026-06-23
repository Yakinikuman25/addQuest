///////////////////////////////////////////
// 定数
///////////////////////////////////////////
// 各月の旅行金額を格納する配列
const tripFeeList = [30000, 50000, 70000, 40000, 90000, 15000, 80000, 20000, 60000, 55000, 110000, 25000];

// 旅行のひと月の予算
const tripBudget = 65000;

///////////////////////////////////////////
// 変数
///////////////////////////////////////////
// 総金額
let totalTripFee = 0;

// 予算外の件数
let overBudgetCnt = 0;

///////////////////////////////////////////
// 処理
///////////////////////////////////////////
for (let i = 0; i < tripFeeList.length; i++) {
    // 総金額の加算
    totalTripFee = totalTripFee + tripFeeList[i];

    // 予算内・予算外の判定を保持する変数
    let budgetStatus = '';

    // 予算内・外の判定
    if (tripFeeList[i] <= tripBudget) {
        budgetStatus = '予算内';
    } else {
        budgetStatus = '予算外';

        // 予算外件数のカウントアップ
        overBudgetCnt++;
    }

    // 各月の予算内・外表示
    console.log((i+1) + '月旅行では'+ tripFeeList[i] + '円使ったため、' + budgetStatus + 'です。');
}

// 予算外件数の表示
console.log('予算オーバーした月は' + overBudgetCnt + 'ヶ月あります。');

// 年間予算内かの判定
let totalBudgetStatus = ''
if (totalTripFee <= tripBudget * 12) {
    totalBudgetStatus = '予算内';
} else {
    totalBudgetStatus = '予算外';
}

// 年間の予算内外の判定
console.log('年間旅行使用金額は、' + totalTripFee +'円で、' + totalBudgetStatus +'です。');