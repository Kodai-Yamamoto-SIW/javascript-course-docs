---
title: 配列のメソッド
---

import Exercise, { Solution } from '@kodai-yamamoto-siw/exercise/client';
import { CodePreview } from '@kodai-yamamoto-siw/code-preview';


## 配列のメソッド（push / pop）

### 今日の学習はこんなところで使うよ

この章で学ぶ配列の追加・削除は、例えばオンラインストアのカート機能で使います。
商品を "カートに追加" する処理は push、購入を取りやめてカートから戻す処理は pop に対応します。
実際のウェブサイトの「商品一覧のカートボタン」や「カート画面の削除ボタン」で使われる場面をイメージしてください。

実際に使われていそうなサイトの例（代表例）:

- Amazon.co.jp（公開ページの UI で「カートに入れる」ボタンが確認できます）: https://www.amazon.co.jp/
  - 使われる箇所: 商品詳細の「カートに入れる」→ push に相当（カートへ要素を追加）。カート画面の「削除」操作は pop に相当することが多いです。



これら（push と pop）は配列の末尾（後ろ側）を操作するメソッドです。push は要素を追加し、pop は末尾の要素を取り出します。
どちらも配列を直接変更するため、配列の中身や長さが変わる点に注意してください。

### push（末尾に追加）

```js
array.push(値1, 値2, ...);
// 末尾に1つ以上の値を追加する（引数は任意の個数）。
```

### pop（末尾から取り出し）

```js
array.pop();
// 末尾の要素を 1 つ取り出して配列を短くする。
// 取り出した要素は pop の戻り値として得られる。
```

<CodePreview initialJS={`// push の例: 末尾へ追加する
let fruits = ["りんご"]; // 1 つ入った配列

// 末尾に 1 個追加
fruits.push("みかん");
console.log(fruits); // 出力: ["りんご","みかん"]

// 末尾に複数を一度に追加
fruits.push("バナナ", "なし");
console.log(fruits); // 出力: ["りんご","みかん","バナナ","なし"]`}/>

<CodePreview initialJS={`// pop の例: 末尾から取り出す
let fruits2 = ["りんご", "みかん", "バナナ"]; // 3 つ入った配列

// 末尾から 1 つ取り出し
let lastFruit = fruits2.pop();
console.log("取り出されたもの: " + lastFruit); // 出力: "バナナ"
console.log("残りの配列: " + fruits2); // 出力: ["りんご", "みかん"]`}/>

<Exercise title="演習1（push / pop 基本）">
次の配列 `fruits` を使い、下の手順を上から順に正確に実行し、各手順で指示された通りに出力しなさい。

開始配列:
```js
let fruits = ["りんご", "みかん"];
```

手順と出力:
1. 末尾に "バナナ" と "ぶどう" を追加し、その直後に配列全体を出力せよ（例: `console.log(fruits);`）
  - 出力: ["りんご", "みかん", "バナナ", "ぶどう"]
2. 末尾から 1 要素を取り出し、取り出した値を `console.log("取り出されたもの: " + 値);` で出力し、その後配列全体を `console.log("残りの配列: " + fruits);` で出力せよ
  - 出力（取り出した値）: "ぶどう"
  - 出力（配列）: ["りんご", "みかん", "バナナ"]

<Solution>
<CodePreview initialJS={`let fruits = ["りんご", "みかん"];
  // 1: 末尾に複数を追加
  fruits.push("バナナ", "ぶどう");
  console.log(fruits); // 出力: ["りんご","みかん","バナナ","ぶどう"]

  // 2: 末尾から1つ取り出す
  let removed = fruits.pop();
  console.log("取り出されたもの: " + removed); // 出力: "ぶどう"
  console.log("残りの配列: " + fruits); // 出力: ["りんご","みかん","バナナ"]`}/>
 </Solution>
</Exercise>

## 配列のメソッド（unshift / shift）

