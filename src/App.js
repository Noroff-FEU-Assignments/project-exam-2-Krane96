import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/navbar/NavigationBar";
import Home from "./components/pages/home/Home";
import Login from "./components/pages/login/Login";
import Admin from "./components/pages/admin/Admin";
import Footer from "./components/footer/Footer";
import Hotels from "./components/pages/hotels/Hotels";
import Details from "./components/pages/hotels/Details";
import { AuthProvider } from "./utils/context";
import HowItWorks from "./components/howitworks/HowItWorks";
import Contact from "./components/pages/contact/Contact";
import Messages from "./components/pages/admin/Messages";
import BookingSent from "./components/common_messages/BookingSent";
import Bookings from "./components/pages/admin/Bookings";
import CreateBooking from "./components/pages/admin/CreateBooking";
import "./styles/main.scss";

function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <NavigationBar />
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <Routes>
              <Route index element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/hotels" element={<Hotels />} />
              <Route path="details/:id" element={<Details />} />
              <Route path="admin/messages" element={<Messages />} />
              <Route path="admin/bookings" element={<Bookings />} />
              <Route path="admin/create" element={<CreateBooking />} />
              <Route path="/BookingSent" element={<BookingSent />} />
            </Routes>
          </div>
          <HowItWorks />
        <Footer />
        </Router>
        
      </AuthProvider>
    </>
  );
}
//<div style={{ height: "100vh" }}></div>
export default App;
