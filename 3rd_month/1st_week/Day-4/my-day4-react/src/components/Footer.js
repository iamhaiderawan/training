function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <p>© {currentYear} Student Management System</p>
      <p>Built with React — Month 3 - Week 1 - Day 4</p>
    </footer>
  );
}

export default Footer;
