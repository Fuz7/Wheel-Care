/* eslint-disable react/prop-types */
import bigCat1 from '@images/bigCat1.png';
import bigCat2 from '@images/bigCat2.png';
import bigCat3 from '@images/bigCat3.png';
import bigCat4 from '@images/bigCat4.png';
import smallCat1 from '@images/smallCat1.png';
import smallCat2 from '@images/smallCat2.png';
import smallCat3 from '@images/smallCat3.png';
import smallCat4 from '@images/smallCat4.png';
import whiteCheck from '@images/whiteCheck.svg';
import closeButton from '@images/closeButton.svg';
import catMeasurement from '@images/catMeasurement.svg';
import { AddToCartButton, BuyNowButton } from '../Shop/ProductSelected';
import { useEffect, useRef, useState } from 'react';
import { SetQuantityButtons } from '../Shop/ProductSelected';
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

export default function CustomizeCat() {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  const [showPopup, setShowPopup] = useState(false);
  return (
    <>
      <section
        className="min-h-[900px] min-w-[1440px]
      max-w-[1440px] mt-5 flex flex-col mx-auto"
      >
        <h2
          className="font-Roboto font-medium text-[60px]
        self-center "
        >
          Customize Cat Wheelchair
        </h2>
        <div className="flex mt-[40px] gap-[140px] ml-[80px]">
          <CustomizeCatImageContainer />
          <div className="flex flex-col max-h-[620px] pr-[50px] overflow-y-scroll">
            <CustomizeCatField setShowPopup={setShowPopup} />
            <CustomizeColorContainer />
            <CustomizeRadioSelection />
            <div className="flex gap-5 mt-[25px]">
              <h3 className="font-Roboto text-[24px] font-medium">Quantity</h3>
              <SetQuantityButtons />
            </div>
            <h3 className="font-Roboto font-medium mt-[20px] text-[24px]">
              Price
            </h3>
            <div className="font-Roboto font-medium text-[32px]">
              $900 - $1100
            </div>
            <div className="font-Roboto font-medium mt-[40px] flex gap-[26px]">
              <AddToCartButton />
              <BuyNowButton />
            </div>
          </div>
        </div>
      </section>
      <section className={`min-w-full min-h-full bg-[#0000008a]
         absolute top-0 left-0 z-10 ${showPopup?'visible':'invisible'}`}>
        <div
          className={`fixed top-[200px] left-[400px] rounded-[2px] 
       min-h-[420px] min-w-[1020px] bg-white pt-[30px] flex
        transition-transform ${showPopup?'scale-100':'scale-95'}`}
        >
          <img
            className="absolute right-[-18px] top-[-18px] cursor-pointer"
            src={closeButton}
            alt="Close Button"
            onClick={() => setShowPopup(false)}
          />
          <img
            className="max-w-[500px] max-h-[258px] ml-[37px] mt-[51px]"
            src={catMeasurement}
            alt=""
          />
          <div className="flex flex-col ml-[27px] gap-[16px]">
            <h3 className="font-Poppins-Medium text-[28px]">
              4 Basic Measurement
            </h3>
            <p className="max-w-[406px]">
              We only require 4 basic measurements. Please, just do the best as
              you can, and our expert staff will take it from there. As always,
              every Wheel Care Wheelchair is custom built, highly adjustable,
              and guaranteed to fit. Use <b>inches</b> as metric of measurement
            </p>
            <ol className="list-decimal ml-[36px] mt-[10px] flex flex-col gap-[6px]">
              <li className="text-[16px] font-Poppins max-w-[375px]">
                Height from top of back to ground
              </li>
              <li className="text-[16px] font-Poppins max-w-[375px]">
                Length between mid-point of hips and shoulders
              </li>
              <li className="text-[16px] font-Poppins max-w-[375px]">
                Width of body straight across at widest point.
              </li>
              <li className="text-[16px] font-Poppins max-w-[375px]">
                Girth or circumference around the body at widest point.
              </li>
            </ol>
          </div>
        </div>
      </section>
    </>
  );
}

