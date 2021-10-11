import Input from 'component/Input/Input';
import React, { useState } from 'react';
import { StoryContainer } from './StoryContainer';

export default {
    title: 'Input/Input', // "문서"/"문서"/"컴포넌트명" 1차분류/2차분류/3차분류

    decorators: [
        // 아래에 export 한 컴포넌트를 감싸는 방법
        (Story: any) => (
            <StoryContainer>
                <Story />
            </StoryContainer>
        ),
    ],
};

export const InputStory = () => {
    const [value, setValue] = useState('');
    return (
        <Input
            id="email"
            value={value}
            onChange={(e: any) => setValue(e.target.value)}
        />
    );
};
