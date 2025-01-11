'use client';
import Link from 'next/link';
import { SearchContext } from '../../AppContext';
import { useContext } from 'react';
import siteMetadata from '@/utils/metaData';

const Footer = () => {
  const { searchProps } = useContext(SearchContext);
  function handleClick() {
    console.log(searchProps);
  }
  return (
    <footer className="border-t p-8 text-center text-color_2 font-semibold py-4 opacity-75 text-sm">
      &copy; 2025 - Sneaker Store: All rights reserved
      <div className="py-4">
        <p className="text-color_4 font-semibold">57 Bayview Avenue </p>
        <p className="text-color_4 font-semibold">
          Monday - Friday, Open from 10:00 - 22:00{' '}
        </p>
        <Link
          className="text-1xl underline text-color_2 hover:font-semibold"
          href={'tel:+46738123123'}
        >
          +46 738 123 123
        </Link>
        {/* <button onClick={handleClick}>dummy</button> */}
      </div>
      <div className="text-balance text-center  leading-loose  md:text-left text-color_2">
        Built by JKH. The source code is available on{' '}
        <a
          href={siteMetadata.github}
          target="_blank"
          rel="noreferrer"
          className="font-medium underline underline-offset-4"
        >
          GitHub
        </a>
        .
      </div>
    </footer>
  );
};
export default Footer;
