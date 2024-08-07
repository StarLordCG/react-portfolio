import { useState } from 'react';

import styles from './Navbar.module.css';
import { getImageUrl } from '../../utils';

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
        <div className={styles.menu}>
            <img 
                className={styles.menuBtn} 
                src={menuOpen ? getImageUrl('nav/closeMenu.svg') : getImageUrl('nav/openMenu.svg')} 
                onClick={() => setMenuOpen(!menuOpen)}
                alt="menu-button"
            />
            <ul 
                className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
                onClick={() => setMenuOpen(false)}
            >
                <li>
                    <a href="#home">Home</a>
                </li>
                <li>
                    <a href="#showreel">ShowReel</a>
                </li>
                <li>
                    <a href="#projects">Projects</a>
                </li>
                <li>
                    <a href="#experience">Experience</a>
                </li>
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </div>
    </nav>
  )
}
