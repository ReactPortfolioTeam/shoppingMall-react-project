import React from "react";
import styled from "styled-components";

const Header: React.FC = () => {
    return (
        <HeaderContainer>
            <nav>
                <h2 className="screen_out">메뉴</h2>
            </nav>
            <div className="">
                <h2 className="screen_out">로고,장바구니</h2>
            </div>
        </HeaderContainer>
    );
};

export default Header;

const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
`;
