import React from 'react';
import { Link } from 'react-router-dom';
import BlogArticle from '../../components/BlogArticle';

const faqs = [
  {
    q: "Mon IPTV fonctionnait hier et ne marche plus aujourd'hui, pourquoi ?",
    a: "Dans l'ordre de fréquence : l'abonnement est arrivé à échéance, l'application s'est mise à jour et a perdu sa configuration, la box internet a besoin d'un redémarrage, ou le fournisseur a un incident ou a changé l'adresse de son serveur. Vérifiez la date de fin, redémarrez box et appareil, puis ajoutez de nouveau vos accès. Si rien ne change, contactez le support avec une capture de l'écran.",
  },
  {
    q: "Pourquoi mon IPTV ne fonctionne pas en Wi-Fi mais marche en 4G ?",
    a: "Le problème vient alors de votre connexion à la maison, pas de l'abonnement : Wi-Fi faible ou saturé, box à redémarrer, appareil trop loin du routeur, ou restriction côté fournisseur d'accès. Branchez l'appareil en Ethernet et redémarrez la box. Si ça ne fonctionne toujours pas sur votre ligne alors que tout marche en 4G, parlez-en au support de votre fournisseur IPTV avant de payer ou de renouveler.",
  },
  {
    q: 'Certaines chaînes marchent et d’autres non : que faire ?',
    a: "Le problème vient du flux de ces chaînes, pas de votre installation. Notez le nom des chaînes concernées et l'heure, et envoyez-les au support : c'est l'information la plus utile pour un diagnostic rapide. En attendant, la version HD ou SD de la même chaîne fonctionne souvent.",
  },
  {
    q: "L'application IPTV ne s'ouvre plus du tout",
    a: "Forcez l'arrêt de l'application, videz son cache, puis relancez. Si elle plante toujours, désinstallez-la, redémarrez l'appareil et réinstallez-la depuis le magasin officiel. Vos accès restent valables : il suffira de les saisir de nouveau.",
  },
  {
    q: 'Le replay ne fonctionne plus mais le direct oui',
    a: "Le replay (catch-up) n'est pas disponible sur toutes les chaînes, et certaines applications ne l'affichent pas. Vérifiez que la chaîne propose bien le replay (icône d'horloge dans la liste), mettez à jour l'EPG, et testez dans une autre application comme TiviMate ou IPTV Smarters Pro.",
  },
  {
    q: 'Dois-je changer d’application IPTV si le problème persiste ?',
    a: "Testez vos accès dans une seconde application : si tout fonctionne ailleurs, c'est l'application qui pose problème, pas votre abonnement. IPTV Smarters Pro, TiviMate (Android) et VLC sont de bons outils de comparaison.",
  },
];

