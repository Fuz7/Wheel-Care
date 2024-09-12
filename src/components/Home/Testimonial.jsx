import tankWheelchair from '@images/tankWheelchair.svg'

export default function Testimonial() {
  return (
    <section className="min-h-[450px] gap-[66px] mt-[2200px] mb-[600px] flex flex-col">
      <p className="self-center font-Poppins-Medium text-[48px]">Testimonials</p>
      <div className="min-w-full min-h-[700px] bg-[rgb(195,179,242)] pt-[67px]
      flex justify-center gap-[150px]">
        <div className="min-w-[350px] max-w-[350px] max-h-[550px] bg-white
          rounded-t-[200px] flex flex-col items-center">
            <img className='mt-[40px]' src={tankWheelchair} alt="Tank Wheelchair" />
            
            
          </div>
        <div className="min-w-[350px] max-w-[350px] max-h-[550px] bg-white
          rounded-t-[200px]"></div>
        <div className="min-w-[350px] max-w-[350px] max-h-[550px] bg-white
          rounded-t-[200px]"></div>
      </div>
    </section>
  );
}
