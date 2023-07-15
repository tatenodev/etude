import Link from "next/link";
import { nav, navItem, navList } from "./menu.css";

export function Menu() {
  return (
    <nav className={nav}>
      <ul className={navList}>
        <li className={navItem}>
          <Link href="/talk">トーク</Link>
        </li>
        <li className={navItem}>
          <Link href="/explorer">過去のトーク</Link>
        </li>
        <li className={navItem}>
          <Link href="/insights">実績</Link>
        </li>
        <li className={navItem}>
          <Link href="/settings">設定</Link>
        </li>
      </ul>
    </nav>
  );
}
