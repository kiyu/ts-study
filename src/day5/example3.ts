(()=>{

  //インターフェースはクラスのパブリック側の宣言
  interface ClockInterface {
    currentTime: Date;
  }
  
  class Clock implements ClockInterface {
    currentTime: Date = new Date();
    constructor(h: number, m: number) {}
  }
  //currentTimeがないからだめ
  /*
  class Clock2 implements ClockInterface {
    constructor(h: number, m: number) {}
  }
  */
  //Getterでもよい
  class Clock3 implements ClockInterface {
    constructor(h: number, m: number) {}
    get currentTime() :Date {
      return new Date();
    }
  }

})();