const IPTVNeFonctionnePlus = () => (
  <BlogArticle
    link="/blog/iptv-ne-fonctionne-plus"
    seoTitle="IPTV Ne Fonctionne Plus : Causes et Solutions (Wi-Fi, Box, Appli) 2026"
    description="Votre IPTV ne fonctionne plus, ne s'ouvre plus ou coupe ? Diagnostic en 2 minutes, les 8 causes les plus fréquentes et les solutions : Wi-Fi, 4G, box Orange, SFR, Bouygues, application, abonnement."
    keywords="iptv ne fonctionne plus, iptv ne marche plus, iptv ne fonctionne pas, iptv ne fonctionne plus en wifi, iptv ne fonctionne pas en wifi mais bien en 4g, iptv ne fonctionne plus orange, iptv ne fonctionne plus sfr, iptv ne fonctionne plus bouygues, iptv ne s'ouvre plus, iptv ne fonctionne plus depuis hier, iptv qui lag"
    quickAnswer={
      <p>
        Quand l'<strong>IPTV ne fonctionne plus</strong>, vérifiez dans cet ordre : <strong>la date de fin de l'abonnement</strong>,{' '}
        <strong>un redémarrage complet</strong> de la box et de l'appareil, <strong>la connexion</strong> (Ethernet plutôt que Wi-Fi),
        puis <strong>l'application</strong> (cache, mise à jour, accès à ressaisir). Ces quatre étapes règlent la grande majorité des
        pannes. Si rien ne change, le problème vient du fournisseur : envoyez-lui une capture de l'écran.
      </p>
    }
    faqs={faqs}
    related={['/blog/codes-erreur-iptv', '/blog/iptv-qui-coupe', '/blog/code-iptv-invalide', '/appareils/erreur-lecture-iptv']}
  >
    <section>
      <h2>Diagnostic en 2 minutes : d'où vient la panne ?</h2>
      <p>Avant de tout réinstaller, trois questions suffisent à trouver la cause :</p>
      <table>
        <thead><tr><th>Ce que vous constatez</th><th>Cause probable</th><th>Où regarder</th></tr></thead>
        <tbody>
          <tr><td>Rien ne marche, sur aucun appareil</td><td>Abonnement expiré ou incident chez le fournisseur</td><td>Cause 1 et 8</td></tr>
          <tr><td>Rien ne marche sur un seul appareil</td><td>Application ou appareil</td><td>Causes 4 et 5</td></tr>
          <tr><td>Ça marche en 4G, pas en Wi-Fi</td><td>Connexion à la maison</td><td>Causes 2 et 3</td></tr>
          <tr><td>Ça coupe le soir ou pendant les matchs</td><td>Saturation aux heures de pointe</td><td>Cause 6</td></tr>
          <tr><td>Quelques chaînes seulement</td><td>Flux de ces chaînes</td><td>Cause 7</td></tr>
          <tr><td>Un code d'erreur s'affiche</td><td>Voir la signification du code</td><td><Link to="/blog/codes-erreur-iptv">Codes d'erreur IPTV</Link></td></tr>
        </tbody>
      </table>
    </section>

    <section>
      <h2>Les 8 causes les plus fréquentes et leurs solutions</h2>

      <h3>1. L'abonnement ou le test est terminé</h3>
      <p>
        C'est la cause numéro un d'un IPTV qui « ne marche plus du jour au lendemain ». La date de fin s'affiche dans les informations du
        compte de l'application (IPTV Smarters : icône de profil ; TiviMate : Paramètres → Playlists). Un message « expired » ou « trial
        period expired » le confirme. Voir les <Link to="/tarifs">tarifs</Link> pour renouveler.
      </p>

      <h3>2. Le Wi-Fi est trop faible ou saturé</h3>
      <p>
        Un Wi-Fi faible provoque des coupures, des chargements en boucle ou un écran figé. Branchez la TV ou le boîtier en{' '}
        <strong>câble Ethernet</strong>, ou rapprochez-le du routeur. Comptez environ 7 Mbit/s stables par écran en HD et 25 Mbit/s en 4K :
        vérifiez avec notre <Link to="/test-debit-iptv">test de débit IPTV</Link>, au moment où le problème se produit.
      </p>

      <h3>3. La box internet a besoin d'un redémarrage</h3>
      <p>
        Débranchez la box 30 secondes, puis rebranchez-la et attendez qu'elle soit complètement synchronisée. Faites de même avec l'appareil
        qui lit l'IPTV (un arrêt à la télécommande ne suffit pas toujours). Cette étape règle une part importante des pannes soudaines.
      </p>

      <h3>4. L'application a perdu sa configuration</h3>
      <p>
        Après une mise à jour, une application peut effacer ou corrompre sa configuration. Videz le cache, ou supprimez votre profil et
        ajoutez de nouveau vos accès (Xtream Codes : nom d'utilisateur, mot de passe, adresse du serveur avec <em>http://</em> et le port).
        Si l'application <strong>ne s'ouvre plus</strong> du tout, désinstallez-la et réinstallez-la depuis le magasin officiel. Guides :{' '}
        <Link to="/blog/iptv-smarters-pro">IPTV Smarters Pro</Link>, <Link to="/blog/tivimate">TiviMate</Link>.
      </p>

      <h3>5. L'appareil est trop lent ou saturé</h3>
      <p>
        Les anciens boîtiers Android et les Fire Stick d'entrée de gamme ralentissent avec les grandes listes de chaînes : l'image
        <strong> lag</strong>, l'application se ferme. Fermez les autres applications, redémarrez l'appareil, et changez de lecteur vidéo dans
        les réglages. Pour choisir un appareil plus fluide : <Link to="/blog/meilleure-box-iptv">quelle box IPTV choisir</Link>.
      </p>

      <h3>6. Les heures de pointe</h3>
      <p>
        Le soir et pendant les grands matchs, votre réseau et les serveurs du fournisseur sont les plus chargés. Si les coupures ne
        surviennent qu'à ces moments, passez en Ethernet et baissez la qualité (HD au lieu de 4K). Si elles persistent, le serveur du
        fournisseur ne tient pas la charge. Tous les réglages : <Link to="/blog/iptv-qui-coupe">IPTV qui coupe : 8 solutions</Link>.
      </p>

      <h3>7. Une chaîne précise ne fonctionne pas</h3>
      <p>
        Si une seule chaîne est noire ou affiche une erreur, le problème vient de sa source. Essayez une autre version de la chaîne (HD, SD),
        et signalez-la au support avec l'heure du problème.
      </p>

      <h3>8. Un incident chez le fournisseur</h3>
      <p>
        Comme tout service en ligne, un serveur IPTV peut connaître une maintenance ou une panne. Un fournisseur sérieux répond vite et
        prévient ses clients. Si le vôtre reste injoignable plusieurs jours, c'est un signal d'alerte : voir{' '}
        <Link to="/blog/meilleur-iptv-france">comment choisir un IPTV fiable</Link>.
      </p>
    </section>

    <section>
      <h2>IPTV ne fonctionne plus avec Orange, SFR, Free ou Bouygues</h2>
      <p>
        Si l'IPTV ne marche plus sur votre ligne alors qu'il fonctionne en 4G ou chez quelqu'un d'autre, le problème est lié à votre
        connexion à la maison. Commencez par les causes 2 et 3 (Ethernet, redémarrage de la box), puis consultez le guide de votre box :{' '}
        <Link to="/appareils/orange">box Orange</Link>, <Link to="/appareils/sfr">box SFR</Link>, <Link to="/appareils/freebox">Freebox</Link>,{' '}
        <Link to="/appareils/bbox-bouygues">Bbox Bouygues</Link>. Si rien ne change, parlez-en au support de votre fournisseur IPTV avant de
        renouveler : il peut vérifier votre ligne de son côté. C'est aussi pour cela qu'un{' '}
        <Link to="/blog/test-iptv-gratuit">test gratuit de 24 h</Link> sur votre propre connexion est indispensable avant d'acheter.
      </p>
    </section>

    <section>
      <h2>Code IPTV ou compte qui ne fonctionne plus</h2>
      <p>
        Un code refusé (« invalid credentials », « authorization failed », « account expired ») a ses propres causes : faute de frappe, adresse
        du serveur incomplète, code lié à un autre appareil. Tout est détaillé dans{' '}
        <Link to="/blog/code-iptv-invalide">code IPTV invalide ou expiré</Link>. Si l'image ne s'affiche pas alors que le code est accepté,
        voir <Link to="/appareils/erreur-lecture-iptv">erreur de lecture IPTV</Link>.
      </p>
    </section>

    <section>
      <h2>Par appareil</h2>
      <ul>
        <li><Link to="/appareils/samsung-tv">IPTV ne fonctionne plus sur TV Samsung</Link></li>
        <li><Link to="/appareils/fire-stick">IPTV ne fonctionne plus sur Fire Stick</Link></li>
        <li><Link to="/appareils/apple-tv">IPTV ne fonctionne plus sur Apple TV</Link></li>
        <li><Link to="/appareils/iphone-ipad">IPTV ne fonctionne plus sur iPhone</Link></li>
        <li><Link to="/blog/tivimate">TiviMate ne fonctionne plus</Link></li>
      </ul>
    </section>

    <section>
      <h2>La checklist en 2 minutes</h2>
      <ol>
        <li>Vérifier la date de fin de l'abonnement ou du test.</li>
        <li>Redémarrer la box internet (30 secondes débranchée).</li>
        <li>Redémarrer l'appareil qui lit l'IPTV.</li>
        <li>Passer en câble Ethernet, ou tester en 4G pour comparer.</li>
        <li>Vider le cache de l'application, puis ressaisir les accès si besoin.</li>
        <li>Tester les mêmes accès dans une autre application.</li>
        <li>Toujours rien : envoyer une capture de l'écran au support.</li>
      </ol>
    </section>
  </BlogArticle>
);

export default IPTVNeFonctionnePlus;
