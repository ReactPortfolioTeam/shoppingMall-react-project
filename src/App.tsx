import GlobalStyle from 'assets/css/global/Global.style';
import { MyTheme } from 'assets/css/global/theme.style';
import Footer from 'container/layout/Footer';
import Header from 'container/layout/Header';
import Login from 'container/Login/Login';
import MainView from 'container/Main/Main_view';
import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';

function App() {
    const [menu, setMenu] = useState<string>('');
    console.log(menu);
    return (
        <ThemeProvider theme={MyTheme}>
            <GlobalStyle />
            <Header setMenu={setMenu} />
            {menu === '' && <MainView />}
            {menu === 'login' && <Login />}

            <Footer />
        </ThemeProvider>
    );
}

export default App;
