import React from 'react';

// Long-form, keyword-focused guide block for device/troubleshooting pages.
// Uses theme tokens only, so it renders correctly in the light and dark themes.
const SeoGuideSection = ({ title, children }) => (
  <section className="py-16 bg-brand-offwhite">
    <div className="container mx-auto px-4 max-w-4xl">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-brand-black">{title}</h2>
      <div className="space-y-4 text-lg leading-relaxed text-brand-gray [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-brand-black [&_h3]:mt-8 [&_h3]:mb-2 [&_strong]:text-brand-black [&_a]:text-brand-gold [&_a]:underline [&_ol]:list-decimal [&_ol]:pl-6 [&_ul]:list-disc [&_ul]:pl-6 [&_li]:my-1">
        {children}
      </div>
    </div>
  </section>
);

export default SeoGuideSection;
