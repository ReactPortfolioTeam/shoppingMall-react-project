import Button from 'component/Button/Button';
import { ButtonHover } from 'component/Button/ButtonHover';

import TextButton from 'component/Button/TextButton';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const AdminSideMenu = () => {
    return (
        <AdminSideMenuContainer>
            <ul>
                <li>
                    <Link to="/admin/user">
                        <ButtonHover>회원정보관리</ButtonHover>
                    </Link>
                </li>
                <li>
                    <Link to="/admin/product">
                        <ButtonHover>상품등록</ButtonHover>
                    </Link>
                </li>
                <li>
                    <Link to="/admin/product">
                        <ButtonHover>상품수정</ButtonHover>
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        <ButtonHover width="100%" height="40px">
                            메인페이지로
                        </ButtonHover>
                    </Link>
                </li>
            </ul>
        </AdminSideMenuContainer>
    );
};

export default AdminSideMenu;

const AdminSideMenuContainer = styled.nav`
    ul {
        margin-top: 20px;
        padding: 0 10px;
    }
    a > div {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
    }
    button {
        display: flex;
        justify-content: center;
        width: 100%;
        height: 60px;
        font-size: ${(p) => p.theme.fonts.size.title};
        color: ${(p) => p.theme.colors.gray};
        margin-bottom: 3px;
        cursor: pointer;
        transition: all 0.2s;
        padding: 30px 0;
    }
    li:last-of-type {
        position: fixed;
        width: 14%;
        bottom: 0;
    }
`;
