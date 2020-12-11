(()=>{

  type StringArray = Array<string>;
  type NumberArray = Array<number>;
  type ObjectWithNameArray = Array<{name: string}>

  const array: StringArray = ['1','2']
  const array2: NumberArray = [1,2]
  const array3: ObjectWithNameArray = [{ name: ''}]


  //Tは何でも良い、型の引数
  interface GenericType<T> {
    id: T
  }

  const value: GenericType<number> = {
    id: 1
  }
  const value2: GenericType<string> = {
    id: '1'
  }

  type MyArray<T> = T[];
  const myArray1: MyArray<number> = [1,2]
  const myArray2: MyArray<string> = ['1','2']


  const sort = <T>(params: Array<T>): Array<T> => {
    return params.sort();
  }

  sort<number>([1,2,3])
  sort<string>(['1','2','3'])
  //型を指定しないとeny扱いとなって、何でも良い
  sort(['1',2,3])
})