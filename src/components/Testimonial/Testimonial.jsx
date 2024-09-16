/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import climbStairs from '@images/climbStairs.png';
import testimonialYTlogo from '@images/testimonialYTlogo.svg';
import testimonialIcon4 from '@images/testimonialIcon4.png';
export default function Testimonial() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section
      className="min-h-[900px] min-w-[1440px]
    max-w-[1440px] mt-5 flex flex-col mx-auto"
    >
      <h2 className="font-Roboto font-medium text-[48px] self-center">
        Testimonial
      </h2>
      <div className="px-[150px]">
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard
          img={climbStairs}
          headerText={
            'The Worlds Most Advanced Wheelchair! - (It Climbs Stairs!?!)'
          }
          pArray={[
            `Its been awhile since real innovation has happened in the wheelchair
             space. @WheelCare is here to change that with the worlds most advanced
              self balancing stair climbing wheelchair. This high tech wheelchair has
               been on my radar for a few years now - its amazing to finally see it in
                action. Climbing stairs - going off road... see for yourself! Nice work
                 WheelCare!
           `,
          ]}
          name="Jerry Rig Everything"
          email="JerryRigEverything"
          icon={testimonialIcon4}
          platform={testimonialYTlogo}
          date={'February 28, 2023'}
        />
      </div>
    </section>
  );
}

function TestimonialCard({
  img,
  headerText,
  pArray,
  name,
  email,
  platform,
  date,
  icon,
}) {
  return (
    <div
      className="inline-block min-w-[350px] max-w-[350px]
  border border-black shadow-[16px_16px_4px_rgba(0,0,0,0.25)]
  mr-2 mb-2 align-top rounded-[5px]
  "
    >
      <div className="flex flex-col p-[22px]">
        {img ? <img className="mb-[9px]" src={img}></img> : null}
        {headerText ? (
          <p className="font-Roboto font-semibold text-[20px] mb-[14px]">
            {headerText}
          </p>
        ) : null}
        {pArray
          ? pArray.map((text, index) => (
              <p
                key={text + index}
                className="font-Roboto text-[16px] mb-[16px] 
                 text-justify indent-10"
              >
                {text}
              </p>
            ))
          : null}
        <div className="min-h-[43px] max-h-[50px] flex mt-[10px] justify-between">
          <div className="flex flex-col">
            <p className="font-Roboto font-medium text-[12px]">{name}</p>
            <p className="font-Roboto text-[10px] ">@{email}</p>
            <div className="flex mt-[2x] gap-[4px]">
              {platform ? (
                <img
                  className="w-[13px] h-[13px]"
                  src={platform}
                  alt="platform"
                ></img>
              ) : (
                <span className="w-[13px] h-[13px]"></span>
              )}
              <p className="font-Roboto text-[10px] text-[#666666]">{date}</p>
            </div>
          </div>
        {icon?(<img className='max-w-[40px] max-h-[40px]' src={icon} alt='Icon'></img>): null}
        </div>
      </div>
    </div>
  );
}
