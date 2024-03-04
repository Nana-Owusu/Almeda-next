import Footer from "@/components/footer";

function Contact() {
  return (
    <>
      <div className="container mx-auto px-4">
        <div className="contact grid grid-cols-1 gap-y-5 lg:grid-cols-2 gap-x-8 ">
          <div>
            <h2 className="text-lg !font-medium">Contact Us.</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
              <br />
              Clothing Courtesy of Lauren Winter, Kinem and ULIHU
            </p>
          </div>
          <div>
            <form>
              <h2>
                Name <span>(required)</span>
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2  gap-x-4">
                <div className="form">
                  <label>
                    First Name <span>(required)</span>
                  </label>
                  <input type="text" placeholder="name" />
                </div>

                <div className="form">
                  <label>
                    Last Name <span>(required)</span>
                  </label>
                  <input type="text" placeholder="name" />
                </div>
              </div>
              <div className="form">
                <label>
                  Email <span>(required)</span>
                </label>
                <input type="text" />
              </div>
              <div className="form">
                <label>
                  Subject <span>(required)</span>
                </label>
                <input type="text" />
              </div>
              <div className="form">
                <label>
                  Message <span>(required)</span>
                </label>
                <textarea className="  border-2 " name="" id=""></textarea>
              </div>
              <button className="">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
