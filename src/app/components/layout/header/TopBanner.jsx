import Link from 'next/link';

const TopBanner = () => {
  return (
    <header
      className="p-2 px-5 sm:px-10 w-full bg-lightGray 
    opacity-85

    "
    >
      {/* <Link className="text-primary font-semibold text-2xl" href={'/'}>
        Bayview Eatery
      </Link> */}
      <div className="flex gap-8  items-center justify-center text-color_2">
        <Link href="/shipping">
          <h1 className="hover:font-semibold italic">
            Free curbside pickup or economy ground shipping on orders over $50
          </h1>
        </Link>
      </div>
    </header>
  );
};
export default TopBanner;
