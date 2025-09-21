import React, { useRef } from "react";
import { AnimatedBeam, Circle } from "../animated-beam/Beam";
import { FaFigma, FaReact } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";
import { SiNetlify } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import surge from "../../assets/surge-logo.svg";
import pisxo from "../../assets/pisxologo.png";

export default function Tools() {
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
      className="relative flex w-full  mx-auto items-center justify-center overflow-hidden rounded-lg  bg-background  p-10 md:p-0 shadow-xl md:shadow-none"
      ref={containerRef}
    >
      <div className="flex h-full w-full flex-col items-stretch justify-between gap-10">
        <div className="flex flex-row items-center justify-between ">
          <Circle ref={div1Ref}>
            <VscVscode size={32} className=" color-primary" />
          </Circle>
          <Circle ref={div4Ref} className="h-20 w-20 p-3 ">
            <p className="font-bold color-primary">Tools</p>
          </Circle>
          <Circle ref={div5Ref} className="p-2">
            <IoLogoVercel size={32} className=" color-primary font-bold" />
          </Circle>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div2Ref} className="p-2">
            <FaFigma size={32} className=" color-primary font-bold" />
          </Circle>

          <Circle ref={div6Ref} className="p-2">
            <SiNetlify size={32} className=" color-primary font-bold" />
          </Circle>
           <Circle ref={div3Ref} className="p-2">
            <img className="w-10 h-8" src={pisxo} alt="color-primary" />
          </Circle>
          <Circle ref={div7Ref} className="p-2">
            <img className="w-10 h-8" src={surge} alt="" />
          </Circle>
        </div>
        
      </div>

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div4Ref}
        curvature={-75}
        endYOffset={-10}
        dotted
        gradientStartColor="#00ac47"
        gradientStopColor="#ffba00"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={div4Ref}
        dotted
        gradientStartColor="#d948ae"
        gradientStopColor="#5b60ff"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div4Ref}
        curvature={10}
        endYOffset={10}
        dotted
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div5Ref}
        toRef={div4Ref}
        curvature={-75}
        endYOffset={-10}
        reverse
        gradientStartColor="#48b0d9"
        gradientStopColor="#67aeff"
        dotted
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div6Ref}
        toRef={div4Ref}
        reverse
        dotted
        gradientStartColor="#00ac47"
        gradientStopColor="#4fcc5d"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div7Ref}
        toRef={div4Ref}
        curvature={10}
        endYOffset={0}
        reverse
        dotted
        gradientStartColor="#48b0d9"
        gradientStopColor="#67aeff"
      />
    </div>
  );
}
