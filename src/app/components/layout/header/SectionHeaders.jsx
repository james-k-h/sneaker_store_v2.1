const SectionHeaders = ({ subHeader, mainHeader }) => {
  return (
    <>
      <h3 className="uppercase text-color_2 font-semibold leading-4">
        {subHeader}
      </h3>
      <h2 className="text-color_4 font-bold text-4xl italic"> {mainHeader}</h2>
    </>
  );
};
export default SectionHeaders;