これら（unshift と shift）は配列の先頭（前側）を操作するメソッドです。unshift は先頭に1つ以上の要素を追加し、shift は先頭の要素を取り出します。どちらも配列を直接変更するため、配列の中身や長さが変わる点に注意してください。

### unshift（先頭に追加）

```js
array.unshift(値1, 値2, ...);
// 先頭に1つ以上の値を追加する（引数は任意の個数）。
```

### shift（先頭から取り出し）

```js
array.shift();
// 先頭の要素を 1 つ取り出して配列を短くする。
// 取り出した要素は shift の戻り値（返り値）として得られる。
```

<CodePreview initialJS={`// unshift の例: 先頭へ追加する
let colors = ["青", "緑"]; // 2 つ入った配列

// 先頭に 1 個追加
colors.unshift("赤");
console.log(colors); // 出力: ["赤","青","緑"]

// 先頭に複数を一度に追加（引数の順序で先頭へ並ぶ）
colors.unshift("黄", "白");
console.log(colors); // 出力: ["黄","白","赤","青","緑"]`}/>

<CodePreview initialJS={`// shift の例: 先頭から取り出す
let colors2 = ["赤", "青", "緑"]; // 3 つ入った配列

// 先頭から 1 つ取り出し
let firstColor = colors2.shift();
console.log("shift 取り出し: " + firstColor); // 出力: "赤"
console.log("残り: " + colors2); // 出力: ["青", "緑"]`}/>

<Exercise title="演習2（unshift / shift 基本）">
次の配列 `colors` を使い、下の手順を上から順に実行し各手順で指示された通りに出力しなさい。

開始配列:
```js
let colors = ["青", "緑"];
```

手順と出力:
1. 先頭に "赤" と "黄" を追加し、その直後に配列全体を出力せよ
  - 出力: ["赤", "黄", "青", "緑"]
2. 先頭から 1 要素取り出し、取り出した値を `console.log("取り出されたもの: " + 値);` で出力し、その後配列全体を出力せよ
  - 出力（取り出した値）: "赤"
  - 出力（配列）: ["黄", "青", "緑"]

<Solution>
<CodePreview initialJS={`let colors = ["青", "緑"];
  // 1: 先頭に複数を追加（引数の順序で先頭へ並ぶ）
  colors.unshift("赤", "黄");
  console.log(colors); // 出力: ["赤","黄","青","緑"]

  // 2: 先頭から1つ取り出す
  let removed = colors.shift();
  console.log("取り出されたもの: " + removed); // 出力: "赤"
  console.log("残りの配列: " + colors); // 出力: ["黄","青","緑"]`}/>
</Solution>
</Exercise>

---

## 配列のメソッド（map）

`array.map(関数)` は引数に関数（コールバック）を受け取ります。渡した関数は配列の各要素に対して順に呼び出され、関数が返した値を集めた「新しい配列」が戻り値として返されます。元の配列は変更されません。

```js
let newArray = array.map(function(要素) {
  return 要素 * 2;
});
// newArray は元配列とは別の配列で、元配列は変更されない
```

<CodePreview initialJS={`let array = [100, 23, 12, 7, 4];
let twiceArray = array.map(function(value) { return value * 2; });
console.log(twiceArray); // 出力: [200,46,24,14,8]`}/>

<Exercise title="演習3（各要素に1を足す）">
次の開始配列の各要素に 1 を足した配列を作り、出力せよ。

開始配列:
```js
let array = [1, 2, 3];
```

期待される出力:
```
[2, 3, 4]
```

<Solution>
<CodePreview initialJS={`let array = [1, 2, 3];
let result = array.map(function(v) { return v + 1; });
console.log(result); // 出力: [2,3,4]`}/>
</Solution>
</Exercise>

<Exercise title="演習4（変換）">
次の開始配列を、文字列 "No.値" の配列へ変換して出力せよ。

開始配列:
```js
let array = [3, 7, 10];
```

期待される出力:
```
["No.3", "No.7", "No.10"]
```

