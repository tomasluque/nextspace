import "./globals.css";
import NavMenu from "@/app/NavMenu";
import AuthProvider from "./AuthProvider";
import { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import Link from "next/link";

const myFont = Open_Sans({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
    title: "NextSpace",
    description: "Social Media - Not For Production",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <AuthProvider>
            <html lang="en">
                <body className={myFont.className}>
                    <div className="container">
                        <NavMenu />
                        <main>{children}</main>
                        <footer>
                            <p>Created by Tomas L. G. to explore the Next.js 16 Routeur</p>
                            <ul>
                                <li>
                                    <Link href={"/about"}>About</Link>
                                </li>{" "}
                                |
                                <li>
                                    <Link target="_blank" href={"https://github.com/tomasluque/nextspace"}>
                                        Source Code
                                    </Link>
                                </li>{" "}
                                |
                                <li>
                                    <Link href={"https://nextjs.org"}>NextJS Docs</Link>
                                </li>
                            </ul>
                        </footer>
                    </div>
                </body>
            </html>
        </AuthProvider>
    );
}
