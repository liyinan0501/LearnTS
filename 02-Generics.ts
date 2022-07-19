//Todo 1. 泛型 Generics
// 让函数接收什么类型，只能返回对应类型。
// 当定义函数类型时，类型不确定就可以用泛型。

// 1.基本用法：
// 定义泛型：字段Type可以自定义
function fn<Type>(value: Type): Type {
  console.log(value)
  return value
}
// 使用泛型：
fn<number>(123) // 123
fn(456) // 456 <>可省略

// 2.简化用法
// ts自己推断处理了 <>可省略
let res = fn(123) //123
let res1 = fn('abc') //abc
// 如果推断不出来需要用<>声明类型

//Todo 2. 泛型添加约束 Generics Constraint
// 目的是收缩泛型的取值范围
interface ILength {
  length: number
}
// 传到函数里的值，必须有length属性。
function fn1<Type extends ILength>(value: Type): Type {
  console.log(value.length)
  return value
}
fn1('abc') // 3
fn1([1, 2, 3]) // 3
// fn1(123) 会报错

// 泛型约束多用于操作DOM
function setElement<Type extends HTMLElement>(element: Type): Type {
  // 传到函数里的值，必须有innerHTML属性等。
  console.log(element.innerHTML)
  return element
}
// 因为 ts 文件没有 document，以下两行代码会报错，所以注释掉。
// const a = document.createElement('a')
// setElement(a) // 传<a>元素

//Todo 3. 多个泛型 Multiple Generics
// keyof 可以获取到一个类型接口的所有的key的联合类型
// keyof 从 {name:'zs', age:18} 可以得到 'name' | 'age'
// key 的取值来源只能是 Type 类型中所有的 key
function getProperty<Type extends Object, Key extends keyof Type>(
  obj: Type,
  key: Key
) {
  console.log(obj[key])
  return obj[key]
}
const user3 = {
  name: 'zs',
  age: 15,
}
getProperty(user3, 'age') // 15

//Todo 4. 泛型接口 Generics Interface
// 封装接口的时候，有一些类型无法写死，需要用泛型接口。
interface IArray<Type> {
  length: number
  push?(n: Type): void
  pop?(): Type
  reverse?(): Type[]
}
const arr: IArray<number> = {
  length: 10,
  push(n) {
    console.log(n)
  },
  pop() {
    return 100
  },
  reverse() {
    return [1, 2, 3]
  },
}
arr.push?.(123) // 123

const arr2: IArray<string> = {
  length: 0,
}
arr2.push?.('A String')
arr2.pop?.()
