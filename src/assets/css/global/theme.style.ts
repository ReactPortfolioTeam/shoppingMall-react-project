/*
Theme 사용하기전 TypeScript에서 에러가 뜨니
아래처럼 모듈로 정의를 해주어야 사용이 가능하다.

*/

import { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        margins: {
            m1: string;
            m2_5: string;
            m5: string;
            m10: string;
            m20: string;
            m40: string;
            m80: string;
        };
        paddings: {
            p1: string;
            p2_5: string;
            p5: string;
            p10: string;
            p20: string;
            p40: string;
            p80: string;
        };
        fonts: {
            family: {
                base: string;
            };
            size: {
                fs10: string;
                fs12: string;
                base: string;
                fs16: string;
                fs18: string;
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
        colors: {
            darkRed: string;
            red: string;
            white: string;
            blue: string;
            dark: string;
            gray: string;
            darkGray: string;
            gold: string;
        };
    }
}

const margins = {
    m1: '0.071429rem', // 1px
    m2_5: '0.178571rem', // 2.5
    m5: '0.357143rem', // 5
    m10: '0.714286rem', // 10
    m20: '1.428571rem', // 20
    m40: '2.857143rem', // 40
    m80: '5.714286rem', // 80
};

const paddings = {
    p1: '0.071429rem',
    p2_5: '0.178571rem',
    p5: '0.357143rem',
    p10: '0.714286rem',
    p20: '1.428571rem',
    p40: '2.857143rem',
    p80: '5.714286rem',
};

const fonts = {
    family: {
        base: `'3sixteen-Futura',Helvetica Neue,Helvetica,Arial,sans-serif;`,
    },
    size: {
        fs10: '0.71428rem', // 10px
        fs12: '0.857rem', // 12px
        base: '1rem', // 14px
        fs16: '1.142rem', // 16px
        fs18: '1.285rem', // 18px
        title: '1.428rem', // 20px
    },
    weight: {
        light: 100,
        normal: 400,
        bold: 700,
    },
};

const colors = {
    darkRed: '#842424',
    red: '#cc4242',
    white: '#fff',
    blue: '#4d90fe',
    dark: '#1f1f1f',
    gray: '#666',
    darkGray: '#333',
    gold: '#877551',
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

export const MyTheme: DefaultTheme = {
    margins,
    paddings,
    fonts,
    device,
    colors,
};
