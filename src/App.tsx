import GlobalStyle from 'assets/css/global/Global.style';
import Header from 'container/layout/Header';
import React from 'react';

function App() {
    return (
        <div className="App">
            <GlobalStyle />
            <Header item="dd" />
        </div>
    );
}

export default App;
