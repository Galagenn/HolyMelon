import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Staff from "./Staff";

export default function page() {
   return (
      <div className="wrapper">
         <Header />
         <main>
            <Hero />
            <Staff />
         </main>
         <Footer />
      </div>
   );
}