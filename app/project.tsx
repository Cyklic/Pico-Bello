import Link from "next/link";
import classes from "./project.module.css";

export default function Project() {
  const teamProjects = [
    {
      title: "Project one title",
      link: "See Info",
    },
    {
      title: "Project two title",
      link: "See Info",
    },
    {
      title: "Project three title",
      link: "See Info",
    },
    {
      title: "Project four title",
      link: "See Info",
    },
    {
      title: "Project five title",
      link: "See Info",
    },
    {
      title: "Project six title",
      link: "See Info",
    },
    {
      title: "Project seven title",
      link: "See Info",
    },
    {
      title: "Project eight title",
      link: "See Info",
    },
  ];

  return (
    <div className={classes.project}>
      <div className={classes.proTitle}>
        <h2>Our projects</h2>
      </div>

      <div className={classes.proBox}>
        {teamProjects.map((item, index) => (
          <ProCard project={item} key={index} />
        ))}
      </div>
    </div>
  );
}

type proProp = {
  project: {
    title: string;
    link: string;
  };
};

const ProCard = ({ project }: proProp) => {
  return (
    <div className={classes.imgCard}>
      <h5 className={classes.shift}>{project.title}</h5>
      <Link className={classes.proBtn} href="#">
        {project.link}
      </Link>
    </div>
  );
};
