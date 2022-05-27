import {  Routes, Route, useLocation } from "react-router-dom";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Admin from "../pages/admin/Admin";
import Hotels from "../pages/hotels/Hotels";
import Details from "../pages/hotels/Details";
import Contact from "../pages/contact/Contact";
import Messages from "../pages/admin/Messages";
import BookingSent from "../common_messages/BookingSent";
import Bookings from "../pages/admin/Bookings";
import CreateBooking from "../pages/admin/CreateBooking";
import { AnimatePresence } from "framer-motion";

const AnimatedRoutes = () => {
    const location = useLocation();
  return (
    <>
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
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
      </AnimatePresence>
    </>
  );
};

export default AnimatedRoutes;
