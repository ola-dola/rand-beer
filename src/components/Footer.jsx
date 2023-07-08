import { socialLinks } from "./data";
import SocialLink from "./SocialLink";

const Footer = () => {
  return (
    <footer className='footer'>
      <ul className='footer-icons'>
        {socialLinks.map((link) => {
          return <SocialLink key={link.id} {...link} itemClass='footer-icon' />
        })}
      </ul>
      <p className='copyright'>
        copyright &copy; punk beers
        <span id='date'>{new Date().getFullYear()}</span>. all rights reserved
      </p>
    </footer>
  )
}
export default Footer
