import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/home/Home";
import Login from "./components/pages/login/Login";
import Admin from "./components/pages/admin/Admin";
import Details from "./components/pages/hotels/Details";
import Contact from "./components/pages/contact/Contact";
import Messages from "./components/pages/admin/Messages";
import Bookings from "./components/pages/admin/Bookings";
import CreateBooking from "./components/pages/admin/CreateBooking";
import NavigationBar from "./components/navbar/NavigationBar";
import Footer from "./components/footer/Footer";
import Hotels from "./components/pages/hotels/Hotels";
import { AuthProvider } from "./utils/context";
import HowItWorks from "./components/howitworks/HowItWorks";
import "./styles/main.scss";
import SuccessContact from "./components/pages/success_page/SuccessContact";
import BookingSuccess from "./components/pages/success_page/BookingSuccess";

const App = () => {
  return (
    <>
      <AuthProvider>
        <Router>
          <NavigationBar />
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
            <Route path="/successcontact" element={<SuccessContact />} />
            <Route path="/bookingsuccess" element={<BookingSuccess />} />
          </Routes>
          <HowItWorks />
          <Footer />
        </Router>
      </AuthProvider>
    </>
  );
};

export default App;
