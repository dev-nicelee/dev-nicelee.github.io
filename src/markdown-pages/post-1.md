---
path: "/sample-post"
date: "2020-01-04"
title: "Sample Post"
---

```js
import Typography from "typography"
import parnassusTheme from "typography-theme-parnassus"
const typography = new Typography(parnassusTheme)
export const { scale, rhythm, options } = typography
export default typography
```

## Cool story. But why?

### Performance
With the markup being rendered at build-time, there is no server runtime to generate the markup. The HTML files are already there ready to be sent over to the client. Granted the performance gains here aren’t groundbreaking as most web server implementations utilize page caching, but any gains to time to first byte is a plus.

### Cost
Again, since there’s no server runtime and all that’s being served are some static assets, the assets can be stored on and served from a CDN. Meaning costs to deploy your site are low and with some services like Netlify (which we’ll cover later) can even be free.

### SEO
Generally speaking, you want web crawlers to have an as easy of a job as possible indexing your website. Amongst other reasons, this is why implementing server-side rendering or pre-rendering on your single-page-application is a plus. This way, web crawlers don’t have to wait for javascript to be parsed and ran before the markup can be indexed, the markup will already exist inside the HTML file. This is not to say SPAs are not crawled by search engines, however, there are edge cases that make it difficult.

### Developer experience
> With the backend services abstracted away into their own APIs, the front-end engineer has free reign over what tools, libraries, frameworks, and languages to utilize on the front-end. There are no restriction on what preprocessed languages or build tools can be used as the case with some web frameworks. Personally, I think the tools the Node.js community have developed are second to none when it comes to DX. Tools like Webpack have enabled things like Hot Module Replacement. I know and love the development workflow Node.js projects have to offer and often find myself longing for those tools when working on projects with what I consider inferior development tooling.

# Look at this Video:

`youtube:https://www.youtube.com/embed/au2n7VVGv_c`