"use client";

import { useState } from "react";
import Button from "./button";
import { IoLocationOutline } from "react-icons/io5";

type Coordinates = {
  lat: number;
  lng: number;
};

export default function LocationMap() {
  const [coords, setCoords] = useState<Coordinates | null>(null);

  const showLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const newCoords = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        setCoords(newCoords);
        console.log(newCoords);
      },
      () => {
        alert("Unable to retrieve your location");
      }
    );
  };

  return (
    <div className="h-screen w-full max-w-[390px] flex flex-col items-center justify-center px-4">
      <div className="bg-gray-400 rounded-2xl w-full h-60 mb-6 overflow-hidden">
        {coords ? (
          <iframe
            width="100%"
            height="100%"
            src={`https://www.openstreetmap.org/export/embed.html?bbox=${
              coords.lng - 0.01
            }%2C${coords.lat - 0.01}%2C${coords.lng + 0.01}%2C${
              coords.lat + 0.01
            }&layer=mapnik&marker=${coords.lat}%2C${coords.lng}`}
            style={{ border: 0 }}
          ></iframe>
        ) : (
          <div className="w-full h-full flex items-center justify-center text-white text-lg">
            Location not set
          </div>
        )}
      </div>

      <Button
        className="bg-[#FF7622] text-white flex flex-row justify-center items-center"
        onClick={showLocation}
      >
        ACCESS LOCATION
        <span className="bg-[#e2a47e] rounded-full w-8 h-8 mx-3 flex justify-center items-center">
          <IoLocationOutline />
        </span>
      </Button>

      <p className="mt-10 text-center text-sm text-gray-600 px-4">
        DFOOD WILL ACCESS YOUR LOCATION ONLY WHILE USING THE APP
      </p>
    </div>
  );
}
