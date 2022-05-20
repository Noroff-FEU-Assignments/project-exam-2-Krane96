import SocialsIcons from "../socialsIcon/SocialsIcons";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer_row_1">
          <div className="grid_footer">
            <ul>
              <h4>Support</h4>
              <li>Safety</li>
              <li>Covid-19</li>
              <li>FAQs</li>
              <li>Contact us</li>
            </ul>
          </div>
          <div className="grid_footer">
            <ul>
              <h4>User Privacy</h4>
              <li>Terms & Conditions</li>
              <li>Privacy</li>
              <li>Cookies</li>
            </ul>
          </div>
          <div className="grid_footer">
            <ul>
              <h4>About</h4>
              <li>Travel Guides</li>
              <li>About us</li>
              <li>Vacation rentals</li>
              <li>Site Index</li>
            </ul>
          </div>
        </div>
        <div className="footer_row_2">
          <img
            src="/images/essie/white_logo.jpg"
            style={{ width: "60px", height: "60px" }}
          />
          <span
            style={{ color: "#eff1f394", marginTop: "1rem", fontSize: ".9em" }}
          >
            &#169; Holidaze. All rights reserved
          </span>
          <span
            style={{ color: "#eff1f394", marginTop: "1rem", fontSize: ".9em" }}
          >
            something - something
          </span>
          <SocialsIcons />
        </div>
      </footer>
    </>
  );
};

export default Footer;
