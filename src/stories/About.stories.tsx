import Slide from 'component/Slide/Slide';
import About from 'container/About/About';
import AboutContent from 'container/About/AboutContent';
import AboutFooter from 'container/About/AboutFooter';
import AboutMain from 'container/About/AboutMain';

import React from 'react';

export default {
    title: 'Page/About', // "문서"/"문서"/"컴포넌트명" 1차분류/2차분류/3차분류

    decorators: [
        // 아래에 export 한 컴포넌트를 감싸는 방법
        (Story: any) => <Story />,
    ],
};

export const AboutStory = () => {
    return <About />;
};
export const AboutMainStory = () => {
    return <AboutMain />;
};
export const AboutContentStory = () => {
    return <AboutContent />;
};

export const AboutFooterStory = () => {
    return <AboutFooter />;
};
export const AboutSlideStory = () => {
    return <Slide imgObject={dummyImage} />;
};

const dummyImage = [
    'https://picsum.photos/1500/1000?random=1',
    'https://picsum.photos/1500/1000?random=8',
    'https://picsum.photos/1500/1000?random=7',
    'https://picsum.photos/1500/1000?random=6',
    'https://picsum.photos/1500/1000?random=5',
    'https://picsum.photos/1500/1000?random=4',
    'https://picsum.photos/1500/1000?random=3',
    'https://picsum.photos/1500/1000?random=2',
];
