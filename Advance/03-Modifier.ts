// 类中的成员都有自己默认的访问修饰符，默认是public, 公共的。
// private, 外部(包含子类)无法访问。
// protected, 外部无法访问，子类可以访问。

(() => {
  class Person {
    private name: string;
    protected age: number;
    public constructor(name: string) {
      this.name = name;
    }
    public eat() {
      console.log("Its delicious", this.name);
    }
  }

  class Student extends Person {
    constructor(name: string) {
      super(name);
    }
    play() {
      console.log("Playing", this.age);
    }
  }

  const p1 = new Person("Joe");
  p1.eat();
  // console.log(p1.name);
})();
