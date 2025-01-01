import React from 'react';
import { Controller } from 'react-hook-form';

const TimeSlotTabs = ({ control, name }) => {
  const timeSlots = [
    { value: '9am-12pm', label: '9 AM - 12 PM' },
    { value: '12pm-3pm', label: '12 PM - 3 PM' },
    { value: '3pm-6pm', label: '3 PM - 6 PM' },
    { value: '6pm-9pm', label: '6 PM - 9 PM' },
    { value: '9pm-12am', label: '9 PM - 12 AM' },
  ];

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { value, onChange } }) => (
        <div className='w-full mb-4'>
          <p className='text-white/80 mb-2 text-xl'>Preferred Time Slot</p>
          <div className='flex flex-wrap gap-2'>
            {timeSlots.map((slot) => (
              <button
                key={slot.value}
                type='button'
                onClick={() => onChange(slot.value)}
                className={`px-4 py-2 text-xs rounded-sm transition-all
                  ${
                    value === slot.value
                      ? 'bg-red-800 text-white'
                      : 'bg-transparent text-white/80 border border-red-800 hover:bg-red-800/20'
                  }`}
              >
                {slot.label}
              </button>
            ))}
          </div>
        </div>
      )}
    />
  );
};

export default TimeSlotTabs;
