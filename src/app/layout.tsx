import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import { Providers } from "@/providers/Providers";
import Footer from "@/components/Footer";
import { CartProvider } from "@/context/CartContext";
import Cart from "@/components/Cart";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "900"],
});

export const metadata: Metadata = {
  title: "Hexashop - Home",
  description: `Discover a world of endless shopping possibilities at our online
          store. browse, choose amd order your favorite products from the
          comfort of your home`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={montserrat.className}>
        <Providers>
          <CartProvider>
            <Cart />
            <div className="container px-5 mx-auto flex flex-col justify-between min-h-screen dark:text-light text-dark">
              <Nav />
              {children}
              <Footer />
            </div>
          </CartProvider>
        </Providers>
      </body>
    </html>
  );
}
