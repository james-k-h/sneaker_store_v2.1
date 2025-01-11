import Link from 'next/link';
import { StyledButton } from '../../registry/new-york/ui/StyledButton';
import { cn } from './../../lib/utils';
import Search from '../ui/Search';

import FormRowSelect from '../ui/FormRowSelect';
import { useEffect, useState } from 'react';
import ViewMeButton from '../layout/sneaker/ViewMeButton';

export function SidebarFilter({ className, sneakerItems, categoryString }) {
  const [isLoading, setIsLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const sneakerBrand = sneakerItems
    .filter((item) => item.category === categoryString)
    .map((item) => item.brand);

  const sneakerSale = sneakerItems
    .filter((item) => item.category === categoryString)
    .map((item) => item.sale);

  const sneakerPrice = sneakerItems
    .filter((item) => item.category === categoryString)
    .map((item) => item.basePrice);

  // const searchStatus =
  const handleChange = (e) => {
    sneakerItems.filter((item) => item.brand === e.value);
  };

  // function handleClick(url) {
  //   event.preventDefault();
  //   window.location = url;
  // }
  function handleClick() {
    console.log(sneakerBrand);
  }
  const handleSearch = (e) => {
    if (isLoading) return;
    handleChange({ name: e.target.name, value: e.target.value });
    console.log(e.target.value);
  };
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   clearFilters();
  // };

  const openList = () => {
    setShowForm(!showForm);
  };

  return (
    <div className={cn('pb-12', className)}>
      <div className="space-y-4 py-4 text-color_4">
        <div className="px-3 py-2">
          {/* <label className="font-semibold text-black ">
            Search by Sneaker Name
          </label> */}

          <Search
            sneakerBrand={sneakerBrand}
            className={className}
            sneakerSale={sneakerSale}
          />
        </div>{' '}
      </div>
    </div>
  );
}
