import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';
import App from './App'
import { store } from './app/store';
import { disableReactDevTools } from '@fvilers/disable-react-devtools'


if (process.env === "production") disableReactDevTools()

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />;
        </Provider>
    </React.StrictMode>
)
