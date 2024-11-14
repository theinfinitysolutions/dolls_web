import React from "react";
import { useController, useForm } from "react-hook-form";
import Select from "react-select";

const services = [
  { label: "Music Production", value: "Music Production" },
  { label: "Mix-Master", value: "Mix-Master" },
  { label: "AD Jingle", value: "AD Jingle" },
  { label: "Callertunes/Ringtones", value: "Callertunes/Ringtones" },
  { label: "Voice Over", value: "Voice Over" },
  { label: "Post Production", value: "Post Production" },
  { label: "Multilingual AD Jingles", value: "Multilingual AD Jingles" },
  { label: "Others", value: "Others" },
];

const MultiSelectDropdown = ({ name, control }) => {
  const {
    field: { onChange, value, ref },
  } = useController({
    name,
    control,
  });

  const handleChange = (selectedOptions) => {
    onChange(selectedOptions.map((option) => option.value));
  };

  const selectedValues = services.filter((option) =>
    value?.includes(option.value)
  );

  return (
    <Select
      isMulti
      name={name}
      ref={ref}
      options={services}
      value={selectedValues}
      placeholder="Purpose of Enquiry"
      onChange={handleChange}
      styles={{
        placeholder: (defaultStyles) => {
          return {
            ...defaultStyles,
            color: "rgb(255 255 255 / 0.8)",
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
            color: "#121212",
            ":hover": {
              color: "black",
            },
          };
        },
        menu: (baseStyles, state) => {
          return {
            ...baseStyles,
            backgroundColor: "black",
            zIndex: 102,
          };
        },
        valueContainer: (baseStyles, state) => {
          return {
            ...baseStyles,
            backgroundColor: "transparent",
            paddingLeft: "0px",
            zIndex: 10,
          };
        },
        control: (baseStyles, state) => ({
          ...baseStyles,
          backgroundColor: "transparent",
          border: "none",
          fontSize: "1.25rem",
          paddingLeft: "0",
        }),
        option: (baseStyles, state) => ({
          ...baseStyles,
          backgroundColor: "black",
          color: "white",
          zIndex: 10,
          fontSize: "1rem",
        }),
      }}
      className=" react-select mb-4 z-30 w-full bg-transparent placeholder:text-white/70 focus:bg-transparent text-white/90  text-xl border-b-[1px] border-red-800"
    />
  );
};

export default MultiSelectDropdown;
