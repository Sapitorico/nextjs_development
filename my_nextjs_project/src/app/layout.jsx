import "./globals.css";
import NavBar from "@/components/NavBar";
import { Roboto } from "next/font/google";
export const metadata = {
  title: "My sapo app",
  description: "sapenerico",
};

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html>
      <body className={roboto.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
