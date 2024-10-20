/* eslint-disable react/prop-types */
import faqsDropdown from '@images/faqsDropdown.svg';
import { useLayoutEffect, useRef, useState } from 'react';

export default function FAQ() {
  const [isActive, setIsActive] = useState(false);
  return (
    <section
      className="mt-[150px] lg:ml-[20px] lg:mt-[400px] mb-[500px] flex flex-col lg:flex-row  
      items-center lg:items-start min-w-full  lg:justify-center
    lg:gap-[40px] xl:gap-[70px] "
    >
      <h2 className="font-Poppins-SemiBold text-[48px] lg:text-[64px] max-w-[9ch]">
        Frequently asked questions
      </h2>
      <div className="flex flex-col items-center lg:items-start mt-[18px] gap-4">
        <FaqBar
          isActive={isActive}
          setIsActive={setIsActive}
          index={0}
          header={'How do i order things?'}
          paragraphArray={[
            `Orders can be placed directly through our website or over the phone:
             1-840-532-6960. If you are buying a pet wheelchair and unsure of your
              pet’s needs, we recommend 
             you talk with a representative at Wheel Care  as we have vast
              experience in the field of pet mobility and we are happy to evaluate 
              your pets specific needs. 
          `,
          ]
          
        }
        />
        <FaqBar
          isActive={isActive}
          setIsActive={setIsActive}
        index={1}
          header={'How long should i expect the wheelchair to arrive??'}
          paragraphArray={[
            `Dog and cat wheelchairs, with
        completed orders (owner information, pet information, payment, etc.),
        normally take 1 – 3 working days to design and build, plus FedEx or
        Postal Service transit time. 
          `,
            `Transit time varies with the shipping
        method chosen. Most of our cart orders are shipped within 1 – 3 working
        days. Accessory orders will normally ship the same day or next day. One
        of a kind custom carts will take longer depending on the case`,
          ]}
        />
        <FaqBar
          isActive={isActive}
          setIsActive={setIsActive}
        index={2}
          header={
            'How long will it take for my pet to adjust to the wheelchair?'
          }
          paragraphArray={[
            `Most pets take to carts immediately. We suggest you leash walk your
             pet in its cart, slowly at first, until it becomes adjusted to the feel
              of the cart. If you have a pet that has been down for some time it may
               take longer, as your pet has become used to dragging itself around and
                now, suddenly, it can run again. If you have a nervous pet, a tiny dog, or a cat, start it out indoors, on a carpet, where the wheels will not make a noise. Call if you have any questions, we’ll be glad to help.
          `
          ]}
        />
        <FaqBar
          isActive={isActive}
          setIsActive={setIsActive}
          index={3}
          header={'Do i need an account to place an order??'}
          paragraphArray={[
            `Our website do require an account to place an order. `
          ]}
        />
        <FaqBar
          isActive={isActive}
          setIsActive={setIsActive}
        index={4}
          header={'How do i track my order??'}
          paragraphArray={[
            `Your order can be tracked at anytime through your account 
            on our website. If you do not have an account please contact 
            one of our representatives to assist you. `
          ]}
        />
      </div>
    </section>
  );
}

function FaqBar({ header, paragraphArray,index,isActive,setIsActive }) {
  const [contentHeight, setContentHeight] = useState(0); // Store the correct height
  const contentRef = useRef(null);

  // Update the height after the component has rendered
  useLayoutEffect(() => {
    if (isActive === index && contentRef.current) {
      // Ensure all paragraphs have been rendered before calculating the height
      const scrollHeight = contentRef.current.scrollHeight;
      setContentHeight(scrollHeight); // Set the full content height
    } else {
      setContentHeight(0); // Collapse when inactive
    }
  }, [isActive, paragraphArray,index]); // Recalculate if the state or content changes

  return (
    <div
      className={`max-w-[720px] w-[90%] min-h-[64px] 
    flex flex-col bg-[#E6E6E6] rounded-[16px]
     pl-[16px] pr-[12px] lg:pl-[26px] lg:pr-[20px] cursor-pointer 
    ${isActive ===index ? 'faqDropdown--active' : ''}`}
      onClick={() => setIsActive(isActive === index?false:index)}
    >
      <div className="flex items-center justify-between min-h-[64px]">
        <p className="font-Poppins-Medium text-[15px] lg:text-[20px] py-[10px]">{header}</p>
        <img
          className={`transition-transform transform ${isActive === index ? 'rotate-180' : ''}`}
          src={faqsDropdown}
          alt="Dropdown"
        />
      </div>
      <div
        ref={contentRef}
        className={`transition-[height opacity] duration-200 overflow-hidden ease-in text-[14px]
        ${isActive ===index ? 'opacity-100' : 'opacity-20'}`}
        style={{
          height: `${contentHeight}px`,
        }}
      >
        {paragraphArray.map((text, textIndex) => (
          <p
            key={textIndex}
            className="mb-[25px] pr-[30px] 
          font-Poppins text-[14px]"
          >
            {text}
          </p>
        ))}
      </div>
    </div>
  );
}
