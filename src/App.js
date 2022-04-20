import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/navbar/NavigationBar";
import Home from "./components/pages/home/Home";
import Login from "./components/pages/login/Login";
import Admin from "./components/pages/admin/Admin";
import Footer from "./components/footer/Footer";
import Hotels from "./components/pages/hotels/Hotels";
import Details from "./components/pages/details/Details";
import { AuthProvider } from "./utils/context";
import HowItWorks from "./components/howitworks/HowItWorks";


import "./styles/main.scss";

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
            <Route path=":hotelId" element={<Details />} />
          </Routes>
        </Router>
        <div style={{ height: "100vh" }}></div>
        <HowItWorks />
        <Footer />
      </AuthProvider>
    </>
  );
}

export default App;
