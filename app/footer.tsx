import Link from "next/link";
import classes from "./footer.module.css";

export default function Footer() {
  return (
    <div className={classes.footer}>
      <div className={classes.socLinks}>
        <ul>
          <li>
            <Link href="#" className={classes.soli}>
              Facebook
            </Link>
          </li>
          <li>
            <Link href="#" className={classes.soli}>
              Twitter
            </Link>
          </li>
          <li>
            <Link href="#" className={classes.soli}>
              Instagram
            </Link>
          </li>
          <li>
            <Link href="#" className={classes.soli}>
              Linkedin
            </Link>
          </li>
        </ul>
      </div>
      <div className={classes.webLink}>
        <Link href="#" className={classes.weli1}>
          info@pico-belloprojekte.com
        </Link>
        <Link href="#" className={classes.weli2}>
          www.pico-belloprojekte.com
        </Link>
      </div>
      <div className={classes.numAdr}>
        <p>+234 (810) 456 7898</p>
        <p className={classes.numSpace}>
          We are located at 3, Eket Close, Area 8, Garki, Abuja FCT
        </p>
      </div>
    </div>
  );
}
