import SectionHeaders from '../components/layout/header/SectionHeaders';

const About = () => {
  // check for inspiration: https://ca.shop.runningroom.com/en_ca/our-story

  return (
    <main className="flex min-h-screen flex-col">
      <div className="mt-16 mx-auto  py-4 w-full ">
        <section className="text-center my-20 " id="about">
          <SectionHeaders subHeader="Our Story" mainHeader="About Us" />
          <div className="max-w-2xl mx-auto text-black mt-4 flex flex-col gap-4">
            <p>Serving the neighbourhood since 1990.</p>
            <p>
              Bayview Eatery opened on Thanksgiving Day 1990. Chef / Owner John
              Doe began baking pies and selling them to restaurants and his
              neighbors out of a small kitchen at the corner of Bayview and
              Fleming St. in Leaside.{' '}
            </p>
            <p>
              Today, Toronto’s beloved restaurant celebrates 24 years of
              classic, made from scratch Canadian cooking.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};
export default About;
