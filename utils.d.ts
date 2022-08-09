// Type Declaration File
// 创建自己的类型声明文件
//todo  1. 项目内共享类型
// 如果多个 .ts文件都用到同一个类型，此时可以创建d.ts文件提供该类型，实现类型共享。
// 详见 04-Type Declaration File

//todo 2. 为已有js文件提供类型声明 (两种方法)
// -将js项目迁移到ts项目时，为了让已有的.js文件有类型声明。
// -称为库作者，创建库给其他人使用。

// 第一种方法：直接更改js文件，添加类型，保存为ts文件
///     好处：比较容易。
// 第二种方法：在同一目录下，创建同名的 d.ts 类型声明文件。
//      好处：不用更改原文件，所有引入的类型声明文件都会有提示。
// d.ts文件中只能出现类型声明，不能出现可执行语法。
// 最后需要导出所有类型 例如：export {count, songName, position, add}

// - 1. 对于 type、interface 等这些明确就是 TS 类型的(只能在 TS 中使用的)，可以省略 declare 关键字。
// - 2. 对于 let、function 等具有双重含义(在 JS、TS 中都能用)，应该使用 declare 关键字，明确指定此处用于类型声明。

//todo  3. 第三方库类型声明文件
// 第三方库类型声明文件有两种存在形式：1.自带 2.由DefinitelyTyped提供
// 安装DefinitelyTyped推荐 -d：npm install @types/jquery -D
