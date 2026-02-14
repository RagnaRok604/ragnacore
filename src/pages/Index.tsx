import { motion } from "framer-motion";
import { Award, Headphones, Zap, CheckCircle, ArrowRight, Users } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import ServicesCarousel from "@/components/ServicesCarousel";
import PartnersSection from "@/components/PartnersSection";
import heroBg from "@/assets/hero-bg.jpg";

const differentials = [
  { icon: Award, title: "Qualidade", desc: "Padrões elevados em cada projeto que entregamos" },
  { icon: Headphones, title: "Suporte 24/7", desc: "Estamos sempre disponíveis quando precisa de nós" },
  { icon: Zap, title: "Experiência", desc: "Anos de mercado e dezenas de projetos entregues" },
  { icon: CheckCircle, title: "Soluções Completas", desc: "Do planeamento à execução, tudo num só lugar" },
];

const stats = [
  { value: "50+", label: "Projetos Entregues" },
  { value: "99.9%", label: "Uptime Garantido" },
  { value: "24/7", label: "Suporte Técnico" },
  { value: "4+", label: "Anos de Experiência" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const Index = () => (
  <Layout>
    {/* 1. HERO — Primeira impressão, proposta de valor clara */}
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <span className="inline-block text-sm font-semibold text-primary bg-primary/10 px-4 py-1.5 rounded-full mb-6">
            Soluções Tecnológicas em Moçambique
          </span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Tecnologia que <span className="text-gradient">transforma</span> o seu negócio
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl">
            Websites, redes, segurança e muito mais — a RagnaCore é o parceiro ideal para a sua transformação digital.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://wa.me/258860033620?text=Olá!%20Gostaria%20de%20saber%20mais."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-primary text-primary-foreground px-8 py-3.5 rounded-lg font-semibold hover:opacity-90 transition-opacity shadow-glow"
            >
              Fale Connosco no WhatsApp
            </a>
            <Link
              to="/servicos"
              className="border border-border text-foreground px-8 py-3.5 rounded-lg font-semibold hover:bg-secondary transition-colors flex items-center gap-2"
            >
              Ver Serviços <ArrowRight size={18} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>

    {/* 2. NÚMEROS — Prova social imediata após o hero */}
    <section className="py-10 md:py-14 border-b border-border bg-card/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="text-center"
            >
              <span className="block font-display text-3xl md:text-4xl font-bold text-primary">{s.value}</span>
              <span className="text-sm text-muted-foreground mt-1">{s.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* 3. SERVIÇOS CARROSSEL — O que fazemos */}
    <ServicesCarousel />

    {/* 4. DIFERENCIAIS — Porquê escolher-nos */}
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
            Porquê a <span className="text-gradient">RagnaCore</span>?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Diferenciais que nos tornam a escolha certa</p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {differentials.map((d, i) => (
            <motion.div
              key={d.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="text-center p-6 rounded-xl border border-border bg-card shadow-card hover:shadow-glow transition-shadow"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <d.icon size={28} className="text-primary" />
              </div>
              <h3 className="font-display font-semibold text-foreground mb-2">{d.title}</h3>
              <p className="text-sm text-muted-foreground">{d.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* 5. SOBRE — Quem somos (compacto, com contexto) */}
    <section className="py-16 md:py-24 bg-card/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span className="text-sm font-semibold text-primary uppercase tracking-widest mb-3 block">Sobre Nós</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-5">
              Quem é a <span className="text-gradient">RagnaCore</span>?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Somos uma empresa de tecnologia sediada em Maputo, Moçambique, focada em entregar soluções inovadoras e acessíveis. Desde a criação de websites até a instalação de sistemas de segurança, a RagnaCore é sinónimo de confiança e excelência técnica.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              A nossa missão é capacitar negócios e residências com a melhor tecnologia disponível, oferecendo um serviço personalizado e suporte contínuo.
            </p>
            <Link
              to="/sobre"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
            >
              Saiba mais sobre nós <ArrowRight size={16} />
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="bg-card rounded-xl border border-border p-6 text-center shadow-card">
              <Users size={32} className="text-primary mx-auto mb-3" />
              <span className="block font-display font-bold text-2xl text-foreground">50+</span>
              <span className="text-xs text-muted-foreground">Clientes Satisfeitos</span>
            </div>
            <div className="bg-card rounded-xl border border-border p-6 text-center shadow-card">
              <Zap size={32} className="text-primary mx-auto mb-3" />
              <span className="block font-display font-bold text-2xl text-foreground">100+</span>
              <span className="text-xs text-muted-foreground">Projetos Concluídos</span>
            </div>
            <div className="bg-card rounded-xl border border-border p-6 text-center shadow-card col-span-2">
              <Award size={32} className="text-primary mx-auto mb-3" />
              <span className="block font-display font-bold text-lg text-foreground">Excelência Técnica</span>
              <span className="text-xs text-muted-foreground">Profissionais certificados e dedicados</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* 6. CTA — Chamada para acção */}
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Pronto para <span className="text-gradient">inovar</span>?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            Entre em contacto connosco e descubra como a tecnologia pode impulsionar o seu negócio.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/258860033620?text=Olá!%20Gostaria%20de%20um%20orçamento."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-primary text-primary-foreground px-8 py-3.5 rounded-lg font-semibold hover:opacity-90 transition-opacity shadow-glow inline-block"
            >
              Solicitar Orçamento
            </a>
            <Link
              to="/contactos"
              className="border border-border text-foreground px-8 py-3.5 rounded-lg font-semibold hover:bg-secondary transition-colors"
            >
              Ver Contactos
            </Link>
          </div>
        </motion.div>
      </div>
    </section>

    {/* 7. PARCEIROS — Prova social antes do rodapé */}
    <PartnersSection />
  </Layout>
);

export default Index;
