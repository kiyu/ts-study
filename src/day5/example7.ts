(()=>{
  class Control {
    private state: any;
  }
  
  interface SelectableControl extends Control {
    select(): void;
  }
  
  class Button extends Control implements SelectableControl {
    select() {}
  }
  
  class TextBox extends Control {
    select() {}
  }

  /*
  //private state を持ってなくてインターフェースをみたしてないのでエラー
  class ImageControl implements SelectableControl {
    select() {}
  }
  //private state の上書きをしようとしてエラー
  class ImageControl2 extends Control implements SelectableControl {
    private state: any;
    select() {}
  }
  */

  class ImageControl3 extends Control implements SelectableControl {
    select() {}
  }
})()