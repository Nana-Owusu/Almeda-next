import { MOCK_PRODUCTS } from "@/constants";

function Product() {
  return (
    <>
      <div className="container mx-auto px-4 ">
        <div className="card mt-14 py-8 border-t grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-4 align-middle">
          {/* note */}
          {MOCK_PRODUCTS.map((product) => (
            <div key={product.title} className="card--list">
              <img
                className="product--image h-60 md:h-80 object-cover"
                src={product.image}
                alt="product"
              />

              <h2 className="product--title">{product.title}</h2>
              <h3 className="product--price">${product.price}</h3>
              {product.sale && (
                <p className=" text-right text-[#B2BEB5] ">SALE</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Product;
