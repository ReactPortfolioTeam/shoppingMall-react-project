import React from 'react';
import { Route, Switch } from 'react-router';
import styled from 'styled-components';
import AdminHeader from './AdminHeader';
import AdminSideMenu from './AdminSideMenu';
import ProductManagement from './ProductManagement';
import UserAccountManagement from './UserAccountManagement';

const AdminMain = () => {
    return (
        <AdminMainContainer>
            <AdminHeader />
            <div>
                <AdminSideMenu />
                <div className="admin-main-container">
                    <Switch>
                        <Route path="/admin/user">
                            <UserAccountManagement />
                        </Route>
                        <Route path="/admin/product">
                            <ProductManagement />
                        </Route>
                    </Switch>
                </div>
            </div>
        </AdminMainContainer>
    );
};

export default AdminMain;

const AdminMainContainer = styled.div`
    & > div {
        display: flex;
        & > nav {
            width: 20%;
            height: 100%;
        }
        & > div {
            width: 80%;
            height: 100%;
        }
    }
`;
