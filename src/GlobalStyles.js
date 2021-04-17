import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root{
        --dark: #6c85cc;
        --darkGray: #3a4f6b;
        --light: #d1e6ff;
        --primary: #81B71A;
        --secondary: #000000;
    }
    *{
        padding:0;
        margin: 0;
        outline: 0;
        box-sizing: border-box;
    }
    body{
        font-family: sans-serif;
        color: white;
        user-select:none;
    }
    button{
        padding:10px;
        font-weight:bold;
        color:var(--light);
        background-color:var(--darkGray);
        border:2px solid var(--light);
        border-radius:4px;
        cursor:pointer;
        transition:.2s ease-in-out;
        :hover{
            background-color:var(--primary);
            color: var(--text);
            border:2px solid var(--dark);
        }
        :active{
            transform:scale(.95);
        }
        :disabled{
            background-color:transparent;
            border:1px solid var(--darkGray);
            color:var(--darkGray);
        }
    }
    a{
        color:var(--light);
        transition:.2s;
        
        :hover{
            color:var(--primary);
        }
        :active{
            transform:scale(.95);
        }
    }
`;
