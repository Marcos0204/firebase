import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
        html {
                box-sizing: border-box;
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        }
        
        *, *::before, *::after {
                box-sizing: inherit;
        }
        
        ul, li, h1, h2, h3, p, button {
                margin: 0;
        }

        ul {
                list-style: none;
                padding: 0;
        }

        button {
                background: transparent;
                border: 0;
                outline: 0;
        }

        body {
                margin: 0
        }

        
`
