// 静态成员：在类中通过 static 修饰的属性或方法，就是静态属性及方法，也称为静态成员。
// 静态成员在使用的时候是通过类名.的语法来调用。
(() => {
  class Person {
    // 静态属性
    static name1: string = "Sisi";
    constructor() {
      // 此时this是实例对象，name是静态属性，不能通过实例对象之间调用静态属性来使用。
      // this.name = name;
    }
    sayHi() {
      console.log("Hello");
    }
  }

  // const person: Person = new Person();
  // 通过实例对象调用属性（实例属性）
  // console.log(person.name);
  // 通过实例对象调用方法（实例方法）
  // person.sayHi();

  // 通过类名.静态属性的方法来访问成员数据
  Person.name1 = "Haha";
  console.log(Person.name1);
})();
