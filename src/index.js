import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import {
    Routes,
    Route,
    BrowserRouter,
    Link,
} from "react-router-dom";
// import { loginPerson, registerPerson } from './api'

import { App, Header } from './components'

// const [userToken, setUserToken] = useState(loginPerson())

const root = ReactDOM.createRoot(document.getElementById('app'))
root.render(
    <BrowserRouter>

        <Header />
        <App />
    
    </BrowserRouter>
);
