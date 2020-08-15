module.exports = {
	tabWidth: 2,
	semi: true,
	indent: 2,
	singleQuote: false,
	bracketSpacing: true, //花括号前后空格
	useTabs: true, //使用tab（制表符）缩进而非空格
	arrowParens: "avoid", //只有一个参数的箭头函数的参数是否带圆括号（默认avoid不带）
	jsxSingleQuote: false, //在JSX中使用单引号
	htmlWhitespaceSensitivity: "ignore", //为 HTML 文件定义全局空格敏感度
	overrides: [
		{
			files: "*.json",
			options: {
				useTabs: false
			}
		}
	]
};
