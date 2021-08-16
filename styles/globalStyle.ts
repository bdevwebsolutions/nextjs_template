import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    }

    *{
        
    }

    button{
        cursor: pointer;
        padding: 8px 10px;
        outline: none;
        border: none;
    }

    ul{
        list-style-type: none;
        padding: 0;
        margin: 0px;
    }

    a{
        display: inline-block;
    }
`