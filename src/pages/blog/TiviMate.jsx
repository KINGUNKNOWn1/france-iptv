import React from 'react';
import { Link } from 'react-router-dom';
import BlogArticle from '../../components/BlogArticle';

const faqs = [
  {
    q: 'TiviMate est-il gratuit ?',
    a: "TiviMate se télécharge gratuitement, mais la version gratuite est limitée (une seule playlist, fonctions réduites). La version Premium, payante, débloque plusieurs playlists, l'enregistrement, les favoris avancés et la personnalisation complète. L'application ne fournit aucune chaîne : il faut y ajouter un abonnement IPTV.",
  },
  {
    q: 'TiviMate fonctionne-t-il sur Samsung, LG ou iPhone ?',
    a: "Non. TiviMate est conçu pour Android TV : box Android, Fire TV Stick, Nvidia Shield, Chromecast avec Google TV, Freebox Pop… Sur Samsung, LG ou iPhone, utilisez une autre application comme IPTV Smarters Pro, ou branchez un Fire TV Stick sur la télévision.",
  },
  {
    q: 'Faut-il utiliser Xtream Codes ou M3U dans TiviMate ?',
    a: "Xtream Codes est recommandé : TiviMate récupère alors automatiquement les chaînes, le guide TV et la VOD. Le lien M3U fonctionne aussi, mais le guide TV doit parfois être ajouté séparément.",
  },
  {
    q: 'Pourquoi TiviMate affiche « Aucune chaîne » ou une liste vide ?',
    a: "Le plus souvent, l'URL du serveur est incomplète (http:// ou port oublié), un identifiant est mal saisi ou l'abonnement a expiré. Supprimez la playlist, ajoutez-la de nouveau en recopiant exactement vos accès, puis lancez une mise à jour de la playlist.",
  },
];

