(()=>{
  interface SquareConfig {
    color?: string;
    width?: number;
  }

  let createSquare = (config: SquareConfig): { color: string; area: number } => {
    return {
      color: config.color || "red",
      area: config.width ? config.width * config.width : 20,
    };
  }

  let mySquare = createSquare({});

  //オブジェクトリテラルはエラー
  //let mySquare2 = createSquare({ colour: "red", width: 100 });

  //オブジェクトはエラーにならない
  const param = { colour: "red", width: 100 }
  let mySquare3 = createSquare(param);

  //オブジェクトでもインターフェース未定義のプロパティのみはエラー
  const param2 = { colour: "red" }
  //let mySquare4 = createSquare(param2);

})