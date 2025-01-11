'use client';
import { useContext, useState } from 'react';
import { CartContext } from '../../AppContext';
import toast from 'react-hot-toast';
import SneakerItemCard from './SneakerItemCard';
import Image from 'next/image';
import FlyingButton from 'react-flying-item';
import Link from 'next/link';

const SneakerItem = (sneakerItem) => {
  const {
    image,
    name,
    description,
    basePrice,
    sizes,
    extraIngredientPrices,
    brand,
  } = sneakerItem;

  const [selectedSize, setSelectedSize] = useState(sizes?.[0] || null);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedExtras, setSelectedExtras] = useState([]);

  const { addToCart } = useContext(CartContext);

  async function handleAddToCartButtonClick() {
    const hasOptions = sizes.length > 0 || extraIngredientPrices.length > 0;
    if (hasOptions && !showPopup) {
      setShowPopup(true);
      return;
    }

    addToCart(sneakerItem, selectedSize, selectedExtras);
    await new Promise((resolve) => setTimeout(resolve, 600));
    setShowPopup(false);

    toast.success('Added to your cart!', {
      position: 'top-right',
    });
  }

  async function handleAddToCartButtonClick() {
    const hasOptions = sizes.length > 0 || extraIngredientPrices.length > 0;
    if (hasOptions && !showPopup) {
      setShowPopup(true);
      return;
    }

    addToCart(sneakerItem, selectedSize, selectedExtras);
    await new Promise((resolve) => setTimeout(resolve, 600));
    setShowPopup(false);

    toast.success('Added to your cart!', {
      position: 'top-right',
    });
  }

  function handleExtraThingClick(ev, extraThing) {
    const checked = ev.target.checked;

    if (checked) {
      setSelectedExtras((prev) => [...prev, extraThing]);
    } else {
      setSelectedExtras((prev) => {
        prev.filter((e) => e.name !== extraThing.name);
      });
    }
  }

  let selectedPrice = basePrice;

  if (selectedSize) {
    selectedPrice += selectedSize.price;
  }

  if (selectedExtras?.length > 0) {
    for (const extra of selectedExtras) {
      selectedPrice += extra.price;
    }
  }

  return (
    <>
      {showPopup && (
        <div
          onClick={() => setShowPopup(false)}
          className="fixed inset-0 bg-white/40 flex items-center justify-center"
        >
          <div
            onClick={(ev) => ev.stopPropagation()}
            className="bg-white/40 text-black p-4 rounded-lg max-w-md max-h-screen overflow-scroll my-8"
          >
            <Image
              src={image}
              alt={name}
              width={300}
              height={200}
              className="mx-auto"
            />
            <h2 className="text-lg font-bold text-center mb-4">{name}</h2>
            <p className="text-center text-gray-500 text-sm mb-2">{brand}</p>
            {sizes?.length > 0 && (
              <div className="bg-secondary rounded-md p-2 mb-4">
                <h3 className="text-center text-gray-500">Pick your size</h3>
                {sizes.map((size, index) => (
                  <label
                    key={index}
                    className="flex items-center gap-1 p-4 mb-1"
                  >
                    <input
                      type="radio"
                      name="size"
                      onChange={() => setSelectedSize(size)}
                      checked={selectedSize?.name === size.name}
                    />
                    <b>{size.name}</b> ${basePrice + size.price}
                  </label>
                ))}
              </div>
            )}
            {extraIngredientPrices?.length > 0 && (
              <div className="py-2">
                <h3 className="text-center text-gray-700">Any extras?</h3>
                {extraIngredientPrices.map((extraThing) => (
                  <label
                    key={extraThing._id}
                    className="flex items-center gap-2 p-4 border rounded-md mb-1"
                  >
                    <input
                      type="checkbox"
                      onChange={(ev) => handleExtraThingClick(ev, extraThing)}
                      checked={selectedExtras
                        .map((e) => e._id)
                        .includes(extraThing._id)}
                      name={extraThing.name}
                    />
                    {extraThing.name} + ${extraThing.price}
                  </label>
                ))}
              </div>
            )}
            {/* href={'/sneaker-items/edit/' + item._id} */}
            {/* <FlyingButton targetTop={'5%'} targetLeft={'95%'} src={image}>
              <div
                className="primary sticky bottom-2"
                onClick={handleAddToCartButtonClick}
              >
                Add to cart ${selectedPrice}
              </div>
            </FlyingButton> */}

            {/* Editing */}
            <Link href={'/sneaker-items/edit/' + sneakerItem._id}>View</Link>
            <button className="mt-2" onClick={() => setShowPopup(false)}>
              Cancel
            </button>
          </div>
        </div>
      )}
      <SneakerItemCard
        onAddToCart={handleAddToCartButtonClick}
        {...sneakerItem}
      />
    </>
  );
};
export default SneakerItem;
