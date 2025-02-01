'use client';
import Left from '@/app/components/icons/Left';
import Tabs from '@/app/components/layout/header/Tabs';
import SneakerItemForm from '@/app/components/layout/SneakerItemForm';
import { useProfile } from '@/app/hooks/GetProfile';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { useState } from 'react';
import toast from 'react-hot-toast';

const NewSneakerItemPage = () => {
  const { loading, data } = useProfile();
  const [redirectToItems, setRedirectToItems] = useState(false);

  async function handleFormSubmit(ev, data) {
    ev.preventDefault();
    const savingPromise = new Promise(async (resolve, reject) => {
      const response = await fetch('/api/sneaker-items', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.ok) resolve();
      else reject();
    });

    await toast.promise(savingPromise, {
      loading: 'Saving your shoes',
      success: 'Saved',
      error: 'Error',
    });

    setRedirectToItems(true);
  }

  if (redirectToItems) {
    return redirect('/sneaker-items');
  }

  if (loading) {
    return 'Loading user info...';
  }

  if (!data.admin) {
    return 'Not an admin.';
  }
  return (
    <section className="mt-8 min-h-screen py-32">
      <Tabs isAdmin={true} />
      <div className="max-w-lg mx-auto py-8 text-white">
        <Link href="/sneaker-items" className="button bg-black">
          <Left />
          <span>Show All Sneakers</span>
        </Link>
      </div>
      <SneakerItemForm sneakerItem={null} onSubmit={handleFormSubmit} />
    </section>
  );
};
export default NewSneakerItemPage;
