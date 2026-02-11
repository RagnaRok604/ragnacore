import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/244999999999?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20vossos%20serviços."
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Contactar via WhatsApp"
    className="fixed bottom-6 right-6 z-50 bg-[hsl(142,70%,45%)] text-primary-foreground p-4 rounded-full shadow-lg hover:scale-110 transition-transform animate-glow-pulse"
  >
    <MessageCircle size={28} />
  </a>
);

export default WhatsAppButton;
