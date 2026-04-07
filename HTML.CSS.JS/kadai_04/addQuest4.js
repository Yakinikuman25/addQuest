// 各情報をオブジェクトに入れる
const plan1 = {item: "1つ目", goal: ["北海道"], taxExcl: [1000, 1500, 20000, 7000, 7500, 3000, 30000, 2500], period: ["2027/1/1", "2027/2/5"]};
const plan2 = {item: "2つ目", goal: [], taxExcl:[20000, 10000, 3000, 15000], concept: "ばえる写真をいっぱい撮りたい"};
const plan3 = {item: "3つ目", goal: ["福岡", "佐賀", "長崎", "熊本"], taxExcl: [250000], guest: ["山田", "田中", "佐藤"]};

const plans = [plan1, plan2, plan3];

// 線の関数
const border = ()=>{
    console.log("------------------------------");
}

// 計画についての表示
const totalItem = (item)=>{
    console.log(item + "の計画です。");
}

// 目的地の関数
const totalGoal = (goal)=>{
    // 空の場合
    if (goal.length === 0){
        console.log("目的地は未定です。");
    }
    // 空以外の場合
    else {
        let addGoal = "";
        for (let j = 0; j < goal.length; j++){
            addGoal = addGoal + goal[j];
            // goalが最後ではなければ「・」語尾につく。
            if(j != goal.length -1){
                addGoal = addGoal + "・";
            }
        }
        console.log("目的地は" + addGoal + "です。");
    }
}

// 消費税込みの関数
const costTax = (totalTaxExcl)=>{
    const totalTax = totalTaxExcl * 1.08 ;
    // console.log("費用総額は、税込" + totalTax +"円です。");
    return totalTax;
}

// もしperiodがある場合、日付を表示する
const day = (period)=>{
    if(period){
        console.log("日付は、" + period[0] + "から" + period[1] + "までの予定です。");
    }
}

// もしconceptがある場合、コンセプトを表示する
const concepts = (concept)=>{
    if(concept){
        console.log("コンセプトは、「" + concept + "」です。");
    }
}

// もしguestがある場合、参加者を表示する
const join =  (guest)=>{
    if(guest){
        let addGuest = "";
        for(let l =0; l < guest.length; l++){
            addGuest = addGuest + guest[l];
            if(l != guest.length -1){
                addGuest = addGuest + "と";
            }
        }
        console.log("参加者は" + addGuest + "の" + guest.length + "人です。");
    }
}

// 楽しみましょうを表示する
const enjoy = ()=>{
    console.log("楽しみましょう!");
}

for (let i = 0; i < plans.length; i++ ){

    border();

    totalItem(plans[i].item);

    totalGoal(plans[i].goal); //1：["北海道"]、2：[""]、3:["福岡", "佐賀", "長崎", "熊本"]
    
    let prices = plans[i].taxExcl
    // 1:[1000, 1500, 20000, 7000, 7500, 3000, 30000, 2500],
    // 2:[20000, 10000, 3000, 1500]
    // 3:[250000]
    let totalTaxExcl = 0;
    for(let k =0; k < prices.length; k++){
        totalTaxExcl = totalTaxExcl + prices[k];
        //1-1:1000,1-2:1000+1500,1-3:1000+1500+20000,...
    }
    
    // 変数に入れてから表示する
    let result = costTax(totalTaxExcl) ;
    console.log("費用総額は、税込" + result +"円です。");
    // costTax(totalTaxExcl);

    day(plans[i].period);

    concepts(plans[i].concept);

    join(plans[i].guest);

    enjoy();  
}




