'use client';
import { useSession } from 'next-auth/react';

import { redirect } from 'next/navigation';
import { useEffect, useState } from 'react';
import InfoBox from '../components/layout/InfoBox';
import toast from 'react-hot-toast';
import Error from 'next/error';

import Tabs from '../components/layout/header/Tabs';

import UserForm from '../components/layout/header/UserForm';

const ProfilePage = () => {
  const session = useSession();

  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);

  const [profileFetched, setProfileFetched] = useState(false);

  const { status } = session;

  useEffect(() => {
    if (status === 'authenticated') {
      fetch('/api/profile').then((response) => {
        response.json().then((data) => {
          setUser(data);
          setIsAdmin(data.admin);
          setProfileFetched(true);
        });
      });
    }
  }, [session, status]);

  async function handleChange(ev, data) {
    ev.preventDefault();

    const savingPromise = new Promise(async (resolve, reject) => {
      const response = await fetch('/api/profile', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        resolve();
      } else reject();
    });
    await toast.promise(savingPromise, {
      loading: 'Saving...',
      success: 'Profile Saved',
      error: 'Error',
    });
  }

  if (status === 'loading' || !profileFetched) {
    return 'Loading...';
  }

  if (status === 'unauthenticated') {
    return redirect('/login');
  }

  return (
    <section className="mt-8 py-32 h-screen">
      <Tabs isAdmin={isAdmin} />

      <div
        className="max-w-4xl  mx-auto border border-color_2 mt-4 
  w-full
      "
      >
        <UserForm user={user} onSave={handleChange} />
      </div>
    </section>
  );
};
export default ProfilePage;
