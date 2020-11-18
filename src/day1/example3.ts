(() => {

  interface User {
    name: string;
    id: number;
  }

  class UserClass {
    constructor(public name: string, public id: number){
    }
  }

  const getUser = (name: string): User => {
    return {
      name,
      id: Math.floor(Math.random() * 100000)
    }
  }

  const user1 = getUser('name');

  const user: User = new UserClass('name',1)
  console.log(user);

})();