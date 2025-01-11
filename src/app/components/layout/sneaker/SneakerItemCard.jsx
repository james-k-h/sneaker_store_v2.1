import Link from 'next/link';
import AddToCartButton from './AddToCartButton';
import ViewMeButton from './ViewMeButton';

const SneakerItemCard = ({ onAddToCart, ...item }) => {
  const {
    image,
    description,
    name,
    basePrice,
    sizes,
    extraIngredientPrices,
    brand,
  } = item;

  const hasSizesOrExtras =
    sizes?.length > 0 || extraIngredientPrices?.length > 0;
  return (
    <div className="flex flex-col bg-light/20 p-4 rounded-lg text-center  group transition-all hover:shadow-md hover:shadow-black/75 hover:bg-white items-center ">
      <div className="text-center  ">
        <img
          src={image}
          alt="sneakers"
          className="max-h-auto max-h-52 block mx-auto"
        />
      </div>
      <h4 className="font-semibold my-2">{name}</h4>
      <p className="text-gray-500 text-sm  line-clamp-3 mb-2">{brand}</p>
      {/* <Link href={'/mens/' + item._id}>View</Link> */}
      <ViewMeButton link={`/${item.redirect}/`} item={item} />
      {/* <AddToCartButton
        hasSizesOrExtras={hasSizesOrExtras}
        addClick={onAddToCart}
        basePrice={basePrice}
        image={image}
      /> */}
    </div>
  );
};
export default SneakerItemCard;
