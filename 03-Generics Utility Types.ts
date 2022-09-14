// 四个常用的泛型工具
//Todo 1. Partial
type User = {
  name: string
  age: number
  gender: string
}
// 接收一个类型，返回一个新类型，新类型中的所有属性变成可选的。
type PartialUser = Partial<User>

//Todo 2. Readonly
// 接收一个类型，返回一个新类型，而且新类型中所有的属性都是只读的。
type ReadOnlyUser = Readonly<User>
const user: ReadOnlyUser = {
  name: 'zs',
  age: 20,
  gender: 'Male',
}
// user.name = 'ls' //只读属性，无法更改，否则报错。

//Todo 3. Pick
// 从 type 中选择一组属性来构造新类型。
type PickUser = Pick<User, 'name' | 'age'>

//Todo 4. Omit
// 从 type 中排除一租属性来构造新类型。
type OmitUser = Omit<User, 'gender'>
