import { Container } from "react-bootstrap";

import Link from "next/link";
import stylesNavbar from "@/styles/Navbar.module.css";
import { useSelector } from "react-redux";

function Navbar() {
  const { cart } = useSelector((state) => state);

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
                <Link href="/products">products</Link>
                <Link href="/addNewProduct">AddNewProduct</Link>
                <Link href="/sin_in">Sin in</Link>
                <Link href="/cart">Cart - {cart.length}</Link>
              </li>
            </ul>
          </div>
        </Container>
      </nav>
    </>
  );
}

export default Navbar;
