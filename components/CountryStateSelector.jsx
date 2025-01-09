import React, { useEffect, useState } from 'react';
import { Controller } from 'react-hook-form';
import axios from 'axios';

const CountryStateSelector = ({
  control,
  defaultCountry,
  defaultState,
  countries,
  selectedCountry,
  setSelectedCountry,
}) => {
  const [states, setStates] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (selectedCountry) {
      const isoCode = countries.find((country) => country.name === selectedCountry).isoCode;
      console.log('isoCode', isoCode);
      fetchStates(isoCode);
    }
  }, [selectedCountry]);

  const fetchStates = async (countryCode) => {
    try {
      const options = {
        method: 'GET',
        url: 'https://country-state-city-search-rest-api.p.rapidapi.com/states-by-countrycode',
        params: { countrycode: countryCode.toLowerCase() },
        headers: {
          'x-rapidapi-key': '3d365a9107mshc7b4c65833366b9p19e38fjsn944f9247c9df',
          'x-rapidapi-host': 'country-state-city-search-rest-api.p.rapidapi.com',
        },
      };
      const response = await axios.request(options);
      setStates(response.data);
      if (defaultState) {
        const state = response.data.find((state) => state.name === defaultState);
        console.log('response.data state', response.data);
        if (state) {
          console.log('state', state);
          setSelectedState(state.name);
        }
      }
    } catch (error) {
      console.error('Error fetching states:', error);
    }
  };

  return (
    <div className='flex flex-col gap-4 w-full mt-2'>
      {loading && <p className='text-white/80 text-xs mb-2'>Loading countries...</p>}
      <div className='flex flex-row gap-4 w-full'>
        <div className='flex flex-col w-1/2'>
          <Controller
            name='country'
            control={control}
            defaultValue={selectedCountry}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, value } }) => (
              <select
                onChange={(e) => {
                  onChange(e.target.value);
                  setSelectedCountry(e.target.value);
                }}
                value={value}
                className='mb-4 w-full bg-transparent placeholder:text-white/80 focus:bg-transparent text-white/90 text-xl border-b-[1px] border-red-800 outline-none'
              >
                <option value='' className='bg-black'>
                  Select Country*
                </option>
                {countries.map((country) => (
                  <option key={country.code} value={country.name} className='bg-black'>
                    {country.name}
                  </option>
                ))}
              </select>
            )}
          />
        </div>

        <div className='flex flex-col w-1/2'>
          <Controller
            name='state'
            control={control}
            defaultValue={defaultState}
            render={({ field: { onChange, value } }) => (
              <select
                onChange={onChange}
                value={value}
                disabled={!selectedCountry}
                className='mb-4 w-full bg-transparent placeholder:text-white/80 focus:bg-transparent text-white/90 text-xl border-b-[1px] border-red-800 outline-none disabled:opacity-50'
              >
                <option value='' className='bg-black'>
                  Select State
                </option>
                {states.map((state) => (
                  <option key={state.code} value={state.name} className='bg-black'>
                    {state.name}
                  </option>
                ))}
              </select>
            )}
          />
        </div>
      </div>
      {error && <p className='text-red-500 text-xs mb-2'>{error}</p>}
    </div>
  );
};

export default CountryStateSelector;
