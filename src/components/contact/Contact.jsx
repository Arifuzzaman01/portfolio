import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";

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
    <section className="bg-white py-5 md:py-10  lg:px-20">
      <div className="md:max-w-6xl mx-auto bg-[#96cd00c9] rounded-2xl md:px-10 px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 py-10">
          Contact Me
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 ">
          {/* Left Side: Contact Info */}
          <div className="space-y-6 text-gray-700 bg-white p-5 rounded-2xl">
            <h3 className="text-3xl font-bold">Personal Information</h3>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Email
              </h3>
              <p className="text-gray-600">arifuzzamanar29@gmail.com</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Phone
              </h3>
              <p className="text-gray-600">+880 1339313060</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                WhatsApp
              </h3>
              <p className="text-gray-600">+8801 853684161</p>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <form ref={form} onSubmit={handleSubmit} className="space-y-6 bg-white md:p-5 p-2 rounded-2xl">
            <div>
              <label className="block mb-1 font-medium text-gray-700">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring focus:border-blue-400"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium text-gray-700">
                Your Email
              </label>
              <input
                type="email"
                name="userEmail"
                required
                className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring focus:border-blue-400"
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
                className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring focus:border-blue-400"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-[#96cd00e5] text-white px-6 py-2 rounded hover:bg-[hsla(76,100%,40%,1)] transition"
            >
              Send Message
            </button>
          </form>
          <ToastContainer position="top-center" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
