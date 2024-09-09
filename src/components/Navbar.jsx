import navbarIcon from '@images/navbarIcon.svg';
import navDropDown from '@images/navDropDown.svg';
import searchIcon from '@images/searchIcon.svg';
import cartIcon from '@images/cartIcon.svg';
import accountIcon from '@images/accountIcon.svg';

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
        <li className="dropDownContainer relative flex font-Roboto gap-[3px] font-medium text-[16px] cursor-pointer">
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
    <div className="min-w-[900px] min-h-[360px] absolute top-[47px] left-[-117px] bg-[#FAFAFA] b"></div>
  );
}
