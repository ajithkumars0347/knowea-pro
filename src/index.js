import React from "react";
import ReactDOM from 'react-dom/client';
import "./style.css";
import App from './App';
import Login from './LoginPage';
import Signup from './SignupPage';
import { useState } from 'react';
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

function Authentication(){
    const [users,setusers] = useState(
        [
            {
                username:"ajith",
                password:"123"
            }
        ]
    )
    return(<div>
        <BrowserRouter>
      
        <Routes>
        <Route path='/' element={<Login users={users} setusers={setusers}/>}></Route>
        <Route path='/signup' element={<Signup users={users} setusers={setusers}/>}></Route>
        <Route path='/app' element={<App/>}></Route>
      
        </Routes>
        </BrowserRouter>
       
        </div>)
}
 root.render(
    <div>
    <Authentication/>
    </div>
);