function CustomizeCatImageContainer() {
  const [selectedImage, setSelectedImage] = useState(bigCat1);
  const containerRef = useRef(null);
  return (
    <div className="flex flex-col">
      <img src={selectedImage} ref={containerRef} alt="Selected Cat Image" />
      <div
        className="mt-[20px] min-w-[450px] min-h-[108px] flex 
        gap-[6px]"
      >
        <img
          className={`border-[8px] ${selectedImage === bigCat1 ? ' border-[#1660CF]' : 'border-[#d0d0d0]'} border-solid
            rounded-sm cursor-pointer`}
          onClick={() =>
            selectedImage != bigCat1
              ? animateSelectedImage(bigCat1, containerRef, setSelectedImage)
              : null
          }
          src={smallCat1}
          alt="Smol Cat"
        />
        <img
          className={`border-[8px] ${selectedImage === bigCat2 ? ' border-[#1660CF]' : 'border-[#d0d0d0]'} border-solid
            rounded-sm cursor-pointer`}
          onClick={() =>
            selectedImage != bigCat2
              ? animateSelectedImage(bigCat2, containerRef, setSelectedImage)
              : null
          }
          src={smallCat2}
          alt="Smol Cat"
        />
        <img
          className={`border-[8px] ${selectedImage === bigCat3 ? ' border-[#1660CF]' : 'border-[#d0d0d0]'} border-solid
            rounded-sm cursor-pointer`}
          onClick={() =>
            selectedImage != bigCat3
              ? animateSelectedImage(bigCat3, containerRef, setSelectedImage)
              : null
          }
          src={smallCat3}
          alt="Smol Cat"
        />
        <img
          className={`border-[8px] ${selectedImage === bigCat4 ? ' border-[#1660CF]' : 'border-[#d0d0d0]'} border-solid
            rounded-sm cursor-pointer`}
          onClick={() =>
            selectedImage != bigCat4
              ? animateSelectedImage(bigCat4, containerRef, setSelectedImage)
              : null
          }
          src={smallCat4}
          alt="Smol Cat"
        />
      </div>
    </div>
  );
}

