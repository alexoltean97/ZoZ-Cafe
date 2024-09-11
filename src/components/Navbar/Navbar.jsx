import { h } from 'preact';
import { Link } from 'preact-router';

const Navbar = () => (
  <nav>
    <Link href="/">Home</Link>
    <Link href="/about">About</Link>
    <Link href="/contact">Contact</Link>
  </nav>
);

export default Navbar;