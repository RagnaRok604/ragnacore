import { motion } from "framer-motion";
import { Globe, Server, Wifi, Camera, Shield, CheckCircle } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";

const services = [
  {
    icon: Globe,
    title: "Criação de Websites Profissionais",
    desc: "Desenvolvemos websites modernos, responsivos e otimizados para motores de busca. Desde landing pages até plataformas complexas, garantimos um design que impressiona e converte visitantes em clientes.",
    benefits: ["Design personalizado e moderno", "Totalmente responsivo (mobile, tablet, desktop)", "Otimização SEO integrada", "Carregamento rápido e seguro"],
  },
  {
    icon: Server,
    title: "Venda de Domínio e Hospedagem",
    desc: "Oferecemos registo de domínios e planos de hospedagem seguros e fiáveis. Com servidores de alto desempenho, o seu site estará sempre online e protegido.",
    benefits: ["Domínios .com, .co.ao e outros", "Hospedagem com uptime de 99.9%", "Certificado SSL incluído", "Suporte técnico especializado"],
  },
  {
    icon: Wifi,
    title: "Redes e Ambientes de Call Center",
    desc: "Configuramos e instalamos infraestruturas de rede completas, incluindo ambientes otimizados para call centers. Soluções pensadas para maximizar a produtividade.",
    benefits: ["Cabeamento estruturado", "Configuração de switches e routers", "Ambientes de call center otimizados", "Manutenção preventiva e corretiva"],
  },
  {
    icon: Wifi,
    title: "Internet Residencial",
    desc: "Fornecemos soluções de internet fiável para residências, com instalação profissional e planos adaptados às suas necessidades de navegação e streaming.",
    benefits: ["Instalação rápida e profissional", "Planos flexíveis", "Conexão estável e de alta velocidade", "Suporte técnico dedicado"],
  },
  {
    icon: Camera,
    title: "Sistemas de Segurança",
    desc: "Instalamos câmeras de vigilância, alarmes e sistemas de segurança eletrónica para proteger o seu espaço. Monitorização em tempo real com tecnologia de ponta.",
    benefits: ["Câmeras HD e Full HD", "Alarmes inteligentes", "Monitorização remota via app", "Instalação profissional certificada"],
  },
];

const Services = () => (
  <Layout>
    <section className="py-20 md:py-28 bg-gradient-hero">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Nossos <span className="text-gradient">Serviços</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Soluções completas de tecnologia para impulsionar o seu negócio e proteger o que é importante.
          </p>
        </motion.div>
      </div>
    </section>

    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6 space-y-16">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={`flex flex-col md:flex-row gap-8 items-start ${i % 2 !== 0 ? "md:flex-row-reverse" : ""}`}
          >
            <div className="w-full md:w-1/3 flex justify-center md:justify-start">
              <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center shadow-glow">
                <s.icon size={40} className="text-primary" />
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <h3 className="font-display text-2xl font-bold text-foreground mb-3">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">{s.desc}</p>
              <ul className="space-y-2">
                {s.benefits.map((b) => (
                  <li key={b} className="flex items-center gap-2 text-sm text-secondary-foreground">
                    <CheckCircle size={16} className="text-primary shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>

    {/* CTA */}
    <section className="py-20 md:py-28 bg-card/50 text-center">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="font-display text-3xl font-bold mb-4">Precisa de um destes serviços?</h2>
        <p className="text-muted-foreground mb-8">Entre em contacto e receba um orçamento personalizado.</p>
        <a
          href="https://wa.me/244999999999?text=Olá!%20Gostaria%20de%20um%20orçamento."
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-primary text-primary-foreground px-8 py-3.5 rounded-lg font-semibold hover:opacity-90 transition-opacity shadow-glow inline-block"
        >
          Solicitar Orçamento
        </a>
      </div>
    </section>
  </Layout>
);

export default Services;
