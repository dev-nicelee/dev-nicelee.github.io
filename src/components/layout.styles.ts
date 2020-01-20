import { css } from "@emotion/core"
import facepaint from 'facepaint'

const breakpoints = [576, 768, 992, 1200]

export const mq = facepaint(
  breakpoints.map(bp => `@media (min-width: ${bp}px)`)
)

export const globalStyles = css`

html {
  box-sizing: border-box;
  overflow-y: scroll;
}
* {
  box-sizing: inherit;
}
*:before {
  box-sizing: inherit;
}
*:after {
  box-sizing: inherit;
}
body {
  margin: 0;
  word-wrap: break-word;
}

a {
  box-shadow: none;
}

h1, h2, h3, h4, h5, h6 {
  margin-top: 1.82rem;
}

.page-wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
}

.gatsby-highlight {
  pre {
    border-radius: 5px;
  }
}

:not(pre) > code[class*="language-"] {
  border-radius: 2px;
  background-color: red;
  color: #fff;
}

/* Adjust the position of the line numbers */
.line-numbers-rows {
  padding: 17px 0 17px 12px;
}

.blog-post {
  ${mq({
    padding: ['20px 10px', '10px 20px', '50px 100px', '50px 10%;']
  })}
}

.posting-date {
  color: rgba(0, 0, 0, 0.6);
}
`
