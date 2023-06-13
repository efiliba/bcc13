import Image from 'next/image';

import { NavBar } from '@/components';

export const Footer = () =>
  <footer className="bg-black">
    <div className="max-w-screen-xl mx-auto p-3 grid grid-areas-[menu,logo,contact,copyright] md:grid-areas-[menu_logo_contact,._copyright_.] gap-4 justify-center md:justify-between text-center">
      <div className="grid-in-[menu]">
        <div className="text-primary font-bold">Menu</div>
        <NavBar className="text-text" />
      </div>
      <Image
        className="grid-in-[logo] self-center justify-self-center"
        src="/images/best-choice-care-dark.png"
        alt="Best Choice Care logo"
        width={240}
        height={100}
      />
      <div className="grid-in-[contact]">
        <div className="text-primary font-bold">Contact Us</div>
        <div className="text-text footer-contact-us__address">
          <p className="mt-4">
            105 / 845 Pacific Highway<br />
            Chatswood<br />
            NSW 2067
          </p>
          <p className="mt-4">1300 711 380</p>
          <p className="mt-4">admin@bestchoicecare.com.au</p>
        </div>
      </div>
      <div className="grid-in-[copyright] text-primary">Copyright© 2023 Best Choice Care</div>
    </div>
  </footer>;
