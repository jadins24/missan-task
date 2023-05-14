import React from "react";
import { BrowserRouter,Routes,Route,Navigate } from "react-router-dom";
import { Provider, useSelector } from "react-redux";
import { stores } from "./store";
import Home from "./home/home";
import Products from "./products/products.js";
import Header from './header/header';
import Footer from './footer/footer';
import Ourproducts from "./ourproducts/ourproducts";

const Redux = () =>{
    return(
        <>
           <Provider store={stores}>
                <Routing/>
           </Provider> 
        </>
    );
}
const Main = () =>{
    return(
        <>
            <Home />
            <Products />
            
        </>
    );
}


const Routing = () =>{


    return(
        <>
            <BrowserRouter>
                
                    <Header/>
                    <Routes>
                        <Route path='/' element={<Main/>} />
                        
                        <Route path='/ourproducts' element={<Ourproducts />} />
                        
                    </Routes>

                    <Footer/>
            </BrowserRouter>
        </>
    );
}

export default Redux;

