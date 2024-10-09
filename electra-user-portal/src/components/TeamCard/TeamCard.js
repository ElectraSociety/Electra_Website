'use client'
import { CldImage } from 'next-cloudinary';
import React, { useState } from 'react'
import { Card, CardBody, CardHeader, CardLink } from 'react-bootstrap'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import TeamCardBorder from '../cardBorder/TeamCardBorder';
const TeamCard = ({ele}) => {
    const [hover,setHover]=useState(false);
  return (
    <TeamCardBorder>
    <div className='flex'>
      <Card className='w-[60vw] lg:w-[25vw] sm:w-[30vw] xl:w-[23vw] m-2 bg-transparent border-0 md:w-[30vw]' key={ele._id}  onMouseOver={()=>{
        setHover(true)
      }} onMouseLeave={()=>{
        setHover(false)
      }}>
        <CardHeader className={`text-center font-black  text-white ${hover ?'text-lg relative top-[40%] z-20':''} hover:underline ${ele.position.length>14?'text-xs':'text-base'} capitalize`}>
        {ele.position}
        </CardHeader>
        <div className={`${hover && 'blur-sm opacity-50'}`}>
        <CldImage
          key={ele._id}
          width="500"
          height="600"
          src={ele.publicId}
          sizes="100vw"
          alt="Description of my image"
          className={`aspect-square ${hover && 'opacity-25'}`}
        />
        </div>
        <CardBody className={`text-center font-bold text-white ${hover ?'text-xl relative bottom-[50%] z-20':''} hover:underline ${ele.name.length>14?'text-base':'text-lg'} capitalize`}>
            {ele.name}
        </CardBody>
        <CardLink className={`flex justify-evenly mx-2 lg:text-3xl text-4xl pb-2 ${hover && 'relative bottom-[30%]'} relative z-30`}>
        <a href={ele?.insta} target='_blank'>
        <FaInstagram className='text-[#FCAF45] hover:scale-125 font-black'/>
        </a>
        <a href={ele?.fb} target='_blank'>
        <FaFacebook className='text-[#6d9dfd] hover:scale-125'/>
        </a>
        <a href={ele.linkdin} target='_blank'>
        <FaLinkedin className='text-[#0077B5] hover:scale-125' />
        </a>
        </CardLink>
      </Card>
    </div>
    </TeamCardBorder>
  )
}

export default TeamCard
