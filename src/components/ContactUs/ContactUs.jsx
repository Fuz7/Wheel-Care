import phoneLogo from '@images/phoneLogo.svg'
import emailLogo from '@images/emailLogo.svg'
import addressLogo from '@images/addressLogo.svg'

export default function ContactUs() {
  return (
    <section className="min-h-[1000px] flex flex-col items-center">
      <div className="flex flex-col mt-[90px] max-w-[1440px]">
        <h2
          className="font-Poppins-Bold text-[34px] lg:text-[64px] self-center
        text-[#6228B4]"
        >
          GET IN TOUCH
        </h2>
        <div className="flex flex-col lg:flex-row items-center px-[10px] lg:px-0
        lg:items-start lg:justify-center gap-[27px] mx-auto mt-[50px]">
          <div
            className="min-w-[330px] w-[100%] lg:w-[30%] max-w-[402px] min-h-[150px] 
            lg:min-h-[570px] py-5 lg:py-0 gap-5
          border-solid border-[4px] border-[#6228B4] rounded-[90px]
           flex flex-row lg:flex-col lg:pt-[40px] items-center px-[25px]
            contactGradient" 
          >
            <div
              className="min-w-[120px] max-w-[120px] min-h-[120px]
            rounded-full max-h-[120px] flex items-center justify-center
             bg-white self-center "
            >
              <img className='' src={addressLogo} alt="" />
            </div>
            <div className='flex flex-col items-center justify-center'>
            <h3
              className="lg:mt-[10px] font-Poppins-Bold text-[20px] lg:text-[29px]
           text-white"
            >
              ADDRESS
            </h3>
            <p
              className="mt-[10px]  lg:mt-[36px] text-white
             font-Poppins-SemiBold text-[16px] lg:text-[22px] text-center"
            >
              Matina , PS Building Davao City, Philippines
            </p>
            </div>
          </div>
          <div
            className="min-w-[330px] w-[100%] lg:w-[30%] max-w-[402px] min-h-[150px] 
            lg:min-h-[570px] py-5 lg:py-0 gap-5
          border-solid border-[4px] border-[#6228B4] rounded-[90px]
           flex flex-row lg:flex-col lg:pt-[40px] items-center px-[25px]
            contactGradient" 
          >
            <div
              className="min-w-[120px] max-w-[120px] min-h-[120px]
            rounded-full max-h-[120px] flex items-center justify-center
             bg-white self-center "
            >
              <img src={phoneLogo} alt="" />
            </div>
            <div className='flex flex-col items-center justify-center'>
            <h3
              className="mt-[10px] lg:mt-[15px] font-Poppins-Bold text-[20px] lg:text-[29px]
           text-white"
            >
              PHONE
            </h3>
            <p
              className="mt-[10px] lg:mt-[36px] text-white
             font-Poppins-SemiBold text-[16px] lg:text-[22px] text-center"
            >
              Main Office
            </p>
            <p
              className="mt-[12px] text-white
             font-Poppins-SemiBold text-[16px] lg:text-[22px] text-center"
            >
              Tele #: 245-5142
            </p>
            <p
              className="mt-[12px] text-white
             font-Poppins-SemiBold text-[16px] lg:text-[22px] text-center"
            >
              Mobile #: 09672150952
            </p>

            </div>
          </div>
          <div
            className="min-w-[330px] w-[100%] lg:w-[30%] max-w-[402px] min-h-[150px] 
            lg:min-h-[570px] py-5 lg:py-0 gap-5
          border-solid border-[4px] border-[#6228B4] rounded-[90px]
           flex flex-row lg:flex-col lg:pt-[40px] items-center px-[25px]
            contactGradient" 
          >
            <div
              className="min-w-[120px] max-w-[120px] min-h-[120px]
            rounded-full max-h-[120px] flex items-center justify-center
             bg-white self-center "
            >
              <img src={emailLogo} alt="" />
            </div>
            <div className='flex flex-col self-start items-center justify-center '>
            <h3
              className="lg:mt-[10px] font-Poppins-Bold text-[20px] lg:text-[29px]
           text-white"
            >
              EMAIL
            </h3>
            <p
              className="mt-[20px] lg:mt-[36px] text-white break-words
             font-Poppins-SemiBold text-[16px] lg:text-[22px] text-center"
            >
              wheelcare@gmail.com
            </p>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
