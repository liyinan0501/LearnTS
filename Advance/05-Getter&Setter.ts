// 存取器，可以有效的控制对象中的成员访问，通过getters和setters进行操作。
(() => {
  // 外部可以传入姓氏和名字数据，同时使用set和get控制名字数据，外部也可以进行修改操作。
  class Person {
    firstName: string;
    lastName: string;
    constructor(firstName: string, lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
    // 读取器
    get fullName() {
      console.log("getting....");
      return this.firstName + "_" + this.lastName;
    }
    // 设置器
    set fullName(val) {
      console.log("setting....");
      let name = val.split("_");
      this.firstName = name[0];
      this.lastName = name[1];
    }
  }

  const person: Person = new Person("Jack", "Jones");
  console.log(person); // Person { firstName: 'Jack', lastName: 'Jones' }
  // 读取
  console.log(person.fullName); // Jack_Jones
  // 设置
  person.fullName = "Jack_Wils";
  console.log(person.fullName); // Jack_Wils
})();
