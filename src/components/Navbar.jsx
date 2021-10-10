import Link from 'next/link';

const links = [
  {
    path: '/about',
    text: 'About'
  },
  {
    path: '/projects',
    text: 'Projects'
  }
]

const Navbar = () => {
  return (
    <nav>
      <ul className="navbar__links">
        {links.map(({ path, text }) => (
          <li className="navbar__link">
            <Link href={path}>
              <a>{text}</a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar;