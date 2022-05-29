import {
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineTwitter,
} from "react-icons/ai";
import styles from "./SocialsIcons.module.scss";

const SocialsIcons = () => {
  return (
    <>
      <div className={styles.social_icons}>
        <span>
          <AiOutlineFacebook />
        </span>
        <span>
          <AiOutlineTwitter />
        </span>
        <span>
          <AiOutlineInstagram />
        </span>
      </div>
    </>
  );
};

export default SocialsIcons;
