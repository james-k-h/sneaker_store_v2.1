import SectionHeaders from '../components/layout/header/SectionHeaders';
import { StyledSeparator } from '../registry/new-york/ui/StyledSeparator';

const About = () => {
  // check for inspiration: https://ca.shop.runningroom.com/en_ca/our-story

  return (
    <main className="flex min-h-screen flex-col">
      <div className="mt-16 mx-auto  py-4 w-1/2 ">
        <section className="text-center my-20 " id="about">
          <SectionHeaders subHeader="Our Story" mainHeader="About Us" />
          <StyledSeparator className="my-4" />
          <div>
            <div className="max-w-2xl mx-auto text-black mt-4 flex flex-col gap-4">
              <p>Serving the neighbourhood since 1990.</p>
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
          </div>
        </section>
      </div>
    </main>
  );
};
export default About;
