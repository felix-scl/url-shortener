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
      <section className='mx-4 mt-10 space-y-10'>
        <ShortenURLForm inputRef={inputRef} />
        <MyURLs focusInput={focusInput} />
      </section>
      {/* FOOTER */}
    </>
  );
}
