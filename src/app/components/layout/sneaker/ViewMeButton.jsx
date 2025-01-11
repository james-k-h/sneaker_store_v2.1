import Link from 'next/link';

const ViewMeButton = ({ link, item }) => {
  return (
    <Link
      href={link + item._id}
      className="bg-secondary text-color_3 rounded-full  px-4 py-2 w-3/5 hover:italic "
    >
      View
    </Link>
  );
};
export default ViewMeButton;
