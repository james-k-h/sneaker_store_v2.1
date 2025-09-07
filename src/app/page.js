import Hero from './components/layout/Hero';
import HomeMap from './components/layout/HomeMap';
import DoubleImage from './components/layout/home/DoubleImage';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="mt-24 mx-auto  py-4 w-full ">
        <Hero />
        <HomeMap />
        <DoubleImage />
      </div>
    </main>
  );
}
