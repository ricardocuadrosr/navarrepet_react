import React, { useRef, useEffect, useState } from "react";
import MainCarousel from "../../components/HomeCarousel/MainCarousel";
import Avvvatars from "avvvatars-react";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import HomeSectionCarousel from "../../components/Homesectioncarousel/HomeSectionCarousel";
import Banner from "../../components/Banner/Banner";
import BannerCategory from "../../components/BannerCategory/BannerCategory";
import HomeSectionNoticeCard from "../../components/HomeSectionNoticeCard/HomeSectionNoticeCard";

mapboxgl.accessToken =
  "pk.eyJ1Ijoibm9zYXh4eHh4eHh4eCIsImEiOiJjbHhua21weXIwNDc5Mm1vNmZkbHZrMWxqIn0.A2zeKwBH_VF8PapkoFKYlw";

const Mapbox = () => {
  const [nickname, setNickname] = useState("");
  const [viewport, setViewport] = useState({
    latitude: 45.4211,
    longitude: -75.6903,
    width: "100vw",
    height: "100vh",
    zoom: 10,
  });
  // return (
  // <div className="flex items-center">
  //   {/* <MainCarousel/> */}
  //   <input
  //     type="text"
  //     value={nickname}
  //     onChange={(e) => setNickname(e.target.value)}
  //     placeholder="Enter your nickname"
  //     className="text-black"
  //   />
  //   <Avvvatars
  //     value={nickname}
  //     style="character"
  //     size={64}
  //     shadow
  //     radius={30}
  //   />
  // </div>
  // );
  const mapContainer = useRef(null);
  const map = useRef(null);
  // -13.021752864814367, -76.38163142542238
  // -13.060914317497476, -76.3530551707189
  // -12.121787587101212, -77.03648695787462
  const [lng, setLng] = useState(-77.03648695787462);
  const [lat, setLat] = useState(-12.121787587101212);
  const [zoom, setZoom] = useState(17);
  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/satellite-v9",
      center: [lng, lat],
      zoom: zoom,
    });
  }, [lng, lat, zoom]);
  return (
    <div>
      <div className="text-center pt-5 pb-3">
        <div className="mx-auto">
          <h1 className="text-2xl font-bold">Ubicación</h1>
        </div>
      </div>
      <div className="p-4">
        <div className="sidebar">
          Longitud: {lng} | Latitud: {lat} | Zoom: {zoom}
        </div>
        <div ref={mapContainer} className="map-container"></div>
      </div>
    </div>
  );
};

export default Mapbox;
