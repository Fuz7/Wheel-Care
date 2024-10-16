import footerLogo from '@images/footerLogo.png';

export default function Footer() {
  return (
    <section
      className="mt-auto min-w-full flex justify-center
     min-h-[250px] bg-[#272932]"
    >
      <div className="max-w-[1440px] min-w-full items-center  pt-[16px] pb-[60px] lg:pb-0 flex 
      flex-col lg:flex-row lg:justify-center">
        <div className="flex items-center gap-[8px]">
          <img src={footerLogo} alt="Footer Logo" />
          <p
            className="max-w-[297px] min-w-[297px [font-size:clamp(20px,5vw,32px)] lg:text-[36px]
          font-Inter font-medium text-white mb-[4px]"
          >
            Rolling Towards Independence, Built for You.
          </p>  
        </div>
        <div className="mt-[48px]  lg:self-start
        lg:ml-[100px] xl:ml-[170px] 2xl:ml-[286px] flex flex-col gap-[21px]">
          <div
            className="text-[20px] text-white 
          cursor-pointer font-Poppins-SemiBold"
          >
            Donations
          </div>
          <div
            className="text-[20px] text-white 
          cursor-pointer font-Poppins-SemiBold"
          >
            Contact Us
          </div>
          <div
            className="text-[20px] text-white 
          cursor-pointer font-Poppins-SemiBold"
          >
            Testimonials
          </div>
        </div>
        <div className="mt-[72px] lg:self-start
        lg:ml-[100px]  xl:ml-[150px] 2xl:ml-[250px] flex flex-col gap-4">
          <div className="text-[20px] font-Poppins-SemiBold text-white">
            Sign up to our Newsletter
          </div>
          <input className='max-w-[254px] font-Poppins-Medium pl-2' type="text" />
        </div>
      </div>
    </section>
  );
}
