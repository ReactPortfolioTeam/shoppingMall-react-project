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
            </nav>
            <div className="">
                <h2 className="screen_out">로고,장바구니</h2>
                <img
                    src="/images/Logo.png"
                    alt="Logo"
                    width="200px"
                    height="200px"
                />
            </div>
        </HeaderContainer>
    );
};

export default Header;

const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
`;
