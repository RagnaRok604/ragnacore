import { motion } from "framer-motion";

const partners = [
  { name: "TP-LINK", color: "hsl(195, 90%, 35%)" },
  { name: "MikroTik", color: "hsl(210, 80%, 35%)" },
  { name: "TVCABO", color: "hsl(0, 75%, 45%)" },
  { name: "Gest Internet", color: "hsl(145, 60%, 35%)" },
];

const PartnersSection = () => (
  <section className="py-16 md:py-20 border-t border-border">
    <div className="container mx-auto px-4 md:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-10"
      >
        <h2 className="font-display text-2xl md:text-3xl font-bold mb-2">
          Empresas <span className="text-gradient">Parceiras</span>
        </h2>
        <p className="text-muted-foreground text-sm">Trabalhamos com as melhores marcas do mercado</p>
      </motion.div>
      <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
        {partners.map((partner, i) => (
          <motion.div
            key={partner.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex items-center justify-center px-6 py-4 rounded-xl border border-border bg-card shadow-card hover:shadow-glow transition-shadow"
          >
            <span
              className="text-xl md:text-2xl font-bold font-display tracking-tight"
              style={{ color: partner.color }}
            >
              {partner.name}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PartnersSection;
