'use client';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { alfa } from '@/app/layout';
import RevealOnScroll from './RevealOnScroll';
import emailjs from '@emailjs/browser';
import { useRouter, useSearchParams } from 'next/navigation';
import { formatDate } from '@/app/page';
import MultiSelectDropdown from './MultiSelectDropdown';
import axios from 'axios';
import BudgetDropdown from './BudgetDropdown';
import TimeSlotTabs from './TimeSlotTabs';
import ExperienceDropdown from './ExperienceDropdown';
import useGeolocation from '@/hooks/useGeolocation';
import CountryStateSelector from './CountryStateSelector';
import PhoneNumberInput from './PhoneNumberInput';

const ContactUsComponent = () => {
  const [loading, setLoading] = React.useState(false);
  const [countries, setCountries] = useState([]);
  const [messageRequired, setMessageRequired] = React.useState(false);
  const [isBudgetDropdown, setIsBudgetDropdown] = React.useState(false);
  const [emailSent, setEmailSent] = React.useState(false);
  const [selectedCountry, setSelectedCountry] = useState('');

  const location = useGeolocation();

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isValid },
    reset,
    control,
    watch,
    setValue,
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      name: '',
      email: '',
      countryCode: '91',
      phoneNumber: '',
      purpose: [],
      budget: '',
      message: '',
      timeSlot: '',
      experience: '',
      state: '',
      country: '',
    },
  });

  const purpose = watch('purpose');
  const budget = watch('budget');

  const searchParams = useSearchParams();

  const fetchCountries = async () => {
    try {
      var config = {
        method: 'get',
        url: 'https://api.countrystatecity.in/v1/countries',
        headers: {
          'X-CSCAPI-KEY': 'Q25PTlc4bU5UZWFQcTRrWEJpT0l4SEUyUVZ6aVBoT1JwZlRrSnI4Ug==',
        },
      };
      const response = await axios.request(config);
      console.log('response', response);
      setCountries(response.data);
      setLoading(false);
    } catch (error) {
      setError('Failed to load countries. Please try again.');
      console.error('Error:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  useEffect(() => {
    console.log('bidget', budget);
    if (purpose.length > 1 || purpose.includes('Music Production')) {
      setIsBudgetDropdown(true);
    } else {
      setIsBudgetDropdown(false);
    }
  }, [purpose, budget]);

  useEffect(() => {
    if (location.loaded && !location.error) {
      console.log('location', location.address.state, location.address.country);
      setValue('state', location.address.state);
      setValue('country', location.address.country);
      const country = countries.find((country) => country.name === location.address.country);
      if (country) {
        console.log('country', country);
        setSelectedCountry(country.name);
      }
    }
  }, [location.loaded, location.address, setValue, countries]);

  const onSubmit = async (data) => {
    setLoading(true);

    const formattedData = {
      ...data,
      phoneNumber: data.phoneNumber ? `+${data.countryCode}${data.phoneNumber}` : '',
    };

    const campaign = searchParams.get('campaign'); // will get 'campaign_id'
    const adset = searchParams.get('adset'); // will get 'Badset_i'
    const placement = searchParams.get('placement'); // will get 'placement'
    const ad = searchParams.get('ad'); // will get 'ad'

    axios
      .post(
        `https://api.dolesmusic.com/api/leads/create-lead/`,
        {
          name: formattedData.name,
          email: formattedData.email,
          phone: formattedData.phoneNumber,
          purpose: formattedData.purpose.toString(),
          budget: '₹' + formattedData.budget,
          message: formattedData.message,
          time_slot: formattedData.timeSlot || '',
          experience: formattedData.experience || '',
          country: formattedData.country || '',
          state: formattedData.state || '',
          campaign: campaign || '',
          adset: adset || '',
          placement: placement || '',
          ad: ad || '',
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      .then((res) => {
        if (res.status.toString()[0] !== '2') {
          throw new Error(res);
        }

        console.log('resres', res);
        setLoading(false);
        setEmailSent(true);
        window.fbq('trackCustom', 'Doles Lead', {
          event: 'Lead',
        });
        reset();
      })
      .catch((err) => {
        setLoading(false);
        console.log('error', err);
      });
  };

  useEffect(() => {
    if (emailSent) {
      setTimeout(() => {
        setEmailSent(false);
      }, 2000);
    }
  }, [emailSent]);

  useEffect(() => {
    console.log('errors', errors);
  }, [errors]);

  return (
    <div className='flex flex-col w-full h-full items-center relative justify-center py-[2.5vh] '>
      <div className={'flex flex-col  items-center justify-center w-full px-4 py-2 animate-animateSlideUp'}>
        <h2 className={`${alfa.className} text-white text-[2.5rem] lg:text-[4rem] leading-[4rem] font-bold `}>
          CONTACT
        </h2>
        <p className='text-white text-center text-sm'>{' Apply here to work with us'}</p>
      </div>
      <div className=' flex flex-col items-center w-full mt-4 lg:mt-[2.5vh]'>
        <form
          id='contact-form'
          onSubmit={handleSubmit(onSubmit)}
          className=' w-[80vw] lg:w-[40%] flex flex-col items-center justify-center'
        >
          <div className='flex flex-col items-start w-full'>
            <input
              type='text'
              id='name'
              placeholder='Name*'
              {...register('name', {
                required: {
                  value: true,
                  message: 'Name is required',
                },
                minLength: {
                  value: 3,
                  message: 'Name must be at least 3 characters',
                },
              })}
              className='mb-4 w-full bg-transparent placeholder:text-white/80 focus:bg-transparent text-white/90  text-xl border-b-[1px] border-red-800'
            />

            {errors.name?.message ? <p className=' text-xs text-red-500'>{errors.name.message}</p> : null}
          </div>
          <div className='flex flex-col items-start w-full mt-2'>
            <input
              id='email'
              type='email'
              placeholder='Email*'
              {...register('email', {
                required: {
                  value: true,
                  message: 'Email is required',
                },

                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'invalid email address',
                },
              })}
              className='mb-4 w-full placeholder:text-white/80 focus:bg-transparent text-white/90  bg-transparent text-xl border-b-[1px] border-red-800'
            />
            {errors.email ? <p className=' text-xs text-red-500'>{errors.email.message}</p> : null}
          </div>
          <div className='flex flex-col items-start w-full mt-2'>
            <PhoneNumberInput control={control} countries={countries} />
            {errors.phoneNumber?.message ? <p className=' text-xs text-red-500'>{errors.phoneNumber.message}</p> : null}
          </div>
          <div className='flex flex-col items-start w-full mt-2'>
            <MultiSelectDropdown name={'purpose'} control={control} />
            {errors.purpose?.message ? <p className=' text-xs text-red-500'>{errors.purpose.message}</p> : null}
          </div>
          <div className='flex flex-col items-start w-full mt-2'>
            {isBudgetDropdown ? (
              <BudgetDropdown name={'budget'} control={control} />
            ) : (
              <input
                id='budget'
                type={'number'}
                placeholder='Budget*'
                {...register('budget', {
                  required: true,
                })}
                className='mb-4 w-full placeholder:text-white/80 focus:bg-transparent text-white/90  bg-transparent text-xl border-b-[1px] border-red-800'
              />
            )}
          </div>
          <CountryStateSelector
            control={control}
            defaultCountry={location.address.country}
            defaultState={location.address.state}
            countries={countries}
            selectedCountry={selectedCountry}
            setSelectedCountry={setSelectedCountry}
          />
          <div className='flex flex-col items-start w-full mt-2'>
            <TimeSlotTabs name={'timeSlot'} control={control} />
            {errors.timeSlot?.message ? <p className=' text-xs text-red-500'>{errors.timeSlot.message}</p> : null}
          </div>
          <div className='flex flex-col items-start w-full mt-2'>
            <ExperienceDropdown name={'experience'} control={control} />
            {errors.experience?.message ? <p className=' text-xs text-red-500'>{errors.experience.message}</p> : null}
          </div>

          <div className='flex flex-col items-start w-full mt-2'>
            <textarea
              id='message'
              placeholder='Message*'
              {...register('message', {
                required: {
                  value: true,
                  message: 'Message is required',
                },
              })}
              className='mb-4 w-full placeholder:text-white/80 focus:bg-transparent text-white/90  h-[5vh] bg-transparent text-xl border-b-[1px] border-red-800'
            />
            {errors.message?.message ? <p className=' text-xs text-red-500'>{errors.message.message}</p> : null}
          </div>
          {emailSent ? (
            <div type='submit' disabled className='bg-green-400 z-0 text-white px-8 py-2 mt-4 '>
              Sent
            </div>
          ) : loading ? (
            <div className='bg-red-800 disabled:bg-gray-700 text-white px-8 py-2 mt-2 z-0 lg:mt-8  '>...</div>
          ) : (
            <button
              type='submit'
              disabled={!isValid}
              className={`bg-red-800 text-white px-8 py-2 mt-2 z-0 lg:mt-8 cursor-pointer ${
                !isValid ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {'Submit'}
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactUsComponent;
