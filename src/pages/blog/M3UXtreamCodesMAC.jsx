import React from 'react';
import { Link } from 'react-router-dom';
import BlogArticle from '../../components/BlogArticle';

const faqs = [
  {
    q: 'Quel format choisir pour débuter en IPTV ?',
    a: "Xtream Codes, dans la grande majorité des cas. Il se configure avec quatre champs, charge automatiquement les chaînes, la VOD et le guide TV, et fonctionne avec les applications les plus répandues (IPTV Smarters Pro, TiviMate, etc.).",
  },
  {
    q: 'Un lien M3U peut-il contenir des films et des séries ?',
    a: "Oui, une playlist M3U peut contenir des chaînes en direct et des vidéos à la demande. En revanche, le classement par catégories et le guide TV sont souvent moins bien gérés qu'avec Xtream Codes, surtout sur les grandes playlists.",
  },
  {
    q: 'Où trouver l’adresse MAC de mon appareil ?',
    a: "Dans les applications qui fonctionnent par adresse MAC, elle s'affiche en général sur l'écran d'accueil ou dans les réglages de l'application. Elle se présente sous la forme de 6 paires de caractères séparées par deux-points (ex. 00:1A:79:xx:xx:xx).",
  },
  {
    q: 'Puis-je passer de M3U à Xtream Codes avec le même abonnement ?',
    a: "Généralement oui : les deux formats donnent accès au même contenu. Demandez simplement vos accès dans l'autre format au support de votre fournisseur. Chez France IPTV, il suffit d'un message sur WhatsApp.",
  },
];

const M3UXtreamCodesMAC = () => (
  <BlogArticle
    link="/blog/m3u-xtream-codes-mac"
    seoTitle="M3U, Xtream Codes ou Adresse MAC : Quelle Différence en IPTV ?"
    description="M3U, Xtream Codes ou activation par adresse MAC : comment fonctionne chaque format IPTV, leurs avantages et lequel choisir selon votre appareil et votre application."
    keywords="m3u iptv, xtream codes, xtream codes api, adresse mac iptv, lien m3u, difference m3u xtream, playlist iptv"
    quickAnswer={
      <p>
        Ce sont trois façons de connecter votre application à votre abonnement. <strong>Xtream Codes</strong> (identifiant, mot de
        passe, URL) est le plus complet et le plus simple au quotidien. Le <strong>lien M3U</strong> est une playlist en une seule
        adresse, pratique mais moins riche. L'<strong>adresse MAC</strong> active directement un appareil, sans rien saisir, pour les
        applications qui le demandent.
      </p>
    }
    faqs={faqs}
    related={['/blog/iptv-smarters-pro', '/blog/meilleures-applications-iptv', '/blog/meilleure-box-iptv', '/blog/acheter-iptv-france-guide-complet']}
  >
    <section>
      <h2>Xtream Codes : le format le plus complet</h2>
      <p>
        Avec <strong>Xtream Codes API</strong>, l'application se connecte directement au serveur de votre fournisseur à l'aide de
        trois informations : <strong>nom d'utilisateur</strong>, <strong>mot de passe</strong> et <strong>URL du serveur</strong>.
        L'application récupère alors automatiquement les chaînes classées par catégorie, les films, les séries et le guide des
        programmes, et tout reste à jour sans action de votre part.
      </p>
      <ul>
        <li><strong>Avantages</strong> : guide TV fiable, VOD bien rangée, date d'expiration visible, mises à jour automatiques.</li>
        <li><strong>Limites</strong> : quatre champs à recopier sans erreur la première fois.</li>
        <li><strong>Idéal pour</strong> : IPTV Smarters Pro, TiviMate, la plupart des box Android et Fire Stick.</li>
      </ul>
    </section>

    <section>
      <h2>Lien M3U : une playlist en une seule adresse</h2>
      <p>
        Un lien <strong>M3U</strong> (ou M3U8) est une adresse qui pointe vers une liste de flux. Vous la collez dans votre lecteur et
        il affiche les chaînes qu'elle contient. C'est le format le plus universel : presque tous les lecteurs l'acceptent, y compris
        VLC sur ordinateur.
      </p>
      <ul>
        <li><strong>Avantages</strong> : une seule ligne à copier, compatible partout.</li>
        <li><strong>Limites</strong> : guide TV parfois à ajouter séparément, VOD moins bien classée, chargement plus long sur les grosses listes.</li>
        <li><strong>Idéal pour</strong> : un test rapide, un ordinateur avec VLC, les lecteurs qui ne gèrent pas Xtream Codes.</li>
      </ul>
    </section>

    <section>
      <h2>Adresse MAC : l'activation sans saisie</h2>
      <p>
        Certaines applications (notamment sur Smart TV) affichent une <strong>adresse MAC</strong> au démarrage. Vous transmettez
        cette adresse à votre fournisseur, qui associe l'abonnement à votre appareil : au redémarrage de l'application, les chaînes
        apparaissent sans que vous ayez rien à taper.
      </p>
      <ul>
        <li><strong>Avantages</strong> : aucune saisie avec la télécommande, idéal pour les personnes peu à l'aise avec la technique.</li>
        <li><strong>Limites</strong> : lié à un seul appareil ; certaines applications sont payantes après une période d'essai.</li>
        <li><strong>Idéal pour</strong> : Smart TV Samsung ou LG, boîtiers de type MAG.</li>
      </ul>
      <p>
        Toutes les étapes sont détaillées dans notre guide <Link to="/appareils/activer-code-iptv">activer un code IPTV</Link>.
      </p>
    </section>

    <section>
      <h2>Tableau comparatif</h2>
      <table>
        <thead>
          <tr><th>Critère</th><th>Xtream Codes</th><th>Lien M3U</th><th>Adresse MAC</th></tr>
        </thead>
        <tbody>
          <tr><td>Ce qu'il faut saisir</td><td>Identifiant, mot de passe, URL</td><td>Une URL</td><td>Rien (l'appareil est activé)</td></tr>
          <tr><td>Guide TV (EPG)</td><td>Automatique</td><td>Variable</td><td>Selon l'application</td></tr>
          <tr><td>Films et séries</td><td>Bien classés</td><td>Moins organisés</td><td>Selon l'application</td></tr>
          <tr><td>Plusieurs appareils</td><td>Oui</td><td>Oui</td><td>Un appareil par adresse</td></tr>
          <tr><td>Notre conseil</td><td>Premier choix</td><td>Test / ordinateur</td><td>Smart TV</td></tr>
        </tbody>
      </table>
    </section>

    <section>
      <h2>Quel format choisir selon votre appareil ?</h2>
      <ul>
        <li><strong>Fire Stick, box Android, Freebox Pop</strong> : Xtream Codes dans IPTV Smarters Pro ou TiviMate (<Link to="/blog/iptv-smarters-pro">guide IPTV Smarters Pro</Link>).</li>
        <li><strong>Smart TV Samsung ou LG</strong> : adresse MAC avec une application compatible, ou Xtream Codes si IPTV Smarters est disponible sur votre modèle.</li>
        <li><strong>iPhone, iPad</strong> : Xtream Codes ou M3U selon l'application choisie.</li>
        <li><strong>Ordinateur</strong> : lien M3U dans VLC, ou Xtream Codes dans une application dédiée.</li>
      </ul>
      <p>
        Chez France IPTV, les accès sont fournis dans le format qui correspond à votre appareil : précisez-le simplement au moment
        de votre essai gratuit.
      </p>
    </section>
  </BlogArticle>
);

export default M3UXtreamCodesMAC;
