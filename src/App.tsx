import GlobalStyle from 'assets/css/global/Global.style';
import { MyTheme } from 'assets/css/global/theme.style';
import Footer from 'container/layout/Footer';
import Header from 'container/layout/Header';
import MainView from 'container/Main/Main_view';
import React from 'react';
import { ThemeProvider } from 'styled-components';

function App() {
    console.log(MyTheme);
    return (
        <ThemeProvider theme={MyTheme}>
            <GlobalStyle />
            <Header item="dd" />
            <MainView />
            <Footer />
        </ThemeProvider>
    );
}

export default App;
