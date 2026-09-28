import React from 'react';
import { Link } from 'react-router-dom';
import BlogArticle from '../../components/BlogArticle';

const faqs = [
  {
    q: "L'IPTV, c'est payant ?",
    a: "Oui, un abonnement IPTV est payant : il donne accès aux chaînes, films et séries. Les applications pour le lire (IPTV Smarters, TiviMate, VLC…) sont souvent gratuites, mais elles ne contiennent aucune chaîne. Méfiez-vous des listes « gratuites » trouvées en ligne : elles coupent sans arrêt, disparaissent vite et peuvent contenir des liens dangereux.",
  },
  {
    q: "L'IPTV, c'est combien ?",
    a: "En France, un abonnement coûte en général entre 8 € et 15 € pour un mois, et entre 40 € et 60 € pour un an. Chez France IPTV : 8 € pour 1 mois, 19,99 € pour 3 mois, 30 € pour 6 mois et 45 € pour 12 mois, sans reconduction automatique. Détails dans notre guide des prix IPTV.",
  },
  {
    q: "Faut-il un boîtier pour l'IPTV ?",
    a: "Pas forcément. Une Smart TV récente, un téléphone, une tablette ou un ordinateur suffisent avec la bonne application. Un boîtier (Fire TV Stick, box Android TV, Formuler) devient utile si votre téléviseur n'est pas connecté ou si ses applications sont limitées.",
  },
  {
    q: "L'IPTV fonctionne-t-elle avec ma box internet ?",
    a: "Oui : votre box (Freebox, Livebox, Bbox, box SFR, Proximus, VOO…) fournit la connexion internet, et la lecture se fait sur un appareil compatible. Certaines box sous Android TV, comme les Freebox récentes, peuvent même installer directement une application IPTV.",
  },
  {
    q: "L'IPTV est-elle légale ?",
    a: "La technologie IPTV est légale : les opérateurs l'utilisent eux-mêmes pour leur télévision. La légalité d'un service dépend des droits de diffusion des contenus qu'il propose. Nous détaillons ce point dans notre article sur l'IPTV légale en France.",
  },
];

