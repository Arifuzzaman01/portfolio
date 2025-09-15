import React from 'react';
import Frontend from './Frontend';
import Backend from './Backend';
import Tools from './Tools';
import meAbater from "../../assets/me-avater.png"

const Skills = () => {
  return (
    <div className='my-20'>
      <h1 className='text-center text-2xl md:text-3xl font-bold -mb-16 '>My Skills & Technology</h1>
      <div className='md:flex items-center justify-center'>
        <div className='flex-1'>
        <Frontend/>
      </div>
      <div className='max-w-20  rounded-full'><img src={meAbater} className='avatar rounded-full' alt="abater " /></div>
      <div className='flex-1'>
        <Backend/>
      </div>
      </div>
      <div className='w-3/4 mx-auto'><Tools/></div>
    </div>
  );
};

export default Skills;