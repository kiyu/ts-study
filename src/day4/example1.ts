const apiFetch = (): Promise<void> => {
  return Promise.resolve();
}

apiFetch()
  .then(() => {
  
  })
  .catch((err): never => {
    if (err.status == 404) {
      throw new Error('not found'); 
    }

    throw new Error('internal server error');
  })

const create = (o: object | null ) => {};

let someValue: unknown = 1;
let strLength = (someValue as string).length;
let strLength2 = (<string>someValue).length;