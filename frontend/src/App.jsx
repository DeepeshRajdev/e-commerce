import React from 'react'
import Home from './pages/Home'
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Success from "./pages/Success";
import { useSelector } from "react-redux";

function App() {
 
    const user = useSelector((state) => state.user.currentUser);
    // console.log(user);
    // const RequiredAuth = ({child})=>{
    //   user ? child : navigate('/login');
    //  }
  return (
    <Router>
      <Routes>
        <Route path="/" element = { <Home /> }/>
  
        <Route path="/products/:category" element = { <ProductList />}/>
         
        <Route path="/product/:id" element = { <Product /> }/>

        <Route path="/cart" element = { user ? <Cart/> : (<Navigate to="/login" />) }/>
        
        <Route path="/success" element = { <Success /> }/>
        
        <Route path="/login" element = {user ? <Navigate to="/" /> : <Login/>}/>

        <Route path="/register" element = {user ? <Navigate to="/" /> : <Register/>}/>
       
        </Routes>
    </Router>
  );
  
}

export default App
