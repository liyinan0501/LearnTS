{
  // 浏览器和node不识别.ts文件，需要把ts文件转成js文件。
  // 1.install TypeScript
  // sudo npm install -g typescript

  // 因为不能直接执行 ts 文件，需要用 tsc 转译。
  // tsc -v 查看版本号
  // 用命令 tsc test.ts （会将ts转成js文件）
  // 再用命令 node test.js 执行js文件。
  // 此方法比较繁琐，需安装 ts-node。

  // 2.install ts-node package
  // npm install -g ts-node
  //* ts-node test.ts 直接运行。

  // 真正做项目无需这样ts-node，可以直接写ts，webpack 自动将 ts 转成 js。
  // tsc --init 生成tsconfig.json 配置文件，否则容易报错

  // 因为环境变量问题，同一文件夹下，多个ts文件有相同名称的变量会报错。
  // 可以用(function(){代码})() 或者块级作用域 {代码} 解决

  //Todo 1.原始类型
  let num: number = 18
  let uname: string = 'zs'
  let isDog: boolean = true
  let un: undefined = undefined
  let nu: null = null

  //Todo 2.数组类型
  //方法1 (推荐)
  let list: number[] = [1, 2, 3, 4] // list 数组只能放数字类型
  let names: string[] = ['abc', 'bcd']
  //方法2
  let scores: Array<number> = [100, 200, 300] // scores 数组只能放数字类型
  let flags: Array<boolean> = [true, false]

  //Todo 3. | 联合类型
  let num1: string | number = 18
  num1 = 20
  num1 = 'abc'

  let timer: number | null = null
  timer = setInterval(() => {}, 1000)

  // 定义一个数组，数组中可以有数字或者字符串。
  let arr: number | string[] = 1
  arr = ['abc'] // 不能有数字

  // 加括号()优先级变高，数组联合类型一定加括号。
  let arr1: (number | string)[] = []
  arr1 = ['abc', 1, 2] // 即能有数字，又可以有字母。

  //Todo 4. 类型别名
  // 如果某一个复杂的类型，使用的次数特别多，可以使用类型别名。(大写字母开头)
  type MyArray = (number | string)[]
  // const list1: (number | string)[] = [1, 'abc', 2]
  // const list2: (number | string)[] = ['abc', 'abc', 2]
  const list1: MyArray = [1, 'abc', 2]
  const list2: MyArray = ['abc', 'abc', 2]

  //Todo 5. 函数类型
  // 方法1
  // function 函数名(参数1：参数1类型，参数2：参数2类型)：返回值类型 {return}
  function add(num1: number, num2: number): number {
    return num1 + num2
  }
  const add1 = (num1: string, num2: string): string => {
    return num1 + num2
  }
  // 方法2
  // 用 type 定义函数类型
  type Fn = (n1: number, n2: number) => number //定义返回类型
  const add2: Fn = (n1, n2) => {
    // n1 和 n2 不必与上一行 n1 n2 一致。
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
  // slice () 从头截到尾
  // slice (begin)
  // slice (begin, end)
  // 通过？就可以指定可选参数
  // 如果有一个可选参数，一定是在必须按参数后面。
  function slice(begin?: number, end?: number): void {
    console.log(begin)
    console.log(end)
  }

  //* 默认值
  function slice1(begin: number = 0, end: number = 0): void {
    console.log(begin)
    console.log(end)
  }
  slice1() //0
  slice1(100) //100
  slice1(100, 200) //100 200

  function getMax(n1: number, n2: number, n3: number): void {
    const max = n1 > n2 ? n1 : n2
    console.log(max > n3 ? max : n3)
    // Math.max()
  }

  //Todo 6. 对象类型
  // 在ts中提供了新的语法：接口
  // 接口就是专门用于提供对象的类型
  // interface 接口给名字 {对象的描述}

  // 方法1：-用接口指定类型
  // 接口名字首字母I开头
  interface IUser {
    // name: 'zs' 字面量也是一种类型，这个类型就是zs。
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

  // 方法2: -用花括号直接指定类型
  // 指定对象类型时，用分号隔开可以并一行。
  const user1: {
    name: string
    age: number
  } = { name: 'zs', age: 18 }

  // 老师类型
  // 名字 string
  // 年龄 age
  // 爱好 ['sing', 'dance']
  // 方法 打招呼 睡觉
  let teacher: {
    name: string
    age: number
    hobby: string[]
    sayHi(): void
    sleep(time: number): number
    // sleep: (timer: number) => number
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

  // 方法3: -类型别名指定类型
  // 符号?是可选项
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

  /**
   * type 和 interface 区别：
   * 在指定对象中，用 type 和 用 interface 指定类型是一样的。
   * 早期用 interface 指定类型。
   * type 方法更强大，可以指定任意类型，而interface 只能为对象指定类型。
   * interface 可以继承，而 type 不可以。
   * !能用 type 就用 type 方法
   */

  //* interface 继承
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

  // Exercise
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

  //Todo 7. 元祖类型 tuple
  // 元祖可以精确数组里面元素个数，而正常数组不可以。
  // 经纬度坐标[]
  let position: [number, number] = [118.112, 123.123]
  let position1: [number, string] = [123, 'abc']
  // Example: hooks
  // const [num, setNum] = useState()
  function setState(n: number): [number, (n: number) => void] {
    let num = n
    const setNum = (n: number) => {
      num = n
    }
    return [num, setNum]
  }
  const [n, setN] = setState(0)

  //Todo 8. 字面量类型
  // 字面量类型一般要配合联合类型使用 |
  let str: string = 'hello'
  let str2: 'abc' = 'abc'

  // 字面量类型，const str3 类型就是 ‘hello’
  // const str3 ='hello' 和 let str3: 'abc' = 'abc' 等于下面：
  const str3: 'hello' = 'hello'

  // 变量：值可以发生改变的量
  // 字面量：直接量：通过字面就能够看懂值得类型：’abc‘ 199 {} true

  // 贪吃蛇游戏
  // let direction: 'up' | 'down' | 'left' | 'right' = 'up'
  type Direction = 'up' | 'down' | 'left' | 'right'
  function changeDirection(direction: Direction): void {
    console.log(direction)
  }
  changeDirection('down')

  interface User {
    name: string
    age: number
    gender: 'Man' | 'Woman' // 字面量联合类型
  }
  const user2: User = {
    name: 'zs',
    age: 18,
    gender: 'Woman',
  }

  //* Redux
  type ActionType = 'ADD' | 'DEL' | 'UPDATE'
  let t: ActionType = 'ADD'

  //Todo 9. 枚举 enum
  // (了解) 表示一组明确的可选值，转换成 js 的文件更大。
  // 定义枚举，首字母大写。

  // enum 与type 区别：枚举不仅仅是类型，还是值，而 type 只是type。

  // 1.数字类型枚举
  enum Direct {
    // 指定枚举类型的值
    Up = 1, // 正常起始值为0,1,2,3 可以改变起始值从1开始，之后是2,3,4。
    Down,
    Left,
    Right,
  }
  function changeDirect(direction: Direct) {
    // 枚举不仅仅是类型，还是值。
    console.log(direction) // 2
  }
  // 验证：枚举不仅仅是类型，还是值。
  console.log(Direct)
  /* 枚举得到的是一个对象：
    {
      '1': 'Up',
      '2': 'Down',
      '3': 'Left',
      '4': 'Right',
      Up: 1,
      Down: 2,
      Left: 3,
      Right: 4
    }
  */
  changeDirect(Direct.Down) // 使用枚举

  // 枚举 可以通过类型得到值，也可以通过值得到类型：
  console.log(Direct.Up) // 1
  console.log(Direct[2]) // Down

  // 应用：发送请求，需要用户的性别：男 ：女   0  1
  enum Gender {
    Woman,
    Man,
  }
  function send(gender: Gender) {
    console.log(gender)
  }
  console.log('1111')
  send(Gender.Woman) // 0
  send(Gender.Man) // 1

  // 2.字符串类型枚举
  // 指定了第一个字符串，之后的所有的都需要指定。
  enum Gender1 {
    Woman = 'woman',
    Man = 'woman',
  }

  //Todo 10. Type Assertion 类型断言
  // 你比 ts 更了解类型，可以用类型断言。
  // 主要用途：操作dom的时候
  // 解决问题：推断不出来这个是个img 元素
  // const box = document.getElementById('img') as HTMLImageElement // React JSX 适用
  // = const box = <HTMLImageElement>document.getElementById('img') // React JSX 不适用
  // console.log(box.src)
  // const box1 = document.getElementById('a') as HTMLAnchorElement
  // console.log(box1.href)

  // 如果不知道标签是什么类型，可以用createElement查找，鼠标放上去就显示出来。
  // document.createElement('a')
  // console.log($0__proto__)

  //Todo 11. typeof
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
}
