import styles from "./PrivacyTerms.module.scss";

const PrivacyTerms = () => {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <h1 className="text-3xl font-bold mb-6">
          Politique de Confidentialité
        </h1>

        <h2 className="text-xl font-semibold mt-4">
          1. Collecte des informations
        </h2>
        <p>
          Nous collectons des informations personnelles lorsque vous passez
          commande ou vous inscrivez à notre newsletter. Cela inclut : nom,
          e-mail, adresse de livraison, téléphone et informations de paiement
          (sécurisées).
        </p>

        <h2 className="text-xl font-semibold mt-4">
          2. Utilisation des données
        </h2>
        <p>
          Les données sont utilisées pour traiter vos commandes, assurer le
          suivi, ou vous envoyer des promotions (si vous avez consenti).
        </p>

        <h2 className="text-xl font-semibold mt-4">3. Sécurité</h2>
        <p>
          Les transactions sont sécurisées (SSL) et vos données ne sont jamais
          partagées ni revendues.
        </p>

        <h2 className="text-xl font-semibold mt-4">4. Cookies</h2>
        <p>
          Nous utilisons des cookies pour améliorer l’expérience utilisateur.
          Vous pouvez les désactiver via votre navigateur.
        </p>

        <h2 className="text-xl font-semibold mt-4">5. Vos droits</h2>
        <p>
          Conformément à la loi 09-08, vous avez le droit d’accéder, modifier ou
          supprimer vos données. Contactez-nous à :{" "}
          <a href="mailto:contact@votresite.com" className="text-blue-600">
            contact@votresite.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default PrivacyTerms;
