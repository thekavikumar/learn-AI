import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Loader2 } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Learn AI",
  description: "Learn AI and try it out in your browser with no setup.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} max-w-6xl mx-auto`}>
          <div className="py-3 border-b border-gray-400 sticky top-0 bg-opacity-20 backdrop-filter backdrop-blur-lg z-30 bg-white">
            <Navbar />
          </div>
          {children}

          <div className="fixed h-fit bottom-0 p-3 border-t bg-white border-gray-300 w-[70%]">
            <Footer />
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
