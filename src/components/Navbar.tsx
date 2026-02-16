import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, MapPin, Clock, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/ragnacore-logo.png";

const links = [
  { to: "/", label: "INÍCIO" },
  { to: "/sobre", label: "SOBRE" },
  { to: "/servicos", label: "SERVIÇOS" },
  { to: "/projetos", label: "PROJETOS" },
  { to: "/contactos", label: "CONTACTO" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top info bar */}
      <div className="hidden md:block bg-foreground text-primary-foreground">
        <div className="container mx-auto px-6 flex items-center justify-between h-10 text-xs">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <MapPin size={13} /> Maputo, Moçambique
            </span>
            <span className="flex items-center gap-1.5">
              <Phone size={13} /> +258 860 033 620
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock size={13} /> Segunda – Sexta · 8h às 17h
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="bg-white shadow-sm">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-16 md:h-[70px]">
            <Link to="/" className="flex items-center">
              <img src={logo} alt="RagnaCore" className="h-8 md:h-10" />
            </Link>

            {/* Desktop */}
            <div className="hidden md:flex items-center gap-1">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className={`text-[13px] font-semibold tracking-wide px-4 py-2 transition-colors hover:text-primary ${
                    location.pathname === l.to ? "text-primary" : "text-foreground/70"
                  }`}
                >
                  {l.label}
                </Link>
              ))}
              <a
                href="https://wa.me/258860033620?text=Olá!%20Gostaria%20de%20saber%20mais."
                target="_blank"
                rel="noopener noreferrer"
                className="ml-4 bg-primary text-primary-foreground px-6 py-2.5 rounded text-[13px] font-bold tracking-wide hover:bg-accent transition-colors"
              >
                FALE CONNOSCO
              </a>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden text-foreground p-2"
              aria-label="Menu"
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-border overflow-hidden"
            >
              <div className="container mx-auto px-4 py-4 flex flex-col gap-1">
                {links.map((l) => (
                  <Link
                    key={l.to}
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className={`text-sm font-semibold py-2.5 px-3 rounded transition-colors hover:bg-muted ${
                      location.pathname === l.to ? "text-primary bg-muted" : "text-foreground/70"
                    }`}
                  >
                    {l.label}
                  </Link>
                ))}
                <a
                  href="https://wa.me/258860033620"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-primary-foreground px-5 py-2.5 rounded text-sm font-bold text-center mt-2"
                >
                  FALE CONNOSCO
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;
