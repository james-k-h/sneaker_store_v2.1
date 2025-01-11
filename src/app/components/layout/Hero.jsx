'use client';
import Image from 'next/image';
import sneaker_store from '../../../../public/sneaker_store.jpg';
import about_us from '../../../../public/about_us.jpg';
import Right from '../icons/Right';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="">
      <div className="h-[300px] w-full flex justify-center mt-2 mb-[20rem]">
        <div className="relative h-[500px] w-full mx-auto">
          <Image
            className="h-[500px] object-cover 
        
             w-full"
            src={sneaker_store}
            alt=""
          />
          <div
            className="absolute top-[10rem] 
          left-[3.5rem] right-[3.5rem] flex flex-col items-center 
          gap-4 m-2 text-center"
          >
            <span
              className="text-white text-4xl font-bold opacity-90
           rounded-md hover:font-bold"
            >
              Get yourself {/* <span className="text-emerald-500"> */}a pair of
              the most cutting edge running shoes to perform at your best
              {/* </span> */}
            </span>

            <span className="text-[#efefefe8] text-3xl text-lightGray font-bold">
              By runners, for runners.
            </span>
            <Link
              href="/sneakers"
              className="mt-6 bg-color_3 text-[#efefef] px-8 py-2 rounded-xl text-[18px]
          transition-all hover:bg-color_2"
            >
              See now
            </Link>
          </div>
        </div>
      </div>
      <div
      // className="grid grid-cols-1 sm:grid-cols-10"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-6 place-self-center text-center  justify-self-start
         sm:text-center px-8
          "
        >
          <h1 className="text-4xl font-semibold text-color_1">
            Everything <br />
            is better
            <br /> with a&nbsp;
            <span className="text-color_2">great pair of shoes</span>
          </h1>
          <p className="my-6 text-color_1 text-sm">From our family to yours</p>
          {/* <div className="flex gap-4 text-sm justify-center">
            <Link
              href="/menu"
              className="flex justify-center bg-color_2  items-center gap-2 text-color_1 px-4 py-2 rounded-full"
            >
              Order now
              <Right />
            </Link>
          </div> */}
          <div className="flex gap-4 text-sm justify-center mt-2">
            <Link
              href="/about"
              className="flex justify-center bg-color_2  items-center gap-2 text-white px-4 py-2 rounded-full
              font-semibold hover:font-bold hover:opacity-75
              "
            >
              Learn more
              <Right />
            </Link>
          </div>
        </motion.div>

        {/* <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >

          <h1 className="text-4xl font-semibold text-color_1">
            Everything <br />
            is better
            <br /> with a&nbsp;
            <span className="text-color_2"> good meal</span>
          </h1>
          <p className="my-6 text-color_1 text-sm">From our family to yours</p>
          <div className="flex gap-4 text-sm justify-end">
            <Link
              href="/menu"
              className="flex justify-center bg-color_2  items-center gap-2 text-color_1 px-4 py-2 rounded-full"
            >
              Order now
              <Right />
            </Link>
          </div>
          <div className="flex gap-4 text-sm justify-end mt-2">
            <Link
              href="/#about"
              className="flex justify-center bg-color_4  items-center gap-2 text-color_2 px-4 py-2 rounded-full"
            >
              Learn more
              <Right />
            </Link>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
};
export default Hero;
