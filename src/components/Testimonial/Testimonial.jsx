/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import climbStairs from '@images/climbStairs.png';
import testimonialYTlogo from '@images/testimonialYTlogo.svg';
import testimonialXLogo from '@images/testimonialXLogo.png';
import testimonialIcon1 from '@images/testimonialIcon1.png';
import testimonialIcon2 from '@images/testimonialIcon2.png';
import testimonialIcon3 from '@images/testimonialIcon3.png';
import testimonialIcon4 from '@images/testimonialIcon4.png';
import testimonialIcon5 from '@images/testimonialIcon5.png';
import testimonialIcon6 from '@images/testimonialIcon6.png';
import testimonialIcon7 from '@images/testimonialIcon7.png';
import testimonialIcon8 from '@images/testimonialIcon8.png';
import testimonialIcon9 from '@images/testimonialIcon9.png';
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
      <div className="px-[150px] mt-[50px] mb-[100px] columns-3">
        <TestimonialCard
          pArray={[
            `Ever since I 
          got my new wheelchair, my life has improved dramatically!
          It’s incredibly comfortable and makes getting around much
           easier than before. I’m now able to participate in activities
            I enjoy without the hassle I used to face. The attention
             to detail in the wheelchair’s design is impressive, and 
             the support from the company has been outstanding. I
              strongly recommend @WheelCare for anyone in need of a
               top-quality, reliable wheelchair.`,
          ]}
          name="DM Rashid Ferrer"
          email="GrooveStreetGangsta"
          platform={testimonialXLogo}
          date={'September 21, 1960'}
          icon={testimonialIcon1}
        />{' '}
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
        <TestimonialCard
          pArray={[
            `@WheelCare’s pet wheelchair is a testament
               to precision and strength. Much like a well-forged blade,
                this wheelchair is crafted with exceptional quality and
                 attention to detail. `,
            `The service from @WheelCare was nothing short of exemplary, 
                 matching the excellence of their product. They delivered a
                  solution that stands as a true testament to their craftsmanship.
                   When it comes to pet mobility, they are the true masters. Embrace
                     the power of superior design and reliability.`,
          ]}
          name="Vergil"
          email="MonoblocEnjoyer"
          date="October 20, 2016"
          platform={testimonialXLogo}
          icon={testimonialIcon7}
        />
        <TestimonialCard
          pArray={[
            `I’m thrilled with the pet wheelchair from @WheelCare! 
            It’s made a huge difference for my dog, giving him the
             mobility and support he needed. The wheelchair is sturdy
              and well-designed, and the customer service was outstanding,
               ensuring a perfect fit and providing excellent support. 
               Seeing my dog’s improved quality of life has been wonderful.
               I can’t recommend @WheelCare enough for anyone needing a 
               high-quality pet wheelchair! 🐶💫`,
          ]}
          name="Reggie Franklin"
          email="RealATrain"
          date="January 16, 2021"
          platform={testimonialXLogo}
          icon={testimonialIcon2}
        />
        <TestimonialCard
          pArray={[
            `I’m so impressed with @WheelCare’s pet wheelchairs! 
            The wheelchair is well-made and has significantly improved 
            my dog’s mobility. The durability and comfort of the wheelchair
             are fantastic, and it’s been great to see my pet’s renewed 
             energy and enthusiasm. Highly recommended for anyone looking 
             for quality pet mobility solutions! 🐕👍`,
          ]}
          name="Clinton"
          email="PuppyPowerUser"
          date="May 12, 2023"
          platform={testimonialXLogo}
          icon={testimonialIcon5}
        />
        <TestimonialCard
          pArray={[
            `Let’s be clear: @WheelCare’s pet wheelchair is exceptional.
            As someone who values precision, I was thoroughly impressed
             with the craftsmanship and quality. `,
             `The team’s professionalism and attention 
             to detail were evident throughout the process, 
             from selection to delivery. The result? A product 
             that truly enhances my dog’s mobility and quality 
             of life. When it comes to mobility solutions, they’re
              the ones who knock—knocking out the competition with 
              their excellence. Trust me, you’ll be more than satisfied.`
          ]}
          name="Heisenburglar"
          email="WhiterWalte"
          date="September 8, 2010"
          platform={testimonialXLogo}
          icon={testimonialIcon8}
        />
        <TestimonialCard
          pArray={[
            `@WheelCare has been a wonderful choice
         for my wheelchair needs! Their products are 
         well-engineered and provide excellent comfort. 
         The support I received from the team was exceptional, 
         the entire process, from order to delivery was
          smooth and professional. I’m very happy with my
           purchase and would recommend @WheelCare to 
           anyone looking for high-quality wheelchairs!`,
          ]}
          name="Panidaro Na Mo PLDT"
          email="GourmetGuru"
          date="June 30, 2019"
          platform={testimonialXLogo}
          icon={testimonialIcon3}
        />
        <TestimonialCard
          pArray={[
            `Alright, listen up. I usually don’t 
            bother with this kind of stuff, but @WheelCare 
            really knocked it out of the park. I got one of 
            their wheelchairs for my old dog, and let me tell you, 
            it’s a game-changer. `,`The thing is built like a 
            tank—tough, reliable, and no nonsense. The team over 
            there actually knows what they’re doing, unlike some of
             the clowns I’ve dealt with. My dog’s got his mobility 
             back, and he’s cruising around like a champ. If you 
             need a wheelchair that can handle the rough stuff, 
             @WheelCare’s got you covered. Thumbs up from me.`
          ]}
          name="Trevor Philips"
          email="Methamatician"
          date="August 7, 2014"
          platform={testimonialXLogo}
          icon={testimonialIcon6}
        />
        <TestimonialCard
          pArray={[
            `@WheelCare’s pet wheelchair is simply outstanding. 
            As someone who’s seen his fair share of intense 
            situations, I can confidently say this product is a
             lifesaver. The design is rugged and reliable, offering 
             exceptional support and comfort for my dog, Ada.
              The team at @WheelCare provided top-notch service,
               ensuring everything was just right.`,
          ]}
          name="Leon S. Kennedy"
          email="rookie"
          date="January 16, 2021"
          platform={testimonialXLogo}
          icon={testimonialIcon9}
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
      className="inline-block min-w-[370px] max-w-[350px]
  border border-black shadow-[16px_16px_4px_rgba(0,0,0,0.25)]
  mr-2 mb-2 align-top rounded-[5px] transition-transform
  hover:translate-y-[-5px]
  "
    >
      <div className="flex flex-col p-[26px]">
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
          {icon ? (
            <img
              className="max-w-[40px] max-h-[40px]"
              src={icon}
              alt="Icon"
            ></img>
          ) : null}
        </div>
      </div>
    </div>
  );
}
