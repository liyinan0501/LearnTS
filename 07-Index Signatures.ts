// 当无法确定对象中那些属性，或者说对象中可以出现任意多个属性，此时就会用到索引签名类型。
type anyUser = {
  [index: number]: string
}

const user0: anyUser = {
  0: '123',
  1: 'bcd',
  2: '456',
}
