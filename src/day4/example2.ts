import { isConstructorDeclaration } from "typescript";

function printLabelProt(labeledObj: { label: string }) {
  console.log(labeledObj.label);
}
const  printLabel = (labeledObj: { label: string }):void => {
  console.log(labeledObj.label);
}
printLabel({label: 'aaa'});

//これはダメ
//printLabel({prop1: 'aaa'});

const printStr = (str: string):void => {
  console.log(str);
}
printStr('a');

let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);

//これはダメ
//printLabel({ size: 10, label: "Size 10 Object" });

interface LabeledValue {
  label: string;
}
function printLabel3(labeledObj: LabeledValue) {
  console.log(labeledObj.label);
}
let myObj3 = { size: 10, label: "Size 10 Object" };
printLabel(myObj3);

/* オプショナル 
  定義されてなくても良い
  アクセスする際は実行時エラーを防ぐため、存在するかチェックを推奨
*/
interface SquareConfig {
  color?: string;
  width?: number;
}

const createSquare = (config: SquareConfig): { color: string; area: number }  => {
  let newSquare = { color: "white", area: 100 };
  if (config.color) {
    newSquare.color = config.color;
  }
  if (config.width) {
    newSquare.area = config.width * config.width;
  }
  return newSquare;
}

let mySquare = createSquare({ color: "black" });

/* Readonly 
  指定された要素は書き換えできない
*/

const abc: {prop1: string} = {prop1: ("2")};
abc.prop1 = '1234';

interface Point {
  readonly x:number;
  readonly y:number;
}
const point: Point = {x:1,y:2}
//point.x = 2;

const arrayA: number[] = [];
arrayA.push(1);

const arrayB: ReadonlyArray<number> = [];
//これはarrayBを変更するのでできない
//arrayB.push(1);

//こればarrayBを変更しないからできる
arrayB.concat(2);