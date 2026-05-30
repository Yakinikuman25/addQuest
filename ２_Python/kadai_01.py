key1 = ("A", 15)
value1 = {"財布", "携帯", "モバイルバッテリー" }
locker1 = (key1, value1)

key2 = ("A", 11)
value2 = {"財布", "携帯", "お土産" }
locker2 = (key2, value2)

key3 = ("A", 23)
value3 ={"モバイルバッテリー", "お土産" }
locker3 = (key3, value3)

key4 = ("B", 18)
value4 = {"モバイルバッテリー", "キーケース" }
locker4 = (key4, value4)

key5 = ("A", 19)
value5 = {"財布", "携帯", "ハンカチ" }
locker5 = (key5, value5)

lockers = [locker1, locker2, locker3, locker4, locker5 ]

#keyはタプルの配列を使用：ロッカー番号は固定のため、変えないようにするため使用
#valueはセットを使用：1つのロッカー以外でも同じのがある可能性があるため重複させないために使用
#lockerはタプルを使用：lockerの中身はkeyとvalueだけなので変更や削除がいらないため
#lockersはリストを使用：追加や削除の可能性があるため

items = set()

for locker in lockers:
    for item in locker[1]:
        items.add(item)

print(items)

subject = ("携帯", "ティッシュ", "ハンカチ", "タバコ")
#タプルの配列を使用：変えないようにするため使用

for check_result in subject:
    if items == check_result :
        print(check_result + "はロッカーに少なくとも一つは存在します。")
    else:
        print(check_result + "ロッカーに一つも存在しません。")

