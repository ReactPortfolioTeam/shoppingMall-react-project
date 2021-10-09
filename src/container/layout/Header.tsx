import TextButton from 'component/Header/TextButton';
import React from 'react';
import styled from 'styled-components';

interface Props {
    item: string;
}

const Header: React.FC<Props> = ({ item = 'item' }) => {
    return (
        <HeaderContainer>
            <nav>
                <h2 className="screen_out">메뉴{item}</h2>
                <ul>
                    <li>
                        <TextButton>
                            <p>Shop</p>
                        </TextButton>
                    </li>
                </ul>
            </nav>
            <div className="">
                <h2 className="screen_out">3sixteen</h2>
                <img
                    src="/images/Logo.png"
                    alt="Logo"
                    width="80px"
                    height="30px"
                />
            </div>
        </HeaderContainer>
    );
};

export default Header;

const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    height: auto;
    min-height: 86px;
    width: 100%;
    .screen_out {
        display: none;
    }
`;
