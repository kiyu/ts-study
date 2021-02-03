import { isIndexedAccessTypeNode } from "typescript";
(() => {

  /* Boolean */

  let isDone: boolean = true;

  //Null と undefined は一応通る
//  isDone = null
//  isDone = undefined

  //それ以外はNG
  //isDone = 123


  /* Number */

  //10進数
  let decimal: number = 6;
  //16進数
  let hex:number = 0xf00d;
  //バイナリ
  let binary: number = 0b1010;
  //8進数
  let octal: number = 0o744;
  //bigint 設定変えないとダメ
  //let big: bigint = 100n;

  //10進数に16進数いれても同じnumberなのでよし
  decimal = 0xf00d;


  /* String */

  let color: string = "blue";
  color = 'red';

  let fullName: string = `Bob Bobbington`;

  let age: number = 37;
  let sentence: string = `Hello, my name is ${fullName}.`


  /* Array */
  let list: number[] = [];
  list = [1,2,3];

  //違う型を混ぜることはできない
  //list = [1,2,3,'4'];

  //Array<T>としてgenericになっている
  let list2: Array<number> = [1, 2, 3];
  let list3: Array<string> = ['1', '2', '3'];


  /* Tuple */

  //固定長の配列
  //配列のインデックスごとに型を定義
  //３〜以上の長さになるのなら、オブジェクト定義した方が良い

  let keyValue: [string, number] = ['key',2];
  keyValue[0].replace('','');
  
  //NumberにreplaceがないからNG
  //keyValue[1].replace('','');
  //長さが決まっているからNG
  //keyValue[2] = 1; 


  /* Enum */

  enum TrafficColor {
    Red = 0,
    Yellow,
    Blue
  }
  
  const currentColor = TrafficColor.Red

  const someFnc = (color: TrafficColor) => {
    if(color === TrafficColor.Red) {
      return 'stop';
    }
    if(color === TrafficColor.Blue) {
      return 'go';
    }
    return 'attention';
  }


  /* Unknown Any */

  let un: unknown
  let an: any

  //型がないのでプロパティはない
  //un.someProp = 1
  //型がなんでも良いからプロパティはある
  an.someProp = 1


  /* Void */

  //関数の返り値がない場合に使う
  function warnUser(): void {
    console.log("This is my warning message");
  }


  /* Null Undefined */
  let u: undefined = undefined;
  let n: null = null;

//  u = null;
//  n = undefined;
  
})();
