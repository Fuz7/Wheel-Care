import footerLogo from '@images/footerLogo.png';

export default function Footer() {
  return (
    <section
      className="mt-auto min-w-full flex justify-center
     min-h-[250px] bg-[#272932]"
    >
      <div className="max-w-[1440px] min-w-[1440px] pt-[16px] flex">
        <div className="flex items-center gap-[8px]">
          <img src={footerLogo} alt="Footer Logo" />
          <p
            className="max-w-[297px] min-w-[297px] text-[36px]
          font-Inter font-medium text-white mb-[4px]"
          >
            Rolling Towards Independence, Built for You.
          </p>
        </div>
        <div className="mt-[48px] ml-[286px] flex flex-col gap-[21px]">
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
        <div className="mt-[72px] ml-[250px] flex flex-col gap-4">
          <div className="text-[20px] font-Poppins-SemiBold text-white">
            Sign up to our Newsletter
          </div>
          <input className='max-w-[254px] font-Poppins-Medium pl-2' type="text" />
        </div>
      </div>
    </section>
  );
}
