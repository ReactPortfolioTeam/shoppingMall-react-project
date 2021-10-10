import Button from 'component/Button/Button';
import { ButtonHover } from 'component/Button/ButtonHover';
import TextButton from 'component/Button/TextButton';
import React from 'react';
import styled from 'styled-components';

export default {
    title: 'Button/Button', // "문서"/"문서"/"컴포넌트명" 1차분류/2차분류/3차분류

    decorators: [
        // 아래에 export 한 컴포넌트를 감싸는 방법
        (Story: any) => (
            <StoryContainer>
                <Story />
            </StoryContainer>
        ),
    ],
};

const StoryContainer = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`;

const ButtonTemplate = (args: any) => <Button {...args} />;

export const Buttons: any = () => {
    return (
        <>
            <Button>Button</Button>

            <ButtonHover>ButtonHover</ButtonHover>

            <TextButton>TextButton</TextButton>
        </>
    );
};

export const DefaultButton: any = ButtonTemplate.bind({});
DefaultButton.args = {
    color: '#ffffff',
    type: 'button',

    children: <h3>버튼</h3>,
};

export const TextButtonStory: any = () => {
    return <TextButton>New</TextButton>;
};

export const ButtoHoverStory: any = () => {
    return (
        <ButtonHover isOverrlay width="350px">
            <>
                Sign up for newsletters
                <img src="/images/icon/arrow-right.svg" alt="arrow" />
            </>
        </ButtonHover>
    );
};
