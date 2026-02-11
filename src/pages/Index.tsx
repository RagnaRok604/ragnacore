import { motion } from "framer-motion";
import { Globe, Shield, Wifi, Camera, Server, ArrowRight, Award, Headphones, Zap, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import heroBg from "@/assets/hero-bg.jpg";

const services = [
  { icon: Globe, title: "Websites Profissionais", desc: "Criação de sites modernos e responsivos" },
  { icon: Server, title: "Domínio & Hospedagem", desc: "Registo de domínios e alojamento seguro" },
  { icon: Wifi, title: "Redes & Call Center", desc: "Instalação e configuração de infraestruturas" },
  { icon: Wifi, title: "Internet Residencial", desc: "Venda e instalação de internet fiável" },
  { icon: Camera, title: "Segurança Eletrónica", desc: "Câmeras, alarmes e sistemas completos" },
  { icon: Shield, title: "Suporte Dedicado", desc: "Assistência técnica contínua e dedicada" },
];

const differentials = [
  { icon: Award, title: "Qualidade", desc: "Padrões elevados em cada projeto" },
  { icon: Headphones, title: "Suporte 24/7", desc: "Estamos sempre disponíveis para si" },
  { icon: Zap, title: "Experiência", desc: "Anos de mercado e projetos entregues" },
  { icon: CheckCircle, title: "Soluções Completas", desc: "Do planeamento à execução" },
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
    {/* Hero */}
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Tecnologia que <span className="text-gradient">transforma</span> o seu negócio
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl">
            Soluções tecnológicas completas — websites, redes, segurança e muito mais. A RagnaCor é o parceiro ideal para a sua transformação digital.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://wa.me/244999999999?text=Olá!%20Gostaria%20de%20saber%20mais."
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

    {/* Services Highlight */}
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading title="Nossos Serviços" subtitle="Oferecemos soluções tecnológicas completas para empresas e residências" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="bg-gradient-card border border-border rounded-xl p-6 hover:shadow-glow transition-shadow group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <s.icon size={24} className="text-primary" />
              </div>
              <h3 className="font-display font-semibold text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            to="/servicos"
            className="text-primary font-semibold text-sm hover:underline inline-flex items-center gap-1"
          >
            Ver todos os serviços <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>

    {/* About Preview */}
    <section className="py-20 md:py-28 bg-card/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Quem é a <span className="text-gradient">RagnaCor</span>?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Somos uma empresa de tecnologia focada em entregar soluções inovadoras e acessíveis. Desde a criação de websites até a instalação de sistemas de segurança, a RagnaCor é sinónimo de confiança e excelência técnica.
            </p>
            <Link
              to="/sobre"
              className="text-primary font-semibold text-sm hover:underline inline-flex items-center gap-1"
            >
              Saiba mais sobre nós <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Differentials */}
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading title="Porquê a RagnaCor?" subtitle="Diferenciais que nos tornam a escolha certa" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {differentials.map((d, i) => (
            <motion.div
              key={d.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="text-center p-6"
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

    {/* CTA */}
    <section className="py-20 md:py-28 bg-card/50">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Pronto para <span className="text-gradient">inovar</span>?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            Entre em contacto connosco e descubra como a tecnologia pode impulsionar o seu negócio.
          </p>
          <a
            href="https://wa.me/244999999999?text=Olá!%20Gostaria%20de%20um%20orçamento."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-primary text-primary-foreground px-8 py-3.5 rounded-lg font-semibold hover:opacity-90 transition-opacity shadow-glow inline-block"
          >
            Solicitar Orçamento
          </a>
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default Index;
