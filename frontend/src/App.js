
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import  PrivateRoute from './components/PrivateRoute.js'
import Home from './components/Home.js';
import RegistrationForm from './components/RegistrationForm.js';
 import Chat from './components/Chat.js'
 import LoginForm from './components/LoginForm.js';
import ForgotPasswordForm from './components/ForgotPasswordForm.js';
import ResetPasswordPage from './components/ResetPasswordPage.js';


function App() {
  return (  
 <>
    <Router>
    <div className="App">
      <header className="App-header">
        <Routes>
        <Route path='/signup' exact element={<RegistrationForm/>} />
        <Route path='/login' exact element={<LoginForm/>}/>
        <Route path="/" exact element={<PrivateRoute><Home/></PrivateRoute>} />
        <Route  path="/chatbot" exact element={<PrivateRoute><Chat/></PrivateRoute>}  />
        <Route path='/forgot-password' exact element={<ForgotPasswordForm/>}/>
        <Route path='/reset-password/:id' exact element={<ResetPasswordPage/>}/>

      </Routes>
      </header> 
    </div>
    </Router>
    </>
  );
}

export default App;



