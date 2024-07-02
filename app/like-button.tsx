"use client";

import { useState } from "react";
import classes from "./like-button.module.css";

export default function LikeButton() {
  const [likes, setlikes] = useState(0);

  function handleClick() {
    setlikes(likes + 1);
  }

  return (
    <button onClick={handleClick} className={classes.btn}>
      Like ({likes})
    </button>
  );
}
