'use client'

import { useEffect, useState } from "react";

interface Coordinates {
  lat: number;
  lng: number;
}

export default function LocationMap() {
  const [location, setLocation] = useState<Coordinates | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      (err) => {
        setError("Unable to retrieve your location");
        console.error(err);
      }
    );
  }, []);

  if (error) return <p>{error}</p>;
  if (!location) return <p>Loading location...</p>;

  return (
    <div>
      <p>Your location: {location.lat}, {location.lng}</p>
      {/* نقشه اینجا میاد */}
    </div>
  );
}