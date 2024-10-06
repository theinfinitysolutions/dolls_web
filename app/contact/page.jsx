"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Transition from "@/components/Transition";
import RevealOnScroll from "@/components/RevealOnScroll";
import { alfa } from "../layout";
import { set, useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import useStore from "@/utils/store";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import MultiSelectDropdown from "@/components/MultiSelectDropdown";
import { formatDate } from "../page";

const services = [
  "Music Production",
  "Mix-Master",
  "AD Jingle",
  "Callertunes/Ringtones",
  "Voice Over",
  "Post Production",
  "Others",
];

const ContactUs = () => {
  const [loading, setLoading] = React.useState(false);
  const [messageRequired, setMessageRequired] = React.useState(false);
  const [emailSent, setEmailSent] = React.useState(false);
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
    reset,
    control,
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      phoneNumber: "",
      purpose: [],
      budget: "",
      message: "",
    },
  });

  const { currentPointer, setCurrentPointer } = useStore();

  const onSubmit = (data) => {
    setLoading(true);
    fetch(`https://api.airtable.com/v0/appd6P4Bu9eyKGgCo/Doles%20Leads`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_AIRTABLE_API_KEY}`,
      },
      body: JSON.stringify({
        records: [
          {
            fields: {
              Name: data.name,
              Email: data.email,
              "Phone Number": data.phoneNumber,
              "Purpose of Enquiry": data.purpose.toString(),
              Budget: parseFloat(data.budget),
              Message: data.message,
              CreatedOn: formatDate(new Date()),
            },
          },
        ],
      }),
    })
      .then((res) => {
        if (res.status.toString()[0] !== "2") {
          throw new Error(res);
        }

        console.log("resres", res);
        setLoading(false);
        setEmailSent(true);
        reset();
      })
      .catch((err) => {
        setLoading(false);
        console.log("error", err);
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
    <Transition>
      <div
        id="contact"
        className="flex flex-col max-w-screen h-full w-screen bg-black overflow-y-hidden relative items-center justify-center py-[5vh] overflow-hidden"
      >
        <div className="circle absolute  right-0 bottom-0" />
        <div className="circle -bottom-1/2 -right-1/2 absolute" />
        <div className="circle -bottom-1/2 left-0 absolute" />

        <div className={"  lg:h-full w-screen overflow-hidden"}>
          <div className="flex flex-col w-full h-full items-start relative justify-start  py-[2.5vh] ">
            <RevealOnScroll
              addedClasses={
                "flex flex-col items-center justify-center w-full p-8 animate-animateSlideUp"
              }
            >
              <h2
                className={`${alfa.className} text-white text-[2.5rem] lg:text-[4rem] leading-[4rem] font-bold `}
              >
                CONTACT
              </h2>
              <p className="text-white text-center text-sm">
                {" Apply here to work with us"}
              </p>
            </RevealOnScroll>
            <div className=" flex flex-col items-center w-full mt-4 lg:mt-[2.5vh]">
              <form
                id="contact-form"
                onSubmit={handleSubmit(onSubmit)}
                className=" w-[80vw] lg:w-[40%] flex flex-col items-center justify-center"
              >
                <div className="flex flex-col items-start w-full">
                  <input
                    type="text"
                    id="name"
                    placeholder="Name*"
                    {...register("name", { required: true, minLength: 5 })}
                    className="mb-4 w-full bg-transparent placeholder:text-white/80 focus:bg-transparent text-white/90  text-xl border-b-[1px] border-red-800"
                  />
                  {errors.name?.message ? (
                    <p className=" text-xs text-red-500">
                      {errors.name.message}
                    </p>
                  ) : null}
                </div>
                <div className="flex flex-col items-start w-full mt-2">
                  <input
                    id="email"
                    type="email"
                    placeholder="Email*"
                    {...register("email", {
                      required: true,
                      minLength: 5,
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "invalid email address",
                      },
                    })}
                    className="mb-4 w-full placeholder:text-white/80 focus:bg-transparent text-white/90  bg-transparent text-xl border-b-[1px] border-red-800"
                  />
                  {errors.email?.message ? (
                    <p className=" text-xs text-red-500">
                      {errors.email.message}
                    </p>
                  ) : null}
                </div>
                <div className="flex flex-col items-start w-full mt-2">
                  <input
                    id="phoneNumber"
                    type="phoneNumber"
                    placeholder="Phone Number"
                    {...register("phoneNumber")}
                    className="mb-4 w-full placeholder:text-white/80 focus:bg-transparent text-white/90  bg-transparent text-xl border-b-[1px] border-red-800"
                  />
                </div>
                <div className="flex flex-col items-start w-full mt-2">
                  <input
                    id="budget"
                    type={"number"}
                    placeholder="Budget"
                    {...register("budget")}
                    className="mb-4 w-full placeholder:text-white/80 focus:bg-transparent text-white/90  bg-transparent text-xl border-b-[1px] border-red-800"
                  />
                </div>
                <div className="flex flex-col items-start w-full mt-2">
                  <MultiSelectDropdown name={"purpose"} control={control} />
                  {errors.purpose?.message ? (
                    <p className=" text-xs text-red-500">
                      {errors.purpose.message}
                    </p>
                  ) : null}
                </div>

                <div className="flex flex-col items-start w-full mt-2">
                  <textarea
                    id="message"
                    placeholder={`Message ${messageRequired ? "*" : ""}`}
                    {...register("message", {
                      required: messageRequired,
                    })}
                    className="mb-4 w-full placeholder:text-white/80 focus:bg-transparent text-white/90  h-[10vh] bg-transparent text-xl border-b-[1px] border-red-800"
                  />
                  {errors.message?.message ? (
                    <p className=" text-xs text-red-500">
                      {errors.message.message}
                    </p>
                  ) : null}
                </div>
                {emailSent ? (
                  <button
                    type="submit"
                    disabled
                    className="bg-green-400 text-white px-8 py-2 mt-4 "
                  >
                    Email Sent
                  </button>
                ) : (
                  <button
                    // disabled={!errors.name || !errors.email}
                    type="submit"
                    // onMouseEnter={() => {
                    //   setCurrentPointer("a");
                    // }}
                    // onMouseLeave={() => {
                    //   setCurrentPointer("");
                    // }}

                    className="bg-red-800 disabled:bg-gray-700 text-white px-8 py-2 mt-2 z-20 lg:mt-8 cursor-pointer "
                  >
                    {loading ? "..." : "Submit"}
                  </button>
                )}
              </form>
            </div>
          </div>
        </div>

        <div className=" w-3/12 flex flex-row justify-center z-20 items-center gap-x-2 my-2 lg:my-8">
          <div className="h-[1px] bg-white w-[45%]  border-white" />
          <p className=" text-xl text-white">OR</p>
          <div className="h-[1px] bg-white w-[45%]  border-white" />
        </div>

        <div className="flex flex-col items-center z-20 w-11/12 lg:w-6/12">
          <p>Reach out to us on our Social media</p>
          <div className=" w-4/12 flex flex-row justify-between mt-4 lg:mt-8">
            <a
              // onMouseEnter={() => {
              //   setCurrentPointer("a");
              // }}
              // onMouseLeave={() => {
              //   setCurrentPointer("");
              // }}
              href="https://www.instagram.com/doleshwar_raj/"
              target="_blank"
              rel="noreferrer"
              className="cursor-pointer"
            >
              <FaInstagram size={24} color="#fff" />
            </a>
            <a
              // onMouseEnter={() => {
              //   setCurrentPointer("a");
              // }}
              // onMouseLeave={() => {
              //   setCurrentPointer("");
              // }}
              href="https://www.facebook.com"
              target="_blank"
              rel="noreferrer"
              className="cursor-pointer"
            >
              <FaFacebook size={24} color="#fff" />
            </a>
            <a
              // onMouseEnter={() => {
              //   setCurrentPointer("a");
              // }}
              // onMouseLeave={() => {
              //   setCurrentPointer("");
              // }}
              href="https://www.twitter.com"
              target="_blank"
              rel="noreferrer"
              className="cursor-pointer"
            >
              <FaTwitter size={24} color="#fff" />
            </a>
          </div>
        </div>
      </div>
    </Transition>
  );
};

export default ContactUs;
