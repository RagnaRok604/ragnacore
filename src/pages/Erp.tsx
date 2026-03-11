import { useState } from "react";
import { motion } from "framer-motion";
import {
  Cloud, RefreshCw, BarChart3, Shield, Link2, TrendingUp,
  ShoppingCart, Package, Landmark, Wallet, BookOpen, FileText,
  CheckCircle, ArrowRight, ChevronRight, DollarSign
} from "lucide-react";
import Layout from "@/components/Layout";
import erpDashboard from "@/assets/erp-dashboard.png";

const features = [
  { icon: Cloud, title: "100% na Nuvem", desc: "Acesse o sistema de qualquer lugar, a qualquer momento, usando qualquer dispositivo com conexão à internet." },
  { icon: RefreshCw, title: "Atualizações Automáticas", desc: "Receba novas funcionalidades e melhorias de segurança automaticamente, sem custos adicionais ou interrupções." },
  { icon: BarChart3, title: "Relatórios em Tempo Real", desc: "Visualize indicadores de desempenho e relatórios gerenciais atualizados instantaneamente para tomadas de decisão mais assertivas." },
  { icon: Shield, title: "Segurança Avançada", desc: "Proteção de dados com criptografia de ponta a ponta, backups automáticos e controles de acesso personalizáveis." },
  { icon: Link2, title: "Integração Total", desc: "Conecte-se facilmente com outros sistemas e aplicativos, incluindo bancos, e-commerce e plataformas de pagamento." },
  { icon: TrendingUp, title: "Escalabilidade Ilimitada", desc: "Cresça sem limites. Adicione usuários, funcionalidades e capacidade de armazenamento conforme sua empresa evolui." },
];

const modules = [
  {
    id: "vendas",
    label: "Vendas",
    icon: ShoppingCart,
    title: "Gestão de Vendas",
    desc: "Controle completo do ciclo de vendas, desde orçamentos até faturamento, com automação de processos e acompanhamento de desempenho.",
    items: ["Orçamentos e pedidos de venda", "Gestão de clientes (CRM)", "Faturamento automático", "Comissões de vendedores", "Metas e indicadores", "Integração com e-commerce"],
  },
  {
    id: "compras",
    label: "Compras",
    icon: Package,
    title: "Gestão de Compras",
    desc: "Automatize o processo de compras da sua empresa, desde solicitações até recebimento, com controle de aprovações e monitoramento de fornecedores.",
    items: ["Requisições de compra", "Cotações e ordens de compra", "Gestão de fornecedores", "Fluxo de aprovações", "Recebimento de mercadorias", "Análise de desempenho de fornecedores"],
  },
  {
    id: "estoque",
    label: "Estoque",
    icon: Package,
    title: "Controle de Estoque",
    desc: "Gerencie seus estoques com precisão, evitando excessos e rupturas. Controle movimentações, validades e rastreabilidade em tempo real.",
    items: ["Gestão de múltiplos armazéns", "Controle de lotes e validades", "Inventário físico", "Cálculo automático de necessidades", "Rastreabilidade completa", "Gestão de códigos de barras/QR"],
  },
  {
    id: "tesouraria",
    label: "Tesouraria/Bancos",
    icon: Landmark,
    title: "Tesouraria e Bancos",
    desc: "Gestão completa da tesouraria com controle de bancos, movimentações financeiras, conciliação bancária e fluxo de caixa em tempo real.",
    items: ["Gestão de múltiplas contas bancárias", "Conciliação bancária automática", "Fluxo de caixa em tempo real", "Transferências entre contas", "Previsão de saldos", "Integração com bancos locais"],
  },
  {
    id: "despesas",
    label: "Despesas",
    icon: Wallet,
    title: "Gestão de Despesas",
    desc: "Controle rigoroso de todas as despesas da empresa com aprovações, categorização, orçamentos e análise de custos por departamento.",
    items: ["Registo de despesas operacionais", "Fluxo de aprovação de despesas", "Categorização automática", "Controlo de orçamentos", "Análise de custos por centro", "Relatórios de despesas"],
  },
  {
    id: "contabilidade",
    label: "Contabilidade",
    icon: BookOpen,
    title: "Contabilidade Integrada",
    desc: "Sistema contabilístico completo com plano de contas, lançamentos automáticos, balancetes e demonstrações financeiras conforme normas locais.",
    items: ["Plano de contas personalizado", "Lançamentos automáticos", "Balancetes e balanços", "Demonstração de resultados", "Conformidade fiscal", "Auditoria e rastreabilidade"],
  },
  {
    id: "relatorios",
    label: "Relatórios",
    icon: FileText,
    title: "Relatórios e Análises",
    desc: "Tome decisões baseadas em dados com relatórios personalizados, dashboards interativos e indicadores de desempenho em tempo real.",
    items: ["Dashboards personalizáveis", "Relatórios financeiros", "Análise de vendas e lucratividade", "Indicadores de desempenho (KPIs)", "Exportação para Excel, PDF e CSV", "Análises preditivas"],
  },
];

