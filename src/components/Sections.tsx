// ... (Keep existing TheWhy, OriginStory, SymbolsGrid, Philosophy, Waitlist functions)

export function Connect({ t }: { t: Translation }) {
  return (
    <section id="connect" className="py-32 px-6 bg-cream flex flex-col items-center text-center">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }} 
        whileInView={{ opacity: 1, scale: 1 }} 
        viewport={{ once: true }} 
        className="mb-12"
      >
        {/* Fixed: object-contain prevents narrowing */}
        <img src="/logo.png" alt="JDDP Logo" className="w-16 h-16 object-contain" />
      </motion.div>
      
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-xl space-y-6 mb-16">
        <h3 className="font-display text-4xl md:text-6xl text-brown font-bold uppercase">{t.connect.title}</h3>
        <p className="font-serif italic text-xl text-body/80">{t.connect.subtitle}</p>
      </motion.div>

      <div className="flex flex-col items-center gap-6 mb-24">
        <SocialLink href="https://instagram.com/jddpbrand">{t.connect.instagram}</SocialLink>
        <SocialLink href="https://facebook.com/jddpbrand">{t.connect.facebook}</SocialLink>
      </div>
    </section>
  );
}
// ... (Keep existing SocialLink and Footer)
