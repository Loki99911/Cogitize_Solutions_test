'use client';
import Link from 'next/link';
import React from 'react';
import '../../styles/navBar.scss';
import { usePathname } from 'next/navigation';

interface PagesNameList {
  [key: string]: string;
}

export default function NavBar() {
  const pages = ['hierarchy', 'positions', 'personList', 'equipment'];
  const pagesNameList: PagesNameList = {
    hierarchy: 'Иерархия',
    positions: 'Должности',
    personList: 'Список персонала',
    equipment: 'Наборы экипировки',
  };
  const activePage = usePathname().slice(1);
  return (
    <nav className="nav">
      <ul className="nav-list">
        {pages.map((pageName, index) => (
          <li
            key={pageName}
            className={pageName === activePage ? 'nav-item active' : 'nav-item'}
            style={{ left: index * -12 + 'px' }}
          >
            <Link href={`/${pageName}`}>
              <span
                className={
                  pageName === activePage ? 'nav-text active' : 'nav-text'
                }
              >
                {pagesNameList[pageName]}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
