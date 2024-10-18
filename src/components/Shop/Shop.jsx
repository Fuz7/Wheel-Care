/* eslint-disable react/prop-types */
import Rating from '@mui/material/Rating';
import ultraLight from '@images/ultraLight.png';
import aeroWheelchair from '@images/aeroWheelchair.png'
import racingChair from '@images/racingChair.png'
import standardWheelchair from '@images/standardWheelchair.png'
import celebralPalsyWheelchair from '@images/celebralPalsyWheelchair.png'
import cyberChair from '@images/cyberChair.png'
import dogWheelchair from '@images/dogWheelchair.png'
import hogRider from '@images/hogRider.png'
import happyWheels from '@images/happyWheels.png'
import billyHotChair from '@images/billyHotChair.png'
import adjustableWheelchair from '@images/adjustableWheelchair.png'
import guineaWheels from '@images/guineaWheels.png'
import { useRef,useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Shop() {
  return (
    <section className="min-h-[1000px] flex flex-col items-center">
      <div className="flex flex-col mt-[120px]  max-w-[1440px]">
        <WheelChairContainer />
        <PetWheelChairContainer />
      </div>
    </section>
  );
}

function WheelChairContainer() {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <div className="flex flex-col mb-[80px]">
      <div className="flex px-[40px] justify-between">
        <h2 className="font-Roboto font-semibold text-[30px]">Wheelchairs</h2>
        
        <div className="flex items-center gap-[4px]">
          <div
            className="flex justify-center items-center text-[20px]
            min-w-[41px] min-h-[36px] max-h-[36px] rounded-[10px] border
             border-black font-Roboto font-light cursor-pointer px-[9px]"
          >
            Prev
          </div>
          <div
            className="flex justify-center items-center text-[20px]
            min-w-[41px] min-h-[36px] max-h-[36px] rounded-[10px] border
             border-black font-Roboto font-light cursor-pointer
             bg-black text-white"
          >
            1
          </div>
          <div
            className="flex justify-center items-center text-[20px]
            min-w-[41px] min-h-[36px] max-h-[36px] rounded-[10px] border
             border-black font-Roboto font-light cursor-pointer"
          >
            2
          </div>
          <div
            className="flex justify-center items-center text-[20px]
            min-w-[41px] min-h-[36px] max-h-[36px] rounded-[10px] border
             border-black font-Roboto font-light cursor-pointer "
          >
            3
          </div>
          <div
            className="flex justify-center items-center text-[20px]
            min-w-[41px] min-h-[36px] max-h-[36px] rounded-[10px] border
             border-black font-Roboto font-light cursor-pointer px-[9px]"
          >
            Next
          </div>
        </div>
      </div>
      <div className="grid w-lvw gap-x-1 max-w-full px-[20px] grid-cols-2 md:grid-cols-3 self-center
      lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 max-h-[263px] overflow-hidden mt-[25px] ">
        <ShopCard
          name={'Ultra Light Wheelchair'}
          imgSrc={ultraLight}
          price="550"
          reviews={314}
          rating={4.7}
          tags={'Sports, Ultra lightweight, Folding'}
        />
        <Link to={'/shop/productSelected'}>
        <ShopCard
          name={'Aero Dynamic Wheelchair'}
          imgSrc={aeroWheelchair}
          price="900"
          reviews={131}
          rating={4.8}
          tags={'Sports, lightweight, Folding, Bestseller'}
        />
        </Link>
        <ShopCard
          name={'Cyber Wheelchair'}
          imgSrc={cyberChair}
          price="1100"
          reviews={91}
          rating={4.6}
          tags={'Cyberpunk, Heavy Duty'}
        />
        <ShopCard
          name={'Racing Wheelchair'}
          imgSrc={racingChair}
          price="90"
          reviews={83}
          rating={4.6}
          tags={'Sports, Ultra lightweight, Racing Wheelchair'}
        />
        <ShopCard
          name={'Standard Wheelchair'}
          imgSrc={standardWheelchair}
          price="200"
          reviews={74}
          rating={4.4}
          tags={'Everyday Use, Lightweight'}
        />
        <ShopCard
          name={'Celebral Palsy Wheelchair'}
          imgSrc={celebralPalsyWheelchair}
          price="400"
          reviews={21}
          rating={4.5}
          tags={'Everyday Use, Folding'}
        />
      </div>
    </div>
  );
}

