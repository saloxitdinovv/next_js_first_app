'use client'
import { usePathname } from "next/navigation";
import "./globals.css";
import Link from "next/link";


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const pathname = usePathname()
    return (
        <html lang="en">
            <body>
                <header className="h-[80px] flex items-center justify-center">
                    <nav className="flex gap-10">
                        <Link href={'/'} className={`link ${pathname === '/' ? 'text-blue-500' : ''}`}>
                            Home
                        </Link>
                        <Link href={'/about'} className={`link ${pathname === '/about' ? 'text-blue-500' : ''}`}>
                            About
                        </Link>
                        <Link href={'/profile'} className={`link ${pathname === '/profile' ? 'text-blue-500' : ''}`}>
                            Profile
                        </Link>
                    </nav>
                </header>
                <main>
                    {children}
                </main>
            </body>
        </html>
    );
}
