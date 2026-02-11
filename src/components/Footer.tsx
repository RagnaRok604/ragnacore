import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-card border-t border-border">
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h3 className="font-display text-xl font-bold text-gradient mb-4">RagnaCore</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Soluções tecnológicas completas para o seu negócio. Inovação, segurança e confiança em cada projeto.
          </p>
        </div>
        <div>
          <h4 className="font-display font-semibold text-foreground mb-4">Links Rápidos</h4>
          <div className="flex flex-col gap-2">
            {[
              { to: "/", label: "Home" },
              { to: "/sobre", label: "Sobre" },
              { to: "/servicos", label: "Serviços" },
              { to: "/projetos", label: "Projetos" },
              { to: "/contactos", label: "Contactos" },
            ].map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-display font-semibold text-foreground mb-4">Contactos</h4>
          <div className="flex flex-col gap-3 text-sm text-muted-foreground">
             <a href="mailto:info@ragnacore.com" className="flex items-center gap-2 hover:text-primary transition-colors">
               <Mail size={16} /> info@ragnacore.com
            </a>
            <a href="tel:+244999999999" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone size={16} /> +244 999 999 999
            </a>
            <span className="flex items-center gap-2">
              <MapPin size={16} /> Luanda, Angola
            </span>
          </div>
        </div>
      </div>
      <div className="border-t border-border mt-10 pt-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} RagnaCore. Todos os direitos reservados.
      </div>
    </div>
  </footer>
);

export default Footer;
