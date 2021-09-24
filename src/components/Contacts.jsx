import Link from 'next/link';

const Contacts = () => {
  return (
    <footer>
      <ul>
        <li>
          <Link href='https://github.com/crabn3bula'>
            <a>GitHub</a>
          </Link>
          <Link href='https://github.com/crabn3bula'>
            <a>LinkedIn</a>
          </Link>
          <Link href='mailto:npozdeev1992@gmail.com'>
            <a>Email</a>
          </Link>
        </li>
      </ul>
    </footer>
  )
};

export default Contacts;