import phoneLogo from '@images/phoneLogo.svg'
import emailLogo from '@images/emailLogo.svg'
import addressLogo from '@images/addressLogo.svg'

export default function ContactUs() {
  return (
    <section className="min-h-[1000px] flex flex-col items-center">
      <div className="flex flex-col mt-[30px] max-w-[1440px] min-w-[1440px]">
        <h2
          className="font-Poppins-Bold text-[64px] self-center
        text-[#6228B4]"
        >
          GET IN TOUCH
        </h2>
        <div className="flex gap-[27px] mx-auto mt-[50px]">
          <div
            className="min-w-[402px] max-w-[402px] min-h-[570px]
          border-solid border-[4px] border-[#6228B4] rounded-[90px]
           flex flex-col pt-[40px] items-center px-[25px] contactGradient" 
          >
            <div
              className="min-w-[120px] max-w-[120px] min-h-[120px]
            rounded-full max-h-[120px] flex items-center justify-center
             bg-white self-center "
            >
              <img src={addressLogo} alt="" />
            </div>
            <h3
              className="mt-[10px] font-Poppins-Bold text-[29px]
           text-white"
            >
              ADDRESS
            </h3>
            <p
              className="mt-[36px] text-white
             font-Poppins-SemiBold text-[22px] text-center"
            >
              Matina , PS Building Davao City, Philippines
            </p>
          </div>
          <div
            className="min-w-[402px] max-w-[402px] min-h-[570px]
          border-solid border-[4px] border-[#6228B4] rounded-[90px]
           flex flex-col pt-[40px] items-center px-[25px] contactGradient"
          >
            <div
              className="min-w-[120px] max-w-[120px] min-h-[120px]
            rounded-full max-h-[120px] flex items-center justify-center
             bg-white self-center "
            >
              <img src={phoneLogo} alt="" />
            </div>
            <h3
              className="mt-[10px] font-Poppins-Bold text-[29px]
           text-white"
            >
              PHONE
            </h3>
            <p
              className="mt-[36px] text-white
             font-Poppins-SemiBold text-[22px] text-center"
            >
              Main Office
            </p>
            <p
              className="mt-[12px] text-white
             font-Poppins-SemiBold text-[22px] text-center"
            >
              Tele #: 245-5142
            </p>
            <p
              className="mt-[12px] text-white
             font-Poppins-SemiBold text-[22px] text-center"
            >
              Mobile #: 09672150952
            </p>
          </div>
          <div
            className="min-w-[402px] max-w-[402px] min-h-[570px]
          border-solid border-[4px] border-[#6228B4] rounded-[90px]
           flex flex-col pt-[40px] items-center px-[25px] contactGradient"
          >
            <div
              className="min-w-[120px] max-w-[120px] min-h-[120px]
            rounded-full max-h-[120px] flex items-center justify-center
             bg-white self-center "
            >
              <img src={emailLogo} alt="" />
            </div>
            <h3
              className="mt-[10px] font-Poppins-Bold text-[29px]
           text-white"
            >
              EMAIL
            </h3>
            <p
              className="mt-[36px] text-white
             font-Poppins-SemiBold text-[22px] text-center"
            >
              wheelcare@gmail.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