<Solution>
<CodePreview initialJS={`let array = [3, 7, 10];
  let result = array.map(function(v) { return "No." + v; });
  console.log(result); // 出力: ["No.3", "No.7", "No.10"]`}/>
</Solution>
</Exercise>

---

## 発展演習

### 配列のメソッド（その他）

代表的なメソッドと簡単な説明を表で示します（**全部覚える必要はありません**。こんなのがあったなー程度に覚えておいて、必要になったら詳しく調べて使えれば十分です）。

| メソッド | 説明 |
| :- | :- |
| concat(追加要素1, 追加要素2, ...) | 末尾に要素を追加した新しい配列を返す。追加要素が配列ならその要素を展開して追加する。 |
| join(セパレーター) | 要素を指定したセパレーターでつなげた文字列を返す。 |
| fill(値, 開始位置, 終了位置) | 指定範囲を同じ値で埋める（終了位置は含まない）。配列自体が変更される。 |
| reverse() | 配列の要素を逆順にする（配列自体が変更される）。 |
| sort(比較関数) | 要素をソートする（配列自体が変更される）。比較関数がなければ文字列として比較され、辞書順となるため注意。 |
| slice(開始位置, 終了位置) | 指定範囲の要素を抜き出して新しい配列を返す（終了位置は含まない）。元配列は変更されない。 |
| filter(コールバック) | 条件を満たす要素だけを集めた新しい配列を返す。 |
| indexOf(値, 開始位置) | 指定値の最初のインデックスを返す。見つからなければ -1。 |
| find(コールバック) | 条件を満たす最初の要素を返す。見つからなければ undefined。 |
| findIndex(コールバック) | 条件を満たす最初の要素のインデックスを返す。見つからなければ -1。 |

詳しくは MDN を参照:
https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array#%E3%82%A4%E3%83%B3%E3%82%B9%E3%82%BF%E3%83%B3%E3%82%B9%E3%83%A1%E3%82%BD%E3%83%83%E3%83%89
（左サイドバー内の「インスタンスメソッド」に一覧がある）

<Exercise title="発展演習1（配列から要素を取り出して結合）">
次の配列を使い、`array1` から "B" と "C" を取り出して `array2` の末尾に結合し、その後 `array1` と `array2` を出力せよ（ループは使わないこと）。

開始配列:
```js
let array1 = ["A", "B", "C", "D", "E"];
let array2 = ["F", "G", "H"];
```

期待される出力:
```
["A","D","E"]
["F","G","H","B","C"]
```

:::tip
ヒント: splice, concat を使うよ
:::

<Solution>
<CodePreview initialJS={`let array1 = ["A", "B", "C", "D", "E"];
let array2 = ["F", "G", "H"];
// array1 の 1 番目から 2 個を取り出す（"B","C"）
let removed = array1.splice(1, 2);
// 取り出した要素を array2 の末尾へ結合する
array2 = array2.concat(removed);
console.log(array1); // 出力: ["A","D","E"]
console.log(array2); // 出力: ["F","G","H","B","C"]`}/>
</Solution>
</Exercise>

<Exercise title="発展演習2（join で文字列にする）">
次の配列を使って、要素を半角スペース区切りでつなげた文字列を1行で出力せよ。具体的には `console.log(arrayA.join(" "));` を使いなさい。

開始配列:
```js
let arrayA = ["A", "B", "C", "D", "E"];
```

期待される出力:
```
"A B C D E"
```

:::tip
ヒント: join を使うよ
:::

<Solution>
<CodePreview initialJS={`let arrayA = ["A", "B", "C", "D", "E"];
console.log(arrayA.join(" ")); // 出力: "A B C D E"`}/>
</Solution>
</Exercise>

<Exercise title="発展演習3（数値を昇順にソート）">
次の配列を数値の昇順にソートして `console.log(arrayB);` で出力しなさい（`sort` に比較関数を渡すこと）。

開始配列:
```js
let arrayB = [23, 3, 2, 10, 1, 30];
```

