import GlobalStyle from 'assets/css/global/Global.style';
import Footer from 'container/layout/Footer';
import Header from 'container/layout/Header';
import MainView from 'container/Main/Main_view';
import React from 'react';

function App() {
    return (
        <div className="App">
            <GlobalStyle />
            <Header item="dd" />
            <MainView />
            <Footer />
        </div>
    );
}

export default App;
