import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const lightTheme = {
  accent: '#0095f6',
  borderColor: 'rgb(219, 219, 219)',
};

export const darkTeme = {
  fontColor: 'lightgray',
  bgColor: '2c2c2c',
};

export const GlobalStyles = createGlobalStyle`
    ${reset}
    input {
        all: unset;
    }
    * {
        box-sizing: border-box;
    }
    body {
        background-color: ${(props) => props.theme.bgColor};
        font-size: 14px;  
        font-family: "Noto Sans KR", sans-serif;
        color: rgb(38,38,38 );
    }

    a {
        text-decoration: none;
    }
`;
