import { Typography } from '@mui/material';

import { NavBar } from '@/components';

import './footer.scss';

export const Footer = () =>
  <footer>
    <div className="footer">
      <div className="footer-menu">
        <Typography className="footer-menu__header" variant="h4">Menu</Typography>
        <NavBar />
      </div>
      <img src="/images/best-choice-care-dark.png" alt="Best Choice Care logo" />
      <div className="footer-contact-us">
        <Typography className="footer-contact-us__header" variant="h4">Contact Us</Typography>
        <div className="footer-contact-us__address">
          <p>
            105 / 845 Pacific Highway<br />
            Chatswood<br />
            NSW 2067
          </p>
          <p>1300 711 380</p>
          <p>admin@bestchoicecare.com.au</p>
        </div>
      </div>
      <Typography className="footer-copyright" variant="body2">Copyright© 2022 Best Choice Care</Typography>
    </div>
  </footer>;
