function Footer() {
  return (
    <>
      <div className=" container mx-auto px-4">
        <div className="grid gap-y-8 my-8 justify-center text-center text-xs md:text-base ">
          <div className="social--media"> </div>
          <div>
            <h3>Sign up to receive News and Update</h3>
          </div>
          <div className="sign--up">
            <form
              action=""
              className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center items-center"
            >
              <input
                className="py-4 px-8 border-2 border-black-500"
                type="text"
                placeholder="Email address"
              />

              <button className="py-3 md:px-8 md:py-4 border-2 text-white bg-black">
                Sign up
              </button>
            </form>
          </div>
          <div>
            <h3>
              Made with{" "}
              <a href="#" className="underline">
                Squarespace
              </a>
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
