import navbarIcon from '@images/navbarIcon.png'

export default function Navbar(){

  return(<>
    <div className="min-h-[70px] border-b-[1px] border-[#414141] flex border-solid px-[240px] items-center">
      <div className='ml-[114px] mr-[127px] flex gap-4 items-center '>
      <img src={navbarIcon} alt="navBarIcon" className='' />
        <p className='font-Roboto font-bold text-2xl'>Wheel Care</p>
      </div>
    </div>

  </>)
}