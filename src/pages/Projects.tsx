import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import PartnersSection from "@/components/PartnersSection";

import imgWebsite from "@/assets/project-website.jpg";
import imgNetwork from "@/assets/project-network.jpg";
import imgEcommerce from "@/assets/project-ecommerce.jpg";
import imgInternet from "@/assets/project-internet.jpg";
import imgAlarm from "@/assets/project-alarm.jpg";
import imgPos from "@/assets/project-pos.jpg";
import imgErp from "@/assets/project-erp.jpg";

const projects = [
  { title: "Website Corporativo - Loja XYZ", category: "Website", desc: "Site institucional moderno com catálogo de produtos online.", image: imgWebsite },
  { title: "Rede Call Center - Empresa ABC", category: "Telecom & Infraestrutura", desc: "Infraestrutura de rede para 50 posições de atendimento.", image: imgNetwork },
  { title: "E-Commerce - Boutique Fashion", category: "Website", desc: "Loja online responsiva com integração de pagamentos.", image: imgEcommerce },
  { title: "Internet Comunitária - Bairro Solar", category: "Internet", desc: "Distribuição de internet para 200 residências.", image: imgInternet },
  { title: "PBX Empresarial - Escritórios MOV", category: "Telecom & Infraestrutura", desc: "Montagem de central PBX com 30 extensões e integração VoIP.", image: imgAlarm },
  { title: "Sistema ERP - Restaurante Sabores", category: "Gestão ERP", desc: "Implementação de sistema ERP com gestão de stock, facturação certificada e controlo de inventário.", image: imgPos },
  { title: "ERP Financeiro - Grupo Empresarial MKT", category: "Gestão ERP", desc: "Sistema de gestão financeira integrado com módulos de contabilidade, faturação, contas a pagar/receber e relatórios fiscais.", image: imgErp },
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
              className="bg-card border border-border rounded-xl overflow-hidden group hover:shadow-glow transition-shadow shadow-card"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-2 inline-block">
                  {p.category}
                </span>
                <h3 className="font-display font-semibold text-foreground mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <PartnersSection />
  </Layout>
);

export default Projects;
