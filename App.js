import React from 'react';
// import './App.css';
// import Fun from './Component/Fun.js';
// import ApiTable from './Component/ApiTable';
import {Login} from './Component/Login'
import {Dlogin} from './Component/Dlogin'
import {Contact} from './Component/Contact'
import {About} from './Component/About'
import Registration from './Component/Registration.jsx'
import {Switch,Route} from 'react-router-dom'
import Regis from './Component/Regis' 
import Profile from './Component/Profile'
import Pro from './Component/Pro'
import Header from './Component/Header'
import Footer from './Component/Footer'
import Main from './Component/Main'


function App ()  {
    
    return (
        <>
        <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/Regis" component={Regis} />
                <Route exact path="/Dlogin" component={Dlogin} />
        
            </Switch>
            {/* <Profile></Profile> */}
        {/* <div className="body">
            <Header></Header>
            <Footer></Footer>
            <Main></Main>

        </div>            
             */}
        </>

    );
}
export default App ;
