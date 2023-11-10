import Navbar from './Navbar';

export default function Header() {
  return (
    <header className='p-4 flex justify-between items-center'>
      <a
        href='/'
        className='font-bold font-bungee text-4xl text-white'
        aria-hidden={true}
      >
        URLSh...
      </a>
      <Navbar />
    </header>
  );
}
