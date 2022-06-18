// tsc --init
// ts-node 01-comments.ts
//* 原始类型
let num: number = 18
let uname: string = 'zs'
let isDog: boolean = true
let un: undefined = undefined
let nu: null = null

//* 数组类型
//方法1
let list: number[] = [1, 2, 3, 4]
let names: string[] = ['abc', 'bcd']
//方法2
let strings: Array<number> = [100, 200, 300]
let flags: Array<boolean> = [true, false]

//* | 联合类型
let num1: string | number = 18
num1 = 20
num1 = 'abc'

let timer: number | null = null
timer = setInterval(() => {}, 1000)

// 定义一个数组，数组中可以有数字或者字符串。
let arr: (number | string)[] = []

// 如果某一个复杂的类型，使用的次数特别多，可以使用类型别名。(大写字母开头)
type MyArray = (number | string)[]
// const list1: (number | string)[] = [1, 'abc', 2]
// const list2: (number | string)[] = ['abc', 'abc', 2]
const list1: MyArray = [1, 'abc', 2]
const list2: MyArray = ['abc', 'abc', 2]

//* 函数
// 方法1
// function 函数名(参数1：参数1类型，参数2：参数2类型)：返回值类型 {return}
function add(num1: number, num2: number): number {
  return num1 + num2
}
const add1 = (num1: string, num2: string): string => {
  return num1 + num2
}
// 方法2
type Fn = (n1: number, n2: number) => number //定义类型
const add2: Fn = (n1, n2) => {
  return n1 + n2
}
const sub: Fn = (p1, p2) => {
  return p1 - p2
}

//* void 无返回值函数
function sayHi(name: string): void {
  console.log('Hello', name)
}
sayHi('Jack')

//* 可选参数
// slice (begin, end)
// slice ()
// slice (begin)
// slice (begin, end)
// 通过？就可以指定可选参数
function slice(begin?: number, end?: number): void {
  console.log(begin)
  console.log(end)
}

function slice1(begin: number = 0, end: number = 0): void {
  console.log(begin)
  console.log(end)
}
slice1() //0
slice1(100) //100
slice1(100, 200) //100 200

function getMax(n1: number, n2: number, n3: number): void {
  const m = n1 > n2 ? n1 : n2
  console.log(m > n3 ? m : n3)
  // Math.max()
}

//* 对象
// 在ts中提供了新的语法：接口
// 接口就是专门用于提供对象的类型
// interface 接口给名字
// 方法1：-用接口 I开头
interface IUser {
  name: string
  age: number
  gender: boolean
  sayHi(): void
  // add(n1: number, n2: number): number
  add: (n1: number, n2: number) => number
}
const user: IUser = {
  name: 'zs',
  age: 18,
  gender: true,
  sayHi() {
    console.log('Hello!')
  },
  add: (n1, n2) => {
    return n1 + n2
  },
}
console.log(user.add(3, 2)) //5
// interface 继承
interface IPoint2D {
  x: number
  y: number
}
interface IPoint3D extends IPoint2D {
  z: number
}
const point: IPoint2D = {
  x: 100,
  y: 100,
}
const point2: IPoint3D = {
  x: 100,
  y: 100,
  z: 100,
}

//方法2
const user1: {
  name: string
  age: number
} = { name: 'zs', age: 18 }

// 老师类型
// 名字 string
// 年龄 age
// 爱好 ['sing', 'dance']
// 方法 打招呼 数据
let teacher: {
  name: string
  age: number
  hobby: string[]
  sayHi(): void
  sleep(time: number): number
} = {
  name: 'Joe',
  age: 38,
  hobby: ['sing', 'dance'],
  sayHi() {
    console.log('hi hi')
  },
  sleep(time) {
    return time + 1000
  },
}

// 类型别名 ?是可选项
type tea = {
  name: string
  age: number
  hobby?: string[]
  sayHi?(): void
  sleep(time: number): number
}
let teacher1: tea = {
  name: 'tox',
  age: 33,
  hobby: ['Sing'],
  sayHi() {
    console.log('love')
  },
  sleep(time) {
    return time + 10
  },
}

// Ex
interface IPerson {
  name: string
  age: number
  sayHi(name: string): void
}
function printInfo(person: IPerson): void {
  console.log(person.name)
  console.log(person.age)
  person.sayHi('abc')
}

//*元祖 tuple
// 经纬度坐标[]
let position: [number, number] = [118.112, 123.123]
let position1: [number, string] = [123, 'abc']
// const [num, setNum] = useState()
function setState(n: number): [number, (n: number) => void] {
  let num = n
  const setNum = (n: number) => {
    num = n
  }
  return [num, setNum]
}
const [n, setN] = setState(0)

//*字面量类型
// 字面量类型一般要配合联合类型使用 |
let str: string = 'hello'
let str2: 'abc' = 'abc'
const str3: 'hello' = 'hello'
// 变量：值可以发生改变的量
// 字面量：直接量：通过字面就能够看懂值得类型：’abc‘ 199 {} true
// 贪吃蛇游戏
type Direction = 'up' | 'down' | 'left' | 'right'
function changeDirection(direction: Direction): void {
  console.log(direction)
}
changeDirection('down')

interface User {
  name: string
  age: number
  gender: 'Man' | 'Woman'
}
const user2: User = {
  name: 'zs',
  age: 18,
  gender: 'Woman',
}

//* Redux
type ActionType = 'ADD' | 'DEL' | 'UPDATE'
let t: ActionType = 'ADD'

//* 枚举 enum
// 定义枚举
// 1.数字类型枚举
enum Direct {
  // 指定枚举类型的值
  Up = 1, // 正常起始值为0 可以改变起始值和所有的值
  Down,
  Left,
  Right,
}
function changeDirect(direction: Direct) {
  console.log(direction)
}
changeDirect(Direct.Down)
console.log(typeof Direct[1])
// 应用：发送请求，需要用户的性别：男 ：女   0  1
enum Gender {
  Woman,
  Man,
}
function send(gender: Gender) {
  console.log(gender)
}
send(Gender.Man) // 1
send(Gender.Woman) // 2
// 2.字符串类型枚举
enum Gender1 {
  Woman = 'woman',
  Man = 'woman',
}

//* Type Assertion 类型断言
// 主要用途：操作dom的时候
// 解决问题：推断不出来这个是个img 元素
// const box = document.getElementById('img') as HTMLImageElement // React JSX 适用
// = const box = <HTMLImageElement>document.getElementById('img') React JSX 不适用
// console.log(box.src)
// const box1 = document.getElementById('a') as HTMLAnchorElement
// console.log(box1.href)

// 如果不知道标签是什么类型，可以用createElement查找，鼠标放上去就显示出来。
// document.createElement('a')
// console.log($0__proto__);

//* typeof
// 根据已有变量的值，获取该值得类型，来简化类型书写。
// 作用：
// 1.不用typeof 需定义接口：
// interface Obj {
//   x: number
//   y: number
// }
// Ex1：
let obj1 = {
  x: 10,
  y: 20,
}
type Obj1 = typeof obj1
function show(obj: Obj1) {
  console.log(obj.x)
  console.log(obj.y)
}
// Ex2：
let p1 = { x: 1, y: 2 }
function formatPoint(point: typeof p1) {}
// 2.通过调用第三方库，得到库的配置对象，自己代码可以基于这个配置对象。