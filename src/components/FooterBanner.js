import footerDoodle from '../assets/footerDoodle.webp';

const FooterBanner = () => {
  return (
    <img src={footerDoodle} alt="Footer Doodle" loading="lazy" decoding="async" className="w-full h-auto object-cover mt-10" />
  );
}

export default FooterBanner;