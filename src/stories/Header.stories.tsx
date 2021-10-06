import Header from "container/layout/Header";
import React from "react";

export default {
    title: "Header/Header", // "문서"/"문서"/"컴포넌트명" 1차분류/2차분류/3차분류

    decorators: [
        // 아래에 export 한 컴포넌트를 감싸는 방법
        (Story: any) => <Story />,
    ],
};

export const HeaderStory = () => {
    return <Header></Header>;
};
