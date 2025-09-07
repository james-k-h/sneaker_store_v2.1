import Link from 'next/link';
import { StyledButton } from '../../registry/new-york/ui/StyledButton';

const SidebarOptions = ({ title }) => {
  let subTitle = title.toUpperCase();
  return (
    <div className="px-3 py-2">
      <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
        {subTitle}
      </h2>
      <div className="space-y-1">
        {/* <Button variant="ghost" className="w-full justify-start text-color_2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-2 h-4 w-4"
          >
            <rect width="7" height="7" x="3" y="3" rx="1" />
            <rect width="7" height="7" x="14" y="3" rx="1" />
            <rect width="7" height="7" x="14" y="14" rx="1" />
            <rect width="7" height="7" x="3" y="14" rx="1" />
          </svg>
          <Link href={`/${title}#sale?limit=2`}>Sale</Link>
        </Button> */}
        <Link href={`/${title}?limit=3`}>
          <StyledButton
            variant="ghost"
            className="w-full justify-start text-color_2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2 h-4 w-4"
            >
              <rect width="7" height="7" x="3" y="3" rx="1" />
              <rect width="7" height="7" x="14" y="3" rx="1" />
              <rect width="7" height="7" x="14" y="14" rx="1" />
              <rect width="7" height="7" x="3" y="14" rx="1" />
            </svg>
            <Link href={`/${title}?limit=2`}>Collection</Link>
          </StyledButton>
        </Link>
      </div>
    </div>
  );
};
export default SidebarOptions;
