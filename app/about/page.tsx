import React from "react";
import Footer from "@/components/footer";

export default function About() {
  return (
    <>
      <div className="container mx-auto px-4  ">
        <div className="about grid md:grid-cols-2 md:gap-x-12 gap-y-4 md:m-9 justify-center">
          <div className="grid grid-cols-1 gap-y-4 md:gap-y-0">
            <div>
              <img src="./images/image-asset.jpeg" alt="" />
            </div>
            <div>
              <h2 className="text-lg md:text-xl">
                Made with love in Los Angeles.
              </h2>
            </div>
            <div className=" hidden md:block"></div>
            <div className=" hidden md:block"></div>
            <div className=" hidden md:block"></div>
            <div className=" hidden md:block"></div>
            <div className=" hidden md:block"></div>
            <div className=" hidden md:block"></div>
          </div>
          <div className="text-base md:text-base leading-9 tracking-wide font-light">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet
              aliquam id diam maecenas ultricies mi eget mauris. At auctor urna
              nunc id. Eu lobortis elementum nibh tellus molestie nunc non
              blandit. Dui sapien eget mi proin sed libero. Dolor sit amet
              consectetur adipiscing elit ut aliquam purus sit. Sed ullamcorper
              morbi tincidunt ornare massa eget. A condimentum vitae sapien
              pellentesque habitant. Cras tincidunt lobortis feugiat vivamus at
              augue. Habitant morbi tristique senectus et. Consectetur purus ut
              faucibus pulvinar elementum integer enim. Iaculis urna id volutpat
              lacus laoreet non curabitur. Tellus integer feugiat scelerisque
              varius morbi enim nunc faucibus. Velit sed ullamcorper morbi
              tincidunt ornare massa eget. Quis blandit turpis cursus in hac.
              Elementum facilisis leo vel fringilla. Tincidunt arcu non sodales
              neque sodales ut etiam sit. Vitae nunc sed velit dignissim sodales
              ut eu. <br />
              <br />
              Tortor dignissim convallis aenean et tortor at risus viverra.
              Vivamus at augue eget arcu. Rhoncus est pellentesque elit
              ullamcorper dignissim cras. Gravida dictum fusce ut placerat orci
              nulla pellentesque. Pellentesque elit ullamcorper dignissim cras
              tincidunt lobortis feugiat. Id aliquet risus feugiat in ante metus
              dictum. Sagittis vitae et leo duis ut. Diam vulputate ut pharetra
              sit amet aliquam id diam maecenas. Imperdiet nulla malesuada
              pellentesque elit eget. Maecenas pharetra convallis posuere morbi
              leo urna molestie at. Eros donec ac odio tempor orci dapibus
              ultrices. Et ultrices neque ornare aenean. Interdum velit laoreet
              id donec. Dolor sit amet consectetur adipiscing elit pellentesque.
              Eleifend donec pretium vulputate sapien nec sagittis. Facilisi
              etiam dignissim diam quis enim lobortis. Imperdiet dui accumsan
              sit amet. Non tellus orci ac auctor augue mauris augue neque
              gravida. Maecenas sed enim ut sem viverra aliquet. Mauris pharetra
              et ultrices neque ornare aenean.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