function ShopCard({ name, imgSrc, price, rating, tags,reviews }) {
  const elementRef = useRef(null);

  const handleMouseEnter = () => {
    if (elementRef.current) {
      elementRef.current.classList.add('shopCardHovered');
    }
  };

  const handleMouseLeave = () => {
    if (elementRef.current) {
      elementRef.current.classList.remove('shopCardHovered');
    }
  };

  return (
    <div
      className="min-h-[263px] border border-black rounded-md
          flex flex-col items-center cursor-pointer relative overflow-hidden
          "
      ref={elementRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <p
        className="max-w-[95%] mt-4 text-nowrap overflow-hidden
             text-ellipsis  text-[16px] lg:text-[20px] 
            font-Roboto font-light max-h-[26px]"
      >
        {name}
      </p>
      <img className="mt-[5px] rounded-[1px] object-contain" src={imgSrc} alt="Wheelchair" />

      <span
        className="absolute bottom-[20px] left-0 min-w-full
        min-h-[190px] bg-[#6228b4cb] rounded-t-[2px] flex flex-col px-[15px] pt-[12px] pb-3
        items-center transition-transform translate-y-[150px]
        "
      >
        <p
          className="max-w-[200px] text-center text-white text-[24px] 
          font-Roboto font-extrabold"
        >
          ${price}
        </p>
        <div className="mt-[10px] flex items-center justify-center gap-1">
          <Rating
            readOnly
            defaultValue={rating}
            precision={0.1}
            size="large"
            sx={{
              '& .MuiRating-icon': {
                stroke: 'black', // Sets the border color of the star icons
                strokeWidth: '1px', // Sets the border width
              },
            }}
          />
          <p className="font-Roboto text-[16px] text-white">{rating}</p>
        </div>
        <p className='font-Roboto font-light mt-[5px]
         text-[14px] text-white'>{reviews} reviews</p>
        <p
          className="text-white mt-auto font-light 
        text-[14px]  "
        >
          Tags: {tags}
        </p>
      </span>
    </div>
  );
}

function PetWheelChairContainer() {
  return (
    <div
      className="mt-90px max-w-[1440px] w-lvw flex
        flex-col"
    >
      <div className="flex flex-col">
        <div className="flex justify-between">
          <h2 className="font-Roboto font-semibold text-[30px]">
            Pet Wheelchairs
          </h2>
          <div className="flex items-center gap-[4px]">
            <div
              className="flex justify-center items-center text-[20px]
            min-w-[41px] min-h-[36px] max-h-[36px] rounded-[10px] border
             border-black font-Roboto font-light cursor-pointer px-[9px]"
            >
              Prev
            </div>
            <div
              className="flex justify-center items-center text-[20px]
            min-w-[41px] min-h-[36px] max-h-[36px] rounded-[10px] border
             border-black font-Roboto font-light cursor-pointer
             bg-black text-white"
            >
              1
            </div>
            <div
              className="flex justify-center items-center text-[20px]
            min-w-[41px] min-h-[36px] max-h-[36px] rounded-[10px] border
             border-black font-Roboto font-light cursor-pointer"
            >
              2
            </div>
            <div
              className="flex justify-center items-center text-[20px]
            min-w-[41px] min-h-[36px] max-h-[36px] rounded-[10px] border
             border-black font-Roboto font-light cursor-pointer "
            >
              3
            </div>
            <div
              className="flex justify-center items-center text-[20px]
            min-w-[41px] min-h-[36px] max-h-[36px] rounded-[10px] border
             border-black font-Roboto font-light cursor-pointer px-[9px]"
            >
              Next
            </div>
          </div>
        </div>
        <div className="flex gap mt-[25px]">
          <Link to={'/'}>
            <ShopCard
              name={'Walking Wheels'}
              imgSrc={dogWheelchair}
              price="130"
              rating={4.5}
              reviews={120}
              tags={'Dog Wheelchair'}
            />
          </Link>
          <ShopCard
            name={'Hog Rider '}
            imgSrc={hogRider}
            price="320"
            reviews={112}
            rating={5.0}
            tags={'Pig Wheelchair'}
          />
          <ShopCard
            name={'Happy Wheels'}
            imgSrc={happyWheels}
            price="70"
            rating={4.4}
            tags={'Cat Wheelchair'}
          />
          <ShopCard
            name={'Billy Hot Wheels'}
            imgSrc={billyHotChair}
            price="60"
            reviews={24}
            rating={4.8}
            tags={'Duck Wheelchair'}
          />
          <ShopCard
            name={'Adjustable Wheelchair'}
            imgSrc={adjustableWheelchair}
            price="40"
            reviews={43}
            rating={4.7}
            tags={'Dog Wheelchair, Adjustable'}
          />
          <ShopCard
            name={'Guinea Wheels'}
            imgSrc={guineaWheels}
            reviews={75}
            price="20"
            rating={4.6}
            tags={'Hamster Wheelchair'}
          />
        </div>
      </div>
    </div>
  );
}
