import { motion } from "framer-motion";
import { Globe, Server, Wifi, ArrowRight, Network, BarChart3 } from "lucide-react";
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

import imgNetwork from "@/assets/project-network.jpg";
import imgEcommerce from "@/assets/project-ecommerce.jpg";
import imgInternet from "@/assets/project-internet.jpg";
import imgAlarm from "@/assets/project-alarm.jpg";

const carouselSlides = [
  {
    icon: Network,
    title: "Telecomunicações &",
    highlight: "Infraestrutura",
    desc: "Centrais PBX, VoIP, call centers e infraestrutura de redes empresariais completa.",
    image: imgNetwork,
  },
  {
    icon: Server,
    title: "Domínio &",
    highlight: "Hospedagem",
    desc: "Registo de domínios e alojamento seguro com uptime de 99.9% e certificado SSL incluído.",
    image: imgEcommerce,
  },
  {
    icon: BarChart3,
    title: "Sistemas de",
    highlight: "Gestão ERP",
    desc: "Software ERP completo para restaurantes, farmácias, bares, armazéns, ferragens e mais.",
    image: imgAlarm,
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
                <div className="absolute inset-0 bg-foreground/75" />
                <div className="container mx-auto px-4 md:px-6 relative z-10">
                  <div className="max-w-2xl">
                    <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
                      {s.title}{" "}
                      <span className="text-primary">{s.highlight}</span>
                    </h1>
                    <p className="text-primary-foreground/80 text-lg md:text-xl mb-8 max-w-lg">
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
                        className="border-2 border-primary-foreground/40 text-primary-foreground px-7 py-3 rounded font-bold text-sm hover:border-primary hover:text-primary transition-colors"
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
        <CarouselPrevious className="left-4 md:left-8 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground hover:bg-primary hover:border-primary hover:text-primary-foreground h-12 w-12" />
        <CarouselNext className="right-4 md:right-8 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground hover:bg-primary hover:border-primary hover:text-primary-foreground h-12 w-12" />
      </Carousel>
    </section>
  );
};

export default ServicesCarousel;
