import Hero from './components/layout/Hero';
import HomeMap from './components/layout/HomeMap';
import SectionHeaders from './components/layout/header/SectionHeaders';
import Link from 'next/link';
import DoubleImage from './components/layout/home/DoubleImage';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="mt-24 mx-auto  py-4 w-full ">
        <Hero />
        <HomeMap />
        <DoubleImage />
        {/* <section className="text-center my-8" id="contact"> */}
        {/* <SectionHeaders
            subHeader="We would love to hear from you"
            mainHeader="Contact Us"
          /> */}

        {/* <div className="mt-8">
            <p className="text-gray font-semibold">57 Bayview Avenue </p>
            <p className="text-gray font-semibold">
              Monday - Friday, Open from 10:00 - 22:00{' '}
            </p>
            <Link
              className="text-4xl underline text-gray hover:font-semibold"
              href={'tel:+46738123123'}
            >
              +46 738 123 123
            </Link>
          </div> */}
        {/* </section> */}
      </div>
    </main>
  );
}
