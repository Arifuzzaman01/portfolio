import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import AOS from "aos";
import "aos/dist/aos.css";
import ConnectMe from "./ConnectMe";

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
    <div className="   rounded-2xl  w-full">
      <h2 className="text-3xl font-bold text-center  py-10">Contact Me</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-8 ">
        {/* Left Side: Contact Info */}
        <div
          data-aos="fade-up"
          className=" bg-color m-2 mb-0 rounded-2xl text-start flex flex-col justify-between "
        >
          <ConnectMe />
        </div>

        {/* Right Side: Contact Form */}
        <div className="flex flex-col justify-center mb-5 ">
          <form
            data-aos="fade-up"
            ref={form}
            onSubmit={handleSubmit}
            className="space-y-6 delay-300  md:p-5 p-2 rounded-2xl flex-2"
          >
            <div>
              <label className="block mb-1 font-medium ">Your Name</label>
              <input
                type="text"
                name="name"
                placeholder="Your Full Name"
                required
                className="w-full border-b-2 border-gray-700 px-4 py-2 transition-all duration-300 hover:translate-1 rounded focus:outline-none focus:ring focus:border-blue-400"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium ">Your Email</label>
              <input
                type="email"
                name="userEmail"
                placeholder="(e.g info@gmail.com)"
                required
                className="w-full border-b-2 border-gray-600 px-4 py-2 transition-all duration-300 hover:translate-1 rounded focus:outline-none focus:ring focus:border-blue-400"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium ">Your Message</label>
              <textarea
                name="message"
                rows="4"
                required
                placeholder="Your Message"
                className="w-full border-b-2 border-gray-600 px-4 py-2 transition-all duration-300 hover:translate-1 rounded focus:outline-none focus:ring focus:border-blue-400"
              ></textarea>
            </div>
            <button
              type="submit"
              className="btn-block bg-color text-white px-6 py-[10px] rounded  transition-all duration-300 hover:translate-1"
            >
              Send Message
            </button>
          </form>
          <div>
            <div className="flex justify-center ">
              <div className="h-10 w-20 border-t-2 border-dotted **:border-[#9112BC] rounded-t-full hidden sm:block">
                <div className="h-8 mt-2 w-16 mx-auto border-t-2 border-dotted  rounded-t-full">
                  <div className="h-6 w-12 mt-2 mx-auto border-t-2 border-dotted  rounded-t-full">
                    <div className="h-4 w-8 mx-auto mt-2 border-t-2 border-dotted  rounded-t-full"></div>
                  </div>
                </div>
              </div>

              <div className="h-10 w-20 border-t-2 border-dotted **:border-[#9112BC] rounded-t-full ">
                <div className="h-8 mt-2 w-16 mx-auto border-t-2 border-dotted  rounded-t-full">
                  <div className="h-6 w-12 mt-2 mx-auto border-t-2 border-dotted  rounded-t-full">
                    <div className="h-4 w-8 mx-auto mt-2 border-t-2 border-dotted  rounded-t-full"></div>
                  </div>
                </div>
              </div>
              <div className="h-10 w-20 border-t-2 border-dotted  rounded-t-full">
                <div className="h-8 mt-2 w-16 mx-auto border-t-2 border-dotted e rounded-t-full">
                  <div className="h-6 w-12 mt-2 mx-auto border-t-2 border-dotted rounded-t-full">
                    <div className="h-8 w-8 mx-auto mt-2 border-t-2 border-dotted bg-[#9112BC]  rounded-full"></div>
                  </div>
                </div>
              </div>
              <div className="h-10 w-20 border-t-2 border-dotted **:border-[#9112BC] rounded-t-full">
                <div className="h-8 mt-2 w-16 mx-auto border-t-2 border-dotted  rounded-t-full">
                  <div className="h-6 w-12 mt-2 mx-auto border-t-2 border-dotted  rounded-t-full">
                    <div className="h-4 w-8 mx-auto mt-2 border-t-2 border-dotted  rounded-t-full"></div>
                  </div>
                </div>
              </div>
              <div className="h-10 w-20 border-t-2 border-dotted  rounded-t-full **:border-[#9112BC] hidden sm:flex">
                <div className="h-8 mt-2 w-16 mx-auto border-t-2 border-dotted rounded-t-full">
                  <div className="h-6 w-12 mt-2 mx-auto border-t-2 border-dotted rounded-t-full">
                    <div className="h-4 w-8 mx-auto mt-2 border-t-2 border-dotted  rounded-t-full"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center *:nth-[5]:border-[#9112BC] *:nth-[2]:border-[#9112BC]">
              <div className="h-10 w-20 border-t-2 border-dotted  rounded-t-full"></div>
              <div className="h-10 w-20 border-t-2 border-dotted  rounded-t-full"></div>
              <div className="h-10 w-20 border-t-2 border-dotted  rounded-t-full"></div>
              <div className="h-10 w-20 border-t-2 border-dotted  rounded-t-full"></div>
              <div className="h-10 w-20 border-t-2 border-dotted  rounded-t-full"></div>
              <div className="h-10 w-20 border-t-2 border-dotted  rounded-t-full"></div>
            </div>
          </div>
        </div>
        <ToastContainer position="top-center" />
      </div>
    </div>
  );
};

export default Contact;
