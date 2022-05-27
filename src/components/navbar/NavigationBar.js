import { Link, useNavigate } from "react-router-dom";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { RiAccountPinCircleLine } from "react-icons/ri";
import { useContext, useEffect, useState } from "react";
import classes from "./NavigationBar.module.scss";
import LoginForm from "../loginform/LoginForm";
import AuthContext from "../../utils/context";

const NavigationBar = () => {
  const navigate = useNavigate();
  const [auth, setAuth] = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  const [hideToggle, setHideToggle] = useState(false);

  function handleToggle() {
    setHideToggle((hideToggle) => !hideToggle);
  }

  let hideToggleCheck = hideToggle ? "hide" : "";

  const [size, setSize] = useState({
    width: 300,
    height: 300,
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
    <>
      <div className={classes.header_wrapper}>
        <header className={classes.header}>
          <div className={classes.header__content}>
            <div className="logo_container">
              <Link to="/" className={classes.header__content__logo}>
                <img
                  src="/images/essie/sample-3.png"
                  style={{ width: "100%", height: "55px" }}
                  alt="logo"
                />
              </Link>
              <Link to="/" style={{ fontSize: "0.9em" }}>
                Holidaze
              </Link>
            </div>
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
                  <Link to="/Contact" onClick={menuToggle}>
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to="/Hotels" onClick={menuToggle}>
                    Hotels
                  </Link>
                </li>
                <Link to="/Details"></Link>
              </ul>
              {auth ? (
                <>
                  <Link to="Aadmin" className="admin_link" onClick={menuToggle}>
                    Admin
                  </Link>
                  <button onClick={logout}>Log out</button>
                </>
              ) : (
                <button
                  className={`${hideToggleCheck}`}
                  onClick={() => {
                    setOpenLogin(true);
                    menuToggle();
                    handleToggle();
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
      </div>
      <div className="info_section">
        <div className="account_icon">
          {auth ? (
            <>
              <h4>{`${auth.user.username + " "}`}</h4>
              <Link to="/admin">
                <img
                  src="/images/batman_avatar.png"
                  style={{ width: "40px" }}
                  alt="batman_avatar"
                />
              </Link>
            </>
          ) : (
            <>
              <div className="info_logged_out">
                <RiAccountPinCircleLine
                  style={{ fontSize: "2em", cursor: "pointer" }}
                  className={`${hideToggleCheck}`}
                  onClick={() => {
                    setOpenLogin();
                    handleToggle();
                  }}
                />
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default NavigationBar;
