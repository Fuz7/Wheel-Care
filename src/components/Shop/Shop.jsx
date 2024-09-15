/* eslint-disable react/prop-types */
import ultraLight from '@images/ultraLight.png';
import Rating from '@mui/material/Rating';
import { useRef } from 'react';
export default function Shop() {
  return (
    <section className="min-h-[1000px] flex flex-col items-center">
      <div className="flex flex-col mt-[120px]  max-w-[1440px] min-w-[1440px]">
        <WheelChairContainer />
      </div>
    </section>
  );
}

function WheelChairContainer() {
  return (
    <div className="flex flex-col mb-[16px]">
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
             border-black font-Roboto font-light cursor-pointer"
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
          price="90"
          rating={4.6}
          tags={'Sports, Ultra lightweight, Folding'}
        />
        <ShopCard
          name={'Ultra Light Wheelchair'}
          imgSrc={ultraLight}
          price="90"
          rating={4.6}
          tags={'Sports, Ultra lightweight, Folding'}
        />
        <ShopCard
          name={'Ultra Light Wheelchair'}
          imgSrc={ultraLight}
          price="90"
          rating={4.6}
          tags={'Sports, Ultra lightweight, Folding'}
        />
        <ShopCard
          name={'Ultra Light Wheelchair'}
          imgSrc={ultraLight}
          price="90"
          rating={4.6}
          tags={'Sports, Ultra lightweight, Folding'}
        />
        <ShopCard
          name={'Ultra Light Wheelchair'}
          imgSrc={ultraLight}
          price="90"
          rating={4.6}
          tags={'Sports, Ultra lightweight, Folding'}
        />
        <ShopCard
          name={'Ultra Light Wheelchair'}
          imgSrc={ultraLight}
          price="90"
          rating={4.6}
          tags={'Sports, Ultra lightweight, Folding'}
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
      <img className="mt-[5px]" src={imgSrc} alt="Wheelchair" />
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
          <p className='font-Roboto text-[14px] text-white'>{rating}</p>
        </div>
        <p className='text-white mt-auto font-light 
        text-[14px]  '>Tags: {tags}</p>
      </span>
    </div>
  );
}
