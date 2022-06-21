import Link from 'next/link';
import React from 'react';

const ContactLink = ({ path, children }) => {
  return (
    <Link href={path}>
      <a
        target="_blank"
        rel="noreferrer"
        className='contact-link'
      >
        {children}
      </a>
    </Link>
  )
}

export default ContactLink;