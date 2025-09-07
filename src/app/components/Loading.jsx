import { PuffLoader } from 'react-spinners';

const Loader = () => {
  return (
    <div
      className="
      h-[70vh]
      flex
      flex-col
      justify-center
      items-center
    "
    >
      <PuffLoader size={100} color="black" />
      <p>Loading...</p>
    </div>
  );
};

const Loading = () => {
  return <Loader />;
};
export default Loading;
