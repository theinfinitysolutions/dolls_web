import React from 'react';
import { Controller } from 'react-hook-form';

const ExperienceDropdown = ({ control, name }) => {
  const options = [
    { value: 'hobby', label: 'Hobby' },
    { value: 'professional', label: 'Professional' },
    { value: 'others', label: 'Others' },
  ];

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { value, onChange } }) => (
        <div className='w-full mb-4'>
          <p className='text-white/80 mb-2 text-xl'>Experience Level</p>
          <div className='flex flex-wrap gap-2'>
            {options.map((option) => (
              <button
                key={option.value}
                type='button'
                onClick={() => onChange(option.value)}
                className={`px-2 py-2 text-sm rounded-sm transition-all
                  ${
                    value === option.value
                      ? 'bg-red-800 text-white'
                      : 'bg-transparent text-white/80 border border-red-800 hover:bg-red-800/20'
                  }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      )}
    />
  );
};

export default ExperienceDropdown;
