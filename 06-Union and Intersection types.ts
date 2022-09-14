//* Union:
// | like OR
type NumStr = number | string

//* Intersection:
// 交叉类型，可以合并多个类型，但是需要注意两个同名不用类冲突的问题。Omit
// 交叉类型适合交叉两个复杂 type 或 interface。

type Person = {
  name: string
  age: number
}

type Demo = {
  gender: string
  //   age: number
  age: string
}

// 用Omit提出Person里面age:number, 只用Demo下age: string类型。
type NewPerson = Omit<Person, 'age'> & Demo
const aPerson: NewPerson = { name: 'Joe', age: '13', gender: 'Male' }
