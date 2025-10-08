---
sidebar_position: 4
title: 関数入門
---

import Exercise, { Solution } from '@kodai-yamamoto-siw/exercise/client';
import { CodePreview } from '@kodai-yamamoto-siw/code-preview';

# 関数 (function)

## 関数とは？
複数の処理をまとまりにして名前を付け、必要なときに呼び出して再利用できる「部品」です。

| 用語 | 説明 |
| :-: | :-: |
| 関数 | 処理のまとまり（再利用できる） |

### 関数の作り方（関数宣言）
```js
function 関数名() {
    // 処理
}

// 呼び出し
関数名();
```

<CodePreview initialJS={`function sayHello() {
    console.log("こんにちは"); // 出力: こんにちは
    console.log("(Hello)"); // 出力: (Hello)
}

sayHello();`}/>

<Exercise title="演習1">
自分の名前、好きなこと、出身地を 1 行ずつ出力する関数 `shokai` を作り、呼び出して出力を確認せよ。

<Solution>
<CodePreview initialJS={`function shokai() {
    console.log("名前: ヤマダ"); // 出力: 名前: ヤマダ
    console.log("好き: ゲーム"); // 出力: 好き: ゲーム
    console.log("出身: 東京"); // 出力: 出身: 東京
}
shokai();`}/>
</Solution>

</Exercise>

<Exercise title="演習2">
以下の星形のパターンを出力する関数 `showStars` を作り、呼び出して結果を確認せよ。

出力イメージ（上から順に）:
```
★
★★
★★★
```

<Solution>
<CodePreview initialJS={`function showStars() {
    console.log("★"); // 出力: ★
    console.log("★★"); // 出力: ★★
    console.log("★★★"); // 出力: ★★★
}
showStars();`}/>
</Solution>

</Exercise>

---

## 引数ありの関数
関数に値（引数）を渡して、動作を変えることができます。

### 作り方（引数 1 つ）
```js
function 関数名(引数名) {
    // 引数名 を使った処理
}
```

<CodePreview initialJS={`function aisatu(namae) {
    console.log(namae + "さんこんにちは");
}

aisatu("山本"); // 出力: 山本さんこんにちは
aisatu("佐藤"); // 出力: 佐藤さんこんにちは`}/>

---

<Exercise title="演習3-1">
次の関数を、2回呼び出せ。（それぞれ違う天気を引数に入れて呼び出すこと）
```js
function weatherReport(weather) {
    console.log("今日の天気は " + weather + " です。");
}
```

<Solution>
<CodePreview initialJS={`function weatherReport(weather) {
    console.log("今日の天気は " + weather + " です。");
}
weatherReport("晴れ"); // 出力: 今日の天気は 晴れ です。
weatherReport("雨"); // 出力: 今日の天気は 雨 です。`}/>
</Solution>

</Exercise>

<Exercise title="演習3-2">
次の手順で実装と呼び出しを行い、出力を確認せよ。

1. 好きなものを引数に取り、次の形式で出力する関数 `like` を作る。
   - 出力: "私は〇〇が好き"（〇〇 は引数の値）
2. 作成した関数に好きな引数を渡して呼び出して、出力を確認する。

例）like("うどん") → 出力: 私はうどんが好き

<Solution>
<CodePreview initialJS={`function like(item) {
    console.log("私は" + item + "が好き");
}
like("うどん"); // 出力: 私はうどんが好き`}/>
</Solution>

</Exercise>

## console.log は実は関数
実は、console.log は、次のように console.log という名前の関数だと考えることができます（[オブジェクト入門](./object-intro.md) で詳しく扱います）。

```js
// 簡易イメージ
function console.log(msg) {
    // msg を
    // コンソールに出すという
    // 処理が
    // ここに
    // 長々と
    // 書いてある
}

console.log("あああ");
```

---

<Exercise title="演習4-1（得点の出力）">
reportScore(score) を作り、次の引数で呼び出して期待どおり出力されることを確認せよ。

