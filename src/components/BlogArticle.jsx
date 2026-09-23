import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ChevronDown, ArrowRight } from 'lucide-react';
import SEO from './SEO';
import { blogPosts, blogPostSchemas, formatPostDate } from '../data/blogPosts';
import { openWhatsApp } from '../utils/tracking';

// Shared layout for blog posts (brand-* tokens only, so it works in the light
// and the dark theme): hero, quick answer,
// sections, FAQ (+ FAQPage JSON-LD), trial CTA and related posts.
const BlogArticle = ({ link, seoTitle, description, keywords, quickAnswer, children, faqs = [], related = [] }) => {
  const post = blogPosts.find((p) => p.link === link);
  const faqSchema = faqs.length > 0 && {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };
  const relatedPosts = related.map((l) => blogPosts.find((p) => p.link === l)).filter(Boolean);

  return (
    <>
      <SEO title={seoTitle} description={description} keywords={keywords} ogType="article" canonicalPath={link} />
      <Helmet>
        {[...blogPostSchemas(link), faqSchema].filter(Boolean).map((schema, i) => (
          <script key={i} type="application/ld+json">{JSON.stringify(schema)}</script>
        ))}
      </Helmet>

      <div className="min-h-screen pt-20">
        <header className="py-14 md:py-16 border-b border-brand-gray-border bg-brand-offwhite">
          <div className="max-w-3xl mx-auto px-4">
            <nav aria-label="Fil d'Ariane" className="text-xs text-brand-gray mb-6">
              <Link to="/" className="hover:text-brand-gold">Accueil</Link> <span className="mx-1">/</span>
              <Link to="/blog" className="hover:text-brand-gold">Blog</Link> <span className="mx-1">/</span>
              <span className="text-brand-black">{post.shortTitle}</span>
            </nav>
            <p className="flex items-center gap-4 text-[10px] tracking-[0.3em] font-medium text-brand-black mb-5">
              <span className="inline-block w-10 h-px bg-brand-gold" /> {post.category.toUpperCase()}
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-brand-black leading-tight mb-5">{post.title}</h1>
            <p className="text-lg text-brand-gray mb-4">{post.excerpt}</p>
            <p className="text-xs text-brand-gray">
              Mis à jour le {formatPostDate(post.dateModified)} · Lecture {post.readTime} · Équipe France IPTV
            </p>
          </div>
        </header>

        <article className="max-w-3xl mx-auto px-4 py-12">
          <div className="border-l-4 border-brand-gold bg-brand-offwhite rounded-r-xl p-6 mb-12">
            <p className="text-xs tracking-[0.2em] text-brand-gold font-semibold mb-2">LA RÉPONSE COURTE</p>
            <div className="text-brand-black text-lg leading-relaxed">{quickAnswer}</div>
          </div>

          <div className="blog-body space-y-10 text-brand-gray text-[17px]">{children}</div>

          {faqs.length > 0 && (
            <section className="mt-14">
              <h2 className="text-3xl font-bold text-brand-black mb-4">Questions fréquentes</h2>
              {faqs.map(({ q, a }) => (
                <details key={q} className="group border-b border-brand-gray-border">
                  <summary className="flex items-center justify-between gap-5 py-5 cursor-pointer list-none text-brand-black font-medium [&::-webkit-details-marker]:hidden">
                    {q}
                    <ChevronDown size={20} className="flex-shrink-0 transition-transform group-open:rotate-180 group-open:text-brand-gold" />
                  </summary>
                  <p className="text-brand-gray pb-5 pr-6">{a}</p>
                </details>
              ))}
            </section>
          )}

          <section className="mt-14 rounded-2xl border border-brand-gold/40 bg-brand-offwhite p-7 md:p-9">
            <h2 className="text-3xl font-bold text-brand-black mb-3">Testez France IPTV gratuitement pendant 24 h</h2>
            <p className="text-brand-gray mb-6">
              30 500+ chaînes, films et séries en HD/4K, aide à l'installation sur votre appareil. Sans carte bancaire, sans engagement.
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => window.dispatchEvent(new CustomEvent('open-trial'))}
                className="min-h-[50px] inline-flex items-center gap-2 px-6 bg-brand-gold hover:opacity-90 text-white font-semibold rounded-lg"
              >
                Essayer 24 h gratuitement <ArrowRight size={18} />
              </button>
              <button
                type="button"
                onClick={() => openWhatsApp(`Bonjour ! J'ai lu votre article « ${post.shortTitle} » et j'ai une question.`)}
                className="min-h-[50px] inline-flex items-center gap-2 px-6 border border-brand-gray-border hover:border-brand-gold text-brand-black font-semibold rounded-lg"
              >
                Poser une question sur WhatsApp
              </button>
            </div>
          </section>

          {relatedPosts.length > 0 && (
            <section className="mt-14">
              <h2 className="text-2xl font-bold text-brand-black mb-5">Articles liés</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {relatedPosts.map((p) => (
                  <Link key={p.link} to={p.link} className="block rounded-xl border border-brand-gray-border bg-brand-offwhite p-5 hover:border-brand-gold transition-colors">
                    <p className="text-brand-black font-semibold mb-1">{p.shortTitle}</p>
                    <p className="text-sm text-brand-gray">{p.excerpt}</p>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </article>
      </div>
    </>
  );
};

export default BlogArticle;
