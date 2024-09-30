/* eslint-disable react/prop-types */
import navbarIcon from '@images/navbarIcon.svg';
import navDropDown from '@images/navDropDown.svg';
import searchIcon from '@images/searchIcon.svg';
import cartIcon from '@images/cartIcon.svg';
import accountIcon from '@images/accountIcon.svg';
import navbarMobileIcon from '@images/mobile/navbarMobileIcon.svg';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

export default function Navbar() {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width:1024px)' });
  const [hamburgerClicked, setHamburgerClicked] = useState(false);
  useEffect(()=>{
    const body = document.getElementsByTagName('body')[0]
    if(isTabletOrMobile === false) {
      setHamburgerClicked(false)
      body.style.overflow = 'auto'
    }
    if(hamburgerClicked === true){
      body.style.overflow = 'hidden'
    }else if(hamburgerClicked === false){
      body.style.overflow = 'auto'
    }
  },[isTabletOrMobile, hamburgerClicked])
  return (
    <>
      <nav
        className="border-b-[1px] fixed top-0 min-w-full 
       bg-white border-[#414141] border-solid items-center z-10"
      >
        <div className="flex flex-col">
          <div
            className="min-h-[50px] lg:min-h-[70px] relative
        flex   items-center lg:mx-auto max-w-[1440px]"
          >
            <IconContainer isTabletOrMobile={isTabletOrMobile}></IconContainer>
            {isTabletOrMobile ? null : <NavLinks></NavLinks>}

            <NavIconLinks></NavIconLinks>
          </div>
          {isTabletOrMobile? <MobileNavLinks hamburgerClicked={hamburgerClicked} />: null }
        </div>
        <div

          className="absolute lg:hidden
            top-[11px] right-[26px] min-w-[32px] min-h-[32px]
            flex flex-col items-center justify-center gap-1"
          onClick={() => {
            setHamburgerClicked((hamburgerClicked) => !hamburgerClicked);
          }}
        >
          <div className={`w-[20px] h-[2px] bg-black rounded-[4px]
          transition-transform
             ${hamburgerClicked?'firstLine':''}`}></div>
          <div className={`w-[20px] h-[2px] bg-black rounded-[4px]
             ${hamburgerClicked?'opacity-0':''}`}></div>
          <div className={`w-[20px] h-[2px] bg-black rounded-[4px]
          transition-transform
             ${hamburgerClicked?'secondLine':''}`}></div>
        </div>
      </nav>
    </>
  );
}

function IconContainer({ isTabletOrMobile }) {
  return (
    <div
      className="ml-[20px] lg:ml-[64px] xl:ml-[84px]
     2xl:ml-[114px]  lg:mr-[87px] xl:mr-[107px]
      2xl:mr-[127px] flex gap-4 items-center "
    >
      <Link to={'/home'}>
        <img
          src={isTabletOrMobile ? navbarMobileIcon : navbarIcon}
          alt="navBarIcon"
          className=" "
        />
      </Link>
      <Link to={'/home'}>
        <p className="font-Roboto font-bold text-[20px] lg:text-2xl">
          Wheel Care
        </p>
      </Link>
    </div>
  );
}

function NavLinks() {
  const [hoveredButton, setHoveredButton] = useState(null);
  const [headerIndex, setHeaderIndex] = useState(0);
  return (
    <div className="flex">
      <ul
        className="items-center hidden lg:flex  lg:gap-[25px] 
      xl:gap-[60px]  2xl:gap-[80px] md:mr-[30px] lg:mr-[50px] xl:mr-[140px] 2xl:mr-[180px]"
      >
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
            <Link to={'/shop'}>
              <p
                onClick={() => setHoveredButton('')}
                className="hover:text-[#1660CF]"
              >
                Shop
              </p>
            </Link>
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
        <Link to={'/testimonial'}>
          <li
            onMouseEnter={() => setHoveredButton(null)}
            className="flex font-Roboto gap-[3px] font-medium 
        
        text-[16px] cursor-pointer"
          >
            Testimonial
          </li>
        </Link>

        <Link to={'/contactUs'}>
          <li
            onMouseEnter={() => setHoveredButton(null)}
            className="flex font-Roboto gap-[3px] font-medium text-[16px] cursor-pointer"
          >
            Contact Us
          </li>
        </Link>
      </ul>
    </div>
  );
}

function NavIconLinks() {
  return (
    <ul className="flex items-center gap-5 lg:gap-8 ml-auto mr-[80px]  ">
      <li className="cursor-pointer">
        <img src={searchIcon} alt="Search Icon" />
      </li>
      <li className="cursor-pointer">
        <img src={cartIcon} alt="Cart Icon" />
      </li>
      <Link to={'/login'}>
        <li className="cursor-pointer">
          <img src={accountIcon} alt="Account Icon" />
        </li>
      </Link>
    </ul>
  );
}

