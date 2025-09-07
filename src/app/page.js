import Hero from './components/layout/Hero';
import HomeMap from './components/layout/HomeMap';
import SectionHeaders from './components/layout/header/SectionHeaders';
import Link from 'next/link';
import DoubleImage from './components/layout/home/DoubleImage';
import { Suspense } from 'react';
import Loading from './components/Loading';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="mt-24 mx-auto  py-4 w-full ">
        {/* <Suspense fallback={<Loading />}> */}
        <Hero />
        <HomeMap />
        <DoubleImage />
        {/* </Suspense> */}
      </div>
    </main>
  );
}
