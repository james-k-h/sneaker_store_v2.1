import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="my-2 w-full h-screen flex justify-center font-mr ">
      <div className="relative flex flex-col items-center justify-center">
        <h1
          className={`inline-block text-color_2 dark:text-light
      text-6xl font-bold w-full capitalize xl:text-8xl text-center`}
        >
          404
        </h1>
        <h2
          className={`inline-block text-color_2 dark:text-light
      text-5xl font-bold w-full capitalize xl:text-6xl text-center mt-4 tracking-wide leading-snug`}
        >
          Page Not Found
        </h2>
        <Link
          href="/"
          className="self-center mt-8 inline-block rounded-lg border-2 border-solid bg-white px-4 py-2
        font-semibold text-color_2 hover:border-color_4 hover:bg-color_4 hover:text-color_1
        dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light
        "
        >
          Go To Home
        </Link>
      </div>
    </main>
  );
}
