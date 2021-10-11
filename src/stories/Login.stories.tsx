import Input from 'component/Input/Input';
import Login from 'container/Login/Login';
import React, { useState } from 'react';

export default {
    title: 'Page/Login', // "문서"/"문서"/"컴포넌트명" 1차분류/2차분류/3차분류

    decorators: [
        // 아래에 export 한 컴포넌트를 감싸는 방법
        (Story: any) => <Story />,
    ],
};

export const LoginStory = () => {
    return <Login />;
};
