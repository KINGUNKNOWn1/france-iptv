import React from 'react';
import { Link } from 'react-router-dom';
import BlogArticle from '../../components/BlogArticle';

const faqs = [
  {
    q: 'Formuler ou MAG : quel boîtier choisir pour l’IPTV ?',
    a: "Les boîtiers Formuler tournent sous Android et offrent à la fois une application IPTV dédiée et l'accès à d'autres applications. Les boîtiers MAG sont plus simples et entièrement pensés pour l'IPTV par portail. Formuler est plus polyvalent ; MAG convient à ceux qui veulent une utilisation type décodeur, sans autre application.",
  },
  {
    q: 'Qu’est-ce qu’un portail IPTV sur MAG ?',
    a: "Sur un boîtier MAG, l'abonnement est activé sur l'adresse MAC du boîtier, puis vous saisissez une adresse de portail fournie par votre fournisseur. Au redémarrage, le boîtier se connecte au portail et affiche les chaînes, sans identifiant à taper.",
  },
  {
    q: 'Où trouver l’adresse MAC d’un boîtier MAG ou Formuler ?',
    a: "Elle est imprimée sur l'étiquette sous le boîtier et s'affiche aussi dans les réglages (informations système) ou dans l'application IPTV. Elle se présente sous la forme 00:1A:79:xx:xx:xx sur les MAG.",
  },
  {
    q: 'Puis-je utiliser Xtream Codes sur un Formuler ?',
    a: "Oui. L'application IPTV des boîtiers Formuler accepte généralement un portail (MAC), des identifiants Xtream Codes ou un lien M3U. Xtream Codes est souvent le plus simple si vous changez d'appareil.",
  },
];

const FormulerMAG = () => (
  <BlogArticle
    link="/blog/formuler-mag-iptv"
    seoTitle="Formuler et MAG : Configurer l'IPTV sur Votre Boîtier (2026)"
    description="Configurer l'IPTV sur un boîtier Formuler (application MyTVOnline) ou MAG (portail et adresse MAC) : étapes, différences entre les deux et solutions aux erreurs."
    keywords="formuler iptv, mag iptv, boitier mag iptv, formuler mytvonline, portail mag iptv, formuler z11 iptv, mag 524 iptv, adresse mac mag"
    quickAnswer={
      <p>
        Sur <strong>Formuler</strong>, ouvrez l'application IPTV du boîtier (MyTVOnline), ajoutez un portail, des identifiants
        Xtream Codes ou un lien M3U. Sur <strong>MAG</strong>, transmettez l'<strong>adresse MAC</strong> du boîtier à votre
        fournisseur, puis saisissez l'<strong>adresse du portail</strong> dans Réglages → Serveurs → Portails et redémarrez.
      </p>
    }
    faqs={faqs}
    related={['/blog/meilleure-box-iptv', '/blog/m3u-xtream-codes-mac', '/blog/code-iptv-invalide', '/blog/tivimate']}
  >
    <section>
      <h2>Formuler et MAG : des boîtiers conçus pour l'IPTV</h2>
      <p>
        Contrairement aux box Android généralistes, les boîtiers <strong>Formuler</strong> et <strong>MAG</strong> sont pensés
        d'abord pour l'IPTV : télécommande adaptée au zapping, interface proche d'un décodeur TV et gestion des longues listes de
        chaînes. Ils fonctionnent souvent par <strong>portail</strong>, c'est-à-dire une activation liée à l'adresse MAC du
        boîtier. Pour comparer avec les autres appareils, voir <Link to="/blog/meilleure-box-iptv">la meilleure box IPTV</Link>.
      </p>
    </section>

    <section>
      <h2>Configurer l'IPTV sur un boîtier Formuler</h2>
      <p>
        Les boîtiers Formuler récents (gamme Z) tournent sous Android et utilisent l'application <strong>MyTVOnline</strong>. Selon
        le modèle et la version, les menus peuvent varier légèrement.
      </p>
      <h3>Avec un portail (adresse MAC)</h3>
      <ol>
        <li>Notez l'adresse MAC affichée dans MyTVOnline (ou sous le boîtier) et transmettez-la à votre fournisseur.</li>
        <li>Dans MyTVOnline, ajoutez un portail : donnez-lui un nom et collez l'adresse du portail reçue.</li>
        <li>Validez puis patientez pendant le chargement des chaînes et du guide TV.</li>
      </ol>
      <h3>Avec Xtream Codes ou M3U</h3>
      <ol>
        <li>Dans MyTVOnline, choisissez l'ajout d'un compte Xtream Codes (ou d'une playlist M3U).</li>
        <li>Saisissez l'URL du serveur, l'identifiant et le mot de passe, ou collez le lien M3U complet.</li>
        <li>Validez : les chaînes, la VOD et le guide TV se chargent.</li>
      </ol>
    </section>

    <section>
      <h2>Configurer l'IPTV sur un boîtier MAG</h2>
      <ol>
        <li><strong>Relevez l'adresse MAC</strong> du boîtier (étiquette sous le MAG ou Réglages → Informations) et transmettez-la à votre fournisseur pour activation.</li>
        <li>Allumez le MAG et ouvrez <strong>Réglages → Paramètres système → Serveurs → Portails</strong>.</li>
        <li>Dans <strong>Portail 1</strong>, saisissez un nom et l'<strong>adresse du portail</strong> exactement comme reçue.</li>
        <li>Enregistrez, puis <strong>redémarrez le portail</strong> (ou le boîtier).</li>
        <li>Le MAG se connecte au portail et affiche les catégories de chaînes.</li>
      </ol>
      <p>
        Selon le modèle (MAG 520, 524, 544…) et la version logicielle, les intitulés des menus peuvent légèrement différer.
      </p>
    </section>

    <section>
      <h2>Formuler ou MAG : lequel choisir ?</h2>
      <table>
        <thead><tr><th>Critère</th><th>Formuler</th><th>MAG</th></tr></thead>
        <tbody>
          <tr><td>Système</td><td>Android</td><td>Système dédié IPTV</td></tr>
          <tr><td>Modes de connexion</td><td>Portail, Xtream Codes, M3U</td><td>Portail (MAC)</td></tr>
          <tr><td>Autres applications</td><td>Oui</td><td>Très limitées</td></tr>
          <tr><td>Simplicité</td><td>Bonne</td><td>Très bonne une fois configuré</td></tr>
          <tr><td>Pour qui</td><td>Usage polyvalent</td><td>Usage type décodeur TV</td></tr>
        </tbody>
      </table>
    </section>

    <section>
      <h2>Erreurs fréquentes sur Formuler et MAG</h2>
      <h3>« Portal not found » ou chargement infini</h3>
      <p>Vérifiez l'adresse du portail (http://, barre oblique finale, port), puis redémarrez le boîtier.</p>
      <h3>« Invalid MAC » ou « STB blocked »</h3>
      <p>
        L'adresse MAC transmise ne correspond pas au boîtier, ou l'activation n'est pas encore faite. Revérifiez-la caractère par
        caractère : voir <Link to="/blog/code-iptv-invalide">code IPTV invalide</Link>.
      </p>
      <h3>Image qui coupe</h3>
      <p>
        Branchez le boîtier en Ethernet et vérifiez le débit avec le <Link to="/test-debit-iptv">test de débit IPTV</Link>, puis
        consultez <Link to="/blog/iptv-qui-coupe">IPTV qui coupe</Link>.
      </p>
    </section>
  </BlogArticle>
);

export default FormulerMAG;
