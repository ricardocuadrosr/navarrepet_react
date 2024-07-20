import React from "react";
import Mapbox from "../../components/Mapbox/Mapbox";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import PercentIcon from "@mui/icons-material/Percent";
import WatchLaterIcon from "@mui/icons-material/WatchLater";

const ContactPage = () => {
  return (
    <div>
      <section className="container mx-auto py-5">
        <div className="text-center pt-5 pb-3">
          <div className="mx-auto">
            <h1 className="text-2xl font-bold">Nuestros servicios</h1>
          </div>
        </div>
        <div className="flex flex-wrap justify-center">
          <div className="w-full sm:w-1/2 lg:w-1/4 p-5">
            <div className="h-full py-5 shadow-lg rounded-lg bg-white text-center">
              <div className="text-4xl text-gray-800">
                <DeliveryDiningIcon />
              </div>
              <h2 className="mt-4 text-lg font-semibold">
                Servicios de entrega
              </h2>
            </div>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/4 p-5">
            <div className="h-full py-5 shadow-lg rounded-lg bg-white text-center">
              <div className="text-4xl text-gray-800">
                <CompareArrowsIcon />
              </div>
              <h2 className="mt-4 text-lg font-semibold">Envío y devolución</h2>
            </div>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/4 p-5">
            <div className="h-full py-5 shadow-lg rounded-lg bg-white text-center">
              <div className="text-4xl text-gray-800">
                <PercentIcon />
              </div>
              <h2 className="mt-4 text-lg font-semibold">Promoción</h2>
            </div>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/4 p-5">
            <div className="h-full py-5 shadow-lg rounded-lg bg-white text-center">
              <div className="text-4xl text-gray-800">
                <WatchLaterIcon />
              </div>
              <h2 className="mt-4 text-lg font-semibold">Servicio 24 Horas</h2>
            </div>
          </div>
        </div>
      </section>
      <Mapbox />
    </div>
  );
};

export default ContactPage;
