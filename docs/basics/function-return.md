---
title: 関数（戻り値）
---

import Exercise, { Solution } from '@kodai-yamamoto-siw/exercise/client';
import { CodePreview } from '@kodai-yamamoto-siw/code-preview';

# 関数（戻り値）

## 戻り値とは？
関数を呼び出した位置（式の中）を、`return` で指定した値に「置き換える」しくみ。その値を **戻り値** という。

| 用語 | 説明 |
| :-: | :-: |
| 戻り値 | 関数が呼び出し元へ返す 1 つの値 |

### 基本構文
```js
function 関数名(引数) {
    // 処理
    return 戻したい値; // ここで関数は終了し、呼び出し元に値が戻る
}

let x = 関数名(引数に渡す値); // ← ここが return の値に置き換わる
```

### 例
<CodePreview initialJS={`function add1(x) {
    let kotae = x + 1;
    return kotae; // x+1 の結果を呼び出し側へ返す
}

let onePlus3 = add1(3); // add1(3) が 4 に置き換わる
console.log(onePlus3); // 出力: 4
`}/>

:::info
return が実行されると、その時点で関数の処理は終了し、その後の行は実行されない。
:::

---

## 複数回の同じ処理を「再利用」できる
戻り値を使うことで、計算して結果だけを必要な場所で利用できる。

<CodePreview initialJS={`function add1(x) {
    let kotae = x + 1;
    return kotae;
}

console.log(add1(10)); // 出力: 11
console.log(add1(99)); // 出力: 100
`}/>

---

## `return` の動きのイメージ
`return` の瞬間に「関数呼び出し式」全体がその値に置き換わる、というイメージを持つ。

```
(1) 関数呼び出し式  add1(3)
(2) 関数内部で計算  3 + 1 → 4
(3) return result; で 4 を返す
(4) 呼び出し式全体が 4 に置き換わる
```

---

<Exercise title="演習1（2 乗を返す関数）">
整数 n を受け取り、その 2 乗（n × n）を戻り値として返す関数 `square(n)` を作り、`square(4)` と `square(5)` を呼び出して結果を出力せよ。

期待される出力（上から順に）:
```
16
25
```

<Solution>
<CodePreview initialJS={`function square(n) {
    let kotae = n * n;
    return kotae;
}
console.log(square(4)); // 出力: 16
console.log(square(5)); // 出力: 25`}/>
</Solution>

</Exercise>

<Exercise title="演習1-発展（合計を返す）">
1 から n までの和を計算し、その値を戻り値として返す関数 `sum(n)` を作り、`sum(10)` の戻り値を出力せよ。

期待される出力:
```
55
```

<Solution>
<CodePreview initialJS={`function sum(n) {
    let goukei = 0;
    for (let i = 1; i <= n; i++) {
        goukei += i;
    }
    return goukei;
}
console.log(sum(10)); // 出力: 55`}/>
</Solution>

</Exercise>

## 引数が複数ある関数
引数はコンマで区切って複数渡せる（戻り値は常に 1 つだけ）。

<CodePreview initialJS={`// kazu1 + kazu2 を返す関数
function add(kazu1, kazu2) {
    return kazu1 + kazu2;
}

console.log(add(4, 9)); // 出力: 13
`}/>

### スコープ（有効範囲）
引数（仮引数）や関数内で `let` 宣言した変数は、その関数の中でしか使えない。

<CodePreview initialJS={`function add(kazu1, kazu2) {
    let kari = kazu1 + kazu2;
    return kari;
}
console.log(add(2, 3)); // 出力: 5
// console.log(kari); // ここでは kari は存在しない（コメント解除するとエラー）
// console.log(kazu1); // kazu1 や kazu2 も存在しない
`}/>

---

## 代表的な「戻り値がある」関数の例
`prompt` などは入力値を戻り値として返す関数。
ここではイメージだけ。

```js
function prompt(msg) {
    // 1. msg を表示するダイアログを出す処理
    // 2. ユーザーが入力した文字列を取得する処理
    return ユーザーが入力した文字列; // これが呼び出し元へ戻る
}

let userName = prompt("あなたの名前を教えてください");
console.log(userName); // 出力: (ユーザーが入力した文字列)
```

---

<Exercise title="演習2（最小値）">
2 つの数のうち小さい方を戻り値とする関数 `min(a, b)` を作れ。  
`min(5, 9)` と `min(8, 4)` を呼び出して結果をそれぞれ出力せよ。

期待される出力（上から順に）:
```
5
4
```

<Solution>
<CodePreview initialJS={`function min(kazu1, kazu2) {
    if (kazu1 < kazu2) {
        return kazu1;
    } else {
        return kazu2;
    }
}
console.log(min(5, 9)); // 出力: 5
console.log(min(8, 4)); // 出力: 4`}/>
</Solution>

</Exercise>

<Exercise title="演習2-発展1（偶奇判定の文字列）">
整数 n を受け取り、偶数なら "偶数"、奇数なら "奇数" という文字列を戻り値として返す `parity(n)` を作り、`parity(10)` と `parity(7)` の結果を出力せよ。

期待される出力（上から順に）:
```
偶数
奇数
```

<Solution>
<CodePreview initialJS={`function parity(n) {
    if (n % 2 === 0) {
        return "偶数";
    }
    return "奇数";
}
console.log(parity(10)); // 出力: 偶数
console.log(parity(7)); // 出力: 奇数`}/>
</Solution>

</Exercise>

<Exercise title="演習2-発展2（最大値）">
3 つの整数 a, b, c の最大値を戻り値として返す関数 `max3(a, b, c)` を作り、`max3(3, 8, 5)` を呼び出して結果を出力せよ。

期待される出力:
```
8
```

<Solution>
<CodePreview initialJS={`function max3(kazu1, kazu2, kazu3) {
    let saidaichi = kazu1;
    if (kazu2 > saidaichi) {
        saidaichi = kazu2;
    }
    if (kazu3 > saidaichi) {
        saidaichi = kazu3;
    }
    return saidaichi;
}
console.log(max3(3, 8, 5)); // 出力: 8`}/>
</Solution>

</Exercise>

<Exercise title="演習2-発展3（FizzBuzz の 1 行判定）">
整数 n を受け取り、次のルールに従って 1 つの文字列を戻り値として返す関数 `fizzbuzz(n)` を作れ。
- 3 と 5 の両方の倍数: "FizzBuzz"
- 3 の倍数: "Fizz"
- 5 の倍数: "Buzz"
- それ以外: その数の文字列（例: 7 → "7"）

作成した関数を使って、次の入力で結果を確認せよ: `1, 3, 5, 15, 16`。

期待される出力（上から順に）:
```
1
Fizz
Buzz
FizzBuzz
16
```

<Solution>
<CodePreview initialJS={`function fizzbuzz(n) {
    if (n % 15 === 0) {
        return "FizzBuzz";
    } else if (n % 3 === 0) {
        return "Fizz";
    } else if (n % 5 === 0) {
        return "Buzz";
    }
    return "" + n; // 数字を文字列化
}

console.log(fizzbuzz(1)); // 出力: 1
console.log(fizzbuzz(3)); // 出力: Fizz
console.log(fizzbuzz(5)); // 出力: Buzz
console.log(fizzbuzz(15)); // 出力: FizzBuzz
console.log(fizzbuzz(16)); // 出力: 16`}/>
</Solution>

</Exercise>

---
