// Type Declaration File
// 2. 为已有js文件提供类型声明
// -将js项目迁移到ts项目时，为了让已有的.js文件有类型声明。
// -称为库作者，创建库给其他人使用。

// d.ts文件中只能出现类型声明，不能出现可执行语法。

// 此演示在react环境中才可以。
// - 1. 对于 type、interface 等这些明确就是 TS 类型的(只能在 TS 中使用的)，可以省略 declare 关键字。
// - 2. 对于 let、function 等具有双重含义(在 JS、TS 中都能用)，应该使用 declare 关键字，明确指定此处用于类型声明。
