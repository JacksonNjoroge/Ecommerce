import {  Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Products from "../Pages/Products/Products";
import Login from "../Components/Sign-In/Login";
import Registration from "../Components/Sign-Up/Registration";

function Routing() {
return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration/>} />
    </Routes>
)
}

export default Routing