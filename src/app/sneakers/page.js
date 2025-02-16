'use client';
import { ScrollArea, ScrollBar } from '../registry/new-york/ui/scroll-area';
import { StyledSeparator } from '../registry/new-york/ui/StyledSeparator';
import {
  StyledTabs,
  StyledTabsContent,
  StyledTabsList,
  StyledTabsTrigger,
} from '../registry/new-york/ui/StyledTabs';
import { SneakerNewArrivals } from './../components/scaffolding/Placeholder';
import { PopularSneakers } from './../components/scaffolding/Artwork';
import { popularShoes } from '../data/sneakers';
import { Sidebar } from './../components/scaffolding/Sidebar';
import { Suspense, useEffect, useState } from 'react';
import Loading from '../components/Loading';

// export const metadata = {
//   title: 'Sneaker Store',
//   description: 'Get the latest in footwear',
// };

export default function Sneakers() {
  const [sneakerItems, setSneakerItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  // const [recentArrival, setRecentArrival] = useState([]);

  useEffect(() => {
    fetch('/api/sneaker-items').then((res) => {
      res.json().then((sneakerItems) => setSneakerItems(sneakerItems));
    });
    setIsLoading(true);
    // sneakerItems.filter((item) => item.newArrival === true);
    // setRecentArrival(sneakerItems.filter((item) => item.newArrival === true));
  }, []);

  const recentArrival = sneakerItems.filter((item) => item.newArrival === true);

  function testingClick() {
    console.log(recentArrival);
    console.log(isLoading);
  }
  return (
    <>
      <Suspense>
        <div>
          {/* <Menu /> */}
          <div className="border-t">
            <div className="bg-background mt-16">
              <div className="grid lg:grid-cols-5">
                <Sidebar className="hidden lg:block mt-16 text-color_4" />
                <div className="col-span-3 lg:col-span-4 lg:border-l mt-16 ">
                  <div className="h-full px-4 py-6 lg:px-8">
                    <StyledTabs
                      defaultValue="sneakers"
                      className="h-full space-y-6 text-color_4"
                    >
                      <div className="space-between flex items-center ">
                        <StyledTabsList className="text-color_1">
                          <StyledTabsTrigger
                            value="sneakers"
                            className="relative text-color_1"
                          >
                            Top Sellers
                          </StyledTabsTrigger>
                          <StyledTabsTrigger
                            value="new_arrivals"
                            className="relative text-color_1"
                          >
                            New Arrival
                          </StyledTabsTrigger>
                        </StyledTabsList>
                      </div>
                      <StyledTabsContent
                        value="sneakers"
                        className="border-none p-0 outline-none"
                      >
                        <div className="flex items-center justify-between">
                          <div className="space-y-1">
                            <h2 className="text-2xl font-semibold tracking-tight text-color_4">
                              Top Sellers
                            </h2>
                            <p className="text-sm text-muted-foreground">
                              Our top sellers. Updated daily.
                            </p>
                          </div>
                        </div>

                        {/* top section mapping */}
                        {/* <button onClick={testingClick}>test</button> */}
                        <StyledSeparator className="my-4" />
                        <div className="relative">
                          <ScrollArea>
                            <div className="flex gap-4 pb-4 ">
                              {isLoading === false ? (
                                <Loading />
                              ) : (
                                sneakerItems
                                  .filter((item) => item.topSeller === true)
                                  .map((item) => (
                                    <PopularSneakers
                                      key={item.name}
                                      sneaker={item}
                                      className="
                                      hover:cursor-pointer
                                      w-full h-full object-fill object-center group-hover:scale-105 transition-all ease duration-300 col-span-1"
                                      // sizes="(max-width: 640px) 100vw,(max-width: 1024px) 50vw, 33vw"
                                      // aspectRatio="portrait"
                                      width={item.imageWidth}
                                      height={item.imageHeight}
                                    />
                                  ))
                              )}
                            </div>
                            <ScrollBar orientation="horizontal" />
                          </ScrollArea>
                        </div>
                        <div className="mt-6 space-y-1">
                          <h2 className="text-2xl font-semibold tracking-tight">
                            Popular Shoes
                          </h2>
                          <p className="text-sm text-muted-foreground">
                            Other top sellers. Updated daily.
                          </p>
                        </div>

                        {/* bottom section mapping*/}
                        <StyledSeparator className="my-4" />
                        <div className="relative">
                          <ScrollArea>
                            <div className=" gap-2 pb-4 grid grid-cols-2 xl:grid-cols-6 md:grid-cols-4">
                              {isLoading === false ? (
                                <Loading />
                              ) : (
                                sneakerItems
                                  .filter((item) => item.popular === true)
                                  .map((sneaker) => (
                                    <PopularSneakers
                                      key={sneaker.name}
                                      sneaker={sneaker}
                                      className=" hover:cursor-pointer w-[150px] grid-cols-1"
                                      aspectRatio="square"
                                      width={150}
                                      height={150}
                                    />
                                  ))
                              )}
                            </div>
                            <ScrollBar orientation="horizontal" />
                          </ScrollArea>
                        </div>
                      </StyledTabsContent>
                      {/* to-do */}
                      <StyledTabsContent
                        value="new_arrivals"
                        className="h-full flex-col border-none p-0 data-[state=active]:flex "
                      >
                        <div className="flex items-center justify-between">
                          <div className="space-y-1">
                            <h2 className="text-2xl font-semibold tracking-tight ">
                              New Arrival
                            </h2>
                            <p className="text-sm text-muted-foreground">
                              Our most recent addition.
                            </p>
                          </div>
                        </div>
                        <StyledSeparator className="my-4" />
                        <SneakerNewArrivals recentArrival={recentArrival} />
                      </StyledTabsContent>
                    </StyledTabs>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Suspense>
    </>
  );
}
