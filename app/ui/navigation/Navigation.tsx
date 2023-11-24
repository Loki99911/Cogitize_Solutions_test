import Link from 'next/link';
import React from 'react';

export default function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/hierarchy">
            <span>hierarchy</span>
          </Link>
        </li>
        <li>
          <Link href="/positions">
            <span>Positions</span>
          </Link>
        </li>
        <li>
          <Link href="/personList">
            <span>List of person</span>
          </Link>
        </li>
        <li>
          <Link href="/equipment">
            <span>Equipment</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
