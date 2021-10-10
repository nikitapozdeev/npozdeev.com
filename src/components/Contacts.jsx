import Link from 'next/link';

const links = [
  {
    path: 'https://github.com/crabn3bula',
    text: 'GitHub'
  },
  {
    path: 'https://www.linkedin.com/in/nikita-pozdeev-85b18620a/',
    text: 'LinkedIn'
  },
  {
    path: 'mailto:npozdeev1992@gmail.com',
    text: 'Email'
  }
]
const Contacts = () => {
  return (
    <footer className="container__footer">
      <ul className="navbar__links">
        {links.map(({ path, text }) => (
          <li className="navbar__link">
            <Link href={path}>
              <a>{text}</a>
            </Link>
          </li>
        ))}
      </ul>
    </footer>
  )
};

export default Contacts;