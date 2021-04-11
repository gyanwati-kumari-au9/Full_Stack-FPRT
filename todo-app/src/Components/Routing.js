import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from '../Container/Home';
import Header from './header';
import Footer from './footer';
import SignUp from './signUp';
// import Login from './login';



const Routing = () => {
    return(
        <BrowserRouter>
            <Header />
            <hr/>
            <div className="row">
                <div className="col-md-10">
                    <Route exact path="/" component={Home}/>
                    <Route path="/signup" component={SignUp} />
                    {/* <Route path="/login" component={Login} /> */}

                </div>
            </div>
           
            <Footer/>
        </BrowserRouter>
    )
}                                                                     

export default Routing;