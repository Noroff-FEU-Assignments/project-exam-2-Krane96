import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/navbar/NavigationBar";
import Home from "./components/pages/home/Home";
import Login from "./components/pages/login/Login";
import Admin from "./components/pages/admin/Admin";
import Footer from "./components/footer/Footer";
import Hotels from "./components/pages/Hotels/Hotels";
import { AuthProvider } from "./utils/context";
import LoginForm from "./components/loginform/LoginForm";
import { useState } from "react";
import "./styles/main.scss"

function App() {
  return (
    <>
    <AuthProvider>
    <Router>
    <NavigationBar />
    <Routes>
            <Route index element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/hotels" element={<Hotels />} />
          </Routes>
    </Router>
    <div style={{height:"100vh"}}></div>
    <Footer />
    </AuthProvider>
    </>
  );
}

export default App;
