import { createGlobalStyle } from "styled-components"
export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500&display=swap');
    *,*::before,*::after{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    h1,h2,h3,h4,h5{
        margin: 0;
        padding: 0;
    }
    a{
        color: inherit;
        text-decoration: none;
    }
    img{
        display:block;
        max-width: 100%;
        height: auto;
        object-fit: cover;
    }
    button, input{
        outline: none;
        border: 0;
    }
    input{
        width:100%;
    }
    body{
        font-family: 'Open Sans', sans-serif;
        background-color: rgb(32,32,32)
    }

`