'use client'
import React, { useState } from 'react'
import { Badge, Button, Card, CardFooter, CardHeader } from 'react-bootstrap'
import { BsArrowsFullscreen } from "react-icons/bs";
import { FaDownload } from "react-icons/fa";
import { AiTwotoneLike } from "react-icons/ai";
import { FaComments } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import FullPhoto from '../fullPhoto/FullPhoto';
import CommentDialog from '../commentDialog/CommentDialog';
const GalleryCard = ({item}) => {
    const [fullPic,setFullPic]=useState(false)
    const [comment,setComment]=useState(false)
  return (
    <div>
      <Card className='w-[70vw] lg:w-[30vw] sm:w-[40vw]'>
      <CardHeader className='text-center bg-[#070F2B] text-neutral-300 font-bold text-xs md:text-base lg:text-lg'>Event Name</CardHeader>
      <span className='absolute -right-2 -top-2 text-base lg:text-xl'>
      <Badge pill bg="danger">
      <FaHeart></FaHeart>{item.likes}
      </Badge>
      </span>
      <Card.Img variant="top" src={item.image} />
    </Card>
    <CardFooter>
    <div className='flex gap-4 p-2 text-blue-400 text-2xl w-full justify-evenly border-1 border-t-0 border-white '>
        <div className='hover:scale-110'><AiTwotoneLike /></div>
        <div onClick={()=>{
            setComment(true)
        }} className='hover:scale-110'><FaComments /></div>
        <div onClick={()=>{
            setFullPic(true)
        }} className='hover:scale-110'><BsArrowsFullscreen /></div>
        <div className='hover:scale-110'><FaDownload /></div>
    </div>
    </CardFooter>
    <FullPhoto item={item} setFullPic={setFullPic} fullPic={fullPic}/>
    <CommentDialog comment={comment} setComment={setComment} item={item} />
    </div>
  )
}

export default GalleryCard
