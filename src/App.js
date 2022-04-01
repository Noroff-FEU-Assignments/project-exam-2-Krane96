import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/navbar/NavigationBar";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
function App() {
  return (
    <>
    <Router>
    <NavigationBar />
    <Routes>
            <Route index element={<Home />} />

            <Route path="/login" element={<Login />} />
          </Routes>
    </Router>
    </>
  );
}

export default App;
