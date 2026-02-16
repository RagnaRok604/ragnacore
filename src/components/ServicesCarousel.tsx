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

const carouselSlides = [
  {
    icon: Globe,
    title: "Criação de",
    highlight: "Websites",
    desc: "Criamos websites modernos e responsivos para o seu negócio, com as melhores tecnologias do mercado.",
    image: imgWebsite,
  },
  {
    icon: Wifi,
    title: "Infraestrutura de",
    highlight: "Redes",
    desc: "Instalação e configuração profissional de infraestruturas de rede, call centers e soluções empresariais.",
    image: imgNetwork,
  },
  {
    icon: Camera,
    title: "Segurança",
    highlight: "Eletrónica",
    desc: "Sistemas de câmeras HD, alarmes inteligentes e monitorização remota para a sua tranquilidade.",
    image: imgSecurity,
  },
  {
    icon: Server,
    title: "Domínio &",
    highlight: "Hospedagem",
    desc: "Registo de domínios e alojamento seguro com uptime de 99.9% e certificado SSL incluído.",
    image: imgEcommerce,
  },
  {
    icon: Wifi,
    title: "Internet",
    highlight: "Residencial",
    desc: "Soluções de internet fiável com instalação profissional e planos flexíveis para a sua casa.",
    image: imgInternet,
  },
];

const ServicesCarousel = () => {
  const autoplayPlugin = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  return (
    <section className="relative">
      <Carousel
        opts={{ align: "start", loop: true }}
        plugins={[autoplayPlugin.current]}
        className="w-full"
      >
        <CarouselContent className="ml-0">
          {carouselSlides.map((s) => (
            <CarouselItem key={s.title} className="pl-0 basis-full">
              <div className="relative h-[70vh] md:h-[80vh] flex items-center">
                <img
                  src={s.image}
                  alt={s.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-foreground/70" />
                <div className="container mx-auto px-4 md:px-6 relative z-10">
                  <div className="max-w-2xl">
                    <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                      {s.title}{" "}
                      <span className="text-primary">{s.highlight}</span>
                    </h1>
                    <p className="text-white/80 text-lg md:text-xl mb-8 max-w-lg">
                      {s.desc}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <Link
                        to="/servicos"
                        className="bg-primary text-primary-foreground px-7 py-3 rounded font-bold text-sm hover:bg-accent transition-colors"
                      >
                        Saiba mais
                      </Link>
                      <Link
                        to="/contactos"
                        className="border-2 border-white/40 text-white px-7 py-3 rounded font-bold text-sm hover:border-primary hover:text-primary transition-colors"
                      >
                        Contacte-nos
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4 md:left-8 bg-white/10 border-white/20 text-white hover:bg-primary hover:border-primary hover:text-white h-12 w-12" />
        <CarouselNext className="right-4 md:right-8 bg-white/10 border-white/20 text-white hover:bg-primary hover:border-primary hover:text-white h-12 w-12" />
      </Carousel>
    </section>
  );
};

export default ServicesCarousel;
