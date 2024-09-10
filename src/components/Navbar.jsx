/* eslint-disable react/prop-types */
import navbarIcon from '@images/navbarIcon.svg';
import navDropDown from '@images/navDropDown.svg';
import searchIcon from '@images/searchIcon.svg';
import cartIcon from '@images/cartIcon.svg';
import accountIcon from '@images/accountIcon.svg';
import { useRef, useState } from 'react';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <>
      <nav className="border-b-[1px] border-[#414141] border-solid items-center">
        <div className="min-h-[70px] flex items-center mx-auto max-w-[1440px]">
          <IconContainer></IconContainer>
          <NavLinks></NavLinks>
          <NavIconLinks></NavIconLinks>
        </div>
      </nav>
    </>
  );
}

function IconContainer() {
  return (
    <div className='ml-[114px] mr-[127px] flex gap-4 items-center '>
    
    <Link  to={'/home'}>
      <img src={navbarIcon} alt="navBarIcon" className="" />
    </Link>  
    <Link to={'/home'}>
      <p className="font-Roboto font-bold text-2xl">Wheel Care</p>
    </Link>
    </div>

  );
}

function NavLinks() {
  const [hoveredButton, setHoveredButton] = useState(null);
  const [headerIndex, setHeaderIndex] = useState(0);
  return (
    <div className="flex">
      <ul className="flex items-center gap-[80px] mr-[180px]">
        <li
          className={`dropDownContainer ${hoveredButton === 'Shop' ? 'active' : ''} 
          relative flex font-Roboto 
          font-medium text-[16px] cursor-pointer`}
        >
          <div
            onMouseEnter={() => {
              setHoveredButton('Shop');
              setHeaderIndex(0);
            }}
            className="flex font-medium text-[16px] font-Roboto gap-[3px]"
          >
            <p>Shop</p>
            <img
              className="transition transform ease-out duration-150"
              src={navDropDown}
              alt="Navbar Dropdown"
            />
          </div>
          <DropDownContainer
            hoveredButton={hoveredButton}
            setHoveredButton={setHoveredButton}
            setHeaderIndex={setHeaderIndex}
            headerIndex={headerIndex}
          ></DropDownContainer>
        </li>
        <li
          className={`dropDownContainer 
            ${hoveredButton === 'Customize' ? 'active' : ''}
             flex font-Roboto gap-[3px] 
            font-medium text-[16px] cursor-pointer`}
        >
          <div
            onMouseEnter={() => {
              setHoveredButton('Customize');
              setHeaderIndex(0);
            }}
            className="flex font-medium text-[16px] font-Roboto gap-[3px]"
          >
            <p>Customize</p>
            <img
              className="transition transform ease-out duration-150"
              src={navDropDown}
              alt="Navbar Dropdown"
            />
          </div>
        </li>
        <li
          onMouseEnter={() => setHoveredButton(null)}
          className="flex font-Roboto gap-[3px] font-medium 
        
        text-[16px] cursor-pointer"
        >
          Testimonial
        </li>
        <li
          onMouseEnter={() => setHoveredButton(null)}
          className="flex font-Roboto gap-[3px] font-medium text-[16px] cursor-pointer"
        >
          Contact Us
        </li>
      </ul>
    </div>
  );
}

function NavIconLinks() {
  return (
    <ul className="flex items-center gap-8  ">
      <li className="cursor-pointer">
        <img src={searchIcon} alt="Search Icon" />
      </li>
      <li className="cursor-pointer">
        <img src={cartIcon} alt="Cart Icon" />
      </li>
      <li className="cursor-pointer">
        <img src={accountIcon} alt="Account Icon" />
      </li>
    </ul>
  );
}

