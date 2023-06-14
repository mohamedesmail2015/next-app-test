import Link from "next/link";
import stylesNavbar from "@/styles/Navbar.module.css";

function Navbar() {
  return (
    <nav className={stylesNavbar.nav}>
      <div className={stylesNavbar.container + " container"}>
        <div className={stylesNavbar.logo}>
          <Link href="/">LOGO</Link>
        </div>
        <ul className={stylesNavbar.header}>
          <li>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/posts">posts</Link>
            <Link href="/products">products</Link>
            <Link href="/addNewProduct">AddNewProduct</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
