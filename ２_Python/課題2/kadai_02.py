travel_A = {"行先": "沖縄県", "金額": 50000, "季節": "夏"}
travel_B = {"行先": "北海道", "金額": 60000, "季節": "冬"}
travel_C = {"行先": "京都府", "金額": 30000, "季節": "春"}
travel_D = {"行先": "東京都", "金額": 70000, "季節": "秋"}
travel_E = {"行先": "福岡県", "金額": 20000, "季節": "春"}
travel_F = {"行先": "大阪府", "金額": 25000, "季節": "春"}
travel_G = {"行先": "宮城県", "金額": 35000, "季節": "春"}
travel_H = {"行先": "愛知県", "金額": 40000, "季節": "夏"}
travel_I = {"行先": "神奈川県", "金額": 45000, "季節": "夏"}
travel_J = {"行先": "石川県", "金額": 45000, "季節": "秋"}
travel_K = {"行先": "兵庫県", "金額": 30000, "季節": "秋"}
travel_L = {"行先": "長野県", "金額": 40000, "季節": "冬"}
travel_M = {"行先": "新潟県", "金額": 50000, "季節": "冬"}

travel_spots = [ travel_A, travel_B, travel_C, travel_D, travel_E, travel_F, travel_G, travel_H, travel_I, travel_J, travel_K, travel_L, travel_M]

# 予算を入力し、対象旅行プランを絞る。
while True:
    budget_check = input("予算を入力してください：")
    if budget_check.isdigit():
        budget = int(budget_check)
        if budget > 0:
            break
        else:
            print("0より大きい金額を入力してください")
    else:
        print("数値を入力してください")

# 季節の条件を記入する。春夏秋冬ではない場合は春夏秋冬が記入されるまで繰り返す。
while True:
    season = input("希望する季節を入力してください（春・夏・秋・冬）：")
    if season in ["春", "夏", "秋", "冬"]:
        break
    else:
        print("春夏秋冬いずれかで入力してください")

# その条件にあったものをhit_travelにリストで追加する
hit_travel = []
for check_result in travel_spots:
    if budget >= check_result ["金額"] and season == check_result ["季節"]:
        hit_travel.append(check_result)

# 条件があった数を表示してない場合はelseで返す
if len(hit_travel) >0:
    print(f"{len(hit_travel)}件、条件に合う旅行先が見つかりました。")
else:
    print("条件に合う旅行先はありません。")

# 条件にヒットしたものの行先と予算を表示する
for search in hit_travel:
    print(f"{search["行先"]}：予算{search["金額"]}円")
