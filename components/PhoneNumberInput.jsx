import React, { useState, useEffect } from 'react';
import { Controller } from 'react-hook-form';
import axios from 'axios';

const PhoneNumberInput = ({ control, defaultCountryCode = '91', countries }) => {
  const [selectedCountry, setSelectedCountry] = useState({
    name: 'India',
    code: 'IN',
    phonecode: '91',
    flag: '🇮🇳',
  });

  return (
    <div className='flex flex-row items-end gap-2 w-full mb-2'>
      <div className='w-[20%] lg:w-[15%]'>
        <Controller
          name='countryCode'
          control={control}
          defaultValue={defaultCountryCode}
          rules={{
            required: {
              value: true,
              message: 'Country is required',
            },
          }}
          render={({ field: { onChange, value } }) => (
            <select
              onChange={(e) => {
                const country = countries.find((c) => c.phonecode === e.target.value);
                setSelectedCountry(country);
                onChange(e.target.value);
              }}
              value={value}
              className='w-full bg-transparent text-white/90 text-base border-b-[1px] border-red-800 outline-none'
            >
              {countries.map((country) => (
                <option key={country.code} value={country.phonecode} className='bg-black'>
                  {country.emoji} +{country.phonecode}
                </option>
              ))}
            </select>
          )}
        />
      </div>

      <div className='flex-1'>
        <Controller
          name='phoneNumber'
          control={control}
          rules={{
            required: {
              value: true,
              message: 'Phone number is required',
            },
            minLength: {
              value: 8,
              message: 'Phone number must be at least 8 characters',
            },
          }}
          render={({ field: { onChange, value } }) => (
            <div className='relative'>
              <input
                type='tel'
                onChange={(e) => {
                  // Allow only numbers
                  const num = e.target.value.replace(/[^\d]/g, '');
                  onChange(num);
                }}
                value={value}
                placeholder='Phone Number*'
                className='w-full bg-transparent placeholder:text-white/80 focus:bg-transparent text-white/90 text-xl border-b-[1px] border-red-800 outline-none'
              />
            </div>
          )}
        />
      </div>
    </div>
  );
};

export default PhoneNumberInput;
