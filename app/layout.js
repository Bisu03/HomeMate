import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import { Toaster } from "@/components/ui/sonner";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "House Mate",
  description: "Home Service Application",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>

          <div className=" mx-6 md:mx-16">
            <Header />
            <Toaster />
            {children}
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
