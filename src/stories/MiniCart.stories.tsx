import MiniCart from 'container/MiniCart/MiniCart';
import React from 'react';

export default {
    title: 'MiniCart/MiniCart',
    decoration: [(Story: any) => <Story />],
};
export const MiniCartStories = () => {
    return <MiniCart show handleModalShow={undefined} />;
};
