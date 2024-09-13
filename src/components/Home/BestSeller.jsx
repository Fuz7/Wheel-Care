/* eslint-disable react/prop-types */
import bestSellerJorge from '@images/bestSellerJorge.svg'

export default function BestSeller(){
  return(
    <section className="mt-[2300px] flex flex-col gap-[50px]o">
      <p className="self-center font-Poppins-SemiBold text-[48px]">Our Best Seller</p>
      <div className="flex gap-[52px] self-center">
        <Cards imgSrc={bestSellerJorge} title='Wheelchair for Dogs'
        titleTag='Rear Support' price='70' />
        <Cards imgSrc={bestSellerJorge} title='Wheelchair for Dogs'
        titleTag='Rear Support' price='70' />
        <Cards imgSrc={bestSellerJorge} title='Wheelchair for Dogs'
        titleTag='Rear Support' price='70' />
        <Cards imgSrc={bestSellerJorge} title='Wheelchair for Dogs'
        titleTag='Rear Support' price='70' />
      </div>
    </section>
  )
} 

function Cards({imgSrc,title,titleTag,price}) {
  return (<div className="min-w-[300px] max-w-[300px] bg-white min-h-[503px] max-h-[503px]
    drop-shadow-[0_1px_4px_rgba(0,0,0,0.41)] flex flex-col items-center ">
      <img className=' mt-[18px]' src={imgSrc} alt="Best Seller" />
      <p className='font-Poppins-Bold mt-[20px] text-[20px]'>{title}</p>
      <p className='font-Poppins-Medium text-[20px]'>{titleTag}</p>
      <p className='font-Poppins text-[12px] mt-[16px]'>Starts At</p>
      <p className='font-Poppins-Bold text-[40px] text-[#6228B4]'> ${price}</p>
    </div>);
}