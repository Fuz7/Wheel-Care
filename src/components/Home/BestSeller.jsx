/* eslint-disable react/prop-types */
import { forwardRef, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import bestSellerCart from '@images/bestSellerCart.png';
import bestSellerGaming from '@images/bestSellerGaming.png';
import bestSellerPower from '@images/bestSellerPower.png';
import Rating from '@mui/material/Rating';
gsap.registerPlugin(ScrollTrigger);
export default function BestSeller() {
  const containerRef = useRef(null);
  const cardContainerRef = useRef();

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 40%', // Adjust this value to change when the animation starts
        end: 'top 30%', // Adjust this value to change when the animation ends
        scrub: 1, // Smooth scrubbing, takes 1 second to "catch up" to the scrollbar
        markers: true, // Remove this in production
      },
    });

    // Animate all cards simultaneously
    tl.fromTo(
      cardContainerRef.current,
      { opacity: 0.0 },
      { opacity: 1, duration: 1, ease: 'back.out(1.7)' },
    );
  }, []);

  return (
    <section
      ref={containerRef}
      className="mt-[2300px] flex flex-col gap-[50px]"
    >
      <h2 className="self-center font-Poppins-SemiBold text-[48px]">
        Our Best Seller
      </h2>
      <div ref={cardContainerRef} className="flex gap-[75px] self-center">
        <Cards
          imgSrc={bestSellerCart}
          title="Cart Wheelchair"
          rating={4.8}
          price="120"
          review='134'
        />
        <Cards
          imgSrc={bestSellerPower}
          title="Powered Wheelchair"
          rating={4.8}
          price="190"
          review='192'
        />
        <Cards
          imgSrc={bestSellerGaming}
          title="Gaming Wheelchair"
          rating={4.7}
          price="160"
          review='121'
        />
      </div>
    </section>
  );
}

const Cards = forwardRef(({ imgSrc, title, rating, price, review }, ref) => {
  return (
    <div
      ref={ref}
      className="min-w-[353px] max-w-[353px] bg-white min-h-[437px] max-h-[437px]
    drop-shadow-[0_1px_4px_rgba(0,0,0,0.41)] flex flex-col items-center
    cursor-pointer transition-transform
           hover:translate-y-[-5px]  "
    >
      <img
        className=" max-w-[250px] min-w-[250px] min-h-[250px] max-h-[250px]
      drop-shadow-md mt-[18px]"
        src={imgSrc}
        alt="Best Seller"
      />
      <p className="font-Poppins-Bold mt-[20px] text-[20px]">{title}</p>
      <div className="flex justify-center gap-4 items-end">
        <Rating
          className="mt-[12px]"
          readOnly
          defaultValue={rating}
          precision={0.1}
          size="large"
          sx={{}}
        />
        <p className="font-Roboto text-[18px] mb-[1px]">{rating}</p>
      </div>
        <p className="mt-[10px] font-Poppins text-[11px] text-[#000000b7]">
          {review} reviews
        </p>
      <p className="font-Poppins-Bold text-[32px] text-[#6228B4]"> ${price}</p>
    </div>
  );
});

Cards.displayName = 'Cards';
