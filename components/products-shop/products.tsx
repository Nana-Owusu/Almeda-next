import { MOCK_PRODUCTS } from "@/constants";
import Link from "next/link";

function Products() {
  return (
    <div className="container mx-auto px-4">
      <Link href="/product/sds">
        <div className="card  py-8  grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-5 align-middle">
          {/* note */}
          {MOCK_PRODUCTS.map((product) => (
            <div key={product.title} className="card--list">
              <div className="overflow-hidden">
                <img
                  className="product--image h-60 md:h-80 object-cover w-full transition duration-300 ease-in-out hover:scale-110"
                  src={product.image}
                  alt="product"
                />
              </div>

              <h2 className="product--title  text-xl font-medium capitalize">
                {product.title}
              </h2>
              <h3 className="product--price">${product.price}</h3>
              {product.sale && (
                <p className=" text-right text-[#B2BEB5]  font-semibold">
                  SALE
                </p>
              )}
            </div>
          ))}
        </div>
      </Link>
    </div>
  );
}

export default Products;
