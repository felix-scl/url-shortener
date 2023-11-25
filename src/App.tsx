import { useRef } from 'react';
import Header from './components/Header';
import MyURLs from './components/MyURLs';
import ShortenURLForm from './components/ShortenURLForm';

export default function App() {
  const inputRef = useRef<HTMLInputElement>(null);

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <>
      <Header />
      <div className='mt-6'>
        <h1 className='text-center text-3xl text-white font-bungee'>
          Yet another URL Shortener...
        </h1>
      </div>
      <section className='mx-4 mt-10 space-y-10'>
        <ShortenURLForm inputRef={inputRef} />
        <MyURLs focusInput={focusInput} />
      </section>
      {/* FOOTER */}
    </>
  );
}
