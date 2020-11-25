(() => {

  interface Foo {
    name: string
    id_str: string
  }
  interface Bar {
    name: string
    id: number
  }

  const getId = (param: Foo | Bar ) => {
    if( param.hasOwnProperty('id_str')) {
      return (param as Foo).id_str
//      return param['id_str'];
    }
    return (param as Bar).id.toString()
//    return param['id'].toString();
  }

  console.log(getId({name: 'aaa', id_str: 'id'}))
  console.log(getId({name: 'aaa', id: 1}))

  const wrapInArray = (obj: string | string[]): string[] => {
    if (typeof obj === "string") {
      return [obj];
  //          ^ = (parameter) obj: string
    } else {
      return obj;
    }
  }

})()