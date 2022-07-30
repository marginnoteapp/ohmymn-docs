import path from "path"
import fg from "fast-glob"

console.log(
  fg.sync("**/*.{png,svg,ico,txt}", {
    cwd: path.resolve(__dirname, "public")
  })
)
