function Checkout() {
  return (
    <section className="bg-[#cccccc21] ">
      <div className=" md:mx-2 lg:mx-12">
        <div className=" mx-auto max-w-5xl p-4 space-y-4 md:space-y-0 md:space-x-6 grid md:grid-cols-2">
          <div className="space-y-4">
            <div className=" border border-[#84848438]">
              <form className="p-4 ">
                <div className=" space-y-3 ">
                  <h2 className="text-xl font-semibold">1. Your Email</h2>
                  <div>
                    <input
                      type="text"
                      placeholder="Email"
                      id="email"
                      className="w-full mb-2 px-2 py-2 border border-[#84848438] rounded"
                    />
                    <p className="text-xs">
                      You'll receive receipts and notifications at this email
                      address.
                    </p>
                  </div>

                  <div className="flex space-x-2">
                    <input type="checkbox" id="signup" className="p-2" />
                    <p className="text-sm">
                      Sign up to receive news and updates.
                    </p>
                  </div>

                  <input
                    type="submit"
                    value={"Continue"}
                    className="w-full bg-[#2a2a2afd] text-white py-3 rounded"
                  />
                </div>
              </form>
            </div>

            <div className=" border border-[#84848438]">
              <div className="p-4 ">
                <form className=" space-y-3 ">
                  <h2 className="text-xl font-semibold">2. Delivery Methods</h2>
                  <div className="space-y-4 border border-[#84848438] p-4 ">
                    <div className="text-xs">DELIVERY OPTION</div>
                    <div className="text-[#4a494966] flex space-x-1 ">
                      <div className="w-[20px]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 -960 960 960"
                          fill="#4a494966"
                        >
                          <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q54 0 104-17.5t92-50.5L228-676q-33 42-50.5 92T160-480q0 134 93 227t227 93Zm252-124q33-42 50.5-92T800-480q0-134-93-227t-227-93q-54 0-104 17.5T284-732l448 448Z" />
                        </svg>
                      </div>
                      <p className="text-sm">
                        Shipping not available for this product
                      </p>
                    </div>
                  </div>

                  <div>Shipping Address</div>
                  <div className="text-sm space-y-3">
                    <div className="flex w-full space-x-2">
                      <div className="w-full">
                        <input
                          type="text"
                          className="w-full p-3 rounded border"
                          placeholder="First Name"
                        />
                      </div>

                      <div className="w-full">
                        <input
                          type="text"
                          className="w-full p-3 rounded border"
                          placeholder="Last Name"
                        />
                      </div>
                    </div>
                    <div className="w-full">
                      <input
                        type="text"
                        className="w-full p-3 rounded border"
                        placeholder="Address 1"
                      />
                    </div>

                    <div className="w-full">
                      <input
                        type="text"
                        className="w-full p-3 rounded border"
                        placeholder="Address 2"
                      />
                    </div>

                    <div className="w-full">
                      <select
                        name="country"
                        id="country"
                        className="w-full p-3 rounded !font-medium border"
                      >
                        <option value="united states">United States</option>
                        <option value="ghana">Ghana</option>
                        <option value="japan">Japan</option>
                        <option value="old tafo">Old Tafo</option>
                      </select>
                    </div>
                    <div className="flex space-x-3">
                      <div className="w-full">
                        <input
                          type="text"
                          className="w-full p-3 rounded border"
                          placeholder="Zip Code"
                        />
                      </div>

                      <div className="w-full">
                        <input
                          type="text"
                          className="w-full p-3 rounded border"
                          placeholder="City"
                        />
                      </div>

                      <div className="w-full">
                        <select
                          name="country"
                          id="country"
                          className="w-full p-3 rounded !font-medium border"
                          value={"state"}
                        >
                          <option value="state">State</option>
                          <option value="AL">AL</option>
                          <option value="AK">AK</option>
                          <option value="AZ">AZ</option>
                          <option value="AR">AR</option>
                          <option value="CA">CA</option>
                          <option value="CO">CO</option>
                          <option value="CT">CT</option>
                          <option value="DE">DE</option>
                          <option value="AL">AL</option>
                          <option value="AD">AD</option>
                          <option value="AL">AL</option>
                          <option value="AD">AD</option>
                          <option value="AL">AL</option>
                          <option value="AD">AD</option>
                          <option value="AL">AL</option>
                          <option value="AD">AD</option>
                        </select>
                      </div>
                    </div>
                    <div className="w-full">
                      <input
                        type="text"
                        className="w-full p-3 rounded border"
                        placeholder="Phone Number"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div>
            <div className=" border border-[#84848438] p-4 space-y-4">
              <div className="text-xl font-semibold">Order Summary</div>
              <div className="flex justify-between">
                <div className="flex space-x-2">
                  <div className="w-[100px] h-[100px] bg-cover border border-[#84848438]">
                    <img
                      src="/images/kimem-lisa-oversized-shirt-navy_0363-v1-FINAL-copy.jpg"
                      alt="clothing"
                    />
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm font-medium">
                      Lounge Tunic / Black
                    </div>
                    <div className="font-light text-[#676666] text-xs">
                      Size: 2
                    </div>
                  </div>
                </div>
                <div>
                  <div>
                    <div className="text-right text-sm font-medium">$50.00</div>
                    <div className="flex space-x-3 text-xs p-1 px-4 border rounded border-[#84848438] bg-white">
                      <div className="text-[#848484f1]">Qty</div>
                      <div>
                        <input
                          type="text"
                          className="w-[20px] focus:outline-none text-right"
                        />
                      </div>
                    </div>
                    <div className=" text-xs text-right text-[#848484f1]">
                      Remove
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className=" border-b-2 text-sm space-y-2 text-[#848484f1]">
                  <div className="flex justify-between">
                    <div>Subtotal</div>
                    <div>$50.00</div>
                  </div>
                  <div className="flex justify-between">
                    <div>Tax</div>
                    <div>$0.00</div>
                  </div>
                  <div className="flex justify-between">
                    <div>Shipping(+233)</div>
                    <div>-</div>
                  </div>

                  <div className="!text-black mt-2 font-medium flex justify-between border-t-2 py-3 md:py-0 md:border-t-0">
                    <div>Total</div>
                    <div>$50.00</div>
                  </div>
                </div>
                <div className="flex justify-center items-center space-x-3 my-2">
                  <div>
                    <img
                      src="/verified_user_FILL0_wght400_GRAD0_opsz24.svg"
                      alt="secured"
                    />
                  </div>
                  <div className="text-[10px] font-light tracking-wide">
                    SECURE SSL CHECKOUT
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Checkout;
