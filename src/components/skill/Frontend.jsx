import React, { useRef } from "react";
import { AnimatedBeam , Circle } from "../animated-beam/Beam";
import { RiTailwindCssFill, RiTailwindCssLine } from "react-icons/ri";
import { FaCss3, FaHtml5, FaReact } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";

export default function Frontend() {
  const containerRef = useRef(null);
  const div1Ref = useRef(null);
  const div2Ref = useRef(null);
  const div3Ref = useRef(null);
  const div4Ref = useRef(null);
  const div5Ref = useRef(null);
  const div6Ref = useRef(null);
  const div7Ref = useRef(null);
  return (
    <div
      className="relative flex w-full max-w-[500px] mx-auto items-center justify-center overflow-hidden rounded-lg  bg-background  p-10 md:p-0 shadow-xl md:shadow-none"
      ref={containerRef}
    >
      <div className="flex  h-full w-full flex-row items-stretch justify-between gap-10">
        <div className="flex flex-col justify-center gap-3">
          <Circle ref={div1Ref} >
           <FaHtml5 size={32} className=' text-black font-bold' />
          </Circle>
          <Circle ref={div2Ref} >
             <FaCss3 size={28} className=' text-black font-bold' />
          </Circle>
          <Circle ref={div3Ref} >
            <RiTailwindCssLine size={32} className=' text-black font-bold' />
          </Circle>
          <Circle ref={div4Ref} >
             <FaReact size={32} className=' text-black font-bold' />
          </Circle>
          <Circle ref={div5Ref} className="p-2">
             <IoLogoFirebase size={32} className=' text-black font-bold'  />
          </Circle>
        </div>
        <div className="flex flex-col justify-center">
          <Circle ref={div6Ref} className="h-20 w-20">
             <h3 className="text-gray-800 font-bold">Frontend</h3>
          </Circle>
        </div>
        <div className="flex flex-col justify-center w-3">
          <Circle ref={div7Ref}>
             
          </Circle>
        </div>
      </div>

      <AnimatedBeam
              containerRef={containerRef}
              fromRef={div1Ref}
              toRef={div6Ref}
              duration={3}
            />
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={div2Ref}
              toRef={div6Ref}
              duration={3}
            />
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={div3Ref}
              toRef={div6Ref}
              duration={3}
            />
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={div4Ref}
              toRef={div6Ref}
              duration={3}
            />
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={div5Ref}
              toRef={div6Ref}
              duration={3}
            />
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={div6Ref}
              toRef={div7Ref}
              duration={3}
            />
    </div>
  );
}
