import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import Layout from "@/components/Layout";
import { toast } from "sonner";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Por favor preencha todos os campos.");
      return;
    }
    setSending(true);
    // Simulate send
    setTimeout(() => {
      toast.success("Mensagem enviada com sucesso! Entraremos em contacto em breve.");
      setForm({ name: "", email: "", message: "" });
      setSending(false);
    }, 1000);
  };

  return (
    <Layout>
      <section className="py-20 md:py-28 bg-gradient-hero">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Entre em <span className="text-gradient">Contacto</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Estamos prontos para ajudar. Envie-nos uma mensagem ou contacte-nos diretamente.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Form */}
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-5"
            >
              <div>
                <label htmlFor="name" className="text-sm font-medium text-foreground mb-1.5 block">Nome</label>
                <input
                  id="name"
                  type="text"
                  maxLength={100}
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="O seu nome"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-sm font-medium text-foreground mb-1.5 block">Email</label>
                <input
                  id="email"
                  type="email"
                  maxLength={255}
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="seu@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="text-sm font-medium text-foreground mb-1.5 block">Mensagem</label>
                <textarea
                  id="message"
                  maxLength={1000}
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                  placeholder="Como podemos ajudar?"
                />
              </div>
              <button
                type="submit"
                disabled={sending}
                className="bg-gradient-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity shadow-glow flex items-center gap-2 disabled:opacity-50"
              >
                <Send size={18} /> {sending ? "A enviar..." : "Enviar Mensagem"}
              </button>
            </motion.form>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-4">Informações de Contacto</h3>
                <div className="space-y-4 text-sm text-muted-foreground">
                  <a href="mailto:info@ragnacor.com" className="flex items-center gap-3 hover:text-primary transition-colors">
                    <Mail size={20} className="text-primary" /> info@ragnacor.com
                  </a>
                  <a href="tel:+244999999999" className="flex items-center gap-3 hover:text-primary transition-colors">
                    <Phone size={20} className="text-primary" /> +244 999 999 999
                  </a>
                  <span className="flex items-center gap-3">
                    <MapPin size={20} className="text-primary" /> Luanda, Angola
                  </span>
                </div>
              </div>
              <div className="bg-gradient-card border border-border rounded-xl p-6">
                <h4 className="font-display font-semibold text-foreground mb-2">Prefere o WhatsApp?</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Fale connosco diretamente pelo WhatsApp para uma resposta mais rápida.
                </p>
                <a
                  href="https://wa.me/244999999999?text=Olá!%20Gostaria%20de%20saber%20mais."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-primary text-primary-foreground px-6 py-2.5 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity inline-block"
                >
                  Abrir WhatsApp
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
