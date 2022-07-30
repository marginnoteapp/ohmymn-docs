// noinspection ES6PreferShortImport: IntelliJ IDE hint to avoid warning to use `~/contributors`, will fail on build if changed
/* PWA DISABLED */
export const pwaDisabled = false

/* Texts */
export const ohmymnName = "OhMyMN"
export const ohmymnShortName = "OhMyMN"
export const ohmymnDescription = "MarginNote 插件控制面板及开发框架"

/* CDN fonts and styles */
export const googleapis = "https://fonts.googleapis.com"
export const gstatic = "https://fonts.gstatic.com"
export const font = `${googleapis}/css2?family=Readex+Pro:wght@200;400;600&display=swap`

/* ohmymn head */
export const ogUrl = "https://ohmymn.vercel.app/"
export const ogImage = `${ogUrl}og.png`

/* GitHub and social links */
export const releases = "https://github.com/marginnoteapp/ohmymn/releases"
export const contributing =
  "https://github.com/marginnoteapp/ohmymn/blob/main/CONTRIBUTING.md"

/* Avatar/Image/Sponsors servers */
export const preconnectLinks = [googleapis, gstatic]
export const preconnectHomeLinks = [googleapis, gstatic]

/* PWA runtime caching urlPattern regular expressions */
export const pwaFontsRegex = new RegExp(`^${googleapis}/.*`, "i")
export const pwaFontStylesRegex = new RegExp(`^${gstatic}/.*`, "i")