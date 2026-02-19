import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground">
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <h3 className="font-display text-xl font-bold text-primary mb-4">RagnaCore</h3>
          <p className="text-primary-foreground/60 text-sm leading-relaxed">
            Soluções tecnológicas completas para o seu negócio. Inovação, segurança e confiança em cada projeto.
          </p>
        </div>
        <div>
          <h4 className="font-display font-semibold text-primary-foreground mb-4">Links Rápidos</h4>
          <div className="flex flex-col gap-2">
            {[
              { to: "/", label: "Início" },
              { to: "/sobre", label: "Sobre" },
              { to: "/servicos", label: "Serviços" },
              { to: "/projetos", label: "Projetos" },
              { to: "/contactos", label: "Contactos" },
            ].map((l) => (
              <Link key={l.to} to={l.to} className="text-sm text-primary-foreground/60 hover:text-primary transition-colors flex items-center gap-1">
                <ArrowRight size={12} /> {l.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-display font-semibold text-primary-foreground mb-4">Serviços</h4>
          <div className="flex flex-col gap-2 text-sm text-primary-foreground/60">
            <span>Criação de Websites</span>
            <span>Domínio & Hospedagem</span>
            <span>Telecom & Infraestrutura</span>
            <span>Internet Residencial</span>
            <span>Sistemas de Gestão ERP</span>
          </div>
        </div>
        <div>
          <h4 className="font-display font-semibold text-primary-foreground mb-4">Contactos</h4>
          <div className="flex flex-col gap-3 text-sm text-primary-foreground/60">
            <a href="mailto:info@ragnacore.com" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail size={16} /> info@ragnacore.com
            </a>
            <a href="tel:+258860033620" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone size={16} /> +258 860 033 620
            </a>
            <span className="flex items-center gap-2">
              <MapPin size={16} /> Maputo, Moçambique
            </span>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 mt-10 pt-6 text-center text-xs text-primary-foreground/40">
        © {new Date().getFullYear()} RagnaCore. Todos os direitos reservados.
      </div>
    </div>
  </footer>
);

export default Footer;
