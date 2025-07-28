import React from "react";
import styles from "./Main.module.scss";
import { Button } from "@mui/material";
import { useNavigate } from "react-router";

export default function Main() {
  const navigate = useNavigate();

  const onClick = () => navigate("/shop");

  return (
    <>
      <div className={styles.main}>
        <div className={styles.container}>
          <div className={styles.textArea}>
            <p className={styles.title}>
              Maîtrise artistique dans chaque gemme précieuse.
            </p>
            <p className={styles.description}>
              Chaque gemme incarne un artisanat méticuleux, un témoignage
              intemporel d'une compétence et d'une élégance inégalées.
            </p>
          </div>
          <Button
            onClick={onClick}
            style={{ backgroundColor: "#fffcf0", color: "#231918" }}
          >
            Découvrir Maintenant
          </Button>
        </div>
      </div>
    </>
  );
}
