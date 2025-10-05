---
sidebar_position: 3
title: 配列のメソッド
---

import Exercise, { Solution } from '@kodai-yamamoto-siw/exercise/client';
import { CodePreview } from '@kodai-yamamoto-siw/code-preview';


## 配列のメソッド（push, pop, unshift, shift）

配列の両端に要素を追加・取り出しする基本メソッドです。

- push(追加要素1, 追加要素2, …): 配列の末尾に要素を追加
- pop(): 配列の末尾の要素を取り出す（取り出した要素を返す）
- unshift(追加要素1, 追加要素2, …): 配列の先頭に要素を追加
- shift(): 配列の先頭の要素を取り出す（取り出した要素を返す）

<CodePreview initialJS={`const array = [];
  // push
  array.push("push1", "push2", "push3");
  console.log(array);
  // pop
  const popElement = array.pop();
  console.log("pop ->", popElement, array);
  // unshift
  array.unshift("unshift1", "unshift2");
  console.log(array);
  // shift
  const shiftElement = array.shift();
  console.log("shift ->", shiftElement, array);`}/>

<Exercise title="演習1（基本）">
空配列に対して、次の手順を実行し、各手順後の配列内容を出力せよ。

1. 末尾に "A", "B" を追加
2. 末尾から1つ取り出す
3. 先頭に "X" を2つ追加
4. 先頭から1つ取り出す

<Solution>
<CodePreview initialJS={`const a = [];
  a.push("A", "B");
  console.log(a);
  const last = a.pop();
  console.log("pop:", last, a);
  a.unshift("X", "X");
  console.log(a);
  const first = a.shift();
  console.log("shift:", first, a);`}/>
</Solution>
</Exercise>

<Exercise title="演習1-発展1（スタック／キュー）">
次の操作列を、配列1つだけと push/pop/unshift/shift で実現し、最終的な配列内容を出力せよ。

- スタック的操作: push("A"), push("B"), pop(), push("C")
- キュー的操作: unshift("1"), unshift("2"), shift(), unshift("3")

どちらの方式でも良いが、操作の意味が分かるようにコメントを付けること。

<Solution>
<CodePreview initialJS={`// スタック（後入れ先出し）
  const stack = [];
  stack.push("A");
  stack.push("B");
  stack.pop(); // B を取り出す
  stack.push("C");
  console.log("stack:", stack); // ["A", "C"]

  // キュー（先入れ先出し）
  const queue = [];
  queue.unshift("1");
  queue.unshift("2");
  queue.shift(); // 先頭の 2 を取り出す
  queue.unshift("3");
  console.log("queue:", queue); // ["3", "1"]`}/>
</Solution>
</Exercise>

---

## 配列のメソッド（splice）

途中の要素を取り出したり、途中に挿入したりできる多用途メソッドです。取り出した要素の配列を返します。

構文: splice(開始位置, 取り出し数, 追加要素1, 追加要素2, …)

<CodePreview initialJS={`const array = ["A", "B", "C", "D"];
  // 取り出しつつ挿入
  const removed1 = array.splice(2, 1, "E", "F"); // A, B, E, F, D
  console.log("removed1:", removed1, array);
  // 取り出すだけ
  const removed2 = array.splice(1, 2); // A, F, D
  console.log("removed2:", removed2, array);
  // 挿入だけ
  array.splice(1, 0, "G", "H"); // A, G, H, F, D
  console.log(array);`}/>

<Exercise title="演習2（基礎）">
次の配列に対して、以下の操作を実行せよ。適宜、結果を出力して確認すること。

1. 末尾に "D" と "E" を追加して "A", "B", "C", "D", "E" にせよ。
2. 先頭の要素を1つ取り出して、配列が "B", "C", "D", "E" になることを確認せよ。
3. インデックス1（"C"の位置）に "X" を挿入して、"B", "X", "C", "D", "E" にせよ。

```js
const array = ["A", "B", "C"];
```

<Solution>
<CodePreview initialJS={`const array = ["A", "B", "C"];
  // 1
  array.push("D", "E");
  console.log(array);
  // 2
  array.shift();
  console.log(array);
  // 3
  array.splice(1, 0, "X");
  console.log(array);`}/>
