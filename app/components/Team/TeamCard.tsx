import React from 'react'
import Image from 'next/image'

interface Props {
      image: string;
      name: string;
      position: string;
      }

const TeamCard = ({image,name,position}:Props) => {
  return (
    <div>
      <Image
        src={image}
        alt={name}
        width={400}
        height={400}
        className="rounded-2xl mx-auto"
      />
      <h1 className="text-[40px] font-bold mt-[1.5rem] text-gray-800 text-center">
        {name}
      </h1>
      <p className="mt-[0.4rem] mb-[0.4rem] px-4 py-1 bg-green-600 text-white mx-auto w-fit font-medium rounded-sm">
        {position}
      </p>
      <p className='text-center md:w-[70%] mx-auto text-gray-600 mt-[1rem]'>
        As the Head Chef,he lead the kitchen team, oversee menu
        development, ensure the quality and consistency of all dishes, and
        manage kitchen operations to maintain high standards of food safety and
        efficiency
      </p>
    </div>
  );
}

export default TeamCard
