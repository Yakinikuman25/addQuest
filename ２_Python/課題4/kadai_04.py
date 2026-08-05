class TravelPlan:
    # コンストラクタで旅行先をtravel、旅行日数をdays、予算をbudgetとした。
    def __init__(self, travel: str, days: int, budget: int):
        self.travel = travel
        self.days = days
        self.budget = budget

    # ①旅行計画出力関数
    def plan_output(self):
        print(f"旅行先：{self.travel}")
        print(f"日数：{self.days}日")
        print(f"予算：{self.budget}円")

    # ②支払可能判定関数
    def is_payable(self, amount: int) -> bool:
        return amount <= self.budget

    # ③インスタンス変数変更関数
    # 旅行先を更新 
    def update_travel(self, travel: str):
        self.travel = travel

    # 日にちを更新
    def update_days(self, days: int):
        self.days = days
    
    # 予算を更新
    def update_budget(self, budget: int):
        self.budget = budget

# 1 旅行先情報の作成
print("旅行先情報1を作成します。")
travel1 = input("旅行先を入力してください：")

# 日数の入力エラーチェック（1日以上）
while True:
    days1_input = input("旅行日数を入力してください：")
    if not days1_input.isdigit():
        print("数値を入力してください：")
    else:
        days1 = int(days1_input)
        if not (days1 > 0):
            print("1日以上を入力してください：")
        else:
            break

# 予算の入力エラーチェック（1円以上）
while True:
    budget1_input = input("予算を入力してください：")
    if not budget1_input.isdigit():
        print("数値を入力してください：")
    else:
        budget1 = int(budget1_input)
        if not (budget1 > 0):
            print("1円以上を入力してください：")
        else:
            break

# 旅行先1についてplan1に格納
plan1 = TravelPlan(travel1, days1, budget1)

print("旅行先情報2を作成します。")
travel2 = input("旅行先を入力してください：")

# 日数の入力エラーチェック（1日以上）
while True:
    days2_input = input("旅行日数を入力してください：")
    if not days2_input.isdigit():
        print("数値を入力してください：")
    else:
        days2 = int(days2_input)
        if not (days2 > 0):
            print("1日以上を入力してください：")
        else:
            break

# 予算の入力エラーチェック（0円以上）
while True:
    budget2_input = input("予算を入力してください：")
    if not budget2_input.isdigit():
        print("数値を入力してください：")
    else:
        budget2 = int(budget2_input)
        if not (budget2 > 0):
            print("1円以上を入力してください：")
        else:
            break

# 旅行先2についてplan2に格納
plan2 = TravelPlan(travel2, days2, budget2)

# 2 旅行先情報の出力
print("旅行先1の情報を出力します。")
plan1.plan_output()

print("旅行先2の情報を出力します。")
plan2.plan_output()

# 3 旅行先情報の修正
# 旅行先1の修正確認
while True:
    choice1 = input("旅行先1の情報を修正しますか？（y/n）：")

    if not (choice1 == "y" or choice1 == "n"):
        print("yかnを入力してください")
    else:
        break

if not (choice1 == 'y'):
    pass
else:
    travel1 = input("旅行先を入力してください：")

    while True:
        days1_input = input("旅行日数を入力してください：")
        if not days1_input.isdigit():
            print("数値を入力してください：")
        else:
            days1 = int(days1_input)
            if not (days1 > 0):
                print("1日以上を入力してください：")
            else:
                break

    while True:
        budget1_input = input("予算を入力してください：")
        if not budget1_input.isdigit():
            print("数値を入力してください：")
        else:
            budget1 = int(budget1_input)
            if not (budget1 > 0):
                print("1円以上を入力してください：")
            else:
                break

    # 旅行先1の修正したものに変更
    plan1.update_travel(travel1)
    plan1.update_days(days1)
    plan1.update_budget(budget1)

# 旅行先2の修正確認
while True:
    choice2 = input("旅行先2の情報を修正しますか？（y/n）：")

    if not (choice2 == "y" or choice2 == "n"):
        print("yかnを入力してください")
    else:
        break

if not (choice2 == 'y'):
    pass
else:
    travel2 = input("旅行先を入力してください：")

    while True:
        days2_input = input("旅行日数を入力してください：")
        if not days2_input.isdigit():
            print("数値を入力してください：")
        else:
            days2 = int(days2_input)
            if not (days2 > 0):
                print("1日以上を入力してください：")
            else:
                break

    while True:
        budget2_input = input("予算を入力してください：")
        if not budget2_input.isdigit():
            print("数値を入力してください：")
        else:
            budget2 = int(budget2_input)
            if not (budget2 > 0):
                print("1円以上を入力してください：")
            else:
                break

    # 旅行先2の修正したものに変更
    plan2.update_travel(travel2)
    plan2.update_days(days2)
    plan2.update_budget(budget2)

# 4 修正後の旅行先情報の出力
print("旅行先1の情報を出力します。")
plan1.plan_output()

print("旅行先2の情報を出力します。")
plan2.plan_output()

# 5 費用の入力と予算算出
types_costs = ["食費", "交通費", "宿泊費"]

# 旅行先1
for type in types_costs:
    cost = f"旅行先1での{type}を入力してください："
    while True:
        # 数値チェック
        amount_input = input(cost)
        if not amount_input.isdigit():
            cost = f"数値を入力してください："
            continue
        
        amount = int(amount_input)
        
        # 予算内か判定
        if not plan1.is_payable(amount):
            cost = f"予算オーバーです。再度{type}を入力してください："
        else:
            plan1.budget = plan1.budget - amount
            print(f"予算内です。残り予算：{plan1.budget}円")
            break

# 旅行先2
for type in types_costs:
    cost = f"旅行先2での{type}を入力してください："
    while True:
        # 数値チェック
        amount_input = input(cost)
        if not amount_input.isdigit():
            cost = f"数値を入力してください："
            continue
        
        amount = int(amount_input)
        
        # 予算内か判定
        if not plan2.is_payable(amount):
            cost = f"予算オーバーです。再度{type}を入力してください："
        else:
            plan2.budget = plan2.budget - amount
            print(f"予算内です。残り予算：{plan2.budget}円")
            break

print("良い旅をお過ごしください。")