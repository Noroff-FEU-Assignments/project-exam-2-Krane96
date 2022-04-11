import classes from "./Footer.module.scss";
import SocialsIcons from "../socialsIcon/SocialsIcons";


const Footer = () => {
  return (
    <>
      <footer>
        <div className={classes.footer_row_1}>
          <div className={classes.grid}>
            <ul>
              <h4>Support</h4>
              <li>Safety</li>
              <li>Covid-19</li>
              <li>FAQs</li>
              <li>Contact us</li>
            </ul>
          </div>
          <div className={classes.grid}>
            <ul>
              <h4>User Privacy</h4>
              <li>Terms & Conditions</li>
              <li>Privacy</li>
              <li>Cookies</li>
            </ul>
          </div>
          <div className={classes.grid}>
            <ul>
              <h4>About</h4>
              <li>Text</li>
              <li>Text</li>
              <li>Text</li>
              <li>Text</li>
            </ul>
          </div>
        </div>
        <div className={classes.footer_row_2}>
          <span>&#169; Holidaze. All rights reserved</span>
          <span>something - something</span>
          <SocialsIcons />
        </div>
      </footer>
    </>
  );
};

export default Footer;
