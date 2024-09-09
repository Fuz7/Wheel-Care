import navbarIcon from '@images/navbarIcon.svg';
import navDropDown from '@images/navDropDown.svg';
import searchIcon from '@images/searchIcon.svg';
import cartIcon from '@images/cartIcon.svg';
import accountIcon from '@images/accountIcon.svg';
import rightBlueArrow from '@images/rightArrow.svg';

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
    <div className="ml-[114px] mr-[127px] flex gap-4 items-center ">
      <img src={navbarIcon} alt="navBarIcon" className="" />
      <p className="font-Roboto font-bold text-2xl">Wheel Care</p>
    </div>
  );
}

function NavLinks() {
  return (
    <div className="flex">
      <ul className="flex items-center gap-[80px] mr-[220px]">
        <li
          className="dropDownContainer relative flex font-Roboto gap-[3px] 
          font-medium text-[16px] cursor-pointer"
        >
          Shop
          <img
            className="transition transform ease-out duration-150"
            src={navDropDown}
            alt="Navbar Dropdown"
          />
          <DropDownContainer></DropDownContainer>
        </li>
        <li className="dropDownContainer flex font-Roboto gap-[3px] font-medium text-[16px] cursor-pointer">
          Customize
          <img
            className="transition transform ease-out duration-150"
            src={navDropDown}
            alt="Navbar Dropdown"
          />
        </li>
        <li className="flex font-Roboto gap-[3px] font-medium text-[16px] cursor-pointer">
          Testimonial
        </li>
        <li className="flex font-Roboto gap-[3px] font-medium text-[16px] cursor-pointer">
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

function DropDownContainer() {
  return (
    <div
      className="min-w-[850px] min-h-[360px] 
      absolute top-[47px] left-[-117px]
    bg-[#FAFAFA] border border-solid border-black
      cursor-default rounded-bl-[13px] rounded-br-[13px]
       flex py-[35px] pl-[31px]"
    >
      <div className="min-w-[180px] max-w[180px] mt-2 flex flex-col mr-[56px] gap-3">
        <DropDownHeaderLinks
          title="Wheelchair"
          description="Mobility and Comfort Solutions"
        />
        <DropDownHeaderLinks
          title="Pet Wheelchair"
          description={'Mobility aids for pets.'}
        />
        <DropDownHeaderLinks
          title="Wheelchair Parts"
          description="Replacement parts and accessories"
        />
      </div>
      <div className="min-w-[550px] min-h[288px] bg-[#E2E2E2] rounded-[20px]">
        <DropDownColumnsData></DropDownColumnsData>
      </div>
    </div>
  );
}

function DropDownColumnsData() {
  return (
    <div className="flex pt-[22px] pb-[26px] px-[30px] gap-[30px] min-h-[288px]">
      <div className="flex flex-col gap-[25px] min-w-[225px]">
        <DropDownColumnsLinks title='Powered Wheelchair' />
        <DropDownColumnsLinks title='Titanium Wheelchair' />
        <DropDownColumnsLinks title='Quad Rugby Wheelchair' />
        <DropDownColumnsLinks title='Lightweight Folding Wheelchair' />
        <DropDownColumnsLinks title='All Terrain Wheelchair' />
        <DropDownColumnsLinks title='Racing Wheelchair' />
      </div>
      <div className="flex flex-col gap-[25px] min-w-[225px]">
        <DropDownColumnsLinks title='Basketball Wheelchair' />
        <DropDownColumnsLinks title='Tennis Wheelchair' />
        <DropDownColumnsLinks title='Ultra lightweight folding Wheelchair' />
        <DropDownColumnsLinks title='Standard Everyday Wheelchair' />
        <DropDownColumnsLinks title='Youth Wheelchair' />
        <DropDownColumnsLinks title='Gaming Wheelchair' />
      </div>
    </div>
  );
}

function DropDownColumnsLinks({title}) {
  return <div className="flex cursor-pointer columnContent relative gap-[2px] items-center max-w-fit">
    <p className='font-Roboto font-medium text-[14px]'>
      {title}
      <img
        className="absolute right-[-25px] rightBlueArrow invisible top-[2px]"
        src={rightBlueArrow}
        alt="Blue Arrow" />
    </p>
  </div>;
}

function DropDownHeaderLinks({ title, description }) {
  return (
    <div
      className="min-w-[180px] max-w-[180px] min-h-[80px] 
      hover:bg-[#E2E2E2] rounded-2xl cursor-pointer
      pl-[19px] pt-[9px] pr-[26px] flex flex-col gap-[4px]
      columnContent"
    >
      <p className="relative max-w-fit font-Roboto font-semibold">
        {title}
        <img
          src={rightBlueArrow}
          className=" invisible rightBlueArrow absolute top-[1.75px] right-[-30px]"
        ></img>
      </p>
      <p className="font-Poppins text-[12px] text-[#616161] ">{description}</p>
    </div>
  );
}
