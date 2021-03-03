/*

# Literal types

--------

A literal is a more concrete sub-type of a collective type
- リテラルは集合型(collective type)の具体的なサブタイプです。

What this means is that "Hello World" is a string, but a string is not "Hello World" inside the type system.
- これが意味することは、"Hello World"はストリング型ですが、文字列型は型システム内の"Hello World"ではありません。

There are three sets of literal types available in TypeScript today: strings, numbers, and booleans;
- 現在TypeScriptで使用できるリテラルタイプには、文字列、数値、ブール値の3つのセットがあります。

by using literal types you can allow an exact value which a string, number, or boolean must have.
- リテラル型を使用することにより、文字列、数値、またはブール値が持つ必要のある正確な値を許可できます。

*/

/* Literal Narrowing 

When you declare a variable via var or let, you are telling the compiler that there is the chance that this variable will change its contents.
- varまたはletを介して変数を宣言すると、この変数がその内容を変更する可能性があることをコンパイラーに通知します。

In contrast, using const to declare a variable will inform TypeScript that this object will never change.
対照的に、constを使用して変数を宣言すると、このオブジェクトは決して変更されないことがTypeScriptに通知されます。
*/
(()=>{
// We're making a guarantee that this variable
// - 値を保証する
// helloWorld will never change, by using const.
// - constを使用しても、helloWorldは変更されません。

// So, TypeScript sets the type to be "Hello World", not string
// - したがって、TypeScriptは、タイプを文字列ではなく「HelloWorld型」に設定します。
const helloWorld = "Hello World";

//NG 
//helloWorld = "aaaa";

const sumfunc = (prop:'Hello World') => {}
//sumfunc(helloWorld)

// On the other hand, a let can change, and so the compiler declares it a string
// - 一方、letは変更される可能性があるため、コンパイラはそれを文字列として宣言します
let hiWorld = "Hi World";

//OK
hiWorld = 'aaaa';
//NG
//hiWorld = 1111;

/*
The process of going from an infinite number of potential cases (there are an infinite number of possible string values) to a smaller, finite number of potential case (in helloWorld’s case: 1) is called narrowing.
- 無数の潜在的なケース（無数の可能な文字列値があります）から、より小さく、有限の数の潜在的なケース（helloWorldの場合：1）に移行するプロセスは、ナローイングと呼ばれます。
*/


/* String Literal Types 

In practice string literal types combine nicely with union types, type guards, and type aliases.
- 実際には、文字列リテラル型は、[union types]、[type guards]、および型エイリアスとうまく組み合わされます。

You can use these features together to get enum-like behavior with strings.
- これらの機能を一緒に使用して、文字列で列挙型のような動作を得ることができます。
*/

  type Easing = "ease-in" | "ease-out" | "ease-in-out";

  class UIElement {
    animate(dx: number, dy: number, easing: Easing) {
      if (easing === "ease-in") {
        // ...
      } else if (easing === "ease-out") {
      } else if (easing === "ease-in-out") {
      } else {
        // It's possible that someone could reach this
        // by ignoring your types though.
        // - あなたのタイプを無視することによって、誰かがこれに到達する可能性があります
      }
    }
  }

  let button = new UIElement();
  button.animate(0, 0, "ease-in");
//  button.animate(0, 0, "uneasy");

//型が一致しないのでNG
//let easing = "ease-in";
//button.animate(0, 0, easing);

  //Argument of type '"uneasy"' is not assignable to parameter of type 'Easing'.
  // - タイプ '"uneasy"'の引数は、タイプ 'Easing'のパラメーターに割り当てることができません。

  /*
  You can pass any of the three allowed strings, but any other string will give the error
  - 許可されている3つの文字列のいずれかを渡すことができますが、他の文字列はエラーになります
  Argument of type '"uneasy"' is not assignable to parameter of type '"ease-in" | "ease-out" | "ease-in-out"'
  - タイプ '"uneasy"'の引数はタイプ '"ease-in"のパラメータに割り当てることができません| 「イーズアウト」| 「イーズインアウト」」
   */

  /*
  String literal types can be used in the same way to distinguish overloads:
  - 文字列リテラルタイプは、オーバーロードを区別するために同じ方法で使用できます。
  */
 /* 
  function createElement(tagName: "img"): HTMLImageElement;
  function createElement(tagName: "input"): HTMLInputElement;
  // ... more overloads ...
  function createElement(tagName: string): Element {
    // ... code goes here ...
  }
*/
  /*
  Numeric Literal Types

  TypeScript also has numeric literal types, which act the same as the string literals above.
  - TypeScript には、上記の文字列リテラルと同じように機能する数値リテラルタイプもあります。
  */
  function rollDice(): 1 | 2 | 3 | 4 | 5 | 6 {
    return (Math.floor(Math.random() * 6) + 1) as 1 | 2 | 3 | 4 | 5 | 6;
  }
  const result = rollDice();

  /*
  A common case for their use is for describing config values:
  - それらを使用する一般的なケースは、構成値を記述する場合です。
   */
  interface MapConfig {
    lng: number;
    lat: number;
    tileSize: 8 | 16 | 32;
  }
  
  //setupMap({ lng: -73.935242, lat: 40.73061, tileSize: 16 });

  /*
  Boolean Literal Types

  TypeScript also has boolean literal types.
  - TypeScriptにはブールリテラル型もあります。
  You might use these to constrain object values whose properties are interrelated.
  - これらを使用して、プロパティが相互に関連しているオブジェクト値を制約できます。
   */
  interface ValidationSuccess {
    isValid: true;
    reason: null;
  }
  
  interface ValidationFailure {
    isValid: false;
    reason: string;
  }
  
  type ValidationResult = ValidationSuccess | ValidationFailure;
})