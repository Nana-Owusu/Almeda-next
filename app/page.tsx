import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import Heronav from "@/components/heronav";
import Product from "@/components/products-shop/product";

export default function Home() {
  return (
    <>
      <Navbar />
      <Heronav />
      <Product />
      <Footer />
    </>
  );
}
