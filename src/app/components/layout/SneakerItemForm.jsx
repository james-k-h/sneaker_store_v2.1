'use client';
import { useEffect, useState } from 'react';
import EditableImage from './EditableImage';

import SneakerItemPriceProps from './sneaker/SneakerItemPriceProps';

const SneakerItemForm = ({ onSubmit, sneakerItem }) => {
  const [image, setImage] = useState(sneakerItem?.image || '');
  const [name, setName] = useState(sneakerItem?.name || '');
  const [description, setDescription] = useState(
    sneakerItem?.description || ''
  );
  const [basePrice, setBasePrice] = useState(sneakerItem?.basePrice || '');
  const [sizes, setSizes] = useState(sneakerItem?.sizes || []);
  const [extraIngredientPrices, setExtraIngredientPrices] = useState(
    sneakerItem?.extraIngredientPrices || []
  );
  const [category, setCategory] = useState(sneakerItem?.category || '');
  const [categories, setCategories] = useState([]);
  const [sale, setSale] = useState(sneakerItem?.sale || false);
  const [popular, setPopular] = useState(sneakerItem?.sale || false);
  const [topSeller, setTopSeller] = useState(sneakerItem?.sale || false);
  const [newArrival, setNewArrival] = useState(sneakerItem?.sale || false);
  const [brand, setBrand] = useState(sneakerItem?.brand || '');
  const [redirect, setRedirect] = useState(sneakerItem?.redirect || '');

  function asdf() {
    console.log(sale);
  }
  useEffect(() => {
    fetch('/api/categories').then((res) => {
      res.json().then((categories) => {
        setCategories(categories);
      });
    });
  }, []);

  return (
    <form
      className="mt-8 max-w-2xl mx-auto "
      onSubmit={(ev) =>
        onSubmit(ev, {
          image,
          name,
          description,
          basePrice,
          sizes,
          extraIngredientPrices,
          category,
          brand,
          sale,
          popular,
          topSeller,
          newArrival,
          redirect,
        })
      }
    >
      <div
        className="grid gap-4 items-start"
        style={{ gridTemplateColumns: '.3fr .7fr' }}
      >
        <div>
          <EditableImage link={image} setLink={setImage} />
        </div>
        <div className="grow">
          <label className="text-black">Item Name</label>
          <input
            type="text"
            value={name}
            onChange={(ev) => setName(ev.target.value)}
          />
          <label className="text-black">Description</label>
          <input
            type="text"
            value={description}
            onChange={(ev) => setDescription(ev.target.value)}
          />
          <label className="text-black">Category</label>

          <select
            value={category}
            onChange={(ev) => setCategory(ev.target.value)}
          >
            {categories?.length > 0 &&
              categories.map((c) => (
                <option key={c._id} value={c._id}>
                  {c.name}
                </option>
              ))}
          </select>
          <label className="text-black">Base Price</label>
          <input
            type="text"
            value={basePrice}
            onChange={(ev) => setBasePrice(ev.target.value)}
          />
          <label className="text-black">Brand</label>
          <input
            type="text"
            value={brand}
            onChange={(ev) => setBrand(ev.target.value)}
          />
          <label className="text-black">Redirect</label>
          <input
            type="text"
            value={redirect}
            onChange={(ev) => setRedirect(ev.target.value)}
          />
          <div className="gap-4">
            <label className="text-black">Sale</label>
            <input
              type="checkbox"
              checked={sale}
              onChange={(ev) => setSale(ev.target.checked)}
            />
            <label className="text-black">Popular</label>
            <input
              type="checkbox"
              checked={popular}
              onChange={(ev) => setPopular(ev.target.checked)}
            />
            <label className="text-black">New Arrival</label>
            <input
              type="checkbox"
              checked={newArrival}
              onChange={(ev) => setNewArrival(ev.target.checked)}
            />
            <label className="text-black">Top Seller</label>
            <input
              type="checkbox"
              checked={topSeller}
              onChange={(ev) => setTopSeller(ev.target.checked)}
            />
          </div>
          <SneakerItemPriceProps
            name={'Sizes'}
            addLabel={'Add Item Size'}
            props={sizes}
            setProps={setSizes}
          />

          <button type="submit">Save</button>
        </div>
      </div>
    </form>
  );
};
export default SneakerItemForm;
