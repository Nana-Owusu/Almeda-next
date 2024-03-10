import React from "react";

const Cart = () => {
  return (
    <>
      <section className="bg-[#cccccc21]">
        <div className="container mx-auto px-4">
          <div className=" lg:px-32  lg:py-16">
            <div className="space-y-3">
              <h2 className="text-xl">Shopping Cart</h2>
              <div>
                <div className="grid md:grid-cols-4 pt-10 pb-5 border-b-2">
                  <div className=" flex space-x-2 col-span-2">
                    <div>
                      <img
                        src="/images/kimem-jacky-bicolor-waist-trousers-navy-black_0374-v1-FINAL-copy.jpg"
                        alt="clothing"
                        className=" w-[90px] md:w-[180px] md:h-[150px]"
                      />
                    </div>
                    <div className="space-y-2">
                      <h2 className="captalize md:text-base lg:text-lg">
                        Lounge Tunic / Black
                      </h2>
                      <p className="font-light text-[#676666] text-sm lg:text-base">
                        Size 2
                      </p>
                    </div>
                  </div>
                  {/* <div></div> */}
                  <div className="flex space-x-1 justify-end">
                    <div>
                      <img
                        src="/remove_FILL0_wght400_GRAD0_opsz24.svg"
                        alt="remove"
                      />
                    </div>
                    <div className=" md:text-base lg:text-lg">
                      <input
                        type="text"
                        value={1}
                        className="w-[35px] text-center bg-[#cccccc00]"
                      />
                    </div>
                    <div>
                      <img
                        src="/add_FILL0_wght400_GRAD0_opsz24.svg"
                        alt="add"
                      />
                    </div>
                  </div>
                  <div className="flex space-x-4 justify-end">
                    <div className=" md:text-base lg:text-lg">$ 150.00</div>
                    <div>
                      <img
                        src="/close_FILL0_wght400_GRAD0_opsz24.svg"
                        alt="close"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid lg:justify-end ">
                <div className="flex justify-between lg:space-x-72 mb-7 mt-5 items-center">
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
