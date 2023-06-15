import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
* {
    background-color: ${(props) => props.theme.bodyColor};
    color: ${(props) => props.theme.fontColor};
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
