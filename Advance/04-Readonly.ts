// readonly 修饰符，对类中的属性成员进行修饰，稀释后，该属性成员，就不能在外边随意修改了。
(() => {
  class Person {
    readonly name: string = "Big Joe";
    constructor(name: string) {
      // 构造函数中，可以对readonly修饰成员的属性进行修改。
      this.name = name;
    }
    sayHi() {
      console.log("Hello ", this.name);
      // 类中也无法readonly修饰成员的属性修改。
      // this.name = "Joe";
    }
  }
  const p1: Person = new Person("Luis");
  console.log(p1);
  console.log(p1.name);
  // p1.name = "Joe";
  console.log(p1.name);
  console.log("----------------------------------------------------");

  class Student {
    // 构造函数
    // 构造函数中的 name 参数，一旦使用 readonly 进行修饰后，那么该 name 参数可以叫参数属性。
    // 构造函数中的 name 参数，一旦使用 readonly 进行修饰后，那么 Student 中就有一个 name 属性成员。
    // 构造函数中的 name 参数，一旦使用 readonly 进行修饰后，那么外部也是无法修改类中的 name 属性成员。
    // 构造函数中的 name 参数，一旦使用 public 进行修饰后，那么 Student 中就有一个公共的 name 属性成员。
    // 构造函数中的 name 参数，一旦使用 private 进行修饰后，那么 Student 中就有一个私有的 name 属性成员。
    // 构造函数中的 name 参数，一旦使用 protected 进行修饰后，那么 Student 中就有一个受保护的 name 属性成员，只能在本类和子类中访问及使用，外部无法访问及使用。
    constructor(readonly name: string = "Jack") {
      this.name = name;
    }
  }
  const s1: Student = new Student("Little Jack");
  // s1.name = "haha";
  console.log(s1);
  console.log(s1.name);
})();
