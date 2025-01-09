import React from 'react';
import { useController, useForm } from 'react-hook-form';
import Select from 'react-select';

const services = [
  { label: '10,000 - 30,000', value: '10,000 - 30,000' },
  { label: '30,000 - 50,000', value: '30,000 - 50,000' },
  { label: '50,000+ ', value: '50,000+' },
];

const BudgetDropdown = ({ name, control }) => {
  const {
    field: { onChange, value, ref },
  } = useController({
    name,
    control,
    rules: {
      required: true,
    },
  });

  const handleChange = (selectedOption) => {
    onChange(selectedOption.value);
  };

  const selectedValues = services.filter((option) => value?.includes(option.value));

  return (
    <Select
      name={name}
      ref={ref}
      options={services}
      value={selectedValues}
      placeholder='Budget*'
      onChange={handleChange}
      styles={{
        placeholder: (defaultStyles) => {
          return {
            ...defaultStyles,
            color: 'rgb(255 255 255 / 0.8)',
          };
        },
        // container: (defaultStyles) => {
        //   return {
        //     ...defaultStyles,
        //     width: "100%",
        //     backgroundColor: "#00ff00",
        //   };
        // },
        multiValueRemove: (baseStyles, state) => {
          return {
            ...baseStyles,
            color: '#121212',
            ':hover': {
              color: 'black',
            },
          };
        },
        menu: (baseStyles, state) => {
          return {
            ...baseStyles,
            backgroundColor: 'black',
            zIndex: 80,
          };
        },
        valueContainer: (baseStyles, state) => {
          return {
            ...baseStyles,
            backgroundColor: 'transparent',
            paddingLeft: '0px',
          };
        },
        singleValue: (baseStyles, state) => {
          return {
            ...baseStyles,
            color: 'white',
          };
        },
        control: (baseStyles, state) => ({
          ...baseStyles,
          backgroundColor: 'transparent',
          border: 'none',
          fontSize: '1.25rem',
          paddingLeft: '0',
        }),
        option: (baseStyles, state) => ({
          ...baseStyles,
          backgroundColor: 'black',
          color: 'white',
          zIndex: 8,
          fontSize: '1rem',
        }),
      }}
      className=' react-select mb-4 z-20 w-full bg-transparent placeholder:text-white/70 focus:bg-transparent text-white/90  text-xl border-b-[1px] border-red-800'
    />
  );
};

export default BudgetDropdown;
