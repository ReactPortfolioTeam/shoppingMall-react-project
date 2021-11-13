import { ThemeProvider } from 'styled-components';
import { MyTheme } from 'assets/css/global/theme.style';
import GloblaStyle from '../src/assets/css/global/Global.style';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

export const parameters = {
    layout: 'fullscreen',
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};
// storybook decorators 는 wrapper 같은 존재입니다.
// 사용할 스토리를 감싸거나 밑에 처럼 GlobalStyle 적용하기 좋습니다.
export const decorators = [
    (Story) => (
        <RecoilRoot>
            <ThemeProvider theme={MyTheme}>
                <BrowserRouter>
                    <GloblaStyle />
                    <Story />
                </BrowserRouter>
            </ThemeProvider>
        </RecoilRoot>
    ),
];
