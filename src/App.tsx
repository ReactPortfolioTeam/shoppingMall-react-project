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
import { RecoilRoot } from 'recoil';


function App() {
    let isAdmin = false;
    if (window.location.pathname.includes('/admin')) {
        isAdmin = true;
    }
    const [isCart, setIsCart] = useState(false);
    return (

        
        <RecoilRoot>
        <ThemeProvider theme={MyTheme}>
            <GlobalStyle />
            <BrowserRouter>
                {!isAdmin && <Header setIsCart={setIsCart} />}
                <MiniCart isCart={isCart} setIsCart={setIsCart} />
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
                    <Route path="/shop">
                        <Shop />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/admin">
                        <AdminMain />
                    </Route>
                </Switch>
                {!isAdmin && <Footer />}
            </BrowserRouter>
        </ThemeProvider>
        </RecoilRoot>

    );
}

export default App;
