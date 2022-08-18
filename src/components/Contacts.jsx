import ContactLink from './ContactLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const LINKS = {
  GITHUB: 'https://github.com/nikitapozdeev',
  LINKEDIN: 'https://www.linkedin.com/in/nikita-pozdeev-85b18620a/',
  EMAIL: 'mailto:nikita.pozdeev.dev@gmail.com',
}

const Contacts = () => {
  return (
    <footer className="container__footer">
      <nav className="navbar__links">
        <ContactLink path={LINKS.GITHUB}>
          <FontAwesomeIcon icon={faGithub} size='2x'/>
        </ContactLink>
        <ContactLink path={LINKS.LINKEDIN}>
          <FontAwesomeIcon icon={faLinkedin} size='2x'/>
        </ContactLink>
        <ContactLink path={LINKS.EMAIL}>
          <FontAwesomeIcon icon={faEnvelope} size='2x'/>
        </ContactLink>
      </nav>
    </footer>
  )
};

export default Contacts;