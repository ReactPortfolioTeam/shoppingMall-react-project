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
                        <ButtonHover width="100%">회원정보관리</ButtonHover>
                    </Link>
                </li>
                <li>
                    <Link to="/admin/product">
                        <ButtonHover>상품정보관리</ButtonHover>
                    </Link>
                </li>
            </ul>
        </AdminSideMenuContainer>
    );
};

export default AdminSideMenu;

const AdminSideMenuContainer = styled.nav``;
