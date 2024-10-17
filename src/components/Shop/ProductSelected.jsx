/* eslint-disable react/prop-types */
import smallPurpleAeroChair from '@images/smallPurpleAeroChair.png';
import smallRedAeroChair from '@images/smallRedAeroChair.png';
import smallBlueAeroChair from '@images/smallBlueAeroChair.png';
import bigPurpleAeroChair from '@images/bigPurpleAeroChair.png';
import bigBlueAeroChair from '@images/bigBlueAeroChair.png';
import bigRedAeroChair from '@images/bigRedAeroChair.png';
import plusButton from '@images/plusButton.png';
import minusButton from '@images/minusButton.png';
import mobilePlusButton from '@images/mobile/mobilePlusButton.svg'
import mobileMinusButton from '@images/mobile/mobileMinusButton.svg'
import Rating from '@mui/material/Rating';
import dropdown from '@images/navDropDown.png';
import lightweightTag from '@images/lightweightTag.png';
import bestSellerTag from '@images/bestSellerTag.png';
import addToCart from '@images/addToCart.svg';
import mobileAddToCart from '@images/mobile/mobileAddToCart.jpg'
import buyNow from '@images/buyNow.svg';
import mobileBuyNow from '@images/mobile/mobileBuyNow.png'
import { useRef, useState,useEffect } from 'react';
import gsap from 'gsap';

function animateSelectedImage(imgSrc, containerRef, setSelectedImage) {
  gsap.to(containerRef.current, {
    duration: 0.2,
    opacity: 0,
    onComplete: () => {
      setSelectedImage(imgSrc);
      gsap.to(containerRef.current, {
        duration: 0.2,
        opacity: 1,
      });
    },
  });
}

export default function ItemSelected() {
  const [selectedImage, setSelectedImage] = useState(bigPurpleAeroChair);
  const containerRef = useRef(null);
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <section
      className="min-h-[1050px] 
     max-w-[1440px] mt-[260px] lg:mt-[100px] flex flex-col 
    mx-auto "
    >
      <div className="flex flex-col lg:flex-row 
      
       lg:items-start gap-[20px]">
        <div className="flex [margin-left:clamp(20px,5.5vw,60px)] lg:ml-[20px] 
        flex-row lg:flex-col order-2 lg:order-none gap-[20px]">
          <img
            className="max-w-[64px] min-h-[64px] cursor-pointer"
            src={smallPurpleAeroChair}
            alt="Small Image"
            onClick={() =>
              selectedImage !== bigPurpleAeroChair
                ? animateSelectedImage(
                    bigPurpleAeroChair,
                    containerRef,
                    setSelectedImage,
                  )
                : null
            }
          />
          <img
            className="max-w-[64px] min-h-[64px] cursor-pointer"
            src={smallBlueAeroChair}
            alt="Small Image"
            onClick={() =>
              selectedImage !== bigBlueAeroChair
                ? animateSelectedImage(
                    bigBlueAeroChair,
                    containerRef,
                    setSelectedImage,
                  )
                : null
            }
          />
          <img
            className="max-w-[64px] min-h-[64px] cursor-pointer"
            src={smallRedAeroChair}
            alt="Small Image"
            onClick={() =>
              selectedImage !== bigRedAeroChair
                ? animateSelectedImage(
                    bigRedAeroChair,
                    containerRef,
                    setSelectedImage,
                  )
                : null
            }
          />
        </div>
        <div className="flex order-1 lg:order-none flex-col">
          <img
            className="w-[444px]"
            ref={containerRef}
            src={selectedImage}
            alt=""
          />
          <div className="hidden lg:flex  gap-[11px] mt-[20px] [margin-left:clamp(20px,5.5vw,60px)] items-center">
            <p className="font-Roboto font-light text-[20px]">Quantity</p>
            <SetQuantityButtons imageSize={32} fontSize={20} mobile={false} />
          </div>
          <div className="hidden lg:flex gap-6 mt-[18px] [margin-left:clamp(20px,5.5vw,60px)]">
            <AddToCartButton />
            <BuyNowButton />
          </div>
        </div>
        <div className="flex flex-col order-3 lg:order-none 
         lg:pl-0 lg:max-h-[850px] pr-[20px] 
        lg:ml-[40px] mb-[50px] pb-[100px] lg:overflow-auto">
          <ProductHeader />
          <div className="min-w-full min-h-[1px] [margin-left:clamp(20px,5.5vw,60px)] lg:ml-0 lg:order-none order-5 bg-black"></div>
          <ProductDetails />
          <h3 className="font-Roboto font-medium order-10 [margin-left:clamp(20px,5.5vw,60px)] lg:ml-0 lg:order-none
           text-[20px] mt-[40px]">
            Description
          </h3>
          <div className='order-11 [margin-left:clamp(20px,5.5vw,60px)] lg:ml-0 lg:order-none'>
          <p className="font-Roboto mt-[20px] font-extralight text-[18px]">
            The AeroSculpt Chair redefines modern seating with its cutting-edge
            aerodynamic design, merging form and function to deliver an
            unparalleled sitting experience. Inspired by the sleek lines and
            fluid dynamics of high-performance aircraft, the AeroSculpt Chair
            features a streamlined silhouette that minimizes resistance and
            maximizes comfort.
          </p>
          <p className="font-Roboto  mt-[20px] font-extralight text-[18px]">
            Crafted from advanced composite materials, the chair boasts a
            lightweight yet robust frame that ensures durability while enhancing
            its sleek, futuristic aesthetic. The innovative contour of the seat
            and backrest promotes optimal airflow and reduces heat buildup,
            keeping you cool and comfortable during long periods of use.
          </p>
          </div>
        </div>
      </div>
      <div className='lg:invisible h-[60px]   
      fixed left-0 bottom-[-1px]
       w-full flex items-center'>
        <div className='flex min-h-full gap-[9px]
         justify-center items-center bg-[white] px-[12px] flex-grow'>
          <p className='font-Roboto text-[20px]'>Qty:</p>
          <SetQuantityButtons imageSize={32} fontSize={20} mobile={true} />
        </div>
        <div className='flex justify-center items-center w-[1px] h-full bg-white'>
        <div className='w-[1px] h-[80%] bg-[#6228B4] '></div>
        </div>
        <div className='px-[12px] h-full font-Roboto font-bold text-[12px]
        text-[#6228B4] flex-grow-[0.5]
        bg-[white] flex flex-col items-center justify-center'>
          <img className='w-[24px]' src={mobileAddToCart} alt="" />
          <div>Add To Cart</div>
        </div>
        <div className='flex justify-center items-center gap-[7px] bg-[#6228B4]
        h-full w-fit px-[12px] flex-grow'>
          <img className='w-[30px] h-[30px]' src={mobileBuyNow} alt="" />
          <p className='text-[16px] text-white font-Roboto font-bold'>Buy Now</p>
        </div>
      </div>

    </section>
  );
}

