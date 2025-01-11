'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Tabs = ({ isAdmin }) => {
  const path = usePathname();
  return (
    <div className="flex mx-auto gap-4 tabs justify-center flex-wrap text-color_3">
      <Link href="/profile" className={path === '/profile' ? 'active' : ''}>
        Profile
      </Link>
      {isAdmin && (
        <>
          <Link
            href="/categories"
            className={path === '/categories' ? 'active' : ''}
          >
            Categories
          </Link>
          <Link
            href="/sneaker-items"
            className={path.includes('sneaker-items') ? 'active' : ''}
          >
            Add/Edit Sneakers
          </Link>
          <Link
            href="/users"
            className={path.includes('/users') ? 'active' : ''}
          >
            Users
          </Link>
        </>
      )}
      <Link href="/orders" className={path === '/orders' ? 'active' : ''}>
        Orders
      </Link>
    </div>
  );
};
export default Tabs;
