import { useState } from 'react';
import Link from "next/link";
import styles from "../styles/Layout.module.css";

export default function Layout({children}){
  const [isOpen, setIsOpen ]= useState(false);
  const openMenu = () => setIsOpen(!isOpen);
    return<>
    
    <header className={styles.header}>
        <nav className={styles.navbar}>
            <a className={styles.navlogo}>[InstiLogo]</a>
            <a className={styles.navlogo}>[DeptLogo]</a>
          <ul className={isOpen === false ? styles.navmenu : styles.navmenu + ' ' +styles.active}>
            <li className={styles.navitem}>
              <Link href="/">
                <a className={styles.navlink}>Home</a>
              </Link>
            </li>
            <li className={styles.navitem}>
              <Link href="about">
                <a className={styles.navlink}>About</a>
              </Link>
            </li>
            <li className={styles.navitem}>
              <Link href="/blogs">
                <a className={styles.navlink}>Blogs</a>
                </Link>
            </li>
            <li className={styles.navitem}>
              <Link href="/gallery">
                <a className={styles.navlink}>Gallery</a>
                </Link>
            </li>
            <li className={styles.navitem}>
              <Link href="/portfolios">
                <a className={styles.navlink}>Portfolios</a>
                </Link>
            </li>
            <li className={styles.navitem}>
              <Link href="/login">
                <a className={styles.navlink}>Login</a>
                </Link>
            </li>
          </ul>
          <button className={isOpen===false ? styles.hamburger : styles.hamburger + ' ' + styles.active} onClick={openMenu}>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
            < span className={styles.bar}></span>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
          </button>
        </nav>
      </header>
  {children}
  </>
}