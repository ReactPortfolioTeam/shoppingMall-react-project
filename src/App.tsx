import GlobalStyle from 'assets/css/global/Global.style';
import { MyTheme } from 'assets/css/global/theme.style';
import About from 'container/About/About';
import Footer from 'container/layout/Footer';
import Header from 'container/layout/Header';
import Login from 'container/Login/Login';
import MainView from 'container/Main/Main_view';
import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Shop from 'container/Shop/Shop';

function App() {
    const [menu, setMenu] = useState<string>('');
    console.log(menu);
    return (
        <ThemeProvider theme={MyTheme}>
            <GlobalStyle />
            <Header setMenu={setMenu} />
            {menu === '' && <MainView />}
            {menu === 'login' && <Login />}
            {menu === 'shop' && <Shop />}
            {menu === 'about' && <About />}
            <Footer />
        </ThemeProvider>
    );
}

export default App;
