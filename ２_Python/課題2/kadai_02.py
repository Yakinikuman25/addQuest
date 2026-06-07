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

while True:
    budget = int(input("予算を入力してください："))
    if budget > 0:
        break
    else:
       print("0より大きい金額を入力してください")

while True:
    season = input("希望する季節を入力してください（春・夏・秋・冬）：")
    if season in ["春", "夏", "秋", "冬"]:
        break
    else:
        print("春夏秋冬いずれかで入力してください")
