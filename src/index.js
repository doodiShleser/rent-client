import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';

import Routes from './Routes';
//import App from './App';
import * as serviceWorker from './serviceWorker';
// import RentsureApp from './RentsureApp';



// ReactDOM.render(
//   <React.StrictMode>
//     <RentsureApp/>
//   </React.StrictMode>,
//   document.getElementById('root')
// );








ReactDOM.render(
    <Router>
        <div >
            <Routes />
        </div>
    </Router>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
