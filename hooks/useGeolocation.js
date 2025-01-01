import { useState, useEffect } from 'react';

const useGeolocation = () => {
  const [location, setLocation] = useState({
    loaded: false,
    coordinates: { lat: '', lng: '' },
    error: null,
    address: { state: '', country: '' },
  });

  const onSuccess = async (location) => {
    const { latitude, longitude } = location.coords;

    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
      );
      const data = await response.json();

      setLocation({
        loaded: true,
        coordinates: {
          lat: latitude,
          lng: longitude,
        },
        address: {
          state: data.address.state || '',
          country: data.address.country || '',
        },
        error: null,
      });
    } catch (error) {
      setLocation({
        loaded: true,
        coordinates: {
          lat: latitude,
          lng: longitude,
        },
        address: { state: '', country: '' },
        error: 'Error fetching location details',
      });
    }
  };

  const onError = (error) => {
    setLocation({
      loaded: true,
      coordinates: { lat: '', lng: '' },
      address: { state: '', country: '' },
      error: error.message,
    });
  };

  useEffect(() => {
    if (!navigator.geolocation) {
      setLocation({
        loaded: true,
        coordinates: { lat: '', lng: '' },
        address: { state: '', country: '' },
        error: 'Geolocation is not supported',
      });
      return;
    }

    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }, []);

  return location;
};

export default useGeolocation;
