import bigCat1 from '@images/bigCat1.png';
import smallCat1 from '@images/smallCat1.png';
import smallCat2 from '@images/smallCat2.png';
import smallCat3 from '@images/smallCat3.png';
import smallCat4 from '@images/smallCat4.png';
export default function CustomizeCat() {
  return (
    <section
      className="min-h-[850px] min-w-[1440px]
    max-w-[1440px] mt-5 flex flex-col mx-auto"
    >
      <h2
        className="font-Roboto font-medium text-[60px]
      self-center "
      >
        Customize Cat Wheelchair
      </h2>
      <div className="flex mt-[40px] gap-[100px] ml-[80px]">
        <div className="flex flex-col">
          <img src={bigCat1} alt="" />
          <div
            className="mt-[20px] min-w-[450px] min-h-[108px] flex 
        gap-[6px]"
          >
            <img
              className="border-[8px] border-[#1660CF] border-solid
            rounded-sm cursor-pointer"
              src={smallCat1}
              alt="Smol Cat"

            />
            <img
              className="border-[8px] border-[#d0d0d0] border-solid
            rounded-sm cursor-pointer"
              src={smallCat2}
              alt="Smol Cat"
            />
            <img
              className="border-[8px] border-[#d0d0d0] border-solid
            rounded-sm cursor-pointer"
              src={smallCat3}
              alt="Smol Cat"
            />
            <img
              className="border-[8px] border-[#d0d0d0] border-solid
            rounded-sm cursor-pointer"
              src={smallCat4}
              alt="Smol Cat"
            />
          </div>
        </div>
        <div className='flex flex-col'>
          <h3 className='font-Roboto font-medium text-[26px]'>Pet Name</h3>
        </div>
      </div>
    </section>
  );
}
