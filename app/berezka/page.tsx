import ContentHeader from "@/components/ContentHeader";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Header from "@/components/Header";
import { getData } from "@/api/api";

export default async function BerezkaPage() {
   const data = await getData("berezka");
   const { title, photos, downloadObj, created } = data;

   return (
      <div className="wrapper">
         <Header />
         <main>
            <section className="pt-[9.375rem] md:pt-[12.375rem]">
               <div className="container">
                  <ContentHeader
                     title={title}
                     downloadLink={downloadObj.href}
                     created={created}
                  />
                  <Gallery photos={photos} />
               </div>
            </section>
         </main>
         <Footer />
      </div>
   );
}
