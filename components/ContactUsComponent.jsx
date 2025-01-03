import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { alfa } from '@/app/layout';
import RevealOnScroll from './RevealOnScroll';
import emailjs from '@emailjs/browser';
import { useRouter } from 'next/navigation';
import { formatDate } from '@/app/page';
import MultiSelectDropdown from './MultiSelectDropdown';
import axios from 'axios';
import BudgetDropdown from './BudgetDropdown';

const ContactUsComponent = () => {
  const [loading, setLoading] = React.useState(false);
  const [messageRequired, setMessageRequired] = React.useState(false);
  const [isBudgetDropdown, setIsBudgetDropdown] = React.useState(false);
  const [emailSent, setEmailSent] = React.useState(false);

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
    reset,
    control,
    watch,
    setValue,
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      phoneNumber: '',
      purpose: [],
      budget: '',
      message: '',
    },
  });

  const purpose = watch('purpose');
  const budget = watch('budget');

  useEffect(() => {
    console.log('bidget', budget);
    if (purpose.length > 1 || purpose.includes('Music Production')) {
      setIsBudgetDropdown(true);
      // setValue("budget", "");
    } else {
      setIsBudgetDropdown(false);
      // setValue("budget", "");
    }
  }, [purpose, budget]);

  const onSubmit = (data) => {
    setLoading(true);

    axios
      .post(
        `https://api.airtable.com/v0/appd6P4Bu9eyKGgCo/Doles%20Leads`,
        {
          records: [
            {
              fields: {
                Name: data.name,
                Email: data.email,
                'Phone Number': data.phoneNumber,
                'Purpose of Enquiry': data.purpose.toString(),
                Budget: '₹' + data.budget,
                Message: data.message,
                CreatedOn: formatDate(new Date()),
              },
            },
          ],
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_AIRTABLE_API_KEY}`,
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

  return (
    <div className='flex flex-col w-full h-full items-center relative justify-center py-[2.5vh] '>
      <div className={'flex flex-col  items-center justify-center w-full p-4 animate-animateSlideUp'}>
        <h2 className={`${alfa.className} text-white text-[2.5rem] lg:text-[4rem] leading-[4rem] font-bold `}>
          CONTACT
        </h2>
        <p className='text-white text-center text-sm'>{' Apply here to work with us'}</p>
      </div>
      <div className=' flex flex-col items-center w-full mt-4 lg:mt-[5vh]'>
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
              {...register('name', { required: true })}
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
                required: true,
                minLength: 5,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'invalid email address',
                },
              })}
              className='mb-4 w-full placeholder:text-white/80 focus:bg-transparent text-white/90  bg-transparent text-xl border-b-[1px] border-red-800'
            />
            {errors.email?.message ? <p className=' text-xs text-red-500'>{errors.email.message}</p> : null}
          </div>
          <div className='flex flex-col items-start w-full mt-2'>
            <input
              id='phoneNumber'
              type='phoneNumber'
              placeholder='Phone Number'
              {...register('phoneNumber')}
              className='mb-4 w-full placeholder:text-white/80 focus:bg-transparent text-white/90  bg-transparent text-xl border-b-[1px] border-red-800'
            />
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
                placeholder='Budget'
                {...register('budget')}
                className='mb-4 w-full placeholder:text-white/80 focus:bg-transparent text-white/90  bg-transparent text-xl border-b-[1px] border-red-800'
              />
            )}
          </div>

          <div className='flex flex-col items-start w-full mt-2'>
            <textarea
              id='message'
              placeholder={`Message ${messageRequired ? '*' : ''}`}
              {...register('message', {
                required: messageRequired,
              })}
              className='mb-4 w-full placeholder:text-white/80 focus:bg-transparent text-white/90  h-[10vh] bg-transparent text-xl border-b-[1px] border-red-800'
            />
            {errors.message?.message ? <p className=' text-xs text-red-500'>{errors.message.message}</p> : null}
          </div>
          {emailSent ? (
            <div type='submit' disabled className='bg-green-400 z-0 text-white px-8 py-2 mt-4 '>
              Email Sent
            </div>
          ) : loading ? (
            <div className='bg-red-800 disabled:bg-gray-700 text-white px-8 py-2 mt-2 z-10 lg:mt-8 cursor-pointer '>
              {'...'}
            </div>
          ) : (
            <button
              type='submit'
              className='bg-red-800 disabled:bg-gray-700 text-white px-8 py-2 mt-2 z-10 lg:mt-8 cursor-pointer '
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
