import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    }

    *{
        transition-duration: 0.2s;
    }

    button{
        cursor: pointer;
    }

    ul{
        list-style-type: none;
        padding: 0;
        margin: 0px;
    }
`