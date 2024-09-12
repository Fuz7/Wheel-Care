/* eslint-disable react/prop-types */
import tankWheelchair from '@images/tankWheelchair.svg';
import Rating from '@mui/material/Rating';

export default function Testimonial() {
  return (
    <section className="min-h-[450px] gap-[66px] mt-[2200px] mb-[600px] flex flex-col">
      <p className="self-center font-Poppins-Medium text-[48px]">
        Testimonials
      </p>
      <div
        className="min-w-full min-h-[700px] bg-[rgb(195,179,242)] pt-[67px]
      flex justify-center gap-[150px]"
      >
        <ReviewCard
          imgSrc={tankWheelchair}
          rating={4.6}
          header={'Salamat Idolo'}
          description="After the first two wheelchairs 
          we were desperately looking for one that was 
          right for him. He has finally go the hang of it and 
          smiles when he is in it, using it like a tractor to get 
          where he wants. Besides making him happy you have brought 
          much joy to our lives as we battle thru degenerative myelopathy. 
          Thank you again, Steve & Luisa Cartier"
        />
        <div
          className="min-w-[350px] max-w-[350px] max-h-[550px] bg-white
          rounded-t-[200px]"
        ></div>
        <div
          className="min-w-[350px] max-w-[350px] max-h-[550px] bg-white
          rounded-t-[200px]"
        ></div>
      </div>
    </section>
  );
}

function ReviewCard({ imgSrc, rating, header, description }) {
  return (
    <div
      className="min-w-[350px] max-w-[350px] max-h-[550px] bg-white
          rounded-t-[200px] flex flex-col items-center"
    >
      <img className="mt-[40px]" src={imgSrc} alt="Reviewed Wheelchair" />
      <Rating
      className="mt-[18px]"
        readOnly
        defaultValue={rating}
        precision={0.1}

      />
      <p className="mt-[19px] font-Poppins-SemiBold text-[24px]">{header}</p>
      <p
        className="max-w-[295px] text-center font-Poppins text-[14px] 
            mt-[20px]"
      >
        {description}
      </p>
    </div>
  );
}
