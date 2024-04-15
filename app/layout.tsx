import type { Metadata } from "next";
import { catamaran, robotoMono } from "@/app/fonts";
import "./globals.css";
import { Toaster } from "@/components/Toaster";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "The Unit - Task Assignement",
    template: "%s | The Unit - Task Assignement",
  },
  description: "Task assignement for The Unit company.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${catamaran.variable} ${robotoMono.variable}`}>
      <body className="bg-zinc-200 flex flex-col h-screen">
        <header>
          <Header />
        </header>
        <main className="flex grow">{children}</main>
        <Toaster />
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
