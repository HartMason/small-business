import React from "react";
import { Routes, Route } from "react-router-dom"
import Login from "./containers/Login";
import Listings from "./containers/Listings";
import BusinessDetailsPage from "./containers/BusinessDetailsPage";
import AddNewListing from "./containers/AddNewListing";
import ProtectedRoutes from "./components/ProtectedRoutes";

const Router = () => {
  return (
    <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/Listings" element={<Listings/>}/> 
        <Route path="/About/:id" element={<BusinessDetailsPage/>}/> 
        <Route path="/AddNewListing" element={<ProtectedRoutes component={AddNewListing}/>}/> 

    </Routes>
  )
}

export default Router
