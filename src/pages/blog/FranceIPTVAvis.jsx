import React from 'react';
import { Link } from 'react-router-dom';
import BlogArticle from '../../components/BlogArticle';

// Brand "avis" page: transparent facts about the offer, no invented reviews
// and no Review/AggregateRating markup. Real customer reviews may be added
// later, only with each customer's written consent.

const faqs = [
  {
    q: 'France IPTV est-il fiable ?',
    a: "Le meilleur moyen de le savoir est de tester vous-même : nous proposons un test gratuit de 24 h, sans paiement, sur votre appareil et votre connexion. Vous vérifiez vos chaînes, l'image aux heures de pointe et la réactivité du support avant de décider.",
  },
  {
    q: 'Comment se passe le paiement ?',
    a: "Le paiement se fait une seule fois, par Binance Pay ou PayPal, uniquement après votre accord sur WhatsApp. Il n'y a pas de reconduction automatique : l'abonnement s'arrête à la date prévue.",
  },
  {
    q: 'Puis-je être remboursé ?',
    a: "Non, les abonnements ne sont pas remboursables une fois activés. En contrepartie, vous testez gratuitement 24 h avant de payer, et nous vous aidons à l'installation jusqu'à ce que ça fonctionne.",
  },
  {
    q: 'Comment contacter France IPTV ?',
    a: "Par WhatsApp, depuis les boutons du site, ou par e-mail à info@franceiptv.stream. Nous répondons en français.",
  },
];

const FranceIPTVAvis = () => (
  <BlogArticle
    link="/blog/france-iptv-avis"
    seoTitle="France IPTV Avis : Ce Qu'il Faut Savoir Avant de Commander (2026)"
    description="France IPTV avis : offre, prix, paiement, test gratuit, support et conditions, expliqués sans détour. Et comment vérifier vous-même la qualité avant de payer."
    keywords="france iptv avis, avis france iptv, franceiptv avis, france iptv fiable, france iptv arnaque, iptv france avis, france iptv abonnement avis"
    quickAnswer={
      <p>
        Plutôt que de vous demander de nous croire sur parole, nous vous proposons de <strong>vérifier par vous-même</strong> : un{' '}
        <strong>test gratuit de 24 h</strong>, sans paiement, sur votre écran et votre connexion. Ensuite, dès <strong>8 € le mois</strong>,
        sans reconduction automatique, paiement unique par Binance Pay ou PayPal. Voici tout ce qu'il faut savoir avant de commander, y compris
        ce que nous ne proposons pas.
      </p>
    }
    faqs={faqs}
    related={['/blog/test-iptv-gratuit', '/blog/meilleur-iptv-france', '/blog/abonnement-iptv-12-mois', '/blog/prix-iptv-france']}
  >
    <section>
      <h2>Pourquoi chercher un avis avant de commander un IPTV ?</h2>
      <p>
        Vous avez raison de vérifier. Le marché de l'IPTV compte beaucoup d'offres qui disparaissent du jour au lendemain, de prix
        irréalistes et de faux avis. Un bon réflexe : ne jamais payer un an sans avoir testé, se méfier des promesses « à vie », et vérifier
        qu'un support répond vraiment. Nos critères détaillés : <Link to="/blog/meilleur-iptv-france">comment choisir un IPTV fiable</Link>.
      </p>
    </section>

    <section>
      <h2>Ce que propose France IPTV</h2>
      <ul>
        <li><strong>30 500+ chaînes</strong> en direct (françaises, belges, sport, cinéma, international) et <strong>150 000+ films et séries</strong>.</li>
        <li><strong>Un test gratuit de 24 h</strong>, un par personne, envoyé à la main sur WhatsApp.</li>
        <li><strong>Des formules sans engagement</strong> : 1 mois 8 €, 3 mois 19,99 €, 6 mois 30 €, 12 mois 45 €.</li>
        <li><strong>Un paiement unique</strong> par Binance Pay ou PayPal, sans reconduction automatique.</li>
        <li><strong>Une aide à l'installation</strong> en français sur tous les appareils, avec des guides pas à pas (<Link to="/appareils">voir les appareils</Link>).</li>
      </ul>
    </section>

    <section>
      <h2>Ce que nous ne proposons pas (et pourquoi)</h2>
      <ul>
        <li><strong>Pas de remboursement après activation.</strong> À la place, vous testez gratuitement avant de payer et nous vous aidons jusqu'à ce que ça fonctionne.</li>
        <li><strong>Pas d'offre « à vie ».</strong> Personne ne peut garantir un service pendant des années ; nous préférons des durées claires.</li>
        <li><strong>Pas de conseils pour contourner un blocage</strong> de fournisseur d'accès. Si le service ne fonctionne pas sur votre ligne pendant le test, nous vous le disons plutôt que de vous vendre un abonnement.</li>
        <li><strong>Pas de faux avis.</strong> Nous ne publions que des retours de vrais clients, avec leur accord.</li>
      </ul>
    </section>

    <section>
      <h2>Comment vérifier la qualité vous-même</h2>
      <ol>
        <li>Demandez le <Link to="/blog/test-iptv-gratuit">test gratuit de 24 h</Link> en indiquant votre appareil et votre fournisseur internet.</li>
        <li>Pendant le test, cherchez vos chaînes indispensables et regardez un soir de match, aux heures de pointe.</li>
        <li>Posez une question au support et mesurez le temps de réponse.</li>
        <li>Si tout vous convient, choisissez la durée sur la page <Link to="/tarifs">tarifs</Link>.</li>
      </ol>
    </section>

    <section>
      <h2>Vous êtes client ?</h2>
      <p>
        Votre avis nous aide, qu'il soit positif ou non. Envoyez-le-nous sur WhatsApp : nous l'utilisons pour améliorer le service, et, avec
        votre accord, nous pourrons le publier avec votre prénom uniquement.
      </p>
    </section>
  </BlogArticle>
);

export default FranceIPTVAvis;
