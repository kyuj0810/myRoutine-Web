import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const lightTheme = {
  fontColor: '#2c2c2c',
  bgColor: 'lightgray',
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
    }

    a {
        text-decoration: none;
    }
`;