const TiviMate = () => (
  <BlogArticle
    link="/blog/tivimate"
    seoTitle="TiviMate : Installation et Configuration IPTV (Guide 2026)"
    description="Installer TiviMate sur Android TV, Fire Stick ou Freebox, ajouter une playlist Xtream Codes ou M3U, régler le guide TV et résoudre les erreurs courantes."
    keywords="tivimate, tivimate iptv, installer tivimate, tivimate fire stick, tivimate premium, tivimate xtream codes, tivimate configuration"
    quickAnswer={
      <p>
        Installez <strong>TiviMate</strong> depuis le Play Store de votre box Android TV (ou via Downloader sur Fire TV Stick),
        choisissez <strong>« Ajouter une playlist » → Xtream Codes</strong>, saisissez l'URL du serveur, l'identifiant et le mot de
        passe de votre abonnement, puis validez. Les chaînes et le guide TV apparaissent en moins d'une minute.
      </p>
    }
    faqs={faqs}
    related={['/blog/iptv-smarters-pro', '/blog/meilleures-applications-iptv', '/blog/meilleure-box-iptv', '/blog/m3u-xtream-codes-mac']}
  >
    <section>
      <h2>Pourquoi choisir TiviMate ?</h2>
      <p>
        <strong>TiviMate</strong> est l'un des lecteurs IPTV les plus appréciés sur Android TV. Son interface ressemble à celle d'un
        décodeur TV classique : grille des programmes, zapping rapide, favoris, rattrapage et, en version Premium, enregistrement.
        C'est souvent le meilleur choix pour ceux qui regardent surtout la TV en direct sur un grand écran.
      </p>
      <p>
        Comme toutes les applications IPTV, TiviMate est un <strong>lecteur</strong> : il ne contient aucune chaîne et fonctionne
        avec les accès d'un <Link to="/abonnement-iptv">abonnement IPTV</Link>. Pour comparer avec les autres lecteurs, voir les{' '}
        <Link to="/blog/meilleures-applications-iptv">meilleures applications IPTV</Link>.
      </p>
    </section>

    <section>
      <h2>Sur quels appareils installer TiviMate ?</h2>
      <ul>
        <li><strong>Box Android TV et Google TV</strong> (Xiaomi, Chromecast avec Google TV, Nvidia Shield…) : Play Store.</li>
        <li><strong>Amazon Fire TV Stick</strong> : via l'application Downloader selon la version (<Link to="/appareils/fire-stick">guide Fire Stick</Link>).</li>
        <li><strong>Freebox Pop, Mini 4K et Ultra</strong> : Play Store du player (<Link to="/appareils/freebox">guide Freebox</Link>).</li>
        <li><strong>Téléviseurs sous Android TV</strong> (Sony, TCL, Philips…) : Play Store du téléviseur.</li>
      </ul>
      <p>
        TiviMate n'existe pas sur Samsung (Tizen), LG (webOS), iPhone ou iPad : utilisez alors{' '}
        <Link to="/blog/iptv-smarters-pro">IPTV Smarters Pro</Link> ou un Fire TV Stick branché sur la TV.
      </p>
    </section>

    <section>
      <h2>Ajouter votre abonnement dans TiviMate (Xtream Codes)</h2>
      <ol>
        <li>Ouvrez TiviMate et choisissez <strong>« Ajouter une playlist »</strong>.</li>
        <li>Sélectionnez <strong>Xtream Codes</strong>.</li>
        <li>Saisissez l'<strong>adresse du serveur</strong> (avec http:// et le port s'il y en a un), puis l'<strong>identifiant</strong> et le <strong>mot de passe</strong>.</li>
        <li>Validez : TiviMate affiche le nombre de chaînes, films et séries trouvés. Donnez un nom à la playlist.</li>
        <li>Cochez le chargement du <strong>guide TV (EPG)</strong> puis terminez. La grille des programmes se remplit en quelques secondes.</li>
      </ol>
      <p>
        Avec un lien M3U, choisissez <strong>« Entrer une URL »</strong> à l'étape 2 et collez le lien complet. Les différences entre
        les deux formats sont expliquées dans <Link to="/blog/m3u-xtream-codes-mac">M3U, Xtream Codes ou MAC</Link>.
      </p>
    </section>

    <section>
      <h2>Les réglages TiviMate à faire tout de suite</h2>
      <ul>
        <li><strong>Mise à jour de la playlist</strong> au démarrage : Paramètres → Playlists → mise à jour automatique.</li>
        <li><strong>Guide TV</strong> : réglez la mise à jour de l'EPG sur une fois par jour et le décalage horaire sur Paris.</li>
        <li><strong>Favoris</strong> : appui long sur une chaîne → Ajouter aux favoris, pour un zapping rapide.</li>
        <li><strong>Lecteur</strong> : si l'image saccade, essayez un autre décodeur (matériel ou logiciel) dans les réglages de lecture.</li>
        <li><strong>Démarrage automatique</strong> : lancez TiviMate au démarrage de la box pour une expérience « décodeur TV ».</li>
      </ul>
    </section>

    <section>
      <h2>TiviMate gratuit ou Premium ?</h2>
      <p>
        La version gratuite suffit pour tester votre abonnement. Le <strong>Premium</strong> devient intéressant si vous voulez
        plusieurs playlists, l'enregistrement des programmes, le contrôle parental avancé ou une interface entièrement
        personnalisée. L'abonnement IPTV et l'abonnement TiviMate Premium sont deux achats différents.
      </p>
    </section>

    <section>
      <h2>Problèmes fréquents dans TiviMate</h2>
      <h3>Liste vide ou « erreur d'authentification »</h3>
      <p>Recopiez vos accès sans espace ni majuscule en trop, vérifiez l'URL du serveur, puis mettez à jour la playlist.</p>
      <h3>Guide TV vide ou décalé</h3>
      <p>Lancez une mise à jour de l'EPG et vérifiez le décalage horaire dans les réglages du guide.</p>
      <h3>Image qui coupe ou qui freeze</h3>
      <p>
        Vérifiez d'abord votre connexion avec le <Link to="/test-debit-iptv">test de débit IPTV</Link>, puis suivez{' '}
        <Link to="/blog/iptv-qui-coupe">IPTV qui coupe : 8 solutions</Link>.
      </p>
    </section>
  </BlogArticle>
);

export default TiviMate;
