import Link from "next/link";
import classes from "./about1.module.css";

export default function About1() {
  const activity = [
    {
      title: "Architectural Designs",
      par: "It is a long established fact that a reader will be distracted by the readable content of a page.",
      link: "See Info",
    },
    {
      title: "Real Estate",
      par: "It is a long established fact that a reader will be distracted by the readable content of a page.",
      link: "See Info",
    },
    {
      title: "Media & Communication",
      par: "It is a long established fact that a reader will be distracted by the readable content of a page.",
      link: "Go to LogikalMidia",
    },
  ];

  return (
    <div className={classes.abt}>
      <div className={classes.title}>
        <h2>What we do</h2>
      </div>
      <div className={classes.aboutText}>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page.
        </p>
      </div>

      <div className={classes.box}>
        {activity.map((item, index) => (
          <WhatWeDo work={item} key={index} />
        ))}
      </div>
    </div>
  );
}

type Prop2 = {
  work: {
    title: string;
    par: string;
    link: string;
  };
};

const WhatWeDo = ({ work }: Prop2) => {
  return (
    <div className={classes.card}>
      <h5>{work.title}</h5>
      {/* <div className={classes.pra}> */}
      <p>{work.par}</p>
      <Link className={classes.button} href="#">
        {work.link}
      </Link>
      {/* </div> */}
    </div>
  );
};