function ProductHeader() {
  return (
    <>
      <h2
        className="font-Roboto font-bold text-[36px] lg:text-[48px] 
        min-w-full lg:min-w-0 pl-[10px] lg:px-0
        text-[#402DB5] text-center lg:text-start absolute lg:static top-[100px]"
      >
        AERO DYNAMIC WHEELCHAIR
      </h2>
      <div className="flex items-center lg:items gap-1 [margin-left:clamp(20px,5.5vw,60px)] lg:ml-0 lg:order-none order-2">
        <p className="font-Roboto text-[18px] font mt-[1px]">4.8</p>
        <Rating readOnly defaultValue={4.8} precision={0.1} size="medium" />
        <img src={dropdown} alt="" />
        <div className="min-h-full ml-[8px] min-w-[1px] bg-black"></div>
        <p
          className="font-Roboto font-light text-[18px] text-[#1660CF]
          cursor-pointer ml-[12px]"
        >
          167 ratings
        </p>
      </div>
      <div className="flex mt-[4px] [margin-left:clamp(20px,5.5vw,60px)] lg:ml-0 lg:order-none order-3  flex-wrap">
        <img className='mr-[20px]' src={bestSellerTag} alt="Best Seller Tag" />
        <img src={lightweightTag} alt="Lightweight Tag" />
      </div>
    </>
  );
}

function ProductDetails() {
  return (
    <>
      <div className="flex gap-3 mt-1 [margin-left:clamp(20px,5.5vw,60px)] lg:ml-0 lg:order-none order-1">
        <div className=" font-Roboto mt-[5px] font-light text-[18px]">
          Price:
        </div>
        <div className="font-Roboto font-medium text-[30px]">$900 - $1100</div>
      </div>
      <h3 className="font-Roboto font-medium order-5 [margin-left:clamp(20px,5.5vw,60px)] lg:ml-0 lg:order-none text-[20px] mt-[12px]">
        Product Details
      </h3>
      <div className="flex gap-10 order-6 [margin-left:clamp(20px,5.5vw,60px)] lg:ml-0 lg:order-none mt-[12px]">
        <h4 className="font-Roboto font-light text-[18px]">Design</h4>
        <ul className="ml-[50px] max-w-[540px]">
          <li
            className="font-Roboto relative
               font-extralight  text-[18px] "
          >
            Aircraft-inspired aerodynamic profile.
            <span
              className="absolute min-w-[4px] min-h-[4px] bg-[#3a3a3a]
                rounded-full left-[-14px] top-[12px]"
            ></span>
          </li>
          <li
            className="font-Roboto relative
               font-extralight  text-[18px] "
          >
            Streamlined silhouette for minimal resistance and enhanced comfort
            <span
              className="absolute min-w-[4px] min-h-[4px] bg-[#3a3a3a]
                rounded-full left-[-14px] top-[12px]"
            ></span>
          </li>
        </ul>
      </div>
      <div className="flex  mt-[12px] order-7 [margin-left:clamp(20px,5.5vw,60px)] lg:ml-0 lg:order-none gap-5">
        <h4 className="font-Roboto font-light text-[18px]">Materials</h4>
        <ul className="ml-[50px] max-w-[540px]">
          <li
            className="font-Roboto relative
               font-extralight  text-[18px] "
          >
            Carbon fiber composite and aluminum alloy frame.
            <span
              className="absolute min-w-[4px] min-h-[4px] bg-[#3a3a3a]
                rounded-full left-[-14px] top-[12px]"
            ></span>
          </li>
          <li
            className="font-Roboto relative
               font-extralight  text-[18px] "
          >
            Memory foam cushioning with cooling gel.
            <span
              className="absolute min-w-[4px] min-h-[4px] bg-[#3a3a3a]
                rounded-full left-[-14px] top-[12px]"
            ></span>
          </li>
          <li
            className="font-Roboto relative
               font-extralight  text-[18px] "
          >
            High-gloss or matte paint finish
            <span
              className="absolute min-w-[4px] min-h-[4px] bg-[#3a3a3a]
                rounded-full left-[-14px] top-[12px]"
            ></span>
          </li>
        </ul>
      </div>
      <div className="flex order-8 [margin-left:clamp(20px,5.5vw,60px)] lg:ml-0 lg:order-none  mt-[12px]">
        <h4 className="font-Roboto font-light text-[18px]">Dimensions</h4>
        <ul className="ml-[50px] max-w-[540px]">
          <li
            className="font-Roboto relative
               font-extralight  text-[18px] "
          >
            Seat Width: 18 inches (46 cm)
            <span
              className="absolute min-w-[4px] min-h-[4px] bg-[#3a3a3a]
                rounded-full left-[-14px] top-[12px]"
            ></span>
          </li>
          <li
            className="font-Roboto relative
               font-extralight  text-[18px] "
          >
            Seat Depth: 16 inches (41 cm)
            <span
              className="absolute min-w-[4px] min-h-[4px] bg-[#3a3a3a]
                rounded-full left-[-14px] top-[12px]"
            ></span>
          </li>
          <li
            className="font-Roboto relative
               font-extralight  text-[18px] "
          >
            Height Adjustment: 15-20 inches (38-51 cm)
            <span
              className="absolute min-w-[4px] min-h-[4px] bg-[#3a3a3a]
                rounded-full left-[-14px] top-[12px]"
            ></span>
          </li>
          <li
            className="font-Roboto relative
               font-extralight  text-[18px] "
          >
            {`Folded Size (optional): 24" x 24" x 10" (61 cm x 61 cm x 25 cm)`}
            <span
              className="absolute min-w-[4px] min-h-[4px] bg-[#3a3a3a]
                rounded-full left-[-14px] top-[12px]"
            ></span>
          </li>
          <li
            className="font-Roboto relative
               font-extralight  text-[18px] "
          >
            Weight: 22 lbs (10 kg)
            <span
              className="absolute min-w-[4px] min-h-[4px] bg-[#3a3a3a]
                rounded-full left-[-14px] top-[12px]"
            ></span>
          </li>
        </ul>
      </div>
      <div className="flex order-9 [margin-left:clamp(20px,5.5vw,60px)] lg:ml-0 lg:order-none  mt-[12px] gap-[22px]">
        <h4 className="font-Roboto font-light text-[18px]">Warranty</h4>
        <ul className="ml-[50px] max-w-[540px]">
          <li
            className="font-Roboto relative
               font-extralight  text-[18px] "
          >
            12-year coverage including parts and labor.
            <span
              className="absolute min-w-[4px] min-h-[4px] bg-[#3a3a3a]
                rounded-full left-[-14px] top-[12px]"
            ></span>
          </li>
        </ul>
      </div>
    </>
  );
}

export function SetQuantityButtons({fontSize,imageSize,mobile}){
  const [quantity, setQuantity] = useState(1);
  return(
    <>
            <img
              className={`cursor-pointer min-h-[${imageSize}px] 
              min-w-[${imageSize}px]`}
              
              src={mobile?mobileMinusButton:minusButton}
              onClick={() =>
                setQuantity((quantity) =>
                  quantity > 1 ? quantity - 1 : quantity,
                )
              }
              alt="Minus Button"
            />
            <p className={`font-Roboto text-[${fontSize}px]`}>{quantity}</p>
            <img
              className={`cursor-pointer min-w-[${imageSize}px] 
              min-h-[${imageSize}px]`}
              
              src={mobile?mobilePlusButton:plusButton}
              onClick={() => setQuantity((quantity) => quantity + 1)}
              alt="Plus Button"
            />
    </>
  )
}

export function BuyNowButton() {
  return (
    <div
      className="min-w-[210px] min-h-[50px] flex
              items-center text-white font-Roboto font-black
               bg-[#6228B4] rounded-[2px] text-[24px] cursor-pointer"
    >
      <img src={buyNow} className="ml-[36px] mr-[8px] mb-[2px]"></img>
      Buy Now
    </div>
  );
}

export function AddToCartButton() {
  return (
    <div
      className="min-w-[210px] min-h-[50px] flex
              items-center text-white font-Roboto font-black
               bg-[#6228B4] rounded-[2px] text-[24px] cursor-pointer"
    >
      <img src={addToCart} className="ml-[20px] mr-[8px] mb-[2px]"></img>
      Add To Cart
    </div>
  );
}
