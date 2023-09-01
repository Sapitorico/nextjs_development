import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="bg-slate-400 mb-4 justify-between items-center flex px-20 p-3 font-bold text-black">
      <Link href="/">Home</Link>
      <ul>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}
