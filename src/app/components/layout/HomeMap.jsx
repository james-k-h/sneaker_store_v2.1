'use client';

import { useEffect, useState } from 'react';
import FeaturedSneakers from './home';

const HomeMap = () => {
  const [bestSellers, setBestSellers] = useState([]);

  // not needed for now
  // useEffect(() => {
  //   fetch('/api/menu-items').then((res) => {
  //     res.json().then((menuItems) => {
  //       setBestSellers(menuItems.slice(-3));
  //     });
  //   });
  // }, []);

  return (
    // <section className="py-16 mt-20">
    <div className="text-center mb-40">
      {/* <div className="grid lg:grid-cols-3  md:grid-cols-2 sm:grid-cols-1 gap-4 mt-8">
        {bestSellers?.length > 0 &&
          bestSellers.map((item, i) => <MenuItem {...item} key={i} />)}
      </div> */}
      <FeaturedSneakers />
    </div>
    // </section>
  );
};
export default HomeMap;
