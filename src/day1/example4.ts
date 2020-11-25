(() => {
  
  /* Composing Types */
  type FishType = 'suzuki' | 'maguro'
  const fish1 : FishType = 'suzuki';
 // const fish2 : FishType = 'aji';


  interface Foo {
    name: string
    id_str: string
  }
  interface Bar {
    name: string
    id: number
  }

  /* Union Types */
  type FooBar = Foo | Bar

  const foobar1: FooBar = { name: 'name', id_str: '1'};
  const foobar2: FooBar = { name: 'name', id: 1};
//  const foobar3: FooBar = { name: 'name'};
})()