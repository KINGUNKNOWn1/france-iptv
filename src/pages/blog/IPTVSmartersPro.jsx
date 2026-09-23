import React from 'react';
import { Link } from 'react-router-dom';
import BlogArticle from '../../components/BlogArticle';

const faqs = [
  {
    q: 'IPTV Smarters Pro est-il gratuit ?',
    a: "L'application IPTV Smarters Pro est gratuite à télécharger sur Android, iPhone/iPad et la plupart des box Android. Certaines fonctions ou versions peuvent être payantes selon la plateforme. L'application ne fournit aucune chaîne : il faut y ajouter les accès de votre abonnement IPTV.",
  },
  {
    q: 'Quelle est la différence entre Xtream Codes et M3U dans IPTV Smarters ?',
    a: "Avec Xtream Codes, vous saisissez un nom d'utilisateur, un mot de passe et une URL de serveur : les chaînes, films, séries et le guide TV se chargent automatiquement et restent à jour. Avec un lien M3U, vous collez une seule adresse de playlist ; c'est plus simple mais le guide TV et la VOD sont parfois moins bien organisés.",
  },
  {
    q: 'Pourquoi IPTV Smarters affiche « Invalid credentials » ou « Authorization failed » ?',
    a: "Le plus souvent, une faute de frappe dans l'identifiant ou le mot de passe (majuscules, espace en fin de ligne), une URL de serveur incomplète (http:// et numéro de port oubliés) ou un abonnement expiré. Recopiez les accès exactement tels qu'ils vous ont été envoyés, puis réessayez.",
  },
  {
    q: 'Sur combien d’appareils puis-je utiliser mes accès IPTV Smarters ?',
    a: "Cela dépend de votre abonnement, pas de l'application. Chez France IPTV, les formules incluent 4 écrans simultanés : vous pouvez installer IPTV Smarters Pro sur votre TV, votre téléphone et votre tablette avec les mêmes accès.",
  },
];

