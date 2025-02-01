'use client';

import Link from 'next/link';
import Tabs from '../components/layout/header/Tabs';
import { useProfile } from '../hooks/GetProfile';
import Right from '../components/icons/Right';
import { useEffect, useState } from 'react';
import Image from 'next/image';

const SneakerItemsPage = () => {
  const [SneakerItems, setSneakerItems] = useState([]);
  const { loading, data } = useProfile();
  useEffect(() => {
    fetch('/api/sneaker-items').then((res) => {
      res.json().then((SneakerItems) => {
        setSneakerItems(SneakerItems);
      });
    });
  }, []);

  if (loading) {
    return 'Loading user information.';
  }

  if (!data.admin) {
    return 'Not an Administrator';
  }

  return (
    <section className="flex min-h-screen flex-col  py-32">
      <Tabs isAdmin={true} />
      <div className=" max-w-md flex mx-auto py-8 ">
        <Link className="button flex " href="/sneaker-items/new">
          <span className="text-color_2">Create a new sneaker</span>
          <Right />
        </Link>
      </div>
      <div>
        <div className="container mx-auto px-12 py-8">
          <h2 className="text-lg text-color_2  mb-2 font-semibold">
            Edit a sneaker:{' '}
          </h2>

          <div className="grid grid-cols-5 gap-2 justify-center ">
            {SneakerItems?.length > 0 &&
              SneakerItems.map((item) => (
                <Link
                  key={item.name}
                  href={'/sneaker-items/edit/' + item._id}
                  className="
                  grid-cols-1
  bg-lightBlack text-white rounded-lg p-4 hover:bg-white/50 hover:font-semibold  hover:text-color_1 lg:text-lg  text-sm"
                >
                  {/* <div className="relative "> */}
                  <Image
                    src={item.image}
                    alt={''}
                    // sizes="100vw"
                    style={{
                      width: '100%',
                      height: 'auto',
                    }}
                    width={300}
                    height={300}
                    className="mx-auto rounded-md"
                  />
                  {/* </div> */}
                  <div className="text-center">{item.name}</div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default SneakerItemsPage;
