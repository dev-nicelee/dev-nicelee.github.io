import { css } from '@emotion/core'
import styled from '@emotion/styled'
import { mq } from '../layout.styles'

export const headerStyle = css`
  ${mq({
    fontSize: ['17vw', '17vw', '3vw', '9vw']
  })}
  padding: 2vw;
  display: flex;
  align-items: center;
`

export const Title = styled.div`
  ${mq({
    fontSize: ['7vw', '7vw', '3vw', '3vw']
  })}

  margin: 0;
  flex: 1;
  font-family: 'Merriweather Sans',sans-serif;
`

export const siteTitleLinkStyle = css`
  color: #000;
`

export const Menu = styled.ul`
  margin: 0;
  display: flex;
  align-items: center;
  list-style: none;
  justify-content: flex-end;
  ${mq({
    fontSize: ['4vw', '4vw', '2vw', '2vw']
  })}
  font-family: 'Merriweather Sans',sans-serif;
`

export const MenuItem = styled.li`
  margin: 0 0 0 1em;
  padding: 0;

  a {
    color: rgb(127, 127, 127);
  }

  a:hover {
    color: #000;
    transition: color 200ms ease-out;
  }
`