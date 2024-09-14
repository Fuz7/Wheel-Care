import jamesOliver from '@images/jamesOliver.png';
import carlJohnson from '@images/carlJohnson.png'
import xLogo from '@images/X.png';
import instragramLogo from '@images/Instagram.png';
import facebookLogo from '@images/Facebook.png';
import linkedInLogo from '@images/LinkedIn.png';

export default function TheTeam() {
  return (
    <div className="mt-[400px] flex flex-col items-center">
      <h2 className="font-Poppins-SemiBold text-[48px]">Meet The Team</h2>
      <div
        className="flex mt-[100px] max-w-[1620px] min-w-[1620px] 
      min-h-[413px] max-h-[413px] overflow-hidden"
      >
        <div className=" ml-[400px] flex gap-[30px]">
          <img className='min-w-[370px]' src={jamesOliver} alt="James Oliver" />
          <div className="flex min-w-[450px] flex-col">
            <p className="font-Poppins-SemiBold text-[32px]">
              James Oliver Mendoza
            </p>
            <div className="flex mt-[10px] gap-[13px]">
              <img className='cursor-pointer' src={xLogo} alt="" />
              <img className='cursor-pointer' src={instragramLogo} alt="" />
              <img className='cursor-pointer' src={facebookLogo} alt="" />
              <img className='cursor-pointer' src={linkedInLogo} alt="" />
            </div>
            <p className="font-Poppins text-[24px] mt-[40px]">Role: Baby Boy</p>
            <p className="font-Poppins text-[16px] mt-[20px] max-w-[450px]">
              Skills: Warcry, Berskers Call, Counter Helix, Culling Blade
            </p>
            <p className="font-Poppins mt-[38px] text-[#000000e3] text-[13px] max-w-[450px]">
              {`Meet our youngest and most adorable team member, Baby Boy! Though
              his expertise may still be in the works, he brings endless joy,
              energy, and laughter to our team. Always curious and full of
              wonder, Baby Boy reminds us to approach challenges with a fresh
              perspective. Whether it's a contagious giggle or a tiny fist bump,
              he's the heart of our crew, spreading positivity in every task
              (and nap time).`}
            </p>
          </div>
        </div>
        <div className=" flex gap-[30px] scale-75 opacity-50 transition-transform">
          <img className='min-w-[370px]' src={carlJohnson} alt="James Oliver" />
          <div className="flex min-w-[450px] flex-col">
            <p className="font-Poppins-SemiBold text-[32px]">
              James Oliver Mendoza
            </p>
            <div className="flex mt-[10px] gap-[13px]">
              <img className='cursor-pointer' src={xLogo} alt="" />
              <img className='cursor-pointer' src={instragramLogo} alt="" />
              <img className='cursor-pointer' src={facebookLogo} alt="" />
              <img className='cursor-pointer' src={linkedInLogo} alt="" />
            </div>
            <p className="font-Poppins text-[24px] mt-[40px]">Role: Baby Boy</p>
            <p className="font-Poppins text-[16px] mt-[20px] max-w-[450px]">
              Skills: Warcry, Berskers Call, Counter Helix, Culling Blade
            </p>
            <p className="font-Poppins mt-[38px] text-[#000000e3] text-[13px] max-w-[450px]">
              {`Meet our youngest and most adorable team member, Baby Boy! Though
              his expertise may still be in the works, he brings endless joy,
              energy, and laughter to our team. Always curious and full of
              wonder, Baby Boy reminds us to approach challenges with a fresh
              perspective. Whether it's a contagious giggle or a tiny fist bump,
              he's the heart of our crew, spreading positivity in every task
              (and nap time).`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
