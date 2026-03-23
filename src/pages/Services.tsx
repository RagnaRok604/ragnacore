import { motion } from "framer-motion";
import { Globe, Server, Wifi, CheckCircle, Network, BarChart3, Zap, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import PartnersSection from "@/components/PartnersSection";

const services = [
  {
    icon: Server,
    title: "Venda de Domínio e Hospedagem",
    desc: "Oferecemos registo de domínios e planos de hospedagem seguros e fiáveis. Com servidores de alto desempenho, o seu site estará sempre online e protegido.",
    benefits: ["Domínios .com, .co.mz e outros", "Hospedagem com uptime de 99.9%", "Certificado SSL incluído", "Suporte técnico especializado"],
    link: "/hospedagem",
  },
  {
    icon: Network,
    title: "Telecomunicações & Infraestrutura de Redes",
    desc: "Somos especialistas em soluções de telecomunicações e redes empresariais. Montamos centrais telefónicas PBX, configuramos VoIP, criamos call centers completos e instalamos infraestruturas de rede de alto desempenho.",
    benefits: ["Centrais PBX (Asterisk, FreePBX, 3CX)", "Infraestrutura completa de Call Centers", "Soluções VoIP com redução de custos", "Cabeamento estruturado Cat5e/Cat6", "Configuração de switches e routers MikroTik", "Redes Wi-Fi empresariais de alta cobertura"],
  },
  {
    icon: BarChart3,
    title: "Sistemas de Gestão ERP",
    desc: "Vendemos e implementamos sistemas de gestão empresarial (ERP) completos com módulos de facturação, controlo de stock, contabilidade e relatórios financeiros, adaptados ao seu sector de negócio.",
    benefits: ["Restaurantes, Pastelarias e Bares", "Farmácias e Clínicas", "Armazéns e Ferragens", "Supermercados e Lojas de Retalho", "Contabilidade e gestão financeira", "Facturação certificada e integração fiscal"],
    link: "/erp",
  },
];

const internetPlans = [
  { name: "Básico", speed: "30", upload: "10", price: "1 500", color: "from-primary/80 to-primary", features: ["Consumo Ilimitado", "Suporte Técnico", "Instalação Profissional", "Router Wi-Fi incluído"] },
  { name: "Standard", speed: "60", upload: "20", price: "2 500", color: "from-primary to-accent", popular: true, features: ["Consumo Ilimitado", "IP Público", "Suporte Prioritário", "Instalação Profissional", "Router Wi-Fi incluído"] },
  { name: "Premium", speed: "100", upload: "30", price: "3 500", color: "from-accent to-primary", features: ["Consumo Ilimitado", "IP Público", "Giga Port", "Suporte Premium 24/7", "Instalação Profissional", "Router Wi-Fi incluído"] },
  { name: "Ultra", speed: "200", upload: "50", price: "5 500", color: "from-primary/90 to-foreground", features: ["Consumo Ilimitado", "IP Público", "Giga Port", "Suporte VIP", "Instalação Gratuita", "Router Wi-Fi incluído", "Ideal para Empresas"] },
];

const Services = () => {
  const navigate = useNavigate();
  return (
  <Layout>
    <section className="py-20 md:py-28 bg-gradient-hero">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4 text-primary-foreground">
            Nossos <span className="text-gradient">Serviços</span>
          </h1>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto">
            Soluções completas de tecnologia para impulsionar o seu negócio e proteger o que é importante.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Services Grid */}
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              onClick={() => (s as any).link && navigate((s as any).link)}
              className={`group bg-card border border-border rounded-xl p-8 hover:border-primary/50 hover:shadow-glow transition-all duration-300 ${(s as any).link ? "cursor-pointer" : ""}`}
            >
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <s.icon size={32} className="text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">{s.desc}</p>
              <ul className="space-y-2">
                {s.benefits.map((b) => (
                  <li key={b} className="flex items-center gap-2 text-sm text-secondary-foreground">
                    <CheckCircle size={14} className="text-primary shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Internet Residencial Plans */}
    <section className="py-20 md:py-28 bg-muted/50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">Escolha o seu plano</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-3">
            Internet <span className="text-primary">Residencial</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">Navegue mais e pague menos. Planos de internet fibra com velocidade e estabilidade para toda a família.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {internetPlans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative bg-card rounded-xl border overflow-hidden transition-shadow hover:shadow-glow ${
                plan.popular ? "border-primary shadow-glow" : "border-border"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-primary text-primary-foreground text-xs font-bold text-center py-1.5 tracking-wider uppercase">
                  Mais Popular
                </div>
              )}

              <div className={`pt-${plan.popular ? "10" : "6"} pb-6 px-6 text-center`}>
                <h3 className="font-display text-lg font-bold text-foreground mb-4">{plan.name}</h3>

                {/* Speed display like yes.co.mz */}
                <div className="mb-2">
                  <div className="flex items-end justify-center gap-1">
                    <span className="font-display text-5xl font-black text-primary leading-none">{plan.speed}</span>
                    <span className="text-primary font-bold text-lg mb-1">Mb/s</span>
                  </div>
                  <div className="flex items-center justify-center gap-1 mt-1 text-muted-foreground text-sm">
                    <Zap size={14} />
                    <span>Upload: {plan.upload} Mb/s</span>
                  </div>
                </div>

                <div className="my-5 border-t border-border" />

                <ul className="space-y-2.5 text-left mb-6">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle size={14} className="text-primary shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="mb-5">
                  <span className="text-xs text-muted-foreground">MZN</span>
                  <span className="font-display text-3xl font-black text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground text-sm">/mês</span>
                </div>

                <a
                  href={`https://wa.me/258860033620?text=Olá! Gostaria de aderir ao plano ${plan.name} (${plan.speed}Mbps).`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full inline-flex items-center justify-center gap-2 py-3 rounded-lg font-bold text-sm transition-colors ${
                    plan.popular
                      ? "bg-primary text-primary-foreground hover:bg-accent"
                      : "bg-foreground/5 text-foreground hover:bg-primary hover:text-primary-foreground"
                  }`}
                >
                  ADERIR <ArrowRight size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-xs text-muted-foreground mt-8">
          * Instalação gratuita em condomínios selecionados. Preços sujeitos a alteração. Contacte-nos para mais informações.
        </p>
      </div>
    </section>

    {/* CTA */}
    <section className="py-20 md:py-28 bg-card/50 text-center">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="font-display text-3xl font-bold mb-4">Precisa de um destes serviços?</h2>
        <p className="text-muted-foreground mb-8">Entre em contacto e receba um orçamento personalizado.</p>
        <a
          href="https://wa.me/258860033620?text=Olá!%20Gostaria%20de%20um%20orçamento."
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-primary text-primary-foreground px-8 py-3.5 rounded-lg font-semibold hover:opacity-90 transition-opacity shadow-glow inline-block"
        >
          Solicitar Orçamento
        </a>
      </div>
    </section>

    <PartnersSection />
  </Layout>
  );
};

export default Services;
