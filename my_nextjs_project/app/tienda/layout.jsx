export const metadata = {
  title: "tienda de sapo",
};

import Link from "next/link";

export default function TiendLayout({ children }) {
  return (
    <>
      <nav>
        <h3>Seccion Tienda</h3>
        <ul>
          <li>
            <Link href="/tienda/catalogo">Catalogo</Link>
          </li>
        </ul>
      </nav>
      {children}
    </>
  );
}
