import { motion } from "framer-motion";
import { Globe, Server, Wifi, Camera, Shield, Award, Headphones, Zap, CheckCircle, ArrowRight, Users, Phone, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import ServicesCarousel from "@/components/ServicesCarousel";
import PartnersSection from "@/components/PartnersSection";

import imgWebsite from "@/assets/project-website.jpg";
import imgNetwork from "@/assets/project-network.jpg";
import imgSecurity from "@/assets/project-security.jpg";

const services = [
  { icon: Globe, title: "Criação de Websites", desc: "Criamos websites para sua empresa, desde sites simples até plataformas complexas com as melhores tecnologias." },
  { icon: Phone, title: "Telecomunicações & PBX", desc: "Centrais telefónicas PBX, VoIP empresarial e montagem completa de call centers." },
  { icon: Server, title: "Domínio & Hospedagem", desc: "Registo de domínios e alojamento seguro com uptime de 99.9% e certificado SSL incluído." },
  { icon: Camera, title: "Segurança Eletrónica", desc: "Câmeras HD, alarmes inteligentes e monitorização remota via aplicação móvel." },
];

const mainServices = [
  { icon: Shield, title: "Segurança de Redes", desc: "Proteção avançada para a sua infraestrutura de rede com firewalls e monitorização contínua." },
  { icon: Globe, title: "Criação de Websites", desc: "Desenvolvemos websites responsivos e modernos com as melhores práticas de UX/UI." },
  { icon: Server, title: "Hospedagem Web", desc: "Alojamento fiável e seguro para o seu website com suporte técnico dedicado." },
  { icon: Phone, title: "PBX & Call Centers", desc: "Montagem de centrais telefónicas, soluções VoIP e ambientes de call center profissionais." },
  { icon: Headphones, title: "Suporte Técnico", desc: "Assistência técnica especializada para manter os seus sistemas sempre operacionais." },
  { icon: ShoppingCart, title: "Sistemas de Gestão & POS", desc: "Software de gestão e stock para restaurantes, farmácias, bares, armazéns e mais." },
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
    {/* 1. HERO SLIDER */}
    <ServicesCarousel />

    {/* 2. BEM VINDO */}
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-2">
                Bem vindo à <span className="text-primary">RagnaCore</span>
                <span className="inline-block w-12 h-[3px] bg-primary ml-3 align-middle" />
              </h2>
              <p className="text-muted-foreground mb-10 max-w-xl">
                Somos uma empresa especializada em Soluções de T.I em Moçambique, peça já a sua cotação{" "}
                <Link to="/servicos" className="text-primary font-semibold hover:underline">Ver todos os Serviços</Link>
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {services.map((s, i) => (
                <motion.div key={s.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="flex gap-4 group">
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <s.icon size={24} className="text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground mb-1">
                      <Link to="/servicos" className="hover:text-primary transition-colors">{s.title}</Link>
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Cotação form */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-2">
            <div className="bg-primary rounded-xl p-8 text-primary-foreground">
              <h3 className="font-display text-2xl font-bold mb-3 text-center">Cotação</h3>
              <p className="text-primary-foreground/80 text-sm text-center mb-6">
                Digite seus detalhes de contacto aqui para nos ajudar a atendê-lo melhor e mais rápido.
              </p>
              <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
                <input type="text" placeholder="Nome *" className="w-full px-4 py-3 rounded bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 text-sm focus:outline-none focus:border-primary-foreground/60" />
                <input type="email" placeholder="Email *" className="w-full px-4 py-3 rounded bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 text-sm focus:outline-none focus:border-primary-foreground/60" />
                <input type="tel" placeholder="Telefone" className="w-full px-4 py-3 rounded bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 text-sm focus:outline-none focus:border-primary-foreground/60" />
                <textarea placeholder="Mensagem" rows={3} className="w-full px-4 py-3 rounded bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 text-sm focus:outline-none focus:border-primary-foreground/60 resize-none" />
                <button type="submit" className="w-full py-3 rounded bg-primary-foreground text-primary font-bold text-sm hover:bg-primary-foreground/90 transition-colors">
                  Submeter
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* 3. ABOUT CARDS */}
    <section className="py-16 md:py-20 bg-muted/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { img: imgWebsite, title: "Sobre a RagnaCore", desc: "A RagnaCore é uma empresa Moçambicana especializada em soluções tecnológicas completas para empresas e residências.", link: "/sobre" },
            { img: imgNetwork, title: "Nossos Serviços", desc: "Conheça todos os nossos serviços — desde criação de websites até infraestrutura de redes e segurança eletrónica.", link: "/servicos" },
            { img: imgSecurity, title: "Nossos Projetos", desc: "Veja os projetos que entregamos com sucesso e a qualidade que define cada solução RagnaCore.", link: "/projetos" },
          ].map((card, i) => (
            <motion.div key={card.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <Link to={card.link} className="group block bg-card rounded-xl overflow-hidden shadow-card hover:shadow-glow transition-shadow border border-border">
                <div className="h-48 overflow-hidden">
                  <img src={card.img} alt={card.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="font-display font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{card.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{card.desc}</p>
                  <span className="text-primary text-sm font-semibold inline-flex items-center gap-1">Saiba mais <ArrowRight size={14} /></span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* 4. NOSSOS SERVIÇOS */}
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-3">Nossos <span className="text-primary">Serviços</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Na RagnaCore dispomos de várias soluções para a sua empresa</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {mainServices.map((s, i) => (
            <motion.div key={s.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="group border border-border rounded-xl p-6 bg-card hover:shadow-glow transition-all hover:border-primary/30">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                <s.icon size={22} className="text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-display font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{s.desc}</p>
              <Link to="/servicos" className="text-primary text-sm font-semibold inline-flex items-center gap-1 hover:underline">Saiba mais <ArrowRight size={14} /></Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* 5. CTA BANNER */}
    <section className="py-16 md:py-20 bg-foreground text-primary-foreground">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="font-display text-2xl md:text-4xl font-bold mb-3">Somos apaixonados pelo nosso trabalho</h2>
          <p className="text-primary-foreground/60 text-xl md:text-2xl font-display font-semibold mb-6">Faça crescer o seu negócio</p>
          <div className="flex items-center justify-center gap-3 mb-6">
            <Phone size={20} className="text-primary" />
            <span className="text-xl md:text-2xl font-bold">+258 860 033 620</span>
          </div>
          <a href="https://wa.me/258860033620?text=Olá!%20Gostaria%20de%20um%20orçamento." target="_blank" rel="noopener noreferrer" className="inline-block bg-primary text-primary-foreground px-8 py-3.5 rounded font-bold text-sm hover:bg-accent transition-colors">
            Contacte-nos
          </a>
        </motion.div>
      </div>
    </section>

    {/* 6. PARCEIROS */}
    <PartnersSection />

    {/* 7. FOOTER CTA */}
    <section className="py-12 md:py-16 bg-muted/50">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-3">Relações com o cliente com comunicação transparente ...</h2>
          <p className="text-muted-foreground mb-6">A RagnaCore pode ajudá-lo a chegar lá.</p>
          <Link to="/contactos" className="inline-block bg-primary text-primary-foreground px-8 py-3.5 rounded font-bold text-sm hover:bg-accent transition-colors">Vamos a isso</Link>
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default Index;