function DropDownContainer({
  hoveredButton,
  setHoveredButton,
  headerIndex,
  setHeaderIndex,
}) {
  const headerRef = useRef(null);
  return (
    <div
      onMouseLeave={() => setHoveredButton(null)}
      className={`min-w-[850px] min-h-[360px] 
      absolute top-[47px] left-[-117px]
    bg-[#FAFAFA] border border-solid border-black
      cursor-default rounded-bl-[13px] rounded-br-[13px]
       flex py-[30px] pl-[31px] transition-opacity ease-in
      ${hoveredButton ? 'opacity-100 visible' : 'invisible opacity-0'}
      `}
    >
      <div className="min-w-[180px] max-w[180px] mt-2 flex flex-col mr-[56px] gap-3">
        {hoveredButton === 'Shop' ? (
          <>
            <DropDownHeaderLinks
              title="Wheelchair"
              description="Mobility and Comfort Solutions"
              setHeaderIndex={setHeaderIndex}
              headerIndex={0}
              refElement={headerRef}
              originalHeaderIndex={headerIndex}
            />
            <DropDownHeaderLinks
              title="Pet Wheelchair"
              description={'Mobility aids for pets.'}
              setHeaderIndex={setHeaderIndex}
              headerIndex={1}
              refElement={headerRef}
              originalHeaderIndex={headerIndex}
            />
            <DropDownHeaderLinks
              title="Wheelchair Parts"
              description="Replacement parts and accessories"
              setHeaderIndex={setHeaderIndex}
              headerIndex={2}
              refElement={headerRef}
              originalHeaderIndex={headerIndex}
            />
          </>
        ) : null}
        {hoveredButton === 'Customize' ? (
          <>
            <DropDownHeaderLinks
              title="Custom Chair"
              description="Personalize your for comfort and style"
              setHeaderIndex={setHeaderIndex}
              headerIndex={0}
              refElement={headerRef}
              originalHeaderIndex={headerIndex}
            />
            <DropDownHeaderLinks
              title="Custom Pet Chair"
              description={'Tailor-made mobility solutions for your pet'}
              setHeaderIndex={setHeaderIndex}
              headerIndex={1}
              refElement={headerRef}
              originalHeaderIndex={headerIndex}
            />
          </>
        ) : null}
      </div>

      <div className="min-w-[550px] min-h[288px] bg-[#E2E2E2] rounded-[20px]">
        <DropDownColumnsData
          refElement={headerRef}
          hoveredButton={hoveredButton}
          headerIndex={headerIndex}
        ></DropDownColumnsData>
      </div>
    </div>
  );
}

function animateColumnData(
  refElement,
  setHeaderIndex,
  headerIndex,
  originalHeaderIndex,
) {
  if(originalHeaderIndex !== headerIndex){
    gsap.to(refElement.current, {
      duration: 0.2,
      opacity: 0,
      onComplete: () => {
        setHeaderIndex(headerIndex);
        gsap.to(refElement.current, {
          duration: 0.2,
          opacity: 1,
        });
      },
    });
  }
}

