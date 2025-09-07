'use client';
import { useEffect, useState } from 'react';
import LayoutThree from './LayoutThree';
import Loading from '../../Loading';

const DoubleImage = () => {
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
      <div
        className="grid grid-cols-2 grid-rows-2   mt-10 sm:mt-16
        gap-8     mb-6"
      >
        <article className=" col-span-2  sxl:col-span-1 row-span-2 relative ">
          {isLoading === false ? (
            <Loading />
          ) : (
            homeFeaturedItems
              .filter((item) => item.filter === 'double')
              .map((image) => <LayoutThree item={image} key={image._id} />)
          )}
        </article>
      </div>
    </section>
  );
};
export default DoubleImage;
