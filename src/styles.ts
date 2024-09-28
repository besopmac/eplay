import { createGlobalStyle } from 'styled-components'

const cores = {
  preto: '#111',
  cinza: '#eee',
  branco: '#fff',
  verde: '#10AC84'
}

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
  }

  body {
    color: ${cores.branco};
    background-color: ${cores.preto};
  }
`
