import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --maxWidth: 1280px;
        --white: #fff;
        --black: #000;
        --grey: #707070;
        --lightGrey: #fafafa;
        --medGrey: #eee;
        --secondary: #42c8b7;
        // rgba(66, 200, 183)
        --accent: #ff6565
        --fontMedium: 16px;
        --fontHeading: 26px;
        --fontParagraph: 12px;
        --fontBig: 20px;
        --fontSuperBig: 36px;
        --fontHeavy: 600;
    }

    * {
        font-family: 'Montserrat', sans-serif;
        font-weight: 600;
        font-size: 14px;
        list-style: none;
    }
    
    body {
        padding: 0;
        margin: 0;
    }
`;
