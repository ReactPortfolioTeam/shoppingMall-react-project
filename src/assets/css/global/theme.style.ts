/*

html font-size 16px 기준

h1 : 2rem, 32px
h2 : 1.5rem, 24px
h3 : 1.33rem, 21.28px
h4 : 1.17rem, 18.72px
h5 : 0.83rem, 13.28px
h6 : 0.67rem, 10.72px


*/

const margins = {
    sm: "0.67rem",
    base: "1rem",
    lg: "1.5rem",
    xl: "2rem",
};
  
const paddings = {
    sm: "0.67rem",
    base: "1rem",
    lg: "1.5rem",
    xl: "2rem",
};
  
const fonts = {
    family: {
        base: `'Noto Sans KR', sans-serif`,
        title: `'Merriweather', serif`,
    },
    size: {
        sm: "0.83rem",
        base: "1.17rem",
        lg: "1.33rem",
        xl: "1.5rem",
        title: "2rem",
    },
    weight: {
        light: 100,
        normal: 400,
        bold: 700,
    },
};
  
const colors = {
    red: "#ff4d4d",
    yellow: "#ffff4d",
    blue: "#0099ff",
};
  
const size = {
    mobile: "425px",
    tablet: "768px",
    desktop: "1440px",
};
  
// 미디어 쿼리의 중복 코드를 줄이기위해 정의된 변수입니다
const device = {
    mobile: `@media only screen and (max-width: ${size.mobile})`,
    tablet: `@media only screen and (max-width: ${size.tablet})`,
    desktopL: `@media only screen and (max-width: ${size.desktop})`,
};
  
// 테마에 따라 다른 값을 갖는 색상 값입니다 
const lightThemeColors = {
    ...colors,
    primary: "#333",
    secondary: "#fff",
    tertiary: "#808080",
};
  
const darkThemeColors = {
    ...colors,
    primary: "#fff",
    secondary: "#333",
    tertiary: "#d4d0c4",
};
  
// 테마와 관련없이 공통으로 사용되는 변수들입니다
const defalutTheme = {
    margins,
    paddings,
    fonts,
    device,
};
  
// 각 테마는 공통 변수와 함께, 각기 다른 색상 값들을 갖습니다.
export const darkTheme = {
    ...defalutTheme,
    colors: darkThemeColors,
};
  
export const lightTheme = {
    ...defalutTheme,
    colors: lightThemeColors,
};