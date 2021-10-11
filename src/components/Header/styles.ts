import styled from 'styled-components'

export const Container= styled.div`
  #page-auth {
   display: flex;
   align-items: stretch;
   height: 100vh;

   aside {
     flex: 7;

     background: ${props => props.theme.colors.primary};
     color: #fff;

     display: flex;
     flex-direction: column;
     justify-content: center;

     padding: 120px 80px;

     img{
       max-width: 320px
     }

     strong {
       font: 700 3.6rem 'Poppins', sans-serif;
       line-height: 42px;
       margin-top: 16px;
     }

     p {
       font-size: 2.4rem;
       line-height: 32px;
       margin-top: 16px;
       color: #f8f8f8;
     }
   }
   main {
     flex: 8;

     padding: 0 32px;

     display: flex;
     align-items: center;
     justify-content: center;
   }

   .main-content {
     display: flex;
     flex-direction: column;
     width: 100%;
     max-width: 320px;
     align-items: stretch;
     text-align: center;

     > img {
       align-self: center;
     }
     h2 {
       font-size: 2.4rem;
       margin: 64px 0 24px;
       font-family: 'Poppins', sans-serif;
     }

     form {
       input {
         height: 50px;
         border-radius: 8px;
         padding: 0 16;
         background: #fff;
         border: 1px solid #a8a8b3;
       }

       button {
         margin-top: 16px;
       }

       button, input {
         width: 100%;
       }
     }
     p {
       font-size: 1.4rem;
       color: #737388;
       margin-top: 16px;

       a {
         color: #e559f9;
       }
     }

     .create-room {
       margin-top: 64px;
       height: 50px;
       border-radius: 8px;
       font-weight: 500;
       background: ${props => props.theme.colors.primary};;
       color: #fff;

       display: flex;
       justify-content: center;
       align-items: center;

       cursor: pointer;
       border: 0;

       transition: filter 0.2s;
       img {
         margin-right: 8px;
       }

       &:hover{
         filter: brightness(0,9)
       }
     }

     .separator {
       font-size: 1.4rem;
       color: #a8a8b3;

       margin: 32px 0;
       display: flex;
       align-items: center;

       &::before {
         content: '';
         flex: 1;
         height: 1px;
         background: ${props => props.theme.colors.primary};; 
         margin-right: 16px;
       }

       &::after {
         content: '';
         flex: 1;
         height: 1px;
         background: #a8a8b3; 
         margin-left: 16px;
       }
     }
   }
 }


`