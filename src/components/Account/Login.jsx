import loginLogo from '@images/loginLogo.png';

export default function Login() {
  return (
    <section
      className="min-h-[850px] min-w-[1440px]
    max-w-[1440px] mt-[50px] flex flex-col mx-auto items-center"
    >
      <h1 className="font-Roboto font-bold text-[48px]">Login</h1>
      <div
        className="mt-[50px] flex loginGradient min-h-[355px]
      min-w-[810px] rounded-[4px]"
      >
        <div className="ml-[27px] flex">
          <img
            className="mt-[68px] max-w-[128px] max-h-[188px]"
            src={loginLogo}
            alt="Login Logo"
          />
          <p
            className="font-Inter font-semibold max-w-[177px]
          text-white text-[24px] mt-[97px] ml-[10px] leading-[130%]"
          >
            Rolling Towards Independence, Built for You.
          </p>
        </div>
        <div className="ml-[28px] min-w-[1px] min-h-full bg-white"></div>
        <div className="ml-[43px] flex flex-col ">
          <form className='flex flex-col' action="">
          <p className="font-Roboto font-medium text-[20px] mt-[83px] text-white">
            Email
          </p>
          <input
            className="min-w-[346px] font-Inter min-h-[36px] text-[18px] 
          pl-[10px] border border-black"
            type="text"
          />
          <p className="font-Roboto font-medium text-[20px] mt-[30px] text-white">
            Password
          </p>
          <input
            className="min-w-[346px] font-Inter min-h-[36px] text-[18px] 
          pl-[10px] border border-black"
            type="password"
          />
          <div
            className="min-w-[346px] min-h-[44px] text-white bg-[#BE3636]
          drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] mt-[50px] flex items-center
          justify-center text-[24px] font-Roboto font-bold cursor-pointer"
          >
            Sign In
          </div>

          </form>
        </div>
      </div>
    </section>
  );
}
