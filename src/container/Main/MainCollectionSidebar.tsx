/* eslint-disable react/react-in-jsx-scope */
import { MyTheme } from 'assets/css/global/theme.style';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { ProductFilter } from 'state/atom/dummy/ProductFilter';

import styled from 'styled-components';
import TextButton from '../../component/Button/TextButton';

export interface IAppProps {}

const MainCollectionSidebar = (props: IAppProps) => {
    const setFilter = useSetRecoilState(ProductFilter);

    const getSearch = (item: string) => {
        setFilter(item);
        console.log('변경', item);
    };

    return (
        <CollectionSidebarStyle id="collection__categories">
            {/* 추후에 라우터 적용후 <Link> 태그로 변환 */}
            <h2>shop</h2>
            {Item.map((item) => (
                <Link
                    to={{ pathname: '/shop', search: `?menu=${item}` }}
                    key={item}
                    replace
                    onClick={() => getSearch(item)}
                >
                    <TextButton>{item}</TextButton>
                </Link>
            ))}
        </CollectionSidebarStyle>
    );
};

const CollectionSidebarStyle = styled.aside`
    display: flex;
    flex-direction: column;
    width: auto;
    padding: ${MyTheme.paddings.p5};
    padding-right: ${MyTheme.paddings.p40};
    margin: 0 ${MyTheme.margins.m80} 0 ${MyTheme.margins.m5};
    border-right: 1px solid black;
    & > h2 {
        margin-bottom: ${MyTheme.margins.m5};
    }
    & > a {
        display: inline;
        margin-top: 5px;
    }
`;

export default MainCollectionSidebar;
const Item = [
    'New',
    'Bottoms',
    'Shirts',
    'Tees',
    'Fleece',
    'Knits',
    'Outerwear',
    'Footwear',
    'Accessories',
    'LifeStyle',
    'Home',
    'Sale',
];
