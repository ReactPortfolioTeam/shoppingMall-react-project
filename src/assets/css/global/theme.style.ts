/*

html font-size 16px 기준

h1 : 2rem, 32px
h2 : 1.5rem, 24px
h3 : 1.33rem, 21.28px
h4 : 1.17rem, 18.72px
h5 : 0.83rem, 13.28px
h6 : 0.67rem, 10.72px


*/

import { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        margins: {
            xxs: string;
            xs: string;
            sm: string;
            base: string;
            lg: string;
            xl: string;
            xxl: string;
        };
        paddings: {
            xxs: string;
            xs: string;
            sm: string;
            base: string;
            lg: string;
            xl: string;
            xxl: string;
        };
        fonts: {
            family: {
                base: string;
            };
            size: {
                xs: string;
                sm: string;
                base: string;
                lg: string;
                xl: string;
                title: string;
            };
            weight: {
                light: number;
                normal: number;
                bold: number;
            };
        };
        device: {
            mobile: string;
            tablet: string;
            desktopL: string;
        };
    }
}

const margins = {
    xxs: '0.071429rem', // 1px
    xs: '0.178571rem', // 2.5
    sm: '0.357143rem', // 5
    base: '0.714286rem', // 10
    lg: '1.428571rem', // 20
    xl: '2.857143rem', // 40
    xxl: '5.714286rem', // 80
};

const paddings = {
    xxs: '0.071429rem',
    xs: '0.178571rem',
    sm: '0.357143rem',
    base: '0.714286rem',
    lg: '1.428571rem',
    xl: '2.857143rem',
    xxl: '5.714286rem',
};

const fonts = {
    family: {
        base: `'3sixteen-Futura',Helvetica Neue,Helvetica,Arial,sans-serif;`,
    },
    size: {
        xs: '0.71428rem', // 10px
        sm: '0.857rem', // 12px
        base: '1rem', // 14px
        lg: '1.142rem', // 16px
        xl: '1.285rem', // 18px
        title: '1.428rem', // 20px
    },
    weight: {
        light: 100,
        normal: 400,
        bold: 700,
    },
};

const colors = {
    dark_red: '#842424',
    red: '#cc4242',
    white: '#fff',
    blue: '#4d90fe',
    dark: '1f1f1f',
    gray: '#666',
    dark_gray: '#333',
};

const size = {
    mobile: '425px',
    tablet: '720px',
    desktop: '1024px',
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
};

// 테마와 관련없이 공통으로 사용되는 변수들입니다
const Theme = {
    margins,
    paddings,
    fonts,
    device,
};

export const MyTheme: DefaultTheme = {
    margins,
    paddings,
    fonts,
    device,
};
// const darkThemeColors = {
//     ...colors,
//     primary: '#fff',
//     secondary: '#333',
//     tertiary: '#d4d0c4',
// };

// 각 테마는 공통 변수와 함께, 각기 다른 색상 값들을 갖습니다.
// 해당 프로젝트에선 lightTheme를 먼저 작성하고 추후에 darkTheme 업데이트 논의 예정
// export const darkTheme = {
//     ...defalutTheme,
//     colors: darkThemeColors,
// };
