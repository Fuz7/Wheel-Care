/* eslint-disable react/prop-types */
import tankWheelchair from '@images/tankWheelchair.svg';
import Rating from '@mui/material/Rating';
import chubbyWheelchair from '@images/chubbyWheelchair.png';
import morganWheelchair from '@images/morganWheelchair.png';
import { forwardRef, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useMediaQuery } from 'react-responsive';

gsap.registerPlugin(ScrollTrigger);

export default function Reviews() {
  const reviewsRef = useRef([]);
  const containerRef = useRef(null);
  const isTabletOrMobile = useMediaQuery({ query: '(max-width:1024px)' });
  const isFirstRender = useRef(true); 
  
  useEffect(() => {
    let timeline = null;
    const currentContainerRef = containerRef.current
    const reviewCurrentRef = reviewsRef.current
    const isFirstRenderCurrent = isFirstRender.current
    if(!isTabletOrMobile){
      timeline = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 15%',
          end: '+=2000',
          pinSpacing: false,
          scrub: 1,
          pin: true,
          onUpdate: (self) => {
            const scrollProgress = self.progress; // Scroll progress (0 to 1)
            // Apply desired behavior here
            // Example: Fix position
            if (scrollProgress > 0 && scrollProgress < 1) {
              containerRef.current.style.transform = '';
            } else if (scrollProgress === 1) {
              containerRef.current.style.transform = 'translate(0,2000px)';
            }
          },
        },
      });
  
      reviewsRef.current.forEach((ref) => {
        if (ref) {
          timeline.fromTo(
            ref,
            { opacity: 0, y: 200 },
            { opacity: 1, y: 0, duration: 2, stagger: 4, ease: 'back.out(1.7)' },
          );
        }
      });
  
      timeline.to(reviewsRef.current[0], {
        duration: 4,
      });

    }

    return () => {
      if(timeline){

        currentContainerRef.style.transform = '';
        currentContainerRef.style.position = '';
        currentContainerRef.style.height = 'fit-content'
        currentContainerRef.style.maxHeight = 'fit-content'
        currentContainerRef.style.paddingTop = '67px'
        currentContainerRef.style.paddingBottom = '67px'
        currentContainerRef.style.minWidth = '100lvw'
        currentContainerRef.style.maxWidth = '100lvw'
        timeline.kill();
        if(!isFirstRenderCurrent){
          reviewCurrentRef.forEach((ref)=>{
            if(ref){
              gsap.to(ref,{opacity:1,y:0})
            }
            
          })
        }
        if (ScrollTrigger.getById(timeline.vars.scrollTrigger.id)) {
          ScrollTrigger.getById(timeline.vars.scrollTrigger.id).kill();
        }
      }
      isFirstRender.current = false
    };
  }, [isTabletOrMobile]);

  return (
    <section className="min-h-[450px] gap-[66px] mt-[150px] lg:mt-[500px]
     mb-[100px] lg:mb-[2400px] flex flex-col">
      <h2 className="self-center font-Poppins-Medium text-[48px]">Reviews</h2>
      <div
        ref={containerRef}
        className="min-w-full min-h-[700px] reviewGradient pt-[67px] pb-[67px]
      flex flex-col lg:flex-row items-center justify-evenly gap-[100px] lg:gap-0
       "
      >
        <ReviewCard
          imgSrc={tankWheelchair}
          rating={4.5}
          ref={(el) => (reviewsRef.current[0] = el)}
          header={'Jorge'}
          description="After the first two wheelchairs 
          we were desperately looking for one that was 
          right for him. He has finally go the hang of it and 
          smiles when he is in it, using it like a tractor to get 
          where he wants. Besides making him happy you have brought 
          much joy to our lives as we battle thru degenerative myelopathy. 
          Thank you again, Wheel Care"
        />
        <ReviewCard
          imgSrc={chubbyWheelchair}
          rating={5}
          ref={(el) => (reviewsRef.current[1] = el)}
          header={'Buddy'}
          description="Hello! I rented a rear support wheelchair for my miniature 
          dog about two weeks ago and I wanted to inform you that I wanted to 
          rent for another two weeks. She absolutely loves it since she can finally 
          go out on walks with her mother and sister again and I couldn’t be more
           grateful to you guys for giving her that chance. Thank you again, DM!"
        />
        <ReviewCard
          imgSrc={morganWheelchair}
          rating={4.7}
          ref={(el) => (reviewsRef.current[2] = el)}
          header={'Morgan'}
          description="He is completely comfortable in his cart now – and the 
          transformation in his personality because he feels more like a “dog” is 
          amazing. He plays now with all of the dogs and they are beginning to play
           back with him – treating him like he is part of the pack. We have gotten 
           a few inquiries about where we got his cart and we are referring all to 
           Wheel Care Carts.

"
        />
      </div>
    </section>
  );
}

const ReviewCard = forwardRef(
  ({ imgSrc, rating, header, description }, ref) => {
    return (
      <div
        ref={ref}
        className="min-w-[350px] max-w-[350px] min-h-[550px] max-h-[550px] bg-white
          rounded-t-[200px] flex flex-col items-center mr-[13px] lg:mr-0 "
      >
        <img className="mt-[40px]" src={imgSrc} alt="Reviewed Wheelchair" />
        <p className="mt-[18px] font-Poppins-SemiBold text-[24px]">{header}</p>
        <Rating
          className="mt-[12px]"
          readOnly
          defaultValue={rating}
          precision={0.1}
          size="large"
          sx={{
            '& .MuiRating-iconFilled': {
              color: '#6228B4', // Set the filled star color to purple
            },
          }}
        />
        <p
          className="max-w-[295px] text-center font-Poppins text-[14px] 
            mt-[20px]"
        >
          {description}
        </p>
      </div>
    );
  },
);

ReviewCard.displayName = 'ReviewCard';
