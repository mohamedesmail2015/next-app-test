import { Container } from "react-bootstrap";

import Link from "next/link";
import stylesNavbar from "@/styles/Navbar.module.css";

function Navbar() {
  return (
    <>
      <nav className={stylesNavbar.nav}>
        <Container>
          <div className={stylesNavbar.container}>
            <div className={stylesNavbar.logo}>
              <Link href="/">LOGO</Link>
            </div>
            <ul className={stylesNavbar.links}>
              <li>
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/posts">posts</Link>
                <Link href="/products">products</Link>
                <Link href="/addNewProduct">AddNewProduct</Link>
                <Link href="/sin_in">Sin in</Link>
              </li>
            </ul>
          </div>
        </Container>
      </nav>
    </>
  );
}

export default Navbar;
