'use client'
import { EventData } from '@/app/utils/knowMoreData';
import React, { useRef, useState } from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import styles from '../../app/styles/Events.module.css'
import { Button } from '../ui/button';
import { useInView } from 'react-intersection-observer';
import {motion} from 'framer-motion'
import KnowMore from '../knowMore/KnowMore';
import { Scale } from 'lucide-react';
import Link from 'next/link';
const Events = () => {
  const [openMore,setOpenMore]=useState(false);
  const [dataToShow,setData]=useState({});
  return (
    <section>
        <motion.h2 className='text-5xl font-bold m-2 border-b-4 inline-block border-yellow-400 ' initial={{y:-10,opacity:0}} whileInView={{y:0,opacity:1,transition:{duration:2}}}>Events</motion.h2>
        <VerticalTimeline lineColor='white'>
        {
          EventData.map((event)=>{

            return <VerticalTimelineElement key={event.title} visible={true} contentStyle={{ background:'#3282B8', color: '#ffffff', }} icon={event.icon}
            iconStyle={{background:'#3282B8',color:'white'} } 
            contentArrowStyle={{ borderRight: '7px solid  #3282BB'}} intersectionObserverProps={
              {
                
              }
            }
            >
                <div className={`text-yellow-500 font-semibold text-2xl ${styles['sofadi-']} text-center`} style={{fontFamily:'Lucida Sans'}}>{event.title}</div>
                <div className={`text-[#bed3de] font-mono ${styles['space-grotesk']} ${styles['dec-shadow']} text-justify`}>{event.description}</div>
                {event.link==""?<div className='flex justify-center mt-2'>
                <Button className={`bg-[#0F4C75] rounded-xl hover:opacity-80 hover:bg-[#0F4C75] ${styles['hvr-float-shadow']} font-bold px-4 ${styles['card-button']}`} onClick={()=>{
                  setOpenMore(true)
                  setData(event)
                }}>Know More</Button>
                </div>:<div className='flex justify-between mt-2'>
                <Button className={`bg-[#0F4C75] rounded-xl hover:opacity-80 hover:bg-[#0F4C75] ${styles['hvr-float-shadow']} font-bold px-4 ${styles['card-button']}`} onClick={()=>{
                  setOpenMore(true)
                  setData(event)
                }}>Know More</Button>
                <Link href={event.link} className={`bg-[#0F4C75] rounded-xl hover:opacity-80 hover:bg-[#0F4C75] ${styles['hvr-float-shadow']} font-bold px-4 ${styles['card-button']}`}>Register</Link>
                </div>}
              </VerticalTimelineElement>
          })
        }
        </VerticalTimeline>
        <KnowMore openMore={openMore} setOpenMore={setOpenMore} dataToShow={dataToShow}/>
    </section>
  )
}

export default Events