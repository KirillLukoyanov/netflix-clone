import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');    
    html, body{
        font-family: 'Roboto', sans-serif;
        background-color: black;
        color: #333;
        font-size: 16px;
    }
`;
