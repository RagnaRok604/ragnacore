import { motion } from "framer-motion";
import { Globe, Server, Wifi, Camera, Shield, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

import imgWebsite from "@/assets/project-website.jpg";
import imgNetwork from "@/assets/project-network.jpg";
import imgSecurity from "@/assets/project-security.jpg";
import imgEcommerce from "@/assets/project-ecommerce.jpg";
import imgInternet from "@/assets/project-internet.jpg";

const carouselServices = [
  {
    icon: Globe,
    title: "Websites Profissionais",
    desc: "Criação de sites modernos, responsivos e otimizados para converter visitantes em clientes.",
    image: imgWebsite,
  },
  {
    icon: Server,
    title: "Domínio & Hospedagem",
    desc: "Registo de domínios e alojamento seguro com uptime de 99.9% e certificado SSL.",
    image: imgEcommerce,
  },
  {
    icon: Wifi,
    title: "Redes & Call Center",
    desc: "Instalação e configuração de infraestruturas de rede e ambientes de call center.",
    image: imgNetwork,
  },
  {
    icon: Wifi,
    title: "Internet Residencial",
    desc: "Soluções de internet fiável com instalação profissional e planos flexíveis.",
    image: imgInternet,
  },
  {
    icon: Camera,
    title: "Segurança Eletrónica",
    desc: "Câmeras HD, alarmes inteligentes e monitorização remota via aplicação.",
    image: imgSecurity,
  },
];

const ServicesCarousel = () => {
  const autoplayPlugin = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  return (
    <section className="py-20 md:py-28 bg-card/30">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
            O que <span className="text-gradient">fazemos</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Conheça os serviços que tornam a RagnaCore o parceiro tecnológico ideal
          </p>
        </motion.div>

        <Carousel
          opts={{ align: "start", loop: true }}
          plugins={[autoplayPlugin.current]}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent className="-ml-4">
            {carouselServices.map((s) => (
              <CarouselItem key={s.title} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="bg-card border border-border rounded-xl overflow-hidden h-full group hover:shadow-glow transition-shadow shadow-card">
                  <div className="h-44 overflow-hidden relative">
                    <img
                      src={s.image}
                      alt={s.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-3 left-3 w-10 h-10 rounded-lg bg-primary/90 flex items-center justify-center">
                      <s.icon size={20} className="text-primary-foreground" />
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-display font-semibold text-foreground mb-2">{s.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-12" />
          <CarouselNext className="hidden md:flex -right-12" />
        </Carousel>

        <div className="text-center mt-10">
          <Link
            to="/servicos"
            className="inline-flex items-center gap-2 bg-gradient-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity shadow-glow"
          >
            Ver Todos os Serviços <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesCarousel;
