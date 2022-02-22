import { createGlobalStyle } from "styled-components";

import HeadlineRegularMM from "../fonts/MMHeadlineWebTT-Regular.woff2";
import TextBoldMM from "../fonts/MMTextProWebTT-Bold.woff2";
import TextRegularMM from "../fonts/MMTextProWebTT-Regular.woff2";
import MediaMarktPreise from "../fonts/MediaMarktPreise.woff2";
import IconFontMM from "../fonts/MM-Iconfont.woff";


const GlobalStyles = createGlobalStyle`

    @font-face {
        font-family: 'MediaMarktPreise';
        src: local('MediaMarktPreise'), 
        url(${MediaMarktPreise}) format('woff2');
    }
    @font-face {
        font-family: 'IconfontMM';
        src: local('IconfontMM'), 
        url(${IconFontMM}) format('woff');
    }
    @font-face {
        font-family: 'HeadlineRegularMM';
        src: local('HeadlineRegularMM'), 
        url(${HeadlineRegularMM}) format('woff2');
    }
    @font-face {
        font-family: 'TextBoldMM';
        src: local('TextBoldMM'), 
        url(${TextBoldMM}) format('wof2');
    }
    @font-face {
        font-family: 'TextRegularMM';
        src: local('TextRegularMM'), 
        url(${TextRegularMM}) format('woff2');
    }
    @font-face {
        font-family: FontAwesome;
    }

    body{
        font-family:  ${props => props.theme.font.normal};
    }
`;

export default GlobalStyles;