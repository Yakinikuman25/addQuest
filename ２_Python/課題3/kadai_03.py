# タイトル表示関数
def display_title()-> str:
    print("===== 旅行プラン登録システム =====")

# 旅行先・宿泊日数表示関数
def display_plan(travel_destination: str, stay_day: int):
    print(f"旅行先：{travel_destination}")
    print(f"宿泊日数：{stay_day}日")

# メッセージ取得関数
def get_message()-> str:
    return print("楽しい旅行になりますように！")

# 旅行の総金額計算関数
def total_cost(cost_per_night, stay_day)-> int:
    total_cost = cost_per_night * stay_day
    return total_cost

# 実行内容
while True:
    # タイトル関数を呼び出す
    display_title()


    # 旅行先の処理

    #旅行先を入力する
    travel_destination = input("旅行先を入力してください：")
    

    # 宿泊日数の処理

    # 宿泊日数で0以上ではない場合は0以上を記入するまで繰り返す
    while True:
        # 宿泊日数を入力する
        stay_day_input = input("宿泊日数を入力してください：")
        # 宿泊日数が整数かどうかチェックする
        if stay_day_input.isdigit():
            stay_day = int(stay_day_input)
            #1以上であるかを確認
            if stay_day > 0:
                break
            else:
                print("宿泊を伴う旅行なので1泊以上を入力してください：")
        else:
            print("数値を入力してください：")


    # 1泊あたりの金額の処理

    # 金額が数値であるか確認処理
    while True:
        # 1泊あたりの金額を入力する
        cost_per_night_input = input("1泊あたりの料金を入力してください：")
        # 金額が整数かどうかチェックする
        if cost_per_night_input.isdigit():
            cost_per_night = int(cost_per_night_input)
            # 1以上かどうか確認
            if cost_per_night > 0:
                break               
            else:
                print("1円以上を入力してください：")
        else:
            print("数値を入力してください：")
    

    # 結果を表示する
    display_plan(travel_destination, stay_day)
    print(f"合計金額：{total_cost(cost_per_night, stay_day)}円")


    # 旅行プランの再入力するかの処理

    # 旅行プランを追加するかどうかyかnで記入する
    while True:
        add_register = input("さらに旅行プランを登録しますか？(y/n)：")
        # yかnなら終了で、その他の場合は再入力
        if add_register == "n" or add_register =="y":
            break
        else:
            print("yかnを入力してください")
    # nだった場合処理を終了してメッセージを表示させる
    if add_register == "n":
        get_message()
        break
