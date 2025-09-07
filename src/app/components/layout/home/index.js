'use client';
import LayoutOne from './LayoutOne';
import LayoutTwo from './LayoutTwo';
import { HomeFeaturedItems } from './HomeFeaturedItems';
import SectionHeaders from '../header/SectionHeaders';
import { useState, useEffect } from 'react';
import Loading from '../../Loading';

const FeaturedSneakers = () => {
  const [homeFeaturedItems, setHomeFeaturedItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetch('/api/home-featured').then((res) => {
      res
        .json()
        .then((homeFeaturedItems) => setHomeFeaturedItems(homeFeaturedItems));
    });
    setIsLoading(true);
  }, []);
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
        {/* solo */}
        {isLoading === false ? (
          <Loading />
        ) : (
          homeFeaturedItems
            .filter((item) => item.filter === 'solo')
            .map((image) => (
              <article
                key={image._id}
                className=" col-span-2  sxl:col-span-1 row-span-2 relative"
              >
                <LayoutOne item={image} />
              </article>
            ))
        )}
        {/* double */}
        {isLoading === false ? (
          <Loading />
        ) : (
          homeFeaturedItems
            .filter((item) => item.filter === 'single')
            .map((image) => (
              <article
                key={image._id}
                className=" col-span-2 sm:col-span-1 row-span-1 relative"
              >
                <LayoutTwo item={image} />
              </article>
            ))
        )}
        {/* <article className=" col-span-2 sm:col-span-1 row-span-1 relative">
          <LayoutTwo item={HomeFeaturedItems[1]} />
        </article>
        <article className="col-span-2 sm:col-span-1 row-span-1 relative">
          <LayoutTwo item={HomeFeaturedItems[2]} />
        </article> */}
      </div>
    </section>
  );
};

export default FeaturedSneakers;
