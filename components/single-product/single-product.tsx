function SingleProduct() {
  return (
    <>
      <div className="container mx-auto px-4">
        <div className=" text-sm font-light tracking-widest">
          Shop {">"} <span> Lounge Tunic / Black</span>
        </div>

        <div className=" my-10">
          <div className="flex flex-col md:flex-row ">
            <div className="flex md:space-x-3 ">
              <div className="flex flex-col space-y-3">
                <div className="hidden md:block">
                  <div>
                    <img
                      src="./images/kimem-lisa-oversized-shirt-navy_0363-v1-FINAL-copy.jpg"
                      alt="blacktop"
                      width={"100px"}
                    />
                  </div>
                  <div>
                    <img
                      src="./images/kimem-lisa-oversized-shirt-navy_DETAIL.jpg"
                      alt="blacktopXL"
                      width={"100px"}
                    />
                  </div>
                </div>
              </div>

              <div>
                <img
                  className=" object-cover w-[700px] md:h-[400px] lg:h-[750px]"
                  src="./images/lauren-winter-wide-pant-natural_0178-v1-FINAL.jpg"
                  alt="mainAttair"
                />
              </div>
            </div>

            <div>
              <div className="space-y-4 py-10 md:pl-10 tracking-widest">
                <h2 className="text-2xl">Lounge Tunic / Black</h2>
                <p>$50.00</p>
                <h3>DESCRIPTION</h3>
                <p className="font-light">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed{" "}
                  <br />
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <h3>DETAILS</h3>
                <ul className="list-disc pl-10 font-light">
                  <li>100% Cotton</li>
                  <li>Machine wash cold </li>
                  <li>Tumble dry low</li>
                </ul>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <h3>size:</h3>
                    <div className="flex flex-wrap gap-4">
                      <h2 className=" w-20 h-16 flex justify-center  bg-slate-100 items-center">
                        {0}
                      </h2>
                      <h2 className="w-20 h-16 flex justify-center  bg-slate-100 items-center">
                        {2}
                      </h2>
                      <h2 className="w-20 h-16 flex justify-center  bg-slate-100 items-center">
                        {4}
                      </h2>
                      <h2 className="w-20 h-16 flex justify-center  bg-slate-100 items-center">
                        {6}
                      </h2>
                      <h2 className="w-20 h-16 flex justify-center  bg-slate-100 items-center">
                        {8}
                      </h2>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3>Quantity:</h3>
                    <div className=" w-28 h-20 flex justify-center  bg-slate-100 items-center">
                      {8}
                    </div>
                  </div>
                </div>
                <button className=" bg-black text-white w-full h-9">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleProduct;
