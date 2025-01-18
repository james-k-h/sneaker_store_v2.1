'use client';
import { CartContext } from '@/app/components/AppContext';
import SectionHeaders from '@/app/components/layout/header/SectionHeaders';
import { StyledSeparator } from '@/app/registry/new-york/ui/StyledSeparator';
import Image from 'next/image';
import toast from 'react-hot-toast';
import Link from 'next/link';
import { useState, useEffect, useContext } from 'react';
import FlyingButton from 'react-flying-item';
import Loading from '@/app/components/Loading';

const MensId = ({ params }) => {
  const [sneaker, setSneaker] = useState([]);
  const [size, setSize] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { addToCart } = useContext(CartContext);

  const id = params.id;
  useEffect(() => {
    fetch(`/api/sneaker-items/${id}`).then((res) => {
      res.json().then((sneaker) => setSneaker(sneaker));
    });
    setIsLoading(true);
  }, []);

  function clickHandler() {
    console.log(params.id);
    console.log(sneaker.brand);
    // console.log(sneaker);
  }

  async function handleAddToCartButtonClick() {
    // const hasOptions = sizes.length > 0 || extraIngredientPrices.length > 0;
    // if (hasOptions && !showPopup) {
    //   setShowPopup(true);
    //   return;
    // }

    addToCart(sneaker);
    await new Promise((resolve) => setTimeout(resolve, 200));
    // setShowPopup(false);

    toast.success('Added to your cart!', {
      position: 'top-right',
    });
  }
  return (
    <section
      className="w-full py-16 sm:py-24  md:py-32 px-5 
  sm:px-10 md:px-24  sxl:px-32 
 "
    >
      <SectionHeaders subHeader={`${sneaker.name}`} mainHeader="Mens" />
      <div className="grid grid-cols-2 py-8  gap-12  flex flex-col items-center justify-center">
        <div>
          {isLoading === false ? (
            <Loading />
          ) : (
            <Image
              src={sneaker.image}
              alt={sneaker.name}
              width={600}
              height={300}
              className="mx-auto max-h-96 rounded-lg border-2 border-secondary
            hover:shadow-md hover:shadow-black/75 hover:scale-110 transition-smooth
            "
            />
          )}
        </div>
        <div className="text-color_2 gap-4 grid grid-cols-1 justify-center">
          <p>
            <span className="font-semibold uppercase">As low</span> as{' '}
            <span className="font-bold text-color_4 text-2xl">
              ${sneaker.basePrice}
            </span>
          </p>
          <Link href="/shipping" className="">
            Free Shipping,{' '}
            <span className="text-color_4 font-semibold">
              click for details!
            </span>
          </Link>
          <div className="font-semibold ">
            <p>
              Select your size:
              {/* need a form for this part? */}
              <select
                className="w-1/6 text-center"
                value={size}
                onChange={(ev) => setSize(ev.target.value)}
              >
                {sneaker.sizes?.length > 0 &&
                  sneaker.sizes.map((s) => (
                    <option key={s._id} value={s._id} className="text-center">
                      {s.name}
                    </option>
                  ))}
              </select>
            </p>
          </div>
          {/* <div
            className="
       
          py-2"
          >
            <p>order qty placeholder</p>
          </div> */}
          <div className="py-4 w-full md:w-1/4 md:flex text-black " id="target">
            <FlyingButton
              targetTop={'5%'}
              targetLeft={'95%'}
              src={sneaker.image}
            >
              <div
                className="primary sticky bottom-2"
                onClick={handleAddToCartButtonClick}
              >
                Add to cart
              </div>
            </FlyingButton>
          </div>
        </div>
      </div>
      <div className="py-8">
        <StyledSeparator />
        <h2 className="py-4  uppercase text-color_2 font-semibold leading-4">
          Description
        </h2>
        <p className="leading-2 text-color_2">{sneaker.description}</p>
      </div>
      {/* <p className="text-black">
        Hello
        <button onClick={clickHandler}></button>
      </p> */}
    </section>
  );
};
export default MensId;
