import React from "react";

const SectionBrand = () => {
  return (
    <div>
      <section className="p-4">
        <div>
          <div className="flex flex-col w-full items-start pl-6">
            <h2 className="text-3xl font-bold">MARCAS</h2>
            <hr className="w-full border-t-2 border-gray-300 mt-2" />
          </div>
          {/* <div className="row text-center py-3">
                    <div className="col-lg-6 m-auto">
                        <h1 className="text-3xl font-bold">Our Brands</h1>
                        <p className="mt-4">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            Lorem ipsum dolor sit amet.
                        </p>
                    </div>
                </div> */}
          <div className="px-5">
            <div className="bg-white border-t text-[#383c44] py-4 flex flex-wrap justify-center">
              {/* <div className="row"> */}
              <div className="flex flex-col items-center">
                <img
                  className="block w-[20rem] h-[4rem] px-3 mb-3"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Nestl%C3%A9_Purina_PetCare_logo.svg/2560px-Nestl%C3%A9_Purina_PetCare_logo.svg.png"
                  alt=""
                />
              </div>
              <div className="flex flex-col items-center">
                <img
                  className="block w-[20rem] h-[4rem] px-3 mb-3"
                  src="https://shop.agrovetmarket.com/img/logo_Agrovet_vertical_mundo.svg"
                  alt=""
                />
              </div>
              <div className="flex flex-col items-center">
                <img
                  className="block w-[20rem] h-[4rem] px-3 mb-3"
                  src="https://i0.wp.com/cat-oh.com/wp-content/uploads/2020/06/canbo_logo.png?fit=500%2C200&ssl=1"
                  alt=""
                />
              </div>
              {/* <div className="flex flex-col items-center">
                                <img className="block w-[20rem] h-[3rem] px-3 mb-3" src="https://seeklogo.com/images/H/hills-logo-239D15D1FB-seeklogo.com.png" alt="" />
                            </div> */}
              {/* <div className="flex flex-col items-center">
                                <img className="block w-[20rem] h-[3rem] px-3 mb-3" src="https://cdn.livecanvas.com/media/logos/5.png" alt="" />
                            </div> */}
              <div className="flex flex-col items-center">
                <img
                  className="block w-[20rem] h-[4rem] px-3 mb-3"
                  src="https://purina.com.pe/themes/custom/purina/proplan/assets/images/logo/logo.png"
                  alt=""
                />
              </div>
              {/* </div> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SectionBrand;
