/* eslint-disable react/prop-types */
import featInnovative from '@images/featInnovative.svg';
import featPrecision from '@images/featPrecision.svg';
import featCustomizable from '@images/featCustomizable.svg';
import featExperts from '@images/featExperts.svg';

export function ListedFeature() {
  return (
    <div
      className="min-h-[465px] mt-[250px] bg-[#6228B4]
       flex flex-col gap-[58px] items-center mb-[400px]"
    >
      <p className="mt-[25px] font-Poppins-SemiBold text-white text-[40px]">
        Crafted for Freedom. Engineered for Excellence.
      </p>
      <div className="flex gap-[103px] mt-[58px]">
        <ListItem
          src={featInnovative}
          text={'THE MOST INNOVATIVE WHEELCHAIR AVAILABLE'}
        />
        <ListItem
          src={featPrecision}
          text={'CUSTOM BUILT WITH PRECISION FOR EVERY USERS'}
        />
        <ListItem
          src={featCustomizable}
          text={'FULLY CUSTOMIZABLE FOR A SEAMLESS EXPERIENCE'}
        />
        <ListItem
          src={featExperts}
          text={'DESIGNED BY LEADING MOBILITY EXPERTS'}
        />
      </div>
    </div>
  );
}

function ListItem({ src, text }) {
  return (
    <div className="flex flex-col min-w-[250px] max-w-[250px] gap-5">
      <img src={src} className="max-h-[82px] max-w-[82px]:" alt="Feature" />
      <p className="text-white text-center font-Poppins text-[16px]">{text}</p>
    </div>
  );
}
