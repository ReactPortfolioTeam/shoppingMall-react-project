import Button from 'component/Button/Button';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const AdminHeader = () => {
    return (
        <AdminHeaderContainer>
            <h1>3SixTeen Administrator</h1>
        </AdminHeaderContainer>
    );
};

export default AdminHeader;

const AdminHeaderContainer = styled.header`
    height: 86px;
    width: 100%;
    background-color: ${(p) => p.theme.colors.darkGray};
    display: flex;
    align-items: center;
    justify-content: space-between;
    & > h1 {
        margin-left: 30px;
        color: ${(p) => p.theme.colors.white};
    }
    & > button {
        margin-right: 30px;
    }
`;