const IPTVCestQuoi = () => (
  <BlogArticle
    link="/blog/iptv-c-est-quoi"
    seoTitle="IPTV C'est Quoi ? Définition Simple, Fonctionnement et Lexique 2026"
    description="IPTV c'est quoi ? La télévision par internet expliquée simplement : fonctionnement, appareils, prix, et le sens de M3U, EPG, Xtream Codes, adresse MAC, playlist et panel."
    keywords="iptv c'est quoi, abonnement iptv c'est quoi, abonnement iptv comment ça marche, m3u iptv c'est quoi, epg iptv c'est quoi, adresse mac iptv c'est quoi, playlist iptv c'est quoi, serveur iptv c'est quoi"
    quickAnswer={
      <p>
        L'<strong>IPTV</strong> (Internet Protocol Television) est la <strong>télévision reçue par internet</strong> au lieu de l'antenne,
        du satellite ou du décodeur de votre opérateur. Vous installez une <strong>application</strong> sur votre TV, votre box, votre
        téléphone ou votre ordinateur, vous y ajoutez les <strong>accès d'un abonnement</strong>, et vous retrouvez les chaînes en direct,
        le guide des programmes, les films et les séries.
      </p>
    }
    faqs={faqs}
    related={['/blog/m3u-xtream-codes-mac', '/blog/iptv-smarters-pro', '/blog/prix-iptv-france', '/blog/test-iptv-gratuit']}
  >
    <section>
      <h2>IPTV : la définition simple</h2>
      <p>
        IPTV signifie <strong>Internet Protocol Television</strong>, soit « télévision par protocole internet ». Au lieu d'arriver par
        une antenne ou une parabole, les chaînes arrivent par votre connexion internet, comme une vidéo en streaming. Votre opérateur
        (Orange, SFR, Free, Bouygues) utilise d'ailleurs déjà cette technologie pour la télévision de sa box.
      </p>
      <p>
        Un <strong>abonnement IPTV</strong> vous donne des accès personnels (identifiants ou lien) à un bouquet de chaînes et à un
        catalogue de films et séries, que vous regardez dans une application de votre choix, sur l'écran de votre choix.
      </p>
    </section>

    <section>
      <h2>Abonnement IPTV : comment ça marche ?</h2>
      <ol>
        <li><strong>Vous choisissez un abonnement</strong> (1, 3, 6 ou 12 mois par exemple) après un test si possible.</li>
        <li><strong>Vous recevez vos accès</strong> : des identifiants Xtream Codes, un lien M3U ou l'activation de l'adresse MAC de votre appareil.</li>
        <li><strong>Vous installez un lecteur IPTV</strong> sur votre appareil : IPTV Smarters, TiviMate, VLC, Kodi…</li>
        <li><strong>Vous ajoutez vos accès dans l'application</strong> : les chaînes, le guide TV, les films et les séries se chargent.</li>
      </ol>
      <p>
        L'application n'est qu'un « lecteur » : elle ne contient aucune chaîne tant que vous n'y avez pas ajouté vos accès. Le détail pas à pas
        est dans notre guide <Link to="/appareils/activer-code-iptv">activer son code IPTV</Link>.
      </p>
    </section>

    <section>
      <h2>Ce qu'il faut pour regarder l'IPTV</h2>
      <ul>
        <li><strong>Une connexion internet</strong> : environ 7 Mbit/s par écran en HD, 15 Mbit/s en Full HD et 25 Mbit/s en 4K. Vérifiez la vôtre avec notre <Link to="/test-debit-iptv">test de débit IPTV</Link>.</li>
        <li><strong>Un appareil compatible</strong> : Smart TV (<Link to="/appareils/samsung-tv">Samsung</Link>, <Link to="/appareils/lg-tv">LG</Link>), <Link to="/appareils/fire-stick">Fire TV Stick</Link>, <Link to="/appareils/android-tv">box Android TV</Link>, <Link to="/appareils/freebox">Freebox</Link>, <Link to="/appareils/apple-tv">Apple TV</Link>, <Link to="/appareils/iphone-ipad">iPhone</Link> ou <Link to="/appareils/pc-mac">ordinateur</Link>.</li>
        <li><strong>Une application IPTV</strong> : voir notre comparatif des <Link to="/blog/meilleures-applications-iptv">meilleures applications IPTV</Link>.</li>
        <li><strong>Un abonnement</strong> : c'est lui qui fournit les chaînes.</li>
      </ul>
    </section>

    <section>
      <h2>Lexique IPTV : les mots à connaître</h2>

      <h3>M3U, c'est quoi ?</h3>
      <p>
        Un <strong>lien M3U</strong> (ou playlist M3U) est une adresse web qui contient la liste de toutes vos chaînes. Vous la collez dans
        l'application et elle charge le bouquet. C'est simple, mais le guide des programmes et les films sont parfois moins bien classés
        qu'avec Xtream Codes.
      </p>

      <h3>Xtream Codes, c'est quoi ?</h3>
      <p>
        <strong>Xtream Codes</strong> est un format de connexion avec trois informations : un nom d'utilisateur, un mot de passe et l'adresse
        du serveur. Il charge automatiquement les chaînes, le guide TV, les films et les séries, et reste à jour. C'est le format le plus
        pratique au quotidien. Comparaison complète : <Link to="/blog/m3u-xtream-codes-mac">M3U, Xtream Codes ou adresse MAC</Link>.
      </p>

      <h3>Adresse MAC, c'est quoi en IPTV ?</h3>
      <p>
        L'<strong>adresse MAC</strong> est l'identifiant unique de votre appareil (ex. 00:1A:79:xx:xx:xx). Certaines applications et certains
        boîtiers (MAG, Formuler, Smart IPTV) s'activent avec elle : vous nous l'envoyez, nous l'activons, et les chaînes apparaissent.
        Voir <Link to="/blog/formuler-mag-iptv">IPTV sur Formuler et MAG</Link>.
      </p>

      <h3>EPG, c'est quoi sur l'IPTV ?</h3>
      <p>
        L'<strong>EPG</strong> (Electronic Program Guide) est le <strong>guide des programmes</strong> : ce qui passe maintenant et ensuite sur
        chaque chaîne. Si le guide est vide, il faut souvent le recharger dans l'application (« Refresh EPG »).
      </p>

      <h3>Playlist IPTV, c'est quoi ?</h3>
      <p>
        La <strong>playlist</strong> est la liste des chaînes de votre abonnement, souvent fournie sous forme de lien M3U. Dans la plupart des
        applications, « ajouter une playlist » veut simplement dire ajouter vos accès.
      </p>

      <h3>Serveur IPTV, c'est quoi ?</h3>
      <p>
        Le <strong>serveur</strong> est l'ordinateur qui diffuse les chaînes vers votre appareil. Sa qualité fait la stabilité de l'image,
        surtout pendant les grands matchs, quand tout le monde regarde en même temps.
      </p>

      <h3>Panel IPTV, c'est quoi ?</h3>
      <p>
        Le <strong>panel</strong> est l'interface de gestion utilisée par un fournisseur pour créer et renouveler les abonnements de ses clients.
        En tant que client, vous n'y avez pas accès : vous recevez simplement vos identifiants.
      </p>

      <h3>Code IPTV, c'est quoi ?</h3>
      <p>
        On appelle souvent « code IPTV » les identifiants de votre abonnement (Xtream Codes, lien M3U ou code d'activation). S'il est refusé,
        voir <Link to="/blog/code-iptv-invalide">code IPTV invalide ou expiré</Link>.
      </p>

      <h3>IPTV Player, c'est quoi ?</h3>
      <p>
        Un <strong>IPTV Player</strong> (lecteur IPTV) est l'application qui affiche vos chaînes : <Link to="/blog/iptv-smarters-pro">IPTV Smarters Pro</Link>,{' '}
        <Link to="/blog/tivimate">TiviMate</Link>, VLC, Kodi… Il ne fournit pas les chaînes lui-même.
      </p>

      <h3>Boîtier IPTV, c'est quoi ?</h3>
      <p>
        Un <strong>boîtier IPTV</strong> est un petit appareil branché en HDMI sur votre téléviseur (Fire TV Stick, box Android TV, Formuler,
        Nvidia Shield) pour y installer une application IPTV. Pour choisir : <Link to="/blog/meilleure-box-iptv">quelle box IPTV choisir</Link>.
      </p>
    </section>

    <section>
      <h2>IPTV ou télévision classique : quelle différence ?</h2>
      <ul>
        <li><strong>Où regarder</strong> : sur l'écran de votre choix, pas seulement sur la TV branchée au décodeur.</li>
        <li><strong>Le contenu</strong> : chaînes en direct, mais aussi films et séries à la demande dans la même application.</li>
        <li><strong>Le prix</strong> : un abonnement IPTV coûte en général bien moins cher qu'un bouquet satellite ou câble complet.</li>
        <li><strong>La dépendance à internet</strong> : si votre connexion est faible ou instable, l'image peut couper. D'où l'intérêt de tester avant de payer.</li>
      </ul>
    </section>

    <section>
      <h2>Comment bien commencer ?</h2>
      <p>
        Le plus sûr est de <strong>tester sur votre propre écran et votre propre connexion</strong> avant d'acheter. Demandez un{' '}
        <Link to="/blog/test-iptv-gratuit">test IPTV gratuit de 24 h</Link>, vérifiez vos chaînes et la qualité d'image, puis choisissez la durée
        qui vous convient sur la page <Link to="/tarifs">tarifs</Link>.
      </p>
    </section>
  </BlogArticle>
);

export default IPTVCestQuoi;
