import { useNavigate } from "react-router";
import styles from "./Footer.module.scss";
import { Button, Chip, TextField } from "@mui/material";

export default function Footer() {
  const navigate = useNavigate();

  const handleClick = (link) => {
    window.open(`https://www.${link}`, "_blank");
  };

  return (
    <>
      <div className={styles.main}>
        <div className={styles.container}>
          <h1>
            Obtenez un accès exclusif aux tendances de bijoux et aux histoires
            d'initiés en vous abonnant à notre newsletter.
          </h1>

          <div className={styles.email}>
            <TextField placeholder="Entrez votre email" variant="outlined" />
            <Button>S'abonner</Button>
          </div>
        </div>
      </div>

      <div className={styles.copyright}>
        <Chip
          label="Copyright © 2025 DAR ALYAKOOT"
          style={{ cursor: "default" }}
        />
        <div className={styles.pages}>
          <Chip label="Boutique" onClick={() => navigate("/shop")} />
          <Chip
            label="Politique de confidentialité"
            onClick={() => navigate("/politique-de-confidentialite")}
          />
          <Chip
            label="Conditions d'utilisation"
            onClick={() => navigate("/conditions-generales")}
          />
          <div className={styles.divider} />
          <Chip
            label="Instagram"
            onClick={() => {
              handleClick("instagram.com");
            }}
          />
          <Chip
            label="Facebook"
            onClick={() => {
              handleClick("facebook.com");
            }}
          />
        </div>
      </div>
    </>
  );
}