</Solution>
</Exercise>

<Exercise title="演習2-発展1（挿入と置換の組み合わせ）">
次の配列に対して、"B" と "C" の間に "D", "E" を挿入して "A", "B", "D", "E", "C" にせよ。

```js
const array = ["A", "B", "C"];
```

<Solution>
<CodePreview initialJS={`const array = ["A", "B", "C"];
  array.splice(2, 0, "D", "E");
  console.log(array); // ["A", "B", "D", "E", "C"]`}/>
</Solution>
</Exercise>

---

## 配列のメソッド（forEach）

各要素に対してコールバック関数を呼び出します。コールバックには「要素」「インデックス」「呼び出した配列」の順で渡されます。

<CodePreview initialJS={`const array = [456, 23, 12, 7, 4];
  array.forEach(function (value, index, arr) {
    console.log(value); // 必要なら index, arr も使える
  });`}/>

必要な情報が要素だけなら、引数は1つでOK。無名関数はアロー関数式で短く書けます。

<CodePreview initialJS={`const array = [456, 23, 12, 7, 4];
  array.forEach((value) => {
    console.log(value);
  });`}/>

<Exercise title="演習3（出力と合計）">
次の配列の各要素を1行ずつ出力し、最後に合計を出力せよ（for 文は使わない）。

```js
const array = [456, 23, 12, 7, 4];
```

<Solution>
<CodePreview initialJS={`const array = [456, 23, 12, 7, 4];
  let sum = 0;
  array.forEach((v) => {
    console.log(v);
    sum += v;
  });
  console.log("sum:", sum);`}/>
</Solution>
</Exercise>

<Exercise title="演習3-発展1（インデックス付き出力）">
forEach の第2引数（インデックス）を用いて、`0: 値` の形式で全要素を出力せよ。

<Solution>
<CodePreview initialJS={`const array = [456, 23, 12, 7, 4];
  array.forEach((value, index) => {
    console.log(index + ": " + value);
  });`}/>
</Solution>
</Exercise>

---

## 配列のメソッド（map）

各要素に対してコールバック関数を呼び出し、その戻り値からなる「新しい配列」を返します。

<CodePreview initialJS={`const array = [456, 23, 12, 7, 4];
  const twiceArray = array.map((value) => value * 2);
  console.log(twiceArray);`}/>

<Exercise title="演習4（変換）">
次の配列を、文字列 "No.値" の配列へ変換して出力せよ。

```js
const array = [3, 7, 10];
```

<Solution>
<CodePreview initialJS={`const array = [3, 7, 10];
  const result = array.map(v => "No." + v);
  console.log(result);`}/>
</Solution>
</Exercise>

<Exercise title="演習4-発展1（構造化）">
次の配列を、\{ original: 値, double: 2倍, isEven: 偶数か \} の配列へ変換せよ。

```js
const array = [1, 2, 3, 4, 5];
```

<Solution>
<CodePreview initialJS={`const array = [1, 2, 3, 4, 5];
  const result = array.map(v => ({ original: v, double: v * 2, isEven: v % 2 === 0 }));
  console.log(result);`}/>
</Solution>
</Exercise>

---

## 配列のメソッド（その他）

代表的なものと大雑把な説明です（必要になったら調べる、でOK）。

- concat(追加要素1, 追加要素2, …): 末尾に要素追加した新しい配列を返す。追加要素が配列なら展開して追加。
- join(セパレーター): 要素をセパレーターで区切った文字列を返す。
- fill(値, 開始位置, 終了位置): 指定範囲を値で埋める（終了位置は含まない）。
- reverse(): 要素を逆順にする。
- sort(比較関数): 要素をソートする（比較関数がないときは「文字列」として辞書順）。
- slice(開始位置, 終了位置): 指定範囲の配列をコピーして返す（終了位置は含まない）。
- filter(コールバック関数): 条件を満たす要素だけ集める。
- indexOf(検索値, 検索開始位置): 要素を検索して、そのインデックスを返す。
- find(コールバック関数): 条件を満たす「最初の要素」を返す。
- findIndex(コールバック関数): 条件を満たす「最初の要素のインデックス」を返す。

