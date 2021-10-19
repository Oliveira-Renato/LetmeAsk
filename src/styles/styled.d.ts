import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      secundary: string;
      aside: string;

      background: string;
      text: string;
      textarea: string;
      code: string;
      img: string;
    }
  }
}