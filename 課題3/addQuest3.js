// オブジェクトを作成し、行き先は、配列も設定した
// 一つ目のコース
const course1 = { plan: "Aプラン", goal: ["北海道"], cost: 150000, period: "2泊3日", concept: "食べたいものが多すぎる!!" };
// 二つ目のコース
const course2 = { plan: "Bプラン", goal: ["京都", "奈良"], cost: 100000, period: "3泊4日", concept: "和を感じよう。" };
// 三つ目のコース
const course3 = { plan: "Cプラン", goal: ["福岡", "佐賀", "長崎", "熊本"], cost: 250000, period: "6泊7日", concept: "二日酔い待ったなし" };

// オブジェクトを配列にし、for文で引き出せるように配列にした。
const plans = [course1, course2, course3];

console.log("-------------------------");

// 全体の処理を行う
for(let i = 0; i < plans.length; i++){

    // 各プランについて説明します。を表示する
    console.log( plans[i].plan + "について説明します。");

    // 行き先の処理、「と」が場合によってあるため、for文とif文を作成
    let totalGoal = plans[i].goal;
    //空を追加していくのと、空に行き先が入っていくようにlet addGoalを追加 
    let addGoal = "";
    // 処理を行う
    for (let j = 0; j < totalGoal.length; j++){
        addGoal = addGoal + totalGoal[j];

        // totalgoalが最後ではなければ「と」語尾につく。
        if(j != totalGoal.length -1){
            addGoal = addGoal + "と";
        }

    };
    // 行き先を表示する
    console.log("行き先は、" + addGoal + "です。");

    // 金額と期間を表示する
    console.log("金額は" + plans[i].cost + "円で、期間は" + plans[i].period + "です。");
    // コンセプトを表示する
    console.log("コンセプトは「" + plans[i].concept + "」");

    console.log("-------------------------");
}


