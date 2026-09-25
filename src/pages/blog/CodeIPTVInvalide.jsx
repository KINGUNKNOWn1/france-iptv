import React from 'react';
import { Link } from 'react-router-dom';
import BlogArticle from '../../components/BlogArticle';

const faqs = [
  {
    q: 'Pourquoi mon code IPTV est-il refusé alors que je viens de payer ?',
    a: "Le plus souvent, l'activation n'est pas encore faite côté fournisseur, ou le code a été mal recopié (0 et O, 1 et l, espace en trop). Attendez quelques minutes, recopiez le code caractère par caractère, et si le refus persiste, envoyez une capture d'écran du message au support.",
  },
  {
    q: 'Un code IPTV peut-il être utilisé sur plusieurs appareils ?',
    a: "Cela dépend du type d'accès. Des identifiants Xtream Codes peuvent souvent être utilisés sur plusieurs appareils dans la limite des écrans inclus. Une activation par adresse MAC est liée à un seul appareil : changer de TV ou de box demande une nouvelle activation.",
  },
  {
    q: 'Comment savoir si mon abonnement IPTV a expiré ?',
    a: "Dans IPTV Smarters Pro ou TiviMate, la date d'expiration s'affiche dans les informations du compte ou de la playlist. Un message « expired » ou « account expired » confirme que l'abonnement doit être renouvelé.",
  },
  {
    q: 'Mon code fonctionnait hier et plus aujourd’hui, pourquoi ?',
    a: "Les causes les plus fréquentes : abonnement arrivé à échéance, changement d'adresse de serveur par le fournisseur, ou mise à jour de l'application qui a effacé la configuration. Vérifiez la date d'expiration, puis ajoutez de nouveau vos accès.",
  },
];

const CodeIPTVInvalide = () => (
  <BlogArticle
    link="/blog/code-iptv-invalide"
    seoTitle="Code IPTV Invalide ou Expiré : Causes et Solutions (2026)"
    description="Code d'activation IPTV invalide, expiré ou refusé ? Les 7 causes les plus fréquentes (faute de frappe, serveur, MAC, expiration) et comment régler chaque cas."
    keywords="code iptv invalide, code activation iptv invalide, code iptv expiré, iptv invalid credentials, iptv authorization failed, code iptv ne fonctionne pas"
    quickAnswer={
      <p>
        Un <strong>code IPTV invalide</strong> vient presque toujours d'une <strong>faute de frappe</strong> (0/O, 1/l, espace),
        d'une <strong>URL de serveur incomplète</strong>, d'un <strong>abonnement expiré</strong> ou d'un code lié à un{' '}
        <strong>autre appareil</strong>. Recopiez vos accès caractère par caractère, vérifiez la date d'expiration, puis contactez le
        support avec une capture du message d'erreur.
      </p>
    }
    faqs={faqs}
    related={['/blog/iptv-ne-fonctionne-plus', '/blog/iptv-smarters-pro', '/blog/m3u-xtream-codes-mac', '/blog/tivimate']}
  >
    <section>
      <h2>Les messages d'erreur les plus courants</h2>
      <p>
        Selon l'application, un code refusé s'affiche en français ou en anglais : <strong>« Code invalide »</strong>,{' '}
        <strong>« Invalid credentials »</strong>, <strong>« Authorization failed »</strong>, <strong>« Account expired »</strong>,{' '}
        <strong>« Invalid MAC »</strong> ou simplement une liste de chaînes vide. Le tableau ci-dessous vous oriente vers la bonne
        solution.
      </p>
      <table>
        <thead><tr><th>Message</th><th>Cause probable</th><th>Solution</th></tr></thead>
        <tbody>
          <tr><td>Invalid credentials / Code invalide</td><td>Identifiant ou mot de passe mal saisi</td><td>Recopier exactement, sans espace</td></tr>
          <tr><td>Authorization failed</td><td>URL du serveur incomplète</td><td>Ajouter http:// et le port</td></tr>
          <tr><td>Account expired</td><td>Abonnement arrivé à échéance</td><td>Renouveler l'abonnement</td></tr>
          <tr><td>Invalid MAC / appareil non reconnu</td><td>Code lié à un autre appareil</td><td>Demander une activation sur la nouvelle adresse MAC</td></tr>
          <tr><td>Liste vide, aucune chaîne</td><td>Playlist non chargée</td><td>Supprimer puis ajouter de nouveau la playlist</td></tr>
        </tbody>
      </table>
    </section>

    <section>
      <h2>Les 7 causes d'un code IPTV invalide</h2>
      <h3>1. Une faute de frappe</h3>
      <p>
        C'est la cause numéro un. Le chiffre 0 et la lettre O, le chiffre 1 et la lettre l, ou un espace invisible copié en fin de
        ligne suffisent à faire refuser un code. Saisissez-le à la main, lentement, en respectant les majuscules.
      </p>
      <h3>2. Une URL de serveur incomplète</h3>
      <p>
        Avec Xtream Codes, l'adresse du serveur doit commencer par <strong>http://</strong> (ou https://) et inclure le{' '}
        <strong>numéro de port</strong> s'il vous a été fourni, par exemple <code>http://serveur.exemple:8080</code>.
      </p>
      <h3>3. L'activation n'est pas encore faite</h3>
      <p>Juste après un paiement ou un essai, l'activation peut prendre quelques minutes. Patientez, puis relancez l'application.</p>
      <h3>4. L'abonnement a expiré</h3>
      <p>
        Vérifiez la date d'expiration dans les informations du compte de l'application. Un abonnement sans reconduction automatique
        s'arrête à la date prévue : il faut le renouveler (voir les <Link to="/tarifs">tarifs</Link>).
      </p>
      <h3>5. Le code est lié à un autre appareil</h3>
      <p>
        Une activation par <strong>adresse MAC</strong> ne fonctionne que sur l'appareil enregistré. Après un changement de TV, de box
        ou une réinstallation, transmettez la nouvelle adresse MAC au support.
      </p>
      <h3>6. Le mauvais type d'accès dans l'application</h3>
      <p>
        Des identifiants Xtream Codes saisis dans le champ M3U (ou l'inverse) ne fonctionneront pas. Choisissez le bon mode de
        connexion : voir <Link to="/blog/m3u-xtream-codes-mac">M3U, Xtream Codes ou MAC</Link>.
      </p>
      <h3>7. Trop d'écrans connectés en même temps</h3>
      <p>
        Si le nombre d'écrans simultanés de votre formule est dépassé, une connexion supplémentaire peut être refusée. Fermez
        l'application sur un autre appareil puis réessayez.
      </p>
    </section>

    <section>
      <h2>Que faire si rien ne fonctionne ?</h2>
      <ol>
        <li>Supprimez le profil ou la playlist dans l'application, puis ajoutez-le de nouveau.</li>
        <li>Mettez à jour l'application, ou testez vos accès dans une autre (<Link to="/blog/iptv-smarters-pro">IPTV Smarters Pro</Link>, <Link to="/blog/tivimate">TiviMate</Link>).</li>
        <li>Envoyez au support une <strong>capture d'écran du message d'erreur</strong> et le nom de votre appareil.</li>
      </ol>
      <p>
        La marche à suivre complète pour activer un code sur chaque type d'appareil est dans notre guide{' '}
        <Link to="/appareils/activer-code-iptv">activer un code IPTV</Link>. Et si le code est accepté mais que l'image ne s'affiche
        pas, voir <Link to="/appareils/erreur-lecture-iptv">erreur de lecture IPTV</Link>.
      </p>
    </section>
  </BlogArticle>
);

export default CodeIPTVInvalide;
