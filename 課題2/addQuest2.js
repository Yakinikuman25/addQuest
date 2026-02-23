// 12ヶ月分を配列に入れた
const month = ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月",];
//各月の金額を入れた
const tripCost = [30000, 50000, 70000, 40000, 90000, 15000, 80000, 20000, 60000, 55000, 110000, 25000];
// 一か月あたりの予算を決めた
const budget = 65000;

// ①の問題　〇月旅行では〇〇円使ったため、（予算内 or 予算外）です
for ( let i =0; i < month.length, i<tripCost.length; i ++) {
    if (tripCost[i] < budget){
        console.log(month[i] + "では" + tripCost[i] +"円使ったため予算内です");
    }
    else {
        console.log(month[i] + "では" + tripCost[i] +"円使ったため予算外です");
    }
}

// ②の問題　予算オーバーした月は、何か月ある
const overCostMonth = tripCost.filter(num => num > budget);
console.log("予算オーバーした月は" + overCostMonth.length + "ヶ月あります");

// ③の問題　年間旅行使用金額は、○○円で、（予算内 or 予算外）です
// 1年間分の予算
const budgetTotal = budget*12;
// 使用金額の合計
const tripCostTotal = tripCost.reduce((acc, cur)=>{
    return acc+cur
})

// 1年間の予算に収まっていたら予算内と表示、収まらないと予算外になる
if(tripCostTotal<budgetTotal){
    console.log("年間旅行使用金額は、"+tripCostTotal + "円で、予算内です");
}
else{
    console.log("年間旅行使用金額は、"+tripCostTotal + "円で、予算外です");
}

