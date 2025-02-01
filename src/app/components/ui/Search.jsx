'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';
import { StyledButton } from '@/app/registry/new-york/ui/StyledButton';
import { useEffect, useState } from 'react';

export default function Search({ placeholder, sneakerBrand, sneakerSale }) {
  const [showForm, setShowForm] = useState(false);
  const [checked, setChecked] = useState(false);
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const openList = () => {
    setShowForm(!showForm);
  };
  const showChecked = () => {
    setChecked(!checked);
  };

  const handleSearch = useDebouncedCallback((term) => {
    console.log(`Searching... ${term}`);

    const params = new URLSearchParams(searchParams);

    params.set('page', '1');

    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  // testing, placeholder - works as expected
  // const brand = ['all', 'test1', 'test2'];
  const brand = sneakerBrand;
  const handleSearchBrand = useDebouncedCallback((brand) => {
    console.log(`Searching... ${brand}`);

    const params = new URLSearchParams(searchParams);

    if (brand === 'Select a Brand') {
      return;
    } else if (brand !== 'Select a Brand') {
      params.set('brand', brand);
    } else {
      params.delete('brand');
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  // clear

  function clearSelections() {
    const params = new URLSearchParams(searchParams);
    params.delete('query');
    params.delete('brand');
    params.delete('sale');
    replace(`${pathname}?${params.toString()}`);
    // handleSearchBrand('Select a Brand');
  }

  const sale = sneakerSale;
  const handleSearchChecked = useDebouncedCallback((sale) => {
    console.log(`Searching... ${sale}`);

    const params = new URLSearchParams(searchParams);

    if (sale) {
      params.set('sale', sale);
    } else {
      params.delete('sale');
    }
    replace(`${pathname}?${params.toString()}`);
    console.log(sale);
  }, 300);

  // function clearSelections() {
  //   const params = new URLSearchParams(searchParams);
  //   params.delete('query');
  //   params.delete('brand');
  //   params.delete('sale');
  //   replace(`${pathname}?${params.toString()}`);
  // }
  function handleTest() {
    console.log(sale);
    console.log(brand);
  }

  function onlyUnique(value, index, array) {
    return array.indexOf(value) === index;
  }

  let uniqueBrandList = brand.filter(onlyUnique);
  uniqueBrandList.splice(0, 0, 'Select a Brand');
  return (
    <>
      <div className=" py-2 mb-4">
        <StyledButton
          onClick={clearSelections}
          className="w-2/3 font-semibold text-m text-color_1"
          variant="secondary"
        >
          Clear All
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m6 4.125 2.25 2.25m0 0 2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
            />
          </svg>
        </StyledButton>
      </div>
      <div className="py-2">
        <label className="font-semibold text-color_1 ">
          Search by Sneaker Name
        </label>
      </div>
      <div className="relative flex flex-1 flex-shrink-0 mb-4">
        <div>
          <label htmlFor="search" className="sr-only">
            Search
          </label>
          <input
            className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
            placeholder="Enter a name"
            onChange={(e) => {
              handleSearch(e.target.value);
            }}
            defaultValue={searchParams.get('query')?.toString()}
          />
          <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
        </div>
      </div>
      <div className="py-4">
        <form className="form gap-4">
          <div className="form-center">
            {showForm == false && (
              <StyledButton
                onClick={openList}
                className="w-2/3 font-semibold text-m text-color_1"
                variant="secondary"
              >
                Search by Brand
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </StyledButton>
            )}
            {showForm == true && (
              <div>
                <StyledButton
                  onClick={openList}
                  className="w-2/3 font-semibold text-m text-color_1"
                  variant="secondary"
                >
                  Search by Brand
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M5 12h14"
                    />
                  </svg>
                </StyledButton>
                <div className="form-row w-2/3 font-semibold text-m">
                  <select
                    className="peer block w-full rounded-md border border-gray-200
                    selection:bg-gray
                    text-color_1
                    bg-secondary
                    text-sm outline-2 placeholder:text-gray-500"
                    // placeholder="Select a Brand"
                    onChange={(e) => {
                      handleSearchBrand(e.target.value);
                    }}

                    // multiple
                  >
                    {uniqueBrandList.map((i, index) => {
                      return (
                        <option key={index} value={i}>
                          {i}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
            )}
          </div>
        </form>
      </div>
    </>
  );
}
