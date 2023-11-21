import Header from './components/Header';
import MyURLs from './components/MyURLs';
import ShortenURLForm from './components/ShortenURLForm';

export default function App() {
  return (
    <>
      <Header />
      <section className='mx-4 mt-10 space-y-10'>
        <ShortenURLForm />
        <MyURLs />
      </section>
      {/* FOOTER */}
    </>
  );
}
