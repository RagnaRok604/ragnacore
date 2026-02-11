import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";

const projects = [
  { title: "Website Corporativo - Loja XYZ", category: "Website", desc: "Site institucional moderno com catálogo de produtos online." },
  { title: "Rede Call Center - Empresa ABC", category: "Redes", desc: "Infraestrutura de rede para 50 posições de atendimento." },
  { title: "Sistema CCTV - Residência Premium", category: "Segurança", desc: "Instalação de 16 câmeras HD com monitorização remota." },
  { title: "E-Commerce - Boutique Fashion", category: "Website", desc: "Loja online responsiva com integração de pagamentos." },
  { title: "Internet Comunitária - Bairro Solar", category: "Internet", desc: "Distribuição de internet para 200 residências." },
  { title: "Segurança Empresarial - Escritórios MOV", category: "Segurança", desc: "Sistema integrado de alarmes e controlo de acesso." },
];

const Projects = () => (
  <Layout>
    <section className="py-20 md:py-28 bg-gradient-hero">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Nossos <span className="text-gradient">Projetos</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Uma amostra dos projetos que realizamos com excelência e dedicação.
          </p>
        </motion.div>
      </div>
    </section>

    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-gradient-card border border-border rounded-xl overflow-hidden group hover:shadow-glow transition-shadow"
            >
              <div className="h-48 bg-secondary/50 flex items-center justify-center">
                <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  {p.category}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-display font-semibold text-foreground mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Projects;
