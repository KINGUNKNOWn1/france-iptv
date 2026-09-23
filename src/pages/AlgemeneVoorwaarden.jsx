import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FileText, Scale, CreditCard, Clock, Shield, AlertTriangle, Globe } from 'lucide-react';

const AlgemeneVoorwaarden = () => {
  return (
    <>
      <Helmet>
        <title>Conditions Générales de Vente - France IPTV</title>
        <meta name="description" content="Conditions générales de vente des services IPTV France IPTV. Consultez les conditions d'utilisation de notre service IPTV." />
        <link rel="canonical" href="https://franceiptv.stream/cgv" />
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
              <Scale className="w-6 h-6 text-blue-400" />
              <span className="font-semibold">Droit Français</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl md:text-6xl font-bold mb-6"
            >
              Conditions Générales de Vente
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-gray-300 max-w-2xl mx-auto"
            >
              Ces conditions générales de vente s'appliquent à toutes les offres, commandes, contrats et prestations de France IPTV.
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
                  <strong className="text-brand-black">Note :</strong> Ce document présente une structure type de conditions générales de vente encadrée par le Code de la consommation français. Nous recommandons de faire valider la formulation finale par un professionnel qualifié en droit de la consommation avant toute mise en ligne définitive.
                </p>
              </motion.div>

              {/* Section 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-brand-offwhite border border-brand-gray-border rounded-2xl p-8"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FileText className="w-6 h-6 text-brand-gold" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-4 text-brand-black">1. Définitions</h2>
                    <div className="space-y-3">
                      <div className="bg-white rounded-lg p-4 border border-brand-gray-border">
                        <p className="text-brand-gray"><strong className="text-brand-black">Prestataire :</strong> France IPTV, fournisseur de services IPTV</p>
                      </div>
                      <div className="bg-white rounded-lg p-4 border border-brand-gray-border">
                        <p className="text-brand-gray"><strong className="text-brand-black">Client :</strong> Personne physique ou morale utilisant les services</p>
                      </div>
                      <div className="bg-white rounded-lg p-4 border border-brand-gray-border">
                        <p className="text-brand-gray"><strong className="text-brand-black">Services :</strong> Abonnements IPTV et prestations associées</p>
                      </div>
                      <div className="bg-white rounded-lg p-4 border border-brand-gray-border">
                        <p className="text-brand-gray"><strong className="text-brand-black">Contrat :</strong> L'accord conclu entre France IPTV et le Client</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Section 2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-brand-offwhite border border-brand-gray-border rounded-2xl p-8"
              >
                <h2 className="text-2xl font-bold mb-4 text-brand-black">2. Champ d'Application</h2>
                <p className="text-brand-gray leading-relaxed mb-4">
                  Ces conditions générales de vente s'appliquent à toutes les offres, commandes, contrats et prestations de France IPTV, sauf accord écrit contraire exprès.
                </p>
                <p className="text-brand-gray leading-relaxed">
                  En utilisant nos services, vous acceptez ces conditions. Toute condition différente émanant du client est expressément écartée.
                </p>
              </motion.div>

              {/* Section 3 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-brand-offwhite border border-brand-gray-border rounded-2xl p-8"
              >
                <h2 className="text-2xl font-bold mb-4 text-brand-black">3. Services & Disponibilité</h2>
                <div className="space-y-4">
                  <p className="text-brand-gray leading-relaxed">
                    France IPTV propose des services IPTV via internet. La prestation comprend :
                  </p>
                  <ul className="space-y-2 text-brand-gray">
                    <li className="flex items-start gap-2">
                      <span className="text-brand-gold mt-1">•</span>
                      <span>L'accès à 30 500+ chaînes de télévision en direct</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand-gold mt-1">•</span>
                      <span>Une bibliothèque de Vidéo à la Demande (VOD)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand-gold mt-1">•</span>
                      <span>Un service client francophone 24/7</span>
                    </li>
                  </ul>
                  <div className="bg-yellow-50 border border-yellow-300 rounded-lg p-4 mt-4">
                    <p className="text-brand-gray text-sm">
                      <strong className="text-yellow-700">Attention :</strong> La disponibilité de certaines chaînes peut évoluer sans préavis. France IPTV dépend de tiers pour la fourniture du contenu.
                    </p>
                  </div>
                  <p className="text-brand-gray leading-relaxed mt-4">
                    Le client est responsable de disposer d'une connexion internet adaptée (minimum 10 Mbps pour la HD, 25 Mbps pour la 4K) et d'un équipement compatible.
                  </p>
                </div>
              </motion.div>

              {/* Section 4 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-brand-offwhite border border-brand-gray-border rounded-2xl p-8"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <CreditCard className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-4 text-brand-black">4. Commande & Paiement</h2>
                    <p className="text-brand-gray leading-relaxed mb-4">
                      <strong className="text-brand-black">Prix :</strong> Tous les prix indiqués s'entendent <strong className="text-brand-black">TTC</strong> (toutes taxes comprises), sauf mention contraire.
                    </p>
                    <p className="text-brand-gray leading-relaxed mb-4">
                      <strong className="text-brand-black">Paiement :</strong> Le paiement doit être effectué intégralement à l'avance via les moyens proposés (Binance Pay, PayPal). Les abonnements ne sont activés qu'après réception du paiement.
                    </p>
                    <div className="bg-white rounded-lg p-4 border border-brand-gray-border">
                      <p className="text-brand-gray">
                        <strong className="text-brand-black">Défaut de paiement :</strong> En cas de non-paiement, France IPTV se réserve le droit de suspendre ou de résilier la prestation sans préavis.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Section 5 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-brand-offwhite border border-brand-gray-border rounded-2xl p-8"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-4 text-brand-black">5. Durée & Résiliation</h2>
                    <p className="text-brand-gray leading-relaxed mb-4">
                      Les abonnements sont proposés pour des durées fixes :
                    </p>
                    <div className="grid md:grid-cols-3 gap-4 mb-4">
                      <div className="bg-white rounded-lg p-4 border border-brand-gray-border text-center">
                        <div className="text-2xl font-bold text-brand-gold mb-1">3 mois</div>
                        <div className="text-sm text-brand-gray">Courte période de test</div>
                      </div>
                      <div className="bg-white rounded-lg p-4 border border-brand-gray-border text-center">
                        <div className="text-2xl font-bold text-brand-gold mb-1">6 mois</div>
                        <div className="text-sm text-brand-gray">Choix populaire</div>
                      </div>
                      <div className="bg-white rounded-lg p-4 border border-brand-gray-border text-center">
                        <div className="text-2xl font-bold text-brand-gold mb-1">12 mois</div>
                        <div className="text-sm text-brand-gray">Meilleur prix</div>
                      </div>
                    </div>
                    <div className="bg-green-50 border border-green-300 rounded-lg p-4">
                      <p className="text-brand-gray">
                        <strong className="text-green-700">Aucune reconduction automatique :</strong> Les abonnements ne sont PAS reconduits automatiquement. À la fin de la période choisie, la prestation s'arrête automatiquement. Vous pouvez toujours renouveler manuellement.
                      </p>
                    </div>
                    <p className="text-brand-gray leading-relaxed mt-4">
                      <strong className="text-brand-black">Résiliation par le prestataire :</strong> France IPTV peut résilier le contrat immédiatement en cas d'abus, de fraude, de revente ou de non-respect des présentes conditions.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Section 6 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-brand-offwhite border border-brand-gray-border rounded-2xl p-8"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <AlertTriangle className="w-6 h-6 text-red-500" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-4 text-brand-black">6. Utilisation & Responsabilités</h2>
                    <p className="text-brand-gray leading-relaxed mb-4">
                      <strong className="text-brand-black">Usage autorisé :</strong>
                    </p>
                    <ul className="space-y-2 text-brand-gray mb-4">
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 mt-1">✓</span>
                        <span>Usage personnel, non commercial</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 mt-1">✓</span>
                        <span>Usage au sein de votre foyer</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 mt-1">✓</span>
                        <span>Un flux simultané maximum (sauf mention contraire)</span>
                      </li>
                    </ul>
                    <p className="text-brand-gray leading-relaxed mb-4">
                      <strong className="text-brand-black">Interdit :</strong>
                    </p>
                    <ul className="space-y-2 text-brand-gray">
                      <li className="flex items-start gap-2">
                        <span className="text-red-500 mt-1">✗</span>
                        <span>Partage des identifiants avec des tiers</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-500 mt-1">✗</span>
                        <span>Revente ou usage commercial</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-500 mt-1">✗</span>
                        <span>Utilisation de VPN perturbant le service</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-500 mt-1">✗</span>
                        <span>Ingénierie inverse ou piratage du service</span>
                      </li>
                    </ul>
                    <div className="bg-red-50 border border-red-300 rounded-lg p-4 mt-4">
                      <p className="text-brand-gray text-sm">
                        <strong className="text-red-600">Avertissement :</strong> Le non-respect de ces conditions d'utilisation entraîne la résiliation immédiate de l'abonnement, sans remboursement.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Section 7 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-brand-offwhite border border-brand-gray-border rounded-2xl p-8"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-4 text-brand-black">7. Responsabilité & Garanties</h2>
                    <p className="text-brand-gray leading-relaxed mb-4">
                      France IPTV s'efforce de fournir un service fiable, mais :
                    </p>
                    <ul className="space-y-2 text-brand-gray mb-4">
                      <li className="flex items-start gap-2">
                        <span className="text-brand-gold mt-1">•</span>
                        <span>La responsabilité est limitée au montant payé par le client pour l'abonnement concerné</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-brand-gold mt-1">•</span>
                        <span>France IPTV n'est pas responsable des interruptions, problèmes techniques ou pertes de données causés par des facteurs externes (internet, coupure de courant, serveurs tiers)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-brand-gold mt-1">•</span>
                        <span>France IPTV garantit une disponibilité de 99,9 %, mais ne peut être tenu responsable des interruptions temporaires</span>
                      </li>
                    </ul>
                    <div className="bg-white rounded-lg p-4 border border-brand-gray-border">
                      <p className="text-brand-gray">
                        <strong className="text-brand-black">Force majeure :</strong> France IPTV n'est pas responsable en cas de force majeure, incluant notamment : guerre, catastrophes naturelles, coupure d'électricité, panne internet, actions de tiers et mesures gouvernementales.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Section 8 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-brand-offwhite border border-brand-gray-border rounded-2xl p-8"
              >
                <h2 className="text-2xl font-bold mb-4 text-brand-black">8. Propriété Intellectuelle</h2>
                <p className="text-brand-gray leading-relaxed mb-4">
                  Tous les contenus, matériels et droits de propriété intellectuelle restent la propriété de leurs ayants droit respectifs. Il est interdit au client de :
                </p>
                <ul className="space-y-2 text-brand-gray">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">✗</span>
                    <span>Copier, distribuer ou diffuser publiquement le contenu</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">✗</span>
                    <span>Utiliser des marques, logos ou autres éléments protégés</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">✗</span>
                    <span>Procéder à l'ingénierie inverse du logiciel ou de la technologie du service</span>
                  </li>
                </ul>
              </motion.div>

              {/* Section 9 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-brand-offwhite border border-brand-gray-border rounded-2xl p-8"
              >
                <h2 className="text-2xl font-bold mb-4 text-brand-black">9. Confidentialité & Protection des Données</h2>
                <p className="text-brand-gray leading-relaxed mb-4">
                  France IPTV traite les données personnelles conformément au RGPD. Pour plus d'informations sur le traitement de vos données, consultez notre <a href="/politique-de-confidentialite" className="text-brand-gold hover:underline">Politique de Confidentialité</a>.
                </p>
                <p className="text-brand-gray leading-relaxed">
                  Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données.
                </p>
              </motion.div>

              {/* Section 10 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-brand-offwhite border border-brand-gray-border rounded-2xl p-8"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Globe className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-4 text-brand-black">10. Droit Applicable & Litiges</h2>
                    <p className="text-brand-gray leading-relaxed mb-4">
                      Les présentes conditions générales de vente et tous les contrats entre France IPTV et le client sont régis par le <strong className="text-brand-black">droit français</strong>.
                    </p>
                    <p className="text-brand-gray leading-relaxed mb-4">
                      Les litiges sont soumis aux juridictions françaises compétentes, sauf disposition d'ordre public contraire.
                    </p>
                    <div className="bg-white rounded-lg p-4 border border-brand-gray-border">
                      <p className="text-brand-gray">
                        <strong className="text-brand-black">Règlement des litiges :</strong> Nous nous efforçons de résoudre tout litige à l'amiable. Contactez d'abord notre service client avant d'entamer une action en justice. Conformément à l'article L616-1 du Code de la consommation, vous pouvez également recourir gratuitement à un médiateur de la consommation.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Section 11 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-brand-offwhite border border-brand-gray-border rounded-2xl p-8"
              >
                <h2 className="text-2xl font-bold mb-4 text-brand-black">11. Modifications</h2>
                <p className="text-brand-gray leading-relaxed">
                  France IPTV se réserve le droit de modifier ces conditions générales de vente. Les modifications sont publiées sur cette page et prennent effet 30 jours après leur publication. Les contrats en cours restent soumis aux conditions en vigueur au moment de leur conclusion.
                </p>
              </motion.div>

              {/* Section 12 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-brand-offwhite border border-brand-gray-border rounded-2xl p-8"
              >
                <h2 className="text-2xl font-bold mb-4 text-brand-black">12. Contact</h2>
                <p className="text-brand-gray leading-relaxed mb-4">
                  Pour toute question concernant ces conditions générales de vente, vous pouvez nous contacter :
                </p>
                <div className="bg-white rounded-lg p-4 border border-brand-gray-border">
                  <p className="text-brand-gray">
                    <strong className="text-brand-black">France IPTV</strong><br />
                    France<br />
                    E-mail : <a href="mailto:support@franceiptv.stream" className="text-brand-gold hover:underline">support@franceiptv.stream</a><br />
                    WhatsApp : <a href="https://wa.me/18653169315" className="text-brand-gold hover:underline">+1 (865) 316-9315</a>
                  </p>
                </div>
              </motion.div>

              {/* Contact CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-surface border border-lime/30 border border-brand-gold/30 rounded-2xl p-8 text-center"
              >
                <FileText className="w-12 h-12 text-brand-gold mx-auto mb-4" />
                <h2 className="text-2xl font-bold mb-4 text-brand-black">Des Questions sur Nos Conditions ?</h2>
                <p className="text-brand-gray mb-6">
                  Notre équipe est là pour vous aider. N'hésitez pas à nous contacter.
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

export default AlgemeneVoorwaarden;
