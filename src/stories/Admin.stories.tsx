import Slide from 'component/Slide/Slide';
import About from 'container/About/About';
import AboutContent from 'container/About/AboutContent';
import AboutFooter from 'container/About/AboutFooter';
import AboutMain from 'container/About/AboutMain';
import AdminMain from 'container/Admin/AdminMain';
import ProductManagement from 'container/Admin/ProductManagement';
import UserAccountManagement from 'container/Admin/UserAccountManagement';

import React from 'react';

export default {
    title: 'Page/Admin', // "문서"/"문서"/"컴포넌트명" 1차분류/2차분류/3차분류

    decorators: [
        // 아래에 export 한 컴포넌트를 감싸는 방법
        (Story: any) => <Story />,
    ],
};

export const AdminStory = () => {
    return <AdminMain />;
};

export const UserAdminStory = () => {
    return <UserAccountManagement />;
};

export const ProductAdminStory = () => {
    return <ProductManagement />;
};
