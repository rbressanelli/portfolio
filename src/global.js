import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        text-decoration: none;
    }

    button {
        cursor: pointer;
    }

`;

export const theme = {
  colors: {
    primary: '#0070f3',
    secondary: '#d7263d',
    title: '#f5f5f5',
    background: '#214181',
    cardBorder: '#cd9c32',
    modalBorderTop: '#8C001A',
    modalBorderBotton: '#285238',
    modalShadow: '#0a0a0a',
  },
}
