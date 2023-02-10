(() => {
  class Person {
    name: string;
    age: number;
    gender: string;
    constructor(
      name: string = "jack",
      age: number = 18,
      gender: string = "Male"
    ) {
      this.name = name;
      this.age = age;
      this.gender = gender;
    }
    sayHi(str: string) {
      console.log(`My name is ${this.name}, ${str}`);
    }
  }

  class Student extends Person {
    constructor(name: string, age: number, gender: string) {
      // 调用父类中的constructor，使用的是super。
      super(name, age, gender);
    }
    // 调用父类的方法
    sayHi() {
      console.log("student sayHi function");
      super.sayHi("haha");
    }
  }

  // 实例化 Person
  const person = new Person();
  person.sayHi("xixi");

  // 实例化 Student
  const stu = new Student("Tiina", 12, "female");
  stu.sayHi();
})();
