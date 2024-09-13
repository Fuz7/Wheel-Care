/* eslint-disable react/prop-types */
import bestSellerJorge from '@images/bestSellerJorge.svg'
import bestSellerAnimal from '@images/bestSellerAnimal.png'
import { forwardRef, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)
export default function BestSeller(){
  const containerRef = useRef(null)
  const cardContainerRef = useRef();

  useEffect(()=>{

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 30%", // Adjust this value to change when the animation starts
        end: "top 20%", // Adjust this value to change when the animation ends
        scrub: 1, // Smooth scrubbing, takes 1 second to "catch up" to the scrollbar
        markers: true, // Remove this in production
      }
    });

    // Animate all cards simultaneously
    tl.fromTo(cardContainerRef.current, 
      {opacity:0,scale:0},
      {scale:1,opacity:1,duration:1,ease:'back.out(1.7)'},
    );

  },[])

  return(
    <section ref={containerRef} className="mt-[2300px] flex flex-col gap-[50px]">
      <p className="self-center font-Poppins-SemiBold text-[48px]">Our Best Seller</p>
      <div  ref={cardContainerRef} className="flex gap-[52px] self-center">
        <Cards imgSrc={bestSellerJorge} title='Wheelchair for Dogs'
        titleTag='Rear Support' price='70' />
        <Cards imgSrc={bestSellerAnimal} title='Wheelchair for Dogs'
        titleTag='Rear Support' price='70' />
        <Cards imgSrc={bestSellerJorge} title='Wheelchair for Dogs'
        titleTag='Rear Support' price='70' />
        <Cards imgSrc={bestSellerJorge} title='Wheelchair for Dogs'
        titleTag='Rear Support' price='70' />
      </div>
    </section>
  )
} 

const Cards = forwardRef(({imgSrc,title,titleTag,price},ref)=> {
  return (<div 
    ref={ref}
    className="min-w-[300px] max-w-[300px] bg-white min-h-[503px] max-h-[503px]
    drop-shadow-[0_1px_4px_rgba(0,0,0,0.41)] flex flex-col items-center
    cursor-pointer transition-transform
          hover:scale-110 ">
      <img className=' max-w-[266px] min-w-[266px] min-h-[308px] max-h-[308px]
      drop-shadow-md mt-[18px]' src={imgSrc} alt="Best Seller" />
      <p className='font-Poppins-Bold mt-[20px] text-[20px]'>{title}</p>
      <p className='font-Poppins-Medium text-[20px]'>{titleTag}</p>
      <p className='font-Poppins text-[12px] mt-[16px]'>Starts At</p>
      <p className='font-Poppins-Bold text-[40px] text-[#6228B4]'> ${price}</p>
    </div>);
}
)

Cards.displayName = 'Cards'