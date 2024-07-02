import Link from "next/link";
import classes from "./team.module.css";
import LikeButton from "./like-button";

export default function Team() {
  const identity = [
    {
      name: "Bello O. Umar",
      position: "Principal Partner",
    },
    {
      name: "Abubakar S. Ismail",
      position: "Creative Lead",
    },
    {
      name: "Farida Mohammed",
      position: "Business Development Lead",
    },
  ];

  return (
    <div className={classes.team}>
      <div className={classes.teamTitle}>
        <h2>The team</h2>
      </div>
      <div className={classes.teamText}>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page.
        </p>
      </div>

      <div className={classes.teamBox}>
        {identity.map((item, index) => (
          <TeamCard team={item} key={index} />
        ))}
      </div>
    </div>
  );
}

type Props = {
  team: {
    name: string;
    position: string;
  };
};

const TeamCard = ({ team }: Props) => {
  return (
    <div className={classes.teamCard}>
      <div className={classes.team_img}></div>
      <Link className={classes.teamBtn} href="#">
        <div>
          <h5 className={classes.nameEdit}>{team.name}</h5>
          <p className={classes.roleEdit}>{team.position}</p>
        </div>
        <div className={classes.likeBtn}>
          <LikeButton />
        </div>
      </Link>
    </div>
  );
};
