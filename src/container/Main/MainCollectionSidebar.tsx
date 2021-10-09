import * as React from 'react';
import styled from 'styled-components';

export interface IAppProps {}

const MainCollectionSidebar = (props: IAppProps) => {
    return (
        <CollectionSidebarStyle id="collection__categories">
            {/* 추후에 라우터 적용후 <Link> 태그로 변환 */}
            <h4>shop</h4>
            <a href="#" className="collection__category">
                New
            </a>
            <a href="#" className="collection__category">
                Bottoms
            </a>
            <a href="#" className="collection__category">
                Shirts
            </a>
            <a href="#" className="collection__category">
                Tees
            </a>
            <a href="#" className="collection__category">
                Fleece
            </a>
            <a href="#" className="collection__category">
                Knits
            </a>
            <a href="#" className="collection__category">
                Outerwear
            </a>
            <a href="#" className="collection__category">
                Footwear
            </a>
            <a href="#" className="collection__category">
                Accessories
            </a>
            <a href="#" className="collection__category">
                LifeStyle
            </a>
            <a href="#" className="collection__category">
                Home
            </a>
            <a href="#" className="collection__category">
                Sale
            </a>
        </CollectionSidebarStyle>
    );
};

const CollectionSidebarStyle = styled.div`
    display: flex;
    flex-direction: column;
    width: 20%;
    padding: 4px;

    border: 2px solid red;
    a,
    a:link,
    a:visited {
        text-decoration: none;
        color: black;
        margin-bottom: 8px;
        &:hover {
            font-size: larger;
            color: gray;
            transition: all 200ms ease-in;
        }
    }
`;

export default MainCollectionSidebar;
