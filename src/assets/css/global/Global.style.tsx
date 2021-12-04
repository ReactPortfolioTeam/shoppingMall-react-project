import { createGlobalStyle, css } from 'styled-components';
import { JunhanStyle } from './Junhan.style';

const GlobalStyle = createGlobalStyle`

${JunhanStyle}
@font-face {
    font-family: "3sixteen-Futura";
    src: url("../../font/FuturaPT-Book.woff");
    /* src: url(" //cdn.shopify.com/s/files/1/0028/6132/t/10/assets/FuturaPT-Book.eot?v=8475405467952757196 ?#iefix ") format("embedded-opentype"),url(" //cdn.shopify.com/s/files/1/0028/6132/t/10/assets/FuturaPT-Book.woff?v=2055986069778670836 ") format("woff"),url(" //cdn.shopify.com/s/files/1/0028/6132/t/10/assets/FuturaPT-Book.woff2?2821 ") format("woff2"); */
    font-weight: 400;
    font-style: normal;
    font-display: swap
}

@font-face {
    font-family: "3sixteen-Futura";
	src: url("../../font/FuturaPT-BookObl.woff");
    /* src: url(" //cdn.shopify.com/s/files/1/0028/6132/t/10/assets/FuturaPT-BookObl.eot?v=996123339364548918 ?#iefix ") format("embedded-opentype"),url(" //cdn.shopify.com/s/files/1/0028/6132/t/10/assets/FuturaPT-BookObl.woff?v=13076472133656725296 ") format("woff"),url(" //cdn.shopify.com/s/files/1/0028/6132/t/10/assets/FuturaPT-BookObl.woff2?2821 ") format("woff2"); */
    font-weight: 400;
    font-style: italic;
    font-display: swap
}

@font-face {
    font-family: "3sixteen-Futura";
	src: url("../../font/FuturaPT-Demi.woff");
    /* src: url(" //cdn.shopify.com/s/files/1/0028/6132/t/10/assets/FuturaPT-Demi.eot?v=13443831076423191093 ?#iefix ") format("embedded-opentype"),url(" //cdn.shopify.com/s/files/1/0028/6132/t/10/assets/FuturaPT-Demi.woff?v=15614256649977071015 ") format("woff"),url(" //cdn.shopify.com/s/files/1/0028/6132/t/10/assets/FuturaPT-Demi.woff2?2821 ") format("woff2"); */
    font-weight: 500;
    font-style: normal;
    font-display: swap
}

@font-face {
    font-family: "3sixteen-Futura";
	src: url("../../font/FuturaPT-DemiObl.woff");
    /* src: url(" //cdn.shopify.com/s/files/1/0028/6132/t/10/assets/FuturaPT-DemiObl.eot?v=1443922868093412514 ?#iefix ") format("embedded-opentype"),url(" //cdn.shopify.com/s/files/1/0028/6132/t/10/assets/FuturaPT-DemiObl.woff?v=7700426176577362567 ") format("woff"),url(" //cdn.shopify.com/s/files/1/0028/6132/t/10/assets/FuturaPT-DemiObl.woff2?2821 ") format("woff2"); */
    font-weight: 500;
    font-style: italic;
    font-display: swap
}

@font-face {
    font-family: "3sixteen-Brewery";
	src: url("../../font/3sBrewery.eot");
    /* src: url(" //cdn.shopify.com/s/files/1/0028/6132/t/10/assets/3sBrewery.eot?v=12899612267492566931 ?#iefix ") format("embedded-opentype"),url(" //cdn.shopify.com/s/files/1/0028/6132/t/10/assets/3sBrewery.woff?v=12665231174229498725 ") format("woff"),url(" //cdn.shopify.com/s/files/1/0028/6132/t/10/assets/3sBrewery.woff2?2821 ") format("woff2"); */
    font-weight: 700;
    font-style: normal;
    font-display: swap
}




html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video,input,hr {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
    box-sizing:border-box;
	font-family: '3sixteen-Futura',"Helvetica Neue",Helvetica,Arial,sans-serif;
	
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
html{
	font-size: 14px;
	position: relative;
	
}
a,a:link,a:visited{
	text-decoration:none;
}
${({ theme }) => css`
        h1 {
            font-size: ${theme.fonts.size.title};
        }
		h2{
			font-size: ${theme.fonts.size.fs18};
		}
		h3{
			font-size: ${theme.fonts.size.fs16};

		h4{
			font-size: ${theme.fonts.size.base};

		}
		h5{
			font-size: ${theme.fonts.size.fs12};

		}
		h6{
			font-size: ${theme.fonts.size.fs10};

		}
		body{
			font-family: ${theme.fonts.family.base}
			font-weight: ${theme.fonts.weight.normal};
          	font-size: ${theme.fonts.size.base};
		}
    `}



`;

export default GlobalStyle;
