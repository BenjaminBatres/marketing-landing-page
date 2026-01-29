import React, { useState } from "react";
import { IoBusinessOutline } from "react-icons/io5";
import { GrPhone } from "react-icons/gr";
import { HiOutlineMail } from "react-icons/hi";

export default function ContactSection() {
  const [message, setMessage] = useState("");
  const contactInfo = [
    {
      icon: <IoBusinessOutline />,
      info: "123 Maple Street, Springfield, IL. USA",
    },
    { icon: <GrPhone />, info: "+1 (650) 555-0198" },
    { icon: <HiOutlineMail />, info: "hello@abstactly.com" },
  ];
  return (
    <section id="contact" className="py-20 sm:py-30 px-3">
      <div className="max-w-360 mx-auto">
        <div className="flex flex-col laptop:flex-row">
          <div className=" lg:flex-1/2 pr-10 py-8">
            <div className="text-4xl sm:text-5xl font-semibold mb-3">Talk to our team</div>
            <p className="text-black/70 max-w-lg mb-10">
              We're committed to delivering the support you require to make your
              experience as smooth as possible.
            </p>
            <ul className="space-y-5">
              {contactInfo.map((item, id) => (
                <div className="flex items-center gap-3" key={id}>
                  <div className="border-b border-gray-200 shadow-sm text-[#4539ca] text-xl rounded-full w-10 h-10 flex justify-center items-center">
                    {item.icon}
                  </div>
                  <div className="text-black/70">{item.info}</div>
                </div>
              ))}
            </ul>
          </div>
          <div className="laptop:flex-1/2 border border-gray-200 p-4 sm:p-7 rounded-sm shadow-md">
            <div className="flex flex-col md:flex-row justify-between mb-4">
              <div className="flex flex-col gap-1">
                <label className="font-medium">Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="bg-[#fafafa] border border-gray-300 px-3 py-2 rounded-sm w-full md:w-75"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="font-medium">Email</label>
                <input
                  type="email"
                  placeholder="example@example.com"
                  className="bg-[#fafafa] border border-gray-300 px-3 py-2 rounded-sm w-full md:w-75"
                />
              </div>
            </div>
            <label className="font-medium">Message</label>
            <textarea
              type="text"
              placeholder="Write your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              maxLength={500}
              className="bg-[#fafafa] mt-1 border border-gray-300 h-30 w-full resize-none py-2 px-3 rounded-md"
            />
            <p className="float-right text-black/70 text-sm mb-10">
              {message.length}/500
            </p>
            <button className="bg-[#4539ca] text-gray-200 w-full rounded-sm py-3">
              Submit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
