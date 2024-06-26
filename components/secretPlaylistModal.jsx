import React, { useState, useEffect } from "react";
import useStore from "@/utils/store";
import Image from "next/image";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

export default function JoinUsModal() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const { showModal, setShowModal, setCurrentPointer } = useStore();

  const { register, handleSubmit, formState, reset } = useForm();

  useEffect(() => {
    console.log("showmodal", showModal);
    setOpen(showModal);
  }, [showModal]);

  const onSubmit = (data) => {
    setLoading(true);
    console.log("send maul", data);
    emailjs
      .send(
        "service_vyc3aph",
        "template_cb4fu28",
        {
          name: data.name,
          email: data.email,
          phoneNumber: data.phoneNumber,
        },
        {
          publicKey: "VV1JBQAmRXz7mALR7",
        }
      )
      .then((res) => {
        console.log("email send res", res);
        localStorage.setItem("email", "mail sent");
        useStore.setState({ showModal: false });
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log("err", err);
      });
  };

  return (
    <div className=" z-50">
      {open ? (
        <div className=" fixed left-0 top-0 z-50 w-screen h-screen bg-[#121212]/80 flex flex-col items-center overflow-hidden justify-center ">
          <div className="h-[77.5vh] lg:h-[55vh] w-11/12 lg:w-[60vw] bg-black flex flex-col lg:flex-row">
            <div className=" w-full lg:w-1/2 h-[40vh] lg:h-full relative">
              <Image
                src={process.env.NEXT_PUBLIC_API_URL + "/dollsbgalt.jpeg"}
                layout="fill"
                className=" opacity-50"
              />
            </div>
            <div className="w-full lg:w-1/2 h-[35vh] lg:h-full relative flex flex-col p-8 justify-center items-start">
              <h2 className="text-4xl">Join Us</h2>
              <p className="text-sm mt-2">
                Join our growing community and get access to exclusive music
                before everyone
              </p>
              <form onSubmit={handleSubmit(onSubmit)} className="mt-6 w-full">
                <input
                  placeholder="Name*"
                  {...register("name", { required: true })}
                  className="w-full border-[1px] placeholder:text-[#c7c7c7]/60 bg-black p-2 border-[#ababab]  text-white"
                />
                {formState.errors.name && (
                  <span className="text-red-500">Name is required</span>
                )}

                <input
                  placeholder="Email*"
                  {...register("email", { required: true })}
                  className="w-full mt-4 border-[1px] placeholder:text-[#c7c7c7]/60 bg-black p-2 border-[#ababab]  text-white"
                />
                {formState.errors.email && (
                  <span className="text-red-500">Email is required</span>
                )}
                <input
                  placeholder="Phone Number"
                  {...register("phoneNumber")}
                  className="w-full border-[1px] placeholder:text-[#c7c7c7]/60 mt-4 bg-black p-2 border-[#ababab]  text-white"
                />
              </form>
              <div className="w-full flex flex-row items-center justify-end mt-4">
                <button
                  onClick={() => {
                    handleSubmit(onSubmit)();
                  }}
                  className="px-3 py-2 bg-red-500 text-white"
                >
                  {!loading ? "Submit" : "..."}
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
