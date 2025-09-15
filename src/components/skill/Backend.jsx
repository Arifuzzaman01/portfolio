import { cn } from '../../lib/utils';
import React, { useRef } from 'react';
import { AnimatedBeam , Circle} from '../animated-beam/Beam';
import { RiTailwindCssFill } from 'react-icons/ri';
import { SiExpress, SiMongodb, SiNodemon } from 'react-icons/si';
import { FaNodeJs } from 'react-icons/fa';

export default function Backend({ className }) {
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
      className={cn(
        'relative flex w-full max-w-[500px] mx-auto items-center justify-center overflow-hidden rounded-lg  bg-background p-10 md:p-0 shadow-xl md:shadow-none',
        className
      )}
      ref={containerRef}>
      <div className="flex h-full w-full flex-row items-stretch justify-between gap-10">
        <div className="flex flex-col justify-center w-3 ">
          <Circle ref={div7Ref} className='w-3' >
            <RiTailwindCssFill className='md:hidden' /> 
          </Circle>
        </div>
        <div className="flex flex-col justify-center ">
          <Circle ref={div6Ref} className="h-20 w-20">
            <h3 className='text-gray-800 font-bold'>Backend</h3>
          </Circle>
        </div>
        <div className="flex flex-col justify-center gap-3">
          <Circle ref={div1Ref}>
            <SiExpress size={32} className=' text-black font-bold' />
          </Circle>
          <Circle  ref={div2Ref}>
            <SiMongodb size={32} className=' text-black font-bold' />
          </Circle>
          <Circle  ref={div3Ref}>
            <FaNodeJs size={32} className=' text-black font-bold'  />
          </Circle>
          <Circle  ref={div4Ref}>
            <SiNodemon size={32} className=' text-black font-bold'  />
          </Circle>
          <Circle className="p-2" ref={div5Ref}>
            <p  className=' text-black font-bold' >...</p>
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
