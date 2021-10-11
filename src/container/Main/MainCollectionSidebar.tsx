import { MyTheme } from 'assets/css/global/theme.style';
import * as React from 'react';
import styled from 'styled-components';
import TextButton from '../../component/Button/TextButton';

export interface IAppProps {}

const MainCollectionSidebar = (props: IAppProps) => {
    return (
        <CollectionSidebarStyle id="collection__categories">
            {/* 추후에 라우터 적용후 <Link> 태그로 변환 */}
            <h2>shop</h2>
            <TextButton>
                <a>New</a>
            </TextButton>
            <TextButton>
                <a>Bottoms</a>
            </TextButton>
            <TextButton>
                <a>Shirts</a>
            </TextButton>
            <TextButton>
                <a>Tees</a>
            </TextButton>
            <TextButton>
                <a>Fleece</a>
            </TextButton>
            <TextButton>
                <a>Knits</a>
            </TextButton>
            <TextButton>
                <a>Outerwear</a>
            </TextButton>
            <TextButton>
                <a>Footwear</a>
            </TextButton>
            <TextButton>
                <a>Accessories</a>
            </TextButton>
            <TextButton>
                <a>LifeStyle</a>
            </TextButton>
            <TextButton>
                <a>Home</a>
            </TextButton>
            <TextButton>
                <a>Sale</a>
            </TextButton>
        </CollectionSidebarStyle>
    );
};

const CollectionSidebarStyle = styled.div`
    display: flex;
    flex-direction: column;
    width: 30%;
    padding: ${MyTheme.paddings.p5};
    border-right: 1px solid black;
    & > h2 {
        margin-bottom: ${MyTheme.margins.m5};
    }

    a:hover {
        font-size: larger;
        color: ${MyTheme.colors.gray};
        transition: all 100ms ease-out;
    }
`;

export default MainCollectionSidebar;