function MobileNavLinks({ hamburgerClicked}) {
  const [clickedIndex,setClickedIndex] = useState(null)
  return (
    <ul
      className={`  min-w-full bg-[rgb(246,246,246)] 
 overflow-hidden max-h-lvh border-solid border-black 
  transition-[height] duration-30 flex flex-col z-10

  ${hamburgerClicked ? ' h-lvh  ' : 'h-0'}`}>
    <div className='flex gap-6 ml-6 pt-6 '>
      <li className='min-h-[42px] min-w-[151px] rounded-[4px]
      border border-solid border-[#5D37B7] text-[#5D37B7]v
      flex items-center justify-center font-Poppins'>Login</li>
      <li className='min-h-[42px] min-w-[151px] rounded-[4px]
       bg-[#5D37B7] text-white
      flex items-center justify-center font-Poppins'>Get In Touch</li>
    </div>
    <div className='mt-[34px] min-h-[36px] ml-6 
     flex flex-col gap-[40px]'>
      <div>
        <div className='flex flex-col max-w-[330px] border 
        border-solid border-black min-h-[300px] rounded-[10px]'>
        <li className='flex font-medium font-Roboto items-center  
        pl-[9px] pt-[6px] gap-[2px]'>
          Shop
        <img src={navDropDown} className='max-h-[24px] max-w-[24px]' alt="" />

      </li>
      <span className='min-h-[1px] mt-[5px] bg-[#D9D9D9]'></span>

      </div>
        </div>
        <li className='flex font-medium font-Roboto items-center gap-[2px]'>
          Customize
        <img src={navDropDown} className='max-h-[24px] max-w-[24px]' alt="" />
        </li>
        <li className='flex font-medium font-Roboto '>
          Testimonials
        </li>
    </div>

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
              setHoveredButton={setHoveredButton}
              originalHeaderIndex={headerIndex}
            />
            <DropDownHeaderLinks
              title="Pet Wheelchair"
              description={'Mobility aids for pets.'}
              setHeaderIndex={setHeaderIndex}
              headerIndex={1}
              refElement={headerRef}
              setHoveredButton={setHoveredButton}
              originalHeaderIndex={headerIndex}
            />
            <DropDownHeaderLinks
              title="Wheelchair Parts"
              description="Replacement parts and accessories"
              setHeaderIndex={setHeaderIndex}
              headerIndex={2}
              refElement={headerRef}
              setHoveredButton={setHoveredButton}
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
              setHoveredButton={setHoveredButton}
              originalHeaderIndex={headerIndex}
            />
            <DropDownHeaderLinks
              title="Custom Pet Chair"
              description={'Tailor-made mobility solutions for your pet'}
              setHeaderIndex={setHeaderIndex}
              headerIndex={1}
              refElement={headerRef}
              setHoveredButton={setHoveredButton}
              originalHeaderIndex={headerIndex}
            />
          </>
        ) : null}
      </div>

      <div className="min-w-[550px] min-h[288px] bg-[#E2E2E2] rounded-[20px]">
        <DropDownColumnsData
          refElement={headerRef}
          hoveredButton={hoveredButton}
          setHoveredButton={setHoveredButton}
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
  if (originalHeaderIndex !== headerIndex) {
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

function DropDownColumnsData({
  hoveredButton,
  headerIndex,
  refElement,
  setHoveredButton,
}) {
  return (
    <div
      ref={refElement}
      className="flex pt-[22px] pb-[26px] px-[30px] gap-[30px] min-h-[288px]"
    >
      {hoveredButton === 'Shop' && headerIndex === 0 ? (
        <>
          <div className="flex flex-col gap-[25px] min-w-[225px]">
            <DropDownColumnsLinks
              setHoveredButton={setHoveredButton}
              title="Powered Wheelchair"
            />
            <DropDownColumnsLinks
              setHoveredButton={setHoveredButton}
              title="Titanium Wheelchair"
            />
            <DropDownColumnsLinks
              setHoveredButton={setHoveredButton}
              title="Quad Rugby Wheelchair"
            />
            <DropDownColumnsLinks
              setHoveredButton={setHoveredButton}
              title="Lightweight Folding Wheelchair"
            />
            <DropDownColumnsLinks
              setHoveredButton={setHoveredButton}
              title="All Terrain Wheelchair"
            />
            <DropDownColumnsLinks
              setHoveredButton={setHoveredButton}
              title="Racing Wheelchair"
            />
          </div>
          <div className="flex flex-col gap-[25px] min-w-[225px]">
            <DropDownColumnsLinks
              setHoveredButton={setHoveredButton}
              title="Basketball Wheelchair"
            />
            <DropDownColumnsLinks
              setHoveredButton={setHoveredButton}
              title="Tennis Wheelchair"
            />
            <DropDownColumnsLinks
              setHoveredButton={setHoveredButton}
              title="Ultra lightweight folding Wheelchair"
            />
            <DropDownColumnsLinks
              setHoveredButton={setHoveredButton}
              title="Standard Everyday Wheelchair"
            />
            <DropDownColumnsLinks
              setHoveredButton={setHoveredButton}
              title="Youth Wheelchair"
            />
            <DropDownColumnsLinks
              setHoveredButton={setHoveredButton}
              title="Gaming Wheelchair"
            />
          </div>
        </>
      ) : null}
      {hoveredButton === 'Shop' && headerIndex === 1 ? (
        <>
          <div className="flex flex-col gap-[25px] min-w-[225px]">
            <DropDownColumnsLinks
              setHoveredButton={setHoveredButton}
              title="Cat Wheelchair"
            />
            <DropDownColumnsLinks
              setHoveredButton={setHoveredButton}
              title="Dog Wheelchair"
            />
            <DropDownColumnsLinks
              setHoveredButton={setHoveredButton}
              title="Hamster Wheelchair"
            />
            <DropDownColumnsLinks
              setHoveredButton={setHoveredButton}
              title="Duck Wheelchair"
            />
            <DropDownColumnsLinks
              setHoveredButton={setHoveredButton}
              title="Chicken Wheelchair"
            />
            <DropDownColumnsLinks
              setHoveredButton={setHoveredButton}
              title="Gorilla Wheelchair"
            />
          </div>
          <div className="flex flex-col gap-[25px] min-w-[225px]">
            <DropDownColumnsLinks
              setHoveredButton={setHoveredButton}
              title="Monkey Wheelchair"
            />
            <DropDownColumnsLinks
              setHoveredButton={setHoveredButton}
              title="Horse Wheelchair"
            />
            <DropDownColumnsLinks
              setHoveredButton={setHoveredButton}
              title="Cow Wheelchair"
            />
            <DropDownColumnsLinks
              setHoveredButton={setHoveredButton}
              title="Bird Wheelchair"
            />
            <DropDownColumnsLinks
              setHoveredButton={setHoveredButton}
              title="Pig Wheelchair"
            />
            <DropDownColumnsLinks
              setHoveredButton={setHoveredButton}
              title="Chinese Wheelchair"
            />
          </div>
        </>
      ) : null}
      {hoveredButton === 'Shop' && headerIndex === 2 ? (
        <>
          <div className="flex flex-col gap-[25px] min-w-[225px]">
            <DropDownColumnsLinks
              setHoveredButton={setHoveredButton}
              title="Wheelchair Tire Accesories"
            />
            <DropDownColumnsLinks
              setHoveredButton={setHoveredButton}
              title="Wheelchair Bags "
            />
            <DropDownColumnsLinks
              setHoveredButton={setHoveredButton}
              title="Wheelchair Pouches"
            />
            <DropDownColumnsLinks
              setHoveredButton={setHoveredButton}
              title="Wheelchair Straps"
            />
            <DropDownColumnsLinks
              setHoveredButton={setHoveredButton}
              title="Wheelchair Brakes"
            />
            <DropDownColumnsLinks
              setHoveredButton={setHoveredButton}
              title="Wheelchair Carriers"
            />
          </div>
          <div className="flex flex-col gap-[25px] min-w-[225px]">
            <DropDownColumnsLinks
              setHoveredButton={setHoveredButton}
              title="Wheelchair Tire Pumps"
            />
            <DropDownColumnsLinks
              setHoveredButton={setHoveredButton}
              title="Wheelchair Tire Inflators"
            />
            <DropDownColumnsLinks
              setHoveredButton={setHoveredButton}
              title="Wheelchair Tire Adapters"
            />
            <DropDownColumnsLinks
              setHoveredButton={setHoveredButton}
              title="Wheelchair Side Guards"
            />
            <DropDownColumnsLinks
              setHoveredButton={setHoveredButton}
              title="Wheelchair Upholstery"
            />
            <DropDownColumnsLinks
              setHoveredButton={setHoveredButton}
              title="Disability Vehicle Hand Controls"
            />
          </div>
        </>
      ) : null}
      {hoveredButton === 'Customize' && headerIndex === 0 ? (
        <>
          <div className="flex flex-col gap-[25px] min-w-[225px]">
            <DropDownColumnsLinks
              setHoveredButton={setHoveredButton}
              title="Powered Wheelchair"
            />
            <DropDownColumnsLinks
              setHoveredButton={setHoveredButton}
              title="Titanium Wheelchair"
            />
            <DropDownColumnsLinks
              setHoveredButton={setHoveredButton}
              title="Quad Rugby Wheelchair"
            />
            <DropDownColumnsLinks
              setHoveredButton={setHoveredButton}
              title="Lightweight Folding Wheelchair"
            />
            <DropDownColumnsLinks
              setHoveredButton={setHoveredButton}
              title="All Terrain Wheelchair"
            />
            <DropDownColumnsLinks
              setHoveredButton={setHoveredButton}
              title="Racing Wheelchair"
            />
          </div>
          <div className="flex flex-col gap-[25px] min-w-[225px]">
            <DropDownColumnsLinks
              setHoveredButton={setHoveredButton}
              title="Basketball Wheelchair"
            />
            <DropDownColumnsLinks
              setHoveredButton={setHoveredButton}
              title="Tennis Wheelchair"
            />
            <DropDownColumnsLinks
              setHoveredButton={setHoveredButton}
              title="Ultra lightweight folding Wheelchair"
            />
            <DropDownColumnsLinks
              setHoveredButton={setHoveredButton}
              title="Standard Everyday Wheelchair"
            />
            <DropDownColumnsLinks
              setHoveredButton={setHoveredButton}
              title="Youth Wheelchair"
            />
            <DropDownColumnsLinks
              setHoveredButton={setHoveredButton}
              title="Gaming Wheelchair"
            />
          </div>
        </>
      ) : null}
      {hoveredButton === 'Customize' && headerIndex === 1 ? (
        <>
          <div className="flex flex-col gap-[25px] min-w-[225px]">
            <Link to={'/customize/customizeCat'}>
              <DropDownColumnsLinks
                setHoveredButton={setHoveredButton}
                title="Cat Wheelchair"
              />
            </Link>
            <DropDownColumnsLinks
              setHoveredButton={setHoveredButton}
              title="Dog Wheelchair"
            />
            <DropDownColumnsLinks
              setHoveredButton={setHoveredButton}
              title="Hamster Wheelchair"
            />
            <DropDownColumnsLinks
              setHoveredButton={setHoveredButton}
              title="Duck Wheelchair"
            />
            <DropDownColumnsLinks
              setHoveredButton={setHoveredButton}
              title="Chicken Wheelchair"
            />
            <DropDownColumnsLinks
              setHoveredButton={setHoveredButton}
              title="Gorilla Wheelchair"
            />
          </div>
          <div className="flex flex-col gap-[25px] min-w-[225px]">
            <DropDownColumnsLinks
              setHoveredButton={setHoveredButton}
              title="Monkey Wheelchair"
            />
            <DropDownColumnsLinks
              setHoveredButton={setHoveredButton}
              title="Horse Wheelchair"
            />
            <DropDownColumnsLinks
              setHoveredButton={setHoveredButton}
              title="Cow Wheelchair"
            />
            <DropDownColumnsLinks
              setHoveredButton={setHoveredButton}
              title="Bird Wheelchair"
            />
            <DropDownColumnsLinks
              setHoveredButton={setHoveredButton}
              title="Pig Wheelchair"
            />
            <DropDownColumnsLinks
              setHoveredButton={setHoveredButton}
              title="Chinese Wheelchair"
            />
          </div>
        </>
      ) : null}
    </div>
  );
}

function DropDownColumnsLinks({ title, setHoveredButton }) {
  return (
    <div
      className="flex cursor-pointer columnContent relative gap-[2px]
     items-center max-w-fit"
      onClick={() => setHoveredButton(null)}
    >
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
  setHoveredButton,
  originalHeaderIndex,
}) {
  return (
    <div
      className="min-w-[180px] max-w-[180px] min-h-[80px] 
      hover:bg-[#E2E2E2] rounded-2xl cursor-pointer
      pl-[19px] pt-[9px] pr-[26px] flex flex-col gap-[4px]
      columnContent"
      onMouseEnter={() =>
        animateColumnData(
          refElement,
          setHeaderIndex,
          headerIndex,
          originalHeaderIndex,
        )
      }
      onClick={() => setHoveredButton(null)}
    >
      <p className="relative max-w-fit font-Roboto font-semibold">{title}</p>
      <p className="font-Poppins text-[12px] text-[#616161] ">{description}</p>
    </div>
  );
}
