import modules from "../modules"

const md = `
# 模块
## 固定模块
${modules.const.map(k => `- ${k[0]}`).join("\n")}
## 可选模块
${modules.optional.map(k => `- ${k[0]}`).join("\n")}
`

console.log(md)
