import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './commen/store';

//css admin
import './adminstration/css/questions_styles.css'
import './adminstration/css/addQ_styles.css'
import './adminstration/css/editQ_styles.css'
import './adminstration/css/admin_login.css'
import './adminstration/css/profile_admin.css'
//

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
     <App />
    </Provider>
  </React.StrictMode>
);


