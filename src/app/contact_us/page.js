import SectionHeaders from '../components/layout/header/SectionHeaders';
import { StyledSeparator } from '../registry/new-york/ui/StyledSeparator';

const ContactUs = () => {
  // check for inspiration: https://ca.shop.runningroom.com/en_ca/contact-us/?srsltid=AfmBOoqchhzgcVMb6RUq0nBiH113aPlEt3HwjIZwz7aL03u7KSbliH08

  return (
    <main className="flex min-h-screen flex-col">
      <div className="mt-16 mx-auto  py-4 w-1/2">
        <section className="text-center my-20 " id="about">
          <SectionHeaders
            subHeader="How to get in touch"
            mainHeader="Contact Us"
          />
          <StyledSeparator className="my-4" />
          <div className="max-w-2xl mx-auto text-black mt-4 flex flex-col gap-4">
            <p>
              <b>Customer Service is available</b>: Monday - Saturday: 8:00 a.m.
              - 4:30 p.m. MST
              <br />
              <b>Local Phone Number</b>: +46 738 123 123
              <br /> <b>Email</b>: customerservice@sneakerstore.zendesk.com{' '}
              <br />
              <b>Address</b>: 57 Bayview Avenue, M2R 4X3
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};
export default ContactUs;
