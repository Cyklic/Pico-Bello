import mainImage from "./images/Maskgroup.png";
import mainLogo from "./images/LogoMain.svg";
import Logo1 from "./images/LOGO1.svg";
import Logo2 from "./images/LOGO2.svg";
import Logo3 from "./images/LOGO3.svg";
import Logo4 from "./images/LOGO4.svg";
import Logo5 from "./images/LOGO5.svg";
import Link from "next/link";
import classes from "./home.module.css";

export default function Home() {
  return (
    <main>
      <div className={classes.bigWrapper}>
        <header>
          <div className={classes.container}>
            <div className={classes.logo}>
              <img src={mainLogo.src} alt="Logo" />
            </div>

            <div className={classes.linking}>
              <ul>
                <li>
                  <Link href="#" className={classes.link}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="http://localhost:3000/about"
                    className={classes.link}
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className={classes.link}>
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="#" className={classes.link}>
                    Team
                  </Link>
                </li>
                <li>
                  <Link href="#" className={classes.link}>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className={classes.logicMedia}>
              <Link href="#" className={classes.logicMed}>
                Logical media
              </Link>
            </div>
          </div>
        </header>

        <div className={classes.showcaseArea}>
          <div className={classes.container}>
            <div className={classes.left}>
              <div className={classes.bigTitle}>
                <h1>Ultramodern infrastructural Developement</h1>
              </div>
              <p className={classes.text}>
                It is a long established fact that a reader will be distracted
                by the readable content of a page.
              </p>
              <div className={classes.cta}>
                <Link href="#" className={classes.btn}>
                  Start a project
                </Link>
                <Link href="#" className={classes.whatWeDo}>
                  What we do
                </Link>
              </div>
            </div>
            <div className={classes.right}>
              <img
                src={mainImage.src}
                alt="Body-Image"
                className={classes.bodyImg}
              />
            </div>
          </div>
        </div>
        <div className={classes.bottomArea}>
          <div className={classes.container}>
            <div className={classes.btmText}>
              <p>We are trusted by</p>
            </div>
            <div className={classes.moreLogos}>
              <ul>
                <li>
                  <Link href="#">
                    <img src={Logo1.src} alt="" />
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <img src={Logo2.src} alt="" />
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <img src={Logo3.src} alt="" />
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <img src={Logo4.src} alt="" />
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <img src={Logo5.src} alt="" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
