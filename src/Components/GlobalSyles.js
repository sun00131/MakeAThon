import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset};
    a{
      text-decoration:none;
      color:inherit;
    }
    *{
      box-sizing:border-box;
    }
    body{
      padding-top:150px;
      font-weight:550;
      position:relative;
      font-family: 'Gothic A1', sans-serif;
    }
`;

export default GlobalStyles;
