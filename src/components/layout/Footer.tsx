import { Container, NavBar } from '@/components';

export const Footer = () =>
  <footer>
    <Container
      className="bg-black p-3 md:p-3"
      contentClassName="grid grid-areas-[menu,logo,contact,copyright] md:grid-areas-[menu_logo_contact,._copyright_.] md:grid-cols-3 gap-4 text-center"
    >
      <div className="grid-in-[menu] md:justify-self-start">
        <div className="text-primary font-bold">Menu</div>
        <NavBar className="text-text mt-4" />
      </div>
      <div className="grid-in-[logo] self-center justify-self-center">
        <picture>
          <img
            src="/images/best-choice-care-dark.png"
            alt="Best Choice Care Logo"
            width={240}
            height={100}
            loading="lazy"
          />
        </picture>
        <div className="text-black">version: {process.env.NEXT_PUBLIC_VERSION}</div>
      </div>
      <div className="grid-in-[contact] md:justify-self-end">
        <div className="text-primary font-bold">Contact Us</div>
        <div className="text-text">
          <p className="mt-4 font-bold">Locations:</p>
          <p>Sydney, NSW</p>
          <p>Canberra, ACT</p>
          <p className="mt-4">1300 711 380</p>
          <p className="mt-4">admin@bestchoicecare.com.au</p>
        </div>
      </div>
      <div className="grid-in-[copyright] text-primary">Copyright© 2023 Best Choice Care</div>
    </Container>
  </footer>;
