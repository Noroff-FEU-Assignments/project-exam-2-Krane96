import { Link, useNavigate } from "react-router-dom";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { useContext, useEffect, useState } from "react";
import classes from "./NavigationBar.module.scss";
import LoginForm from "../loginform/LoginForm";
import AuthContext from "../../utils/context";

const NavigationBar = () => {
  const navigate = useNavigate();
  const [auth, setAuth] = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  const [size, setSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (size.width > 768 && menuOpen) {
      setMenuOpen(false);
    }
  }, [size.width, menuOpen]);

  const menuToggle = () => {
    setMenuOpen((p) => !p);
  };

  function logout() {
    setAuth(null);
    navigate("/");
  }

  return (
    <header className={classes.header}>
      <div className={classes.header__content}>
        <Link to="/" className={classes.header__content__logo}>
          Holidaze
        </Link>
        <nav
          className={`${classes.header__content__nav} ${
            menuOpen && size.width < 768 ? classes.isMenu : ""
          }`}
        >
          <ul>
            <li>
              <Link to="/" onClick={menuToggle}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={menuToggle}>
                Contact
              </Link>
            </li>
            <li>
              <Link to="/hotels" onClick={menuToggle}>
                Hotels
              </Link>
            </li>
          </ul>
          {auth ? (
            <>
              <Link to="/admin">Admin</Link> |{" "}
              <button onClick={logout}>Log out</button>
            </>
          ) : (
            <button
              onClick={() => {
                setOpenLogin(true);
                menuToggle();
              }}
            >
              Login
            </button>
          )}
        </nav>
        <div className={classes.header__content__toggle}>
          <span onClick={menuToggle} style={{ fontSize: "1.1rem" }}>
            Menu
          </span>
          {!menuOpen ? (
            <BiMenuAltRight onClick={menuToggle} />
          ) : (
            <AiOutlineClose onClick={menuToggle} />
          )}
        </div>
      </div>
      {openLogin && <LoginForm closeLogin={setOpenLogin} />}
    </header>
  );
};

export default NavigationBar;
