import { css } from '@emotion/core'
import styled from '@emotion/styled'

export const headerStyle = css`
  height: 9vw;
  padding: 2vw;
  display: flex;
  align-items: center;
`

export const Title = styled.div`
  font-size: 3vw;
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
  font-size: 2vw;
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