/* eslint-disable react/prop-types */
import jamesOliver from '@images/jamesOliver.png';
import carlJohnson from '@images/carlJohnson.png';
import neilMaute from '@images/neilMaute.png';
import jayraldDionaldo from '@images/jayraldDionaldo.png';
import xLogo from '@images/X.png';
import instragramLogo from '@images/Instagram.png';
import facebookLogo from '@images/Facebook.png';
import linkedInLogo from '@images/LinkedIn.png';

import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

export default function TheTeam() {
  const [pressed, setPressed] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const isMobile = useMediaQuery({ query: '(max-width:900px)' });

  useEffect(() => {
    let handleResize = null;
    if (isMobile) {
      handleResize = () => {
        setWindowWidth(window.innerWidth);
      };
      window.addEventListener('resize', handleResize);
    }
    return () => {
      if (handleResize) {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, [isMobile]);

  return (
    <section className="mt-[150px] lg:mt-[300px] flex flex-col items-center">
      <h2 className="font-Poppins-SemiBold text-[40px] lg:text-[48px]">
        Meet The Team
      </h2>
      <div
        className={`flex mt-[40px] lg:mt-[120px] 
          ${isMobile ? 'max-w-full' : 'max-w-[1620px] min-w-[1620px]'}
      min-h-fit max-h-fit overflow-hidden`}
      >
        <div
          className="flex transition-transform ease-out duration-300 max-h-fit"
          style={{
            transform: `translate(-${isMobile ? pressed * windowWidth : pressed * 850}px, 0px)`,
          }}
        >
          <TheTeamCard
            imgSrc={jamesOliver}
            name={'James Oliver Mendoza'}
            index={0}
            role={'Baby Boy'}
            pressed={pressed}
            isMobile={isMobile}
            skills={'Warcry, Berskers Call, Counter Helix, Culling Blade'}
            description={`Meet our youngest and most adorable team member, 
              Baby Boy! Though
              his expertise may still be in the works, he brings endless joy,
              energy, and laughter to our team. Always curious and full of
              wonder, Baby Boy reminds us to approach challenges with a fresh
              perspective. Whether it's a contagious giggle or a tiny fist bump,
              he's the heart of our crew, spreading positivity in every task
              (and nap time).`}
          />
          <TheTeamCard
            imgSrc={carlJohnson}
            name={`Carl "DM" Johnson`}
            index={1}
            pressed={pressed}
            isMobile={isMobile}
            role={'Groove Street Gangster'}
            skills={
              'AEZAKMI, BUBBLE CAR, BUFFMEUP,  HESOYAM, LIFESABEACH, TOODAMNHOT'
            }
            description={`The Cool and Confident Strategist, Meet our Groove
               Street Gangster, the epitome of street smarts and smooth moves. 
               With an eye for strategy and a knack for keeping it real, he brings
              his unique flair to the team, always calm under pressure and ready
                to take on any challenge. Whether it's problem-solving or 
                brainstorming the next big idea, Groove Street Gangster handles
                it with confidence and style, making sure the team stays on track 
                and in the groove.`}
          />
          <TheTeamCard
            imgSrc={neilMaute}
            name={'Neil Robert Maute'}
            index={2}
            isMobile={isMobile}
            role={'Maute Sniper'}
            pressed={pressed}
            skills={
              'Stealth, Camouflage, 360 NOSCOPE, Trigonometry Expert, Quickshot'
            }
            description={`Introducing Maute Sniper, the sharp-eyed marksman 
              of the team. With unmatched focus and attention to detail, he
               never misses his mark. Whether it's executing tasks with pinpoint 
               accuracy or delivering results with speed and stealth, Maute Sniper 
               ensures everything is on target. His calm demeanor and tactical 
               mindset make him the go-to guy for tackling complex challenges and
                ensuring the team's success, one precise shot at a time.`}
          />
          <TheTeamCard
            imgSrc={jayraldDionaldo}
            name={'Jayrald Dionaldo'}
            isMobile={isMobile}
            index={3}
            role={'Electric Fan Repairman'}
            pressed={pressed}
            skills={'solda , pilit og tape,  flux inhaler, '}
            description={`Meet our Electric Fan Repairman, the master of keeping 
              things running smoothly and cool under pressure.
               His expertise in troubleshooting and repairing makes him an 
               invaluable asset to the team, always ready to tackle any problem
                with a breeze. When it comes to solutions and reliability, 
                Electric Fan Repairman is the one you can count on.`}
          />
        </div>
      </div>
      <div className="flex mt-[20px] gap-[10px]">
        <span
          onClick={() => setPressed(0)}
          className="min-w-[36px] min-h-[36px] rounded-[100px]
        border border-solid border-black cursor-pointer relative"
        >
          <span
            className={`absolute ${pressed === 0 ? 'visible' : 'invisible'}
          top-[4px] left-[4px] min-h-[26px] min-w-[26px]
          bg-black rounded-[100px]`}
          ></span>
        </span>
        <span
          onClick={() => setPressed(1)}
          className="min-w-[36px] min-h-[36px] rounded-[100px]
        border border-solid border-black cursor-pointer relative"
        >
          <span
            className={`absolute ${pressed === 1 ? 'visible' : 'invisible'}
          top-[4px] left-[4px] min-h-[26px] min-w-[26px]
          bg-black rounded-[100px]`}
          ></span>
        </span>
        <span
          onClick={() => setPressed(2)}
          className="min-w-[36px] min-h-[36px] rounded-[100px]
        border border-solid border-black cursor-pointer relative"
        >
          <span
            className={`absolute ${pressed === 2 ? 'visible' : 'invisible'}
          top-[4px] left-[4px] min-h-[26px] min-w-[26px]
          bg-black rounded-[100px]`}
          ></span>
        </span>
        <span
          onClick={() => setPressed(3)}
          className="min-w-[36px] min-h-[36px] rounded-[100px]
        border border-solid border-black cursor-pointer relative"
        >
          <span
            className={`absolute ${pressed === 3 ? 'visible' : 'invisible'}
          top-[4px] left-[4px] min-h-[26px] min-w-[26px]
          bg-black rounded-[100px]`}
          ></span>
        </span>
      </div>
    </section>
  );
}

function TheTeamCard({
  name,
  index,
  role,
  isMobile,
  skills,
  description,
  imgSrc,
  pressed,
}) {
  return isMobile ? (
    <div
      className={`flex flex-col gap-[5px] w-lvw 
      ${index === 0 ? 'ml-[12px]' : 'ml-[0px]'}
      ${index === pressed ? 'scale-100' : 'scale-75 '}
      transition-transform ease-out duration-300
      `}
    >
      <div className="flex gap-[17px]">
        <img
          className="min-w-[92px] rounded-sm min-h-full object-contain w-[40%]"
          src={imgSrc}
        ></img>
        <div className="flex flex-col flex-grow pr-[16px]">
          <p className="font-Poppins-SemiBold [font-size:clamp(16px,4vw,10em)]">
            {name}
          </p>
          <div className="flex gap-[4px]">
            <img
              className="cursor-pointer w-[20px]"
              src={facebookLogo}
              alt=""
            />

            <img
              className="cursor-pointer w-[20px]"
              src={linkedInLogo}
              alt=""
            />
            <img className="cursor-pointer w-[20px]" src={xLogo} alt="" />
            <img
              className="cursor-pointer w-[20px]"
              src={instragramLogo}
              alt=""
            />
          </div>
          <p
            className="mt-[10px] font-Poppins max-w-[100%] pr-[16px]
        [font-size:clamp(13px,2.5vw,24px)] "
          >
            Skills: {skills}
          </p>
          <p className="mt-auto font-Poppins [font-size:clamp(14px,2vw,24px)]">
            Role: {role}{' '}
          </p>
        </div>
      </div>
      <p className="font-Poppins pr-[35px] mt-[10px] [font-size:clamp(14px,2.5vw,24px)] ">
        {description}
      </p>
    </div>
  ) : (
    <div
      className={`${index === 0 ? 'ml-[400px]' : ''} flex gap-[30px] max-w-[850px]
    ${index === pressed ? 'scale-100 opacity-100' : 'scale-75 opacity-40'}
      transition-transform ease-out duration-500 `}
    >
      <img
        className="min-w-[370px] rounded-[8px]"
        src={imgSrc}
        alt="James Oliver"
      />
      <div className="flex min-w-[450px] flex-col">
        <p className="font-Poppins-SemiBold text-[32px]">{name}</p>
        <div className="flex mt-[10px] gap-[13px]">
          <img className="cursor-pointer" src={facebookLogo} alt="" />
          <img className="cursor-pointer" src={linkedInLogo} alt="" />
          <img className="cursor-pointer" src={xLogo} alt="" />
          <img className="cursor-pointer" src={instragramLogo} alt="" />
        </div>
        <p className="font-Poppins text-[24px] mt-[40px]">Role: {role}</p>
        <p className="font-Poppins text-[16px] mt-[20px] max-w-[450px]">
          Skills: {skills}
        </p>
        <p className="font-Poppins mt-[38px] text-[#000000e3] text-[13px] max-w-[450px]">
          {description}
        </p>
      </div>
    </div>
  );
}
