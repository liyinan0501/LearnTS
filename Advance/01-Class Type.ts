interface IFly {
  fly(): void;
}

class Person implements IFly {
  fly() {
    console.log("I can fly");
  }
}

const person = new Person();
person.fly();

interface ISwim {
  swim(): void;
}

// 定义一个类，这个类的类型就是IFly和ISwim（当前这个类可以实现多个接口，一个类同时也可以被多个接口进行约束）
class Person2 implements IFly, ISwim {
  fly() {
    console.log("I can fly2");
  }
  swim() {
    console.log("I can swim2");
  }
}

const person2 = new Person2();
person2.fly();
person2.swim();

// 接口可以继承其他的多个接口
interface IMyFlyAndSwim extends IFly, ISwim {}

class Person3 implements IMyFlyAndSwim {
  fly() {
    console.log("I can fly3");
  }
  swim() {
    console.log("I can swim3");
  }
}

const person3 = new Person3();
person3.fly();
person3.swim();

//总结：interface 和 interface 之间叫继承（extends），class 和 interfa 之间叫实现（implements）。
