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
import { useRef } from 'react';
import { Link } from 'react-router-dom';

export default function Shop() {
  return (
    <section className="min-h-[1000px] flex flex-col items-center">
      <div className="flex flex-col mt-[60px]  max-w-[1440px] min-w-[1440px]">
        <WheelChairContainer />
        <PetWheelChairContainer />
      </div>
    </section>
  );
}

function WheelChairContainer() {
  return (
    <div className="flex flex-col mb-[80px]">
      <div className="flex justify-between">
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
      <div className="flex gap mt-[25px]">
        <ShopCard
          name={'Ultra Light Wheelchair'}
          imgSrc={ultraLight}
          price="550"
          rating={4.7}
          tags={'Sports, Ultra lightweight, Folding'}
        />
        <Link to={'/shop/itemSelected'}>
        <ShopCard
          name={'Aero Dynamic Wheelchair'}
          imgSrc={aeroWheelchair}
          price="900"
          rating={4.8}
          tags={'Sports, lightweight, Folding, Bestseller'}
        />
        </Link>
        <ShopCard
          name={'Cyber Wheelchair'}
          imgSrc={cyberChair}
          price="1100"
          rating={4.6}
          tags={'Cyberpunk, Heavy Duty'}
        />
        <ShopCard
          name={'Racing Wheelchair'}
          imgSrc={racingChair}
          price="90"
          rating={4.6}
          tags={'Sports, Ultra lightweight, Racing Wheelchair'}
        />
        <ShopCard
          name={'Standard Wheelchair'}
          imgSrc={standardWheelchair}
          price="200"
          rating={4.4}
          tags={'Everyday Use, Lightweight'}
        />
        <ShopCard
          name={'Celebral Palsy Wheelchair'}
          imgSrc={celebralPalsyWheelchair}
          price="400"
          rating={4.5}
          tags={'Everyday Use, Folding'}
        />
      </div>
    </div>
  );
}

function ShopCard({ name, imgSrc, price, rating, tags }) {
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
      className="min-w-[240px] min-h-[263px] border border-black
          flex flex-col items-center cursor-pointer relative overflow-hidden
          "
      ref={elementRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <p
        className="max-w-[200px] mt-4 text-nowrap overflow-hidden
             text-ellipsis  text-[20px] 
            font-Roboto font-light max-h-[26px]"
      >
        {name}
      </p>
      <img className="mt-[5px] rounded-[1px]" src={imgSrc} alt="Wheelchair" />
      <p className="mt-auto mb-[5px] font-Roboto  text-[20px]">${price}</p>
      <span
        className="absolute bottom-0 left-0 min-w-[240px]
        min-h-[150px] bg-[#000000b2] flex flex-col px-[15px] pt-4 pb-3
        items-center transition-transform translate-y-[150px]
        "
      >
        <p
          className="max-w-[200px] text-center text-white text-[16px] 
          font-Roboto font-light"
        >
          {name}
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
          <p className="font-Roboto text-[14px] text-white">{rating}</p>
        </div>
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
      className="mt-90px max-w-[1440px] min-w-[1440px] flex
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
              tags={'Dog Wheelchair'}
            />
          </Link>
          <ShopCard
            name={'Hog Rider '}
            imgSrc={hogRider}
            price="320"
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
            rating={4.8}
            tags={'Duck Wheelchair'}
          />
          <ShopCard
            name={'Adjustable Wheelchair'}
            imgSrc={adjustableWheelchair}
            price="40"
            rating={4.7}
            tags={'Dog Wheelchair, Adjustable'}
          />
          <ShopCard
            name={'Guinea Wheels'}
            imgSrc={guineaWheels}
            price="20"
            rating={4.6}
            tags={'Hamster Wheelchair'}
          />
        </div>
      </div>
    </div>
  );
}
