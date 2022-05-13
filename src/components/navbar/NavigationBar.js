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
  const [hideToggle, setHideToggle] = useState(false);

  function handleToggle() {
    setHideToggle((hideToggle) => !hideToggle);
  }

  let hideToggleCheck = hideToggle ? "hide" : "";

  const [size, setSize] = useState({
    width: 700,
    height: 1000,
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
      <header className={classes.header}>
        <div className={classes.header__content}>
          <div className="logo_container">
            <Link to="/" className={classes.header__content__logo}>
              <img
                src="/images/essie/sample-3.png"
                style={{ width: "100%", height: "55px" }}
              />
            </Link>
            <Link to="/" style={{fontSize:"0.9em"}}>Holidaze</Link>
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
                <Link to="/contact" onClick={menuToggle}>
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/hotels" onClick={menuToggle}>
                  Hotels
                </Link>
              </li>
              <Link to="/Details"></Link>
            </ul>
            {auth ? (
              <>
                <Link to="/admin">Admin</Link> |{" "}
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
    </>
  );
};

export default NavigationBar;

/*
{auth ? (
            <>
              <h4 className="loggedUser">{`${auth.user.username + " "}`}</h4>
              <RiAccountPinCircleLine style={{ fontSize: "2em" }} />
              {error ? (
                "Error"
              ) : (
                
                <Link to="/login">
                  <button onClick={logout} className="Btn">
                    Log out
                  </button>
                </Link>
                
              )}
            </>
          ) : (
            <Link to="/login" />
          )} 
 */
