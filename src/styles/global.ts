import { createGlobalStyle } from 'styled-components';

 export default createGlobalStyle`
    *{
    margin:0;
    padding:0;
    box-sizing:border-box;
    }
    html {
      font-size: 62.5%;
    }
    body {
      background: ${props => props.theme.colors.background};
      color:#29292e;
    }
    body, input, button, textarea {
      font: 400 1.6rem 'Roboto', sans-serif;
    }

    @media (max-width: 560px) {
      html {
        font-size: 54.5%;
      }
    }

    @media (max-width: 482px) {
      html {
        font-size: 48.5%;
      }
    }
 `;