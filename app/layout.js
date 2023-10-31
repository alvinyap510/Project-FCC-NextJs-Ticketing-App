import Nav from "./(components)/Nav";
import "./globals.css";
import { Inter } from "next/font/google";

/* Fontawesome provides svg icons for web design */
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false;

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ticketing App",
  description:
    "A full-stack project creating a ticketing app with NextJs. Done by alyap <linktr.ee/alvinyap>",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
