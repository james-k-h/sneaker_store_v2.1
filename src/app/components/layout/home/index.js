import LayoutOne from './LayoutOne';
import LayoutTwo from './LayoutTwo';
import { HomeFeaturedItems } from './HomeFeaturedItems';
import SectionHeaders from '../header/SectionHeaders';

const FeaturedSneakers = () => {
  return (
    <section
      className="w-full mt-16 sm:mt-24  md:mt-32 px-5 
    sm:px-10 md:px-24  sxl:px-32 
    flex flex-col items-center justify-center"
    >
      <SectionHeaders
        subHeader={'Check Out'}
        mainHeader={'Our Best Sellers and New Arrivals'}
      />

      <div className="grid grid-cols-2 grid-rows-2 gap-6  mt-10 sm:mt-16">
        <article className=" col-span-2  sxl:col-span-1 row-span-2 relative">
          <LayoutOne item={HomeFeaturedItems[0]} />
        </article>
        <article className=" col-span-2 sm:col-span-1 row-span-1 relative">
          <LayoutTwo item={HomeFeaturedItems[1]} />
        </article>
        <article className="col-span-2 sm:col-span-1 row-span-1 relative">
          <LayoutTwo item={HomeFeaturedItems[2]} />
        </article>
      </div>
    </section>
  );
};

export default FeaturedSneakers;