const plans = [
  {
    name: "Pacote Básico",
    price: "4 500",
    promoPrice: "3 150",
    desc: "Pacote básico para pequenas empresas",
    users: "2", companies: "1", products: "10 000", storage: "1024 MB",
    features: ["Vendas", "Recebimentos", "Gestão de Artigos", "Relatório Clientes", "Relatório Operacional", "Relatórios", "Extratos"],
    cta: "https://cserp.cs.co.mz/checkout?pacote=BASIC_001",
  },
  {
    name: "Pacote Profissional",
    price: "9 500",
    promoPrice: "6 650",
    desc: "Pacote padrão para médias empresas",
    users: "2", companies: "1", products: "100 000", storage: "5120 MB",
    popular: true,
    features: ["Vendas", "Compras", "Inventários", "Recebimentos", "Pagamentos", "Adiantamentos", "Bancos", "Gestão de Artigos", "Gestão de Clientes", "Gestão de Fornecedores", "Relatório Financeiro", "Relatório Operacional", "Relatórios", "Extractos", "Extratos", "POS"],
    cta: "https://cserp.cs.co.mz/checkout?pacote=STANDARD_001",
  },
  {
    name: "Pacote Executivo",
    price: "15 000",
    promoPrice: "10 500",
    desc: "Pacote premium para grandes empresas",
    users: "2", companies: "1", products: "200 000", storage: "10240 MB",
    features: ["Vendas", "Compras", "Despesas", "Gestão de Despesas", "Inventários", "Recebimentos", "Pagamentos", "Adiantamentos", "Bancos", "Gestão de Projectos", "Colaboradores", "Outros", "Gestão de Artigos", "Gestão de Clientes", "Gestão de Fornecedores", "Contabilidade", "Relatório Financeiro", "Relatório Operacional", "Relatórios", "Extractos", "Extratos", "POS"],
    cta: "https://cserp.cs.co.mz/checkout?pacote=PREMIUM_001",
  },
  {
    name: "Pacote Personalizado",
    price: "Sob consulta",
    desc: "Crie um pacote sob medida para sua empresa com as funcionalidades que você precisa.",
    users: "Personalizado", companies: "Personalizado", products: "Personalizado", storage: "Personalizado",
    features: ["Funcionalidades à sua escolha", "Suporte dedicado", "Implementação personalizada", "Treinamento da equipe"],
    cta: "https://wa.me/258860033620?text=Olá! Gostaria de saber mais sobre o Pacote Personalizado do CS ERP.",
    custom: true,
  },
];

