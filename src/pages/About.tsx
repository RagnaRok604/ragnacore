import { motion } from "framer-motion";
import { Target, Eye, Heart } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";

const values = [
  {
    icon: Target,
    title: "Missão",
    desc: "Fornecer soluções tecnológicas inovadoras e acessíveis que impulsionem o crescimento dos nossos clientes, garantindo qualidade, eficiência e satisfação.",
  },
  {
    icon: Eye,
    title: "Visão",
    desc: "Ser a empresa de referência em tecnologia e inovação, reconhecida pela excelência dos nossos serviços e pelo impacto positivo na transformação digital.",
  },
  {
    icon: Heart,
    title: "Valores",
    desc: "Inovação, integridade, compromisso com o cliente, qualidade sem compromisso e trabalho em equipa são os pilares que guiam cada decisão na RagnaCor.",
  },
];

const About = () => (
  <Layout>
    {/* Header */}
    <section className="py-20 md:py-28 bg-gradient-hero">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Sobre a <span className="text-gradient">RagnaCor</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Conheça a nossa história, missão e os valores que nos impulsionam todos os dias.
          </p>
        </motion.div>
      </div>
    </section>

    {/* History */}
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <SectionHeading title="A Nossa História" center={false} />
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <p className="text-muted-foreground leading-relaxed mb-4">
              A RagnaCor nasceu da paixão pela tecnologia e da vontade de tornar soluções digitais acessíveis a empresas de todos os portes. Desde o início, a nossa missão foi clara: entregar resultados que fazem a diferença.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Com uma equipa dedicada de profissionais experientes, crescemos ao lado dos nossos clientes, ajudando-os a enfrentar os desafios da transformação digital com confiança e segurança.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Hoje, a RagnaCor é sinónimo de inovação, qualidade e compromisso. Continuamos a expandir os nossos serviços para oferecer as melhores soluções tecnológicas do mercado.
            </p>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Mission / Vision / Values */}
    <section className="py-20 md:py-28 bg-card/50">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading title="Missão, Visão e Valores" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-gradient-card border border-border rounded-xl p-8 text-center"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <v.icon size={28} className="text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">{v.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default About;
