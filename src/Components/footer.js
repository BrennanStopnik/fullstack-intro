const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className='footer'>
      <p>Copyright © {currentYear} Stopnik Inc.</p>
    </footer>
  );
};

export default Footer;