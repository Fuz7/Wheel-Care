/* eslint-disable react/prop-types */
import faqsDropdown from '@images/faqsDropdown.svg';
import { useRef, useState } from 'react';

export default function FAQ() {
  return (
    <section
      className="mt-[400px] mb-[1000px] flex min-w-full pl-[330px] 
    gap-[70px] pr-[360px]"
    >
      <h2 className="font-Poppins-SemiBold text-[64px] max-w-[457px]">
        Frequently asked questions
      </h2>
      <div className="flex flex-col mt-[18px] gap-4">
        <FaqBar header={'How do i order things?'} />
      </div>
    </section>
  );
}

function FaqBar({ header }) {
  const [isActive, setIsActive] = useState(false);
  const contentRef = useRef(null)
  return (
    <div
      className={`max-w-[720px] min-w-[720px] min-h-[64px] 
    flex flex-col  bg-[#E6E6E6] rounded-[16px]
     pl-[26px] pr-[20px] cursor-pointer 
    ${isActive ? 'faqDropdown--active' : ''}`}
      onClick={() => setIsActive(!isActive)}
    >
      <div className="flex items-center justify-between min-h-[64px] ">
        <p className="font-Poppins-Medium text-[20px]">{header}</p>
        <img
          className="transition-transform"
          src={faqsDropdown}
          alt="Dropdown"
        />
      </div>
      <p
      ref={contentRef}
        className={`transition-[height opacity] 
      duration-200 overflow-hidden ease-in text-[14px]
       ${isActive?'mb-[25px] opacity-100':'mb-0 opacity-20'}`}
      style={{height: isActive?`${contentRef.current?.scrollHeight}px`: '0px'}}
      >
         Dog and cat wheelchairs, with
        completed orders (owner information, pet information, payment, etc.),
        normally take 1 – 3 working days to design and build, plus FedEx or
        Postal Service transit time. Transit time varies with the shipping
        method chosen. Most of our cart orders are shipped within 1 – 3 working
        days. Accessory orders will normally ship the same day or next day. One
        of a kind custom carts will take longer depending on the case.{' '}
      </p>
    </div>
  );
}
