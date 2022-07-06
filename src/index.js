import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    Routes,
    Route,
    BrowserRouter,
    Link,
} from "react-router-dom";

import { App, Header } from './components'


const root = ReactDOM.createRoot(document.getElementById('app'))
root.render(
    <BrowserRouter>

        <Header />
        <App />
    
    </BrowserRouter>
);
