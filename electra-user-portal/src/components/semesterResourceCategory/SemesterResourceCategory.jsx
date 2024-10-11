'use client'
import { ResourceStore } from '@/app/store/ResourceStore'
import React, { useContext, useEffect, useState } from 'react'
import PdfDialog from '../pdfDialog/PdfDialog'
import { Canvas } from '@react-three/fiber'
import Pikachu from '../3d-models/Pikachu/Pikachu'
import { Environment } from '@react-three/drei'
import { AnimationStore } from '@/app/store/AnimationStore'
import Link from 'next/link'
import { RiBook2Fill } from 'react-icons/ri'
const SemesterResourceCategory = ({semester,category}) => {
  const {sem}=useContext(ResourceStore);
  const {setPikaAnimation}=useContext(AnimationStore)
    const {getResources,setData,data}=useContext(ResourceStore)
    const [subjectData,setSubjectData]=useState([])
    useEffect(()=>{
        getResources(semester,category)
    },[])
  return (
    <>
      <Link
        href={"/Resources"}
        className="bg-fuchsia-500 text-white absolute top-0 m-3 p-2 rounded-xl font-bold drop-shadow-[0rem_0rem_0.5rem_rgba(50,250,250,0.5)] text-xl sm:3xl hover:scale-125"
      >
        <RiBook2Fill />
      </Link>
    <div className='flex flex-col absolute left-0 w-1/2 gap-3 m-2 lg:m-5'>
    <h3 className='text-center capitalize font-mono font-bold text-2xl lg:text-3xl'>{category}</h3>
      {data.length>0 && data.map((ele)=>{
        return <div key={ele._id} >
        <div className='flex justify-between gap-4 p-2 px-3 lg:px-6 bg-slate-900 shadow-xl shadow-slate-800 items-center rounded-xl'>
        <div className='text-white self-center text-center content-center'>{ele.name}</div>
        <PdfDialog link={ele.driveUrl}/>
        </div>
        </div>
      })}
      <div className='fixed right-0' onMouseOver={()=>{
          setPikaAnimation(2)

      }}
      onMouseLeave={()=>{
          setPikaAnimation(1)
      }}
      onTouchStart={()=>{
          setPikaAnimation(2)
      }}
      onTouchEnd={()=>{
          setPikaAnimation(1)
      }}
      >
      <Canvas style={{width:'50vw',height:'90vh'}}>
      <Pikachu/>
      <Environment preset='warehouse'/>
    </Canvas>
      </div>
    </div>
    </>
  )
}
export default SemesterResourceCategory
