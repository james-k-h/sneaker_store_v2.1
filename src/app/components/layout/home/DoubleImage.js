import { HomeFeaturedItems } from './HomeFeaturedItems';

import LayoutThree from './LayoutThree';

const DoubleImage = () => {
  return (
    <section
      className="w-full mt-16 sm:mt-24  md:mt-32 px-5 
  sm:px-10 md:px-24  sxl:px-32 
  flex flex-col items-center justify-center"
    >
      <div
        className="grid grid-cols-2 grid-rows-2   mt-10 sm:mt-16
        gap-8     mb-6"
      >
        <article className=" col-span-2  sxl:col-span-1 row-span-2 relative ">
          <LayoutThree item={HomeFeaturedItems[3]} />
        </article>
        <article className=" col-span-2  sxl:col-span-1 row-span-2 relative ">
          <LayoutThree item={HomeFeaturedItems[4]} />
        </article>
      </div>
    </section>
  );
};
export default DoubleImage;
