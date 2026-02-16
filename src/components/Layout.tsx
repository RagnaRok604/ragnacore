import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";

const Layout = ({ children }: { children: ReactNode }) => (
  <div className="min-h-screen flex flex-col">
    <Navbar />
    <main className="flex-1 pt-[64px] md:pt-[110px]">{children}</main>
    <Footer />
    <WhatsAppButton />
  </div>
);

export default Layout;
