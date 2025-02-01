'use client';

import SneakerItem from '../components/layout/sneaker/SneakerItem';
import { Suspense, useEffect, useState } from 'react';
import { ScrollArea, ScrollBar } from '../registry/new-york/ui/scroll-area';
import { StyledSeparator } from '../registry/new-york/ui/StyledSeparator';
import {
  StyledTabs,
  StyledTabsContent,
} from '../registry/new-york/ui/StyledTabs';
import { StyledButton } from '../registry/new-york/ui/StyledButton';

import SectionHeaders from '../components/layout/header/SectionHeaders';
import { SidebarFilter } from '../components/scaffolding/SidebarFilter';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const Mens = ({ params }) => {
  const [categories, setCategories] = useState([]);
  const [sneakerItems, setSneakerItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterBrand, setFilterBrand] = useState('');
  const [pageLength, setPageLength] = useState(null);
  const [ifClicked, setIfClicked] = useState(false);
  const [limit, setLimit] = useState(null);

  const searchProps = useSearchParams();
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    params.set('limit', 3);
    replace(`${pathname}?${params.toString()}`);
    fetch('/api/categories').then((res) => {
      res.json().then((categories) => setCategories(categories));
    });
    fetch('/api/sneaker-items').then((res) => {
      res
        .json()
        .then((sneakerItems) =>
          setSneakerItems(
            sneakerItems.filter(
              (item) => item.category === '6760e8a186313c34b0e0658a'
            )
          )
        )
        .then(setSearchQuery(searchProps.get('query')))
        .then(setFilterBrand(searchProps.get('brand')))
        .then(setLimit(searchParams.get('limit')));
    });
  }, [searchProps, filterBrand]);

  function testingButton() {
    // console.log(query);
    console.log('testing');
    console.log(searchQuery);
    // console.log(filterBrand);
    // console.log(pageLength);
    console.log(sneakerItems);
  }

  const removeLimit = () => {
    const params = new URLSearchParams(searchParams);
    params.delete('limit');
    replace(`${pathname}?${params.toString()}`);
    setIfClicked(true);
  };

  let sneakerLength = sneakerItems.length;

  let limitedItems = sneakerItems.slice(0, limit);

  let categoryString = '6760e8a186313c34b0e0658a';

  const divClassname =
    'grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3  gap-4 mt-4 mb-12';

  return (
    <>
      <div className="md:block">
        {/* <Suspense> */}
        {/* <Menu /> */}
        <div className="border-t">
          <div className="bg-background mt-16">
            <div className="grid lg:grid-cols-5">
              {/* sidebar */}

              <SidebarFilter
                sneakerItems={sneakerItems}
                className="hidden lg:block mt-16 text-color_4"
                categoryString={categoryString}
                // query={query}
              />
              <div className="col-span-3 lg:col-span-4 lg:border-l mt-16 ">
                <div className="h-full px-4 py-6 lg:px-8">
                  <StyledTabs
                    defaultValue="sneakers"
                    className="h-full space-y-6 text-color_4"
                  >
                    {/* <button onClick={testingButton}>testing </button> */}
                    <div className="text-center ">
                      <SectionHeaders
                        subHeader="Top selling Mens shoes, for athletic performance or just everyday use"
                        mainHeader="Mens"
                      />
                    </div>
                    {/* <section className="text-center my-8" id="contact"> */}

                    <StyledTabsContent
                      value="sneakers"
                      className="border-none p-0 outline-none text-center "
                    >
                      <StyledSeparator className="my-4" />

                      {/* bottom section mapping*/}

                      <div className="relative">
                        <ScrollArea>
                          {/* both blank */}
                          {ifClicked != true &&
                            searchQuery === ('' || null) &&
                            filterBrand === ('' || null) && (
                              <div>
                                <StyledButton
                                  onClick={removeLimit}
                                  variant="secondary"
                                  className="w-1/4"
                                >
                                  View All{' '}
                                </StyledButton>
                                <div className={divClassname}>
                                  {limitedItems
                                    .filter(
                                      (item) =>
                                        item.category ===
                                        '6760e8a186313c34b0e0658a'
                                    )
                                    .map((item, i) => (
                                      <SneakerItem {...item} key={i} />
                                    ))}
                                </div>
                              </div>
                            )}
                          {ifClicked == true &&
                            searchQuery === ('' || null) &&
                            filterBrand === ('' || null) && (
                              <div className={divClassname}>
                                {sneakerItems
                                  .filter(
                                    (item) =>
                                      item.category ===
                                      '6760e8a186313c34b0e0658a'
                                  )
                                  .map((item, i) => (
                                    <SneakerItem {...item} key={i} />
                                  ))}
                              </div>
                            )}
                          {/* search blank, brand chosen */}
                          {ifClicked != true &&
                            searchQuery === ('' || null) &&
                            filterBrand != '' && (
                              <div className={divClassname}>
                                {sneakerItems
                                  .filter(
                                    (item) =>
                                      item.category ===
                                      '6760e8a186313c34b0e0658a'
                                  )
                                  .filter((item) =>
                                    item.brand.includes(filterBrand)
                                  )
                                  .map((item, i) => (
                                    <SneakerItem {...item} key={i} />
                                  ))}
                              </div>
                            )}
                          {ifClicked == true &&
                            searchQuery === ('' || null) &&
                            filterBrand != '' && (
                              <div className={divClassname}>
                                {sneakerItems
                                  .filter(
                                    (item) =>
                                      item.category ===
                                      '6760e8a186313c34b0e0658a'
                                  )
                                  .filter((item) =>
                                    item.brand.includes(filterBrand)
                                  )
                                  .map((item, i) => (
                                    <SneakerItem {...item} key={i} />
                                  ))}
                              </div>
                            )}
                          {/* search chosen, brand blank */}
                          {ifClicked != true &&
                            filterBrand === ('' || null) &&
                            searchQuery != '' && (
                              <div className={divClassname}>
                                {sneakerItems
                                  .filter(
                                    (item) =>
                                      item.category ===
                                      '6760e8a186313c34b0e0658a'
                                  )
                                  .filter((item) =>
                                    item.name
                                      .toLowerCase()
                                      .includes(
                                        searchQuery != ('' || null)
                                          ? searchQuery.toLowerCase()
                                          : searchQuery
                                      )
                                  )
                                  .map((item, i) => (
                                    <SneakerItem {...item} key={i} />
                                  ))}
                              </div>
                            )}
                          {ifClicked == true &&
                            filterBrand === ('' || null) &&
                            searchQuery != '' && (
                              <div>
                                <div className={divClassname}>
                                  {sneakerItems
                                    .filter(
                                      (item) =>
                                        item.category ===
                                        '6760e8a186313c34b0e0658a'
                                    )
                                    .filter((item) =>
                                      item.name
                                        .toLowerCase()
                                        .includes(
                                          searchQuery != ('' || null)
                                            ? searchQuery.toLowerCase()
                                            : searchQuery
                                        )
                                    )
                                    .map((item, i) => (
                                      <SneakerItem {...item} key={i} />
                                    ))}
                                </div>
                              </div>
                            )}
                          {/* both chosen */}
                          {ifClicked != true &&
                            searchQuery !== '' &&
                            filterBrand !== '' && (
                              <div className={divClassname}>
                                {sneakerItems
                                  .filter(
                                    (item) =>
                                      item.category ===
                                      '6760e8a186313c34b0e0658a'
                                  )
                                  .filter((item) =>
                                    item.name
                                      .toLowerCase()
                                      .includes(
                                        searchQuery != ('' || null)
                                          ? searchQuery.toLowerCase()
                                          : searchQuery
                                      )
                                  )
                                  .filter((item) =>
                                    item.brand.includes(filterBrand)
                                  )
                                  .map((item, i) => (
                                    <SneakerItem {...item} key={i} />
                                  ))}
                              </div>
                            )}
                          {ifClicked == true &&
                            searchQuery !== '' &&
                            filterBrand !== '' && (
                              <div className={divClassname}>
                                {sneakerItems
                                  .filter(
                                    (item) =>
                                      item.category ===
                                      '6760e8a186313c34b0e0658a'
                                  )
                                  .filter((item) =>
                                    item.name
                                      .toLowerCase()
                                      .includes(
                                        searchQuery != ('' || null)
                                          ? searchQuery.toLowerCase()
                                          : searchQuery
                                      )
                                  )
                                  .filter((item) =>
                                    item.brand.includes(filterBrand)
                                  )
                                  .map((item, i) => (
                                    <SneakerItem {...item} key={i} />
                                  ))}
                              </div>
                            )}
                          <ScrollBar orientation="horizontal" />
                        </ScrollArea>
                      </div>
                    </StyledTabsContent>
                  </StyledTabs>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* </Suspense> */}
      </div>
    </>
  );
};

export default Mens;
