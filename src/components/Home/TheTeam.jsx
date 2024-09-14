/* eslint-disable react/prop-types */
import jamesOliver from '@images/jamesOliver.png';
import carlJohnson from '@images/carlJohnson.png';
import neilMaute from '@images/neilMaute.png';
import jayraldDionaldo from '@images/jayraldDionaldo.png';
import xLogo from '@images/X.png';
import instragramLogo from '@images/Instagram.png';
import facebookLogo from '@images/Facebook.png';
import linkedInLogo from '@images/LinkedIn.png';

import { useState } from 'react';

export default function TheTeam() {
  const [pressed, setPressed] = useState(0);
  return (
    <div className="mt-[400px] flex flex-col items-center">
      <h2 className="font-Poppins-SemiBold text-[48px]">Meet The Team</h2>
      <div
        className="flex mt-[120px] max-w-[1620px] min-w-[1620px] 
      min-h-[413px] max-h-[413px] overflow-hidden"
      >
        <div
          className="flex transition-transform ease-out duration-300"
          style={{ transform: `translate(-${pressed * 850}px, 0px)` }}
        >
          <TheTeamCard
            imgSrc={jamesOliver}
            name={'James Oliver Mendoza'}
            index={0}
            role={'Baby Boy'}
            pressed={pressed}
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
            index={3}
            role={'Eletric Fan Repairman'}
            pressed={pressed}
            skills={'solda , pilit og tape,  flux inhaler, '}
            description={`Meet our Electric Fan Repairman, the master of keeping 
              things running smoothly and cool under pressure. With a keen eye for 
              detail and a knack for fixing even the most stubborn mechanical 
              issues, he ensures that everything operates at peak efficiency.
               His expertise in troubleshooting and repairing makes him an 
               invaluable asset to the team, always ready to tackle any problem
                with a breeze. When it comes to solutions and reliability, 
                Electric Fan Repairman is the one you can count on.`}
          />
        </div>
      </div>
      <div className="flex mt-[80px] gap-[10px]">
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
    </div>
  );
}

function TheTeamCard({
  name,
  index,
  role,
  skills,
  description,
  imgSrc,
  pressed,
}) {
  return (
    <div
      className={`${index === 0 ? 'ml-[400px]' : ''} flex gap-[30px]
    ${index === pressed ? 'scale-100 opacity-100' : 'scale-75 opacity-40'}
      transition-transform ease-out duration-500 `}
    >
      <img className="min-w-[370px] rounded-[8px]" src={imgSrc} alt="James Oliver" />
      <div className="flex min-w-[450px] flex-col">
        <p className="font-Poppins-SemiBold text-[32px]">{name}</p>
        <div className="flex mt-[10px] gap-[13px]">
          <img className="cursor-pointer" src={xLogo} alt="" />
          <img className="cursor-pointer" src={instragramLogo} alt="" />
          <img className="cursor-pointer" src={facebookLogo} alt="" />
          <img className="cursor-pointer" src={linkedInLogo} alt="" />
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
