// 北海道の場合
const hokkaido = {
    area: "北海道", 
    periods: ["1泊", "2泊", "3泊",  "4泊", "5泊"],
    cost: [10000, 19000, 27000, 34000, 40000],
    trans: 15000
};

// 東京の場合
const tokyo = {
    area: "東京", 
    periods: ["1泊", "2泊", "3泊", "4泊", "5泊"],
    cost: [7000, 14000, 21000, 28000, 35000],
    trans: 4800
};

// 大阪の場合
const osaka = {
    area: "大阪", 
    periods: ["1泊", "2泊", "3泊", "4泊", "5泊"],
    cost: [15000, 20000, 25000, 30000, 35000],
    trans: 4600
};

// 福岡の場合
const fukuoka = {
    area: "福岡", 
    periods: ["1泊", "2泊", "3泊", "4泊", "5泊"],
    cost: [6000, 12000, 18000, 24000, 30000],
    trans: 3600
};

// 沖縄の場合
const okinawa = {
    area: "沖縄", 
    periods: ["1泊", "2泊", "3泊", "4泊", "5泊"],
    cost: [12000, 22000, 30000, 36000, 40000],
    trans: 10000
};

const plans = [hokkaido, tokyo, osaka, fukuoka, okinawa];


// HTMLの出力ボタンのidを取得し定数に代入する
const userBtn =document.getElementById("user-btn");

// HTML要素がクリックされた時にイベント処理を実行する
userBtn.addEventListener('click', () => {
    //HTMLの目的地ドロップダウンのidを取得し定数に代入する
    const userGoal = document.getElementById("user-goal");

    //HTMLの参加人数ドロップダウンのidを取得し定数に代入する
    const userEntrant = document.getElementById("user-entrant").value;

    //HTMLの宿泊数ラジオボタンのidを取得し定数に代入する
    // const userStay = document.getElementById("user-stay");
    const userStay = document.forms.userStay.stay.value;

    //HTMLのテキストのidを取得し定数に代入する
    const userText = document.getElementById("user-text").value;

    // HTMLの出力結果を表示するidを取得し定数に代入する
    const output = document.getElementById("output");

    
    // 確認用
    console.log("--------------------------------");
    console.log(userGoal.value);
    console.log(userEntrant);
    // console.log(userStay.value);
    console.log(userStay);
    console.log(userText);


    // selectPlanに選択したHTMLの目的地のuserGoalとオブジェクトを紐づける
    let selectPlan = null; //nullで空の変数を作って、if文で選択したものが一致したら代入する
    for (let i = 0; i < plans.length; i++){
        if (userGoal.value === plans[i].area) {
        selectPlan = plans[i];
    };
    };
    // 確認用
    console.log(selectPlan);

    // selectGoalにHTMLで選択したuserGoalとオブジェクトのareaの値を代入する
    const selectGoal = selectPlan.area;
    // 確認用
    console.log("目的地" + selectGoal);

     // selectStayにHTMLで選択したuserStayを「-1」したものとオブジェクトのperiodsのインデックスの同じ値を代入する
    // 例：1泊を選択→　HTML：value=1、js：periods[0]が等しくしたいのでHTML：value=1を-1にして0にする。そうすると0=0で同じ値になる。
    const selectStay = selectPlan.periods[userStay -1];
    // 確認用
    console.log("宿泊数" + selectStay);

    // selectStayCostにHTMLで選択したuserStayを「-1」したものとオブジェクトのcostのインデックスの同じ値を代入する
    // 例：1泊を選択→　HTML：value=1、js：cost[0]が等しくしたいのでHTML：value=1を-1にして0にする。そうすると0=0で同じ値になる。
    const selectStayCost = selectPlan.cost[userStay -1];
    // 確認用
    console.log("宿泊費" + selectStayCost);

    // 交通費
    for(let j = 0; j < plans.length; j++){
        // 北海道の場合（人数に関わらず、1泊あたり15,000円）
        if(selectGoal === "北海道"){
            carfare = userStay * 15000;
        }

        // 東京の場合（1人、1泊あたり4,800円）
        else if(selectGoal === "東京"){
            carfare = userStay * userEntrant * 4800;
        }

        // 大阪の場合（1人、1泊あたり4,600円）
        else if(selectGoal === "大阪"){
            carfare = userStay * userEntrant * 4600;
        }

        // 福岡の場合（1人、1泊あたり3,600円）
        else if(selectGoal === "福岡"){
            carfare = userStay * userEntrant * 3600;
        }

        // 沖縄の場合（1~5人、1泊あたり10,000円）
        else if(selectGoal === "沖縄" && userEntrant <= 5 ){
            carfare = userStay * 10000;
        }
        // 沖縄の場合（6~10人、1泊あたり20,000円）
        else if(selectGoal === "沖縄" && 5< userEntrant <= 9){
            carfare = userStay * 20000;
        }
    };
    // 確認用
    console.log("交通費" + carfare);

    // // 費用総額の計算(消費税0.8%)
    const totalCost = Math.floor((selectStayCost + carfare) *1.08);
    console.log("総額" + totalCost);

    // 一人あたりの費用
    const total = Math.floor(totalCost / userEntrant);
    console.log("一人当たりの費用" + total);


    // 出力するものをHTMLに表示する
    output.innerHTML = 
    selectGoal + "行き" + selectStay + "の旅行プランを表示します。" 
    +  "費用総額は、税込" + totalCost + "円です。"
    + "1人当たりでは、税込" + total + "円になります。"
    + "幹事からのメッセージをいただいております。"
    + "「" + userText + "」"
    + "楽しんでください！";

    console.log("--------------------------------");

});






