import React from 'react';
import { Link } from 'react-router-dom';
import BlogArticle from '../../components/BlogArticle';

const faqs = [
  {
    q: "Que veut dire l'erreur 401 sur l'IPTV ?",
    a: "L'erreur 401 (Unauthorized) signifie que le serveur refuse vos identifiants : nom d'utilisateur ou mot de passe mal saisi, abonnement expiré ou ligne pas encore activée. Recopiez vos accès caractère par caractère et vérifiez la date d'expiration.",
  },
  {
    q: "Comment corriger l'erreur 458 dans TiviMate ?",
    a: "L'erreur 458 indique en général que le nombre maximum de connexions de votre abonnement est atteint. Fermez l'application sur les autres appareils (TV, téléphone, box), attendez une ou deux minutes, puis relancez la chaîne.",
  },
  {
    q: "Erreur 502 ou 503 : est-ce que le problème vient de chez moi ?",
    a: "Non. Les erreurs 502 et 503 viennent du serveur du fournisseur (surcharge ou maintenance). Votre installation n'est pas en cause : attendez quelques minutes et réessayez. Si l'erreur dure plus d'une heure, contactez le support.",
  },
  {
    q: "Pourquoi l'image est noire alors que j'entends le son ?",
    a: "C'est un problème de décodage vidéo : le lecteur de l'application ne lit pas le format de la chaîne sur votre appareil. Dans les réglages de l'application, changez de lecteur ou de décodeur (matériel ↔ logiciel), puis relancez la chaîne.",
  },
];

