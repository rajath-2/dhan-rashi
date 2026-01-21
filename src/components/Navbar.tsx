"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./navbar.module.css";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className={styles.navbar}>
      <Link href="/" className={styles.logo}>
        <span>₹</span> Dhan-Raashi
      </Link>
      
      <div className={styles.navLinks}>
        <Link href="/" className={`${styles.link} ${pathname === '/' ? styles.active : ''}`}>
          Home
        </Link>
        <Link href="/dashboard" className={`${styles.link} ${pathname === '/dashboard' ? styles.active : ''}`}>
           Dashboard
        </Link>
        <Link href="/feedback" className={`${styles.link} ${pathname === '/feedback' ? styles.active : ''}`}>
           Feedback
        </Link>
        
        {pathname !== '/dashboard' && (
             <Link href="/dashboard" className={styles.cta}>
                Try Demo
            </Link>
        )}
      </div>
    </nav>
  );
}
