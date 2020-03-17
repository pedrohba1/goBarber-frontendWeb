import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import history from './services/history';
import Routes from './routes';
import './config/ReactotronConfig';
import GlobalStyle from './styles/global';

// esse import store tem que vir depois da importação do reactotorn
import store from './store';

function App() {
    return (
        <Provider store={store}>
            <Router history={history}>
                <Routes />
                <GlobalStyle />
            </Router>
        </Provider>
    );
}

export default App;
