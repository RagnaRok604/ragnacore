import { useState } from "react";
import { motion } from "framer-motion";
import { HardDrive, Settings, Database, Shield, Globe, Wrench, Mail, ChevronDown } from "lucide-react";
import Layout from "@/components/Layout";

const categories = [
  { name: "Alojamento Partilhado Linux", active: true },
  { name: "Alojamento Partilhado Windows", active: false },
  { name: "Alojamento Wordpress", active: false },
  { name: "Serviços Adicionais", active: false },
  { name: "Servidor Cloud (VPS) Linux", active: false },
  { name: "Servidor Cloud (VPS) Windows", active: false },
  { name: "Serviços Adicionais Servidores Cloud (VPS)", active: false },
  { name: "Servidor Dedicado", active: false },
  { name: "Certificados SSL", active: false },
  { name: "Google Workspace", active: false },
  { name: "Microsoft 365", active: false },
  { name: "Digital Licences", active: false },
  { name: "Internet", active: false },
  { name: "Servidor Cloud (VPS) - LOCAL MZ", active: false },
];

type Feature = {
  icon: React.ElementType;
  label: string;
  value: string;
};

type Plan = {
  name: string;
  price: string;
  period: string;
  features: Feature[];
  orderUrl: string;
};

const plans: Plan[] = [
  {
    name: "Delta 0",
    price: "300.00",
    period: "Monthly",
    orderUrl: "https://whost.co.mz/whmcs/store/alojamento-partilhado-linux/delta-0",
    features: [
      { icon: HardDrive, label: "Disco", value: "5 GB de Espaço" },
      { icon: Settings, label: "PAINEL ADMIN.", value: "CPanel" },
      { icon: Shield, label: "BACKUP", value: "Diário e Semanal" },
      { icon: Globe, label: "TRÁFEGO", value: "Ilimitado" },
      { icon: Wrench, label: "FERRAMENTAS", value: "SEO" },
    ],
  },
  {
    name: "Delta 1",
    price: "480.00",
    period: "Monthly",
    orderUrl: "https://whost.co.mz/whmcs/store/alojamento-partilhado-linux/delta-1",
    features: [
      { icon: HardDrive, label: "Disco", value: "10 GB de Espaço" },
      { icon: Settings, label: "PAINEL ADMIN.", value: "CPanel" },
      { icon: Shield, label: "BACKUP", value: "Diário e Semanal" },
      { icon: Globe, label: "TRÁFEGO", value: "Ilimitado" },
      { icon: Wrench, label: "FERRAMENTAS", value: "SEO" },
    ],
  },
  {
    name: "Delta 2",
    price: "600.00",
    period: "Monthly",
    orderUrl: "https://whost.co.mz/whmcs/store/alojamento-partilhado-linux/delta-2",
    features: [
      { icon: HardDrive, label: "Disco", value: "15 GB de Espaço" },
      { icon: Settings, label: "PAINEL ADMIN.", value: "CPanel" },
      { icon: Shield, label: "BACKUP", value: "Diário e Semanal" },
      { icon: Globe, label: "TRÁFEGO", value: "Ilimitado" },
      { icon: Wrench, label: "FERRAMENTAS", value: "SEO" },
    ],
  },
  {
    name: "Delta 3",
    price: "840.00",
    period: "Monthly",
    orderUrl: "https://whost.co.mz/whmcs/store/alojamento-partilhado-linux/delta-3",
    features: [
      { icon: HardDrive, label: "Disco", value: "30 GB de Espaço" },
      { icon: Settings, label: "PAINEL ADMIN.", value: "CPanel" },
      { icon: Database, label: "BASE DE DADOS", value: "Ilimitadas" },
      { icon: Shield, label: "BACKUP", value: "Diário e Semanal" },
      { icon: Globe, label: "TRÁFEGO", value: "Ilimitado" },
      { icon: Wrench, label: "FERRAMENTAS", value: "SEO" },
      { icon: Mail, label: "CONTAS DE EMAIL", value: "Ilimitadas" },
    ],
  },
  {
    name: "Delta 4",
    price: "1,750.00",
    period: "Monthly",
    orderUrl: "https://whost.co.mz/whmcs/store/alojamento-partilhado-linux/delta-4",
    features: [
      { icon: HardDrive, label: "Disco", value: "40 GB de Espaço" },
      { icon: Settings, label: "PAINEL ADMIN.", value: "CPanel" },
      { icon: Database, label: "BASE DE DADOS", value: "Ilimitadas" },
      { icon: Shield, label: "BACKUP", value: "Diário e Semanal" },
      { icon: Globe, label: "TRÁFEGO", value: "Ilimitado" },
      { icon: Wrench, label: "FERRAMENTAS", value: "SEO" },
      { icon: Mail, label: "CONTAS DE EMAIL", value: "Ilimitadas" },
    ],
  },
  {
    name: "Delta Profissional",
    price: "20,000.00",
    period: "Semi-Annually",
    orderUrl: "https://whost.co.mz/whmcs/store/alojamento-partilhado-linux/delta-profissional",
    features: [
      { icon: HardDrive, label: "Disco", value: "100 GB de Espaço" },
      { icon: Settings, label: "PAINEL ADMIN.", value: "CPanel" },
      { icon: Database, label: "BASE DE DADOS", value: "Ilimitadas" },
      { icon: Shield, label: "BACKUP", value: "Diário e Semanal" },
      { icon: Globe, label: "TRÁFEGO", value: "Ilimitado" },
      { icon: Wrench, label: "FERRAMENTAS", value: "SEO" },
      { icon: Mail, label: "CONTAS DE EMAIL", value: "Ilimitadas" },
    ],
  },
  {
    name: "Delta Empresarial",
    price: "24,500.00",
    period: "Semi-Annually",
    orderUrl: "https://whost.co.mz/whmcs/store/alojamento-partilhado-linux/delta-empresarial",
    features: [
      { icon: HardDrive, label: "Disco", value: "200 GB de Espaço" },
      { icon: Settings, label: "PAINEL ADMIN.", value: "CPanel" },
      { icon: Database, label: "BASE DE DADOS", value: "Ilimitadas" },
      { icon: Shield, label: "BACKUP", value: "Diário e Semanal" },
      { icon: Globe, label: "TRÁFEGO", value: "Ilimitado" },
      { icon: Wrench, label: "FERRAMENTAS", value: "SEO" },
      { icon: Mail, label: "CONTAS DE EMAIL", value: "Ilimitadas" },
    ],
  },
  {
    name: "Plano Blog",
    price: "390.00",
    period: "Monthly",
    orderUrl: "https://whost.co.mz/whmcs/store/alojamento-partilhado-linux/plano-blog",
    features: [
      { icon: HardDrive, label: "Disco", value: "10 GB de Espaço" },
      { icon: Settings, label: "PAINEL ADMIN.", value: "CPanel" },
      { icon: Globe, label: "WORDPRESS", value: "Instalação Incluída" },
      { icon: Shield, label: "BACKUP", value: "Diário e Semanal" },
      { icon: Wrench, label: "FERRAMENTAS", value: "SEO" },
    ],
  },
];

