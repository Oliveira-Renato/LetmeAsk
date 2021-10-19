import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${props => props.theme.colors.background};
    font-size: 14px;
    color: ${props => props.theme.colors.text};
    font-family: sans-serif;
  }

  h1, p {
    color: ${props => props.theme.colors.text};
  }

  #page-auth aside {
    background:${props => props.theme.colors.aside};
  }

  #page-auth .main-content p {
    color: ${props => props.theme.colors.text};
  }
  #page-auth .main-content p a {
    color: '#ea4335';
  }
  #page-room main .room-title h1, .room-code span, .question p {
    color: ${props => props.theme.colors.text};
  }
  #page-room main form .form-footer .user-info span {
    color: ${props => props.theme.colors.text};
  }

  .room-code span {
    color: ${props => props.theme.colors.text};
  }

  #page-room main form textarea, .room-code, #page-auth .main-content form input, .question {
    background:${props => props.theme.colors.textarea};
  }

  #page-auth .main-content > img {
    filter: ${props => props.theme.colors.img};
  }

  #page-auth .main-content p a {
    color: ${props => props.theme.colors.secundary}
  }

  #page-room main form textarea, .room-code, #page-auth .main-content form input {
    color: ${props => props.theme.colors.text};
  }

  #page-room header .content > img {
    filter: ${props => props.theme.colors.img};
  }
`;