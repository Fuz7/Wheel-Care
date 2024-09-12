/* eslint-disable react/prop-types */
import tankWheelchair from '@images/tankWheelchair.svg';
import Rating from '@mui/material/Rating';
import chubbyWheelchair from '@images/chubbyWheelchair.png';
import morganWheelchair from '@images/morganWheelchair.png'

export default function Reviews() {
  return (
    <section className="min-h-[450px] gap-[66px] mt-[2200px] mb-[600px] flex flex-col">
      <p className="self-center font-Poppins-Medium text-[48px]">
        Reviews
      </p>
      <div
        className="min-w-full min-h-[700px] bg-[rgb(195,179,242)] pt-[67px]
      flex justify-center gap-[150px]"
      >
        <ReviewCard
          imgSrc={tankWheelchair}
          rating={4.5}
          header={'Jorge'}
          description="After the first two wheelchairs 
          we were desperately looking for one that was 
          right for him. He has finally go the hang of it and 
          smiles when he is in it, using it like a tractor to get 
          where he wants. Besides making him happy you have brought 
          much joy to our lives as we battle thru degenerative myelopathy. 
          Thank you again, Wheel Care"
        />
        <ReviewCard
          imgSrc={chubbyWheelchair}
          rating={5}
          header={'Buddy'}
          description="Hello! I rented a rear support wheelchair for my miniature 
          dog about two weeks ago and I wanted to inform you that I wanted to 
          rent for another two weeks. She absolutely loves it since she can finally 
          go out on walks with her mother and sister again and I couldn’t be more
           grateful to you guys for giving her that chance. Thank you again, DM!"
        />
        <ReviewCard
          imgSrc={morganWheelchair}
          rating={4.7}
          header={'Morgan'}
          description="He is completely comfortable in his cart now – and the 
          transformation in his personality because he feels more like a “dog” is 
          amazing. He plays now with all of the dogs and they are beginning to play
           back with him – treating him like he is part of the pack. We have gotten 
           a few inquiries about where we got his cart and we are referring all to 
           Wheel Care Carts.

"
        />
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
      <p className="mt-[18px] font-Poppins-SemiBold text-[24px]">{header}</p>
      <Rating
        className="mt-[12px]"
        readOnly
        defaultValue={rating}
        precision={0.1}
        size="large"
        sx={{
          '& .MuiRating-iconFilled': {
            color: '#6228B4', // Set the filled star color to purple
          },
        }}
      />
      <p
        className="max-w-[295px] text-center font-Poppins text-[14px] 
            mt-[20px]"
      >
        {description}
      </p>
    </div>
  );
}
