import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import {UserProvider} from './context/user/UserProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(

  <BrowserRouter>
    <React.StrictMode>
      <UserProvider>
        {/* <ProductProvider> */}
       <App />  
       {/* </ProductProvider> */}
      </UserProvider>
     </React.StrictMode>
  </BrowserRouter>

)