const CodesErreurIPTV = () => (
  <BlogArticle
    link="/blog/codes-erreur-iptv"
    seoTitle="Codes d'Erreur IPTV : 401, 403, 404, 458, 502, Code 7 (Solutions)"
    description="Erreur IPTV 401, 403, 404, 429, 458, 502, 503, code 7 Formuler, « authorization failed » ou écran noir : la signification de chaque code et la solution, étape par étape."
    keywords="iptv erreur 401, iptv erreur 403, iptv erreur 404, iptv erreur 458, iptv erreur 502, iptv erreur 503, iptv code erreur 7, formuler code 7, authorization failed for above host, iptv écran noir avec son"
    quickAnswer={
      <p>
        Un <strong>code d'erreur IPTV</strong> indique d'où vient la panne. <strong>401</strong> : identifiants refusés.{' '}
        <strong>403</strong> : accès refusé par le serveur. <strong>404</strong> : chaîne ou playlist introuvable.{' '}
        <strong>429 / 458</strong> : trop de connexions. <strong>502 / 503</strong> : serveur du fournisseur indisponible, rien à
        faire de votre côté. Le tableau ci-dessous donne la solution pour chaque code.
      </p>
    }
    faqs={faqs}
    related={['/blog/code-iptv-invalide', '/appareils/erreur-lecture-iptv', '/blog/iptv-ne-fonctionne-plus', '/blog/formuler-mag-iptv']}
  >
    <section>
      <h2>Tableau des codes d'erreur IPTV</h2>
      <p>
        Retrouvez le code affiché par votre application (IPTV Smarters Pro, TiviMate, Formuler, Smart IPTV…) et la première chose à
        faire. Le détail de chaque code est plus bas.
      </p>
      <table>
        <thead><tr><th>Code / message</th><th>Signification</th><th>D'où vient le problème</th><th>Première action</th></tr></thead>
        <tbody>
          <tr><td>401</td><td>Identifiants refusés</td><td>Vos accès ou l'abonnement</td><td>Recopier les accès, vérifier l'expiration</td></tr>
          <tr><td>403</td><td>Accès interdit</td><td>Compte bloqué, expiré ou limite atteinte</td><td>Vérifier l'abonnement, contacter le support</td></tr>
          <tr><td>404</td><td>Introuvable</td><td>Chaîne supprimée ou playlist périmée</td><td>Actualiser la playlist</td></tr>
          <tr><td>429</td><td>Trop de requêtes</td><td>Trop de connexions ou d'actualisations</td><td>Fermer les autres appareils, patienter</td></tr>
          <tr><td>458</td><td>Connexions max atteintes</td><td>Écrans simultanés dépassés</td><td>Fermer l'appli ailleurs, relancer</td></tr>
          <tr><td>500 / 502 / 503</td><td>Erreur serveur</td><td>Serveur du fournisseur</td><td>Attendre quelques minutes</td></tr>
          <tr><td>Code 7 (Formuler)</td><td>Portail injoignable</td><td>Adresse du portail ou MAC</td><td>Vérifier l'URL du portail et la MAC</td></tr>
          <tr><td>Authorization failed for above host</td><td>Connexion refusée</td><td>URL du serveur ou identifiants</td><td>Ajouter http:// et le port</td></tr>
          <tr><td>Error loading channels / playlist</td><td>Playlist non chargée</td><td>Lien, expiration ou connexion</td><td>Supprimer et rajouter la playlist</td></tr>
          <tr><td>Parser exception / M3U error</td><td>Lien M3U illisible</td><td>Lien mal copié ou incomplet</td><td>Recopier le lien M3U entier</td></tr>
          <tr><td>Écran noir avec son</td><td>Vidéo non décodée</td><td>Lecteur de l'application</td><td>Changer de lecteur / décodeur</td></tr>
        </tbody>
      </table>
    </section>

    <section>
      <h2>Erreur 401 : identifiants refusés</h2>
      <p>
        Le serveur ne reconnaît pas vos accès. Causes les plus fréquentes : une <strong>faute de frappe</strong> (0 et O, 1 et l,
        espace en fin de ligne), un <strong>abonnement expiré</strong>, ou une ligne <strong>pas encore activée</strong> juste après
        la commande.
      </p>
      <ol>
        <li>Saisissez le nom d'utilisateur et le mot de passe à la main, en respectant les majuscules.</li>
        <li>Vérifiez la date d'expiration dans les informations du compte de l'application.</li>
        <li>Après une commande, patientez quelques minutes avant de réessayer.</li>
      </ol>
      <p>Toutes les causes d'un code refusé sont détaillées dans <Link to="/blog/code-iptv-invalide">code IPTV invalide</Link>.</p>
    </section>

    <section>
      <h2>Erreur 403 : accès interdit</h2>
      <p>
        Le serveur a bien reçu la demande mais refuse l'accès. C'est le cas quand le <strong>compte est expiré ou suspendu</strong>,
        quand la <strong>limite d'écrans</strong> est dépassée, ou quand le fournisseur a restreint l'accès. Vérifiez votre abonnement,
        fermez les autres appareils connectés, puis contactez le support avec une capture du message si l'erreur persiste.
      </p>
      <p>
        Si l'erreur 403 n'apparaît que sur une box internet précise, consultez aussi les guides{' '}
        <Link to="/appareils/sfr">SFR</Link>, <Link to="/appareils/orange">Orange</Link> et{' '}
        <Link to="/appareils/bbox-bouygues">Bbox</Link>.
      </p>
    </section>

    <section>
      <h2>Erreur 404 : chaîne ou playlist introuvable</h2>
      <p>
        L'adresse demandée n'existe plus : la <strong>chaîne a changé d'adresse</strong> ou votre <strong>playlist est
        périmée</strong>. Dans IPTV Smarters Pro ou TiviMate, lancez une actualisation de la playlist (« Mettre à jour » / « Update
        playlist »). Si toute la liste renvoie 404, l'URL du serveur a probablement changé : demandez les nouveaux accès au support.
      </p>
    </section>

    <section>
      <h2>Erreurs 429 et 458 : trop de connexions</h2>
      <p>
        Ces deux codes signifient que le serveur limite vos connexions. <strong>458</strong>, fréquent sur TiviMate, indique en général
        que le <strong>nombre maximum d'écrans simultanés</strong> de votre formule est atteint. <strong>429</strong> apparaît quand
        l'application envoie trop de demandes à la suite (zapping très rapide, actualisations répétées).
      </p>
      <ol>
        <li>Fermez complètement l'application sur les autres appareils (TV, téléphone, box, ordinateur).</li>
        <li>Attendez une à deux minutes que le serveur libère la connexion.</li>
        <li>Relancez la chaîne. Évitez de zapper très vite pendant les premières secondes.</li>
      </ol>
    </section>

    <section>
      <h2>Erreurs 500, 502 et 503 : le serveur ne répond pas</h2>
      <p>
        Ces codes viennent <strong>du serveur du fournisseur</strong>, pas de votre installation : surcharge (souvent le soir des
        grands matchs) ou maintenance. Inutile de réinstaller l'application. Patientez quelques minutes ; si l'erreur dure plus d'une
        heure ou revient chaque soir, le fournisseur est en cause. Pour faire la différence entre une panne chez vous et chez le
        fournisseur, voir <Link to="/blog/iptv-ne-fonctionne-plus">IPTV ne fonctionne plus</Link>.
      </p>
    </section>

    <section>
      <h2>Code 7 sur Formuler (MyTVOnline)</h2>
      <p>
        Le <strong>code 7</strong> (parfois affiché « 7-3 » ou « 7-500 ») signifie que le boîtier Formuler n'arrive pas à joindre le
        portail. Vérifiez dans MyTVOnline que l'<strong>URL du portail</strong> est exactement celle fournie, et que l'
        <strong>adresse MAC</strong> du boîtier est bien celle qui a été activée. Redémarrez ensuite le boîtier (débranchez-le 30
        secondes). La configuration complète est dans notre guide <Link to="/blog/formuler-mag-iptv">Formuler et MAG</Link>.
      </p>
    </section>

    <section>
      <h2>« Authorization failed for above host » (IPTV Smarters)</h2>
      <p>
        Ce message d'IPTV Smarters Pro apparaît quand la connexion au serveur est refusée. Dans la grande majorité des cas, l'
        <strong>URL du serveur est incomplète</strong> : elle doit commencer par <strong>http://</strong> et se terminer par le{' '}
        <strong>numéro de port</strong> s'il vous a été donné (par exemple <code>http://serveur.exemple:8080</code>). Vérifiez aussi
        le nom d'utilisateur et le mot de passe. Sur Samsung TV, voir aussi <Link to="/appareils/samsung-tv">IPTV sur Samsung TV</Link>.
      </p>
    </section>

    <section>
      <h2>« Error loading channels » et erreurs de playlist</h2>
      <p>
        L'application n'arrive pas à charger la liste des chaînes : lien mal saisi, abonnement expiré ou connexion trop lente au
        moment du chargement. Supprimez la playlist ou le profil, puis ajoutez-le de nouveau. Un message{' '}
        <strong>« parser exception »</strong> ou <strong>« M3U error »</strong> signifie que le lien M3U est illisible : il a souvent
        été coupé pendant le copier-coller. Recopiez-le en entier, sans espace. Différences entre les types d'accès :{' '}
        <Link to="/blog/m3u-xtream-codes-mac">M3U, Xtream Codes ou MAC</Link>.
      </p>
    </section>

    <section>
      <h2>Écran noir avec le son</h2>
      <p>
        Le son fonctionne mais l'image reste noire : le <strong>lecteur vidéo</strong> de l'application ne décode pas la chaîne sur
        votre appareil. Dans les réglages de l'application, changez de lecteur (lecteur interne, VLC, ExoPlayer) ou passez du décodage
        matériel au décodage logiciel. Essayez aussi une qualité inférieure (HD au lieu de 4K). Les autres erreurs d'image sont dans{' '}
        <Link to="/appareils/erreur-lecture-iptv">erreur de lecture IPTV</Link>.
      </p>
    </section>

    <section>
      <h2>Avant de contacter le support</h2>
      <p>Préparez ces trois éléments, le problème sera réglé beaucoup plus vite :</p>
      <ol>
        <li>Une <strong>capture d'écran</strong> du message d'erreur, avec le code.</li>
        <li>Le <strong>nom de votre appareil</strong> et de l'application utilisée.</li>
        <li>Si l'erreur touche <strong>toutes les chaînes</strong> ou seulement certaines.</li>
      </ol>
      <p>
        Si la même erreur revient chaque soir, même après ces vérifications, votre fournisseur est probablement saturé. Vous pouvez
        comparer avec un <Link to="/abonnement-iptv">test gratuit de 24 h</Link> chez France IPTV.
      </p>
    </section>
  </BlogArticle>
);

export default CodesErreurIPTV;
