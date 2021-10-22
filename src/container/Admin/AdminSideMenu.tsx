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
                        <Button type="button">회원정보관리</Button>
                    </Link>
                </li>
                <li>
                    <Link to="/admin/product">
                        <Button type="button">상품정보관리</Button>
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        <Button type="button" height="40px">
                            메인페이지로
                        </Button>
                    </Link>
                </li>
            </ul>
        </AdminSideMenuContainer>
    );
};

export default AdminSideMenu;

const AdminSideMenuContainer = styled.nav`
    background-color: rgba(66, 66, 66, 0.5);
    ul {
        margin-top: 20px;
        padding: 0 10px;
    }
    button {
        width: 100%;
        height: 40px;
        border: 1px solid ${(p) => p.theme.colors.darkGray};
        background-color: ${(p) => p.theme.colors.white};
        margin-bottom: 3px;
        cursor: pointer;
        transition: all 0.2s;
        :hover {
            opacity: 0.5;
        }
    }
    li:nth-of-type(3) {
        position: fixed;
        width: 14%;
        bottom: 0;
    }
`;
