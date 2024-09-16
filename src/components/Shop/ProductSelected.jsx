import smallPurpleAeroChair from '@images/smallPurpleAeroChair.png';
import smallRedAeroChair from '@images/smallRedAeroChair.png';
import smallBlueAeroChair from '@images/smallBlueAeroChair.png';
import bigPurpleAeroChair from '@images/bigPurpleAeroChair.png';
import bigBlueAeroChair from '@images/bigBlueAeroChair.png';
import bigRedAeroChair from '@images/bigRedAeroChair.png';
import plusButton from '@images/plusButton.png';
import minusButton from '@images/minusButton.png';
import Rating from '@mui/material/Rating';
import dropdown from '@images/navDropDown.png';
import lightweightTag from '@images/lightweightTag.png';
import bestSellerTag from '@images/bestSellerTag.png';
import addToCart from '@images/addToCart.svg';
import buyNow from '@images/buyNow.svg';
import { useRef, useState } from 'react';
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
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(bigPurpleAeroChair);
  const containerRef = useRef(null);
  return (
    <section
      className="min-h-[850px] min-w-[1440px]
     max-w-[1440px] mt-[40px] flex flex-col 
    mx-auto "
    >
      <div className="flex gap-[20px]">
        <div className="flex flex-col gap-[20px]">
          <img
            className="min-w-[64px] min-h-[64px] cursor-pointer"
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
            className="min-w-[64px] min-h-[64px] cursor-pointer"
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
            className="min-w-[64px] min-h-[64px] cursor-pointer"
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
        <div className="flex flex-col">
          <img
            className="min-w-[444px] min-h[444px] 
          max-w-[444px] max-h-[444px]"
            ref={containerRef}
            src={selectedImage}
            alt=""
          />
          <div className="flex gap-[11px] mt-[20px] ml-[60px] items-center">
            <p className="font-Roboto font-light text-[20px]">Quantity</p>
            <img
              className="cursor-pointer"
              src={minusButton}
              onClick={() =>
                setQuantity((quantity) =>
                  quantity > 0 ? quantity - 1 : quantity,
                )
              }
              alt="Minus Button"
            />
            <p className="font-Roboto text-[20px]">{quantity}</p>
            <img
              className="cursor-pointer"
              src={plusButton}
              onClick={() => setQuantity((quantity) => quantity + 1)}
              alt="Plus Button"
            />
          </div>
          <div className="flex gap-6 mt-[18px] ml-[60px]">
              <div className='min-w-[210px] min-h-[50px] flex
              items-center text-white font-Roboto font-black
               bg-[#6228B4] rounded-[2px] text-[24px] cursor-pointer'>
                <img src={addToCart} className='ml-[20px] mr-[8px] mb-[2px]' ></img>
                Add To Cart
              </div>
              <div className='min-w-[210px] min-h-[50px] flex
              items-center text-white font-Roboto font-black
               bg-[#6228B4] rounded-[2px] text-[24px] cursor-pointer'>
                <img src={buyNow} className='ml-[36px] mr-[8px] mb-[2px]' ></img>
                Buy Now
              </div>
         
          </div>
        </div>
        <div className="flex flex-col max-h-[850px] ml-[40px] mb-[50px] pb-[100px] overflow-auto">
          <ProductHeader />
          <div className="min-w-full min-h-[1px] bg-black"></div>
          <ProductDetails />
          <h3 className="font-Roboto font-medium text-[20px] mt-[40px]">
            Description
          </h3>
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
    </section>
  );
}

function ProductHeader() {
  return (
    <>
      <h2
        className="font-Roboto font-bold text-[48px]
        text-[#402DB5]"
      >
        AERO DYNAMIC WHEELCHAIR
      </h2>
      <div className="flex items-center gap-1">
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
      <div className="flex mt-[4px] gap-[20px]">
        <img src={bestSellerTag} alt="Best Seller Tag" />
        <img src={lightweightTag} alt="Lightweight Tag" />
      </div>
    </>
  );
}

function ProductDetails() {
  return (
    <>
      <div className="flex gap-3 mt-1">
        <div className=" font-Roboto mt-[5px] font-light text-[18px]">
          Price:
        </div>
        <div className="font-Roboto font-medium text-[30px]">$900 - $1100</div>
      </div>
      <h3 className="font-Roboto font-medium text-[20px] mt-[12px]">
        Product Details
      </h3>
      <div className="flex gap-10 mt-[12px]">
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
      <div className="flex  mt-[12px] gap-5">
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
      <div className="flex  mt-[12px]">
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
      <div className="flex  mt-[12px] gap-[22px]">
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
