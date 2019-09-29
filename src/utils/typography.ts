import Typography from "typography"
import parnassusTheme from "typography-theme-parnassus"
const typography = Typography(parnassusTheme)
export const { scale, rhythm, options } = typography
options.baseFontSize = '17px'
options.lineHeight = '1.5'
export default typography