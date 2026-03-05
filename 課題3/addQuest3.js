////////////全部の処理を書いた場合

// 一つ目のコース
const course1 = { plan: "Aプラン", goal: "北海道", cost: 150000, period: "2泊3日", concept: "食べたいものが多すぎる!!" };
// 二つ目のコース
const course2 = { plan: "Bプラン", goal: "京都、奈良", cost: 100000, period: "3泊4日", concept: "和を感じよう。" };
// 三つ目のコース
const course3 = { plan: "Cプラン", goal: "福岡、佐賀、長崎、熊本", cost: 250000, period: "6泊7日", concept: "二日酔い待ったなし" };


// 一つ目の表示
console.log(course1.plan + "について説明します。");
console.log("行き先は、" + course1.goal + "です。");
console.log("金額は" + course1.cost + "円で、期間は" + course1.period + "です。");
console.log("コンセプトは「" + course1.concept + "」");

// 二つ目の表示
console.log(course2.plan + "について説明します。");
console.log("行き先は、" + course2.goal + "です。");
console.log("金額は" + course2.cost + "円で、期間は" + course2.period + "です。");
console.log("コンセプトは「" + course2.concept + "」");

// 三つ目の表示
console.log(course3.plan + "について説明します。");
console.log("行き先は、" + course3.goal + "です。");
console.log("金額は" + course3.cost + "円で、期間は" + course3.period + "です。");
console.log("コンセプトは「" + course3.concept + "」");




////////////まとめて処理を書いた場合
// 一つ目のプラン
const course = { plan: plan[i], goal: goal[i], cost: cost[i], period: period[i], concept: [i] };

course.plan[i]= "Aプラン", "Bプラン", "Cプラン";

console.log(course.plan + "について説明します。");