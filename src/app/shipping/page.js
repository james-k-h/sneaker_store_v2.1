'use client';
import SectionHeaders from '../components/layout/header/SectionHeaders';
import { StyledSeparator } from '../registry/new-york/ui/StyledSeparator';
import { Link } from 'next/link';

const Shipping = () => {
  //  check for inspiration: https://ca.shop.runningroom.com/shipping-details
  return (
    <main className="flex min-h-screen flex-col  items-center">
      <div className="mt-16 mx-auto  py-4 w-1/2 ">
        <section className="text-center my-20 items-center  " id="about">
          <SectionHeaders
            subHeader="Information on our shipping policy"
            mainHeader="Shipping"
          />
          <StyledSeparator className="my-4 " />
          <div>
            <div className="max-w-2xl mx-auto text-black mt-4 flex flex-col gap-4">
              <p>
                Sneaker Store (
                <a
                  className="hover:text-color_1"
                  href="https://sneaker-store-v2.vercel.app/"
                >
                  https://sneaker-store-v2.vercel.app/
                </a>
                ) ships only to addresses within Canada.
              </p>
              <p>
                Sneaker Store opened on Thanksgiving Day 1990. Owner John Doe
                began selling shoes to the community and his neighbors out of a
                small rented shop at the corner of Bayview and Fleming St. in
                Leaside.{' '}
              </p>
              <p>
                Today, Toronto’s beloved sneaker boutique celebrates 24 years,
                with many more to come.
              </p>
            </div>
            <div className="py-10">
              <SectionHeaders
                // subHeader="Information on our shipping policy"
                mainHeader="Economy"
              />
              <StyledSeparator className="my-4 " />
              <p>
                All complete in-stock orders where the credit card is
                successfully authorized before noon Eastern Time on a business
                day (Tuesday to Friday) may be shipped the same day. All other
                shipments will be sent the next business day. Any orders placed
                after 12:00 PM eastern time on Friday will not be picked up by
                the courier service until Tuesday. Please note: For items that
                are available online only, additional processing time is
                required.
                <br />
                Free economy ground shipping is now available for Northwest
                Territories, Nunavut & Yukon.
                <br />
                <br />
                <b>SHIPPING ALERT</b>: PO Boxes and rural routes may expect
                longer than normal shipping times due to delays at Canada Post.
              </p>
            </div>
            <div className="py-10">
              <SectionHeaders
                // subHeader="Information on our shipping policy"
                mainHeader="Same Day Delivery"
              />
              <StyledSeparator className="my-4 " />
              <p>
                In partnership with Fast Delivery, we aim to have your purchase
                in your hands as fast as possible. This service is currently
                only available in Toronto. Orders placed before 12:30 pm local
                time Tuesday – Saturday qualify for delivery before 9 pm local
                the same day.
              </p>
            </div>
            <div className="py-10 display-inline">
              <SectionHeaders
                // subHeader="Information on our shipping policy"
                mainHeader="In-store Pick-up"
              />
              <StyledSeparator className="my-4 " />
              <p className="font-semibold">How it works: </p> <br />
              <div className="text-center items-center">
                <ol style={{ listStyleType: 'decimal' }}>
                  <li>Place your online order and choose In-store Pick-Up.</li>
                  <li>
                    Wait for an email confirmation. The store will contact you
                    to arrange a pickup time.
                  </li>
                  <li>
                    Upon arrival, have your confirmation ready and Photo ID.
                  </li>
                  <li>
                    Please understand In-store Pick-up may not necessarily be
                    quicker than other shipping options. You should still expect
                    7 – 12 Business Days as products may be shipping from other
                    locations to your pickup store locations.
                  </li>
                  <li>
                    {' '}
                    Orders must be picked up within 30 days of placing your
                    order.
                  </li>
                </ol>{' '}
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};
export default Shipping;
