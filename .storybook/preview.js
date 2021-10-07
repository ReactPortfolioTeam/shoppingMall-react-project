import GloblaStyle from '../src/assets/css/global/Global.style';

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
        <>
            <GloblaStyle />
            <Story />
        </>
    ),
];
