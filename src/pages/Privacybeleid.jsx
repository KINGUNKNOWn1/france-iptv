import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Shield, Mail, Clock, Lock, Eye, Users } from 'lucide-react';

const Privacybeleid = () => {
  return (
    <>
      <Helmet>
        <title>Politique de Confidentialité - France IPTV</title>
        <meta name="description" content="Politique de confidentialité de France IPTV. Découvrez comment nous protégeons et traitons vos données personnelles conformément au RGPD." />
        <link rel="canonical" href="https://franceiptv.stream/politique-de-confidentialite" />
      </Helmet>

      <div className="min-h-screen bg-white text-brand-black">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden bg-gradient-to-br from-[#141311] via-[#201C18] to-[#141311] text-white">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-6"
            >
              <Shield className="w-6 h-6 text-green-400" />
              <span className="font-semibold">Conforme au RGPD</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl md:text-6xl font-bold mb-6"
            >
              Politique de Confidentialité
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-gray-300 max-w-2xl mx-auto"
            >
              Votre vie privée compte pour nous. Découvrez ici comment France IPTV protège et traite vos données personnelles.
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
              {/* Section 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-brand-offwhite border border-brand-gray-border rounded-2xl p-8"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-brand-gold" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-4 text-brand-black">1. Responsable du Traitement</h2>
                    <p className="text-brand-gray leading-relaxed mb-4">
                      France IPTV est responsable du traitement de vos données personnelles tel que décrit dans cette politique de confidentialité.
                    </p>
                    <div className="bg-white rounded-lg p-4 border border-brand-gray-border">
                      <p className="text-brand-gray"><strong className="text-brand-black">Contact :</strong></p>
                      <p className="text-brand-gray">E-mail : support@franceiptv.stream</p>
                      <p className="text-brand-gray">Confidentialité : privacy@franceiptv.stream</p>
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
                  Cette politique de confidentialité s'applique :
                </p>
                <ul className="space-y-2 text-brand-gray">
                  <li className="flex items-start gap-2">
                    <span className="text-brand-gold mt-1">•</span>
                    <span>Aux visiteurs de notre site</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-gold mt-1">•</span>
                    <span>Aux utilisateurs de nos services IPTV</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-gold mt-1">•</span>
                    <span>Aux abonnés de notre newsletter</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-gold mt-1">•</span>
                    <span>Aux personnes qui nous contactent</span>
                  </li>
                </ul>
              </motion.div>

              {/* Section 3 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-brand-offwhite border border-brand-gray-border rounded-2xl p-8"
              >
                <h2 className="text-2xl font-bold mb-4 text-brand-black">3. Quelles Données Collectons-Nous ?</h2>
                <p className="text-brand-gray leading-relaxed mb-4">
                  Nous collectons les catégories de données personnelles suivantes :
                </p>

                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4 border border-brand-gray-border">
                    <h3 className="font-bold text-brand-black mb-2">Informations de compte</h3>
                    <p className="text-brand-gray text-sm">Nom, adresse e-mail, mot de passe (chiffré), localisation</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-brand-gray-border">
                    <h3 className="font-bold text-brand-black mb-2">Coordonnées</h3>
                    <p className="text-brand-gray text-sm">E-mail, numéro WhatsApp, messages de support</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-brand-gray-border">
                    <h3 className="font-bold text-brand-black mb-2">Données de transaction et de facturation</h3>
                    <p className="text-brand-gray text-sm">Informations de paiement, données de facturation (via prestataires de paiement externes)</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-brand-gray-border">
                    <h3 className="font-bold text-brand-black mb-2">Données techniques</h3>
                    <p className="text-brand-gray text-sm">Adresse IP, journaux d'utilisation, informations sur l'appareil, adresse MAC</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-brand-gray-border">
                    <h3 className="font-bold text-brand-black mb-2">Données de cookies</h3>
                    <p className="text-brand-gray text-sm">Voir notre Politique de Cookies pour plus de détails</p>
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
                <h2 className="text-2xl font-bold mb-4 text-brand-black">4. Base Légale (RGPD)</h2>
                <p className="text-brand-gray leading-relaxed mb-4">
                  Nous traitons vos données personnelles sur la base de :
                </p>
                <ul className="space-y-2 text-brand-gray">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span><strong className="text-brand-black">Exécution du contrat :</strong> Pour la fourniture des services IPTV</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span><strong className="text-brand-black">Intérêt légitime :</strong> Pour le service client et l'amélioration des services</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span><strong className="text-brand-black">Obligation légale :</strong> Pour la comptabilité et les obligations fiscales</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span><strong className="text-brand-black">Consentement :</strong> Pour le marketing et les newsletters</span>
                  </li>
                </ul>
              </motion.div>

              {/* Section 5 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-brand-offwhite border border-brand-gray-border rounded-2xl p-8"
              >
                <h2 className="text-2xl font-bold mb-4 text-brand-black">5. Partage des Données</h2>
                <p className="text-brand-gray leading-relaxed mb-4">
                  Nous partageons vos données personnelles uniquement lorsque nécessaire avec :
                </p>
                <ul className="space-y-2 text-brand-gray">
                  <li className="flex items-start gap-2">
                    <span className="text-brand-gold mt-1">•</span>
                    <span>Sous-traitants et prestataires (hébergement, logiciels de support)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-gold mt-1">•</span>
                    <span>Prestataires de paiement (carte bancaire, PayPal, virement SEPA)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-gold mt-1">•</span>
                    <span>Autorités si la loi l'exige</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-gold mt-1">•</span>
                    <span>En cas de cession d'entreprise (fusion, acquisition)</span>
                  </li>
                </ul>
              </motion.div>

              {/* Section 6 */}
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
                    <h2 className="text-2xl font-bold mb-4 text-brand-black">6. Durées de Conservation</h2>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center border-b border-brand-gray-border pb-2">
                        <span className="text-brand-gray">Données de compte</span>
                        <span className="text-brand-black font-semibold">Durée de l'abonnement + 24 mois</span>
                      </div>
                      <div className="flex justify-between items-center border-b border-brand-gray-border pb-2">
                        <span className="text-brand-gray">Données comptables</span>
                        <span className="text-brand-black font-semibold">10 ans (obligation légale)</span>
                      </div>
                      <div className="flex justify-between items-center border-b border-brand-gray-border pb-2">
                        <span className="text-brand-gray">Tickets de support</span>
                        <span className="text-brand-black font-semibold">24 mois</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-brand-gray">Journaux techniques</span>
                        <span className="text-brand-black font-semibold">12 mois</span>
                      </div>
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
                <h2 className="text-2xl font-bold mb-4 text-brand-black">7. Cookies</h2>
                <p className="text-brand-gray leading-relaxed mb-4">
                  Nous utilisons des cookies fonctionnels nécessaires au fonctionnement du site. Les cookies analytiques et marketing ne sont déposés qu'avec votre consentement.
                </p>
                <a href="/politique-de-cookies" className="text-brand-gold hover:underline font-semibold">
                  Lire notre Politique de Cookies complète →
                </a>
              </motion.div>

              {/* Section 8 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-brand-offwhite border border-brand-gray-border rounded-2xl p-8"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Eye className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-4 text-brand-black">8. Vos Droits</h2>
                    <p className="text-brand-gray leading-relaxed mb-4">
                      Conformément au RGPD, vous disposez des droits suivants :
                    </p>
                    <ul className="space-y-2 text-brand-gray">
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 mt-1">✓</span>
                        <span><strong className="text-brand-black">Accès :</strong> Demander quelles données nous traitons vous concernant</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 mt-1">✓</span>
                        <span><strong className="text-brand-black">Rectification :</strong> Faire corriger des données inexactes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 mt-1">✓</span>
                        <span><strong className="text-brand-black">Effacement :</strong> Faire supprimer vos données</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 mt-1">✓</span>
                        <span><strong className="text-brand-black">Portabilité :</strong> Recevoir vos données dans un format lisible</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 mt-1">✓</span>
                        <span><strong className="text-brand-black">Opposition :</strong> Vous opposer à un traitement</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 mt-1">✓</span>
                        <span><strong className="text-brand-black">Limitation :</strong> Faire limiter un traitement</span>
                      </li>
                    </ul>
                    <div className="mt-4 bg-white rounded-lg p-4 border border-brand-gray-border">
                      <p className="text-brand-gray">
                        <strong className="text-brand-black">Exercer vos droits ?</strong><br />
                        Contactez-nous à <a href="mailto:privacy@franceiptv.stream" className="text-brand-gold hover:underline">privacy@franceiptv.stream</a>
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Section 9 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-brand-offwhite border border-brand-gray-border rounded-2xl p-8"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Lock className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-4 text-brand-black">9. Sécurité</h2>
                    <p className="text-brand-gray leading-relaxed mb-4">
                      Nous prenons des mesures techniques et organisationnelles appropriées pour protéger vos données personnelles contre la perte, l'usage abusif et l'accès non autorisé :
                    </p>
                    <ul className="space-y-2 text-brand-gray">
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 mt-1">✓</span>
                        <span>Chiffrement SSL/TLS pour toutes les connexions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 mt-1">✓</span>
                        <span>Stockage chiffré des mots de passe</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 mt-1">✓</span>
                        <span>Audits de sécurité réguliers</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 mt-1">✓</span>
                        <span>Contrôle des accès et journalisation</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Section 10 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-brand-offwhite border border-brand-gray-border rounded-2xl p-8"
              >
                <h2 className="text-2xl font-bold mb-4 text-brand-black">10. Réclamations</h2>
                <p className="text-brand-gray leading-relaxed mb-4">
                  Vous avez une réclamation concernant le traitement de vos données personnelles ? Contactez-nous d'abord à privacy@franceiptv.stream.
                </p>
                <p className="text-brand-gray leading-relaxed">
                  Vous avez également le droit de déposer une réclamation auprès de la CNIL :
                </p>
                <div className="mt-4 bg-white rounded-lg p-4 border border-brand-gray-border">
                  <p className="text-brand-gray">
                    <strong className="text-brand-black">Commission Nationale de l'Informatique et des Libertés (CNIL)</strong><br />
                    Site web : <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-brand-gold hover:underline">www.cnil.fr</a><br />
                    Téléphone : 01 53 73 22 22
                  </p>
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
                  Nous pouvons modifier cette politique de confidentialité de temps à autre. La version la plus récente est toujours disponible sur cette page. En cas de modification importante, nous vous en informerons activement.
                </p>
              </motion.div>

              {/* Contact Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-blue-50 to-blue-100 border border-brand-gold/30 rounded-2xl p-8 text-center"
              >
                <Mail className="w-12 h-12 text-brand-gold mx-auto mb-4" />
                <h2 className="text-2xl font-bold mb-4 text-brand-black">Des Questions sur Votre Vie Privée ?</h2>
                <p className="text-brand-gray mb-6">
                  N'hésitez pas à nous contacter. Nous serons heureux de vous aider.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="mailto:privacy@franceiptv.stream"
                    className="bg-brand-gold hover:bg-[#2B4577] text-white px-8 py-3 rounded-full font-semibold transition-colors"
                  >
                    E-mail à l'Équipe Confidentialité
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

export default Privacybeleid;
