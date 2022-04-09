import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/navbar/NavigationBar";
import Home from "./components/pages/home/Home";
import Login from "./components/pages/login/Login";
import Admin from "./components/pages/admin/Admin";
import { AuthProvider } from "./utils/context";
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
          </Routes>
    </Router>
    </AuthProvider>
    </>
  );
}

export default App;
