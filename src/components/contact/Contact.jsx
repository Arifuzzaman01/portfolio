import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID, // ✅ Your service ID
        import.meta.env.VITE_TEMPLATE_ID, // ✅ Your template ID
        form.current,
        import.meta.env.VITE_PK // ✅ Your public/public key
      )
      .then(
        (result) => {
          console.log("Message sent:", result.text);
          toast.success("Send message successfully");
          form.current.reset();
        },
        (error) => {
          console.error("Error:", error.text);
          alert("❌ Failed to send message.");
        }
      );
  };

  return (
    <div className=" mx-auto  rounded-2xl md:px-10 px-4">
      <h2 className="text-3xl font-bold text-center  py-10">Contact Me</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 ">
        {/* Left Side: Contact Info */}
        <div
          data-aos="flip-left"
          className="space-y-4 text-gray-700 bg-neutral-content px-5 pt-5  flex-1 text-center rounded-2xl border-l-8 "
        >
          <h3 className="text-3xl font-bold">Personal Information</h3>
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Email</h3>
            <p className="text-gray-600">arifuzzamanar29@gmail.com</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Phone</h3>
            <p className="text-gray-600">+880 1339313060</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              WhatsApp
            </h3>
            <p className="text-gray-600">+880 1853684161</p>
          </div>
          <div className=" flex justify-between">
            <div className="flex">
              <div className="w-16 h-16 bg-gray-500 hover:bg-white  rounded-bl-full rounded-tr-full"></div>
              <div className="w-6 h-20 bg-gray-500 hover:bg-white  rounded-tr-[50%] rounded-tl-[50%]"></div>
              <div className="w-16 h-16 bg-gray-500 hover:bg-white  rounded-br-full rounded-tl-full"></div>
            </div>
            <div className="md:flex hidden ">
              <div className="w-16 h-16 bg-gray-500 hover:bg-white  rounded-bl-full rounded-tr-full"></div>
              <div className="w-6 h-20 bg-gray-500 hover:bg-white  rounded-tr-[50%] rounded-tl-[50%]"></div>
              <div className="w-16 h-16 bg-gray-500 hover:bg-white  rounded-br-full rounded-tl-full"></div>
            </div>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <form
          data-aos="flip-right"
          ref={form}
          onSubmit={handleSubmit}
          className="space-y-6 bg-white md:p-5 p-2 rounded-2xl flex-2"
        >
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              required
              className="w-full border-b-2 border-gray-700 px-4 py-2 rounded focus:outline-none focus:ring focus:border-blue-400"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium text-gray-600">
              Your Email
            </label>
            <input
              type="email"
              name="userEmail"
              placeholder="(e.g info@gmail.com)"
              required
              className="w-full border-b-2 border-gray-600 px-4 py-2 rounded focus:outline-none focus:ring focus:border-blue-400"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Your Message
            </label>
            <textarea
              name="message"
              rows="3"
              required
              placeholder="Your Message"
              className="w-full border-b-2 border-gray-600 px-4 py-2 rounded focus:outline-none focus:ring focus:border-blue-400"
            ></textarea>
          </div>
          <button
            type="submit"
            className="btn-block bg-gray-400 text-white px-6 py-2 rounded hover:bg-green-500 transition"
          >
            Send Message
          </button>
        </form>
        <ToastContainer position="top-center" />
      </div>
    </div>
  );
};

export default Contact;
