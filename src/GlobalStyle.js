import { createGlobalStyle } from "styled-components";

const globalstyle = createGlobalStyle`
    a{
        text-decoration:none;
        color:inherit;
    }
    body{
        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;


    }
    *{
        box-sizing:border-box;
    }
`;

export default globalstyle;
