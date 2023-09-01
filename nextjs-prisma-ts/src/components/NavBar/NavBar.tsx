import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="flex items-center justify-between py-4">
      <Link href="/">
        <h3 className="text-2xl font-bold">NextCrud</h3>
      </Link>
      <ul>
        <li>
          <Link href="/new" className="text-slate-200 hover:text-slate-400">
            Nueva Tarea
          </Link>
        </li>
      </ul>
    </nav>
  );
}
