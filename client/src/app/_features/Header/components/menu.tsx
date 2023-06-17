import Link from "next/link";
import style from "./menu.module.scss";

export function Menu() {
  return (
    <nav className={style.nav}>
      <ul className={style.navList}>
        <li className={style.navItem}>
          <Link href="/talk">トーク</Link>
        </li>
        <li className={style.navItem}>
          <Link href="/explorer">過去のトーク</Link>
        </li>
        <li className={style.navItem}>
          <Link href="/insights">実績</Link>
        </li>
        <li className={style.navItem}>
          <Link href="/settings">設定</Link>
        </li>
      </ul>
    </nav>
  );
}
