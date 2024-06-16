"use client";
import React from "react";
import Image from "next/image";
import Transition from "@/components/Transition";
import RevealOnScroll from "@/components/RevealOnScroll";
import { alfa } from "../layout";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import useStore from "@/utils/store";

const ContactUs = () => {
  const [emailSent, setEmailSent] = React.useState(false);
  const { register, handleSubmit, formState, reset } = useForm();
  const { currentPointer, setCurrentPointer } = useStore();

  const onSubmit = (data) => {
    emailjs
      .send(
        "service_vyc3aph",
        "template_vw3o9zp",
        {
          from_name: "anirudh",
          from_email: "test@gmail.com",
          from_message: "abcddefgh",
        },
        {
          publicKey: "8SoO2AD_OUoRwAQ7_ntbU",
        }
      )
      .then((res) => {
        setEmailSent(true);
        reset();
      })
      .catch((err) => {
        console.log("error", err);
      });
  };

  return (
    <Transition>
      <div className="flex flex-col max-w-screen max-h-[100vh] h-screen w-screen bg-black overflow-y-hidden relative items-center justify-center py-[5vh] overflow-hidden">
        <div className="circle absolute  right-0 bottom-0" />
        <div className="circle -bottom-1/2 -right-1/2 absolute" />
        <div className="circle -bottom-1/2 left-0 absolute" />

        <div
          className={
            "  max-h-[70vh] min-h-[70vh] h-[70vh] w-screen overflow-hidden"
          }
        >
          <div className="flex flex-col w-full h-full items-start relative justify-start  py-[5vh] ">
            <RevealOnScroll
              addedClasses={
                "flex flex-col items-center justify-center w-full p-8 animate-animateSlideUp"
              }
            >
              <h2
                className={`${alfa.className} text-white text-[3rem] lg:text-[4rem] leading-[4rem] font-bold `}
              >
                CONTACT
              </h2>
              <p className="text-white text-center text-sm">
                {
                  " Reach out to us for any collorations or queries. We are always here to help you."
                }
              </p>
            </RevealOnScroll>
            <div className=" flex flex-col items-center w-full mt-[5vh]">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className=" w-[80vw] lg:w-[40%] flex flex-col items-center justify-center"
              >
                <div className="flex flex-col items-center w-full">
                  <input
                    type="text"
                    placeholder="Name"
                    {...register("name", { required: true })}
                    className="mb-4 w-full bg-transparent placeholder:text-white/70 focus:bg-transparent text-white  text-xl border-b-[1px] border-red-800"
                  />
                </div>
                <div className="flex flex-col items-center w-full mt-4">
                  <input
                    type="email"
                    placeholder="Email"
                    {...register("email", { required: true })}
                    className="mb-4 w-full placeholder:text-white/70 focus:bg-transparent text-white  bg-transparent text-xl border-b-[1px] border-red-800"
                  />
                </div>
                <div className="flex flex-col items-center w-full mt-4">
                  <textarea
                    placeholder="Message"
                    {...register("message", { required: true })}
                    className="mb-4 w-full placeholder:text-white/70 focus:bg-transparent text-white  h-[10vh] bg-transparent text-xl border-b-[1px] border-red-800"
                  />
                </div>
                {emailSent ? (
                  <button
                    type="submit"
                    disabled
                    className="bg-green-400 text-white px-8 py-2 mt-8 "
                  >
                    Email Sent
                  </button>
                ) : (
                  <button
                    type="submit"
                    onMouseEnter={() => {
                      setCurrentPointer("a");
                    }}
                    onMouseLeave={() => {
                      setCurrentPointer("");
                    }}
                    className="bg-red-800 text-white px-8 py-2 mt-8 "
                  >
                    Submit
                  </button>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  );
};

export default ContactUs;