function DropDownColumnsData({ hoveredButton, headerIndex, refElement }) {
  return (
    <div
      ref={refElement}
      className="flex pt-[22px] pb-[26px] px-[30px] gap-[30px] min-h-[288px]"
    >
      {hoveredButton === 'Shop' && headerIndex === 0 ? (
        <>
          <div className="flex flex-col gap-[25px] min-w-[225px]">
            <DropDownColumnsLinks title="Powered Wheelchair" />
            <DropDownColumnsLinks title="Titanium Wheelchair" />
            <DropDownColumnsLinks title="Quad Rugby Wheelchair" />
            <DropDownColumnsLinks title="Lightweight Folding Wheelchair" />
            <DropDownColumnsLinks title="All Terrain Wheelchair" />
            <DropDownColumnsLinks title="Racing Wheelchair" />
          </div>
          <div className="flex flex-col gap-[25px] min-w-[225px]">
            <DropDownColumnsLinks title="Basketball Wheelchair" />
            <DropDownColumnsLinks title="Tennis Wheelchair" />
            <DropDownColumnsLinks title="Ultra lightweight folding Wheelchair" />
            <DropDownColumnsLinks title="Standard Everyday Wheelchair" />
            <DropDownColumnsLinks title="Youth Wheelchair" />
            <DropDownColumnsLinks title="Gaming Wheelchair" />
          </div>
        </>
      ) : null}
      {hoveredButton === 'Shop' && headerIndex === 1 ? (
        <>
          <div className="flex flex-col gap-[25px] min-w-[225px]">
            <DropDownColumnsLinks title="Cat Wheelchair" />
            <DropDownColumnsLinks title="Dog Wheelchair" />
            <DropDownColumnsLinks title="Hamster Wheelchair" />
            <DropDownColumnsLinks title="Duck Wheelchair" />
            <DropDownColumnsLinks title="Chicken Wheelchair" />
            <DropDownColumnsLinks title="Gorilla Wheelchair" />
          </div>
          <div className="flex flex-col gap-[25px] min-w-[225px]">
            <DropDownColumnsLinks title="Monkey Wheelchair" />
            <DropDownColumnsLinks title="Horse Wheelchair" />
            <DropDownColumnsLinks title="Cow Wheelchair" />
            <DropDownColumnsLinks title="Bird Wheelchair" />
            <DropDownColumnsLinks title="Pig Wheelchair" />
            <DropDownColumnsLinks title="Chinese Wheelchair" />
          </div>
        </>
      ) : null}
      {hoveredButton === 'Shop' && headerIndex === 2 ? (
        <>
          <div className="flex flex-col gap-[25px] min-w-[225px]">
            <DropDownColumnsLinks title="Wheelchair Tire Accesories" />
            <DropDownColumnsLinks title="Wheelchair Bags " />
            <DropDownColumnsLinks title="Wheelchair Pouches" />
            <DropDownColumnsLinks title="Wheelchair Straps" />
            <DropDownColumnsLinks title="Wheelchair Brakes" />
            <DropDownColumnsLinks title="Wheelchair Carriers" />
          </div>
          <div className="flex flex-col gap-[25px] min-w-[225px]">
            <DropDownColumnsLinks title="Wheelchair Tire Pumps" />
            <DropDownColumnsLinks title="Wheelchair Tire Inflators" />
            <DropDownColumnsLinks title="Wheelchair Tire Adapters" />
            <DropDownColumnsLinks title="Wheelchair Side Guards" />
            <DropDownColumnsLinks title="Wheelchair Upholstery" />
            <DropDownColumnsLinks title="Disability Vehicle Hand Controls" />
          </div>
        </>
      ) : null}
      {hoveredButton === 'Customize' && headerIndex === 0 ? (
        <>
          <div className="flex flex-col gap-[25px] min-w-[225px]">
            <DropDownColumnsLinks title="Powered Wheelchair" />
            <DropDownColumnsLinks title="Titanium Wheelchair" />
            <DropDownColumnsLinks title="Quad Rugby Wheelchair" />
            <DropDownColumnsLinks title="Lightweight Folding Wheelchair" />
            <DropDownColumnsLinks title="All Terrain Wheelchair" />
            <DropDownColumnsLinks title="Racing Wheelchair" />
          </div>
          <div className="flex flex-col gap-[25px] min-w-[225px]">
            <DropDownColumnsLinks title="Basketball Wheelchair" />
            <DropDownColumnsLinks title="Tennis Wheelchair" />
            <DropDownColumnsLinks title="Ultra lightweight folding Wheelchair" />
            <DropDownColumnsLinks title="Standard Everyday Wheelchair" />
            <DropDownColumnsLinks title="Youth Wheelchair" />
            <DropDownColumnsLinks title="Gaming Wheelchair" />
          </div>
        </>
      ) : null}
      {hoveredButton === 'Customize' && headerIndex === 1 ? (
        <>
          <div className="flex flex-col gap-[25px] min-w-[225px]">
            <DropDownColumnsLinks title="Cat Wheelchair" />
            <DropDownColumnsLinks title="Dog Wheelchair" />
            <DropDownColumnsLinks title="Hamster Wheelchair" />
            <DropDownColumnsLinks title="Duck Wheelchair" />
            <DropDownColumnsLinks title="Chicken Wheelchair" />
            <DropDownColumnsLinks title="Gorilla Wheelchair" />
          </div>
          <div className="flex flex-col gap-[25px] min-w-[225px]">
            <DropDownColumnsLinks title="Monkey Wheelchair" />
            <DropDownColumnsLinks title="Horse Wheelchair" />
            <DropDownColumnsLinks title="Cow Wheelchair" />
            <DropDownColumnsLinks title="Bird Wheelchair" />
            <DropDownColumnsLinks title="Pig Wheelchair" />
            <DropDownColumnsLinks title="Chinese Wheelchair" />
          </div>
        </>
      ) : null}
    </div>
  );
}

function DropDownColumnsLinks({ title }) {
  return (
    <div className="flex cursor-pointer columnContent relative gap-[2px] items-center max-w-fit">
      <p className="font-Roboto font-medium text-[14px]">{title}</p>
    </div>
  );
}

function DropDownHeaderLinks({
  title,
  description,
  setHeaderIndex,
  headerIndex,
  refElement,
  originalHeaderIndex,
}) {
  return (
    <div
      className="min-w-[180px] max-w-[180px] min-h-[80px] 
      hover:bg-[#E2E2E2] rounded-2xl cursor-pointer
      pl-[19px] pt-[9px] pr-[26px] flex flex-col gap-[4px]
      columnContent"
      onMouseEnter={() =>
        animateColumnData(refElement, setHeaderIndex, headerIndex,originalHeaderIndex)
      }
    >
      <p className="relative max-w-fit font-Roboto font-semibold">{title}</p>
      <p className="font-Poppins text-[12px] text-[#616161] ">{description}</p>
    </div>
  );
}
