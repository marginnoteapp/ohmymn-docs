import Theme from "vitepress/theme"
import { inBrowser } from "vitepress"
import "../style/main.css"
import "../style/vars.css"
import "uno.css"

if (inBrowser) import("./pwa")

export default {
  ...Theme
}
