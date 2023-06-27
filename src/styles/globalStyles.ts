import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
* {
    background-color: ${({ theme }) => theme.bodyColor};
    color: ${({ theme }) => theme.fontColor};
    font-family: 'Roboto', sans-serif;
    margin: ${({ theme }) => theme.margins.xxs}px;
    padding: ${({ theme }) => theme.paddings.xxs}px;
    box-sizing: border-box;
    text-decoration: none;
    outline: none;
    list-style: none;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
`;