期待される出力:
```
[1,2,3,10,23,30]
```

:::tip
ヒント: sort に比較関数（a, b の差を返す関数）を渡すよ
:::

<Solution>
<CodePreview initialJS={`let arrayB = [23, 3, 2, 10, 1, 30];
arrayB.sort(function(a, b) { return a - b; });
console.log(arrayB); // 出力: [1,2,3,10,23,30]`}/>
</Solution>
</Exercise>

<Exercise title="発展演習4（条件位置以降を fill で埋める）">
次の配列から値 25 の位置を見つけ、その位置より後ろ（25 自身は含めない）をすべて 0 に置き換え、最後に `console.log(arrayC);` で配列全体を1行で出力しなさい。

開始配列:
```js
let arrayC = [1, 12, 25, 7, 32, 10, 5, 430];
```

期待される出力:
```
[1,12,25,0,0,0,0,0]
```

:::tip
ヒント: indexOf と fill を使うよ
:::

<Solution>
<CodePreview initialJS={`let arrayC = [1, 12, 25, 7, 32, 10, 5, 430];
  let pos = arrayC.indexOf(25);
  arrayC.fill(0, pos + 1);
  console.log(arrayC); // 出力: [1,12,25,0,0,0,0,0]`}/>
</Solution>
</Exercise>

<Exercise title="発展演習5（ソートとフィルター）">
1. 次の items を価格 price の昇順でソートし、ソート結果を次のように 1 行で出力せよ。

```js
let items = [
  { type: "飲料", name: "お茶", price: 124 },
  { type: "食料", name: "パン", price: 138 },
  { type: "飲料", name: "水", price: 88 },
  { type: "食料", name: "菓子", price: 98 },
  { type: "飲料", name: "コーヒー", price: 110 },
];
```

期待される出力：
```
水:88
菓子:98
コーヒー:110
お茶:124
パン:138
```

2. さらに type が "飲料" の要素だけを取り出し、平均価格を計算して次のように出力せよ。

期待される出力:
```
飲料の平均価格: 107.33333333333333
```

:::tip
ヒント: filter と reduce を使うよ
:::

<Solution>
<CodePreview initialJS={`let items = [
  { type: "飲料", name: "お茶", price: 124 },
  { type: "食料", name: "パン", price: 138 },
  { type: "飲料", name: "水", price: 88 },
  { type: "食料", name: "菓子", price: 98 },
  { type: "飲料", name: "コーヒー", price: 110 },
];

// 価格の昇順にソートして、各要素を1 行ずつ出力
items.sort(function(a, b) { return a.price - b.price; });
items.forEach(function(it) { console.log(it.name + ":" + it.price); });

// 飲料だけ取り出し、平均価格を計算して出力
let drinks = items.filter(function(it) { return it.type === "飲料"; });
let sum = drinks.reduce(function(acc, it) { return acc + it.price; }, 0);
let avg = sum / drinks.length;
console.log("飲料の平均価格: " + avg);`}/>
</Solution>
</Exercise>

<Exercise title="発展演習6（検索）">
1. 発展演習5の `items` に対して、価格が **100 以上** の最初の **飲料** を検索し、そのインデックス、名前、価格を次のように出力せよ。

期待される出力:
```
インデックス: 0
名前: お茶
価格: 124
```

:::tip
ヒント: findIndex を使うよ
:::

<Solution>
<CodePreview initialJS={`let items = [
    { type: "飲料", name: "お茶", price: 124 },
    { type: "食料", name: "パン", price: 138 },
    { type: "飲料", name: "水", price: 88 },
    { type: "食料", name: "菓子", price: 98 },
    { type: "飲料", name: "コーヒー", price: 110 },
  ];
  let idx = items.findIndex(function(it) { return it.type === "飲料" && it.price >= 100; });
  let found = items[idx];
  console.log("インデックス: " + idx);
  console.log("名前: " + found.name);
  console.log("価格: " + found.price);`}/>
</Solution>
</Exercise>
