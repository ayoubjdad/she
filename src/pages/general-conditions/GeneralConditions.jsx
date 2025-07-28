import styles from "./GeneralConditions.module.scss";

const GeneralConditions = () => {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <h1 className="text-3xl font-bold mt-10 mb-6">
          Conditions Générales d’Utilisation
        </h1>

        <h2 className="text-xl font-semibold mt-4">1. Acceptation</h2>
        <p>
          En utilisant ce site, vous acceptez nos conditions. Si vous êtes en
          désaccord, veuillez ne pas utiliser notre site.
        </p>

        <h2 className="text-xl font-semibold mt-4">
          2. Propriété intellectuelle
        </h2>
        <p>
          Tous les contenus (textes, images, logos) sont la propriété de [Nom de
          votre marque] et ne peuvent être utilisés sans autorisation.
        </p>

        <h2 className="text-xl font-semibold mt-4">3. Produits</h2>
        <p>
          Nos bijoux sont en acier inoxydable 316L, résistants à l’eau. Les
          photos sont non contractuelles.
        </p>

        <h2 className="text-xl font-semibold mt-4">4. Disponibilité</h2>
        <p>
          Tous les produits sont disponibles dans la limite des stocks. En cas
          de rupture, nous vous contacterons rapidement.
        </p>

        <h1 className="text-3xl font-bold mt-10 mb-6">
          Conditions d’Achat & Politique de Retour
        </h1>

        <h2 className="text-xl font-semibold mt-4">1. Commande</h2>
        <p>
          Toute commande est confirmée après validation du paiement. Un email de
          confirmation vous sera envoyé.
        </p>

        <h2 className="text-xl font-semibold mt-4">2. Paiement</h2>
        <p>
          Nous acceptons les paiements à la livraison ou par carte via une
          plateforme sécurisée.
        </p>

        <h2 className="text-xl font-semibold mt-4">3. Livraison</h2>
        <p>
          Livraison partout au Maroc sous 2 à 5 jours ouvrables. Livraison
          gratuite à partir de [ex: 400 MAD].
        </p>

        <h2 className="text-xl font-semibold mt-4">4. Retours & Échanges</h2>
        <p>
          Vous avez 7 jours après réception pour demander un échange ou un
          retour si le produit est défectueux ou erroné.
        </p>
        <ul className="list-disc list-inside mt-2 mb-2">
          <li>Produit non porté et dans son emballage d’origine</li>
          <li>Preuve d’achat nécessaire</li>
          <li>
            Les frais de retour sont à la charge du client sauf en cas d’erreur
            de notre part
          </li>
        </ul>
        <p>Pour toute demande, contactez-nous via e-mail ou WhatsApp.</p>

        <h1 className="text-2xl font-bold mt-10 mb-4">Contact</h1>
        <p>
          <strong>[Nom de votre marque]</strong>
        </p>
        <p>
          Email :{" "}
          <a href="mailto:contact@votresite.com" className="text-blue-600">
            contact@votresite.com
          </a>
        </p>
        <p>Téléphone / WhatsApp : +212 6 XX XX XX XX</p>
        <p>
          Instagram :{" "}
          <a href="https://instagram.com/toncompte" className="text-blue-600">
            @toncompte
          </a>
        </p>
      </div>
    </div>
  );
};

export default GeneralConditions;
