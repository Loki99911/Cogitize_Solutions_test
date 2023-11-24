'use client';
import Link from 'next/link';
import React from 'react';
// import variables from '../../styles/variables.module.scss';
import '../../styles/navBar.scss';
import { usePathname } from 'next/navigation';

export default function NavBar() {
  const pages = ['hierarchy', 'positions', 'personList', 'equipment'];
  const activePage = usePathname();
  console.log(activePage);
  
  return (
    <nav>
      <ul className="nav-list">
        {pages.map((pageName) => (
          <li
            key={pageName}
            className={pageName === activePage ? 'nav-item active' : 'nav-item'}
          >
            <Link href={`/${pageName}`}>
              <span className="nav-text">{pageName}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
