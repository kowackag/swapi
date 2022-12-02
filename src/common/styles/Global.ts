import { createGlobalStyle } from 'styled-components';
import LatoBoldWoff from 'common/fonts/Lato/lato-bold-webfont.woff';
import LatoBoldWoff2 from 'common/fonts/Lato/lato-bold-webfont.woff2';
import LatoRegularWoff from 'common/fonts/Lato/lato-regular-webfont.woff';
import LatoRegularWoff2 from 'common/fonts/Lato/lato-regular-webfont.woff2';
import LatoItalicWoff from 'common/fonts/Lato/lato-italic-webfont.woff';
import LatoItalicWoff2 from 'common/fonts/Lato/lato-italic-webfont.woff2';
import InterRegularWoff from 'common/fonts/Inter/inter-regular-webfont.woff';
import InterRegularWoff2 from 'common/fonts/Inter/inter-regular-webfont.woff2';
import InterBoldWoff from 'common/fonts/Inter/inter-bold-webfont.woff';
import InterBoldWoff2 from 'common/fonts/Inter/inter-bold-webfont.woff2';
import InterExtraBoldWoff from 'common/fonts/Inter/inter-extrabold-webfont.woff';
import InterExtraBoldWoff2 from 'common/fonts/Inter/inter-extrabold-webfont.woff2';
import InterLightItalicWoff from 'common/fonts/Inter/inter-lightitalic-beta-webfont.woff';
import InterLightItalicWoff2 from 'common/fonts/Inter/inter-lightitalic-beta-webfont.woff2';

interface ThemeType {
  colorBgc: string;
  colorAvatarBgc: string;
  colorError: string;
  colorFont: string;
  colorBlue: string;
  colorGreen: string;
  colorOlive: string;
}

interface PropsType {
  theme: ThemeType;
}

const GlobalStyle = createGlobalStyle`
    :root {
        --color-font: ${({ theme }: PropsType) => theme.colorFont};
        --color-bgc: ${({ theme }: PropsType) => theme.colorBgc};
        --color-avatar: ${({ theme }: PropsType) => theme.colorAvatarBgc};
        --color-error:${({ theme }: PropsType) => theme.colorError};
        --color-blue:${({ theme }: PropsType) => theme.colorBlue};
        --color-green:${({ theme }: PropsType) => theme.colorGreen};
        --color-olive:${({ theme }: PropsType) => theme.colorOlive};
    }

    @font-face {
        font-family: "Lato";
        font-style: normal;
        font-weight: 400;
        src:
        url(${LatoRegularWoff2}) format('woff2'),
        url(${LatoRegularWoff}) format('woff');
    }
    @font-face {
        font-family: "Lato";
        font-style: normal;
        font-weight: 400;
        src:
        url(${LatoBoldWoff2}) format('woff2'),
        url(${LatoBoldWoff}) format('woff');
    }
    @font-face {
        font-family: "Lato";
        font-style: italic;
        font-weight: 400;
        src:
        url(${LatoItalicWoff2}) format('woff2'),
        url(${LatoItalicWoff}) format('woff');
    }

    @font-face {
        font-family: "Inter";
        font-style: normal;
        font-weight: 400;
        src:
        url(${InterRegularWoff2}) format('woff2'),
        url(${InterRegularWoff}) format('woff');
    }
    @font-face {
        font-family: "Inter";
        font-weight: 700;
        src:
        url(${InterBoldWoff2}) format('woff2'),
        url(${InterBoldWoff}) format('woff');
    }
    @font-face {
        font-family: "Inter";
        font-weight: 800;
        src:
        url(${InterExtraBoldWoff2}) format('woff2'),
        url(${InterExtraBoldWoff}) format('woff');
    }
    @font-face {
        font-family: "Inter";
        font-style: italic;
        font-weight: 400;
        src:
        url(${InterExtraBoldWoff2}) format('woff2'),
        url(${InterExtraBoldWoff}) format('woff');
    }
    @font-face {
        font-family: "Inter";
        font-style: italic;
        font-weight: 300;
        src:
        url(${InterLightItalicWoff2}) format('woff2'),
        url(${InterLightItalicWoff}) format('woff');
    }

    html {
        font-size: 10px;
    }

    body {
        width: 100%;
        background-color: var(--color-bgc);
        font-size: 2rem;
        font-family: "Inter", Verdana, sans-serif;
        color: var(--color-font);
        line-height: 1.5;
    }

    #root {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: auto;
        max-width: 1133px;
        height: 100vh;
    }

    a {
        text-decoration: none;
        color: var(--color-font);
    }
    
    li {
        list-style: none;
    }
`;

export default GlobalStyle;