const IPTVSmartersPro = () => (
  <BlogArticle
    link="/blog/iptv-smarters-pro"
    seoTitle="IPTV Smarters Pro : Installation et Configuration (Guide 2026)"
    description="Installer et configurer IPTV Smarters Pro sur Android, iPhone, Smart TV et Fire Stick : Xtream Codes ou M3U, réglages conseillés et solutions aux erreurs courantes."
    keywords="iptv smarters pro, iptv smarters, installer iptv smarters, iptv smarters pro configuration, iptv smarters xtream codes, iptv smarters m3u"
    quickAnswer={
      <p>
        Téléchargez <strong>IPTV Smarters Pro</strong> depuis le magasin d'applications de votre appareil, choisissez{' '}
        <strong>« Login with Xtream Codes API »</strong>, puis saisissez le nom, l'identifiant, le mot de passe et l'URL du serveur
        fournis avec votre abonnement. Les chaînes, films, séries et le guide TV se chargent en moins d'une minute.
      </p>
    }
    faqs={faqs}
    related={['/blog/m3u-xtream-codes-mac', '/blog/meilleures-applications-iptv', '/blog/iptv-qui-coupe', '/blog/meilleure-box-iptv']}
  >
    <section>
      <h2>Qu'est-ce qu'IPTV Smarters Pro ?</h2>
      <p>
        IPTV Smarters Pro est un <strong>lecteur IPTV</strong> : une application qui affiche les chaînes, les films et les séries
        de votre abonnement dans une interface claire, avec guide des programmes (EPG), rattrapage et favoris. C'est l'une des
        applications les plus utilisées en France car elle fonctionne sur presque tous les écrans et accepte les deux formats de
        connexion les plus courants : Xtream Codes et M3U.
      </p>
      <p>
        Important : l'application <strong>ne contient aucune chaîne</strong>. Elle a besoin des accès d'un{' '}
        <Link to="/abonnement-iptv">abonnement IPTV</Link> pour afficher du contenu. Si vous hésitez entre plusieurs lecteurs,
        consultez notre comparatif des <Link to="/blog/meilleures-applications-iptv">meilleures applications IPTV</Link>.
      </p>
    </section>

    <section>
      <h2>Sur quels appareils installer IPTV Smarters Pro ?</h2>
      <ul>
        <li><strong>Android (téléphone, tablette)</strong> : Google Play Store.</li>
        <li><strong>iPhone et iPad</strong> : App Store (voir aussi notre <Link to="/appareils/iphone-ipad">guide iPhone et iPad</Link>).</li>
        <li><strong>Box Android, Android TV et Freebox Pop / Ultra</strong> : Play Store de la box (<Link to="/appareils/android-tv">guide Android TV</Link>, <Link to="/appareils/freebox">guide Freebox</Link>).</li>
        <li><strong>Amazon Fire TV Stick</strong> : Appstore Amazon ou application Downloader selon la version (<Link to="/appareils/fire-stick">guide Fire Stick</Link>).</li>
        <li><strong>Smart TV Samsung et LG</strong> : la disponibilité dépend du modèle et de l'année. Si l'application n'apparaît pas, d'autres lecteurs compatibles existent (<Link to="/appareils/samsung-tv">Samsung</Link>, <Link to="/appareils/lg-tv">LG</Link>).</li>
        <li><strong>Ordinateur Windows ou macOS</strong> : version bureau ou lecteur alternatif comme VLC.</li>
      </ul>
    </section>

    <section>
      <h2>Configurer IPTV Smarters Pro avec Xtream Codes (recommandé)</h2>
      <ol>
        <li>Ouvrez l'application et acceptez les conditions d'utilisation.</li>
        <li>Choisissez <strong>« Login with Xtream Codes API »</strong>.</li>
        <li>Remplissez les 4 champs : un <strong>nom</strong> de votre choix (ex. « France IPTV »), le <strong>nom d'utilisateur</strong>, le <strong>mot de passe</strong> et l'<strong>URL du serveur</strong>, exactement comme reçus.</li>
        <li>Appuyez sur <strong>« Add user »</strong>. Le chargement des chaînes, films, séries et du guide TV prend de 10 à 60 secondes.</li>
        <li>Ouvrez <strong>Live TV</strong> : vos catégories de chaînes apparaissent. Ajoutez vos chaînes préférées en favoris.</li>
      </ol>
      <p>
        L'URL du serveur doit contenir <strong>http://</strong> (ou https://) et, le cas échéant, le <strong>numéro de port</strong>{' '}
        (ex. <code>http://serveur.exemple:8080</code>). Un oubli à cet endroit est la première cause d'erreur de connexion.
      </p>
    </section>

    <section>
      <h2>Configurer IPTV Smarters Pro avec un lien M3U</h2>
      <ol>
        <li>Choisissez <strong>« Load Your Playlist or File/URL »</strong>.</li>
        <li>Sélectionnez <strong>M3U URL</strong>, donnez un nom à la playlist et collez le lien complet reçu.</li>
        <li>Validez avec <strong>« Add user »</strong> et patientez pendant le chargement.</li>
      </ol>
      <p>
        Le M3U est pratique pour un premier test, mais Xtream Codes gère mieux le guide TV et la VOD. Le détail des différences est
        expliqué dans notre article <Link to="/blog/m3u-xtream-codes-mac">M3U, Xtream Codes ou adresse MAC</Link>.
      </p>
    </section>

    <section>
      <h2>Les réglages à faire après l'installation</h2>
      <ul>
        <li><strong>Lecteur vidéo</strong> (Settings → Player Selection) : si l'image saccade, essayez le lecteur intégré puis VLC.</li>
        <li><strong>Guide TV (EPG)</strong> : lancez « Install EPG » ou « Refresh EPG » pour afficher les programmes en cours.</li>
        <li><strong>Format d'heure et fuseau</strong> : réglez l'heure de Paris pour un guide TV aligné.</li>
        <li><strong>Contrôle parental</strong> : protégez certaines catégories par un code.</li>
        <li><strong>Mise en veille automatique</strong> : désactivez-la sur les box Android pour éviter les coupures pendant un match.</li>
      </ul>
    </section>

    <section>
      <h2>Erreurs fréquentes et solutions</h2>
      <h3>« Invalid credentials » ou « Authorization failed »</h3>
      <p>Vérifiez les majuscules, supprimez les espaces en trop et contrôlez l'URL du serveur (http:// et port). Si tout est correct, votre abonnement a peut-être expiré.</p>
      <h3>Aucune chaîne ou liste vide</h3>
      <p>Retournez à l'écran des utilisateurs, supprimez puis ajoutez de nouveau vos accès, ou utilisez « Refresh » pour recharger la playlist.</p>
      <h3>Image qui coupe ou qui charge en boucle</h3>
      <p>
        Le plus souvent un problème de débit ou de Wi-Fi. Suivez notre guide{' '}
        <Link to="/blog/iptv-qui-coupe">IPTV qui coupe ou qui freeze : 8 solutions</Link>, et consultez aussi{' '}
        <Link to="/appareils/erreur-lecture-iptv">erreur de lecture IPTV</Link>.
      </p>
    </section>
  </BlogArticle>
);

export default IPTVSmartersPro;
