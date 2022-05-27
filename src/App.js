import { BrowserRouter as Router} from "react-router-dom";
import NavigationBar from "./components/navbar/NavigationBar";
import Footer from "./components/footer/Footer";
import { AuthProvider } from "./utils/context";
import HowItWorks from "./components/howitworks/HowItWorks";
import AnimatedRoutes from "./components/navbar/AnimatedRoutes";
import "./styles/main.scss";

const App = () => {
  return (
    <>
      <AuthProvider>
        <Router>
          <NavigationBar />
          <AnimatedRoutes />
          <HowItWorks />
          <Footer />
        </Router>
      </AuthProvider>
    </>
  );
};

export default App;