const periodLabel: Record<string, string> = {
  Monthly: "Mensal",
  "Semi-Annually": "Semestral",
};

const Hosting = () => {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [currency, setCurrency] = useState<"MZN" | "USD">("MZN");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-hero text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-display text-3xl md:text-5xl font-bold text-primary-foreground"
        >
          Alojamento Partilhado Linux
        </motion.h1>
      </section>

      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <aside className="lg:w-72 shrink-0">
              {/* Mobile dropdown */}
              <div className="lg:hidden mb-4">
                <button
                  onClick={() => setSidebarOpen(!sidebarOpen)}
                  className="w-full flex items-center justify-between bg-card border border-border rounded-lg px-4 py-3 text-sm font-semibold text-foreground"
                >
                  <span>Categorias</span>
                  <ChevronDown size={16} className={`transition-transform ${sidebarOpen ? "rotate-180" : ""}`} />
                </button>
                {sidebarOpen && (
                  <div className="mt-1 bg-card border border-border rounded-lg overflow-hidden">
                    {categories.map((cat, i) => (
                      <button
                        key={cat.name}
                        onClick={() => { setSelectedCategory(i); setSidebarOpen(false); }}
                        className={`w-full text-left px-4 py-2.5 text-sm transition-colors ${
                          i === selectedCategory
                            ? "bg-primary text-primary-foreground font-semibold"
                            : "text-muted-foreground hover:bg-muted"
                        }`}
                      >
                        {cat.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Desktop sidebar */}
              <div className="hidden lg:block">
                <h3 className="text-xs uppercase tracking-widest text-muted-foreground font-bold mb-3">Categorias</h3>
                <nav className="space-y-0.5">
                  {categories.map((cat, i) => (
                    <button
                      key={cat.name}
                      onClick={() => setSelectedCategory(i)}
                      className={`w-full text-left px-4 py-2.5 rounded-lg text-sm transition-colors ${
                        i === selectedCategory
                          ? "bg-primary text-primary-foreground font-semibold"
                          : "text-muted-foreground hover:bg-muted hover:text-foreground"
                      }`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </nav>

                <div className="mt-8 border-t border-border pt-6 space-y-3">
                  <h3 className="text-xs uppercase tracking-widest text-muted-foreground font-bold mb-3">Acções</h3>
                  <a href="https://whost.co.mz/whmcs/cart.php?a=add&domain=register" target="_blank" rel="noopener noreferrer" className="block text-sm text-primary hover:underline">Registar Novo Domínio</a>
                  <a href="https://whost.co.mz/whmcs/cart.php?a=add&domain=transfer" target="_blank" rel="noopener noreferrer" className="block text-sm text-primary hover:underline">Transferir Domínio</a>
                  <a href="https://whost.co.mz/whmcs/cart.php?a=view" target="_blank" rel="noopener noreferrer" className="block text-sm text-primary hover:underline">Ver Carrinho</a>
                </div>

                <div className="mt-6 border-t border-border pt-6">
                  <h3 className="text-xs uppercase tracking-widest text-muted-foreground font-bold mb-3">Moeda</h3>
                  <div className="flex gap-1 bg-muted rounded-lg p-1">
                    {(["MZN", "USD"] as const).map((c) => (
                      <button
                        key={c}
                        onClick={() => setCurrency(c)}
                        className={`flex-1 py-1.5 rounded-md text-sm font-semibold transition-colors ${
                          currency === c ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        {c}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </aside>

            {/* Plans Grid */}
            <div className="flex-1">
              {/* Mobile currency toggle */}
              <div className="lg:hidden flex gap-1 bg-muted rounded-lg p-1 mb-6 max-w-xs">
                {(["MZN", "USD"] as const).map((c) => (
                  <button
                    key={c}
                    onClick={() => setCurrency(c)}
                    className={`flex-1 py-1.5 rounded-md text-sm font-semibold transition-colors ${
                      currency === c ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {plans.map((plan, i) => (
                  <motion.div
                    key={plan.name}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 hover:shadow-glow transition-all duration-300 flex flex-col"
                  >
                    {/* Top section */}
                    <div className="p-6 flex-1">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                        <HardDrive size={24} className="text-primary" />
                      </div>
                      <h3 className="font-display text-xl font-bold text-primary mb-3">{plan.name}</h3>
                      <div className="mb-1">
                        <span className="font-display text-3xl font-black text-foreground">{plan.price}</span>
                        <span className="text-muted-foreground text-sm ml-1">{currency}</span>
                      </div>
                      <p className="text-muted-foreground text-sm mb-5">{periodLabel[plan.period] || plan.period}</p>

                      <a
                        href={plan.orderUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block border-2 border-primary text-primary font-bold text-sm px-6 py-2.5 rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        Order Now
                      </a>
                    </div>

                    {/* Features section - pink/accent bg like WHost */}
                    <div className="bg-accent/80 p-6 space-y-4">
                      {plan.features.map((f) => (
                        <div key={f.label} className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-accent-foreground/10 flex items-center justify-center shrink-0">
                            <f.icon size={18} className="text-accent-foreground" />
                          </div>
                          <div>
                            <p className="text-accent-foreground/70 text-xs font-semibold uppercase">{f.label}</p>
                            <p className="text-accent-foreground text-sm font-bold">{f.value}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Hosting;