- 動作: "〇点です" を出力し、score が 80 以上なら追加で "よくできました！" を出力する。
- 呼び出しと期待出力:
  - reportScore(80) → 出力: 80点です
    よくできました！
  - reportScore(75) → 出力: 75点です
  - reportScore(90) → 出力: 90点です
    よくできました！

<Solution>
<CodePreview initialJS={`function reportScore(score) {
    console.log(score + "点です");
    if (score >= 80) {
        console.log("よくできました！");
    }
}
reportScore(80); // 出力: 80点です, よくできました！
reportScore(75); // 出力: 75点です
reportScore(90); // 出力: 90点です, よくできました！`}/>
</Solution>

</Exercise>

<Exercise title="演習4-2（判定の出力）">
judge(score) を作り、次の引数で呼び出して期待どおり出力されることを確認せよ。

- 動作: score が 90 未満なら "頑張ったね"、そうでなければ "すごい！" を出力する。
- 呼び出しと期待出力:
  - judge(90) → 出力: すごい！
  - judge(100) → 出力: すごい！
  - judge(60) → 出力: 頑張ったね

<Solution>
<CodePreview initialJS={`function judge(score) {
    if (score < 90) {
        console.log("頑張ったね");
    } else {
        console.log("すごい！");
    }
}
judge(90); // 出力: すごい！
judge(100); // 出力: すごい！
judge(60); // 出力: 頑張ったね`}/>
</Solution>

</Exercise>

---

<Exercise title="演習5（連続出力）">
1 から n までの整数を順にコンソールへ出力する関数 `outSeq(n)` を作り、`outSeq(5)` を呼び出して出力を確認せよ。

期待される出力（上から順に1行ずつ）:
```
1
2
3
4
5
```

<Solution>
<CodePreview initialJS={`function outSeq(n) {
    for (let i = 1; i <= n; i++) {
        console.log(i);
    }
}
outSeq(5); // 出力: 1 2 3 4 5 (各行に1つずつ)
`}/>
</Solution>

</Exercise>

---

<Exercise title="演習5-発展1（合計）">
1 から n までの和を計算して出力する関数 `outSum(n)` を作り、`outSum(10)` を呼び出して出力を確認せよ。

期待される出力:
```
55
```

<Solution>
<CodePreview initialJS={`function outSum(n) {
    let goukei = 0;
    for (let i = 1; i <= n; i++) {
        goukei += i;
    }
    console.log(goukei);
}
outSum(10); // 出力: 55`}/>
</Solution>

</Exercise>

<Exercise title="演習5-発展2（星の出力）">
行数 n を受け取り、1 行目に★を1つ、2 行目に★を2つ…と増やして n 行出力する `outStars(n)` を作り、`outStars(3)` を呼び出して出力を確認せよ。

期待される出力（上から順に）:
```
★
★★
★★★
```

<Solution>
<CodePreview initialJS={`function outStars(n) {
    for (let i = 1; i <= n; i++) {
        let line = "";
        for (let j = 1; j <= i; j++) {
            line += "★";
        }
        console.log(line);
    }
}
outStars(3); // 出力: ★, ★★, ★★★ (各行に1つずつ表示)`}/>
</Solution>

</Exercise>

<Exercise title="演習5-発展3（FizzBuzz）">
1 から n までの各整数について、次のルールのどれか「一つ」を行ごとに出力する `fizzbuzz(n)` を作り、`fizzbuzz(15)` を呼び出して出力を確認せよ。

ルール（優先順位）:
- 3 と 5 の両方の倍数のときは "FizzBuzz" を出力する（数は出力しない）。
- 3 の倍数のときは "Fizz" を出力する（数は出力しない）。
- 5 の倍数のときは "Buzz" を出力する（数は出力しない）。
- それ以外はその自然数を出力する。

期待される出力（上から順に）:
```
1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz
```

<Solution>
<CodePreview initialJS={`function fizzbuzz(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 15 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}
fizzbuzz(15); // 出力: 1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz`}/>
</Solution>

</Exercise>
