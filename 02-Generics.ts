//* Generics 泛型
// 让函数传什么类型，只能返回什么类型。

// 1.基本用法：
// 定义泛型
function fn<Type>(value: Type): Type {
  console.log(value)
  return value
}
// 使用泛型
fn<number>(123)

// 2.简化用法
// ts自己推断处理了
let res = fn(123)
let res1 = fn('abc')
// 如果推断不出来需要用<>声明类型

// 泛型添加约束：
// 目的是收缩泛型的取值范围
interface ILength {
  length: number
}
function fn1<Type extends ILength>(value: Type): Type {
  console.log(value.length)
  return value
}
fn1('abc')
fn1([1, 2, 3])
// fn1(123) 会报错

// 泛型约束多用于操作DOM
function setElement<Type extends HTMLElement>(element: Type): Type {
  console.log(element.innerHTML)
  return element
}
// const a = document.createElement('a')
// setElement(a) // 传<a>元素

// keyof 可以获取到一个类型接口的所有的key的联合类型
// keyof 从 {name:'zs', age:18} 可以得到 'name' | 'age'
// key 的取值来源只能是 Type 类型中所有的key
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
getProperty(user3, 'age')
