import GlobalStyle from 'assets/css/global/Global.style';
import { MyTheme } from 'assets/css/global/theme.style';
import About from 'container/About/About';
import Footer from 'container/layout/Footer';
import Header from 'container/layout/Header';
import Login from 'container/Login/Login';
import MainView from 'container/Main/Main_view';
import SearchView from 'container/Search/SearchView';
import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Shop from 'container/Shop/Shop';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AdminMain from 'container/Admin/AdminMain';
import MiniCart from 'container/MiniCart/MiniCart';
import ModalPortals from 'modal/ModalComponent';
import { RecoilRoot } from 'recoil';
import ShopDetail from 'container/Shop/ShopDetail';
import Checkout from 'container/Checkout/Checkout';
import AccountInfo from 'container/Login/AccountInfo/AccountInfo';
import EditProfile from 'container/Login/AccountInfo/EditProfile/EditProfile';

function App() {
    let isAdmin = false;
    if (window.location.pathname.includes('/admin')) {
        isAdmin = true;
    }

    return (
        <RecoilRoot>
            <ThemeProvider theme={MyTheme}>
                <GlobalStyle />
                <BrowserRouter>
                    {!isAdmin && <Header />}
                    <ModalPortals />
                    <Switch>
                        <Route exact path="/">
                            <MainView />
                        </Route>
                        <Route path="/search">
                            <SearchView />
                        </Route>
                        <Route path="/login">
                            <Login />
                        </Route>
                        <Route path="/accountInfo/:userid">
                            <AccountInfo />
                        </Route>
                        {/* <Route path="/accountInfo/editProfile/:userid">
                            <EditProfile />
                        </Route> */}
                        <Route path="/shop" exact>
                            <Shop />
                        </Route>
                        <Route path="/about">
                            <About />
                        </Route>
                        <Route path="/admin">
                            <AdminMain />
                        </Route>
                        <Route path="/shop/product/:id">
                            <ShopDetail />
                        </Route>
                        <Route path="/checkout">
                            <Checkout />
                        </Route>
                    </Switch>
                    {!isAdmin && <Footer />}
                </BrowserRouter>
            </ThemeProvider>
        </RecoilRoot>
    );
}

export default App;
