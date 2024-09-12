import ListedFeature from './ListedFeature';
import Reviews from './Reviews';



export default function Home() {
  return (
    <div className="min-h-[3000px] bg-[#FCFCFC]">
      <div className="flex gap-[90px] mt-[180px]">
        <p
          className="font-Roboto leading-[1.24] tracking-widest 
          text-center  font-bold max-w-[572px] 
          text-[154px] ml-[280px]"
        >
          WHEEL CARE
        </p>
        <div className="flex flex-col mt-[4px] pt-[15px] gap-[20px]">
          <p className="font-Inter max-w-[360px] font-medium text-[48px]">
            Where <span className="text-[#581AAF]">Mobility</span> Meets{' '}
            <span className="text-[#581AAF]">Quality</span>
          </p>
          <p className="font-Roboto max-w-[390px] text-[18px]">
            Unmatched Comfort. We provide expertly crafted wheelchairs, superior
            design, and dedicated support—ensuring you move effortlessly and
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
      <Reviews />
    </div>
  );
}