const Erp = () => {
  const [activeModule, setActiveModule] = useState("vendas");
  const currentModule = modules.find((m) => m.id === activeModule)!;

  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-24 md:py-32 bg-gradient-hero overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
              <span className="text-primary font-semibold text-sm uppercase tracking-widest">Sistema ERP na Nuvem</span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mt-3 mb-6 text-primary-foreground leading-tight">
                Gestão Empresarial Completa com <span className="text-primary">CS ERP SaaS</span>
              </h1>
              <p className="text-primary-foreground/70 text-lg mb-8 max-w-lg">
                Maximize a eficiência do seu negócio com nossa solução integrada de ERP na nuvem. Acesso em qualquer lugar, relatórios em tempo real e escalabilidade para crescer com a sua empresa.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="http://www.cs.co.mz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-lg font-bold hover:bg-accent transition-colors"
                >
                  ACEDER À PLATAFORMA <ArrowRight size={18} />
                </a>
                <a
                  href="#recursos"
                  className="inline-flex items-center gap-2 border border-primary text-primary px-8 py-3.5 rounded-lg font-bold hover:bg-primary/10 transition-colors"
                >
                  SAIBA MAIS <ChevronRight size={18} />
                </a>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="relative">
              <img src={erpDashboard} alt="CS ERP SaaS Dashboard" className="rounded-xl shadow-2xl w-full" />
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-4">
                <div className="bg-card rounded-xl px-6 py-4 shadow-xl text-center">
                  <span className="text-primary font-display text-3xl font-black">95%</span>
                  <p className="text-muted-foreground text-xs mt-1">Redução de Tempo em<br />Tarefas Administrativas</p>
                </div>
                <div className="bg-card rounded-xl px-6 py-4 shadow-xl text-center">
                  <span className="text-primary font-display text-3xl font-black">30%</span>
                  <p className="text-muted-foreground text-xs mt-1">Aumento de<br />Produtividade</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="recursos" className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">Recursos Principais</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Por que escolher o CS ERP SaaS?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-14">
            Nossa solução oferece uma ampla gama de recursos projetados para otimizar operações, reduzir custos e impulsionar o crescimento do seu negócio.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-card border border-border rounded-xl p-8 text-left hover:border-primary/50 hover:shadow-glow transition-all"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <f.icon size={28} className="text-primary" />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-2">{f.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modules */}
      <section className="py-20 md:py-28 bg-muted/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-14">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">Módulos Integrados</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Solução Completa para o Seu Negócio</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              O CS ERP SaaS oferece módulos integrados que abrangem todas as áreas da sua empresa, garantindo fluxo de informações e processos otimizados.
            </p>
          </div>

          {/* Module tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {modules.map((m) => (
              <button
                key={m.id}
                onClick={() => setActiveModule(m.id)}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                  activeModule === m.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-card border border-border text-muted-foreground hover:text-foreground"
                }`}
              >
                {m.label}
              </button>
            ))}
          </div>

          {/* Active module content */}
          <motion.div
            key={activeModule}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid lg:grid-cols-2 gap-10 items-center"
          >
            <div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">{currentModule.title}</h3>
              <p className="text-muted-foreground mb-6">{currentModule.desc}</p>
              <ul className="space-y-3">
                {currentModule.items.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-secondary-foreground">
                    <CheckCircle size={16} className="text-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <img src={erpDashboard} alt={currentModule.title} className="rounded-xl shadow-lg w-full" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">Planos e Preços</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Escolha o Plano Ideal para sua Empresa</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-14">
            Oferecemos planos flexíveis que se adaptam ao tamanho e às necessidades específicas do seu negócio, com excelente custo-benefício.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative bg-card rounded-xl border overflow-hidden text-left transition-shadow hover:shadow-glow ${
                  plan.popular ? "border-primary shadow-glow" : "border-border"
                }`}
              >
                {!plan.custom && (
                  <div className="bg-accent text-accent-foreground text-sm font-semibold text-center py-2 px-4 tracking-wide">
                    30% de desconto no primeiro mês
                  </div>
                )}
                {plan.popular && !plan.custom && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-4 py-1.5 rounded-full shadow-lg uppercase tracking-wider">
                    Mais Popular
                  </div>
                )}
                <div className="p-6">
                  <h3 className="font-display text-lg font-bold text-foreground mb-1">{plan.name}</h3>
                  <div className="mb-1">
                    {plan.custom ? (
                      <span className="font-display text-2xl font-black text-foreground">{plan.price}</span>
                    ) : (
                      <>
                        <span className="font-display text-3xl font-black text-foreground">{plan.promoPrice}</span>
                        <span className="text-muted-foreground text-sm"> MZN</span>
                        <span className="text-muted-foreground text-sm"> /mês</span>
                      </>
                    )}
                  </div>
                  {!plan.custom && (
                    <div className="mb-2">
                      <p className="text-muted-foreground text-xs">Renovação automática</p>
                      <p className="font-display text-lg font-bold text-foreground">{plan.price}<span className="text-muted-foreground text-xs font-normal"> MZN</span></p>
                      <p className="text-muted-foreground text-[10px] leading-tight mt-1">*Promoção válida apenas no primeiro mês. Renovação automática pelo valor normal.</p>
                    </div>
                  )}
                  <p className="text-muted-foreground text-sm mb-4">{plan.desc}</p>

                  <div className="space-y-1.5 text-xs text-muted-foreground mb-4">
                    <p><strong className="text-foreground">Usuários:</strong> {plan.users}</p>
                    <p><strong className="text-foreground">Empresas:</strong> {plan.companies}</p>
                    <p><strong className="text-foreground">Produtos:</strong> {plan.products}</p>
                    <p><strong className="text-foreground">Armazenamento:</strong> {plan.storage}</p>
                  </div>

                  <div className="border-t border-border pt-4 mb-5">
                    <ul className="space-y-2">
                      {plan.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-xs text-muted-foreground">
                          <CheckCircle size={12} className="text-primary shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href={plan.cta}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full inline-flex items-center justify-center gap-2 py-3 rounded-lg font-bold text-sm transition-colors ${
                      plan.popular
                        ? "bg-primary text-primary-foreground hover:bg-accent"
                        : "bg-foreground/5 text-foreground hover:bg-primary hover:text-primary-foreground"
                    }`}
                  >
                    {plan.custom ? "Contacte-nos" : "Teste Grátis 7 dias"} <ArrowRight size={14} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Demo */}
      <section className="py-20 md:py-28 bg-gradient-hero">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">Experimente CS ERP SaaS</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-primary-foreground">Agende uma Demonstração Gratuita</h2>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto mb-10">
            Veja como o CS ERP SaaS pode otimizar os processos da sua empresa. Nossa equipe de especialistas fará uma apresentação personalizada para atender às necessidades específicas do seu negócio.
          </p>
          <a
            href="https://wa.me/258860033620?text=Olá! Gostaria de agendar uma demonstração do CS ERP SaaS."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-lg font-bold hover:bg-accent transition-colors shadow-glow"
          >
            Solicitar Demonstração <ArrowRight size={18} />
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Erp;
