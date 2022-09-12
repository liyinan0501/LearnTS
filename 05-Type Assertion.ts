//* Type Assertion 类型断言
type UserInfo = {
  name: string
  age: number
}

// 非空断言
function show(user: UserInfo | null) {
  // console.log(user.age) // Error: Object is possibly 'null
  // 解决方案：
  // 1. console.log(user?.name)
  // 2. 非空断言 告诉ts !前面不可能为空
  console.log(user!.name)
}

show(null)
