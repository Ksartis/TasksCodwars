function makeUser(name, age) {
    return {
      [name]: name,
      [age]: age
      // ...другие свойства
    };
  }
  
  let user = makeUser("John", 30);
  console.log(user); // John