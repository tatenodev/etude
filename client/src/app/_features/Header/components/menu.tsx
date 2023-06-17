import Link from "next/link";

export function Menu() {
  return (
    <div>
      <ul>
        <li>
          <Link href="/talk">トーク</Link>
        </li>
        <li>
          <Link href="/explorer">過去のトーク</Link>
        </li>
        <li>
          <Link href="/insights">実績</Link>
        </li>
        <li>
          <Link href="/settings">設定</Link>
        </li>
      </ul>
    </div>
  );
}
