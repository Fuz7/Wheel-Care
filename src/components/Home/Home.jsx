import ListedFeature from './ListedFeature';
import Reviews from './Reviews';
import BestSeller from './BestSeller';
import FAQ from './FAQ';
import TheTeam from './TheTeam';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-[3000px] bg-[#FCFCFC]">
      <div className="flex-col md:flex-row flex 
       md:gap-[40px] lg:gap-[60px] xl:gap-[90px] 
      mt-[120px]  md:mt-[180px] justify-center 
      items-center 2xl:items-stretch">
        <p
          className="font-Roboto leading-[1.24] tracking-widest 
           text-start md:text-center  font-bold max-w-[6.5ch] md:max-w-[7ch] text-[80px] md:text-[100px] lg:text-[110px]
          xl:text-[120px]
          2xl:text-[154px] "
        >
          WHEEL CARE
        </p>
        <div className="flex flex-col mt-[4px] pt-[15px] gap-[30px] md:gap-[20px]">
          <p className="font-Inter max-w-[220px] 
          md:max-w-[300px] lg:max-w-[360px] font-medium 
          md:mx-0 text-[28px]  md:text-[32px]
          lg:text-[40px] xl:text-[44px] 2xl:text-[48px]">
            Where <span className="text-[#581AAF]">Mobility</span> Meets{' '}
            <span className="text-[#581AAF]">Quality</span>
          </p>
          <p className="font-Roboto md:text-justify lg:text-start 
          mx-auto md:mx-0 max-w-[280px] md:max-w-[300px] 
          lg:max-w-[390px] text-[15px] xl:text-[16px] 2xl:text-[18px]">
            Unmatched Comfort. We provide expertly crafted wheelchairs, superior
            design, and dedicated support ensuring you move effortlessly and
            live fully.
          </p>
          <button
            className="max-w-[150px] min-h-[48px] flex 
            items-center justify-center bg-[#5D37B7]
             text-white rounded-[3px] font-Poppins-SemiBold
                "
          >
            Get In Touch
          </button>
        </div>
      </div>
      <ListedFeature />
      <BestSeller />
      <Reviews />
      <TheTeam />
      <FAQ />
    </div>
  );
}
