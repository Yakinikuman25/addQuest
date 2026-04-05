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
const osak = {
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














// HTML要素がクリックされた時にイベント処理を実行する
document.getElementById("user-btn").addEventListener('click', () => {
    //HTMLの目的地ドロップダウンのidを取得し定数に代入する
    const userGoal = document.getElementById("user-goal");

    //HTMLの参加人数ドロップダウンのidを取得し定数に代入する
    const userEntrant = document.getElementById("user-entrant");

    //HTMLの宿泊数ラジオボタンのidを取得し定数に代入する
    const userStay = document.getElementById("user-stay");

    //HTMLのテキストのidを取得し定数に代入する
    const userText = document.getElementById("user-text");

    
    console.log(goal);
});