詳しくは MDN を参照:
https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array

<Exercise title="演習5（小問）">
以下の各問いに答えよ（ループ構文は使用禁止）。できていることを出力で確認すること。

1. array1 から "B", "C" を取り出し、array2 の後ろに結合せよ（ヒント: splice, concat）。
2. 次の array を使って、「A B C D E」と半角スペース区切りで出力せよ（ヒント: join）。
3. 次の array を数値の昇順にソートせよ（ヒント: sort）。
4. 次の array から 25 を検索し、それより後ろ（25は除く）を全部 0 にせよ（ヒント: indexOf, fill）。

```js
let array1 = ["A", "B", "C", "D", "E"];
let array2 = ["F", "G", "H"];
const arrayA = ["A", "B", "C", "D", "E"];
const arrayB = [23, 3, 2, 10, 1, 30];
const arrayC = [1, 12, 25, 7, 32, 10, 5, 430];
```

<Solution>
<CodePreview initialJS={`let array1 = ["A", "B", "C", "D", "E"];
  let array2 = ["F", "G", "H"];
  // 1: array1 から B, C を取り出し、array2 の後ろに結合
  const removed = array1.splice(1, 2); // ["B", "C"]
  array2 = array2.concat(removed);
  console.log("1:", array1, array2);

  // 2: "A B C D E"
  const arrayA = ["A", "B", "C", "D", "E"];
  console.log("2:", arrayA.join(" "));

  // 3: 数値の昇順（比較関数に (a, b) => a - b）
  const arrayB = [23, 3, 2, 10, 1, 30];
  arrayB.sort((a, b) => a - b);
  console.log("3:", arrayB);

  // 4: 25 の位置より後ろを 0 で埋める
  const arrayC = [1, 12, 25, 7, 32, 10, 5, 430];
  const pos = arrayC.indexOf(25);
  if (pos !== -1) {
    arrayC.fill(0, pos + 1);
  }
  console.log("4:", arrayC);`}/>
</Solution>
</Exercise>

<Exercise title="演習5-発展1（ソートとフィルター）">
次の items の要素を、価格 price の安い順にソートせよ。さらに、type が "飲料" の要素だけを取り出し、その平均価格を出力せよ。

```js
const items = [
  { type: "飲料", name: "お茶", price: 124 },
  { type: "食料", name: "パン", price: 138 },
  { type: "飲料", name: "水", price: 88 },
  { type: "食料", name: "菓子", price: 98 },
  { type: "飲料", name: "コーヒー", price: 110 },
];
```

<Solution>
<CodePreview initialJS={`const items = [
  { type: "飲料", name: "お茶", price: 124 },
  { type: "食料", name: "パン", price: 138 },
  { type: "飲料", name: "水", price: 88 },
  { type: "食料", name: "菓子", price: 98 },
  { type: "飲料", name: "コーヒー", price: 110 },
];

  // 価格の昇順にソート
  items.sort((a, b) => a.price - b.price);
  console.log("sorted:", items);

  // 飲料だけ取り出し、平均価格
  const drinks = items.filter(it => it.type === "飲料");
  let sum = 0;
  drinks.forEach(it => sum += it.price);
  const avg = drinks.length > 0 ? sum / drinks.length : 0;
  console.log("drinks avg:", avg);`}/>
</Solution>
</Exercise>

<Exercise title="演習5-発展2（検索）">
配列から、価格が 100 以上の最初の飲料を検索し、そのインデックスと要素を出力せよ（ヒント: find / findIndex）。

<Solution>
<CodePreview initialJS={`const items = [
  { type: "飲料", name: "お茶", price: 124 },
  { type: "食料", name: "パン", price: 138 },
  { type: "飲料", name: "水", price: 88 },
  { type: "食料", name: "菓子", price: 98 },
  { type: "飲料", name: "コーヒー", price: 110 },
];
  const idx = items.findIndex(it => it.type === "飲料" && it.price >= 100);
  const found = idx !== -1 ? items[idx] : null;
  console.log(idx, found);`}/>
</Solution>
</Exercise>
