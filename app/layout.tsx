import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import type { ReactNode } from "react";


export default function RootLayout({ children }: { children: ReactNode }) {
return (
<html lang="en">
<body className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
<Navbar />
<main className="flex-1 w-full max-w-6xl mx-auto p-4">{children}</main>
<Footer />
</body>
</html>
);
}