function CustomizeCatField({setShowPopup}) {
  return (
    <>
      <h3 className="font-Roboto font-medium text-[26px]">Pet Name</h3>
      <input
        className="mt-[9px] min-w-[629px] rounded-[5px]
          bg-white min-h-[48px] pl-[12px] border-black
           border font-Poppins   text-[24px] "
        type="text"
      />
      <div className="flex items-center justify-between ">
        <h3 className="mt-[10px] text-2xl font-Roboto font-medium">
          {' '}
          Dimensions
        </h3>
        <h3
          className="font-Roboto font-light text-[16px] mt-[4px]
            cursor-pointer hover:underline text-[#1660CF]"
          onClick={()=> setShowPopup(true)}
        >
          Size Guide
        </h3>
      </div>
      <div className="flex gap-[17px] mt-[6px]">
        <div className="flex flex-col gap-[1px]">
          <h4>Girth</h4>
          <input
            className="max-w-[144px] min-h-[48px] bg-white border
                border-black rounded-[5px] pr-[10px] font-Poppins text-[24px]
                  text-right "
            type="text"
          />
        </div>
        <div className="flex flex-col gap-[1px]">
          <h4>Height</h4>
          <input
            className="max-w-[144px] min-h-[48px] bg-white border
                border-black rounded-[5px] pr-[10px] font-Poppins 
                text-right text-[24px]
                  "
            type="text"
          />
        </div>
        <div className="flex flex-col gap-[1px]">
          <h4>Width</h4>
          <input
            className="max-w-[144px] min-h-[48px] bg-white border
                border-black rounded-[5px] pr-[10px] 
                 text-right font-Poppins text-[24px]
                  "
            type="text"
          />
        </div>
        <div className="flex flex-col gap-[1px]">
          <h4>Lenght</h4>
          <input
            className="max-w-[144px] min-h-[48px] bg-white border
                border-black rounded-[5px] pr-[10px] text-right 
                font-Poppins text-[24px]
                  "
            type="text"
          />
        </div>
      </div>
    </>
  );
}

function CustomizeColorContainer() {
  const [checkedIndex, setCheckedIndex] = useState(null);
  return (
    <>
      <h3 className="mt-[10px] text-2xl font-Roboto font-medium"> Color</h3>
      <div className="flex mt-[10px] gap-4">
        <div
          onClick={() => setCheckedIndex(0)}
          className="min-h-[57px] min-w-[57px] bg-[#8C4433]
         rounded-full flex items-center justify-center cursor-pointer"
        >
          <img
            className={`${checkedIndex === 0 ? 'visible' : 'invisible'}`}
            src={whiteCheck}
            alt="Check"
          ></img>
        </div>
        <div
          onClick={() => setCheckedIndex(1)}
          className="min-h-[57px] min-w-[57px] bg-[#E0A2BB]
         rounded-full flex items-center justify-center cursor-pointer"
        >
          <img
            className={`${checkedIndex === 1 ? 'visible' : 'invisible'}`}
            src={whiteCheck}
            alt="Check"
          ></img>
        </div>
        <div
          onClick={() => setCheckedIndex(2)}
          className="min-h-[57px] min-w-[57px] bg-[#0641CA]
         rounded-full flex items-center justify-center cursor-pointer"
        >
          <img
            className={`${checkedIndex === 2 ? 'visible' : 'invisible'}`}
            src={whiteCheck}
            alt="Check"
          ></img>
        </div>
        <div
          onClick={() => setCheckedIndex(3)}
          className="min-h-[57px] min-w-[57px] bg-[#47B921]
         rounded-full flex items-center justify-center cursor-pointer"
        >
          <img
            className={`${checkedIndex === 3 ? 'visible' : 'invisible'}`}
            src={whiteCheck}
            alt="Check"
          ></img>
        </div>
        <div
          onClick={() => setCheckedIndex(4)}
          className="min-h-[57px] min-w-[57px] bg-[#2E2E2E]
         rounded-full flex items-center justify-center cursor-pointer"
        >
          <img
            className={`${checkedIndex === 4 ? 'visible' : 'invisible'}`}
            src={whiteCheck}
            alt="Check"
          ></img>
        </div>
      </div>
    </>
  );
}

function CustomizeRadioSelection() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  return (
    <>
      <div className="flex gap-[6px] mt-[20px]">
        <div
          className="min-w-[310px] min-h-[110px] border-[5px]
            border-solid border-[#999999] flex flex-col py-[14px]
             px-[19px] rounded-[5px] cursor-pointer"
          onClick={() => setSelectedIndex(0)}
        >
          <div className=" flex justify-between">
            <h4 className="text-[18px] font-Poppins-SemiBold">Heavy-Duty</h4>
            <div
              className="flex min-w-[18px] min-h-[18px] max-h-[18px]
                 border-[#999999] mt-[4px] items-center justify-center
                border border-solid rounded-full "
            >
              <span
                className={`min-w-[10px] min-h-[10px] bg-[#2E2E2E] rounded-full
                  ${selectedIndex === 0 ? 'visible' : 'invisible'}`}
              ></span>
            </div>
          </div>
          <p className="font-Poppins-Light text-[14px] mt-[3px] max-w-[228px]">
            For outdoor cats. Suited for uneven terrain.
          </p>
        </div>
        <div
          className="min-w-[310px] min-h-[110px] border-[5px]
            border-solid border-[#999999] flex flex-col py-[14px]
             px-[19px] rounded-[5px] cursor-pointer"
          onClick={() => setSelectedIndex(1)}
        >
          <div className=" flex justify-between">
            <h4 className="text-[18px] font-Poppins-SemiBold">
              Indoor Comfort
            </h4>
            <div
              className="flex min-w-[18px] min-h-[18px] max-h-[18px]
                 border-[#999999] mt-[4px] items-center justify-center
                border border-solid rounded-full "
            >
              <span
                className={`min-w-[10px] min-h-[10px] bg-[#2E2E2E] rounded-full
                  ${selectedIndex === 1 ? 'visible' : 'invisible'}`}
              ></span>
            </div>
          </div>
          <p className="font-Poppins-Light text-[14px] mt-[3px] max-w-[228px]">
            For indoor cats requiring gentle mobility support.
          </p>
        </div>
      </div>
    </>
  );
}
