(()=>{
  interface Point {
    x: number;
    y: number;
  }
  
  function printPoint(p: Point) {
    console.log(`${p.x}, ${p.y}`);
  }
  
  // prints "12, 26"
  const point = { x: 12, y: 26 };
  printPoint(point);

  const point3 = { x: 12, y: 26, z: 89 };
  printPoint(point3); // prints "12, 26"

  //直接はだめ
  //printPoint({x: 12, y:11 , z:1});
  printPoint({x: 12, y:11});
})