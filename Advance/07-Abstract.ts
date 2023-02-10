// 抽象类：包含抽象方法（抽象方法一般没有任何的具体内容的实现），也可以包含实例方法，抽象类是不能被实例化，为了让子类进行实例化及实现内部的抽象方法。
(() => {
  abstract class Animal {
    abstract name: string;
    // 抽象方法
    abstract eat(): void;
    // 报错，抽象方法不能有具体实现
    // abstract eat() {
    //   console.log("eating");
    // }
    // 实例方法
    sayHi() {
      console.log("Hi");
    }
  }

  class Dog extends Animal {
    name: string = "bb";
    eat() {
      console.log("dog eating");
    }
  }
  const dog: Dog = new Dog();
  dog.eat();
  dog.sayHi();

  // 不能实例化抽象类的对象
  // const ani: Animal = new Animal();
})();

// 总结：抽象类都是为子类服务的。
