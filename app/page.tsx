import Home from "./home";
import Project from "./project";
import Team from "./team";
import Contact from "./contact";
import Footer from "./footer";

export default function LandingPage() {
  return (
    <>
      <Home />
      {/* <About1 />
      <About2 /> */}
      <Project />
      <Team />
      <Contact />
      <Footer />
    </>
  );
}
