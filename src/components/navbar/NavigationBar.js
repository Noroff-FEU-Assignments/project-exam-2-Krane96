import { Link, useNavigate } from "react-router-dom";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { useEffect, useState } from "react";
import classes from "./NavigationBar.module.scss";

const NavigationBar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
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

  const loginButton = () => {
    menuToggle();
    navigate("/login");
  };

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
              <Link to="/page-three" onClick={menuToggle}>
                PageThree
              </Link>
            </li>
          </ul>
          <button onClick={loginButton}>Login</button>
        </nav>
        <div className={classes.header__content__toggle}>
          <span onClick={menuToggle} style={{fontSize:"1.1rem"}}>Menu</span>
          {!menuOpen ? (
            <BiMenuAltRight onClick={menuToggle} />
          ) : (
            <AiOutlineClose onClick={menuToggle} />
          )}
        </div>
      </div>
    </header>
  );
};

export default NavigationBar;
