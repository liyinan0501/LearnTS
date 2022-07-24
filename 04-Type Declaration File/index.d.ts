// Type Declaration File
// 创建自己的类型声明文件
// 1. 项目内共享类型
// 如果多个 .ts文件都用到同一个类型，此时可以创建d.ts文件提供该类型，实现类型共享。
// 类型声明文件
export interface Token {
  token: string
  refresh_token: string
}

// 2. 为已有js文件提供类型声明
// -将js项目迁移到ts项目时，为了让已有的.js文件有类型声明。
// -称为库作者，创建库给其他人使用。
