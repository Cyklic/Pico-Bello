import AboutPic from "./abt_images/AboutPic.png";
import Link from "next/link";
import classes from "./about2.module.css";

export default function About2() {
  return (
    <div className={classes.aboutTwo}>
      <div className={classes.abtSec}>
        <img src={AboutPic.src} alt="" />
        <div className={classes.abtTxtTwo}>
          <h2>We partner with the best design agency to give only the best</h2>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page
          </p>
          <Link href="#" className={classes.butn}>
            Check out our Media Partner
          </Link>
        </div>
      </div>
    </div>
  );
}
