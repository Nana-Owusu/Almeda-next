import React from "react";

const Cart = () => {
  return (
    <>
      <section className="bg-[#cccccc21]">
        <div className="container mx-auto px-4">
          <div className="p-14">
            <div className="space-y-3">
              <h2 className="text-xl">Shopping Cart</h2>
              <div>
                <div className="grid grid-cols-3 pt-10 border-b-2">
                  <div className=" flex space-x-2">
                    <div>
                      <img
                        src="/images/kimem-jacky-bicolor-waist-trousers-navy-black_0374-v1-FINAL-copy.jpg"
                        alt="clothing"
                        className="w-[180px] h-[200px]"
                      />
                    </div>
                    <div className="space-y-2">
                      <h2 className="captalize text-xl">
                        Lounge Tunic / Black
                      </h2>
                      <p className="font-light text-[#676666]">Size 2</p>
                    </div>
                  </div>
                  <div className="flex space-x-1 justify-end">
                    <div>
                      <img
                        src="/remove_FILL0_wght400_GRAD0_opsz24.svg"
                        alt="remove"
                      />
                    </div>
                    <div className="text-lg">
                      <input
                        type="text"
                        className="w-[35px] text-center bg-[#cccccc00]"
                      />
                    </div>
                    <div>
                      <img
                        src="/close_FILL0_wght400_GRAD0_opsz24.svg"
                        alt="add"
                      />
                    </div>
                  </div>
                  <div className="flex space-x-4 justify-end">
                    <div>$ 150.00</div>
                    <div>
                      <img
                        src="/close_FILL0_wght400_GRAD0_opsz24.svg"
                        alt="close"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid justify-end ">
                <div className="flex space-x-72 mb-7 mt-5 items-center">
                  <div>Sub Total</div>
                  <div className="text-2xl">$800.00</div>
                </div>
                <div>
                  <button className="border-2 bg-black text-white text-center w-full py-5">
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
