import Link from 'next/link';

const Navbar = () => {
  return (
    <header>
      <nav>
        <Link href='/about'>
          <a>About</a>
        </Link>
        <Link href='/projects'>
          <a>Projects</a>
        </Link>
      </nav>
    </header>
  )
};

export default Navbar;