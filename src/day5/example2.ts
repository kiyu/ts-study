(()=>{

  //関数の引数と返り値を定義できる
  interface SearchFunc {
    (source: string, subString: string): boolean;
  }

  let mySearch: SearchFunc;
  mySearch = (source: string, subString: string) => {
    let result = source.search(subString);
    return result > -1;
  }

  //引数の数が足りないのはOK
  let mySearch2: SearchFunc;
  mySearch2 = (source: string) => {
    let result = source.search('a');
    return result > -1;
  }
  
  /* 引数の型が違うのはNG
  let mySearch3: SearchFunc;
  mySearch3 = (source: number) => {
    return true;
  }
  */


  interface Animal {
    name: string;
  }

  interface Dog extends Animal {
    breed: string;
  }

  //数値型のインデックスはJSで文字列扱いになるので、文字列の方のサブセットでなければならない
  interface Okay {
    [x: string]: Animal;
    [x: number]: Dog;
  }
  /*
  interface NotOkay {
    [x: number]: Animal;
    [x: string]: Dog;
  }
  */

  /*
  interface NumberDictionary {
    [index: string]: number;
    length: number; // ok, length is a number
    name: string; // error, the type of 'name' is not a subtype of the indexer
  }
  */
  interface NumberOrStringDictionary {
    [index: string]: number | string;
    length: number; // ok, length is a number
    name: string; // ok, name is a string
  }

  interface ReadonlyStringArray {
    readonly [index: number]: string;
  }
  let myArray: ReadonlyStringArray = ["Alice", "Bob"];
//  myArray[2] = "Mallory"; // error!

  let myArray2: string[] = ['1', '2'];
  myArray2[2] = '3'

})
