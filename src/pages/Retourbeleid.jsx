import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { RotateCcw, Info, Clock, CheckCircle, XCircle, HelpCircle } from 'lucide-react';

const Retourbeleid = () => {
  return (
    <>
      <Helmet>
        <title>Droit de Rétractation - France IPTV</title>
        <meta name="description" content="Droit de rétractation de France IPTV. Informations sur le droit de rétractation et le remboursement pour les services numériques." />
        <link rel="canonical" href="https://franceiptv.stream/droit-de-retractation" />
      </Helmet>

      <div className="min-h-screen bg-white text-brand-black">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden bg-gradient-to-br from-[#090B0B] via-[#111413] to-[#090B0B] text-white">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-6"
            >
              <RotateCcw className="w-6 h-6 text-blue-400" />
              <span className="font-semibold">Service Numérique</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl md:text-6xl font-bold mb-6"
            >
              Droit de Rétractation
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-gray-300 max-w-2xl mx-auto"
            >
              Informations sur le droit de rétractation et le remboursement pour les services IPTV France IPTV.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-sm text-gray-400 mt-4"
            >
              Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}
            </motion.p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {/* Legal review notice */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-yellow-50 border-2 border-yellow-300 rounded-2xl p-6"
              >
                <p className="text-brand-gray text-sm">
                  <strong className="text-brand-black">Note :</strong> Cette page présente les grands principes du droit de rétractation applicables aux services numériques en France. Nous recommandons de faire valider la formulation finale par un professionnel qualifié en droit de la consommation avant toute mise en ligne définitive.
                </p>
              </motion.div>

              {/* Important Notice */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-blue-50 border-2 border-blue-300 rounded-2xl p-8"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Info className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-4 text-blue-600">Information Importante</h2>
                    <p className="text-brand-gray leading-relaxed mb-4">
                      France IPTV propose des <strong className="text-brand-black">services numériques</strong> (streaming IPTV). Des règles spécifiques s'appliquent aux services numériques, différentes de celles des produits physiques.
                    </p>
                    <p className="text-brand-gray leading-relaxed">
                      Dès que le service IPTV est activé et que vous avez accès au contenu en streaming, le droit de rétractation est réputé exercé selon l'<strong className="text-brand-black">article L221-28, 13° du Code de la consommation</strong>.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Guarantee: first month, 24 h */}
              <div id="garantie-24h" className="bg-brand-offwhite border-2 border-brand-gold/60 rounded-2xl p-8 scroll-mt-24">
                <h2 className="text-2xl font-bold mb-4 text-brand-black">Garantie Satisfait ou Remboursé 24 h (1er mois)</h2>
                <p className="text-brand-gray leading-relaxed mb-4">
                  En plus de vos droits légaux, France IPTV vous accorde une <strong className="text-brand-black">garantie commerciale</strong> sur
                  votre première commande : si l'abonnement <strong className="text-brand-black">1 mois à 8 €</strong> ne vous convient pas, vous êtes
                  <strong className="text-brand-black"> remboursé intégralement (8 €)</strong>, même après l'activation.
                </p>
                <h3 className="font-bold text-brand-black mb-2">Conditions :</h3>
                <ul className="space-y-2 text-brand-gray mb-4">
                  <li className="flex items-start gap-2"><span className="text-green-500 mt-1">✓</span><span>Elle s'applique à la <strong className="text-brand-black">première commande</strong> d'un abonnement <strong className="text-brand-black">1 mois</strong>, une seule fois par client (même personne, numéro WhatsApp, adresse e-mail ou appareil).</span></li>
                  <li className="flex items-start gap-2"><span className="text-green-500 mt-1">✓</span><span>La demande doit être faite dans les <strong className="text-brand-black">24 heures suivant l'activation</strong>, par WhatsApp ou par e-mail à support@franceiptv.stream.</span></li>
                  <li className="flex items-start gap-2"><span className="text-green-500 mt-1">✓</span><span>Le remboursement de <strong className="text-brand-black">8 €</strong> est effectué sur le même moyen de paiement (PayPal ou Binance Pay), sous 14 jours au plus tard ; les accès sont alors désactivés.</span></li>
                  <li className="flex items-start gap-2"><span className="text-red-500 mt-1">✗</span><span>Elle ne s'applique pas aux abonnements 3, 6 et 12 mois, ni en cas de non-respect des conditions générales de vente (partage de compte, revente…).</span></li>
                </ul>
                <p className="text-brand-gray text-sm">
                  Cette garantie commerciale s'ajoute aux règles décrites ci-dessous, qui restent applicables à toutes les autres commandes.
                </p>
              </div>

              {/* Section 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-brand-offwhite border border-brand-gray-border rounded-2xl p-8"
              >
                <h2 className="text-2xl font-bold mb-4 text-brand-black">1. Droit de Rétractation</h2>
                <p className="text-brand-gray leading-relaxed mb-4">
                  En principe, en tant que consommateur, vous disposez d'un délai de rétractation de <strong className="text-brand-black">14 jours</strong> pour tout achat à distance (via internet), conformément à l'<strong className="text-brand-black">article L221-18 du Code de la consommation</strong>. Ce délai débute le jour de l'achat.
                </p>
                <p className="text-brand-gray leading-relaxed mb-4">
                  <strong className="text-brand-black">Cependant :</strong> Chez France IPTV, ce droit de rétractation prend fin dès que :
                </p>
                <ul className="space-y-2 text-brand-gray mb-4">
                  <li className="flex items-start gap-2">
                    <span className="text-brand-gold mt-1">•</span>
                    <span>Votre abonnement IPTV est activé</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-gold mt-1">•</span>
                    <span>Vous avez accès au service de streaming</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-gold mt-1">•</span>
                    <span>Vous recevez vos identifiants et pouvez vous connecter</span>
                  </li>
                </ul>
                <div className="bg-yellow-50 border border-yellow-300 rounded-lg p-4">
                  <p className="text-brand-gray text-sm">
                    <strong className="text-yellow-700">Attention :</strong> En confirmant l'achat et l'activation, vous consentez expressément au démarrage immédiat du service et reconnaissez que le droit de rétractation prend alors fin (conformément à l'article L221-28, 13° du Code de la consommation).
                  </p>
                </div>
              </motion.div>

              {/* Section 2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-brand-offwhite border border-brand-gray-border rounded-2xl p-8"
              >
                <h2 className="text-2xl font-bold mb-4 text-brand-black">2. Annulation Avant Activation</h2>
                <p className="text-brand-gray leading-relaxed mb-4">
                  Vous avez payé mais votre abonnement <strong className="text-brand-black">n'est pas encore activé</strong> ? Vous pouvez annuler gratuitement dans les 14 jours.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-brand-black mb-2">Annulation possible :</h3>
                      <p className="text-brand-gray text-sm">Paiement reçu, mais abonnement pas encore activé dans les 14 jours → remboursement intégral possible</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <XCircle className="w-5 h-5 text-red-500" />
                    </div>
                    <div>
                      <h3 className="font-bold text-brand-black mb-2">Annulation impossible :</h3>
                      <p className="text-brand-gray text-sm">Abonnement déjà activé et accès déjà obtenu → aucun remboursement possible</p>
                    </div>
                  </div>
                </div>
                <p className="text-brand-gray leading-relaxed mt-4">
                  <strong className="text-brand-black">Comment annuler ?</strong> Envoyez un e-mail à <a href="mailto:support@franceiptv.stream" className="text-brand-gold hover:underline">support@franceiptv.stream</a> ou contactez-nous via WhatsApp.
                </p>
              </motion.div>

              {/* Section 3 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-brand-offwhite border border-brand-gray-border rounded-2xl p-8"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-4 text-brand-black">3. Remboursement</h2>
                    <p className="text-brand-gray leading-relaxed mb-4">
                      Si vous avez droit à un remboursement (voir point 2), alors :
                    </p>
                    <ul className="space-y-2 text-brand-gray mb-4">
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 mt-1">✓</span>
                        <span>Le montant intégral est remboursé</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 mt-1">✓</span>
                        <span>Le remboursement intervient dans les 14 jours suivant l'annulation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 mt-1">✓</span>
                        <span>Le remboursement s'effectue via le même moyen de paiement que votre achat</span>
                      </li>
                    </ul>
                    <div className="bg-white rounded-lg p-4 border border-brand-gray-border">
                      <p className="text-brand-gray text-sm">
                        <strong className="text-brand-black">Attention :</strong> Les frais de transaction des prestataires de paiement (comme Binance Pay ou PayPal) ne peuvent pas être remboursés, ces frais étant prélevés par la banque ou le prestataire de paiement.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Section 4 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-brand-offwhite border border-brand-gray-border rounded-2xl p-8"
              >
                <h2 className="text-2xl font-bold mb-4 text-brand-black">4. Problèmes Techniques</h2>
                <p className="text-brand-gray leading-relaxed mb-4">
                  Vous rencontrez des problèmes techniques avec le service ? Vous ne pouvez pas prétendre à un <strong className="text-brand-black">remboursement</strong>, mais vous pouvez attendre une <strong className="text-brand-black">solution</strong>.
                </p>
                <div className="space-y-4">
                  <div className="bg-blue-50 border border-blue-300 rounded-lg p-4">
                    <h3 className="font-bold text-brand-black mb-2">Notre engagement :</h3>
                    <ul className="space-y-2 text-brand-gray text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">→</span>
                        <span>Support francophone 24/7 pour l'aide technique</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">→</span>
                        <span>Accompagnement actif pour l'installation et la configuration</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">→</span>
                        <span>Résolution des problèmes liés à nos serveurs</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">→</span>
                        <span>En cas de problèmes persistants : compensation sous forme de prolongation de durée</span>
                      </li>
                    </ul>
                  </div>
                  <p className="text-brand-gray text-sm">
                    <strong className="text-brand-black">Important :</strong> France IPTV n'est pas responsable des problèmes causés par votre fournisseur d'accès internet, votre matériel, ou des facteurs externes hors de notre contrôle.
                  </p>
                </div>
              </motion.div>

              {/* Section 5 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-brand-offwhite border border-brand-gray-border rounded-2xl p-8"
              >
                <h2 className="text-2xl font-bold mb-4 text-brand-black">5. Aucune Reconduction Automatique</h2>
                <p className="text-brand-gray leading-relaxed mb-4">
                  France IPTV ne pratique <strong className="text-brand-black">aucune reconduction automatique</strong>. Cela signifie :
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <p className="text-brand-gray">Votre abonnement s'arrête automatiquement après 3, 6 ou 12 mois</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <p className="text-brand-gray">Vous n'avez pas besoin de résilier</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <p className="text-brand-gray">Aucune surprise ni reconduction non désirée</p>
                    </div>
                  </div>
                </div>
                <p className="text-brand-gray leading-relaxed mt-4">
                  Vous souhaitez renouveler ? C'est simple, via notre site ou en contactant le service client.
                </p>
              </motion.div>

              {/* Section 6 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-brand-offwhite border border-brand-gray-border rounded-2xl p-8"
              >
                <h2 className="text-2xl font-bold mb-4 text-brand-black">6. Exceptions</h2>
                <p className="text-brand-gray leading-relaxed mb-4">
                  Dans les cas suivants, <strong className="text-brand-black">aucun remboursement n'est possible</strong> :
                </p>
                <ul className="space-y-2 text-brand-gray">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">✗</span>
                    <span>L'abonnement est déjà activé et vous avez eu accès au service (sauf garantie 24 h sur le 1er mois, voir plus haut)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">✗</span>
                    <span>Vous avez enfreint les conditions générales de vente (partage de compte, revente, etc.)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">✗</span>
                    <span>Vous n'êtes pas satisfait de la disponibilité du contenu (celle-ci peut évoluer)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">✗</span>
                    <span>Problèmes causés par votre connexion, votre matériel ou des facteurs externes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">✗</span>
                    <span>Plus de 14 jours après l'achat (et absence d'activation)</span>
                  </li>
                </ul>
              </motion.div>

              {/* FAQ */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-brand-offwhite border border-brand-gray-border rounded-2xl p-8"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <HelpCircle className="w-6 h-6 text-brand-gold" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-4 text-brand-black">Questions Fréquentes</h2>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4 border border-brand-gray-border">
                    <h3 className="font-bold text-brand-black mb-2">Puis-je être remboursé si le service ne fonctionne pas ?</h3>
                    <p className="text-brand-gray text-sm">Pour une première commande d'un mois, oui : la garantie satisfait ou remboursé 24 h s'applique. Pour les autres commandes, nous nous engageons à résoudre le problème via notre support 24/7. En cas de problème durable de notre côté, nous proposons une compensation sous forme de prolongation de durée.</p>
                  </div>

                  <div className="bg-white rounded-lg p-4 border border-brand-gray-border">
                    <h3 className="font-bold text-brand-black mb-2">Que faire si j'ai acheté le mauvais forfait par erreur ?</h3>
                    <p className="text-brand-gray text-sm">Si votre compte n'est pas encore activé, contactez-nous immédiatement. Nous pouvons alors ajuster ou rembourser votre commande. Après activation, ce n'est malheureusement plus possible.</p>
                  </div>

                  <div className="bg-white rounded-lg p-4 border border-brand-gray-border">
                    <h3 className="font-bold text-brand-black mb-2">Puis-je résilier en cours de période et récupérer une partie du montant ?</h3>
                    <p className="text-brand-gray text-sm">Non. Vous payez en une fois pour une période fixe (3, 6 ou 12 mois). Une résiliation anticipée avec remboursement partiel n'est pas possible. L'abonnement reste actif jusqu'à la fin de la période choisie.</p>
                  </div>

                  <div className="bg-white rounded-lg p-4 border border-brand-gray-border">
                    <h3 className="font-bold text-brand-black mb-2">Combien de temps prend un remboursement ?</h3>
                    <p className="text-brand-gray text-sm">Si vous avez droit à un remboursement, il est traité sous 14 jours vers le même moyen de paiement que votre achat. Il peut s'écouler 3 à 5 jours ouvrés avant que le montant apparaisse sur votre compte.</p>
                  </div>
                </div>
              </motion.div>

              {/* Contact CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-surface border border-lime/30 border border-brand-gold/30 rounded-2xl p-8 text-center"
              >
                <RotateCcw className="w-12 h-12 text-brand-gold mx-auto mb-4" />
                <h2 className="text-2xl font-bold mb-4 text-brand-black">Des Questions sur le Droit de Rétractation ?</h2>
                <p className="text-brand-gray mb-6">
                  Contactez notre service client. Nous serons heureux de vous aider.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="mailto:support@franceiptv.stream"
                    className="bg-brand-gold hover:bg-[#C4FF86] text-white px-8 py-3 rounded-full font-semibold transition-colors"
                  >
                    E-mail au Support
                  </a>
                  <a
                    href="https://wa.me/18653169315"
                    className="bg-white hover:bg-blue-50 text-brand-black px-8 py-3 rounded-full font-semibold transition-colors border border-brand-gray-border"
                  >
                    Contact WhatsApp
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Retourbeleid;
