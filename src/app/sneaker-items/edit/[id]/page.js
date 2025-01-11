'use client';
import Left from '@/app/components/icons/Left';
import EditableImage from '@/app/components/layout/EditableImage';
import SneakerItemForm from '@/app/components/layout/SneakerItemForm';
import Tabs from '@/app/components/layout/header/Tabs';
import DeleteButton from '@/app/components/ui/DeleteButton';
import { useProfile } from '@/app/hooks/GetProfile';
import Link from 'next/link';
import { redirect, useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const EditSneakerItemPage = () => {
  const { id } = useParams();

  const [sneakerItem, setSneakerItem] = useState(null);
  const { loading, data } = useProfile();
  const [redirectToItems, setRedirectToItems] = useState(false);

  useEffect(() => {
    fetch('/api/sneaker-items').then((res) => {
      res.json().then((items) => {
        const item = items.find((i) => i._id === id);
        setSneakerItem(item);
      });
    });
  }, []);

  async function handleFormSubmit(ev, data) {
    ev.preventDefault();
    data = {
      ...data,
      _id: id,
    };
    const savingPromise = new Promise(async (resolve, reject) => {
      const response = await fetch('/api/sneaker-items', {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) return resolve();
      else reject();
    });

    await toast.promise(savingPromise, {
      loading: 'Saving...',
      success: 'Saved',
      error: 'Error',
    });

    setRedirectToItems(true);
  }

  async function handleDeleteClick() {
    const promise = new Promise(async (resolve, reject) => {
      const res = await fetch('/api/sneaker-items?_id=' + id, {
        method: 'DELETE',
      });

      if (res.ok) {
        resolve();
      } else {
        reject();
      }
    });

    await toast.promise(promise, {
      loading: 'Deleting...',
      success: 'Deleted',
      error: 'Error',
    });

    setRedirectToItems(true);
  }

  if (redirectToItems) {
    return redirect('/sneaker-items');
  }

  if (loading) {
    return 'Loading';
  }
  if (!data.admin) {
    return 'Not an Administrator';
  }
  return (
    <section className="min-h-screen py-32">
      <Tabs isAdmin={true} />
      <div className="max-w-lg mx-auto text-white py-8">
        <Link href="/sneaker-items" className="button bg-black">
          <Left />
          <span>Show All Sneakers</span>
        </Link>
      </div>
      <SneakerItemForm sneakerItem={sneakerItem} onSubmit={handleFormSubmit} />
      <div className="max-w-md mx-auto mt-2 ">
        <div className=" max-w-xs ml-auto pl-4">
          <DeleteButton
            label="Delete This Sneaker"
            onDelete={handleDeleteClick}
          ></DeleteButton>
        </div>
      </div>
    </section>
  );
};
export default EditSneakerItemPage;
