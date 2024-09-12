/* eslint-disable react/prop-types */
import { useEffect, useRef,forwardRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import featInnovative from '@images/featInnovative.svg';
import featPrecision from '@images/featPrecision.svg';
import featCustomizable from '@images/featCustomizable.svg';
import featExperts from '@images/featExperts.svg';

gsap.registerPlugin(ScrollTrigger);

export default function ListedFeature() {

  const itemRefs = useRef([]); // An array of refzs
  const containerRef = useRef(null)
 useEffect(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current, // Use the first item as the trigger
        start: 'top 30%',
        end: '+=1600',
        scrub:1,
        pinSpacing:false,
        toggleActions:'play pause complete reset ',
        pin:true,
        onUpdate:(self) => {
      // You can control how the element behaves, without transforms
      const scrollProgress = self.progress;  // Scroll progress (0 to 1)
      // Apply desired behavior here
      // Example: Fix position
      if (scrollProgress > 0 && scrollProgress < 1) {
        containerRef.current.style.transform = ''
      } else if(scrollProgress === 1) {
        containerRef.current.style.transform = "translate(0,1600px)";
      }
      
    },
      }

    })

    // Add animations to the timeline in sequence
    itemRefs.current.forEach((ref, ) => {
      if (ref) {
        timeline.fromTo(
          ref,
          { opacity: 0, scale: 0, },
          { opacity: 1, scale: 1, duration: 4, stagger:4 },
        );
      }
    });
    timeline.to(itemRefs.current[0],{
      duration:8,
    })

  }, []);
  return (
    <section
      className="min-h-[465px] min-w-full max-w-full mt-[350px] bg-[#6228B4]
       flex flex-col gap-[58px] items-center  "
       ref={containerRef}
       >
      <p 

className="mt-[25px] font-Poppins-SemiBold text-white text-[40px]">
        Crafted for Freedom. Engineered for Excellence.
      </p>
      <div className="flex gap-[103px] mt-[58px]">
        <ListItem
          ref={(el) => (itemRefs.current[0] = el)}
          src={featInnovative}
          text={'THE MOST INNOVATIVE WHEELCHAIR AVAILABLE'}
          />
        <ListItem
          ref={(el) => (itemRefs.current[1] = el)}
          src={featPrecision}
          text={'CUSTOM BUILT WITH PRECISION FOR EVERY USERS'}
          />
        <ListItem
          ref={(el) => (itemRefs.current[2] = el)}
          src={featCustomizable}
          text={'FULLY CUSTOMIZABLE FOR A SEAMLESS EXPERIENCE'}
          />
        <ListItem
          ref={(el) => (itemRefs.current[3] = el)}
          src={featExperts}
          text={'DESIGNED BY LEADING MOBILITY EXPERTS'}
          />
      </div>
    </section>
   
  );
}

const ListItem = forwardRef(({ src, text }, ref) => {
  return (
    <div ref={ref} className="flex flex-col min-w-[250px] items-center max-w-[250px] gap-5">
      <img src={src} className="h-[82px] w-[82px]" alt="Feature" />
      <p className="text-white text-center font-Poppins text-[16px]">{text}</p>
    </div>
  );
});

ListItem.displayName="ListItem"